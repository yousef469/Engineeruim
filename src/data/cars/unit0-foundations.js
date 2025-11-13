// Unit 0: Foundations - Math & Physics for Automotive (Complete - Lessons 0.1-0.6)

export const unit0Foundations = {
  '0.1': {
    id: '0.1',
    title: 'Foundations: Vehicle Dynamics Fundamentals',
    subtitle: 'Tire Forces and Weight Transfer',
    description: 'Master tire forces, friction circle, weight transfer, and handling dynamics',
    coreIdea: 'Tire forces determine everything - acceleration, braking, cornering all limited by friction',
    learningObjectives: ['Understand tire forces', 'Calculate weight transfer', 'Apply friction circle', 'Analyze understeer/oversteer', 'Optimize handling'],
    keyEquations: [
      { eq: 'F_{tire} = \\mu N', meaning: 'Maximum tire force from friction' },
      { eq: '\\Delta W = \\frac{ma h}{L}', meaning: 'Weight transfer during acceleration' },
      { eq: 'F_x^2 + F_y^2 \\leq (\\mu N)^2', meaning: 'Friction circle constraint' }
    ],
    practiceProblems: [
      { id: '0.1a', prompt: 'Calculate weight transfer for 1500kg car, 1g braking, h=0.5m, L=2.5m', solution: 'ΔW = (1500×9.8×0.5)/2.5 = 2940N', hints: ['Use ΔW=mah/L', 'Convert to Newtons'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['dynamics', 'tires', 'weight-transfer'] }
  },

  '0.2': {
    id: '0.2',
    title: 'Foundations: Powertrain Analysis',
    subtitle: 'Torque, Gears, and Acceleration',
    description: 'Master engine torque curves, gear ratios, and acceleration performance',
    coreIdea: 'Gears multiply torque - optimal shifting maximizes acceleration',
    learningObjectives: ['Read torque curves', 'Calculate gear ratios', 'Optimize shifting', 'Predict acceleration', 'Match powertrain to vehicle'],
    keyEquations: [
      { eq: 'T_{wheel} = T_{engine} \\times i_{gear} \\times i_{final} \\times \\eta', meaning: 'Wheel torque from engine' },
      { eq: 'F_{traction} = \\frac{T_{wheel}}{r_{wheel}}', meaning: 'Traction force' },
      { eq: 'a = \\frac{F_{traction} - F_{drag}}{m}', meaning: 'Acceleration' }
    ],
    practiceProblems: [
      { id: '0.2a', prompt: 'Engine: 200Nm at 3000rpm, gear ratio 3:1, final 4:1, wheel radius 0.3m. Find traction force', solution: 'T_wheel=200×3×4×0.95=2280Nm, F=2280/0.3=7600N', hints: ['Multiply all ratios', 'Include efficiency', 'Divide by radius'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['powertrain', 'gears', 'torque'] }
  },

  '0.3': {
    id: '0.3',
    title: 'Foundations: Suspension Systems',
    subtitle: 'Springs, Dampers, and Ride Quality',
    description: 'Master spring-mass-damper systems, ride comfort vs handling trade-off',
    coreIdea: 'Suspension is a damped oscillator - tune for comfort or performance',
    learningObjectives: ['Understand spring-mass-damper', 'Calculate natural frequency', 'Optimize damping ratio', 'Balance ride vs handling', 'Design suspension geometry'],
    keyEquations: [
      { eq: '\\omega_n = \\sqrt{\\frac{k}{m}}', meaning: 'Natural frequency' },
      { eq: '\\zeta = \\frac{c}{2\\sqrt{km}}', meaning: 'Damping ratio' },
      { eq: 'f_n = \\frac{\\omega_n}{2\\pi}', meaning: 'Natural frequency in Hz' }
    ],
    practiceProblems: [
      { id: '0.3a', prompt: 'Quarter car: m=400kg, k=20kN/m. Find natural frequency', solution: 'ω_n=√(20000/400)=7.07rad/s, f_n=1.13Hz', hints: ['Use ω_n=√(k/m)', 'Convert to Hz'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['suspension', 'damping', 'oscillations'] }
  },

  '0.4': {
    id: '0.4',
    title: 'Foundations: Braking Systems',
    subtitle: 'Friction, Stopping Distance, and ABS',
    description: 'Master braking physics, stopping distance calculations, and ABS operation',
    coreIdea: 'Braking limited by tire friction - ABS prevents lockup for maximum deceleration',
    learningObjectives: ['Calculate stopping distance', 'Understand brake force distribution', 'Analyze ABS operation', 'Calculate heat dissipation', 'Optimize braking performance'],
    keyEquations: [
      { eq: 's = \\frac{v^2}{2\\mu g}', meaning: 'Stopping distance' },
      { eq: 'F_{brake} = \\mu mg', meaning: 'Maximum brake force' },
      { eq: 'E = \\frac{1}{2}mv^2', meaning: 'Kinetic energy to dissipate' }
    ],
    practiceProblems: [
      { id: '0.4a', prompt: 'Car at 100km/h (27.8m/s), μ=0.8. Find stopping distance', solution: 's=v²/(2μg)=(27.8)²/(2×0.8×9.8)=49.3m', hints: ['Convert km/h to m/s', 'Use s=v²/(2μg)'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['braking', 'friction', 'abs'] }
  },

  '0.5': {
    id: '0.5',
    title: 'Foundations: Electric Vehicle Math',
    subtitle: 'Battery, Motor, and Range Calculations',
    description: 'Master EV-specific calculations - battery capacity, motor performance, range',
    coreIdea: 'EVs trade battery weight for range - energy density determines practicality',
    learningObjectives: ['Calculate battery capacity', 'Understand motor torque curves', 'Predict range', 'Optimize charging', 'Compare to ICE vehicles'],
    keyEquations: [
      { eq: 'E = V \\times Ah', meaning: 'Battery energy (Wh)' },
      { eq: 'Range = \\frac{E}{\\text{consumption}}', meaning: 'Range from energy' },
      { eq: 'P = T \\times \\omega', meaning: 'Motor power from torque' }
    ],
    practiceProblems: [
      { id: '0.5a', prompt: 'Battery: 400V, 75Ah. Consumption: 200Wh/km. Find range', solution: 'E=400×75=30kWh, Range=30000/200=150km', hints: ['Calculate total energy', 'Divide by consumption'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['ev', 'battery', 'range'] }
  },

  '0.6': {
    id: '0.6',
    title: 'Foundations: Aerodynamics & Efficiency',
    subtitle: 'Drag, Rolling Resistance, and Fuel Economy',
    description: 'Master vehicle aerodynamics, drag reduction, and fuel economy calculations',
    coreIdea: 'Drag increases with v² - aerodynamics critical at highway speeds',
    learningObjectives: ['Calculate drag force', 'Understand rolling resistance', 'Optimize fuel economy', 'Reduce aerodynamic drag', 'Balance performance vs efficiency'],
    keyEquations: [
      { eq: 'F_D = \\frac{1}{2}\\rho v^2 C_D A', meaning: 'Aerodynamic drag' },
      { eq: 'F_{RR} = C_{RR} mg', meaning: 'Rolling resistance' },
      { eq: 'P = (F_D + F_{RR})v', meaning: 'Power to overcome resistance' }
    ],
    practiceProblems: [
      { id: '0.6a', prompt: 'Car: C_D=0.3, A=2.2m², v=100km/h. Find drag force', solution: 'v=27.8m/s, F_D=½×1.225×(27.8)²×0.3×2.2=311N', hints: ['Convert speed to m/s', 'Use drag equation'] }
    ],
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['aerodynamics', 'drag', 'efficiency'] }
  }
};

export default unit0Foundations;
