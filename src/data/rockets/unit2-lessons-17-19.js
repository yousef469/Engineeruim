// Unit 2: Rocket Propulsion Physics - ENHANCED
// Lessons 17-19: Engine cycles, nozzle design, performance analysis

export const unit2Lessons17to19 = [
  {
    id: 17,
    title: "Engine Cycles: Gas Generator vs Staged Combustion",
    unit: "Rocket Propulsion Physics",
    duration: "55 min",
    introduction: "⚙️ Engine cycles are the heart of rocket propulsion! The choice between gas generator, staged combustion, and full-flow staged combustion represents fundamental trade-offs between simplicity and performance. Understanding why Merlin uses gas generator while Raptor uses full-flow SC reveals the engineering decisions that shape spaceflight. This is rocket engine architecture!",
    
    sections: [
      {
        title: "🔥 Gas Generator Cycle: Simplicity and Reliability",
        content: `**Operating Principle**

The gas generator cycle is the simplest turbopump-fed engine:

**Flow Path:**
1. Propellants enter turbopumps
2. Small amount (2-3%) diverted to gas generator
3. Gas generator burns fuel-rich (prevents melting)
4. Hot gas drives turbine
5. Turbine drives pumps
6. Exhaust gas dumped overboard (NOT through main nozzle)
7. Main propellant (97-98%) goes to combustion chamber

**Key Point:** 2-3% of propellant is wasted!

**Gas Generator Conditions:**

Temperature: T_gg = 800-1,000 K
• Much cooler than main chamber (3,600 K)
• Fuel-rich mixture prevents turbine melting
• Typical O/F ratio: 0.3-0.5 (vs 2.5-3.0 in main chamber)

Pressure: P_gg = 5-15 MPa
• High enough to drive turbine
• Lower than chamber pressure

Mass flow: ṁ_gg = 0.02-0.03 × ṁ_total
• 2-3% of total propellant
• This is the "cost" of simplicity

**Turbine Power:**

Power = ṁ_gg × c_p × ΔT

Where:
• ṁ_gg = gas generator mass flow
• c_p = specific heat ≈ 1,200 J/(kg·K)
• ΔT = temperature drop across turbine ≈ 400 K

**Example: Merlin 1D**

Given:
• Total propellant flow: ṁ = 280 kg/s
• Gas generator flow: ṁ_gg = 8 kg/s (2.9%)
• Gas generator temp: T_gg = 900 K
• Turbine ΔT = 400 K

Turbine power:
P = 8 × 1,200 × 400 = 3,840,000 W = 3.84 MW

**That's 5,150 horsepower!**

Pump power required:
• LOX pump: ~2.0 MW
• RP-1 pump: ~1.5 MW
• Total: ~3.5 MW ✓

**Advantages of Gas Generator:**

✓ **Simple Design:**
• Fewer components
• Easier to manufacture
• Lower development cost
• Proven technology

✓ **Reliable:**
• Fewer failure modes
• Easier to test
• Well understood
• 99.7% success rate (Merlin)

✓ **Good Throttle Range:**
• Easy to vary gas generator flow
• Stable across wide range
• Merlin: 40-100%

✓ **Lower Chamber Pressure:**
• Lighter structure
• Easier seals
• Less stress

✓ **Cost:**
• Merlin 1D: ~$1 million
• Mass production possible

**Disadvantages:**

✗ **Efficiency Loss:**
• 2-3% propellant wasted
• Dumped overboard
• Not through nozzle

✗ **Lower Isp:**
• Typical: 300-340 s (RP-1/LOX)
• vs 340-360 s for staged combustion

✗ **Lower Chamber Pressure:**
• Typical: 5-15 MPa
• vs 15-30 MPa for staged combustion
• Lower Isp

**Performance:**

Efficiency: η = 95-97%
Isp: 300-340 s (RP-1/LOX)
Chamber pressure: 5-15 MPa
Thrust-to-weight: 150-180

**Famous Gas Generator Engines:**

**Merlin 1D (SpaceX):**
• P_c: 9.7 MPa
• Isp: 282 s (SL), 311 s (Vac)
• Thrust: 845 kN
• T/W: 180
• Cost: ~$1M
• Flights: 1,000+

**F-1 (Saturn V):**
• P_c: 7.0 MPa
• Isp: 263 s (SL), 304 s (Vac)
• Thrust: 6,770 kN
• T/W: 94
• Most powerful single-chamber engine ever!

**RD-107/108 (Soyuz):**
• P_c: 5.8 MPa
• Isp: 257 s (SL), 320 s (Vac)
• Thrust: 1,000 kN
• Flights: 1,900+
• Most flown rocket engine in history!

**When to Use Gas Generator:**

Best for:
• First stages (high thrust, reliability)
• Reusable rockets (simplicity, cost)
• Production rockets (proven, cheap)
• When 2-3% efficiency loss acceptable

Examples:
• Falcon 9 (both stages)
• Atlas V RD-180 (actually staged combustion!)
• Soyuz
• Most Chinese rockets`
      },
      {
        title: "🚀 Staged Combustion: Maximum Efficiency",
        content: `**Operating Principle**

Staged combustion eliminates the waste of gas generator cycle!

**Flow Path:**
1. Propellants enter turbopumps
2. Some propellant goes to pre-burner
3. Pre-burner creates hot gas (fuel-rich OR oxidizer-rich)
4. Hot gas drives turbine
5. Turbine exhaust goes to MAIN CHAMBER (not dumped!)
6. Completes combustion in main chamber
7. All propellant through nozzle - ZERO waste!

**Key Innovation:** Pre-burner exhaust is used, not wasted!

**Two Variants:**

**1. Fuel-Rich Staged Combustion (FRSC):**

Pre-burner runs very fuel-rich:
• O/F ratio: 0.2-0.4
• Temperature: 800-1,000 K
• Protects turbine from high temp
• Fuel-rich gas to main chamber

Advantages:
• Lower turbine temperature
• Easier materials
• Russian specialty

Examples:
• RD-180 (Atlas V)
• RD-191 (Angara)
• RD-253 (Proton)

**2. Oxidizer-Rich Staged Combustion (ORSC):**

Pre-burner runs oxidizer-rich:
• O/F ratio: 50-80 (extreme!)
• Temperature: 700-900 K
• Requires exotic materials (oxidizer is corrosive!)
• Oxidizer-rich gas to main chamber

Advantages:
• Higher power density
• Better performance
• American specialty

Examples:
• RS-25 (Space Shuttle, SLS)
• RD-170 (Energia)
• RD-171 (Zenit)

**Why Oxidizer-Rich is Harder:**

Hot oxygen is extremely corrosive!
• Attacks most metals
• Requires special alloys
• Nickel-based superalloys
• Expensive materials

But worth it:
• Higher chamber pressure possible
• Better Isp
• More compact design

**Performance Comparison:**

**Gas Generator:**
• Efficiency: 95-97%
• Isp: 300-340 s
• P_c: 5-15 MPa

**Staged Combustion:**
• Efficiency: 98-99%
• Isp: 340-465 s
• P_c: 15-30 MPa

**2-3% efficiency gain = huge Δv savings!**

**Example: RS-25 (Space Shuttle Main Engine)**

**Configuration:**
• Oxidizer-rich staged combustion
• Two pre-burners (fuel and oxidizer sides)
• Dual turbopumps

**Specifications:**
• P_c: 20.6 MPa (highest for hydrogen engine)
• Isp: 366 s (SL), 452 s (Vac)
• Thrust: 1,860 kN (SL), 2,279 kN (Vac)
• Throttle: 67-109%
• T/W: 73

**Complexity:**
• Development: 1970-1981 (11 years!)
• Cost: ~$50 million per engine
• Sensors: 400+
• Most complex rocket engine ever

**But performance:**
• Highest Isp for any hydrogen engine
• Reusable (designed for 55 flights)
• Throttleable
• Gimbals ±10.5°

**Example: RD-180 (Atlas V)**

**Configuration:**
• Fuel-rich staged combustion
• Single pre-burner
• Dual combustion chambers

**Specifications:**
• P_c: 26.7 MPa (very high!)
• Isp: 311 s (SL), 338 s (Vac)
• Thrust: 3,827 kN (SL)
• T/W: 78

**Innovation:**
• Two combustion chambers, one turbopump
• Compact design
• High performance
• Russian engineering masterpiece

**Advantages of Staged Combustion:**

✓ **Maximum Efficiency:**
• 98-99% vs 95-97%
• All propellant through nozzle
• No waste!

✓ **Higher Chamber Pressure:**
• 15-30 MPa vs 5-15 MPa
• Higher Isp
• Better performance

✓ **Better Isp:**
• 340-465 s vs 300-340 s
• Huge for upper stages
• Critical for deep space

**Disadvantages:**

✗ **Very Complex:**
• More components
• Harder to manufacture
• Longer development
• Higher cost

✗ **Difficult Development:**
• RS-25: 11 years
• Many failures during testing
• Requires advanced materials

✗ **Higher Cost:**
• RS-25: $50M
• vs Merlin: $1M
• 50× more expensive!

✗ **More Failure Modes:**
• Pre-burner can fail
• Turbine can fail
• More things to go wrong

✗ **Harder to Throttle:**
• Pre-burner stability
• Mixture ratio control
• Narrower range

**When to Use Staged Combustion:**

Best for:
• Upper stages (Isp critical)
• Deep space missions
• When performance > cost
• Government programs (budget available)

Examples:
• Space Shuttle (RS-25)
• SLS (RS-25)
• Atlas V (RD-180)
• Proton (RD-253)`
      },
      {
        title: "🌟 Full-Flow Staged Combustion: The Ultimate Cycle",
        content: `**The Holy Grail of Rocket Engines**

Full-flow staged combustion (FFSC) is the most efficient cycle possible!

**Operating Principle:**

**Two separate pre-burners:**
1. Fuel pre-burner: Fuel-rich
2. Oxidizer pre-burner: Oxidizer-rich
3. Each drives separate turbine
4. Both exhausts meet in main chamber
5. Complete combustion there
6. All propellant through nozzle

**Key Innovation:** Both propellants have dedicated pre-burners!

**Why It's Better:**

**1. Lower Turbine Temperatures:**
• Fuel pre-burner: 800-1,000 K (fuel-rich)
• Oxidizer pre-burner: 700-900 K (oxidizer-rich)
• vs 1,200-1,500 K for single pre-burner
• Easier on materials!

**2. Higher Power Density:**
• Two turbines instead of one
• More power available
• Higher chamber pressure possible

**3. Optimal for Both Propellants:**
• Fuel gets fuel-rich pre-burner
• Oxidizer gets oxidizer-rich pre-burner
• Each optimized separately

**4. Better Reliability Potential:**
• Lower temperatures
• Less stress on components
• Longer life possible

**The Challenge:**

**Why So Hard to Develop?**

**Complexity:**
• Two pre-burners to design
• Dual turbopump system
• Complex plumbing
• Precise flow control
• Synchronization required

**Development History:**
• Concept: 1960s (Soviet Union)
• RD-270: Developed but cancelled (1970s)
• Decades of attempts
• Many failures
• **Raptor: First operational FFSC (2019)**

**SpaceX Raptor: The Breakthrough**

**Why Raptor Succeeded:**

**1. Modern Materials:**
• Advanced alloys
• Better coatings
• 3D printing

**2. Computational Design:**
• CFD simulation
• FEA analysis
• Optimization algorithms

**3. Rapid Iteration:**
• Test early, test often
• Learn from failures
• Improve quickly

**4. Vertical Integration:**
• SpaceX makes everything
• No supply chain delays
• Fast changes

**Raptor Specifications:**

**Raptor 1 (2019):**
• P_c: 30.0 MPa (world record!)
• Isp: 330 s (SL), 356 s (Vac)
• Thrust: 2,000 kN (SL)
• Propellant: CH₄/LOX
• Throttle: 40-100%

**Raptor 2 (2022):**
• P_c: 30.0 MPa
• Isp: 327 s (SL), 380 s (Vac)
• Thrust: 2,300 kN (SL)
• T/W: 200
• Cost target: <$250k
• Designed for 1,000+ uses!

**Improvements:**
• Simplified design (fewer parts)
• Higher thrust (+15%)
• Better manufacturing
• Lower cost (-50%)
• Easier maintenance

**Performance Comparison:**

**Gas Generator (Merlin):**
• Efficiency: 96%
• Isp: 311 s (vac)
• P_c: 9.7 MPa
• Cost: $1M

**Staged Combustion (RS-25):**
• Efficiency: 99%
• Isp: 452 s (vac)
• P_c: 20.6 MPa
• Cost: $50M

**Full-Flow SC (Raptor):**
• Efficiency: 99.5%
• Isp: 380 s (vac)
• P_c: 30.0 MPa
• Cost: $0.25M (target)

**Raptor achieves RS-25 performance at 1/200th the cost!**

**Why Methane?**

SpaceX chose CH₄/LOX for Raptor:

**Advantages:**
• Good Isp: 370-380 s (vac)
• Dense: 422 kg/m³ (vs 71 for H₂)
• Storable: -162°C (vs -253°C for H₂)
• Clean burning: No coking
• Mars-producible: Sabatier reaction

**Trade-offs:**
• Lower Isp than H₂ (380 vs 450 s)
• But much denser (smaller tanks)
• Net benefit for reusability

**The Future:**

**Starship:**
• 33 Raptors on Super Heavy
• 6 Raptors on Starship
• All full-flow staged combustion
• Total thrust: 72,000 kN!

**Impact:**
• Proves FFSC is practical
• Opens new possibilities
• Other companies developing FFSC
• New era of rocket engines

**When to Use FFSC:**

Best for:
• Reusable rockets (durability)
• High performance missions
• When development cost justified
• Long-term programs

Examples:
• Starship (Raptor)
• Future rockets (many in development)

**The Bottom Line:**

FFSC is the ultimate rocket engine cycle:
• Maximum efficiency (99.5%)
• High performance
• Good for reusability
• But very hard to develop

Raptor proved it's possible!`
      },
      {
        title: "📊 Cycle Selection: Engineering Trade-offs",
        content: `**Comparison Matrix**

| Cycle | Efficiency | Isp | P_c | Complexity | Cost | Reliability | Development |
|-------|-----------|-----|-----|------------|------|-------------|-------------|
| Gas Gen | 95-97% | 300-340s | 5-15 MPa | Low | Low | High | Easy |
| Staged | 98-99% | 340-465s | 15-30 MPa | High | High | Medium | Hard |
| FFSC | 99-99.5% | 350-380s | 25-35 MPa | Very High | Very High* | TBD | Very Hard |
| Expander | 98-99% | 430-465s | 5-10 MPa | Medium | Medium | Very High | Medium |

*Raptor targeting low cost through mass production

**Selection Criteria**

**For First Stages:**

Requirements:
• High thrust
• Reliability
• Cost (if reusable)
• Throttle range

Best choices:
• Gas generator (Falcon 9)
• Staged combustion (Atlas V)
• FFSC (Starship)

**For Upper Stages:**

Requirements:
• High Isp
• Restartable
• Lightweight
• Reliability

Best choices:
• Expander (RL-10)
• Staged combustion (RS-25)
• FFSC (Raptor)

**For Reusable:**

Requirements:
• Durability
• Throttle range
• Cost
• Maintenance

Best choices:
• Gas generator (Merlin)
• FFSC (Raptor)

**For Deep Space:**

Requirements:
• Maximum Isp
• Reliability
• Restartable

Best choices:
• LH₂/LOX expander (RL-10)
• LH₂/LOX staged combustion

**Real-World Examples:**

**Falcon 9:**
• Both stages: Gas generator
• Reason: Simplicity, cost, reusability
• Trade-off: Slightly lower Isp
• Result: Most successful rocket ever

**Starship:**
• Both stages: FFSC
• Reason: Maximum performance, reusability
• Trade-off: Development complexity
• Result: TBD (in development)

**SLS:**
• Core: Staged combustion (RS-25)
• Boosters: Solid
• Upper stage: Expander (RL-10)
• Reason: Heritage, performance
• Trade-off: Cost

**Vulcan:**
• First stage: Staged combustion (BE-4)
• Upper stage: Expander (RL-10)
• Reason: Optimal for each stage
• Trade-off: Complexity

**The Efficiency Question:**

**Does 2-3% efficiency matter?**

For a Mars mission:

**Gas Generator (96% efficient):**
• Δv needed: 10,000 m/s
• v_e: 3,360 m/s (96% of 3,500)
• R = e^(10,000/3,360) = 17.8
• Fuel for 10,000 kg payload: 168,000 kg

**FFSC (99.5% efficient):**
• v_e: 3,483 m/s (99.5% of 3,500)
• R = e^(10,000/3,483) = 15.2
• Fuel for 10,000 kg payload: 142,000 kg

**Savings: 26,000 kg (15%)!**

For Mars mission:
• 26,000 kg = 26 tons of cargo
• Or 26 tons less fuel to launch
• Huge difference!

**The Cost Question:**

**Development costs:**
• Gas generator: $100M-500M
• Staged combustion: $1B-5B
• FFSC: $1B-10B

**Per-engine costs:**
• Merlin (gas gen): $1M
• RS-25 (staged): $50M
• Raptor (FFSC): $0.25M (target)

**But:**
• Raptor development: ~$5B
• Amortized over 1,000 engines: $5M each
• Still cheaper than RS-25!

**The Reliability Question:**

**Flight history:**
• Gas generator: 10,000+ flights, 99.5% success
• Staged combustion: 1,000+ flights, 98% success
• FFSC: 100+ flights, TBD

**Failure modes:**
• Gas generator: Fewer (simpler)
• Staged combustion: More (complex)
• FFSC: Most (very complex)

**But:**
• FFSC lower temperatures
• Better for reusability
• Potential for higher reliability

**The Future:**

**Trends:**
• More FFSC engines in development
• Raptor proving it's practical
• Cost coming down
• Performance going up

**Conclusion:**

No "best" cycle - depends on mission:
• First stage, reusable: Gas gen or FFSC
• Upper stage, performance: Staged or expander
• Deep space: LH₂/LOX expander
• Mars: CH₄/LOX FFSC

**Engineering is about trade-offs!**`
      }
    ],
    
    keyTakeaways: [
      "Gas generator: 95-97% efficient, simple, reliable; wastes 2-3% propellant",
      "Staged combustion: 98-99% efficient, complex; all propellant through nozzle",
      "Full-flow SC: 99.5% efficient, most complex; Raptor first operational (2019)",
      "Efficiency matters: 3% improvement saves 15% fuel on Mars mission",
      "Cycle selection depends on mission: first stage vs upper stage vs reusable",
      "Raptor achieves RS-25 performance at 1/200th cost through mass production"
    ],
    
    vocabulary: [
      { term: "Gas Generator", definition: "Small burner creating hot gas for turbine; exhaust dumped overboard" },
      { term: "Staged Combustion", definition: "Pre-burner exhaust goes to main chamber; zero propellant waste" },
      { term: "Full-Flow Staged Combustion", definition: "Two pre-burners (fuel-rich and oxidizer-rich); maximum efficiency" },
      { term: "Pre-burner", definition: "Small combustion chamber generating gas to drive turbine" },
      { term: "Chamber Pressure (P_c)", definition: "Pressure in main combustion chamber; higher = better Isp" }
    ],
    
    practiceProblems: [
      {
        id: "17-1",
        problem: "Merlin 1D uses gas generator with 2.9% propellant waste. Total flow ṁ = 280 kg/s. Over 162s burn, how much propellant is wasted vs staged combustion?",
        solution: "Gas generator waste: 280 × 0.029 = 8.12 kg/s\nOver 162s: 8.12 × 162 = 1,315 kg wasted\nStaged combustion waste: 0 kg\n\nBut gas generator is simpler and cheaper! Trade-off: 1,315 kg vs development cost.",
        hint: "Calculate waste flow rate, multiply by burn time"
      },
      {
        id: "17-2",
        problem: "Compare fuel needs for 10,000 m/s mission with 5,000 kg payload. Gas gen (η=96%, v_e=3,360 m/s) vs FFSC (η=99.5%, v_e=3,483 m/s).",
        solution: "Gas gen:\nR = e^(10,000/3,360) = e^2.976 = 19.6\nm_0 = 5,000 × 19.6 = 98,000 kg\nFuel = 93,000 kg\n\nFFSC:\nR = e^(10,000/3,483) = e^2.871 = 17.7\nm_0 = 5,000 × 17.7 = 88,500 kg\nFuel = 83,500 kg\n\nFFSC saves 9,500 kg (10%)!",
        hint: "Use rocket equation with different v_e values"
      },
      {
        id: "17-3",
        problem: "Raptor turbine power: ṁ_preburner = 12 kg/s, c_p = 1,200 J/(kg·K), ΔT = 350 K. Calculate power in MW and horsepower.",
        solution: "P = ṁ × c_p × ΔT\nP = 12 × 1,200 × 350 = 5,040,000 W = 5.04 MW\n\nHorsepower: 5.04 MW × 1,341 hp/MW = 6,759 hp\n\nThat's like 7 Formula 1 engines!",
        hint: "P = ṁ × c_p × ΔT, then convert to horsepower (1 MW = 1,341 hp)"
      },
      {
        id: "17-4",
        problem: "Why did SpaceX choose gas generator for Merlin (2002) but FFSC for Raptor (2012)?",
        solution: "Merlin (2002-2009):\n- Goal: Cheap, reliable, reusable rocket\n- Gas generator: Proven, simple, fast development\n- Trade-off: 3% efficiency loss acceptable\n- Result: $1M engine, 99.7% success rate\n\nRaptor (2012-2019):\n- Goal: Mars mission, maximum performance\n- FFSC: Highest efficiency, best for reusability\n- Trade-off: Complex but worth it long-term\n- Modern tech (3D printing, CFD) made it possible\n- Result: RS-25 performance at 1/200th cost\n\nDifferent missions, different choices!",
        hint: "Consider mission requirements, technology available, and trade-offs"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q17-1",
          question: "What is the main disadvantage of gas generator cycle?",
          options: [
            "Too complex",
            "2-3% of propellant wasted (dumped overboard instead of through nozzle)",
            "Can't throttle",
            "Too expensive"
          ],
          correctAnswer: 1,
          explanation: "Gas generator dumps 2-3% of propellant overboard after driving the turbine. This reduces efficiency to 95-97% vs 98-99% for staged combustion. But it's much simpler and cheaper!"
        },
        {
          id: "q17-2",
          question: "How does staged combustion eliminate waste?",
          options: [
            "Uses less fuel",
            "Pre-burner exhaust goes to main chamber, so all propellant through nozzle",
            "Burns hotter",
            "Uses better materials"
          ],
          correctAnswer: 1,
          explanation: "Staged combustion sends pre-burner exhaust to the main combustion chamber instead of dumping it. All propellant goes through the nozzle - zero waste! This achieves 98-99% efficiency."
        },
        {
          id: "q17-3",
          question: "What makes full-flow staged combustion (FFSC) the most efficient?",
          options: [
            "Higher temperature",
            "Two separate pre-burners (fuel-rich and oxidizer-rich) optimize both propellants",
            "Bigger nozzle",
            "More fuel"
          ],
          correctAnswer: 1,
          explanation: "FFSC uses two pre-burners: fuel-rich for fuel side, oxidizer-rich for oxidizer side. Each optimized separately, both exhausts to main chamber. Achieves 99.5% efficiency - the theoretical maximum!"
        },
        {
          id: "q17-4",
          question: "Why was Raptor the first operational FFSC engine despite the concept existing since the 1960s?",
          options: [
            "SpaceX is smarter",
            "Modern materials, 3D printing, CFD simulation, and rapid iteration made it possible",
            "It's easier than people thought",
            "Other companies didn't try"
          ],
          correctAnswer: 1,
          explanation: "FFSC is extremely complex (two pre-burners, dual turbopumps). Modern technology - advanced materials, 3D printing, computational design, rapid testing - finally made it practical. Plus SpaceX's vertical integration and iteration speed!"
        },
        {
          id: "q17-5",
          question: "For a Mars mission, why does 3% efficiency improvement matter?",
          options: [
            "It doesn't matter much",
            "3% better efficiency saves ~15% fuel mass - that's 26 tons for a 10-ton payload!",
            "Only saves a little fuel",
            "Just for bragging rights"
          ],
          correctAnswer: 1,
          explanation: "Due to the rocket equation's exponential nature, 3% efficiency improvement (96% → 99.5%) saves ~15% fuel mass! For a Mars mission with 10-ton payload, that's 26 tons less fuel - huge difference!"
        }
      ]
    }
  }
];

export default unit2Lessons17to19;
