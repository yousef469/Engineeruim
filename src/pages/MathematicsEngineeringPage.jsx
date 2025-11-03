import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MathematicsEngineeringPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the game map
        navigate('/learn/mathematics/engineering/map', { replace: true });
    }, [navigate]);

    return null;
}
