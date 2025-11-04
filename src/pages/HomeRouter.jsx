import { useAuth } from '../contexts/AuthContext';
import { Sparkles } from 'lucide-react';
import HomePageLoggedIn from './HomePageLoggedIn';
import LandingPage from './LandingPage';

const HomeRouter = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
          <p className="text-xl text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <HomePageLoggedIn /> : <LandingPage />;
};

export default HomeRouter;
