
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServerMapProps {
  className?: string;
}

export const ServerMap = ({ className }: ServerMapProps) => {
  // Server locations (longitude, latitude)
  const servers = [
    { id: 1, name: 'New York', load: 'Low', x: 30, y: 33 },
    { id: 2, name: 'London', load: 'Medium', x: 48, y: 28 },
    { id: 3, name: 'Tokyo', load: 'High', x: 82, y: 34 },
    { id: 4, name: 'Singapore', load: 'Low', x: 74, y: 45 },
    { id: 5, name: 'Sydney', load: 'Medium', x: 85, y: 60 },
  ];
  
  const getLoadColor = (load: string) => {
    switch (load.toLowerCase()) {
      case 'low':
        return 'bg-green-400';
      case 'medium':
        return 'bg-yellow-400';
      case 'high':
        return 'bg-red-400';
      default:
        return 'bg-blue-400';
    }
  };
  
  return (
    <div className={cn("glassmorphism rounded-xl overflow-hidden", className)}>
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-gradient">Server Locations</h3>
          <div className="flex items-center text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1"></span>
            <span className="text-muted-foreground mr-2">Low</span>
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-1"></span>
            <span className="text-muted-foreground mr-2">Medium</span>
            <span className="inline-block w-2 h-2 rounded-full bg-red-400 mr-1"></span>
            <span className="text-muted-foreground">High</span>
          </div>
        </div>
        
        <div className="relative h-[200px] bg-[url('https://svgsilh.com/svg/306338.svg')] bg-cover bg-center bg-white/5 rounded-lg">
          {servers.map((server) => (
            <div 
              key={server.id}
              className="absolute w-3 h-3 rounded-full animate-pulse-glow cursor-pointer group"
              style={{ left: `${server.x}%`, top: `${server.y}%` }}
            >
              <div className={cn("w-full h-full rounded-full", getLoadColor(server.load))}></div>
              <div className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-background/90 text-xs px-2 py-1 rounded whitespace-nowrap">
                {server.name} <span className="text-muted-foreground">({server.load} load)</span>
              </div>
            </div>
          ))}
          
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <Globe size={120} className="text-primary/30" />
          </div>
        </div>
        
        <button className="w-full mt-4 text-center text-xs text-primary hover:text-primary/80 font-medium py-2">
          View All Servers
        </button>
      </div>
    </div>
  );
};
