import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Atom, Rocket } from 'lucide-react';

export default function MathPhysicsEngineeringPage() {
    const navigate = useNavigate();

    const subjects = [
        {
            id: 'mathematics',
            icon: Calculator,
            title: 'Mathematics',
            description: 'Algebra, geometry, trigonometry, vectors, and applied math',
            lessons: 6,
            gradient: 'from-green-500 to-emerald-600',
            hoverGradient: 'from-green-600 to-emerald-700',
            borderColor: 'border-green-400/50',
            hoverBorderColor: 'hover:border-green-300',
            shadowColor: 'shadow-green-500/30',
            path: '/learn/mathematics/engineering'
        },
        {
            id: 'physics',
            icon: Atom,
            title: 'Physics',
            description: 'Forces, motion, energy, momentum, and mechanics',
            lessons: 6,
            gradient: 'from-blue-500 to-cyan-600',
            hoverGradient: 'from-blue-600 to-cyan-700',
            borderColor: 'border-blue-400/50',
            hoverBorderColor: 'hover:border-blue-300',
            shadowColor: 'shadow-blue-500/30',
            path: '/learn/physics/engineering'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/learn/sections')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Journey
                    </button>
                    <div className="flex items-center gap-4">
                        <Rocket className="w-12 h-12 text-green-400" />
                        <div>
                            <h1 className="text-4xl font-bold">Mathematics and Physics for Engineering</h1>
                            <p className="text-gray-400">Choose a subject to begin your journey</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subjects Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {subjects.map((subject) => {
                        const Icon = subject.icon;
                        return (
                            <button
                                key={subject.id}
                                onClick={() => navigate(subject.path)}
                                className={`group relative bg-gradient-to-br ${subject.gradient} hover:${subject.hoverGradient} rounded-3xl p-10 border-2 ${subject.borderColor} ${subject.hoverBorderColor} transition-all cursor-pointer hover:scale-105 hover:shadow-2xl ${subject.shadowColor}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                                
                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                        <Icon className="w-12 h-12 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-white text-center">{subject.title}</h3>

                                    <p className="text-white/90 text-center mb-6">
                                        {subject.description}
                                    </p>

                                    <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6">
                                        <span>{subject.lessons} Lessons</span>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 text-white font-semibold">
                                        <span>Start Learning</span>
                                        <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Info Box */}
                <div className="mt-12 bg-green-900/30 border-2 border-green-500/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4 text-green-300">Complete Both to Unlock Engineering Journeys</h2>
                    <p className="text-gray-200 mb-4">
                        You need to complete both Mathematics and Physics to unlock Rockets, Planes, Cars, and Robotics journeys.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-200 text-sm">
                        <div>
                            <p className="mb-2">✓ Essential for engineering</p>
                            <p>✓ Practical applications</p>
                        </div>
                        <div>
                            <p className="mb-2">✓ Interactive lessons</p>
                            <p>✓ Real-world examples</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
