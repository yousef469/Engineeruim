// Complete Rocket Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { unit0Foundations } from './rockets/unit0-foundations.js';
import { rocketUnit1Complete } from './rockets/unit1-complete.js';
import { rocketUnit2Complete } from './rockets/unit2-complete.js';
import { rocketUnit3Complete } from './rockets/unit3-complete.js';
import { rocketUnit4Complete } from './rockets/unit4-complete.js';
import { rocketUnit5Complete } from './rockets/unit5-complete.js';
// Note: Only MIT-quality lessons included (Units 0-5)
// Total: 28 comprehensive rocket engineering lessons

// Create lessons object
export const rocketsLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
// Convert string IDs (0.1, 0.2) to numeric IDs (0, 1, 2, 3, 4, 5)
const unit0Array = Object.values(unit0Foundations);
unit0Array.forEach((lesson, index) => {
  rocketsLessons[index] = {
    ...lesson,
    id: index,  // Use numeric ID instead of string
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



export default rocketsLessons;
