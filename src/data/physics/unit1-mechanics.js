export const unit1Lessons = {
  1: {
    id: 1,
    title: 'Understanding Motion',
    subtitle: 'The Foundation of All Movement in Engineering',
    description: 'Master the core concepts of motion: position, displacement, speed, velocity, and reference frames',
    coreIdea: 'Motion is change in position over time, relative to a reference frame',
    engineeringExample: 'Car navigation, rocket trajectories, aircraft flight paths',
    content: {
      intro: '🚀 Motion is everywhere in engineering - from cars on highways to rockets in space. But what IS motion? Motion is a change in position of an object with time. Here\'s the key insight: motion only makes sense relative to something else (a reference point). Even when you feel still, you\'re moving with Earth at 1,670 km/h! Understanding motion is the foundation of all mechanical engineering.',
      concepts: [
        {
          title: '🧠 1. The Concept of Motion (Core Idea)',
          explanation: 'Motion means an object\'s position changes over time. But motion is RELATIVE - it depends on what you compare yourself to. If your position changes relative to a reference point → you\'re in motion. If not → you\'re at rest (relative to that frame). Key insight: There\'s no absolute rest in the universe - only motion relative to something. Even sitting "still," you\'re moving with Earth (1,670 km/h rotation + 107,000 km/h around Sun)!',
          example: 'You\'re on a plane flying at 900 km/h. Relative to the plane, you\'re at rest (0 km/h). Relative to the ground, you\'re moving at 900 km/h. Relative to another plane flying beside you, you\'re at rest again! Same situation, different motion - it all depends on your reference frame.'
        },
        {
          title: '📍 2. Position & Displacement',
          explanation: 'POSITION is where you are at any moment (like coordinates on a map: x, y, z). DISPLACEMENT is the straight-line distance from where you started to where you ended up (with direction). Your PATH is the actual route you took. Key insight: You can travel a long path but have zero displacement if you return to start!',
          example: 'Walking around a city block: Start at corner A, walk 100m north to B, 100m east to C, 100m south to D, 100m west back to A. Your PATH = 400m (walked all 4 sides). Your DISPLACEMENT = 0m (ended where you started - straight line from start to end is zero). Your POSITION changed constantly (A→B→C→D→A) but final displacement is zero!'
        },
        {
          title: '🛣️ 3. Distance vs Displacement',
          explanation: 'DISTANCE = total path length (scalar - just a number, always positive). DISPLACEMENT = straight line from start to end (vector - has direction, can be zero). Think of it this way: Distance tells you "how much ground you covered." Displacement tells you "how far you are from where you started." Distance can never decrease, but displacement can be zero even after traveling far!',
          example: 'Race car example: Drive 5 km north, then 5 km south back to start. DISTANCE = 10 km (you drove 5+5). DISPLACEMENT = 0 km (you ended at the starting point). After 100 laps on a 5 km circular track: Distance = 500 km (total driven), Displacement = 0 km (back at start). GPS shows both: "8 km via Main St" (distance along roads) vs "5 km away" (displacement - straight line).'
        },
        {
          title: '⚡ 4. Speed and Velocity',
          explanation: 'SPEED = how fast you move (scalar - just magnitude, no direction). Formula: speed = distance/time. VELOCITY = speed WITH direction (vector). Formula: velocity = displacement/time. Key difference: Two objects can have the same speed but different velocities if moving in different directions. Velocity can change even if speed stays constant - just change direction!',
          example: 'Two cars both traveling at 100 km/h. Car A going North has velocity = 100 km/h ↑. Car B going South has velocity = 100 km/h ↓. SAME SPEED (100 km/h), but OPPOSITE VELOCITIES! A car turning around a circular track at constant 80 km/h: speed stays constant, but velocity constantly changes because direction changes. Your speedometer shows speed. Your GPS shows velocity (speed + direction like "100 km/h Northeast").'
        },
        {
          title: '🎯 5. Average vs Instantaneous',
          explanation: 'AVERAGE SPEED/VELOCITY = calculated over a time period (total distance/total time). INSTANTANEOUS SPEED/VELOCITY = at a specific moment (what your speedometer shows RIGHT NOW). Average smooths out all the variations. Instantaneous captures the exact moment. Your trip computer shows average. Your speedometer shows instantaneous.',
          example: 'Road trip: You drive 240 km in 3 hours. AVERAGE speed = 240/3 = 80 km/h (one number for entire trip). But your INSTANTANEOUS speed varied constantly: 0 km/h at red lights, 120 km/h on highway, 40 km/h in city traffic, 0 km/h at gas station. Same trip, but instantaneous speed changed every moment while average stayed 80 km/h for the whole journey.'
        },
        {
          title: '🌀 6. Acceleration (Change in Velocity)',
          explanation: 'ACCELERATION = rate of change of velocity. Formula: a = Δv/Δt (change in velocity / time). Acceleration happens when: (1) speed changes (speeding up/slowing down), OR (2) direction changes (turning), OR (3) both! Zero acceleration = constant velocity (same speed AND direction). Acceleration is a vector - it has direction.',
          example: 'Three examples: (1) Car speeding up from 0 to 100 km/h in 10 seconds: acceleration = +10 km/h/s (positive = speeding up). (2) Car braking from 100 to 0 km/h in 5 seconds: acceleration = -20 km/h/s (negative = slowing down). (3) Car turning at constant 60 km/h: still accelerating! (direction changing even though speed constant). Rocket launch: massive acceleration upward (speed AND altitude increasing).'
        },
        {
          title: '🧭 7. Reference Frames & Relativity',
          explanation: 'Motion depends on WHERE you\'re observing from (your reference frame). Same object can be moving AND at rest simultaneously - depends on the observer! There\'s no absolute rest - only motion relative to something. This is why we say "relative to" when describing motion. Different observers see different motion for the same object!',
          example: 'You\'re on a train moving at 200 km/h, throwing a ball straight up. To YOU (inside train): ball goes straight up and down, lands in your hand - you see vertical motion. To someone OUTSIDE (on ground): ball follows a curved path forward while going up and down - they see parabolic motion. SAME ball, SAME throw, but DIFFERENT observed motion! You are at rest relative to the train (0 km/h), but moving at 200 km/h relative to the ground. Both are correct - it depends on the reference frame!'
        },
        {
          title: '🪐 8. Types of Motion',
          explanation: 'Motion comes in different patterns: LINEAR (straight line - car on highway), CIRCULAR (rotating path - fan blade, wheel), OSCILLATORY (repetitive back & forth - pendulum, spring, piston), RANDOM (unpredictable - gas molecules, dust particles). Real engineering systems often combine multiple types!',
          example: 'Car engine combines ALL four types: (1) LINEAR - Pistons move up/down in straight lines inside cylinders. (2) CIRCULAR - Crankshaft rotates in spinning motion. (3) OSCILLATORY - Valves open/close repeatedly in back-and-forth motion. (4) RANDOM - Fuel molecules move unpredictably before combustion. Airplane example: moves linearly through air, propeller rotates circularly, control surfaces oscillate for stability. Understanding all motion types helps engineers design better systems!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'GPS Navigation Systems',
          description: 'Your GPS calculates TWO things: displacement ("5 km away" - straight line to destination) and distance ("8 km via Main St" - actual road path). It uses velocity (speed + direction) to estimate arrival time. Engineers optimize routes balancing shortest distance vs fastest time vs fuel efficiency.'
        },
        {
          icon: '🚀',
          title: 'Rocket Launch Trajectories',
          description: 'Rockets need PRECISE velocity control - both speed (7.8 km/s for orbit) AND direction (must be tangent to Earth\'s surface). Launch engineers track position, displacement from launch pad, and velocity vector every millisecond. Small velocity errors = mission failure. Reference frame matters: velocity relative to Earth vs relative to Sun!'
        },
        {
          icon: '✈️',
          title: 'Aircraft Flight Navigation',
          description: 'Pilots monitor MULTIPLE velocities: airspeed (speed through air ~900 km/h), ground speed (velocity relative to ground - varies with wind), true airspeed (corrected for altitude). A plane can have 900 km/h airspeed but only 700 km/h ground speed (headwind), or 1100 km/h ground speed (tailwind). Reference frames matter!'
        },
        {
          icon: '🏎️',
          title: 'F1 Race Car Telemetry',
          description: 'F1 cars track instantaneous speed 1000 times/second at every point on track. Engineers analyze speed traces to optimize racing lines. Drivers see average lap speed (e.g., 210 km/h) vs sector speeds to find where they\'re losing time. Acceleration data shows braking points and corner exit performance.'
        },
        {
          icon: '🛰️',
          title: 'Satellite Orbital Mechanics',
          description: 'Geostationary satellites move at 3.07 km/s but appear STATIONARY relative to Earth (same reference frame). Their displacement relative to ground = 0, but they travel 265,000 km daily! Engineers use relative motion to keep satellites positioned over specific locations. Different reference frames = different observed motion!'
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
