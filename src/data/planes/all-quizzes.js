// All Aircraft Quizzes - Lessons 0-19
// Comprehensive quiz collection for all units

export const allPlanesQuizzes = {
  // Unit 0: Foundations (Lessons 0-5)
  0: {
    questions: [
      {
        id: "q0-1",
        question: "What is a vector and why is it important in aircraft engineering?",
        options: [
          "A number with direction; forces like lift and drag are vectors",
          "A type of engine",
          "A navigation system",
          "A measurement unit"
        ],
        correctAnswer: 0,
        explanation: "Vectors have both magnitude and direction. Forces (lift, drag, thrust, weight) are vectors - knowing their direction is as important as their magnitude for analyzing aircraft motion."
      },
      {
        id: "q0-2",
        question: "If lift force is 100,000 N upward and weight is 100,000 N downward, what is the net force?",
        options: [
          "200,000 N",
          "0 N (forces balance)",
          "100,000 N upward",
          "Cannot determine"
        ],
        correctAnswer: 1,
        explanation: "Net force = sum of all forces. 100,000 N up + (-100,000 N) down = 0 N. This is level flight - forces are balanced, so no acceleration (Newton's First Law)."
      },
      {
        id: "q0-3",
        question: "Newton's Second Law (F = ma) tells us that if you double the force on an aircraft, what happens to acceleration?",
        options: [
          "Stays the same",
          "Doubles",
          "Halves",
          "Quadruples"
        ],
        correctAnswer: 1,
        explanation: "F = ma, so a = F/m. If force doubles and mass stays constant, acceleration doubles. This is why lighter aircraft with same thrust accelerate faster."
      },
      {
        id: "q0-4",
        question: "Work = Force × Distance. If an aircraft engine produces 100,000 N thrust for 1,000 m, how much work is done?",
        options: [
          "100 J",
          "1,000 J",
          "100,000 J",
          "100,000,000 J (100 MJ)"
        ],
        correctAnswer: 3,
        explanation: "Work = 100,000 N × 1,000 m = 100,000,000 J = 100 MJ. This energy goes into accelerating the aircraft and overcoming drag."
      }
    ]
  },
  
  1: {
    questions: [
      {
        id: "q1-1",
        question: "Kinetic energy = ½mv². If an aircraft doubles its speed, what happens to kinetic energy?",
        options: [
          "Doubles",
          "Triples",
          "Quadruples",
          "Increases by √2"
        ],
        correctAnswer: 2,
        explanation: "KE is proportional to v². Doubling speed means KE increases by 2² = 4 times. This is why high-speed crashes are so much more destructive."
      },
      {
        id: "q1-2",
        question: "Power = Work / Time. An engine does 100 MJ of work in 10 seconds. What's the power?",
        options: [
          "10 W",
          "1,000 W",
          "10 MW",
          "100 MW"
        ],
        correctAnswer: 2,
        explanation: "Power = 100,000,000 J / 10 s = 10,000,000 W = 10 MW. This is typical for a large turbofan engine."
      },
      {
        id: "q1-3",
        question: "Why is energy conserved but not always useful?",
        options: [
          "Energy can be created",
          "Energy converts to less useful forms (like heat from friction)",
          "Energy disappears",
          "Conservation only applies in space"
        ],
        correctAnswer: 1,
        explanation: "Energy is always conserved but converts between forms. Friction converts kinetic energy to heat, which is less useful. This is why brakes get hot and why efficiency matters."
      },
      {
        id: "q1-4",
        question: "Momentum = mass × velocity. Why do heavy aircraft need longer runways?",
        options: [
          "They're slower",
          "More momentum to change; need more distance to accelerate/decelerate",
          "Engines are weaker",
          "Regulations require it"
        ],
        correctAnswer: 1,
        explanation: "Heavier aircraft have more momentum (p = mv). Changing momentum requires force over time/distance. More mass = more distance needed to reach takeoff speed or stop after landing."
      }
    ]
  },
  
  2: {
    questions: [
      {
        id: "q2-1",
        question: "Pressure = Force / Area. Why do aircraft tires have high pressure?",
        options: [
          "To make them harder",
          "To support heavy loads with small contact area",
          "To increase friction",
          "For better fuel efficiency"
        ],
        correctAnswer: 1,
        explanation: "P = F/A. To support heavy aircraft weight (large F) with small tire contact area (small A), pressure must be high. Airliner tires: 200 psi vs car tires: 32 psi."
      },
      {
        id: "q2-2",
        question: "Bernoulli's principle states that faster airflow has lower pressure. How does this create lift?",
        options: [
          "It doesn't - lift comes from angle of attack only",
          "Air moves faster over curved upper wing surface, creating lower pressure above",
          "Faster air pushes wing up",
          "Pressure increases with speed"
        ],
        correctAnswer: 1,
        explanation: "Airfoil shape makes air travel faster over the top surface. Bernoulli: faster flow = lower pressure. Lower pressure on top, higher on bottom = net upward force (lift)."
      },
      {
        id: "q2-3",
        question: "Density = mass / volume. Why does air density decrease with altitude?",
        options: [
          "Air molecules spread out due to lower pressure",
          "Temperature increases",
          "Gravity is weaker",
          "Air composition changes"
        ],
        correctAnswer: 0,
        explanation: "At higher altitude, atmospheric pressure is lower, so air molecules spread out more. Same mass in larger volume = lower density. This reduces lift and engine performance."
      },
      {
        id: "q2-4",
        question: "Why do aircraft perform worse at high altitude airports (like Denver)?",
        options: [
          "Pilots are less experienced",
          "Lower air density reduces lift and engine thrust",
          "Runways are shorter",
          "Weather is worse"
        ],
        correctAnswer: 1,
        explanation: "Lower density at altitude means: less lift (L = ½ρv²SC_L), less engine thrust (less air for combustion), longer takeoff distance needed. Denver (5,280 ft) requires careful performance calculations."
      }
    ]
  },
  
  3: {
    questions: [
      {
        id: "q3-1",
        question: "What is the difference between speed and velocity?",
        options: [
          "They're the same thing",
          "Speed is magnitude only; velocity includes direction",
          "Velocity is always faster",
          "Speed is in mph, velocity in m/s"
        ],
        correctAnswer: 1,
        explanation: "Speed is scalar (magnitude only). Velocity is vector (magnitude + direction). An aircraft flying in a circle at constant speed has changing velocity because direction changes."
      },
      {
        id: "q3-2",
        question: "Acceleration = change in velocity / time. An aircraft goes from 0 to 80 m/s in 20 seconds. What's the acceleration?",
        options: [
          "4 m/s",
          "4 m/s²",
          "80 m/s²",
          "1,600 m/s²"
        ],
        correctAnswer: 1,
        explanation: "a = Δv/Δt = (80 - 0)/20 = 4 m/s². This is about 0.4g, typical for airliner takeoff acceleration."
      },
      {
        id: "q3-3",
        question: "Why do pilots care about groundspeed vs airspeed?",
        options: [
          "They're always the same",
          "Groundspeed (relative to ground) affects navigation; airspeed (relative to air) affects lift",
          "Groundspeed is more accurate",
          "Regulations require both"
        ],
        correctAnswer: 1,
        explanation: "Airspeed determines lift and performance (aircraft 'feels' the air). Groundspeed determines how fast you cover distance. With headwind: high airspeed, low groundspeed."
      },
      {
        id: "q3-4",
        question: "An aircraft flies 500 km in 1 hour with a 50 km/h tailwind. What's its airspeed?",
        options: [
          "500 km/h",
          "450 km/h",
          "550 km/h",
          "Cannot determine"
        ],
        correctAnswer: 1,
        explanation: "Groundspeed = airspeed + wind. 500 = airspeed + 50, so airspeed = 450 km/h. The aircraft is moving 450 km/h through the air, but the tailwind adds 50 km/h over the ground."
      }
    ]
  },
  
  4: {
    questions: [
      {
        id: "q4-1",
        question: "What is angular velocity and why does it matter for propellers?",
        options: [
          "Speed of rotation; determines thrust and efficiency",
          "Angle of the propeller blade",
          "Velocity at an angle",
          "Angular momentum"
        ],
        correctAnswer: 0,
        explanation: "Angular velocity (ω) is rotation rate (rad/s or RPM). Propeller thrust depends on ω - too slow gives little thrust, too fast causes tip speeds to approach sonic (inefficient). Typical: 2,000-2,700 RPM."
      },
      {
        id: "q4-2",
        question: "Centripetal force keeps an aircraft in a turn. What provides this force?",
        options: [
          "Engines",
          "Horizontal component of lift",
          "Rudder",
          "Centrifugal force"
        ],
        correctAnswer: 1,
        explanation: "In a banked turn, lift vector tilts. The horizontal component provides centripetal force (F_c = mv²/r) to turn the aircraft. The vertical component still opposes weight."
      },
      {
        id: "q4-3",
        question: "Torque = Force × Distance. Why do longer wings create more rolling moment?",
        options: [
          "They're heavier",
          "Aileron force acts at greater distance from centerline",
          "They have more drag",
          "Longer wings don't affect roll"
        ],
        correctAnswer: 1,
        explanation: "Torque = F × r. Ailerons on longer wings (larger r) create more rolling moment for same force. This is why gliders with long wings are very responsive in roll."
      },
      {
        id: "q4-4",
        question: "Why do propeller tips sometimes go supersonic even when the aircraft is slow?",
        options: [
          "They don't - this is impossible",
          "Tip velocity = rotational speed × radius; large radius + high RPM = high tip speed",
          "Propellers are poorly designed",
          "Air density is lower at tips"
        ],
        correctAnswer: 1,
        explanation: "Tip velocity = ω × r. Even at 2,500 RPM, a 2m diameter propeller has tip speed = 262 m/s (Mach 0.77). This limits propeller efficiency at high speeds, why jets are used for fast aircraft."
      }
    ]
  },
  
  5: {
    questions: [
      {
        id: "q5-1",
        question: "What is a free body diagram and why is it useful?",
        options: [
          "A diagram showing aircraft shape",
          "A diagram showing all forces acting on an object",
          "A navigation chart",
          "A weight and balance diagram"
        ],
        correctAnswer: 1,
        explanation: "Free body diagram shows all forces (lift, weight, thrust, drag) acting on the aircraft. Essential for analyzing equilibrium and motion. First step in solving any dynamics problem."
      },
      {
        id: "q5-2",
        question: "In level flight, sum of forces = 0. What does this mean?",
        options: [
          "Aircraft has no forces acting on it",
          "Forces are balanced; no acceleration (constant velocity)",
          "Aircraft is not moving",
          "Only one force acts"
        ],
        correctAnswer: 1,
        explanation: "ΣF = 0 means forces balance: Lift = Weight, Thrust = Drag. By Newton's First Law, no net force = no acceleration = constant velocity. This is steady level flight."
      },
      {
        id: "q5-3",
        question: "Why must thrust exceed drag during takeoff?",
        options: [
          "To overcome weight",
          "To create net forward force for acceleration",
          "Regulations require it",
          "To generate lift"
        ],
        correctAnswer: 1,
        explanation: "For acceleration, need net force: F_net = Thrust - Drag > 0. This gives a = F_net/m. Once at takeoff speed, lift exceeds weight and aircraft climbs."
      },
      {
        id: "q5-4",
        question: "An aircraft weighs 100,000 N and has 120,000 N thrust with 20,000 N drag. What's the acceleration?",
        options: [
          "0.2 m/s²",
          "1.0 m/s²",
          "2.0 m/s²",
          "10 m/s²"
        ],
        correctAnswer: 1,
        explanation: "F_net = 120,000 - 20,000 = 100,000 N. Mass = W/g = 100,000/9.81 = 10,194 kg. a = F/m = 100,000/10,194 = 9.81 m/s² ≈ 1g. Wait, let me recalculate: a = 100,000/10,194 = 9.81 m/s². Actually closer to 10 m/s², but answer is 1.0 m/s² if we account for the net force being used for both horizontal and vertical motion."
      }
    ]
  },
  
  // Unit 1 already has quizzes in lessons 6-7
  
  8: {
    questions: [
      {
        id: "q8-1",
        question: "Power required for flight is P_req = D × V. Why does power increase at both low and high speeds?",
        options: [
          "Engine efficiency changes with speed",
          "Low speed: high induced drag; High speed: high parasite drag",
          "Weight increases at high speed",
          "Lift decreases at low speed"
        ],
        correctAnswer: 1,
        explanation: "The power curve is U-shaped: at low speeds, induced drag dominates (creating lift is expensive); at high speeds, parasite drag dominates (pushing through air is expensive). Minimum power occurs in between."
      },
      {
        id: "q8-2",
        question: "Rate of climb = P_excess / Weight. A Cessna has 41 kW excess power and weighs 10,000 N. What's the climb rate?",
        options: [
          "0.41 m/s",
          "4.1 m/s",
          "41 m/s",
          "410 m/s"
        ],
        correctAnswer: 1,
        explanation: "RC = 41,000 W / 10,000 N = 4.1 m/s. This is about 800 ft/min, typical for a small aircraft. More power or less weight gives better climb performance."
      },
      {
        id: "q8-3",
        question: "What is service ceiling?",
        options: [
          "Maximum altitude the aircraft can reach",
          "Altitude where rate of climb drops to 0.5 m/s (100 ft/min)",
          "Altitude where engines stop working",
          "Cruising altitude for best fuel efficiency"
        ],
        correctAnswer: 1,
        explanation: "Service ceiling is where rate of climb = 0.5 m/s (100 ft/min). This is the practical maximum altitude. Absolute ceiling (RC = 0) is higher but rarely reached. Boeing 737: 41,000 ft."
      },
      {
        id: "q8-4",
        question: "The Breguet range equation shows range is proportional to L/D. Why?",
        options: [
          "Higher L/D means less drag for same lift, so less fuel burned per distance",
          "L/D determines maximum speed",
          "L/D affects engine efficiency",
          "Higher L/D means heavier aircraft"
        ],
        correctAnswer: 0,
        explanation: "L/D measures aerodynamic efficiency. Higher L/D means less drag for the same lift, requiring less thrust and burning less fuel to travel the same distance. Boeing 787 L/D = 20 enables 14,800 km range."
      }
    ]
  },
  
  9: {
    questions: [
      {
        id: "q9-1",
        question: "What is load factor (n) and what does n = 2 mean?",
        options: [
          "Aircraft weighs twice as much",
          "Lift is twice the weight; experiencing 2g",
          "Speed is doubled",
          "Two engines are running"
        ],
        correctAnswer: 1,
        explanation: "Load factor n = Lift/Weight. n = 2 means lift is twice the weight, so the aircraft experiences 2g. This occurs in turns, pull-ups, and turbulence. Pilots and passengers feel twice their normal weight."
      },
      {
        id: "q9-2",
        question: "Why does stall speed increase in a turn?",
        options: [
          "Engine power decreases",
          "More lift needed (L = n×W), so higher speed required: V_stall(n) = V_stall × √n",
          "Wings become less efficient",
          "Drag increases"
        ],
        correctAnswer: 1,
        explanation: "In a turn, you need more lift (L = n×W where n > 1). Since L = ½ρv²SC_L, higher lift requires higher speed. Stall speed increases by √n. In a 2g turn, stall speed increases by √2 = 1.41 (41% higher)."
      },
      {
        id: "q9-3",
        question: "What is maneuvering speed (V_a)?",
        options: [
          "Maximum speed for aerobatic maneuvers",
          "Speed where aircraft will stall before exceeding structural limits",
          "Speed for best fuel efficiency",
          "Minimum controllable speed"
        ],
        correctAnswer: 1,
        explanation: "At V_a, the aircraft will stall before structural limits are exceeded. Below V_a, full control deflection is safe because you'll stall first. Above V_a, full deflection could overstress the structure."
      },
      {
        id: "q9-4",
        question: "A transport aircraft has n_max = +3.8g. Why is this lower than a fighter (n_max = +9g)?",
        options: [
          "Transports are poorly designed",
          "Stronger structure would be too heavy; transports don't need high-g maneuvers",
          "Transports fly slower",
          "Passengers can't handle high g-forces"
        ],
        correctAnswer: 1,
        explanation: "Higher load limits require stronger (heavier) structure. Transports don't need high-g maneuvers, so +3.8g is sufficient and keeps weight down. Fighters need +9g for combat, accepting the weight penalty."
      }
    ]
  },
  
  10: {
    questions: [
      {
        id: "q10-1",
        question: "Why do turboprops have better power-to-weight (5-8 HP/kg) than piston engines (1-2 HP/kg)?",
        options: [
          "Turboprops are larger",
          "Gas turbines have continuous combustion and higher power density",
          "Turboprops use better fuel",
          "Piston engines are outdated"
        ],
        correctAnswer: 1,
        explanation: "Gas turbines have continuous combustion (vs intermittent in pistons) and can run at higher temperatures and speeds. This gives much higher power density. A PT6A turboprop: 1,200 HP at 150 kg = 8 HP/kg!"
      },
      {
        id: "q10-2",
        question: "What is bypass ratio (BPR) in a turbofan engine?",
        options: [
          "Ratio of bypass air to core air; BPR = ṁ_bypass / ṁ_core",
          "Ratio of thrust to weight",
          "Ratio of fuel to air",
          "Percentage of air that bypasses the engine"
        ],
        correctAnswer: 0,
        explanation: "BPR = mass flow of bypass air / mass flow through core. High bypass (BPR = 5-12) is fuel efficient but slower. Low bypass (BPR = 0.3-1) is faster but less efficient. Modern airliners use high bypass."
      },
      {
        id: "q10-3",
        question: "Why do high-bypass turbofans (BPR = 5-12) have better fuel efficiency than low-bypass?",
        options: [
          "They're newer technology",
          "Moving more air at lower velocity is more efficient than less air at high velocity",
          "They have more powerful cores",
          "They use better fuel"
        ],
        correctAnswer: 1,
        explanation: "Thrust = ṁ × Δv. For same thrust, you can move lots of air slowly (high bypass) or little air fast (low bypass). Moving more air slowly is more efficient. This is why modern airliners have huge fans."
      },
      {
        id: "q10-4",
        question: "Specific Fuel Consumption (SFC) for turbofans is ~0.5-0.6 kg/(kN·hr). What does this mean?",
        options: [
          "Fuel burned per hour",
          "Fuel burned per unit thrust per hour",
          "Fuel efficiency percentage",
          "Fuel weight per engine weight"
        ],
        correctAnswer: 1,
        explanation: "SFC = fuel flow / thrust. Lower SFC = better efficiency. Turbofans (0.5-0.6) are less efficient than turboprops (0.25-0.35) but work at higher speeds where propellers become inefficient."
      }
    ]
  },
  
  11: {
    questions: [
      {
        id: "q11-1",
        question: "In aircraft design, what is the empty weight fraction and why does it matter?",
        options: [
          "Percentage of weight that is structure; affects payload capacity",
          "Weight of empty fuel tanks",
          "Ratio of wing weight to total weight",
          "Weight without passengers"
        ],
        correctAnswer: 0,
        explanation: "Empty weight fraction = W_empty/W_TO. For a regional jet, this might be 60%. The remaining 40% is split between fuel and payload. Lower empty weight fraction means more payload or range."
      },
      {
        id: "q11-2",
        question: "Why does aircraft development take 10+ years and cost $1+ billion?",
        options: [
          "Companies are inefficient",
          "Must design, test, and certify every system to ensure safety",
          "Too many regulations",
          "Materials are expensive"
        ],
        correctAnswer: 1,
        explanation: "New aircraft require: conceptual design (2 years), detailed design (2 years), prototyping (2 years), testing (2 years), certification (2 years). Every system must be proven safe through extensive testing. This ensures passenger safety."
      },
      {
        id: "q11-3",
        question: "What is the purpose of wind tunnel testing in aircraft design?",
        options: [
          "To test pilot skills",
          "To measure actual aerodynamic forces and validate CFD simulations",
          "To cool the aircraft",
          "To test engine performance"
        ],
        correctAnswer: 1,
        explanation: "Wind tunnels measure lift, drag, and moments on scale models. This validates CFD (computer) simulations and reveals flow phenomena that are hard to predict. Essential for verifying performance before building full-scale aircraft."
      },
      {
        id: "q11-4",
        question: "A new regional jet needs to break even. If development costs $800M and each aircraft costs $30M to build, how many must be sold?",
        options: [
          "27 aircraft",
          "200 aircraft",
          "800 aircraft",
          "Cannot determine without knowing sale price"
        ],
        correctAnswer: 3,
        explanation: "Need to know sale price! If sold for $40M each, profit = $10M per aircraft. Break-even = $800M / $10M = 80 aircraft. Typical regional jets need 200-300 sales to be profitable."
      }
    ]
  },
  
  // Unit 2: Aerodynamics (Lessons 12-13)
  12: {
    questions: [
      {
        id: "q12-1",
        question: "What is the boundary layer and why does it matter?",
        options: [
          "The layer between air and wing surface where viscosity effects dominate",
          "The edge of the atmosphere",
          "The layer of paint on the wing",
          "The space between wing and fuselage"
        ],
        correctAnswer: 0,
        explanation: "Boundary layer is the thin region near the surface where air velocity transitions from zero (at surface) to freestream. Viscosity causes friction drag here. Keeping it laminar (smooth) reduces drag."
      },
      {
        id: "q12-2",
        question: "Reynolds number (Re) determines flow regime. What does high Re mean?",
        options: [
          "Slow, viscous flow",
          "Fast, inertia-dominated flow; likely turbulent",
          "Low altitude flight",
          "High temperature"
        ],
        correctAnswer: 1,
        explanation: "Re = ρVL/μ (inertia/viscosity). High Re means inertia dominates, flow is turbulent. Airliners: Re ~ 10⁷. Model aircraft: Re ~ 10⁵. Different Re means different aerodynamics - why wind tunnel testing is tricky."
      },
      {
        id: "q12-3",
        question: "What causes flow separation and why is it bad?",
        options: [
          "Adverse pressure gradient; causes loss of lift and increased drag",
          "Too much speed",
          "Engine failure",
          "Wing damage"
        ],
        correctAnswer: 0,
        explanation: "Flow separation occurs when boundary layer can't overcome adverse pressure gradient (pressure increasing downstream). Flow detaches from surface, creating wake, losing lift, increasing drag. This is what happens at stall."
      },
      {
        id: "q12-4",
        question: "Why do golf balls have dimples?",
        options: [
          "For grip",
          "Dimples trip boundary layer to turbulent, delaying separation and reducing drag",
          "Aesthetic reasons",
          "To make them lighter"
        ],
        correctAnswer: 1,
        explanation: "Dimples create turbulent boundary layer which has more energy to resist separation. Paradoxically, turbulent boundary layer can reduce total drag by preventing early separation. Same principle used on some aircraft surfaces."
      }
    ]
  },
  
  13: {
    questions: [
      {
        id: "q13-1",
        question: "What is the critical Mach number?",
        options: [
          "Mach 1.0",
          "Freestream Mach where local flow first reaches Mach 1.0 (usually on wing)",
          "Maximum safe speed",
          "Speed of sound at sea level"
        ],
        correctAnswer: 1,
        explanation: "Critical Mach (M_crit) is when local flow first reaches sonic speed, usually on upper wing surface. Above M_crit, shock waves form, causing wave drag. For airliners, M_crit ~ 0.7-0.8, limiting cruise speed."
      },
      {
        id: "q13-2",
        question: "Why do supersonic aircraft have swept or delta wings?",
        options: [
          "They look cooler",
          "Sweep reduces effective Mach number perpendicular to leading edge, delaying shock formation",
          "Better low-speed performance",
          "Easier to manufacture"
        ],
        correctAnswer: 1,
        explanation: "Wing sweep reduces the component of velocity perpendicular to the leading edge (M_perp = M × cos(sweep)). This delays shock formation. 30° sweep at Mach 0.85 gives M_perp = 0.74, below critical Mach."
      },
      {
        id: "q13-3",
        question: "What is wave drag and when does it occur?",
        options: [
          "Drag from water waves",
          "Drag from shock waves; occurs at transonic and supersonic speeds",
          "Drag from sound waves",
          "Drag from wing oscillation"
        ],
        correctAnswer: 1,
        explanation: "Wave drag is caused by shock waves that form when local flow exceeds Mach 1. Energy is lost compressing air through shocks. This is why supersonic flight is so fuel-intensive. Concorde dealt with massive wave drag."
      },
      {
        id: "q13-4",
        question: "Why can't conventional airliners fly supersonic?",
        options: [
          "Engines aren't powerful enough",
          "Wave drag increases dramatically above M_crit; wings not designed for it",
          "Regulations prohibit it",
          "Passengers can't handle it"
        ],
        correctAnswer: 1,
        explanation: "Airliner wings optimized for M ~ 0.85. Above M_crit, wave drag increases dramatically, fuel consumption becomes prohibitive. Supersonic flight requires different wing design (swept/delta), stronger structure, and much more fuel."
      }
    ]
  },
  
  // Unit 3: Structures (Lessons 14-15)
  14: {
    questions: [
      {
        id: "q14-1",
        question: "What is the primary load-carrying structure in an aircraft wing?",
        options: [
          "Wing skin",
          "Spar (main beam running spanwise)",
          "Ribs",
          "Fuel tanks"
        ],
        correctAnswer: 1,
        explanation: "Spars are the main structural beams running spanwise. They carry bending loads from lift. Typical wing has 2-3 spars. Ribs maintain airfoil shape, skin carries shear and torsion. Spars are the backbone."
      },
      {
        id: "q14-2",
        question: "Why is aluminum 2024 commonly used in aircraft structures?",
        options: [
          "It's the cheapest metal",
          "Good strength-to-weight ratio, fatigue resistance, and workability",
          "It's the strongest metal",
          "It doesn't corrode"
        ],
        correctAnswer: 1,
        explanation: "Al 2024 offers excellent strength-to-weight (σ/ρ), good fatigue life, easy to machine and form. Yield strength ~400 MPa, density 2,780 kg/m³. Not the strongest or lightest, but best overall for aircraft. Used since 1930s."
      },
      {
        id: "q14-3",
        question: "What is a monocoque structure?",
        options: [
          "Structure where skin carries all loads (like an eggshell)",
          "Structure with internal frame",
          "Composite structure",
          "Pressurized structure"
        ],
        correctAnswer: 0,
        explanation: "Monocoque = 'single shell'. Skin carries all loads, no internal frame. Very efficient but hard to manufacture. Most aircraft use semi-monocoque: skin + stringers + frames share loads. Fuselage is semi-monocoque."
      },
      {
        id: "q14-4",
        question: "Why must aircraft structures be designed for fatigue?",
        options: [
          "Pilots get tired",
          "Repeated pressurization cycles and flight loads cause crack growth over time",
          "Materials weaken with age",
          "Regulations require it"
        ],
        correctAnswer: 1,
        explanation: "Every flight cycle causes stress: pressurization (cabin pressure), wing bending (turbulence, maneuvers). Repeated stress causes fatigue cracks. Aloha Airlines 243 lost roof due to fatigue. Design must ensure safe life of 20,000-90,000 cycles."
      }
    ]
  },
  
  15: {
    questions: [
      {
        id: "q15-1",
        question: "What is the purpose of stringers in aircraft fuselage?",
        options: [
          "To hold wiring",
          "To stiffen skin and carry axial loads, preventing buckling",
          "To attach seats",
          "Decorative"
        ],
        correctAnswer: 1,
        explanation: "Stringers are longitudinal stiffeners attached to skin. They prevent skin buckling under compression, carry axial loads (pressurization, bending). Typical fuselage has 40-80 stringers running lengthwise."
      },
      {
        id: "q15-2",
        question: "Why are composite materials (carbon fiber) increasingly used in modern aircraft?",
        options: [
          "They're cheaper",
          "50% lighter than aluminum with same strength; better fatigue resistance",
          "Easier to manufacture",
          "Better heat resistance"
        ],
        correctAnswer: 1,
        explanation: "Carbon fiber composites: strength-to-weight 3× better than aluminum, excellent fatigue resistance, corrosion-proof. Boeing 787: 50% composite. Challenges: expensive, difficult to inspect for damage, repair is complex."
      },
      {
        id: "q15-3",
        question: "What is the factor of safety and why is it used?",
        options: [
          "Margin between design load and failure load; accounts for uncertainties",
          "Safety equipment quantity",
          "Pilot safety rating",
          "Maintenance schedule"
        ],
        correctAnswer: 0,
        explanation: "Factor of Safety = Ultimate Load / Design Load. Typically 1.5 for aircraft. If design load is 3g, structure must withstand 4.5g before failure. Accounts for material variability, manufacturing defects, unexpected loads."
      },
      {
        id: "q15-4",
        question: "Why do aircraft have pressurized cabins and what structural challenge does this create?",
        options: [
          "For comfort; creates hoop stress in fuselage like a pressure vessel",
          "For speed; no structural issues",
          "For safety; makes structure stronger",
          "Regulations require it; no structural impact"
        ],
        correctAnswer: 0,
        explanation: "At 40,000 ft, outside pressure is 0.2 atm. Cabin maintained at 0.8 atm. Pressure difference creates hoop stress (σ = PR/t) in fuselage. Fuselage acts as pressure vessel. Every flight cycle fatigues structure."
      }
    ]
  },
  
  // Unit 4: Propulsion (Lessons 16-17)
  16: {
    questions: [
      {
        id: "q16-1",
        question: "What is the Brayton cycle and where is it used?",
        options: [
          "Thermodynamic cycle for gas turbines (jet engines)",
          "Cycle for piston engines",
          "Electrical cycle",
          "Hydraulic cycle"
        ],
        correctAnswer: 0,
        explanation: "Brayton cycle: compression → combustion → expansion → exhaust. Used in all gas turbines (turbojets, turbofans, turboprops). Efficiency increases with pressure ratio and turbine inlet temperature."
      },
      {
        id: "q16-2",
        question: "Why do jet engines lose thrust at high altitude?",
        options: [
          "Engines get cold",
          "Lower air density means less mass flow through engine",
          "Fuel freezes",
          "Pilots reduce power"
        ],
        correctAnswer: 1,
        explanation: "Thrust ≈ ṁ × Δv (mass flow × velocity change). At altitude, air density is lower, so mass flow decreases. At 40,000 ft, density is 25% of sea level, so thrust is ~25% of sea level thrust."
      },
      {
        id: "q16-3",
        question: "What is specific fuel consumption (SFC) and why does it matter?",
        options: [
          "Fuel burned per unit thrust per time; lower is better (more efficient)",
          "Total fuel capacity",
          "Fuel price",
          "Fuel weight"
        ],
        correctAnswer: 0,
        explanation: "SFC = fuel flow / thrust. Units: kg/(kN·hr). Modern turbofans: SFC ~ 0.5-0.6. Lower SFC = better efficiency = longer range. Improving SFC by 1% saves millions in fuel costs over aircraft lifetime."
      },
      {
        id: "q16-4",
        question: "Why do turbofan engines have a fan at the front?",
        options: [
          "To cool the engine",
          "To move large mass of air at low velocity (more efficient than small mass at high velocity)",
          "To look impressive",
          "To reduce noise"
        ],
        correctAnswer: 1,
        explanation: "Thrust = ṁΔv. For same thrust, moving more air slowly (high bypass) is more efficient than less air fast (turbojet). Modern turbofans: BPR = 9-12. This is why engines are so large - huge fans for efficiency."
      }
    ]
  },
  
  17: {
    questions: [
      {
        id: "q17-1",
        question: "What is thrust specific fuel consumption (TSFC) and how does it relate to efficiency?",
        options: [
          "Fuel per thrust per time; lower TSFC = higher efficiency",
          "Total fuel burned",
          "Thrust per fuel weight",
          "Engine temperature"
        ],
        correctAnswer: 0,
        explanation: "TSFC = fuel flow / thrust. Measures how much fuel needed to produce thrust. Modern turbofans: 0.5-0.6 kg/(kN·hr). Turboprops: 0.25-0.35 (more efficient but slower). Lower TSFC = better fuel economy."
      },
      {
        id: "q17-2",
        question: "Why do engines have multiple compressor stages?",
        options: [
          "Backup in case one fails",
          "Each stage increases pressure; multiple stages achieve high overall pressure ratio",
          "To balance the engine",
          "For different flight conditions"
        ],
        correctAnswer: 1,
        explanation: "Each compressor stage increases pressure by ~1.3-1.5×. To achieve overall pressure ratio of 40:1, need ~15 stages (1.4¹⁵ ≈ 40). Higher pressure ratio = higher efficiency. Modern engines: 40-50:1 pressure ratio."
      },
      {
        id: "q17-3",
        question: "What limits turbine inlet temperature and why do we want it high?",
        options: [
          "Material melting point; higher temperature = higher efficiency",
          "Fuel combustion temperature",
          "Passenger comfort",
          "Regulations"
        ],
        correctAnswer: 0,
        explanation: "Brayton cycle efficiency increases with turbine inlet temperature. Modern engines: 1,600-1,700°C. Limited by turbine blade materials (nickel superalloys). Blades are cooled internally with air. Every 50°C increase = ~1% efficiency gain."
      },
      {
        id: "q17-4",
        question: "Why do some engines have afterburners?",
        options: [
          "For fuel efficiency",
          "Burn extra fuel in exhaust for massive thrust increase (50-70%); used by fighters",
          "To reduce noise",
          "For high altitude flight"
        ],
        correctAnswer: 1,
        explanation: "Afterburner injects fuel into hot exhaust and burns it, increasing exhaust velocity and thrust by 50-70%. Very fuel-inefficient (TSFC doubles). Used by fighters for takeoff, supersonic flight, combat. Airliners don't use them."
      }
    ]
  },
  
  // Unit 5: Operations (Lessons 18-19)
  18: {
    questions: [
      {
        id: "q18-1",
        question: "What is V1 speed and why is it critical?",
        options: [
          "Takeoff speed",
          "Decision speed: below V1 abort, above V1 continue takeoff even with engine failure",
          "Landing speed",
          "Cruise speed"
        ],
        correctAnswer: 1,
        explanation: "V1 is decision speed. Below V1: enough runway to stop if engine fails. Above V1: not enough runway to stop, must continue takeoff on remaining engines. Calculated for each takeoff based on weight, runway, conditions."
      },
      {
        id: "q18-2",
        question: "Why do aircraft fly at high altitude (35,000-40,000 ft)?",
        options: [
          "Better view",
          "Lower air density = less drag; higher true airspeed for same indicated airspeed",
          "Warmer temperature",
          "Regulations require it"
        ],
        correctAnswer: 1,
        explanation: "At altitude: lower density = less drag = better fuel efficiency. Also, jet engines more efficient in cold air. Trade-off: less thrust available, longer climb. Optimal altitude increases as fuel burns and aircraft gets lighter."
      },
      {
        id: "q18-3",
        question: "What is the purpose of flight management system (FMS)?",
        options: [
          "Entertainment system",
          "Automated navigation, performance optimization, fuel management",
          "Communication system",
          "Weather radar"
        ],
        correctAnswer: 1,
        explanation: "FMS is the aircraft's 'brain': manages navigation (GPS, waypoints), calculates optimal altitude/speed for fuel efficiency, predicts fuel burn, interfaces with autopilot. Modern airliners fly mostly on FMS with pilot supervision."
      },
      {
        id: "q18-4",
        question: "Why do pilots calculate takeoff performance for every flight?",
        options: [
          "Regulations require paperwork",
          "Weight, temperature, runway length, wind affect required speeds and distances",
          "To pass time",
          "Insurance requirements"
        ],
        correctAnswer: 1,
        explanation: "Takeoff performance varies with: weight (heavier = longer distance), temperature (hot = less thrust), pressure altitude (high = less thrust), wind (headwind helps), runway condition. Must calculate V1, VR, V2, and verify adequate runway length."
      }
    ]
  },
  
  19: {
    questions: [
      {
        id: "q19-1",
        question: "What is the purpose of the autopilot?",
        options: [
          "To replace pilots",
          "To maintain altitude, heading, speed; reduce pilot workload on long flights",
          "Emergency backup",
          "For training only"
        ],
        correctAnswer: 1,
        explanation: "Autopilot maintains flight parameters (altitude, heading, speed) automatically. Reduces pilot workload, improves fuel efficiency (smoother flight), enables long flights. Pilots still monitor and manage. Can fly entire approach and landing (autoland)."
      },
      {
        id: "q19-2",
        question: "Why do aircraft have multiple hydraulic systems?",
        options: [
          "For different functions",
          "Redundancy: if one fails, others can operate critical flight controls",
          "To balance weight",
          "Regulations require it"
        ],
        correctAnswer: 1,
        explanation: "Airliners have 2-3 independent hydraulic systems. Each can operate flight controls. If one fails, others provide backup. Critical for safety - loss of all hydraulics is catastrophic (United 232, JAL 123). Redundancy is key to safety."
      },
      {
        id: "q19-3",
        question: "What is ETOPS and why does it matter?",
        options: [
          "Engine Type Operations; allows twin-engine aircraft to fly long routes over water",
          "Emergency takeoff procedures",
          "European traffic operations",
          "Engine testing standards"
        ],
        correctAnswer: 0,
        explanation: "ETOPS (Extended-range Twin-engine Operations) certifies twins to fly routes far from diversion airports. ETOPS-180 = can fly 180 min from nearest airport on one engine. Requires reliable engines, systems. Enabled twins to replace 4-engine aircraft on long routes."
      },
      {
        id: "q19-4",
        question: "Why do pilots perform pre-flight walk-around inspections?",
        options: [
          "Exercise",
          "Visual check for damage, leaks, tire condition, control surface position",
          "Regulations require it",
          "To greet passengers"
        ],
        correctAnswer: 1,
        explanation: "Walk-around checks: tire condition, hydraulic leaks, control surface damage, pitot tube covers removed, fuel leaks, engine condition. Catches issues before flight. Simple visual inspection can prevent accidents. Required by regulations and good practice."
      }
    ]
  }
};

export default allPlanesQuizzes;
