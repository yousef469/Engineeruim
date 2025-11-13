// Lesson 7: Tsiolkovsky Rocket Equation - ENHANCED
export const lesson7Enhanced = {
  id: 7,
  title: "The Tsiolkovsky Rocket Equation",
  subtitle: "The Most Important Equation in Spaceflight",
  unit: "Rocket Fundamentals",
  duration: "50 min",
  description: "Derived in 1897 by Konstantin Tsiolkovsky, this equation is THE fundamental law of rocketry. It reveals why reaching orbit is hard, why staging is necessary, and determines every space mission's feasibility. Master this equation and you understand spaceflight!",
  coreIdea: "Δv = v_e × ln(m₀/m_f) - Velocity change depends exponentially on mass ratio!",
  engineeringExample: "Apollo Moon missions, Mars rovers, Falcon 9 reusability, interplanetary probes",
  
  learningObjectives: [
    "Derive the rocket equation from first principles using calculus",
    "Calculate delta-v for any rocket given mass ratio and exhaust velocity",
    "Understand why the relationship is logarithmic (exponential fuel needs)",
    "Apply the equation to real missions: LEO, Moon, Mars, beyond",
    "Analyze staging benefits and calculate multi-stage delta-v",
    "Determine propellant requirements for specific mission profiles"
  ],
  
  keyEquations: [
    { eq: '\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right)', meaning: 'Tsiolkovsky rocket equation - fundamental law of spaceflight' },
    { eq: 'R = \\frac{m_0}{m_f}', meaning: 'Mass ratio - initial mass divided by final mass' },
    { eq: '\\Delta v = v_e \\ln(R)', meaning: 'Alternate form using mass ratio' },
    { eq: 'm_0 = m_f \\cdot e^{\\Delta v / v_e}', meaning: 'Calculate required initial mass for target delta-v' },
    { eq: '\\Delta v_{total} = \\sum_{i=1}^{n} v_{e,i} \\ln(R_i)', meaning: 'Multi-stage rocket delta-v (sum of stages)' }
  ],
  
  content: {
    intro: "🚀 The Tsiolkovsky Rocket Equation is to spaceflight what E=mc² is to physics - THE fundamental relationship! Derived over 60 years before Sputnik, it predicted everything about space travel: why orbit is hard, why we need staging, and what missions are possible. Every spacecraft ever built obeys this equation!",
    
    concepts: [
      {
        title: "🧮 Deriving the Rocket Equation from First Principles",
        explanation: `Let's derive this legendary equation step by step using calculus and Newton's laws!

**Starting Point: Newton's Second Law**
F = ma = m(dv/dt)

For a rocket, the force comes from expelling mass:
F = ṁ × v_e (thrust equation)

**Key Insight:** As rocket burns fuel, its mass DECREASES:
ṁ = -dm/dt (negative because mass is leaving)

**Combining these:**
m(dv/dt) = -v_e(dm/dt)

**Rearrange:**
m dv = -v_e dm

**Divide both sides by m:**
dv = -v_e (dm/m)

**Now integrate both sides!**
Left side: ∫dv from v₀ to v_f
Right side: -v_e ∫(dm/m) from m₀ to m_f

**Integration:**
v_f - v₀ = -v_e [ln(m)]|_{m₀}^{m_f}
Δv = -v_e [ln(m_f) - ln(m₀)]
Δv = -v_e ln(m_f/m₀)
Δv = v_e ln(m₀/m_f)

**This is the Tsiolkovsky Rocket Equation!**

**What it means:**
• Δv = total velocity change the rocket can achieve
• v_e = exhaust velocity (how fast gases exit)
• m₀ = initial mass (wet mass - full of fuel)
• m_f = final mass (dry mass - empty of fuel)
• ln = natural logarithm (base e ≈ 2.718)

**Why logarithmic?**
The logarithm comes from integrating 1/m - this creates an EXPONENTIAL relationship between fuel and velocity! Small velocity increases require HUGE fuel additions.`,
        
        example: `**Example 1: Falcon 9 First Stage Delta-V**

Let's calculate how much velocity the Falcon 9 first stage can achieve:

**Given:**
• Initial mass (full): m₀ = 549,000 kg
• Final mass (empty): m_f = 25,600 kg  
• Exhaust velocity: v_e = 3,050 m/s (Merlin 1D at sea level)

**Step 1: Calculate Mass Ratio**
R = m₀/m_f = 549,000/25,600 = 21.45

**Step 2: Calculate ln(R)**
ln(21.45) = 3.066

**Step 3: Calculate Δv**
Δv = v_e × ln(R)
Δv = 3,050 × 3.066
Δv = 9,351 m/s = 9.35 km/s

**Analysis:**
• First stage achieves 9.35 km/s of delta-v
• This is enough to reach ~80% of orbital velocity!
• Remaining 2 km/s comes from second stage
• Mass ratio of 21.45 means 95.3% of mass is fuel!

**Fuel Breakdown:**
Total fuel = m₀ - m_f = 549,000 - 25,600 = 523,400 kg
Fuel fraction = 523,400/549,000 = 95.3%

Only 4.7% of the rocket is structure and payload - the rest is fuel!`
      },
      
      {
        title: "📊 Understanding the Logarithmic Relationship",
        explanation: `The logarithm in the rocket equation creates EXPONENTIAL fuel requirements!

**Why This Matters:**
Doubling your delta-v doesn't double your fuel - it SQUARES your mass ratio!

**The Math:**
If Δv₁ = v_e ln(R₁), then:
Δv₂ = 2×Δv₁ requires R₂ = R₁²

**Example:**
• To get 3 km/s with v_e = 3 km/s: R = e¹ = 2.72
• To get 6 km/s with v_e = 3 km/s: R = e² = 7.39
• To get 9 km/s with v_e = 3 km/s: R = e³ = 20.09

**Fuel Requirements:**
For 1,000 kg payload:

**3 km/s mission:**
m₀ = 1,000 × 2.72 = 2,720 kg
Fuel needed: 1,720 kg

**6 km/s mission:**
m₀ = 1,000 × 7.39 = 7,390 kg
Fuel needed: 6,390 kg (3.7× more!)

**9 km/s mission:**
m₀ = 1,000 × 20.09 = 20,090 kg
Fuel needed: 19,090 kg (11× more!)

**This is why orbit is hard!**
LEO requires ~9.5 km/s delta-v. With typical v_e = 3.5 km/s:
R = e^(9.5/3.5) = e^2.71 = 15.0

For every 1 kg in orbit, you need 15 kg at liftoff!
That's why 95% of a rocket is fuel.

**Diminishing Returns:**
Adding more fuel helps less and less because:
1. More fuel = more mass
2. More mass = need more fuel to accelerate it
3. That fuel adds mass too!
4. Exponential spiral!

This is why single-stage-to-orbit (SSTO) is so hard - you hit structural limits before achieving enough delta-v.`,
        
        example: `**Example 2: Why SSTO is Nearly Impossible**

Let's see why single-stage-to-orbit is so challenging:

**Requirements for LEO:**
• Delta-v needed: 9,500 m/s
• Best chemical v_e: 4,400 m/s (LH₂/LOX)

**Calculate Required Mass Ratio:**
R = e^(Δv/v_e) = e^(9,500/4,400) = e^2.16 = 8.67

**For 10,000 kg payload:**
m₀ = 10,000 × 8.67 = 86,700 kg
Fuel mass = 76,700 kg
Fuel fraction = 88.5%

**But wait - we need structure!**
Typical tank/engine mass: 10-15% of fuel mass
Structure mass = 0.12 × 76,700 = 9,200 kg

**Revised calculation:**
Dry mass = payload + structure = 10,000 + 9,200 = 19,200 kg
Required m₀ = 19,200 × 8.67 = 166,464 kg
Fuel needed = 147,264 kg

**New fuel fraction = 88.5%**
But structure is now only 5.5% - impossible with current materials!

**Reality Check:**
• Aluminum tanks: ~8% of fuel mass minimum
• Engines: ~3% of fuel mass minimum  
• Systems: ~2% of fuel mass minimum
• Total structure: ~13% minimum

This makes SSTO barely possible with perfect engineering and no margin!

**Why Staging Works:**
Drop the heavy first stage tanks and engines!
Second stage only needs R = 3-4, much more achievable.`
      }
    ],
    
    realWorld: [
      {
        icon: '🌙',
        title: 'Apollo Moon Missions',
        description: 'Apollo used the rocket equation for every maneuver. Trans-Lunar Injection: 3,150 m/s. Lunar Orbit Insertion: 900 m/s. Descent: 1,870 m/s. Ascent: 1,870 m/s. Return: 900 m/s. Total: 8,690 m/s! Each stage sized using Δv = v_e ln(R). The Lunar Module had R = 2.15 for ascent - just enough to reach orbit with no margin.'
      },
      {
        icon: '🔴',
        title: 'Mars Missions',
        description: 'Getting to Mars requires 5,900 m/s from LEO. With v_e = 4,400 m/s (LH₂/LOX), need R = 3.82. For 10-ton payload, need 38 tons at departure! This is why Mars missions are so expensive - the rocket equation demands massive fuel. SpaceX Starship aims for R = 6+ with in-orbit refueling to enable Mars missions.'
      },
      {
        icon: '🚀',
        title: 'Falcon 9 Reusability',
        description: 'Reusability changes the rocket equation! First stage needs extra Δv to return: boost-back burn (500 m/s), re-entry burn (200 m/s), landing burn (100 m/s). Total: 800 m/s extra. This reduces payload by ~30% but saves $50M in manufacturing. The rocket equation shows the trade-off is worth it!'
      },
      {
        icon: '🛰️',
        title: 'Satellite Station-Keeping',
        description: 'Geostationary satellites need ~50 m/s/year for station-keeping. With v_e = 3,000 m/s (hydrazine), R = e^(50/3000) = 1.017. Only 1.7% fuel per year! This is why satellites last 15+ years - the rocket equation is favorable for small delta-v maneuvers. Ion engines (v_e = 30,000 m/s) need even less: R = 1.0017 (0.17% per year).'
      },
      {
        icon: '🌌',
        title: 'Interstellar Probes',
        description: 'Voyager 1 achieved 17 km/s using gravity assists, not rockets! Direct rocket propulsion would need R = e^(17,000/4,400) = 48.2. For 1-ton probe, need 48 tons of fuel - impossible! This is why we use gravity assists and why interstellar travel is so hard. The rocket equation is unforgiving at high velocities.'
      }
    ],
    
    practiceProblems: [
      {
        id: '1.7a',
        prompt: 'A rocket has initial mass 50,000 kg, final mass 8,000 kg, and exhaust velocity 3,200 m/s. Calculate the delta-v achieved.',
        solution: `**Given:**
• m₀ = 50,000 kg
• m_f = 8,000 kg
• v_e = 3,200 m/s

**Find:** Δv

**Step 1: Calculate Mass Ratio**
R = m₀/m_f = 50,000/8,000 = 6.25

**Step 2: Calculate ln(R)**
ln(6.25) = 1.833

**Step 3: Apply Rocket Equation**
Δv = v_e × ln(R)
Δv = 3,200 × 1.833
Δv = 5,866 m/s = 5.87 km/s

**Answer:** The rocket achieves 5.87 km/s of delta-v.

**Physical Interpretation:**
• Fuel fraction = (50,000-8,000)/50,000 = 84%
• This is typical for orbital rockets
• 5.87 km/s is enough for suborbital flight
• Would need ~9.5 km/s for orbit`,
        hints: ['Calculate R = m₀/m_f first', 'Use Δv = v_e × ln(R)', 'ln(6.25) ≈ 1.833']
      }
    ]
  },
  
  metadata: { 
    difficulty: 'Medium', 
    estTime: '50 min', 
    tags: ['tsiolkovsky', 'delta-v', 'mass-ratio', 'rocket-equation'] 
  }
};

export default lesson7Enhanced;
