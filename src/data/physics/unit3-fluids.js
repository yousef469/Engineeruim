export const unit3Lessons = {
  11: {
    id: 11,
    title: 'What is Pressure?',
    subtitle: 'Force Per Area',
    description: 'Learn how pressure works in fluids and gases',
    coreIdea: 'Force per area',
    engineeringExample: 'Tire pressure or cabin pressure',
    content: {
      intro: 'Pressure is force spread over an area. It\'s crucial for everything from tire inflation to aircraft cabin design.',
      concepts: [
        {
          title: 'Pressure Definition',
          explanation: 'Pressure = Force / Area. Same force over smaller area = higher pressure.',
          example: 'Sharp knife (small area) cuts easily. Dull knife (large area) doesn\'t. Same force!'
        },
        {
          title: 'Atmospheric Pressure',
          explanation: 'Air pressure at sea level = 101,325 Pa (14.7 psi). Decreases with altitude.',
          example: 'At 10,000m altitude, pressure is only 1/4 of sea level - need pressurized cabin'
        },
        {
          title: 'Pressure in Liquids',
          explanation: 'Pressure increases with depth: P = ρgh (density × gravity × height)',
          example: 'Submarine hull must withstand enormous pressure at deep depths'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Tire Pressure',
          description: 'Proper tire pressure (32 psi) balances grip, wear, and fuel efficiency'
        },
        {
          icon: '✈️',
          title: 'Cabin Pressurization',
          description: 'Aircraft cabins pressurized to 8,000 ft equivalent for passenger comfort at 35,000 ft'
        },
        {
          icon: '🚀',
          title: 'Rocket Fuel Tanks',
          description: 'Fuel tanks pressurized to push propellant into engines at high flow rates'
        }
      ]
    }
  },
  12: {
    id: 12,
    title: 'Buoyancy & Density',
    subtitle: 'Why Things Float',
    description: 'Understand buoyant force and how density determines floating',
    coreIdea: 'Floating and lifting',
    engineeringExample: 'Hot air balloon, fuel tank design',
    content: {
      intro: 'Buoyancy is the upward force that fluids exert on objects. It\'s why ships float and hot air balloons rise.',
      concepts: [
        {
          title: 'Archimedes\' Principle',
          explanation: 'Buoyant force = weight of fluid displaced. If this exceeds object weight, it floats!',
          example: 'Steel ship floats because its hollow shape displaces enough water to exceed its weight'
        },
        {
          title: 'Density',
          explanation: 'Density = Mass / Volume. Objects less dense than fluid float, denser objects sink.',
          example: 'Ice (0.92 g/cm³) floats on water (1.0 g/cm³). Iron (7.9 g/cm³) sinks.'
        },
        {
          title: 'Neutral Buoyancy',
          explanation: 'When object density equals fluid density, it neither floats nor sinks',
          example: 'Submarines adjust ballast tanks to achieve neutral buoyancy for hovering'
        }
      ],
      realWorld: [
        {
          icon: '🎈',
          title: 'Hot Air Balloons',
          description: 'Heated air is less dense than cool air, creating buoyant force that lifts balloon'
        },
        {
          icon: '🚀',
          title: 'Rocket Fuel Tanks',
          description: 'Liquid hydrogen is very low density (0.07 g/cm³) - needs huge tanks'
        },
        {
          icon: '✈️',
          title: 'Aircraft Fuel Management',
          description: 'Jet fuel density affects weight calculations - critical for flight planning'
        }
      ]
    }
  },
  13: {
    id: 13,
    title: "Bernoulli's Principle",
    subtitle: 'Lift & Airflow',
    description: 'Discover how pressure and velocity are related in moving fluids',
    coreIdea: 'Pressure and speed relation',
    engineeringExample: 'Airplane wing lift demo',
    content: {
      intro: 'Bernoulli\'s Principle: faster moving fluid has lower pressure. This creates lift on wings and explains many fluid phenomena.',
      concepts: [
        {
          title: 'Pressure-Velocity Relationship',
          explanation: 'As fluid speed increases, pressure decreases. Total energy stays constant.',
          example: 'Water flows faster through narrow pipe section - pressure drops there'
        },
        {
          title: 'Airfoil Lift',
          explanation: 'Wing shape makes air move faster over top, creating low pressure that pulls wing up',
          example: 'Airplane wing: faster airflow on top = lower pressure = net upward force (lift)'
        },
        {
          title: 'Applications',
          explanation: 'Carburetors, atomizers, airplane wings, race car spoilers all use Bernoulli',
          example: 'Race car: airflow under car speeds up, pressure drops, car gets "sucked" to track'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Wings',
          description: 'Wing shape and angle of attack create pressure difference that generates lift'
        },
        {
          icon: '🚗',
          title: 'Race Car Aerodynamics',
          description: 'Underbody diffusers speed up airflow, reducing pressure for downforce'
        },
        {
          icon: '🚀',
          title: 'Rocket Venturi Effect',
          description: 'Nozzle throat speeds up exhaust, dropping pressure before expansion'
        }
      ]
    }
  },
  14: {
    id: 14,
    title: 'Fluid Resistance',
    subtitle: 'Drag & Viscosity',
    description: 'Learn how fluids resist motion and create drag forces',
    coreIdea: 'Drag and viscosity',
    engineeringExample: 'Car aerodynamics test',
    content: {
      intro: 'Fluids resist motion through drag and viscosity. Minimizing these forces is critical for vehicle efficiency.',
      concepts: [
        {
          title: 'Drag Force',
          explanation: 'Drag = ½ρv²CdA. Increases with speed squared! Cd = drag coefficient, A = frontal area.',
          example: 'Doubling speed quadruples drag force - why highway driving uses more fuel'
        },
        {
          title: 'Viscosity',
          explanation: 'Internal friction in fluids. Honey has high viscosity, water has low viscosity.',
          example: 'Engine oil viscosity affects how easily engine parts move - balance protection vs efficiency'
        },
        {
          title: 'Streamlining',
          explanation: 'Smooth, tapered shapes reduce drag by preventing turbulent wake',
          example: 'Teardrop shape has Cd ≈ 0.05. Flat plate has Cd ≈ 1.2. Huge difference!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Aerodynamics',
          description: 'Modern cars have Cd ≈ 0.25-0.30. Every 0.01 reduction saves fuel and increases top speed'
        },
        {
          icon: '✈️',
          title: 'Aircraft Drag Reduction',
          description: 'Smooth surfaces, retracted landing gear, and winglets all reduce drag'
        },
        {
          icon: '🚀',
          title: 'Rocket Atmospheric Drag',
          description: 'Rockets lose ~10% of velocity to atmospheric drag during ascent'
        }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Compressible Flow',
    subtitle: 'High-Speed Gases',
    description: 'Understand how gases behave at high speeds and supersonic flow',
    coreIdea: 'Gases at high speed',
    engineeringExample: 'Rocket nozzle exhaust animation',
    content: {
      intro: 'At high speeds (near or above speed of sound), gas density changes significantly. This requires special analysis for rockets and supersonic aircraft.',
      concepts: [
        {
          title: 'Mach Number',
          explanation: 'Mach = velocity / speed of sound. Mach 1 = speed of sound (343 m/s at sea level)',
          example: 'Subsonic: Mach < 1. Transonic: Mach ≈ 1. Supersonic: Mach > 1. Hypersonic: Mach > 5'
        },
        {
          title: 'Shock Waves',
          explanation: 'Sudden pressure changes when flow exceeds Mach 1. Creates sonic boom.',
          example: 'Supersonic jet creates cone-shaped shock wave - you hear boom when it passes'
        },
        {
          title: 'Nozzle Flow',
          explanation: 'Converging-diverging nozzle accelerates gas to supersonic speeds',
          example: 'Rocket nozzle: converging section speeds up to Mach 1, diverging section accelerates beyond'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Nozzles',
          description: 'De Laval nozzle accelerates exhaust to Mach 3-4 for maximum thrust'
        },
        {
          icon: '✈️',
          title: 'Supersonic Aircraft',
          description: 'SR-71 Blackbird flew at Mach 3.2 - special inlet design to slow air for engines'
        },
        {
          icon: '🚗',
          title: 'Turbochargers',
          description: 'Compressor creates high-speed compressible flow to boost engine power'
        }
      ]
    }
  }
};
