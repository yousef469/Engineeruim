// Unit 1: Rocket Fundamentals - MIT-Quality Content
// Lessons 6-11: Core rocket engineering principles

export const unit1Lessons = [
  {
    id: 6,
    title: "Newton's Third Law & Rocket Thrust Generation",
    unit: "Rocket Fundamentals",
    duration: "45 min",
    introduction: "🚀 Rockets are the ONLY propulsion system that works in the vacuum of space! Unlike jets that need air, rockets carry everything they need. Master the physics of thrust generation and understand why rockets accelerate faster as they burn fuel. This lesson covers the fundamental equation T = ṁ·v_e and real examples from SpaceX, NASA, and more!",
    
    sections: [
      {
        title: "🧠 Newton's Third Law: The Foundation of Rocketry",
        content: "**For every action, there is an equal and opposite reaction.**\n\nThis simple law enables space travel! Here's how:\n\n**ACTION:** Rocket expels exhaust gases backward at high velocity (v_e)\n**REACTION:** Rocket experiences forward thrust force (T)\n\n**The Physics:**\nWhen a rocket burns fuel, it creates hot gases that expand and accelerate through the nozzle. These gases exit at tremendous speed (2,000-4,500 m/s). As the rocket pushes gases backward, the gases push the rocket forward with equal force.\n\n**Mathematical Foundation:**\nNewton's Second Law: F = ma = m(dv/dt)\n\nBut for rockets, we care about MOMENTUM:\nF = dp/dt = d(mv)/dt\n\nFor a rocket expelling mass:\n• Rocket loses mass: dm (negative)\n• Exhaust gains momentum: dm × v_e\n• Rocket gains momentum: -dm × v_e (opposite direction)\n\nThis leads to the fundamental thrust equation:\n**T = ṁ × v_e**\n\nWhere:\n• T = thrust force (Newtons)\n• ṁ = mass flow rate (kg/s) - how fast fuel is consumed\n• v_e = exhaust velocity (m/s) - how fast gases exit\n\n**Key Insight:** Thrust depends on TWO factors:\n1. How MUCH mass you expel (ṁ)\n2. How FAST you expel it (v_e)\n\nYou can get the same thrust by:\n• Expelling lots of mass slowly (high ṁ, low v_e)\n• Expelling little mass quickly (low ṁ, high v_e)\n\nDifferent engines make different trade-offs!\n\n**Example: SpaceX Merlin 1D Engine**\nThe Merlin 1D powers the Falcon 9 rocket.\n\n**Given:**\n• Propellant flow rate: ṁ = 275 kg/s\n• Exhaust velocity: v_e = 3,050 m/s (sea level)\n\n**Calculate Thrust:**\nT = ṁ × v_e = 275 × 3,050 = 838,750 N = 839 kN\n\n**Actual Merlin 1D thrust:** 845 kN at sea level (within 1%!)\n\n**What does 845 kN mean?**\n• That's 845,000 Newtons of force\n• Equivalent to lifting 86,000 kg against gravity\n• About the weight of 60 cars!\n• And Falcon 9 has NINE of them!"
      },
      {
        title: "🔧 Real Rocket Engine Comparisons",
        content: "Let's analyze real rocket engines to understand thrust generation:\n\n**The Thrust Equation:** T = ṁ × v_e\n\n**Trade-offs:**\n1. **High Mass Flow (ṁ):** More thrust, but burns fuel faster\n2. **High Exhaust Velocity (v_e):** More efficient, but harder to achieve\n\n**Engine Comparison:**\n\n**Solid Rocket Boosters (Space Shuttle SRB):**\n• ṁ = 5,000 kg/s (HUGE!)\n• v_e = 2,650 m/s (moderate)\n• T = 13,250 kN per booster\n• Characteristics: Massive thrust, simple, can't throttle\n\n**Liquid Hydrogen/Oxygen (RS-25 - Space Shuttle Main Engine):**\n• ṁ = 514 kg/s (moderate)\n• v_e = 4,440 m/s (VERY HIGH!)\n• T = 2,279 kN (vacuum)\n• Characteristics: Efficient, complex, expensive\n\n**Kerosene/Oxygen (Merlin 1D):**\n• ṁ = 275 kg/s (moderate)\n• v_e = 3,050 m/s (good)\n• T = 845 kN (sea level)\n• Characteristics: Balanced, reliable, cost-effective\n\n**Saturn V F-1 Engine (Apollo Moon Rocket):**\nThe F-1 is the most powerful single-chamber rocket engine ever flown!\n\n• Propellant: RP-1 (kerosene) + LOX\n• Mass flow rate: ṁ = 2,578 kg/s (MASSIVE!)\n• Exhaust velocity: v_e = 2,580 m/s\n• Thrust: T = 2,578 × 2,580 = 6,651 kN = 6.65 MN\n\n**Saturn V had FIVE F-1 engines:**\nTotal thrust = 5 × 6,651 = 33,255 kN = 33.3 MN\n\nThat's equivalent to:\n• Lifting 3.4 million kg against gravity\n• The weight of 2,300 cars\n• 40 times the thrust of a Boeing 747!"
      },
      {
        title: "⚖️ Thrust-to-Weight Ratio: The Launch Requirement",
        content: "**Thrust-to-Weight Ratio (TWR)** determines if a rocket can lift off!\n\n**Definition:** TWR = T / (mg)\n\nWhere:\n• T = total thrust (N)\n• m = rocket mass (kg)\n• g = 9.81 m/s²\n\n**Physical Meaning:**\nTWR compares thrust force to weight force:\n• TWR < 1.0: Thrust less than weight → Rocket stays on ground\n• TWR = 1.0: Thrust equals weight → Rocket hovers (unstable!)\n• TWR > 1.0: Thrust exceeds weight → Rocket lifts off!\n\n**Practical Requirements:**\n• Minimum for liftoff: TWR > 1.0\n• Safe liftoff: TWR > 1.2 (20% margin)\n• Typical rockets: TWR = 1.2 to 1.5 at liftoff\n\n**Why TWR Increases During Flight:**\nAs fuel burns:\n• Mass (m) DECREASES rapidly\n• Thrust (T) stays roughly CONSTANT\n• Therefore TWR = T/m INCREASES!\n\nThis is why rockets accelerate faster as they climb!\n\n**Example: Falcon 9 Liftoff Analysis**\n\n**Given at Liftoff:**\n• Total mass: m = 549,000 kg\n• Number of engines: 9 Merlin 1D\n• Thrust per engine: 845 kN\n• Total thrust: T = 9 × 845 = 7,605 kN\n\n**Step 1: Calculate Weight**\nW = mg = 549,000 × 9.81 = 5,386 kN\n\n**Step 2: Calculate TWR**\nTWR = T / W = 7,605 / 5,386 = 1.41\n\n✓ TWR = 1.41 > 1.0 → Rocket WILL lift off!\n✓ TWR = 1.41 > 1.2 → Safe margin!\n\n**Step 3: Calculate Net Force**\nF_net = T - W = 7,605 - 5,386 = 2,219 kN\n\n**Step 4: Calculate Initial Acceleration**\na = F_net / m = 2,219,000 / 549,000 = 4.04 m/s² = 0.41g\n\n**At Burnout (162 seconds later):**\n• Remaining mass: m_f ≈ 55,000 kg (90% fuel consumed)\n• Thrust still: T = 7,605 kN\n• TWR_final = 7,605 / 540 = 14.1!\n• Acceleration: 128 m/s² = 13g!\n\nThis is why rockets shut down engines before burnout - to limit acceleration!"
      }
    ],
    
    keyTakeaways: [
      "Rocket thrust: T = ṁ·v_e - expelling mass creates force by Newton's Third Law",
      "Rockets work by momentum conservation, not by pushing against anything",
      "Thrust-to-Weight Ratio must exceed 1.0 for liftoff; typical rockets have TWR = 1.2-1.5",
      "TWR increases during flight as fuel burns and mass decreases",
      "Different engines trade off mass flow (ṁ) vs exhaust velocity (v_e) for different missions",
      "Falcon 9: TWR increases from 1.41 at liftoff to 14+ at burnout!"
    ],
    
    vocabulary: [
      { term: "Thrust (T)", definition: "Force generated by expelling mass; measured in Newtons (N) or kilonewtons (kN)" },
      { term: "Mass Flow Rate (ṁ)", definition: "Rate of propellant consumption in kg/s; determines how fast fuel is used" },
      { term: "Exhaust Velocity (v_e)", definition: "Speed at which gases exit the nozzle; typically 2,000-4,500 m/s for chemical rockets" },
      { term: "Thrust-to-Weight Ratio (TWR)", definition: "Ratio of thrust force to weight; must exceed 1.0 for vertical liftoff from Earth" },
      { term: "Specific Impulse (Isp)", definition: "Efficiency metric for rocket engines; Isp = v_e / g₀; measured in seconds" }
    ],
    
    practiceProblems: [
      {
        id: "6-1",
        problem: "An engine has mass flow rate ṁ = 400 kg/s and exhaust velocity v_e = 2,800 m/s. Calculate thrust.",
        solution: "T = ṁ × v_e = 400 × 2,800 = 1,120,000 N = 1,120 kN = 1.12 MN",
        hint: "Use T = ṁ × v_e"
      },
      {
        id: "6-2",
        problem: "Saturn V had 5 F-1 engines, each producing 6,651 kN. Total mass at liftoff was 2,970,000 kg. Calculate TWR.",
        solution: "Total thrust: T = 5 × 6,651 = 33,255 kN\nWeight: W = mg = 2,970,000 × 9.81 = 29,136 kN\nTWR = T/W = 33,255/29,136 = 1.14\nBarely enough to lift off! Saturn V had minimal margin.",
        hint: "TWR = T/(mg). Calculate total thrust and weight first."
      },
      {
        id: "6-3",
        problem: "Compare two engines with same thrust (1,000 kN): Engine A: ṁ=500 kg/s, Engine B: ṁ=250 kg/s. Find v_e for each.",
        solution: "Engine A: v_e = T/ṁ = 1,000,000/500 = 2,000 m/s\nEngine B: v_e = T/ṁ = 1,000,000/250 = 4,000 m/s\nEngine B is 2× more efficient! Same thrust with half the fuel consumption.",
        hint: "Rearrange T = ṁ × v_e to get v_e = T/ṁ"
      },
      {
        id: "6-4",
        problem: "A rocket starts with TWR=1.3 and mass 200,000 kg. After 100 seconds, mass is 80,000 kg. If thrust stays constant, what is new TWR?",
        solution: "Initial: TWR₁ = 1.3, so T = 1.3 × mg = 1.3 × 200,000 × 9.81 = 2,551 kN\nFinal: TWR₂ = T/(m₂g) = 2,551/(80,000 × 9.81/1000) = 2,551/785 = 3.25\nTWR increased by 2.5× as fuel burned!",
        hint: "Find thrust from initial TWR, then calculate new TWR with reduced mass"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q6-1",
          question: "What is the thrust equation for rockets?",
          options: [
            "T = m × a",
            "T = ṁ × v_e (mass flow rate × exhaust velocity)",
            "T = F/m",
            "T = v × t"
          ],
          correctAnswer: 1,
          explanation: "T = ṁ × v_e is the fundamental thrust equation. Thrust depends on how much mass you expel (ṁ) and how fast you expel it (v_e)!"
        },
        {
          id: "q6-2",
          question: "Why do rockets work in the vacuum of space?",
          options: [
            "They push against space itself",
            "They use momentum conservation - expelling mass backward creates forward thrust",
            "They need air to push against",
            "They use magnetic fields"
          ],
          correctAnswer: 1,
          explanation: "Rockets work by Newton's Third Law and momentum conservation. Expelling exhaust backward creates equal and opposite forward thrust. No air needed!"
        },
        {
          id: "q6-3",
          question: "What happens to TWR as a rocket burns fuel?",
          options: [
            "TWR decreases",
            "TWR stays constant",
            "TWR increases (mass decreases, thrust stays constant)",
            "TWR becomes zero"
          ],
          correctAnswer: 2,
          explanation: "TWR = T/(mg). As fuel burns, mass m decreases while thrust T stays roughly constant. Therefore TWR increases! Falcon 9 goes from TWR=1.41 to TWR=14 during first stage burn."
        },
        {
          id: "q6-4",
          question: "Which engine is more efficient: High ṁ/low v_e or Low ṁ/high v_e?",
          options: [
            "High ṁ/low v_e (like solid boosters)",
            "Low ṁ/high v_e (like hydrogen engines) - uses less fuel for same thrust",
            "Both equally efficient",
            "Depends on altitude"
          ],
          correctAnswer: 1,
          explanation: "Low ṁ/high v_e is more efficient! For same thrust T=ṁ×v_e, higher v_e means lower ṁ (less fuel consumption). This is why hydrogen engines (high v_e) are preferred for upper stages."
        },
        {
          id: "q6-5",
          question: "Why must TWR exceed 1.0 for liftoff?",
          options: [
            "For safety margins",
            "Thrust must exceed weight to have net upward force",
            "To reach orbital velocity",
            "To overcome air resistance"
          ],
          correctAnswer: 1,
          explanation: "If TWR < 1.0, thrust is less than weight and the rocket can't lift off. TWR = 1.0 means hovering (unstable). TWR > 1.0 creates net upward force for liftoff!"
        }
      ]
    }
  },

  {
    id: 7,
    title: "The Tsiolkovsky Rocket Equation",
    unit: "Rocket Fundamentals",
    duration: "50 min",
    introduction: "🚀 The Tsiolkovsky Rocket Equation is THE fundamental law of spaceflight! Derived in 1897 (60 years before Sputnik!), it reveals why reaching orbit is hard, why staging is necessary, and determines every space mission's feasibility. This equation predicted everything about space travel before we ever built a rocket. Master this and you understand spaceflight!",
    
    sections: [
      {
        title: "🧮 Deriving the Rocket Equation from First Principles",
        content: "Let's derive this legendary equation step by step using calculus!\n\n**Starting Point: Newton's Second Law**\nF = ma = m(dv/dt)\n\nFor a rocket, the force comes from expelling mass:\nF = ṁ × v_e (thrust equation)\n\n**Key Insight:** As rocket burns fuel, its mass DECREASES:\nṁ = -dm/dt (negative because mass is leaving)\n\n**Combining these:**\nm(dv/dt) = -v_e(dm/dt)\n\n**Rearrange:**\nm dv = -v_e dm\n\n**Divide both sides by m:**\ndv = -v_e (dm/m)\n\n**Now integrate both sides!**\nLeft side: ∫dv from v₀ to v_f\nRight side: -v_e ∫(dm/m) from m₀ to m_f\n\n**Integration:**\nv_f - v₀ = -v_e [ln(m)]|_{m₀}^{m_f}\nΔv = -v_e [ln(m_f) - ln(m₀)]\nΔv = -v_e ln(m_f/m₀)\n**Δv = v_e ln(m₀/m_f)**\n\n**This is the Tsiolkovsky Rocket Equation!**\n\n**What it means:**\n• Δv = total velocity change the rocket can achieve\n• v_e = exhaust velocity (how fast gases exit)\n• m₀ = initial mass (wet mass - full of fuel)\n• m_f = final mass (dry mass - empty of fuel)\n• ln = natural logarithm (base e ≈ 2.718)\n\n**Why logarithmic?**\nThe logarithm comes from integrating 1/m - this creates an EXPONENTIAL relationship between fuel and velocity! Small velocity increases require HUGE fuel additions.\n\n**Example: Falcon 9 First Stage**\n\n**Given:**\n• Initial mass (full): m₀ = 549,000 kg\n• Final mass (empty): m_f = 25,600 kg\n• Exhaust velocity: v_e = 3,050 m/s\n\n**Step 1: Calculate Mass Ratio**\nR = m₀/m_f = 549,000/25,600 = 21.45\n\n**Step 2: Calculate ln(R)**\nln(21.45) = 3.066\n\n**Step 3: Calculate Δv**\nΔv = v_e × ln(R) = 3,050 × 3.066 = 9,351 m/s = 9.35 km/s\n\n**Analysis:**\n• First stage achieves 9.35 km/s of delta-v\n• This is enough to reach ~80% of orbital velocity!\n• Remaining 2 km/s comes from second stage\n• Mass ratio of 21.45 means 95.3% of mass is fuel!\n\n**Fuel Breakdown:**\nTotal fuel = m₀ - m_f = 549,000 - 25,600 = 523,400 kg\nFuel fraction = 523,400/549,000 = 95.3%\n\nOnly 4.7% of the rocket is structure and payload - the rest is fuel!"
      },
      {
        title: "📊 Understanding the Logarithmic Relationship",
        content: "The logarithm in the rocket equation creates EXPONENTIAL fuel requirements!\n\n**Why This Matters:**\nDoubling your delta-v doesn't double your fuel - it SQUARES your mass ratio!\n\n**The Math:**\nIf Δv₁ = v_e ln(R₁), then:\nΔv₂ = 2×Δv₁ requires R₂ = R₁²\n\n**Example:**\n• To get 3 km/s with v_e = 3 km/s: R = e¹ = 2.72\n• To get 6 km/s with v_e = 3 km/s: R = e² = 7.39\n• To get 9 km/s with v_e = 3 km/s: R = e³ = 20.09\n\n**Fuel Requirements:**\nFor 1,000 kg payload:\n\n**3 km/s mission:**\nm₀ = 1,000 × 2.72 = 2,720 kg\nFuel needed: 1,720 kg\n\n**6 km/s mission:**\nm₀ = 1,000 × 7.39 = 7,390 kg\nFuel needed: 6,390 kg (3.7× more!)\n\n**9 km/s mission:**\nm₀ = 1,000 × 20.09 = 20,090 kg\nFuel needed: 19,090 kg (11× more!)\n\n**This is why orbit is hard!**\nLEO requires ~9.5 km/s delta-v. With typical v_e = 3.5 km/s:\nR = e^(9.5/3.5) = e^2.71 = 15.0\n\nFor every 1 kg in orbit, you need 15 kg at liftoff!\nThat's why 95% of a rocket is fuel.\n\n**Diminishing Returns:**\nAdding more fuel helps less and less because:\n1. More fuel = more mass\n2. More mass = need more fuel to accelerate it\n3. That fuel adds mass too!\n4. Exponential spiral!\n\nThis is why single-stage-to-orbit (SSTO) is so hard - you hit structural limits before achieving enough delta-v.\n\n**Why SSTO is Nearly Impossible:**\n\n**Requirements for LEO:**\n• Delta-v needed: 9,500 m/s\n• Best chemical v_e: 4,400 m/s (LH₂/LOX)\n\n**Calculate Required Mass Ratio:**\nR = e^(Δv/v_e) = e^(9,500/4,400) = e^2.16 = 8.67\n\n**For 10,000 kg payload:**\nm₀ = 10,000 × 8.67 = 86,700 kg\nFuel mass = 76,700 kg\nFuel fraction = 88.5%\n\n**But wait - we need structure!**\nTypical tank/engine mass: 10-15% of fuel mass\nStructure mass = 0.12 × 76,700 = 9,200 kg\n\n**Revised calculation:**\nDry mass = payload + structure = 10,000 + 9,200 = 19,200 kg\nRequired m₀ = 19,200 × 8.67 = 166,464 kg\nFuel needed = 147,264 kg\n\n**New fuel fraction = 88.5%**\nBut structure is now only 5.5% - impossible with current materials!\n\n**Reality Check:**\n• Aluminum tanks: ~8% of fuel mass minimum\n• Engines: ~3% of fuel mass minimum\n• Systems: ~2% of fuel mass minimum\n• Total structure: ~13% minimum\n\nThis makes SSTO barely possible with perfect engineering and no margin!\n\n**Why Staging Works:**\nDrop the heavy first stage tanks and engines!\nSecond stage only needs R = 3-4, much more achievable."
      },
      {
        title: "🌙 Real Mission Calculations",
        content: "Let's apply the rocket equation to real space missions!\n\n**Example 1: Apollo Lunar Module Ascent**\n\nThe LM had to lift off from the Moon and reach lunar orbit.\n\n**Mission Requirements:**\n• Δv needed: 1,870 m/s (Moon surface to orbit)\n• Exhaust velocity: v_e = 3,050 m/s (Aerozine 50/N₂O₄)\n• Dry mass: m_f = 2,150 kg (ascent stage empty)\n\n**Calculate Required Mass Ratio:**\nR = e^(Δv/v_e) = e^(1,870/3,050) = e^0.613 = 1.846\n\n**Calculate Total Mass:**\nm₀ = m_f × R = 2,150 × 1.846 = 3,969 kg\n\n**Fuel Needed:**\nFuel = m₀ - m_f = 3,969 - 2,150 = 1,819 kg\n\n**Analysis:**\n• Only 1.8 tons of fuel to reach orbit!\n• Moon's low gravity (1.62 m/s²) helps\n• No atmosphere = no drag losses\n• Mass ratio of 1.85 is very achievable\n• This is why Moon missions are feasible!\n\n**Example 2: Mars Mission from LEO**\n\nGetting to Mars requires significant delta-v.\n\n**Mission Requirements:**\n• Δv needed: 5,900 m/s (LEO to Mars transfer)\n• Using LH₂/LOX: v_e = 4,400 m/s\n• Desired payload: 10,000 kg\n\n**Calculate Mass Ratio:**\nR = e^(5,900/4,400) = e^1.341 = 3.82\n\n**Calculate Total Mass:**\nm₀ = 10,000 × 3.82 = 38,200 kg\n\n**Fuel Needed:**\nFuel = 38,200 - 10,000 = 28,200 kg\n\n**Analysis:**\n• Need 2.8× payload mass in fuel\n• This is why Mars missions are expensive\n• SpaceX Starship aims for R = 6+ with refueling\n• In-orbit refueling changes the equation!\n\n**Example 3: Geostationary Satellite**\n\nSatellites need delta-v for station-keeping.\n\n**Requirements:**\n• Δv per year: ~50 m/s (orbital corrections)\n• Hydrazine thruster: v_e = 3,000 m/s\n• Mission life: 15 years\n• Total Δv: 750 m/s\n\n**Calculate Mass Ratio:**\nR = e^(750/3,000) = e^0.25 = 1.284\n\n**For 1,000 kg satellite:**\nm₀ = 1,000 × 1.284 = 1,284 kg\nFuel needed = 284 kg (28.4%)\n\n**Analysis:**\n• Only 28% fuel for 15 years!\n• This is why satellites last so long\n• Ion engines (v_e = 30,000 m/s) need even less\n• R = e^(750/30,000) = 1.025 (only 2.5% fuel!)"
      }
    ],
    
    keyTakeaways: [
      "Tsiolkovsky Equation: Δv = v_e × ln(m₀/m_f) - THE fundamental law of spaceflight",
      "Logarithmic relationship creates exponential fuel requirements",
      "LEO requires R ≈ 15 for single stage - barely possible with perfect engineering",
      "Staging solves the problem by dropping dead weight between burns",
      "Every space mission is planned using this equation - it's not optional!",
      "Higher v_e dramatically reduces fuel needs - why hydrogen is preferred despite challenges"
    ],
    
    vocabulary: [
      { term: "Delta-V (Δv)", definition: "Total velocity change capability; the currency of spaceflight measured in m/s" },
      { term: "Mass Ratio (R)", definition: "R = m₀/m_f; determines delta-v capability; limited by structures" },
      { term: "Wet Mass (m₀)", definition: "Total mass at start including all propellant" },
      { term: "Dry Mass (m_f)", definition: "Mass after propellant consumed: structure + payload + residuals" },
      { term: "Specific Impulse (Isp)", definition: "Isp = v_e/g₀; efficiency metric in seconds" }
    ],
    
    practiceProblems: [
      {
        id: "7-1",
        problem: "A rocket has m₀=50,000 kg, m_f=5,000 kg, v_e=3,200 m/s. Calculate Δv.",
        solution: "R = m₀/m_f = 50,000/5,000 = 10\nΔv = v_e × ln(R) = 3,200 × ln(10) = 3,200 × 2.303 = 7,370 m/s",
        hint: "Use Δv = v_e × ln(m₀/m_f). Calculate R first, then ln(R)."
      },
      {
        id: "7-2",
        problem: "A mission needs 8,000 m/s Δv. Engine has v_e=4,000 m/s. For 10,000 kg payload, find total launch mass.",
        solution: "R = e^(Δv/v_e) = e^(8,000/4,000) = e² = 7.39\nm₀ = m_f × R = 10,000 × 7.39 = 73,900 kg\nFuel needed = 73,900 - 10,000 = 63,900 kg (86.5% fuel!)",
        hint: "Find R from Δv and v_e, then m₀ = m_f × R"
      },
      {
        id: "7-3",
        problem: "Compare single-stage R=12 vs two-stage with R₁=3.5 and R₂=3.5. Which gives more Δv? (v_e=3,500 m/s)",
        solution: "Single: Δv = 3,500 × ln(12) = 3,500 × 2.485 = 8,698 m/s\nTwo-stage: R_total = 3.5 × 3.5 = 12.25\nΔv = 3,500 × ln(12.25) = 3,500 × 2.505 = 8,768 m/s\nTwo-stage gives 70 m/s more! Plus R=3.5 per stage is much more buildable than R=12 single stage.",
        hint: "For staging, multiply mass ratios: R_total = R₁ × R₂"
      },
      {
        id: "7-4",
        problem: "Why is SSTO so hard? Calculate required R for LEO (Δv=9,500 m/s) with best engine (v_e=4,400 m/s).",
        solution: "R = e^(Δv/v_e) = e^(9,500/4,400) = e^2.16 = 8.67\nFuel fraction = (R-1)/R = 7.67/8.67 = 88.5%\nStructure typically needs 10-15% of total mass.\n88.5% fuel + 10% structure = 98.5% - only 1.5% for payload!\nThis is why SSTO is nearly impossible.",
        hint: "Calculate R, then fuel fraction. Compare to typical structural requirements."
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q7-1",
          question: "What is the Tsiolkovsky Rocket Equation?",
          options: [
            "T = ṁ × v_e",
            "Δv = v_e × ln(m₀/m_f) - relates velocity change to mass ratio",
            "F = ma",
            "v = √(GM/r)"
          ],
          correctAnswer: 1,
          explanation: "Δv = v_e × ln(m₀/m_f) is THE fundamental equation of spaceflight. It shows that velocity change depends logarithmically on mass ratio - creating exponential fuel requirements!"
        },
        {
          id: "q7-2",
          question: "Why does the rocket equation have a logarithm?",
          options: [
            "It's just a mathematical trick",
            "Because integrating 1/m gives ln(m) - mass decreases as fuel burns",
            "To make calculations easier",
            "It doesn't - that's a simplification"
          ],
          correctAnswer: 1,
          explanation: "The ln comes from integrating dm/m during the derivation. As the rocket burns fuel, mass decreases continuously, and integrating 1/m gives the natural logarithm!"
        },
        {
          id: "q7-3",
          question: "What happens to fuel requirements if you double the Δv?",
          options: [
            "Fuel doubles",
            "Fuel quadruples (R² relationship)",
            "Fuel triples",
            "Depends on the engine"
          ],
          correctAnswer: 1,
          explanation: "Doubling Δv means R_new = R_old². If R was 5, it becomes 25! This exponential relationship is why orbital missions need so much fuel."
        },
        {
          id: "q7-4",
          question: "Why is single-stage-to-orbit (SSTO) so difficult?",
          options: [
            "Engines aren't powerful enough",
            "Requires R≈15, meaning 93% fuel - leaves almost nothing for structure and payload",
            "Too expensive",
            "Regulations prevent it"
          ],
          correctAnswer: 1,
          explanation: "LEO needs Δv≈9,500 m/s. With v_e≈3,500 m/s, you need R≈15 (93% fuel). Typical structure is 10-15%, leaving <2% for payload. This is why staging is necessary!"
        },
        {
          id: "q7-5",
          question: "How does staging help overcome the rocket equation?",
          options: [
            "It increases exhaust velocity",
            "It drops dead weight (empty tanks), so R_total = R₁ × R₂ × R₃...",
            "It reduces gravity losses",
            "It makes rockets more aerodynamic"
          ],
          correctAnswer: 1,
          explanation: "Staging drops empty tanks and engines that are dead weight. Total mass ratio multiplies: R_total = R₁ × R₂. Two stages with R=4 each give R_total=16, much more achievable than single-stage R=16!"
        }
      ]
    }
  }
];

export default unit1Lessons;
