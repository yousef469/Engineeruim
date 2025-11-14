// Complete Rocket Engineering Curriculum
// MIT-Quality Content: Units 0-5 with Enhanced Lessons!

import { rocketUnit0Complete } from './rockets/unit0-complete.js';
import { unit1Lessons } from './rockets/unit1-fundamentals.js';
import { unit1AdvancedLessons } from './rockets/unit1-advanced.js';
import { unit2EnhancedLessons } from './rockets/unit2-enhanced.js';
import { unit2Lessons17to19 } from './rockets/unit2-lessons-17-19.js';
import { unit2AdvancedLessons } from './rockets/unit2-advanced.js';
import { unit3Enhanced20to21 } from './rockets/unit3-enhanced-20-21.js';
import { unit3Lessons } from './rockets/unit3-orbital-mechanics.js';
import { unit3AdvancedLessons } from './rockets/unit3-advanced.js';
import { unit4Lessons } from './rockets/unit4-structures.js';
import { unit5Lessons } from './rockets/unit5-gnc.js';

// Combine enhanced and existing lessons
const rocketUnit1Complete = [...unit1Lessons, ...unit1AdvancedLessons];
const rocketUnit2Complete = [
  unit2EnhancedLessons[0],          // Lesson 16 (enhanced)
  unit2Lessons17to19[0],            // Lesson 17 (enhanced)
  ...unit2AdvancedLessons.slice(2)  // Lessons 18-19 (existing)
];
const rocketUnit3Complete = [
  unit3Enhanced20to21[0],           // Lesson 20 (enhanced)
  ...unit3Lessons.slice(1),         // Lesson 21 (existing)
  ...unit3AdvancedLessons           // Lessons 22-23
];
const rocketUnit4Complete = unit4Lessons;
const rocketUnit5Complete = unit5Lessons;
// MIT-Quality Rocket Engineering Curriculum
// Total: 28 comprehensive lessons across 6 units

// Create lessons object
export const rocketsLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
rocketUnit0Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🧮',
    level: 'Beginner',
    unitNumber: 0,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});

// Add Unit 1 (Rocket Fundamentals) - Lessons 6-11
rocketUnit1Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🚀',
    level: 'Beginner',
    unitNumber: 1,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});

// Add Unit 2 (Propulsion Physics) - Lessons 12-19
rocketUnit2Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🔥',
    level: 'Intermediate',
    unitNumber: 2,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});

// Add Unit 3 (Orbital Mechanics) - Lessons 20-23
rocketUnit3Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🪐',
    level: 'Intermediate',
    unitNumber: 3,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});

// Add Unit 4 (Structures & Materials) - Lessons 24-25
rocketUnit4Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🏗️',
    level: 'Advanced',
    unitNumber: 4,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});

// Add Unit 5 (GNC) - Lessons 26-27
rocketUnit5Complete.forEach((lesson, index) => {
  rocketsLessons[lesson.id] = {
    ...lesson,
    emoji: '🧠',
    level: 'Advanced',
    unitNumber: 5,
    lessonNumber: index + 1,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: { questions: [] }
  };
});



export default rocketsLessons;
