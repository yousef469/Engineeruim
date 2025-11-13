// Unit 1: Rocket Fundamentals - Advanced Lessons
// Lessons 8-11: Specific Impulse, Staging, TWR, Engine Types

export const unit1AdvancedLessons = [
  {
    id: 8,
    title: "Specific Impulse & Engine Efficiency",
    unit: "Rocket Fundamentals",
    duration: "25 min",
    introduction: "Specific Impulse (I_sp) is the most important metric for comparing rocket engine performance. It measures how efficiently an engine converts propellant mass into thrust.",
    
    sections: [
      {
        title: "Definition & Physical Meaning",
        content: "Specific Impulse: I_sp = T/(ṁ × g₀)\n\nAlternative: I_sp = v_e/g₀\n\nPhysical Interpretation:\n• Time: How many seconds one kg of propellant can produce 1 kg of thrust\n• Efficiency: Higher I_sp = more efficient engine\n• Fuel economy: Like miles per gallon for rockets\n\nExample Values:\n• Cold gas thruster: 50-70 s\n• Solid rocket: 250-280 s\n• RP-1/LOX (Sea Level): 300-310 s\n• RP-1/LOX (Vacuum): 340-360 s\n• LH₂/LOX (Vacuum): 430-465 s\n• Ion thruster: 3,000-10,000 s\n\nKey Insight: A 10% increase in I_sp can reduce fuel mass by 20-30% for the same mission!"
      },
      {
        title: "Propellant Comparison",
        content: "Why Hydrogen is Superior:\n\nLH₂/LOX combustion:\n• Products: H₂O (M = 18 g/mol)\n• Temperature: ~3,600 K\n• Result: I_sp = 450 s\n\nRP-1/LOX combustion:\n• Products: CO₂, H₂O mix (M = 22-28 g/mol)\n• Temperature: ~3,600 K\n• Result: I_sp = 310 s\n\nHydrogen gives 45% higher I_sp!\n\nBut LH₂ has disadvantages:\n• Very low density (needs huge tanks)\n• Cryogenic (-253°C)\n• Boil-off issues\n• Complex handling\n\nExample: Same Δv = 6,000 m/s\n\nRP-1/LOX (v_e = 3,000 m/s):\n• R = e^(6,000/3,000) = 7.39\n• Fuel: 63,900 kg\n\nLH₂/LOX (v_e = 4,400 m/s):\n• R = e^(6,000/4,400) = 3.86\n• Fuel: 28,600 kg\n\nLH₂ needs 55% less propellant mass!\nBut: LH₂ volume is 4× larger than RP-1"
      }
    ],
    
    keyTakeaways: [
      "Specific Impulse (I_sp) measures engine efficiency: I_sp = v_e / g₀",
      "Higher I_sp dramatically reduces fuel requirements",
      "LH₂/LOX has best chemical I_sp (450s) but requires huge tanks",
      "CH₄/LOX offers good compromise: 370s I_sp with better density",
      "Electric propulsion achieves 3,000-10,000s I_sp but very low thrust"
    ],
    
    vocabulary: [
      { term: "Specific Impulse (I_sp)", definition: "Thrust per unit weight flow rate; efficiency metric measured in seconds" },
      { term: "Expansion Ratio (ε)", definition: "Ratio of nozzle exit area to throat area" },
      { term: "Cryogenic Propellant", definition: "Fuel or oxidizer stored at very low temperature" }
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
