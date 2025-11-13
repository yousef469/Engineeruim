// Unit 1: Flight Fundamentals - Complete
// Combines all lessons (6-11)

import { planesUnit1Lessons } from './unit1-flight-fundamentals.js';
import { planesUnit1AdvancedLessons } from './unit1-advanced.js';

// Note: Lessons 10-11 (Propulsion & Design) to be added

export const planesUnit1Complete = [
  ...planesUnit1Lessons,          // Lessons 6-7
  ...planesUnit1AdvancedLessons   // Lessons 8-9
  // Lessons 10-11 will be added
];

export default planesUnit1Complete;
