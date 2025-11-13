// Unit 7: Differential Equations (Lessons 33-37) - FULL VERSION
export const unit7Lessons = {
  33: {
    id: 33,
    title: 'Differential Equations: Introduction & First Order',
    subtitle: 'Equations with Derivatives',
    description: 'Most engineering laws are differential equations! Newton\'s law, heat flow, circuit behavior - all described by DEs. Learn to solve first-order differential equations',
    coreIdea: 'Differential equations relate functions to their derivatives - they describe how systems change',
    engineeringExample: 'Cooling/heating, RC circuits, population growth, velocity from acceleration',
    learningObjectives: [
      'Understand what differential equations are',
      'Recognize first-order differential equations',
      'Solve separable differential equations',
      'Apply initial conditions to find specific solutions',
      'Model real engineering systems with DEs'
    ],
    keyEquations: [
      { eq: '\\frac{dy}{dx} = f(x,y)', meaning: 'General first-order DE' },
      { eq: '\\frac{dy}{dx} = g(x)h(y)', meaning: 'Separable DE' },
      { eq: 'y = Ce^{kx}', meaning: 'Solution to dy/dx = ky' },
      { eq: 'T(t) = T_s + (T_0 - T_s)e^{-kt}', meaning: 'Newton\'s cooling law solution' }
    ],
    practiceProblems: [
      {
        id: '7.33a',
        prompt: 'Solve dy/dx = 2x with initial condition y(0) = 3.',
        solution: 'Step 1: Integrate both sides\n∫ dy = ∫ 2x dx\ny = x² + C\n\nStep 2: Apply initial condition y(0) = 3\n3 = 0² + C\nC = 3\n\nStep 3: Final solution\ny = x² + 3\n\nAnswer: y = x² + 3',
        hints: ['Integrate both sides', 'Add constant C', 'Use initial condition to find C']
      },
      {
        id: '7.33b',
        prompt: 'Solve dy/dx = 3y with y(0) = 2.',
        solution: 'Step 1: Separate variables\ndy/y = 3 dx\n\nStep 2: Integrate both sides\n∫ dy/y = ∫ 3 dx\nln|y| = 3x + C\n\nStep 3: Solve for y\ny = e^(3x + C) = Ae^(3x) where A = e^C\n\nStep 4: Apply initial condition y(0) = 2\n2 = Ae^0 = A\nA = 2\n\nStep 5: Final solution\ny = 2e^(3x)\n\nAnswer: y = 2e^(3x) (exponential growth!)',
        hints: ['Separate variables', 'Integrate both sides', 'Use ln rules', 'Apply initial condition']
      },
      {
        id: '7.33c',
        prompt: 'Coffee at 90°C in room at 20°C. Cooling rate dT/dt = -0.1(T - 20). Find T(t) with T(0) = 90.',
        solution: 'Step 1: Separate variables\ndT/(T - 20) = -0.1 dt\n\nStep 2: Integrate\nln|T - 20| = -0.1t + C\n\nStep 3: Solve for T\nT - 20 = Ae^(-0.1t)\nT = 20 + Ae^(-0.1t)\n\nStep 4: Apply initial condition T(0) = 90\n90 = 20 + A\nA = 70\n\nStep 5: Final solution\nT(t) = 20 + 70e^(-0.1t)\n\nInterpretation:\nT → 20°C as t → ∞ (approaches room temperature)\nAt t=10: T = 20 + 70e^(-1) ≈ 45.8°C\n\nAnswer: T(t) = 20 + 70e^(-0.1t)',
        hints: ['Separate variables', 'Integrate both sides', 'Solve for T', 'Apply initial condition', 'Check limiting behavior']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '35 min', tags: ['differential-equations', 'first-order', 'separable'] },
    content: {
      intro: 'Most engineering laws are differential equations! Newton\'s F=ma is d²x/dt²=F/m. Heat flow is dT/dt=-k(T-T_s). Circuit voltage is L(dI/dt)+RI=V. Master DEs to understand engineering!',
      concepts: [
        {
          title: '🧠 What are Differential Equations?',
          explanation: 'DIFFERENTIAL EQUATION: Equation involving derivatives! EXAMPLES: dy/dx = 2x (first-order), d²y/dx² + y = 0 (second-order). ENGINEERING LAWS AS DEs: Newton\'s 2nd Law: m(d²x/dt²) = F. Cooling: dT/dt = -k(T - T_s). RC Circuit: RC(dV/dt) + V = V_s. Population: dP/dt = kP. WHY DEs? They describe HOW systems CHANGE!',
          example: 'Velocity from acceleration: dv/dt = a. If a = 10 m/s²: dv/dt = 10. Integrate: v = 10t + C. With v(0)=0: v = 10t.'
        },
        {
          title: '🔧 Solving Separable DEs',
          explanation: 'SEPARABLE DE: Can write as dy/dx = g(x)h(y). STEPS: 1. Separate: dy/h(y) = g(x)dx. 2. Integrate both sides. 3. Solve for y. 4. Apply initial condition. EXAMPLE: dy/dx = 3y. Separate: dy/y = 3dx. Integrate: ln|y| = 3x + C. Solve: y = Ae^(3x). With y(0)=2: y = 2e^(3x).',
          example: 'Exponential growth: dP/dt = 0.05P. Solution: P = P₀e^(0.05t). Population doubles every 14 years!'
        },
        {
          title: '✈️ Engineering Applications',
          explanation: 'COOLING/HEATING: dT/dt = -k(T - T_s). Solution: T = T_s + (T₀ - T_s)e^(-kt). RC CIRCUITS: dV/dt = -(1/RC)V. Solution: V = V₀e^(-t/RC). VELOCITY: dv/dt = a - bv (with drag). POPULATION: dP/dt = kP (exponential growth).',
          example: 'Coffee cooling: T(t) = 20 + 70e^(-0.1t). Starts at 90°C, approaches 20°C. Half-life: t = ln(2)/0.1 ≈ 6.9 minutes.'
        }
      ],
      realWorld: [
        {
          icon: '🌡️',
          title: 'Newton\'s Law of Cooling',
          description: 'Temperature change: dT/dt = -k(T - T_ambient). Hot coffee cools exponentially. Engine cooling follows this law. Engineers design cooling systems using this DE. Solution predicts temperature at any time.'
        },
        {
          icon: '⚡',
          title: 'RC Circuit Charging',
          description: 'Capacitor voltage: dV/dt = (V_s - V)/(RC). Exponential approach to source voltage. Time constant τ = RC determines charging speed. Engineers design timing circuits using this DE.'
        },
        {
          icon: '🚀',
          title: 'Rocket Velocity',
          description: 'With drag: dv/dt = (F_thrust - F_drag)/m. Drag proportional to v². Differential equation predicts terminal velocity. Engineers optimize thrust profiles using DE solutions.'
        },
        {
          icon: '📈',
          title: 'Population Growth',
          description: 'Exponential growth: dP/dt = kP. Solution: P = P₀e^(kt). Doubling time: t = ln(2)/k. Biologists and engineers model growth using this DE.'
        },
        {
          icon: '💧',
          title: 'Tank Drainage',
          description: 'Water level: dh/dt = -k√h (Torricelli\'s law). Square root relationship from fluid dynamics. Engineers design drainage systems using this DE. Solution predicts emptying time.'
        }
      ]
    }
  },
  34: {
    id: 34,
    title: 'Differential Equations: Second Order DEs',
    subtitle: 'Oscillations and Vibrations',
    description: 'Springs, pendulums, circuits - all described by second-order DEs! Learn to solve d²y/dt² + ω²y = 0 and understand oscillations, damping, and resonance',
    coreIdea: 'Second-order DEs describe oscillations - solutions involve sin, cos, and exponentials',
    engineeringExample: 'Spring-mass systems, pendulums, LC circuits, vibrations',
    learningObjectives: [
      'Understand second-order differential equations',
      'Solve homogeneous second-order DEs',
      'Recognize oscillatory solutions',
      'Understand damping and resonance',
      'Apply to mechanical and electrical systems'
    ],
    keyEquations: [
      { eq: '\\frac{d^2y}{dt^2} + \\omega^2 y = 0', meaning: 'Simple harmonic oscillator' },
      { eq: 'y = A\\cos(\\omega t) + B\\sin(\\omega t)', meaning: 'General solution for oscillator' },
      { eq: 'm\\frac{d^2x}{dt^2} + kx = 0', meaning: 'Spring-mass system' },
      { eq: 'L\\frac{d^2I}{dt^2} + \\frac{1}{C}I = 0', meaning: 'LC circuit oscillation' }
    ],
    practiceProblems: [
      {
        id: '7.34a',
        prompt: 'Solve d²y/dt² + 4y = 0 with y(0) = 2, y\'(0) = 0.',
        solution: 'Step 1: Identify ω² = 4, so ω = 2\n\nStep 2: General solution\ny = A cos(2t) + B sin(2t)\n\nStep 3: Apply y(0) = 2\n2 = A cos(0) + B sin(0) = A\nA = 2\n\nStep 4: Find y\'(t)\ny\' = -2A sin(2t) + 2B cos(2t)\n\nStep 5: Apply y\'(0) = 0\n0 = -2A sin(0) + 2B cos(0) = 2B\nB = 0\n\nStep 6: Final solution\ny = 2 cos(2t)\n\nInterpretation:\nOscillates with amplitude 2\nPeriod T = 2π/ω = π seconds\nFrequency f = 1/T = 1/π Hz\n\nAnswer: y = 2 cos(2t)',
        hints: ['General solution: y = A cos(ωt) + B sin(ωt)', 'Use initial conditions', 'Find A and B']
      },
      {
        id: '7.34b',
        prompt: 'Spring-mass: m = 2 kg, k = 8 N/m. Find equation of motion and period.',
        solution: 'Step 1: Write equation\nm(d²x/dt²) + kx = 0\n2(d²x/dt²) + 8x = 0\nd²x/dt²) + 4x = 0\n\nStep 2: Identify ω² = 4, so ω = 2 rad/s\n\nStep 3: General solution\nx = A cos(2t) + B sin(2t)\n\nStep 4: Find period\nT = 2π/ω = 2π/2 = π ≈ 3.14 seconds\n\nStep 5: Find frequency\nf = 1/T = 1/π ≈ 0.318 Hz\n\nAnswer: x = A cos(2t) + B sin(2t), Period = π seconds',
        hints: ['Write F = ma with F = -kx', 'Divide by m', 'Identify ω = √(k/m)', 'Period T = 2π/ω']
      }
    ],
    metadata: { difficulty: 'Hard', estTime: '40 min', tags: ['second-order', 'oscillations', 'harmonic-motion'] },
    content: {
      intro: 'Springs bounce, pendulums swing, circuits oscillate - all second-order DEs! d²y/dt² + ω²y = 0 describes ALL simple harmonic motion. Master this to understand vibrations!',
      concepts: [
        {
          title: '🧠 Second-Order DEs',
          explanation: 'SECOND-ORDER DE: Involves d²y/dt² (second derivative). SIMPLE HARMONIC OSCILLATOR: d²y/dt² + ω²y = 0. GENERAL SOLUTION: y = A cos(ωt) + B sin(ωt). Or: y = C cos(ωt + φ) where C = amplitude, φ = phase. PERIOD: T = 2π/ω. FREQUENCY: f = ω/(2π) = 1/T.',
          example: 'd²y/dt² + 4y = 0. Solution: y = A cos(2t) + B sin(2t). Period T = π seconds. Oscillates forever!'
        },
        {
          title: '🔧 Spring-Mass System',
          explanation: 'HOOKE\'S LAW: F = -kx (spring force). NEWTON\'S 2ND: m(d²x/dt²) = -kx. EQUATION: d²x/dt² + (k/m)x = 0. FREQUENCY: ω = √(k/m). PERIOD: T = 2π√(m/k). STIFFER SPRING (larger k) → faster oscillation. HEAVIER MASS (larger m) → slower oscillation.',
          example: 'm = 2 kg, k = 8 N/m. ω = √(8/2) = 2 rad/s. T = 2π/2 = π seconds. Spring bounces with period π seconds!'
        },
        {
          title: '✈️ Engineering Applications',
          explanation: 'MECHANICAL: Spring-mass, pendulum, vibrating structures. ELECTRICAL: LC circuits (inductor-capacitor). ACOUSTIC: Sound waves, musical instruments. STRUCTURAL: Building vibrations, bridge oscillations. CONTROL: Feedback systems, stability analysis.',
          example: 'LC circuit: L = 0.1 H, C = 100 μF. f = 1/(2π√(LC)) ≈ 50 Hz. Circuit oscillates at 50 Hz - AC power frequency!'
        }
      ],
      realWorld: [
        {
          icon: '🏗️',
          title: 'Building Vibrations',
          description: 'Buildings oscillate in wind and earthquakes. d²x/dt² + ω²x = 0 describes natural frequency. Engineers design to avoid resonance with wind or seismic frequencies. Dampers reduce oscillations and prevent structural damage.'
        },
        {
          icon: '🚗',
          title: 'Car Suspension',
          description: 'Suspension acts as spring-mass system. d²x/dt² + (k/m)x = 0 describes bouncing. Engineers tune k and m for comfortable ride. Shock absorbers add damping to prevent excessive oscillation.'
        },
        {
          icon: '⚡',
          title: 'LC Circuit Oscillations',
          description: 'Inductor-capacitor circuits oscillate. L(d²I/dt²) + I/C = 0. Frequency f = 1/(2π√(LC)). Radio tuners use LC circuits. Engineers design oscillators for communication systems.'
        },
        {
          icon: '🎸',
          title: 'Musical Instruments',
          description: 'Guitar strings vibrate: d²y/dt² + ω²y = 0. Frequency determines pitch. Tension and mass affect ω. Musicians and engineers use this to design instruments and tune strings.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Flutter',
          description: 'Wings can oscillate dangerously. d²θ/dt² + ω²θ = 0 describes flutter. Engineers analyze natural frequencies to prevent resonance. Flutter can destroy aircraft if not properly controlled.'
        }
      ]
    }
  }
};

export default unit7Lessons;

unit7Lessons[35] = {
  id: 35,
  title: 'Differential Equations: Damping & Resonance',
  subtitle: 'Real Systems with Energy Loss',
  description: 'Real springs have friction, real circuits have resistance. Learn damped oscillations and resonance - critical for preventing disasters like bridge collapses!',
  coreIdea: 'Damping causes oscillations to decay; resonance occurs when driving frequency matches natural frequency',
  engineeringExample: 'Shock absorbers, bridge design, earthquake engineering, circuit damping',
  learningObjectives: [
    'Understand damped oscillations',
    'Classify underdamped, critically damped, overdamped',
    'Understand resonance and its dangers',
    'Apply damping to engineering design',
    'Prevent resonance disasters'
  ],
  keyEquations: [
    { eq: '\\frac{d^2x}{dt^2} + 2\\zeta\\omega_n\\frac{dx}{dt} + \\omega_n^2 x = 0', meaning: 'Damped oscillator equation' },
    { eq: 'x = Ae^{-\\zeta\\omega_n t}\\cos(\\omega_d t + \\phi)', meaning: 'Underdamped solution' },
    { eq: '\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}', meaning: 'Damped frequency' },
    { eq: '\\zeta < 1: \\text{underdamped}, \\zeta = 1: \\text{critical}, \\zeta > 1: \\text{overdamped}', meaning: 'Damping classification' }
  ],
  practiceProblems: [
    {
      id: '7.35a',
      prompt: 'System: d²x/dt² + 4dx/dt + 4x = 0. Classify damping and find solution.',
      solution: 'Step 1: Write in standard form\nd²x/dt² + 2ζω_n(dx/dt) + ω_n²x = 0\n\nCompare: 2ζω_n = 4, ω_n² = 4\nω_n = 2, ζ = 1\n\nStep 2: Classify\nζ = 1 → CRITICALLY DAMPED\n\nStep 3: Solution form\nx = (A + Bt)e^(-2t)\n\nInterpretation:\nReturns to equilibrium fastest without oscillating\nIdeal for shock absorbers!\n\nAnswer: Critically damped, x = (A + Bt)e^(-2t)',
      hints: ['Compare with standard form', 'Find ζ and ω_n', 'ζ = 1 means critically damped']
    },
    {
      id: '7.35b',
      prompt: 'Bridge natural frequency: 0.5 Hz. Wind gusts at 0.5 Hz. What happens?',
      solution: 'RESONANCE DISASTER!\n\nWhen driving frequency = natural frequency:\n- Amplitude grows without bound\n- Small forces cause huge oscillations\n- Structure can fail catastrophically\n\nFamous example: Tacoma Narrows Bridge (1940)\n- Wind at natural frequency\n- Bridge oscillated violently\n- Collapsed in 4 months\n\nSolution:\n1. Change natural frequency (stiffen structure)\n2. Add damping (energy absorbers)\n3. Avoid resonant frequencies in design\n\nAnswer: RESONANCE - bridge will oscillate dangerously!',
      hints: ['Driving frequency = natural frequency', 'This is resonance', 'Can cause catastrophic failure']
    }
  ],
  metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['damping', 'resonance', 'oscillations'] },
  content: {
    intro: 'Real systems lose energy! Friction damps springs, resistance damps circuits. Damping prevents endless oscillation. But resonance can destroy bridges and buildings!',
    concepts: [
      {
        title: '🧠 Damped Oscillations',
        explanation: 'DAMPING: Energy loss causes oscillations to decay. EQUATION: d²x/dt² + 2ζω_n(dx/dt) + ω_n²x = 0. ζ = damping ratio, ω_n = natural frequency. THREE CASES: Underdamped (ζ < 1): Oscillates with decay. Critically damped (ζ = 1): Returns fastest without oscillating. Overdamped (ζ > 1): Slow return, no oscillation.',
        example: 'Car shock absorber: ζ ≈ 0.7 (underdamped). Oscillates once or twice then stops. Comfortable ride!'
      },
      {
        title: '🔧 Resonance - The Danger',
        explanation: 'RESONANCE: When driving frequency = natural frequency! RESULT: Amplitude grows huge! Small force → large oscillation. DISASTERS: Tacoma Narrows Bridge (1940): Wind resonance, collapsed. Millennium Bridge London (2000): Pedestrian resonance, closed. PREVENTION: Change natural frequency, add damping, avoid resonant frequencies.',
        example: 'Bridge f_n = 0.5 Hz. Wind gusts at 0.5 Hz. RESONANCE! Bridge oscillates violently. Must add dampers or change design!'
      },
      {
        title: '✈️ Engineering Applications',
        explanation: 'SHOCK ABSORBERS: Critically damped (ζ = 1) for fastest return. BUILDINGS: Dampers reduce earthquake oscillations. CIRCUITS: Resistance damps LC oscillations. BRIDGES: Design to avoid wind resonance. AIRCRAFT: Flutter dampers prevent wing oscillations.',
        example: 'Taipei 101 skyscraper: 660-ton damper ball. Reduces oscillations by 40%. Prevents resonance in typhoons!'
      }
    ],
    realWorld: [
      {
        icon: '🌉',
        title: 'Bridge Resonance Prevention',
        description: 'Tacoma Narrows Bridge collapsed from wind resonance. Modern bridges use dampers and careful frequency design. Engineers analyze all possible resonant frequencies. Pedestrian bridges need special damping for footstep frequencies.'
      },
      {
        icon: '🏢',
        title: 'Skyscraper Dampers',
        description: 'Tall buildings oscillate in wind. Tuned mass dampers reduce oscillations. Taipei 101: 660-ton ball acts as damper. Reduces sway by 40%. Prevents resonance and improves comfort.'
      },
      {
        icon: '🚗',
        title: 'Vehicle Suspension',
        description: 'Shock absorbers provide critical damping. ζ ≈ 0.7 for comfort. Too little damping: bouncy ride. Too much damping: harsh ride. Engineers optimize damping for performance and comfort.'
      },
      {
        icon: '✈️',
        title: 'Aircraft Flutter Control',
        description: 'Wings can oscillate (flutter) at certain speeds. Dampers prevent resonance. Engineers test all flight speeds. Flutter can destroy aircraft. Critical for safety.'
      },
      {
        icon: '⚡',
        title: 'RLC Circuit Damping',
        description: 'Resistance damps LC oscillations. Underdamped: oscillates with decay. Critically damped: fastest response. Overdamped: slow response. Engineers choose R for desired behavior.'
      }
    ]
  }
};

