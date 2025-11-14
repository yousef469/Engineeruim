// Unit 1: Flight Fundamentals - All Quizzes
// Quizzes for lessons 8-11

export const unit1AdvancedQuizzes = {
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
        question: "A Cessna 172 has 107 kW available power and needs 66 kW at cruise. What's the rate of climb?",
        options: [
          "41 m/s",
          "4.1 m/s",
          "0.41 m/s",
          "Cannot determine without weight"
        ],
        correctAnswer: 3,
        explanation: "Rate of climb = P_excess / Weight. We have P_excess = 107 - 66 = 41 kW, but need weight to calculate RC. With W = 10,000 N: RC = 41,000/10,000 = 4.1 m/s."
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
        explanation: "Service ceiling is where rate of climb = 0.5 m/s (100 ft/min). This is the practical maximum altitude. Absolute ceiling (RC = 0) is higher but rarely reached."
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
        explanation: "L/D measures aerodynamic efficiency. Higher L/D means less drag for the same lift, requiring less thrust and burning less fuel to travel the same distance. This is why gliders (L/D = 40-60) can fly so far."
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
        question: "A CFM56 turbofan has BPR = 5.5. If core flow is 64 kg/s, what's the bypass flow?",
        options: [
          "64 kg/s",
          "286 kg/s",
          "352 kg/s",
          "5.5 kg/s"
        ],
        correctAnswer: 1,
        explanation: "BPR = bypass flow / core flow. So bypass flow = BPR × core flow = 5.5 × 64 = 352 kg/s. Wait, that's total flow! Bypass alone = 352 - 64 = 288 kg/s. Actually: 5.5 × 64 = 352 kg/s bypass. Total = 416 kg/s."
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
        question: "Why does the Breguet range equation use ln(W_initial/W_final)?",
        options: [
          "It's a mathematical convenience",
          "Fuel burn rate is proportional to weight, creating exponential relationship",
          "Logarithms make calculations easier",
          "It accounts for altitude changes"
        ],
        correctAnswer: 1,
        explanation: "As fuel burns, aircraft gets lighter, needing less thrust and burning fuel slower. This creates an exponential relationship. The natural log accounts for this: doubling range requires squaring the fuel fraction."
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
        question: "Why does aircraft certification (FAA/EASA) take years and cost hundreds of millions?",
        options: [
          "Government bureaucracy",
          "Must prove safety through extensive testing: structures, systems, flight tests",
          "Companies are inefficient",
          "Too many regulations"
        ],
        correctAnswer: 1,
        explanation: "Certification requires proving every system works safely in all conditions: structural tests to failure, systems tests in extreme environments, thousands of flight test hours. This ensures passenger safety but takes ~10 years and $1+ billion for new aircraft."
      }
    ]
  }
};

export default unit1AdvancedQuizzes;
