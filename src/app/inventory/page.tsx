"use client";
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

// Mock Data - We will connect this to Supabase later
const data = [
  { name: 'Mon', stock: 400 },
  { name: 'Tue', stock: 300 },
  { name: 'Wed', stock: 500 },
  { name: 'Thu', stock: 280 },
  { name: 'Fri', stock: 590 },
  { name: 'Sat', stock: 800 },
  { name: 'Sun', stock: 750 },
];

export default function InventoryDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-50">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Inventory Analytics</h1>
          <p className="text-slate-400 text-sm">Real-time overview of your warehouse performance.</p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Products" value="1,284" icon={<Package className="text-blue-400" />} change="+12%" />
          <StatCard title="Low Stock" value="14" icon={<AlertTriangle className="text-amber-400" />} change="-2" isAlert />
          <StatCard title="Inventory Value" value="$42,500" icon={<DollarSign className="text-emerald-400" />} change="+5.4%" />
          <StatCard title="Stock Velocity" value="84%" icon={<TrendingUp className="text-purple-400" />} change="+2%" />
        </div>

        {/* Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl h-[400px]">
            <h3 className="text-lg font-semibold mb-6">Stock Level Trends</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Area type="monotone" dataKey="stock" stroke="#3b82f6" fillOpacity={1} fill="url(#colorStock)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Alert List */}
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Urgent Restock</h3>
            <div className="space-y-4">
              {[
                { name: "iPhone 15 Case", stock: 2 },
                { name: "Mechanical Keyboard", stock: 5 },
                { name: "USB-C Hub", stock: 0 },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${item.stock === 0 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {item.stock} left
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, change, isAlert }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-800 rounded-lg">{icon}</div>
        <span className={`text-xs font-medium ${isAlert ? 'text-red-400' : 'text-emerald-400'}`}>
          {change}
        </span>
      </div>
      <h4 className="text-slate-400 text-sm font-medium">{title}</h4>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}