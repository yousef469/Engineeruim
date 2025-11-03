// Script to integrate enhanced lessons 7-11 into main file
const fs = require('fs');

// Read the main file
const mainFile = fs.readFileSync('src/data/mathematicsLessonsData.js', 'utf8');

// Read the enhanced lessons
const enhancedFile = fs.readFileSync('src/data/mathematicsLessonsEnhanced_7_12.js', 'utf8');

// Extract just the lesson objects from enhanced file (remove export statement)
// Find the start of the first lesson (after the array opening)
const firstLessonStart = enhancedFile.indexOf('  // LESSON 7: 3D Coordinate Geometry - ENHANCED');
// Find the end (before the closing ];)
const lastLessonEnd = enhancedFile.lastIndexOf('  }\n];');

if (firstLessonStart === -1 || lastLessonEnd === -1) {
  console.error('Could not find enhanced lessons boundaries');
  console.log('firstLessonStart:', firstLessonStart);
  console.log('lastLessonEnd:', lastLessonEnd);
  process.exit(1);
}

const enhancedLessonsContent = enhancedFile.substring(firstLessonStart, lastLessonEnd + 4); // +4 to include "  }\n"

// Find where lesson 7 starts in main file
const lesson7Start = mainFile.indexOf('  // LESSON 7: Coordinate Geometry');

// Find where export statement is
const exportIndex = mainFile.indexOf('export default mathematicsLessons;');

if (lesson7Start === -1 || exportIndex === -1) {
  console.error('Could not find lesson boundaries');
  console.log('lesson7Start:', lesson7Start);
  console.log('exportIndex:', exportIndex);
  process.exit(1);
}

// Find the array closing bracket before export
const lesson11End = mainFile.lastIndexOf('];', exportIndex);

// Build the new file
const beforeLesson7 = mainFile.substring(0, lesson7Start);

// Add comma before first enhanced lesson if needed
const enhancedWithComma = ',\n\n' + enhancedLessonsContent.trim();

const afterLesson11 = '\n];\n\nexport default mathematicsLessons;\n';

const newContent = beforeLesson7 + enhancedWithComma + afterLesson11;

// Write the new file
fs.writeFileSync('src/data/mathematicsLessonsData.js', newContent, 'utf8');

console.log('✅ Successfully integrated enhanced lessons 7-11!');
console.log('Backup saved as: src/data/mathematicsLessonsData.backup.js');
