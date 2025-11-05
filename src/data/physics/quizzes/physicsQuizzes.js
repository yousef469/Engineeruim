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
  // Unit 2: Energy (Lessons 6-10)
  6: {
    lessonId: 6,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is kinetic energy?',
        options: ['Energy of position', 'Energy of motion', 'Stored energy', 'Chemical energy'],
        correctAnswer: 1,
        explanation: 'Kinetic energy is the energy of motion, calculated as KE = ½mv²'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'If you double the speed of an object, its kinetic energy:',
        options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
        correctAnswer: 2,
        explanation: 'KE = ½mv². Since velocity is squared, doubling speed quadruples kinetic energy.'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'Potential energy can be converted to kinetic energy.',
        correctAnswer: true,
        explanation: 'Correct! Energy constantly converts between forms, like PE to KE in a falling object.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'A rocket on the launchpad has:',
        options: ['Only kinetic energy', 'Only potential energy', 'Both', 'Neither'],
        correctAnswer: 1,
        explanation: 'A stationary rocket has gravitational potential energy but no kinetic energy.'
      }
    ]
  },
  7: {
    lessonId: 7,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Work equals:',
        options: ['Force × Distance', 'Mass × Velocity', 'Power × Time', 'Energy / Time'],
        correctAnswer: 0,
        explanation: 'Work = Force × Distance. Work is done when a force moves an object.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Power is:',
        options: ['Work / Time', 'Force × Distance', 'Mass × Acceleration', 'Energy × Distance'],
        correctAnswer: 0,
        explanation: 'Power = Work / Time, measuring how quickly work is done.'
      },
      {
        id: 3,
        type: 'true-false',
        question: '1 horsepower equals approximately 746 Watts.',
        correctAnswer: true,
        explanation: 'Correct! 1 hp = 746 W, used for comparing engine power.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'A 300 hp engine produces how much power?',
        options: ['300 W', '3,000 W', '74,600 W', '223,800 W'],
        correctAnswer: 3,
        explanation: '300 hp × 746 W/hp = 223,800 W (about 224 kW)'
      }
    ]
  },
  8: {
    lessonId: 8,
    questions: [
      {
        id: 1,
        type: 'true-false',
        question: 'Energy can be created and destroyed.',
        correctAnswer: false,
        explanation: 'False! Energy cannot be created or destroyed, only converted between forms.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'In a pendulum, where is kinetic energy maximum?',
        options: ['At the highest point', 'At the lowest point', 'Halfway down', 'Constant everywhere'],
        correctAnswer: 1,
        explanation: 'At the lowest point, all PE has converted to KE, so velocity and KE are maximum.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'When a car brakes, kinetic energy converts to:',
        options: ['Potential energy', 'Heat energy', 'Chemical energy', 'Nuclear energy'],
        correctAnswer: 1,
        explanation: 'Friction converts kinetic energy to heat, which is why brakes get hot.'
      },
      {
        id: 4,
        type: 'true-false',
        question: 'A satellite in orbit has constant total energy.',
        correctAnswer: true,
        explanation: 'Correct! The satellite trades PE and KE, but total energy stays constant.'
      }
    ]
  },
  9: {
    lessonId: 9,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Efficiency is calculated as:',
        options: ['Total energy in', 'Useful energy out / Total energy in', 'Power × Time', 'Force × Distance'],
        correctAnswer: 1,
        explanation: 'Efficiency = (Useful Energy Out / Total Energy In) × 100%'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'A typical gasoline engine is about:',
        options: ['10% efficient', '30% efficient', '60% efficient', '90% efficient'],
        correctAnswer: 1,
        explanation: 'Gasoline engines are typically 25-30% efficient, with 70% becoming waste heat.'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'Electric motors are more efficient than gasoline engines.',
        correctAnswer: true,
        explanation: 'Correct! Electric motors are ~90% efficient vs ~30% for gas engines.'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'Where does most lost energy in a car engine go?',
        options: ['Sound', 'Light', 'Heat', 'Vibration'],
        correctAnswer: 2,
        explanation: 'Most lost energy becomes heat through exhaust, cooling, and friction.'
      }
    ]
  },
  10: {
    lessonId: 10,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Mechanical power is transmitted through:',
        options: ['Wires', 'Rotating shafts', 'Radio waves', 'Light'],
        correctAnswer: 1,
        explanation: 'Mechanical power uses rotating shafts, gears, and belts.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Electrical power equals:',
        options: ['Voltage × Current', 'Voltage / Current', 'Current / Voltage', 'Voltage + Current'],
        correctAnswer: 0,
        explanation: 'Electrical Power = Voltage × Current (P = V × I), measured in Watts.'
      },
      {
        id: 3,
        type: 'true-false',
        question: 'Hybrid cars use both mechanical and electrical power.',
        correctAnswer: true,
        explanation: 'Correct! Hybrids combine gas engines (mechanical) with electric motors (electrical).'
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'What advantage does electrical power have?',
        options: ['Higher efficiency', 'Long-distance transmission', 'More powerful', 'Cheaper'],
        correctAnswer: 1,
        explanation: 'Electrical power can be transmitted over long distances with minimal loss.'
      }
    ]
  }
};
