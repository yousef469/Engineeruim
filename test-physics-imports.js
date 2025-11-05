// Test file to verify physics imports work
import { unit1Lessons } from './src/data/physics/unit1-mechanics.js';
import { unit2Lessons } from './src/data/physics/unit2-energy.js';
import { unit3Lessons } from './src/data/physics/unit3-fluids.js';
import { unit4Lessons } from './src/data/physics/unit4-thermodynamics.js';
import { unit5Lessons } from './src/data/physics/unit5-waves.js';
import { unit6Lessons } from './src/data/physics/unit6-materials.js';

const physicsLessons = {
  ...unit1Lessons,
  ...unit2Lessons,
  ...unit3Lessons,
  ...unit4Lessons,
  ...unit5Lessons,
  ...unit6Lessons
};

console.log('Total lessons:', Object.keys(physicsLessons).length);
console.log('Lesson 1:', physicsLessons[1]?.title);
console.log('Lesson 6:', physicsLessons[6]?.title);
console.log('Lesson 11:', physicsLessons[11]?.title);
console.log('Lesson 30:', physicsLessons[30]?.title);
console.log('All lesson IDs:', Object.keys(physicsLessons).sort((a, b) => a - b));
