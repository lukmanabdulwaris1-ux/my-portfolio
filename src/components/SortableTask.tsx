import React from 'react';
import { GripVertical } from 'lucide-react';

type Props = {
  id: string;
  content: string;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
};

export function SortableTask({ id, content, onDragStart, onDragOver, onDrop }: Props) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart?.(e, id)}
      onDragOver={(e) => onDragOver?.(e, id)}
      onDrop={(e) => onDrop?.(e, id)}
      className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center cursor-grab active:cursor-grabbing"
    >
      <span className="text-slate-200">{content}</span>
      <GripVertical size={16} className="text-slate-500" />
    </div>
  );
}