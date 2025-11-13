export const unit4Lessons = {
  19: {
    id: 19,
    title: 'Thermodynamics: Temperature & Heat',
    subtitle: 'Energy Transfer',
    description: 'Understand the difference between temperature and heat energy',
    coreIdea: 'Energy transfer',
    engineeringExample: 'Engine heating and cooling',
    learningObjectives: [
      'Differentiate between temperature and heat',
      'Calculate thermal energy transfer',
      'Apply specific heat capacity concepts',
      'Analyze thermal expansion effects',
      'Design thermal management systems'
    ],
    keyEquations: [
      { eq: 'Q = mc\\Delta T', meaning: 'Heat energy transfer (Q: heat, m: mass, c: specific heat, ΔT: temperature change)' },
      { eq: '\\Delta L = \\alpha L_0\\Delta T', meaning: 'Linear thermal expansion' },
      { eq: 'Q = mL_f', meaning: 'Latent heat of fusion (melting/freezing)' },
      { eq: 'Q = mL_v', meaning: 'Latent heat of vaporization (boiling/condensing)' }
    ],
    practiceProblems: [
      {
        id: '4.1a',
        prompt: 'How much energy is needed to heat 2 kg of water from 20°C to 80°C? (c = 4186 J/kg·K)',
        solution: 'Using Q = mcΔT:\nQ = (2)(4186)(80-20)\nQ = (2)(4186)(60)\nQ = 502,320 J = 502.3 kJ',
        hints: ['Use Q = mcΔT', 'ΔT in Kelvin = ΔT in Celsius', 'Check units']
      },
      {
        id: '4.1b',
        prompt: 'A 10m steel beam at 20°C will be exposed to 50°C. Calculate length change. (α = 12×10⁻⁶/K)',
        solution: 'Using ΔL = αL₀ΔT:\nΔL = (12×10⁻⁶)(10)(50-20)\nΔL = (12×10⁻⁶)(10)(30)\nΔL = 0.0036m = 3.6mm',
        hints: ['Use thermal expansion equation', 'Temperature difference is 30°C', 'Convert to mm']
      },
      {
        id: '4.1c',
        prompt: 'How much energy to melt 5 kg of ice at 0°C? (Lf = 334 kJ/kg)',
        solution: 'Using Q = mLf:\nQ = (5)(334,000)\nQ = 1,670,000 J = 1,670 kJ\nNote: Temperature stays at 0°C during melting',
        hints: ['Use latent heat equation', 'Temperature constant during phase change', 'Convert units']
      }
    ],
    content: {
      introduction: 'Temperature and heat are distinct but related concepts in thermodynamics. Temperature measures molecular kinetic energy, while heat represents energy transfer between systems at different temperatures.',
      fundamentals: [
        'Temperature is a measure of average molecular kinetic energy',
        'Heat flows from high to low temperature',
        'Energy transfer can change temperature or phase',
        'Materials respond differently to temperature changes'
      ],
      details: {
        temperature: {
          scales: {
            celsius: 'Water freezes 0°C, boils 100°C',
            kelvin: 'Absolute scale, 0K = -273.15°C',
            fahrenheit: '32°F = 0°C, 212°F = 100°C'
          },
          conversion: {
            CtoK: '$T_K = T_C + 273.15$',
            CtoF: '$T_F = \\frac{9}{5}T_C + 32$'
          }
        },
        heatTransfer: {
          equation: '$Q = mc\\Delta T$',
          variables: {
            Q: 'Heat energy transferred (J)',
            m: 'Mass of material (kg)',
            c: 'Specific heat capacity (J/kg·K)',
            'ΔT': 'Temperature change (K or °C)'
          }
        },
        specificHeat: {
          definition: 'Energy needed to raise 1 kg by 1K',
          values: {
            water: '4186 J/kg·K',
            aluminum: '900 J/kg·K',
            steel: '490 J/kg·K',
            air: '1005 J/kg·K'
          }
        },
        thermalExpansion: {
          linear: '$\\Delta L = \\alpha L_0\\Delta T$',
          volumetric: '$\\Delta V = \\beta V_0\\Delta T$',
          coefficients: {
            steel: '12×10⁻⁶/K',
            aluminum: '23×10⁻⁶/K',
            concrete: '12×10⁻⁶/K'
          }
        }
      },
      examples: [
        {
          title: 'Engine Cooling System',
          analysis: {
            heat: 'Engine produces ~100 kW heat',
            coolant: 'Water/glycol mixture c ≈ 3500 J/kg·K',
            flow: '50 L/min through radiator',
            performance: 'Maintains ~90°C operating temperature'
          }
        },
        {
          title: 'Bridge Thermal Design',
          considerations: {
            expansion: 'Steel bridge 100m long',
            range: 'Temperature -20°C to +40°C',
            movement: '±3.6 cm total',
            solution: 'Expansion joints and sliding bearings'
          }
        }
      ],
      realWorld: [
        {
          application: 'Aerospace Thermal Management',
          challenges: {
            reentry: 'Surface temperatures >1500°C',
            materials: 'Ceramic tiles, ablative shields',
            cooling: 'Active and passive systems'
          },
          examples: {
            "shuttle": "Tiles insulate 1500°C to 20°C across 6 cm",
            "SR71": "Titanium structure handles 300°C+",
            "rockets": "Regenerative cooling using fuel"
          }
        },
        {
          "application": "Power Plants",
          "systems": {
            "boiler": "Water to 560°C steam",
            "condenser": "Steam to 30°C water",
            "cooling": "Tower evaporative cooling"
          },
          "efficiency": "Temperature difference drives power generation"
        },
        {
          "application": "Electronic Cooling",
          "methods": {
            "passive": "Heat sinks, thermal paste",
            "active": "Fans, liquid cooling",
            "advanced": "Phase change, thermoelectric"
          },
          "design": "Keep CPU below 90°C under load"
        }
      ]
    }
  },
  20: {
    id: 20,
    title: 'Thermodynamics: Heat Transfer Types',
    subtitle: 'Conduction, Convection, Radiation',
    description: 'Learn the three ways heat moves from hot to cold',
    coreIdea: 'Conduction, convection, radiation',
    engineeringExample: 'Rocket engine cooling',
    learningObjectives: [
      'Differentiate between heat transfer mechanisms',
      'Calculate heat transfer rates',
      'Design thermal management systems',
      'Analyze composite heat transfer problems',
      'Apply heat transfer principles to engineering'
    ],
    keyEquations: [
      { eq: 'q_k = -k A \\frac{dT}{dx}', meaning: 'Conduction heat flux (Fourier\'s law)' },
      { eq: 'q_c = hA(T_s - T_\\infty)', meaning: 'Convection heat transfer' },
      { eq: 'q_r = \\epsilon\\sigma A(T_1^4 - T_2^4)', meaning: 'Radiation heat transfer' },
      { eq: 'R_{th} = \\frac{L}{kA}', meaning: 'Thermal resistance for conduction' }
    ],
    practiceProblems: [
      {
        id: '4.2a',
        prompt: 'Calculate heat flux through 5cm thick steel (k = 50 W/m·K) with temperatures of 200°C and 50°C on each side.',
        solution: 'Using q = -kA(ΔT/Δx):\nq = -(50)(T₂-T₁)/(0.05)\nq = -(50)(50-200)/(0.05)\nq = 150,000 W/m²',
        hints: ['Use Fourier\'s law', 'Convert cm to m', 'Check sign convention']
      },
      {
        id: '4.2b',
        prompt: 'A 2m² surface at 80°C has h = 25 W/m²·K. Calculate convection heat transfer to 20°C air.',
        solution: 'Using q = hA(Ts-T∞):\nq = (25)(2)(80-20)\nq = (25)(2)(60)\nq = 3000 W',
        hints: ['Use convection equation', 'ΔT is surface to fluid', 'Include area']
      },
      {
        id: '4.2c',
        prompt: 'Black surface (ε=1) at 800K radiates to surroundings at 300K. Find radiation heat flux.',
        solution: 'Using q = εσA(T₁⁴-T₂⁴):\nσ = 5.67×10⁻⁸\nq = (1)(5.67×10⁻⁸)(800⁴-300⁴)\nq = 23,147 W/m²',
        hints: ['Use Stefan-Boltzmann law', 'Temperature in Kelvin', 'σ = 5.67×10⁻⁸']
      }
    ],
    content: {
      introduction: 'Heat transfer occurs through three distinct mechanisms: conduction, convection, and radiation. Understanding and managing these processes is crucial for engineering design.',
      fundamentals: [
        'Conduction occurs through molecular vibrations in solids',
        'Convection involves fluid motion and heat transfer',
        'Radiation transfers heat via electromagnetic waves',
        'Most real systems involve multiple heat transfer modes'
      ],
      details: {
        conduction: {
          mechanism: 'Heat transfer through direct molecular contact',
          equation: '$q_k = -k A \\frac{dT}{dx}$',
          factors: ['Material conductivity', 'Temperature gradient', 'Cross-sectional area', 'Path length'],
          materials: {
            conductors: {
              copper: 'k = 385 W/m·K',
              aluminum: 'k = 205 W/m·K',
              steel: 'k = 50 W/m·K'
            },
            insulators: {
              fiberglass: 'k = 0.04 W/m·K',
              air: 'k = 0.026 W/m·K',
              vacuum: 'k ≈ 0 W/m·K'
            }
          }
        },
        convection: {
          types: {
            natural: 'Driven by buoyancy forces',
            forced: 'Driven by external means (fans, pumps)'
          },
          equation: '$q_c = hA(T_s - T_\\infty)$',
          coefficients: {
            'free air': 'h = 5-25 W/m²·K',
            'forced air': 'h = 25-250 W/m²·K',
            'water cooling': 'h = 500-10,000 W/m²·K'
          }
        },
        radiation: {
          mechanism: 'Electromagnetic waves, no medium needed',
          equation: '$q_r = \\epsilon\\sigma A(T_1^4 - T_2^4)$',
          properties: {
            "emissivity": "ε ranges 0-1",
            "wavelength": "Peak depends on temperature",
            "viewFactor": "Geometric configuration effect"
          }
        }
      },
      examples: [
        {
          title: 'Space Thermal Control',
          challenges: {
            vacuum: 'No conduction/convection',
            radiation: 'Only heat transfer mode',
            temperature: '-150°C to +150°C'
          },
          solutions: [
            'Multi-layer insulation',
            'Heat pipes for distribution',
            'Radiators for heat rejection'
          ]
        },
        {
          title: 'CPU Cooling',
          analysis: {
            conduction: 'Die to heat spreader',
            interface: 'Thermal paste k ≈ 5 W/m·K',
            convection: 'Forced air through fins',
            power: '100W CPU at 90°C max'
          }
        }
      ],
      realWorld: [
        {
          application: 'Rocket Engine Cooling',
          methods: {
            regenerative: 'Fuel cools walls before burning',
            radiation: 'Nozzle radiates to space',
            ablative: 'Material absorbs/blocks heat'
          },
          performance: {
            heat: '~100 MW/m² heat flux',
            temp: 'Wall temp kept below 1000K',
            cooling: '30% of fuel energy'
          }
        },
        {
          application: 'Building HVAC',
          considerations: {
            conduction: 'Through walls and windows',
            convection: 'Air circulation and ventilation',
            radiation: 'Solar gain and IR loss'
          },
          efficiency: 'Proper insulation saves 30-50% energy'
        },
        {
          application: 'Heat Exchangers',
          types: {
            'shell-and-tube': 'High pressure applications',
            'plate': 'Compact, high effectiveness',
            'cross-flow': 'Car radiators, HVAC'
          },
          design: 'Maximize area, minimize resistance'
        }
      ]
    }
  },
  21: {
    id: 21,
    title: 'Thermodynamics: Laws of Thermodynamics',
    subtitle: 'Energy Balance',
    description: 'Master the fundamental laws governing all energy systems',
    coreIdea: 'Energy balance',
    engineeringExample: 'Car engine or jet turbine cycle',
    learningObjectives: [
      'Understand the Carnot cycle and its implications',
      'Calculate theoretical maximum efficiencies',
      'Analyze real cycle limitations',
      'Evaluate heat engine performance',
      'Design more efficient thermal systems'
    ],
    keyEquations: [
      { eq: '\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}', meaning: 'Carnot efficiency limit' },
      { eq: 'COP_{hp} = \\frac{1}{1 - T_c/T_h}', meaning: 'Heat pump coefficient of performance' },
      { eq: '\\eta_{real} = \\eta_{Carnot} \\times \\eta_{actual}', meaning: 'Real engine efficiency' },
      { eq: '\\Delta S_{univ} \\geq 0', meaning: 'Second law constraint' }
    ],
    practiceProblems: [
      {
        id: '4.3a',
        prompt: 'A heat engine receives 800J of heat, does 300J of work. Calculate efficiency.',
        solution: 'Efficiency = Work out / Heat in\nη = W/Q_in\nη = 300/800\nη = 0.375 = 37.5%',
        hints: ['Use η = W/Q_in', 'Convert to decimal', 'Express as percentage']
      },
      {
        id: '4.3b',
        prompt: 'Find entropy change when 2kg of water at 20°C is heated to 80°C. (c = 4186 J/kg·K)',
        solution: 'ΔS = mcln(T₂/T₁)\nΔS = (2)(4186)ln(353/293)\nΔS = 8372ln(1.205)\nΔS = 1,548 J/K',
        hints: ['Use ΔS = mcln(T₂/T₁)', 'Convert °C to K', 'Watch units']
      },
      {
        id: '4.3c',
        prompt: 'Calculate max efficiency of engine between 600K and 300K reservoirs.',
        solution: 'Using Carnot efficiency:\nη = 1 - T_c/T_h\nη = 1 - 300/600\nη = 0.5 = 50%',
        hints: ['Use Carnot equation', 'Temperature in Kelvin', 'This is maximum possible']
      },
      {
        id: '4.5a',
        prompt: 'A heat engine operates between a hot reservoir at 800K and a cold reservoir at 300K. Calculate:\na) Maximum theoretical efficiency\nb) Expected real efficiency if it achieves 45% of Carnot efficiency',
        solution: 'a) Using $\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}$:\n$\\eta_{max} = 1 - \\frac{300}{800} = 1 - 0.375 = 0.625$ or 62.5%\n\nb) Real efficiency = 0.625 × 0.45 = 0.28125 or 28.1%',
        hints: ['Use Carnot equation with absolute temperatures', 'Real engines achieve fraction of Carnot', 'Convert final answer to percentage']
      },
      {
        id: '4.5b',
        prompt: 'A heat pump has COP of 3.5 for heating. If it maintains a house at 20°C when outside is -10°C, calculate:\na) What fraction of Carnot COP is achieved?\nb) Power input needed to provide 10 kW of heating',
        solution: 'a) First find Carnot COP:\n- Tc = 263K, Th = 293K\n$COP_{Carnot} = \\frac{1}{1 - T_c/T_h} = \\frac{1}{1 - 263/293} = 9.77$\nFraction = 3.5/9.77 = 0.358 or 35.8%\n\nb) With COP = 3.5:\nPower input = Heat output/COP = 10/3.5 = 2.86 kW',
        hints: ['Convert temperatures to Kelvin', 'Use COP equation for heat pump', 'Power = Heat/COP']
      },
      {
        id: '4.5c',
        prompt: 'A power plant operates on a Rankine cycle with turbine inlet at 540°C and condenser at 40°C. Calculate:\na) Carnot efficiency limit\nb) Expected actual efficiency if typical losses are 60%\nc) Heat input needed for 100 MW output',
        solution: 'a) Using Carnot equation:\n$\\eta_{Carnot} = 1 - \\frac{T_c}{T_h} = 1 - \\frac{313}{813} = 0.615$ or 61.5%\n\nb) Real efficiency = 0.615 × 0.40 = 0.246 or 24.6%\n\nc) Power output = Heat input × efficiency\n100 = Q_in × 0.246\nQ_in = 406.5 MW heat input needed',
        hints: ['Convert temperatures to Kelvin', 'Account for real cycle losses', 'Use power = heat × efficiency']
      }
    ],
    content: {
      introduction: 'The Laws of Thermodynamics are fundamental principles that govern all energy transformations. They set absolute limits on what is possible in engineering systems.',
      fundamentals: [
        'First Law: Energy cannot be created or destroyed',
        'Second Law: Entropy of isolated systems never decreases',
        'Third Law: Cannot reach absolute zero temperature',
        'Zeroth Law: Thermal equilibrium is transitive'
      ],
      details: {
        firstLaw: {
          statement: 'Total energy of isolated system is constant',
          equation: '$\\Delta E = Q - W$',
          terms: {
            'ΔE': 'Change in system energy',
            Q: 'Heat added to system',
            W: 'Work done by system'
          },
          applications: [
            'Energy balance calculations',
            'Process analysis',
            'System design'
          ]
        },
        secondLaw: {
          statements: [
            'Heat flows spontaneously from hot to cold',
            'Cannot convert all heat to work',
            'Entropy increases in real processes'
          ],
          equation: '$\\Delta S \\geq \\int \\frac{dQ}{T}$',
          implications: [
            'Perfect efficiency impossible',
            'Real processes irreversible',
            'Heat engines limited by Carnot'
          ]
        },
        thermodynamicCycles: {
          types: {
            otto: {
              steps: ['Intake', 'Compression', 'Combustion', 'Power', 'Exhaust'],
              efficiency: '25-35%',
              application: 'Gas engines'
            },
            diesel: {
              steps: ['Compression', 'Injection', 'Power', 'Exhaust'],
              efficiency: '35-45%',
              application: 'Heavy engines'
            },
            brayton: {
              steps: ['Compression', 'Combustion', 'Expansion', 'Exhaust'],
              efficiency: '40-60%',
              application: 'Gas turbines'
            }
          }
        }
      },
      examples: [
        {
          title: 'Power Plant Analysis',
          process: {
            input: '100 MW fuel energy',
            output: '40 MW electricity',
            losses: '60 MW heat rejected',
            efficiency: '40% typical'
          },
          limitations: [
            'Temperature difference',
            'Material constraints',
            'Heat rejection needed'
          ]
        },
        {
          title: 'Refrigeration Cycle',
          analysis: {
            work: 'Input to compressor',
            effect: 'Heat moved from cold to hot',
            COP: '2-4 typical',
            power: '~1 kW domestic unit'
          }
        }
      ],
      realWorld: [
        {
          application: 'Internal Combustion Engines',
          cycles: {
            gasoline: {
              type: 'Otto cycle',
              compression: '8:1 - 12:1',
              efficiency: '25-35%',
              limits: 'Knock, temperature'
            },
            diesel: {
              type: 'Diesel cycle',
              compression: '14:1 - 25:1',
              efficiency: '35-45%',
              limits: 'Pressure, emissions'
            }
          }
        },
        {
          application: 'Gas Turbine Systems',
          features: {
            intake: 'Filter, compress air',
            combustion: 'Add fuel, burn',
            turbine: 'Extract power',
            exhaust: 'Heat recovery optional'
          },
          performance: {
            simple: '35% efficiency',
            combined: '60% possible',
            size: '1-500 MW range'
          }
        },
        {
          application: 'Heat Pumps',
          operation: {
            principle: 'Reverse heat engine',
            input: 'Electrical work',
            output: 'Heat moved to hot side',
            COP: '3-4 typical'
          },
          benefits: [
            'Energy efficient heating',
            'Cooling capability',
            'Lower carbon footprint'
          ]
        }
      ]
    }
  },
  22: {
    id: 22,
    title: 'Thermodynamics: Internal Combustion',
    subtitle: 'How Engines Work',
    description: 'Understand how burning fuel creates mechanical power',
    coreIdea: 'Fuel burning = force',
    engineeringExample: 'Car piston engine demo',
    learningObjectives: [
      'Analyze four-stroke engine cycle',
      'Calculate engine power and efficiency',
      'Compare different engine designs',
      'Evaluate fuel combustion processes',
      'Design engine components'
    ],
    keyEquations: [
      { eq: 'P = \\tau\\omega = \\frac{2\\pi N\\tau}{60}', meaning: 'Engine power (N in RPM)' },
      { eq: 'MEP = \\frac{W_{cycle}}{V_{displacement}}', meaning: 'Mean effective pressure' },
      { eq: '\\eta_{v} = \\frac{m_{actual}}{m_{ideal}}', meaning: 'Volumetric efficiency' },
      { eq: 'r_c = \\frac{V_{max}}{V_{min}}', meaning: 'Compression ratio' }
    ],
    practiceProblems: [
      {
        id: '4.4a',
        prompt: 'A turbocharged engine produces 350 N·m of torque at 2500 RPM. Calculate its power output in kilowatts and horsepower.',
        solution: 'Using $P = \\frac{2\\pi N\\tau}{60}$ where:\n- N = 2500 RPM\n- τ = 350 N·m\n\nP = (2π × 2500 × 350)/60\nP = 91.6 kW\n\nConverting to hp:\nP = 91.6 × 1.341 = 122.8 hp',
        hints: ['Use power equation with given RPM and torque', 'Convert radians/s to RPM using 2π/60 factor', '1 kW = 1.341 hp']
      },
      {
        id: '4.4b',
        prompt: 'In a compression stroke, a cylinder has initial volume 500 cm³ and final volume 50 cm³. Calculate:\na) Compression ratio\nb) If compression is adiabatic with γ = 1.4, find final temperature if initial is 300K',
        solution: 'a) Compression ratio = V₁/V₂ = 500/50 = 10:1\n\nb) For adiabatic process: $T_2 = T_1(\\frac{V_1}{V_2})^{\\gamma-1}$\nT₂ = 300(10)^{0.4}\nT₂ = 300 × 2.51 = 754K',
        hints: ['Compression ratio is initial/final volume', 'Use adiabatic process equation', 'γ = 1.4 for diatomic gases']
      },
      {
        id: '4.4c',
        prompt: 'A 2.0L 4-cylinder engine operates at 3000 RPM with a mean effective pressure of 12 bar. Calculate:\na) Power output in kW\nb) Mechanical efficiency if fuel input is 120 kW',
        solution: 'a) Using $P = \\frac{MEP \\times V \\times N \\times n}{60}$ where:\n- MEP = 12 bar = 1.2 MPa\n- V = 0.5L per cylinder = 0.0005 m³\n- N = 3000 RPM\n- n = number of power strokes per revolution = 2\n\nP = (1.2×10⁶ × 0.0005 × 3000 × 2)/60 = 60 kW\n\nb) Efficiency = Output/Input = 60/120 = 50%',
        hints: ['Convert bar to Pa', 'Account for all cylinders', 'Remember each cylinder fires once every 2 revolutions']
      }
    ],
    content: {
      intro: 'Internal combustion engines convert chemical energy from fuel into mechanical work through controlled combustion in cylinders. Understanding their operation is crucial for automotive and power engineering.',
      concepts: [
        {
          title: 'Four-Stroke Cycle',
          explanation: 'The cycle consists of four key strokes:\n1) Intake (0-180°): Draw in air/fuel mixture\n2) Compression (180-360°): Compress to 8:1-12:1 ratio\n3) Power (360-540°): Ignition creates 40-60 bar pressure\n4) Exhaust (540-720°): Expel burnt gases',
          example: 'A modern 2.0L turbocharged engine operates at ~5500 RPM, producing 250 hp through this cycle'
        },
        {
          title: 'Engine Parameters',
          explanation: 'Key parameters include:\n- Displacement: Volume swept by pistons (1.0-6.0L typical)\n- Compression ratio: 8:1-14:1 for efficiency\n- Timing: Spark timing 10-40° before TDC\n- Power output: $P = \\frac{2\\pi N\\tau}{60}$ where N is RPM, τ is torque',
          example: 'Racing engines achieve >750 hp at 18,000 RPM through optimized parameters'
        },
        {
          title: 'Applications',
          explanation: 'Engine configurations vary by use:\n- Automotive: Inline-4 (100-250 hp), V6 (250-400 hp), V8 (400-700 hp)\n- Aviation: Specialized for altitude, reliability\n- Power generation: Large diesels (1-50 MW) and gas engines (5-500 MW)',
          example: 'Modern car engines achieve ~35% efficiency with turbocharging and direct injection'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Automotive Power',
          description: 'Modern engines use turbocharging, direct injection, and variable valve timing to achieve high power with good efficiency. A 2.0L turbo engine can produce 350 N·m torque from 2000-4500 RPM.'
        },
        {
          icon: '✈️',
          title: 'Aviation Requirements',
          description: 'Aircraft engines need redundant systems and altitude compensation. Types range from small piston engines to large turbofans for commercial jets.'
        },
        {
          icon: '⚡',
          title: 'Power Generation',
          description: 'Large-scale engines achieve 35-60% efficiency, with gas turbines reaching higher efficiencies in combined cycle plants.'
        }
      ]
    }
  },
  23: {
    id: 23,
    title: 'Thermodynamics: Efficiency Limits',
    subtitle: 'Carnot Cycle',
    description: 'Learn the theoretical maximum efficiency of heat engines',
    coreIdea: 'Carnot cycle',
    engineeringExample: 'Jet vs rocket efficiency chart',
    content: {
      intro: 'The Carnot cycle represents the theoretical maximum efficiency achievable by any heat engine operating between two temperature reservoirs. Understanding these limits is crucial for designing and optimizing real thermal systems.',
      concepts: [{
        title: 'Carnot Cycle Fundamentals',
        explanation: 'The Carnot cycle consists of four ideal processes:\n1) Isothermal expansion at Th - absorb heat\n2) Adiabatic expansion - temperature drops to Tc\n3) Isothermal compression at Tc - reject heat\n4) Adiabatic compression - return to Th',
        example: 'A power plant operating between 550°C (823K) and 30°C (303K) has maximum theoretical efficiency of 63.2%, but achieves 42% in practice'
      }, {
        title: 'Efficiency Limits',
        explanation: 'Maximum efficiency is given by $\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}$ where:\n- Higher hot temperature (Th) increases efficiency\n- Lower cold temperature (Tc) increases efficiency\n- Material limits constrain maximum temperature\n- Ambient conditions set minimum temperature',
        example: 'Modern combined cycle plants reach 60-62% efficiency using 1500°C gas turbines and 560°C steam cycles'
      }, {
        title: 'Real-World Limitations',
        explanation: 'Practical cycles are less efficient due to:\n- Mechanical and fluid friction losses\n- Non-ideal heat transfer\n- Irreversible processes creating entropy\n- Finite-time operation requirements',
        example: 'Steam power plants achieve 35-45% of Carnot efficiency, gas turbines 40-50%, and internal combustion engines 45-55%'
      }],
      realWorld: [{
        icon: '⚡',
        title: 'Power Generation',
        description: 'Modern power plants use combined cycles with gas turbines (1500°C) and steam systems (560°C) to achieve 60-62% efficiency. Supercritical steam and advanced materials push the limits of what\'s possible.'
      }, {
        icon: '🏭',
        title: 'Industrial Heat Recovery',
        description: 'Waste heat recovery through economizers and heat pumps can improve overall system efficiency by 10-30%. Advanced heat exchangers and thermal integration are key technologies.'
      }, {
        icon: '🔬',
        title: 'Future Technologies',
        description: 'Emerging systems like supercritical CO2 cycles (45-50% efficiency) and new materials enabling higher temperatures promise to push efficiency limits closer to theoretical maximums.'
      }]
    }
  }
};
