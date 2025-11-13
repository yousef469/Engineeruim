// Mathematics Engineering Lessons Data
import { unit1Lessons } from './mathematics/unit1-algebra.js';
import { unit2Lessons } from './mathematics/unit2-geometry.js';
import { unit3Lessons } from './mathematics/unit3-calculus.js';
import { unit4Lessons } from './mathematics/unit4-linear-algebra.js';
import { unit5Lessons } from './mathematics/unit5-statistics.js';

// All lessons are now imported from their respective unit files
// Unit 1: Algebra & Equations (Lessons 1-6)
// Unit 2: Geometry & Trigonometry (Lessons 7-12)
// Unit 3: Calculus Basics (Lessons 13-17)
// Unit 4: Linear Algebra Intro (Lessons 18-21)
// Unit 5: Statistics & Data (Lessons 22-27)

// Combine all units into one object (like physics)
// Note: unit1 is already an object, units 2-5 are still arrays (will be converted)
const mathematicsLessons = {
  ...unit1Lessons,
  // Convert arrays to object format for units 2-5 (temporary until converted)
  ...Object.fromEntries(unit2Lessons.map(lesson => [lesson.id, lesson])),
  ...Object.fromEntries(unit3Lessons.map(lesson => [lesson.id, lesson])),
  ...Object.fromEntries(unit4Lessons.map(lesson => [lesson.id, lesson])),
  ...Object.fromEntries(unit5Lessons.map(lesson => [lesson.id, lesson]))
};

export default mathematicsLessons;
