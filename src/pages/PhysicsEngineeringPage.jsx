import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhysicsEngineeringPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/learn/physics/engineering/map', { replace: true });
  }, [navigate]);

  return null;
}
