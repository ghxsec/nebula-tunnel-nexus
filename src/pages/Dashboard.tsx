
import { StatusCard } from '../components/StatusCard';
import { BandwidthChart } from '../components/BandwidthChart';
import { ActiveSessions } from '../components/ActiveSessions';
import { QuickConnect } from '../components/QuickConnect';
import { ServerMap } from '../components/ServerMap';
import { UserProfile } from '../components/UserProfile';
import { DashboardLayout } from '../layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard 
          status="connected" 
          protocol="WireGuard" 
          server="New York, US"
          uptime="2h 45m"
          className="md:col-span-1"
        />
        <BandwidthChart className="md:col-span-2" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <ActiveSessions />
          <QuickConnect />
        </div>
        <div className="md:col-span-1 space-y-6">
          <ServerMap />
          <UserProfile />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
