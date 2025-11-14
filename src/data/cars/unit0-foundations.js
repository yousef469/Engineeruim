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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['dynamics', 'tires', 'weight-transfer'] },
    quiz: {
      questions: [
        { id: "q0-1", question: "What is the formula for kinetic energy?", options: ["E = mv", "E = ½mv²", "E = ma", "E = mgh"], correctAnswer: 1, explanation: "Kinetic energy is E = ½mv². The v² term means energy increases with the square of velocity!" },
        { id: "q0-2", question: "If speed doubles, braking distance increases by:", options: ["2×", "3×", "4×", "8×"], correctAnswer: 2, explanation: "Braking distance ∝ v². Doubling speed means 2² = 4× the braking distance!" },
        { id: "q0-3", question: "What does F = ma tell us?", options: ["Heavier vehicles accelerate faster", "a = F/m; heavier vehicles accelerate slower for same force", "Force and mass are independent", "Acceleration depends only on power"], correctAnswer: 1, explanation: "F = ma means a = F/m. For the same force, heavier vehicles accelerate slower!" },
        { id: "q0-4", question: "Coefficient of friction for dry asphalt:", options: ["0.1-0.2", "0.3-0.5", "0.8-1.0", "1.5-2.0"], correctAnswer: 2, explanation: "Dry asphalt has μ = 0.8-1.0. Wet is 0.5-0.7, ice is 0.1-0.2!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['powertrain', 'gears', 'torque'] },
    quiz: {
      questions: [
        { id: "q1-1", question: "Power, torque, and RPM relationship:", options: ["P = T × N", "P = T × ω (ω = 2πN/60)", "P = T / ω", "P = T + ω"], correctAnswer: 1, explanation: "Power = Torque × Angular Velocity. P = T × ω where ω = 2πN/60!" },
        { id: "q1-2", question: "Why do electric motors have instant torque?", options: ["More power than ICE", "T = k_t × I, independent of RPM", "They use batteries", "No transmission"], correctAnswer: 1, explanation: "Electric motor torque T = k_t × I is independent of RPM. ICE needs to rev up!" },
        { id: "q1-3", question: "Gasoline engine thermal efficiency:", options: ["10-15%", "25-35%", "50-60%", "80-90%"], correctAnswer: 1, explanation: "Gasoline engines are only 25-35% efficient. Electric motors are 95-97%!" },
        { id: "q1-4", question: "Gear ratio 3:1 means:", options: ["Output 3× input speed", "Input 3× output speed; torque multiplied by 3", "Torque divided by 3", "Power multiplied by 3"], correctAnswer: 1, explanation: "3:1 means input rotates 3× for every 1 output. Multiplies torque by 3, divides speed by 3!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['suspension', 'damping', 'oscillations'] },
    quiz: {
      questions: [
        { id: "q2-1", question: "What does suspension do?", options: ["Only provides comfort", "Supports weight, maintains tire contact, controls motion", "Only for off-road", "Reduces speed"], correctAnswer: 1, explanation: "Suspension supports weight, maintains tire contact, controls body motion, and provides comfort!" },
        { id: "q2-2", question: "Spring rate k means:", options: ["Force per displacement (N/m)", "Displacement per force", "Spring weight", "Spring length"], correctAnswer: 0, explanation: "Spring rate k is force per displacement (N/m). Higher k = stiffer spring!" },
        { id: "q2-3", question: "Why use anti-roll bars?", options: ["Increase ride height", "Reduce body roll in corners without affecting ride", "Improve acceleration", "Reduce weight"], correctAnswer: 1, explanation: "Anti-roll bars connect left/right suspension to reduce body roll without affecting ride quality!" },
        { id: "q2-4", question: "Damping controls:", options: ["Spring stiffness", "Oscillation and bouncing", "Ride height", "Tire pressure"], correctAnswer: 1, explanation: "Dampers control oscillation. Without damping, springs would bounce forever!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['braking', 'friction', 'abs'] },
    quiz: {
      questions: [
        { id: "q3-1", question: "Braking distance formula:", options: ["s = v/a", "s = v²/(2a)", "s = 2v/a", "s = v²/a"], correctAnswer: 1, explanation: "Braking distance s = v²/(2a). The v² term means distance increases dramatically with speed!" },
        { id: "q3-2", question: "What does ABS do?", options: ["Increases braking force", "Prevents wheel lockup, maintains steering control", "Reduces brake wear", "Increases brake pressure"], correctAnswer: 1, explanation: "ABS prevents wheel lockup by pulsing brakes 10-15 times/second. Maintains steering control!" },
        { id: "q3-3", question: "Why are front brakes larger?", options: ["Front wheels bigger", "Weight transfers forward; front provides 70% of braking", "Easier to access", "Rear brakes are backup"], correctAnswer: 1, explanation: "Weight transfers forward during braking. Front brakes provide 70%, rear 30%!" },
        { id: "q3-4", question: "Maximum braking deceleration:", options: ["a_max = g", "a_max = μg", "a_max = 2g", "a_max = v²"], correctAnswer: 1, explanation: "Maximum deceleration a_max = μg. On dry road (μ=0.9), that's about 8.8 m/s² or 0.9g!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['ev', 'battery', 'range'] },
    quiz: {
      questions: [
        { id: "q4-1", question: "EV battery energy formula:", options: ["E = V × A", "E = V × Ah", "E = I × t", "E = P × t"], correctAnswer: 1, explanation: "Battery energy E = Voltage × Amp-hours. Tesla Model 3: 350V × 230Ah = 80.5 kWh!" },
        { id: "q4-2", question: "Why are EVs more efficient?", options: ["Lighter weight", "Motor 95-97% efficient vs ICE 25-35%", "Better aerodynamics", "Smaller batteries"], correctAnswer: 1, explanation: "Electric motors are 95-97% efficient. ICE engines are only 25-35%. EVs are 2.5-3× more efficient overall!" },
        { id: "q4-3", question: "Regenerative braking recovers:", options: ["100% of energy", "60-70% of braking energy", "10-20% of energy", "No energy"], correctAnswer: 1, explanation: "Regenerative braking recovers 60-70% of braking energy, extending range significantly!" },
        { id: "q4-4", question: "EV range calculation:", options: ["Range = Battery / Speed", "Range = Battery / Consumption", "Range = Battery × Efficiency", "Range = Battery + Consumption"], correctAnswer: 1, explanation: "Range = Battery Energy / Energy Consumption. Example: 80 kWh / 150 Wh/km = 533 km!" }
      ]
    }
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
    metadata: { difficulty: 'Medium', estTime: '30 min', tags: ['aerodynamics', 'drag', 'efficiency'] },
    quiz: {
      questions: [
        { id: "q5-1", question: "Drag power formula:", options: ["P = F × v", "P = ½ρv³C_D A", "P = ½ρv²C_D A", "P = C_D × v²"], correctAnswer: 1, explanation: "Drag power P = ½ρv³C_D A. The v³ term means power increases dramatically with speed!" },
        { id: "q5-2", question: "Reducing C_D from 0.35 to 0.25 saves:", options: ["5% fuel", "15% fuel at highway speeds", "30% fuel", "50% fuel"], correctAnswer: 1, explanation: "29% reduction in C_D saves about 15% fuel at highway speeds where drag dominates!" },
        { id: "q5-3", question: "Rolling resistance formula:", options: ["F_rr = C_rr × v", "F_rr = C_rr × mg", "F_rr = C_rr × v²", "F_rr = C_rr / m"], correctAnswer: 1, explanation: "Rolling resistance F_rr = C_rr × mg. Nearly constant with speed, typical C_rr = 0.010-0.015!" },
        { id: "q5-4", question: "Most efficient highway speed:", options: ["60 km/h", "80-90 km/h", "120 km/h", "150 km/h"], correctAnswer: 1, explanation: "80-90 km/h is most efficient. At 120 km/h, fuel consumption is 70% higher due to drag!" }
      ]
    }
  }
};

export default unit0Foundations;
