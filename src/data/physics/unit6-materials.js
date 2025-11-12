export const unit6Lessons = {
  26: {
    id: 26,
    title: 'Materials Overview: Metals, Ceramics, Polymers, Composites',
    subtitle: 'Metals, Ceramics, Composites',
    description: 'Explore metals, ceramics, polymers, and composites; compare properties and uses',
    coreIdea: 'Metals, ceramics, polymers, composites',
    engineeringExample: 'Rocket body vs car frame',
    learningObjectives: [
      'Identify major material classes and their typical properties',
      'Explain stress, strain, and how materials respond to load',
      'Choose materials based on strength-to-weight and application constraints'
    ],
    keyEquations: [
      { eq: 'σ = F / A', meaning: 'Stress = Force divided by area' },
      { eq: 'ε = ΔL / L₀', meaning: 'Strain = change in length over original length' }
    ],
    practiceProblems: [
      {
        id: '26a',
        prompt: 'A rod with cross-sectional area 0.01 m² supports a 1000 N load. Calculate stress in the rod.',
        solution: 'σ = F/A = 1000 / 0.01 = 100,000 Pa (100 kPa)',
        hints: ['Stress = Force / Area.']
      },
      {
        id: '26b',
        prompt: 'A 2 m steel rod stretches 1 mm under load. Estimate the strain.',
        solution: 'ε = ΔL / L₀ = 0.001 / 2 = 0.0005 (0.05%)',
        hints: ['Convert mm to meters before dividing.']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '20-30 min', tags: ['materials','stress','strain'] },
    content: {
      intro: 'Engineers choose from four main material classes: metals, ceramics, polymers, and composites. Each has unique properties for different applications.',
      concepts: [
        {
          title: 'Metals',
          explanation: 'Strong, ductile, conduct heat and electricity. Steel, aluminum, titanium.',
          example: 'Car frame: steel for strength. Aircraft: aluminum for light weight. Rockets: titanium for high temp'
        },
        {
          title: 'Ceramics',
          explanation: 'Hard, brittle, heat resistant. Glass, concrete, thermal tiles.',
          example: 'Space Shuttle thermal tiles: ceramic withstands 1650°C reentry heat'
        },
        {
          title: 'Polymers & Composites',
          explanation: 'Polymers: plastics. Composites: fibers in matrix (carbon fiber, fiberglass).',
          example: 'Carbon fiber: lighter than aluminum, stronger than steel. Used in race cars and aircraft'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Materials',
          description: 'Body: aluminum alloy. Engines: steel/titanium. Tanks: aluminum-lithium. Heat shield: ceramic'
        },
        {
          icon: '🚗',
          title: 'Car Materials',
          description: 'Frame: steel. Body panels: aluminum/plastic. Bumpers: polymer. Windows: glass (ceramic)'
        },
        {
          icon: '✈️',
          title: 'Aircraft Materials',
          description: 'Fuselage: aluminum. Wings: aluminum/composites. Engine: titanium/nickel alloys'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: 'Stress & Strain',
    subtitle: 'Force vs Deformation',
    description: 'Understand how materials respond to applied forces',
    coreIdea: 'Force vs deformation',
    engineeringExample: 'Airplane wing flex test',
    content: {
      intro: 'Stress is force per area. Strain is deformation. The relationship between them defines material behavior.',
      concepts: [
        {
          title: 'Stress',
          explanation: 'Stress = Force / Area. Measured in Pascals (Pa) or psi. Internal force in material.',
          example: '1000N force on 0.01 m² area creates 100,000 Pa (100 kPa) stress'
        },
        {
          title: 'Strain',
          explanation: 'Strain = Change in length / Original length. Dimensionless (no units).',
          example: '1m rod stretches to 1.01m: strain = 0.01/1 = 0.01 = 1%'
        },
        {
          title: 'Stress-Strain Curve',
          explanation: 'Graph showing how material deforms under stress. Defines material properties.',
          example: 'Steel: linear elastic region, then yields, then hardens, finally breaks'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Wing Flex Testing',
          description: 'Wings bent to 150% design load to verify stress limits. Boeing 787 wings flex 26 feet!'
        },
        {
          icon: '🚗',
          title: 'Suspension Springs',
          description: 'Springs designed to handle stress from bumps without permanent deformation'
        },
        {
          icon: '🚀',
          title: 'Rocket Tank Pressure',
          description: 'Fuel tanks under high pressure create hoop stress in walls - must not exceed limit'
        }
      ]
    }
  },
  28: {
    id: 28,
    title: 'Elastic & Plastic Deformation',
    subtitle: 'Reversible vs Permanent',
    description: 'Learn the difference between temporary and permanent deformation',
    coreIdea: 'Reversible vs permanent',
    engineeringExample: 'Bumper crash test',
    content: {
      intro: 'Elastic deformation is reversible - material returns to original shape. Plastic deformation is permanent. Engineers must know the boundary.',
      concepts: [
        {
          title: 'Elastic Deformation',
          explanation: 'Material returns to original shape when force removed. Follows Hooke\'s Law: F = kx',
          example: 'Rubber band: stretch it, release it, returns to original length'
        },
        {
          title: 'Yield Strength',
          explanation: 'Stress at which plastic deformation begins. Critical design parameter.',
          example: 'Steel yields at ~250 MPa. Design must keep stress below this for normal operation'
        },
        {
          title: 'Plastic Deformation',
          explanation: 'Permanent shape change. Material doesn\'t return to original shape.',
          example: 'Bend a paperclip - it stays bent. You\'ve exceeded its yield strength.'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Crash Bumpers',
          description: 'Designed to deform plastically in crash, absorbing energy to protect passengers'
        },
        {
          icon: '✈️',
          title: 'Aircraft Structures',
          description: 'Must stay elastic during normal flight. Plastic deformation = structural damage'
        },
        {
          icon: '🚀',
          title: 'Rocket Reusability',
          description: 'SpaceX inspects for plastic deformation after landing - indicates overstress'
        }
      ]
    }
  },
  29: {
    id: 29,
    title: 'Failure & Fatigue',
    subtitle: 'How Things Break',
    description: 'Understand failure modes and how repeated stress causes fatigue',
    coreIdea: 'How things break',
    engineeringExample: 'Reusable rocket inspection',
    content: {
      intro: 'Materials fail in different ways: sudden fracture, fatigue from repeated stress, or creep at high temperature. Engineers must prevent all failure modes.',
      concepts: [
        {
          title: 'Fracture',
          explanation: 'Material breaks when stress exceeds ultimate strength. Brittle vs ductile fracture.',
          example: 'Glass: brittle fracture (sudden). Steel: ductile fracture (deforms first, warning)'
        },
        {
          title: 'Fatigue',
          explanation: 'Repeated stress cycles cause cracks to grow slowly until sudden failure.',
          example: 'Bend paperclip back and forth - eventually breaks from fatigue, not single overload'
        },
        {
          title: 'Crack Propagation',
          explanation: 'Small cracks grow with each stress cycle. Inspection finds cracks before failure.',
          example: 'Aircraft inspected for cracks every flight. Catch them early before catastrophic failure'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Reusable Rocket Inspection',
          description: 'SpaceX inspects Falcon 9 for fatigue cracks after each flight before reuse'
        },
        {
          icon: '✈️',
          title: 'Aircraft Fatigue Life',
          description: 'Every part has fatigue life in flight cycles. Replaced before reaching limit.'
        },
        {
          icon: '🚗',
          title: 'Suspension Fatigue',
          description: 'Suspension components see millions of stress cycles. Designed for 10+ year life'
        }
      ]
    }
  },
  30: {
    id: 30,
    title: 'Material Selection',
    subtitle: 'Weight, Strength, Cost',
    description: 'Learn how engineers choose the right material for each application',
    coreIdea: 'Choose for weight, strength, cost',
    engineeringExample: 'Jet engine turbine or car chassis material selector',
    content: {
      intro: 'Material selection balances many factors: strength, weight, cost, temperature resistance, corrosion resistance, manufacturability. No perfect material exists.',
      concepts: [
        {
          title: 'Strength-to-Weight Ratio',
          explanation: 'Strength divided by density. Critical for vehicles where weight matters.',
          example: 'Titanium: 2x stronger than aluminum, only 1.7x heavier. Great strength-to-weight!'
        },
        {
          title: 'Cost vs Performance',
          explanation: 'Better materials cost more. Must justify cost with performance gain.',
          example: 'Carbon fiber: 5x cost of aluminum. Worth it for race cars, not economy cars'
        },
        {
          title: 'Material Selection Charts',
          explanation: 'Ashby charts plot properties to compare materials visually.',
          example: 'Plot strength vs density: see which materials are strong AND light'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Jet Engine Turbines',
          description: 'Nickel superalloys: withstand 1200°C. Expensive but necessary for performance'
        },
        {
          icon: '🚗',
          title: 'Car Chassis Selection',
          description: 'Economy car: steel (cheap, strong). Luxury: aluminum (light). Race: carbon fiber (lightest)'
        },
        {
          icon: '🚀',
          title: 'Rocket Material Trade-offs',
          description: 'Every kg saved = more payload. Justify expensive materials with weight savings'
        }
      ]
    }
  }
};
