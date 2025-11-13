// Unit 6: Advanced Calculus (Lessons 28-32) - FULL VERSION
export const unit6Lessons = {
  28: {
    id: 28,
    title: 'Advanced Calculus: Partial Derivatives',
    subtitle: 'Functions with Multiple Variables',
    description: 'Real engineering problems have multiple variables! Learn partial derivatives to optimize designs, analyze heat flow, and understand how changing one variable affects the whole system',
    coreIdea: 'Partial derivatives measure how a function changes when you vary ONE variable while keeping others constant',
    engineeringExample: 'Heat transfer, aerodynamics, optimization, thermodynamics',
    learningObjectives: [
      'Understand functions of multiple variables',
      'Calculate partial derivatives with respect to each variable',
      'Interpret partial derivatives in engineering contexts',
      'Apply partial derivatives to optimization problems',
      'Use gradient vectors for multivariable analysis'
    ],
    keyEquations: [
      { eq: '\\frac{\\partial f}{\\partial x}', meaning: 'Partial derivative with respect to x (hold y constant)' },
      { eq: '\\frac{\\partial f}{\\partial y}', meaning: 'Partial derivative with respect to y (hold x constant)' },
      { eq: '\\nabla f = \\left[\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right]', meaning: 'Gradient vector (direction of steepest increase)' },
      { eq: 'T(x,y,t) = T_0 e^{-kt}\\cos(x)\\cos(y)', meaning: 'Temperature distribution function' }
    ],
    practiceProblems: [
      {
        id: '6.28a',
        prompt: 'Temperature T(x,y) = x² + 2y². Find ∂T/∂x and ∂T/∂y at point (3,2).',
        solution: 'Step 1: Find ∂T/∂x (treat y as constant)\n∂T/∂x = 2x\nAt (3,2): ∂T/∂x = 2(3) = 6°C/m\n\nStep 2: Find ∂T/∂y (treat x as constant)\n∂T/∂y = 4y\nAt (3,2): ∂T/∂y = 4(2) = 8°C/m\n\nInterpretation:\nMoving in x-direction: temperature increases 6°C per meter\nMoving in y-direction: temperature increases 8°C per meter\nY-direction has steeper temperature gradient!',
        hints: ['Treat other variables as constants', 'Use power rule for each variable', 'Evaluate at the given point']
      },
      {
        id: '6.28b',
        prompt: 'Pressure P(x,y) = 100 - x² - y². Find the gradient ∇P at (2,3).',
        solution: 'Step 1: Find partial derivatives\n∂P/∂x = -2x\n∂P/∂y = -2y\n\nStep 2: Evaluate at (2,3)\n∂P/∂x = -2(2) = -4\n∂P/∂y = -2(3) = -6\n\nStep 3: Gradient vector\n∇P = [-4, -6]\n\nInterpretation:\nPressure decreases fastest in direction [-4, -6]\nMagnitude: |∇P| = √(16+36) = √52 ≈ 7.2 Pa/m\nThis is the steepest pressure drop direction!',
        hints: ['Calculate both partial derivatives', 'Evaluate at the point', 'Gradient = vector of partial derivatives']
      },
      {
        id: '6.28c',
        prompt: 'Drag force F(v,A) = 0.5ρv²A. Find ∂F/∂v and ∂F/∂A. What do they mean?',
        solution: 'Given: F(v,A) = 0.5ρv²A (ρ = air density, constant)\n\nStep 1: ∂F/∂v (how force changes with velocity)\n∂F/∂v = 0.5ρ(2v)A = ρvA\n\nStep 2: ∂F/∂A (how force changes with area)\n∂F/∂A = 0.5ρv²\n\nInterpretation:\n∂F/∂v = ρvA: Doubling velocity increases force by 2ρvA\n∂F/∂A = 0.5ρv²: Doubling area increases force by 0.5ρv²\nVelocity has stronger effect (appears in derivative)!',
        hints: ['Treat other variables as constants', 'Use power rule', 'Interpret physical meaning']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['partial-derivatives', 'multivariable', 'gradient'] },
    content: {
      intro: 'Real engineering problems have multiple variables! Temperature depends on x, y, z, and time. Drag depends on velocity AND area. Learn partial derivatives to handle these complex relationships!',
      concepts: [
        {
          title: '🧠 Functions of Multiple Variables',
          explanation: 'Most engineering functions depend on MULTIPLE variables! Temperature: T(x, y, z, t) depends on position (x,y,z) and time (t). Drag Force: F(v, A) = 0.5ρv²A depends on velocity (v) and area (A). Pressure: P(x, y) varies with position. PARTIAL DERIVATIVE: Measures how function changes when you vary ONE variable while keeping others CONSTANT. Notation: ∂f/∂x means "derivative with respect to x, holding y constant". The ∂ symbol (not d) indicates partial derivative.',
          example: 'Temperature T(x,y) = x² + 2y². At point (3,2): ∂T/∂x = 2x = 6°C/m (rate in x-direction). ∂T/∂y = 4y = 8°C/m (rate in y-direction). Temperature increases faster in y-direction!'
        },
        {
          title: '🔧 Calculating Partial Derivatives',
          explanation: 'RULE: Treat other variables as CONSTANTS! Example: f(x,y) = x²y + 3xy². Find ∂f/∂x: Treat y as constant. ∂f/∂x = 2xy + 3y². Find ∂f/∂y: Treat x as constant. ∂f/∂y = x² + 6xy. GRADIENT VECTOR: ∇f = [∂f/∂x, ∂f/∂y] points in direction of steepest increase. Magnitude |∇f| = rate of steepest increase.',
          example: 'Pressure P(x,y) = 100 - x² - y². ∂P/∂x = -2x, ∂P/∂y = -2y. At (2,3): ∇P = [-4, -6]. Pressure drops fastest in direction [-4, -6]!'
        },
        {
          title: '✈️ Engineering Applications',
          explanation: 'AERODYNAMICS: Drag F(v,A) = 0.5ρv²A. ∂F/∂v = ρvA (how drag changes with speed). ∂F/∂A = 0.5ρv² (how drag changes with area). HEAT TRANSFER: Temperature T(x,y,t). ∂T/∂t = rate of temperature change. ∂T/∂x, ∂T/∂y = spatial temperature gradients. OPTIMIZATION: Find minimum by setting ∂f/∂x = 0 and ∂f/∂y = 0.',
          example: 'Rocket drag: F(v,A) = 0.5ρv²A. At v=100 m/s, A=2 m²: ∂F/∂v = ρ(100)(2) = 200ρ. Small velocity increase causes large drag increase!'
        }
      ],
      realWorld: [
        {
          icon: '🌡️',
          title: 'Heat Transfer Analysis',
          description: 'Temperature T(x,y,z,t) depends on position and time. ∂T/∂t = rate of heating/cooling. ∇T = [∂T/∂x, ∂T/∂y, ∂T/∂z] = heat flow direction. Engineers use partial derivatives to design cooling systems, predict temperature distributions, and optimize thermal management.'
        },
        {
          icon: '✈️',
          title: 'Aerodynamic Optimization',
          description: 'Drag F(v,A,shape) depends on multiple factors. ∂F/∂A shows how changing wing area affects drag. ∂F/∂v shows velocity sensitivity. Engineers optimize aircraft design by analyzing partial derivatives to minimize drag while maintaining lift.'
        },
        {
          icon: '🚀',
          title: 'Rocket Trajectory',
          description: 'Position r(t,θ,v₀) depends on time, angle, initial velocity. ∂r/∂θ shows how launch angle affects range. ∂r/∂v₀ shows velocity sensitivity. Engineers use partial derivatives to optimize launch parameters for maximum range or specific targets.'
        },
        {
          icon: '⚡',
          title: 'Electrical Power Systems',
          description: 'Power P(V,I,R) = VI = V²/R = I²R. ∂P/∂V shows voltage sensitivity. ∂P/∂I shows current sensitivity. Engineers use partial derivatives to optimize power delivery, minimize losses, and design efficient electrical systems.'
        },
        {
          icon: '🏗️',
          title: 'Structural Optimization',
          description: 'Stress σ(F,A,L) depends on force, area, length. ∂σ/∂A shows how changing cross-section affects stress. Engineers use partial derivatives to optimize structural designs, minimize weight while maintaining strength, and ensure safety.'
        }
      ]
    }
  },
  29: {
    id: 29,
    title: 'Advanced Calculus: Multiple Integrals',
    subtitle: 'Volume, Mass, and Area Calculations',
    description: 'Single integrals find area under curves. Double integrals find volume under surfaces! Learn to calculate mass, center of gravity, and total quantities in 2D and 3D',
    coreIdea: 'Multiple integrals extend integration to 2D and 3D - essential for volume, mass, and center of mass calculations',
    engineeringExample: 'Volume calculations, mass distribution, center of gravity, fluid flow',
    learningObjectives: [
      'Understand double integrals as volume under surfaces',
      'Calculate double integrals over rectangular regions',
      'Apply double integrals to find mass and center of mass',
      'Use triple integrals for 3D volume calculations',
      'Apply multiple integrals to engineering problems'
    ],
    keyEquations: [
      { eq: '\\iint_R f(x,y) \\, dA', meaning: 'Double integral over region R' },
      { eq: '\\int_a^b \\int_c^d f(x,y) \\, dy \\, dx', meaning: 'Double integral with limits' },
      { eq: 'V = \\iint_R h(x,y) \\, dA', meaning: 'Volume under surface h(x,y)' },
      { eq: 'm = \\iint_R \\rho(x,y) \\, dA', meaning: 'Mass with density ρ(x,y)' }
    ],
    practiceProblems: [
      {
        id: '6.29a',
        prompt: 'Find volume under surface z = 4 - x² - y² over rectangle [0,1] × [0,1].',
        solution: 'Volume = ∫₀¹ ∫₀¹ (4 - x² - y²) dy dx\n\nStep 1: Inner integral (integrate with respect to y)\n∫₀¹ (4 - x² - y²) dy = [4y - x²y - y³/3]₀¹\n= 4(1) - x²(1) - 1/3 = 4 - x² - 1/3 = 11/3 - x²\n\nStep 2: Outer integral (integrate with respect to x)\n∫₀¹ (11/3 - x²) dx = [11x/3 - x³/3]₀¹\n= 11/3 - 1/3 = 10/3 ≈ 3.33 cubic units\n\nAnswer: Volume = 10/3 ≈ 3.33 cubic units',
        hints: ['Integrate inner integral first', 'Treat x as constant for inner integral', 'Then integrate result with respect to x']
      },
      {
        id: '6.29b',
        prompt: 'Plate with density ρ(x,y) = x + y over [0,2] × [0,3]. Find total mass.',
        solution: 'Mass = ∫₀² ∫₀³ (x + y) dy dx\n\nStep 1: Inner integral\n∫₀³ (x + y) dy = [xy + y²/2]₀³\n= x(3) + 9/2 = 3x + 4.5\n\nStep 2: Outer integral\n∫₀² (3x + 4.5) dx = [3x²/2 + 4.5x]₀²\n= 3(4)/2 + 4.5(2) = 6 + 9 = 15 kg\n\nAnswer: Total mass = 15 kg',
        hints: ['Mass = integral of density', 'Integrate inner first', 'Units: kg if density in kg/m²']
      }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['double-integrals', 'volume', 'mass', 'area'] },
    content: {
      intro: 'Single integrals find area under curves. Double integrals find volume under surfaces! Triple integrals work in 3D. Master these for mass, volume, and center of gravity calculations!',
      concepts: [
        {
          title: '🧠 What are Multiple Integrals?',
          explanation: 'SINGLE INTEGRAL: ∫ f(x) dx = area under curve. DOUBLE INTEGRAL: ∬ f(x,y) dA = volume under surface. TRIPLE INTEGRAL: ∭ f(x,y,z) dV = total quantity in 3D space. NOTATION: ∬_R f(x,y) dA means integrate over region R. dA = dx dy (or dy dx) = small area element. ORDER MATTERS: ∫∫ f(x,y) dy dx means integrate y first, then x.',
          example: 'Volume under z = 4 - x² - y² over [0,1]×[0,1]: V = ∫₀¹ ∫₀¹ (4 - x² - y²) dy dx = 10/3 cubic units. This is the volume of the solid!'
        },
        {
          title: '🔧 Calculating Double Integrals',
          explanation: 'STEP-BY-STEP METHOD: 1. Set up limits: ∫ₐᵇ ∫_c^d f(x,y) dy dx. 2. Inner integral: Integrate with respect to y (treat x as constant). 3. Outer integral: Integrate result with respect to x. EXAMPLE: ∫₀² ∫₀³ (x + y) dy dx. Inner: ∫₀³ (x + y) dy = [xy + y²/2]₀³ = 3x + 4.5. Outer: ∫₀² (3x + 4.5) dx = 15.',
          example: 'Mass of plate: ρ(x,y) = x + y over [0,2]×[0,3]. m = ∫₀² ∫₀³ (x + y) dy dx = 15 kg. Density varies with position!'
        },
        {
          title: '✈️ Engineering Applications',
          explanation: 'VOLUME: V = ∬ h(x,y) dA (volume under surface). MASS: m = ∬ ρ(x,y) dA (density × area). CENTER OF MASS: x̄ = (1/m)∬ xρ(x,y) dA. FLUID FLOW: Q = ∬ v(x,y) dA (velocity × area). FORCE: F = ∬ p(x,y) dA (pressure × area).',
          example: 'Aircraft wing: Lift = ∬ p(x,y) dA where p(x,y) = pressure distribution. Engineers integrate pressure over wing area to find total lift force!'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Wing Design',
          description: 'Lift force = ∬ p(x,y) dA where p(x,y) is pressure distribution over wing. Engineers use double integrals to calculate total lift, optimize wing shape, and ensure sufficient lift for flight. Pressure varies across wing surface!'
        },
        {
          icon: '🚀',
          title: 'Rocket Mass Distribution',
          description: 'Total mass = ∬ ρ(x,y) dA where ρ varies with position. Center of mass = (1/m)∬ xρ(x,y) dA. Engineers use double integrals to find center of gravity, ensure stability, and optimize fuel distribution.'
        },
        {
          icon: '🏗️',
          title: 'Structural Load Analysis',
          description: 'Total load = ∬ w(x,y) dA where w(x,y) is distributed load. Engineers use double integrals to calculate total force on structures, design support systems, and ensure safety under varying loads.'
        },
        {
          icon: '💧',
          title: 'Fluid Flow Calculations',
          description: 'Flow rate = ∬ v(x,y) dA where v(x,y) is velocity field. Engineers use double integrals to calculate total flow through pipes, design pumping systems, and optimize fluid transport.'
        },
        {
          icon: '🌡️',
          title: 'Heat Transfer',
          description: 'Total heat = ∬ q(x,y) dA where q(x,y) is heat flux. Engineers use double integrals to calculate total heat transfer, design cooling systems, and optimize thermal management in electronics and engines.'
        }
      ]
    }
  }
};

export default unit6Lessons;

unit6Lessons[30] = {
  id: 30,
  title: 'Advanced Calculus: Chain Rule & Implicit Differentiation',
  subtitle: 'Complex Relationships',
  description: 'Real systems have nested relationships! Temperature depends on position which depends on time. Learn chain rule and implicit differentiation for complex engineering systems',
  coreIdea: 'Chain rule handles composite functions; implicit differentiation handles equations where variables are mixed',
  engineeringExample: 'Related rates, optimization, thermodynamics, kinematics',
  learningObjectives: [
    'Apply chain rule to composite functions',
    'Use implicit differentiation for mixed equations',
    'Solve related rates problems',
    'Apply to thermodynamic relationships',
    'Handle complex engineering relationships'
  ],
  keyEquations: [
    { eq: '\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}', meaning: 'Chain rule for composite functions' },
    { eq: '\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)', meaning: 'Chain rule notation' },
    { eq: 'x^2 + y^2 = r^2 \\Rightarrow 2x + 2y\\frac{dy}{dx} = 0', meaning: 'Implicit differentiation example' }
  ],
  practiceProblems: [
    {
      id: '6.30a',
      prompt: 'Temperature T = 100 - 0.5h where h = 10t². Find dT/dt at t = 2s.',
      solution: 'Chain rule: dT/dt = (dT/dh)(dh/dt)\n\nStep 1: Find dT/dh\nT = 100 - 0.5h\ndT/dh = -0.5\n\nStep 2: Find dh/dt\nh = 10t²\ndh/dt = 20t\nAt t=2: dh/dt = 40 m/s\n\nStep 3: Apply chain rule\ndT/dt = (-0.5)(40) = -20°C/s\n\nAnswer: Temperature dropping at 20°C/s',
      hints: ['Identify nested relationship', 'Find each derivative separately', 'Multiply using chain rule']
    },
    {
      id: '6.30b',
      prompt: 'Circle x² + y² = 25. Find dy/dx using implicit differentiation.',
      solution: 'Step 1: Differentiate both sides with respect to x\nd/dx[x² + y²] = d/dx[25]\n\nStep 2: Apply differentiation\n2x + 2y(dy/dx) = 0\n\nStep 3: Solve for dy/dx\n2y(dy/dx) = -2x\ndy/dx = -x/y\n\nInterpretation: Slope of circle at any point (x,y)\nAt (3,4): dy/dx = -3/4\nAt (0,5): dy/dx = 0 (horizontal tangent)',
      hints: ['Differentiate both sides', 'Remember dy/dx when differentiating y', 'Solve for dy/dx']
    }
  ],
  metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['chain-rule', 'implicit-differentiation', 'related-rates'] },
  content: {
    intro: 'Real systems have nested relationships! Temperature depends on altitude which depends on time. Pressure depends on volume which depends on temperature. Master chain rule and implicit differentiation!',
    concepts: [
      {
        title: '🧠 Chain Rule - Nested Functions',
        explanation: 'CHAIN RULE: When one variable depends on another which depends on a third! Formula: dy/dx = (dy/du)(du/dx). EXAMPLE: Temperature T depends on height h which depends on time t. T = 100 - 0.5h, h = 10t². Find dT/dt: dT/dh = -0.5, dh/dt = 20t. Chain rule: dT/dt = (-0.5)(20t) = -10t°C/s.',
        example: 'Rocket altitude: h = 100t², Temperature: T = 300 - 0.01h. At t=10s: dh/dt = 2000 m/s, dT/dt = (dT/dh)(dh/dt) = (-0.01)(2000) = -20°C/s. Temperature dropping fast!'
      },
      {
        title: '🔧 Implicit Differentiation',
        explanation: 'IMPLICIT DIFFERENTIATION: When x and y are mixed in equation! Circle: x² + y² = 25. Can\'t solve for y easily! Differentiate both sides: 2x + 2y(dy/dx) = 0. Solve: dy/dx = -x/y. This gives slope at any point on circle!',
        example: 'Ellipse: x²/4 + y²/9 = 1. Differentiate: (2x/4) + (2y/9)(dy/dx) = 0. Solve: dy/dx = -9x/(4y). At (1,3√3/2): slope = -9(1)/(4·3√3/2) = -√3/2.'
      },
      {
        title: '✈️ Related Rates Problems',
        explanation: 'RELATED RATES: Multiple quantities changing with time! Balloon inflating: V = (4/3)πr³. Given dr/dt, find dV/dt. Differentiate: dV/dt = 4πr²(dr/dt). If r=10cm, dr/dt=2cm/s: dV/dt = 4π(100)(2) = 800π cm³/s.',
        example: 'Rocket distance from observer: s² = x² + h². Given dh/dt = 100 m/s, find ds/dt. Differentiate: 2s(ds/dt) = 2h(dh/dt). Solve: ds/dt = (h/s)(dh/dt).'
      }
    ],
    realWorld: [
      {
        icon: '🎈',
        title: 'Balloon Inflation',
        description: 'Balloon radius increases at constant rate. Volume V = (4/3)πr³ increases faster as balloon gets bigger! dV/dt = 4πr²(dr/dt). Engineers use related rates to design inflation systems, predict expansion rates, and control pressure.'
      },
      {
        icon: '🚀',
        title: 'Rocket Tracking',
        description: 'Rocket altitude h changes with time. Distance from observer s² = x² + h². Chain rule: ds/dt = (h/s)(dh/dt). Tracking stations use related rates to monitor rocket velocity and predict trajectories.'
      },
      {
        icon: '🌡️',
        title: 'Temperature Changes',
        description: 'Temperature T depends on altitude h which depends on time t. Chain rule: dT/dt = (dT/dh)(dh/dt). Meteorologists use chain rule to predict temperature changes, analyze weather patterns, and forecast conditions.'
      },
      {
        icon: '⚡',
        title: 'Electrical Circuits',
        description: 'Power P = I²R where I depends on time. Chain rule: dP/dt = 2IR(dI/dt). Engineers use chain rule to analyze transient responses, design control systems, and optimize power delivery.'
      },
      {
        icon: '💧',
        title: 'Fluid Tank Drainage',
        description: 'Tank volume V depends on height h. Flow rate dV/dt = A(dh/dt) where A is cross-sectional area. Engineers use related rates to design drainage systems, predict emptying times, and control flow rates.'
      }
    ]
  }
};

