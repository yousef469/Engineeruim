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
      intro: 'Pressure is a fundamental concept in fluid mechanics, representing force distributed over area. Understanding pressure is essential for designing everything from tires to aircraft.',
      concepts: [
        {
          title: '📐 1. Pressure Basics',
          explanation: 'PRESSURE is force per unit area: P = F/A. Measured in Pascals (Pa = N/m²). Common units: psi (pounds per square inch), bar (100,000 Pa), atm (101,325 Pa). Conversion: 1 atm = 14.7 psi = 1.013 bar. Pressure acts equally in all directions in a fluid.',
          example: 'Car tire at 35 psi: Pressure = 35 × 6895 = 241,325 Pa. This means every square meter of tire surface experiences 241,325 N of force! That\'s why tires can support heavy vehicles.'
        },
        {
          title: '🌊 2. Hydrostatic Pressure',
          explanation: 'Pressure increases with depth in a fluid: P = P₀ + ρgh where P₀ is surface pressure (usually atmospheric), ρ is fluid density, g is gravitational acceleration, and h is depth. Deeper = more pressure!',
          example: 'Deep sea at 4000m: P = 101,325 + (1025)(9.8)(4000) = 40.2 MPa (396 atm)! Submarine hulls must withstand this enormous pressure. At surface: 1 atm. At 4000m: 396× more pressure!'
        },
        {
          title: '⚙️ 3. Pascal\'s Principle',
          explanation: 'Pressure change applied to enclosed fluid is transmitted undiminished throughout the fluid. This enables hydraulic systems: F₁/A₁ = F₂/A₂. Small force on small area = large force on large area!',
          example: 'Hydraulic lift: Small piston (5cm) with 196 N force creates same pressure as large piston (50cm) lifting 2000 kg! Pressure = 196/0.00196 = 100,000 Pa. Large piston: F = 100,000 × 0.196 = 19,600 N (2000 kg)!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Vehicle Tires',
          description: 'Car tires: 32-35 psi (220-241 kPa). Truck tires: 45-80 psi (310-552 kPa). Aircraft tires: 200+ psi (1.4+ MPa). Pressure affects grip, wear, and efficiency. Engineers balance these factors for optimal performance.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Cabin Pressurization',
          description: 'At 35,000 ft (10.7 km), outside pressure is only 26.4 kPa. Cabin pressurized to 75.2 kPa (8,000 ft equivalent) for passenger comfort. Pressurization systems maintain safe, comfortable environment despite low outside pressure.'
        },
        {
          icon: '🏗️',
          title: 'Hydraulic Systems',
          description: 'Hydraulic systems use Pascal\'s principle for force multiplication. Pressures up to 5000 psi (34.5 MPa) enable: Aircraft controls, construction equipment, manufacturing presses. High force multiplication with smooth operation and built-in overload protection.'
        },
        {
          icon: '⛽',
          title: 'Gas Storage',
          description: 'CNG: 3000-3600 psi (20.7-24.8 MPa). Propane: 200 psi (1.4 MPa). Medical O₂: 2200 psi (15.2 MPa). Storage pressure depends on safety factors, material strength, and temperature effects. Engineers design for maximum safety.'
        },
        {
          icon: '🌊',
          title: 'Deep Sea Applications',
          description: 'Submarines at 4000m depth experience 40.2 MPa (396 atm) pressure. Hull design must withstand this enormous force. Deep-sea equipment uses special materials and designs to handle extreme pressure conditions.'
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
      intro: 'Buoyancy is the upward force exerted by fluids on immersed objects. This fundamental principle explains why ships float, submarines dive, and hot air balloons rise. Understanding buoyancy and density is crucial for designing floating structures and fluid systems.',
      concepts: [
        {
          title: '⬆️ 1. Archimedes\' Principle',
          explanation: 'An object immersed in a fluid experiences an upward force equal to the weight of fluid displaced: F_b = ρ_fluid × g × V_displaced. Larger volume = greater buoyant force. Denser fluid = greater buoyant force. Shape affects displaced volume.',
          example: 'A 5000 kg boat floats in seawater (ρ = 1025 kg/m³). Buoyant force = weight, so mg = ρgV. Volume submerged = 5000/1025 = 4.88 m³. The boat displaces 4.88 m³ of water to float!'
        },
        {
          title: '⚖️ 2. Density & Floating',
          explanation: 'DENSITY = mass per unit volume: ρ = m/V. Objects float when ρ_object < ρ_fluid. Objects sink when ρ_object > ρ_fluid. Partial submersion: V_submerged/V_total = ρ_object/ρ_fluid. Typical densities: Water = 1000 kg/m³, Seawater = 1025 kg/m³, Air = 1.225 kg/m³, Mercury = 13,600 kg/m³.',
          example: 'Steel ball (ρ = 7800 kg/m³) in mercury (ρ = 13,600 kg/m³): 7800 < 13,600, so steel FLOATS in mercury! It sinks 57% (7800/13,600). Ship hull: Steel (7800) with 95% air space has effective density of 390 kg/m³ - floats in water!'
        },
        {
          title: '🌡️ 3. Temperature Effects',
          explanation: 'Most materials expand and become less dense when heated. Hot air balloons: Heating reduces air density by ~30%, creating lift. F_lift = (ρ_cold - ρ_hot) × g × V. Adjust temperature to change altitude. Temperature affects all fluid densities!',
          example: 'Hot air balloon: 2000 m³ of air at 50°C vs 20°C outside. ρ_hot = 1.2(293/323) = 1.09 kg/m³. Lift force = (1.2 - 1.09)(9.8)(2000) = 2,156 N. This lifts the balloon and payload!'
        }
      ],
      realWorld: [
        {
          icon: '🚢',
          title: 'Ship Design',
          description: 'Hull shape maximizes displaced volume for buoyancy. Ballast provides stability. Metacentric height determines roll stability. Steel hull (ρ = 7800 kg/m³) with 95% air space has effective density of 390 kg/m³ - floats easily in water!'
        },
        {
          icon: '🌊',
          title: 'Submarine Operation',
          description: 'Main ballast tanks for surfacing/diving. Trim tanks for horizontal stability. Variable ballast for fine control. Changes in salinity and temperature affect buoyancy - submarines must compensate constantly!'
        },
        {
          icon: '🎈',
          title: 'Hot Air Balloons',
          description: 'Heating reduces air density by ~30%, creating lift force. Lift = (ρ_cold - ρ_hot) × g × V. Adjust temperature to change altitude. Design considerations: Envelope volume, maximum temperature, payload capacity.'
        },
        {
          icon: '⚗️',
          title: 'Density Separation',
          description: 'Materials of different densities naturally separate in fluids. Used for: Ore processing, recycling plastics, oil/water separation. Can separate materials differing by 0.1 g/cm³. Essential industrial process!'
        },
        {
          icon: '⛽',
          title: 'Fuel Systems',
          description: 'Aircraft: Jet-A1 density varies with temperature. Rockets: LH2 density = 71 kg/m³, LOX = 1141 kg/m³. Ships: Bunker fuel ≈ 950 kg/m³. Density affects tank design, fuel gauging, and range calculations.'
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
      intro: 'Bernoulli\'s principle relates fluid pressure, velocity, and height, forming the foundation for understanding lift, fluid flow, and many engineering applications. Faster-moving fluid has lower pressure - this creates lift on wings and enables many fluid systems.',
      concepts: [
        {
          title: '🌊 1. Bernoulli\'s Equation',
          explanation: 'Total energy remains constant: P + ½ρv² + ρgh = constant. P = pressure energy, ½ρv² = kinetic energy, ρgh = potential energy. Assumptions: Steady flow, incompressible fluid, no viscous effects, flow along streamline. Faster flow = lower pressure!',
          example: 'Water exits tank 5m deep through hole: Using Bernoulli, ½v² + gh = constant. At surface v ≈ 0, at exit h = 0. So ½v² = gh, giving v = √(2gh) = √(2×9.8×5) = 9.9 m/s exit velocity!'
        },
        {
          title: '📏 2. Continuity Equation',
          explanation: 'Flow rate remains constant: A₁v₁ = A₂v₂ (conservation of mass). Narrower pipe = faster flow. Velocity inversely proportional to area. If area halves, velocity doubles!',
          example: 'Pipe narrows from 10cm to 5cm diameter. Initial velocity = 2 m/s. Using A₁v₁ = A₂v₂: π(0.05)²(2) = π(0.025)²v₂. v₂ = 2(0.05/0.025)² = 8 m/s - four times faster in narrow section!'
        },
        {
          title: '✈️ 3. Lift Generation',
          explanation: 'Curved upper surface creates faster flow above wing. Lower pressure above wing creates lift. Lift force: F_L = ½ρv²C_LA. Factors: Angle of attack, wing shape, air density, velocity squared dependency.',
          example: 'Aircraft wing: v_top ≈ 1.2v_bottom. Pressure difference ΔP ≈ 2000 Pa at cruise. For 2 m² wing area: Lift = 2000 × 2 = 4000 N. Typical airliner: 10⁵ N lift force!'
        }
      ],
      realWorld: [
        {
          icon: '🏎️',
          title: 'Race Car Aerodynamics',
          description: 'Underbody shaped to accelerate airflow. Diffuser provides controlled expansion reducing pressure. Downforce increases with speed squared. Up to 3G downforce at racing speeds - keeps car glued to track!'
        },
        {
          icon: '🌬️',
          title: 'Wind Turbines',
          description: 'Blade airfoil generates lift force. Lift converted to torque for power generation. Betz limit = 59.3% maximum efficiency. Variable pitch optimizes for wind speed. Modern turbines achieve 40-50% efficiency.'
        },
        {
          icon: '🏠',
          title: 'HVAC Systems',
          description: 'Ducts sized for efficient flow. Diffusers control air distribution. Filters account for pressure drop. Engineers balance flow rate vs energy cost. Proper design reduces energy consumption significantly.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Wings',
          description: 'Winglets reduce tip vortices. Flaps increase lift at low speeds. Supercritical airfoils reduce drag. Modern wings optimized for efficiency: v_top ≈ 1.2v_bottom creates pressure difference for lift.'
        },
        {
          icon: '🔧',
          title: 'Venturi Meters',
          description: 'Measures flow rate using pressure difference. Used in: Flow measurement, carburetors, spray systems. Principle: v₂ = v₁√[2(P₁-P₂)/(ρ(1-β⁴))]. Essential for fluid system monitoring.'
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
      intro: 'Fluid resistance encompasses drag and viscosity effects that oppose motion through fluids. Understanding these forces is crucial for efficient vehicle and system design. Drag increases with velocity squared - small speed increases create large drag forces!',
      concepts: [
        {
          title: '💨 1. Drag Force',
          explanation: 'Drag force: F_D = ½ρv²C_dA. Components: Form drag (pressure difference), skin drag (viscous friction), induced drag (from lift). Drag coefficients: Sphere ≈ 0.47, Car = 0.25-0.35, Airfoil = 0.04-0.08, Cube ≈ 1.05. Power lost: P = ½ρv³C_dA.',
          example: 'Car (Cd = 0.3, A = 2.2 m²) at 100 km/h (27.8 m/s): F_D = ½(1.225)(27.8)²(0.3)(2.2) = 276.8 N. Power = 276.8 × 27.8 = 7.7 kW lost to drag! At 120 km/h: 13.3 kW - drag increases dramatically!'
        },
        {
          title: '🌊 2. Viscosity',
          explanation: 'Viscosity = fluid resistance to shear deformation. τ = μ(dv/dy). Dynamic viscosity μ (Pa·s): Water = 0.001, Air = 1.8×10⁻⁵, Oil = 0.03-0.1. Kinematic viscosity ν = μ/ρ (m²/s). Creates internal friction in fluids.',
          example: 'Water flowing in pipe: μ = 0.001 Pa·s. Velocity gradient creates shear stress. Higher viscosity = more resistance to flow. Oil (μ = 0.05) flows much slower than water under same pressure!'
        },
        {
          title: '📊 3. Reynolds Number',
          explanation: 'Reynolds number: Re = ρvL/μ. Determines flow regime: Laminar (Re < 2300), Transition (2300-4000), Turbulent (Re > 4000). Determines flow behavior and drag characteristics. Higher Re = more turbulent, more drag.',
          example: 'Water (μ = 0.001, ρ = 1000) at 2 m/s in 5cm pipe: Re = (1000)(2)(0.05)/0.001 = 100,000 - turbulent flow! Turbulent flow has higher drag but better mixing. Engineers design for appropriate Re range.'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Design',
          description: 'Winglets reduce induced drag 4-8%. Smooth finish reduces skin friction. Area ruling reduces wave drag. 1% drag reduction = 0.2% fuel saving. Significant operating cost reduction from small improvements!'
        },
        {
          icon: '🏎️',
          title: 'Vehicle Aerodynamics',
          description: '10% drag reduction = 3% fuel savings. Power lost: P = ½ρv³C_dA. Minimize CdA product. Modern cars: Cd = 0.25-0.30. Electric vehicles optimize for range - every bit of drag reduction matters!'
        },
        {
          icon: '⚽',
          title: 'Sports Engineering',
          description: 'Golf ball dimples reduce drag by 50%! Cycling: Aerodynamic frames and positions. Swimming: Specialized suits reduce drag. Small changes have major performance impact - engineers optimize everything!'
        },
        {
          icon: '🌬️',
          title: 'Wind Turbines',
          description: 'Blade airfoil optimization for lift/drag ratio. Turbine spacing for wake recovery. Pitch adjustment for wind conditions. Drag reduction increases power output. Modern turbines achieve 40-50% efficiency.'
        },
        {
          icon: '🔧',
          title: 'Pipeline Flow',
          description: 'Pressure loss increases with velocity squared. Reynolds number determines friction factor. Surface roughness affects boundary layer. Engineers balance flow rate vs pumping power. Optimal design saves energy!'
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
      intro: 'Compressible flow occurs when fluid velocity approaches the speed of sound, causing significant density changes. This regime is crucial for aerospace and propulsion engineering. Mach number determines flow behavior - above M = 1, shock waves form!',
      concepts: [
        {
          title: '🚀 1. Mach Number',
          explanation: 'Mach number: M = v/c where c = √(γRT) is speed of sound. Regimes: Subsonic (M < 0.8), Transonic (0.8-1.2), Supersonic (1.2-5), Hypersonic (M > 5). Density changes significant above M = 0.3. Shock waves form above M = 1. Heat effects dominant in hypersonic.',
          example: 'Aircraft at 250 m/s at 10km altitude (c = 300 m/s): M = 250/300 = 0.833 (high subsonic). At M = 1.5: Supersonic! At M = 3.2: Hypersonic (SR-71 Blackbird). Each regime has different physics!'
        },
        {
          title: '💥 2. Shock Waves',
          explanation: 'Shock waves form at supersonic speeds. Normal shock: Pressure jumps suddenly, temperature increases, velocity decreases, entropy increases. P₂/P₁ = 1 + [2γ/(γ+1)](M₁²-1). Oblique shock: sin(β) = 1/M (minimum angle). Used in aircraft wings and intake design.',
          example: 'Normal shock at M = 1.5 (γ = 1.4): P₂/P₁ = 1 + [2(1.4)/(2.4)](1.5²-1) = 2.46. Pressure doubles! Temperature also increases. Stagnation pressure recovery = 93%. Significant energy loss!'
        },
        {
          title: '🔧 3. Nozzle Flow',
          explanation: 'Converging-diverging nozzle: Throat at M = 1 (choked flow). Supersonic expansion in diverging section. Area ratio A_e/A_t determines exit Mach. Thrust: F = ṁv_e + (P_e-P_a)A_e. Maximum efficiency at design pressure ratio.',
          example: 'Rocket nozzle: Throat area 0.01 m², exit area for M = 2.5. Using area ratio equation: A_e/A_t = 2.637, so A_e = 0.02637 m². Exit velocity: Mach 2.5 = 2.5 × 300 = 750 m/s! Typical rocket: Mach 3-4 exit velocity.'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Supersonic Aircraft',
          description: 'F-22: M = 2.25 supercruise. Concorde: M = 2.04 cruise. SR-71: M = 3.2+ capability. Variable geometry inlets. Adjustable area ratio nozzles. Mach and altitude compensation. Critical for high-speed flight!'
        },
        {
          icon: '🚀',
          title: 'Space Launch',
          description: 'Nozzle optimized for altitude compensation. Thermal protection for extreme heating. Specific impulse optimization. Challenges: Material temperature limits, flow separation, variable back pressure. Rocket nozzles: 15:1 to 150:1 area ratios!'
        },
        {
          icon: '⚙️',
          title: 'Gas Turbines',
          description: 'Compressor: Transonic blade tips. Combustor: High-speed mixing. Turbine: Shock interaction. Engineers balance efficiency and stability. Modern jet engines operate in transonic regime for optimal performance.'
        },
        {
          icon: '🔬',
          title: 'Supersonic Inlets',
          description: 'Multiple shock waves for compression. Variable geometry adjusts for flight speed. Bypass manages excess air. Critical for engine performance. Modern fighters use sophisticated inlet designs for high-speed flight.'
        },
        {
          icon: '🌡️',
          title: 'Hypersonic Flight',
          description: 'M > 5: Extreme heating dominates. Thermal protection essential. Material limits critical. Re-entry vehicles: M = 20-30! Heat shields protect from extreme temperatures. Future of high-speed travel!'
        }
      ]
    }
  }
};
