import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Atom, GraduationCap } from 'lucide-react';

export default function MathPhysicsAdvancedPage() {
    const navigate = useNavigate();

    const subjects = [
        {
            id: 'mathematics',
            icon: Calculator,
            title: 'Advanced Mathematics',
            description: 'Calculus, linear algebra, differential equations, and proofs',
            lessons: 6,
            gradient: 'from-purple-500 to-indigo-600',
            hoverGradient: 'from-purple-600 to-indigo-700',
            borderColor: 'border-purple-400/50',
            hoverBorderColor: 'hover:border-purple-300',
            shadowColor: 'shadow-purple-500/30',
            path: '/learn/mathematics/advanced'
        },
        {
            id: 'physics',
            icon: Atom,
            title: 'Advanced Physics',
            description: 'Quantum mechanics, relativity, electromagnetism, and particle physics',
            lessons: 6,
            gradient: 'from-indigo-500 to-blue-600',
            hoverGradient: 'from-indigo-600 to-blue-700',
            borderColor: 'border-indigo-400/50',
            hoverBorderColor: 'hover:border-indigo-300',
            shadowColor: 'shadow-indigo-500/30',
            path: '/learn/physics/advanced'
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
                        <GraduationCap className="w-12 h-12 text-purple-400" />
                        <div>
                            <h1 className="text-4xl font-bold">Advanced Mathematics and Physics</h1>
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
                <div className="mt-12 bg-purple-900/30 border-2 border-purple-500/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4 text-purple-300">Advanced Theoretical Foundations</h2>
                    <p className="text-gray-200 mb-4">
                        Deep dive into advanced concepts for theoretical understanding and research-level mathematics and physics.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-200 text-sm">
                        <div>
                            <p className="mb-2">✓ Theoretical foundations</p>
                            <p>✓ Abstract thinking</p>
                        </div>
                        <div>
                            <p className="mb-2">✓ Rigorous proofs</p>
                            <p>✓ Graduate-level prep</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
