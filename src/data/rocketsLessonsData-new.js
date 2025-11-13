// Complete Rocket Engineering Curriculum
// Now with real college-level content for Unit 0 and Unit 1

import { unit0Lessons } from './rockets/unit0-foundations.js';
import { rocketUnit1Complete } from './rockets/unit1-complete.js';
import { generateAllRocketLessons } from './generateRocketLessons.js';

// Get generated lessons for Units 2-10 (temporary until we replace them)
const generatedLessons = generateAllRocketLessons();

// Helper function to get unit name
function getUnitName(lessonId) {
  if (lessonId < 6) return 'Foundations: Math & Physics Bridge';
  if (lessonId < 12) return 'Rocket Fundamentals';
  
  const units = [
    'Rocket Physics & Forces',
    'Rocket Propulsion Systems',
    'Rocket Structures & Materials',
    'Guidance, Navigation & Control',
    'Orbital Mechanics',
    'Rocket Design & Simulation',
    'Avionics & Communication',
    'Mission Design & Operations',
    'Advanced Rocketry & Innovation'
  ];
  return units[Math.floor((lessonId - 12) / 8)];
}

// Create lessons object
export const rocketsLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
unit0Lessons.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Beginner',
    quiz: { questions: [] }
  };
});

// Add Unit 1 (Rocket Fundamentals) - Lessons 6-11
rocketUnit1Complete.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Beginner',
    quiz: { questions: [] }
  };
});

// Add remaining generated lessons (Units 2-10) - Lessons 12+
// These will be replaced with real content later
Object.keys(generatedLessons).forEach(key => {
  const lessonId = parseInt(key);
  if (lessonId >= 12) {
    const lesson = generatedLessons[key];
    rocketsLessons[lessonId] = {
      ...lesson,
      id: lessonId,
      level: lessonId < 30 ? 'Intermediate' : lessonId < 50 ? 'Advanced' : 'Master',
      unit: getUnitName(lessonId),
      content: {
        introduction: lesson.introduction,
        sections: lesson.sections,
        keyTakeaways: lesson.keyTakeaways,
        vocabulary: lesson.vocabulary
      },
      quiz: { questions: [] }
    };
  }
});

export default rocketsLessons;
