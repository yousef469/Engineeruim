// Complete Aircraft Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { unit0Foundations } from './planes/unit0-foundations.js';
import { allPlanesLessons } from './planes/units-complete.js';
// Note: Only MIT-quality lessons included (Units 0-5)
// Total: 20 comprehensive aircraft engineering lessons

// Create lessons object
export const planesLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
// Convert string IDs (0.1, 0.2) to numeric IDs (0, 1, 2, 3, 4, 5)
const unit0Array = Object.values(unit0Foundations);
unit0Array.forEach((lesson, index) => {
  planesLessons[index] = {
    ...lesson,
    id: index,  // Use numeric ID instead of string
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



export default planesLessons;
