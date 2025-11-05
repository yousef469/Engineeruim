export const unit1Lessons = {
  1: {
    id: 1,
    title: 'What is Motion?',
    subtitle: 'Understanding Displacement, Speed & Velocity',
    description: 'Learn the fundamental concepts of motion and how objects move through space',
    coreIdea: 'Displacement, speed, velocity',
    engineeringExample: 'Car on a road, rocket lift-off animation',
    content: {
      intro: 'Motion is everywhere in engineering. From cars on highways to rockets launching into space, understanding how things move is the foundation of all mechanical systems. Motion can take many forms - straight lines, curves, rotations, and oscillations - each with unique characteristics that engineers must understand.',
      concepts: [
        {
          title: '🌀 Types of Motion',
          explanation: 'Motion comes in different forms depending on the path an object follows. Linear motion is straight-line movement (car on highway). Circular motion involves rotation around a fixed point (fan blade, wheel). Oscillatory motion repeats back and forth (pendulum, spring). Random motion has no predictable pattern (dust particles in air).',
          example: 'A car engine combines all types: pistons move linearly up/down, crankshaft rotates circularly, valves oscillate open/closed, and fuel particles move randomly before combustion.'
        },
        {
          title: '📏 Distance vs Displacement',
          explanation: 'Distance is the total path length traveled - it only increases. Displacement is the straight-line distance from start to finish with direction - it can be zero even after traveling far.',
          example: 'If you drive around a 5 km circular track and return to start: distance = 5 km (you traveled that far), but displacement = 0 km (you ended where you began). A race car completing 100 laps travels 500 km but has zero displacement!'
        },
        {
          title: '⚡ Speed vs Velocity',
          explanation: 'Speed is a scalar (just magnitude): how fast you\'re moving. Velocity is a vector (magnitude + direction): how fast AND which way. Speed = Distance/Time. Velocity = Displacement/Time with direction.',
          example: 'Two cars both traveling at 100 km/h have the same speed. But if one goes North and one goes South, they have opposite velocities. A rocket at 1000 m/s upward has velocity = 1000 m/s ↑, while falling at 1000 m/s has velocity = 1000 m/s ↓'
        },
        {
          title: '🎯 Average vs Instantaneous',
          explanation: 'Average speed/velocity is calculated over a time period. Instantaneous speed/velocity is at a specific moment (what your speedometer shows right now).',
          example: 'On a road trip, your average speed might be 80 km/h over 3 hours, but your instantaneous speed varies: 0 km/h at red lights, 120 km/h on highway, 40 km/h in traffic.'
        },
        {
          title: '🔄 Relative Motion',
          explanation: 'Motion depends on your reference frame. An object can be moving relative to one observer but stationary relative to another.',
          example: 'You\'re sitting in a train moving at 200 km/h. Relative to the ground, you\'re moving at 200 km/h. Relative to the train, you\'re stationary (0 km/h). Relative to a train passing you at 250 km/h, you\'re moving backward at 50 km/h!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Navigation Systems',
          description: 'GPS calculates displacement (straight-line distance to destination) vs actual distance (road path). It shows both "5 km away" (displacement) and "8 km via Main St" (distance). Engineers optimize routes balancing shortest distance vs fastest time.'
        },
        {
          icon: '🚀',
          title: 'Rocket Launch Trajectory',
          description: 'Rockets need precise velocity control - both speed (7.8 km/s for orbit) and direction (must be tangent to Earth). Launch engineers calculate displacement from launch pad and velocity vector at every moment to ensure proper orbital insertion.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Navigation',
          description: 'Pilots monitor multiple velocities: airspeed (speed through air, ~900 km/h), ground speed (velocity relative to ground, varies with wind), and true airspeed (corrected for altitude). Wind can make ground speed very different from airspeed!'
        },
        {
          icon: '🏎️',
          title: 'Race Car Telemetry',
          description: 'F1 cars track instantaneous speed at every corner (data logged 1000 times/second). Engineers analyze speed traces to optimize racing lines. Drivers see average lap speed vs sector speeds to find where they\'re losing time.'
        },
        {
          icon: '🛰️',
          title: 'Satellite Orbital Mechanics',
          description: 'Satellites in geostationary orbit move at 3.07 km/s but appear stationary relative to Earth. Their displacement relative to ground is zero, but they travel 265,000 km daily! Engineers use relative motion to keep satellites positioned over specific locations.'
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
