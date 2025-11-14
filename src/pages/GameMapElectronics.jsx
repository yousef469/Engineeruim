import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Star, Lock, CheckCircle, Cpu } from 'lucide-react';

export default function GameMapElectronics() {
  const navigate = useNavigate();
  const [completedLevels, setCompletedLevels] = useState([0]);

  // Generate 20 MIT-quality lessons (matching aircraft and cars curriculum)
  const generateLevels = () => {
    const levels = [];
    let levelId = 0;

    const units = [
      { name: 'Foundations: Math & Physics Bridge', emoji: '🎓', lessons: 6, level: 'Beginner', color: 'from-green-400 to-emerald-500' },
      { name: 'Power Electronics & Motors', emoji: '⚡', lessons: 4, level: 'Intermediate', color: 'from-yellow-400 to-orange-500' },
      { name: 'Embedded Systems & Control', emoji: '🤖', lessons: 5, level: 'Advanced', color: 'from-blue-400 to-cyan-500' },
      { name: 'Robotics & Automation', emoji: '🦾', lessons: 5, level: 'Expert', color: 'from-purple-400 to-pink-500' }
    ];

    units.forEach((unit) => {
      for (let i = 0; i < unit.lessons; i++) {
        levels.push({
          id: levelId++,
          type: 'lesson',
          level: unit.level,
          unit: unit.name,
          lesson: `Lesson ${i + 1}`,
          emoji: unit.emoji,
          color: unit.color
        });
      }
    });

    return levels;
  };

  const levels = generateLevels();
  const isLevelUnlocked = (levelId) => true; // All lessons unlocked
  const isLevelCompleted = (levelId) => false;

  const handleLevelClick = (level) => {
    if (isLevelUnlocked(level.id)) {
      navigate(`/games/play/electronics/${level.type}/${level.id}`);
    }
  };

  // Organize lessons by units - 20 MIT-quality lessons across 4 units
  const units = [];
  const lessonCounts = [6, 4, 5, 5]; // Lessons per unit (Total: 20)
  const unitNames = [
    'Foundations: Math & Physics Bridge',
    'Power Electronics & Motors',
    'Embedded Systems & Control',
    'Robotics & Automation'
  ];
  const unitEmojis = ['🎓', '⚡', '🤖', '🦾'];
  const unitColors = [
    'from-green-400 to-emerald-500',
    'from-yellow-400 to-orange-500',
    'from-blue-400 to-cyan-500',
    'from-purple-400 to-pink-500'
  ];

  let currentLesson = 0;
  lessonCounts.forEach((count, unitIndex) => {
    const unitLessons = [];
    for (let i = 0; i < count; i++) {
      unitLessons.push(levels[currentLesson++]);
    }
    units.push({
      name: unitNames[unitIndex],
      emoji: unitEmojis[unitIndex],
      color: unitColors[unitIndex],
      lessons: unitLessons
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <div className="border-b border-white/20 bg-black/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/games')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Games</span>
            </button>
            
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-purple-300" />
              <h1 className="text-2xl font-bold">Electronics & Robotics</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">0 / 20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Electronics & Robotics Engineering</h2>
          <p className="text-xl text-white/80">
            Master power electronics, embedded systems, and autonomous robotics
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span>Beginner (6)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <span>Intermediate (4)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span>Advanced (5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <span>Expert (5)</span>
            </div>
          </div>
        </div>

        {/* Units */}
        <div className="space-y-12">
          {units.map((unit, unitIndex) => (
            <div key={unitIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{unit.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold">{unit.name}</h3>
                  <p className="text-white/70">{unit.lessons.length} lessons</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unit.lessons.map((level) => {
                  const unlocked = isLevelUnlocked(level.id);
                  const completed = isLevelCompleted(level.id);

                  return (
                    <button
                      key={level.id}
                      onClick={() => handleLevelClick(level)}
                      disabled={!unlocked}
                      className={`
                        relative p-6 rounded-xl border-2 transition-all
                        ${unlocked
                          ? `bg-gradient-to-br ${unit.color} border-white/30 hover:scale-105 hover:shadow-2xl cursor-pointer`
                          : 'bg-gray-800/50 border-gray-700 cursor-not-allowed opacity-50'
                        }
                      `}
                    >
                      {/* Completion Badge */}
                      {completed && (
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}

                      {/* Lock Icon */}
                      {!unlocked && (
                        <div className="absolute -top-2 -right-2 bg-gray-700 rounded-full p-1">
                          <Lock className="w-5 h-5" />
                        </div>
                      )}

                      <div className="flex flex-col items-center gap-3">
                        <div className="text-4xl">{level.emoji}</div>
                        <div className="text-center">
                          <div className="font-bold text-lg">Lesson {level.id}</div>
                          <div className="text-sm text-white/80 mt-1">{level.level}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">0 / 6</div>
              <div className="text-sm text-white/70 mt-1">Foundations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">0 / 4</div>
              <div className="text-sm text-white/70 mt-1">Power Electronics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">0 / 5</div>
              <div className="text-sm text-white/70 mt-1">Embedded Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">0 / 5</div>
              <div className="text-sm text-white/70 mt-1">Robotics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
