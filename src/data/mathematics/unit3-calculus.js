// Unit 3: Calculus Basics (Lessons 13-17)
export const unit3Lessons = {
  13: {
    id: 13,
    title: 'Calculus Basics: Derivatives - Understanding Rate of Change',
    subtitle: 'The Math of Change',
    description: 'Discover derivatives - the math that tells you HOW FAST things change! From car speed to rocket acceleration, derivatives are everywhere in engineering',
    coreIdea: 'Derivatives measure rate of change - the slope of a curve at any point',
    engineeringExample: 'Car speed, rocket acceleration, temperature change, fluid flow',
    learningObjectives: [
      'Understand derivatives as rate of change',
      'Visualize derivatives as slopes of curves',
      'Apply the power rule to find derivatives',
      'Calculate velocity from position functions',
      'Interpret derivatives in real engineering contexts'
    ],
    keyEquations: [
      { eq: 'f\'(x) = \\frac{d}{dx}f(x)', meaning: 'Derivative notation' },
      { eq: '\\frac{d}{dx}(x^n) = n \\cdot x^{n-1}', meaning: 'Power rule for derivatives' },
      { eq: 'v(t) = \\frac{d}{dt}s(t)', meaning: 'Velocity = derivative of position' },
      { eq: '\\text{slope} = \\frac{\\Delta y}{\\Delta x}', meaning: 'Slope = rise over run' }
    ],
    practiceProblems: [
      {
        id: '3.13a',
        prompt: 'Find the derivative of f(x) = x³',
        solution: 'Using power rule: f\'(x) = 3x²\nStep 1: Bring down exponent (3) as coefficient\nStep 2: Subtract 1 from exponent (3-1=2)\nResult: f\'(x) = 3x²',
        hints: ['Use power rule: d/dx(xⁿ) = n·xⁿ⁻¹', 'Bring down the exponent', 'Subtract 1 from the exponent']
      },
      {
        id: '3.13b',
        prompt: 'Find the derivative of f(t) = 4t²',
        solution: 'f\'(t) = 4 · 2 · t²⁻¹ = 8t\nCoefficient (4) stays, multiply by exponent (2), subtract 1 from exponent',
        hints: ['Multiply coefficient by exponent', 'Subtract 1 from exponent', 'Keep the coefficient']
      },
      {
        id: '3.13c',
        prompt: 'A rocket\'s height is h(t) = 100t - 5t². Find velocity at t=3s.',
        solution: 'Step 1: Find velocity (derivative of height)\nh\'(t) = 100 - 10t\nStep 2: Evaluate at t=3s\nh\'(3) = 100 - 10(3) = 100 - 30 = 70 m/s\nAnswer: Rocket is moving at 70 m/s upward',
        hints: ['Take derivative of position function', 'Use power rule for each term', 'Substitute t=3 into derivative']
      },
      {
        id: '3.13d',
        prompt: 'Car position: s(t) = 3t² + 2t. Find velocity at t=4s.',
        solution: 'Step 1: Find velocity function\ns\'(t) = 6t + 2\nStep 2: Evaluate at t=4s\ns\'(4) = 6(4) + 2 = 24 + 2 = 26 m/s\nAnswer: Car is traveling at 26 m/s',
        hints: ['Derivative of 3t² is 6t', 'Derivative of 2t is 2', 'Substitute t=4']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['derivatives', 'calculus', 'rate-of-change'] },
    content: {
      intro: 'Discover derivatives - the math that tells you HOW FAST things change! From car speed to rocket acceleration, derivatives are everywhere in engineering. A derivative tells you the RATE OF CHANGE - how fast something is changing. Think of it as the slope of a curve at any point. The steeper the slope, the faster the change!',
      concepts: [
        {
          title: '🧠 What is a Derivative? - The Slope Story',
          explanation: 'A derivative tells you the RATE OF CHANGE - how fast something is changing! REAL-WORLD EXAMPLE: Imagine you\'re driving a car. Position tells you WHERE you are. Derivative of position tells you HOW FAST you\'re moving (velocity!). VISUALIZING SLOPE: Position vs Time Graph shows your position over time. The STEEPER the line, the FASTER you\'re moving! SLOPE = DERIVATIVE: Slope = Rise / Run = Change in Position / Change in Time. Example: From t=0s to t=5s, position changes from 0m to 100m. Slope = 100m / 5s = 20 m/s. This slope IS your velocity!',
          example: 'Position function: f(t) = 5t². Derivative: f\'(t) = 10t. At t=2s: f\'(2) = 10(2) = 20 m/s. The derivative tells you the velocity at any moment!'
        },
        {
          title: '🔧 The Power Rule - Easy Way to Find Derivatives',
          explanation: 'THE POWER RULE: For f(x) = xⁿ, Derivative: f\'(x) = n·xⁿ⁻¹. Step-by-step: 1. Bring down the exponent as a coefficient. 2. Subtract 1 from the exponent. 3. Done! Examples: f(x) = x² → f\'(x) = 2x. f(x) = x³ → f\'(x) = 3x². f(x) = 5x⁴ → f\'(x) = 20x³. MATHEMATICAL NOTATION: If position = f(t), then Derivative = f\'(t) or df/dt. Reads as: "f prime of t" or "dee-f dee-t".',
          example: 'Find derivative of f(x) = x³. Step 1: Identify exponent n = 3. Step 2: Apply power rule f\'(x) = 3·x³⁻¹ = 3x². Answer: f\'(x) = 3x². For f(t) = 4t²: f\'(t) = 4 · 2 · t²⁻¹ = 8t.'
        },
        {
          title: '🧮 Finding Derivatives - Step by Step',
          explanation: 'PROBLEM 1: Find derivative of f(x) = x³. Step 1: Identify the exponent n = 3. Step 2: Apply power rule f\'(x) = 3·x³⁻¹ = 3x². Answer: f\'(x) = 3x². PROBLEM 2: Position function s(t) = 2t³ + 5t. Step 1: Take derivative of each term. d/dt(2t³) = 2·3·t² = 6t². d/dt(5t) = 5. Step 2: Add them together. s\'(t) = 6t² + 5. This is the velocity function!',
          example: 'Position function: s(t) = 2t³ + 5t. Velocity: s\'(t) = 6t² + 5. At t=2s: s\'(2) = 6(4) + 5 = 24 + 5 = 29 m/s. The derivative gives you the velocity at any time!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Vehicle Speed Calculations',
          description: 'Car speedometers use derivatives! Position sensors measure location, derivatives calculate speed. Real-time speed = derivative of position. GPS navigation uses derivatives for velocity calculations. Autonomous vehicles use derivatives for motion control.'
        },
        {
          icon: '🚀',
          title: 'Rocket Trajectory Analysis',
          description: 'Rocket engineers use derivatives constantly. Height function h(t) = 100t - 5t². Velocity = derivative = 100 - 10t. Acceleration = second derivative = -10 m/s². Derivatives help predict maximum height, impact time, and velocity profiles.'
        },
        {
          icon: '🌡️',
          title: 'Temperature Monitoring',
          description: 'Temperature sensors measure rate of change. Derivative tells you how fast temperature is changing. Critical for industrial processes. Temperature control systems use derivatives. Prevents overheating or freezing.'
        },
        {
          icon: '💧',
          title: 'Fluid Flow Analysis',
          description: 'Flow rate = derivative of volume. Engineers calculate flow rates using derivatives. Pipe systems use derivatives for flow optimization. Fluid dynamics relies heavily on calculus. Derivatives predict flow behavior.'
        },
        {
          icon: '⚡',
          title: 'Electrical Engineering',
          description: 'Current = derivative of charge. Voltage = derivative relationships in circuits. Electrical engineers use derivatives for circuit analysis. Signal processing uses derivatives extensively. Power calculations depend on derivatives.'
        }
      ]
    }
  },
  14: {
    id: 14,
    title: 'Calculus Basics: Velocity & Acceleration',
    subtitle: 'Motion in Action',
    description: 'Learn how derivatives describe motion! Velocity tells you speed, acceleration tells you how speed changes. Master the math of moving objects',
    coreIdea: 'Velocity is the derivative of position; acceleration is the derivative of velocity',
    engineeringExample: 'Car motion, rocket launches, falling objects, vehicle dynamics',
    learningObjectives: [
      'Understand the motion chain: position → velocity → acceleration',
      'Calculate velocity from position functions',
      'Calculate acceleration from velocity functions',
      'Interpret positive and negative acceleration',
      'Apply motion analysis to real engineering problems'
    ],
    keyEquations: [
      { eq: 'v(t) = \\frac{d}{dt}s(t)', meaning: 'Velocity = derivative of position' },
      { eq: 'a(t) = \\frac{d}{dt}v(t) = \\frac{d^2}{dt^2}s(t)', meaning: 'Acceleration = derivative of velocity = second derivative of position' },
      { eq: 's\'\'(t) = \\frac{d^2s}{dt^2}', meaning: 'Second derivative notation' },
      { eq: 'a = -10 \\text{ m/s}^2', meaning: 'Gravity acceleration (approximate)' }
    ],
    practiceProblems: [
      {
        id: '3.14a',
        prompt: 'Position: s(t) = 2t³. Find velocity and acceleration at t=2s.',
        solution: 'Step 1: Find velocity (1st derivative)\nv(t) = s\'(t) = 6t²\nv(2) = 6(4) = 24 m/s\nStep 2: Find acceleration (2nd derivative)\na(t) = v\'(t) = 12t\na(2) = 12(2) = 24 m/s²\nAnswer: Velocity = 24 m/s, Acceleration = 24 m/s²',
        hints: ['Take first derivative for velocity', 'Take second derivative for acceleration', 'Substitute t=2 into both']
      },
      {
        id: '3.14b',
        prompt: 'Rocket height: h(t) = 100t - 5t². Find velocity and acceleration at t=5s.',
        solution: 'Step 1: Velocity\nv(t) = 100 - 10t\nv(5) = 100 - 50 = 50 m/s\nStep 2: Acceleration\na(t) = -10 m/s² (constant)\nAnswer: Moving at 50 m/s, decelerating at 10 m/s²',
        hints: ['Derivative of 100t is 100', 'Derivative of -5t² is -10t', 'Acceleration is constant']
      },
      {
        id: '3.14c',
        prompt: 'Ball height: h(t) = 30t - 5t². When does ball reach maximum height?',
        solution: 'At max height, velocity = 0\nStep 1: Find velocity\nv(t) = 30 - 10t\nStep 2: Set velocity = 0\n30 - 10t = 0\nt = 3 seconds\nAnswer: Ball reaches maximum height at t=3s',
        hints: ['Maximum height occurs when velocity = 0', 'Find derivative of height', 'Set derivative equal to zero']
      },
      {
        id: '3.14d',
        prompt: 'Car position: s(t) = t³ - 3t² + 5t. Find velocity and acceleration at t=3s.',
        solution: 'Step 1: Velocity\nv(t) = 3t² - 6t + 5\nv(3) = 3(9) - 6(3) + 5 = 27 - 18 + 5 = 14 m/s\nStep 2: Acceleration\na(t) = 6t - 6\na(3) = 6(3) - 6 = 18 - 6 = 12 m/s²\nAnswer: Velocity = 14 m/s, Acceleration = 12 m/s² (speeding up)',
        hints: ['Take derivative of each term', 'Evaluate at t=3', 'Positive acceleration means speeding up']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['velocity', 'acceleration', 'motion', 'derivatives'] },
    content: {
      intro: 'Learn how derivatives describe motion! Velocity tells you speed, acceleration tells you how speed changes. Master the math of moving objects! Motion has THREE levels, each is the derivative of the previous: Position (where you are) → Velocity (how fast you\'re moving) → Acceleration (how fast your speed changes).',
      concepts: [
        {
          title: '🧠 The Motion Chain - Position → Velocity → Acceleration',
          explanation: 'Motion has THREE levels, each is the derivative of the previous! THE MOTION CHAIN: Position (where you are) → Take derivative → Velocity (how fast you\'re moving) → Take derivative → Acceleration (how fast your speed changes). REAL EXAMPLE: Car Trip. Position: s(t) = 2t³ meters. Step 1: Find Velocity (1st derivative): v(t) = s\'(t) = 6t² m/s. Step 2: Find Acceleration (2nd derivative): a(t) = v\'(t) = 12t m/s². At t=2 seconds: Position: s(2) = 16 m, Velocity: v(2) = 24 m/s, Acceleration: a(2) = 24 m/s².',
          example: 'Car position: s(t) = 2t³. Velocity: v(t) = 6t². Acceleration: a(t) = 12t. At t=2s: s(2) = 16m, v(2) = 24 m/s, a(2) = 24 m/s². Each derivative tells you something different about the motion!'
        },
        {
          title: '🔧 Understanding Acceleration',
          explanation: 'UNDERSTANDING ACCELERATION: Positive acceleration = Speeding up. Car: 0 → 20 → 40 m/s (accelerating!). Negative acceleration = Slowing down. Car: 40 → 20 → 0 m/s (braking!). Zero acceleration = Constant speed. Car: 30 → 30 → 30 m/s (cruise control!). NOTATION: Position: s(t) or x(t). Velocity: v(t) = s\'(t) = ds/dt. Acceleration: a(t) = v\'(t) = s\'\'(t) = d²s/dt². The double prime (s\'\') means "second derivative"!',
          example: 'Positive acceleration: Car speeds up from 0 to 40 m/s. Negative acceleration: Car brakes from 40 to 0 m/s. Zero acceleration: Car maintains constant 30 m/s. Gravity causes constant acceleration of -10 m/s² (downward).'
        },
        {
          title: '🧮 Calculating Motion - Step by Step',
          explanation: 'PROBLEM: Car Acceleration. Position: s(t) = t³ - 3t² + 5t. Find velocity and acceleration at t=3s. Step 1: Find velocity (1st derivative): v(t) = s\'(t) = 3t² - 6t + 5. Step 2: Find acceleration (2nd derivative): a(t) = v\'(t) = 6t - 6. Step 3: Evaluate at t=3s: v(3) = 3(9) - 6(3) + 5 = 14 m/s. a(3) = 6(3) - 6 = 12 m/s². Answer: Velocity: 14 m/s, Acceleration: 12 m/s² (speeding up!).',
          example: 'Position: s(t) = t³ - 3t² + 5t. Velocity: v(t) = 3t² - 6t + 5. Acceleration: a(t) = 6t - 6. At t=3s: v(3) = 14 m/s, a(3) = 12 m/s². The acceleration is positive, so the car is speeding up!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Vehicle Dynamics',
          description: 'Car accelerometers measure acceleration directly. Velocity calculated from acceleration data. Position calculated from velocity. Autonomous vehicles use motion chain for navigation. Crash testing uses acceleration data.'
        },
        {
          icon: '🚀',
          title: 'Rocket Launches',
          description: 'Rocket engineers track position, velocity, and acceleration. Launch trajectory calculated using derivatives. Maximum height found when velocity = 0. Acceleration determines fuel consumption. Precise control requires all three quantities.'
        },
        {
          icon: '🏀',
          title: 'Falling Objects',
          description: 'Gravity causes constant acceleration: a = -10 m/s². Ball thrown up: velocity decreases, reaches zero at peak, then increases downward. Maximum height when velocity = 0. Impact velocity calculated from acceleration. Free fall analysis uses motion chain.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Motion',
          description: 'Aircraft track position, velocity, and acceleration. Takeoff requires positive acceleration. Landing requires negative acceleration (deceleration). Flight controllers use motion derivatives. Navigation systems integrate acceleration data.'
        },
        {
          icon: '🎢',
          title: 'Roller Coaster Design',
          description: 'Engineers design roller coasters using motion analysis. Acceleration determines g-forces. Maximum acceleration must be safe for riders. Velocity profiles determine ride duration. Position curves create thrilling experiences.'
        }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Calculus Basics: Integration - Finding Total Change',
    subtitle: 'The Opposite of Derivatives',
    description: 'Integration is the OPPOSITE of derivatives! While derivatives find rates, integrals find totals. Learn to calculate distance, work, and energy',
    coreIdea: 'Integration finds totals by adding up tiny pieces - the area under a curve',
    engineeringExample: 'Distance from velocity, work from force, energy from power, area calculations',
    learningObjectives: [
      'Understand integration as the opposite of differentiation',
      'Visualize integrals as area under curves',
      'Apply the power rule for integration',
      'Calculate distance from velocity functions',
      'Calculate work from force functions'
    ],
    keyEquations: [
      { eq: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C', meaning: 'Power rule for integration' },
      { eq: '\\int v(t) dt = s(t)', meaning: 'Distance = integral of velocity' },
      { eq: 'W = \\int F dx', meaning: 'Work = integral of force' },
      { eq: '\\int_a^b f(x) dx', meaning: 'Definite integral from a to b' }
    ],
    practiceProblems: [
      {
        id: '3.15a',
        prompt: 'Find ∫ 3x² dx',
        solution: 'Using power rule: ∫ 3x² dx = 3 · x³/3 + C = x³ + C\nStep 1: Add 1 to exponent (2+1=3)\nStep 2: Divide by new exponent (3/3=1)\nStep 3: Add constant C\nResult: x³ + C',
        hints: ['Use power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C', 'Add 1 to exponent', 'Divide by new exponent', 'Add constant C']
      },
      {
        id: '3.15b',
        prompt: 'Velocity v(t) = 10t. Find distance from t=0 to t=3s.',
        solution: 'Step 1: Integrate velocity\ns(t) = ∫ 10t dt = 10 · t²/2 = 5t²\nStep 2: Evaluate from 0 to 3\ns(3) - s(0) = 5(9) - 0 = 45 meters\nAnswer: 45 meters traveled',
        hints: ['Integrate velocity to get position', 'Use power rule', 'Evaluate definite integral', 'Subtract lower limit from upper limit']
      },
      {
        id: '3.15c',
        prompt: 'Force F = 20 N over distance 0 to 5m. Find work done.',
        solution: 'Work = ∫₀⁵ 20 dx = 20x |₀⁵\nWork = 20(5) - 20(0) = 100 - 0 = 100 Joules\nAnswer: 100 Joules of work done',
        hints: ['Work = integral of force', 'Integrate constant 20', 'Evaluate from 0 to 5', 'Work units: Joules']
      },
      {
        id: '3.15d',
        prompt: 'Velocity v(t) = 6t². Find distance from t=0 to t=2s.',
        solution: 'Step 1: Integrate\ns(t) = ∫ 6t² dt = 6t³/3 = 2t³\nStep 2: Evaluate from 0 to 2\ns(2) - s(0) = 2(8) - 0 = 16 meters\nAnswer: 16 meters traveled',
        hints: ['Integrate velocity function', 'Use power rule for t²', 'Evaluate definite integral', 'Calculate distance']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['integration', 'calculus', 'area', 'totals'] },
    content: {
      intro: 'Integration is the OPPOSITE of derivatives! While derivatives find rates, integrals find totals. Learn to calculate distance, work, and energy! Integration adds up tiny pieces to find the TOTAL! THE BIG IDEA: Derivative: Breaks things apart (finds rate). Integral: Puts things together (finds total).',
      concepts: [
        {
          title: '🧠 What is Integration? - Area Under the Curve',
          explanation: 'Integration adds up tiny pieces to find the TOTAL! THE BIG IDEA: Derivative: Breaks things apart (finds rate). Integral: Puts things together (finds total). VISUAL UNDERSTANDING: Velocity vs Time Graph shows velocity over time. The shaded area under the curve is the DISTANCE! Area = Distance traveled! If velocity = 20 m/s for 4 seconds: Distance = 20 × 4 = 80 meters. INTEGRATION NOTATION: ∫ v(t) dt = distance. The ∫ symbol means "integrate" or "add up". dt means "with respect to time".',
          example: 'Velocity graph: v = 20 m/s from t=0 to t=4s. Area under curve = 20 × 4 = 80 meters. This area IS the distance traveled! Integration finds this total distance.'
        },
        {
          title: '🔧 The Power Rule for Integration',
          explanation: 'THE POWER RULE FOR INTEGRATION: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. Steps: 1. Add 1 to the exponent. 2. Divide by the new exponent. 3. Add constant C. Examples: ∫ x² dx = x³/3 + C. ∫ x³ dx = x⁴/4 + C. ∫ 5x dx = 5x²/2 + C. WHY THE +C? When you integrate, you lose information! If f\'(x) = 2x, then f(x) could be: x² + 5, x² + 10, x² + 0, or x² + C (any constant!). The derivative of ANY constant is zero!',
          example: 'Find ∫ 3x² dx. Step 1: Add 1 to exponent (2+1=3). Step 2: Divide by new exponent (3/3=1). Step 3: Multiply by coefficient (3×1=3). Result: 3x³/3 + C = x³ + C.'
        },
        {
          title: '🧮 Definite vs Indefinite Integrals',
          explanation: 'DEFINITE vs INDEFINITE INTEGRALS: Indefinite (no limits): ∫ x² dx = x³/3 + C. This gives you a function (with +C). Definite (with limits): ∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9. This gives you a NUMBER (the area)! Definite integrals calculate the area under a curve between two points. The limits tell you where to start and stop.',
          example: 'Indefinite: ∫ x² dx = x³/3 + C (function with constant). Definite: ∫₀³ x² dx = [x³/3]₀³ = 9 (specific number - the area). The definite integral gives you the actual area under the curve!'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Distance from Velocity',
          description: 'GPS calculates distance by integrating velocity. Odometer readings use integration. Speed sensors provide velocity data. Integration converts velocity to distance. Navigation systems use integration constantly.'
        },
        {
          icon: '⚡',
          title: 'Work and Energy',
          description: 'Work = integral of force. Engineers calculate work done by forces. Energy = integral of power. Power plants calculate energy production. Mechanical work uses integration. Electrical energy uses integration.'
        },
        {
          icon: '💧',
          title: 'Fluid Flow',
          description: 'Volume = integral of flow rate. Engineers calculate total volume. Pipe systems use integration. Flow meters provide rate data. Integration converts rate to total volume. Water systems use integration.'
        },
        {
          icon: '📊',
          title: 'Area Calculations',
          description: 'Integration calculates area under curves. Engineers find areas of complex shapes. CAD software uses integration. Surveying uses integration. Architecture uses integration for area calculations.'
        },
        {
          icon: '🔋',
          title: 'Battery Capacity',
          description: 'Energy = integral of power. Battery capacity calculated by integration. Power consumption integrated over time. Electric vehicles use integration. Energy storage systems use integration.'
        }
      ]
    }
  },
  16: {
    id: 16,
    title: 'Calculus Basics: Energy, Motion & More',
    subtitle: 'Calculus in Action',
    description: 'See calculus in action! From falling balls to rocket launches, learn how derivatives and integrals solve real engineering problems',
    coreIdea: 'Calculus connects motion, energy, work, and power through derivatives and integrals',
    engineeringExample: 'Falling objects, rocket launches, work calculations, energy systems',
    learningObjectives: [
      'Understand kinetic energy and work-energy theorem',
      'Calculate work from force functions',
      'Calculate power from energy functions',
      'Analyze falling objects using calculus',
      'Apply calculus to motion problems'
    ],
    keyEquations: [
      { eq: 'KE = \\frac{1}{2}mv^2', meaning: 'Kinetic energy = ½ × mass × velocity²' },
      { eq: 'W = F \\times d', meaning: 'Work = Force × Distance' },
      { eq: 'P = \\frac{dE}{dt}', meaning: 'Power = rate of energy use' },
      { eq: 'h(t) = h_0 + v_0t - \\frac{1}{2}gt^2', meaning: 'Height with gravity: h₀ + v₀t - ½gt²' }
    ],
    practiceProblems: [
      {
        id: '3.16a',
        prompt: 'Ball dropped from 100m height. Gravity g = -10 m/s². When does it hit ground?',
        solution: 'Step 1: Acceleration\na(t) = -10 m/s²\nStep 2: Velocity (integrate)\nv(t) = -10t\nStep 3: Position (integrate)\nh(t) = 100 - 5t²\nStep 4: Set h(t) = 0\n100 - 5t² = 0\nt² = 20\nt ≈ 4.47 seconds\nAnswer: Hits ground at 4.47 seconds',
        hints: ['Gravity causes constant acceleration', 'Integrate acceleration to get velocity', 'Integrate velocity to get position', 'Set height = 0 to find impact time']
      },
      {
        id: '3.16b',
        prompt: 'Mass m = 10 kg, velocity changes from 0 to 20 m/s. Find kinetic energy.',
        solution: 'KE = ½mv²\nKE = ½(10)(20)²\nKE = ½(10)(400)\nKE = 2000 Joules\nAnswer: 2000 Joules of kinetic energy',
        hints: ['Use KE = ½mv²', 'Mass = 10 kg', 'Velocity = 20 m/s', 'Calculate step by step']
      },
      {
        id: '3.16c',
        prompt: 'Rocket: initial velocity 0 m/s, acceleration 20 m/s². Find height after 5 seconds.',
        solution: 'Step 1: Velocity\nv(t) = 20t\nStep 2: Position\nh(t) = 10t²\nStep 3: Evaluate at t=5\nh(5) = 10(25) = 250 meters\nAnswer: 250 meters height',
        hints: ['Integrate acceleration to get velocity', 'Integrate velocity to get position', 'Substitute t=5', 'Calculate height']
      },
      {
        id: '3.16d',
        prompt: 'Power P(t) = 50t Watts. Find energy from t=0 to t=4s.',
        solution: 'Energy = ∫₀⁴ 50t dt\nEnergy = 50t²/2 |₀⁴\nEnergy = 25t² |₀⁴\nEnergy = 25(16) - 0 = 400 Joules\nAnswer: 400 Joules of energy',
        hints: ['Energy = integral of power', 'Use power rule for integration', 'Evaluate definite integral', 'Calculate energy']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['energy', 'work', 'power', 'motion'] },
    content: {
      intro: 'See calculus in action! From falling balls to rocket launches, learn how derivatives and integrals solve real engineering problems. Calculus is EVERYWHERE in engineering! KINETIC ENERGY: KE = ½mv². WORK-ENERGY THEOREM: Work = Change in Kinetic Energy. POWER: Power = Rate of energy use = dE/dt.',
      concepts: [
        {
          title: '🧠 Energy and Work - Calculus Powers Engineering',
          explanation: 'Calculus is EVERYWHERE in engineering! KINETIC ENERGY: KE = ½mv². If mass m = 10 kg and velocity changes from 0 to 20 m/s: KE = ½(10)(20)² = 2000 Joules. WORK-ENERGY THEOREM: Work = Change in Kinetic Energy. If you push a 10kg box from rest to 20 m/s: Work = 2000 - 0 = 2000 Joules. POWER: Power = Rate of energy use = dE/dt. If 2000 J used in 5 seconds: Power = 2000/5 = 400 Watts.',
          example: 'Mass = 10 kg, velocity = 20 m/s. Kinetic energy = ½(10)(20)² = 2000 Joules. Work to accelerate from 0 to 20 m/s = 2000 Joules. Power = 2000 J / 5 s = 400 Watts.'
        },
        {
          title: '🔧 Ball Drop Simulation',
          explanation: 'Analyze a falling ball! SETUP: Ball dropped from 100m height. Gravity: g = -10 m/s². Step 1: Acceleration: a(t) = -10 m/s². Step 2: Velocity (integrate): v(t) = ∫ -10 dt = -10t + C. At t=0, v=0, so C=0. v(t) = -10t m/s. Step 3: Position (integrate): h(t) = ∫ -10t dt = -5t² + C. At t=0, h=100, so C=100. h(t) = 100 - 5t². Step 4: When does it hit ground? Set h(t) = 0: 100 - 5t² = 0, t² = 20, t ≈ 4.47 seconds. Step 5: Impact speed: v(4.47) = -10(4.47) ≈ -44.7 m/s. Negative means downward!',
          example: 'Ball dropped from 100m. Height: h(t) = 100 - 5t². Velocity: v(t) = -10t. Hits ground at t ≈ 4.47s. Impact speed ≈ -44.7 m/s (downward).'
        },
        {
          title: '🧮 Displacement from Acceleration',
          explanation: 'DISPLACEMENT FROM ACCELERATION: Given: a(t) = 10 m/s². Step 1: Integrate to get velocity: v(t) = ∫ 10 dt = 10t + C. If v(0) = 0, then C = 0. v(t) = 10t. Step 2: Integrate to get position: s(t) = ∫ 10t dt = 5t². At t=3s: s(3) = 5(9) = 45 meters! This is how you go from acceleration to position - integrate twice!',
          example: 'Acceleration: a(t) = 10 m/s². Velocity: v(t) = 10t. Position: s(t) = 5t². At t=3s: s(3) = 45 meters. Integrate acceleration once to get velocity, twice to get position!'
        }
      ],
      realWorld: [
        {
          icon: '🏀',
          title: 'Falling Objects',
          description: 'Gravity causes constant acceleration: a = -10 m/s². Engineers analyze falling objects using calculus. Maximum height found when velocity = 0. Impact velocity calculated from acceleration. Free fall problems use integration. Safety calculations use calculus.'
        },
        {
          icon: '🚀',
          title: 'Rocket Launches',
          description: 'Rocket engineers use calculus for trajectory analysis. Height calculated from acceleration. Velocity profiles determine fuel needs. Maximum height when velocity = 0. Launch dynamics use derivatives and integrals. Mission planning uses calculus.'
        },
        {
          icon: '⚡',
          title: 'Energy Systems',
          description: 'Power plants calculate energy production. Energy = integral of power over time. Battery capacity calculated by integration. Renewable energy systems use calculus. Energy storage uses integration. Power grid analysis uses calculus.'
        },
        {
          icon: '🚗',
          title: 'Vehicle Dynamics',
          description: 'Car braking distance calculated using calculus. Acceleration determines stopping distance. Energy calculations use integration. Crash testing uses acceleration data. Vehicle safety uses calculus. Autonomous vehicles use calculus.'
        },
        {
          icon: '🏗️',
          title: 'Structural Engineering',
          description: 'Engineers calculate work done by forces. Structural analysis uses integration. Force calculations use calculus. Energy methods use integration. Structural design uses calculus. Load analysis uses integration.'
        }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Calculus Basics: Reading Motion Graphs',
    subtitle: 'The Visual Story',
    description: 'Graphs tell stories! Learn to read position, velocity, and acceleration graphs to understand exactly what is happening in motion',
    coreIdea: 'Position, velocity, and acceleration graphs are connected - each is the derivative of the previous',
    engineeringExample: 'Motion analysis, vehicle telemetry, sensor data, performance monitoring',
    learningObjectives: [
      'Interpret position vs time graphs',
      'Interpret velocity vs time graphs',
      'Interpret acceleration vs time graphs',
      'Understand relationships between the three graphs',
      'Read motion stories from graphs'
    ],
    keyEquations: [
      { eq: 'v = \\frac{ds}{dt}', meaning: 'Velocity = slope of position graph' },
      { eq: 'a = \\frac{dv}{dt}', meaning: 'Acceleration = slope of velocity graph' },
      { eq: 's = \\int v dt', meaning: 'Position = area under velocity graph' },
      { eq: 'v = \\int a dt', meaning: 'Velocity = area under acceleration graph' }
    ],
    practiceProblems: [
      {
        id: '3.17a',
        prompt: 'Position graph is a straight line. What does this mean?',
        solution: 'Straight line position graph means:\n- Constant velocity\n- Zero acceleration\n- Uniform motion\n- Slope = velocity (constant)\nAnswer: Object moving at constant speed',
        hints: ['Straight line = constant slope', 'Constant slope = constant velocity', 'Constant velocity = zero acceleration']
      },
      {
        id: '3.17b',
        prompt: 'Velocity graph is horizontal at v=20 m/s. What is acceleration?',
        solution: 'Horizontal velocity graph means:\n- Constant velocity (20 m/s)\n- Zero acceleration (slope = 0)\n- Position increases linearly\nAnswer: Acceleration = 0 m/s²',
        hints: ['Horizontal line = zero slope', 'Zero slope = zero acceleration', 'Constant velocity means no acceleration']
      },
      {
        id: '3.17c',
        prompt: 'Position graph curves upward. What is happening?',
        solution: 'Curved upward position graph means:\n- Velocity is increasing\n- Acceleration is positive\n- Object is speeding up\n- Slope getting steeper\nAnswer: Object accelerating (speeding up)',
        hints: ['Curved upward = increasing slope', 'Increasing slope = increasing velocity', 'Increasing velocity = positive acceleration']
      },
      {
        id: '3.17d',
        prompt: 'Velocity graph slopes downward and crosses zero. What happens?',
        solution: 'Velocity graph sloping downward and crossing zero means:\n- Velocity decreasing\n- Acceleration negative (slowing down)\n- Object stops when velocity = 0\n- Then reverses direction (negative velocity)\nAnswer: Object slows down, stops, then moves backward',
        hints: ['Downward slope = negative acceleration', 'Crossing zero = velocity becomes zero', 'Negative velocity = backward motion']
      }
    ],
    metadata: { difficulty: 'Easy', estTime: '25 min', tags: ['graphs', 'motion', 'visualization', 'analysis'] },
    content: {
      intro: 'Graphs tell stories! Learn to read position, velocity, and acceleration graphs to understand exactly what is happening in motion. Each graph tells a different part of the story! Position graph shows WHERE you are. Velocity graph shows HOW FAST you\'re moving. Acceleration graph shows HOW SPEED CHANGES.',
      concepts: [
        {
          title: '🧠 The Three Motion Graphs',
          explanation: 'Each graph tells a different part of the story! POSITION GRAPH: Shows WHERE you are. Flat line = Not moving. Straight line = Constant speed. Curved up = Speeding up. Curved down = Slowing down. VELOCITY GRAPH: Shows HOW FAST you\'re moving. Above zero = Moving forward. Below zero = Moving backward. Slope = Acceleration! ACCELERATION GRAPH: Shows HOW SPEED CHANGES. Positive = Speeding up. Negative = Slowing down. Zero = Constant speed.',
          example: 'Position: Curved upward → Velocity: Increasing (sloped up) → Acceleration: Positive (above zero). Story: Object speeding up! Position: Straight line → Velocity: Flat line → Acceleration: Zero line. Story: Object moving at constant speed!'
        },
        {
          title: '🔧 Matching Graphs to Motion',
          explanation: 'SCENARIO 1: Car Starting from Rest. Position: Curves up (parabola). Velocity: Straight line up. Acceleration: Flat line (constant). SCENARIO 2: Ball Thrown Up. Position: Curves up then down (parabola). Velocity: Straight line down (crosses zero). Acceleration: Flat negative line (gravity). SCENARIO 3: Constant Speed. Position: Straight line. Velocity: Flat line. Acceleration: Zero line. Match the motion to the graphs!',
          example: 'Car starting: Position curves up, velocity increases linearly, acceleration is constant positive. Ball thrown up: Position is parabola, velocity decreases linearly and crosses zero, acceleration is constant negative (gravity). Constant speed: All graphs are flat (zero slope).'
        },
        {
          title: '🧮 Reading the Story',
          explanation: 'READING THE STORY: Position graph tells you location. Velocity graph tells you speed and direction. Acceleration graph tells you how speed changes. RELATIONSHIPS: Slope of position = velocity. Slope of velocity = acceleration. Area under velocity = distance. Area under acceleration = change in velocity. All three graphs are connected through derivatives and integrals!',
          example: 'Position graph: Slope = velocity. If slope is increasing, velocity is increasing. Velocity graph: Slope = acceleration. If slope is positive, acceleration is positive. Acceleration graph: Area = change in velocity. If area is positive, velocity increases.'
        }
      ],
      realWorld: [
        {
          icon: '📊',
          title: 'Sensor Data Analysis',
          description: 'Engineers analyze sensor data using graphs. Position sensors provide position data. Velocity calculated from position. Acceleration calculated from velocity. Telemetry systems use all three graphs. Data analysis uses graph interpretation.'
        },
        {
          icon: '🚗',
          title: 'Vehicle Telemetry',
          description: 'Racing teams analyze motion graphs. Position data from GPS. Velocity from speed sensors. Acceleration from accelerometers. Performance analysis uses graphs. Optimization uses graph data.'
        },
        {
          icon: '🚀',
          title: 'Rocket Telemetry',
          description: 'Rocket engineers monitor all three graphs. Position tracks altitude. Velocity tracks speed. Acceleration tracks thrust. Mission control uses graphs. Trajectory analysis uses graphs.'
        },
        {
          icon: '🤖',
          title: 'Robot Motion',
          description: 'Robots use motion graphs for control. Position sensors provide data. Velocity calculated for control. Acceleration used for stability. Motion planning uses graphs. Control systems use graph data.'
        },
        {
          icon: '🎢',
          title: 'Ride Design',
          description: 'Engineers design rides using motion graphs. Position determines track layout. Velocity determines speed experience. Acceleration determines g-forces. Safety analysis uses graphs. Thrill factor uses graph analysis.'
        }
      ]
    }
  }
};

export default unit3Lessons;
