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
    ],
    
    practiceProblems: [
      {
        id: "8-1",
        problem: "An engine has exhaust velocity v_e = 3,600 m/s. Calculate its specific impulse.",
        solution: "Isp = v_e/g₀ = 3,600/9.81 = 367 seconds",
        hint: "Use Isp = v_e/g₀ where g₀ = 9.81 m/s²"
      },
      {
        id: "8-2",
        problem: "Mission needs 7,000 m/s Δv with 5,000 kg payload. Compare fuel needs: Engine A (Isp=320s) vs Engine B (Isp=450s).",
        solution: "Engine A: v_e = 320×9.81 = 3,139 m/s, R = e^(7,000/3,139) = 9.49, m₀ = 47,450 kg, Fuel = 42,450 kg\nEngine B: v_e = 450×9.81 = 4,415 m/s, R = e^(7,000/4,415) = 5.05, m₀ = 25,250 kg, Fuel = 20,250 kg\nEngine B saves 22,200 kg (52% less fuel!)",
        hint: "Calculate v_e from Isp, then use rocket equation"
      },
      {
        id: "8-3",
        problem: "Why does hydrogen (Isp=450s) need larger tanks than kerosene (Isp=310s) despite better efficiency?",
        solution: "Hydrogen density: 71 kg/m³, Kerosene: 820 kg/m³\nFor 10,000 kg fuel: H₂ volume = 141 m³, Kerosene = 12 m³\nHydrogen needs 11.5× larger tanks! Trade-off: better Isp but huge tanks and cryogenic complexity.",
        hint: "Volume = mass/density. Compare densities."
      },
      {
        id: "8-4",
        problem: "Ion engine (Isp=3,500s) vs chemical (Isp=350s) for 5,000 m/s Δv mission with 1,000 kg spacecraft. Compare fuel needs.",
        solution: "Chemical: v_e = 3,434 m/s, R = e^(5,000/3,434) = 4.28, Fuel = 3,280 kg\nIon: v_e = 34,335 m/s, R = e^(5,000/34,335) = 1.157, Fuel = 157 kg\nIon engine needs 21× less fuel! This is why deep space missions use ion propulsion.",
        hint: "Calculate R for each, then fuel = m₀ - m_f"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q8-1",
          question: "What does specific impulse (Isp) measure?",
          options: [
            "Thrust of the engine",
            "Efficiency: seconds of thrust per kg of propellant",
            "Fuel consumption rate",
            "Exhaust temperature"
          ],
          correctAnswer: 1,
          explanation: "Isp measures efficiency - how many seconds of thrust you get per kg of propellant. Higher Isp = better efficiency = less fuel needed!"
        },
        {
          id: "q8-2",
          question: "Why does hydrogen have higher Isp than kerosene?",
          options: [
            "Burns hotter",
            "Lighter exhaust molecules (H₂O vs CO₂) accelerate faster at same temperature",
            "More energy per kg",
            "Better combustion"
          ],
          correctAnswer: 1,
          explanation: "v_e ∝ √(T/M). Hydrogen produces lighter molecules (H₂O, M=18) vs kerosene (CO₂, M=44). Lighter molecules = higher exhaust velocity = higher Isp!"
        },
        {
          id: "q8-3",
          question: "What is the main disadvantage of hydrogen propellant?",
          options: [
            "Low Isp",
            "Very low density (71 kg/m³) requires huge tanks and cryogenic systems",
            "Expensive",
            "Dangerous"
          ],
          correctAnswer: 1,
          explanation: "Hydrogen has excellent Isp but terrible density (11× less dense than kerosene). This means huge tanks, cryogenic complexity (-253°C), and boil-off issues. Trade-off: performance vs practicality!"
        },
        {
          id: "q8-4",
          question: "Why do ion engines have Isp of 3,000-10,000s vs chemical rockets at 300-450s?",
          options: [
            "Better fuel",
            "Electric acceleration produces much higher exhaust velocity than chemical combustion",
            "Larger nozzles",
            "More efficient combustion"
          ],
          correctAnswer: 1,
          explanation: "Ion engines use electric fields to accelerate ions to 30,000-100,000 m/s! Chemical combustion is limited to ~4,500 m/s. This 10-20× higher v_e gives 10-20× higher Isp!"
        },
        {
          id: "q8-5",
          question: "How much does a 10% Isp increase reduce fuel requirements?",
          options: [
            "10% less fuel",
            "20-30% less fuel (exponential relationship)",
            "5% less fuel",
            "50% less fuel"
          ],
          correctAnswer: 1,
          explanation: "Due to the exponential rocket equation, a 10% Isp increase typically reduces fuel by 20-30%! This is why even small Isp improvements are valuable."
        }
      ]
    }
  },

  {
    id: 9,
    title: "Rocket Staging: Multiplying Delta-V",
    unit: "Rocket Fundamentals",
    duration: "45 min",
    introduction: "🚀 Staging is THE KEY innovation that makes spaceflight possible! By dropping empty tanks, you avoid carrying dead weight. This simple idea multiplies your delta-v and makes the impossible possible. Without staging, we'd never reach orbit! Every orbital rocket uses staging - it's not optional, it's essential!",
    
    sections: [
      {
        title: "🎯 Why Staging Works - The Math",
        content: "**The Problem with Single Stage:**\nAs you burn fuel, you're carrying empty tanks - dead weight!\n\n**To reach LEO:**\n• Required Δv ≈ 9,500 m/s\n• Best chemical Isp ≈ 450 s (LH₂/LOX)\n• Exhaust velocity: v_e = 4,415 m/s\n\n**Required mass ratio:**\nR = e^(9,500/4,415) = e^2.15 = 8.58\n\nThis means 88.4% must be fuel - barely feasible!\n\n**The Solution: DROP THE EMPTY TANKS!**\n\n**Two-stage rocket:**\nΔv_total = v_e1 × ln(R₁) + v_e2 × ln(R₂)\n\nIf both stages have R = 5:\n• Single stage: Δv = v_e × ln(5) = 1.61 v_e\n• Two stages: Δv = v_e × ln(5) + v_e × ln(5) = 3.22 v_e\n\n**Twice the delta-v with same mass ratios!**\n\n**Why It Works:**\n1. First stage accelerates everything\n2. Drop first stage (now empty)\n3. Second stage only accelerates payload + itself\n4. Much better mass ratio for second stage!\n\n**Effective Mass Ratio:**\nR_eff = R₁ × R₂\n\nFor R₁ = R₂ = 5:\nR_eff = 25\n\nSingle stage with R = 25 is impossible (96% fuel!)\nBut two stages with R = 5 each is practical (80% fuel each)\n\n**Historical Example - Saturn V:**\n• Total mass: 2,970,000 kg\n• Payload to LEO: 140,000 kg\n• Payload fraction: 4.7%\n• Three stages made this possible!\n\nSingle stage would need 0.3% payload fraction - impossible with any known materials!"
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
    ],
    
    practiceProblems: [
      {
        id: "9-1",
        problem: "Two-stage rocket: Stage 1 (m₀=100,000 kg, m_f=20,000 kg, v_e=3,000 m/s), Stage 2 (m₀=20,000 kg, m_f=4,000 kg, v_e=3,500 m/s). Calculate total Δv.",
        solution: "Stage 1: Δv₁ = 3,000 × ln(100,000/20,000) = 3,000 × ln(5) = 4,828 m/s\nStage 2: Δv₂ = 3,500 × ln(20,000/4,000) = 3,500 × ln(5) = 5,632 m/s\nTotal: Δv = 4,828 + 5,632 = 10,460 m/s ✓ Enough for orbit!",
        hint: "Calculate Δv for each stage separately, then add them"
      },
      {
        id: "9-2",
        problem: "Compare: Single-stage R=25 vs Two-stage R₁=5, R₂=5. Which is more practical?",
        solution: "Single: R=25 means 96% fuel, 4% structure+payload - impossible!\nTwo-stage: R_eff = 5×5 = 25 (same total), but each stage only needs 80% fuel - achievable!\nStaging makes the impossible possible by dropping dead weight.",
        hint: "Calculate fuel fraction for each: (R-1)/R"
      },
      {
        id: "9-3",
        problem: "Three-stage rocket with equal mass ratios R=4 each. What is effective total mass ratio?",
        solution: "R_total = R₁ × R₂ × R₃ = 4 × 4 × 4 = 64\nWith v_e = 3,500 m/s: Δv = 3,500 × ln(64) = 3,500 × 4.159 = 14,557 m/s\nEnough for Moon missions!",
        hint: "For staging: R_total = R₁ × R₂ × R₃"
      },
      {
        id: "9-4",
        problem: "Why did Saturn V use 3 stages instead of 2?",
        solution: "Mission Δv: ~11,000 m/s to Moon\nWith 2 stages (R=10 each): Δv = v_e × ln(100) = v_e × 4.605\nNeeds v_e = 2,387 m/s - too low for chemical rockets\nWith 3 stages (R=5 each): Δv = v_e × ln(125) = v_e × 4.828\nNeeds v_e = 2,278 m/s - achievable!\nPlus: 3 stages allows different propellants (RP-1 then LH₂)",
        hint: "Calculate required v_e for each option"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q9-1",
          question: "Why is staging necessary for orbital flight?",
          options: [
            "To increase thrust",
            "To drop empty tanks (dead weight), improving mass ratio for remaining stages",
            "To reduce cost",
            "For safety"
          ],
          correctAnswer: 1,
          explanation: "Staging drops empty tanks and engines that are dead weight. This dramatically improves the mass ratio for remaining stages. Without staging, single-stage-to-orbit is nearly impossible!"
        },
        {
          id: "q9-2",
          question: "How do you calculate total Δv for a multi-stage rocket?",
          options: [
            "Multiply the Δv of each stage",
            "Add the Δv of each stage: Δv_total = Δv₁ + Δv₂ + Δv₃",
            "Take the average",
            "Use only the largest stage"
          ],
          correctAnswer: 1,
          explanation: "Multi-stage Δv is additive! Δv_total = Δv₁ + Δv₂ + Δv₃. Each stage adds its delta-v to the total."
        },
        {
          id: "q9-3",
          question: "What is the effective mass ratio for two stages with R₁=6 and R₂=4?",
          options: [
            "R_eff = 10 (add them)",
            "R_eff = 24 (multiply them: R₁ × R₂)",
            "R_eff = 5 (average)",
            "R_eff = 2 (divide)"
          ],
          correctAnswer: 1,
          explanation: "For staging, mass ratios multiply: R_eff = R₁ × R₂ = 6 × 4 = 24. This is why staging is so powerful - you get the benefit of multiplied mass ratios!"
        },
        {
          id: "q9-4",
          question: "What is optimal staging strategy?",
          options: [
            "Make first stage as large as possible",
            "Equal mass ratios for all stages (R₁ = R₂ = R₃)",
            "Make last stage largest",
            "Random distribution"
          ],
          correctAnswer: 1,
          explanation: "For maximum Δv with given total mass, use equal mass ratios: R₁ = R₂ = R₃. Real rockets deviate due to propellant choices and practical constraints."
        },
        {
          id: "q9-5",
          question: "Why don't rockets use 10 stages if staging is so good?",
          options: [
            "Too expensive",
            "Diminishing returns: each stage adds complexity, and 2-3 stages is optimal balance",
            "Not enough fuel",
            "Too heavy"
          ],
          correctAnswer: 1,
          explanation: "Each stage adds complexity, cost, and failure points. Analysis shows 2-3 stages is optimal for most missions. More stages give diminishing returns while increasing complexity exponentially!"
        }
      ]
    }
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
    ],
    
    practiceProblems: [
      {
        id: "10-1",
        problem: "A rocket has mass 200,000 kg and thrust 2,800 kN. Calculate TWR and acceleration.",
        solution: "Weight: W = mg = 200,000 × 9.81 = 1,962 kN\nTWR = T/W = 2,800/1,962 = 1.43\nNet force: F_net = T - W = 838 kN\nAcceleration: a = F_net/m = 838,000/200,000 = 4.19 m/s² = 0.43g",
        hint: "TWR = T/(mg), then a = (T-W)/m"
      },
      {
        id: "10-2",
        problem: "If a rocket burns vertically for 180 seconds, how much Δv is lost to gravity?",
        solution: "Δv_gravity = g × t = 9.81 × 180 = 1,766 m/s\nThis is why rockets pitch over quickly - every second vertical wastes ~10 m/s!",
        hint: "Gravity loss = g × burn_time for vertical flight"
      },
      {
        id: "10-3",
        problem: "Rocket starts with TWR=1.35, mass=300,000 kg. After 120s, mass=100,000 kg. If thrust constant, find new TWR.",
        solution: "Initial: T = TWR × mg = 1.35 × 300,000 × 9.81 = 3,973 kN\nFinal: TWR = T/(m×g) = 3,973/(100,000 × 9.81/1000) = 3,973/981 = 4.05\nTWR tripled as fuel burned!",
        hint: "Find thrust from initial TWR, then calculate new TWR with reduced mass"
      },
      {
        id: "10-4",
        problem: "Why does Falcon 9 throttle to 60% before MECO?",
        solution: "At burnout: m ≈ 25,600 kg, T_full = 7,605 kN\nFull thrust TWR = 7,605/(25,600 × 9.81/1000) = 30.3\nAcceleration = 287 m/s² = 29g - would destroy payload!\nAt 60% throttle: TWR = 18.2, a = 17g - still high but manageable for cargo.",
        hint: "Calculate TWR at burnout with full thrust, then with 60% thrust"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q10-1",
          question: "What is the minimum TWR required for liftoff?",
          options: [
            "TWR = 0.5",
            "TWR = 1.0",
            "TWR > 1.0 (thrust must exceed weight)",
            "TWR = 2.0"
          ],
          correctAnswer: 2,
          explanation: "TWR must exceed 1.0 for liftoff. If TWR = 1.0, thrust equals weight and the rocket hovers (unstable). Typical rockets have TWR = 1.2-1.5 for safe margin."
        },
        {
          id: "q10-2",
          question: "Why does TWR increase during flight?",
          options: [
            "Thrust increases",
            "Mass decreases as fuel burns, while thrust stays constant",
            "Gravity decreases",
            "Air resistance decreases"
          ],
          correctAnswer: 1,
          explanation: "TWR = T/(mg). As fuel burns, mass m decreases rapidly while thrust T stays roughly constant. Therefore TWR increases! This is why rockets accelerate faster as they climb."
        },
        {
          id: "q10-3",
          question: "What are gravity losses?",
          options: [
            "Fuel wasted due to gravity",
            "Delta-v wasted fighting gravity during vertical flight (~1,500 m/s)",
            "Weight of the rocket",
            "Gravity pulling rocket down"
          ],
          correctAnswer: 1,
          explanation: "Gravity losses are Δv wasted fighting gravity during ascent. For vertical flight: Δv_loss = g × t_burn. Typical ascent wastes ~1,500 m/s, which is why LEO needs 9,500 m/s instead of just 7,800 m/s!"
        },
        {
          id: "q10-4",
          question: "Why do rockets throttle down before burnout?",
          options: [
            "To save fuel",
            "To limit acceleration as mass decreases (prevent excessive g-forces)",
            "To reduce noise",
            "For safety"
          ],
          correctAnswer: 1,
          explanation: "As fuel burns, TWR increases dramatically. Without throttling, acceleration could reach 20-30g, destroying the payload! Rockets throttle down to limit acceleration to safe levels (3-8g)."
        },
        {
          id: "q10-5",
          question: "What is the optimal TWR for first stage liftoff?",
          options: [
            "As high as possible",
            "TWR = 1.2-1.5 (balances gravity losses vs structural mass)",
            "TWR = 1.0",
            "TWR = 3.0"
          ],
          correctAnswer: 1,
          explanation: "TWR = 1.2-1.5 is optimal. Higher TWR reduces gravity losses but requires heavier structure. Lower TWR increases gravity losses. This range balances efficiency vs practicality."
        }
      ]
    }
  },

  {
    id: 11,
    title: "Rocket Engine Types & Selection",
    unit: "Rocket Fundamentals",
    duration: "40 min",
    introduction: "🔥 Rocket engines come in many flavors - solid, liquid, hybrid, electric! Each type has unique trade-offs. Solid rockets are simple but can't throttle. Liquid engines offer high performance but are complex. Understanding these trade-offs is essential for mission design. Let's explore what makes each engine type special!",
    
    sections: [
      {
        title: "🔥 Solid Rocket Motors - Simple Power",
        content: "**Basic Principle:**\n• Fuel and oxidizer pre-mixed into solid grain\n• Burns from inside out (like a candle)\n• Once lit, burns until fuel exhausted\n• No moving parts!\n\n**Performance:**\n• Isp: 250-280 s (moderate)\n• Density: 1,700-1,800 kg/m³ (very high!)\n• Chamber pressure: 5-10 MPa\n• Thrust: Can be MASSIVE\n\n**Advantages:**\n✓ Extreme simplicity (no pumps, valves, plumbing)\n✓ Very reliable (few failure modes)\n✓ Long storage life (years)\n✓ High thrust density (compact)\n✓ Low cost per kg of thrust\n✓ Instant full thrust\n\n**Disadvantages:**\n✗ Cannot throttle (all or nothing)\n✗ Cannot restart once ignited\n✗ Lower Isp than liquid engines\n✗ Safety concerns (explosive if damaged)\n✗ Difficult to test (destructive)\n\n**Real Examples:**\n\n**Space Shuttle SRB:**\n• Thrust: 12,500 kN each (2 boosters)\n• Isp: 269 s\n• Burn time: 124 seconds\n• Propellant: 500,000 kg each\n• Provided 83% of liftoff thrust!\n• Recovered and reused up to 20 times\n\n**Ariane 5 Booster:**\n• Thrust: 7,080 kN each\n• Isp: 275 s\n• Burn time: 140 seconds\n• Largest solid motors in Europe\n\n**Why Use Solid Rockets?**\n• Boosters for heavy lift (Shuttle, Ariane, Atlas V)\n• Military missiles (instant readiness)\n• Upper stages (simple, reliable)\n• Kick motors (satellite orbit raising)"
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
    ],
    
    practiceProblems: [
      {
        id: "11-1",
        problem: "Compare solid vs liquid for a booster: Solid (Isp=270s, density=1,800 kg/m³) vs Liquid RP-1/LOX (Isp=310s, density=1,000 kg/m³). For 100,000 kg propellant, find volume and Δv (assume R=5).",
        solution: "Solid: Volume = 100,000/1,800 = 55.6 m³, Δv = 270×9.81×ln(5) = 4,263 m/s\nLiquid: Volume = 100,000/1,000 = 100 m³, Δv = 310×9.81×ln(5) = 4,896 m/s\nLiquid gives 15% more Δv but needs 80% larger tanks!",
        hint: "Volume = mass/density, Δv = Isp×g₀×ln(R)"
      },
      {
        id: "11-2",
        problem: "Why did Space Shuttle use solid boosters instead of liquid?",
        solution: "Advantages: Simple (no pumps/valves), reliable, high thrust density (compact), low cost, reusable\nDisadvantages: Can't throttle (but not needed for boosters), lower Isp (but acceptable for first 2 minutes)\nDecision: Simplicity and cost outweighed Isp penalty for booster application.",
        hint: "Consider mission requirements: boosters need high thrust, short burn time"
      },
      {
        id: "11-3",
        problem: "Why does Starship use methane instead of RP-1 or hydrogen?",
        solution: "vs RP-1: Methane has higher Isp (370s vs 340s), cleaner burning (no coking), better for reusability\nvs LH₂: Methane has better density (423 vs 71 kg/m³), easier to store (-162°C vs -253°C), can be produced on Mars (ISRU)\nResult: Methane is the 'goldilocks' propellant - good Isp, reasonable density, Mars-compatible!",
        hint: "Compare Isp, density, temperature, and Mars ISRU potential"
      },
      {
        id: "11-4",
        problem: "Gas generator (95% efficient) vs staged combustion (99% efficient). For 1,000 kN thrust, how much more propellant does gas generator waste?",
        solution: "Staged combustion: 100% propellant → chamber\nGas generator: ~5% propellant → turbine exhaust (wasted)\nFor 1,000 kN thrust at ṁ=300 kg/s:\nGas gen wastes: 300 × 0.05 = 15 kg/s\nOver 150s burn: 2,250 kg wasted\nBut gas generator is simpler and cheaper!",
        hint: "Calculate wasted propellant from efficiency difference"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q11-1",
          question: "What is the main advantage of solid rocket motors?",
          options: [
            "High Isp",
            "Extreme simplicity and reliability (no pumps, valves, or moving parts)",
            "Can throttle",
            "Restartable"
          ],
          correctAnswer: 1,
          explanation: "Solid rockets are incredibly simple - just a case filled with propellant. No pumps, valves, or plumbing. This makes them very reliable and low-cost, perfect for boosters and military applications!"
        },
        {
          id: "q11-2",
          question: "What is the main disadvantage of solid rockets?",
          options: [
            "Low thrust",
            "Expensive",
            "Cannot throttle or restart once ignited",
            "Low reliability"
          ],
          correctAnswer: 2,
          explanation: "Once a solid rocket ignites, it burns until fuel is exhausted. You cannot throttle, stop, or restart it. This limits applications where control is needed."
        },
        {
          id: "q11-3",
          question: "Why does hydrogen give the highest Isp?",
          options: [
            "Burns hotter",
            "Lightest exhaust molecules (H₂O) accelerate faster at same temperature",
            "More energy",
            "Better combustion"
          ],
          correctAnswer: 1,
          explanation: "v_e ∝ √(T/M). Hydrogen produces the lightest exhaust molecules (H₂O, M=18 g/mol). Lighter molecules accelerate faster at the same temperature, giving higher exhaust velocity and Isp!"
        },
        {
          id: "q11-4",
          question: "What is full-flow staged combustion?",
          options: [
            "A type of solid rocket",
            "Both fuel and oxidizer have separate pre-burners; highest efficiency cycle",
            "A cooling method",
            "A nozzle design"
          ],
          correctAnswer: 1,
          explanation: "FFSC has separate pre-burners for fuel and oxidizer. All propellant goes through turbopumps before entering main chamber. This gives 99.5% efficiency but is very complex. Only Raptor uses it operationally!"
        },
        {
          id: "q11-5",
          question: "Why do first stages typically use RP-1 or methane instead of hydrogen?",
          options: [
            "Cheaper",
            "Higher density means smaller tanks, less drag, and better thrust-to-weight",
            "Higher Isp",
            "Easier to ignite"
          ],
          correctAnswer: 1,
          explanation: "First stages need high thrust and compact size. RP-1 (820 kg/m³) and methane (423 kg/m³) are much denser than hydrogen (71 kg/m³). Smaller tanks = less drag = better for atmospheric flight!"
        }
      ]
    }
  }
];

export default unit1AdvancedLessons;
