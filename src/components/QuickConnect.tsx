
import { Terminal, Network, Shield, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickConnectProps {
  className?: string;
}

export const QuickConnect = ({ className }: QuickConnectProps) => {
  const protocols = [
    {
      id: 'ssh',
      name: 'SSH',
      description: 'Secure Shell Protocol',
      icon: <Terminal size={24} />,
      color: 'from-green-500/20 to-green-600/20',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/20',
    },
    {
      id: 'v2ray',
      name: 'V2Ray',
      description: 'Advanced Proxy Tool',
      icon: <Network size={24} />,
      color: 'from-blue-500/20 to-blue-600/20',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
    },
    {
      id: 'trojan',
      name: 'Trojan',
      description: 'Unidentifiable Protocol',
      icon: <Shield size={24} />,
      color: 'from-purple-500/20 to-purple-600/20',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
    },
    {
      id: 'wireguard',
      name: 'WireGuard',
      description: 'Modern VPN Protocol',
      icon: <Wifi size={24} />,
      color: 'from-red-500/20 to-red-600/20',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/20',
    },
  ];

  return (
    <div className={cn("glassmorphism rounded-xl", className)}>
      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold text-gradient mb-5">Quick Connect</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {protocols.map((protocol) => (
            <div 
              key={protocol.id}
              className={cn(
                "bg-gradient-to-br border rounded-xl p-4 card-hover-effect cursor-pointer",
                protocol.color,
                protocol.borderColor
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className={cn("w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3", protocol.textColor)}>
                  {protocol.icon}
                </div>
                <h4 className="font-medium">{protocol.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{protocol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
