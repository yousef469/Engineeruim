// Unit 0: Foundations - Math & Physics for Aircraft (Complete - Lessons 0.1-0.6)
// This file contains all 6 foundation lessons for the Aircraft section

export const unit0Foundations = {
  '0.1': {
    id: '0.1',
    title: 'Foundations: Lift & Drag Fundamentals',
    subtitle: 'How Wings Generate Force',
    description: 'Master Bernoulli\'s equation, airfoil geometry, and aerodynamic efficiency',
    coreIdea: 'Lift comes from pressure difference - faster flow creates lower pressure',
    learningObjectives: ['Understand Bernoulli and lift', 'Calculate lift and drag forces', 'Optimize L/D ratio', 'Apply angle of attack', 'Design for efficiency'],
    keyEquations: [
      { eq: 'L = \\frac{1}{2}\\rho v^2 S C_L', meaning: 'Lift equation' },
      { eq: 'D = \\frac{1}{2}\\rho v^2 S C_D', meaning: 'Drag equation' },
      { eq: '\\frac{L}{D} = \\frac{C_L}{C_D}', meaning: 'Aerodynamic efficiency' }
    ],
    practiceProblems: [
      { id: '0.1a', prompt: 'Calculate C_L for 5000kg aircraft at 70m/s', solution: 'L=mg=49kN, C_L=0.82', hints: ['Use L=½ρv²SC_L', 'Solve for C_L'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['lift', 'drag', 'aerodynamics'] }
  },
  
  '0.2': {
    id: '0.2',
    title: 'Foundations: Flight Dynamics Equations',
    subtitle: '6 Degrees of Freedom',
    description: 'Master the equations of motion for aircraft - forces, moments, and rotations',
    coreIdea: '6-DOF equations describe all aircraft motion - 3 forces, 3 moments',
    learningObjectives: ['Understand 6-DOF motion', 'Calculate forces and moments', 'Apply Euler angles', 'Analyze stability', 'Design control systems'],
    keyEquations: [
      { eq: 'F_x = T\\cos\\alpha - D - mg\\sin\\theta', meaning: 'Longitudinal force' },
      { eq: 'F_z = -T\\sin\\alpha - L + mg\\cos\\theta', meaning: 'Vertical force' },
      { eq: 'M = I\\alpha', meaning: 'Moment equation' }
    ],
    practiceProblems: [
      { id: '0.2a', prompt: 'Calculate pitch moment for elevator deflection', solution: 'M=q×S×c×C_m', hints: ['Use moment coefficient', 'Include dynamic pressure'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['dynamics', '6-DOF', 'equations'] }
  },

  '0.3': {
    id: '0.3',
    title: 'Foundations: Stability & Control',
    subtitle: 'Keeping Aircraft Stable',
    description: 'Learn static and dynamic stability, control surfaces, and autopilot design',
    coreIdea: 'Stability requires center of gravity ahead of center of pressure',
    learningObjectives: ['Understand static stability', 'Analyze dynamic stability', 'Design control surfaces', 'Apply feedback control', 'Prevent instabilities'],
    keyEquations: [
      { eq: 'C_{m\\alpha} < 0', meaning: 'Static stability criterion' },
      { eq: 'x_{cg} < x_{np}', meaning: 'CG must be ahead of neutral point' },
      { eq: 'H(s) = \\frac{K}{s(s+a)}', meaning: 'Control system transfer function' }
    ],
    practiceProblems: [
      { id: '0.3a', prompt: 'Find neutral point for given aircraft', solution: 'x_np = x_ac + stability margin', hints: ['Calculate aerodynamic center', 'Add stability margin'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['stability', 'control', 'autopilot'] }
  },

  '0.4': {
    id: '0.4',
    title: 'Foundations: Propulsion Systems',
    subtitle: 'Thrust and Efficiency',
    description: 'Master propeller and jet engine performance, thrust equations, and fuel consumption',
    coreIdea: 'Thrust = mass flow × velocity change, efficiency depends on propulsion type',
    learningObjectives: ['Calculate propeller thrust', 'Understand jet engines', 'Optimize efficiency', 'Calculate fuel consumption', 'Match engine to mission'],
    keyEquations: [
      { eq: 'T = \\dot{m}(v_e - v_0)', meaning: 'Thrust from momentum change' },
      { eq: '\\eta = \\frac{2}{1 + v_e/v_0}', meaning: 'Propulsive efficiency' },
      { eq: 'TSFC = \\frac{\\dot{m}_f}{T}', meaning: 'Thrust specific fuel consumption' }
    ],
    practiceProblems: [
      { id: '0.4a', prompt: 'Calculate propeller efficiency at cruise', solution: 'η = 2/(1+v_e/v_0) = 0.85', hints: ['Use efficiency formula', 'Compare velocities'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['propulsion', 'thrust', 'efficiency'] }
  },

  '0.5': {
    id: '0.5',
    title: 'Foundations: Performance Calculations',
    subtitle: 'Takeoff, Climb, Range, Endurance',
    description: 'Calculate aircraft performance - distances, rates, range, and endurance',
    coreIdea: 'Performance depends on thrust, drag, and weight - optimize for mission',
    learningObjectives: ['Calculate takeoff distance', 'Find rate of climb', 'Optimize range and endurance', 'Analyze turn performance', 'Design for mission'],
    keyEquations: [
      { eq: 'R = \\frac{L}{D}\\frac{1}{TSFC}\\ln\\frac{W_0}{W_f}', meaning: 'Breguet range equation' },
      { eq: 'RC = \\frac{T-D}{W}v', meaning: 'Rate of climb' },
      { eq: 's_{TO} = \\frac{1.44W^2}{\\rho S C_L T}', meaning: 'Takeoff distance' }
    ],
    practiceProblems: [
      { id: '0.5a', prompt: 'Calculate range for given fuel and L/D', solution: 'R = (L/D)×(1/TSFC)×ln(W₀/W_f)', hints: ['Use Breguet equation', 'Convert units'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['performance', 'range', 'climb'] }
  },

  '0.6': {
    id: '0.6',
    title: 'Foundations: Structural Analysis',
    subtitle: 'Wing Loading and Flight Envelope',
    description: 'Understand wing bending, V-n diagrams, gust loads, and structural limits',
    coreIdea: 'Structure must withstand maximum loads - maneuvers, gusts, and fatigue',
    learningObjectives: ['Calculate wing bending moments', 'Understand V-n diagram', 'Analyze gust loads', 'Apply safety factors', 'Design for fatigue'],
    keyEquations: [
      { eq: 'M = \\frac{1}{2}\\rho v^2 S c C_M', meaning: 'Bending moment' },
      { eq: 'n = \\frac{L}{W}', meaning: 'Load factor' },
      { eq: '\\Delta n = \\frac{\\rho v U C_{L\\alpha}}{2W/S}', meaning: 'Gust load factor' }
    ],
    practiceProblems: [
      { id: '0.6a', prompt: 'Find maximum load factor for given aircraft', solution: 'n_max = 2.5 for transport, 9 for fighter', hints: ['Check aircraft category', 'Apply regulations'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['structures', 'loads', 'v-n-diagram'] }
  }
};

export default unit0Foundations;
