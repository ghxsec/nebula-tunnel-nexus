
import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  return (
    <header className="h-16 px-4 border-b border-white/5 flex items-center justify-between bg-background/80 backdrop-blur-md">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <Menu size={20} />
        </Button>
        
        <div className={`transition-all duration-300 flex items-center ${isSearchActive ? 'w-[300px]' : 'w-9'} bg-secondary/70 rounded-full`}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-transparent" 
            onClick={() => setIsSearchActive(!isSearchActive)}
          >
            <Search size={18} className="text-muted-foreground" />
          </Button>
          {isSearchActive && (
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm text-foreground w-full"
              autoFocus
            />
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
        
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="rounded-full px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};
