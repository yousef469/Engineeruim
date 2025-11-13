// Unit 0: Foundations - Math & Physics for Rockets (Complete - Lessons 0.1-0.6)

export const unit0Foundations = {
  '0.1': {
    id: '0.1',
    title: 'Foundations: The Rocket Equation',
    subtitle: 'Deriving Tsiolkovsky\'s Equation',
    description: '🚀 The Rocket Equation is THE most important formula in spaceflight! Discovered by Tsiolkovsky in 1903, this elegant equation reveals why rockets need 95% fuel, why staging is essential, and why getting to orbit is so hard. Master this and you understand the fundamental challenge of space travel!',
    coreIdea: 'Δv = v_e × ln(m₀/m_f) - mass ratio determines everything in spaceflight',
    learningObjectives: ['Derive rocket equation', 'Calculate delta-v', 'Understand staging', 'Apply to real rockets', 'Optimize mass ratios'],
    keyEquations: [
      { eq: '\\Delta v = v_e \\ln(m_0/m_f)', meaning: 'Tsiolkovsky rocket equation' },
      { eq: 'R = m_0/m_f', meaning: 'Mass ratio' },
      { eq: '\\Delta v_{total} = \\sum \\Delta v_i', meaning: 'Multi-stage delta-v' }
    ],
    practiceProblems: [
      { id: '0.1a', prompt: 'Rocket: m₀=1000kg, m_f=200kg, v_e=3000m/s. Find Δv', solution: 'Δv=3000×ln(5)=4828m/s', hints: ['Use Δv=v_e×ln(m₀/m_f)', 'ln(5)≈1.609'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '35 min', tags: ['rocket-equation', 'delta-v', 'staging'] }
  },

  '0.2': {
    id: '0.2',
    title: 'Foundations: Orbital Mechanics Math',
    subtitle: 'Kepler\'s Laws and Transfer Orbits',
    description: '🪐 Orbital mechanics is cosmic billiards with math! Every orbit follows precise mathematical laws discovered by Kepler 400 years ago. Understanding these equations lets you calculate orbital periods, plan transfers, and navigate the solar system. This is the mathematics that powers every space mission!',
    coreIdea: 'Orbits follow v=√(GM/r) - simple physics enables complex space missions',
    learningObjectives: ['Apply Kepler\'s laws', 'Use vis-viva equation', 'Calculate transfers', 'Plan trajectories', 'Optimize missions'],
    keyEquations: [
      { eq: 'v = \\sqrt{GM/r}', meaning: 'Circular orbital velocity' },
      { eq: 'v = \\sqrt{GM(2/r - 1/a)}', meaning: 'Vis-viva equation' },
      { eq: 'T = 2\\pi\\sqrt{a^3/GM}', meaning: 'Orbital period' }
    ],
    practiceProblems: [
      { id: '0.2a', prompt: 'ISS at 400km altitude. Find orbital velocity', solution: 'r=6771km, v=√(GM/r)=7.67km/s', hints: ['r=Earth radius+altitude', 'Use v=√(GM/r)'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '40 min', tags: ['orbital-mechanics', 'kepler', 'transfers'] }
  },

  '0.3': {
    id: '0.3',
    title: 'Foundations: Thrust & Gravity Losses',
    subtitle: 'F=ma with Changing Mass',
    description: '⚡ Rockets get faster as they burn fuel - but gravity fights back! Understanding thrust-to-weight ratio (TWR) reveals why Saturn V needed 7.6 million pounds of thrust to lift 6.5 million pounds. Every second fighting gravity wastes precious delta-v. This is the mathematics of acceleration!',
    coreIdea: 'Acceleration increases as mass decreases - but gravity steals delta-v',
    learningObjectives: ['Calculate acceleration', 'Understand TWR', 'Calculate losses', 'Optimize thrust', 'Design trajectories'],
    keyEquations: [
      { eq: 'a = (F-mg)/m', meaning: 'Acceleration with thrust and weight' },
      { eq: 'TWR = F/(mg)', meaning: 'Thrust-to-weight ratio' },
      { eq: '\\Delta v_{loss} = g \\times t', meaning: 'Gravity loss (vertical)' }
    ],
    practiceProblems: [
      { id: '0.3a', prompt: 'Rocket: m=100,000kg, F=1,500,000N. Find TWR and acceleration', solution: 'TWR=1.53, a=5.2m/s²', hints: ['TWR=F/W', 'a=(F-W)/m'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['thrust', 'twr', 'gravity-losses'] }
  },

  '0.4': {
    id: '0.4',
    title: 'Foundations: Nozzle Math & Thermodynamics',
    subtitle: 'From Combustion to Thrust',
    description: '🌪️ Nozzles are where thermodynamics becomes thrust! Hot gases at 3,600K expand through the nozzle, converting thermal energy to kinetic energy. Understanding Isp (specific impulse) reveals why hydrogen engines are efficient but need huge tanks. This is the mathematics of rocket performance!',
    coreIdea: 'Nozzles convert thermal energy to kinetic - expansion ratio determines performance',
    learningObjectives: ['Understand Isp', 'Calculate thrust', 'Optimize nozzles', 'Apply thermodynamics', 'Design engines'],
    keyEquations: [
      { eq: 'F = \\dot{m}v_e + (p_e-p_a)A_e', meaning: 'Thrust equation' },
      { eq: 'I_{sp} = v_e/g_0', meaning: 'Specific impulse' },
      { eq: '\\epsilon = A_e/A_t', meaning: 'Expansion ratio' }
    ],
    practiceProblems: [
      { id: '0.4a', prompt: 'Engine: ṁ=500kg/s, v_e=3500m/s. Find thrust and Isp', solution: 'F=1.75MN, Isp=357s', hints: ['F=ṁ×v_e', 'Isp=v_e/9.8'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['nozzles', 'isp', 'thermodynamics'] }
  },

  '0.5': {
    id: '0.5',
    title: 'Foundations: Trajectory Optimization',
    subtitle: 'Gravity Turn and Launch Windows',
    description: '🎯 The gravity turn is rocket science elegance! Instead of fighting gravity, rockets follow a natural curved path that minimizes losses. Understanding launch windows reveals why Mars missions launch every 26 months and why Cape Canaveral is perfect for ISS launches. This is the mathematics of optimal trajectories!',
    coreIdea: 'Gravity turn follows natural path - minimizes losses by following prograde',
    learningObjectives: ['Understand gravity turn', 'Calculate launch windows', 'Optimize trajectories', 'Plan missions', 'Minimize losses'],
    keyEquations: [
      { eq: '\\theta = \\arctan(v_y/v_x)', meaning: 'Flight path angle' },
      { eq: '\\Delta v_{plane} = 2v\\sin(\\Delta i/2)', meaning: 'Plane change cost' },
      { eq: 'i_{min} = \\text{latitude}', meaning: 'Minimum inclination' }
    ],
    practiceProblems: [
      { id: '0.5a', prompt: 'Launch from 28.5°N. What is minimum inclination?', solution: 'i_min=28.5° (due east launch)', hints: ['Minimum i = launch latitude', 'Cannot go lower without plane change'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['trajectory', 'gravity-turn', 'launch-windows'] }
  },

  '0.6': {
    id: '0.6',
    title: 'Foundations: Structural Loads & Mass Budgets',
    subtitle: 'Engineering the Structure',
    description: '🏗️ Every kilogram of structure is one less kilogram of payload! Rockets experience 5g acceleration and must survive extreme loads while being as light as possible. Understanding structural mass fraction reveals why modern rockets are engineering marvels - 95% fuel, 5% everything else. This is the mathematics of optimization!',
    coreIdea: 'Every kg of structure is one less kg of payload - optimization is critical',
    learningObjectives: ['Calculate loads', 'Optimize mass fraction', 'Design structures', 'Calculate payload', 'Apply safety factors'],
    keyEquations: [
      { eq: 'F_{axial} = m \\times a_{max}', meaning: 'Maximum axial load' },
      { eq: '\\lambda = m_{structure}/m_{total}', meaning: 'Structural mass fraction' },
      { eq: 'm_{payload} = m_f - m_{structure}', meaning: 'Payload capacity' }
    ],
    practiceProblems: [
      { id: '0.6a', prompt: 'Rocket: m=100,000kg, a_max=5g. Find axial load', solution: 'F=m×a=100,000×49=4.9MN', hints: ['F=m×a', 'a_max=5g=49m/s²'] }
    ],
    metadata: { difficulty: 'Hard', estTime: '35 min', tags: ['structures', 'loads', 'mass-budget'] }
  }
};

export default unit0Foundations;
