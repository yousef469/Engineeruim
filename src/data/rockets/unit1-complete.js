// Unit 1: Rocket Fundamentals - Complete
// Combines all 6 lessons (6-11)

import { unit1Lessons } from './unit1-fundamentals.js';
import { unit1AdvancedLessons } from './unit1-advanced.js';

// Combine all Unit 1 lessons
export const rocketUnit1Complete = [
  ...unit1Lessons,          // Lessons 6-7
  ...unit1AdvancedLessons   // Lessons 8-11
];

export default rocketUnit1Complete;