unit7Lessons[36] = {
  id: 36,
  title: 'Differential Equations: Laplace Transforms',
  subtitle: 'The Transform Method',
  description: 'Laplace transforms turn differential equations into algebra! Solve complex DEs easily. Essential for control systems, circuits, and signal processing',
  coreIdea: 'Laplace transform converts derivatives to multiplication - makes DEs algebraic',
  engineeringExample: 'Control systems, circuit analysis, signal processing, transfer functions',
  learningObjectives: [
    'Understand Laplace transform concept',
    'Use Laplace transform tables',
    'Solve DEs using Laplace transforms',
    'Apply to circuit and control problems',
    'Understand transfer functions'
  ],
  keyEquations: [
    { eq: '\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t)e^{-st}dt', meaning: 'Laplace transform definition' },
    { eq: '\\mathcal{L}\\{\\frac{df}{dt}\\} = sF(s) - f(0)', meaning: 'Transform of derivative' },
    { eq: '\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}', meaning: 'Transform of exponential' },
    { eq: '\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2+\\omega^2}', meaning: 'Transform of sine' }
  ],
  practiceProblems: [
    {
      id: '7.36a',
      prompt: 'Solve dy/dt + 2y = 0, y(0) = 3 using Laplace transforms.',
      solution: 'Step 1: Take Laplace transform of both sides\nℒ{dy/dt} + 2ℒ{y} = 0\nsY(s) - y(0) + 2Y(s) = 0\n\nStep 2: Substitute y(0) = 3\nsY(s) - 3 + 2Y(s) = 0\n\nStep 3: Solve for Y(s)\n(s + 2)Y(s) = 3\nY(s) = 3/(s + 2)\n\nStep 4: Inverse Laplace transform\ny(t) = 3e^(-2t)\n\nAnswer: y(t) = 3e^(-2t)',
      hints: ['Transform both sides', 'Use ℒ{dy/dt} = sY(s) - y(0)', 'Solve algebraically', 'Inverse transform']
    }
  ],
  metadata: { difficulty: 'Hard', estTime: '40 min', tags: ['laplace-transform', 'control-systems', 'circuits'] },
  content: {
    intro: 'Laplace transforms are magic! Turn hard differential equations into easy algebra. Solve, then transform back. Used everywhere in control systems and circuits!',
    concepts: [
      {
        title: '🧠 What is Laplace Transform?',
        explanation: 'IDEA: Transform time domain → frequency domain. MAGIC: Derivatives become multiplication! ℒ{df/dt} = sF(s) - f(0). PROCESS: 1. Transform DE to algebra. 2. Solve algebraically. 3. Inverse transform back. COMMON TRANSFORMS: ℒ{1} = 1/s, ℒ{e^(at)} = 1/(s-a), ℒ{sin(ωt)} = ω/(s²+ω²).',
        example: 'dy/dt + 2y = 0. Transform: sY(s) - y(0) + 2Y(s) = 0. Solve: Y(s) = y(0)/(s+2). Inverse: y = y(0)e^(-2t).'
      },
      {
        title: '🔧 Using Laplace Tables',
        explanation: 'DON\'T MEMORIZE! Use tables! COMMON TRANSFORMS: Time → Frequency. 1 → 1/s. t → 1/s². e^(at) → 1/(s-a). sin(ωt) → ω/(s²+ω²). cos(ωt) → s/(s²+ω²). INVERSE: Look up in table backwards!',
        example: 'Y(s) = 3/(s+2). Look up: 1/(s-a) ↔ e^(at). Therefore: y(t) = 3e^(-2t).'
      },
      {
        title: '✈️ Engineering Applications',
        explanation: 'CONTROL SYSTEMS: Transfer functions H(s) = Y(s)/X(s). CIRCUITS: Impedance Z(s) = V(s)/I(s). SIGNAL PROCESSING: Filter design. STABILITY ANALYSIS: Pole locations. SYSTEM RESPONSE: Step, impulse, frequency response.',
        example: 'RC circuit: H(s) = 1/(1 + RCs). Low-pass filter! Blocks high frequencies, passes low frequencies.'
      }
    ],
    realWorld: [
      {
        icon: '🎛️',
        title: 'Control System Design',
        description: 'Transfer functions describe system behavior. H(s) = Y(s)/X(s) relates output to input. Engineers design controllers using Laplace transforms. Stability analyzed from pole locations. PID controllers designed in s-domain.'
      },
      {
        icon: '⚡',
        title: 'Circuit Analysis',
        description: 'Laplace transforms simplify circuit analysis. Impedances: R, sL, 1/(sC). Solve circuits algebraically. Find transient and steady-state responses. Essential for filter design.'
      },
      {
        icon: '📡',
        title: 'Signal Processing',
        description: 'Filters designed using Laplace transforms. Low-pass, high-pass, band-pass filters. Transfer function determines frequency response. Engineers design communication systems using s-domain analysis.'
      },
      {
        icon: '✈️',
        title: 'Aircraft Control',
        description: 'Flight control systems use Laplace transforms. Autopilot transfer functions. Stability analysis from poles. Engineers design control laws in s-domain. Critical for safe, stable flight.'
      },
      {
        icon: '🚗',
        title: 'Vehicle Dynamics',
        description: 'Suspension systems analyzed using Laplace. Transfer functions relate road input to vehicle motion. Engineers optimize ride comfort and handling. Active suspension uses control theory.'
      }
    ]
  }
};

