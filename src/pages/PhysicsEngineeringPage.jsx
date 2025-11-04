import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Lock, CheckCircle } from 'lucide-react';
import { physicsUnits } from '../data/physicsEngineeringData';

export default function PhysicsEngineeringPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/learn')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Learn
          </button>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Physics for Engineering
          </h1>
          <p className="text-xl text-gray-400">
            The Core Pillars of Physics for All 4 Fields
          </p>
          <p className="text-gray-500 mt-2">
            6 Units • 30 Lessons • Interactive Demos • Real Engineering Examples
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {physicsUnits.map((unit, index) => (
            <div
              key={unit.id}
              className={`bg-gradient-to-br ${unit.color} rounded-3xl p-8 border-2 border-white/20`}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{unit.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                      UNIT {unit.id}
                    </span>
                    <span className="text-sm text-white/80">
                      {unit.lessons.length} Lessons
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-white">{unit.title}</h2>
                  <p className="text-white/90 text-lg">{unit.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unit.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigate(`/learn/physics/engineering/lesson/${lesson.id}`)}
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all text-left hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-bold text-white/60">
                        Lesson {lesson.id}
                      </span>
                      <Play className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3">
                      {lesson.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span>📚</span>
                      <span>{lesson.example}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold mb-4">🎯 What You'll Master</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Mechanics & Motion - How everything moves and interacts</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Energy & Work - Engines, propulsion, aerodynamics</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Fluids & Pressure - Air for planes, gases for rockets</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Thermodynamics - Heat, combustion, energy conversion</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Waves & Electricity - Sensors, communication, controls</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <span>Materials & Strength - How structures behave</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
