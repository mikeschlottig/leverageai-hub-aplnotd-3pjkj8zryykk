import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import type { MetricPoint } from '@/types';
interface MetricChartProps {
  data?: MetricPoint[];
}
export function MetricChart({ data = [] }: MetricChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-[300px] bg-secondary/10 rounded-3xl border border-dashed border-border flex flex-col items-center justify-center p-8 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-muted-foreground opacity-50" />
        <div>
          <h4 className="font-bold text-muted-foreground">Data Not Available</h4>
          <p className="text-xs text-muted-foreground/60">Performance metrics are being generated for this solution.</p>
        </div>
      </div>
    );
  }
  const chartData = data.map(m => ({
    name: m.label,
    before: m.before,
    after: m.after,
  }));
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-[350px] bg-card rounded-3xl border border-border p-6 shadow-soft"
    >
      <div className="mb-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Impact Analytics</h4>
        <div className="h-1 w-12 bg-brand-purple rounded-full" />
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
          barGap={16}
        >
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 600 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11, fontWeight: 500 }}
          />
          <Tooltip
            cursor={{ fill: 'hsl(var(--brand-purple)/0.05)', radius: 8 }}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--brand-purple)/0.2)',
              borderRadius: '16px',
              color: 'hsl(var(--foreground))',
              boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)',
              padding: '12px 16px',
              borderWidth: '2px'
            }}
            itemStyle={{ fontSize: '12px', fontWeight: '700' }}
            labelStyle={{ color: 'hsl(var(--muted-foreground))', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ paddingBottom: '30px', fontSize: '11px', fontWeight: 600 }}
          />
          <Bar
            name="Manual / Baseline"
            dataKey="before"
            fill="hsl(var(--muted-foreground))"
            fillOpacity={0.15}
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
          <Bar
            name="LEVERAGE AI"
            dataKey="after"
            fill="hsl(var(--brand-purple))"
            radius={[6, 6, 0, 0]}
            barSize={32}
            className="filter drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}