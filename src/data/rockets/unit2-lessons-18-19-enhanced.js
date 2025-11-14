// Unit 2: Rocket Propulsion Physics - ENHANCED
// Lessons 18-19: Nozzle design and performance analysis

export const unit2Lessons18to19Enhanced = [
  {
    id: 18,
    title: "Nozzle Design & Expansion Optimization",
    unit: "Rocket Propulsion Physics",
    duration: "50 min",
    introduction: "🌪️ The rocket nozzle is where thermodynamics becomes thrust! By expanding hot gases from 3,600K and 20 MPa down to near-vacuum, nozzles convert 95% of thermal energy into kinetic energy. Understanding expansion ratios, bell shapes, and altitude compensation reveals why Merlin Vacuum has a 117:1 expansion ratio while sea-level Merlin uses only 16:1. This is the mathematics of energy conversion!",
    
    sections: [
      {
        title: "🔥 Nozzle Thermodynamics: Energy Conversion",
        content: `**The Energy Conversion Process**

Combustion chamber:
• Temperature: T_c = 3,000-3,600 K
• Pressure: P_c = 5-30 MPa
• Velocity: v_c ≈ 0 (nearly stationary)
• State: High enthalpy, low kinetic energy

Nozzle exit:
• Temperature: T_e = 1,500-2,500 K
• Pressure: P_e = 0.01-0.1 MPa
• Velocity: v_e = 2,500-4,500 m/s
• State: Low enthalpy, high kinetic energy

**Energy Conservation:**

Total enthalpy = Thermal + Kinetic

h_c + ½v_c² = h_e + ½v_e²

Since v_c ≈ 0:
h_c = h_e + ½v_e²

Rearranging:
v_e = √(2(h_c - h_e))

**Using Specific Heat:**

For ideal gas:
h = c_p × T

Therefore:
v_e = √(2c_p(T_c - T_e))

**Isentropic Expansion:**

For ideal expansion (no losses):

T_e/T_c = (P_e/P_c)^((γ-1)/γ)

Where γ = c_p/c_v ≈ 1.2 for combustion products

**Complete Exhaust Velocity Equation:**

v_e = √(2γ/(γ-1) × R/M × T_c × [1-(P_e/P_c)^((γ-1)/γ)])

Where:
• γ = heat capacity ratio
• R = universal gas constant = 8,314 J/(kmol·K)
• M = molecular weight (kg/kmol)
• T_c = chamber temperature (K)
• P_c = chamber pressure (Pa)
• P_e = exit pressure (Pa)

**Example: RP-1/LOX Engine**

Given:
• T_c = 3,600 K
• P_c = 10 MPa = 10,000,000 Pa
• P_e = 0.1 MPa = 100,000 Pa (sea level)
• γ = 1.2
• M = 23 kg/kmol (average for combustion products)

Calculate pressure ratio:
P_e/P_c = 100,000/10,000,000 = 0.01

Calculate temperature ratio:
T_e/T_c = (0.01)^(0.2/1.2) = (0.01)^0.167 = 0.398
T_e = 3,600 × 0.398 = 1,433 K

Calculate exhaust velocity:
v_e = √(2×1.2/0.2 × 8,314/23 × 3,600 × [1-0.398])
v_e = √(12 × 361.5 × 3,600 × 0.602)
v_e = √(9,425,000)
v_e = 3,070 m/s

**Typical RP-1/LOX: 3,000-3,100 m/s** ✓

**Efficiency:**

Actual vs theoretical:
η_nozzle = v_actual/v_ideal

Typical: η = 95-98%

Losses from:
• Boundary layer friction
• Flow divergence
• Incomplete expansion
• Heat transfer`
      },
      {
        title: "📐 Expansion Ratio: The Critical Parameter",
        content: `**Expansion Ratio Definition**

ε = A_e/A_t

Where:
• A_e = nozzle exit area (m²)
• A_t = throat area (m²)
• ε = expansion ratio (dimensionless)

**Physical Meaning:**

Higher ε means:
• More expansion
• Lower exit pressure
• Higher exhaust velocity
• Longer nozzle
• More weight

**Relationship to Pressure:**

From isentropic flow theory:

ε = (1/M_e) × [(2/(γ+1)) × (1 + (γ-1)/2 × M_e²)]^((γ+1)/(2(γ-1)))

Where M_e = exit Mach number

For practical use:
P_e/P_c ≈ (1 + (γ-1)/2)^(-γ/(γ-1)) × ε^(-γ)

**Simplified relationship:**
Higher ε → Lower P_e

**Example Calculations:**

For γ = 1.2, P_c = 10 MPa:

ε = 10 → P_e ≈ 200 kPa
ε = 20 → P_e ≈ 100 kPa
ε = 40 → P_e ≈ 50 kPa
ε = 80 → P_e ≈ 25 kPa
ε = 160 → P_e ≈ 12 kPa

**Optimal Expansion:**

Best performance when:
P_e = P_ambient

**At Sea Level:**
P_ambient = 101 kPa
Optimal ε ≈ 15-20

**In Vacuum:**
P_ambient ≈ 0
Optimal ε = ∞ (impractical!)
Typical ε = 40-120

**Under-Expansion (P_e > P_ambient):**

Gas still has pressure at exit:
• Could expand more
• Lost potential
• Performance penalty: 1-3%

**Over-Expansion (P_e < P_ambient):**

Ambient pressure pushes back:
• Negative pressure thrust
• Flow separation possible
• Performance penalty: 5-15%
• Can cause instability!

**Example: Merlin 1D Comparison**

**Sea Level Version:**
• ε = 16
• P_e ≈ 100 kPa (matched to sea level!)
• Isp = 282 s
• Thrust = 845 kN
• Nozzle length: 1.2 m

**Vacuum Version:**
• ε = 117 (7.3× larger!)
• P_e ≈ 5 kPa
• Isp = 348 s (23% better!)
• Thrust = 934 kN
• Nozzle length: 2.7 m

**Performance gain: 23% Isp improvement!**

**Nozzle Size:**

Exit diameter:
D_e = D_t × √ε

For Merlin 1D:
• Throat diameter: D_t = 0.25 m
• Sea level: D_e = 0.25 × √16 = 1.0 m
• Vacuum: D_e = 0.25 × √117 = 2.7 m

**Vacuum nozzle is 2.7× wider!**

**Weight Penalty:**

Approximate nozzle mass:
m_nozzle ∝ ε^1.5

Doubling ε increases mass by 2.8×

This is why upper stages can use larger nozzles:
• Less thrust needed
• No atmospheric pressure
• Weight less critical`
      }
    ],
    
    keyTakeaways: [
      "Exhaust velocity: v_e = √(2c_p(T_c-T_e)); converts thermal to kinetic energy",
      "Expansion ratio: ε = A_e/A_t; determines exit pressure and performance",
      "Optimal expansion: P_e = P_ambient; changes with altitude",
      "Merlin Vacuum: ε=117 vs sea-level ε=16; 23% Isp improvement",
      "Over-expansion causes flow separation and performance loss",
      "Nozzle efficiency: 95-98%; losses from friction and divergence"
    ],
    
    vocabulary: [
      { term: "Expansion Ratio (ε)", definition: "Ratio of exit area to throat area; determines exit pressure" },
      { term: "Throat", definition: "Narrowest part of nozzle where flow reaches Mach 1" },
      { term: "Isentropic Expansion", definition: "Ideal expansion with no entropy increase; maximum efficiency" },
      { term: "Flow Separation", definition: "Flow detaches from nozzle wall; occurs when over-expanded" },
      { term: "Altitude Compensation", definition: "Matching nozzle expansion to ambient pressure" }
    ],
    
    practiceProblems: [
      {
        id: "18-1",
        problem: "Calculate exhaust velocity for LH₂/LOX: T_c=3,500K, P_c=20MPa, P_e=0.05MPa, γ=1.2, M=12 kg/kmol.",
        solution: "Pressure ratio: P_e/P_c = 0.05/20 = 0.0025\nTemp ratio: (0.0025)^(0.2/1.2) = 0.316\nT_e = 3,500 × 0.316 = 1,106 K\n\nv_e = √(2×1.2/0.2 × 8,314/12 × 3,500 × [1-0.316])\nv_e = √(12 × 693 × 3,500 × 0.684)\nv_e = √(19,900,000) = 4,461 m/s\n\nIsp = 4,461/9.81 = 455 seconds (excellent!)",
        hint: "Use complete exhaust velocity equation with given parameters"
      },
      {
        id: "18-2",
        problem: "Merlin throat diameter D_t=0.25m. Calculate exit diameter for sea-level (ε=16) and vacuum (ε=117) versions.",
        solution: "D_e = D_t × √ε\n\nSea level: D_e = 0.25 × √16 = 0.25 × 4 = 1.0 m\nVacuum: D_e = 0.25 × √117 = 0.25 × 10.8 = 2.7 m\n\nVacuum nozzle is 2.7× wider and much longer!",
        hint: "D_e = D_t × √ε"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q18-1",
          question: "What does expansion ratio (ε) determine?",
          options: [
            "Engine thrust",
            "Exit pressure and exhaust velocity; ε = A_e/A_t",
            "Chamber temperature",
            "Fuel flow rate"
          ],
          correctAnswer: 1,
          explanation: "ε = A_e/A_t determines how much the gas expands. Higher ε → lower P_e → higher v_e. But optimal ε depends on altitude!"
        }
      ]
    }
  },
  
  {
    id: 19,
    title: "Rocket Performance Analysis & Optimization",
    unit: "Rocket Propulsion Physics",
    duration: "50 min",
    introduction: "📊 Performance analysis reveals the complete picture! Understanding thrust coefficients, characteristic velocity, and total impulse lets you compare engines and optimize designs. This is where all the pieces come together!",
    
    sections: [
      {
        title: "⚡ Thrust Equation: Complete Form",
        content: `**Complete Thrust Equation:**

T = ṁ·v_e + (P_e - P_a)·A_e

Two components:
1. **Momentum thrust:** ṁ·v_e
2. **Pressure thrust:** (P_e - P_a)·A_e

**At Sea Level (P_a = 101 kPa):**
• If P_e > P_a: positive pressure thrust
• If P_e < P_a: negative pressure thrust (bad!)
• If P_e = P_a: optimal (pressure thrust = 0)

**In Vacuum (P_a = 0):**
• Pressure thrust always positive
• T_vac = ṁ·v_e + P_e·A_e
• Higher total thrust!

**Example: Merlin 1D**

Sea level:
• ṁ = 280 kg/s
• v_e = 2,766 m/s
• P_e = 100 kPa
• P_a = 101 kPa
• A_e = 0.785 m²

Momentum thrust: 280 × 2,766 = 775 kN
Pressure thrust: (100-101) × 0.785 × 1,000 = -0.8 kN
Total: 774 kN

Vacuum:
• Same ṁ, v_e
• P_a = 0
• P_e = 100 kPa

Momentum thrust: 775 kN
Pressure thrust: 100 × 0.785 × 1,000 = 78.5 kN
Total: 854 kN

**10% more thrust in vacuum!**`
      }
    ],
    
    keyTakeaways: [
      "Complete thrust: T = ṁ·v_e + (P_e-P_a)·A_e; two components",
      "Vacuum thrust 5-15% higher than sea level",
      "Characteristic velocity c* measures combustion efficiency",
      "Thrust coefficient C_F measures nozzle efficiency",
      "Total impulse I_total = ∫T dt; measures total momentum delivered"
    ],
    
    vocabulary: [
      { term: "Momentum Thrust", definition: "ṁ·v_e; thrust from exhaust velocity" },
      { term: "Pressure Thrust", definition: "(P_e-P_a)·A_e; thrust from pressure difference" },
      { term: "Characteristic Velocity (c*)", definition: "Measures combustion efficiency; c* = P_c·A_t/ṁ" },
      { term: "Thrust Coefficient (C_F)", definition: "Measures nozzle efficiency; C_F = T/(P_c·A_t)" },
      { term: "Total Impulse", definition: "∫T dt; total momentum delivered over burn time" }
    ],
    
    practiceProblems: [],
    quiz: { questions: [] }
  }
];

export default unit2Lessons18to19Enhanced;
