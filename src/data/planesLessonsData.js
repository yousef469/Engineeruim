// Complete Aircraft Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { unit0Foundations } from './planes/unit0-foundations.js';
import { allPlanesLessons } from './planes/units-complete.js';
import { generateAllAerospaceLessons } from './generateAerospaceLessons.js';

// Get generated lessons for Units 6-10 (placeholder for future expansion)
const generatedLessons = generateAllAerospaceLessons();

// Helper function to get unit name
function getUnitName(lessonId) {
  if (lessonId < 6) return 'Foundations: Math & Physics Bridge';
  if (lessonId < 12) return 'Flight Fundamentals';
  if (lessonId < 14) return 'Aerodynamics';
  if (lessonId < 16) return 'Aircraft Structures';
  if (lessonId < 18) return 'Aircraft Propulsion';
  if (lessonId < 20) return 'Flight Operations';
  
  const units = [
    'Advanced Aerodynamics',
    'Advanced Structures',
    'Avionics & Systems',
    'Future of Aviation'
  ];
  return units[Math.floor((lessonId - 20) / 10)];
}

// Create lessons object
export const planesLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
Object.values(unit0Foundations).forEach(lesson => {
  planesLessons[lesson.id] = {
    ...lesson,
    level: 'Beginner',
    quiz: { questions: [] }
  };
});

// Add Units 1-5 (MIT-quality content) - Lessons 6-19
allPlanesLessons.forEach(lesson => {
  planesLessons[lesson.id] = {
    ...lesson,
    level: lesson.id < 12 ? 'Beginner' : lesson.id < 16 ? 'Intermediate' : 'Advanced',
    quiz: { questions: [] }
  };
});

// Add remaining generated lessons (Units 6-10) - Lessons 20+
Object.keys(generatedLessons).forEach(key => {
  const lessonId = parseInt(key);
  if (lessonId >= 20) {
    const lesson = generatedLessons[key];
    planesLessons[lessonId] = {
      ...lesson,
      id: lessonId,
      level: 'Master',
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

export default planesLessons;
