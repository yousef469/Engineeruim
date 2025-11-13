// Aircraft Engineering - All Units Complete
// Combines all units for easy import

import { planesUnit1Lessons } from './unit1-flight-fundamentals.js';
import { planesUnit1AdvancedLessons } from './unit1-advanced.js';
import { planesUnit1FinalLessons } from './unit1-final.js';
import { planesUnit2Lessons } from './unit2-aerodynamics.js';
import { planesUnit3Lessons } from './unit3-structures.js';
import { planesUnit4Lessons } from './unit4-propulsion.js';
import { planesUnit5Lessons } from './unit5-operations.js';

// Unit 1: Flight Fundamentals (6 lessons)
export const planesUnit1Complete = [
  ...planesUnit1Lessons,          // Lessons 6-7
  ...planesUnit1AdvancedLessons,  // Lessons 8-9
  ...planesUnit1FinalLessons      // Lessons 10-11
];

// Unit 2: Aerodynamics (2 lessons)
export const planesUnit2Complete = planesUnit2Lessons; // Lessons 12-13

// Unit 3: Structures (2 lessons)
export const planesUnit3Complete = planesUnit3Lessons; // Lessons 14-15

// Unit 4: Propulsion (2 lessons)
export const planesUnit4Complete = planesUnit4Lessons; // Lessons 16-17

// Unit 5: Operations (2 lessons)
export const planesUnit5Complete = planesUnit5Lessons; // Lessons 18-19

// All aircraft lessons combined
export const allPlanesLessons = [
  ...planesUnit1Complete,
  ...planesUnit2Complete,
  ...planesUnit3Complete,
  ...planesUnit4Complete,
  ...planesUnit5Complete
];

export default allPlanesLessons;
