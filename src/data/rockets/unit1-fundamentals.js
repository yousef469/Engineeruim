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
    ]
  },

  {
    id: 7,
    title: "The Tsiolkovsky Rocket Equation",
    unit: "Rocket Fundamentals",
    duration: "30 min",
    introduction: "The Tsiolkovsky Rocket Equation is the most fundamental equation in astronautics. Derived by Russian scientist Konstantin Tsiolkovsky in 1897, it relates a rocket's velocity change (delta-v) to its exhaust velocity and mass ratio.",
    
    sections: [
      {
        title: "Derivation from First Principles",
        content: "Starting with Newton's Second Law:\nF = ma = m(dv/dt)\n\nThe thrust force is: F = ṁ × v_e\n\nTherefore: m(dv/dt) = ṁ × v_e\n\nKey insight: ṁ = -dm/dt (mass is decreasing)\n\nRearranging: dv = -v_e × (dm/m)\n\nIntegrating both sides:\nΔv = v_e × ln(m₀/m_f)\n\nThis is the Tsiolkovsky Rocket Equation!\n\nWhere:\n• Δv = change in velocity (m/s)\n• v_e = effective exhaust velocity (m/s)\n• m₀ = initial total mass (wet mass)\n• m_f = final mass after burn (dry mass)\n• ln = natural logarithm"
      },
      {
        title: "Understanding Delta-V",
        content: "Delta-v is the total change in velocity a rocket can achieve. It's the single most important parameter in mission planning.\n\nThe Mass Ratio: R = m₀/m_f\n\nThe rocket equation becomes: Δv = v_e × ln(R)\n\nKey Insights:\n• Logarithmic relationship: Doubling Δv requires squaring the mass ratio\n• Exponential fuel needs: Small Δv increases need large fuel additions\n• Diminishing returns: Adding more fuel helps less and less\n\nExample Values:\n• Mass Ratio 2.0: Δv/v_e = 0.69×\n• Mass Ratio 5.0: Δv/v_e = 1.61×\n• Mass Ratio 10.0: Δv/v_e = 2.30×\n• Mass Ratio 20.0: Δv/v_e = 3.00×\n\nPractical Limits:\nReal rockets typically achieve:\n• Single stage: R = 5-10 (structural limits)\n• With staging: R_effective = 20-100+"
      },
      {
        title: "Real Mission Calculations",
        content: "Example 1: Falcon 9 First Stage\n• Initial mass: m₀ = 549,000 kg\n• Dry mass: m_f = 25,600 kg\n• Exhaust velocity: v_e = 3,050 m/s\n• Mass ratio: R = 549,000/25,600 = 21.45\n• Δv = 3,050 × ln(21.45) = 3,050 × 3.066 = 9,351 m/s\n\nExample 2: Apollo Lunar Module Ascent\n• Δv needed: 1,870 m/s\n• Exhaust velocity: v_e = 3,050 m/s\n• Dry mass: m_f = 2,150 kg\n• Required mass ratio: R = e^(1,870/3,050) = 1.846\n• Total mass needed: m₀ = 1.846 × 2,150 = 3,969 kg\n• Fuel needed: 3,969 - 2,150 = 1,819 kg\n\nExample 3: Mission to Mars\nDelta-v budget from LEO to Mars: 5,900 m/s\nUsing LH₂/LOX (v_e = 4,400 m/s):\n• R = e^(5,900/4,400) = 3.82\n• For 10,000 kg payload: m₀ = 38,200 kg\n• Fuel needed: 28,200 kg"
      }
    ],
    
    keyTakeaways: [
      "Tsiolkovsky Rocket Equation: Δv = v_e × ln(m₀/m_f) - fundamental to all space missions",
      "Delta-v is the total velocity change capability - determines what missions are possible",
      "Mass ratio R = m₀/m_f - typically 5-10 for single stage, limited by structure",
      "Logarithmic relationship means exponentially more fuel for linear Δv increases",
      "Staging multiplies delta-v by dropping dead weight between burns"
    ],
    
    vocabulary: [
      { term: "Delta-V (Δv)", definition: "Total velocity change capability of a rocket; measured in m/s or km/s" },
      { term: "Mass Ratio (R)", definition: "Ratio of initial (wet) mass to final (dry) mass: R = m₀/m_f" },
      { term: "Wet Mass (m₀)", definition: "Total mass including all propellant at start of burn" },
      { term: "Dry Mass (m_f)", definition: "Mass after all propellant consumed: structure + payload" }
    ]
  }
];

export default unit1Lessons;
