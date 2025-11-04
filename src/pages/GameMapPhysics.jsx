import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Star, Lock, CheckCircle } from 'lucide-react';

export default function GameMapPhysics() {
  const navigate = useNavigate();
  const [completedLevels] = useState([0]);

  const generateLevels = () => {
    const levels = [];
    let levelId = 1;

    const units = [
      { 
        name: 'Mechanics & Motion', 
        emoji: '🚀', 
        color: 'from-blue-400 to-indigo-500', 
        lessons: [
          'Understanding Motion: Distance, Speed & Velocity',
          'Acceleration: How Speed Changes Over Time',
          "Newton's Three Laws of Motion",
          'Forces & Free-Body Diagrams',
          'Momentum & Collisions in Action'
        ],
        level: 'Beginner',
        enhanced: true
      },
      { 
        name: 'Work, Energy & Power', 
        emoji: '⚡', 
        color: 'from-yellow-400 to-orange-500', 
        lessons: [
          'What is Energy? Kinetic vs Potential',
          'Work & Power: Force × Distance',
          'Conservation of Energy Principle',
          'Efficiency: Energy Losses in Systems',
          'Power Systems: Mechanical vs Electrical'
        ],
        level: 'Beginner'
      },
      { 
        name: 'Fluids & Pressure', 
        emoji: '🌊', 
        color: 'from-cyan-400 to-blue-500', 
        lessons: [
          'Pressure: Force Per Area Explained',
          'Buoyancy & Density: Why Things Float',
          "Bernoulli's Principle: Lift & Airflow",
          'Fluid Resistance: Drag & Viscosity',
          'Compressible Flow: High-Speed Gases'
        ],
        level: 'Intermediate'
      },
      { 
        name: 'Thermodynamics', 
        emoji: '🔥', 
        color: 'from-red-400 to-orange-500', 
        lessons: [
          'Temperature & Heat: Energy Transfer',
          'Heat Transfer: Conduction, Convection, Radiation',
          'Laws of Thermodynamics: Energy Balance',
          'Internal Combustion: How Engines Work',
          'Efficiency Limits: Carnot Cycle'
        ],
        level: 'Intermediate'
      },
      { 
        name: 'Waves, Electricity & Magnetism', 
        emoji: '📡', 
        color: 'from-purple-400 to-pink-500', 
        lessons: [
          'Wave Properties: Sound, Light & Vibration',
          'Frequency & Amplitude: Signal Basics',
          'Electricity Basics: Charge, Voltage, Current',
          "Circuits & Ohm's Law: Resistance Explained",
          'Magnetism & Induction: Motors & Generators'
        ],
        level: 'Intermediate'
      },
      { 
        name: 'Materials & Structures', 
        emoji: '🏗️', 
        color: 'from-gray-400 to-slate-500', 
        lessons: [
          'Material Types: Metals, Ceramics, Composites',
          'Stress & Strain: Force vs Deformation',
          'Elastic & Plastic Deformation',
          'Failure & Fatigue: How Things Break',
          'Material Selection: Weight, Strength, Cost'
        ],
        level: 'Advanced'
      }
    ];

    units.forEach((unit, unitIndex) => {
      unit.lessons.forEach((lessonName, lessonIndex) => {
        levels.push({
          id: levelId++,
          name: lessonName,
          unit: unit.name,
          unitEmoji: unit.emoji,
          unitColor: unit.color,
          level: unit.level,
          enhanced: unit.enhanced && lessonIndex < 5,
          position: {
            x: 15 + (unitIndex % 2) * 45 + (lessonIndex * 8),
            y: 10 + Math.floor(unitIndex / 2) * 25 + (lessonIndex * 12)
          }
        });
      });
    });

    return levels;
  };

  const levels = generateLevels();

  const isLevelUnlocked = (levelId) => {
    if (levelId === 1) return true;
    return completedLevels.includes(levelId - 1);
  };

  const handleLevelClick = (level) => {
    if (isLevelUnlocked(level.id)) {
      navigate(`/learn/physics/engineering/lesson/${level.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden">
      <div className="sticky top-0 z-50 border-b border-blue-500/30 bg-gray-900/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/learn')}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Zap className="w-7 h-7 text-blue-400" />
                  Physics Journey
                </h1>
                <p className="text-sm text-gray-400">30 Lessons • 6 Units • Interactive Learning</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-bold">{completedLevels.length}/30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" style={{ height: '2000px' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {levels.slice(0, -1).map((level, index) => {
            const nextLevel = levels[index + 1];
            return (
              <line
                key={`path-${level.id}`}
                x1={`${level.position.x}%`}
                y1={`${level.position.y}%`}
                x2={`${nextLevel.position.x}%`}
                y2={`${nextLevel.position.y}%`}
                stroke={completedLevels.includes(level.id) ? '#3b82f6' : '#374151'}
                strokeWidth="3"
                strokeDasharray={completedLevels.includes(level.id) ? '0' : '10,5'}
                opacity="0.5"
              />
            );
          })}
        </svg>

        {levels.map((level) => {
          const unlocked = isLevelUnlocked(level.id);
          const completed = completedLevels.includes(level.id);

          return (
            <div
              key={level.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${level.position.x}%`,
                top: `${level.position.y}%`
              }}
            >
              <button
                onClick={() => handleLevelClick(level)}
                disabled={!unlocked}
                className={`group relative transition-all duration-300 ${
                  unlocked ? 'hover:scale-110 cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
              >
                <div
                  className={`w-32 h-32 rounded-2xl border-4 flex flex-col items-center justify-center gap-2 transition-all ${
                    completed
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-300 shadow-lg shadow-green-500/50'
                      : unlocked
                      ? `bg-gradient-to-br ${level.unitColor} border-white/30 shadow-lg hover:shadow-xl`
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  {completed && (
                    <CheckCircle className="absolute -top-2 -right-2 w-8 h-8 text-green-300 bg-green-600 rounded-full" />
                  )}
                  {!unlocked && <Lock className="w-8 h-8 text-gray-500" />}
                  
                  <span className="text-4xl">{level.unitEmoji}</span>
                  <span className="text-sm font-bold text-center px-2">
                    {level.id}
                  </span>
                  
                  {level.enhanced && (
                    <div className="absolute -top-3 -left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      ⭐ NEW
                    </div>
                  )}
                </div>

                {unlocked && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-gray-900 border border-blue-500/30 rounded-lg p-3 shadow-xl">
                      <p className="text-xs font-bold text-blue-400 mb-1">{level.unit}</p>
                      <p className="text-sm font-semibold">{level.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{level.level}</p>
                    </div>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-8 right-8 bg-gray-900/90 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 max-w-sm">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-400" />
          Physics Units
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span>Mechanics & Motion</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span>Work, Energy & Power</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌊</span>
            <span>Fluids & Pressure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span>Thermodynamics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📡</span>
            <span>Waves & Electricity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏗️</span>
            <span>Materials & Structures</span>
          </div>
        </div>
      </div>
    </div>
  );
}
