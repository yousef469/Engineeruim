import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Calculator } from 'lucide-react';

export default function MathematicsAdvancedPage() {
    const navigate = useNavigate();

    const topics = [
        {
            title: 'Advanced Calculus',
            description: 'Multivariable calculus, partial derivatives, multiple integrals',
            lessons: 20,
            color: 'from-purple-500 to-indigo-600'
        },
        {
            title: 'Linear Algebra',
            description: 'Matrices, eigenvalues, vector spaces, transformations',
            lessons: 18,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            title: 'Differential Equations',
            description: 'ODEs, PDEs, Laplace transforms, systems',
            lessons: 22,
            color: 'from-pink-500 to-rose-600'
        },
        {
            title: 'Complex Analysis',
            description: 'Complex numbers, functions, contour integration',
            lessons: 15,
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Mathematical Proofs',
            description: 'Logic, proof techniques, mathematical reasoning',
            lessons: 12,
            color: 'from-teal-500 to-cyan-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <button
                        onClick={() => navigate('/learn/mathphysics/advanced')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                    <div className="flex items-center gap-4">
                        <GraduationCap className="w-12 h-12 text-purple-400" />
                        <div>
                            <h1 className="text-4xl font-bold">Advanced Mathematics</h1>
                            <p className="text-gray-400">Deep dive into advanced mathematical concepts</p>
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
                <div className="mt-12 bg-purple-900/30 border-2 border-purple-500/50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4 text-purple-300">Why This Path?</h2>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-200">
                        <div>
                            <p className="mb-2">✓ Theoretical foundations</p>
                            <p className="mb-2">✓ Advanced problem-solving</p>
                            <p>✓ Research-level mathematics</p>
                        </div>
                        <div>
                            <p className="mb-2">✓ Abstract thinking</p>
                            <p className="mb-2">✓ Rigorous proofs</p>
                            <p>✓ Graduate-level preparation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
