
import { User, Key, Shield, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserProfileProps {
  className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
  const menuItems = [
    { icon: <User size={16} />, label: 'Account' },
    { icon: <Key size={16} />, label: 'Security' },
    { icon: <Shield size={16} />, label: 'Privacy' },
    { icon: <Bell size={16} />, label: 'Notifications' },
  ];

  return (
    <div className={cn("glassmorphism rounded-xl", className)}>
      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold text-gradient mb-5">Profile</h3>
        
        <div className="flex flex-col items-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-3">
            JD
          </div>
          <h4 className="font-medium text-base">John Doe</h4>
          <p className="text-xs text-muted-foreground mt-1">john.doe@example.com</p>
          <div className="mt-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
            Pro Subscription
          </div>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <p className="text-lg font-medium">5</p>
            <p className="text-xs text-muted-foreground">Devices</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium">3</p>
            <p className="text-xs text-muted-foreground">Servers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium">28</p>
            <p className="text-xs text-muted-foreground">Days Left</p>
          </div>
        </div>
        
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className="w-full flex items-center py-2 px-3 rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <span className="text-primary mr-2">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
