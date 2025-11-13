import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { unit1Lessons } from '../data/physics/unit1-mechanics';
import { unit2Lessons } from '../data/physics/unit2-energy';
import { unit3Lessons } from '../data/physics/unit3-fluids';
import { unit4Lessons } from '../data/physics/unit4-thermodynamics';
import { unit5Lessons } from '../data/physics/unit5-waves';
import { unit6Lessons } from '../data/physics/unit6-materials';

const physicsLessons = {
    ...unit1Lessons,
    ...unit2Lessons,
    ...unit3Lessons,
    ...unit4Lessons,
    ...unit5Lessons,
    ...unit6Lessons
};

export default function PhysicsLessonPage() {
    const { lessonId } = useParams();
    const navigate = useNavigate();

    // Debug logs only in development
    if (import.meta.env.DEV) {
        console.log('🔬 PHYSICS LESSON PAGE LOADED - Version 2024-11-05-FINAL');
        console.log('=== PHYSICS LESSON PAGE DEBUG ===');
        console.log('Lesson ID from URL:', lessonId);
        console.log('Available lesson IDs:', Object.keys(physicsLessons));
        console.log('Lesson 1 exists?', physicsLessons[1]);
        console.log('Lesson for this ID:', physicsLessons[lessonId]);
    }

    const lesson = physicsLessons[lessonId];

    // Local sub-component to render practice problems with toggleable solutions
    const PracticeProblems = ({ problems }) => {
        const [visible, setVisible] = useState({});
        const toggle = (id) => setVisible(prev => ({ ...prev, [id]: !prev[id] }));

        return (
            <div className="bg-gradient-to-r from-indigo-900/10 to-indigo-800/5 border-2 border-indigo-600/20 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-200">📝 Practice Problems</h3>
                <div className="space-y-4">
                    {problems.map((p, i) => (
                        <div key={p.id || i} className="bg-slate-900/40 border border-slate-700 rounded p-4">
                            <div className="font-semibold text-sm text-gray-100 mb-2">{p.prompt}</div>
                            {p.hints && p.hints.length > 0 && (
                                <div className="text-sm text-gray-300 mb-2">Hints: {p.hints.join(' · ')}</div>
                            )}
                            <button
                                onClick={() => toggle(p.id || i)}
                                className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold"
                            >
                                {visible[p.id || i] ? 'Hide solution' : 'Show solution'}
                            </button>
                            {visible[p.id || i] && (
                                <div className="mt-3 p-3 bg-black/40 border border-gray-700 rounded text-sm text-green-200">
                                    <div className="font-mono">{p.solution}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (!lesson) {
        console.error('❌ LESSON NOT FOUND! ID:', lessonId);
    } else {
        console.log('✅ Lesson found:', lesson.title);
    }

    if (!lesson) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Lesson Not Found</h1>
                    <button
                        onClick={() => navigate('/learn/physics/engineering/map')}
                        className="px-6 py-3 bg-primary rounded-lg hover:bg-primary-light transition-colors"
                    >
                        Back to Physics Map
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-black text-white">
            {/* Debug banner only in development builds */}
            {import.meta.env.DEV && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-6 font-bold text-3xl border-b-8 border-green-300 shadow-2xl">
                    🔬 PHYSICS LESSON PAGE 🔬 - Lesson {lessonId}
                    <div className="text-lg mt-2">Title: {lesson?.title || 'NOT FOUND'}</div>
                </div>
            )}

            <div className="border-b border-blue-700 bg-blue-900/90 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-3"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </button>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400 rounded-full text-sm font-bold">
                                    LESSON {lesson.id}
                                </span>
                                <span className="text-blue-300 text-sm">{lesson.coreIdea}</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-1">{lesson.title}</h1>
                            <p className="text-blue-200">{lesson.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate(`/learn/physics/engineering/quiz/${lessonId}`)}
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold flex items-center gap-2 transition-colors"
                            >
                                <CheckCircle className="w-5 h-5" />
                                Take Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-400/30 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4">📚 Introduction</h2>
                    <p className="text-lg text-blue-100 leading-relaxed">{lesson.content.intro}</p>
                </div>

                {/* New: Learning Objectives, Key Equations, Practice Problems */}
                {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 border-2 border-yellow-400/20 rounded-2xl p-6 mb-8">
                        <h3 className="text-xl font-bold mb-3 text-yellow-300">🎯 Learning Objectives</h3>
                        <ul className="list-disc list-inside text-gray-100 space-y-2">
                            {lesson.learningObjectives.map((obj, i) => (
                                <li key={i}>{obj}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {lesson.keyEquations && lesson.keyEquations.length > 0 && (
                    <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 border-2 border-slate-600/30 rounded-2xl p-6 mb-8">
                        <h3 className="text-xl font-bold mb-4 text-slate-200">📐 Key Equations</h3>
                        <div className="space-y-3">
                            {lesson.keyEquations.map((eq, i) => (
                                <div key={i} className="p-3 bg-slate-900/40 border border-slate-700 rounded">
                                    <div className="font-mono text-sm text-yellow-200">{eq.eq}</div>
                                    {eq.meaning && <div className="text-sm text-gray-300 mt-1">{eq.meaning}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {lesson.practiceProblems && lesson.practiceProblems.length > 0 && (
                    <PracticeProblems problems={lesson.practiceProblems} />
                )}

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-4xl">🎯</span>
                        Core Concepts
                    </h2>
                    <div className="space-y-6">
                        {lesson.content.concepts.map((concept, index) => (
                            <div key={index} className="bg-gray-800/50 border-2 border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-blue-300">{concept.title}</h3>
                                <p className="text-gray-200 mb-3">{concept.explanation}</p>
                                
                                {/* Comparison Boxes - Side by Side */}
                                {concept.comparison && (
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        {/* Left Box */}
                                        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-2 border-purple-400/50 rounded-lg p-4">
                                            <h4 className="font-bold text-lg mb-3 text-purple-200">{concept.comparison.left.title}</h4>
                                            <ul className="space-y-2">
                                                {concept.comparison.left.points.map((point, i) => (
                                                    <li key={i} className="text-sm text-purple-100 flex items-start gap-2">
                                                        <span className="text-purple-400 mt-1">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Right Box */}
                                        <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border-2 border-green-400/50 rounded-lg p-4">
                                            <h4 className="font-bold text-lg mb-3 text-green-200">{concept.comparison.right.title}</h4>
                                            <ul className="space-y-2">
                                                {concept.comparison.right.points.map((point, i) => (
                                                    <li key={i} className="text-sm text-green-100 flex items-start gap-2">
                                                        <span className="text-green-400 mt-1">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
                                    <p className="text-sm text-blue-200">
                                        <span className="font-bold">Example:</span> {concept.example}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-4xl">🔧</span>
                        Real Engineering Applications
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {lesson.content.realWorld.map((app, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-blue-400/30 rounded-xl p-6 hover:scale-105 transition-transform">
                                <div className="text-5xl mb-4">{app.icon}</div>
                                <h3 className="text-lg font-bold mb-2 text-blue-300">{app.title}</h3>
                                <p className="text-sm text-gray-300">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                        <h2 className="text-2xl font-bold">Lesson Complete!</h2>
                    </div>
                    <p className="text-gray-200 mb-6">
                        You've mastered the fundamentals of {lesson.title}. Ready for the next challenge?
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate(`/learn/physics/engineering/lesson/${parseInt(lessonId) + 1}`)}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
                        >
                            Next Lesson →
                        </button>
                        <button
                            onClick={() => navigate('/learn/physics/engineering/map')}
                            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold transition-colors"
                        >
                            Back to Map
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
