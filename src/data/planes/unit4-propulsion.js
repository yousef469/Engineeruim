// Unit 4: Aircraft Propulsion - MIT-Quality Content  
// Lessons 16-19: Jet engines and performance (4 core lessons)

export const planesUnit4Lessons = [
  {
    id: 16,
    title: "Jet Engine Fundamentals & Brayton Cycle",
    unit: "Aircraft Propulsion",
    duration: "30 min",
    introduction: "Jet engines power modern aircraft. Understanding the Brayton cycle and engine components is essential for propulsion system design.",
    
    sections: [
      {
        title: "Brayton Cycle Thermodynamics",
        content: "Ideal Brayton Cycle:\n\n1. Isentropic Compression (1→2)\n2. Constant Pressure Heat Addition (2→3)\n3. Isentropic Expansion (3→4)\n4. Constant Pressure Heat Rejection (4→1)\n\nPressure Ratio:\nπ_c = P_2/P_1\n\nTypical values:\n• Early jets: π_c = 5-10\n• Modern turbofans: π_c = 30-45\n• Advanced: π_c = 50+\n\nTemperature Relations:\n\nT_2/T_1 = (P_2/P_1)^((γ-1)/γ)\n\nWhere γ = 1.4 for air\n\nExample: CFM56 Engine\n• Inlet temp: T_1 = 288 K\n• Pressure ratio: π_c = 32\n• Compressor exit:\n\nT_2 = 288 × 32^(0.4/1.4) = 288 × 2.71 = 780 K\n\nTurbine Inlet Temperature:\n• Modern: T_3 = 1,600-1,900 K\n• Advanced: T_3 = 2,000 K\n• Material limit!\n\nThermal Efficiency:\n\nη_th = 1 - 1/(π_c^((γ-1)/γ))\n\nFor π_c = 32:\nη_th = 1 - 1/2.71 = 0.63 = 63%\n\nHigher pressure ratio = better efficiency!"
      },
      {
        title: "Engine Components",
        content: "Compressor:\n\nAxial flow (most common):\n• Multiple stages (10-20)\n• Each stage: Rotor + Stator\n• Pressure rise: 1.2-1.5 per stage\n\nTotal pressure ratio:\nπ_c = (1.3)^15 = 51 (for 15 stages)\n\nCentrifugal:\n• Single stage\n• Pressure ratio: 4-8\n• Used in small engines\n\nCombustor:\n\nFuel-air mixture:\n• Stoichiometric: F/A = 0.067\n• Actual: F/A = 0.015-0.025 (lean)\n• Excess air for cooling\n\nCombustion efficiency:\n• Modern: 99.9%\n• Complete burning\n• Low emissions\n\nTurbine:\n\nExtracts power:\n• Drives compressor\n• Drives fan (turbofan)\n• High temperature\n• Cooling required\n\nStages:\n• High pressure: 1-2 stages\n• Low pressure: 3-7 stages\n\nNozzle:\n\nConverging (subsonic):\n• Accelerates flow\n• Generates thrust\n\nConverging-diverging (supersonic):\n• Afterburner equipped\n• Supersonic exhaust\n• Fighters only"
      },
      {
        title: "Thrust Generation",
        content: "Momentum Thrust:\n\nT = ṁ(V_e - V_0)\n\nWhere:\n• ṁ = mass flow rate\n• V_e = exhaust velocity\n• V_0 = flight velocity\n\nPressure Thrust:\n\nT_p = (P_e - P_0)A_e\n\nTotal Thrust:\nT = ṁ(V_e - V_0) + (P_e - P_0)A_e\n\nExample: CFM56-7B\n• Mass flow: 350 kg/s\n• Exhaust velocity: 450 m/s\n• Flight velocity: 250 m/s\n• Pressure thrust: 20 kN\n\nMomentum thrust:\nT_m = 350 × (450 - 250) = 70,000 N\n\nTotal: T = 70 + 20 = 90 kN\n\nActual rating: 121 kN\n(Difference due to bypass flow)\n\nThrust Variation:\n\nWith altitude:\n• Air density decreases\n• Mass flow decreases\n• Thrust decreases\n\nAt 11 km:\n• Thrust = 0.25 × Sea level\n• But drag also decreases\n• Net: Good performance\n\nWith speed:\n• Ram effect increases pressure\n• Thrust increases slightly\n• Mach 0.85: +5% thrust\n\nWith temperature:\n• Hot day: Less dense air\n• Thrust decreases\n• ISA+15°C: -7% thrust"
      },
      {
        title: "Specific Fuel Consumption",
        content: "TSFC Definition:\n\nTSFC = ṁ_fuel/T\n\nUnits: kg/(kN·hr) or lb/(lbf·hr)\n\nTypical Values:\n\nTurbojet:\n• TSFC = 0.8-1.0 kg/(kN·hr)\n• High fuel consumption\n• Obsolete for airliners\n\nLow bypass turbofan:\n• TSFC = 0.7-0.8 kg/(kN·hr)\n• Military fighters\n• Some business jets\n\nHigh bypass turbofan:\n• TSFC = 0.5-0.6 kg/(kN·hr)\n• Modern airliners\n• Most efficient\n\nExample: CFM56-7B\n• TSFC = 0.58 kg/(kN·hr)\n• Thrust: 121 kN\n• Fuel flow: 121 × 0.58 = 70 kg/hr\n\nBoeing 737 cruise:\n• 2 engines\n• Total: 140 kg/hr = 2,520 kg/flight\n\nRange Impact:\n\nBreguet range:\nR = (V/TSFC) × (L/D) × ln(W_i/W_f)\n\n10% TSFC reduction:\n• 10% more range\n• OR 10% less fuel\n• Huge economic impact!\n\nEngine Development:\n\n1960s (JT8D):\n• TSFC = 0.85 kg/(kN·hr)\n• BPR = 1.0\n\n1980s (CFM56):\n• TSFC = 0.65 kg/(kN·hr)\n• BPR = 5.0\n• 24% improvement\n\n2010s (LEAP):\n• TSFC = 0.53 kg/(kN·hr)\n• BPR = 9.0\n• 38% improvement from 1960s!\n\nFuture (2030s):\n• TSFC = 0.45 kg/(kN·hr)\n• BPR = 12-15\n• Geared turbofans\n• Advanced materials"
      }
    ],
    
    keyTakeaways: [
      "Brayton cycle: compression, combustion, expansion, exhaust",
      "Thermal efficiency increases with pressure ratio: η = 1 - 1/π_c^0.286",
      "Modern turbofans: pressure ratio 30-45, TIT 1,600-1,900 K",
      "Thrust: T = ṁ(V_e - V_0) + (P_e - P_0)A_e",
      "TSFC for high-bypass turbofans: 0.5-0.6 kg/(kN·hr)",
      "Higher bypass ratio improves efficiency: BPR 9-12 for modern engines"
    ],
    
    vocabulary: [
      { term: "Brayton Cycle", definition: "Thermodynamic cycle for gas turbine engines" },
      { term: "Pressure Ratio (π_c)", definition: "Compressor exit pressure / inlet pressure" },
      { term: "Turbine Inlet Temperature (TIT)", definition: "Maximum temperature in engine; material limited" },
      { term: "TSFC", definition: "Thrust Specific Fuel Consumption; kg fuel per kN thrust per hour" },
      { term: "Bypass Ratio (BPR)", definition: "Ratio of bypass air to core air in turbofan" },
      { term: "Ram Effect", definition: "Pressure rise from forward motion; helps at high speed" }
    ]
  },

  {
    id: 17,
    title: "Turbofan Performance & Integration",
    unit: "Aircraft Propulsion",
    duration: "30 min",
    introduction: "Turbofan engines dominate modern aviation. Understanding performance characteristics and airframe integration is essential for aircraft design.",
    
    sections: [
      {
        title: "Bypass Ratio Effects",
        content: "Bypass Ratio:\n\nBPR = ṁ_bypass / ṁ_core\n\nEvolution:\n• 1960s: BPR = 1 (JT8D)\n• 1980s: BPR = 5 (CFM56)\n• 2000s: BPR = 6-8 (GE90)\n• 2010s: BPR = 9-11 (LEAP, PW1000G)\n• Future: BPR = 12-15\n\nEfficiency vs BPR:\n\nPropulsive efficiency:\nη_p = 2/(1 + V_e/V_0)\n\nHigher BPR:\n• Lower exhaust velocity\n• Higher propulsive efficiency\n• Better fuel economy\n\nExample:\nBPR = 5, V_e = 400 m/s, V_0 = 250 m/s\nη_p = 2/(1 + 400/250) = 0.77\n\nBPR = 10, V_e = 320 m/s, V_0 = 250 m/s\nη_p = 2/(1 + 320/250) = 0.88\n\n14% improvement!\n\nTrade-offs:\n\nAdvantages of high BPR:\n• Better fuel efficiency\n• Quieter (lower jet velocity)\n• More thrust at takeoff\n\nDisadvantages:\n• Larger diameter\n• Heavier\n• More drag\n• Ground clearance issues\n\nOptimal BPR:\n• Narrow-body: 9-11\n• Wide-body: 10-12\n• Regional: 5-8"
      },
      {
        title: "Engine Installation",
        content: "Mounting Options:\n\nWing-mounted (most common):\n• Easy maintenance\n• Good ground clearance\n• Structural efficiency\n• Examples: 737, A320, 787\n\nFuselage-mounted:\n• Clean wing aerodynamics\n• Quieter cabin\n• CG considerations\n• Examples: MD-80, CRJ, ERJ\n\nNacelle Design:\n\nComponents:\n• Inlet cowl\n• Fan cowl\n• Thrust reverser\n• Exhaust nozzle\n\nInlet:\n• Smooth airflow\n• Minimize distortion\n• Ice protection\n• Bird strike resistance\n\nDrag:\n• Nacelle drag: 5-8% of total\n• Minimize with shaping\n• Trade-off with weight\n\nPylon Design:\n\nLoads:\n• Engine weight: 30,000-50,000 N\n• Thrust: 100,000-500,000 N\n• Gyroscopic moments\n• Vibration\n\nStructure:\n• Titanium or steel\n• Fail-safe design\n• Fuse pins (emergency)\n\nClearances:\n\nGround clearance:\n• Minimum: 0.5 m\n• Rotation angle\n• Tire deflection\n\nBoeing 737 MAX:\n• Larger engines (LEAP)\n• Moved forward and up\n• Changed handling\n• MCAS system added"
      },
      {
        title: "Thrust Reversers",
        content: "Purpose:\n\nReduce landing distance:\n• Reverse thrust direction\n• Decelerate aircraft\n• Reduce brake wear\n\nTypes:\n\n1. Cascade (most common):\n• Blocker doors\n• Redirect fan air forward\n• Used on turbofans\n\n2. Clamshell:\n• Doors close behind engine\n• Deflect exhaust forward\n• Used on turbojets\n\n3. Target type:\n• Buckets in exhaust\n• Simple, heavy\n• Rare on modern aircraft\n\nPerformance:\n\nReverse thrust:\n• Typically 40-50% of forward\n• Only fan air reversed\n• Core exhaust still aft\n\nExample: Boeing 737\n• Forward thrust: 121 kN\n• Reverse thrust: 55 kN\n• Ratio: 45%\n\nLanding distance:\n\nWithout reversers:\ns = V²/(2μg)\n\nAt 70 m/s, μ = 0.4:\ns = 70²/(2 × 0.4 × 9.81) = 625 m\n\nWith reversers:\n• Effective μ = 0.6\n• s = 417 m\n• 33% reduction!\n\nOperational:\n\nDeployment:\n• After touchdown\n• Weight on wheels\n• Throttle to idle first\n• Then reverse\n\nLimitations:\n• Not below 60 knots\n• FOD risk at low speed\n• Noise restrictions\n• Wet/icy runways only (some airports)"
      },
      {
        title: "Engine Control Systems",
        content: "FADEC:\n\nFull Authority Digital Engine Control:\n• Computer controls engine\n• No manual backup\n• Optimizes performance\n• Protects from damage\n\nFunctions:\n\n1. Thrust management:\n• Pilot selects thrust\n• FADEC sets N1, N2, fuel flow\n• Accounts for altitude, temperature\n\n2. Start sequence:\n• Automated\n• Monitors parameters\n• Aborts if unsafe\n\n3. Limit protection:\n• Max temperature\n• Max RPM\n• Surge prevention\n• Stall prevention\n\n4. Health monitoring:\n• Continuous diagnostics\n• Trend analysis\n• Predictive maintenance\n\nParameters:\n\nN1 (Fan speed):\n• Primary thrust indicator\n• Percentage of max RPM\n• Pilot reference\n\nN2 (Core speed):\n• High pressure spool\n• Indicates core power\n• Secondary reference\n\nEGT (Exhaust Gas Temperature):\n• Turbine health indicator\n• Limit: 950-1,050°C\n• Redline parameter\n\nFuel Flow:\n• kg/hr or lb/hr\n• Economy monitoring\n• Range calculations\n\nThrust Settings:\n\nTakeoff:\n• Max thrust: 100% N1\n• Time limited: 5-10 minutes\n• Reduced thrust common\n\nClimb:\n• Max continuous: 95% N1\n• Unlimited time\n• Typical climb power\n\nCruise:\n• 85-90% N1\n• Most efficient\n• Long duration\n\nIdle:\n• 20-30% N1\n• Descent\n• Ground operations"
      }
    ],
    
    keyTakeaways: [
      "Higher bypass ratio improves propulsive efficiency: η_p = 2/(1 + V_e/V_0)",
      "Modern turbofans: BPR 9-12, future 12-15",
      "Wing-mounted engines most common: easy maintenance, good clearance",
      "Thrust reversers provide 40-50% of forward thrust",
      "FADEC provides full engine control and protection",
      "N1 (fan speed) is primary thrust indicator for pilots"
    ],
    
    vocabulary: [
      { term: "Propulsive Efficiency (η_p)", definition: "Efficiency of converting jet power to thrust" },
      { term: "Nacelle", definition: "Housing around engine; includes inlet, cowls, reverser" },
      { term: "Pylon", definition: "Structure connecting engine to wing or fuselage" },
      { term: "Thrust Reverser", definition: "Device that redirects thrust forward for braking" },
      { term: "FADEC", definition: "Full Authority Digital Engine Control; computer controls engine" },
      { term: "N1", definition: "Fan speed as percentage of maximum RPM" }
    ]
  }
];

export default planesUnit4Lessons;
