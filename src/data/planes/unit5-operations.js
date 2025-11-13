// Unit 5: Flight Operations - MIT-Quality Content
// Lessons 18-21: Performance, planning, safety (4 core lessons)

export const planesUnit5Lessons = [
  {
    id: 18,
    title: "Takeoff & Landing Performance",
    unit: "Flight Operations",
    duration: "30 min",
    introduction: "Takeoff and landing are critical phases. Understanding performance calculations is essential for safe operations.",
    
    sections: [
      {
        title: "Takeoff Distance",
        content: "Balanced Field Length:\n\nV1 (Decision speed):\n• Continue takeoff if engine fails\n• OR abort and stop\n• Critical safety speed\n\nVR (Rotation speed):\n• Pilot pulls back\n• Nose lifts off\n• Typically 1.05 × V1\n\nV2 (Takeoff safety speed):\n• Climb speed with engine out\n• Must achieve by 35 ft\n• Typically 1.2 × V_stall\n\nTakeoff Distance Equation:\n\ns_TO = 1.44 × W²/(ρ × g × S × C_Lmax × T)\n\nExample: Boeing 737-800\n• Weight: W = 700,000 N\n• Wing area: S = 125 m²\n• C_Lmax = 2.5 (flaps 5°)\n• Thrust: T = 240,000 N (both engines)\n• Density: ρ = 1.225 kg/m³\n\ns_TO = 1.44 × 700,000²/(1.225 × 9.81 × 125 × 2.5 × 240,000)\ns_TO = 1,920 m\n\nWith safety margins: 2,200 m required\n\nFactors Affecting Takeoff:\n\nAltitude:\n• Higher = less dense air\n• Less thrust, less lift\n• Longer distance\n• Denver (1,600 m): +40% distance\n\nTemperature:\n• Hot day = less dense air\n• ISA+15°C: +15% distance\n\nWind:\n• 10 kt headwind: -10% distance\n• 10 kt tailwind: +20% distance\n\nRunway slope:\n• 1% upslope: +10% distance\n• 1% downslope: -5% distance"
      },
      {
        title: "Landing Distance",
        content: "Landing Speeds:\n\nVref (Reference speed):\n• 1.3 × V_stall (landing config)\n• Typical: 65-75 m/s\n• Flaps full, gear down\n\nVapp (Approach speed):\n• Vref + wind correction\n• +5 kt per 10 kt wind\n• Typical: 70-80 m/s\n\nLanding Distance:\n\ns_land = V²/(2a)\n\nWhere a = deceleration\n\nDeceleration sources:\n• Wheel brakes: 0.3-0.4 g\n• Spoilers: 0.05 g\n• Reverse thrust: 0.1-0.15 g\n• Total: 0.45-0.6 g\n\nExample: Boeing 737\n• Vref = 70 m/s\n• Deceleration: 0.5 g = 4.9 m/s²\n\ns_land = 70²/(2 × 4.9) = 500 m\n\nCertification requirement:\n• Actual × 1.67 = 835 m\n• Plus 50 ft obstacle clearance\n• Total: 1,000 m required\n\nAutobrakes:\n\nSettings:\n• 1: Light (0.15 g)\n• 2: Medium (0.25 g)\n• 3: Heavy (0.35 g)\n• MAX: Maximum (0.5 g)\n\nTypical use:\n• Dry runway: Setting 2\n• Wet runway: Setting 3\n• Contaminated: MAX\n\nStopping Distance:\n\nDry runway (μ = 0.8):\n• 500 m typical\n\nWet runway (μ = 0.4):\n• 800 m\n• 60% increase!\n\nIcy runway (μ = 0.1):\n• 2,000 m\n• 4× dry distance\n• May not stop!"
      },
      {
        title: "Climb & Descent Performance",
        content: "Climb Gradient:\n\nGradient = (T - D)/W\n\nCertification requirements:\n• All engines: 3.2%\n• One engine out: 2.4% (twin)\n• One engine out: 2.7% (three)\n• One engine out: 3.0% (four)\n\nExample: Boeing 737 (twin)\n• Weight: 700,000 N\n• Thrust (one engine): 120,000 N\n• Drag: 80,000 N\n\nGradient = (120,000 - 80,000)/700,000\nGradient = 0.057 = 5.7%\n\nExceeds 2.4% requirement ✓\n\nClimb Rate:\n\nRC = (T - D) × V / W\n\nAt 250 m/s:\nRC = 40,000 × 250 / 700,000\nRC = 14.3 m/s = 2,860 ft/min\n\nTime to Altitude:\n\nt = Δh / RC_avg\n\nTo 11,000 m:\n• Average RC: 10 m/s\n• Time: 1,100 seconds = 18 minutes\n\nDescent:\n\nIdle descent:\n• Engines at idle\n• Drag > Thrust\n• Typical gradient: 3-5°\n• Rate: 1,000-2,000 ft/min\n\nSpeed brakes:\n• Increase drag\n• Steeper descent\n• Emergency descent: 6,000 ft/min\n\nDescent planning:\n• Rule of thumb: 3 miles per 1,000 ft\n• From 35,000 ft: 105 miles\n• Start descent early"
      },
      {
        title: "Flight Planning & Fuel",
        content: "Fuel Requirements:\n\nTrip fuel:\n• Taxi: 200 kg\n• Takeoff & climb: 2,000 kg\n• Cruise: 8,000 kg\n• Descent: 500 kg\n• Total: 10,700 kg\n\nReserves:\n• Alternate: 1,500 kg\n• Hold (30 min): 1,000 kg\n• Final (45 min): 1,500 kg\n• Contingency (5%): 500 kg\n• Total reserves: 4,500 kg\n\nTotal fuel: 15,200 kg\n\nRange Calculation:\n\nBreguet range:\nR = (V/SFC) × (L/D) × ln(W_i/W_f)\n\nExample: Boeing 737-800\n• Cruise speed: 250 m/s\n• SFC: 0.58 kg/(kN·hr) = 1.61×10⁻⁷ kg/(N·s)\n• L/D: 17\n• Initial weight: 700,000 N\n• Fuel: 100,000 N\n• Final weight: 600,000 N\n\nR = (250/1.61×10⁻⁷) × 17 × ln(700,000/600,000)\nR = 1.55×10⁹ × 17 × 0.154\nR = 4,060,000 m = 4,060 km\n\nActual range: 5,765 km\n(Difference: reserves, winds, routing)\n\nCost Index:\n\nTrade-off:\n• Fly fast: Less time, more fuel\n• Fly slow: More time, less fuel\n\nCost Index = Time cost / Fuel cost\n\nTypical:\n• CI = 0: Maximum range\n• CI = 50: Balanced\n• CI = 100: Fast cruise\n\nAirlines optimize:\n• Short flights: High CI\n• Long flights: Low CI\n• Delays: Adjust CI"
      }
    ],
    
    keyTakeaways: [
      "Takeoff distance: s = 1.44×W²/(ρgSC_LmaxT)",
      "V1 is decision speed: continue or abort takeoff",
      "Landing distance increases 60% on wet runway",
      "Climb gradient requirement: 2.4% one-engine-out for twins",
      "Fuel reserves: alternate + hold + final + contingency",
      "Breguet range: R = (V/SFC)×(L/D)×ln(W_i/W_f)"
    ],
    
    vocabulary: [
      { term: "V1", definition: "Decision speed; continue or abort takeoff" },
      { term: "VR", definition: "Rotation speed; pilot lifts nose" },
      { term: "V2", definition: "Takeoff safety speed; must achieve by 35 ft" },
      { term: "Vref", definition: "Landing reference speed; 1.3 × V_stall" },
      { term: "Balanced Field Length", definition: "Runway length where accelerate-stop = accelerate-go" },
      { term: "Cost Index", definition: "Ratio of time cost to fuel cost; determines cruise speed" }
    ]
  },

  {
    id: 19,
    title: "Weather, Safety & Emergency Procedures",
    unit: "Flight Operations",
    duration: "30 min",
    introduction: "Weather and emergencies require careful procedures. Understanding safety systems and emergency responses is essential for flight operations.",
    
    sections: [
      {
        title: "Weather Effects",
        content: "Wind Shear:\n\nSudden wind change:\n• Headwind → Tailwind\n• Airspeed decreases\n• Lift decreases\n• Aircraft sinks\n\nMicroburst:\n• Downdraft from thunderstorm\n• 20-40 m/s downdraft\n• Spreads horizontally\n• Extremely dangerous\n\nRecovery:\n• Full thrust immediately\n• Pitch for target speed\n• Don't try to climb\n• Minimize altitude loss\n\nTurbulence:\n\nCategories:\n• Light: Slight changes\n• Moderate: Difficult to walk\n• Severe: Large altitude changes\n• Extreme: Structural damage possible\n\nPenetration speed:\n• Slower than cruise\n• Reduces loads\n• Typical: 280 kt / M 0.76\n\nIcing:\n\nTypes:\n• Rime: Rough, white\n• Clear: Smooth, transparent\n• Mixed: Combination\n\nEffects:\n• Increases weight\n• Disrupts airflow\n• Reduces lift 30%\n• Increases drag 40%\n\nProtection:\n• Engine bleed air (hot)\n• Electrical heating\n• Boots (inflate/deflate)\n• Avoid icing conditions"
      },
      {
        title: "Emergency Systems",
        content: "Hydraulic Systems:\n\nRedundancy:\n• 3 independent systems\n• Each can fly aircraft\n• Different pumps, reservoirs\n\nBackup:\n• Ram Air Turbine (RAT)\n• Deploys in emergency\n• Windmill generates power\n• Provides hydraulics + electrical\n\nElectrical Systems:\n\nPower sources:\n• 2 engine generators\n• APU generator\n• Battery\n• RAT (emergency)\n\nEssential bus:\n• Critical systems only\n• Flight instruments\n• Communications\n• Flight controls\n\nOxygen Systems:\n\nPassenger:\n• Chemical generators\n• 12-15 minutes\n• Enough to descend\n\nCrew:\n• Pressurized bottles\n• 2+ hours\n• Smoke goggles\n• Portable bottles\n\nDecompression:\n\nRapid (1 second):\n• Explosive\n• Fog forms\n• Ears pop\n• Masks deploy\n\nSlow (minutes):\n• Gradual pressure loss\n• Hypoxia risk\n• May not notice\n• Monitor pressurization\n\nEmergency descent:\n• Immediate\n• Idle thrust\n• Speed brakes\n• 6,000 ft/min descent\n• Level at 10,000 ft"
      },
      {
        title: "Engine Failure Procedures",
        content: "Takeoff Engine Failure:\n\nBefore V1:\n• Abort takeoff\n• Throttles idle\n• Maximum braking\n• Reverse thrust\n• Stop on runway\n\nAfter V1:\n• Continue takeoff\n• Maintain V2 speed\n• Climb to safe altitude\n• Declare emergency\n• Return or continue\n\nV1 is critical:\n• Too early: Overrun\n• Too late: Can't climb\n• Must be precise\n\nCruise Engine Failure:\n\nImmediate actions:\n• Maintain control\n• Identify failed engine\n• Secure engine (fuel off)\n• Declare emergency\n\nPerformance:\n• Twin: 50% thrust loss\n• Can maintain altitude\n• Reduced speed\n• Divert to nearest suitable\n\nETOPS:\n\nExtended Operations:\n• Twin-engine overwater\n• Must reach airport in 60-180 min\n• One engine\n• Requires certification\n\nExample: ETOPS-180\n• 180 minutes to airport\n• At 400 kt: 1,200 nm\n• Allows Pacific crossings\n\nRequirements:\n• Reliable engines\n• Enhanced maintenance\n• Special training\n• Route planning"
      },
      {
        title: "Safety Systems & Automation",
        content: "TCAS:\n\nTraffic Collision Avoidance:\n• Interrogates transponders\n• Tracks nearby aircraft\n• Provides warnings\n• Resolution advisories\n\nTA (Traffic Advisory):\n• 20-48 seconds warning\n• \"Traffic, traffic\"\n• Visual only\n\nRA (Resolution Advisory):\n• 15-35 seconds to impact\n• \"Climb, climb\" or \"Descend\"\n• Must follow immediately\n• Overrides ATC\n\nGPWS/EGPWS:\n\nGround Proximity Warning:\n• Radar altimeter\n• Terrain database\n• Predicts impact\n\nWarnings:\n• \"Terrain, terrain\"\n• \"Pull up, pull up\"\n• Requires immediate action\n\nModes:\n• Excessive descent rate\n• Excessive terrain closure\n• Altitude loss after takeoff\n• Unsafe terrain clearance\n• Excessive glideslope deviation\n\nAutopilot:\n\nModes:\n• Heading hold\n• Altitude hold\n• Vertical speed\n• ILS approach\n• Autoland (Cat III)\n\nLimitations:\n• Turbulence\n• Low altitude\n• Approach minimums\n• Must monitor\n\nAutoland:\n\nCategory III:\n• Zero visibility\n• Fully automated\n• Dual/triple autopilot\n• Requires:\n  - Certified aircraft\n  - Certified airport\n  - Certified crew\n  - Special maintenance\n\nDecision height:\n• Cat I: 200 ft\n• Cat II: 100 ft\n• Cat IIIa: 50 ft\n• Cat IIIb: 0 ft (autoland)"
      }
    ],
    
    keyTakeaways: [
      "Microburst: 20-40 m/s downdraft; extremely dangerous on approach",
      "Icing reduces lift 30%, increases drag 40%",
      "V1 is critical: abort before, continue after",
      "ETOPS allows twin-engine overwater: must reach airport in 60-180 min",
      "TCAS provides collision avoidance; RA must be followed immediately",
      "Autoland enables zero-visibility landings (Cat IIIb)"
    ],
    
    vocabulary: [
      { term: "Microburst", definition: "Intense downdraft from thunderstorm; spreads on ground" },
      { term: "Wind Shear", definition: "Sudden change in wind speed or direction" },
      { term: "ETOPS", definition: "Extended Operations; twin-engine overwater certification" },
      { term: "TCAS", definition: "Traffic Collision Avoidance System" },
      { term: "GPWS", definition: "Ground Proximity Warning System" },
      { term: "Autoland", definition: "Fully automated landing in zero visibility" }
    ]
  }
];

export default planesUnit5Lessons;
