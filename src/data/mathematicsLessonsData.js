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
// All units are now objects with sequential lesson numbering
const mathematicsLessons = {
  ...unit1Lessons,
  ...unit2Lessons,
  ...unit3Lessons,
  ...unit4Lessons,
  ...unit5Lessons
};

export default mathematicsLessons;
