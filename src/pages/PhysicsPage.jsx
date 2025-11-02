import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Atom, Rocket, GraduationCap } from 'lucide-react';

export default function PhysicsPage() {
    const navigate = useNavigate();

    const physicsOptions = [
        {
            id: 'engineering',
            icon: Rocket,
            title: 'Physics for Engineering',
            description: 'Essential physics for Rockets, Robotics, Automotive, and Planes',
            topics: [
                'Forces & Motion',
                'Energy & Work',
                'Momentum & Collisions',
                'Fluid Mechanics Basics',
                'Thermodynamics Fundamentals'
            ],
            gradient: 'from-blue-500 to-cyan-600',
            hoverGradient: 'from-blue-600 to-cyan-700',
            borderColor: 'border-blue-400/50',
            hoverBorderColor: 'hover:border-blue-300',
            shadowColor: 'shadow-blue-500/30',
            recommended: true
        },
        {
            id: 'advanced',
            icon: GraduationCap,
            title: 'Advanced Physics',
            description: 'Deep dive into advanced physics concepts',
            topics: [
                'Quantum Mechanics',
                'Relativity Theory',
                'Electromagnetism',
                'Wave Mechanics',
                'Particle Physics'
            ],
            gradient: 'from-indigo-500 to-purple-600',
            hoverGradient: 'from-indigo-600 to-purple-700',
            borderColor: 'border-indigo-400/50',
            hoverBorderColor: 'hover:border-indigo-300',
            shadowColor: 'shadow-indigo-500/30',
            recommended: false
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
                        <Atom className="w-12 h-12 text-blue-400" />
                        <div>
                            <h1 className="text-4xl font-bold">Physics</h1>
                            <p className="text-gray-400">Choose your learning path</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Options Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {physicsOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                            <button
                                key={option.id}
                                onClick={() => alert('Coming Soon! This curriculum is under development.')}
                                className={`group relative bg-gradient-to-br ${option.gradient} hover:${option.hoverGradient} rounded-3xl p-10 border-2 ${option.borderColor} ${option.hoverBorderColor} transition-all cursor-pointer hover:scale-105 hover:shadow-2xl ${option.shadowColor}`}
                            >
                                {option.recommended && (
                                    <div className="absolute -top-3 -right-3 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Recommended
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                                
                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                        <Icon className="w-12 h-12 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-white text-center">{option.title}</h3>

                                    <p className="text-white/90 text-center mb-6">
                                        {option.description}
                                    </p>

                                    <div className="bg-white/10 rounded-xl p-4 mb-6">
                                        <h4 className="text-sm font-semibold text-white/80 mb-2">Topics Covered:</h4>
                                        <ul className="space-y-1 text-sm text-white/70">
                                            {option.topics.map((topic, idx) => (
                                                <li key={idx}>• {topic}</li>
                                            ))}
                                        </ul>
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
            </div>
        </div>
    );
}
