// Complete Electronics & Robotics Engineering Curriculum
// MIT-Quality Content with Real Engineering

import { allElectronicsLessons } from './electronics/all-units.js';

// Helper function to get unit name
function getUnitName(lessonId) {
  if (lessonId < 6) return 'Foundations: Math & Physics Bridge';
  if (lessonId < 10) return 'Power Electronics & Motors';
  if (lessonId < 15) return 'Embedded Systems & Control';
  return 'Robotics & Automation';
}

// Process all lessons
const allLessons = {};

allElectronicsLessons.forEach((lesson, index) => {
  const lessonId = lesson.id || index;
  
  // Handle Unit 0 lessons (different structure)
  if (typeof lessonId === 'string' || lessonId < 6) {
    allLessons[index] = {
      id: index,
      title: lesson.title,
      unit: 'Foundations: Math & Physics Bridge',
      duration: lesson.metadata?.estTime || '30 min',
      level: 'Beginner',
      introduction: lesson.description,
      content: {
        introduction: lesson.description,
        sections: [
          {
            title: lesson.subtitle || 'Core Concepts',
            content: `${lesson.coreIdea}\n\n**Learning Objectives:**\n${lesson.learningObjectives?.map(obj => `• ${obj}`).join('\n') || ''}`
          },
          {
            title: 'Key Equations',
            content: lesson.keyEquations?.map(eq => `**${eq.meaning}:**\n${eq.eq}`).join('\n\n') || 'No equations'
          },
          {
            title: 'Practice Problems',
            content: lesson.practiceProblems?.map(prob => `**Problem ${prob.id}:**\n${prob.prompt}\n\n**Solution:** ${prob.solution}`).join('\n\n') || 'No problems'
          }
        ],
        keyTakeaways: lesson.learningObjectives || [],
        vocabulary: []
      },
      quiz: lesson.quiz || { questions: [] }  // Preserve quiz data from lesson
    };
  } else {
    // Handle regular lessons (Units 1+)
    allLessons[lessonId] = {
      ...lesson,
      level: lessonId < 10 ? 'Intermediate' : lessonId < 15 ? 'Advanced' : 'Expert',
      unit: lesson.unit || getUnitName(lessonId),
      content: {
        introduction: lesson.introduction,
        sections: lesson.sections,
        keyTakeaways: lesson.keyTakeaways,
        vocabulary: lesson.vocabulary
      },
      quiz: lesson.quiz || { questions: [] }  // Preserve quiz data from lesson
    };
  }
});

export const electronicsLessons = allLessons;

export default electronicsLessons;
