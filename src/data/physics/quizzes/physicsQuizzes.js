// Physics Quizzes for lessons 1-33
export const physicsQuizzes = {
  1: {
    lessonId: 1,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the difference between distance and displacement?', options: ['Distance is total path traveled, displacement is straight-line distance from start', 'They are the same thing', 'Distance is in meters, displacement is in kilometers', 'Displacement is always larger than distance'], correctAnswer: 0, explanation: 'Distance is the total path length traveled. Displacement is the straight-line distance from starting point to ending point.' },
      { id: 2, type: 'multiple-choice', question: 'A car travels 100 km in 2 hours. What is its average speed?', options: ['25 km/h', '50 km/h', '100 km/h', '200 km/h'], correctAnswer: 1, explanation: 'Speed = Distance / Time = 100 km / 2 hours = 50 km/h' },
      { id: 3, type: 'true-false', question: 'Velocity includes both speed and direction.', correctAnswer: true, explanation: 'Correct! Velocity is a vector quantity that includes both magnitude (speed) and direction.' },
      { id: 4, type: 'multiple-choice', question: 'If you drive around a circular track and return to the start, what is your displacement?', options: ['Equal to the track length', 'Zero', 'Half the track length', 'Twice the track length'], correctAnswer: 1, explanation: 'Displacement is zero because you end up at the same point where you started.' }
    ]
  },
  2: {
    lessonId: 2,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is acceleration?', options: ['How fast something moves', 'The rate of change of velocity', 'The distance traveled', 'The force applied'], correctAnswer: 1, explanation: 'Acceleration is the rate at which velocity changes over time.' },
      { id: 2, type: 'multiple-choice', question: 'A car goes from 0 to 60 mph in 6 seconds. What is its acceleration?', options: ['6 mph/s', '10 mph/s', '60 mph/s', '360 mph/s'], correctAnswer: 1, explanation: 'Acceleration = Change in velocity / Time = (60 - 0) / 6 = 10 mph/s' },
      { id: 3, type: 'true-false', question: 'On a position-time graph, a steeper slope means faster motion.', correctAnswer: true, explanation: 'Correct! The slope of a position-time graph represents velocity.' },
      { id: 4, type: 'multiple-choice', question: 'On a velocity-time graph, what does the slope represent?', options: ['Position', 'Velocity', 'Acceleration', 'Distance'], correctAnswer: 2, explanation: 'The slope of a velocity-time graph represents acceleration.' }
    ]
  },
  3: {
    lessonId: 3,
    questions: [
      { id: 1, type: 'multiple-choice', question: "What does Newton's First Law state?", options: ['F = ma', 'An object at rest stays at rest unless acted upon by a force', 'For every action there is an equal and opposite reaction', 'Energy is conserved'], correctAnswer: 1, explanation: "Newton's First Law (Law of Inertia) states that an object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an external force." },
      { id: 2, type: 'multiple-choice', question: 'A 1000 kg car needs to accelerate at 2 m/s². How much force is required?', options: ['500 N', '1000 N', '2000 N', '4000 N'], correctAnswer: 2, explanation: 'Using F = ma: Force = 1000 kg × 2 m/s² = 2000 N' },
      { id: 3, type: 'true-false', question: "Newton's Third Law explains how rockets work.", correctAnswer: true, explanation: 'Correct! Rockets push gas downward (action), and the gas pushes the rocket upward with equal force (reaction).' },
      { id: 4, type: 'multiple-choice', question: 'If you double the mass of an object, what happens to the force needed for the same acceleration?', options: ['Stays the same', 'Doubles', 'Halves', 'Quadruples'], correctAnswer: 1, explanation: 'From F = ma, if mass doubles and acceleration stays constant, force must also double.' }
    ]
  },
  4: {
    lessonId: 4,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the weight of a 1000 kg car on Earth? (g = 9.8 m/s²)', options: ['1000 N', '5000 N', '9800 N', '10000 N'], correctAnswer: 2, explanation: 'Weight = Mass × g = 1000 kg × 9.8 m/s² = 9800 N' },
      { id: 2, type: 'true-false', question: 'The normal force is always equal to the weight of an object.', correctAnswer: false, explanation: 'False! Normal force equals weight only on a flat, horizontal surface with no other vertical forces.' },
      { id: 3, type: 'multiple-choice', question: 'What force allows car tires to grip the road?', options: ['Gravity', 'Normal force', 'Friction', 'Air resistance'], correctAnswer: 2, explanation: 'Friction between the tires and road surface provides the grip needed for acceleration, braking, and turning.' },
      { id: 4, type: 'multiple-choice', question: 'In a free-body diagram, which direction does gravity always point?', options: ['Up', 'Down', 'Sideways', 'It depends on the object'], correctAnswer: 1, explanation: 'Gravity (weight) always points downward toward the center of the Earth.' }
    ]
  },
  5: {
    lessonId: 5,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is momentum?', options: ['Force × Time', 'Mass × Velocity', 'Mass × Acceleration', 'Force × Distance'], correctAnswer: 1, explanation: 'Momentum = Mass × Velocity. It represents "mass in motion".' },
      { id: 2, type: 'true-false', question: 'In a collision, total momentum is always conserved.', correctAnswer: true, explanation: 'Correct! The Law of Conservation of Momentum states that total momentum before collision equals total momentum after collision.' },
      { id: 3, type: 'multiple-choice', question: 'Why do airbags reduce injury in car crashes?', options: ['They reduce the momentum change', 'They increase collision time, reducing force', 'They increase the force', 'They stop the car faster'], correctAnswer: 1, explanation: 'Airbags increase the collision time, which reduces the force on passengers (F = Δp/Δt).' },
      { id: 4, type: 'multiple-choice', question: 'A truck and a car have the same speed. Which has more momentum?', options: ['The car', 'The truck', 'They have the same momentum', 'Cannot determine'], correctAnswer: 1, explanation: 'The truck has more momentum because momentum = mass × velocity, and the truck has greater mass.' }
    ]
  },
  6: {
    lessonId: 6,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is kinetic energy?', options: ['Energy of position', 'Energy of motion', 'Stored energy', 'Chemical energy'], correctAnswer: 1, explanation: 'Kinetic energy is the energy of motion, calculated as KE = ½mv²' },
      { id: 2, type: 'multiple-choice', question: 'If you double the speed of an object, its kinetic energy:', options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'], correctAnswer: 2, explanation: 'KE = ½mv². Since velocity is squared, doubling speed quadruples kinetic energy.' },
      { id: 3, type: 'true-false', question: 'Potential energy can be converted to kinetic energy.', correctAnswer: true, explanation: 'Correct! Energy constantly converts between forms, like PE to KE in a falling object.' },
      { id: 4, type: 'multiple-choice', question: 'A rocket on the launchpad has:', options: ['Only kinetic energy', 'Only potential energy', 'Both', 'Neither'], correctAnswer: 1, explanation: 'A stationary rocket has gravitational potential energy but no kinetic energy.' }
    ]
  },
  7: {
    lessonId: 7,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Work equals:', options: ['Force × Distance', 'Mass × Velocity', 'Power × Time', 'Energy / Time'], correctAnswer: 0, explanation: 'Work = Force × Distance. Work is done when a force moves an object.' },
      { id: 2, type: 'multiple-choice', question: 'Power is:', options: ['Work / Time', 'Force × Distance', 'Mass × Acceleration', 'Energy × Distance'], correctAnswer: 0, explanation: 'Power = Work / Time, measuring how quickly work is done.' },
      { id: 3, type: 'true-false', question: '1 horsepower equals approximately 746 Watts.', correctAnswer: true, explanation: 'Correct! 1 hp = 746 W, used for comparing engine power.' },
      { id: 4, type: 'multiple-choice', question: 'A 300 hp engine produces how much power?', options: ['300 W', '3,000 W', '74,600 W', '223,800 W'], correctAnswer: 3, explanation: '300 hp × 746 W/hp = 223,800 W (about 224 kW)' }
    ]
  },
  8: {
    lessonId: 8,
    questions: [
      { id: 1, type: 'true-false', question: 'Energy can be created and destroyed.', correctAnswer: false, explanation: 'False! Energy cannot be created or destroyed, only converted between forms.' },
      { id: 2, type: 'multiple-choice', question: 'In a pendulum, where is kinetic energy maximum?', options: ['At the highest point', 'At the lowest point', 'Halfway down', 'Constant everywhere'], correctAnswer: 1, explanation: 'At the lowest point, all PE has converted to KE, so velocity and KE are maximum.' },
      { id: 3, type: 'multiple-choice', question: 'When a car brakes, kinetic energy converts to:', options: ['Potential energy', 'Heat energy', 'Chemical energy', 'Nuclear energy'], correctAnswer: 1, explanation: 'Friction converts kinetic energy to heat, which is why brakes get hot.' },
      { id: 4, type: 'true-false', question: 'A satellite in orbit has constant total energy.', correctAnswer: true, explanation: 'Correct! The satellite trades PE and KE, but total energy stays constant.' }
    ]
  },
  9: {
    lessonId: 9,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Efficiency is calculated as:', options: ['Total energy in', 'Useful energy out / Total energy in', 'Power × Time', 'Force × Distance'], correctAnswer: 1, explanation: 'Efficiency = (Useful Energy Out / Total Energy In) × 100%' },
      { id: 2, type: 'multiple-choice', question: 'A typical gasoline engine is about:', options: ['10% efficient', '30% efficient', '60% efficient', '90% efficient'], correctAnswer: 1, explanation: 'Gasoline engines are typically 25-30% efficient, with 70% becoming waste heat.' },
      { id: 3, type: 'true-false', question: 'Electric motors are more efficient than gasoline engines.', correctAnswer: true, explanation: 'Correct! Electric motors are ~90% efficient vs ~30% for gas engines.' },
      { id: 4, type: 'multiple-choice', question: 'Where does most lost energy in a car engine go?', options: ['Sound', 'Light', 'Heat', 'Vibration'], correctAnswer: 2, explanation: 'Most lost energy becomes heat through exhaust, cooling, and friction.' }
    ]
  },
  10: {
    lessonId: 10,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Mechanical power is transmitted through:', options: ['Wires', 'Rotating shafts', 'Radio waves', 'Light'], correctAnswer: 1, explanation: 'Mechanical power uses rotating shafts, gears, and belts.' },
      { id: 2, type: 'multiple-choice', question: 'Electrical power equals:', options: ['Voltage × Current', 'Voltage / Current', 'Current / Voltage', 'Voltage + Current'], correctAnswer: 0, explanation: 'Electrical Power = Voltage × Current (P = V × I), measured in Watts.' },
      { id: 3, type: 'true-false', question: 'Hybrid cars use both mechanical and electrical power.', correctAnswer: true, explanation: 'Correct! Hybrids combine gas engines (mechanical) with electric motors (electrical).' },
      { id: 4, type: 'multiple-choice', question: 'What advantage does electrical power have?', options: ['Higher efficiency', 'Long-distance transmission', 'More powerful', 'Cheaper'], correctAnswer: 1, explanation: 'Electrical power can be transmitted over long distances with minimal loss.' }
    ]
  },
  // Unit 3: Fluids (Lessons 11-15)
  11: {
    lessonId: 11, questions: [
      { id: 1, type: 'multiple-choice', question: 'Pressure equals:', options: ['Force × Area', 'Force / Area', 'Mass × Velocity', 'Energy / Time'], correctAnswer: 1, explanation: 'Pressure = Force / Area. Same force over smaller area = higher pressure.' },
      { id: 2, type: 'multiple-choice', question: 'Atmospheric pressure at sea level:', options: ['10 Pa', '1,000 Pa', '10,000 Pa', '100,000 Pa'], correctAnswer: 3, explanation: 'Atmospheric pressure ≈ 101,325 Pa (14.7 psi)' },
      { id: 3, type: 'true-false', question: 'Pressure in liquid increases with depth.', correctAnswer: true, explanation: 'Correct! P = ρgh - pressure increases with depth.' },
      { id: 4, type: 'multiple-choice', question: 'Why pressurize aircraft cabins?', options: ['Keep warm', 'Air pressure too low at altitude', 'Reduce noise', 'Save fuel'], correctAnswer: 1, explanation: 'At 35,000 ft, air pressure too low for breathing.' }
    ]
  },
  12: {
    lessonId: 12, questions: [
      { id: 1, type: 'multiple-choice', question: 'Buoyancy is:', options: ['Weight of object', 'Upward force by fluid', 'Density of water', 'Pressure'], correctAnswer: 1, explanation: 'Buoyancy = upward force fluids exert on objects.' },
      { id: 2, type: 'true-false', question: 'Less dense objects float.', correctAnswer: true, explanation: 'Correct! Less dense than fluid = float. More dense = sink.' },
      { id: 3, type: 'multiple-choice', question: 'Buoyant force equals:', options: ['Weight of object', 'Weight of fluid displaced', 'Volume', 'Pressure'], correctAnswer: 1, explanation: 'Archimedes: Buoyant force = weight of fluid displaced.' },
      { id: 4, type: 'multiple-choice', question: 'Why ice floats:', options: ['Colder', 'Less dense than water', 'Solid', 'Air bubbles'], correctAnswer: 1, explanation: 'Ice (0.92 g/cm³) < water (1.0 g/cm³)' }
    ]
  },
  13: {
    lessonId: 13, questions: [
      { id: 1, type: 'multiple-choice', question: 'Bernoulli\'s Principle:', options: ['Faster = higher pressure', 'Faster = lower pressure', 'Pressure constant', 'Density increases'], correctAnswer: 1, explanation: 'Bernoulli: Faster fluid = lower pressure.' },
      { id: 2, type: 'true-false', question: 'Wings use Bernoulli for lift.', correctAnswer: true, explanation: 'Correct! Faster air over top = lower pressure = lift.' },
      { id: 3, type: 'multiple-choice', question: 'Narrow pipe section:', options: ['Pressure increases', 'Pressure decreases', 'Same', 'Zero'], correctAnswer: 1, explanation: 'Narrow = faster flow = lower pressure (Bernoulli).' },
      { id: 4, type: 'multiple-choice', question: 'Race cars use aero for:', options: ['Lift', 'Downforce', 'Drag', 'Turbulence'], correctAnswer: 1, explanation: 'Downforce improves grip using inverted wings.' }
    ]
  },
  14: {
    lessonId: 14, questions: [
      { id: 1, type: 'multiple-choice', question: 'Drag proportional to:', options: ['Velocity', 'Velocity squared', 'Mass', 'Pressure'], correctAnswer: 1, explanation: 'Drag ∝ v². Double speed = 4x drag!' },
      { id: 2, type: 'true-false', question: 'Streamlined shapes reduce drag.', correctAnswer: true, explanation: 'Correct! Streamlined = less turbulent wake = less drag.' },
      { id: 3, type: 'multiple-choice', question: 'Viscosity is:', options: ['Density', 'Pressure', 'Internal friction', 'Temperature'], correctAnswer: 2, explanation: 'Viscosity = internal friction in fluids.' },
      { id: 4, type: 'multiple-choice', question: 'Modern car Cd:', options: ['0.05', '0.30', '1.0', '2.0'], correctAnswer: 1, explanation: 'Modern cars Cd ≈ 0.25-0.30. Lower = better.' }
    ]
  },
  15: {
    lessonId: 15, questions: [
      { id: 1, type: 'multiple-choice', question: 'Mach number:', options: ['V / Speed of sound', 'Speed of sound / V', 'P / ρ', 'T / P'], correctAnswer: 0, explanation: 'Mach = Velocity / Speed of sound.' },
      { id: 2, type: 'true-false', question: 'Shock waves form at supersonic speeds.', correctAnswer: true, explanation: 'Correct! Above Mach 1 = shock waves = sonic boom.' },
      { id: 3, type: 'multiple-choice', question: 'Supersonic nozzle:', options: ['Converging', 'Diverging', 'Converging-diverging', 'Straight'], correctAnswer: 2, explanation: 'De Laval nozzle accelerates to supersonic.' },
      { id: 4, type: 'multiple-choice', question: 'Rocket exhaust speed:', options: ['Subsonic', 'Mach 1', 'Mach 3-4', 'Mach 10+'], correctAnswer: 2, explanation: 'Rocket nozzles: Mach 3-4 for max thrust.' }
    ]
  },
  // Unit 4: Thermodynamics (Lessons 16-20)
  16: {
    lessonId: 16, questions: [
      { id: 1, type: 'multiple-choice', question: 'Temperature vs Heat:', options: ['Same', 'Temp = avg KE, Heat = transfer', 'Heat hotter', 'Temp in Joules'], correctAnswer: 1, explanation: 'Temperature = avg molecular KE. Heat = energy transfer.' },
      { id: 2, type: 'true-false', question: 'Materials expand when heated.', correctAnswer: true, explanation: 'Correct! Thermal expansion - most materials expand when heated.' },
      { id: 3, type: 'multiple-choice', question: 'Specific heat:', options: ['Temperature', 'Energy to raise 1kg by 1°C', 'Heat capacity', 'Boiling point'], correctAnswer: 1, explanation: 'Specific heat = energy to raise 1kg by 1°C.' },
      { id: 4, type: 'multiple-choice', question: 'Water as coolant because:', options: ['Cheap', 'High specific heat', 'Easy to find', 'Low boiling'], correctAnswer: 1, explanation: 'Water high specific heat = absorbs lots of heat.' }
    ]
  },
  17: {
    lessonId: 17, questions: [
      { id: 1, type: 'multiple-choice', question: 'Needs direct contact:', options: ['Radiation', 'Convection', 'Conduction', 'All'], correctAnswer: 2, explanation: 'Conduction requires direct contact.' },
      { id: 2, type: 'multiple-choice', question: 'Heat through vacuum:', options: ['Conduction', 'Convection', 'Radiation', 'Cannot'], correctAnswer: 2, explanation: 'Only radiation works through vacuum.' },
      { id: 3, type: 'true-false', question: 'Metals conduct heat well.', correctAnswer: true, explanation: 'Correct! Metals = excellent thermal conductors.' },
      { id: 4, type: 'multiple-choice', question: 'Radiator uses:', options: ['Conduction only', 'Convection only', 'Radiation only', 'Conduction + convection'], correctAnswer: 3, explanation: 'Conducts to coolant, convects to air.' }
    ]
  },
  18: {
    lessonId: 18, questions: [
      { id: 1, type: 'true-false', question: 'First Law: Energy conserved.', correctAnswer: true, explanation: 'Correct! Energy cannot be created/destroyed.' },
      { id: 2, type: 'multiple-choice', question: 'Second Law:', options: ['Energy conserved', 'Heat flows hot to cold', 'F = ma', 'Momentum conserved'], correctAnswer: 1, explanation: 'Second Law: Heat flows hot to cold naturally.' },
      { id: 3, type: 'multiple-choice', question: '100% efficient engine?', options: ['Yes, perfect materials', 'Yes, no friction', 'No, 2nd Law prevents', 'Yes, expensive'], correctAnswer: 2, explanation: 'Second Law prevents 100% efficiency.' },
      { id: 4, type: 'multiple-choice', question: 'Gas engines use:', options: ['Carnot', 'Otto', 'Diesel', 'Brayton'], correctAnswer: 1, explanation: 'Gasoline = Otto cycle.' }
    ]
  },
  19: {
    lessonId: 19, questions: [
      { id: 1, type: 'multiple-choice', question: 'Four-stroke has:', options: ['2', '4', '6', '8'], correctAnswer: 1, explanation: 'Four strokes: Intake, Compression, Power, Exhaust.' },
      { id: 2, type: 'true-false', question: 'Combustion pushes piston.', correctAnswer: true, explanation: 'Correct! High pressure from combustion pushes piston.' },
      { id: 3, type: 'multiple-choice', question: 'Turbocharger:', options: ['Cools', 'Forces more air', 'Reduces fuel', 'Quiets'], correctAnswer: 1, explanation: 'Turbo forces more air in for more power.' },
      { id: 4, type: 'multiple-choice', question: 'Most power:', options: ['4-cyl', 'V6', 'V8', 'Same'], correctAnswer: 2, explanation: 'More cylinders = more power. V8 = 400+ hp.' }
    ]
  },
  20: {
    lessonId: 20, questions: [
      { id: 1, type: 'multiple-choice', question: 'Max efficiency by:', options: ['Fuel', 'Temp difference', 'Size', 'Cylinders'], correctAnswer: 1, explanation: 'Carnot: η = 1 - (T_cold/T_hot). Larger ΔT = higher max.' },
      { id: 2, type: 'true-false', question: 'Real < Carnot limit.', correctAnswer: true, explanation: 'Correct! Carnot = theoretical max.' },
      { id: 3, type: 'multiple-choice', question: 'Most efficient:', options: ['Gas 30%', 'Diesel 40%', 'Electric 90%', 'Same'], correctAnswer: 2, explanation: 'Electric ~90% - not heat engine!' },
      { id: 4, type: 'multiple-choice', question: 'Diesel more efficient why:', options: ['Better fuel', 'Higher compression = higher temp', 'More cylinders', 'Slower'], correctAnswer: 1, explanation: 'Higher compression → higher temp → higher efficiency.' }
    ]
  },
  // Unit 5: Waves & Electricity (Lessons 21-25)
  21: {
    lessonId: 21, questions: [
      { id: 1, type: 'multiple-choice', question: 'Waves transfer:', options: ['Matter', 'Energy', 'Mass', 'Temperature'], correctAnswer: 1, explanation: 'Waves transfer energy without matter.' },
      { id: 2, type: 'multiple-choice', question: 'Needs medium:', options: ['Light', 'Radio', 'Sound', 'EM waves'], correctAnswer: 2, explanation: 'Sound = mechanical, needs medium.' },
      { id: 3, type: 'true-false', question: 'Sound faster in steel than air.', correctAnswer: true, explanation: 'Correct! 343 m/s air, 5000 m/s steel.' },
      { id: 4, type: 'multiple-choice', question: 'Wave speed =', options: ['f + λ', 'f × λ', 'f / λ', 'λ / f'], correctAnswer: 1, explanation: 'Speed = Frequency × Wavelength' }
    ]
  },
  22: {
    lessonId: 22, questions: [
      { id: 1, type: 'multiple-choice', question: 'Frequency:', options: ['Distance between peaks', 'Height', 'Cycles per second', 'Speed'], correctAnswer: 2, explanation: 'Frequency = cycles/second (Hz).' },
      { id: 2, type: 'multiple-choice', question: 'Amplitude:', options: ['Speed', 'Frequency', 'Max displacement', 'Wavelength'], correctAnswer: 2, explanation: 'Amplitude = max displacement from equilibrium.' },
      { id: 3, type: 'true-false', question: 'FM varies frequency.', correctAnswer: true, explanation: 'Correct! FM = Frequency Modulation.' },
      { id: 4, type: 'multiple-choice', question: 'Human hearing:', options: ['2-20 Hz', '20-200 Hz', '20-20k Hz', '20k-200k Hz'], correctAnswer: 2, explanation: 'Humans: 20 Hz to 20,000 Hz.' }
    ]
  },
  23: {
    lessonId: 23, questions: [
      { id: 1, type: 'multiple-choice', question: 'Voltage:', options: ['Electron flow', 'Potential difference', 'Resistance', 'Charge'], correctAnswer: 1, explanation: 'Voltage = electric potential difference.' },
      { id: 2, type: 'multiple-choice', question: 'Current:', options: ['Potential', 'Rate of charge flow', 'Resistance', 'Power'], correctAnswer: 1, explanation: 'Current = rate of charge flow (Amperes).' },
      { id: 3, type: 'true-false', question: 'Car battery = 12V.', correctAnswer: true, explanation: 'Correct! Most cars use 12V systems.' },
      { id: 4, type: 'multiple-choice', question: 'Starter motor draws:', options: ['1-10 A', '10-50 A', '100-200 A', '500-1000 A'], correctAnswer: 2, explanation: 'Starter: 100-200A+ to crank engine.' }
    ]
  },
  24: {
    lessonId: 24, questions: [
      { id: 1, type: 'multiple-choice', question: 'Ohm\'s Law:', options: ['V = I + R', 'V = I × R', 'V = I / R', 'V = R / I'], correctAnswer: 1, explanation: 'V = I × R (Voltage = Current × Resistance)' },
      { id: 2, type: 'multiple-choice', question: 'V=12V, R=6Ω, I=?', options: ['0.5 A', '2 A', '6 A', '72 A'], correctAnswer: 1, explanation: 'I = V/R = 12/6 = 2 A' },
      { id: 3, type: 'true-false', question: 'Copper low resistance.', correctAnswer: true, explanation: 'Correct! Copper = excellent conductor.' },
      { id: 4, type: 'multiple-choice', question: 'Power =', options: ['V + I', 'V × I', 'V / I', 'V - I'], correctAnswer: 1, explanation: 'P = V × I (Watts)' }
    ]
  },
  25: {
    lessonId: 25, questions: [
      { id: 1, type: 'multiple-choice', question: 'EM induction:', options: ['Magnetism from electricity', 'Electricity from moving magnets', 'Resistance', 'Heat'], correctAnswer: 1, explanation: 'Induction: moving magnet → voltage (generators).' },
      { id: 2, type: 'true-false', question: 'Motors: electrical → mechanical.', correctAnswer: true, explanation: 'Correct! Motors convert electrical to mechanical.' },
      { id: 3, type: 'multiple-choice', question: 'Alternator:', options: ['Mechanical → electrical', 'Electrical → mechanical', 'Stores', 'Reduces voltage'], correctAnswer: 0, explanation: 'Alternator = generator, charges battery.' },
      { id: 4, type: 'multiple-choice', question: 'Motor efficiency:', options: ['30%', '50%', '70%', '90%'], correctAnswer: 3, explanation: 'Electric motors ~90% efficient!' }
    ]
  },
  // Unit 6: Materials (Lessons 26-33)
  26: {
    lessonId: 26, questions: [
      { id: 1, type: 'multiple-choice', question: 'Steel/aluminum are:', options: ['Ceramics', 'Polymers', 'Metals', 'Composites'], correctAnswer: 2, explanation: 'Steel/aluminum = metals.' },
      { id: 2, type: 'multiple-choice', question: 'Ceramics for:', options: ['Ductility', 'Conductivity', 'High temp resistance', 'Low strength'], correctAnswer: 2, explanation: 'Ceramics: hard, brittle, high-temp resistant.' },
      { id: 3, type: 'true-false', question: 'Carbon fiber = composite.', correctAnswer: true, explanation: 'Correct! Carbon fibers in polymer matrix.' },
      { id: 4, type: 'multiple-choice', question: 'Titanium in rockets:', options: ['Cheap', 'Strongest', 'High strength-to-weight + temp', 'Easy'], correctAnswer: 2, explanation: 'Titanium: great strength-to-weight + high temp.' }
    ]
  },
  27: {
    lessonId: 27, questions: [
      { id: 1, type: 'multiple-choice', question: 'Stress:', options: ['F × A', 'F / A', 'ΔL', 'Energy'], correctAnswer: 1, explanation: 'Stress = Force / Area.' },
      { id: 2, type: 'multiple-choice', question: 'Strain:', options: ['Force', 'Stress × Area', 'ΔL / L₀', 'Strength'], correctAnswer: 2, explanation: 'Strain = ΔL / L₀ (dimensionless)' },
      { id: 3, type: 'true-false', question: '787 wings flex 26 feet.', correctAnswer: true, explanation: 'Correct! Wings flex dramatically in testing.' },
      { id: 4, type: 'multiple-choice', question: 'Stress-strain curve:', options: ['Temp effects', 'Deformation behavior', 'Cost', 'Density'], correctAnswer: 1, explanation: 'Shows how material deforms under stress.' }
    ]
  },
  28: {
    lessonId: 28, questions: [
      { id: 1, type: 'multiple-choice', question: 'Elastic deformation:', options: ['Permanent', 'Reversible', 'Breaking', 'Thermal'], correctAnswer: 1, explanation: 'Elastic = reversible, returns to shape.' },
      { id: 2, type: 'multiple-choice', question: 'Yield strength:', options: ['Max before break', 'Where plastic begins', 'Elastic modulus', 'Ultimate'], correctAnswer: 1, explanation: 'Yield = where plastic deformation starts.' },
      { id: 3, type: 'true-false', question: 'Plastic = permanent.', correctAnswer: true, explanation: 'Correct! Plastic deformation is permanent.' },
      { id: 4, type: 'multiple-choice', question: 'Bumpers:', options: ['Stay elastic', 'Deform plastically', 'Never deform', 'Break'], correctAnswer: 1, explanation: 'Bumpers deform plastically to absorb energy.' }
    ]
  },
  29: {
    lessonId: 29, questions: [
      { id: 1, type: 'multiple-choice', question: 'Fatigue:', options: ['Sudden fracture', 'Repeated stress failure', 'Thermal', 'Corrosion'], correctAnswer: 1, explanation: 'Fatigue = failure from repeated stress cycles.' },
      { id: 2, type: 'true-false', question: 'Brittle breaks suddenly.', correctAnswer: true, explanation: 'Correct! Brittle = sudden. Ductile = deforms first.' },
      { id: 3, type: 'multiple-choice', question: 'Inspect aircraft why:', options: ['Paint', 'Find fatigue cracks', 'Weight', 'Fuel'], correctAnswer: 1, explanation: 'Find cracks before catastrophic failure.' },
      { id: 4, type: 'multiple-choice', question: 'Paperclip bending:', options: ['Stronger', 'Nothing', 'Fatigue breaks', 'Elastic'], correctAnswer: 2, explanation: 'Repeated bending = fatigue failure.' }
    ]
  },
  30: {
    lessonId: 30, questions: [
      { id: 1, type: 'multiple-choice', question: 'Strength-to-weight:', options: ['S + W', 'S / Density', 'W / S', 'S × D'], correctAnswer: 1, explanation: 'Strength-to-weight = Strength / Density.' },
      { id: 2, type: 'multiple-choice', question: 'Carbon fiber expensive:', options: ['Weak', 'Heavy', 'Complex manufacturing', 'Rare'], correctAnswer: 2, explanation: 'Complex manufacturing = expensive (~5x aluminum).' },
      { id: 3, type: 'true-false', question: 'Material selection = trade-offs.', correctAnswer: true, explanation: 'Correct! Balance strength, weight, cost, temp, etc.' },
      { id: 4, type: 'multiple-choice', question: 'Nickel superalloys:', options: ['Cheap', 'Light', 'Withstand 1200°C', 'Easy'], correctAnswer: 2, explanation: 'Withstand extreme 1200°C turbine temps.' }
    ]
  },
  31: {
    lessonId: 31, questions: [
      { id: 1, type: 'multiple-choice', question: 'Elastic deformation is:', options: ['Permanent', 'Reversible', 'Always breaks', 'Only in metals'], correctAnswer: 1, explanation: 'Elastic deformation is reversible - material returns to original shape when force is removed.' },
      { id: 2, type: 'true-false', question: 'Yield strength marks where plastic deformation begins.', correctAnswer: true, explanation: 'Correct! Yield strength is the stress at which plastic deformation starts.' },
      { id: 3, type: 'multiple-choice', question: 'Plastic deformation:', options: ['Returns to original shape', 'Is permanent', 'Only in rubber', 'Never happens'], correctAnswer: 1, explanation: 'Plastic deformation is permanent - material does not return to original shape.' },
      { id: 4, type: 'multiple-choice', question: 'Bumpers are designed to:', options: ['Stay elastic', 'Deform plastically to absorb energy', 'Never deform', 'Break immediately'], correctAnswer: 1, explanation: 'Bumpers deform plastically in crashes to absorb energy and protect passengers.' }
    ]
  },
  32: {
    lessonId: 32, questions: [
      { id: 1, type: 'multiple-choice', question: 'Fatigue failure occurs from:', options: ['Single overload', 'Repeated stress cycles', 'High temperature only', 'Corrosion only'], correctAnswer: 1, explanation: 'Fatigue is failure from repeated stress cycles, even at low stress levels.' },
      { id: 2, type: 'true-false', question: 'Brittle materials break suddenly without warning.', correctAnswer: true, explanation: 'Correct! Brittle materials fracture suddenly, while ductile materials deform first.' },
      { id: 3, type: 'multiple-choice', question: 'Why inspect aircraft regularly?', options: ['For paint', 'To find fatigue cracks before failure', 'For weight', 'For fuel'], correctAnswer: 1, explanation: 'Regular inspection finds fatigue cracks before they cause catastrophic failure.' },
      { id: 4, type: 'multiple-choice', question: 'Bending a paperclip repeatedly causes:', options: ['It gets stronger', 'Nothing', 'Fatigue failure', 'It becomes elastic'], correctAnswer: 2, explanation: 'Repeated bending causes fatigue - small cracks grow until sudden failure.' }
    ]
  },
  33: {
    lessonId: 33, questions: [
      { id: 1, type: 'multiple-choice', question: 'Strength-to-weight ratio is calculated as:', options: ['Strength + Weight', 'Strength / Density', 'Weight / Strength', 'Strength × Density'], correctAnswer: 1, explanation: 'Strength-to-weight ratio = Strength / Density. Higher is better for weight-sensitive applications.' },
      { id: 2, type: 'multiple-choice', question: 'Why is carbon fiber expensive?', options: ['It\'s weak', 'It\'s heavy', 'Complex manufacturing process', 'It\'s rare'], correctAnswer: 2, explanation: 'Carbon fiber is expensive due to complex manufacturing (~5x cost of aluminum).' },
      { id: 3, type: 'true-false', question: 'Material selection requires balancing multiple factors.', correctAnswer: true, explanation: 'Correct! Engineers balance strength, weight, cost, temperature resistance, and manufacturability.' },
      { id: 4, type: 'multiple-choice', question: 'Nickel superalloys are used in jet engines because they:', options: ['Are cheap', 'Are light', 'Withstand 1200°C temperatures', 'Are easy to manufacture'], correctAnswer: 2, explanation: 'Nickel superalloys can withstand extreme temperatures (1200°C) in turbine engines.' }
    ]
  }
};
