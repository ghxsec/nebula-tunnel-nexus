
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  // This will only show briefly before redirect
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-pulse-glow">
        <h1 className="text-4xl font-bold mb-4 text-gradient">NetVault</h1>
        <p className="text-xl text-muted-foreground">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
