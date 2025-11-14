// Complete Aircraft Engineering Curriculum
// MIT-Quality Content: Units 0-5 Complete!

import { unit0Foundations } from './planes/unit0-foundations.js';
import { allPlanesLessons } from './planes/units-complete.js';
import { allPlanesQuizzes } from './planes/all-quizzes.js';
// Note: Only MIT-quality lessons included (Units 0-5)
// Total: 20 comprehensive aircraft engineering lessons

// Create lessons object
export const planesLessons = {};

// Add Unit 0 (Foundations) - Lessons 0-5
// Convert string IDs (0.1, 0.2) to numeric IDs (0, 1, 2, 3, 4, 5)
// Transform structure to match lesson page expectations
const unit0Array = Object.values(unit0Foundations);
unit0Array.forEach((lesson, index) => {
  planesLessons[index] = {
    id: index,
    title: lesson.title,
    unit: 'Foundations: Math & Physics Bridge',
    duration: lesson.metadata?.estTime || '30 min',
    level: 'Beginner',
    emoji: '🎓',
    unitNumber: 0,
    lessonNumber: index + 1,
    introduction: lesson.description,
    content: {
      introduction: lesson.description,
      sections: [
        {
          title: lesson.subtitle || 'Core Concepts',
          content: `${lesson.coreIdea}\n\n**Learning Objectives:**\n${lesson.learningObjectives.map(obj => `• ${obj}`).join('\n')}`
        },
        {
          title: 'Key Equations',
          content: lesson.keyEquations.map(eq => `**${eq.meaning}:**\n${eq.eq}`).join('\n\n')
        },
        {
          title: 'Practice Problems',
          content: lesson.practiceProblems.map(prob => `**Problem ${prob.id}:**\n${prob.prompt}\n\n**Solution:** ${prob.solution}`).join('\n\n')
        }
      ],
      keyTakeaways: lesson.learningObjectives,
      vocabulary: []
    },
    quiz: allPlanesQuizzes[index] || { questions: [] }
  };
});

// Add Units 1-5 (MIT-quality content) - Lessons 6-19
allPlanesLessons.forEach((lesson, index) => {
  // Determine unit number based on lesson ID
  let unitNumber, lessonNumber, emoji;
  if (lesson.id < 12) {
    unitNumber = 1;
    lessonNumber = lesson.id - 5;
    emoji = '✈️';
  } else if (lesson.id < 14) {
    unitNumber = 2;
    lessonNumber = lesson.id - 11;
    emoji = '🌪️';
  } else if (lesson.id < 16) {
    unitNumber = 3;
    lessonNumber = lesson.id - 13;
    emoji = '🏗️';
  } else if (lesson.id < 18) {
    unitNumber = 4;
    lessonNumber = lesson.id - 15;
    emoji = '🔧';
  } else {
    unitNumber = 5;
    lessonNumber = lesson.id - 17;
    emoji = '🛫';
  }
  
  planesLessons[lesson.id] = {
    ...lesson,
    emoji,
    level: lesson.id < 12 ? 'Beginner' : lesson.id < 16 ? 'Intermediate' : 'Advanced',
    unitNumber,
    lessonNumber,
    content: {
      introduction: lesson.introduction,
      sections: lesson.sections,
      keyTakeaways: lesson.keyTakeaways,
      vocabulary: lesson.vocabulary
    },
    quiz: lesson.quiz || allPlanesQuizzes[lesson.id] || { questions: [] }
  };
});



export default planesLessons;
