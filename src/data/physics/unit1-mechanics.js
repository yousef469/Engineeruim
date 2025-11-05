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
          explanation: 'POSITION (x, y, z) is your location at a given time - like coordinates on a map. DISPLACEMENT is the straight-line arrow from start position to end position (vector with direction). PATH is the actual route you followed.\n\n📊 COMPARISON TABLE:\n┌─────────────┬──────────────────────┬──────────────────────┐\n│ Concept     │ Position             │ Displacement         │\n├─────────────┼──────────────────────┼──────────────────────┤\n│ What is it? │ Location at a time   │ Change in position   │\n│ Type        │ Coordinates (x,y,z)  │ Vector (arrow)       │\n│ Example     │ "At point (5,3)"     │ "Moved 10m North"    │\n│ Visual      │ 📍 Dot on map        │ ➡️ Arrow start→end   │\n└─────────────┴──────────────────────┴──────────────────────┘',
          example: '🔲 VISUAL EXAMPLE - Walking Around a Block:\n\nLEFT SIDE (Path Taken):          RIGHT SIDE (Displacement):\n    B ──100m── C                      A (Start)\n    │          │                       │\n  100m       100m                      │ 0m (straight line)\n    │          │                       │\n    A ──100m── D                      A (End)\n\nPath = 400m total                 Displacement = 0m\n(walked all 4 sides)              (ended where you started!)\n\nYour POSITION changed constantly (A→B→C→D→A), but final DISPLACEMENT = 0!'
        },
        {
          title: '🛣️ 3. Distance vs Displacement',
          explanation: 'DISTANCE = total path length covered (scalar - only magnitude). DISPLACEMENT = shortest straight line from start → end (vector - magnitude + direction).\n\n📊 COMPARISON TABLE:\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Property     │ Distance            │ Displacement        │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ Type         │ Scalar (magnitude)  │ Vector (mag + dir)  │\n│ Path         │ Total path length   │ Straight line only  │\n│ Can be zero? │ No (always ≥ 0)     │ Yes (if return)     │\n│ Direction?   │ No                  │ Yes (North, etc)    │\n│ Formula      │ Add all segments    │ Start → End line    │\n│ Symbol       │ d                   │ Δx or s⃗            │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🏁 RACE CAR EXAMPLE:\n\nLEFT (Distance):                RIGHT (Displacement):\n    ↑ 5km North                     Start\n    │                                 │\n  Start                               │ 0 km!\n    │                                 │\n    ↓ 5km South                     Start (same point)\n\nDistance = 10 km                Displacement = 0 km\n(5 up + 5 down)                 (ended at start)\n\n🏎️ After 100 laps on 5km track:\nDistance = 500 km (all laps)    Displacement = 0 km (same spot!)'
        },
        {
          title: '⚡ 4. Speed and Velocity',
          explanation: 'SPEED = how fast (scalar). VELOCITY = how fast + which way (vector).\n\n📊 COMPARISON TABLE:\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Property     │ Speed               │ Velocity            │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ Type         │ Scalar              │ Vector              │\n│ Formula      │ distance/time       │ displacement/time   │\n│ Direction?   │ No                  │ Yes (essential!)    │\n│ Can be -?    │ No (always ≥ 0)     │ Yes (opposite dir)  │\n│ Change?      │ Only if faster/slow │ If speed OR dir     │\n│ Shows on     │ Speedometer         │ GPS navigation      │\n│ Example      │ "100 km/h"          │ "100 km/h North"    │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🚗 TWO CARS EXAMPLE:\n\nLEFT (Car A):                   RIGHT (Car B):\n    ↑                               ↓\n  100 km/h                        100 km/h\n  North                           South\n\nSpeed: 100 km/h                 Speed: 100 km/h\nVelocity: 100 km/h ↑            Velocity: 100 km/h ↓\n\nSAME SPEED, OPPOSITE VELOCITIES!\n\n🔄 Circular Track: Car at constant 80 km/h\n→ Speed: constant (80 km/h)\n→ Velocity: constantly changing (direction changes!)'
        },
        {
          title: '🎯 5. Average vs Instantaneous',
          explanation: 'AVERAGE = over time period. INSTANTANEOUS = at exact moment.\n\n📊 COMPARISON TABLE:\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Property     │ Average             │ Instantaneous       │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ Time period  │ Over duration       │ Single moment       │\n│ Formula      │ total dist/total t  │ At specific time    │\n│ Smooths?     │ Yes (averages out)  │ No (exact now)      │\n│ Shows on     │ Trip computer       │ Speedometer         │\n│ Varies?      │ One value           │ Changes constantly  │\n│ Example      │ "80 km/h trip avg"  │ "120 km/h now"      │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🛣️ ROAD TRIP EXAMPLE:\n\nLEFT (Average):                 RIGHT (Instantaneous):\n240 km in 3 hours                Time    Speed\n= 80 km/h average                0:00    0 km/h (start)\n                                 0:30    120 km/h (highway)\nOne number for                   1:00    0 km/h (red light)\nentire trip                      1:30    40 km/h (traffic)\n                                 2:00    0 km/h (gas stop)\n                                 2:30    120 km/h (highway)\n\nAverage = 80 km/h               Instantaneous varies!\n(total/total)                   (changes every moment)'
        },
        {
          title: '🌀 6. Acceleration (Change in Velocity)',
          explanation: 'ACCELERATION = rate of change of velocity. Formula: a = Δv/Δt\n\n📊 WHEN DOES ACCELERATION HAPPEN?\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Situation    │ Speed Changes?      │ Direction Changes?  │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ Speeding up  │ ✅ Yes (increases)  │ ❌ No               │\n│ Slowing down │ ✅ Yes (decreases)  │ ❌ No               │\n│ Turning      │ ❌ No (constant)    │ ✅ Yes              │\n│ Both         │ ✅ Yes              │ ✅ Yes              │\n│ Constant vel │ ❌ No               │ ❌ No (a = 0)       │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🚗 THREE ACCELERATION EXAMPLES:\n\nLEFT (Speeding Up):             MIDDLE (Slowing Down):          RIGHT (Turning):\n0 → 100 km/h                    100 → 0 km/h                    60 km/h constant\nin 10 seconds                   in 5 seconds                    but turning\n\na = +10 km/h/s                  a = -20 km/h/s                  a ≠ 0!\n(positive)                      (negative)                      (direction changes)\n\nSpeed increases                 Speed decreases                 Speed constant\nDirection same                  Direction same                  Direction changes\n\n🚀 Rocket: Accelerates upward (speed increases + direction upward)'
        },
        {
          title: '🧭 7. Reference Frames & Relativity',
          explanation: 'Motion depends on WHERE you\'re observing from (your reference frame). Same object = different motion for different observers!\n\n📊 SAME PERSON, DIFFERENT REFERENCE FRAMES:\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Observer     │ Reference Frame     │ Your Velocity       │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ You          │ Relative to train   │ 0 km/h (at rest)    │\n│ Ground       │ Relative to Earth   │ 200 km/h (moving)   │\n│ Other train  │ Relative to train   │ 0 km/h (same speed) │\n│ Faster train │ Relative to it      │ -50 km/h (backward) │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🚂 BALL THROWING ON TRAIN:\n\nLEFT (Inside Train View):      RIGHT (Outside Ground View):\nYou throw ball up ↑             Ball follows curved path\n    │                                  ╱│╲\n    │                                ╱  │  ╲\n    ↓                              ╱    ↓    ╲\nBall lands in hand              →              →\n\nPath: Straight up/down          Path: Curved parabola\nYour motion: 0 km/h             Your motion: 200 km/h\n(relative to train)             (relative to ground)\n\nSAME BALL, SAME THROW, DIFFERENT OBSERVED MOTION!'
        },
        {
          title: '🪐 8. Types of Motion',
          explanation: 'Motion comes in different patterns. Real systems combine multiple types!\n\n📊 FOUR TYPES OF MOTION:\n┌──────────────┬─────────────────────┬─────────────────────┐\n│ Type         │ Path Pattern        │ Example             │\n├──────────────┼─────────────────────┼─────────────────────┤\n│ Linear       │ Straight line →     │ Car on highway      │\n│ Circular     │ Rotating ⭕         │ Fan blade, wheel    │\n│ Oscillatory  │ Back & forth ↔️     │ Pendulum, spring    │\n│ Random       │ Unpredictable 💫    │ Gas molecules       │\n└──────────────┴─────────────────────┴─────────────────────┘',
          example: '🚗 CAR ENGINE - ALL 4 TYPES COMBINED:\n\nLINEAR:                         CIRCULAR:\nPistons ↕️                      Crankshaft ⭕\nUp/down in cylinders            Spinning motion\n\nOSCILLATORY:                    RANDOM:\nValves ↔️                       Fuel molecules 💫\nOpen/close repeatedly           Before combustion\n\n✈️ AIRPLANE:\n→ Linear: moves through air\n⭕ Circular: propeller rotates\n↔️ Oscillatory: control surfaces adjust\n\nEngineers must understand ALL motion types to design systems!'
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