unit6Lessons[31] = {
  id: 31,
  title: 'Advanced Calculus: Optimization with Constraints',
  subtitle: 'Lagrange Multipliers',
  description: 'Find the best design under constraints! Maximize fuel efficiency while maintaining thrust. Minimize weight while ensuring strength. Learn Lagrange multipliers for constrained optimization',
  coreIdea: 'Lagrange multipliers find optimal values when you have constraints (maximize/minimize f subject to g = constant)',
  engineeringExample: 'Design optimization, resource allocation, efficiency maximization',
  learningObjectives: [
    'Understand constrained optimization problems',
    'Apply Lagrange multiplier method',
    'Find critical points with constraints',
    'Interpret Lagrange multipliers physically',
    'Solve engineering optimization problems'
  ],
  keyEquations: [
    { eq: '\\nabla f = \\lambda \\nabla g', meaning: 'Lagrange multiplier condition' },
    { eq: 'L(x,y,\\lambda) = f(x,y) - \\lambda(g(x,y) - c)', meaning: 'Lagrangian function' },
    { eq: '\\frac{\\partial L}{\\partial x} = 0, \\frac{\\partial L}{\\partial y} = 0, \\frac{\\partial L}{\\partial \\lambda} = 0', meaning: 'Critical point conditions' }
  ],
  practiceProblems: [
    {
      id: '6.31a',
      prompt: 'Maximize f(x,y) = xy subject to constraint x + y = 10.',
      solution: 'Step 1: Set up Lagrangian\nL = xy - λ(x + y - 10)\n\nStep 2: Find partial derivatives\n∂L/∂x = y - λ = 0 → y = λ\n∂L/∂y = x - λ = 0 → x = λ\n∂L/∂λ = -(x + y - 10) = 0 → x + y = 10\n\nStep 3: Solve system\nFrom first two: x = y = λ\nFrom third: x + x = 10 → x = 5\nTherefore: x = 5, y = 5\n\nStep 4: Find maximum value\nf(5,5) = 5(5) = 25\n\nAnswer: Maximum is 25 at (5,5)',
      hints: ['Set up Lagrangian L = f - λ(g - c)', 'Take partial derivatives', 'Solve system of equations', 'Verify it\'s a maximum']
    }
  ],
  metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['optimization', 'lagrange-multipliers', 'constraints'] },
  content: {
    intro: 'Real engineering has constraints! Maximize efficiency while maintaining safety. Minimize cost while meeting performance. Lagrange multipliers solve these constrained optimization problems!',
    concepts: [
      {
        title: '🧠 Constrained Optimization',
        explanation: 'PROBLEM TYPE: Maximize/minimize f(x,y) subject to constraint g(x,y) = c. EXAMPLE: Maximize area xy subject to perimeter x + y = 10. Can\'t just set derivatives to zero - must respect constraint! LAGRANGE MULTIPLIER METHOD: Introduce new variable λ (lambda). Set up: ∇f = λ∇g. Solve system of equations.',
        example: 'Maximize xy subject to x + y = 10. Solution: x = y = 5, maximum = 25. Square has maximum area for given perimeter!'
      },
      {
        title: '🔧 Lagrange Multiplier Method',
        explanation: 'STEPS: 1. Set up Lagrangian: L = f(x,y) - λ(g(x,y) - c). 2. Find partial derivatives: ∂L/∂x = 0, ∂L/∂y = 0, ∂L/∂λ = 0. 3. Solve system of 3 equations. 4. Check if maximum or minimum. INTERPRETATION: λ tells you how much objective changes per unit constraint change!',
        example: 'Minimize cylinder surface area with fixed volume. Optimal: r ≈ 5.42 cm, h ≈ 10.84 cm. This minimizes material while maintaining volume!'
      },
      {
        title: '✈️ Engineering Applications',
        explanation: 'AIRCRAFT DESIGN: Minimize drag subject to lift = weight. ROCKET DESIGN: Maximize payload subject to fuel constraint. STRUCTURAL: Minimize weight subject to strength requirement. ELECTRICAL: Maximize power transfer subject to voltage limit.',
        example: 'Wing design: Minimize drag D(shape) subject to lift L(shape) = weight. Lagrange multipliers find optimal wing shape!'
      }
    ],
    realWorld: [
      {
        icon: '✈️',
        title: 'Aircraft Wing Optimization',
        description: 'Minimize drag D(shape) subject to lift L(shape) = weight. Lagrange multipliers find optimal wing shape that minimizes fuel consumption while providing sufficient lift. Engineers use this for fuel-efficient aircraft design.'
      },
      {
        icon: '🚀',
        title: 'Rocket Payload Optimization',
        description: 'Maximize payload mass subject to fuel constraint and structural limits. Lagrange multipliers optimize rocket design for maximum cargo capacity while maintaining safety and performance requirements.'
      },
      {
        icon: '🏗️',
        title: 'Structural Design',
        description: 'Minimize material cost subject to strength and safety constraints. Lagrange multipliers find optimal beam dimensions, truss configurations, and material distributions that minimize cost while ensuring structural integrity.'
      },
      {
        icon: '⚡',
        title: 'Power System Optimization',
        description: 'Maximize power transfer subject to voltage and current limits. Lagrange multipliers optimize electrical systems for maximum efficiency while respecting safety constraints and component ratings.'
      },
      {
        icon: '🏭',
        title: 'Manufacturing Optimization',
        description: 'Minimize production cost subject to quality and output constraints. Lagrange multipliers optimize manufacturing processes, resource allocation, and production schedules for maximum profitability while meeting requirements.'
      }
    ]
  }
};

