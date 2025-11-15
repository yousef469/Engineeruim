import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    completedLessons: {},
    quizScores: {},
    lastAccessed: {},
    totalTimeSpent: 0,
    achievements: []
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('engineerium_progress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('engineerium_progress', JSON.stringify(progress));
  }, [progress]);

  // Mark lesson as completed
  const completeLesson = (subject, lessonId, quizScore = null) => {
    setProgress(prev => {
      const key = `${subject}-${lessonId}`;
      const newProgress = {
        ...prev,
        completedLessons: {
          ...prev.completedLessons,
          [key]: {
            completedAt: new Date().toISOString(),
            subject,
            lessonId
          }
        },
        lastAccessed: {
          ...prev.lastAccessed,
          [subject]: lessonId
        }
      };

      // Add quiz score if provided
      if (quizScore !== null) {
        newProgress.quizScores = {
          ...prev.quizScores,
          [key]: quizScore
        };
      }

      // Check for achievements
      newProgress.achievements = checkAchievements(newProgress);

      return newProgress;
    });
  };

  // Save quiz score
  const saveQuizScore = (subject, lessonId, score, totalQuestions) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [`${subject}-${lessonId}`]: {
          score,
          totalQuestions,
          percentage: (score / totalQuestions) * 100,
          completedAt: new Date().toISOString()
        }
      }
    }));
  };

  // Check if lesson is completed
  const isLessonCompleted = (subject, lessonId) => {
    return !!progress.completedLessons[`${subject}-${lessonId}`];
  };

  // Get quiz score for a lesson
  const getQuizScore = (subject, lessonId) => {
    return progress.quizScores[`${subject}-${lessonId}`] || null;
  };

  // Get progress for a subject
  const getSubjectProgress = (subject, totalLessons) => {
    const completed = Object.keys(progress.completedLessons).filter(
      key => key.startsWith(`${subject}-`)
    ).length;
    return {
      completed,
      total: totalLessons,
      percentage: totalLessons > 0 ? (completed / totalLessons) * 100 : 0
    };
  };

  // Get last accessed lesson for subject
  const getLastLesson = (subject) => {
    return progress.lastAccessed[subject] || 0;
  };

  // Reset progress (for testing or user request)
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgress({
        completedLessons: {},
        quizScores: {},
        lastAccessed: {},
        totalTimeSpent: 0,
        achievements: []
      });
      localStorage.removeItem('engineerium_progress');
    }
  };

  // Check for achievements
  const checkAchievements = (currentProgress) => {
    const achievements = [...(currentProgress.achievements || [])];
    const completedCount = Object.keys(currentProgress.completedLessons).length;

    // First lesson achievement
    if (completedCount === 1 && !achievements.includes('first_lesson')) {
      achievements.push('first_lesson');
    }

    // Complete 10 lessons
    if (completedCount >= 10 && !achievements.includes('ten_lessons')) {
      achievements.push('ten_lessons');
    }

    // Complete 25 lessons
    if (completedCount >= 25 && !achievements.includes('quarter_century')) {
      achievements.push('quarter_century');
    }

    // Complete 50 lessons
    if (completedCount >= 50 && !achievements.includes('half_century')) {
      achievements.push('half_century');
    }

    // Complete all rockets lessons (28)
    const rocketLessons = Object.keys(currentProgress.completedLessons).filter(
      key => key.startsWith('rockets-')
    ).length;
    if (rocketLessons >= 28 && !achievements.includes('rocket_master')) {
      achievements.push('rocket_master');
    }

    // Complete all car lessons (20)
    const carLessons = Object.keys(currentProgress.completedLessons).filter(
      key => key.startsWith('cars-')
    ).length;
    if (carLessons >= 20 && !achievements.includes('car_master')) {
      achievements.push('car_master');
    }

    // Complete all plane lessons (20)
    const planeLessons = Object.keys(currentProgress.completedLessons).filter(
      key => key.startsWith('planes-')
    ).length;
    if (planeLessons >= 20 && !achievements.includes('plane_master')) {
      achievements.push('plane_master');
    }

    // Complete all electronics lessons (20)
    const electronicsLessons = Object.keys(currentProgress.completedLessons).filter(
      key => key.startsWith('electronics-')
    ).length;
    if (electronicsLessons >= 20 && !achievements.includes('electronics_master')) {
      achievements.push('electronics_master');
    }

    // Perfect quiz scores
    const perfectQuizzes = Object.values(currentProgress.quizScores).filter(
      score => score.percentage === 100
    ).length;
    if (perfectQuizzes >= 10 && !achievements.includes('quiz_master')) {
      achievements.push('quiz_master');
    }

    return achievements;
  };

  // Get achievement info
  const getAchievementInfo = (achievementId) => {
    const achievements = {
      first_lesson: { title: '🎓 First Steps', description: 'Complete your first lesson' },
      ten_lessons: { title: '🔟 Getting Started', description: 'Complete 10 lessons' },
      quarter_century: { title: '🎯 Quarter Century', description: 'Complete 25 lessons' },
      half_century: { title: '🏆 Half Century', description: 'Complete 50 lessons' },
      rocket_master: { title: '🚀 Rocket Master', description: 'Complete all rocket lessons' },
      car_master: { title: '🚗 Automotive Master', description: 'Complete all car lessons' },
      plane_master: { title: '✈️ Aviation Master', description: 'Complete all plane lessons' },
      electronics_master: { title: '⚡ Electronics Master', description: 'Complete all electronics lessons' },
      quiz_master: { title: '🧠 Quiz Master', description: 'Get perfect scores on 10 quizzes' }
    };
    return achievements[achievementId] || { title: 'Achievement', description: '' };
  };

  const value = {
    progress,
    completeLesson,
    saveQuizScore,
    isLessonCompleted,
    getQuizScore,
    getSubjectProgress,
    getLastLesson,
    resetProgress,
    getAchievementInfo
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
