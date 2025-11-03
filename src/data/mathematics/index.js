// Mathematics Lessons - Organized by Unit
// Import lessons from each unit file and combine them

import unit1Lessons from './unit1-algebra.js';
import unit2Lessons from './unit2-geometry.js';

// Combine all units into one array
const mathematicsLessons = [
  ...unit1Lessons,
  ...unit2Lessons
];

export default mathematicsLessons;