unit6Lessons[32] = {
  id: 32,
  title: 'Advanced Calculus: Taylor Series & Approximations',
  subtitle: 'Approximating Complex Functions',
  description: 'Can\'t solve exactly? Approximate! Taylor series lets you approximate sin, cos, e^x, and complex functions using simple polynomials. Essential for numerical methods and computer calculations',
  coreIdea: 'Taylor series approximates functions using polynomials - more terms = better approximation',
  engineeringExample: 'Numerical methods, computer calculations, small angle approximations',
  learningObjectives: [
    'Understand Taylor series as polynomial approximations',
    'Calculate Taylor series for common functions',
    'Use small angle approximations in engineering',
    'Estimate error in approximations',
    'Apply Taylor series to numerical methods'
  ],
  keyEquations: [
    { eq: 'f(x) \\approx f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2!}(x-a)^2 + ...', meaning: 'Taylor series around point a' },
    { eq: 'e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...', meaning: 'Taylor series for e^x' },
    { eq: '\\sin(x) \\approx x - \\frac{x^3}{6} + \\frac{x^5}{120} - ...', meaning: 'Taylor series for sin(x)' },
    { eq: '\\cos(x) \\approx 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - ...', meaning: 'Taylor series for cos(x)' }
  ],
  practiceProblems: [
    {
      id: '6.32a',
      prompt: 'Approximate sin(0.1) using first 3 terms of Taylor series.',
      solution: 'Taylor series: sin(x) ≈ x - x³/6 + x⁵/120\n\nFor x = 0.1:\nTerm 1: x = 0.1\nTerm 2: -x³/6 = -(0.1)³/6 = -0.001/6 ≈ -0.000167\nTerm 3: x⁵/120 = (0.1)⁵/120 = 0.00001/120 ≈ 0.00000008\n\nSum: 0.1 - 0.000167 + 0.00000008 ≈ 0.099833\n\nActual: sin(0.1) ≈ 0.099833\nError: < 0.000001 (excellent!)\n\nAnswer: sin(0.1) ≈ 0.0998',
      hints: ['Use Taylor series for sin(x)', 'Calculate each term', 'Sum the terms', 'Compare with calculator']
    }
  ],
  metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['taylor-series', 'approximations', 'numerical-methods'] },
  content: {
    intro: 'Computers can\'t calculate sin, cos, e^x exactly! They use Taylor series - polynomial approximations. More terms = better accuracy. Learn the math behind every calculator!',
    concepts: [
      {
        title: '🧠 What is Taylor Series?',
        explanation: 'IDEA: Approximate complex functions using simple polynomials! TAYLOR SERIES: f(x) ≈ f(a) + f\'(a)(x-a) + f\'\'(a)(x-a)²/2! + ... COMMON SERIES: e^x = 1 + x + x²/2! + x³/3! + ... sin(x) = x - x³/3! + x⁵/5! - ... cos(x) = 1 - x²/2! + x⁴/4! - ... MORE TERMS = BETTER APPROXIMATION!',
        example: 'sin(0.1) ≈ 0.1 - (0.1)³/6 = 0.1 - 0.000167 ≈ 0.0998. Actual: 0.0998. Error: 0.00003 (0.03%)!'
      },
      {
        title: '🔧 Small Angle Approximations',
        explanation: 'ENGINEERING TRICK: For small angles (< 10°): sin(θ) ≈ θ, cos(θ) ≈ 1, tan(θ) ≈ θ. EXAMPLE: θ = 5° = 0.0873 rad. sin(0.0873) ≈ 0.0873 (error: 0.11%). cos(0.0873) ≈ 1 (error: 0.38%). Engineers use this to simplify calculations!',
        example: 'Pendulum: θ small → sin(θ) ≈ θ. Equation simplifies: d²θ/dt² = -(g/L)θ. Simple harmonic motion!'
      },
      {
        title: '✈️ Engineering Applications',
        explanation: 'COMPUTER CALCULATIONS: Calculators use Taylor series for sin, cos, e^x. NUMERICAL METHODS: Approximate solutions to differential equations. LINEARIZATION: Approximate nonlinear systems near operating point. ERROR ESTIMATION: Predict accuracy of approximations.',
        example: 'Flight control: Small angle → sin(θ) ≈ θ. Simplifies control equations, enables real-time calculations, improves response time!'
      }
    ],
    realWorld: [
      {
        icon: '💻',
        title: 'Computer Calculations',
        description: 'Every calculator and computer uses Taylor series! sin, cos, e^x, ln(x) all calculated using polynomial approximations. More terms = higher precision. Engineers choose number of terms based on required accuracy and computation time.'
      },
      {
        icon: '✈️',
        title: 'Flight Control Systems',
        description: 'Small angle approximations simplify aircraft dynamics. sin(θ) ≈ θ linearizes equations, enables real-time control, and improves response. Flight controllers use Taylor series for fast, accurate calculations during flight.'
      },
      {
        icon: '🚀',
        title: 'Rocket Trajectory',
        description: 'Trajectory calculations use Taylor series for trigonometric functions. Small angle approximations simplify guidance equations. Numerical integration uses Taylor series for accurate position and velocity predictions.'
      },
      {
        icon: '⚡',
        title: 'Circuit Analysis',
        description: 'Nonlinear circuits linearized using Taylor series. Small signal analysis uses first-order approximation. Engineers predict circuit behavior near operating point using Taylor expansion of nonlinear components.'
      },
      {
        icon: '🔬',
        title: 'Scientific Computing',
        description: 'Numerical methods rely on Taylor series. Differential equation solvers use Taylor expansion. Error estimation uses higher-order terms. Scientists balance accuracy and computational cost using Taylor series approximations.'
      }
    ]
  }
};
