// Unit 1: Flight Fundamentals - Final Lessons
// Lessons 10-11: Propulsion and Design

export const planesUnit1FinalLessons = [
  {
    id: 10,
    title: "Aircraft Propulsion Systems",
    unit: "Flight Fundamentals",
    duration: "30 min",
    introduction: "Propulsion systems provide the thrust needed for flight. Understanding different engine types and their performance is essential for aircraft design and operations.",
    
    sections: [
      {
        title: "Piston Engines",
        content: "Four-Stroke Cycle:\n\n1. Intake: Fuel-air mixture enters\n2. Compression: Piston compresses mixture\n3. Power: Spark ignites, piston pushed down\n4. Exhaust: Burned gases expelled\n\nPower Output:\nP = (PLAN)/2\n\nWhere:\n• P = power (W)\n• p = mean effective pressure (Pa)\n• L = stroke length (m)\n• A = piston area (m²)\n• N = RPM\n\nTypical Values:\n• Small aircraft: 100-200 HP\n• Large piston: 300-400 HP\n• RPM: 2,000-2,700\n\nPropeller Efficiency:\nη_prop = (Thrust × V)/(Power × 2π × RPM)\n\nTypical: 0.70-0.85\n\nExample: Cessna 172\n• Engine: Lycoming O-360\n• Power: 180 HP = 134 kW\n• RPM: 2,700\n• Propeller diameter: 1.9 m\n• Efficiency: 0.80\n• Thrust at cruise: 1,200 N\n\nAdvantages:\n• Simple, reliable\n• Low cost\n• Good fuel efficiency\n• Easy maintenance\n\nDisadvantages:\n• Limited power\n• Heavy\n• Vibration\n• Altitude performance"
      },
      {
        title: "Turboprop Engines",
        content: "Operating Principle:\n\nGas turbine drives propeller:\n1. Compressor increases pressure\n2. Combustor adds heat\n3. Turbine extracts power\n4. Propeller provides thrust\n\nPower Split:\n• 85-90% to propeller\n• 10-15% from jet exhaust\n\nShaft Horsepower (SHP):\nTotal power from turbine\n\nEquivalent Shaft Horsepower (ESHP):\nSHP + jet thrust contribution\n\nExample: Pratt & Whitney PT6A\n• SHP: 1,200 HP\n• Weight: 150 kg\n• Power-to-weight: 8 HP/kg\n• SFC: 0.27 kg/(HP·hr)\n\nCompare to piston:\n• Lycoming O-360: 180 HP, 130 kg\n• Power-to-weight: 1.4 HP/kg\n• Turboprop is 5.7× better!\n\nApplications:\n• Regional aircraft (Dash 8, ATR 72)\n• Military trainers (T-6 Texan)\n• Business aircraft (King Air, PC-12)\n\nAdvantages:\n• High power-to-weight\n• Smooth operation\n• Good altitude performance\n• Reliable\n\nDisadvantages:\n• Expensive\n• Higher fuel consumption than piston\n• Complex\n• Propeller speed limits"
      },
      {
        title: "Turbojet & Turbofan Engines",
        content: "Turbojet:\n\nAll air through core:\n1. Inlet\n2. Compressor\n3. Combustor\n4. Turbine\n5. Nozzle\n\nThrust equation:\nT = ṁ(V_e - V_0) + (P_e - P_0)A_e\n\nTypical exhaust velocity: 500-700 m/s\n\nTurbofan:\n\nBypass air around core:\n• Fan in front\n• Some air through core\n• Most air bypasses\n\nBypass Ratio (BPR):\nBPR = ṁ_bypass / ṁ_core\n\nLow bypass (fighters):\n• BPR = 0.3-1.0\n• High speed\n• Afterburner capable\n• Examples: F-16, F-22\n\nHigh bypass (airliners):\n• BPR = 5-12\n• Fuel efficient\n• Quiet\n• Examples: CFM56, GE90\n\nExample: CFM56-7B (Boeing 737)\n• Thrust: 121 kN\n• BPR: 5.5\n• SFC: 0.58 kg/(kN·hr)\n• Mass flow: 350 kg/s\n• Fan diameter: 1.55 m\n\nThrust calculation:\n• Core flow: 64 kg/s at 450 m/s\n• Bypass flow: 286 kg/s at 350 m/s\n• Flight speed: 250 m/s\n\nCore thrust:\nT_core = 64 × (450 - 250) = 12,800 N\n\nBypass thrust:\nT_bypass = 286 × (350 - 250) = 28,600 N\n\nTotal: 41,400 N per engine\nBoth engines: 82,800 N\n\nActual: 121 kN × 2 = 242 kN\n(Difference due to pressure thrust and losses)"
      },
      {
        title: "Propulsion Performance Comparison",
        content: "Specific Fuel Consumption:\n\nPiston:\n• SFC: 0.25-0.30 kg/(HP·hr)\n• Best at low altitude\n• Decreases with altitude\n\nTurboprop:\n• SFC: 0.25-0.35 kg/(HP·hr)\n• Good at all altitudes\n• Efficient up to Mach 0.6\n\nTurbofan:\n• SFC: 0.50-0.65 kg/(kN·hr)\n• Best at high altitude\n• Efficient at Mach 0.75-0.85\n\nSpeed Ranges:\n\nPiston:\n• Maximum: 350 km/h\n• Cruise: 200-300 km/h\n• Altitude: 0-5 km\n\nTurboprop:\n• Maximum: 700 km/h\n• Cruise: 500-600 km/h\n• Altitude: 5-8 km\n\nTurbofan:\n• Maximum: 950 km/h (subsonic)\n• Cruise: 850-900 km/h\n• Altitude: 10-13 km\n\nPower-to-Weight:\n\nPiston: 1-2 HP/kg\nTurboprop: 5-8 HP/kg\nTurbofan: 5-7 (thrust-to-weight)\n\nCost Comparison:\n\nPiston engine:\n• Purchase: $30,000-50,000\n• Overhaul: $20,000-30,000\n• TBO: 2,000 hours\n\nTurboprop:\n• Purchase: $500,000-1,000,000\n• Overhaul: $300,000-500,000\n• TBO: 3,500-5,000 hours\n\nTurbofan:\n• Purchase: $10-25 million\n• Overhaul: $3-8 million\n• TBO: 20,000-30,000 hours\n\nMission Selection:\n\nShort range, low speed:\n• Piston engine\n• Example: Cessna 172\n\nRegional, medium speed:\n• Turboprop\n• Example: Dash 8, ATR 72\n\nLong range, high speed:\n• Turbofan\n• Example: Boeing 737, A320"
      }
    ],
    
    keyTakeaways: [
      "Piston engines: Simple, reliable, 100-400 HP, good for small aircraft",
      "Turboprops: 5× better power-to-weight than pistons, efficient up to Mach 0.6",
      "Turbofans: High bypass ratio (5-12) for efficiency, low for speed",
      "SFC: Piston 0.25-0.30, Turboprop 0.25-0.35, Turbofan 0.50-0.65 kg/(kN·hr)",
      "Bypass ratio determines efficiency vs speed trade-off",
      "Engine selection depends on mission: range, speed, altitude"
    ],
    
    vocabulary: [
      { term: "Bypass Ratio (BPR)", definition: "Ratio of bypass air to core air in turbofan" },
      { term: "Specific Fuel Consumption (SFC)", definition: "Fuel used per unit thrust or power per time" },
      { term: "Shaft Horsepower (SHP)", definition: "Power delivered to propeller shaft" },
      { term: "Turboprop", definition: "Gas turbine engine driving propeller" },
      { term: "Turbofan", definition: "Jet engine with fan bypassing some air around core" }
    ]
  },

  {
    id: 11,
    title: "Aircraft Design Process",
    unit: "Flight Fundamentals",
    duration: "30 min",
    introduction: "Aircraft design is a systematic process balancing performance, cost, and safety. Understanding the design process is essential for creating successful aircraft.",
    
    sections: [
      {
        title: "Requirements Definition",
        content: "Mission Requirements:\n\nPerformance:\n• Range: How far?\n• Speed: How fast?\n• Payload: How much?\n• Altitude: How high?\n• Runway: How long?\n\nExample: Regional Airliner\n• Range: 2,000 km\n• Speed: 500 km/h\n• Passengers: 70-90\n• Altitude: 7,500 m\n• Runway: 1,500 m\n\nOperational:\n• Crew: 2 pilots\n• Turnaround: 30 minutes\n• Dispatch reliability: 99%\n• Maintenance: Line replaceable units\n\nEconomic:\n• Purchase price: $30-40 million\n• Operating cost: $2,000/hour\n• Fuel efficiency: 3 L/100 km/seat\n• Service life: 25 years, 60,000 hours\n\nRegulatory:\n• FAR Part 25 (Transport category)\n• EASA CS-25\n• Noise: Stage 4\n• Emissions: CAEP/8\n\nConstraints:\n• Technology available\n• Budget limits\n• Schedule requirements\n• Market competition\n\nTrade Studies:\n\nRange vs Payload:\n• More fuel = less payload\n• Optimize for mission\n\nSpeed vs Efficiency:\n• Faster = more drag\n• Find sweet spot\n\nCost vs Performance:\n• Better performance costs more\n• Market determines optimum"
      },
      {
        title: "Conceptual Design",
        content: "Initial Sizing:\n\nTakeoff Weight Estimation:\nW_TO = W_empty + W_fuel + W_payload\n\nEmpty weight fraction:\nW_empty/W_TO = A × W_TO^C\n\nWhere A, C are constants from historical data\n\nFor regional jet:\n• A = 0.95\n• C = -0.06\n• W_TO = 40,000 kg (guess)\n• W_empty = 0.95 × 40,000^(-0.06) = 23,000 kg\n\nFuel fraction:\nW_fuel/W_TO = 1 - exp(-R × SFC/(V × L/D))\n\nFor 2,000 km range:\n• SFC = 0.6 kg/(kN·hr)\n• V = 140 m/s\n• L/D = 16\n• W_fuel/W_TO = 0.25\n• W_fuel = 10,000 kg\n\nPayload:\nW_payload = W_TO - W_empty - W_fuel\nW_payload = 40,000 - 23,000 - 10,000 = 7,000 kg\n\n80 passengers × 90 kg = 7,200 kg ✓\n\nConfiguration Selection:\n\nWing position:\n• High wing: Good ground clearance\n• Low wing: Easier landing gear\n• Mid wing: Structural efficiency\n\nTail configuration:\n• Conventional: Simple, proven\n• T-tail: Clean wing, flutter risk\n• V-tail: Weight savings, complex\n\nEngine placement:\n• Wing-mounted: Easy maintenance\n• Fuselage-mounted: Clean wing\n• Tail-mounted: Quiet cabin\n\nLanding gear:\n• Tricycle: Stable, common\n• Tailwheel: Better prop clearance\n• Retractable: Less drag"
      },
      {
        title: "Preliminary Design",
        content: "Detailed Analysis:\n\nAerodynamics:\n• CFD simulations\n• Wind tunnel testing\n• Drag breakdown\n• Lift distribution\n\nStructures:\n• Load analysis\n• Stress calculations\n• Material selection\n• Weight estimation\n\nPropulsion:\n• Engine selection\n• Installation design\n• Fuel system\n• Performance matching\n\nSystems:\n• Electrical power\n• Hydraulics\n• Environmental control\n• Avionics\n\nWeight & Balance:\n\nComponent weights:\n• Wing: 8,000 kg\n• Fuselage: 7,000 kg\n• Tail: 1,500 kg\n• Landing gear: 2,500 kg\n• Engines: 2,000 kg\n• Systems: 2,000 kg\n• Total empty: 23,000 kg ✓\n\nCG location:\n• Forward limit: 15% MAC\n• Aft limit: 35% MAC\n• Ensure stability\n\nPerformance Analysis:\n\nTakeoff distance:\ns_TO = 1.44 × W²/(ρ × S × g × C_Lmax × T)\n\nFor our aircraft:\n• W = 400,000 N\n• S = 80 m²\n• C_Lmax = 2.5 (with flaps)\n• T = 100,000 N (both engines)\n• ρ = 1.225 kg/m³\n\ns_TO = 1.44 × 400,000²/(1.225 × 80 × 9.81 × 2.5 × 100,000)\ns_TO = 960 m\n\nWith safety factor: 1,200 m ✓\n\nCost Estimation:\n\nDevelopment:\n• Engineering: $500 million\n• Testing: $200 million\n• Certification: $100 million\n• Total: $800 million\n\nProduction (per aircraft):\n• Materials: $8 million\n• Labor: $6 million\n• Engines: $10 million\n• Systems: $6 million\n• Total: $30 million\n\nBreak-even: 200 aircraft"
      },
      {
        title: "Detailed Design & Certification",
        content: "Detailed Design:\n\nDrawings:\n• 3D CAD models\n• Manufacturing drawings\n• Assembly procedures\n• Maintenance manuals\n\nAnalysis:\n• Finite element analysis (FEA)\n• Computational fluid dynamics (CFD)\n• Fatigue life prediction\n• Failure modes analysis\n\nPrototyping:\n• Component testing\n• Systems integration\n• Ground testing\n• Flight testing\n\nCertification Process:\n\nFAA/EASA Requirements:\n• Type Certificate (TC)\n• Production Certificate (PC)\n• Airworthiness Certificate\n\nTesting:\n• Structural tests (static, fatigue)\n• Systems tests (functional, environmental)\n• Flight tests (performance, handling)\n• Certification flights\n\nFlight Test Program:\n\nPhase 1: Basic handling\n• Stalls\n• Spins (if required)\n• Stability\n• Control response\n\nPhase 2: Performance\n• Takeoff\n• Climb\n• Cruise\n• Landing\n\nPhase 3: Systems\n• Avionics\n• Autopilot\n• Emergency procedures\n\nPhase 4: Certification\n• Demonstrate compliance\n• FAA/EASA observers\n• Final approval\n\nProduction:\n\nManufacturing:\n• Tooling design\n• Assembly line setup\n• Quality control\n• Supply chain\n\nDelivery:\n• Customer acceptance\n• Pilot training\n• Maintenance training\n• Spare parts\n\nSupport:\n• Technical support\n• Service bulletins\n• Modifications\n• Continued airworthiness\n\nExample Timeline:\n\nYear 1-2: Requirements & Conceptual\nYear 3-4: Preliminary Design\nYear 5-6: Detailed Design\nYear 7-8: Prototyping & Testing\nYear 9: Certification\nYear 10+: Production\n\nTotal: 10 years, $1+ billion"
      }
    ],
    
    keyTakeaways: [
      "Design starts with requirements: range, speed, payload, cost",
      "Conceptual design sizes aircraft using historical data and physics",
      "Preliminary design includes detailed analysis and wind tunnel testing",
      "Certification requires extensive testing and FAA/EASA approval",
      "Development takes 10+ years and costs $1+ billion for new aircraft",
      "Trade-offs between performance, cost, and schedule are constant"
    ],
    
    vocabulary: [
      { term: "Takeoff Weight (W_TO)", definition: "Total weight at start of takeoff roll" },
      { term: "Empty Weight Fraction", definition: "Ratio of empty weight to takeoff weight" },
      { term: "Type Certificate (TC)", definition: "FAA/EASA approval for aircraft design" },
      { term: "Mean Aerodynamic Chord (MAC)", definition: "Average chord used for CG calculations" },
      { term: "CFD", definition: "Computational Fluid Dynamics; computer simulation of airflow" },
      { term: "FEA", definition: "Finite Element Analysis; computer simulation of structures" }
    ]
  }
];

export default planesUnit1FinalLessons;
