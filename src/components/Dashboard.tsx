"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type StockStat = {
  stock_quantity: number;
  price: number;
};

export default function Dashboard() {
  const [stockStats, setStockStats] = useState<StockStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStockStats() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('stock_quantity, price')
          .order('stock_quantity', { ascending: true });

        if (error) {
          throw error;
        }

        setStockStats((data ?? []) as StockStat[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    loadStockStats();
  }, []);

  const totalValue = stockStats.reduce(
    (acc, item) => acc + item.stock_quantity * item.price,
    0,
  );
  const lowStockCount = stockStats.filter((item) => item.stock_quantity < 10).length;

  if (loading) {
    return <div>Loading inventory stats...</div>;
  }

  if (error) {
    return <div className="text-red-400">Error: {error}</div>;
  }

  return (
    <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-slate-100">
      <h2 className="text-xl font-semibold">Inventory Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-950/80 p-4">
          <p className="text-sm text-slate-400">Total inventory value</p>
          <p className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</p>
        </div>
        <div className="rounded-2xl bg-slate-950/80 p-4">
          <p className="text-sm text-slate-400">Products low in stock</p>
          <p className="text-3xl font-bold text-white">{lowStockCount}</p>
        </div>
      </div>
    </section>
  );
}
