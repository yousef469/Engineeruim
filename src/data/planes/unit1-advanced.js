// Unit 1: Flight Fundamentals - Advanced Lessons
// Lessons 8-11: Performance, stability, propulsion, design

export const planesUnit1AdvancedLessons = [
  {
    id: 8,
    title: "Aircraft Performance & Flight Envelope",
    unit: "Flight Fundamentals",
    duration: "30 min",
    introduction: "Aircraft performance determines what missions are possible. Understanding the flight envelope and performance calculations is essential for aircraft design and operations.",
    
    sections: [
      {
        title: "Power Required vs Available",
        content: "Power Required:\n\nPower needed to overcome drag:\nP_req = D × V = ½ρV³SC_D\n\nWhere:\n• P_req = power required (W)\n• D = drag (N)\n• V = velocity (m/s)\n\nPower curve:\n• High at low speed (induced drag)\n• Minimum at optimal speed\n• High at high speed (parasite drag)\n\nPower Available:\n\nFrom propeller:\nP_avail = η × P_engine\n\nWhere:\n• η = propeller efficiency (0.7-0.85)\n• P_engine = engine power\n\nFrom jet:\nP_avail = T × V\n\nWhere T = thrust (nearly constant)\n\nExcess Power:\nP_excess = P_avail - P_req\n\nUsed for:\n• Climbing\n• Accelerating\n• Maneuvering\n\nExample: Cessna 172\n• Engine: 180 HP = 134 kW\n• Propeller efficiency: 0.80\n• P_avail = 107 kW\n• At cruise (55 m/s):\n  - Drag = 1,200 N\n  - P_req = 1,200 × 55 = 66 kW\n  - P_excess = 41 kW\n  - Can climb at 5 m/s"
      },
      {
        title: "Climb Performance",
        content: "Rate of Climb:\n\nRC = P_excess / W\n\nWhere:\n• RC = rate of climb (m/s)\n• P_excess = excess power (W)\n• W = weight (N)\n\nMaximum rate of climb:\nOccurs at speed where P_excess is maximum\n\nClimb Angle:\n\nγ = arcsin(T - D)/W\n\nFor small angles:\nγ ≈ (T - D)/W\n\nMaximum climb angle:\nOccurs at minimum drag speed\n\nExample: Boeing 737-800\n• Weight: 700,000 N\n• Thrust (both engines): 240,000 N\n• Drag at climb speed: 100,000 N\n• Excess thrust: 140,000 N\n\nClimb angle:\nγ = 140,000/700,000 = 0.20 rad = 11.5°\n\nClimb rate:\n• Speed: 150 m/s\n• RC = (140,000 × 150)/700,000 = 30 m/s\n• = 1,800 m/min = 5,900 ft/min\n\nService Ceiling:\nAltitude where RC = 0.5 m/s (100 ft/min)\n\nBoeing 737: 41,000 ft (12,500 m)\nCessna 172: 14,000 ft (4,300 m)\n\nAbsolute Ceiling:\nAltitude where RC = 0\n• Cannot climb higher\n• Rarely reached in practice"
      },
      {
        title: "Range & Endurance",
        content: "Breguet Range Equation:\n\nR = (V/SFC) × (L/D) × ln(W_i/W_f)\n\nWhere:\n• R = range (m)\n• V = velocity (m/s)\n• SFC = specific fuel consumption (kg/N·s)\n• L/D = lift-to-drag ratio\n• W_i = initial weight\n• W_f = final weight\n\nMaximum Range:\nOccurs at:\n• Maximum L/D\n• Optimal altitude\n• Optimal speed\n\nExample: Boeing 787-9\n• L/D = 20\n• Cruise speed: 250 m/s (Mach 0.85)\n• SFC = 1.6×10⁻⁵ kg/(N·s)\n• Initial weight: 2,500,000 N\n• Fuel: 1,200,000 N\n• Final weight: 1,300,000 N\n\nRange:\nR = (250/1.6×10⁻⁵) × 20 × ln(2,500,000/1,300,000)\nR = 312,500,000 × 20 × 0.654\nR = 4,087,500 m = 4,088 km\n\nActual range: 14,800 km (with reserves, winds, routing)\n\nEndurance:\n\nE = (1/SFC) × (L/D) × ln(W_i/W_f)\n\nMaximum endurance:\nOccurs at maximum L/D, minimum speed\n\nExample: Cessna 172\n• Endurance: 5 hours\n• Fuel: 200 kg\n• Consumption: 40 kg/hour"
      },
      {
        title: "Flight Envelope",
        content: "V-n Diagram:\n\nShows operating limits:\n• V = velocity (horizontal axis)\n• n = load factor (vertical axis)\n\nLoad Factor:\nn = L/W = Total load / Weight\n\nLevel flight: n = 1\nClimbing turn: n > 1\nNegative g: n < 0\n\nStructural Limits:\n\nPositive limit load factor:\n• Transport: n = +2.5 to +3.8\n• Aerobatic: n = +6 to +9\n• Fighter: n = +9 to +12\n\nNegative limit:\n• Transport: n = -1.0\n• Aerobatic: n = -3 to -6\n\nSpeed Limits:\n\n1. Stall Speed (V_s):\n• Minimum speed\n• Increases with load factor\n• V_s(n) = V_s0 × √n\n\n2. Maximum Speed (V_max):\n• Structural limit\n• Flutter limit\n• Engine limit\n\n3. Maneuvering Speed (V_a):\n• Maximum speed for full deflection\n• Stall before structural damage\n\n4. Never Exceed Speed (V_ne):\n• Absolute maximum\n• Red line on airspeed indicator\n\nExample: Cessna 172\n• V_s0 = 24 m/s (stall, level)\n• V_a = 45 m/s (maneuvering)\n• V_no = 73 m/s (normal operations)\n• V_ne = 82 m/s (never exceed)\n• n_max = +3.8 g\n• n_min = -1.52 g\n\nCorner Velocity:\nSpeed for maximum turn rate\n• Occurs at intersection of stall and structural limit\n• Fighters optimize for this\n\nF-16 corner velocity: 450 km/h at 9g"
      }
    ],
    
    keyTakeaways: [
      "Power required curve has minimum at optimal cruise speed",
      "Rate of climb: RC = P_excess/W; depends on excess power",
      "Breguet range equation: R = (V/SFC)×(L/D)×ln(W_i/W_f)",
      "V-n diagram shows flight envelope with structural and stall limits",
      "Load factor n = L/W; level flight n=1, turns n>1",
      "Service ceiling is altitude where climb rate = 0.5 m/s"
    ],
    
    vocabulary: [
      { term: "Power Required", definition: "Power needed to overcome drag at given speed" },
      { term: "Rate of Climb (RC)", definition: "Vertical speed; depends on excess power" },
      { term: "Load Factor (n)", definition: "Ratio of lift to weight; n=1 in level flight" },
      { term: "V-n Diagram", definition: "Flight envelope showing speed and load factor limits" },
      { term: "Service Ceiling", definition: "Altitude where climb rate drops to 0.5 m/s" },
      { term: "Breguet Range", definition: "Theoretical maximum range based on L/D and fuel" }
    ]
  },

  {
    id: 9,
    title: "Stability & Control Fundamentals",
    unit: "Flight Fundamentals",
    duration: "30 min",
    introduction: "Aircraft stability determines how it responds to disturbances. Understanding stability and control is essential for safe flight and aircraft design.",
    
    sections: [
      {
        title: "Static Stability",
        content: "Three Types of Stability:\n\n1. Positive (Stable):\n• Returns to equilibrium after disturbance\n• Most aircraft in cruise\n• Safe, predictable\n\n2. Neutral:\n• Stays at new position\n• No restoring force\n• Rare in practice\n\n3. Negative (Unstable):\n• Diverges from equilibrium\n• Requires constant correction\n• Fighters (for agility)\n\nLongitudinal Stability:\n\nPitching moment:\nM = M_0 + M_α × α\n\nWhere:\n• M = pitching moment\n• α = angle of attack\n• M_α = moment derivative\n\nStable if: M_α < 0\n(Nose-down moment when α increases)\n\nCenter of Gravity (CG):\n• Must be ahead of neutral point\n• Typical: 25-30% of chord\n• Too far forward: Heavy controls\n• Too far aft: Unstable\n\nStatic Margin:\nSM = (NP - CG)/c\n\nWhere:\n• NP = neutral point\n• CG = center of gravity\n• c = mean chord\n\nTypical: SM = 5-15%\n\nExample: Cessna 172\n• CG range: 35-47 inches aft of datum\n• Neutral point: 50 inches\n• Static margin: 6-30%\n• Forward CG: More stable, heavier controls\n• Aft CG: Less stable, lighter controls"
      },
      {
        title: "Control Surfaces",
        content: "Primary Controls:\n\n1. Elevator (Pitch):\n• Tail surface\n• Controls angle of attack\n• Nose up/down\n• Deflection: ±25°\n\n2. Ailerons (Roll):\n• Wing surfaces\n• Differential lift\n• Bank left/right\n• Deflection: ±20°\n\n3. Rudder (Yaw):\n• Vertical tail\n• Controls heading\n• Coordinated turns\n• Deflection: ±25°\n\nControl Power:\n\nElevator effectiveness:\nC_mδe = ∂C_m/∂δ_e\n\nTypical: -0.01 to -0.02 per degree\n\nExample: Boeing 737\n• Elevator deflection: 10°\n• Moment change: ΔC_m = -0.015 × 10 = -0.15\n• Significant pitch change!\n\nTrim:\n\nAdjusts control surface for hands-off flight\n• Elevator trim: Most important\n• Aileron trim: Fuel imbalance\n• Rudder trim: Engine-out\n\nTrim tabs:\n• Small surfaces on main control\n• Deflect opposite to main surface\n• Reduce pilot workload\n\nFly-by-Wire:\n\nModern aircraft:\n• Electronic control\n• Computer interprets pilot input\n• Automatic stability augmentation\n• Envelope protection\n\nAdvantages:\n• Can fly unstable aircraft\n• Better performance\n• Safety features\n• Weight savings\n\nExamples:\n• Airbus A320: Full fly-by-wire\n• Boeing 777: Fly-by-wire\n• F-16: Unstable without computer"
      },
      {
        title: "Dynamic Stability",
        content: "Oscillatory Modes:\n\n1. Short Period:\n• Fast pitch oscillation\n• Period: 1-2 seconds\n• Heavily damped\n• Pilot doesn't notice\n\n2. Phugoid:\n• Slow pitch/speed oscillation\n• Period: 30-60 seconds\n• Lightly damped\n• Exchange altitude for speed\n• Pilot can easily control\n\n3. Dutch Roll:\n• Combined yaw and roll\n• Period: 3-10 seconds\n• Can be uncomfortable\n• Yaw damper helps\n\n4. Spiral:\n• Slow roll divergence\n• Time to double: 20-30 seconds\n• Easy to control\n• Most aircraft slightly unstable\n\nDamping Ratio:\n\nζ = c/(2√(km))\n\nWhere:\n• c = damping coefficient\n• k = spring constant\n• m = mass\n\nDesired:\n• ζ > 0.7 (critically damped)\n• Prevents oscillations\n\nExample: Boeing 737 Phugoid\n• Period: 45 seconds\n• Damping ratio: 0.1 (lightly damped)\n• Amplitude halves every 3 cycles\n• Pilot easily controls\n\nStability Augmentation:\n\nYaw Damper:\n• Senses yaw rate\n• Applies rudder\n• Reduces Dutch roll\n• Standard on jets\n\nStability Augmentation System (SAS):\n• Improves all modes\n• Automatic corrections\n• Transparent to pilot\n• Critical for unstable aircraft"
      },
      {
        title: "Spin & Stall Recovery",
        content: "Spin Characteristics:\n\nAutorotation:\n• One wing stalled more than other\n• Asymmetric lift\n• Yaw and roll coupled\n• Descends in spiral\n\nSpin Entry:\n1. Stall (both wings)\n2. Yaw disturbance\n3. One wing drops\n4. Autorotation begins\n\nSpin Types:\n\n1. Incipient:\n• First 2 turns\n• Can recover easily\n• Reduce angle of attack\n\n2. Developed:\n• Steady rotation\n• Standard recovery works\n• 4-6 turns to recover\n\n3. Flat:\n• High angle of attack\n• Difficult recovery\n• May require special techniques\n\nRecovery Procedure (PARE):\n\n1. Power: Idle\n2. Ailerons: Neutral\n3. Rudder: Full opposite to rotation\n4. Elevator: Forward (break stall)\n5. Wait for rotation to stop\n6. Neutralize rudder\n7. Pull out of dive\n\nAltitude Loss:\n• Typical: 300-500 m per turn\n• Minimum recovery altitude: 1,000 m\n• Training: 3,000 m minimum\n\nSpin Resistance:\n\nDesign features:\n• Wing twist (washout)\n• Stall strips\n• Dorsal fin\n• T-tail (can be problematic)\n\nCertification:\n• Normal category: Spin recovery not required\n• Utility: 1-turn spin recovery\n• Aerobatic: 6-turn spin recovery\n\nExample: Cessna 172\n• Spin certified\n• Recovery: 1-2 turns\n• Altitude loss: 150 m per turn\n• Very docile characteristics"
      }
    ],
    
    keyTakeaways: [
      "Static stability: Aircraft returns to equilibrium after disturbance",
      "CG must be ahead of neutral point for longitudinal stability",
      "Three primary controls: elevator (pitch), ailerons (roll), rudder (yaw)",
      "Dynamic modes: Short period (fast), phugoid (slow), Dutch roll (oscillatory)",
      "Fly-by-wire allows unstable aircraft with computer augmentation",
      "Spin recovery: PARE (Power idle, Ailerons neutral, Rudder opposite, Elevator forward)"
    ],
    
    vocabulary: [
      { term: "Static Stability", definition: "Initial tendency to return to equilibrium" },
      { term: "Center of Gravity (CG)", definition: "Point where weight acts; affects stability" },
      { term: "Neutral Point", definition: "CG location for neutral stability" },
      { term: "Phugoid", definition: "Slow oscillation exchanging altitude for speed" },
      { term: "Dutch Roll", definition: "Coupled yaw-roll oscillation" },
      { term: "Fly-by-Wire", definition: "Electronic flight control with computer mediation" }
    ]
  }
];

export default planesUnit1AdvancedLessons;
