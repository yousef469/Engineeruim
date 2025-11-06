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
          example: 'Race car example: Drive 5 km north, then 5 km south back to start. DISTANCE = 10 km (you drove 5+5). DISPLACEMENT = 0 km (you ended at the starting point). After 100 laps on a 5 km circular track: Distance = 500 km (total driven), Displacement = 0 km (back at start). GPS shows both: "8 km via Main St" (distance along roads) vs "5 km away" (displacement - straight line).',
          comparison: {
            left: {
              title: '📏 DISTANCE',
              points: [
                'Total path length traveled',
                'Scalar (magnitude only)',
                'Always positive (≥ 0)',
                'Never decreases',
                'No direction needed',
                'Example: "I walked 10 km"'
              ]
            },
            right: {
              title: '➡️ DISPLACEMENT',
              points: [
                'Straight line: start → end',
                'Vector (magnitude + direction)',
                'Can be zero or negative',
                'Can decrease (going back)',
                'Direction required',
                'Example: "I\'m 5 km North of start"'
              ]
            }
          }
        },
        {
          title: '⚡ 4. Speed and Velocity',
          explanation: 'SPEED = how fast you move (scalar - just magnitude, no direction). Formula: speed = distance/time. VELOCITY = speed WITH direction (vector). Formula: velocity = displacement/time. Key difference: Two objects can have the same speed but different velocities if moving in different directions. Velocity can change even if speed stays constant - just change direction!',
          example: 'Two cars both traveling at 100 km/h. Car A going North has velocity = 100 km/h ↑. Car B going South has velocity = 100 km/h ↓. SAME SPEED (100 km/h), but OPPOSITE VELOCITIES! A car turning around a circular track at constant 80 km/h: speed stays constant, but velocity constantly changes because direction changes. Your speedometer shows speed. Your GPS shows velocity (speed + direction like "100 km/h Northeast").',
          comparison: {
            left: {
              title: '⚡ SPEED',
              points: [
                'How fast (magnitude only)',
                'Scalar quantity',
                'Formula: distance / time',
                'Always positive',
                'No direction',
                'Shows on: Speedometer',
                'Example: "100 km/h"'
              ]
            },
            right: {
              title: '🎯 VELOCITY',
              points: [
                'How fast + which way',
                'Vector quantity',
                'Formula: displacement / time',
                'Can be positive/negative',
                'Direction required',
                'Shows on: GPS',
                'Example: "100 km/h North"'
              ]
            }
          }
        },
        {
          title: '🎯 5. Average vs Instantaneous',
          explanation: 'AVERAGE SPEED/VELOCITY = calculated over a time period (total distance/total time). INSTANTANEOUS SPEED/VELOCITY = at a specific moment (what your speedometer shows RIGHT NOW). Average smooths out all the variations. Instantaneous captures the exact moment. Your trip computer shows average. Your speedometer shows instantaneous.',
          example: 'Road trip: You drive 240 km in 3 hours. AVERAGE speed = 240/3 = 80 km/h (one number for entire trip). But your INSTANTANEOUS speed varied constantly: 0 km/h at red lights, 120 km/h on highway, 40 km/h in city traffic, 0 km/h at gas station. Same trip, but instantaneous speed changed every moment while average stayed 80 km/h for the whole journey.',
          comparison: {
            left: {
              title: '📊 AVERAGE',
              points: [
                'Over a time period',
                'Total distance / total time',
                'One value for whole trip',
                'Smooths out variations',
                'Shows on: Trip computer',
                'Example: "80 km/h average"',
                'Doesn\'t change during trip'
              ]
            },
            right: {
              title: '⚡ INSTANTANEOUS',
              points: [
                'At a specific moment',
                'Speed right now',
                'Changes constantly',
                'Captures exact moment',
                'Shows on: Speedometer',
                'Example: "120 km/h now"',
                'Varies every second'
              ]
            }
          }
        },
        {
          title: '🌀 6. Acceleration (Change in Velocity)',
          explanation: 'ACCELERATION = rate of change of velocity. Formula: a = Δv/Δt (change in velocity / time). Acceleration happens when: (1) speed changes (speeding up/slowing down), OR (2) direction changes (turning), OR (3) both! Zero acceleration = constant velocity (same speed AND direction). Acceleration is a vector - it has direction.',
          example: 'Three examples: (1) Car speeding up from 0 to 100 km/h in 10 seconds: acceleration = +10 km/h/s (positive = speeding up). (2) Car braking from 100 to 0 km/h in 5 seconds: acceleration = -20 km/h/s (negative = slowing down). (3) Car turning at constant 60 km/h: still accelerating! (direction changing even though speed constant). Rocket launch: massive acceleration upward (speed AND altitude increasing).',
          comparison: {
            left: {
              title: '🚗 POSITIVE ACCELERATION',
              points: [
                'Speeding up',
                'Velocity increasing',
                'Same direction as motion',
                'Example: 0 → 100 km/h',
                'a = +10 km/h/s',
                'Gas pedal pressed',
                'Feels: pushed back in seat'
              ]
            },
            right: {
              title: '🛑 NEGATIVE ACCELERATION',
              points: [
                'Slowing down (braking)',
                'Velocity decreasing',
                'Opposite to motion',
                'Example: 100 → 0 km/h',
                'a = -20 km/h/s',
                'Brake pedal pressed',
                'Feels: pushed forward'
              ]
            }
          }
        },
        {
          title: '🧭 7. Reference Frames & Relativity',
          explanation: 'Motion depends on WHERE you\'re observing from (your reference frame). Same object can be moving AND at rest simultaneously - depends on the observer! There\'s no absolute rest - only motion relative to something. This is why we say "relative to" when describing motion. Different observers see different motion for the same object!',
          example: 'You\'re on a train moving at 200 km/h, throwing a ball straight up. To YOU (inside train): ball goes straight up and down, lands in your hand - you see vertical motion. To someone OUTSIDE (on ground): ball follows a curved path forward while going up and down - they see parabolic motion. SAME ball, SAME throw, but DIFFERENT observed motion! You are at rest relative to the train (0 km/h), but moving at 200 km/h relative to the ground. Both are correct - it depends on the reference frame!',
          comparison: {
            left: {
              title: '🚂 INSIDE TRAIN (Your View)',
              points: [
                'You: at rest (0 km/h)',
                'Ball: goes straight up/down',
                'Path: vertical line ↕️',
                'Lands in your hand',
                'Reference: train frame',
                'Everything seems normal',
                'You feel stationary'
              ]
            },
            right: {
              title: '🌍 OUTSIDE TRAIN (Ground View)',
              points: [
                'You: moving (200 km/h)',
                'Ball: curved parabolic path',
                'Path: forward arc ⤴️',
                'Moves with train',
                'Reference: ground frame',
                'Sees your motion',
                'You\'re clearly moving'
              ]
            }
          }
        },
        {
          title: '🪐 8. Types of Motion',
          explanation: 'Motion comes in different patterns: LINEAR (straight line - car on highway), CIRCULAR (rotating path - fan blade, wheel), OSCILLATORY (repetitive back & forth - pendulum, spring, piston), RANDOM (unpredictable - gas molecules, dust particles). Real engineering systems often combine multiple types!',
          example: 'Car engine combines ALL four types: (1) LINEAR - Pistons move up/down in straight lines inside cylinders. (2) CIRCULAR - Crankshaft rotates in spinning motion. (3) OSCILLATORY - Valves open/close repeatedly in back-and-forth motion. (4) RANDOM - Fuel molecules move unpredictably before combustion. Airplane example: moves linearly through air, propeller rotates circularly, control surfaces oscillate for stability. Understanding all motion types helps engineers design better systems!',
          comparison: {
            left: {
              title: '➡️ LINEAR & CIRCULAR',
              points: [
                'LINEAR: Straight path',
                '→ Car on highway',
                '→ Piston up/down',
                '→ Rocket launch',
                'CIRCULAR: Rotating',
                '⭕ Wheel spinning',
                '⭕ Fan blade',
                '⭕ Crankshaft'
              ]
            },
            right: {
              title: '↔️ OSCILLATORY & RANDOM',
              points: [
                'OSCILLATORY: Back & forth',
                '↔️ Pendulum swing',
                '↔️ Spring bouncing',
                '↔️ Valve open/close',
                'RANDOM: Unpredictable',
                '💫 Gas molecules',
                '💫 Dust particles',
                '💫 Brownian motion'
              ]
            }
          }
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
    title: 'Newton\'s Laws of Motion',
    subtitle: 'Forces and Inertia - How Motion Starts and Changes',
    description: 'Master the three fundamental laws that govern all motion in the universe',
    coreIdea: 'Forces cause acceleration. Objects resist changes in motion (inertia)',
    engineeringExample: 'Rocket propulsion, car crashes, aircraft control',
    content: {
      intro: '🎯 Newton\'s Three Laws are the foundation of ALL engineering mechanics. They explain why rockets fly, why seatbelts save lives, and how every machine works. These laws answer the fundamental question: What CAUSES motion to change? The answer: FORCES! Understanding forces and inertia is essential for designing anything that moves.',
      concepts: [
        {
          title: '🛑 1. Newton\'s First Law - Law of Inertia',
          explanation: 'An object at rest stays at rest, and an object in motion stays in motion at constant velocity, UNLESS acted upon by an external force. This is INERTIA - the resistance to changes in motion. More mass = more inertia = harder to start/stop moving. Key insight: Objects don\'t "naturally" slow down - friction is the force that stops them!',
          example: 'You\'re in a car at 100 km/h. The car suddenly brakes (force on car), but YOUR body wants to keep moving at 100 km/h (inertia)! That\'s why you lurch forward - your body resists the change. Seatbelt applies force to change your motion. In space (no friction), a spacecraft coasts forever at constant velocity without using fuel - inertia keeps it moving!',
          comparison: {
            left: {
              title: '🛑 AT REST (Inertia)',
              points: [
                'Object: stationary',
                'Wants to: stay stationary',
                'Needs: force to start moving',
                'Example: Heavy box on floor',
                'Hard to push = high inertia',
                'Mass resists acceleration',
                'No force = no motion'
              ]
            },
            right: {
              title: '➡️ IN MOTION (Inertia)',
              points: [
                'Object: moving at constant v',
                'Wants to: keep moving forever',
                'Needs: force to stop/turn',
                'Example: Hockey puck on ice',
                'Slides far = low friction',
                'Mass resists deceleration',
                'No force = constant motion'
              ]
            }
          }
        },
        {
          title: '⚡ 2. Newton\'s Second Law - F = ma',
          explanation: 'Force = Mass × Acceleration. This is THE most important equation in mechanics! It tells you: (1) How much force needed to accelerate something, (2) How fast something accelerates for a given force, (3) Heavier objects need more force for same acceleration. Rearranged: a = F/m (acceleration = force / mass). More force = more acceleration. More mass = less acceleration.',
          example: 'Push a shopping cart (10 kg) with 50 N force: a = 50/10 = 5 m/s². Push a car (1000 kg) with same 50 N: a = 50/1000 = 0.05 m/s² (100x slower!). Rocket engines produce HUGE force (millions of Newtons) to accelerate massive rockets. F-16 fighter: 130,000 N thrust, 10,000 kg mass = 13 m/s² acceleration (faster than falling!)',
          comparison: {
            left: {
              title: '🚗 SMALL MASS (Easy to Accelerate)',
              points: [
                'Mass: 1000 kg (car)',
                'Force: 2000 N',
                'a = F/m = 2000/1000',
                'Acceleration: 2 m/s²',
                'Result: Quick acceleration',
                'Easy to push/stop',
                'Sports car performance'
              ]
            },
            right: {
              title: '🚛 LARGE MASS (Hard to Accelerate)',
              points: [
                'Mass: 10,000 kg (truck)',
                'Force: 2000 N (same!)',
                'a = F/m = 2000/10,000',
                'Acceleration: 0.2 m/s²',
                'Result: Slow acceleration',
                'Hard to push/stop',
                'Needs more braking distance'
              ]
            }
          }
        },
        {
          title: '🔄 3. Newton\'s Third Law - Action-Reaction',
          explanation: 'For every action, there is an equal and opposite reaction. Forces ALWAYS come in pairs! When you push on something, it pushes back on you with equal force. Key insight: The forces act on DIFFERENT objects. This is how rockets work - they push gas backward, gas pushes rocket forward. You can\'t have one force without the other!',
          example: 'Rocket engine: Pushes exhaust gas downward (action) → Gas pushes rocket upward (reaction). Walking: Your foot pushes ground backward (action) → Ground pushes you forward (reaction). Gun recoil: Bullet pushed forward (action) → Gun pushed backward (reaction). Swimming: You push water backward → Water pushes you forward. No water to push = can\'t swim in air!',
          comparison: {
            left: {
              title: '🚀 ACTION FORCE',
              points: [
                'Rocket pushes gas DOWN',
                'Force: 1,000,000 N ↓',
                'Acts on: exhaust gas',
                'Result: gas accelerates down',
                'You push wall →',
                'Foot pushes ground ←',
                'Always has reaction pair'
              ]
            },
            right: {
              title: '⬆️ REACTION FORCE',
              points: [
                'Gas pushes rocket UP',
                'Force: 1,000,000 N ↑ (equal!)',
                'Acts on: rocket',
                'Result: rocket accelerates up',
                'Wall pushes you ←',
                'Ground pushes foot →',
                'Equal magnitude, opposite dir'
              ]
            }
          }
        },
        {
          title: '💪 4. What is a Force?',
          explanation: 'A FORCE is a push or pull that can change an object\'s motion (accelerate it). Forces are vectors - they have magnitude (strength in Newtons) and direction. Multiple forces can act on one object simultaneously. NET FORCE = sum of all forces (vector addition). If net force = 0, object doesn\'t accelerate (stays at rest or constant velocity). If net force ≠ 0, object accelerates in direction of net force.',
          example: 'Car on highway: Engine force forward (5000 N), air resistance backward (5000 N). Net force = 0, so constant velocity (no acceleration). Car accelerating: Engine 6000 N forward, resistance 4000 N backward. Net force = 2000 N forward, so car accelerates forward. Tug-of-war: Team A pulls 3000 N left, Team B pulls 2500 N right. Net = 500 N left, rope accelerates left.',
          comparison: {
            left: {
              title: '⚖️ BALANCED FORCES (Net = 0)',
              points: [
                'All forces cancel out',
                'Net force = 0 N',
                'Acceleration = 0',
                'Constant velocity OR at rest',
                'Example: Cruise control',
                'Engine = Air resistance',
                'No change in motion'
              ]
            },
            right: {
              title: '⚡ UNBALANCED FORCES (Net ≠ 0)',
              points: [
                'Forces don\'t cancel',
                'Net force ≠ 0 N',
                'Acceleration ≠ 0',
                'Velocity changes',
                'Example: Accelerating car',
                'Engine > Air resistance',
                'Motion changes!'
              ]
            }
          }
        },
        {
          title: '🎯 5. Mass vs Weight',
          explanation: 'MASS = amount of matter (kg), constant everywhere. WEIGHT = force of gravity on mass (Newtons). Weight = mass × g (where g = 9.8 m/s² on Earth). Your mass is the same on Earth, Moon, or space. Your weight changes! Moon gravity = 1.6 m/s² (1/6 of Earth), so you weigh 1/6 as much but same mass. Weight is a FORCE, mass is NOT.',
          example: 'Astronaut: mass = 80 kg everywhere. On Earth: weight = 80 × 9.8 = 784 N. On Moon: weight = 80 × 1.6 = 128 N (feels lighter!). In space: weight = 0 N (weightless), but mass still 80 kg (same inertia - still hard to push). This is why Moon jumps are so high - less weight pulling you down, but same mass to accelerate.',
          comparison: {
            left: {
              title: '⚖️ MASS',
              points: [
                'Amount of matter',
                'Measured in: kg',
                'Same everywhere',
                'Scalar quantity',
                'Causes: inertia',
                'Example: 80 kg person',
                'Never changes'
              ]
            },
            right: {
              title: '⬇️ WEIGHT',
              points: [
                'Force of gravity',
                'Measured in: Newtons (N)',
                'Changes with gravity',
                'Vector (downward)',
                'Causes: pressure on ground',
                'Example: 784 N on Earth',
                'Changes with location'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Propulsion',
          description: 'Rockets use Newton\'s 3rd Law: Expel gas at high speed downward (action) → rocket pushed upward (reaction). SpaceX Falcon 9: 7.6 million N thrust. F = ma: 550,000 kg rocket × 13.8 m/s² = 7.6 million N. No air needed - works in space vacuum!'
        },
        {
          icon: '🚗',
          title: 'Car Safety Systems',
          description: 'Crash at 100 km/h: Your body has huge inertia (1st Law). Seatbelt applies force over time to stop you safely (2nd Law: F = ma). Airbag increases stopping time, reducing peak force. Crumple zones absorb energy. Understanding forces saves lives!'
        },
        {
          icon: '✈️',
          title: 'Aircraft Control',
          description: 'Pilots control forces: Thrust (engines), Lift (wings), Drag (air resistance), Weight (gravity). Net force determines acceleration. To climb: Lift > Weight. To turn: Bank wings to redirect lift force. F-16 can pull 9g turns (9× normal weight force)!'
        },
        {
          icon: '🏎️',
          title: 'F1 Race Car Braking',
          description: 'F1 car at 300 km/h → 0 in 100m. Huge deceleration needs huge force. Carbon brakes provide 5g deceleration (50 m/s²). Driver feels 5× body weight pushing forward (inertia). Brake force = 1.5× car weight. Tires must grip or car slides!'
        },
        {
          icon: '🛰️',
          title: 'Satellite Maneuvering',
          description: 'Satellites use tiny thrusters (Newton\'s 3rd Law) to change orbit. Small forces over long time = big velocity change. Geostationary satellites: must balance gravity (inward force) with orbital motion. Net force provides centripetal acceleration for circular orbit.'
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
