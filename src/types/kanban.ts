export type Task = {
  id: string;
  column_id: string;
  content: string;
  position: number;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};