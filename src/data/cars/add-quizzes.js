// Script to add quizzes to all automotive lessons
import automotiveQuizzes from './quizzes-complete.js';
import { unit0Foundations } from './unit0-foundations.js';
import { carsUnit1Complete } from './unit1-complete.js';
import { carsUnit2Powertrain } from './unit2-powertrain.js';
import { carsUnit3SystemsDesign } from './unit3-systems-design.js';

// Add quizzes to Unit 1 lessons
export const unit1WithQuizzes = carsUnit1Complete.map(lesson => ({
  ...lesson,
  quiz: { questions: automotiveQuizzes[lesson.id] || [] }
}));

// Add quizzes to Unit 2 lessons
export const unit2WithQuizzes = carsUnit2Powertrain.map(lesson => ({
  ...lesson,
  quiz: { questions: automotiveQuizzes[lesson.id] || [] }
}));

// Add quizzes to Unit 3 lessons
export const unit3WithQuizzes = carsUnit3SystemsDesign.map(lesson => ({
  ...lesson,
  quiz: { questions: automotiveQuizzes[lesson.id] || [] }
}));

export { unit0Foundations, unit1WithQuizzes, unit2WithQuizzes, unit3WithQuizzes };
