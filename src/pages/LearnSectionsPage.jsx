import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Lock, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LearnSectionsPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const prerequisiteSection = {
        id: 'mathematics',
        icon: Calculator,
        title: 'Mathematics',
        description: 'Start with essential math concepts needed for engineering',
        gradient: 'from-green-500 to-emerald-600',
        hoverGradient: 'from-green-600 to-emerald-700',
        borderColor: 'border-green-400/50',
        hoverBorderColor: 'hover:border-green-300',
        shadowColor: 'shadow-green-500/30',
        path: '/mathematics',
        available: true
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/learn')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Learn
                    </button>
                    <h1 className="text-4xl font-bold mb-2">Journey</h1>
                    <p className="text-gray-400">Choose a lesson map to start your interactive learning journey</p>
                </div>
            </div>

            {/* Prerequisites Notice */}
            <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">
                <div className="bg-blue-900/30 border-2 border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-3">Prerequisites Required</h2>
                            <p className="text-blue-200 text-lg mb-4">
                                Before diving into mechanics (Rockets, Planes, Cars), you need to build a strong foundation in:
                            </p>
                            <ul className="space-y-2 text-blue-100">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span><strong>Mathematics</strong> - Algebra, geometry, trigonometry, and calculus basics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span><strong>Physics</strong> - Forces, motion, energy, and fundamental laws</span>
                                </li>
                            </ul>
                            <p className="text-blue-300 mt-4 text-sm italic">
                                💡 Start with Mathematics below to unlock the engineering journeys!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Available Section */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Start Here</h2>
                <div className="max-w-md mx-auto">
                    <button
                        onClick={() => navigate(prerequisiteSection.path)}
                        className={`group relative w-full bg-gradient-to-br ${prerequisiteSection.gradient} hover:${prerequisiteSection.hoverGradient} rounded-3xl p-10 border-2 ${prerequisiteSection.borderColor} ${prerequisiteSection.hoverBorderColor} transition-all cursor-pointer hover:scale-105 hover:shadow-2xl ${prerequisiteSection.shadowColor}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                        
                        <div className="relative z-10">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Calculator className="w-12 h-12 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-white text-center">{prerequisiteSection.title}</h3>

                            <p className="text-white/90 text-center mb-6">
                                {prerequisiteSection.description}
                            </p>

                            <div className="flex items-center justify-center gap-2 text-white font-semibold">
                                <span>Start Learning</span>
                                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Locked Sections */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-400">Coming Soon (Complete Prerequisites First)</h2>
                <div className="grid md:grid-cols-3 gap-8 opacity-50">
                    {[
                        { title: 'Rockets', icon: '🚀', color: 'from-orange-500 to-red-600' },
                        { title: 'Planes', icon: '✈️', color: 'from-blue-500 to-indigo-600' },
                        { title: 'Cars', icon: '🚗', color: 'from-purple-500 to-pink-600' }
                    ].map((item) => (
                        <div
                            key={item.title}
                            className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-10 border-2 border-gray-600`}
                        >
                            <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center">
                                <Lock className="w-16 h-16 text-white" />
                            </div>
                            
                            <div className="relative z-10 blur-sm">
                                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-5xl">{item.icon}</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-white text-center">{item.title}</h3>
                                <p className="text-white/90 text-center">Locked until prerequisites complete</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
