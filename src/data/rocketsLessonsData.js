// Complete Rocket Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { unit0Lessons } from './rockets/unit0-foundations.js';
import { rocketUnit1Complete } from './rockets/unit1-complete.js';
import { rocketUnit2Complete } from './rockets/unit2-complete.js';
import { rocketUnit3Complete } from './rockets/unit3-complete.js';
import { rocketUnit4Complete } from './rockets/unit4-complete.js';
import { rocketUnit5Complete } from './rockets/unit5-complete.js';
import { generateAllRocketLessons } from './generateRocketLessons.js';

// Get generated lessons for Units 6-10 (placeholder for future expansion)
const generatedLessons = generateAllRocketLessons();

// Helper function to get unit name
function getUnitName(lessonId) {
  if (lessonId < 6) return 'Foundations: Math & Physics Bridge';
  if (lessonId < 12) return 'Rocket Fundamentals';
  if (lessonId < 20) return 'Rocket Propulsion Physics';
  if (lessonId < 24) return 'Orbital Mechanics';
  if (lessonId < 26) return 'Rocket Structures & Materials';
  if (lessonId < 28) return 'Guidance, Navigation & Control';
  
  const units = [
    'Advanced Propulsion',
    'Mission Design & Operations',
    'Advanced Rocketry & Innovation'
  ];
  return units[Math.floor((lessonId - 28) / 8)];
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

// Add Unit 2 (Propulsion Physics) - Lessons 12-19
rocketUnit2Complete.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Intermediate',
    quiz: { questions: [] }
  };
});

// Add Unit 3 (Orbital Mechanics) - Lessons 20-23
rocketUnit3Complete.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Intermediate',
    quiz: { questions: [] }
  };
});

// Add Unit 4 (Structures & Materials) - Lessons 24-25
rocketUnit4Complete.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Advanced',
    quiz: { questions: [] }
  };
});

// Add Unit 5 (GNC) - Lessons 26-27
rocketUnit5Complete.forEach(lesson => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    level: 'Advanced',
    quiz: { questions: [] }
  };
});

// Add remaining generated lessons (Units 6-10) - Lessons 28+
Object.keys(generatedLessons).forEach(key => {
  const lessonId = parseInt(key);
  if (lessonId >= 28) {
    const lesson = generatedLessons[key];
    rocketsLessons[lessonId] = {
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

export default rocketsLessons;
