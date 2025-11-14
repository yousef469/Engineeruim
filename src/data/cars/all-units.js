// Complete Automotive Curriculum - All Units Combined
// 20 MIT-Quality Lessons

import { unit0Foundations } from './unit0-foundations.js';
import { carsUnit1Complete } from './unit1-complete.js';
import { carsUnit2Powertrain } from './unit2-powertrain.js';
import { carsUnit3SystemsDesign } from './unit3-systems-design.js';

// Convert unit0Foundations object to array
const unit0Array = Object.values(unit0Foundations);

// Combine all units - Total 20 lessons
export const allAutomotiveLessons = [
  ...unit0Array,              // Lessons 0-5: Foundations (6 lessons)
  ...carsUnit1Complete,       // Lessons 6-9: Vehicle Dynamics (4 lessons)
  ...carsUnit2Powertrain,     // Lessons 10-14: Powertrain (5 lessons)
  ...carsUnit3SystemsDesign   // Lessons 15-19: Systems & Design (5 lessons)
];

// Export individual units for flexibility
export {
  unit0Foundations,
  carsUnit1Complete,
  carsUnit2Powertrain,
  carsUnit3SystemsDesign
};

export default allAutomotiveLessons;
