export const unit4Lessons = {
  16: {
    id: 16,
    title: 'Temperature & Heat',
    subtitle: 'Energy Transfer',
    description: 'Understand the difference between temperature and heat energy',
    coreIdea: 'Energy transfer',
    engineeringExample: 'Engine heating and cooling',
    content: {
      intro: 'Temperature measures average kinetic energy of molecules. Heat is energy transfer between objects at different temperatures.',
      concepts: [
        {
          title: 'Temperature vs Heat',
          explanation: 'Temperature = how hot. Heat = energy transferred. Different concepts!',
          example: 'Ocean has more heat than a match, but match has higher temperature'
        },
        {
          title: 'Thermal Expansion',
          explanation: 'Materials expand when heated, contract when cooled. Must account for in design.',
          example: 'Bridge expansion joints allow for thermal expansion on hot days'
        },
        {
          title: 'Specific Heat',
          explanation: 'Energy needed to raise 1 kg by 1°C. Water has high specific heat.',
          example: 'Engine coolant uses water because it absorbs lots of heat without big temperature rise'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Engine Cooling System',
          description: 'Coolant absorbs engine heat, radiator dissipates it to air. Prevents overheating.'
        },
        {
          icon: '🚀',
          title: 'Rocket Engine Cooling',
          description: 'Fuel circulates through engine walls to cool them before burning - regenerative cooling'
        },
        {
          icon: '✈️',
          title: 'Aircraft Thermal Management',
          description: 'High-speed flight creates friction heating - SR-71 skin reached 500°F!'
        }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Heat Transfer Types',
    subtitle: 'Conduction, Convection, Radiation',
    description: 'Learn the three ways heat moves from hot to cold',
    coreIdea: 'Conduction, convection, radiation',
    engineeringExample: 'Rocket engine cooling',
    content: {
      intro: 'Heat transfers in three ways: conduction (through solids), convection (through fluids), and radiation (through space). Engineers must manage all three.',
      concepts: [
        {
          title: 'Conduction',
          explanation: 'Heat transfer through direct contact. Metals conduct well, insulators don\'t.',
          example: 'Metal spoon in hot coffee gets hot quickly. Wooden spoon stays cool.'
        },
        {
          title: 'Convection',
          explanation: 'Heat transfer by moving fluid. Hot fluid rises, cool fluid sinks.',
          example: 'Car radiator: hot coolant flows in, fan blows air across, heat convects away'
        },
        {
          title: 'Radiation',
          explanation: 'Heat transfer by electromagnetic waves. No medium needed!',
          example: 'Sun heats Earth through vacuum of space via radiation'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Engine Cooling',
          description: 'Conduction through walls, convection by fuel flow, radiation from hot exhaust'
        },
        {
          icon: '🚗',
          title: 'Car Radiator',
          description: 'Conduction from engine to coolant, convection to air, some radiation from hot parts'
        },
        {
          icon: '✈️',
          title: 'Aircraft Heat Shields',
          description: 'Thermal tiles on spacecraft block conduction, reflect radiation during reentry'
        }
      ]
    }
  },
  18: {
    id: 18,
    title: 'Laws of Thermodynamics',
    subtitle: 'Energy Balance',
    description: 'Master the fundamental laws governing all energy systems',
    coreIdea: 'Energy balance',
    engineeringExample: 'Car engine or jet turbine cycle',
    content: {
      intro: 'The Laws of Thermodynamics govern all energy systems. They tell us what\'s possible and what\'s not in engineering.',
      concepts: [
        {
          title: 'First Law: Energy Conservation',
          explanation: 'Energy cannot be created or destroyed, only converted. ΔE = Q - W',
          example: 'Engine: chemical energy in → heat + work out. Total energy conserved.'
        },
        {
          title: 'Second Law: Entropy',
          explanation: 'Heat naturally flows from hot to cold. Some energy always becomes unusable.',
          example: 'You can\'t build a 100% efficient engine - some energy must become waste heat'
        },
        {
          title: 'Thermodynamic Cycles',
          explanation: 'Engines use cycles: intake, compression, combustion, exhaust, repeat',
          example: 'Otto cycle (gas engines), Diesel cycle, Brayton cycle (jet engines)'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Engine Cycle',
          description: 'Otto cycle: intake air/fuel, compress, ignite, expand (power), exhaust. Repeat!'
        },
        {
          icon: '✈️',
          title: 'Jet Engine Cycle',
          description: 'Brayton cycle: compress air, add fuel and burn, expand through turbine'
        },
        {
          icon: '🚀',
          title: 'Rocket Combustion',
          description: 'Open cycle: fuel + oxidizer → hot gas → expand through nozzle → thrust'
        }
      ]
    }
  },
  19: {
    id: 19,
    title: 'Internal Combustion',
    subtitle: 'How Engines Work',
    description: 'Understand how burning fuel creates mechanical power',
    coreIdea: 'Fuel burning = force',
    engineeringExample: 'Car piston engine demo',
    content: {
      intro: 'Internal combustion engines burn fuel inside cylinders to create high-pressure gas that pushes pistons. This converts chemical energy to mechanical work.',
      concepts: [
        {
          title: 'Four-Stroke Cycle',
          explanation: '1) Intake: suck in air/fuel. 2) Compression: squeeze it. 3) Power: ignite and expand. 4) Exhaust: push out',
          example: 'Car engine: each cylinder fires once every 2 crankshaft rotations'
        },
        {
          title: 'Combustion Process',
          explanation: 'Fuel + oxygen → CO₂ + H₂O + heat. Rapid combustion creates high pressure.',
          example: 'Gasoline combustion releases 44 MJ/kg - that\'s why it\'s such good fuel'
        },
        {
          title: 'Power Output',
          explanation: 'More cylinders or higher RPM = more power. Turbochargers force in more air.',
          example: 'V8 engine: 8 cylinders firing in sequence for smooth, high power output'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Piston Engine',
          description: '4-cylinder: 100 hp. V6: 250 hp. V8: 400+ hp. More cylinders = more power!'
        },
        {
          icon: '✈️',
          title: 'Aircraft Piston Engines',
          description: 'Small planes use 4-6 cylinder engines, similar to cars but optimized for reliability'
        },
        {
          icon: '🏎️',
          title: 'Turbocharged Engines',
          description: 'Turbo uses exhaust to spin compressor, forcing more air in for more power'
        }
      ]
    }
  },
  20: {
    id: 20,
    title: 'Efficiency Limits',
    subtitle: 'Carnot Cycle',
    description: 'Learn the theoretical maximum efficiency of heat engines',
    coreIdea: 'Carnot cycle',
    engineeringExample: 'Jet vs rocket efficiency chart',
    content: {
      intro: 'The Carnot cycle defines the maximum possible efficiency for any heat engine. Real engines always fall short of this ideal.',
      concepts: [
        {
          title: 'Carnot Efficiency',
          explanation: 'η_max = 1 - (T_cold / T_hot). Higher temperature difference = higher max efficiency.',
          example: 'Engine with 1500K combustion and 300K exhaust: max efficiency = 80%. Real: ~30%'
        },
        {
          title: 'Why Real Engines Are Less Efficient',
          explanation: 'Friction, incomplete combustion, heat loss, time constraints reduce efficiency',
          example: 'Car engine: theoretical 60%, actual 30%. Half the potential lost to real-world factors'
        },
        {
          title: 'Improving Efficiency',
          explanation: 'Increase combustion temp, decrease exhaust temp, reduce friction, recover waste heat',
          example: 'Diesel engines more efficient than gas because higher compression = higher temp'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Engine Efficiency Comparison',
          description: 'Gas: 30%, Diesel: 40%, Electric: 90%. Electric wins because it\'s not a heat engine!'
        },
        {
          icon: '✈️',
          title: 'Jet Engine Efficiency',
          description: 'Modern turbofans: 40% efficient. Constant improvements save airlines millions'
        },
        {
          icon: '🚀',
          title: 'Rocket Engine Efficiency',
          description: 'Chemical rockets: 60-70% efficient. Limited by combustion temperature'
        }
      ]
    }
  }
};
