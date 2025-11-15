// Component to render enhanced lesson content with calculators and diagrams
import RocketEquationCalculator from './calculators/RocketEquationCalculator';
import BrakingDistanceCalculator from './calculators/BrakingDistanceCalculator';
import OhmsLawCalculator from './calculators/OhmsLawCalculator';
import RocketDiagram from './diagrams/RocketDiagram';

export default function EnhancedLessonContent({ lessonId, subject }) {
  // Rocket lessons with calculators/diagrams
  if (subject === 'rockets') {
    if (lessonId === 0 || lessonId === 7) {
      // Rocket Equation lessons
      return (
        <div>
          <RocketEquationCalculator />
          <RocketDiagram type="basic" />
        </div>
      );
    }
    if (lessonId === 6) {
      // Forces lesson
      return <RocketDiagram type="forces" />;
    }
    if (lessonId === 9) {
      // Staging lesson
      return <RocketDiagram type="staging" />;
    }
  }

  // Car lessons with calculators
  if (subject === 'cars') {
    if (lessonId === 6 || lessonId === 7) {
      // Vehicle dynamics / braking lessons
      return <BrakingDistanceCalculator />;
    }
  }

  // Electronics lessons with calculators
  if (subject === 'electronics') {
    if (lessonId === 0 || lessonId === 1) {
      // Basic electronics lessons
      return <OhmsLawCalculator />;
    }
  }

  return null;
}
