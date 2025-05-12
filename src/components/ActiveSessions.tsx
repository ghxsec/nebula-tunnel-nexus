
import { Laptop, Smartphone, Server, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Session {
  id: string;
  device: 'laptop' | 'mobile' | 'server';
  name: string;
  ip: string;
  location: string;
  protocol: string;
  connected: string;
}

interface ActiveSessionsProps {
  sessions?: Session[];
  className?: string;
}

export const ActiveSessions = ({ sessions = [], className }: ActiveSessionsProps) => {
  // Mock data if no sessions provided
  const defaultSessions: Session[] = [
    {
      id: '1',
      device: 'laptop',
      name: 'MacBook Pro',
      ip: '192.168.1.5',
      location: 'New York, US',
      protocol: 'SSH',
      connected: '2h 15m ago',
    },
    {
      id: '2',
      device: 'mobile',
      name: 'iPhone 13',
      ip: '192.168.1.8',
      location: 'New York, US',
      protocol: 'WireGuard',
      connected: '45m ago',
    },
    {
      id: '3',
      device: 'server',
      name: 'AWS Instance',
      ip: '54.235.23.110',
      location: 'Virginia, US',
      protocol: 'V2Ray',
      connected: '5h 30m ago',
    },
  ];

  const displaySessions = sessions.length > 0 ? sessions : defaultSessions;

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'laptop':
        return <Laptop size={16} />;
      case 'mobile':
        return <Smartphone size={16} />;
      case 'server':
        return <Server size={16} />;
      default:
        return <Laptop size={16} />;
    }
  };

  return (
    <div className={cn("glassmorphism rounded-xl", className)}>
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold text-gradient">Active Sessions</h3>
          <span className="bg-white/10 text-xs font-medium px-2 py-1 rounded">
            {displaySessions.length} Active
          </span>
        </div>
        
        <div className="space-y-4">
          {displaySessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-primary">
                  {getDeviceIcon(session.device)}
                </div>
                <div>
                  <p className="font-medium text-sm">{session.name}</p>
                  <p className="text-xs text-muted-foreground">{session.ip} • {session.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium">{session.protocol}</p>
                <p className="text-xs text-muted-foreground">{session.connected}</p>
              </div>
              <button className="ml-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-full hover:bg-white/10">
                <MoreHorizontal size={14} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-center text-xs text-primary hover:text-primary/80 font-medium py-2">
          View All Sessions
        </button>
      </div>
    </div>
  );
};
