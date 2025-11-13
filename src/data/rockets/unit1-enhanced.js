// Unit 1: Rocket Fundamentals - ENHANCED VERSION
// Comprehensive, detailed lessons matching mathematics section depth

export const unit1EnhancedLessons = [
  {
    id: 6,
    title: "Newton's Third Law & Rocket Thrust Generation",
    subtitle: "How Rockets Actually Work in Space",
    unit: "Rocket Fundamentals",
    duration: "45 min",
    description: "Rockets are the ONLY propulsion system that works in the vacuum of space! Unlike jets that need air, rockets carry everything they need. Master the physics of thrust generation and understand why rockets accelerate faster as they burn fuel.",
    coreIdea: "Thrust = Mass Flow Rate × Exhaust Velocity: T = ṁ·v_e - expelling mass creates force!",
    engineeringExample: "SpaceX Merlin engines, Space Shuttle, Saturn V, Falcon Heavy",
    
    learningObjectives: [
      "Understand Newton's Third Law applied to rocket propulsion",
      "Calculate thrust from mass flow rate and exhaust velocity",
      "Analyze Thrust-to-Weight Ratio (TWR) for launch requirements",
      "Predict rocket acceleration throughout flight",
      "Compare different rocket engines and their performance"
    ],
    
    keyEquations: [
      { eq: 'T = \\dot{m} \\times v_e', meaning: 'Thrust equals mass flow rate times exhaust velocity' },
      { eq: 'TWR = \\frac{T}{mg}', meaning: 'Thrust-to-Weight Ratio (must exceed 1.0 for liftoff)' },
      { eq: 'a = \\frac{T - mg}{m}', meaning: 'Net acceleration considering thrust and gravity' },
      { eq: 'F = \\frac{dp}{dt}', meaning: 'Force equals rate of change of momentum' }
    ],
    
    content: {
      intro: "🚀 Rockets work by MOMENTUM CONSERVATION! They don't push against anything - they expel mass backward at high speed, and Newton's Third Law creates forward thrust. This is why rockets work in space where there's nothing to push against!",
      
      concepts: [
        {
          title: "🧠 Newton's Third Law: The Foundation of Rocketry",
          explanation: `**For every action, there is an equal and opposite reaction.**

This simple law enables space travel! Here's how it works:

**ACTION:** Rocket expels exhaust gases backward at high velocity (v_e)
**REACTION:** Rocket experiences forward thrust force (T)

**The Physics:**
When a rocket burns fuel, it creates hot gases that expand and accelerate through the nozzle. These gases exit at tremendous speed (2,000-4,500 m/s). As the rocket pushes gases backward, the gases push the rocket forward with equal force.

**Mathematical Foundation:**
Newton's Second Law: F = ma = m(dv/dt)

But for rockets, we care about MOMENTUM:
F = dp/dt = d(mv)/dt

For a rocket expelling mass:
- Rocket loses mass: dm (negative)
- Exhaust gains momentum: dm × v_e
- Rocket gains momentum: -dm × v_e (opposite direction)

This leads to the fundamental thrust equation:
**T = ṁ × v_e**

Where:
• T = thrust force (Newtons)
• ṁ = mass flow rate (kg/s) - how fast fuel is consumed
• v_e = exhaust velocity (m/s) - how fast gases exit

**Key Insight:** Thrust depends on TWO factors:
1. How MUCH mass you expel (ṁ)
2. How FAST you expel it (v_e)

You can get the same thrust by:
- Expelling lots of mass slowly (high ṁ, low v_e)
- Expelling little mass quickly (low ṁ, high v_e)

Different engines make different trade-offs!`,
          
          example: `**Example 1: SpaceX Merlin 1D Engine**

The Merlin 1D powers the Falcon 9 rocket. Let's calculate its thrust:

**Given:**
• Propellant flow rate: ṁ = 275 kg/s
• Exhaust velocity: v_e = 3,050 m/s (sea level)

**Calculate Thrust:**
T = ṁ × v_e
T = 275 kg/s × 3,050 m/s
T = 838,750 N
T = 839 kN (kilonewtons)

**Actual Merlin 1D thrust:** 845 kN at sea level

Our calculation is within 1%! The small difference comes from:
- Pressure effects (nozzle not perfectly expanded at sea level)
- Real gas behavior (not ideal gas)
- Combustion efficiency (not 100%)

**What does 845 kN mean?**
- That's 845,000 Newtons of force
- Equivalent to lifting 86,000 kg (86 metric tons) against gravity
- About the weight of 60 cars!
- And that's just ONE engine - Falcon 9 has NINE of them!`
        },
        
        {
          title: "🔧 Thrust Calculation: Real Rocket Examples",
          explanation: `Let's analyze real rocket engines to understand thrust generation:

**The Thrust Equation:** T = ṁ × v_e

This simple equation reveals everything about rocket performance!

**Trade-offs:**
1. **High Mass Flow (ṁ):** More thrust, but burns fuel faster
2. **High Exhaust Velocity (v_e):** More efficient, but harder to achieve

**Engine Comparison:**

**Solid Rocket Boosters (Space Shuttle SRB):**
• ṁ = 5,000 kg/s (HUGE!)
• v_e = 2,650 m/s (moderate)
• T = 13,250 kN per booster
• Characteristics: Massive thrust, simple, can't throttle

**Liquid Hydrogen/Oxygen (RS-25 - Space Shuttle Main Engine):**
• ṁ = 514 kg/s (moderate)
• v_e = 4,440 m/s (VERY HIGH!)
• T = 2,279 kN (vacuum)
• Characteristics: Efficient, complex, expensive

**Kerosene/Oxygen (Merlin 1D):**
• ṁ = 275 kg/s (moderate)
• v_e = 3,050 m/s (good)
• T = 845 kN (sea level)
• Characteristics: Balanced, reliable, cost-effective

**Why Different Engines?**
- **First Stage:** Needs HIGH THRUST to overcome gravity
  → Use high ṁ (Merlin, SRB)
- **Upper Stage:** Needs HIGH EFFICIENCY for orbital velocity
  → Use high v_e (RL-10, Merlin Vacuum)
- **Deep Space:** Needs MAXIMUM EFFICIENCY
  → Use ion engines (v_e = 30,000+ m/s!)`,
          
          example: `**Example 2: Saturn V F-1 Engine (Apollo Moon Rocket)**

The F-1 is the most powerful single-chamber rocket engine ever flown!

**Given:**
• Propellant: RP-1 (kerosene) + LOX (liquid oxygen)
• Mass flow rate: ṁ = 2,578 kg/s (MASSIVE!)
• Exhaust velocity: v_e = 2,580 m/s

**Calculate Thrust:**
T = ṁ × v_e
T = 2,578 × 2,580
T = 6,651,240 N
T = 6,651 kN = 6.65 MN (Meganewtons!)

**Saturn V had FIVE F-1 engines:**
Total thrust = 5 × 6,651 = 33,255 kN = 33.3 MN

**That's equivalent to:**
- Lifting 3.4 million kg against gravity
- The weight of 2,300 cars
- 40 times the thrust of a Boeing 747 at takeoff!

**Why such high mass flow?**
The Saturn V weighed 2,970,000 kg at liftoff. To achieve TWR > 1.2:
Required thrust = 1.2 × 2,970,000 × 9.81 = 34,970 kN

The F-1 engines provided 33,255 kN - just barely enough!
This is why the Saturn V lifted off so slowly - it was right at the edge of what was possible.`
        },
        
        {
          title: "⚖️ Thrust-to-Weight Ratio: The Launch Requirement",
          explanation: `**Thrust-to-Weight Ratio (TWR)** determines if a rocket can lift off!

**Definition:**
TWR = T / (mg)

Where:
• T = total thrust (N)
• m = rocket mass (kg)
• g = 9.81 m/s² (Earth's gravity)

**Physical Meaning:**
TWR compares thrust force to weight force:
- TWR < 1.0: Thrust less than weight → Rocket stays on ground
- TWR = 1.0: Thrust equals weight → Rocket hovers (unstable!)
- TWR > 1.0: Thrust exceeds weight → Rocket lifts off!

**Practical Requirements:**
- **Minimum for liftoff:** TWR > 1.0
- **Safe liftoff:** TWR > 1.2 (20% margin)
- **Typical rockets:** TWR = 1.2 to 1.5 at liftoff
- **Fighter jets:** TWR > 1.0 (can accelerate vertically!)

**Why TWR Increases During Flight:**
As fuel burns:
- Mass (m) DECREASES rapidly
- Thrust (T) stays roughly CONSTANT
- Therefore TWR = T/m INCREASES!

This is why rockets accelerate faster as they climb!

**Example Progression:**
Falcon 9 during first stage burn:
- Liftoff (t=0): TWR = 1.41
- Mid-burn (t=60s): TWR = 2.5
- Burnout (t=162s): TWR = 5.0+

The rocket is accelerating 5× faster at burnout than at liftoff!`,
          
          example: `**Example 3: Falcon 9 Liftoff Analysis**

Let's calculate if Falcon 9 can lift off and how fast it accelerates:

**Given at Liftoff:**
• Total mass: m = 549,000 kg
• Number of engines: 9 Merlin 1D
• Thrust per engine: 845 kN
• Total thrust: T = 9 × 845 = 7,605 kN

**Step 1: Calculate Weight**
W = mg = 549,000 × 9.81 = 5,386,000 N = 5,386 kN

**Step 2: Calculate TWR**
TWR = T / W = 7,605 / 5,386 = 1.41

**Analysis:**
✓ TWR = 1.41 > 1.0 → Rocket WILL lift off!
✓ TWR = 1.41 > 1.2 → Safe margin for liftoff

**Step 3: Calculate Net Force**
F_net = T - W = 7,605 - 5,386 = 2,219 kN

**Step 4: Calculate Initial Acceleration**
a = F_net / m = 2,219,000 / 549,000 = 4.04 m/s²

**That's 0.41g of acceleration!**

**Step 5: Acceleration at Burnout**
After 162 seconds, most fuel is burned:
• Remaining mass: m_f ≈ 55,000 kg (90% fuel consumed)
• Thrust still: T = 7,605 kN
• Weight now: W = 55,000 × 9.81 = 540 kN

TWR_final = 7,605 / 540 = 14.1!

Net acceleration: a = (7,605 - 540) / 55 = 128 m/s² = 13g!

**This is why rockets shut down engines before burnout - to limit acceleration!**`
        },
        
        {
          title: "🚀 Why Rockets Accelerate Faster Over Time",
          explanation: `One of the most counterintuitive aspects of rocketry: **Rockets accelerate FASTER as they burn fuel!**

**The Physics:**
Newton's Second Law: a = F/m

For a rocket:
- Force (F = T - mg) stays roughly constant
- Mass (m) DECREASES as fuel burns
- Therefore acceleration (a) INCREASES!

**The Math:**
At any time during flight:
a(t) = [T - m(t)g] / m(t)

As m(t) decreases:
- Numerator increases (less weight to overcome)
- Denominator decreases (less mass to accelerate)
- Both effects multiply!

**Typical Acceleration Profile:**

**Liftoff (t=0):**
• Mass: 100% (full of fuel)
• TWR: 1.2-1.5
• Acceleration: 2-5 m/s² (0.2-0.5g)

**Mid-Burn (t=50%):**
• Mass: 50% (half fuel burned)
• TWR: 2.0-2.5
• Acceleration: 10-15 m/s² (1.0-1.5g)

**Near Burnout (t=90%):**
• Mass: 20% (mostly empty)
• TWR: 5.0-10.0
• Acceleration: 40-90 m/s² (4-9g!)

**Why This Matters:**
1. **Structural Limits:** Rocket must withstand peak acceleration
2. **Payload Limits:** Satellites have g-force limits (typically 5-6g)
3. **Engine Throttling:** Must reduce thrust near burnout
4. **Staging:** Drop empty tanks to maintain reasonable acceleration

**Real Example: Space Shuttle**
The Shuttle throttled its main engines down to 67% thrust near the end of ascent to keep acceleration below 3g for crew comfort and structural limits.`,
          
          example: `**Example 4: Acceleration Throughout Flight**

Let's track a rocket's acceleration from liftoff to burnout:

**Rocket Specifications:**
• Initial mass: m₀ = 100,000 kg
• Dry mass (empty): m_dry = 10,000 kg
• Fuel mass: m_fuel = 90,000 kg
• Thrust: T = 1,500 kN (constant)
• Burn time: 150 seconds

**Calculate acceleration at different times:**

**T = 0s (Liftoff):**
m = 100,000 kg
W = 100,000 × 9.81 = 981 kN
a = (1,500 - 981) / 100 = 5.19 m/s² = 0.53g

**T = 75s (Half fuel burned):**
m = 55,000 kg (45,000 kg fuel burned)
W = 55,000 × 9.81 = 540 kN
a = (1,500 - 540) / 55 = 17.5 m/s² = 1.78g

**T = 135s (90% fuel burned):**
m = 19,000 kg (81,000 kg fuel burned)
W = 19,000 × 9.81 = 186 kN
a = (1,500 - 186) / 19 = 69.2 m/s² = 7.05g!

**T = 150s (Burnout):**
m = 10,000 kg (all fuel burned)
W = 10,000 × 9.81 = 98 kN
a = (1,500 - 98) / 10 = 140 m/s² = 14.3g!!

**Conclusion:**
Acceleration increased from 0.53g to 14.3g - a 27× increase!
This is why rockets must throttle down or shut off engines before complete burnout.`
        }
      ],
      
      realWorld: [
        {
          icon: '🚀',
          title: 'SpaceX Falcon 9: Modern Workhorse',
          description: 'Falcon 9 uses 9 Merlin 1D engines producing 7,605 kN total thrust. TWR of 1.41 at liftoff provides safe margin. First stage burns for 162 seconds, accelerating from 0.4g to 5g+. Engines throttle down near burnout to limit acceleration. Reusable first stage lands using 1-3 engines for controlled descent.'
        },
        {
          icon: '🌙',
          title: 'Saturn V: Moon Rocket',
          description: 'Five F-1 engines produced 33.3 MN thrust - most powerful rocket ever. Lifted 2,970,000 kg with TWR of only 1.16 (barely enough!). Slow liftoff due to low TWR, but accelerated to 2.5g by first stage burnout. Required precise thrust control to avoid exceeding structural limits during ascent.'
        },
        {
          icon: '🛰️',
          title: 'Space Shuttle: Reusable Spacecraft',
          description: 'Combined 3 RS-25 engines (6,837 kN) + 2 SRBs (26,500 kN) = 33,337 kN total. TWR of 1.5 at liftoff. Main engines throttled from 104% to 67% during ascent to limit acceleration to 3g for crew safety. SRBs burned for 124 seconds, then jettisoned. Main engines continued for 8.5 minutes total.'
        },
        {
          icon: '⚡',
          title: 'Ion Engines: Ultra-Efficient',
          description: 'Ion engines have v_e = 30,000-50,000 m/s (10× chemical rockets!) but tiny ṁ = 0.001 kg/s. Thrust only 0.1 N (like holding a piece of paper). TWR << 1.0 - cannot launch from Earth. But incredibly efficient for deep space missions. Dawn spacecraft used ion propulsion to visit Vesta and Ceres.'
        },
        {
          icon: '🔥',
          title: 'Solid Rocket Boosters: Maximum Thrust',
          description: 'SRBs provide massive thrust from simple design. Space Shuttle SRBs: 13,250 kN each, ṁ = 5,000 kg/s. Cannot throttle or shut down once ignited. Burn for 124 seconds then jettison. Provide 83% of liftoff thrust. Recovered and reused up to 20 times. Simple, reliable, but less efficient than liquid engines.'
        }
      ],
      
      practiceProblems: [
        {
          id: '1.6a',
          prompt: 'A rocket engine has mass flow rate ṁ = 150 kg/s and exhaust velocity v_e = 3,200 m/s. Calculate the thrust produced.',
          solution: `**Given:**
• ṁ = 150 kg/s
• v_e = 3,200 m/s

**Find:** Thrust T

**Solution:**
Use thrust equation: T = ṁ × v_e

T = 150 kg/s × 3,200 m/s
T = 480,000 N
T = 480 kN

**Answer:** The engine produces 480 kN of thrust.

**Physical Interpretation:**
This engine expels 150 kg of propellant every second at 3,200 m/s. That's like throwing 150 bowling balls per second at highway speed! The reaction force is 480 kN - enough to lift about 49,000 kg against gravity.`,
          hints: ['Use T = ṁ × v_e', 'Multiply mass flow rate by exhaust velocity', 'Convert to kN by dividing by 1,000']
        },
        {
          id: '1.6b',
          prompt: 'A rocket has mass 50,000 kg and total thrust 750 kN. Calculate the TWR and determine if it can lift off from Earth.',
          solution: `**Given:**
• Mass: m = 50,000 kg
• Thrust: T = 750 kN = 750,000 N
• Gravity: g = 9.81 m/s²

**Find:** TWR and whether rocket can lift off

**Step 1: Calculate Weight**
W = mg = 50,000 × 9.81 = 490,500 N = 490.5 kN

**Step 2: Calculate TWR**
TWR = T / W = 750 / 490.5 = 1.53

**Step 3: Check Liftoff Condition**
TWR = 1.53 > 1.0 ✓ Rocket CAN lift off!
TWR = 1.53 > 1.2 ✓ Safe margin for liftoff!

**Step 4: Calculate Net Force and Acceleration**
F_net = T - W = 750 - 490.5 = 259.5 kN
a = F_net / m = 259,500 / 50,000 = 5.19 m/s²
a = 5.19 / 9.81 = 0.53g

**Answer:** 
• TWR = 1.53
• Yes, rocket can lift off with 53% margin
• Initial acceleration = 5.19 m/s² (0.53g)`,
          hints: ['Calculate weight: W = mg', 'TWR = T/W', 'Must be > 1.0 to lift off', 'Net force = T - W']
        },
        {
          id: '1.6c',
          prompt: 'A rocket starts with mass 200,000 kg and burns fuel at 800 kg/s. If thrust is constant at 2,500 kN, calculate TWR at t=0 and t=120 seconds.',
          solution: `**Given:**
• Initial mass: m₀ = 200,000 kg
• Fuel burn rate: 800 kg/s
• Thrust: T = 2,500 kN (constant)
• Times: t=0 and t=120s

**At t = 0 (Liftoff):**

Mass: m = 200,000 kg
Weight: W = 200,000 × 9.81 = 1,962 kN
TWR = 2,500 / 1,962 = 1.27

**At t = 120 seconds:**

Fuel burned: 800 kg/s × 120 s = 96,000 kg
Remaining mass: m = 200,000 - 96,000 = 104,000 kg
Weight: W = 104,000 × 9.81 = 1,020 kN
TWR = 2,500 / 1,020 = 2.45

**Analysis:**
• TWR increased from 1.27 to 2.45 (92% increase!)
• Acceleration nearly doubled
• This is why rockets accelerate faster over time

**Bonus: Calculate accelerations**
At t=0: a = (2,500 - 1,962) / 200 = 2.69 m/s² = 0.27g
At t=120: a = (2,500 - 1,020) / 104 = 14.2 m/s² = 1.45g

Acceleration increased 5.3× in just 2 minutes!`,
          hints: ['Mass decreases: m(t) = m₀ - (burn rate × time)', 'Thrust stays constant', 'TWR = T/(mg)', 'Compare values at both times']
        }
      ]
    },
    
    metadata: { 
      difficulty: 'Medium', 
      estTime: '45 min', 
      tags: ['thrust', 'newtons-law', 'TWR', 'rocket-engines', 'acceleration'] 
    }
  }
];

export default unit1EnhancedLessons;
