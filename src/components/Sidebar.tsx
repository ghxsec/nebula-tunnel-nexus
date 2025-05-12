
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Shield, 
  Network, 
  Terminal, 
  Server, 
  Key, 
  ChevronLeft, 
  ChevronRight, 
  Globe,
  BarChart2,
  Wifi
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/ssh', icon: <Terminal size={20} />, label: 'SSH' },
    { path: '/v2ray', icon: <Network size={20} />, label: 'V2Ray' },
    { path: '/trojan', icon: <Shield size={20} />, label: 'Trojan' },
    { path: '/wireguard', icon: <Wifi size={20} />, label: 'WireGuard' },
    { path: '/servers', icon: <Server size={20} />, label: 'Servers' },
    { path: '/keys', icon: <Key size={20} />, label: 'Keys' },
    { path: '/analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
    { path: '/users', icon: <Users size={20} />, label: 'Users' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside 
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-white/5 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          <Globe className="text-primary w-8 h-8" />
          {!collapsed && (
            <span className="ml-2 font-bold text-lg text-white">NetVault</span>
          )}
        </div>
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className={cn(
            "p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white",
            collapsed && "absolute -right-3 top-12 bg-sidebar border border-white/5 rounded-full"
          )}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
      
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  "hover:bg-white/10",
                  location.pathname === item.path 
                    ? "bg-primary/20 text-primary" 
                    : "text-sidebar-foreground/80",
                  collapsed ? "justify-center" : ""
                )}
              >
                <span>{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className={cn(
        "p-4 border-t border-white/5",
        collapsed ? "flex justify-center" : ""
      )}>
        <div className={cn(
          "flex items-center rounded-md p-2 bg-white/5 hover:bg-white/10 cursor-pointer",
          collapsed ? "justify-center" : ""
        )}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
            JD
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-xs text-white/70">Logged in as</p>
              <p className="text-sm font-medium text-white">John Doe</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
