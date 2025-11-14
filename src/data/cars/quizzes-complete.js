// Complete Quizzes for All 20 Automotive Lessons
// 4 questions per lesson = 80 total questions

export const automotiveQuizzes = {
  // Unit 0: Foundations (Lessons 0-5)
  0: [
    { id: "q0-1", question: "What is the formula for kinetic energy?", options: ["E = mv", "E = ½mv²", "E = ma", "E = mgh"], correctAnswer: 1, explanation: "Kinetic energy is E = ½mv². The v² term means energy increases with the square of velocity!" },
    { id: "q0-2", question: "If speed doubles, braking distance increases by:", options: ["2×", "3×", "4×", "8×"], correctAnswer: 2, explanation: "Braking distance ∝ v². Doubling speed means 2² = 4× the braking distance!" },
    { id: "q0-3", question: "What does F = ma tell us?", options: ["Heavier vehicles accelerate faster", "a = F/m; heavier vehicles accelerate slower for same force", "Force and mass are independent", "Acceleration depends only on power"], correctAnswer: 1, explanation: "F = ma means a = F/m. For the same force, heavier vehicles accelerate slower!" },
    { id: "q0-4", question: "Coefficient of friction for dry asphalt:", options: ["0.1-0.2", "0.3-0.5", "0.8-1.0", "1.5-2.0"], correctAnswer: 2, explanation: "Dry asphalt has μ = 0.8-1.0. Wet is 0.5-0.7, ice is 0.1-0.2!" }
  ],
  1: [
    { id: "q1-1", question: "Power, torque, and RPM relationship:", options: ["P = T × N", "P = T × ω (ω = 2πN/60)", "P = T / ω", "P = T + ω"], correctAnswer: 1, explanation: "Power = Torque × Angular Velocity. P = T × ω where ω = 2πN/60!" },
    { id: "q1-2", question: "Why do electric motors have instant torque?", options: ["More power than ICE", "T = k_t × I, independent of RPM", "They use batteries", "No transmission"], correctAnswer: 1, explanation: "Electric motor torque T = k_t × I is independent of RPM. ICE needs to rev up!" },
    { id: "q1-3", question: "Gasoline engine thermal efficiency:", options: ["10-15%", "25-35%", "50-60%", "80-90%"], correctAnswer: 1, explanation: "Gasoline engines are only 25-35% efficient. Electric motors are 95-97%!" },
    { id: "q1-4", question: "Gear ratio 3:1 means:", options: ["Output 3× input speed", "Input 3× output speed; torque multiplied by 3", "Torque divided by 3", "Power multiplied by 3"], correctAnswer: 1, explanation: "3:1 means input rotates 3× for every 1 output. Multiplies torque by 3, divides speed by 3!" }
  ],
  2: [
    { id: "q2-1", question: "What does suspension do?", options: ["Only provides comfort", "Supports weight, maintains tire contact, controls motion", "Only for off-road", "Reduces speed"], correctAnswer: 1, explanation: "Suspension supports weight, maintains tire contact, controls body motion, and provides comfort!" },
    { id: "q2-2", question: "Spring rate k means:", options: ["Force per displacement (N/m)", "Displacement per force", "Spring weight", "Spring length"], correctAnswer: 0, explanation: "Spring rate k is force per displacement (N/m). Higher k = stiffer spring!" },
    { id: "q2-3", question: "Why use anti-roll bars?", options: ["Increase ride height", "Reduce body roll in corners without affecting ride", "Improve acceleration", "Reduce weight"], correctAnswer: 1, explanation: "Anti-roll bars connect left/right suspension to reduce body roll without affecting ride quality!" },
    { id: "q2-4", question: "Damping controls:", options: ["Spring stiffness", "Oscillation and bouncing", "Ride height", "Tire pressure"], correctAnswer: 1, explanation: "Dampers control oscillation. Without damping, springs would bounce forever!" }
  ],
  3: [
    { id: "q3-1", question: "Braking distance formula:", options: ["s = v/a", "s = v²/(2a)", "s = 2v/a", "s = v²/a"], correctAnswer: 1, explanation: "Braking distance s = v²/(2a). The v² term means distance increases dramatically with speed!" },
    { id: "q3-2", question: "What does ABS do?", options: ["Increases braking force", "Prevents wheel lockup, maintains steering control", "Reduces brake wear", "Increases brake pressure"], correctAnswer: 1, explanation: "ABS prevents wheel lockup by pulsing brakes 10-15 times/second. Maintains steering control!" },
    { id: "q3-3", question: "Why are front brakes larger?", options: ["Front wheels bigger", "Weight transfers forward; front provides 70% of braking", "Easier to access", "Rear brakes are backup"], correctAnswer: 1, explanation: "Weight transfers forward during braking. Front brakes provide 70%, rear 30%!" },
    { id: "q3-4", question: "Maximum braking deceleration:", options: ["a_max = g", "a_max = μg", "a_max = 2g", "a_max = v²"], correctAnswer: 1, explanation: "Maximum deceleration a_max = μg. On dry road (μ=0.9), that's about 8.8 m/s² or 0.9g!" }
  ],
  4: [
    { id: "q4-1", question: "EV battery energy formula:", options: ["E = V × A", "E = V × Ah", "E = I × t", "E = P × t"], correctAnswer: 1, explanation: "Battery energy E = Voltage × Amp-hours. Tesla Model 3: 350V × 230Ah = 80.5 kWh!" },
    { id: "q4-2", question: "Why are EVs more efficient?", options: ["Lighter weight", "Motor 95-97% efficient vs ICE 25-35%", "Better aerodynamics", "Smaller batteries"], correctAnswer: 1, explanation: "Electric motors are 95-97% efficient. ICE engines are only 25-35%. EVs are 2.5-3× more efficient overall!" },
    { id: "q4-3", question: "Regenerative braking recovers:", options: ["100% of energy", "60-70% of braking energy", "10-20% of energy", "No energy"], correctAnswer: 1, explanation: "Regenerative braking recovers 60-70% of braking energy, extending range significantly!" },
    { id: "q4-4", question: "EV range calculation:", options: ["Range = Battery / Speed", "Range = Battery / Consumption", "Range = Battery × Efficiency", "Range = Battery + Consumption"], correctAnswer: 1, explanation: "Range = Battery Energy / Energy Consumption. Example: 80 kWh / 150 Wh/km = 533 km!" }
  ],
  5: [
    { id: "q5-1", question: "Drag power formula:", options: ["P = F × v", "P = ½ρv³C_D A", "P = ½ρv²C_D A", "P = C_D × v²"], correctAnswer: 1, explanation: "Drag power P = ½ρv³C_D A. The v³ term means power increases dramatically with speed!" },
    { id: "q5-2", question: "Reducing C_D from 0.35 to 0.25 saves:", options: ["5% fuel", "15% fuel at highway speeds", "30% fuel", "50% fuel"], correctAnswer: 1, explanation: "29% reduction in C_D saves about 15% fuel at highway speeds where drag dominates!" },
    { id: "q5-3", question: "Rolling resistance formula:", options: ["F_rr = C_rr × v", "F_rr = C_rr × mg", "F_rr = C_rr × v²", "F_rr = C_rr / m"], correctAnswer: 1, explanation: "Rolling resistance F_rr = C_rr × mg. Nearly constant with speed, typical C_rr = 0.010-0.015!" },
    { id: "q5-4", question: "Most efficient highway speed:", options: ["60 km/h", "80-90 km/h", "120 km/h", "150 km/h"], correctAnswer: 1, explanation: "80-90 km/h is most efficient. At 120 km/h, fuel consumption is 70% higher due to drag!" }
  ],

  // Unit 1: Vehicle Dynamics (Lessons 6-9)
  6: [
    { id: "q6-1", question: "Aerodynamic drag formula:", options: ["F = ½ρv²C_D A", "F = C_D × v", "F = ρ × A", "F = mv²"], correctAnswer: 0, explanation: "Drag F = ½ρv²C_D A. The v² term means doubling speed = 4× the drag!" },
    { id: "q6-2", question: "Maximum traction limited by:", options: ["Engine power", "F_max = μN (tire-road friction)", "Vehicle weight only", "Transmission"], correctAnswer: 1, explanation: "Maximum traction F_max = μN. This is why AWD helps - uses all four tires!" },
    { id: "q6-3", question: "Weight transfer during acceleration:", options: ["Engine in rear", "ΔW = (a/g) × (h/L) × W", "Tires compress", "Suspension extends"], correctAnswer: 1, explanation: "Weight transfer ΔW = (a/g) × (h/L) × W. Higher CG and shorter wheelbase = more transfer!" },
    { id: "q6-4", question: "Why front brakes larger?", options: ["Front wheels bigger", "Weight transfers forward; front provides 70% braking", "Easier access", "Rear backup only"], correctAnswer: 1, explanation: "Weight transfers forward during braking. Front 70%, rear 30% to prevent rear lockup!" }
  ],
  7: [
    { id: "q7-1", question: "Maximum acceleration formula:", options: ["a_max = P/m", "a_max = μg", "a_max = F/m", "a_max = v/t"], correctAnswer: 1, explanation: "Traction-limited acceleration a_max = μg. On dry road (μ=0.9), that's 8.8 m/s²!" },
    { id: "q7-2", question: "Why is AWD faster 0-60?", options: ["More power", "Uses all four tires for traction; 67% better than RWD", "Lighter weight", "Better aerodynamics"], correctAnswer: 1, explanation: "AWD uses all four tires. RWD only uses rear (50-60% weight). AWD is 67% better!" },
    { id: "q7-3", question: "Launch control does:", options: ["Increases power", "Optimizes RPM and wheel slip for consistent launches", "Reduces weight", "Improves aerodynamics"], correctAnswer: 1, explanation: "Launch control manages RPM, clutch, and wheel slip (5-10% optimal) for maximum acceleration!" },
    { id: "q7-4", question: "0-60 time simplified:", options: ["t = v/a", "t = 26.8/a (for 0-60 mph)", "t = v²/a", "t = a/v"], correctAnswer: 1, explanation: "0-60 mph = 0-26.8 m/s. Time t = 26.8/a. If a=5.4 m/s², t=5.0 seconds!" }
  ],
  8: [
    { id: "q8-1", question: "Centripetal force for turning:", options: ["F = mv", "F = mv²/R", "F = mR/v", "F = v²/R"], correctAnswer: 1, explanation: "Centripetal force F = mv²/R. Provided by tire lateral force F_y = μN!" },
    { id: "q8-2", question: "Maximum cornering speed:", options: ["v = μgR", "v = √(μgR)", "v = μg/R", "v = R/μg"], correctAnswer: 1, explanation: "Maximum speed v_max = √(μgR). Higher μ or larger R allows faster cornering!" },
    { id: "q8-3", question: "Understeer means:", options: ["Rear slides first", "Front slides first; turn less than steering input", "Perfect balance", "Too much power"], correctAnswer: 1, explanation: "Understeer: front tires lose grip first. Safe and predictable. Most road cars!" },
    { id: "q8-4", question: "Negative camber benefits:", options: ["Looks cool", "Better cornering grip; more even tire wear in corners", "Reduces weight", "Improves straight-line speed"], correctAnswer: 1, explanation: "Negative camber (top tilts in) improves cornering grip and compensates for body roll!" }
  ],
  9: [
    { id: "q9-1", question: "Braking distance formula:", options: ["s = v/a", "s = v²/(2a)", "s = 2v/a", "s = v²/a"], correctAnswer: 1, explanation: "Braking distance s = v²/(2a). From 30 m/s with a=8 m/s²: s = 56 m!" },
    { id: "q9-2", question: "ABS prevents:", options: ["Brake fade", "Wheel lockup; maintains steering control", "Brake overheating", "Tire wear"], correctAnswer: 1, explanation: "ABS prevents wheel lockup by pulsing brakes 10-15 Hz. Maintains steering control!" },
    { id: "q9-3", question: "Wet roads increase braking distance by:", options: ["10-20%", "30-40%", "60%+", "100%+"], correctAnswer: 2, explanation: "Wet roads (μ=0.5-0.7 vs dry 0.8-1.0) increase braking distance by 60%+!" },
    { id: "q9-4", question: "Brake force multiplication:", options: ["Hydraulic pressure constant throughout", "Small master cylinder, large caliper = force multiplication", "Electric assist", "Vacuum boost"], correctAnswer: 1, explanation: "Pascal's principle: P=F/A. Small master cylinder, large caliper multiplies force 8-10×!" }
  ],

  // Unit 2: Powertrain (Lessons 10-14)
  10: [
    { id: "q10-1", question: "Otto cycle efficiency formula:", options: ["η = 1 - r", "η = 1 - (1/r^(γ-1))", "η = r/(r+1)", "η = 1/r"], correctAnswer: 1, explanation: "Otto efficiency η = 1 - (1/r^(γ-1)). Higher compression ratio = higher efficiency!" },
    { id: "q10-2", question: "Four-stroke cycle order:", options: ["Intake, Power, Compression, Exhaust", "Intake, Compression, Power, Exhaust", "Compression, Intake, Power, Exhaust", "Power, Exhaust, Intake, Compression"], correctAnswer: 1, explanation: "Four strokes: Intake (air-fuel in), Compression, Power (combustion), Exhaust!" },
    { id: "q10-3", question: "Turbocharging increases power by:", options: ["10-20%", "30-50%", "70-100%", "200%+"], correctAnswer: 1, explanation: "Turbo typically adds 30-50% power by compressing intake air. More air = more fuel = more power!" },
    { id: "q10-4", question: "Real engine efficiency vs ideal:", options: ["Real = ideal", "Real 25-35% vs ideal 60%", "Real 50% vs ideal 70%", "Real 80% vs ideal 90%"], correctAnswer: 1, explanation: "Real engines: 25-35% efficient. Ideal Otto cycle: 60%. Losses from friction, heat transfer!" }
  ],
  11: [
    { id: "q11-1", question: "Gear ratio formula:", options: ["GR = N_out/N_in", "GR = N_in/N_out = T_out/T_in", "GR = T_in/T_out", "GR = N × T"], correctAnswer: 1, explanation: "Gear ratio GR = N_in/N_out = T_out/T_in. Trades speed for torque!" },
    { id: "q11-2", question: "DCT advantage:", options: ["Cheaper than manual", "Fast shifts (0.1-0.2s), no power interruption", "More gears", "Better fuel economy"], correctAnswer: 1, explanation: "Dual-clutch pre-selects next gear. Shifts in 0.1-0.2s with no power interruption!" },
    { id: "q11-3", question: "Overdrive gear means:", options: ["Gear ratio > 1:1", "Gear ratio < 1:1; reduces RPM at highway speeds", "Maximum power gear", "First gear"], correctAnswer: 1, explanation: "Overdrive (ratio < 1:1) reduces engine RPM at highway speeds for better fuel economy!" },
    { id: "q11-4", question: "Top speed limited by:", options: ["Transmission", "Power and drag: v_max = ∛(2P/(ρC_D A))", "Tire rating", "Engine redline"], correctAnswer: 1, explanation: "Top speed when power = drag power. v_max = ∛(2P/(ρC_D A))!" }
  ],
  12: [
    { id: "q12-1", question: "Electric motor efficiency:", options: ["70-80%", "85-90%", "95-97%", "99%+"], correctAnswer: 2, explanation: "Electric motors: 95-97% efficient. ICE engines: only 25-35%!" },
    { id: "q12-2", question: "Battery energy formula:", options: ["E = V × A", "E = V × Ah", "E = I × R", "E = P/t"], correctAnswer: 1, explanation: "Battery energy E = Voltage × Amp-hours. Tesla Model 3: 350V × 230Ah = 80.5 kWh!" },
    { id: "q12-3", question: "EV instant torque because:", options: ["More power", "T = k_t × I, independent of RPM", "Batteries", "No transmission"], correctAnswer: 1, explanation: "Electric motor torque T = k_t × I is independent of RPM. Full torque from 0 RPM!" },
    { id: "q12-4", question: "EV overall efficiency:", options: ["40-50%", "60-70%", "80-85%", "95%+"], correctAnswer: 2, explanation: "EV wall-to-wheels: 80-85%. ICE: only 22-33%. EVs are 2.5-3× more efficient!" }
  ],
  13: [
    { id: "q13-1", question: "Series hybrid means:", options: ["ICE and motor both drive wheels", "ICE → Generator → Battery → Motor → Wheels", "ICE only, motor assists", "Motor only"], correctAnswer: 1, explanation: "Series hybrid: ICE only generates electricity. Motor drives wheels. ICE runs at optimal RPM!" },
    { id: "q13-2", question: "Toyota Prius uses:", options: ["Series hybrid", "Parallel hybrid", "Series-parallel (power-split)", "Pure electric"], correctAnswer: 2, explanation: "Prius uses power-split with planetary gearset. Best of both worlds!" },
    { id: "q13-3", question: "Regenerative braking recovers:", options: ["100% energy", "60-70% of braking energy", "20-30% energy", "No energy"], correctAnswer: 1, explanation: "Regen braking recovers 60-70% of braking energy. Extends range and reduces brake wear!" },
    { id: "q13-4", question: "Hybrid fuel economy improvement:", options: ["5-10%", "15-25%", "30-40%", "60-80%"], correctAnswer: 2, explanation: "Hybrids achieve 30-40% better fuel economy than conventional vehicles!" }
  ],
  14: [
    { id: "q14-1", question: "Drag power formula:", options: ["P = F × v", "P = ½ρv³C_D A", "P = ½ρv²C_D A", "P = C_D × v"], correctAnswer: 1, explanation: "Drag power P = ½ρv³C_D A. The v³ term means power increases dramatically with speed!" },
    { id: "q14-2", question: "Weight reduction: 100 kg saves:", options: ["1-2% fuel", "3-5% fuel", "10-15% fuel", "20-30% fuel"], correctAnswer: 1, explanation: "Every 100 kg reduction saves 3-5% fuel. Weight affects acceleration, braking, and rolling resistance!" },
    { id: "q14-3", question: "Optimal highway speed for efficiency:", options: ["60 km/h", "80-90 km/h", "120 km/h", "150 km/h"], correctAnswer: 1, explanation: "80-90 km/h is most efficient. At 120 km/h, fuel consumption is 70% higher!" },
    { id: "q14-4", question: "Eco-driving can save:", options: ["5-10% fuel", "20-30% fuel", "40-50% fuel", "60-70% fuel"], correctAnswer: 1, explanation: "Eco-driving techniques (smooth acceleration, anticipate traffic, optimal speed) save 20-30% fuel!" }
  ],

  // Unit 3: Systems & Design (Lessons 15-19)
  15: [
    { id: "q15-1", question: "Unibody vs body-on-frame:", options: ["Unibody heavier", "Unibody 15-20% lighter, better handling", "Same weight", "Body-on-frame lighter"], correctAnswer: 1, explanation: "Unibody is 15-20% lighter and has better handling. Body-on-frame is stronger for towing!" },
    { id: "q15-2", question: "Static Stability Factor formula:", options: ["SSF = CG Height / Track", "SSF = Track / (2 × CG Height)", "SSF = Track × CG Height", "SSF = 2 × Track / CG"], correctAnswer: 1, explanation: "SSF = Track/(2×CG Height). SSF > 1.2 is safe. Lower CG = higher SSF = less rollover risk!" },
    { id: "q15-3", question: "Ideal weight distribution:", options: ["70/30 front/rear", "60/40 front/rear", "50/50 front/rear", "40/60 front/rear"], correctAnswer: 2, explanation: "50/50 weight distribution is ideal for best handling and balanced braking!" },
    { id: "q15-4", question: "EV packaging advantage:", options: ["Heavier", "Flat floor, no transmission tunnel, frunk", "Smaller interior", "Less cargo space"], correctAnswer: 1, explanation: "EVs have flat floor, no transmission tunnel, and front trunk (frunk) for efficient packaging!" }
  ],
  16: [
    { id: "q16-1", question: "Double wishbone vs MacPherson:", options: ["MacPherson better geometry", "Double wishbone better geometry, more expensive", "Same performance", "MacPherson more expensive"], correctAnswer: 1, explanation: "Double wishbone has better geometry control but is more expensive. MacPherson is simpler and cheaper!" },
    { id: "q16-2", question: "Natural frequency formula:", options: ["f_n = k/m", "f_n = (1/2π)√(k/m)", "f_n = √(k/m)", "f_n = 2π√(k/m)"], correctAnswer: 1, explanation: "Natural frequency f_n = (1/2π)√(k/m). Sport cars: 1.3-1.5 Hz, comfort: 1.0-1.2 Hz!" },
    { id: "q16-3", question: "Negative camber improves:", options: ["Straight-line speed", "Cornering grip; compensates for body roll", "Fuel economy", "Ride comfort"], correctAnswer: 1, explanation: "Negative camber (top tilts in) improves cornering grip and compensates for body roll!" },
    { id: "q16-4", question: "Rebound damping vs compression:", options: ["Same", "Rebound 2-3× compression to prevent bouncing", "Compression 2-3× rebound", "Rebound 10× compression"], correctAnswer: 1, explanation: "Rebound damping is typically 2-3× compression to prevent bouncing after bumps!" }
  ],
  17: [
    { id: "q17-1", question: "Crumple zones purpose:", options: ["Make car lighter", "Absorb crash energy by controlled deformation", "Improve aerodynamics", "Reduce cost"], correctAnswer: 1, explanation: "Crumple zones absorb crash energy through controlled deformation, reducing peak force on occupants!" },
    { id: "q17-2", question: "ESC reduces fatal crashes by:", options: ["10-20%", "30-40%", "50%", "70-80%"], correctAnswer: 2, explanation: "ESC reduces fatal single-vehicle crashes by 50%! It prevents skidding by applying individual brakes!" },
    { id: "q17-3", question: "Airbag deployment time:", options: ["5-10 ms", "20-30 ms", "50-100 ms", "200-300 ms"], correctAnswer: 1, explanation: "Airbags deploy in 20-30 ms! Crash sensors detect impact, pretensioners fire, then airbags deploy!" },
    { id: "q17-4", question: "AEB reduces rear-end crashes by:", options: ["10-20%", "30-40%", "50%", "70-80%"], correctAnswer: 2, explanation: "Automatic Emergency Braking reduces rear-end crashes by 50% and injuries by 56%!" }
  ],
  18: [
    { id: "q18-1", question: "Modern car has how many ECUs?", options: ["5-10", "20-30", "50-100", "200-300"], correctAnswer: 2, explanation: "Modern cars have 50-100 ECUs! They control engine, transmission, brakes, airbags, infotainment, etc!" },
    { id: "q18-2", question: "CAN bus advantage:", options: ["Increases power", "Reduces wiring by 50+ kg, enables complex features", "Improves fuel economy", "Reduces cost"], correctAnswer: 1, explanation: "CAN bus connects all ECUs, reducing wiring by 50+ kg and enabling complex features!" },
    { id: "q18-3", question: "Level 2 automation means:", options: ["No automation", "ACC + lane keeping; driver must monitor", "Full self-driving", "Highway only"], correctAnswer: 1, explanation: "Level 2: ACC + lane keeping. Driver must monitor and be ready to take over!" },
    { id: "q18-4", question: "Sensor fusion combines:", options: ["Only cameras", "Radar, camera, lidar for redundancy and accuracy", "Only radar", "Only lidar"], correctAnswer: 1, explanation: "Sensor fusion combines radar (distance), camera (classification), lidar (3D map) for redundancy!" }
  ],
  19: [
    { id: "q19-1", question: "EV market share projection 2030:", options: ["10-20%", "25-35%", "40-50%", "70-80%"], correctAnswer: 2, explanation: "EV market share: 18% (2023) → 40-50% (2030 projection)!" },
    { id: "q19-2", question: "Battery cost projection 2030:", options: ["$200-250/kWh", "$150-180/kWh", "$100-130/kWh", "$50-70/kWh"], correctAnswer: 3, explanation: "Battery costs: $100-130/kWh (2024) → $50-70/kWh (2030). Price parity with ICE!" },
    { id: "q19-3", question: "Solid-state battery energy density:", options: ["200-250 Wh/kg", "300-350 Wh/kg", "400-450 Wh/kg", "500+ Wh/kg"], correctAnswer: 3, explanation: "Solid-state batteries: 500+ Wh/kg vs current 250-300 Wh/kg. Safer and faster charging!" },
    { id: "q19-4", question: "Carbon fiber cost projection:", options: ["$50-100/kg", "$30-50/kg", "$15-30/kg", "$5-10/kg with mass production"], correctAnswer: 3, explanation: "Carbon fiber: $15-30/kg (current) → $5-10/kg (mass production). 50% lighter than steel!" }
  ]
};

export default automotiveQuizzes;
