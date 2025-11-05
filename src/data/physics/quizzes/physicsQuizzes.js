// Physics Quizzes for all 30 lessons
export const physicsQuizzes = {
  // Unit 1: Mechanics (Lessons 1-5)
  1: {
    lessonId: 1,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the difference between distance and displacement?',
        options: [
          'Distance is total path traveled, displacement is straight-line distance from start',
          'They are the same thing',
          'Distance is in meters, displacement is in kilometers',
          'Displacement is always larger than distance'
        ],
        correctAnswer: 0,
        explanation: 'Distance is the total path length traveled. Displacement is the straight-line distance from starting point to ending point.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'A car travels 100 km in 2 hours. What is its average speed?',
        options: ['25 km/h', '50 km/h', '100 km/h', '200 km/h'],
        correctAnswer: 1,
        explanation: 'Speed = Distance / Time = 100 km / 2 hours = 50 km/h'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'Velocity includes both speed and direction.',
        correctAnswer: true,
        explanation: 'Correct! Velocity is a vector quantity that includes both magnitude (speed) and direction.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'If you drive around a circular track and return to the start, what is your displacement?',
        options: ['Equal to the track length', 'Zero', 'Half the track length', 'Twice the track length'],
        correctAnswer: 1,
        explanation: 'Displacement is zero because you end up at the same point where you started.'
      }
    ]
  },
  2: {
    lessonId: 2,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is acceleration?',
        options: [
          'How fast something moves',
          'The rate of change of velocity',
          'The distance traveled',
          'The force applied'
        ],
        correctAnswer: 1,
        explanation: 'Acceleration is the rate at which velocity changes over time.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'A car goes from 0 to 60 mph in 6 seconds. What is its acceleration?',
        options: ['6 mph/s', '10 mph/s', '60 mph/s', '360 mph/s'],
        correctAnswer: 1,
        explanation: 'Acceleration = Change in velocity / Time = (60 - 0) / 6 = 10 mph/s'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'On a position-time graph, a steeper slope means faster motion.',
        correctAnswer: true,
        explanation: 'Correct! The slope of a position-time graph represents velocity.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'On a velocity-time graph, what does the slope represent?',
        options: ['Position', 'Velocity', 'Acceleration', 'Distance'],
        correctAnswer: 2,
        explanation: 'The slope of a velocity-time graph represents acceleration.'
      }
    ]
  },
  3: {
    lessonId: 3,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What does Newton's First Law state?",
        options: [
          'F = ma',
          'An object at rest stays at rest unless acted upon by a force',
          'For every action there is an equal and opposite reaction',
          'Energy is conserved'
        ],
        correctAnswer: 1,
        explanation: "Newton's First Law (Law of Inertia) states that an object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an external force."
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'A 1000 kg car needs to accelerate at 2 m/s². How much force is required?',
        options: ['500 N', '1000 N', '2000 N', '4000 N'],
        correctAnswer: 2,
        explanation: 'Using F = ma: Force = 1000 kg × 2 m/s² = 2000 N'
      },
      {
        id: 3,
        type: 'true-false',
        question: "Newton's Third Law explains how rockets work.",
        correctAnswer: true,
        explanation: 'Correct! Rockets push gas downward (action), and the gas pushes the rocket upward with equal force (reaction).'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'If you double the mass of an object, what happens to the force needed for the same acceleration?',
        options: ['Stays the same', 'Doubles', 'Halves', 'Quadruples'],
        correctAnswer: 1,
        explanation: 'From F = ma, if mass doubles and acceleration stays constant, force must also double.'
      }
    ]
  },
  4: {
    lessonId: 4,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the weight of a 1000 kg car on Earth? (g = 9.8 m/s²)',
        options: ['1000 N', '5000 N', '9800 N', '10000 N'],
        correctAnswer: 2,
        explanation: 'Weight = Mass × g = 1000 kg × 9.8 m/s² = 9800 N'
      },
      {
        id: 2,
        type: 'true-false',
        question: 'The normal force is always equal to the weight of an object.',
        correctAnswer: false,
        explanation: 'False! Normal force equals weight only on a flat, horizontal surface with no other vertical forces.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'What force allows car tires to grip the road?',
        options: ['Gravity', 'Normal force', 'Friction', 'Air resistance'],
        correctAnswer: 2,
        explanation: 'Friction between the tires and road surface provides the grip needed for acceleration, braking, and turning.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'In a free-body diagram, which direction does gravity always point?',
        options: ['Up', 'Down', 'Sideways', 'It depends on the object'],
        correctAnswer: 1,
        explanation: 'Gravity (weight) always points downward toward the center of the Earth.'
      }
    ]
  },
  5: {
    lessonId: 5,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is momentum?',
        options: [
          'Force × Time',
          'Mass × Velocity',
          'Mass × Acceleration',
          'Force × Distance'
        ],
        correctAnswer: 1,
        explanation: 'Momentum = Mass × Velocity. It represents "mass in motion".'
      },
      {
        id: 2,
        type: 'true-false',
        question: 'In a collision, total momentum is always conserved.',
        correctAnswer: true,
        explanation: 'Correct! The Law of Conservation of Momentum states that total momentum before collision equals total momentum after collision.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Why do airbags reduce injury in car crashes?',
        options: [
          'They reduce the momentum change',
          'They increase collision time, reducing force',
          'They increase the force',
          'They stop the car faster'
        ],
        correctAnswer: 1,
        explanation: 'Airbags increase the collision time, which reduces the force on passengers (F = Δp/Δt).'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'A truck and a car have the same speed. Which has more momentum?',
        options: ['The car', 'The truck', 'They have the same momentum', 'Cannot determine'],
        correctAnswer: 1,
        explanation: 'The truck has more momentum because momentum = mass × velocity, and the truck has greater mass.'
      }
    ]
  }
};
