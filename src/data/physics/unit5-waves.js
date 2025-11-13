export const unit5Lessons = {
  24: {
    id: 24,
    title: 'Waves, Electricity & Magnetism: What Are Waves?',
    subtitle: 'Sound, Light & Vibration',
    description: 'Understand wave motion and how it transfers energy',
    coreIdea: 'Wave fundamentals',
    engineeringExample: 'Jet engine noise visualization',
    learningObjectives: [
      'Define wave properties and terminology',
      'Calculate wave parameters',
      'Distinguish wave types and behaviors',
      'Apply wave principles to engineering',
      'Analyze wave propagation and effects'
    ],
    keyEquations: [
      { eq: 'v = f\\lambda', meaning: 'Wave speed (v: speed, f: frequency, λ: wavelength)' },
      { eq: 'f = \\frac{1}{T}', meaning: 'Frequency (f: frequency, T: period)' },
      { eq: 'E = \\frac{1}{2}A^2\\omega^2', meaning: 'Wave energy (A: amplitude, ω: angular frequency)' },
      { eq: 'y(x,t) = A\\sin(kx-\\omega t)', meaning: 'Wave equation (k: wave number, ω: angular frequency)' }
    ],
    practiceProblems: [
      {
        id: '5.1a',
        prompt: 'A wave travels at 300 m/s with a frequency of 500 Hz. Calculate its wavelength.',
        solution: 'Using $v = f\\lambda$:\n$\\lambda = \\frac{v}{f} = \\frac{300}{500} = 0.6$ meters',
        hints: ['Use wave speed equation', 'Solve for wavelength', 'Check units']
      },
      {
        id: '5.1b',
        prompt: 'A wave has amplitude 0.2m and frequency 2 Hz. Find:\na) Period\nb) Angular frequency\nc) Wave energy (mass = 1 kg)',
        solution: 'a) $T = \\frac{1}{f} = \\frac{1}{2} = 0.5$ seconds\n\nb) $\\omega = 2\\pi f = 2\\pi(2) = 12.57$ rad/s\n\nc) $E = \\frac{1}{2}A^2\\omega^2 = \\frac{1}{2}(0.2)^2(12.57)^2 = 7.91$ Joules',
        hints: ['Period is 1/frequency', 'ω = 2πf', 'Energy equation']
      },
      {
        id: '5.1c',
        prompt: 'Sound waves travel at 343 m/s in air. What frequency produces a 2m wavelength?',
        solution: 'Using $f = \\frac{v}{\\lambda}$:\n$f = \\frac{343}{2} = 171.5$ Hz\n\nThis is in the audible range for humans (20-20,000 Hz)',
        hints: ['Rearrange wave speed equation', 'Check if result is reasonable', 'Consider human hearing range']
      }
    ],
    content: {
      intro: 'Waves are disturbances that propagate through space and time, transferring energy without transferring matter. Understanding wave behavior is fundamental to many engineering applications.',
      concepts: [
        {
          title: 'Wave Properties',
          explanation: 'Key wave parameters:\n- Wavelength ($\\lambda$): Distance between repeating points\n- Frequency ($f$): Oscillations per second\n- Period ($T = \\frac{1}{f}$): Time per cycle\n- Amplitude ($A$): Maximum displacement\n- Phase ($\\phi$): Position in cycle',
          example: 'Ocean waves: $\\lambda = 10$ m, $f = 0.1$ Hz ($T = 10$ s), varying amplitude with weather conditions'
        },
        {
          title: 'Wave Types',
          explanation: 'Two main categories:\n1) Mechanical waves:\n   - Require medium (e.g., sound, water waves)\n   - Transfer energy through particle motion\n   - Speed depends on medium properties\n2) Electromagnetic waves:\n   - No medium needed (can travel through vacuum)\n   - Oscillating electric and magnetic fields\n   - All travel at $c = 3 \\times 10^8$ m/s in vacuum',
          example: 'Sound waves in different media:\n- Air: 343 m/s\n- Water: 1480 m/s\n- Steel: 5000 m/s'
        },
        {
          title: 'Wave Motion',
          explanation: 'Wave equation: $y(x,t) = A\\sin(kx-\\omega t)$ where:\n- $y$: Displacement\n- $k = \\frac{2\\pi}{\\lambda}$: Wave number\n- $\\omega = 2\\pi f$: Angular frequency\n\nWave speed: $v = f\\lambda = \\frac{\\omega}{k}$',
          example: 'A 100 Hz wave with 2m wavelength has:\n$v = f\\lambda = 100 \\times 2 = 200$ m/s speed\n$k = \\frac{2\\pi}{2} = \\pi$ rad/m\n$\\omega = 2\\pi(100) = 628.3$ rad/s'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Acoustics',
          description: 'Jet engines generate complex pressure waves:\n- Frequencies: 20-20,000 Hz\n- SPL: up to 140 dB\nEngineers use acoustic liners, chevrons, and active noise control.'
        },
        {
          icon: '🚗',
          title: 'Vibration Control',
          description: 'Engine vibrations (10-200 Hz) managed through:\n- Tuned mass dampers\n- Active mounts\n- Structural isolation\nReduces NVH (Noise, Vibration, Harshness).'
        },
        {
          icon: '�',
          title: 'Acoustic Engineering',
          description: 'Wave analysis crucial for:\n- Concert hall design\n- Noise barriers\n- Ultrasonic testing\nUses ray tracing and wave equations.'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Waves, Electricity & Magnetism: Frequency & Amplitude',
    subtitle: 'Signal Analysis',
    description: 'Learn how frequency and amplitude define wave characteristics',
    coreIdea: 'Signal characteristics',
    engineeringExample: 'Communication systems',
    learningObjectives: [
      'Analyze frequency components of signals',
      'Calculate signal power and energy',
      'Apply Fourier analysis concepts',
      'Design frequency-based systems',
      'Evaluate signal characteristics'
    ],
    keyEquations: [
      { eq: 'f = \\frac{1}{T}', meaning: 'Frequency-period relationship' },
      { eq: 'P = \\frac{A^2}{2R}', meaning: 'Signal power (R: characteristic impedance)' },
      { eq: 'x(t) = \\sum A_n\\cos(\\omega_n t + \\phi_n)', meaning: 'Fourier series representation' },
      { eq: 'SNR = 10\\log_{10}(\\frac{P_{signal}}{P_{noise}})', meaning: 'Signal-to-noise ratio (dB)' }
    ],
    practiceProblems: [
      {
        id: '5.2a',
        prompt: 'A signal has frequency components at 1000 Hz and 1200 Hz. What is the beat frequency?',
        solution: 'Beat frequency = |f₁ - f₂|\n= |1200 - 1000|\n= 200 Hz\n\nThis causes amplitude modulation at 200 Hz.',
        hints: ['Beat frequency is difference of frequencies', 'Take absolute value', 'Consider audible effects']
      },
      {
        id: '5.2b',
        prompt: 'A sinusoidal signal has amplitude 5V and frequency 100 Hz. Calculate:\na) Period\nb) Angular frequency\nc) Power in a 50Ω load',
        solution: 'a) $T = \\frac{1}{f} = \\frac{1}{100} = 0.01$ seconds\n\nb) $\\omega = 2\\pi f = 2\\pi(100) = 628.32$ rad/s\n\nc) $P = \\frac{A^2}{2R} = \\frac{5^2}{2(50)} = 0.25$ watts',
        hints: ['Use period formula', 'ω = 2πf', 'RMS voltage is A/√2']
      },
      {
        id: '5.2c',
        prompt: 'A signal has power 100 mW and noise floor -70 dBm. Calculate the SNR in dB.',
        solution: '1) Convert 100 mW to dBm:\n$P_{dBm} = 10\\log_{10}(\\frac{100}{1}) = 20$ dBm\n\n2) SNR = Signal - Noise\n= 20 - (-70) = 90 dB',
        hints: ['Convert power to dBm', 'Remember dB math rules', 'Subtract noise from signal']
      }
    ],
    content: {
      intro: 'Frequency and amplitude are fundamental characteristics that define signal behavior. These parameters are crucial for signal processing, communications, and control systems.',
      concepts: [
        {
          title: 'Frequency Analysis',
          explanation: 'Frequency ($f$) characteristics:\n- Measured in Hertz (Hz = cycles/second)\n- Related to period: $f = \\frac{1}{T}$\n- Angular frequency: $\\omega = 2\\pi f$\n\nFrequency spectrum:\n- Audio: 20 Hz - 20 kHz\n- RF: kHz - GHz\n- Light: THz range',
          example: 'Musical note A4: 440 Hz\nPeriod = 2.27 ms\nω = 2764.6 rad/s'
        },
        {
          title: 'Signal Amplitude',
          explanation: 'Amplitude measures signal strength:\n- Peak amplitude ($A_p$)\n- Peak-to-peak ($A_{pp} = 2A_p$)\n- RMS value: $A_{rms} = \\frac{A_p}{\\sqrt{2}}$\n\nPower calculation:\n$P = \\frac{A_{rms}^2}{R}$ for load R',
          example: 'Signal with 10V peak:\n- Peak-to-peak = 20V\n- RMS = 7.07V\n- Power in 50Ω = 1W'
        },
        {
          title: 'Signal Processing',
          explanation: 'Modulation techniques:\n1) AM: $s(t) = A_c[1 + m(t)]\\cos(\\omega_c t)$\n2) FM: $s(t) = A_c\\cos[\\omega_c t + k_f\\int m(t)dt]$\n3) Digital: ASK, FSK, PSK\n\nFiltering:\n- Lowpass: $H(f) = \\frac{1}{1 + j(f/f_c)}$\n- Bandpass: Center frequency selection',
          example: 'FM radio (88-108 MHz):\n- Carrier: 100 MHz\n- Deviation: ±75 kHz\n- Audio: 20 Hz - 15 kHz'
        }
      ],
      realWorld: [
        {
          icon: '�',
          title: 'Communications Systems',
          description: 'Modern systems use multiple bands:\n- GPS: 1.57542 GHz (L1)\n- WiFi: 2.4/5 GHz\n- 5G: 600 MHz - 71 GHz\nAdvanced modulation increases data rate.'
        },
        {
          icon: '🎵',
          title: 'Audio Processing',
          description: 'Digital audio systems:\n- Sampling: 44.1/48 kHz\n- Resolution: 16/24 bit\n- Dynamic range: 96+ dB\nFrequency response shapes sound.'
        },
        {
          icon: '📊',
          title: 'Signal Analysis',
          description: 'Tools and techniques:\n- FFT analysis\n- Spectrograms\n- Wavelet transforms\nEssential for system design.'
        }
      ]
    }
  },
  26: {
    id: 26,
    title: 'Waves, Electricity & Magnetism: Electricity Basics',
    subtitle: 'Charge, Voltage, Current',
    description: 'Master the fundamental concepts of electrical systems',
    coreIdea: 'Electrical fundamentals',
    engineeringExample: 'Vehicle electrical systems',
    learningObjectives: [
      'Understand electric charge and current',
      'Apply voltage and potential concepts',
      'Calculate electrical quantities',
      'Analyze DC electrical systems',
      'Design basic electrical circuits'
    ],
    keyEquations: [
      { eq: 'I = \\frac{dQ}{dt}', meaning: 'Current as rate of charge flow' },
      { eq: 'V = \\frac{dW}{dQ}', meaning: 'Voltage as work per unit charge' },
      { eq: 'P = VI = I^2R = \\frac{V^2}{R}', meaning: 'Electrical power relationships' },
      { eq: 'Q = CV', meaning: 'Capacitor charge storage' }
    ],
    practiceProblems: [
      {
        id: '5.3a',
        prompt: 'A car battery delivers 120 amps for 5 seconds. Calculate:\na) Total charge transferred\nb) Energy delivered if voltage is 12V',
        solution: 'a) $Q = I\\Delta t = 120 \\times 5 = 600$ coulombs\n\nb) $E = VIt = 12 \\times 120 \\times 5 = 7200$ joules',
        hints: ['Charge = current × time', 'Energy = power × time', 'Power = voltage × current']
      },
      {
        id: '5.3b',
        prompt: 'A 100 μF capacitor is charged to 200V. Find:\na) Stored charge\nb) Energy stored\nc) Current if discharged in 0.1ms',
        solution: 'a) $Q = CV = (100 \\times 10^{-6})(200) = 0.02$ coulombs\n\nb) $E = \\frac{1}{2}CV^2 = \\frac{1}{2}(100\\times10^{-6})(200)^2 = 2$ joules\n\nc) $I_{avg} = \\frac{Q}{t} = \\frac{0.02}{0.1\\times10^{-3}} = 200$ amps',
        hints: ['Use capacitor equations', 'Energy is ½CV²', 'Average current = ΔQ/Δt']
      },
      {
        id: '5.3c',
        prompt: 'An electric motor draws 25A at 48V. Calculate:\na) Power consumption\nb) Daily energy use if run 6 hours\nc) Cost at $0.12/kWh',
        solution: 'a) $P = VI = 48 \\times 25 = 1200$ watts\n\nb) $E = Pt = 1200 \\times 6 \\times 3600 = 25,920,000$ joules = 7.2 kWh\n\nc) Cost = 7.2 × $0.12 = $0.86 per day',
        hints: ['Use power equation', 'Convert hours to seconds', 'Convert joules to kWh (÷3,600,000)']
      }
    ],
    content: {
      intro: 'Electricity is the flow of electric charge, driven by potential differences. Understanding electrical fundamentals is crucial for modern engineering systems.',
      concepts: [
        {
          title: 'Electric Charge & Current',
          explanation: 'Fundamental concepts:\n1) Charge ($Q$):\n   - Unit: Coulomb (C)\n   - Electron charge: $-1.6 \\times 10^{-19}$ C\n   - Conserved quantity\n\n2) Current ($I$):\n   - Rate of charge flow: $I = \\frac{dQ}{dt}$\n   - Unit: Ampere (A)\n   - Direction: Conventional (+) vs electron flow',
          example: 'Starter motor current:\n- Peak draw: 200A\n- Charge/second: 200 C/s\n- Electron flow: $1.25 \\times 10^{21}$ electrons/s'
        },
        {
          title: 'Voltage & Electric Potential',
          explanation: 'Electric potential:\n1) Voltage ($V$):\n   - Work per unit charge: $V = \\frac{dW}{dQ}$\n   - Unit: Volt (J/C)\n   - Reference-dependent\n\n2) Electric field ($E$):\n   - $E = -\\nabla V$\n   - Force per unit charge\n   - Unit: V/m',
          example: 'Common voltage levels:\n- Automotive: 12V DC\n- Household: 120/230V AC\n- High voltage: >1000V\nSafety increases with voltage'
        },
        {
          title: 'Energy & Power',
          explanation: 'Energy relationships:\n1) Energy stored:\n   - Capacitor: $E = \\frac{1}{2}CV^2$\n   - Inductor: $E = \\frac{1}{2}LI^2$\n\n2) Power ($P$):\n   - $P = VI = I^2R = \\frac{V^2}{R}$\n   - Unit: Watt (W)\n   - Heat generation: $P_{loss} = I^2R$',
          example: 'Electric vehicle analysis:\n- Battery: 400V, 100 kWh\n- Motor: 150 kW power\n- Range: Energy/consumption'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Vehicle Electronics',
          description: 'Modern vehicles integrate:\n- High voltage: 400V+ traction\n- Low voltage: 12V systems\n- Power management: DC-DC conversion\nEfficiency and safety are critical.'
        },
        {
          icon: '�',
          title: 'Energy Storage',
          description: 'Battery technologies:\n- Li-ion: 3.7V/cell\n- Energy density: 250 Wh/kg\n- Power density: 340 W/kg\nAdvancing electric mobility.'
        },
        {
          icon: '⚡',
          title: 'Power Distribution',
          description: 'Grid characteristics:\n- Transmission: 100kV-800kV\n- Distribution: 4kV-33kV\n- Consumer: 120V/230V\nEfficiency vs distance tradeoff.'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: "Waves, Electricity & Magnetism: Circuits & Ohm's Law",
    subtitle: 'Circuit Analysis',
    description: 'Learn how voltage, current, and resistance relate in circuits',
    coreIdea: 'Circuit fundamentals',
    engineeringExample: 'Electronic control systems',
    learningObjectives: [
      'Apply Ohm\'s law to circuit analysis',
      'Analyze series and parallel circuits',
      'Calculate power and energy in circuits',
      'Design basic electrical networks',
      'Troubleshoot circuit problems'
    ],
    keyEquations: [
      { eq: 'V = IR', meaning: 'Ohm\'s law' },
      { eq: 'R_{eq} = R_1 + R_2 + ... + R_n', meaning: 'Series resistance' },
      { eq: '\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ... + \\frac{1}{R_n}', meaning: 'Parallel resistance' },
      { eq: 'P = VI = I^2R = \\frac{V^2}{R}', meaning: 'Power relationships' }
    ],
    practiceProblems: [
      {
        id: '5.4a',
        prompt: 'A circuit has three resistors in series: 100Ω, 200Ω, and 300Ω. With 12V applied:\na) Calculate total resistance\nb) Find current through each resistor\nc) Calculate voltage across each resistor',
        solution: 'a) $R_{total} = 100 + 200 + 300 = 600\\Omega$\n\nb) $I = \\frac{V}{R} = \\frac{12}{600} = 0.02A$ (same through all)\n\nc) $V_1 = IR_1 = 0.02 \\times 100 = 2V$\n$V_2 = 0.02 \\times 200 = 4V$\n$V_3 = 0.02 \\times 300 = 6V$',
        hints: ['Add series resistances', 'Current same in series', 'Use Ohm\'s law for each']
      },
      {
        id: '5.4b',
        prompt: 'Three 60Ω resistors are connected in parallel across 12V. Calculate:\na) Equivalent resistance\nb) Total current\nc) Power dissipated in each resistor',
        solution: 'a) $\\frac{1}{R_{eq}} = \\frac{3}{60} = \\frac{1}{20}$, so $R_{eq} = 20\\Omega$\n\nb) $I_{total} = \\frac{12}{20} = 0.6A$\n\nc) Each resistor: $P = \\frac{V^2}{R} = \\frac{12^2}{60} = 2.4W$',
        hints: ['Use parallel resistance formula', 'Total voltage = each branch', 'Power = V²/R']
      },
      {
        id: '5.4c',
        prompt: 'An LED needs 2V and 20mA. Design a circuit using a 9V battery:\na) Required series resistor\nb) Power dissipated in resistor\nc) Circuit efficiency',
        solution: 'a) $V_R = 9 - 2 = 7V$\n$R = \\frac{7}{0.02} = 350\\Omega$\n\nb) $P_R = 7V \\times 0.02A = 0.14W$\n\nc) $P_{LED} = 2V \\times 0.02A = 0.04W$\nEfficiency = $\\frac{0.04}{0.18} = 22\\%$',
        hints: ['Find voltage across resistor', 'Use Ohm\'s law', 'Compare LED power to total']
      }
    ],
    content: {
      intro: 'Circuit analysis combines Ohm\'s law with network principles to understand and design electrical systems. These fundamentals are essential for all electronic engineering.',
      concepts: [
        {
          title: 'Circuit Laws & Analysis',
          explanation: 'Fundamental principles:\n\n1) Ohm\'s Law:\n   $V = IR$\n   - Linear relationship\n   - Valid for resistors\n   - Temperature dependent\n\n2) Kirchhoff\'s Laws:\n   - KVL: $\\sum V = 0$ around loop\n   - KCL: $\\sum I = 0$ at node\n\n3) Power:\n   $P = VI = I^2R = \\frac{V^2}{R}$',
          example: 'Circuit analysis:\n- 12V source\n- 100Ω resistor\n- I = 12/100 = 0.12A\n- P = 12 × 0.12 = 1.44W'
        },
        {
          title: 'Circuit Components',
          explanation: 'Common elements:\n\n1) Resistors:\n   - Series: $R_{eq} = \\sum R_i$\n   - Parallel: $\\frac{1}{R_{eq}} = \\sum \\frac{1}{R_i}$\n   - Power rating needed\n\n2) Capacitors:\n   - Series: $\\frac{1}{C_{eq}} = \\sum \\frac{1}{C_i}$\n   - Parallel: $C_{eq} = \\sum C_i$\n   - Energy: $E = \\frac{1}{2}CV^2$\n\n3) Inductors:\n   - Series: $L_{eq} = \\sum L_i$\n   - Parallel: $\\frac{1}{L_{eq}} = \\sum \\frac{1}{L_i}$\n   - Energy: $E = \\frac{1}{2}LI^2$',
          example: 'RC circuit:\n- R = 10kΩ\n- C = 100µF\n- τ = RC = 1s\n- Charging V = V₀(1-e^{-t/τ})'
        },
        {
          title: 'Circuit Applications',
          explanation: 'Common circuits:\n\n1) Voltage Divider:\n   $V_{out} = V_{in}\\frac{R_2}{R_1 + R_2}$\n\n2) Current Divider:\n   $I_1 = I_{total}\\frac{R_2}{R_1 + R_2}$\n\n3) Bridge Circuits:\n   - Wheatstone bridge\n   - Balanced when $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$\n\n4) Filters:\n   - RC lowpass\n   - RL highpass\n   - RLC bandpass',
          example: 'Sensor interface:\n- 5V supply\n- Divider for 3.3V\n- R₁ = 510Ω\n- R₂ = 1kΩ'
        }
      ],
      realWorld: [
        {
          icon: '�',
          title: 'Power Distribution',
          description: 'Circuit protection systems:\n- Fuses: Current limits\n- Breakers: Resettable\n- GFCIs: Leakage detection\nSafety through proper design.'
        },
        {
          icon: '🎮',
          title: 'Electronic Controls',
          description: 'Modern systems include:\n- Microcontrollers\n- Sensor interfaces\n- Power management\nCircuit analysis crucial.'
        },
        {
          icon: '📱',
          title: 'Device Charging',
          description: 'USB-C power delivery:\n- Variable voltage\n- Current negotiation\n- Protection circuits\nEfficient power transfer.'
        }
      ]
    }
  },
  28: {
    id: 28,
    title: 'Waves, Electricity & Magnetism: Magnetism & Induction',
    subtitle: 'Electromagnetic Systems',
    description: 'Understand how electricity and magnetism work together',
    coreIdea: 'Electromagnetic principles',
    engineeringExample: 'Electric machines',
    learningObjectives: [
      'Understand magnetic fields and forces',
      'Apply electromagnetic induction',
      'Analyze transformer operation',
      'Design electromagnetic devices',
      'Calculate induced voltages and currents'
    ],
    keyEquations: [
      { eq: 'F = qv \\times B', meaning: 'Magnetic force on moving charge' },
      { eq: '\\varepsilon = -\\frac{d\\Phi_B}{dt}', meaning: 'Faraday\'s law of induction' },
      { eq: '\\frac{V_p}{V_s} = \\frac{N_p}{N_s}', meaning: 'Transformer voltage ratio' },
      { eq: 'B = \\frac{\\mu_0 I}{2\\pi r}', meaning: 'Magnetic field from wire' }
    ],
    practiceProblems: [
      {
        id: '5.5a',
        prompt: 'A wire 0.5m long carries 2A current perpendicular to a 0.3T magnetic field. Calculate:\na) Force on wire\nb) Power needed to move wire at 4 m/s\nc) Induced voltage if wire moves at this speed',
        solution: 'a) $F = BIL = 0.3 \\times 2 \\times 0.5 = 0.3$ N\n\nb) $P = Fv = 0.3 \\times 4 = 1.2$ W\n\nc) $\\varepsilon = Blv = 0.3 \\times 0.5 \\times 4 = 0.6$ V',
        hints: ['Use F = BIL', 'Power = Force × velocity', 'ε = Blv for moving conductor']
      },
      {
        id: '5.5b',
        prompt: 'A transformer has 1000 primary turns and 100 secondary turns. With 240V input:\na) Calculate output voltage\nb) If secondary current is 2A, find primary current\nc) Calculate power transfer efficiency if core loss is 5W',
        solution: 'a) $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$\n$V_s = 240 \\times \\frac{100}{1000} = 24$ V\n\nb) $\\frac{I_p}{I_s} = \\frac{N_s}{N_p}$\n$I_p = 2 \\times \\frac{100}{1000} = 0.2$ A\n\nc) $P_{out} = 24V \\times 2A = 48W$\n$P_{in} = 48W + 5W = 53W$\nEfficiency = $\\frac{48}{53} = 90.6\\%$',
        hints: ['Use transformer ratios', 'Power = VI', 'Account for core losses']
      },
      {
        id: '5.5c',
        prompt: 'A coil with 500 turns and area 0.002m² rotates at 60Hz in a 0.5T field. Calculate:\na) Maximum flux linkage\nb) Maximum induced EMF\nc) RMS voltage if connected to 100Ω load',
        solution: 'a) $\\Phi_{max} = BA = 0.5 \\times 0.002 = 0.001$ Wb\n$\\lambda_{max} = N\\Phi_{max} = 500 \\times 0.001 = 0.5$ Wb·turns\n\nb) $\\varepsilon_{max} = N\\omega BA = 500 \\times 2\\pi \\times 60 \\times 0.5 \\times 0.002 = 188.5$ V\n\nc) $V_{rms} = \\frac{\\varepsilon_{max}}{\\sqrt{2}} = 133.3$ V',
        hints: ['Flux = BA', 'EMF = NωBA', 'RMS = peak/√2']
      }
    ],
    content: {
      intro: 'Electromagnetic principles unite electricity and magnetism, forming the basis for electric machines and power systems. Understanding these relationships is crucial for modern engineering.',
      concepts: [
        {
          title: 'Magnetic Fields & Forces',
          explanation: 'Fundamental concepts:\n\n1) Magnetic Field ($\\vec{B}$):\n   - Unit: Tesla (T)\n   - From moving charges\n   - From permanent magnets\n\n2) Forces:\n   - On moving charge: $\\vec{F} = q\\vec{v} \\times \\vec{B}$\n   - On current: $\\vec{F} = I\\vec{l} \\times \\vec{B}$\n   - Torque: $\\tau = NIAB\\sin\\theta$\n\n3) Field Calculations:\n   - Straight wire: $B = \\frac{\\mu_0 I}{2\\pi r}$\n   - Solenoid: $B = \\mu_0nI$\n   - Toroid: $B = \\frac{\\mu_0NI}{2\\pi r}$',
          example: 'Electric motor force:\n- 1m wire\n- 2A current\n- 0.5T field\nF = BIL = 1N'
        },
        {
          title: 'Electromagnetic Induction',
          explanation: 'Induction principles:\n\n1) Faraday\'s Law:\n   $\\varepsilon = -N\\frac{d\\Phi_B}{dt}$\n   - Flux change induces EMF\n   - N = number of turns\n   - $\\Phi_B = \\vec{B} \\cdot \\vec{A}$\n\n2) Lenz\'s Law:\n   - Induced current opposes change\n   - Conservation of energy\n   - Determines direction\n\n3) Applications:\n   - Generators\n   - Inductors\n   - Eddy currents',
          example: 'Generator output:\n- 1000 turns\n- 0.1m² area\n- 0.5T field\n- 60Hz rotation\nε = 942V peak'
        },
        {
          title: 'Electromagnetic Devices',
          explanation: 'Common applications:\n\n1) Transformers:\n   $\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}$\n   - Power transfer\n   - Voltage conversion\n   - Isolation\n\n2) Electric Motors:\n   - DC motors: $\\tau = KI_a\\Phi$\n   - AC motors: $P = 3VI\\cos\\phi$\n   - Speed control\n\n3) Sensors:\n   - Hall effect\n   - Inductive pickup\n   - Magnetic encoders',
          example: 'Transformer specs:\n- 230V to 12V\n- 19.2:1 turns ratio\n- 100VA rating\n- 95% efficiency'
        }
      ],
      realWorld: [
        {
          icon: '⚡',
          title: 'Electric Machines',
          description: 'Modern applications:\n- EV motors: 95% efficient\n- Generator sets: MW range\n- Linear actuators\nAdvanced control systems.'
        },
        {
          icon: '�',
          title: 'Power Systems',
          description: 'Grid components:\n- Step-up transformers\n- Transmission lines\n- Substations\nReliable power delivery.'
        },
        {
          icon: '📡',
          title: 'Magnetic Technology',
          description: 'Emerging fields:\n- MRI systems\n- Magnetic levitation\n- Fusion containment\nPushing field limits.'
        }
      ]
    }
  }
};
