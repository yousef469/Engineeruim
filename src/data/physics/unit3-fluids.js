export const unit3Lessons = {
  14: {
    id: 14,
    title: 'Fluids & Pressure: What is Pressure?',
    subtitle: 'Force Per Area',
    description: 'Learn how pressure works in fluids and gases',
    coreIdea: 'Force per area',
    engineeringExample: 'Tire pressure or cabin pressure',
    learningObjectives: [
      'Define pressure and its SI units',
      'Calculate pressure in static fluids',
      'Convert between pressure units',
      'Analyze pressure variation with depth',
      'Apply Pascal\'s principle to hydraulic systems'
    ],
    keyEquations: [
      { eq: 'P = \\frac{F}{A}', meaning: 'Pressure = Force per unit area' },
      { eq: 'P = P_0 + \\rho gh', meaning: 'Pressure at depth (h) in fluid' },
      { eq: 'P_1A_1 = P_2A_2', meaning: 'Pascal\'s principle for hydraulics' },
      { eq: 'P_{atm} = 101.325\\,\\text{kPa}', meaning: 'Standard atmospheric pressure' }
    ],
    practiceProblems: [
      {
        id: '3.1a',
        prompt: 'Calculate the pressure under 50m of water (ρ = 1000 kg/m³).',
        solution: 'Using P = ρgh:\nP = (1000)(9.8)(50)\nP = 490,000 Pa = 490 kPa\nAdd 101.3 kPa atmospheric = 591.3 kPa total',
        hints: ['Use P = ρgh', 'Include atmospheric pressure', 'Convert units if needed']
      },
      {
        id: '3.1b',
        prompt: 'A hydraulic lift has pistons of 5cm and 50cm diameter. What force lifts 2000 kg?',
        solution: 'F₁/A₁ = F₂/A₂\nA₁ = π(0.025)² = 0.00196 m²\nA₂ = π(0.25)² = 0.196 m²\nF₁ = (2000×9.8)(0.00196/0.196) = 196 N',
        hints: ['Use Pascal\'s principle', 'Areas are π(d/2)²', 'Weight = mg']
      },
      {
        id: '3.1c',
        prompt: 'What force does 35 psi tire pressure exert on a 2 cm² valve stem?',
        solution: '35 psi = 241.3 kPa\nF = PA = (241,300)(0.0002)\nF = 48.3 N',
        hints: ['Convert psi to Pa', 'Convert cm² to m²', 'Use F = PA']
      }
    ],
    content: {
      introduction: 'Pressure is a fundamental concept in fluid mechanics, representing force distributed over area. Understanding pressure is essential for designing everything from tires to aircraft.',
      fundamentals: [
        'Pressure is force per unit area (P = F/A)',
        'Pressure acts equally in all directions in a fluid',
        'Pressure increases with depth in a fluid',
        'Pressure can be measured relative to atmosphere (gauge) or absolute'
      ],
      details: {
        pressureBasics: {
          definition: '$P = \\frac{F}{A}$ where F is force and A is area',
          units: {
            SI: 'Pascal (Pa) = N/m²',
            common: ['psi (pounds per square inch)', 'bar (100,000 Pa)', 'atm (101,325 Pa)'],
            conversion: '1 atm = 14.7 psi = 1.013 bar'
          }
        },
        fluidPressure: {
          hydrostaticEquation: '$P = P_0 + \\rho gh$',
          components: [
            'P₀ is surface pressure (usually atmospheric)',
            'ρ is fluid density',
            'g is gravitational acceleration',
            'h is depth below surface'
          ]
        },
        pascalsPrinciple: {
          statement: 'Pressure change applied to enclosed fluid is transmitted undiminished',
          equation: '$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$',
          applications: ['Hydraulic lifts', 'Brake systems', 'Industrial presses']
        }
      },
      examples: [
        {
          title: 'Deep Sea Pressure',
          depth: '4000m',
          calculation: '$P = 101325 + (1025)(9.8)(4000)$',
          result: '40.2 MPa (396 atm)',
          impact: 'Requires special submarine hull design'
        },
        {
          title: 'Aircraft Cabin',
          cruising: '35,000 ft (10.7 km)',
          outsidePressure: '26.4 kPa',
          cabinPressure: '75.2 kPa (8,000 ft equivalent)',
          systemDesign: 'Pressurization maintains safe, comfortable environment'
        }
      ],
      realWorld: [
        {
          application: 'Vehicle Tires',
          pressure: {
            car: '32-35 psi (220-241 kPa)',
            truck: '45-80 psi (310-552 kPa)',
            aircraft: '200+ psi (1.4+ MPa)'
          },
          factors: ['Load weight', 'Surface contact', 'Heat generation'],
          optimization: 'Balance grip, wear, efficiency'
        },
        {
          application: 'Hydraulic Systems',
          pressures: 'Up to 5000 psi (34.5 MPa)',
          advantages: ['High force multiplication', 'Smooth operation', 'Built-in overload protection'],
          examples: ['Aircraft controls', 'Construction equipment', 'Manufacturing presses']
        },
        {
          application: 'Gas Storage',
          types: {
            CNG: '3000-3600 psi (20.7-24.8 MPa)',
            propane: '200 psi (1.4 MPa)',
            medical: 'O₂ at 2200 psi (15.2 MPa)'
          },
          design: 'Safety factors, material strength, temperature effects'
        }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Fluids & Pressure: Buoyancy & Density',
    subtitle: 'Why Things Float',
    description: 'Understand buoyant force and how density determines floating',
    coreIdea: 'Floating and lifting',
    engineeringExample: 'Hot air balloon, fuel tank design',
    learningObjectives: [
      'Calculate buoyant forces using Archimedes\' principle',
      'Determine if objects will float based on density',
      'Analyze stability of floating objects',
      'Design systems utilizing buoyant forces',
      'Solve problems involving fluid displacement'
    ],
    keyEquations: [
      { eq: 'F_b = \\rho_{fluid}gV_{displaced}', meaning: 'Buoyant force equals weight of displaced fluid' },
      { eq: '\\rho = \\frac{m}{V}', meaning: 'Density = mass per unit volume' },
      { eq: '\\text{Weight} = F_b \\text{ (floating condition)}', meaning: 'Object floats when weight equals buoyant force' },
      { eq: 'V_{submerged} = \\frac{\\rho_{object}}{\\rho_{fluid}}V_{total}', meaning: 'Fraction of object submerged' }
    ],
    practiceProblems: [
      {
        id: '3.2a',
        prompt: 'A 5000 kg boat floats in seawater (ρ = 1025 kg/m³). What volume is submerged?',
        solution: 'Weight = Buoyant force\nmg = ρgV\n5000(9.8) = 1025(9.8)V\nV = 4.88 m³',
        hints: ['Use Archimedes\' principle', 'Weight = buoyant force', 'g cancels out']
      },
      {
        id: '3.2b',
        prompt: 'Will a steel ball (ρ = 7800 kg/m³) float in mercury (ρ = 13600 kg/m³)?',
        solution: 'Object floats if ρ_object < ρ_fluid\n7800 < 13600\nYes, steel will float in mercury!\nIt will sink 57% (7800/13600)',
        hints: ['Compare densities', 'Calculate submerged fraction', 'Consider density ratio']
      },
      {
        id: '3.2c',
        prompt: 'A hot air balloon contains 2000 m³ of air at 50°C. If outside air (20°C) density is 1.2 kg/m³, what lift force is produced?',
        solution: 'ρ_hot = 1.2(293/323) = 1.09 kg/m³\nF_b = (ρ_cold - ρ_hot)gV\n= (1.2 - 1.09)(9.8)(2000)\n= 2,156 N',
        hints: ['Use ideal gas law for densities', 'Net force = weight difference', 'Convert temperatures to K']
      }
    ],
    content: {
      introduction: 'Buoyancy is the upward force exerted by fluids on immersed objects. This fundamental principle explains why ships float, submarines dive, and hot air balloons rise.',
      fundamentals: [
        'Buoyant force equals weight of displaced fluid',
        'Objects float when their density is less than fluid density',
        'Metacentric height determines floating stability',
        'Temperature affects fluid density and buoyancy'
      ],
      details: {
        archimedesPrinciple: {
          statement: 'An object immersed in a fluid experiences an upward force equal to the weight of fluid displaced',
          equation: '$F_b = \\rho_{fluid}gV_{displaced}$',
          implications: [
            'Larger volume = greater buoyant force',
            'Denser fluid = greater buoyant force',
            'Shape affects displaced volume'
          ]
        },
        density: {
          definition: '$\\rho = \\frac{m}{V}$ (mass per unit volume)',
          typicalValues: {
            water: '1000 kg/m³',
            seawater: '1025 kg/m³',
            air: '1.225 kg/m³ (sea level)',
            mercury: '13600 kg/m³'
          },
          temperature: 'Most materials expand and become less dense when heated'
        },
        floatingConditions: {
          stable: '$\\rho_{object} < \\rho_{fluid}$ (floats)',
          neutral: '$\\rho_{object} = \\rho_{fluid}$ (suspends)',
          unstable: '$\\rho_{object} > \\rho_{fluid}$ (sinks)',
          partialSubmersion: '$\\frac{V_{submerged}}{V_{total}} = \\frac{\\rho_{object}}{\\rho_{fluid}}$'
        }
      },
      examples: [
        {
          title: 'Ship Design',
          principles: [
            'Hull shape maximizes displaced volume',
            'Ballast provides stability',
            'Metacentric height determines roll stability'
          ],
          calculations: 'Steel hull (ρ = 7800 kg/m³) with 95% air space has effective density of 390 kg/m³'
        },
        {
          title: 'Submarine Operation',
          systems: [
            'Main ballast tanks for surfacing/diving',
            'Trim tanks for horizontal stability',
            'Variable ballast for fine control'
          ],
          physics: 'Changes in salinity and temperature affect buoyancy'
        }
      ],
      realWorld: [
        {
          application: 'Hot Air Balloons',
          physics: {
            heating: 'Reduces air density by ~30%',
            lift: '$F_{lift} = (\\rho_{cold} - \\rho_{hot})gV$',
            control: 'Adjust temperature to change altitude'
          },
          design: ['Envelope volume', 'Maximum temperature', 'Payload capacity']
        },
        {
          application: 'Density Separation',
          process: 'Materials of different densities naturally separate',
          uses: [
            'Ore processing',
            'Recycling plastics',
            'Oil/water separation'
          ],
          efficiency: 'Can separate materials differing by 0.1 g/cm³'
        },
        {
          application: 'Fuel Systems',
          considerations: {
            aircraft: 'Jet-A1 density varies with temperature',
            rockets: 'LH2 density = 71 kg/m³, LOX = 1141 kg/m³',
            ships: 'Bunker fuel ≈ 950 kg/m³'
          },
          impact: 'Affects tank design, fuel gauging, and range calculations'
        }
      ]
    }
  },
  16: {
    id: 16,
    title: "Fluids & Pressure: Bernoulli's Principle",
    subtitle: 'Lift & Airflow',
    description: 'Discover how pressure and velocity are related in moving fluids',
    coreIdea: 'Pressure and speed relation',
    engineeringExample: 'Airplane wing lift demo',
    learningObjectives: [
      'Understand Bernoulli\'s principle and its implications',
      'Calculate pressure changes in flowing fluids',
      'Analyze lift generation on airfoils',
      'Apply conservation of energy to fluid flow',
      'Design systems utilizing Bernoulli effects'
    ],
    keyEquations: [
      { eq: 'P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}', meaning: 'Bernoulli\'s equation' },
      { eq: '\\frac{P_1}{\\rho g} + \\frac{v_1^2}{2g} + h_1 = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2g} + h_2', meaning: 'Head form of Bernoulli\'s equation' },
      { eq: 'A_1v_1 = A_2v_2', meaning: 'Continuity equation for incompressible flow' },
      { eq: 'F_L = \\frac{1}{2}\\rho v^2C_LA', meaning: 'Lift force on airfoil' }
    ],
    practiceProblems: [
      {
        id: '3.3a',
        prompt: 'Water flows through a pipe that narrows from 10cm to 5cm diameter. If initial velocity is 2 m/s, what is the velocity in the narrow section?',
        solution: 'Using A₁v₁ = A₂v₂:\nπ(0.05)²v₁ = π(0.025)²v₂\nv₂ = 2(0.05/0.025)² = 8 m/s',
        hints: ['Use continuity equation', 'Areas are π(d/2)²', 'Square the diameter ratio']
      },
      {
        id: '3.3b',
        prompt: 'Air flows over a wing at 100 m/s. If pressure above wing drops by 1000 Pa, what is the lift force on 2m² wing area?',
        solution: 'ΔP = 1000 Pa\nF = ΔP × A\nF = 1000 × 2 = 2000 N lift force',
        hints: ['Pressure difference creates lift', 'Force = pressure × area', 'Check units']
      },
      {
        id: '3.3c',
        prompt: 'Water exits a tank 5m deep through a small hole near the bottom. Calculate exit velocity.',
        solution: 'Using Bernoulli\'s equation:\n½v² + gh = constant\nv = √(2gh) = √(2×9.8×5)\nv = 9.9 m/s',
        hints: ['Use Bernoulli\'s equation', 'Surface velocity ≈ 0', 'Torricelli\'s theorem']
      }
    ],
    content: {
      introduction: 'Bernoulli\'s principle relates fluid pressure, velocity, and height, forming the foundation for understanding lift, fluid flow, and many engineering applications.',
      fundamentals: [
        'Faster-moving fluid has lower pressure',
        'Total energy (pressure + kinetic + potential) remains constant',
        'Flow rate remains constant in a continuous flow',
        'Pressure differences create forces on surfaces'
      ],
      details: {
        bernoulliEquation: {
          basic: '$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$',
          terms: [
            'P: pressure energy',
            '½ρv²: kinetic energy',
            'ρgh: potential energy'
          ],
          assumptions: [
            'Steady flow',
            'Incompressible fluid',
            'No viscous effects',
            'Flow along streamline'
          ]
        },
        continuityEquation: {
          formula: '$A_1v_1 = A_2v_2$',
          implications: [
            'Narrower pipe = faster flow',
            'Conservation of mass',
            'Velocity inversely proportional to area'
          ]
        },
        liftGeneration: {
          mechanism: {
            airfoil: 'Curved upper surface creates faster flow',
            pressure: 'Lower pressure above wing',
            force: '$F_L = \\frac{1}{2}\\rho v^2C_LA$'
          },
          factors: [
            'Angle of attack',
            'Wing shape',
            'Air density',
            'Velocity squared dependency'
          ]
        }
      },
      examples: [
        {
          title: 'Aircraft Wing',
          analysis: {
            velocity: 'v_top ≈ 1.2v_bottom',
            pressureDiff: 'ΔP ≈ 2000 Pa at cruise',
            lift: '10⁵ N for typical airliner'
          },
          optimization: [
            'Winglets reduce tip vortices',
            'Flaps increase lift at low speeds',
            'Supercritical airfoils reduce drag'
          ]
        },
        {
          title: 'Venturi Meter',
          operation: 'Measures flow rate using pressure difference',
          equation: '$v_2 = v_1\\sqrt{\\frac{2(P_1-P_2)}{\\rho(1-\\beta^4)}}$',
          applications: ['Flow measurement', 'Carburetors', 'Spray systems']
        }
      ],
      realWorld: [
        {
          application: 'Race Car Aerodynamics',
          features: {
            underbody: 'Shaped to accelerate airflow',
            diffuser: 'Controlled expansion reduces pressure',
            result: 'Downforce increases with speed squared'
          },
          performance: 'Up to 3G downforce at racing speeds'
        },
        {
          application: 'Wind Turbines',
          principles: {
            blade: 'Airfoil generates lift force',
            rotation: 'Lift converted to torque',
            efficiency: 'Betz limit = 59.3% maximum'
          },
          design: 'Variable pitch optimizes for wind speed'
        },
        {
          application: 'HVAC Systems',
          components: {
            ducts: 'Sized for efficient flow',
            diffusers: 'Control air distribution',
            filters: 'Account for pressure drop'
          },
          optimization: 'Balance flow rate vs energy cost'
        }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Fluids & Pressure: Fluid Resistance',
    subtitle: 'Drag & Viscosity',
    description: 'Learn how fluids resist motion and create drag forces',
    coreIdea: 'Drag and viscosity',
    engineeringExample: 'Car aerodynamics test',
    learningObjectives: [
      'Calculate drag forces on moving objects',
      'Understand viscosity and its effects',
      'Analyze Reynolds number and flow regimes',
      'Design for minimal aerodynamic drag',
      'Optimize shapes for fluid dynamics'
    ],
    keyEquations: [
      { eq: 'F_D = \\frac{1}{2}\\rho v^2C_dA', meaning: 'Drag force equation' },
      { eq: '\\tau = \\mu\\frac{dv}{dy}', meaning: 'Viscous shear stress' },
      { eq: 'Re = \\frac{\\rho vL}{\\mu}', meaning: 'Reynolds number' },
      { eq: 'P_{loss} = \\frac{1}{2}\\rho v^2C_d A \\times v', meaning: 'Power lost to drag' }
    ],
    practiceProblems: [
      {
        id: '3.4a',
        prompt: 'Calculate the drag force on a car (Cd = 0.3, A = 2.2m²) at 100 km/h in air (ρ = 1.225 kg/m³).',
        solution: 'v = 100 km/h = 27.8 m/s\nF_D = ½(1.225)(27.8)²(0.3)(2.2)\nF_D = 276.8 N',
        hints: ['Convert speed to m/s', 'Use drag equation', 'Check units']
      },
      {
        id: '3.4b',
        prompt: 'Find the Reynolds number for water (μ = 0.001 Pa·s, ρ = 1000 kg/m³) flowing at 2 m/s in a 5cm pipe.',
        solution: 'Re = ρvL/μ\nRe = (1000)(2)(0.05)/0.001\nRe = 100,000 (turbulent flow)',
        hints: ['Use Reynolds equation', 'L is pipe diameter', 'Re > 4000 is turbulent']
      },
      {
        id: '3.4c',
        prompt: 'What power is needed to overcome air drag at 120 km/h for a truck (Cd = 0.8, A = 10m²)?',
        solution: 'v = 120 km/h = 33.3 m/s\nP = ½ρv³CdA\nP = ½(1.225)(33.3)³(0.8)(10)\nP = 75.4 kW',
        hints: ['Power = Force × velocity', 'Cube the velocity', 'Convert to kW']
      }
    ],
    content: {
      introduction: 'Fluid resistance encompasses drag and viscosity effects that oppose motion through fluids. Understanding these forces is crucial for efficient vehicle and system design.',
      fundamentals: [
        'Drag force increases with velocity squared',
        'Viscosity creates internal friction in fluids',
        'Reynolds number determines flow regime',
        'Shape optimization reduces drag'
      ],
      details: {
        dragForce: {
          equation: '$F_D = \\frac{1}{2}\\rho v^2C_dA$',
          components: {
            formDrag: 'Due to pressure difference',
            skinDrag: 'Due to viscous friction',
            inducedDrag: 'From lift generation'
          },
          dragCoefficients: {
            sphere: 'Cd ≈ 0.47',
            car: 'Cd = 0.25-0.35',
            airfoil: 'Cd = 0.04-0.08',
            cube: 'Cd ≈ 1.05'
          }
        },
        viscosity: {
          definition: 'Fluid resistance to shear deformation',
          equation: '$\\tau = \\mu\\frac{dv}{dy}$',
          types: {
            dynamic: 'μ (Pa·s)',
            kinematic: 'ν = μ/ρ (m²/s)'
          },
          values: {
            water: 'μ = 0.001 Pa·s',
            air: 'μ = 1.8×10⁻⁵ Pa·s',
            oil: 'μ = 0.03-0.1 Pa·s'
          }
        },
        reynoldsNumber: {
          equation: '$Re = \\frac{\\rho vL}{\\mu}$',
          regimes: {
            laminar: 'Re < 2300',
            transition: '2300 < Re < 4000',
            turbulent: 'Re > 4000'
          },
          importance: 'Determines flow behavior and drag characteristics'
        }
      },
      examples: [
        {
          title: 'Vehicle Aerodynamics',
          analysis: {
            power: '$P_{drag} = \\frac{1}{2}\\rho v^3C_dA$',
            speed: 'Drag ∝ v²',
            optimization: 'Minimize CdA product'
          },
          savings: '10% drag reduction = 3% fuel savings'
        },
        {
          title: 'Pipeline Flow',
          considerations: {
            pressure: 'Loss increases with velocity squared',
            reynolds: 'Determines friction factor',
            roughness: 'Affects boundary layer'
          },
          optimization: 'Balance flow rate vs pumping power'
        }
      ],
      realWorld: [
        {
          application: 'Aircraft Design',
          features: {
            winglets: 'Reduce induced drag 4-8%',
            surface: 'Smooth finish reduces skin friction',
            shape: 'Area ruling reduces wave drag'
          },
          impact: {
            fuel: '1% drag reduction = 0.2% fuel saving',
            range: 'Improved range or payload capacity',
            cost: 'Significant operating cost reduction'
          }
        },
        {
          application: 'Sports Engineering',
          examples: {
            golf: 'Ball dimples reduce drag by 50%',
            cycling: 'Aerodynamic frames and positions',
            swimming: 'Specialized suits reduce drag'
          },
          significance: 'Small changes have major performance impact'
        },
        {
          application: 'Wind Turbines',
          considerations: {
            blade: 'Airfoil optimization for lift/drag',
            wake: 'Turbine spacing for wake recovery',
            control: 'Pitch adjustment for wind conditions'
          },
          efficiency: 'Drag reduction increases power output'
        }
      ]
    }
  },
  18: {
    id: 18,
    title: 'Fluids & Pressure: Compressible Flow',
    subtitle: 'High-Speed Gases',
    description: 'Understand how gases behave at high speeds and supersonic flow',
    coreIdea: 'Gases at high speed',
    engineeringExample: 'Rocket nozzle exhaust animation',
    learningObjectives: [
      'Calculate Mach number and flow regimes',
      'Analyze shock waves and their effects',
      'Design supersonic nozzles',
      'Understand compressibility effects',
      'Apply gas dynamics equations'
    ],
    keyEquations: [
      { eq: 'M = \\frac{v}{c}', meaning: 'Mach number (v: velocity, c: speed of sound)' },
      { eq: 'c = \\sqrt{\\gamma RT}', meaning: 'Speed of sound in gas' },
      { eq: '\\frac{P_2}{P_1} = \\left(1 + \\frac{\\gamma-1}{2}M_1^2\\right)^{\\frac{\\gamma}{\\gamma-1}}', meaning: 'Isentropic pressure ratio' },
      { eq: '\\frac{A_2}{A_1} = \\frac{M_1}{M_2}\\sqrt{\\frac{1+\\frac{\\gamma-1}{2}M_2^2}{1+\\frac{\\gamma-1}{2}M_1^2}}', meaning: 'Area ratio for supersonic flow' }
    ],
    practiceProblems: [
      {
        id: '3.5a',
        prompt: 'Calculate the Mach number for an aircraft flying at 250 m/s at 10km altitude (c = 300 m/s).',
        solution: 'M = v/c\nM = 250/300\nM = 0.833 (high subsonic)',
        hints: ['Use Mach number equation', 'Compare to M = 1', 'Consider flow regime']
      },
      {
        id: '3.5b',
        prompt: 'A supersonic nozzle has throat area 0.01m². What exit area is needed for Mach 2.5 (γ = 1.4)?',
        solution: 'Using area ratio equation:\nA₂/A₁ = (1/M₂)[(1+0.2M₂²)/(1+0.2)]^3\nA₂/A₁ = 2.637\nA₂ = 0.02637 m²',
        hints: ['Use area ratio equation', 'M₁ = 1 at throat', 'γ = 1.4 for air']
      },
      {
        id: '3.5c',
        prompt: 'Find the stagnation pressure ratio across a normal shock at M = 1.5 (γ = 1.4).',
        solution: 'P₀₂/P₀₁ = [(γ+1)M²/(2+(γ-1)M²)]^(γ/(γ-1))\n= 0.93\nPressure recovery = 93%',
        hints: ['Use shock equations', 'Consider stagnation conditions', 'Check for physical result']
      }
    ],
    content: {
      introduction: 'Compressible flow occurs when fluid velocity approaches the speed of sound, causing significant density changes. This regime is crucial for aerospace and propulsion engineering.',
      fundamentals: [
        'Mach number determines flow regime',
        'Shock waves form at supersonic speeds',
        'Nozzle geometry controls flow acceleration',
        'Pressure, temperature, and density coupled'
      ],
      details: {
        machNumber: {
          definition: '$M = \\frac{v}{c}$ where $c = \\sqrt{\\gamma RT}$',
          regimes: {
            subsonic: 'M < 0.8',
            transonic: '0.8 < M < 1.2',
            supersonic: '1.2 < M < 5',
            hypersonic: 'M > 5'
          },
          effects: [
            'Density changes significant above M = 0.3',
            'Shock waves form above M = 1',
            'Heat effects dominant in hypersonic'
          ]
        },
        shockWaves: {
          normal: {
            properties: [
              'Pressure jumps suddenly',
              'Temperature increases',
              'Velocity decreases',
              'Entropy increases'
            ],
            equations: '$\\frac{P_2}{P_1} = 1 + \\frac{2\\gamma}{\\gamma+1}(M_1^2-1)$'
          },
          oblique: {
            angle: '$\\sin\\beta = \\frac{1}{M}$ (minimum angle)',
            applications: 'Aircraft wings, intake design'
          }
        },
        nozzleFlow: {
          convergingDiverging: {
            throat: 'M = 1 (choked flow)',
            expansion: 'Supersonic in diverging section',
            ratio: '$\\frac{A_e}{A_t}$ determines exit Mach'
          },
          performance: {
            thrust: '$F = \\dot{m}v_e + (P_e-P_a)A_e$',
            efficiency: 'Maximum at design pressure ratio'
          }
        }
      },
      examples: [
        {
          title: 'Rocket Nozzle',
          design: {
            throat: 'Minimum area (choked)',
            expansion: 'Optimized for altitude',
            ratio: 'Typically 15:1 to 150:1'
          },
          performance: 'Mach 3-4 exit velocity typical'
        },
        {
          title: 'Supersonic Inlet',
          features: {
            compression: 'Multiple shock waves',
            variable: 'Adjusts for flight speed',
            bypass: 'Manages excess air'
          },
          efficiency: 'Critical for engine performance'
        }
      ],
      realWorld: [
        {
          application: 'Supersonic Aircraft',
          features: {
            inlets: 'Variable geometry',
            nozzles: 'Adjustable area ratio',
            control: 'Mach and altitude compensation'
          },
          examples: {
            'F-22': 'M = 2.25 supercruise',
            'Concorde': 'M = 2.04 cruise',
            'SR-71': 'M = 3.2+ capability'
          }
        },
        {
          application: 'Space Launch',
          considerations: {
            nozzle: 'Altitude compensation',
            heating: 'Thermal protection',
            efficiency: 'Specific impulse optimization'
          },
          challenges: [
            'Material temperature limits',
            'Flow separation',
            'Variable back pressure'
          ]
        },
        {
          application: 'Gas Turbines',
          components: {
            compressor: 'Transonic blade tips',
            combustor: 'High-speed mixing',
            turbine: 'Shock interaction'
          },
          design: 'Balance efficiency and stability'
        }
      ]
    }
  }
};
