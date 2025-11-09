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
    title: 'Forces & Free-Body Diagrams',
    subtitle: 'How to Break Down Forces Visually',
    description: 'Master the art of analyzing forces using free-body diagrams',
    coreIdea: 'Visualize all forces to solve motion problems',
    engineeringExample: 'Aircraft analysis, bridge design, rocket launch',
    content: {
      intro: '📐 Free-Body Diagrams (FBDs) are THE most important tool in engineering mechanics. They let you visualize ALL forces acting on an object, making complex problems simple. Every engineer uses FBDs daily!',
      concepts: [
        {
          title: '🎯 What is a Free-Body Diagram?',
          explanation: 'A Free-Body Diagram shows an object as a simple shape with arrows representing ALL forces acting on it. Each arrow shows direction and magnitude of a force. The object is "free" from its surroundings - we only show forces, not the things causing them.',
          example: 'Book on table: Draw book as box. Forces: Weight arrow pointing DOWN, Normal force arrow pointing UP. If forces balance, book doesn\'t accelerate.',
          comparison: {
            left: {
              title: '📦 REAL SITUATION',
              points: [
                'Book on table',
                'Table on floor',
                'Complex scene',
                'Many objects',
                'Hard to analyze'
              ]
            },
            right: {
              title: '📐 FREE-BODY DIAGRAM',
              points: [
                'Book as simple box',
                'Weight arrow ↓',
                'Normal force arrow ↑',
                'Only forces shown',
                'Easy to analyze'
              ]
            }
          }
        },
        {
          title: '⬇️ Common Forces',
          explanation: 'GRAVITY (Weight): Always DOWN, W = mg. NORMAL FORCE: Perpendicular to surface. FRICTION: Parallel to surface, opposes motion. TENSION: Along rope/cable. APPLIED FORCE: Any push/pull. AIR RESISTANCE: Opposes motion through air.',
          example: 'Car on hill: Weight (mg) down, Normal perpendicular to hill, Friction up hill (prevents sliding), Engine force up hill.',
          comparison: {
            left: {
              title: '📍 CONTACT FORCES',
              points: [
                'Normal Force (N)',
                'Friction (f)',
                'Tension (T)',
                'Applied Force (F)',
                'Need physical contact'
              ]
            },
            right: {
              title: '🌍 NON-CONTACT',
              points: [
                'Weight/Gravity (mg)',
                'Air Resistance',
                'Magnetic Force',
                'Electric Force',
                'Act at a distance'
              ]
            }
          }
        },
        {
          title: '📊 Drawing FBDs',
          explanation: 'STEPS: (1) Draw object as dot/box. (2) Identify ALL forces ON object. (3) Draw force arrows from center. (4) Label each force. (5) Choose coordinate system. (6) Break angled forces into components.',
          example: 'Hanging traffic light: Draw as circle. Forces: Weight (down), Tension from left cable (up-left), Tension from right cable (up-right). Break tensions into x and y components to solve.',
          comparison: {
            left: {
              title: '❌ MISTAKES',
              points: [
                'Forgetting gravity',
                'Wrong directions',
                'Missing friction',
                'Not labeling forces',
                'Including forces object exerts'
              ]
            },
            right: {
              title: '✅ CORRECT',
              points: [
                'Include ALL forces',
                'Correct directions',
                'Check for friction',
                'Label every force',
                'Only forces ON object'
              ]
            }
          }
        },
        {
          title: '⚖️ Equilibrium vs Acceleration',
          explanation: 'EQUILIBRIUM: ΣF = 0 (forces balance). No acceleration. At rest OR constant velocity. ACCELERATION: ΣF ≠ 0 (net force exists). Object speeds up, slows down, or turns. Net force = ma.',
          example: 'Elevator: Constant speed up = Tension equals Weight (equilibrium). Starting to go up = Tension > Weight (accelerating up). You feel heavier!',
          comparison: {
            left: {
              title: '⚖️ EQUILIBRIUM',
              points: [
                'ΣF = 0',
                'Forces balance',
                'a = 0',
                'At rest OR constant v',
                'Example: Cruise control'
              ]
            },
            right: {
              title: '⚡ ACCELERATION',
              points: [
                'ΣF ≠ 0',
                'Forces unbalanced',
                'a ≠ 0',
                'Velocity changing',
                'Example: Car speeding up'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Force Analysis',
          description: 'Four forces: Lift (up), Weight (down), Thrust (forward), Drag (backward). FBD shows all four. To climb: Lift > Weight. Fighter jets analyze forces during 9g turns!'
        },
        {
          icon: '🌉',
          title: 'Bridge Design',
          description: 'Engineers draw FBDs for every bridge component. Cable tensions, support reactions must balance perfectly. Golden Gate Bridge: FBDs for every cable and beam.'
        },
        {
          icon: '🚀',
          title: 'Rocket Launch',
          description: 'FBD: Thrust (up), Weight (down), Drag (down). At liftoff: Thrust must exceed Weight + Drag. SpaceX Falcon 9: 7.6M N thrust vs 5.5M N weight!'
        },
        {
          icon: '🏗️',
          title: 'Crane Safety',
          description: 'FBD of load: Weight (down), Cable tension (up). FBD of crane arm: Load tension, Support forces, Counterweight. Must balance or crane tips!'
        },
        {
          icon: '🏎️',
          title: 'Race Car Cornering',
          description: 'FBD: Weight (down), Normal (up), Friction (toward center). Banking increases normal force component toward center for faster turns!'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Friction, Normal Force & Tension',
    subtitle: 'Everyday Forces in Machines',
    description: 'Master the three most common forces in engineering systems',
    coreIdea: 'Contact forces that make machines work',
    engineeringExample: 'Brakes, pulleys, elevators, tire grip',
    content: {
      intro: '🔧 Friction, Normal Force, and Tension are the workhorses of engineering! These contact forces appear in EVERY machine - from car brakes to elevator cables to robot joints. Understanding these forces is essential for designing anything that moves or supports loads.',
      concepts: [
        {
          title: '🛞 1. Friction - The Grip Force',
          explanation: 'FRICTION opposes motion between surfaces. Two types: STATIC (prevents sliding - stronger) and KINETIC (during sliding - weaker). Formula: f = μN where μ = coefficient of friction, N = normal force. Higher μ = more grip. Friction converts kinetic energy to heat.',
          example: 'Car braking: Brake pads press on rotors (high friction) to stop wheels. Tires grip road (static friction) - if you brake too hard, tires slide (kinetic friction, less grip) and you skid! Race cars use soft tires for high μ. Ice has low μ = slippery!',
          comparison: {
            left: {
              title: '🛑 STATIC FRICTION',
              points: [
                'Prevents sliding',
                'Object at rest',
                'fs ≤ μsN (maximum)',
                'Stronger than kinetic',
                'Example: Parked car on hill',
                'Adjusts to applied force',
                'Must overcome to start moving'
              ]
            },
            right: {
              title: '➡️ KINETIC FRICTION',
              points: [
                'During sliding',
                'Object moving',
                'fk = μkN (constant)',
                'Weaker than static',
                'Example: Sliding box',
                'Constant magnitude',
                'Opposes motion direction'
              ]
            }
          }
        },
        {
          title: '⬆️ 2. Normal Force - The Support',
          explanation: 'NORMAL FORCE is the perpendicular support force from a surface. "Normal" means perpendicular (90°). Prevents objects from falling through surfaces. NOT always equal to weight! Depends on other forces and surface angle. On incline: N = mg cos(θ). In elevator: N changes with acceleration.',
          example: 'You in elevator: At rest, N = your weight (feel normal). Accelerating up, N > weight (feel heavier, pushed into floor). Accelerating down, N < weight (feel lighter). Free fall, N = 0 (weightless)! Normal force is what you "feel" as your weight.',
          comparison: {
            left: {
              title: '📏 FLAT SURFACE',
              points: [
                'N perpendicular to surface',
                'N = mg (if no other forces)',
                'Balances weight component',
                'Example: Book on table',
                'N points straight up',
                'Simple calculation',
                'N = Weight'
              ]
            },
            right: {
              title: '📐 INCLINED SURFACE',
              points: [
                'N perpendicular to slope',
                'N = mg cos(θ)',
                'Only balances perpendicular',
                'Example: Car on hill',
                'N points away from surface',
                'Need trigonometry',
                'N < Weight'
              ]
            }
          }
        },
        {
          title: '🪢 3. Tension - The Pull Force',
          explanation: 'TENSION is the pulling force transmitted through ropes, cables, strings, chains. Always pulls AWAY from object (never pushes). Same tension throughout ideal rope (massless, unstretchable). In pulley systems, tension can change direction but not magnitude. T = ma for accelerating objects on rope.',
          example: 'Elevator cable: Tension must support elevator weight PLUS provide upward force if accelerating up. Going up at constant speed: T = mg. Accelerating up: T = m(g + a). If cable breaks (T = 0), elevator free falls! Engineers design cables with huge safety factor - actual strength >> needed tension.',
          comparison: {
            left: {
              title: '⬆️ SINGLE ROPE',
              points: [
                'One tension value',
                'Pulls both ends equally',
                'T throughout rope',
                'Example: Hanging mass',
                'T = Weight (if static)',
                'Simple system',
                'Direct force transmission'
              ]
            },
            right: {
              title: '🔄 PULLEY SYSTEM',
              points: [
                'Tension redirected',
                'Same T if ideal pulley',
                'Changes force direction',
                'Example: Crane lifting',
                'Mechanical advantage possible',
                'Complex system',
                'Can multiply force'
              ]
            }
          }
        },
        {
          title: '🔗 4. How These Forces Work Together',
          explanation: 'In real systems, friction, normal, and tension work TOGETHER. Friction depends on normal force (f = μN). Tension can affect normal force. All three appear in most machines. Engineers must analyze all three simultaneously using free-body diagrams.',
          example: 'Block pulled by rope on table: TENSION pulls block forward. FRICTION opposes motion (f = μN). NORMAL FORCE supports block (N = mg). WEIGHT pulls down. If T > f, block accelerates. If T = f, constant velocity. If T < f, block doesn\'t move (static friction).',
          comparison: {
            left: {
              title: '🎯 HORIZONTAL SURFACE',
              points: [
                'N = mg (simple)',
                'Friction: f = μN',
                'Tension: pulls horizontally',
                'Weight: straight down',
                'Example: Sled on ice',
                'Easy to analyze',
                '2D problem'
              ]
            },
            right: {
              title: '📐 INCLINED PLANE',
              points: [
                'N = mg cos(θ)',
                'Friction: up or down slope',
                'Tension: along slope',
                'Weight: break into components',
                'Example: Car on ramp',
                'Complex analysis',
                'Need trig components'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Braking Systems',
          description: 'Brake pads use friction (μ ≈ 0.4) to stop wheels. Tire-road friction (μ ≈ 0.7 dry, 0.3 wet) prevents skidding. ABS prevents wheel lock to maintain static friction. Normal force from car weight presses tires down. Heavier car = more N = more friction = better braking (but more momentum too!).'
        },
        {
          icon: '🏗️',
          title: 'Elevator Cable Tension',
          description: 'Elevator cables must support weight PLUS acceleration forces. Going up: T = m(g + a). Safety factor of 10-12× means cable can hold 10× the load. Multiple cables for redundancy. If one breaks, others hold. Tension sensors monitor cable health. Engineers calculate exact T needed for every scenario.'
        },
        {
          icon: '🏎️',
          title: 'Race Car Tire Grip',
          description: 'F1 tires: Soft compound for high μ (≈1.5!). Normal force increased by downforce (aerodynamics push car down). More N = more friction = faster cornering. Tire temperature affects μ - too cold = less grip. Engineers optimize tire pressure, compound, and downforce for maximum friction.'
        },
        {
          icon: '🚡',
          title: 'Cable Car Systems',
          description: 'Tension in cable supports car weight + passengers. Pulleys redirect tension without changing magnitude. Cable must handle: static load (weight), dynamic load (acceleration), wind forces. San Francisco cable cars: 1.25 inch steel cable, 21,000 lb tension capacity. Friction between cable and grip mechanism pulls car.'
        },
        {
          icon: '🏔️',
          title: 'Rock Climbing Safety',
          description: 'Rope tension = climber weight (static) or weight + fall force (dynamic). Friction in belay device controls rope. Normal force on rock face provides friction for grip. Climbing shoes: high μ rubber. Carabiners redirect tension. Engineers test ropes to 22 kN (5000 lb) - way more than needed for safety!'
        }
      ]
    }
  },
  5: {
    id: 5,
    title: 'Circular Motion',
    subtitle: 'Turning Cars, Orbiting Satellites',
    description: 'Master the physics of objects moving in circles',
    coreIdea: 'Centripetal force keeps objects moving in circles',
    engineeringExample: 'Car turns, satellite orbits, centrifuges',
    content: {
      intro: '🔄 Circular motion is EVERYWHERE in engineering - from car turns to satellite orbits to spinning turbines. The key insight: Objects moving in circles are ALWAYS accelerating (direction changing), so they NEED a net force toward the center. This is centripetal force!',
      concepts: [
        {
          title: '🎯 1. Centripetal Acceleration',
          explanation: 'Objects in circular motion constantly change direction = constantly accelerating! CENTRIPETAL ACCELERATION points toward center of circle. Formula: ac = v²/r (speed squared / radius). Faster speed OR tighter turn = more acceleration. This is NOT a new type of acceleration - it\'s just acceleration toward center.',
          example: 'Car turning: Even at constant 60 km/h, you\'re accelerating toward center of turn! Tighter turn (smaller r) = more acceleration = you feel pushed outward more. Race car at 200 km/h in tight turn: HUGE centripetal acceleration (can be 3-4g!). Your body wants to go straight (inertia), but car forces you to turn.',
          comparison: {
            left: {
              title: '➡️ STRAIGHT LINE',
              points: [
                'Constant velocity',
                'No acceleration',
                'No net force needed',
                'Direction unchanging',
                'Example: Highway cruise',
                'Inertia keeps you moving',
                'No force toward center'
              ]
            },
            right: {
              title: '🔄 CIRCULAR PATH',
              points: [
                'Constant speed, changing v',
                'Centripetal acceleration',
                'Net force toward center',
                'Direction always changing',
                'Example: Roundabout',
                'Force needed to turn',
                'ac = v²/r toward center'
              ]
            }
          }
        },
        {
          title: '💪 2. Centripetal Force',
          explanation: 'CENTRIPETAL FORCE is the net force toward center that causes circular motion. Formula: Fc = mac = mv²/r. NOT a new type of force! It\'s the NET FORCE from real forces (friction, tension, gravity, normal). Whatever provides this inward force enables circular motion. No centripetal force = object flies off in straight line (tangent).',
          example: 'Car turning: FRICTION between tires and road provides centripetal force inward. If you turn too fast or hit ice (low friction), not enough Fc → car slides outward in straight line! Satellite orbiting: GRAVITY provides centripetal force. If gravity "turned off," satellite would fly off tangent to orbit. String with ball: TENSION provides centripetal force.',
          comparison: {
            left: {
              title: '🚗 HORIZONTAL CIRCLE (Car Turn)',
              points: [
                'Friction provides Fc',
                'f = mv²/r (toward center)',
                'Must have: f ≤ μN',
                'Too fast → slide out',
                'Example: Roundabout',
                'Friction limit determines max v',
                'Banking helps!'
              ]
            },
            right: {
              title: '🎡 VERTICAL CIRCLE (Loop)',
              points: [
                'Multiple forces combine',
                'Top: N + mg = mv²/r',
                'Bottom: N - mg = mv²/r',
                'Need minimum speed',
                'Example: Roller coaster',
                'N changes around loop',
                'Feel heavy/light'
              ]
            }
          }
        },
        {
          title: '🌍 3. Orbital Motion',
          explanation: 'ORBITS are circular motion where gravity provides centripetal force! Satellite doesn\'t fall because it\'s moving sideways fast enough. It\'s constantly "falling" toward Earth but missing! Orbital speed: v = √(GM/r). Closer orbit = faster speed needed. Geostationary orbit: 24hr period, appears stationary above Earth.',
          example: 'ISS orbits at 400 km altitude, 7.66 km/s (27,600 km/h!). Gravity provides exact centripetal force needed: mg = mv²/r. If ISS slowed down, it would fall. If sped up, it would fly to higher orbit. Moon orbits at 1 km/s - slower because farther out (larger r). Satellites at different altitudes have different speeds!',
          comparison: {
            left: {
              title: '🛰️ LOW EARTH ORBIT',
              points: [
                'Altitude: 200-2000 km',
                'Speed: ~7.8 km/s',
                'Period: 90-120 minutes',
                'Strong gravity',
                'Example: ISS, Hubble',
                'Fast orbit',
                'Closer to Earth'
              ]
            },
            right: {
              title: '🌐 GEOSTATIONARY ORBIT',
              points: [
                'Altitude: 35,786 km',
                'Speed: 3.07 km/s',
                'Period: 24 hours',
                'Weaker gravity',
                'Example: GPS, TV satellites',
                'Slow orbit',
                'Appears stationary'
              ]
            }
          }
        },
        {
          title: '🏎️ 4. Banking and Centrifuges',
          explanation: 'BANKING: Tilting the surface so normal force has component toward center. Reduces reliance on friction. Optimal bank angle: tan(θ) = v²/(rg). At this angle, no friction needed! CENTRIFUGES: Spin objects in circle at high speed. "Centrifugal force" (outward) is actually inertia - objects want to go straight but are forced inward.',
          example: 'Banked race track: Normal force points inward AND up. Horizontal component provides centripetal force. Vertical component balances weight. Can turn faster without sliding! Centrifuge: Spins at 10,000 rpm. Heavy particles experience huge "force" outward (actually inertia) and separate from light particles. Used in medicine, chemistry, astronaut training (simulate high-g).',
          comparison: {
            left: {
              title: '📏 FLAT TURN',
              points: [
                'Only friction provides Fc',
                'f = mv²/r',
                'Limited by μ',
                'Easy to slide out',
                'Example: Parking lot',
                'Lower max speed',
                'Friction does all work'
              ]
            },
            right: {
              title: '📐 BANKED TURN',
              points: [
                'Normal force helps!',
                'N sin(θ) provides Fc',
                'Less friction needed',
                'Harder to slide',
                'Example: NASCAR track',
                'Higher max speed',
                'Banking does work'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🏎️',
          title: 'Race Car Cornering',
          description: 'F1 cars corner at 5g (5× gravity acceleration!). Friction provides centripetal force: f = mv²/r. Soft tires + downforce increase friction. Banking at Daytona (31° angle) allows 320 km/h turns. Engineers calculate exact speed for each corner radius to maximize grip without sliding.'
        },
        {
          icon: '🛰️',
          title: 'Satellite Orbits',
          description: 'GPS satellites orbit at 20,200 km altitude, 3.87 km/s speed. Gravity provides exact centripetal force: mg = mv²/r. ISS at 400 km needs 7.66 km/s - closer = faster! Geostationary satellites at 35,786 km orbit in 24 hours, appearing stationary. Engineers use orbital mechanics to position thousands of satellites.'
        },
        {
          icon: '🎢',
          title: 'Roller Coaster Loops',
          description: 'Vertical loops need minimum speed at top or you fall! At top: N + mg = mv²/r (both point down). At bottom: N - mg = mv²/r (N up, mg down). You feel 4-6g at bottom (heavy!), near 0g at top (weightless!). Engineers design loop radius based on track speed for safe forces.'
        },
        {
          icon: '🧬',
          title: 'Medical Centrifuges',
          description: 'Spin blood samples at 3000-15,000 rpm. Heavy cells experience huge "centrifugal force" (actually inertia) and separate from plasma. Centripetal acceleration can reach 10,000g! Used for blood tests, DNA extraction, vaccine production. Engineers design for precise rpm and radius to separate specific particles.'
        },
        {
          icon: '🏍️',
          title: 'Motorcycle Leaning',
          description: 'Motorcycles lean into turns to align net force (friction + normal) toward center. Lean angle: tan(θ) = v²/(rg). At 100 km/h in 50m radius turn, lean 45°! MotoGP riders lean 64° at 200+ km/h. Knee touches ground! Engineers design tires and suspension for extreme lean angles while maintaining grip.'
        }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Momentum & Collisions',
    subtitle: 'Conservation of Momentum and Impulse',
    description: 'Master momentum conservation in crashes, explosions, and rocket staging',
    coreIdea: 'Momentum is always conserved in collisions',
    engineeringExample: 'Car crashes, rocket staging, billiards',
    content: {
      intro: '💥 Momentum is "mass in motion" - and it\'s ALWAYS conserved! This principle is crucial for crash safety, rocket design, and understanding collisions. When objects collide, total momentum before = total momentum after. This lets engineers predict crash outcomes and design safer vehicles.',
      concepts: [
        {
          title: '📊 1. What is Momentum?',
          explanation: 'MOMENTUM = Mass × Velocity (p = mv). Vector quantity with direction. Heavy OR fast objects have high momentum. Units: kg⋅m/s. More momentum = harder to stop. Momentum depends on BOTH mass and velocity - doubling either doubles momentum.',
          example: 'Truck (5000 kg) at 20 m/s: p = 100,000 kg⋅m/s. Car (1000 kg) at 20 m/s: p = 20,000 kg⋅m/s. Truck has 5× more momentum (same speed, 5× mass). Bullet (0.01 kg) at 1000 m/s: p = 10 kg⋅m/s. Small mass but HUGE velocity!',
          comparison: {
            left: {
              title: '🚗 LOW MOMENTUM',
              points: [
                'Small mass OR slow speed',
                'Easy to stop',
                'Less damage in crash',
                'Example: Bicycle at 5 m/s',
                'p = 15 kg × 5 = 75 kg⋅m/s',
                'Low kinetic energy',
                'Safe collision'
              ]
            },
            right: {
              title: '🚛 HIGH MOMENTUM',
              points: [
                'Large mass AND/OR fast',
                'Hard to stop',
                'More damage in crash',
                'Example: Truck at 25 m/s',
                'p = 5000 × 25 = 125,000 kg⋅m/s',
                'High kinetic energy',
                'Dangerous collision'
              ]
            }
          }
        },
        {
          title: '⚖️ 2. Conservation of Momentum',
          explanation: 'LAW: Total momentum BEFORE collision = Total momentum AFTER collision. Always! (if no external forces). p₁ᵢ + p₂ᵢ = p₁f + p₂f. Works for ANY collision: elastic, inelastic, explosions. This is one of the most fundamental laws in physics - momentum is NEVER created or destroyed.',
          example: 'Two cars collide head-on: Car A (1000 kg, 20 m/s →) hits Car B (1500 kg, 15 m/s ←). Before: pₐ = +20,000, pᵦ = -22,500, Total = -2,500 kg⋅m/s. After: They stick together (2500 kg total). Conservation: 2500v = -2,500, so v = -1 m/s (moving left together).',
          comparison: {
            left: {
              title: '🎱 ELASTIC COLLISION',
              points: [
                'Objects bounce apart',
                'Momentum conserved ✓',
                'KE conserved ✓',
                'No energy lost',
                'Example: Billiard balls',
                'Perfect bounce',
                'Rare in real world'
              ]
            },
            right: {
              title: '💥 INELASTIC COLLISION',
              points: [
                'Objects stick together',
                'Momentum conserved ✓',
                'KE NOT conserved ✗',
                'Energy → heat, sound',
                'Example: Car crash',
                'Crumple zones',
                'Most real collisions'
              ]
            }
          }
        },
        {
          title: '⚡ 3. Impulse - Changing Momentum',
          explanation: 'IMPULSE = Force × Time (J = FΔt). Also equals change in momentum: J = Δp = mΔv. To change momentum, apply impulse. SAME momentum change can be: Large force, short time OR Small force, long time. Safety devices increase Δt to reduce F!',
          example: 'Catching baseball: Ball has momentum 5 kg⋅m/s. To stop it: Δp = 5 kg⋅m/s needed. Stiff catch (Δt = 0.01s): F = 5/0.01 = 500 N (hurts!). Soft catch, pull back (Δt = 0.1s): F = 5/0.1 = 50 N (comfortable). Same Δp, different F by changing Δt!',
          comparison: {
            left: {
              title: '💥 SHORT TIME (High Force)',
              points: [
                'Small Δt',
                'Large F needed',
                'F = Δp/Δt',
                'Example: Hitting wall',
                'Sudden stop',
                'High injury risk',
                'Δt = 0.01s → F huge!'
              ]
            },
            right: {
              title: '🛡️ LONG TIME (Low Force)',
              points: [
                'Large Δt',
                'Small F needed',
                'F = Δp/Δt',
                'Example: Airbag',
                'Gradual stop',
                'Low injury risk',
                'Δt = 0.1s → F small!'
              ]
            }
          }
        },
        {
          title: '🚀 4. Explosions & Recoil',
          explanation: 'EXPLOSIONS are "reverse collisions" - objects start together, fly apart. Momentum STILL conserved! Before: p = 0 (at rest). After: p₁ + p₂ = 0 (equal and opposite). This explains rocket propulsion and gun recoil. Heavy object moves slow, light object moves fast.',
          example: 'Rocket (1000 kg) expels gas (10 kg) at 2000 m/s backward. Before: p = 0. After: pᵣₒcₖₑₜ + pₘₐₛ = 0. So: 1000v + 10(-2000) = 0. Rocket velocity: v = +20 m/s forward! Light gas goes fast backward, heavy rocket goes slow forward. Same magnitude momentum, opposite directions.',
          comparison: {
            left: {
              title: '🔫 GUN RECOIL',
              points: [
                'Bullet: small mass, high v',
                'Gun: large mass, low v',
                'pᵦᵤₗₗₑₜ + pₘᵤₙ = 0',
                'Example: 0.01 kg at 1000 m/s',
                'Gun: 2 kg at -5 m/s',
                'Opposite directions',
                'Equal magnitude momentum'
              ]
            },
            right: {
              title: '🚀 ROCKET PROPULSION',
              points: [
                'Exhaust: small mass, high v',
                'Rocket: large mass, low v',
                'pₑₓₕₐᵤₛₜ + pᵣₒcₖₑₜ = 0',
                'Example: Gas at 3000 m/s',
                'Rocket at 10 m/s',
                'Continuous explosion',
                'Works in space!'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Crash Safety',
          description: 'Crumple zones increase collision time (Δt), reducing force on passengers (F = Δp/Δt). Airbags extend Δt from 0.01s to 0.1s, reducing peak force 10×! Seatbelts distribute force over body. Engineers use momentum conservation to predict crash outcomes and design safer cars. Modern cars can survive 60 mph crashes!'
        },
        {
          icon: '🚀',
          title: 'Rocket Staging',
          description: 'Rockets drop empty stages to reduce mass while keeping momentum. Stage 1 burns out: drops 80% of mass! Remaining rocket has same momentum but less mass → higher velocity! SpaceX Falcon 9: Stage 1 (400,000 kg) separates, Stage 2 (25,000 kg) continues. Conservation of momentum enables multi-stage rockets to reach orbit.'
        },
        {
          icon: '🏈',
          title: 'Sports Collisions',
          description: 'Football tackle: Momentum conserved. 100 kg player at 8 m/s tackles 80 kg player at 5 m/s. Total momentum before = after. They move together after impact. Helmets increase collision time to reduce force. Engineers design protective gear using impulse principles to minimize injury while allowing play.'
        },
        {
          icon: '⚾',
          title: 'Baseball Bat Physics',
          description: 'Bat transfers momentum to ball. Heavy bat (more mass) = more momentum transfer = faster ball. "Sweet spot" maximizes energy transfer. Follow-through increases contact time (Δt), allowing more impulse. Pro players generate 8000 N force, ball leaves at 45 m/s (100 mph). Momentum conservation explains why heavier bats hit farther!'
        },
        {
          icon: '🎱',
          title: 'Billiards & Pool',
          description: 'Nearly elastic collisions - momentum AND energy conserved. Cue ball transfers momentum to object ball. Head-on collision: cue ball stops, object ball moves with original velocity. Angle shots: momentum vectors add. Engineers study billiards to understand collision mechanics for vehicle safety and particle physics!'
        }
      ]
    }
  },
  7: {
    id: 7,
    title: 'Gravity & Weight',
    subtitle: 'Weight vs Mass and Gravitational Fields',
    description: 'Understand gravity, weight, and how mass differs from weight',
    coreIdea: 'Weight is the force of gravity on mass',
    engineeringExample: 'Satellite orbits, structural loads, planetary missions',
    content: {
      intro: '🌍 Gravity is the force that holds the universe together! It keeps us on Earth, Moon orbiting Earth, Earth orbiting Sun. Understanding gravity is essential for aerospace engineering, structural design, and space missions. Key insight: Weight and mass are NOT the same!',
      concepts: [
        {
          title: '⚖️ 1. Mass vs Weight',
          explanation: 'MASS = amount of matter (kg). Constant everywhere. Causes inertia. WEIGHT = force of gravity on mass (Newtons). W = mg. Changes with gravity! On Moon: same mass, 1/6 weight. In space: same mass, zero weight (weightless). Weight is a FORCE, mass is NOT.',
          example: 'Astronaut: mass = 80 kg everywhere. Earth (g = 9.8): W = 80 × 9.8 = 784 N. Moon (g = 1.6): W = 80 × 1.6 = 128 N (feels lighter!). Space station (g = 0): W = 0 N (weightless, floating). But mass still 80 kg - still hard to push (inertia)!',
          comparison: {
            left: {
              title: '⚖️ MASS',
              points: [
                'Amount of matter',
                'Measured in: kg',
                'Same everywhere',
                'Scalar quantity',
                'Causes: inertia',
                'Never changes',
                'Intrinsic property'
              ]
            },
            right: {
              title: '⬇️ WEIGHT',
              points: [
                'Force of gravity',
                'Measured in: Newtons (N)',
                'Changes with location',
                'Vector (downward)',
                'W = mg',
                'Varies with gravity',
                'Depends on location'
              ]
            }
          }
        },
        {
          title: '🌍 2. Gravitational Field Strength (g)',
          explanation: 'GRAVITATIONAL FIELD STRENGTH (g) = force per unit mass. On Earth: g = 9.8 N/kg (or 9.8 m/s²). Different planets have different g. Larger planet = stronger gravity = higher g. Formula: g = GM/r² where G = gravitational constant, M = planet mass, r = distance from center.',
          example: 'Earth: g = 9.8 m/s². Jupiter (huge!): g = 24.8 m/s² (2.5× Earth). Mars (small): g = 3.7 m/s² (0.4× Earth). Moon: g = 1.6 m/s² (0.16× Earth). Sun surface: g = 274 m/s² (28× Earth!). Your weight changes dramatically on different planets, but mass stays same!',
          comparison: {
            left: {
              title: '🌍 EARTH',
              points: [
                'g = 9.8 m/s²',
                '80 kg person',
                'Weight = 784 N',
                'Feels normal',
                'Can jump ~0.5m',
                'Standard reference',
                'Comfortable gravity'
              ]
            },
            right: {
              title: '🌙 MOON',
              points: [
                'g = 1.6 m/s²',
                '80 kg person (same!)',
                'Weight = 128 N',
                'Feels very light',
                'Can jump ~3m',
                '1/6 Earth gravity',
                'Easy to move'
              ]
            }
          }
        },
        {
          title: '🪐 3. Universal Gravitation',
          explanation: 'NEWTON\'S LAW: Every mass attracts every other mass. F = GMm/r². G = gravitational constant. Larger masses = stronger force. Closer distance = MUCH stronger (r² in denominator). This explains planetary orbits, tides, galaxy formation. Gravity is ALWAYS attractive, never repulsive.',
          example: 'Earth-Moon: F = (6.67×10⁻¹¹)(5.97×10²⁴)(7.35×10²²)/(3.84×10⁸)² = 1.98×10²⁰ N! Huge force keeps Moon orbiting. You and Earth: F = (6.67×10⁻¹¹)(5.97×10²⁴)(80)/(6.37×10⁶)² = 784 N (your weight!). Same formula works for everything from apples to galaxies.',
          comparison: {
            left: {
              title: '🌍 NEAR SURFACE',
              points: [
                'Close to planet (small r)',
                'Strong gravity',
                'g approximately constant',
                'Use W = mg (simple)',
                'Example: Buildings, cars',
                'r ≈ planet radius',
                'Everyday situations'
              ]
            },
            right: {
              title: '🛰️ FAR FROM SURFACE',
              points: [
                'Far from planet (large r)',
                'Weaker gravity',
                'g decreases with altitude',
                'Use F = GMm/r²',
                'Example: Satellites, ISS',
                'r > planet radius',
                'Space applications'
              ]
            }
          }
        },
        {
          title: '🎢 4. Apparent Weight',
          explanation: 'APPARENT WEIGHT = what you "feel" = Normal force. NOT always equal to actual weight! In elevator accelerating up: feel heavier (N > mg). Accelerating down: feel lighter (N < mg). Free fall: feel weightless (N = 0). Astronauts in orbit are in continuous free fall - that\'s why they float!',
          example: 'You (80 kg, W = 784 N) in elevator: At rest: N = 784 N (feel normal). Accelerating up at 2 m/s²: N = m(g + a) = 80(9.8 + 2) = 944 N (feel 20% heavier!). Accelerating down at 2 m/s²: N = m(g - a) = 80(9.8 - 2) = 624 N (feel 20% lighter!). Free fall: N = 0 (weightless!).',
          comparison: {
            left: {
              title: '⬆️ ACCELERATING UP',
              points: [
                'Elevator going up faster',
                'N = m(g + a)',
                'N > Weight',
                'Feel heavier',
                'Pushed into floor',
                'Example: Rocket launch',
                'Apparent weight increases'
              ]
            },
            right: {
              title: '⬇️ ACCELERATING DOWN',
              points: [
                'Elevator going down faster',
                'N = m(g - a)',
                'N < Weight',
                'Feel lighter',
                'Less pressure on floor',
                'Example: Drop tower',
                'Apparent weight decreases'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🛰️',
          title: 'Satellite Orbit Design',
          description: 'Engineers calculate exact orbital altitude using gravity. ISS at 400 km: g = 8.7 m/s² (not zero!). Astronauts feel weightless because they\'re in free fall, not because there\'s no gravity. Geostationary satellites at 35,786 km: gravity weaker, slower orbit (24 hrs). GPS satellites at 20,200 km: medium orbit. Each altitude requires specific velocity!'
        },
        {
          icon: '🏗️',
          title: 'Structural Load Calculations',
          description: 'Buildings must support weight of materials + occupants + snow/wind. Engineers calculate loads using W = mg. Skyscraper: millions of Newtons! Foundation must distribute weight to ground. Bridges: calculate weight of deck, vehicles, dynamic loads. Safety factor of 2-5× means structure can hold much more than expected weight.'
        },
        {
          icon: '🚀',
          title: 'Planetary Mission Planning',
          description: 'Mars rovers designed for g = 3.7 m/s² (40% Earth). Lighter weight means different suspension, wheel design. Curiosity rover: 900 kg mass, 3330 N weight on Mars (vs 8820 N on Earth). Engineers test in reduced gravity using cables or parabolic flights. Different gravity affects landing systems, mobility, power requirements.'
        },
        {
          icon: '🎢',
          title: 'Roller Coaster G-Forces',
          description: 'Riders experience changing apparent weight. Bottom of drop: 4-5g (feel 4-5× heavier!). Top of hill: near 0g (feel weightless). Engineers design for max 6g to prevent injury. Pilots train for 9g. Formula: N = m(g ± a). Positive g (acceleration up) = feel heavy. Negative g (acceleration down) = feel light.'
        },
        {
          icon: '⚖️',
          title: 'Precision Weighing',
          description: 'Scales measure normal force (apparent weight), not mass! In accelerating elevator, scale reading changes. True mass measurement uses balance scale (compares masses, independent of g). Lab balances accurate to 0.0001g. Engineers account for local g variations (changes with latitude, altitude) for precise measurements. g at equator ≠ g at poles!'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'Projectile Motion',
    subtitle: 'How Thrown and Fired Objects Move',
    description: 'Master 2D motion of projectiles - from rockets to drones to cars on hills',
    coreIdea: 'Horizontal and vertical motions are independent',
    engineeringExample: 'Rocket trajectories, drone flight, artillery, sports',
    content: {
      intro: '🎯 Projectile motion combines everything we\'ve learned! Objects thrown, fired, or launched follow parabolic paths. Key insight: Horizontal and vertical motions are INDEPENDENT - analyze separately, then combine. This applies to rockets, drones, balls, bullets, and even cars jumping hills!',
      concepts: [
        {
          title: '📐 1. Independence of Motion',
          explanation: 'HORIZONTAL motion: Constant velocity (no acceleration, ignoring air resistance). vₓ = constant. VERTICAL motion: Constant acceleration (gravity). vᵧ = v₀ᵧ - gt. These are INDEPENDENT! Horizontal motion doesn\'t affect vertical, vertical doesn\'t affect horizontal. Analyze each separately using 1D equations, then combine.',
          example: 'Ball thrown horizontally at 20 m/s from 45m cliff: HORIZONTAL: vₓ = 20 m/s (constant), x = 20t. VERTICAL: vᵧ = 0 - 9.8t (starts 0, accelerates down), y = 45 - 4.9t². Time to hit ground: 45 = 4.9t², t = 3s. Horizontal distance: x = 20(3) = 60m. Path is parabola!',
          comparison: {
            left: {
              title: '↔️ HORIZONTAL MOTION',
              points: [
                'Constant velocity',
                'No acceleration (aₓ = 0)',
                'vₓ = v₀ₓ (doesn\'t change)',
                'x = v₀ₓt',
                'Independent of vertical',
                'No gravity effect',
                'Uniform motion'
              ]
            },
            right: {
              title: '↕️ VERTICAL MOTION',
              points: [
                'Changing velocity',
                'Constant acceleration (aᵧ = -g)',
                'vᵧ = v₀ᵧ - gt',
                'y = v₀ᵧt - ½gt²',
                'Independent of horizontal',
                'Gravity pulls down',
                'Accelerated motion'
              ]
            }
          }
        },
        {
          title: '🎯 2. Launch Angle Effects',
          explanation: 'Launch angle determines trajectory shape. 45° gives maximum range (on flat ground). Higher angle: more height, less range. Lower angle: less height, more range. Initial velocity splits into components: v₀ₓ = v₀cos(θ), v₀ᵧ = v₀sin(θ). Range formula: R = v₀²sin(2θ)/g.',
          example: 'Cannon fires at 100 m/s: At 30°: v₀ₓ = 87 m/s, v₀ᵧ = 50 m/s, Range = 884m. At 45°: v₀ₓ = 71 m/s, v₀ᵧ = 71 m/s, Range = 1020m (MAX!). At 60°: v₀ₓ = 50 m/s, v₀ᵧ = 87 m/s, Range = 884m. Notice: 30° and 60° give same range! 45° is optimal.',
          comparison: {
            left: {
              title: '📉 LOW ANGLE (< 45°)',
              points: [
                'More horizontal velocity',
                'Less vertical velocity',
                'Lower maximum height',
                'Flatter trajectory',
                'Example: 30° launch',
                'Good for distance',
                'Less air time'
              ]
            },
            right: {
              title: '📈 HIGH ANGLE (> 45°)',
              points: [
                'Less horizontal velocity',
                'More vertical velocity',
                'Higher maximum height',
                'Steeper trajectory',
                'Example: 60° launch',
                'Good for clearing obstacles',
                'More air time'
              ]
            }
          }
        },
        {
          title: '🚀 3. Rocket & Drone Trajectories',
          explanation: 'Rockets and drones are POWERED projectiles - they can change velocity mid-flight! Initial launch follows projectile motion. Then engines provide thrust to change trajectory. Gravity turn: rocket launches vertical, then tilts horizontal for orbit. Drones: constant thrust balances weight for hover, tilt for horizontal motion.',
          example: 'Rocket launch: Stage 1: Vertical climb (thrust > weight), fighting gravity. Stage 2: Gravity turn at 10 km altitude, tilt 45° to build horizontal velocity. Stage 3: Nearly horizontal at 80 km, building orbital speed (7.8 km/s). Without thrust, would follow parabolic path back to Earth. Continuous thrust allows controlled trajectory!',
          comparison: {
            left: {
              title: '⚾ UNPOWERED PROJECTILE',
              points: [
                'No thrust after launch',
                'Follows parabolic path',
                'Can\'t change trajectory',
                'Gravity only force',
                'Example: Baseball, bullet',
                'Predictable path',
                'Ballistic trajectory'
              ]
            },
            right: {
              title: '🚀 POWERED PROJECTILE',
              points: [
                'Continuous thrust',
                'Can change trajectory',
                'Controlled flight path',
                'Thrust + gravity',
                'Example: Rocket, drone',
                'Adjustable path',
                'Guided trajectory'
              ]
            }
          }
        },
        {
          title: '🏔️ 4. Projectiles on Slopes',
          explanation: 'Launching from/onto slopes changes the problem! Must account for slope angle. Car jumping hill: leaves ramp at angle, lands on downslope. Range formula changes: R = v₀²[sin(2θ) + 2sin(θ)cos(θ)sin(α)]/(g cos²(α)) where α = slope angle. More complex but same principles!',
          example: 'Ski jumper: Leaves ramp at 30° angle, 25 m/s. Lands on 40° downslope. HORIZONTAL: vₓ = 25cos(30°) = 21.7 m/s. VERTICAL: vᵧ = 25sin(30°) = 12.5 m/s. Must find where parabolic path intersects slope line. Lands 80m down slope after 4 seconds in air. Engineers design ramp angle and landing slope for safe speeds!',
          comparison: {
            left: {
              title: '📏 FLAT GROUND',
              points: [
                'Simple range formula',
                'R = v₀²sin(2θ)/g',
                '45° gives max range',
                'Symmetric trajectory',
                'Example: Football field',
                'Easy calculations',
                'Standard case'
              ]
            },
            right: {
              title: '⛰️ SLOPED GROUND',
              points: [
                'Complex range formula',
                'Depends on slope angle',
                'Optimal angle ≠ 45°',
                'Asymmetric trajectory',
                'Example: Ski jump',
                'Harder calculations',
                'Real-world case'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Launch Trajectories',
          description: 'SpaceX Falcon 9: Launches vertical, then gravity turn to build horizontal velocity. At 80 km altitude, mostly horizontal (pitch angle ~10°). Must reach 7.8 km/s horizontal velocity for orbit. Engineers calculate exact trajectory to minimize fuel while reaching target orbit. Projectile motion principles guide initial ascent before active guidance takes over.'
        },
        {
          icon: '🚁',
          title: 'Drone Flight Control',
          description: 'Drones use projectile motion principles for ballistic flight (engine failure). Normal flight: thrust balances weight (hover). Tilt forward: horizontal component of thrust provides acceleration. GPS + IMU track position and velocity. If battery dies, drone follows parabolic path - pilots must predict landing spot using projectile equations!'
        },
        {
          icon: '🏎️',
          title: 'Car Jump Stunts',
          description: 'Stunt drivers use projectile motion! Car leaves ramp at angle θ, speed v. Must calculate landing distance to position ramp. Evel Knievel jumps: precise speed needed for distance. Too slow = land short. Too fast = overshoot. Modern stunts use computer simulations of projectile motion to ensure safety. Same physics as cannonball!'
        },
        {
          icon: '⚽',
          title: 'Sports Ball Trajectories',
          description: 'Soccer free kick: Ball launched at 30° angle, 30 m/s. Range = 79m (if no air resistance). Basketball 3-pointer: 45-50° angle for arc over defenders. Baseball home run: 30-35° angle, 45 m/s exit velocity, travels 120m. Engineers design balls and analyze trajectories using projectile motion. Spin adds complexity (Magnus effect)!'
        },
        {
          icon: '💣',
          title: 'Artillery & Ballistics',
          description: 'Artillery shells follow projectile paths. Howitzer: adjustable angle for different ranges. 45° gives max range on flat ground. For targets on hills, adjust angle. Modern artillery computers solve projectile equations accounting for: launch angle, muzzle velocity, air resistance, wind, Earth rotation (Coriolis). Precision requires understanding projectile physics!'
        }
      ]
    }
  }
};
