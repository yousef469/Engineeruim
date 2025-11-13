// Unit 1: Algebra & Equations (Lessons 1-6)
export const unit1Lessons = {
  1: {
    id: 1,
    title: 'Algebra & Equations: Variables, Units & Symbols',
    subtitle: 'The Language of Engineering',
    description: 'Master the language of engineering! Variables and units are your tools for describing the physical world',
    coreIdea: 'Variables represent physical quantities; units prevent costly mistakes',
    engineeringExample: 'NASA Mars Climate Orbiter ($327M mission failure due to unit mismatch)',
    learningObjectives: [
      'Define variables and understand their role in engineering calculations',
      'Identify common engineering variables (mass, force, velocity, time)',
      'Convert between different units (distance, time, speed)',
      'Apply unit conversion rules to avoid errors',
      'Rearrange formulas to solve for any variable'
    ],
    keyEquations: [
      { eq: 'v = \\frac{d}{t}', meaning: 'Velocity = distance divided by time' },
      { eq: 'F = m \\times a', meaning: 'Force = mass times acceleration' },
      { eq: '1\\,\\text{km/h} = \\frac{1}{3.6}\\,\\text{m/s}', meaning: 'Conversion factor for speed' },
      { eq: '1\\,\\text{hour} = 3600\\,\\text{seconds}', meaning: 'Time conversion' }
    ],
    practiceProblems: [
      {
        id: '1.1a',
        prompt: 'A car travels at 72 km/h. Convert to m/s.',
        solution: '72 km/h = 72 × (1000 m / 3600 s) = 72 × 0.278 = 20 m/s\nQuick trick: 72 ÷ 3.6 = 20 m/s',
        hints: ['Use conversion factor 1 km/h = 1/3.6 m/s', 'Or divide by 3.6 directly']
      },
      {
        id: '1.1b',
        prompt: 'A rocket accelerates for 120 seconds. How many minutes is this?',
        solution: '120 s ÷ 60 = 2 minutes\nSimple division by 60 seconds per minute',
        hints: ['1 minute = 60 seconds', 'Divide seconds by 60']
      },
      {
        id: '1.1c',
        prompt: 'A robot moves at 5 m/s and travels 20 meters. How long did it take?',
        solution: 'Using v = d/t, rearrange to t = d/v\nt = 20 m / 5 m/s = 4 seconds',
        hints: ['Use v = d/t', 'Rearrange to solve for time', 't = d/v']
      }
    ],
    content: {
      intro: 'Master the language of engineering! Variables and units are your tools for describing the physical world. One wrong unit cost NASA $327 million - learn why precision matters! Variables are like containers that hold values. Think of them as labeled boxes!',
      concepts: [
        {
          title: '📦 1. Variables - The Language of Engineering',
          explanation: 'Variables are like containers that hold values. Think of them as labeled boxes! Common engineering variables: Mass (m) for rockets, cars, robots. Force (F) for thrust, weight, tension. Velocity (v) for speed, motion, flow. Time (t) for duration, intervals. Instead of writing "A car travels 100 meters in 5 seconds", we write: d = 100 m, t = 5 s, v = d/t = 20 m/s. Now this formula works for ANY car, ANY distance!',
          example: 'Drone flight example: Battery capacity E = 5000 mAh, Flight time t = 20 minutes, Speed v = 15 m/s. Distance traveled: d = v × t = 15 × (20×60) = 18,000 m = 18 km! Variables let us calculate ANYTHING once we know the formula!'
        },
        {
          title: '⚠️ 2. Units - The $327 Million Mistake',
          explanation: 'Units are NOT optional - they can make or break a mission! NASA Mars Climate Orbiter (1999): Cost $327 million, Mission: Study Mars climate, Result: CRASHED into Mars! What went wrong? Team A (Lockheed) used pounds-force (lbf), Team B (NASA) expected Newtons (N). 1 lbf = 4.45 N. The spacecraft thought it was 4.45× closer to Mars than it actually was! Result: Burned up in atmosphere. THE GOLDEN RULES: 1. ALWAYS write units. 2. Convert BEFORE calculating. 3. Check if answer makes sense.',
          example: 'Car speed = 2000 m/s? That\'s 7200 km/h! Probably made an error. Always check if your answer makes physical sense. Can\'t add 5 meters + 3 feet directly! Convert first: 3 feet = 0.914 m, then: 5 + 0.914 = 5.914 m.'
        },
        {
          title: '🔄 3. Essential Unit Conversions',
          explanation: 'Distance: 1 km = 1000 m, 1 mile = 1.609 km, 1 foot = 0.3048 m. Time: 1 hour = 3600 seconds, 1 minute = 60 seconds, 1 day = 86,400 seconds. Speed: 1 km/h = 0.278 m/s, 1 mph = 0.447 m/s, 100 km/h = 27.8 m/s. QUICK TRICK: To convert km/h to m/s, divide by 3.6. 72 km/h ÷ 3.6 = 20 m/s.',
          example: 'Convert 90 km/h to m/s: 90 ÷ 3.6 = 25 m/s. Convert 3.5 hours to seconds: 3.5 × 3600 = 12,600 seconds. A force of 2500 N = 2.5 kN (kilonewtons).'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'NASA Mars Climate Orbiter',
          description: 'Mission cost $327 million. Failed due to unit mismatch: Lockheed used pounds-force (lbf), NASA expected Newtons (N). Spacecraft crashed into Mars because it thought it was 4.45× closer than it actually was. This disaster shows why units are critical in engineering!'
        },
        {
          icon: '🚗',
          title: 'Vehicle Speed Calculations',
          description: 'Car navigation systems use unit conversions constantly. GPS shows speed in km/h, but engine calculations use m/s. Engineers must convert: 100 km/h = 27.8 m/s. Formula: v = d/t works for any distance and time once units are consistent.'
        },
        {
          icon: '⚡',
          title: 'Electric Circuits',
          description: 'Ohm\'s Law: V = I × R requires consistent units. Voltage in volts (V), Current in amperes (A), Resistance in ohms (Ω). Engineers must convert: 1 mA = 0.001 A, 1 kV = 1000 V. Unit consistency prevents circuit failures.'
        },
        {
          icon: '🏗️',
          title: 'Construction & Engineering',
          description: 'Building projects use multiple unit systems. Architects work in feet and inches, engineers in meters. Structural calculations require conversions: 1 foot = 0.3048 m. Material strength: PSI (pounds per square inch) vs Pascals. Conversions are essential!'
        },
        {
          icon: '📊',
          title: 'Formula Rearrangement',
          description: 'Engineers rearrange formulas to solve for different variables. From v = d/t, we get: t = d/v (time from distance and speed), d = v × t (distance from speed and time). This flexibility is essential for engineering calculations!'
        }
      ]
    }
  },
  2: {
    id: 2,
    title: 'Algebra & Equations: Linear Equations',
    subtitle: 'The Foundation of Engineering Calculations',
    description: 'Master solving single-variable equations - the foundation of all engineering calculations',
    coreIdea: 'Linear equations have one variable and form straight lines when graphed',
    engineeringExample: 'Robot motion, electric circuits, force calculations',
    learningObjectives: [
      'Define linear equations and identify them in engineering problems',
      'Solve linear equations using step-by-step methods',
      'Apply linear equations to real engineering scenarios',
      'Check solutions by substituting back into original equations',
      'Solve for any variable in a linear equation'
    ],
    keyEquations: [
      { eq: 'ax + b = c', meaning: 'General form of a linear equation' },
      { eq: 'V = I \\times R', meaning: 'Ohm\'s Law: Voltage = Current × Resistance' },
      { eq: 'F = m \\times a', meaning: 'Newton\'s Second Law: Force = mass × acceleration' },
      { eq: 'v = \\frac{d}{t}', meaning: 'Velocity = distance / time' }
    ],
    practiceProblems: [
      {
        id: '1.2a',
        prompt: 'Solve: 3x + 7 = 22',
        solution: 'Step 1: Subtract 7 from both sides\n3x + 7 - 7 = 22 - 7\n3x = 15\nStep 2: Divide both sides by 3\n3x ÷ 3 = 15 ÷ 3\nx = 5\nCheck: 3(5) + 7 = 15 + 7 = 22 ✓',
        hints: ['Do the same operation to both sides', 'First subtract 7', 'Then divide by 3']
      },
      {
        id: '1.2b',
        prompt: 'A robot moves at 5 m/s for t seconds and travels 20 meters. Find t.',
        solution: 'Equation: 5t = 20\nDivide both sides by 5: t = 20 ÷ 5 = 4 seconds\nCheck: 5(4) = 20 m ✓',
        hints: ['Use v = d/t', 'Rearrange to t = d/v', 'Or solve 5t = 20']
      },
      {
        id: '1.2c',
        prompt: 'Electric circuit: Voltage V = 12V, Resistance R = 4Ω. Find current I using Ohm\'s Law: V = I × R',
        solution: '12 = I × 4\nDivide both sides by 4: I = 12 ÷ 4 = 3 Amperes\nCheck: 3 × 4 = 12 V ✓',
        hints: ['Use Ohm\'s Law: V = I × R', 'Rearrange to I = V/R', 'Divide voltage by resistance']
      }
    ],
    content: {
      intro: 'Master solving single-variable equations - the foundation of all engineering calculations. Linear equations have one variable and can be written as: ax + b = c, where x is the unknown variable we want to find, and a, b, c are known numbers. The equation forms a straight line when graphed. Goal: Isolate the variable on one side to find its value.',
      concepts: [
        {
          title: '🧠 1. What is a Linear Equation?',
          explanation: 'A linear equation has one variable and can be written as: ax + b = c, where x is the unknown variable we want to find, a and b are known numbers (coefficients), c is a constant. The equation forms a straight line when graphed. Examples: 2x + 5 = 15, 3v - 7 = 20, 5t = 40. Goal: Isolate the variable on one side to find its value.',
          example: 'Engineering examples: Robot motion: 5t = 20 (time from speed and distance). Force calculation: F = 10 × 3 (force from mass and acceleration). Temperature conversion: F = (9/5)C + 32 (Fahrenheit from Celsius).'
        },
        {
          title: '🔧 2. Solving Linear Equations - Step by Step',
          explanation: 'THE GOLDEN RULE: Whatever you do to one side, do to the other! Steps to solve: 1. Simplify both sides (combine like terms). 2. Move variable terms to one side. 3. Move constant terms to the other side. 4. Divide or multiply to isolate the variable. Always check your answer by substituting back into the original equation!',
          example: 'Solve 3x + 7 = 22: Step 1: Subtract 7 from both sides → 3x = 15. Step 2: Divide both sides by 3 → x = 5. Check: 3(5) + 7 = 15 + 7 = 22 ✓. Always verify your solution!'
        },
        {
          title: '⚡ 3. Engineering Applications',
          explanation: 'Linear equations appear everywhere in engineering: Motion: v = d/t, d = vt, t = d/v. Circuits: V = IR, I = V/R, R = V/I. Forces: F = ma, a = F/m, m = F/a. Temperature: F = (9/5)C + 32. The key is to rearrange the equation to solve for the unknown variable.',
          example: 'Rocket fuel problem: A rocket burns fuel at 50 kg/s. After time t, it has burned 400 kg. Equation: 50t = 400. Solution: t = 400 ÷ 50 = 8 seconds. Electric circuit: V = 12V, R = 4Ω. Find I: 12 = I × 4, so I = 3 Amperes.'
        }
      ],
      realWorld: [
        {
          icon: '🤖',
          title: 'Robot Motion',
          description: 'Robots use linear equations for navigation. Speed v = 5 m/s, distance d = 20 m. Solve for time: t = d/v = 20/5 = 4 seconds. Engineers program robots using these equations for precise movement control.'
        },
        {
          icon: '⚡',
          title: 'Electric Circuits',
          description: 'Ohm\'s Law: V = I × R is a linear equation. Given voltage and resistance, solve for current: I = V/R. Engineers use this for circuit design, ensuring proper current flow and component sizing.'
        },
        {
          icon: '🚀',
          title: 'Rocket Fuel Calculations',
          description: 'Fuel consumption: A rocket burns fuel at 50 kg/s. After time t, fuel burned = 50t. If 400 kg burned: 50t = 400, so t = 8 seconds. Engineers calculate burn times for mission planning.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Altitude',
          description: 'Plane descends at 5 m/s. After t seconds, altitude change = 5t. If descended 150 m: 5t = 150, so t = 30 seconds. Pilots and engineers use these calculations for landing procedures.'
        },
        {
          icon: '🌡️',
          title: 'Temperature Conversion',
          description: 'Fahrenheit to Celsius: F = (9/5)C + 32. This linear equation converts temperatures. Engineers use this for thermal systems, engine design, and environmental control systems.'
        }
      ]
    }
  },
  3: {
    id: 3,
    title: 'Algebra & Equations: Quadratic Equations',
    subtitle: 'Modeling Motion, Projectiles, and Acceleration',
    description: 'Discover how quadratic equations model motion, projectiles, and acceleration in engineering',
    coreIdea: 'Quadratic equations have x² as the highest power and model parabolic motion',
    engineeringExample: 'Projectile motion, falling objects, rocket trajectories',
    learningObjectives: [
      'Define quadratic equations and identify them in engineering problems',
      'Solve quadratic equations using factoring and the quadratic formula',
      'Apply quadratic equations to projectile motion and falling objects',
      'Interpret solutions in physical contexts',
      'Find maximum/minimum values using vertex formula'
    ],
    keyEquations: [
      { eq: 'ax^2 + bx + c = 0', meaning: 'General form of a quadratic equation' },
      { eq: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', meaning: 'Quadratic formula' },
      { eq: 'h = -5t^2 + v_0t + h_0', meaning: 'Projectile height equation' },
      { eq: 's = ut + \\frac{1}{2}at^2', meaning: 'Position equation with acceleration' }
    ],
    practiceProblems: [
      {
        id: '1.3a',
        prompt: 'An object is dropped from 100m height. Position: s = 100 - 5t². When does it hit the ground (s = 0)?',
        solution: '0 = 100 - 5t²\n5t² = 100\nt² = 20\nt = √20 ≈ 4.47 seconds\nOnly positive time makes physical sense!',
        hints: ['Set s = 0', 'Solve for t²', 'Take square root', 'Only positive time is valid']
      },
      {
        id: '1.3b',
        prompt: 'A rocket\'s height: h = -5t² + 50t. When does it return to ground (h = 0)?',
        solution: '0 = -5t² + 50t\n0 = t(-5t + 50)\nt = 0 (launch) or t = 10 seconds (landing)\nPhysical solution: t = 10 seconds',
        hints: ['Factor out t', 'Set each factor = 0', 'Two solutions: t = 0 and t = 10', 'Choose the physical solution']
      },
      {
        id: '1.3c',
        prompt: 'A car leaves a ramp: h = -5t² + 20t. When does it reach maximum height?',
        solution: 'Maximum at vertex: t = -b/(2a) = -20/(2×-5) = 2 seconds\nHeight: h = -5(2)² + 20(2) = -20 + 40 = 20 meters',
        hints: ['Use vertex formula: t = -b/(2a)', 'Substitute back to find height', 'Vertex gives maximum for downward parabola']
      }
    ],
    content: {
      intro: 'Discover how quadratic equations model motion, projectiles, and acceleration in engineering. A quadratic equation has a variable squared (x²): ax² + bx + c = 0, where a, b, c are constants and x is the variable. The highest power is 2 (that\'s why it\'s "quadratic"). The graph of a quadratic is a parabola (U-shape or ∩-shape).',
      concepts: [
        {
          title: '🧠 1. What is a Quadratic Equation?',
          explanation: 'A quadratic equation has a variable squared (x²): ax² + bx + c = 0, where a, b, c are constants and x is the variable. The highest power is 2. Examples in engineering: Projectile motion: h = -5t² + 20t + 10. Falling objects: s = ut + ½at². Parabolic paths of rockets and balls. The graph of a quadratic is a parabola (U-shape for positive a, ∩-shape for negative a).',
          example: 'Projectile motion: A ball thrown upward follows h = -5t² + 20t. This is a quadratic! The -5t² term represents gravity pulling down, the 20t term represents initial upward velocity. The path is a parabola.'
        },
        {
          title: '🔧 2. Solving Quadratic Equations',
          explanation: 'Method 1: Factoring (when possible). Example: x² + 5x + 6 = 0 factors to (x + 2)(x + 3) = 0, so x = -2 or x = -3. Method 2: Quadratic Formula (always works!): x = [-b ± √(b² - 4ac)] / 2a. Example: 2x² + 3x - 2 = 0 gives x = 0.5 or x = -2. Engineering tip: Often only one solution makes physical sense (time can\'t be negative!).',
          example: 'Solve 2x² + 3x - 2 = 0 using quadratic formula: a = 2, b = 3, c = -2. x = [-3 ± √(9 + 16)] / 4 = [-3 ± 5] / 4. Solutions: x = 0.5 or x = -2. For time problems, we reject negative solutions!'
        },
        {
          title: '🚀 3. Engineering Applications - Projectile Motion',
          explanation: 'Quadratic equations model projectile motion perfectly. Height equation: h = -5t² + v₀t + h₀, where -5t² is gravity effect, v₀t is initial velocity, h₀ is starting height. Maximum height occurs at vertex: t = -b/(2a). When object hits ground: h = 0, solve quadratic. Engineering applications: Rocket trajectories, ballistics, sports engineering, jump design.',
          example: 'Rocket launch: h = -5t² + 50t. Maximum height at t = -50/(2×-5) = 5 seconds. Height: h = -5(25) + 50(5) = 125 meters. Landing time: 0 = -5t² + 50t, so t = 10 seconds. Engineers use this for trajectory planning!'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'Rocket Trajectories',
          description: 'Rockets follow parabolic paths: h = -5t² + v₀t. Engineers calculate maximum height, flight time, and landing point. Example: h = -5t² + 50t reaches 125m at 5 seconds, lands at 10 seconds. Essential for mission planning!'
        },
        {
          icon: '⚽',
          title: 'Projectile Motion',
          description: 'Balls, bullets, and projectiles follow quadratic paths. Height: h = -5t² + v₀t. Engineers design sports equipment, calculate ranges, and optimize trajectories. Maximum height at vertex, landing when h = 0.'
        },
        {
          icon: '🏎️',
          title: 'Ramp Jump Design',
          description: 'Cars leaving ramps follow parabolic paths. Engineers design ramps using quadratic equations. Height: h = -5t² + 20t. Maximum height at 2 seconds = 20 meters. Landing time calculated from h = 0. Safety depends on these calculations!'
        },
        {
          icon: '📉',
          title: 'Falling Objects',
          description: 'Objects falling under gravity: s = 100 - 5t². Engineers calculate impact time, velocity, and safety. When s = 0, object hits ground. Example: 100m drop takes √20 ≈ 4.47 seconds. Critical for safety engineering!'
        },
        {
          icon: '🎯',
          title: 'Ballistics',
          description: 'Military and aerospace engineers use quadratic equations for ballistics. Trajectory calculation, range estimation, and target prediction all rely on quadratic equations. Maximum range occurs at 45° launch angle.'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Algebra & Equations: Systems of Equations',
    subtitle: 'Solving Multiple Constraints',
    description: 'Learn to solve multiple equations with multiple unknowns - essential for circuits, forces, and complex systems',
    coreIdea: 'Systems of equations have multiple unknowns and multiple constraints that must all be satisfied',
    engineeringExample: 'Circuit analysis, force balance, chemical reactions',
    learningObjectives: [
      'Define systems of equations and identify them in engineering problems',
      'Solve systems using substitution and elimination methods',
      'Apply systems to circuit analysis and force balance problems',
      'Solve 2-equation and 3-equation systems',
      'Interpret solutions in physical contexts'
    ],
    keyEquations: [
      { eq: 'x + y = c_1', meaning: 'First equation in a system' },
      { eq: 'ax + by = c_2', meaning: 'Second equation in a system' },
      { eq: 'V = I_1 R_1 + I_2 R_2', meaning: 'Voltage in parallel circuit' },
      { eq: 'T - D = F_{net}', meaning: 'Thrust minus drag equals net force' }
    ],
    practiceProblems: [
      {
        id: '1.4a',
        prompt: 'Solve: x + y = 10 and 2x - y = 5',
        solution: 'Method 1 - Elimination: Add equations\n(x + y) + (2x - y) = 10 + 5\n3x = 15, so x = 5\nThen: 5 + y = 10, so y = 5\nSolution: x = 5, y = 5',
        hints: ['Add the two equations', 'The y terms cancel', 'Solve for x first', 'Then substitute to find y']
      },
      {
        id: '1.4b',
        prompt: 'A plane has thrust T and drag D: T - D = 1000 N (net force) and T + D = 6000 N (total). Find T and D.',
        solution: 'Add equations: (T - D) + (T + D) = 1000 + 6000\n2T = 7000, so T = 3500 N\nSubtract: (T + D) - (T - D) = 6000 - 1000\n2D = 5000, so D = 2500 N\nCheck: 3500 - 2500 = 1000 ✓, 3500 + 2500 = 6000 ✓',
        hints: ['Add equations to eliminate D', 'Subtract equations to eliminate T', 'Check your answers']
      },
      {
        id: '1.4c',
        prompt: 'Circuit: I₁ + I₂ = 5 A (total current) and 2I₁ + 3I₂ = 12 (voltage equation). Find I₁ and I₂.',
        solution: 'From first: I₁ = 5 - I₂\nSubstitute: 2(5 - I₂) + 3I₂ = 12\n10 - 2I₂ + 3I₂ = 12\nI₂ = 2 A\nThen: I₁ = 5 - 2 = 3 A\nCheck: 3 + 2 = 5 ✓, 2(3) + 3(2) = 12 ✓',
        hints: ['Solve first equation for I₁', 'Substitute into second equation', 'Solve for I₂', 'Then find I₁']
      }
    ],
    content: {
      intro: 'Learn to solve multiple equations with multiple unknowns - essential for circuits, forces, and complex systems. A system has multiple equations with multiple unknowns. Example with 2 variables: x + y = 10 and 2x - y = 5. We need to find values of x and y that satisfy BOTH equations. Real engineering examples: Circuit analysis with multiple currents and voltages, force balance with thrust vs drag and lift vs weight, chemical reactions with multiple reactants and products.',
      concepts: [
        {
          title: '🧠 1. What is a System of Equations?',
          explanation: 'A system has multiple equations with multiple unknowns. Example with 2 variables: x + y = 10 and 2x - y = 5. We need to find values of x and y that satisfy BOTH equations. Real engineering examples: Circuit analysis with multiple currents and voltages. Force balance with thrust vs drag, lift vs weight. Chemical reactions with multiple reactants and products. Why systems matter: Most real engineering problems have multiple constraints and multiple unknowns!',
          example: 'Aircraft force balance: Thrust T and drag D must satisfy: T - D = 1000 N (net force forward) and T + D = 6000 N (total force magnitude). This is a system of 2 equations with 2 unknowns. Engineers solve this to design propulsion systems!'
        },
        {
          title: '🔧 2. Solving Methods - Substitution',
          explanation: 'Method 1: Substitution. Steps: 1. Solve one equation for one variable. 2. Substitute into the other equation. 3. Solve for the remaining variable. Example: x + y = 10 → y = 10 - x. Substitute: 2x - (10 - x) = 5 → 2x - 10 + x = 5 → 3x = 15 → x = 5. Then: y = 10 - 5 = 5. Works well when one variable is easy to isolate.',
          example: 'Circuit problem: I₁ + I₂ = 5 A. From this: I₁ = 5 - I₂. Substitute into 2I₁ + 3I₂ = 12: 2(5 - I₂) + 3I₂ = 12 → 10 - 2I₂ + 3I₂ = 12 → I₂ = 2 A. Then I₁ = 3 A. Engineers use this for circuit analysis!'
        },
        {
          title: '⚡ 3. Solving Methods - Elimination',
          explanation: 'Method 2: Elimination. Steps: 1. Multiply equations to make coefficients match. 2. Add or subtract to eliminate one variable. 3. Solve for remaining variable. Example: x + y = 10 and 2x - y = 5. Add them: 3x = 15, so x = 5. Then: 5 + y = 10, so y = 5. Works well when coefficients are convenient. Often faster than substitution!',
          example: 'Force balance: T - D = 1000 and T + D = 6000. Add equations: 2T = 7000, so T = 3500 N. Subtract: 2D = 5000, so D = 2500 N. Engineers use this for aircraft design!'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Force Balance',
          description: 'Aircraft have thrust T and drag D: T - D = net force, T + D = total force. Engineers solve this system to design propulsion systems. Example: T = 3500 N, D = 2500 N. Critical for performance optimization!'
        },
        {
          icon: '⚡',
          title: 'Circuit Analysis',
          description: 'Electric circuits have multiple currents: I₁ + I₂ = total current, voltage equations from Ohm\'s Law. Engineers solve systems to find individual currents. Example: I₁ = 3 A, I₂ = 2 A. Essential for circuit design!'
        },
        {
          icon: '🧪',
          title: 'Chemical Reactions',
          description: 'Chemical reactions have multiple reactants and products. Conservation of mass and energy create systems of equations. Engineers solve these for stoichiometry and reaction optimization. Multiple constraints = system of equations!'
        },
        {
          icon: '🏗️',
          title: 'Structural Analysis',
          description: 'Buildings and bridges have multiple forces: weight, tension, compression. Force balance creates systems of equations. Engineers solve these for structural design. Safety depends on solving these systems correctly!'
        },
        {
          icon: '🤖',
          title: 'Robot Navigation',
          description: 'Robots move in 2D/3D space with multiple constraints: position, velocity, acceleration. Navigation equations form systems. Engineers solve these for path planning. Example: x-direction and y-direction equations must both be satisfied!'
        }
      ]
    }
  },
  5: {
    id: 5,
    title: 'Algebra & Equations: Exponents, Powers & Roots',
    subtitle: 'Exponential Growth, Decay, and Energy Calculations',
    description: 'Master exponents and powers - critical for understanding exponential growth, decay, and energy calculations',
    coreIdea: 'Exponents represent repeated multiplication and appear in exponential growth, decay, and energy equations',
    engineeringExample: 'Battery decay, signal strength, compound interest, energy calculations',
    learningObjectives: [
      'Define exponents and understand exponent rules',
      'Apply exponent rules to simplify expressions',
      'Solve problems involving exponential growth and decay',
      'Use exponents in energy and area calculations',
      'Understand negative and fractional exponents'
    ],
    keyEquations: [
      { eq: 'x^n = x \\times x \\times ... \\times x', meaning: 'Exponent definition (n times)' },
      { eq: 'x^a \\times x^b = x^{a+b}', meaning: 'Multiplication rule' },
      { eq: 'x^a \\div x^b = x^{a-b}', meaning: 'Division rule' },
      { eq: '(x^a)^b = x^{a \\times b}', meaning: 'Power of power rule' },
      { eq: 'E = mc^2', meaning: 'Mass-energy equivalence (speed of light squared!)' }
    ],
    practiceProblems: [
      {
        id: '1.5a',
        prompt: 'A bacteria population doubles every hour: P(t) = P₀ × 2^t. Starting with 100 bacteria, how many after 5 hours?',
        solution: 'P(5) = 100 × 2⁵\n2⁵ = 2 × 2 × 2 × 2 × 2 = 32\nP(5) = 100 × 32 = 3,200 bacteria\nExponential growth is rapid!',
        hints: ['Calculate 2⁵ = 32', 'Multiply by initial population', 'Exponential growth is fast!']
      },
      {
        id: '1.5b',
        prompt: 'A rocket\'s fuel decreases by half every minute: F(t) = F₀ × (1/2)^t. Starting with 1000 kg, how much after 3 minutes?',
        solution: 'F(3) = 1000 × (1/2)³\n(1/2)³ = 1/8 = 0.125\nF(3) = 1000 × 0.125 = 125 kg\nExponential decay reduces fuel quickly!',
        hints: ['Calculate (1/2)³ = 1/8', 'Multiply by initial fuel', 'Exponential decay is fast!']
      },
      {
        id: '1.5c',
        prompt: 'Simplify: x³ × x² and (x²)³',
        solution: 'x³ × x² = x^(3+2) = x⁵ (multiplication rule)\n(x²)³ = x^(2×3) = x⁶ (power of power rule)\nDifferent rules give different results!',
        hints: ['Use multiplication rule: add exponents', 'Use power of power rule: multiply exponents', 'These are different operations!']
      }
    ],
    content: {
      intro: 'Master exponents and powers - critical for understanding exponential growth, decay, and energy calculations. An exponent tells us how many times to multiply a number by itself: x^n means x × x × x... (n times). Examples: 2³ = 2 × 2 × 2 = 8, 5² = 5 × 5 = 25, 10⁴ = 10,000. Special cases: x¹ = x (anything to power 1 is itself), x⁰ = 1 (anything to power 0 is 1), x⁻¹ = 1/x (negative exponent means reciprocal).',
      concepts: [
        {
          title: '🧠 1. What Are Exponents?',
          explanation: 'An exponent tells us how many times to multiply a number by itself: x^n means x × x × x... (n times). Key terms: Base = the number being multiplied (2 in 2³), Exponent/Power = how many times (3 in 2³), Result = the answer (8). Special cases: x¹ = x (anything to power 1 is itself), x⁰ = 1 (anything to power 0 is 1), x⁻¹ = 1/x (negative exponent means reciprocal).',
          example: '2³ = 2 × 2 × 2 = 8. 5² = 5 × 5 = 25. 10⁴ = 10 × 10 × 10 × 10 = 10,000. Exponents grow quickly! 2¹⁰ = 1,024, 2²⁰ = 1,048,576. This is why exponential growth is so powerful!'
        },
        {
          title: '🔧 2. Exponent Rules',
          explanation: 'Essential rules for engineering: 1. Multiplication: x^a × x^b = x^(a+b). Example: 2³ × 2² = 2⁵ = 32. 2. Division: x^a ÷ x^b = x^(a-b). Example: 5⁴ ÷ 5² = 5² = 25. 3. Power of Power: (x^a)^b = x^(a×b). Example: (3²)³ = 3⁶ = 729. 4. Power of Product: (xy)^a = x^a × y^a. Example: (2×3)² = 2² × 3² = 36. 5. Roots: x^(1/n) = ⁿ√x. Example: 16^(1/2) = √16 = 4.',
          example: 'Engineering applications: Energy: E = mc² (speed of light squared!). Area: A = πr² (radius squared). Volume: V = r³ (radius cubed). These all use exponents! E = mc² means energy equals mass times speed of light squared - that\'s why nuclear energy is so powerful!'
        },
        {
          title: '📈 3. Exponential Growth and Decay',
          explanation: 'Exponential growth: P(t) = P₀ × 2^t (doubling every period). Exponential decay: F(t) = F₀ × (1/2)^t (halving every period). Engineering applications: Battery decay: C = C₀(0.95)^t. Signal strength: S = S₀(0.5)^(d/100). Compound interest: V = V₀(1.2)^t. Moore\'s Law: transistors double every 2 years!',
          example: 'Bacteria growth: Starting with 100, doubles every hour. After 5 hours: P(5) = 100 × 2⁵ = 100 × 32 = 3,200 bacteria! Fuel decay: Starting with 1000 kg, halves every minute. After 3 minutes: F(3) = 1000 × (1/2)³ = 1000 × 0.125 = 125 kg. Exponential changes are rapid!'
        }
      ],
      realWorld: [
        {
          icon: '🔋',
          title: 'Battery Decay',
          description: 'Batteries lose capacity over time: C = C₀(0.95)^t. Engineers model this with exponential decay. After 10 cycles, capacity = 0.95¹⁰ ≈ 60% of original. Critical for device design and battery management systems!'
        },
        {
          icon: '📶',
          title: 'Signal Strength',
          description: 'Radio signals decay with distance: S = S₀(0.5)^(d/100). Engineers use this for communication systems. Signal strength halves every 100 meters. Essential for antenna design and network planning!'
        },
        {
          icon: '💰',
          title: 'Compound Interest',
          description: 'Investments grow exponentially: V = V₀(1.2)^t. $10,000 at 20% per year: After 5 years = $10,000(1.2)⁵ ≈ $24,883. Engineers use this for financial planning and project valuation. Exponential growth is powerful!'
        },
        {
          icon: '⚡',
          title: 'Energy Calculations',
          description: 'Energy equations use exponents: E = mc² (mass-energy), E = ½mv² (kinetic energy), E = mgh (potential energy). Nuclear energy: E = mc² means tiny mass = huge energy! That\'s why nuclear power is so efficient.'
        },
        {
          icon: '📊',
          title: 'Moore\'s Law',
          description: 'Computer transistors double every 2 years: N(t) = N₀ × 2^(t/2). This exponential growth drives technology advancement. Engineers plan future capabilities using exponential models. Technology grows exponentially!'
        }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Algebra & Equations: Logarithms',
    subtitle: 'Inverse of Exponents - Decibels, pH, and Sensors',
    description: 'Understand logarithms - the inverse of exponents, used in decibels, pH, earthquakes, and sensor readings',
    coreIdea: 'Logarithms are the inverse of exponents and compress large ranges into manageable scales',
    engineeringExample: 'Sound levels (decibels), pH scale, earthquake magnitude, sensor calibration',
    learningObjectives: [
      'Define logarithms and understand their relationship to exponents',
      'Apply logarithm rules to simplify expressions',
      'Use logarithms in decibel, pH, and Richter scale calculations',
      'Solve logarithmic equations',
      'Understand logarithmic scales in engineering applications'
    ],
    keyEquations: [
      { eq: '\\log_b(x) = y \\text{ means } b^y = x', meaning: 'Logarithm definition' },
      { eq: '\\log(xy) = \\log(x) + \\log(y)', meaning: 'Product rule' },
      { eq: '\\log(x/y) = \\log(x) - \\log(y)', meaning: 'Quotient rule' },
      { eq: '\\log(x^n) = n \\times \\log(x)', meaning: 'Power rule' },
      { eq: '\\text{dB} = 10 \\times \\log_{10}(I/I_0)', meaning: 'Decibel formula' }
    ],
    practiceProblems: [
      {
        id: '1.6a',
        prompt: 'A sound is 1000 times more intense than threshold I₀. Calculate the decibel level: dB = 10 × log₁₀(I/I₀)',
        solution: 'dB = 10 × log₁₀(1000)\nlog₁₀(1000) = 3 (because 10³ = 1000)\ndB = 10 × 3 = 30 dB\nSound is 30 decibels above threshold',
        hints: ['Find log₁₀(1000) = 3', 'Multiply by 10', 'Decibels use base-10 logarithm']
      },
      {
        id: '1.6b',
        prompt: 'An earthquake has amplitude 10,000 times the reference. Calculate magnitude: M = log₁₀(A/A₀)',
        solution: 'M = log₁₀(10,000)\nlog₁₀(10,000) = 4 (because 10⁴ = 10,000)\nM = 4\nEarthquake magnitude is 4 on Richter scale',
        hints: ['Find log₁₀(10,000) = 4', 'Richter scale uses base-10 logarithm', 'Each unit = 10× amplitude']
      },
      {
        id: '1.6c',
        prompt: 'Simplify: log(x) + log(y) and log(x²)',
        solution: 'log(x) + log(y) = log(xy) (product rule)\nlog(x²) = 2 × log(x) (power rule)\nLogarithms turn multiplication into addition!',
        hints: ['Use product rule for addition', 'Use power rule for exponent', 'Logarithms simplify multiplication']
      }
    ],
    content: {
      intro: 'Understand logarithms - the inverse of exponents, used in decibels, pH, earthquakes, and sensor readings. A logarithm answers the question: "What power do I need?" If 2^x = 8, then x = log₂(8) = 3. Definition: log_b(x) = y means b^y = x. Common logarithms: log₁₀(x) or log(x) - base 10 (most common), ln(x) - natural log, base e ≈ 2.718, log₂(x) - base 2 (computers, binary). Key insight: Logarithms turn multiplication into addition!',
      concepts: [
        {
          title: '🧠 1. What is a Logarithm?',
          explanation: 'A logarithm answers the question: "What power do I need?" If 2^x = 8, then x = log₂(8) = 3. Definition: log_b(x) = y means b^y = x. Common logarithms: log₁₀(x) or log(x) - base 10 (most common), ln(x) - natural log, base e ≈ 2.718, log₂(x) - base 2 (computers, binary). Examples: log₁₀(100) = 2 because 10² = 100, log₁₀(1000) = 3 because 10³ = 1000, ln(e) = 1 because e¹ = e, log₂(8) = 3 because 2³ = 8. Key insight: Logarithms turn multiplication into addition!',
          example: 'If 10^x = 100, then x = log₁₀(100) = 2. If 10^x = 1000, then x = log₁₀(1000) = 3. Logarithms "undo" exponents. They compress large ranges: log₁₀(1,000,000) = 6, even though 1,000,000 is huge!'
        },
        {
          title: '🔧 2. Logarithm Rules & Properties',
          explanation: 'Essential rules: 1. Product Rule: log(xy) = log(x) + log(y). Example: log(100) = log(10×10) = log(10) + log(10) = 1 + 1 = 2. 2. Quotient Rule: log(x/y) = log(x) - log(y). Example: log(100/10) = log(100) - log(10) = 2 - 1 = 1. 3. Power Rule: log(x^n) = n × log(x). Example: log(10³) = 3 × log(10) = 3 × 1 = 3. 4. Change of Base: log_b(x) = log(x) / log(b). 5. Inverse Property: log(10^x) = x and 10^(log x) = x. Special values: log(1) = 0, log(10) = 1, log(0) = undefined.',
          example: 'Simplify log(x) + log(y) = log(xy). This is powerful! Instead of multiplying large numbers, we add their logarithms. Engineers use this for calculations with very large or very small numbers.'
        },
        {
          title: '📊 3. Engineering Applications',
          explanation: 'Decibels (sound): dB = 10 × log₁₀(I/I₀). Sound 1000× more intense = 30 dB. Richter Scale (earthquakes): M = log₁₀(A/A₀). Amplitude 10,000× = magnitude 4. pH Scale (chemistry): pH = -log₁₀[H⁺]. [H⁺] = 0.001 = 10⁻³ gives pH = 3 (acidic). Signal Strength: Power ratio in dB = 10 × log₁₀(P₁/P₂). 100W vs 1W = 20 dB. Sensor Calibration: V = 2 + 3×log₁₀(P) for pressure sensors.',
          example: 'Sound level: A sound 1000 times more intense than threshold: dB = 10 × log₁₀(1000) = 10 × 3 = 30 dB. Earthquake: Amplitude 10,000 times reference: M = log₁₀(10,000) = 4 (magnitude 4 earthquake). pH: [H⁺] = 0.001 = 10⁻³: pH = -log₁₀(10⁻³) = -(-3) = 3 (acidic).'
        }
      ],
      realWorld: [
        {
          icon: '🔊',
          title: 'Sound Levels (Decibels)',
          description: 'Sound intensity uses logarithmic scale: dB = 10 × log₁₀(I/I₀). Engineers use this for noise control, audio systems, and hearing protection. 30 dB = 1000× intensity. Logarithmic scale compresses huge ranges into manageable numbers!'
        },
        {
          icon: '🌊',
          title: 'Earthquake Magnitude (Richter Scale)',
          description: 'Earthquake magnitude: M = log₁₀(A/A₀). Engineers use this for seismic design and building codes. Magnitude 4 = 10,000× reference amplitude. Each unit = 10× amplitude. Logarithmic scale handles huge amplitude variations!'
        },
        {
          icon: '🧪',
          title: 'pH Scale (Chemistry)',
          description: 'Acidity uses logarithmic scale: pH = -log₁₀[H⁺]. Engineers use this for water treatment, chemical processes, and environmental monitoring. pH 3 = [H⁺] = 0.001. Logarithmic scale handles tiny concentration variations!'
        },
        {
          icon: '📡',
          title: 'Signal Strength',
          description: 'Power ratios use logarithmic scale: dB = 10 × log₁₀(P₁/P₂). Engineers use this for communication systems, antennas, and signal processing. 20 dB = 100× power ratio. Logarithmic scale compresses power ranges!'
        },
        {
          icon: '📊',
          title: 'Sensor Calibration',
          description: 'Pressure sensors: V = 2 + 3×log₁₀(P). Engineers use logarithmic scales for sensors with wide dynamic ranges. Doubling pressure increases voltage by 3×log₁₀(2) ≈ 0.9 volts. Logarithmic response handles large pressure variations!'
        }
      ]
    }
  }
};
