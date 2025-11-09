export const physicsUnits = [
  {
    id: 1,
    title: 'Mechanics & Motion',
    description: 'Understand how motion, velocity, and force are related',
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600',
    lessons: [
      {
        id: 1,
        title: 'Understanding Motion',
        description: 'Position, displacement, speed, velocity, reference frames',
        example: 'Car navigation, rocket trajectories',
        concepts: ['Position & Displacement', 'Distance vs Displacement', 'Speed vs Velocity', 'Reference Frames']
      },
      {
        id: 2,
        title: "Newton's Laws of Motion",
        description: 'Forces, inertia, F=ma, action-reaction',
        example: 'Rocket propulsion, car crashes',
        concepts: ['Law of Inertia', 'F = ma', 'Action-Reaction', 'Mass vs Weight']
      },
      {
        id: 3,
        title: 'Forces & Free-Body Diagrams',
        description: 'Visual force analysis and problem solving',
        example: 'Aircraft analysis, bridge design',
        concepts: ['Free-Body Diagrams', 'Common Forces', 'Equilibrium', 'Problem Solving']
      },
      {
        id: 4,
        title: 'Friction, Normal Force & Tension',
        description: 'Contact forces in everyday machines',
        example: 'Brakes, elevators, pulleys',
        concepts: ['Static & Kinetic Friction', 'Normal Force', 'Tension', 'Combined Forces']
      },
      {
        id: 5,
        title: 'Circular Motion',
        description: 'Turning cars, orbiting satellites',
        example: 'Race cars, satellites, roller coasters',
        concepts: ['Centripetal Acceleration', 'Centripetal Force', 'Orbital Motion', 'Banking']
      },
      {
        id: 6,
        title: 'Momentum & Collisions',
        description: 'Conservation of momentum and impulse',
        example: 'Car crashes, rocket staging',
        concepts: ['Momentum', 'Conservation Law', 'Impulse', 'Explosions & Recoil']
      },
      {
        id: 7,
        title: 'Gravity & Weight',
        description: 'Weight vs mass and gravitational fields',
        example: 'Satellite orbits, structural loads',
        concepts: ['Mass vs Weight', 'Gravitational Field', 'Universal Gravitation', 'Apparent Weight']
      },
      {
        id: 8,
        title: 'Projectile Motion',
        description: 'How thrown and fired objects move',
        example: 'Rockets, drones, cars on hills',
        concepts: ['Independence of Motion', 'Launch Angles', 'Rocket Trajectories', 'Slopes']
      }
    ]
  },
  {
    id: 2,
    title: 'Work, Energy & Power',
    description: 'Link motion to energy conversion',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-600',
    lessons: [
      {
        id: 6,
        title: 'What is Energy?',
        description: 'Kinetic vs potential',
        example: 'Moving vs parked car',
        concepts: ['Kinetic Energy', 'Potential Energy', 'Energy Forms']
      },
      {
        id: 7,
        title: 'Work & Power',
        description: 'Force × distance, rate of doing work',
        example: "Lifting a plane's landing gear",
        concepts: ['Work', 'Power', 'Efficiency']
      },
      {
        id: 8,
        title: 'Conservation of Energy',
        description: 'Energy cannot be lost',
        example: 'Roller coaster or orbit demo',
        concepts: ['Energy Conservation', 'Energy Transfer', 'Energy Transformation']
      },
      {
        id: 9,
        title: 'Efficiency',
        description: 'Energy losses',
        example: 'Car engine efficiency vs electric motor',
        concepts: ['Efficiency', 'Energy Loss', 'Heat Waste']
      },
      {
        id: 10,
        title: 'Power Systems',
        description: 'Mechanical vs electrical power',
        example: 'Rocket turbopump or electric motor power flow',
        concepts: ['Mechanical Power', 'Electrical Power', 'Power Transmission']
      }
    ]
  },
  {
    id: 3,
    title: 'Fluids & Pressure',
    description: 'How liquids and gases behave',
    icon: '🌊',
    color: 'from-cyan-500 to-blue-600',
    lessons: [
      {
        id: 11,
        title: 'What is Pressure?',
        description: 'Force per area',
        example: 'Tire pressure or cabin pressure',
        concepts: ['Pressure', 'Force per Area', 'Atmospheric Pressure']
      },
      {
        id: 12,
        title: 'Buoyancy & Density',
        description: 'Floating and lifting',
        example: 'Hot air balloon, fuel tank design',
        concepts: ['Buoyancy', 'Density', 'Archimedes Principle']
      },
      {
        id: 13,
        title: "Bernoulli's Principle",
        description: 'Pressure and speed relation',
        example: 'Airplane wing lift demo',
        concepts: ['Bernoulli Equation', 'Lift', 'Pressure-Velocity Relationship']
      },
      {
        id: 14,
        title: 'Fluid Resistance',
        description: 'Drag and viscosity',
        example: 'Car aerodynamics test',
        concepts: ['Drag Force', 'Viscosity', 'Reynolds Number']
      },
      {
        id: 15,
        title: 'Compressible Flow',
        description: 'Gases at high speed',
        example: 'Rocket nozzle exhaust animation',
        concepts: ['Compressibility', 'Mach Number', 'Shock Waves']
      }
    ]
  },
  {
    id: 4,
    title: 'Thermodynamics',
    description: 'How heat turns into power',
    icon: '🔥',
    color: 'from-red-500 to-orange-600',
    lessons: [
      {
        id: 16,
        title: 'Temperature & Heat',
        description: 'Energy transfer',
        example: 'Engine heating and cooling',
        concepts: ['Temperature', 'Heat', 'Thermal Energy']
      },
      {
        id: 17,
        title: 'Heat Transfer Types',
        description: 'Conduction, convection, radiation',
        example: 'Rocket engine cooling',
        concepts: ['Conduction', 'Convection', 'Radiation']
      },
      {
        id: 18,
        title: 'Laws of Thermodynamics',
        description: 'Energy balance',
        example: 'Car engine or jet turbine cycle',
        concepts: ['First Law', 'Second Law', 'Entropy']
      },
      {
        id: 19,
        title: 'Internal Combustion',
        description: 'Fuel burning = force',
        example: 'Car piston engine demo',
        concepts: ['Combustion', 'Otto Cycle', 'Diesel Cycle']
      },
      {
        id: 20,
        title: 'Efficiency Limits',
        description: 'Carnot cycle',
        example: 'Jet vs rocket efficiency chart',
        concepts: ['Carnot Efficiency', 'Heat Engines', 'Theoretical Limits']
      }
    ]
  },
  {
    id: 5,
    title: 'Waves, Electricity & Magnetism',
    description: 'Sensors, electronics, and communication',
    icon: '📡',
    color: 'from-purple-500 to-pink-600',
    lessons: [
      {
        id: 21,
        title: 'What Are Waves?',
        description: 'Sound, light, vibration',
        example: 'Jet engine noise visualization',
        concepts: ['Wave Properties', 'Frequency', 'Wavelength', 'Amplitude']
      },
      {
        id: 22,
        title: 'Frequency & Amplitude',
        description: 'Basic signal understanding',
        example: 'Communication between rocket & base',
        concepts: ['Frequency', 'Amplitude', 'Period', 'Wave Speed']
      },
      {
        id: 23,
        title: 'Electricity Basics',
        description: 'Charge, voltage, current',
        example: 'Car battery demo',
        concepts: ['Electric Charge', 'Voltage', 'Current', 'Resistance']
      },
      {
        id: 24,
        title: "Circuits & Ohm's Law",
        description: 'Resistance, voltage, current',
        example: 'Simple electric car wiring',
        concepts: ["Ohm's Law", 'Series Circuits', 'Parallel Circuits']
      },
      {
        id: 25,
        title: 'Magnetism & Induction',
        description: 'Motors & generators',
        example: 'Electric car motor or rocket pumps',
        concepts: ['Magnetic Fields', 'Electromagnetic Induction', 'Motors', 'Generators']
      }
    ]
  },
  {
    id: 6,
    title: 'Materials & Structures',
    description: 'What materials can handle stress, heat, and pressure',
    icon: '🏗️',
    color: 'from-gray-500 to-slate-600',
    lessons: [
      {
        id: 26,
        title: 'What Are Materials?',
        description: 'Metals, ceramics, polymers, composites',
        example: 'Rocket body vs car frame',
        concepts: ['Material Types', 'Properties', 'Selection Criteria']
      },
      {
        id: 27,
        title: 'Stress & Strain',
        description: 'Force vs deformation',
        example: 'Airplane wing flex test',
        concepts: ['Stress', 'Strain', 'Elastic Modulus', "Young's Modulus"]
      },
      {
        id: 28,
        title: 'Elastic & Plastic Deformation',
        description: 'Reversible vs permanent',
        example: 'Bumper crash test',
        concepts: ['Elastic Deformation', 'Plastic Deformation', 'Yield Point']
      },
      {
        id: 29,
        title: 'Failure & Fatigue',
        description: 'How things break',
        example: 'Reusable rocket inspection',
        concepts: ['Failure Modes', 'Fatigue', 'Crack Propagation', 'Safety Factors']
      },
      {
        id: 30,
        title: 'Material Selection',
        description: 'Choose for weight, strength, cost',
        example: 'Jet engine turbine or car chassis material selector',
        concepts: ['Material Selection', 'Trade-offs', 'Cost vs Performance']
      }
    ]
  }
];

export const getTotalLessons = () => {
  return physicsUnits.reduce((total, unit) => total + unit.lessons.length, 0);
};

export const getLessonById = (lessonId) => {
  for (const unit of physicsUnits) {
    const lesson = unit.lessons.find(l => l.id === parseInt(lessonId));
    if (lesson) {
      return { ...lesson, unit: unit.title, unitId: unit.id };
    }
  }
  return null;
};
