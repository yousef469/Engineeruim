// Unit 1: Rocket Fundamentals - Advanced Lessons
// Lessons 8-11: Specific Impulse, Staging, TWR, Engine Types

export const unit1AdvancedLessons = [
  {
    id: 8,
    title: "Specific Impulse: The Efficiency Metric",
    unit: "Rocket Fundamentals",
    duration: "40 min",
    introduction: "🎯 Specific Impulse (Isp) is like 'miles per gallon' for rockets! It measures how efficiently an engine uses propellant. Higher Isp = better efficiency = less fuel needed. Chemical rockets: 300-450s. Ion engines: 3,000+ seconds. This 10× difference revolutionizes deep space missions!",
    
    sections: [
      {
        title: "🧠 What is Specific Impulse?",
        content: "**Definition:** Specific Impulse (Isp) is the thrust produced per unit weight of propellant consumed per second.\n\n**Units:** Seconds (yes, really!)\n\n**Formula:** Isp = v_e / g₀\n\nWhere:\n• v_e = exhaust velocity (m/s)\n• g₀ = 9.81 m/s² (standard gravity)\n\n**Alternative Formula:** Isp = T / (ṁ × g₀)\n\nWhere:\n• T = thrust (N)\n• ṁ = mass flow rate (kg/s)\n\n**Physical Meaning:**\nIsp tells you: 'For how many seconds can this engine produce thrust equal to the weight of propellant it consumes?'\n\n**Example:**\nIsp = 300 seconds means:\n• 1 kg of propellant produces 9.81 N of thrust for 300 seconds\n• OR produces 2,943 N for 1 second\n• Total impulse = 2,943 N·s per kg\n\n**Why Seconds?**\nHistorical convention from early rocketry. Makes comparison easy:\n• Higher number = better efficiency\n• Independent of units (metric/imperial)\n• Easy to remember typical values\n\n**Typical Values:**\n• Cold gas thrusters: 50-70 s\n• Solid rockets: 250-280 s\n• Kerosene/LOX (sea level): 300-310 s\n• Kerosene/LOX (vacuum): 340-360 s\n• Hydrogen/LOX (vacuum): 430-465 s\n• Ion engines: 3,000-10,000 s\n• Nuclear thermal: 800-1,000 s\n\n**Example: Merlin 1D Specific Impulse**\n\n**Given:**\n• Exhaust velocity: v_e = 3,050 m/s (sea level)\n• Standard gravity: g₀ = 9.81 m/s²\n\n**Calculate Isp:**\nIsp = v_e / g₀ = 3,050 / 9.81 = 311 seconds\n\n**In vacuum:**\n• v_e = 3,310 m/s\n• Isp = 3,310 / 9.81 = 337 seconds\n\n**Interpretation:**\n• 1 kg of propellant produces thrust for 311 seconds\n• Total impulse = 311 × 9.81 = 3,050 N·s per kg\n• Vacuum Isp is 8% higher (better expansion)\n\n**Why Isp Matters:**\nA 10% increase in Isp can reduce fuel mass by 20-30% for the same mission!\n\n**Example:**\nMission requiring 6,000 m/s delta-v with 1,000 kg payload:\n\n**Engine A: Isp = 300s (v_e = 2,943 m/s)**\nR = e^(6,000/2,943) = 8.17\nm₀ = 1,000 × 8.17 = 8,170 kg\nFuel = 7,170 kg\n\n**Engine B: Isp = 330s (v_e = 3,237 m/s)**\nR = e^(6,000/3,237) = 6.05\nm₀ = 1,000 × 6.05 = 6,050 kg\nFuel = 5,050 kg\n\n**Result:** 10% Isp increase → 30% less fuel!"
      },
      {
        title: "🔬 Propellant Comparison & Trade-offs",
        content: "Different propellants offer different Isp values. Let's compare!\n\n**Why Hydrogen is Superior:**\n\n**LH₂/LOX combustion:**\n• Products: H₂O (molecular weight = 18 g/mol)\n• Combustion temperature: ~3,600 K\n• Exhaust velocity: 4,400 m/s\n• Result: Isp = 450 s (vacuum)\n\n**RP-1/LOX combustion:**\n• Products: CO₂, H₂O mix (M = 22-28 g/mol)\n• Combustion temperature: ~3,600 K\n• Exhaust velocity: 3,000 m/s\n• Result: Isp = 310 s (sea level)\n\n**Hydrogen gives 45% higher Isp!**\n\n**Why?**\nLighter molecules (H₂O vs CO₂) accelerate faster at same temperature.\nv_e ∝ √(T/M)\n\n**But LH₂ has disadvantages:**\n• Very low density (71 kg/m³ vs 810 kg/m³ for RP-1)\n• Needs tanks 11× larger by volume!\n• Cryogenic (-253°C) - complex handling\n• Boil-off issues (loses ~1% per day)\n• Expensive infrastructure\n\n**Example: Same Δv = 6,000 m/s, 10,000 kg payload**\n\n**RP-1/LOX (v_e = 3,000 m/s):**\n• R = e^(6,000/3,000) = 7.39\n• m₀ = 10,000 × 7.39 = 73,900 kg\n• Fuel mass: 63,900 kg\n• Fuel volume: ~79 m³\n\n**LH₂/LOX (v_e = 4,400 m/s):**\n• R = e^(6,000/4,400) = 3.86\n• m₀ = 10,000 × 3.86 = 38,600 kg\n• Fuel mass: 28,600 kg\n• Fuel volume: ~403 m³\n\n**Analysis:**\n• LH₂ needs 55% less propellant mass!\n• But LH₂ volume is 5× larger\n• Larger tanks = more structure mass\n• Trade-off depends on mission\n\n**Methane: The Compromise**\n\n**CH₄/LOX (Raptor engine):**\n• Isp: 370 s (vacuum)\n• Density: 423 kg/m³ (6× better than LH₂)\n• Temperature: -162°C (easier than LH₂)\n• Can be produced on Mars!\n\n**Why SpaceX chose methane:**\n• Good Isp (between RP-1 and LH₂)\n• Reasonable density\n• Cleaner burning (less coking)\n• Mars ISRU potential\n• Reusability friendly\n\n**Engine Comparison Table:**\n\n**Merlin 1D (RP-1/LOX):**\n• Isp: 311s (SL), 337s (Vac)\n• Thrust: 845 kN (SL)\n• Pros: Dense fuel, simple, proven\n• Cons: Lower Isp, coking issues\n\n**RS-25 (LH₂/LOX):**\n• Isp: 366s (SL), 452s (Vac)\n• Thrust: 1,860 kN (SL)\n• Pros: Highest chemical Isp\n• Cons: Huge tanks, complex, expensive\n\n**Raptor (CH₄/LOX):**\n• Isp: 330s (SL), 370s (Vac)\n• Thrust: 2,300 kN (SL)\n• Pros: Good balance, Mars ISRU\n• Cons: Full-flow staged combustion complexity\n\n**Ion Engine (Xenon):**\n• Isp: 3,000-10,000 s\n• Thrust: 0.09 N (tiny!)\n• Pros: Incredibly efficient\n• Cons: Very low thrust, needs power\n• Use: Deep space missions only"
      },
      {
        title: "🚀 Real-World Applications",
        content: "How Isp affects real missions:\n\n**Application 1: First Stage vs Upper Stage**\n\n**First Stage (Falcon 9):**\n• Uses RP-1/LOX (Isp = 311s)\n• Why? Dense fuel = smaller tanks = less drag\n• Thrust more important than efficiency\n• Operates in atmosphere\n\n**Second Stage (Falcon 9):**\n• Uses RP-1/LOX (Isp = 348s vacuum)\n• Same fuel but optimized nozzle\n• Efficiency matters more in vacuum\n• No drag, so Isp is critical\n\n**Application 2: Deep Space Missions**\n\n**Dawn Spacecraft (Asteroid Belt):**\n• Ion engines: Isp = 3,100 s\n• Total Δv: 11,000 m/s!\n• Propellant: Only 425 kg xenon\n• Mission: 7 years, visited Vesta and Ceres\n\n**With chemical propulsion:**\n• Would need Isp = 300s\n• R = e^(11,000/2,943) = 42.5\n• For 1,000 kg spacecraft: 42,500 kg total\n• Impossible!\n\n**Ion engines make deep space possible!**\n\n**Application 3: Satellite Station-Keeping**\n\n**Geostationary Satellite:**\n• Needs ~50 m/s per year\n• 15-year mission: 750 m/s total\n\n**Hydrazine (Isp = 230s, v_e = 2,255 m/s):**\nR = e^(750/2,255) = 1.40\nFor 1,000 kg satellite: 400 kg fuel (40%!)\n\n**Ion Engine (Isp = 3,000s, v_e = 29,430 m/s):**\nR = e^(750/29,430) = 1.026\nFor 1,000 kg satellite: 26 kg fuel (2.6%)\n\n**15× less fuel with ion engines!**\nThis is why modern satellites use electric propulsion.\n\n**Application 4: Mars Mission Trade-off**\n\n**Mission: LEO to Mars surface and back**\nTotal Δv: ~15,000 m/s\n\n**Option A: All Chemical (Isp = 380s)**\nR = e^(15,000/3,728) = 56.8\nFor 10-ton payload: 568 tons at start!\nRequires multiple launches and assembly\n\n**Option B: Nuclear Thermal (Isp = 900s)**\nR = e^(15,000/8,829) = 5.66\nFor 10-ton payload: 56.6 tons at start\nSingle launch possible!\n\n**This is why NASA studied nuclear propulsion for Mars.**"
      }
    ],
    
    keyTakeaways: [
      "Specific Impulse: Isp = v_e/g₀ - THE efficiency metric for rocket engines",
      "Higher Isp dramatically reduces fuel requirements (10% Isp → 30% less fuel)",
      "LH₂/LOX: Best chemical Isp (450s) but huge tanks and complexity",
      "CH₄/LOX: Good compromise (370s) with better density and Mars potential",
      "Ion engines: 3,000-10,000s Isp enables deep space missions impossible with chemical",
      "First stages prioritize thrust; upper stages prioritize Isp"
    ],
    
    vocabulary: [
      { term: "Specific Impulse (Isp)", definition: "Efficiency metric; thrust per unit weight flow rate; measured in seconds" },
      { term: "Exhaust Velocity (v_e)", definition: "Speed of exhaust gases; v_e = Isp × g₀" },
      { term: "Cryogenic Propellant", definition: "Fuel/oxidizer stored below -150°C (LH₂, LOX, LCH₄)" },
      { term: "Expansion Ratio (ε)", definition: "Nozzle exit area / throat area; affects vacuum performance" },
      { term: "ISRU", definition: "In-Situ Resource Utilization; making propellant on other planets" }
    ]
  },

  {
    id: 9,
    title: "Rocket Staging & Mass Optimization",
    unit: "Rocket Fundamentals",
    duration: "30 min",
    introduction: "Staging is the key innovation that makes orbital spaceflight possible. By dropping empty tanks and engines during flight, rockets dramatically improve their mass ratio and delta-v capability.",
    
    sections: [
      {
        title: "Why Staging is Necessary",
        content: "To reach Low Earth Orbit (LEO):\n• Required Δv ≈ 9,500 m/s\n• Best chemical I_sp ≈ 450 s (LH₂/LOX)\n• Exhaust velocity: v_e = 4,415 m/s\n\nRequired mass ratio: R = e^(9,500/4,415) = 8.58\n\nThis means 88.4% must be fuel - barely feasible for single stage!\n\nWith Staging:\nTwo stages with R = 3.0 each:\n• Δv_total = 2 × 4,415 × ln(3) = 9,704 m/s\n• Each stage: 10% structure, 85% propellant, 5% payload\n• Much more practical!\n\nHistorical Example - Saturn V:\n• Total mass: 2,970,000 kg\n• Payload to LEO: 140,000 kg\n• Payload fraction: 4.7%\n\nSingle stage would need 0.3% payload fraction - impossible!"
      },
      {
        title: "Multi-Stage Rocket Equation",
        content: "For n stages in series:\nΔv_total = Σ v_e,i × ln(R_i)\n\nTwo-Stage Example:\n\nStage 1:\n• m₀ = 100,000 kg, m₁ = 20,000 kg, v_e = 3,000 m/s\n• Δv₁ = 3,000 × ln(5) = 4,828 m/s\n\nStage 2:\n• m₁ = 20,000 kg, m₂ = 4,000 kg, v_e = 3,500 m/s\n• Δv₂ = 3,500 × ln(5) = 5,632 m/s\n\nTotal: Δv = 10,460 m/s - Enough for orbit!\n\nOptimal Staging:\nFor maximum Δv: R₁ = R₂ = R₃ = ... = R_n\nEqual mass ratios for each stage is optimal."
      },
      {
        title: "Real Rocket Analysis",
        content: "Falcon 9:\n\nStage 1:\n• Wet mass: 433,100 kg\n• Dry mass: 22,200 kg\n• R₁ = 19.5\n• Δv ≈ 6,500 m/s\n\nStage 2:\n• Wet mass: 111,500 kg\n• Dry mass: 4,900 kg\n• R₂ = 22.8\n• Δv ≈ 3,500 m/s\n\nTotal Δv: ~10,000 m/s\n\nSaturn V:\n\nS-IC (First Stage):\n• R₁ = 16.9, Δv ≈ 2,400 m/s\n\nS-II (Second Stage):\n• R₂ = 12.6, Δv ≈ 4,500 m/s\n\nS-IVB (Third Stage):\n• R₃ = 9.0, Δv ≈ 4,200 m/s\n\nTotal Δv: ~11,100 m/s"
      }
    ],
    
    keyTakeaways: [
      "Staging enables orbital flight by dropping dead weight during ascent",
      "Multi-stage Δv is additive: Δv_total = Δv₁ + Δv₂ + Δv₃",
      "Optimal staging uses equal mass ratios per stage",
      "Real rockets deviate from optimal due to propellant choices",
      "2-3 stages is optimal for most orbital missions"
    ],
    
    vocabulary: [
      { term: "Staging", definition: "Dropping empty tanks and engines during flight to improve mass ratio" },
      { term: "Hot Staging", definition: "Upper stage ignites before separation" },
      { term: "Cold Staging", definition: "Stages separate first, then upper stage ignites" },
      { term: "Payload Fraction", definition: "Ratio of payload mass to total initial mass" }
    ]
  },

  {
    id: 10,
    title: "Thrust-to-Weight Ratio Analysis",
    unit: "Rocket Fundamentals",
    duration: "25 min",
    introduction: "Thrust-to-Weight Ratio (TWR) determines whether a rocket can lift off, how quickly it accelerates, and how efficiently it climbs through the atmosphere.",
    
    sections: [
      {
        title: "TWR Fundamentals",
        content: "Thrust-to-Weight Ratio: TWR = T/(mg)\n\nMinimum Liftoff: TWR > 1.0\n\nNet Force: F_net = T - mg = mg(TWR - 1)\nAcceleration: a = g(TWR - 1)\n\nFalcon 9 Liftoff:\n• Mass: 549,000 kg\n• Thrust: 7,605 kN\n• TWR = 1.41\n• Acceleration: 4.02 m/s² (0.41 g)\n\nSaturn V Liftoff:\n• Mass: 2,970,000 kg\n• Thrust: 34,020 kN\n• TWR = 1.17\n• Acceleration: 1.67 m/s²\n\nLower TWR = gentler liftoff, less structural stress"
      },
      {
        title: "Time-Varying TWR",
        content: "TWR Changes During Burn:\n\nTWR(t) = T/[m(t) × g]\n\nAs fuel burns: m(t) = m₀ - ṁ × t\n\nFalcon 9 First Stage:\n\nT+0 seconds:\n• TWR = 1.41\n\nT+80 seconds (halfway):\n• Mass: 290,600 kg\n• TWR = 2.67\n\nT+162 seconds (burnout):\n• Mass: 25,600 kg\n• TWR = 30.3\n• Acceleration: 287 m/s² = 29.3g\n\nThis is why rockets throttle down before MECO!\n\nThrottling Strategy:\n• Reduce thrust as mass decreases\n• Typical limit: 3-5 g for crewed missions\n• 6-8 g for cargo\n\nFalcon 9 throttles to ~60% before MECO"
      },
      {
        title: "Gravity Losses",
        content: "Gravity Loss Concept:\nDuring vertical flight, gravity constantly pulls down.\nThis wastes Δv that doesn't increase velocity.\n\nGravity Loss: Δv_gravity = g × t_burn\n\nFalcon 9 first stage (162 seconds):\nΔv_gravity = 9.81 × 162 = 1,589 m/s\n\nThis is Δv lost to fighting gravity!\n\nTotal Velocity Budget to LEO:\n• Ideal Δv: 9,500 m/s\n• Gravity loss: 1,500 m/s (16%)\n• Drag loss: 100-200 m/s (1-2%)\n• Steering loss: 50-100 m/s (0.5-1%)\n• Total needed: 11,150 m/s (117%)\n\nOptimal TWR Trade-off:\n• High TWR: Shorter burn, less gravity loss, but higher structural loads\n• Low TWR: Longer burn, more gravity loss, but gentler on structure\n• First stage optimal: TWR = 1.2-1.5 at liftoff"
      }
    ],
    
    keyTakeaways: [
      "TWR must exceed 1.0 for vertical liftoff from any planetary surface",
      "TWR increases during flight as fuel burns and mass decreases",
      "Rockets throttle down near burnout to limit acceleration",
      "Gravity losses are ~1,500 m/s for LEO missions (16% of total)",
      "Optimal TWR balances gravity losses vs structural mass"
    ],
    
    vocabulary: [
      { term: "Thrust-to-Weight Ratio (TWR)", definition: "Ratio of thrust force to weight; must exceed 1.0 for liftoff" },
      { term: "Gravity Loss", definition: "Delta-v wasted fighting gravity during vertical flight" },
      { term: "Max-Q", definition: "Maximum dynamic pressure point during ascent" },
      { term: "MECO", definition: "Main Engine Cut-Off; end of powered flight for a stage" }
    ]
  },

  {
    id: 11,
    title: "Rocket Engine Types & Selection",
    unit: "Rocket Fundamentals",
    duration: "30 min",
    introduction: "Rocket engines come in many types, each optimized for different missions. Understanding the trade-offs between solid, liquid, and hybrid engines is essential for rocket design.",
    
    sections: [
      {
        title: "Solid Rocket Motors",
        content: "Basic Principle:\n• Fuel and oxidizer pre-mixed\n• Burns from inside out\n• Simple, reliable design\n\nPerformance:\n• I_sp: 250-280 s\n• Density: 1,700-1,800 kg/m³\n• Chamber pressure: 5-10 MPa\n\nAdvantages:\n✓ Simplicity (no pumps, valves)\n✓ Reliability (few failure modes)\n✓ Long storage life\n✓ High thrust density\n✓ Low cost\n\nDisadvantages:\n✗ Cannot throttle\n✗ Cannot restart\n✗ Lower I_sp than liquid\n✗ Safety concerns\n\nExamples:\n• Space Shuttle SRB: 12,500 kN thrust, 269 s I_sp\n• Ariane 5 Booster: 7,080 kN thrust, 275 s I_sp"
      },
      {
        title: "Liquid Rocket Engines",
        content: "Common Propellants:\n\nRP-1/LOX:\n• I_sp: 300-340 s\n• High density, easy storage\n• Examples: Falcon 9, Soyuz\n\nLH₂/LOX:\n• I_sp: 380-465 s\n• Very low density (huge tanks)\n• Examples: RS-25, RL-10\n\nCH₄/LOX:\n• I_sp: 330-380 s\n• Medium density\n• Examples: Raptor, BE-4\n\nEngine Cycles:\n\n1. Gas Generator (95% efficient):\n• Simple, reliable\n• Examples: Merlin, F-1\n\n2. Staged Combustion (99% efficient):\n• Complex, high performance\n• Examples: RS-25, RD-180\n\n3. Full-Flow Staged Combustion (99.5% efficient):\n• Most complex, highest efficiency\n• Example: Raptor (only operational FFSC)\n\n4. Expander Cycle (98% efficient):\n• Gentle, very reliable\n• Example: RL-10"
      },
      {
        title: "Engine Selection Criteria",
        content: "First Stage Requirements:\n• High thrust (TWR > 1.2)\n• Sea-level optimization\n• Reliability critical\n\nBest choices:\n• RP-1/LOX or CH₄/LOX\n• Gas generator or staged combustion\n• Examples: Merlin, Raptor, RD-180\n\nUpper Stage Requirements:\n• High I_sp (efficiency critical)\n• Vacuum optimization\n• Restartable\n\nBest choices:\n• LH₂/LOX or CH₄/LOX\n• Staged combustion or expander\n• Examples: RL-10, RS-25, Raptor Vac\n\nMission Examples:\n\nFalcon 9:\n• Both stages: RP-1/LOX (logistics)\n• Stage 1: Gas generator (simple)\n• Stage 2: Vacuum-optimized nozzle\n\nSaturn V:\n• S-IC: RP-1/LOX (thrust)\n• S-II & S-IVB: LH₂/LOX (efficiency)\n\nStarship:\n• Both stages: CH₄/LOX (reusability, ISRU)\n• Full-flow staged combustion\n• Throttleable for landing"
      }
    ],
    
    keyTakeaways: [
      "Solid rockets are simple and reliable but cannot throttle or restart",
      "Liquid engines offer high performance and control but are complex",
      "Engine cycle affects efficiency: gas generator (95%), staged combustion (99%)",
      "First stages prioritize thrust; upper stages prioritize I_sp",
      "LH₂/LOX gives best I_sp (450s) but requires huge tanks",
      "Mission requirements drive engine selection"
    ],
    
    vocabulary: [
      { term: "Gas Generator Cycle", definition: "Engine cycle where small amount of propellant drives turbopump" },
      { term: "Staged Combustion", definition: "All propellant goes through turbopump; pre-burner exhaust enters main chamber" },
      { term: "Full-Flow Staged Combustion", definition: "Both fuel and oxidizer have separate pre-burners; highest efficiency" },
      { term: "Hypergolic Propellant", definition: "Propellants that ignite on contact; no igniter needed" }
    ]
  }
];

export default unit1AdvancedLessons;
