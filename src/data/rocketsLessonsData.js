// Complete Rocket Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { rocketUnit0Complete } from './rockets/unit0-complete.js';
import { rocketUnit1Complete } from './rockets/unit1-complete.js';
import { rocketUnit2Complete } from './rockets/unit2-complete.js';
import { rocketUnit3Complete } from './rockets/unit3-complete.js';
import { rocketUnit4Complete } from './rockets/unit4-complete.js';
import { rocketUnit5Complete } from './rockets/unit5-complete.js';
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
