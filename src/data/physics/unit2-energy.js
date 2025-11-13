export const unit2Lessons = {
  9: {
    id: 9,
    title: 'Work, Energy & Power: What is Energy?',
    subtitle: 'Understanding Energy in All Its Forms',
    description: 'Master the fundamental concept that drives all motion and change in the universe',
    coreIdea: 'Energy exists in many forms and can transform between them while being conserved',
    engineeringExample: 'Electric vehicles, solar panels, hydroelectric dams',
    learningObjectives: [
      'Define and distinguish between different forms of energy',
      'Calculate energy using formulas for KE, PE, and other forms',
      'Analyze energy transformations in real systems',
      'Apply energy concepts to engineering design',
      'Evaluate energy efficiency in practical systems'
    ],
    keyEquations: [
      { eq: 'KE = \\frac{1}{2}mv^2', meaning: 'Kinetic energy of a moving object' },
      { eq: 'PE_g = mgh', meaning: 'Gravitational potential energy' },
      { eq: 'PE_s = \\frac{1}{2}kx^2', meaning: 'Elastic potential energy (spring)' },
      { eq: 'E_{total} = KE + PE + E_{thermal} + E_{chemical} + ...', meaning: 'Total energy includes all forms' },
      { eq: 'E_{system} = \\sum E_i', meaning: 'System energy is sum of all components' }
    ],
    practiceProblems: [
      {
        id: '2.1a',
        prompt: 'An electric car (2000 kg) accelerates from rest to 100 km/h. Calculate (a) final kinetic energy and (b) minimum battery energy needed assuming 90% motor efficiency.',
        solution: 'a) Convert 100 km/h to m/s: v = 27.78 m/s\nKE = ½mv² = ½(2000)(27.78)² = 771,605 J ≈ 772 kJ\nb) With 90% efficiency: E_battery = 772/0.9 = 858 kJ\nThis ignores air resistance and other losses',
        hints: ['Convert speed to m/s', 'Use KE = ½mv²', 'Account for efficiency']
      },
      {
        id: '2.1b',
        prompt: 'A hydroelectric dam stores water 80m above turbines. How much gravitational PE is available per 1000 kg of water? What electrical energy could this generate at 85% efficiency?',
        solution: 'PE = mgh = (1000)(9.8)(80) = 784,000 J = 784 kJ\nWith 85% efficiency:\nE_electrical = 784 × 0.85 = 666.4 kJ\nThis is why height is crucial for hydro power!',
        hints: ['Use PE = mgh', 'Include efficiency', 'Consider practical losses']
      },
      {
        id: '2.1c',
        prompt: 'A car\'s suspension spring (k = 35,000 N/m) compresses 0.15m over a bump. Calculate (a) elastic PE stored and (b) vertical force on car.',
        solution: 'a) PE = ½kx² = ½(35000)(0.15)² = 393.75 J\nb) F = kx = (35000)(0.15) = 5250 N\nThis force pushes car back up after bump',
        hints: ['Use PE = ½kx²', 'Force from F = kx', 'Check units']
      }
    ],
    content: {
      intro: '⚡ Energy is the universal currency of the physical world - it makes everything happen! From launching rockets to charging phones, energy drives all changes. Engineers must master energy to design efficient systems. The key insight: Energy can change forms, but can\'t be created or destroyed.',
      concepts: [
        {
          title: '🏃 1. Kinetic Energy - Energy in Motion',
          explanation: 'KINETIC ENERGY (KE) is energy of motion. Formula: KE = ½mv². More mass OR more speed = more KE, but speed has bigger effect (squared). Every moving object has KE, from atoms to galaxies! KE can be linear (car), rotational (wheel), or vibrational (molecules).',
          example: 'Car crash physics: Car A (1000 kg) at 50 km/h has KE = 96 kJ. Same car at 100 km/h has KE = 384 kJ (4× more!). This is why high-speed crashes are so dangerous - KE increases with v². Crumple zones must absorb this energy!',
          comparison: {
            left: {
              title: '🚲 LOW SPEED',
              points: [
                'Small kinetic energy',
                'Easy to stop',
                'Less dangerous',
                'Example: Bicycle (15 km/h)',
                'KE ≈ 0.5 kJ',
                'Short stopping distance',
                'Minimal safety needed'
              ]
            },
            right: {
              title: '🏎️ HIGH SPEED',
              points: [
                'Large kinetic energy',
                'Hard to stop',
                'More dangerous',
                'Example: Car (100 km/h)',
                'KE ≈ 400 kJ',
                'Long stopping distance',
                'Major safety systems'
              ]
            }
          }
        },
        {
          title: '⬆️ 2. Potential Energy - Stored Energy',
          explanation: 'POTENTIAL ENERGY (PE) is stored energy due to position or configuration. Types: Gravitational (mgh), Elastic (½kx²), Chemical (batteries/fuel), Electric (charged capacitors). PE can be released to create motion (KE) or do work. Height, spring compression, chemical bonds all store PE.',
          example: 'Hydroelectric dam: Water at top has PE = mgh. 1 million kg water at 100m height stores 981 MJ of PE! As water falls, PE converts to KE, then to electrical energy via turbines. Dam height determines power potential - taller = more PE = more power!',
          comparison: {
            left: {
              title: '🗻 GRAVITATIONAL PE',
              points: [
                'PE = mgh',
                'Due to height',
                'Examples: Dams, elevators',
                'Easily converted to KE',
                'Depends on mass & height',
                'Relative to reference',
                'Powers hydroelectric'
              ]
            },
            right: {
              title: '🔋 OTHER PE FORMS',
              points: [
                'Chemical, Elastic, etc',
                'Due to configuration',
                'Examples: Batteries, springs',
                'Stored for later use',
                'Depends on system',
                'Internal to system',
                'Powers many devices'
              ]
            }
          }
        },
        {
          title: '🔄 3. Energy Transformations',
          explanation: 'Energy constantly changes form but total remains constant! Chain of transformations: Solar → Chemical (plants) → Chemical (fossil fuels) → Thermal → Mechanical → Electrical. Each conversion has efficiency < 100%. Understanding transformations is key to engineering.',
          example: 'Electric car charging: Grid electrical → Battery chemical → Motor electrical → Mechanical (KE) → Heat (braking). Overall efficiency ≈ 60-70%. Internal combustion only ≈ 25-30% efficient! This is why EVs are more efficient.',
          comparison: {
            left: {
              title: '⚡ EFFICIENT CONVERSION',
              points: [
                'Electric motor: 90%+',
                'Few transformations',
                'Minimal heat loss',
                'Direct conversion',
                'Example: EV drivetrain',
                'Lower energy waste',
                'Better performance'
              ]
            },
            right: {
              title: '🔥 INEFFICIENT CONVERSION',
              points: [
                'Gas engine: 25-30%',
                'Many transformations',
                'Large heat loss',
                'Complex process',
                'Example: ICE car',
                'Higher energy waste',
                'More fuel needed'
              ]
            }
          }
        },
        {
          title: '📊 4. Energy Accounting',
          explanation: 'Track ALL energy forms in system: E_total = KE + PE + E_thermal + E_chemical + ... Conservation means total is constant, but individual forms change. Engineers must account for ALL energy to design efficient systems. Energy can\'t disappear - it transforms!',
          example: 'Rocket launch: Chemical PE (fuel) → KE (exhaust) + KE (rocket) + PE (height) + Heat (friction). Must account for ALL energy! Initial chemical PE = 3.7 MJ/kg of fuel. Final: 60% KE, 20% PE, 20% heat. This energy accounting helps optimize design.',
          comparison: {
            left: {
              title: '📈 ENERGY IN',
              points: [
                'Fuel energy',
                'Electrical input',
                'Mechanical work',
                'Heat added',
                'Initial PE/KE',
                'Must measure all',
                'System inputs'
              ]
            },
            right: {
              title: '📉 ENERGY OUT',
              points: [
                'Useful work',
                'Waste heat',
                'Sound/vibration',
                'Final PE/KE',
                'Other losses',
                'Must equal input',
                'System outputs'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Electric Vehicle Systems',
          description: 'Modern EV: 100 kWh battery stores 360 MJ chemical PE. During regen braking, converts car\'s KE back to chemical PE (battery) at 70% efficiency. Traditional brakes waste this as heat! 85% total drivetrain efficiency vs 25% for gas engines. Energy management is key to range.'
        },
        {
          icon: '🚀',
          title: 'Rocket Propulsion',
          description: 'SpaceX Falcon 9: First stage burns 3,200 kg fuel/sec! Chemical PE → KE + PE. At liftoff: 3.7 MJ/kg × 3200 kg = 11.84 GJ/sec energy release! Must balance energy between speed (KE) and height (PE) to reach orbit. Energy management determines mission success.'
        },
        {
          icon: '💡',
          title: 'Renewable Energy',
          description: 'Solar panels convert light → electrical (20% efficient). Wind turbines convert KE → mechanical → electrical (35% efficient). Hydroelectric converts PE → KE → electrical (90% efficient). Understanding energy transformations crucial for renewable engineering.'
        },
        {
          icon: '🏭',
          title: 'Industrial Processes',
          description: 'Steel production requires 20 GJ/ton! Energy flows: Chemical (coal) → Thermal → Chemical (reactions). Modern plants recover waste heat, use PE of hot gases. Energy accounting identifies efficiency improvements worth millions in savings.'
        },
        {
          icon: '🔋',
          title: 'Energy Storage Systems',
          description: 'Grid batteries: 90% round-trip efficiency. Pumped hydro: Convert electrical → PE (water height) → electrical, 80% efficient. Compressed air: Electrical → PE (pressure) → electrical, 70% efficient. Each system optimized for specific needs and costs.'
        }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Work, Energy & Power: Work & Power',
    subtitle: 'Energy Transfer and Rate of Work',
    description: 'Master how forces transfer energy and how quickly work gets done',
    coreIdea: 'Work transfers energy between systems; Power is the rate of energy transfer',
    engineeringExample: 'Aircraft engines, electric motors, industrial machinery',
    learningObjectives: [
      'Calculate work done by various forces in real systems',
      'Analyze power requirements for engineering applications',
      'Convert between different power units and standards',
      'Design systems for optimal power delivery',
      'Evaluate work and power in complex machines',
      'Apply work-energy theorem to practical problems'
    ],
    keyEquations: [
      { eq: 'W = F \\cdot d\\cos\\theta', meaning: 'Work = force × distance × cosine of angle' },
      { eq: 'P = \\frac{W}{t} = F \\cdot v', meaning: 'Power = work per time = force × velocity' },
      { eq: 'W = \\Delta E = \\Delta KE + \\Delta PE', meaning: 'Work equals change in total energy' },
      { eq: 'P = \\tau \\omega', meaning: 'Power = torque × angular velocity' },
      { eq: '1\\,\\text{hp} = 746\\,\\text{W}', meaning: 'Horsepower to Watts conversion' }
    ],
    practiceProblems: [
      {
        id: '2.2a',
        prompt: 'An electric motor lifts a 500 kg elevator at constant 3 m/s. Calculate (a) work done in 10m rise, (b) power required, and (c) minimum current at 480V.',
        solution: 'a) W = mgh = (500)(9.8)(10) = 49,000 J\nb) P = W/t = F×v = (4900)(3) = 14,700 W\nc) P = VI, so I = P/V = 14,700/480 = 30.6 A\nNote: Real motor needs more current due to losses!',
        hints: ['Use W = mgh for work against gravity', 'P = F×v for constant velocity', 'P = VI for electrical power']
      },
      {
        id: '2.2b',
        prompt: 'A car engine produces 300 hp at 5000 RPM. Calculate (a) power in kW, (b) torque in N·m, and (c) force at wheels (0.3m radius).',
        solution: 'a) P = 300 hp × 746 W/hp = 223.8 kW\nb) P = τω, ω = 2π(5000/60) = 523.6 rad/s\nτ = P/ω = 223,800/523.6 = 427.6 N·m\nc) F = τ/r = 427.6/0.3 = 1425.3 N at wheels',
        hints: ['Convert hp to W', 'Convert RPM to rad/s', 'Torque = Power/angular velocity']
      },
      {
        id: '2.2c',
        prompt: 'A 2000 kg truck climbs a 10° hill at 72 km/h. Calculate (a) rate of PE gain, (b) power needed, and (c) extra fuel consumption at 35% efficiency.',
        solution: 'v = 72 km/h = 20 m/s\na) dPE/dt = mgh/t = mgv×sin(θ)\n= (2000)(9.8)(20)sin(10°) = 67,981 W\nb) Including rolling resistance ≈ 75 kW total\nc) Fuel power = 75/0.35 = 214.3 kW input needed',
        hints: ['Convert speed to m/s', 'Use sin(θ) for height gain rate', 'Account for efficiency']
      }
    ],
    content: {
      intro: '💪 Work and power are fundamental to all engineering - from tiny motors to massive rockets! Work transfers energy between systems, while power tells us how quickly this happens. Understanding these concepts is crucial for designing everything from electric vehicles to industrial machinery.',
      concepts: [
        {
          title: '🔨 1. Understanding Work',
          explanation: 'WORK is force × distance × cos(angle). Only force component parallel to motion counts! Work = energy transferred. Positive work adds energy, negative work removes it. Key insight: No motion = no work, even if force applied! Work done = change in energy of system.',
          example: 'Space station solar panel deployment: Motor does work rotating 100 kg panel 90°. Torque = 200 N·m, angle = π/2 rad. Work = τθ = (200)(π/2) = 314 J. This work becomes panel\'s gravitational PE + KE. Engineers must ensure motor can provide this work!',
          comparison: {
            left: {
              title: '✅ WORK DONE',
              points: [
                'Force parallel to motion',
                'Distance moved > 0',
                'Energy transferred',
                'Example: Lifting weight',
                'W = F·d·cos(0°) = Fd',
                'Changes system energy',
                'Powers machines'
              ]
            },
            right: {
              title: '❌ NO WORK DONE',
              points: [
                'Force perpendicular to motion',
                'No displacement',
                'No energy transfer',
                'Example: Holding weight',
                'W = F·d·cos(90°) = 0',
                'Constant energy',
                'Static force only'
              ]
            }
          }
        },
        {
          title: '⚡ 2. Power Fundamentals',
          explanation: 'POWER is rate of doing work (P = W/t) or force × velocity (P = F·v). Measures how quickly energy transfers. More power = faster energy transfer. Units: Watts (J/s) or horsepower (1 hp = 746 W). Power determines system performance limits.',
          example: 'Electric vehicle motor: 100 kW power means can deliver 100 kJ energy per second. At 100 km/h (27.8 m/s), available force = P/v = 100,000/27.8 = 3,597 N. This determines acceleration capability! More power = better performance.',
          comparison: {
            left: {
              title: '🚲 LOW POWER',
              points: [
                'Human: ~100W sustained',
                'Slow energy transfer',
                'Limited performance',
                'Example: Bicycle',
                'Lower force at speed',
                'Simple systems',
                'Cheaper, simpler'
              ]
            },
            right: {
              title: '🚀 HIGH POWER',
              points: [
                'Rocket: ~10⁹ W',
                'Fast energy transfer',
                'High performance',
                'Example: F-1 engine',
                'High force at speed',
                'Complex systems',
                'Expensive, complex'
              ]
            }
          }
        },
        {
          title: '🔄 3. Work-Energy Connection',
          explanation: 'Work-Energy Theorem: Net work = change in energy (W = ΔE). Work converts between energy types: Chemical → Electrical → Mechanical. Understanding energy flow paths helps optimize systems. Conservation: Energy out = work done - losses.',
          example: 'Crane lifting container: Work done = mgh = (10000 kg)(9.8 m/s²)(30 m) = 2.94 MJ. This becomes container\'s PE. Electric motor must supply this plus overcome losses. If motor 85% efficient, requires 2.94/0.85 = 3.46 MJ electrical energy!',
          comparison: {
            left: {
              title: '📈 ENERGY GAIN',
              points: [
                'Positive work done',
                'System gains energy',
                'Example: Accelerating',
                'W = +ΔE',
                'Requires power input',
                'Motor driving',
                'Energy added'
              ]
            },
            right: {
              title: '📉 ENERGY LOSS',
              points: [
                'Negative work done',
                'System loses energy',
                'Example: Braking',
                'W = -ΔE',
                'Power extracted',
                'Generator mode',
                'Energy removed'
              ]
            }
          }
        },
        {
          title: '⚙️ 4. Power Systems',
          explanation: 'Power systems transfer energy at controlled rates. Electric: P = VI (voltage × current). Mechanical: P = τω (torque × angular velocity) or P = Fv (force × velocity). Must match power source to load requirements. Higher power needs better cooling!',
          example: 'Aircraft engine: 747 engine produces 60,000 hp (44.7 MW) at takeoff! At 85% propulsive efficiency, provides 38 MW thrust power. Fuel flow 2.5 kg/s × 43 MJ/kg = 107.5 MW input. Rest becomes heat - needs massive cooling system!',
          comparison: {
            left: {
              title: '⚡ ELECTRIC POWER',
              points: [
                'P = VI',
                'High efficiency (90%+)',
                'Easy to control',
                'Instant response',
                'Clean operation',
                'Example: Tesla motor',
                'Limited by current'
              ]
            },
            right: {
              title: '🔥 THERMAL POWER',
              points: [
                'P = ṁ×fuel energy',
                'Lower efficiency (~30%)',
                'Complex control',
                'Delayed response',
                'Emissions produced',
                'Example: Gas turbine',
                'Limited by heating'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Engines',
          description: 'Modern turbofan engine: 100,000+ hp (75 MW) at takeoff! Work done accelerating ~1000 kg/s air. Power = thrust (300 kN) × velocity (250 m/s) = 75 MW. Requires massive fuel flow: ~3 kg/s jet fuel = ~130 MW input. Complex cooling manages waste heat.'
        },
        {
          icon: '🚗',
          title: 'Electric Vehicles',
          description: 'Tesla Model S: 750 hp (560 kW) peak power. At 100 km/h uses ~15-20 kW cruise power. Rest available for acceleration! Work done against air drag increases with v³ - major design factor. Regenerative braking recovers ~70% of braking work back to battery.'
        },
        {
          icon: '🏗️',
          title: 'Construction Equipment',
          description: 'Large excavator: 400 hp engine drives hydraulic pumps. Hydraulic system multiplies force (P = F×v constant). Can lift 5000 kg load at 1 m/s = 49 kW mechanical power. System losses mean need ~100 kW engine power. Engineers balance power vs fuel efficiency.'
        },
        {
          icon: '⚡',
          title: 'Power Grid',
          description: 'Grid transfers ~500 GW average power in US! High voltage (765 kV) minimizes current (P = VI) and losses. Transformers ~99% efficient but handle huge power - even 1% loss = megawatts of heat. Complex engineering manages this massive power transfer system.'
        },
        {
          icon: '🏭',
          title: 'Industrial Motors',
          description: 'Large industrial motors (1000+ hp) drive pumps, fans, compressors. Power factor critical: true power (kW) vs apparent power (kVA). Modern variable frequency drives optimize power use. Energy cost drives motor selection - small efficiency gain = huge savings!'
        }
      ]
    }
  },
  11: {
    id: 11,
    title: 'Work, Energy & Power: Conservation of Energy',
    subtitle: 'The Universe\'s Most Important Law',
    description: 'Master the fundamental principle that governs all processes in the universe',
    coreIdea: 'Energy can transform but never be created or destroyed',
    engineeringExample: 'Space missions, renewable energy systems, vehicle dynamics',
    learningObjectives: [
      'Apply conservation of energy to complex engineering systems',
      'Track energy transformations through multiple stages',
      'Account for losses in real-world applications',
      'Design systems based on energy conservation',
      'Optimize energy conversion processes',
      'Analyze energy flows in industrial processes'
    ],
    keyEquations: [
      { eq: 'E_{initial} = E_{final}', meaning: 'Conservation of total energy' },
      { eq: 'mgh_1 + \\frac{1}{2}mv_1^2 = mgh_2 + \\frac{1}{2}mv_2^2', meaning: 'Conservation of mechanical energy' },
      { eq: 'E_{total} = \\sum E_i = E_k + E_p + E_{th} + E_{ch} + E_{em} + ...', meaning: 'Total energy includes all forms' },
      { eq: '\\Delta E_{system} = W_{ext} + Q_{net}', meaning: 'First law of thermodynamics' },
      { eq: 'E = mc^2', meaning: 'Mass-energy equivalence' }
    ],
    practiceProblems: [
      {
        id: '2.3a',
        prompt: 'A wind turbine (90m height, 80% efficient) faces 15 m/s wind. Calculate (a) wind power available per m² of blade area, (b) actual electrical power for 40m radius blades, and (c) daily energy production.',
        solution: 'a) Wind power/area = ½ρv³ = ½(1.225)(15³) = 2067 W/m²\nb) Blade area = πr² = π(40)² = 5027 m²\nTotal available = 2067 × 5027 = 10.4 MW\nActual = 10.4 MW × 0.8 = 8.32 MW\nc) Daily energy = 8.32 MW × 24h = 199.7 MWh',
        hints: ['Use P = ½ρv³ for wind power', 'Account for efficiency', 'Consider full day operation']
      },
      {
        id: '2.3b',
        prompt: 'An electric car (2000 kg) drives up a 5° hill at constant 90 km/h. Calculate (a) rate of PE gain, (b) power against air drag (Cd = 0.3, A = 2.5m²), and (c) total battery power needed.',
        solution: 'a) v = 25 m/s, h_rate = v×sin(5°) = 2.18 m/s\nP_PE = mgh_rate = (2000)(9.8)(2.18) = 42.7 kW\nb) P_drag = ½ρv³CdA = ½(1.225)(25³)(0.3)(2.5) = 14.3 kW\nc) Total = 42.7 + 14.3 = 57 kW from battery',
        hints: ['Split into PE and drag', 'Convert speed to m/s', 'Add power components']
      },
      {
        id: '2.3c',
        prompt: 'A spacecraft (1000 kg) moves from 300 km to 600 km orbit. Calculate (a) change in PE, (b) change in KE, and (c) energy needed from engines. (R_Earth = 6371 km)',
        solution: 'a) ΔPE = GMm(1/r₁ - 1/r₂)\n= (6.67×10⁻¹¹)(5.97×10²⁴)(1000)(1/6671000 - 1/6971000)\nΔPE = +2.89×10⁹ J\nb) v = √(GM/r), ΔKE = -1.44×10⁹ J\nc) Total energy needed = 1.45×10⁹ J',
        hints: ['Use gravitational PE formula', 'KE from orbital velocity', 'Total is ΔPE + ΔKE']
      }
    ],
    content: {
      intro: '🌟 Conservation of energy is the most powerful principle in physics! It governs everything from atomic reactions to galaxy formation. Engineers rely on it to design power plants, optimize vehicles, and plan space missions. Understanding energy conservation is key to solving Earth\'s energy challenges.',
      concepts: [
        {
          title: '⚖️ 1. The Conservation Law',
          explanation: 'TOTAL ENERGY of an isolated system remains constant. Energy can\'t be created or destroyed, only transformed between forms. All processes must obey this law! Even mass is a form of energy (E = mc²). Engineers track ALL energy forms to ensure nothing is missed.',
          example: 'Nuclear power plant: 1 kg uranium contains 8.2×10¹³ J energy (E = mc²). Chain reaction converts tiny mass loss (0.1%) into heat → steam → mechanical → electrical energy. Each step conserves total energy but changes its form. Engineers track every transformation to optimize efficiency!',
          comparison: {
            left: {
              title: '✅ CONSERVED QUANTITIES',
              points: [
                'Total energy',
                'Mass + energy combined',
                'Sum of all forms',
                'System + surroundings',
                'Example: Nuclear reaction',
                'No violations possible',
                'Fundamental law'
              ]
            },
            right: {
              title: '❌ NOT CONSERVED',
              points: [
                'Individual energy forms',
                'Mass alone',
                'Useful energy',
                'System energy only',
                'Example: Heat loss',
                'Can change freely',
                'Practical consideration'
              ]
            }
          }
        },
        {
          title: '🔄 2. Energy Transformations',
          explanation: 'Energy flows through different forms: Mechanical (KE, PE) → Thermal → Chemical → Electrical → Nuclear. Each transformation may have losses (usually to heat). Understanding transformation paths helps optimize systems. Track energy through EVERY step!',
          example: 'Electric vehicle: Battery chemical → Electrical → Mechanical → KE. 85 kWh battery stores 306 MJ chemical energy. Motor 95% efficient, drivetrain 90% - overall 85% to wheels. Compare to gas car: Chemical → Thermal → Mechanical at only 25% efficiency! This is why EVs are more efficient.',
          comparison: {
            left: {
              title: '⚡ EFFICIENT PATH',
              points: [
                'Few transformations',
                'High efficiency each step',
                'Minimal heat loss',
                'Example: Electric motor',
                '85-90% overall',
                'Lower energy input',
                'Better performance'
              ]
            },
            right: {
              title: '🔥 INEFFICIENT PATH',
              points: [
                'Many transformations',
                'Low efficiency steps',
                'Major heat losses',
                'Example: Gas engine',
                '25-30% overall',
                'Higher energy input',
                'More waste heat'
              ]
            }
          }
        },
        {
          title: '📊 3. System Analysis',
          explanation: 'Define system boundaries carefully! Track energy crossing boundary (work, heat, radiation). ΔE_system = Work_in + Heat_in - Work_out - Heat_out. For isolated system, no energy crosses boundary → total E constant. Real systems usually exchange energy with environment.',
          example: 'Space station solar arrays: System boundary around panels. Energy in: 1.4 kW/m² solar radiation. Energy out: 20% becomes electricity (280 W/m²), 80% becomes heat. Must design cooling system for 1.12 kW/m² heat rejection! Conservation helps size radiators.',
          comparison: {
            left: {
              title: '🔒 ISOLATED SYSTEM',
              points: [
                'No external exchange',
                'Total E constant',
                'Simple analysis',
                'Example: Thermos',
                'Perfect isolation',
                'Theoretical model',
                'Conservation exact'
              ]
            },
            right: {
              title: '🌍 REAL SYSTEM',
              points: [
                'External exchange',
                'System E changes',
                'Complex analysis',
                'Example: Car engine',
                'Heat/work transfer',
                'Practical case',
                'Track all flows'
              ]
            }
          }
        },
        {
          title: '🛠️ 4. Engineering Applications',
          explanation: 'Conservation of energy guides ALL engineering: Size motors, design cooling, optimize efficiency. If energy seems to disappear, you missed something! Account for ALL forms: kinetic, potential, thermal, chemical, electrical, nuclear, even mass-energy.',
          example: 'Jet engine design: 100 kg/s air + 2 kg/s fuel in. Energy flow: Fuel chemical (43 MJ/kg) → combustion heat → exhaust KE + heat. Conservation requires: 86 MW fuel energy = thrust power + exhaust heat + radiative loss. Used to size components!',
          comparison: {
            left: {
              title: '📈 DESIGN PHASE',
              points: [
                'Energy flow analysis',
                'Component sizing',
                'Efficiency targets',
                'Loss estimation',
                'System optimization',
                'Conservation guides',
                'Theoretical calcs'
              ]
            },
            right: {
              title: '🔍 TESTING PHASE',
              points: [
                'Energy measurement',
                'Loss verification',
                'Performance check',
                'Heat management',
                'System validation',
                'Conservation checks',
                'Real data'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Space Mission Planning',
          description: 'Mars mission: Solar panels (10 kW) power ion engine. Conservation tracks energy: Solar → Electrical → Ion KE → Spacecraft orbital energy. Need 400 MJ to raise orbit 1000 km. Conservation tells us minimum trip time: 400 MJ ÷ 10 kW = 11.1 hours best case!'
        },
        {
          icon: '�',
          title: 'Grid-Scale Energy Storage',
          description: 'Pumped hydro storage: 1000 MWh capacity = 3.6×10¹² J. Water elevated 500m. Conservation → mass needed: E = mgh, m = E/gh = 734 million kg water! Engineers use this to size reservoirs. 80% round-trip efficiency due to pump/turbine losses.'
        },
        {
          icon: '🏭',
          title: 'Industrial Process Design',
          description: 'Steel plant: 1 ton steel needs 20 GJ energy! Conservation tracks energy: Chemical (coal) → Heat → Steel thermal + Chemical changes + Losses. Understanding energy flow identifies savings: Waste heat recovery can save 20-30% energy = millions $/year!'
        },
        {
          icon: '🚗',
          title: 'Vehicle Development',
          description: 'Tesla Model S P100D: 100 kWh = 360 MJ battery. Conservation shows energy use: 15% aero drag, 10% rolling resistance, 5% drivetrain loss, 70% to acceleration/climbing. Engineers use this to optimize range: better aero = exponential energy savings!'
        },
        {
          icon: '♨️',
          title: 'Cooling System Design',
          description: 'Data center cooling: Servers use 10 MW electricity = 10 MW heat (conservation!). Must remove ALL heat or temperatures rise. Conservation sizes cooling: Need 10 MW cooling capacity. Modern systems use hot aisle/cold aisle to optimize airflow, reduce energy 30%.'
        }
      ]
    }
  },
  12: {
    id: 12,
    title: 'Work, Energy & Power: Efficiency',
    subtitle: 'Maximizing Useful Output',
    description: 'Master the art of minimizing losses and optimizing system performance',
    coreIdea: 'Real systems always have losses - engineering is about minimizing them',
    engineeringExample: 'Power plants, electric vehicles, industrial processes',
    learningObjectives: [
      'Calculate and optimize system efficiency',
      'Analyze energy losses in complex systems',
      'Compare different technologies\' efficiencies',
      'Design systems for maximum performance',
      'Evaluate cost-benefit of efficiency improvements',
      'Apply thermodynamic limits to efficiency'
    ],
    keyEquations: [
      { eq: '\\eta = \\frac{E_{out}}{E_{in}} \\times 100\\%', meaning: 'Overall efficiency percentage' },
      { eq: '\\eta_{total} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times ...', meaning: 'Combined efficiency of multiple stages' },
      { eq: '\\eta_{Carnot} = 1 - \\frac{T_C}{T_H}', meaning: 'Maximum theoretical heat engine efficiency' },
      { eq: 'P_{loss} = I^2R = \\frac{V^2}{R} = VI', meaning: 'Power lost in electrical systems' },
      { eq: '\\text{ROI} = \\frac{\\text{Annual Savings}}{\\text{Investment Cost}} \\times 100\\%', meaning: 'Return on efficiency investment' }
    ],
    practiceProblems: [
      {
        id: '2.4a',
        prompt: 'A power plant has: boiler (90%), turbine (70%), generator (95%), transformer (98%) efficiencies. Calculate: (a) overall efficiency, (b) input needed for 100 MW output, (c) annual fuel cost at $0.03/kWh input.',
        solution: 'a) η_total = 0.90 × 0.70 × 0.95 × 0.98 = 0.589 = 58.9%\nb) P_in = 100 MW/0.589 = 169.8 MW input needed\nc) Annual cost = 169.8 MW × 8760 hr/yr × $30/MWh\n= $44.6 million/year in fuel',
        hints: ['Multiply all efficiencies', 'P_in = P_out/η_total', 'Include all hours in year']
      },
      {
        id: '2.4b',
        prompt: 'An industrial motor (100 kW, 85% efficient) runs 3000 hrs/year. Upgrading to 95% efficient motor costs $12,000. Calculate: (a) annual energy savings, (b) cost savings at $0.10/kWh, (c) ROI.',
        solution: 'a) Current input = 100/0.85 = 117.65 kW\nNew input = 100/0.95 = 105.26 kW\nSavings = (117.65-105.26)(3000) = 37,170 kWh/yr\nb) Cost savings = 37,170 kWh × $0.10 = $3,717/yr\nc) ROI = (3,717/12,000) × 100% = 31% annual return',
        hints: ['Compare input powers', 'Calculate annual kWh saved', 'ROI = savings/cost']
      },
      {
        id: '2.4c',
        prompt: 'A heat engine operates between 600°C and 100°C. Calculate: (a) Carnot efficiency, (b) practical efficiency at 70% of Carnot, (c) waste heat from 10 MW input.',
        solution: 'a) η_Carnot = 1 - (373/873) = 0.573 = 57.3%\nb) Practical η = 0.573 × 0.70 = 0.401 = 40.1%\nc) P_out = 10 MW × 0.401 = 4.01 MW useful\nWaste heat = 10 - 4.01 = 5.99 MW lost',
        hints: ['Use absolute temperatures (K)', 'Real engines < Carnot', 'Power_lost = P_in - P_out']
      }
    ],
    content: {
      intro: '⚡ Efficiency is the holy grail of engineering - it determines cost, performance, and environmental impact! No real system is 100% efficient, but good engineering can dramatically reduce losses. Understanding efficiency helps us design better systems and save millions in operating costs.',
      concepts: [
        {
          title: '📊 1. Understanding Efficiency',
          explanation: 'EFFICIENCY measures useful output vs total input (η = E_out/E_in × 100%). Always < 100% due to unavoidable losses! Different processes have different theoretical limits (Carnot efficiency for heat engines). Every percentage point matters in large systems.',
          example: 'Modern power plant: 1000 MW input, 600 MW electrical output (60% efficient). Seems low but close to theoretical limit! Losses: 200 MW stack heat, 150 MW cooling tower, 50 MW other. Finding ways to recover waste heat can boost efficiency further.',
          comparison: {
            left: {
              title: '⚡ HIGH EFFICIENCY',
              points: [
                'Electric motors (90-95%)',
                'Small losses',
                'Less waste heat',
                'Lower operating cost',
                'Example: EV drivetrain',
                'Simple energy conversion',
                'Cool operation'
              ]
            },
            right: {
              title: '🔥 LOW EFFICIENCY',
              points: [
                'Gas engines (25-30%)',
                'Large losses',
                'Much waste heat',
                'Higher operating cost',
                'Example: Car engine',
                'Complex conversion',
                'Needs cooling system'
              ]
            }
          }
        },
        {
          title: '🔍 2. Sources of Loss',
          explanation: 'LOSSES occur in many forms: Friction (mechanical), Resistance (electrical), Heat transfer, Fluid drag, Material limits. Each system has unique loss patterns. Engineers must understand loss mechanisms to minimize them. Some losses are fundamental (Carnot limit), others can be reduced.',
          example: 'Tesla Model 3 drivetrain: Battery 95%, Inverter 98%, Motor 97%, Gearbox 98% = 88% overall! Compare to gas car: Engine 30%, Transmission 90% = 27% overall. EV\'s simpler energy conversion = fewer losses. This is why EVs are more efficient!',
          comparison: {
            left: {
              title: '🔧 REDUCIBLE LOSSES',
              points: [
                'Friction in bearings',
                'Air resistance',
                'Electrical resistance',
                'Material quality',
                'Can be improved',
                'Engineering focus',
                'Worth investing'
              ]
            },
            right: {
              title: '🚫 FUNDAMENTAL LIMITS',
              points: [
                'Carnot efficiency',
                'Material properties',
                'Laws of physics',
                'Theoretical bounds',
                'Cannot be exceeded',
                'Set maximum η',
                'Accept and design around'
              ]
            }
          }
        },
        {
          title: '📈 3. Efficiency Optimization',
          explanation: 'IMPROVING efficiency requires: Better materials, Optimized design, Regular maintenance, Energy recovery systems. Cost vs benefit analysis crucial! Small efficiency gain in large system = huge savings. Modern tech enables previously impossible improvements.',
          example: 'Data center cooling: Traditional: PUE = 2.0 (50% cooling overhead). Modern: PUE = 1.1 (10% overhead)! Improvements: Direct liquid cooling, AI-controlled airflow, Heat recovery. Google saved $1B+ through efficiency! Small improvements compound in 24/7 operation.',
          comparison: {
            left: {
              title: '💰 WORTH IMPROVING',
              points: [
                'High usage systems',
                'Large energy flows',
                'Expensive operation',
                'Example: Power plant',
                'Quick payback',
                'Major savings',
                'Priority upgrade'
              ]
            },
            right: {
              title: '⚖️ NOT WORTH IT',
              points: [
                'Low usage systems',
                'Small energy flows',
                'Cheap operation',
                'Example: Home appliance',
                'Long payback',
                'Minor savings',
                'Accept current η'
              ]
            }
          }
        },
        {
          title: '💡 4. Modern Technologies',
          explanation: 'NEW TECH enables better efficiency: SiC/GaN electronics, magnetic bearings, advanced materials, AI control systems. IoT sensors monitor losses real-time. Digital twins optimize operation. Smart systems adapt to conditions. Future: quantum sensors, superconductors!',
          example: 'Modern wind turbine: AI-optimized blade pitch, magnetic bearings (99.9% efficient), SiC inverters (99% efficient). Result: 45% overall efficiency vs 30% decade ago! Smart sensors detect icing, adjust operation. Digital twin predicts maintenance. Technology transformed efficiency!',
          comparison: {
            left: {
              title: '🔬 EMERGING TECH',
              points: [
                'Wide bandgap electronics',
                'Magnetic bearings',
                'AI control systems',
                'New materials',
                'Higher efficiency',
                'More expensive',
                'Leading edge'
              ]
            },
            right: {
              title: '⚙️ TRADITIONAL TECH',
              points: [
                'Silicon electronics',
                'Ball bearings',
                'Fixed controls',
                'Standard materials',
                'Lower efficiency',
                'Well proven',
                'Reliable choice'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🏭',
          title: 'Combined Cycle Power Plants',
          description: 'Modern plants reach 63% efficiency! Gas turbine (40%) + steam turbine (30% of remainder) + heat recovery. Traditional single-cycle only 35%. Extra cost pays back in months. CO2 savings huge. Every 1% efficiency = $10M/year fuel savings for 1GW plant.'
        },
        {
          icon: '�',
          title: 'Electric Vehicle Systems',
          description: 'Tesla Model 3: 88% drivetrain efficiency (battery→wheels). ICE car: 27% efficiency (fuel→wheels). Result: EV uses 1/3 energy per mile! Regenerative braking recovers 60-70% of braking energy. Smart power electronics minimize conversion losses.'
        },
        {
          icon: '💻',
          title: 'Data Center Optimization',
          description: 'Google achieved PUE = 1.1 (90% efficient)! Methods: AI-controlled cooling, liquid cooling, airflow optimization, heat recovery. Saves 40% energy vs traditional design. Annual savings = millions per facility. Even 0.1 PUE improvement = huge ROI.'
        },
        {
          icon: '⚡',
          title: 'Grid Transmission',
          description: 'HVDC lines: 3.5% loss/1000km vs 6.7% for AC! Superconducting cables (<1% loss) emerging for urban links. Smart transformers 99.5% efficient. Grid modernization could save 5% of all electricity - worth billions annually!'
        },
        {
          icon: '🏢',
          title: 'Smart Buildings',
          description: 'AI-controlled HVAC + LED lighting + smart windows = 50% energy reduction! IoT sensors optimize real-time. Heat recovery ventilation 85% efficient. Dynamic facades adapt to weather. Initial cost premium pays back in 3-5 years. Future: self-powered buildings!'
        }
      ]
    }
  },
  13: {
    id: 13,
    title: 'Work, Energy & Power: Power Systems',
    subtitle: 'Engineering Power at Scale',
    description: 'Master the design and optimization of modern power systems',
    coreIdea: 'Power systems must balance efficiency, reliability, and cost across multiple energy forms',
    engineeringExample: 'Grid infrastructure, electric vehicles, aerospace systems',
    learningObjectives: [
      'Design and analyze complex power systems',
      'Compare mechanical and electrical transmission',
      'Optimize power conversion efficiency',
      'Calculate system performance metrics',
      'Evaluate hybrid power solutions',
      'Apply power quality standards',
      'Design for reliability and redundancy'
    ],
    keyEquations: [
      { eq: 'P = \\tau\\omega = F\\cdot v', meaning: 'Mechanical power (rotational and linear)' },
      { eq: 'P = VI\\cos\\phi', meaning: 'AC electrical power (φ = power factor angle)' },
      { eq: 'S = \\sqrt{P^2 + Q^2}', meaning: 'Apparent power from real (P) and reactive (Q) power' },
      { eq: '\\eta_{conversion} = \\frac{P_{out}}{P_{in}}', meaning: 'Power conversion efficiency' },
      { eq: 'P_{loss} = I^2R = \\frac{P^2}{V^2}R', meaning: 'Transmission line losses' },
      { eq: 'MTBF = \\frac{\\text{Total Operating Hours}}{\\text{Number of Failures}}', meaning: 'Mean Time Between Failures' }
    ],
    practiceProblems: [
      {
        id: '2.5a',
        prompt: 'A power transmission system has: generator (500 MVA, 0.85 PF), transformer (99% efficient), 100 km line (0.1 Ω/km). Calculate: (a) real & reactive power, (b) line losses at 345 kV, (c) total system efficiency.',
        solution: 'a) Real power P = S × PF = 500 × 0.85 = 425 MW\nQ = √(S² - P²) = 276 MVAR\nb) I = P/(√3×V) = 425×10⁶/(√3×345000) = 710 A\nR_total = 0.1 × 100 = 10 Ω\nP_loss = 3I²R = 3(710)²(10) = 15.1 MW\nc) η_total = (425-15.1)×0.99/425 = 95.5%',
        hints: ['Use power triangle', 'Calculate 3-phase current', 'Account for all losses']
      },
      {
        id: '2.5b',
        prompt: 'An electric aircraft propulsion system: battery (1 MWh, 500V), inverter (98%), motor (95%), gearbox (99%). For 200 kN thrust at 200 m/s: (a) power required, (b) current draw, (c) flight time possible.',
        solution: 'a) P_thrust = F×v = 200000×200 = 40 MW\nP_battery = 40/(0.98×0.95×0.99) = 43.4 MW\nb) I = P/V = 43.4×10⁶/500 = 86.8 kA\nc) Flight time = 1000 kWh/(43.4 MW) = 0.023 h = 83 sec\nShows current battery limitations!',
        hints: ['Use F×v for thrust power', 'Account for all losses', 'Convert units properly']
      },
      {
        id: '2.5c',
        prompt: 'A hybrid power system has: gas turbine (50 MW, 35% efficient), solar array (20 MW peak), battery (100 MWh). During peak demand (60 MW): (a) optimal power mix, (b) CO2 savings vs all-gas, (c) battery duration if gas fails.',
        solution: 'a) Use all 20 MW solar + 40 MW gas\nGas input = 40/0.35 = 114.3 MW fuel\nb) Savings = 20 MW × 0.5 kgCO₂/kWh × 24h\n= 240 metric tons CO₂/day\nc) Battery can supply 60 MW for\nt = 100 MWh/60 MW = 1.67 hours',
        hints: ['Maximize renewable use', 'Calculate fuel savings', 'Consider battery capacity']
      }
    ],
    content: {
      intro: '⚡ Power systems are the backbone of modern civilization! From massive electrical grids to advanced spacecraft, they must reliably convert and deliver enormous energy flows. Modern systems combine multiple power types, smart controls, and redundancy for maximum performance.',
      concepts: [
        {
          title: '🔄 1. Power Conversion & Transmission',
          explanation: 'POWER SYSTEMS convert between forms: mechanical↔electrical↔thermal. Each conversion has efficiency limits! Transmission choices (mechanical vs electrical) depend on distance, power level, and application. Modern systems often use multiple forms for optimal performance.',
          example: 'Modern wind farm: Mechanical power in blades (5-15 MW per turbine) → Gearbox (98% efficient) → Generator (98%) → Transformer (99%) → Grid connection. Total efficiency ~95%! Choice between direct drive (fewer losses) vs geared (lighter) depends on size.',
          comparison: {
            left: {
              title: '⚡ ELECTRICAL POWER',
              points: [
                'Low transmission loss',
                'Long distance capable',
                'Easy to transform',
                'Complex control possible',
                'Example: Power grid',
                'High voltage reduces loss',
                'Instant response'
              ]
            },
            right: {
              title: '⚙️ MECHANICAL POWER',
              points: [
                'Higher power density',
                'Short distance only',
                'Direct force application',
                'Simple control',
                'Example: Gearbox',
                'Needs physical link',
                'Some delay'
              ]
            }
          }
        },
        {
          title: '📊 2. System Architecture',
          explanation: 'MODERN SYSTEMS use hybrid architectures: multiple sources, smart controls, energy storage. Must balance reliability, efficiency, cost! N+1 redundancy standard for critical systems. Power quality (voltage stability, harmonics) crucial for sensitive loads.',
          example: 'Data center power: Utility feed + local generation + UPS batteries. 2N redundancy (two complete systems)! Power quality: UPS provides clean 480V/60Hz regardless of input. Efficiency: 95% at full load through advanced power electronics. Cost: $10M+ but downtime costs more!',
          comparison: {
            left: {
              title: '💪 ROBUST DESIGN',
              points: [
                'Multiple sources',
                'N+1 redundancy',
                'Higher cost',
                'More complexity',
                'Example: Data center',
                'Critical applications',
                'Maximum uptime'
              ]
            },
            right: {
              title: '💰 ECONOMIC DESIGN',
              points: [
                'Single source',
                'No redundancy',
                'Lower cost',
                'Simpler system',
                'Example: Home power',
                'Non-critical use',
                'Accepts outages'
              ]
            }
          }
        },
        {
          title: '🎯 3. Performance Optimization',
          explanation: 'OPTIMIZE for efficiency, reliability, cost! Key metrics: conversion efficiency, transmission losses, power quality, MTBF (Mean Time Between Failures). Modern systems use real-time monitoring, predictive maintenance. Smart controls maximize performance.',
          example: 'Electric vehicle drivetrain: Battery → 800V inverter (98.5%) → Motor (97%) → Gearbox (99%). Why 800V? P_loss = I²R, so 2× voltage = ¼ current = ¼ losses! Smart thermal management keeps components at optimal temperature. Cost premium pays back in efficiency!',
          comparison: {
            left: {
              title: '📈 HIGH PERFORMANCE',
              points: [
                'Maximum efficiency',
                'Premium components',
                'Advanced controls',
                'Higher cost',
                'Example: Tesla',
                'Best technology',
                'Optimized design'
              ]
            },
            right: {
              title: '⚖️ BALANCED DESIGN',
              points: [
                'Good efficiency',
                'Standard parts',
                'Basic controls',
                'Lower cost',
                'Example: Budget EV',
                'Proven technology',
                'Economic choice'
              ]
            }
          }
        },
        {
          title: '🔬 4. Advanced Technologies',
          explanation: 'NEW TECH revolutionizing power systems: Wide-bandgap semiconductors (SiC/GaN), digital twins, AI control. Higher frequency = smaller components. Better efficiency than ever possible! Smart grids enable dynamic optimization. Future: quantum sensors, room-temperature superconductors?',
          example: 'Modern grid converter: Silicon Carbide (SiC) switches at 100 kHz! 99% efficient vs 96% for silicon. Smaller magnetics (1/4 size). Digital twin predicts failures. AI optimizes switching patterns real-time. Cost premium but 10× reliability improvement! Future standard.',
          comparison: {
            left: {
              title: '🔮 EMERGING TECH',
              points: [
                'SiC/GaN devices',
                'Digital control',
                'AI optimization',
                'Cutting edge',
                'Highest performance',
                'More expensive',
                'Future standard'
              ]
            },
            right: {
              title: '💡 PROVEN TECH',
              points: [
                'Silicon devices',
                'Analog control',
                'Fixed patterns',
                'Well tested',
                'Good performance',
                'Cost effective',
                'Current standard'
              ]
            }
          }
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Space Power Systems',
          description: 'James Webb Telescope: 2kW solar array, 6 battery modules! Arrays point ±5° from Sun for stability. Power system mass only 3% of total but critical! Triple-redundant distribution. Digital power control manages 132 motorized mechanisms. Success = perfect power!'
        },
        {
          icon: '🏭',
          title: 'Industrial Microgrids',
          description: 'Factory microgrid: 5 MW solar + 2 MW battery + 10 MW gas turbine. AI controls optimize sources real-time. 99.999% reliability = 5 minutes downtime/year! Smart loads shift automatically. ROI < 4 years through demand charge reduction. Future of industrial power!'
        },
        {
          icon: '✈️',
          title: 'Electric Aircraft',
          description: 'Heart Aerospace ES-19: 19 seats, 400km range! 4× 400kW motors = 1.6 MW total. Battery 900V DC → inverters → motors. Challenges: power density (need 2× better batteries), thermal management at altitude. Future: hybrid-electric for larger aircraft!'
        },
        {
          icon: '🚢',
          title: 'Marine Power',
          description: 'Modern cargo ship: 100 MW diesel-electric! Engine → generator → DC bus → propulsion motors. Why not direct drive? Variable speed more efficient! Electric hotel loads too. Future: hydrogen fuel cells + batteries could eliminate emissions.'
        },
        {
          icon: '🌐',
          title: 'HVDC Transmission',
          description: 'Ultra-high voltage DC: 1100 kV, 12 GW capacity! Only 3.5% loss/1000km vs 6.7% AC. Cost: $2M/km but enables massive renewable projects. China building 1300km link! Smart terminals correct for grid instability. Future: superconducting cables?'
        }
      ]
    }
  }
};
