export const unit1Lessons = {
  1: {
    id: 1,
    title: 'What is Motion?',
    subtitle: 'Understanding Displacement, Speed & Velocity',
    description: 'Learn the fundamental concepts of motion and how objects move through space',
    coreIdea: 'Displacement, speed, velocity',
    engineeringExample: 'Car on a road, rocket lift-off animation',
    content: {
      intro: 'Motion is everywhere in engineering. From cars on highways to rockets launching into space, understanding how things move is the foundation of all mechanical systems.',
      concepts: [
        {
          title: 'Distance vs Displacement',
          explanation: 'Distance is how far you travel. Displacement is how far you are from where you started.',
          example: 'If you drive around a circular track and return to start, distance = track length, but displacement = 0!'
        },
        {
          title: 'Speed',
          explanation: 'How fast something moves. Speed = Distance / Time',
          example: 'A car traveling 100 km in 2 hours has a speed of 50 km/h'
        },
        {
          title: 'Velocity',
          explanation: 'Speed with direction. Velocity tells you how fast AND which way.',
          example: 'A rocket moving at 1000 m/s upward has velocity = 1000 m/s ↑'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Navigation',
          description: 'GPS systems calculate your displacement (straight-line distance to destination) vs distance (actual road path)'
        },
        {
          icon: '🚀',
          title: 'Rocket Launch',
          description: 'Rockets need precise velocity control - both speed and direction - to reach orbit'
        },
        {
          icon: '✈️',
          title: 'Aircraft Flight',
          description: 'Pilots monitor airspeed (speed through air) and ground speed (velocity relative to ground)'
        }
      ]
    }
  },
  2: {
    id: 2,
    title: 'Acceleration & Graphs',
    subtitle: 'How Speed Changes Over Time',
    description: 'Master the concept of acceleration and learn to read motion graphs',
    coreIdea: 'Change of velocity over time',
    engineeringExample: 'Airplane takeoff acceleration',
    content: {
      intro: 'Acceleration is the rate at which velocity changes. Every time you press the gas pedal or hit the brakes, you\'re creating acceleration.',
      concepts: [
        {
          title: 'What is Acceleration?',
          explanation: 'Acceleration = Change in Velocity / Time. It measures how quickly speed changes.',
          example: 'A car going from 0 to 60 mph in 6 seconds has acceleration of 10 mph/s'
        },
        {
          title: 'Position-Time Graphs',
          explanation: 'Shows where an object is at each moment. Slope = velocity',
          example: 'Steep slope = fast motion, flat line = stopped'
        },
        {
          title: 'Velocity-Time Graphs',
          explanation: 'Shows how fast an object moves at each moment. Slope = acceleration',
          example: 'Straight line up = constant acceleration (like a car speeding up steadily)'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Airplane Takeoff',
          description: 'Commercial jets accelerate at ~2.5 m/s² during takeoff, reaching 250 km/h in about 30 seconds'
        },
        {
          icon: '🚗',
          title: 'Sports Car Performance',
          description: 'High-performance cars can accelerate 0-100 km/h in under 3 seconds'
        },
        {
          icon: '🚀',
          title: 'Rocket Acceleration',
          description: 'Space Shuttle accelerated at 3g (30 m/s²) - astronauts feel 3x their weight!'
        }
      ]
    }
  },
  3: {
    id: 3,
    title: "Newton's Three Laws",
    subtitle: 'The Foundation of All Motion',
    description: 'Understand the three laws that govern every moving object in the universe',
    coreIdea: 'The 3 laws in interactive style',
    engineeringExample: 'Rocket thrust vs weight',
    content: {
      intro: 'Sir Isaac Newton discovered three simple laws that explain ALL motion - from falling apples to orbiting satellites.',
      concepts: [
        {
          title: "First Law: Inertia",
          explanation: 'An object at rest stays at rest, an object in motion stays in motion (unless a force acts on it)',
          example: 'Passengers lurch forward when a car brakes suddenly - they want to keep moving!'
        },
        {
          title: 'Second Law: F = ma',
          explanation: 'Force = Mass × Acceleration. More force = more acceleration. More mass = less acceleration.',
          example: 'Pushing a shopping cart (light) is easier than pushing a car (heavy)'
        },
        {
          title: 'Third Law: Action-Reaction',
          explanation: 'For every action, there is an equal and opposite reaction',
          example: 'Rocket pushes gas down, gas pushes rocket up with equal force'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Propulsion',
          description: 'Rockets work by Newton\'s 3rd Law - expelling gas downward creates upward thrust'
        },
        {
          icon: '🚗',
          title: 'Car Acceleration',
          description: 'F = ma: A 1000kg car needs 2000N force to accelerate at 2 m/s²'
        },
        {
          icon: '✈️',
          title: 'Aircraft Thrust',
          description: 'Jet engines push air backward (action), creating forward thrust (reaction)'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Forces & Free-Body Diagrams',
    subtitle: 'Visualizing All Forces Acting on Objects',
    description: 'Learn to identify and analyze forces using engineering diagrams',
    coreIdea: 'Gravity, friction, normal force',
    engineeringExample: 'Vehicle tire friction',
    content: {
      intro: 'Engineers use Free-Body Diagrams (FBDs) to visualize all forces acting on an object. This is essential for designing safe vehicles and structures.',
      concepts: [
        {
          title: 'Gravity (Weight)',
          explanation: 'Force pulling everything toward Earth. Weight = Mass × 9.8 m/s²',
          example: 'A 1000kg car has weight = 9800N pulling it down'
        },
        {
          title: 'Normal Force',
          explanation: 'The support force from a surface pushing up on an object',
          example: 'When you stand on the ground, it pushes up on you with force equal to your weight'
        },
        {
          title: 'Friction',
          explanation: 'Force that opposes motion between surfaces. Essential for braking and turning.',
          example: 'Car tires grip the road through friction - no friction = no control!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Vehicle Braking',
          description: 'Friction between brake pads and rotors slows the car. Tire friction prevents skidding.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Landing',
          description: 'Pilots calculate normal force on landing gear to ensure safe touchdown'
        },
        {
          icon: '🚀',
          title: 'Rocket on Launchpad',
          description: 'Thrust must overcome weight (gravity) for liftoff. FBD shows: Thrust ↑ vs Weight ↓'
        }
      ]
    }
  },
  5: {
    id: 5,
    title: 'Momentum & Collisions',
    subtitle: 'Conservation of Momentum in Action',
    description: 'Understand how momentum is conserved in crashes and explosions',
    coreIdea: 'Conservation of momentum',
    engineeringExample: 'Car crash simulation, rocket staging',
    content: {
      intro: 'Momentum is "mass in motion" and it\'s always conserved. This principle is crucial for crash safety and rocket design.',
      concepts: [
        {
          title: 'What is Momentum?',
          explanation: 'Momentum = Mass × Velocity. Heavy or fast objects have more momentum.',
          example: 'A truck at 50 km/h has more momentum than a car at 50 km/h'
        },
        {
          title: 'Conservation Law',
          explanation: 'Total momentum before collision = Total momentum after collision',
          example: 'Two cars colliding: their combined momentum stays the same'
        },
        {
          title: 'Impulse',
          explanation: 'Impulse = Force × Time. Changing momentum requires impulse.',
          example: 'Airbags increase collision time, reducing force on passengers'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Crash Safety',
          description: 'Crumple zones extend collision time, reducing force (F = Δp/Δt). Saves lives!'
        },
        {
          icon: '🚀',
          title: 'Rocket Staging',
          description: 'Rockets drop empty stages to reduce mass, increasing velocity with same momentum'
        },
        {
          icon: '✈️',
          title: 'Aircraft Collision Avoidance',
          description: 'Systems calculate momentum vectors to prevent mid-air collisions'
        }
      ]
    }
  }
};
