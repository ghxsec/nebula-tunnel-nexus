
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface BandwidthChartProps {
  className?: string;
}

export const BandwidthChart = ({ className }: BandwidthChartProps) => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month'>('day');
  
  // Sample data
  const dayData = [
    { time: '00:00', download: 10, upload: 5 },
    { time: '04:00', download: 15, upload: 7 },
    { time: '08:00', download: 25, upload: 12 },
    { time: '12:00', download: 40, upload: 20 },
    { time: '16:00', download: 35, upload: 17 },
    { time: '20:00', download: 50, upload: 25 },
    { time: 'Now', download: 30, upload: 15 },
  ];
  
  const weekData = [
    { time: 'Mon', download: 120, upload: 60 },
    { time: 'Tue', download: 180, upload: 90 },
    { time: 'Wed', download: 150, upload: 75 },
    { time: 'Thu', download: 200, upload: 100 },
    { time: 'Fri', download: 250, upload: 125 },
    { time: 'Sat', download: 300, upload: 150 },
    { time: 'Sun', download: 270, upload: 135 },
  ];
  
  const monthData = [
    { time: 'Week 1', download: 900, upload: 450 },
    { time: 'Week 2', download: 1200, upload: 600 },
    { time: 'Week 3', download: 1000, upload: 500 },
    { time: 'Week 4', download: 1500, upload: 750 },
  ];
  
  const dataMap = {
    day: dayData,
    week: weekData,
    month: monthData
  };
  
  const unitMap = {
    day: 'MB',
    week: 'GB',
    month: 'GB'
  };
  
  const currentData = dataMap[timeframe];
  const currentUnit = unitMap[timeframe];
  
  return (
    <div className={cn("glassmorphism rounded-xl", className)}>
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-gradient">Bandwidth Usage</h3>
          <div className="flex space-x-1 bg-secondary/50 rounded-md p-0.5">
            {(['day', 'week', 'month'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={cn(
                  "text-xs px-3 py-1 rounded-sm font-medium capitalize transition-colors",
                  timeframe === t 
                    ? "bg-primary/30 text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={currentData}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                width={30}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.375rem',
                }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
                labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
              />
              <Area 
                type="monotone" 
                dataKey="download" 
                name={`Download (${currentUnit})`}
                stroke="#8b5cf6" 
                fillOpacity={1} 
                fill="url(#colorDownload)" 
              />
              <Area 
                type="monotone" 
                dataKey="upload" 
                name={`Upload (${currentUnit})`}
                stroke="#22d3ee" 
                fillOpacity={1} 
                fill="url(#colorUpload)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-between mt-5 text-sm">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
            <span className="text-muted-foreground">Download</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></span>
            <span className="text-muted-foreground">Upload</span>
          </div>
          <div className="ml-auto">
            <span className="text-xs text-muted-foreground">Total: </span>
            <span className="text-sm font-medium">
              {currentData.reduce((acc, item) => acc + item.download + item.upload, 0)} {currentUnit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
