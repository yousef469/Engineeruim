// Complete Automotive Engineering Curriculum
// MIT-Quality Content with Real Engineering

import { allAutomotiveLessons } from './cars/all-units.js';
import { generateAllAutomotiveLessons } from './generateAutomotiveLessons.js';

// MIT-quality lessons from complete units
const mitQualityLessons = allAutomotiveLessons;

// Generate remaining lessons for complete curriculum
const generatedLessons = generateAllAutomotiveLessons();

// Helper function to get unit name
function getUnitName(lessonId) {
  const unitBoundaries = [7, 15, 23, 30, 38, 47, 54, 62, 70, 76];
  const units = [
    'Fundamentals of Cars',
    'Vehicle Mechanics',
    'Vehicle Dynamics',
    'Automotive Materials & Design',
    'Electrical and Electronic Systems',
    'Powertrain & Energy Systems',
    'Control Systems & Automation',
    'Manufacturing & Design Process',
    'Maintenance & Diagnostics',
    'Future of Automotive Engineering'
  ];
  
  for (let i = 0; i < unitBoundaries.length; i++) {
    if (lessonId < unitBoundaries[i]) {
      return units[i];
    }
  }
  return units[units.length - 1];
}

// Merge MIT-quality lessons with generated lessons
const allLessons = {};

// Add MIT-quality lessons first (they override generated ones)
mitQualityLessons.forEach((lesson, index) => {
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
      quiz: { questions: [] }
    };
  } else {
    // Handle regular lessons (Units 1+)
    allLessons[lessonId] = {
      ...lesson,
      level: lessonId < 6 ? 'Beginner' : 'Intermediate',
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

// Add generated lessons for IDs not covered by MIT-quality content
Object.keys(generatedLessons).forEach(key => {
  const lessonId = parseInt(key);
  if (!allLessons[lessonId]) {
    const lesson = generatedLessons[key];
    allLessons[key] = {
      ...lesson,
      level: lesson.id < 36 ? 'Beginner' : lesson.id < 78 ? 'Intermediate' : lesson.id < 126 ? 'Advanced' : lesson.id < 166 ? 'Expert' : 'Master',
      unit: getUnitName(lesson.id),
      content: {
        introduction: lesson.introduction,
        sections: lesson.sections,
        keyTakeaways: lesson.keyTakeaways,
        vocabulary: lesson.vocabulary
      },
      quiz: {
        questions: []
      }
    };
  }
});

export const carsLessons = allLessons;

export default carsLessons;
