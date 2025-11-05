export const unit5Lessons = {
  21: {
    id: 21,
    title: 'What Are Waves?',
    subtitle: 'Sound, Light & Vibration',
    description: 'Understand wave motion and how it transfers energy',
    coreIdea: 'Sound, light, vibration',
    engineeringExample: 'Jet engine noise visualization',
    content: {
      intro: 'Waves transfer energy without transferring matter. Sound, light, and vibrations are all waves that engineers must understand and control.',
      concepts: [
        {
          title: 'Wave Properties',
          explanation: 'Wavelength (distance between peaks), frequency (peaks per second), amplitude (height)',
          example: 'Ocean wave: wavelength = 10m, frequency = 0.1 Hz (one wave every 10 seconds)'
        },
        {
          title: 'Mechanical vs Electromagnetic',
          explanation: 'Mechanical waves need a medium (sound, water). EM waves don\'t (light, radio).',
          example: 'Sound can\'t travel through space vacuum, but light can'
        },
        {
          title: 'Wave Speed',
          explanation: 'Speed = Frequency × Wavelength. Different in different materials.',
          example: 'Sound in air: 343 m/s. In water: 1480 m/s. In steel: 5000 m/s!'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Jet Engine Noise',
          description: 'Sound waves from engines can damage hearing - engineers design noise reduction systems'
        },
        {
          icon: '🚗',
          title: 'Engine Vibration',
          description: 'Engine creates vibration waves - mounts and dampers prevent transfer to cabin'
        },
        {
          icon: '🚀',
          title: 'Rocket Acoustic Waves',
          description: 'Launch creates 180+ dB sound waves - can damage rocket! Water suppression systems help'
        }
      ]
    }
  },
  22: {
    id: 22,
    title: 'Frequency & Amplitude',
    subtitle: 'Signal Basics',
    description: 'Learn how frequency and amplitude define wave characteristics',
    coreIdea: 'Basic signal understanding',
    engineeringExample: 'Communication between rocket & base',
    content: {
      intro: 'Frequency and amplitude are the two key properties that define any wave or signal. Understanding them is essential for communications and control systems.',
      concepts: [
        {
          title: 'Frequency',
          explanation: 'Number of cycles per second, measured in Hertz (Hz). Higher frequency = higher pitch.',
          example: 'Middle C note: 261.6 Hz. Human hearing: 20 Hz to 20,000 Hz'
        },
        {
          title: 'Amplitude',
          explanation: 'Maximum displacement from equilibrium. Larger amplitude = louder sound or brighter light.',
          example: 'Whisper vs shout: same frequency, different amplitude'
        },
        {
          title: 'Signal Modulation',
          explanation: 'Encode information by varying frequency (FM) or amplitude (AM)',
          example: 'FM radio: music encoded as frequency changes. AM radio: amplitude changes'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Telemetry',
          description: 'Radio signals at specific frequencies carry data from rocket to ground station'
        },
        {
          icon: '🚗',
          title: 'Car Key Fob',
          description: 'Transmits at 315 or 433 MHz frequency to unlock car remotely'
        },
        {
          icon: '✈️',
          title: 'Aircraft Communications',
          description: 'VHF radio (118-137 MHz) for voice, transponder (1090 MHz) for identification'
        }
      ]
    }
  },
  23: {
    id: 23,
    title: 'Electricity Basics',
    subtitle: 'Charge, Voltage, Current',
    description: 'Master the fundamental concepts of electrical systems',
    coreIdea: 'Charge, voltage, current',
    engineeringExample: 'Car battery demo',
    content: {
      intro: 'Electricity is the flow of electric charge. Understanding voltage, current, and resistance is essential for all modern vehicles.',
      concepts: [
        {
          title: 'Electric Charge',
          explanation: 'Electrons carry negative charge. Flow of electrons = electric current.',
          example: 'Battery has excess electrons at negative terminal, deficit at positive'
        },
        {
          title: 'Voltage',
          explanation: 'Electric potential difference. "Pressure" that pushes electrons. Measured in Volts (V).',
          example: 'Car battery: 12V. Household outlet: 120V (US) or 230V (Europe)'
        },
        {
          title: 'Current',
          explanation: 'Rate of charge flow. Measured in Amperes (A). 1A = 1 coulomb per second.',
          example: 'Car starter motor draws 100-200A when cranking engine'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Car Electrical System',
          description: '12V battery powers lights, radio, computer. Alternator recharges while driving.'
        },
        {
          icon: '🚀',
          title: 'Rocket Avionics',
          description: 'Multiple voltage levels: 28V for motors, 5V for computers, 3.3V for sensors'
        },
        {
          icon: '✈️',
          title: 'Aircraft Power',
          description: 'Large aircraft use 115V AC 400Hz power for efficiency and weight savings'
        }
      ]
    }
  },
  24: {
    id: 24,
    title: "Circuits & Ohm's Law",
    subtitle: 'Resistance Explained',
    description: 'Learn how voltage, current, and resistance relate in circuits',
    coreIdea: 'Resistance, voltage, current',
    engineeringExample: 'Simple electric car wiring',
    content: {
      intro: 'Ohm\'s Law (V = IR) is the fundamental relationship in electrical circuits. It relates voltage, current, and resistance.',
      concepts: [
        {
          title: "Ohm's Law",
          explanation: 'Voltage = Current × Resistance. V = I × R. Know any two, calculate the third.',
          example: '12V battery with 6Ω resistor: I = V/R = 12/6 = 2A current flows'
        },
        {
          title: 'Resistance',
          explanation: 'Opposition to current flow. Measured in Ohms (Ω). Wires have low resistance, insulators high.',
          example: 'Copper wire: 0.000017 Ω per meter. Rubber: billions of Ω - good insulator'
        },
        {
          title: 'Power',
          explanation: 'Power = Voltage × Current = I²R = V²/R. Energy per second, measured in Watts.',
          example: '12V × 10A = 120W. Like a bright light bulb\'s power consumption'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Electric Car Wiring',
          description: 'High voltage (400V) with thick cables to minimize resistance losses'
        },
        {
          icon: '🚀',
          title: 'Rocket Ignition Circuit',
          description: 'Must deliver precise current to ignite engines - resistance carefully controlled'
        },
        {
          icon: '✈️',
          title: 'Aircraft Wiring',
          description: 'Lightweight aluminum wiring with larger diameter to keep resistance low'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Magnetism & Induction',
    subtitle: 'Motors & Generators',
    description: 'Understand how electricity and magnetism work together',
    coreIdea: 'Motors & generators',
    engineeringExample: 'Electric car motor or rocket pumps',
    content: {
      intro: 'Electricity and magnetism are intimately connected. Moving magnets create electricity (generators), and electricity creates magnetic forces (motors).',
      concepts: [
        {
          title: 'Electromagnetic Induction',
          explanation: 'Moving magnet near wire creates voltage. This is how generators work.',
          example: 'Car alternator: engine spins magnet, induces voltage in coils, charges battery'
        },
        {
          title: 'Electric Motors',
          explanation: 'Current through wire in magnetic field creates force. This spins the motor.',
          example: 'Electric car motor: thousands of coils and magnets create smooth, powerful rotation'
        },
        {
          title: 'Transformers',
          explanation: 'Use induction to change voltage levels. Essential for power distribution.',
          example: 'Phone charger: transforms 120V wall power to 5V for phone'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Electric Car Motor',
          description: 'AC induction motor: 90% efficient, instant torque, no gears needed. The future!'
        },
        {
          icon: '🚀',
          title: 'Rocket Turbopumps',
          description: 'Electric motors drive fuel pumps at 30,000+ RPM for high flow rates'
        },
        {
          icon: '✈️',
          title: 'Aircraft Generators',
          description: 'Engine-driven generators provide electrical power for all aircraft systems'
        }
      ]
    }
  }
};
