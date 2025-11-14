// Complete Electronics & Robotics Curriculum - All Units Combined
// 20 MIT-Quality Lessons

import { unit0Foundations } from './unit0-foundations.js';
import { electronicsUnit1PowerMotors } from './unit1-power-motors.js';
import { electronicsUnit2EmbeddedControl } from './unit2-embedded-control.js';
import { electronicsUnit3RoboticsAutomation } from './unit3-robotics-automation.js';

// Convert unit0Foundations object to array
const unit0Array = Object.values(unit0Foundations);

// Combine all units - Total 20 lessons
export const allElectronicsLessons = [
  ...unit0Array,                          // Lessons 0-5: Foundations (6 lessons)
  ...electronicsUnit1PowerMotors,        // Lessons 6-9: Power Electronics & Motors (4 lessons)
  ...electronicsUnit2EmbeddedControl,    // Lessons 10-14: Embedded Systems & Control (5 lessons)
  ...electronicsUnit3RoboticsAutomation  // Lessons 15-19: Robotics & Automation (5 lessons)
];

// Export individual units for flexibility
export {
  unit0Foundations,
  electronicsUnit1PowerMotors,
  electronicsUnit2EmbeddedControl,
  electronicsUnit3RoboticsAutomation
};

export default allElectronicsLessons;