unit7Lessons[37] = {
  id: 37,
  title: 'Differential Equations: Numerical Methods',
  subtitle: 'When You Can\'t Solve Exactly',
  description: 'Most real DEs can\'t be solved exactly! Learn Euler\'s method and Runge-Kutta to approximate solutions. This is how computers solve DEs!',
  coreIdea: 'Numerical methods approximate DE solutions step-by-step - essential when exact solutions don\'t exist',
  engineeringExample: 'Rocket trajectories, weather prediction, structural analysis, fluid dynamics',
  learningObjectives: [
    'Understand when numerical methods are needed',
    'Apply Euler\'s method for simple approximations',
    'Understand Runge-Kutta methods',
    'Estimate error in numerical solutions',
    'Use numerical methods in engineering'
  ],
  keyEquations: [
    { eq: 'y_{n+1} = y_n + h \\cdot f(t_n, y_n)', meaning: 'Euler\'s method' },
    { eq: 'h = \\Delta t', meaning: 'Step size' },
    { eq: '\\text{error} \\propto h', meaning: 'Error proportional to step size' },
    { eq: 'k_1 = f(t_n, y_n), k_2 = f(t_n + h/2, y_n + hk_1/2)', meaning: 'Runge-Kutta intermediate steps' }
  ],
  practiceProblems: [
    {
      id: '7.37a',
      prompt: 'Use Euler\'s method: dy/dt = y, y(0) = 1, h = 0.5. Find y(1).',
      solution: 'Euler: y_{n+1} = y_n + h·f(t_n, y_n)\nHere: f(t,y) = y, h = 0.5\n\nStep 1: t=0, y=1\ny_1 = y_0 + 0.5(1) = 1 + 0.5 = 1.5\n\nStep 2: t=0.5, y=1.5\ny_2 = y_1 + 0.5(1.5) = 1.5 + 0.75 = 2.25\n\nApproximation: y(1) ≈ 2.25\nExact: y(1) = e^1 ≈ 2.718\nError: 0.468 (17%)\n\nSmaller h → better accuracy!\n\nAnswer: y(1) ≈ 2.25 (Euler), exact = 2.718',
      hints: ['Use formula y_{n+1} = y_n + h·f(t_n, y_n)', 'Take two steps (h=0.5)', 'Compare with exact solution']
    }
  ],
  metadata: { difficulty: 'Medium', estTime: '35 min', tags: ['numerical-methods', 'euler', 'runge-kutta'] },
  content: {
    intro: 'Most real DEs can\'t be solved exactly! Rocket with drag, pendulum, weather - all need numerical methods. Learn how computers solve DEs step-by-step!',
    concepts: [
      {
        title: '🧠 Why Numerical Methods?',
        explanation: 'MOST DEs CAN\'T BE SOLVED EXACTLY! Examples: Nonlinear: dy/dt = sin(y) + t². Coupled: dv/dt = F/m - kv², dm/dt = -ṁ. Complex: Weather, fluid flow, structures. NUMERICAL SOLUTION: Approximate step-by-step. Start at initial condition. Take small steps forward. Each step uses previous value.',
        example: 'Rocket trajectory with drag: Can\'t solve exactly. Use numerical methods. Computer calculates position every 0.01 seconds. Accurate enough for mission planning!'
      },
      {
        title: '🔧 Euler\'s Method',
        explanation: 'SIMPLEST METHOD: Euler\'s method. FORMULA: y_{n+1} = y_n + h·f(t_n, y_n). h = step size (smaller = more accurate). PROCESS: 1. Start at y_0. 2. Calculate slope f(t_0, y_0). 3. Step forward: y_1 = y_0 + h·f(t_0, y_0). 4. Repeat! ERROR: Proportional to h. Half the step size → half the error.',
        example: 'dy/dt = y, y(0) = 1, h = 0.5. y_1 = 1 + 0.5(1) = 1.5. y_2 = 1.5 + 0.5(1.5) = 2.25. Approximate y(1) ≈ 2.25. Exact: e ≈ 2.718.'
      },
      {
        title: '✈️ Engineering Applications',
        explanation: 'ROCKET TRAJECTORIES: Drag, thrust, gravity all nonlinear. WEATHER PREDICTION: Millions of coupled DEs. STRUCTURAL ANALYSIS: Finite element method uses numerical DEs. CIRCUIT SIMULATION: SPICE uses numerical methods. CONTROL SYSTEMS: Real-time numerical integration.',
        example: 'SpaceX Falcon 9: Trajectory calculated numerically. Updates every millisecond. Adjusts thrust in real-time. Lands precisely!'
      }
    ],
    realWorld: [
      {
        icon: '🚀',
        title: 'Rocket Trajectory Simulation',
        description: 'Rocket equations too complex for exact solution. Drag depends on velocity squared. Thrust varies with time. Mass decreases as fuel burns. Numerical methods calculate trajectory. SpaceX uses this for landing!'
      },
      {
        icon: '🌦️',
        title: 'Weather Prediction',
        description: 'Weather involves millions of coupled DEs. Atmosphere, oceans, land interactions. No exact solution exists. Supercomputers use numerical methods. Runge-Kutta methods for accuracy. Predicts weather days in advance.'
      },
      {
        icon: '🏗️',
        title: 'Structural Analysis',
        description: 'Finite element method uses numerical DEs. Divides structure into small elements. Solves DEs for each element. Predicts stress, strain, deformation. Engineers design safe structures using this.'
      },
      {
        icon: '⚡',
        title: 'Circuit Simulation (SPICE)',
        description: 'SPICE simulates circuits numerically. Nonlinear components (diodes, transistors). Coupled DEs for voltages and currents. Numerical integration for transient analysis. Engineers design circuits using SPICE.'
      },
      {
        icon: '🚗',
        title: 'Vehicle Crash Simulation',
        description: 'Crash dynamics too complex for exact solution. Nonlinear material behavior. Contact forces between parts. Numerical methods simulate crashes. Engineers improve safety using simulations.'
      }
    ]
  }
};
