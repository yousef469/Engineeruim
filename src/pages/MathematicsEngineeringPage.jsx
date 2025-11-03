import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Rocket } from 'lucide-react';

export default function MathematicsEngineeringPage() {
    const navigate = useNavigate();

    const topics = [
        {
            title: 'Algebra & Equations',
            description: 'Solving equations, systems, and inequalities',
            lessons: 12,
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: 'Geometry & Trigonometry',
            description: 'Angles, triangles, circles, and spatial reasoning',
            lessons: 15,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            title: 'Vectors & Forces',
            description: 'Vector operations, magnitude, direction',
            lessons: 10,
            color: 'from-purple-500 to-pink-600'
        },
        {
            title: 'Basic Calculus',
            description: 'Derivatives, integrals, and rates of change',
            lessons: 18,
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Applied Mathematics',
            description: 'Real-world engineering problems',
            lessons: 15,
            color: 'from-yellow-500 to-amber-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/learn/mathphysics/engineering')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                    <div className="flex items-center gap-4">
                        <Rocket className="w-12 h-12 text-green-400" />
                        <div>
                            <h1 className="text-4xl font-bold">Mathematics for Engineering</h1>
                            <p className="text-gray-400">Essential math for Rockets, Robotics, Automotive, and Planes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Topics Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${topic.color} rounded-2xl p-6 border-2 border-white/10 hover:scale-105 transition-transform cursor-pointer`}
                        >
                            <h3 className="text-2xl font-bold mb-3 text-white">{topic.title}</h3>
                            <p className="text-white/80 mb-4">{topic.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-white/60">{topic.lessons} Lessons</span>
                                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Coming Soon</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 bg-green-900/30 border-2 border-green-500/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4 text-green-300">Why This Path?</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                        <div>
                            <p className="mb-2">✓ Focused on engineering applications</p>
                            <p className="mb-2">✓ Practical problem-solving</p>
                            <p>✓ Direct path to Rockets, Planes, Cars</p>
                        </div>
                        <div>
                            <p className="mb-2">✓ Real-world examples</p>
                            <p className="mb-2">✓ Interactive simulations</p>
                            <p>✓ Build engineering intuition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
