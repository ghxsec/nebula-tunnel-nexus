
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Define a type for the possible status values
type ConnectionStatus = 'connected' | 'disconnected' | 'connecting';

interface StatusProps {
  status: ConnectionStatus;
  protocol?: string;
  server?: string;
  uptime?: string;
  className?: string;
}

export const StatusCard = ({ status, protocol, server, uptime, className }: StatusProps) => {
  // Helper function to determine classes based on status
  const getStatusClasses = () => {
    if (status === 'connected') return "bg-green-500/20 text-green-400 border-green-500/30";
    if (status === 'disconnected') return "bg-red-500/20 text-red-400 border-red-500/30";
    if (status === 'connecting') return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "";
  };
  
  // Helper function for pulse background
  const getPulseBackground = () => {
    if (status === 'connected') return "bg-green-500";
    if (status === 'disconnected') return "bg-red-500";
    if (status === 'connecting') return "bg-yellow-500";
    return "";
  };
  
  // Helper function for status message
  const getStatusMessage = () => {
    if (status === 'connected') return "Secure connection established";
    if (status === 'connecting') return "Establishing connection...";
    if (status === 'disconnected') return "Not connected";
    return "";
  };

  return (
    <div className={cn("glassmorphism rounded-xl overflow-hidden", className)}>
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gradient">Connection Status</h3>
          <Badge 
            variant="outline" 
            className={cn("px-3 font-medium capitalize", getStatusClasses())}
          >
            {status}
          </Badge>
        </div>
        
        <div className="space-y-4">
          {status === 'connected' && (
            <>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Protocol</span>
                <span className="font-medium">{protocol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Server</span>
                <span className="font-medium">{server}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Uptime</span>
                <span className="font-medium">{uptime}</span>
              </div>
              
              <div className="flex items-center mt-4">
                <div className={cn(
                  "w-3 h-3 rounded-full mr-2 animate-status-pulse",
                  getPulseBackground()
                )}></div>
                <span className="text-sm font-medium">{getStatusMessage()}</span>
              </div>
            </>
          )}
          
          {status === 'disconnected' && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Not connected to any server</p>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Connect Now
              </button>
            </div>
          )}
          
          {status === 'connecting' && (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-yellow-500/30 flex items-center justify-center animate-spin-slow mb-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/30"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Establishing secure connection...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
