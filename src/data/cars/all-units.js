// Complete Automotive Curriculum - All Units Combined
// MIT-Quality Lessons matching Rocket curriculum

import { unit0Foundations } from './unit0-foundations.js';
import { carsUnit1Lessons } from './unit1-vehicle-dynamics.js';
import { carsUnit1AdvancedLessons } from './unit1-advanced.js';
import { carsUnit2Complete } from './unit2-complete.js';
import { carsUnit3Complete } from './unit3-complete.js';

// Convert unit0Foundations object to array
const unit0Array = Object.values(unit0Foundations);

// Combine all units
export const allAutomotiveLessons = [
  ...unit0Array,              // Lessons 0.1-0.6 (6 lessons)
  ...carsUnit1Lessons,        // Lesson 6 (1 lesson)
  ...carsUnit1AdvancedLessons,// Lesson 7 (1 lesson)
  ...carsUnit2Complete,       // Lessons 10-11 (2 lessons)
  ...carsUnit3Complete        // Lesson 12+ (1+ lessons)
];

// Export individual units for flexibility
export {
  unit0Foundations,
  carsUnit1Lessons,
  carsUnit1AdvancedLessons,
  carsUnit2Complete,
  carsUnit3Complete
};

export default allAutomotiveLessons;
