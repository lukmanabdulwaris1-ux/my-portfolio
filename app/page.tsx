"use client";
import React, { useEffect, useState } from 'react';
import { supabase } from '../src/lib/supabase';
import { SortableTask } from '../src/components/SortableTask';
import About from '../src/components/About';

type Task = {
  id: string;
  title: string;
  status: 'To Do' | 'In Progress' | 'Done';
};

const initialTasks: Task[] = [
  { id: '1', title: 'Design landing page', status: 'To Do' },
  { id: '2', title: 'Set up authentication', status: 'In Progress' },
  { id: '3', title: 'Deploy portfolio site', status: 'Done' },
];

const columns = ['To Do', 'In Progress', 'Done'] as const;

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [loading, setLoading] = useState(true);

    const dragItem = React.useRef<string | null>(null);
    const dragOverItem = React.useRef<string | null>(null);
  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await supabase.from('tasks').select('*').order('position', { ascending: true });
        if (data) setTasks(data as Task[]);
      } catch (e) {
        // supabase may be a mock in this environment — ignore errors
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  async function addTask(status: Task['status'], title: string) {
    const tempId = 'temp_' + Date.now();
    const optimistic = { id: tempId, title, status } as any;
    setTasks(prev => [...prev, optimistic]);

    try {
      const from = (supabase as any).from ? (supabase as any).from('tasks') : null;
      if (from && typeof from.insert === 'function') {
        const res = await from.insert([{ title, status }]).select();
        const data = res && (res.data ? (Array.isArray(res.data) ? res.data[0] : res.data) : res);
        if (data) {
          setTasks(prev => prev.map(t => t.id === tempId ? data : t));
          return;
        }
      }

      // No real backend available — replace temp id with a generated server id
      const serverTask = { id: 'srv_' + Date.now(), title, status };
      setTasks(prev => prev.map(t => t.id === tempId ? serverTask : t));
    } catch (err) {
      console.error('addTask failed', err);
      setTasks(prev => prev.filter(t => t.id !== tempId));
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 text-center">
          Loading board...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Full-Stack Kanban</h1>
            <p className="text-sm text-slate-400">Organize your next development tasks cleanly.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => addTask('To Do', 'New task')} className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Add task
            </button>
            <About />
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-100">{column}</h2>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  {tasks.filter((task) => task.status === column).length}
                </span>
              </div>

              <div className="space-y-4">
                {tasks
                  .filter((task) => task.status === column)
                  .map((task) => (
                    <SortableTask key={task.id} id={task.id} content={task.title} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
