// Unit 0: Foundations - Math & Physics for Rockets (MIT-Quality)
// Lessons 0-5: Mathematical foundations for rocket engineering

export const rocketUnit0Complete = [
  {
    id: 0,
    title: "Foundations: The Rocket Equation",
    unit: "Foundations: Math & Physics Bridge",
    duration: "50 min",
    introduction: "🚀 The Rocket Equation is THE most important formula in spaceflight! Discovered by Tsiolkovsky in 1903, this elegant equation reveals why rockets need 95% fuel, why staging is essential, and why getting to orbit is so hard. Master this and you understand the fundamental challenge of space travel!",
    
    sections: [
      {
        title: "🧮 Deriving the Rocket Equation: Momentum Conservation",
        content: `**The Foundation: Conservation of Momentum**

The rocket equation emerges from one of physics' most fundamental principles: momentum is conserved in isolated systems.

**Starting with Newton's Laws:**

Newton's Second Law: F = dp/dt (force equals rate of change of momentum)

For a rocket system:
• Rocket mass: m(t) - decreasing as fuel burns
• Rocket velocity: v(t) - increasing as thrust accelerates
• Exhaust velocity: v_e - relative to rocket (constant)

**The Derivation:**

At time t:
• System momentum: p = m(t) × v(t)

At time t + dt:
• Rocket mass: m - dm (lost fuel)
• Rocket velocity: v + dv (gained speed)
• Exhaust mass: dm
• Exhaust velocity (absolute): v - v_e

**Momentum Conservation:**
Initial momentum = Final momentum

m × v = (m - dm)(v + dv) + dm(v - v_e)

**Expand:**
mv = mv + m·dv - dm·v - dm·dv + dm·v - dm·v_e

**Simplify (dm·dv ≈ 0 for small dt):**
0 = m·dv - dm·v_e

**Rearrange:**
m·dv = v_e·dm

**Divide by m:**
dv = v_e·(dm/m)

**Integrate from initial to final state:**
∫dv = v_e∫(dm/m)

Δv = v_e·ln(m_f/m_0)

**Final Form:**
**Δv = v_e·ln(m_0/m_f)**

This is the Tsiolkovsky Rocket Equation!`
      },
      {
        title: "📊 Understanding Mass Ratio and Fuel Fractions",
        content: `**Mass Ratio: The Key Parameter**

Define: R = m_0/m_f (initial mass / final mass)

Then: Δv = v_e·ln(R)

**Physical Meaning:**
• R = 2: Half the rocket is fuel
• R = 10: 90% of the rocket is fuel
• R = 20: 95% of the rocket is fuel

**Example: Falcon 9 First Stage**

Given:
• m_0 = 549,000 kg (fully fueled)
• m_f = 25,600 kg (empty)
• v_e = 3,050 m/s (RP-1/LOX)

Calculate R:
R = 549,000/25,600 = 21.45

Calculate Δv:
Δv = 3,050 × ln(21.45) = 3,050 × 3.066 = 9,351 m/s

**Fuel Fraction:**
Fuel mass = m_0 - m_f = 523,400 kg
Fuel fraction = 523,400/549,000 = 95.3%

Only 4.7% is structure and payload!

**The Exponential Problem:**

To reach LEO: Δv ≈ 9,500 m/s
With v_e = 3,500 m/s:

R = e^(9,500/3,500) = e^2.71 = 15.0

This means 93.3% must be fuel - barely achievable!

**Why Single-Stage-to-Orbit (SSTO) is Hard:**

Required fuel fraction: 93%+
Typical structure fraction: 10-15%
Payload fraction: <2%

This leaves almost no margin for error!`
      },
      {
        title: "🚀 Staging: Beating the Exponential",
        content: `**The Staging Solution**

Instead of carrying empty tanks to orbit, DROP THEM!

**Two-Stage Rocket Analysis:**

Stage 1:
• Δv_1 = v_e1 × ln(m_0/m_1)
• Drops heavy tanks and engines

Stage 2:
• Δv_2 = v_e2 × ln(m_1/m_f)
• Lighter, more efficient

Total: Δv_total = Δv_1 + Δv_2

**Example: Saturn V to Moon**

**Stage 1 (S-IC):**
• m_0 = 2,970,000 kg
• m_1 = 760,000 kg (after S-IC burnout)
• v_e = 2,580 m/s
• Δv_1 = 2,580 × ln(3.91) = 3,520 m/s

**Stage 2 (S-II):**
• m_1 = 760,000 kg
• m_2 = 190,000 kg
• v_e = 4,200 m/s
• Δv_2 = 4,200 × ln(4.0) = 5,824 m/s

**Stage 3 (S-IVB to orbit):**
• m_2 = 190,000 kg
• m_orbit = 140,000 kg
• v_e = 4,200 m/s
• Δv_3 = 4,200 × ln(1.36) = 1,290 m/s

**Total Δv = 10,634 m/s** ✓ Enough for LEO!

**Payload to LEO: 140,000 kg (4.7% of launch mass)**

**Optimal Staging:**

For N identical stages with mass ratio R per stage:
Total R = R^N

Example: 3 stages, R = 4 each
Total R = 4^3 = 64

Single stage R = 64 would need 98.4% fuel - impossible!
Three stages R = 4 each need 75% fuel per stage - achievable!`
      }
    ],
    
    keyTakeaways: [
      "Rocket equation: Δv = v_e × ln(m_0/m_f) - derived from momentum conservation",
      "Mass ratio R = m_0/m_f determines delta-v capability",
      "Logarithmic relationship creates exponential fuel requirements",
      "LEO requires R ≈ 15 for single stage - barely possible",
      "Staging solves the problem: drop dead weight, multiply mass ratios",
      "Every space mission is constrained by this equation - it's physics, not engineering"
    ],
    
    vocabulary: [
      { term: "Delta-V (Δv)", definition: "Total velocity change capability; measured in m/s; the 'currency' of spaceflight" },
      { term: "Mass Ratio (R)", definition: "R = m_0/m_f; ratio of wet mass to dry mass; determines mission capability" },
      { term: "Exhaust Velocity (v_e)", definition: "Speed of exhaust gases relative to rocket; typically 2,500-4,500 m/s for chemical rockets" },
      { term: "Staging", definition: "Dropping empty tanks/engines during flight to improve mass ratio" },
      { term: "Specific Impulse (Isp)", definition: "Isp = v_e/g_0; engine efficiency metric in seconds" }
    ]
  },

  {
    id: 1,
    title: "Foundations: Orbital Mechanics Math",
    unit: "Foundations: Math & Physics Bridge",
    duration: "55 min",
    introduction: "🪐 Orbital mechanics is cosmic billiards with math! Every orbit follows precise mathematical laws discovered by Kepler 400 years ago. Understanding these equations lets you calculate orbital periods, plan transfers, and navigate the solar system. This is the mathematics that powers every space mission!",
    
    sections: [
      {
        title: "🌍 Kepler's Laws: The Foundation of Orbital Motion",
        content: `**Kepler's Three Laws (1609-1619)**

**First Law: Law of Ellipses**
All orbits are ellipses with the central body at one focus.

Mathematical form:
r = a(1 - e²)/(1 + e·cos(θ))

Where:
• r = distance from focus
• a = semi-major axis
• e = eccentricity (0 = circle, 0 < e < 1 = ellipse)
• θ = true anomaly (angle from periapsis)

**Second Law: Law of Equal Areas**
A line from planet to sun sweeps equal areas in equal times.

This means: **Angular momentum is conserved!**

L = m·v·r = constant

At periapsis (closest): r_p small → v_p large
At apoapsis (farthest): r_a large → v_a small

**Third Law: Law of Periods**
The square of orbital period is proportional to the cube of semi-major axis.

T² ∝ a³

Precise form:
**T² = (4π²/GM)·a³**

Or: **T = 2π√(a³/GM)**

Where:
• T = orbital period (seconds)
• a = semi-major axis (meters)
• G = gravitational constant = 6.674×10⁻¹¹ m³/(kg·s²)
• M = mass of central body (kg)

**Example: ISS Orbital Period**

Given:
• Altitude: 400 km
• Earth radius: 6,371 km
• Semi-major axis: a = 6,771 km = 6.771×10⁶ m
• Earth mass: M = 5.972×10²⁴ kg
• GM = 3.986×10¹⁴ m³/s²

Calculate period:
T = 2π√(a³/GM)
T = 2π√((6.771×10⁶)³/(3.986×10¹⁴))
T = 2π√(3.102×10²⁰/3.986×10¹⁴)
T = 2π√(7.781×10⁵)
T = 2π × 882.1
T = 5,541 seconds = 92.4 minutes

**ISS actual period: 92.9 minutes** ✓

The ISS completes ~15.5 orbits per day!`
      },
      {
        title: "⚡ Vis-Viva Equation: Energy and Velocity",
        content: `**The Vis-Viva Equation**

Derived from energy conservation:
Total Energy = Kinetic + Potential

E = ½mv² - GMm/r = -GMm/(2a)

Solving for velocity:
**v² = GM(2/r - 1/a)**

This is the vis-viva equation - it gives velocity at any point in an orbit!

**Special Cases:**

**Circular Orbit (a = r):**
v_circular = √(GM/r)

**Escape Velocity (a = ∞):**
v_escape = √(2GM/r) = √2 × v_circular

**Parabolic Trajectory (E = 0):**
v_parabolic = √(2GM/r)

**Example: LEO Circular Orbit**

At h = 400 km:
r = 6,771 km = 6.771×10⁶ m

v = √(GM/r) = √(3.986×10¹⁴/6.771×10⁶)
v = √(5.886×10⁷)
v = 7,672 m/s = 7.67 km/s

**Orbital velocity at ISS altitude: 7.67 km/s**

**Example: Escape Velocity from Earth Surface**

r = 6,371 km

v_escape = √(2GM/r) = √(2 × 3.986×10¹⁴/6.371×10⁶)
v_escape = √(1.251×10⁸)
v_escape = 11,186 m/s = 11.2 km/s

**Earth escape velocity: 11.2 km/s**

**Relationship:**
v_escape = √2 × v_circular = 1.414 × v_circular

At any altitude:
• Circular orbit: v_c
• Escape velocity: 1.414 × v_c`
      },
      {
        title: "🚀 Hohmann Transfer: Optimal Orbit Changes",
        content: `**The Hohmann Transfer**

Most fuel-efficient way to change circular orbits!

**Method:**
1. Burn at periapsis to raise apoapsis
2. Coast to apoapsis
3. Burn at apoapsis to circularize

**Mathematics:**

Initial orbit radius: r_1
Final orbit radius: r_2
Transfer orbit semi-major axis: a_t = (r_1 + r_2)/2

**Burn 1 (at r_1):**
Δv_1 = √(GM/r_1) × [√(2r_2/(r_1 + r_2)) - 1]

**Burn 2 (at r_2):**
Δv_2 = √(GM/r_2) × [1 - √(2r_1/(r_1 + r_2))]

**Total:**
Δv_total = Δv_1 + Δv_2

**Example: LEO to GEO Transfer**

Given:
• LEO: r_1 = 6,771 km (400 km altitude)
• GEO: r_2 = 42,164 km (35,786 km altitude)
• GM = 3.986×10⁵ km³/s²

**Burn 1 (LEO):**
v_LEO = √(3.986×10⁵/6,771) = 7.67 km/s

v_transfer_peri = √(3.986×10⁵ × 2×42,164/(6,771×(6,771+42,164)))
v_transfer_peri = √(3.986×10⁵ × 84,328/330,717)
v_transfer_peri = 10.15 km/s

Δv_1 = 10.15 - 7.67 = 2.48 km/s

**Burn 2 (GEO):**
v_GEO = √(3.986×10⁵/42,164) = 3.07 km/s

v_transfer_apo = √(3.986×10⁵ × 2×6,771/(42,164×(6,771+42,164)))
v_transfer_apo = 1.61 km/s

Δv_2 = 3.07 - 1.61 = 1.46 km/s

**Total Δv = 2.48 + 1.46 = 3.94 km/s**

**Transfer Time:**
T_transfer = π√(a_t³/GM)
a_t = (6,771 + 42,164)/2 = 24,468 km
T_transfer = π√(24,468³/3.986×10⁵) = 18,934 seconds = 5.26 hours

**Summary:**
• Δv required: 3.94 km/s
• Transfer time: 5.26 hours
• Most efficient path between orbits!`
      }
    ],
    
    keyTakeaways: [
      "Kepler's Third Law: T² = (4π²/GM)·a³ - determines orbital periods",
      "Vis-viva equation: v² = GM(2/r - 1/a) - gives velocity anywhere in orbit",
      "Circular orbit velocity: v = √(GM/r) - fundamental orbital speed",
      "Escape velocity: v_esc = √(2GM/r) = √2 × v_circular",
      "Hohmann transfer is most efficient for orbit changes",
      "All orbital mechanics follows from Newton's laws + conservation of energy/momentum"
    ],
    
    vocabulary: [
      { term: "Semi-major Axis (a)", definition: "Half the longest diameter of an ellipse; determines orbital energy and period" },
      { term: "Eccentricity (e)", definition: "Measure of how elliptical an orbit is; e=0 is circular, e=1 is parabolic" },
      { term: "Periapsis", definition: "Closest point in orbit to central body; highest velocity point" },
      { term: "Apoapsis", definition: "Farthest point in orbit from central body; lowest velocity point" },
      { term: "Hohmann Transfer", definition: "Most fuel-efficient two-burn maneuver between circular orbits" }
    ]
  },

  {
    id: 2,
    title: "Foundations: Thrust & Gravity Losses",
    unit: "Foundations: Math & Physics Bridge",
    duration: "45 min",
    introduction: "⚡ Rockets get faster as they burn fuel - but gravity fights back! Understanding thrust-to-weight ratio (TWR) reveals why Saturn V needed 7.6 million pounds of thrust to lift 6.5 million pounds. Every second fighting gravity wastes precious delta-v. This is the mathematics of acceleration!",
    
    sections: [
      {
        title: "🚀 Thrust-to-Weight Ratio: The Liftoff Requirement",
        content: `**Thrust-to-Weight Ratio (TWR)**

Definition: TWR = T/(mg)

Where:
• T = thrust force (N)
• m = rocket mass (kg)
• g = 9.81 m/s² (Earth surface gravity)

**Physical Meaning:**
• TWR < 1.0: Thrust < Weight → Cannot lift off
• TWR = 1.0: Thrust = Weight → Hovers (unstable)
• TWR > 1.0: Thrust > Weight → Lifts off!

**Practical Requirements:**
• Minimum: TWR > 1.0
• Safe margin: TWR > 1.2
• Typical rockets: TWR = 1.2 to 1.5 at liftoff

**Why TWR Increases During Flight:**

As fuel burns:
• Mass m DECREASES
• Thrust T stays roughly CONSTANT
• TWR = T/m INCREASES!

**Example: Falcon 9 Liftoff**

Given:
• Total mass: m = 549,000 kg
• Engines: 9 × Merlin 1D
• Thrust per engine: 845 kN
• Total thrust: T = 7,605 kN

Calculate TWR:
Weight: W = mg = 549,000 × 9.81 = 5,386 kN
TWR = 7,605/5,386 = 1.41

Net force: F_net = T - W = 2,219 kN
Acceleration: a = F_net/m = 4.04 m/s² = 0.41g

**At Burnout (162s later):**
• Remaining mass: ~55,000 kg
• Thrust still: 7,605 kN
• TWR = 7,605/540 = 14.1!
• Acceleration: 128 m/s² = 13g!

This is why engines shut down before fuel exhaustion!`
      },
      {
        title: "📉 Gravity Losses: The Hidden Cost",
        content: `**Gravity Loss Concept**

While rocket climbs vertically, gravity pulls down:
• Thrust accelerates rocket: a_thrust = T/m
• Gravity decelerates rocket: a_gravity = -g
• Net acceleration: a_net = T/m - g

**The Loss:**
Every second spent climbing vertically wastes delta-v fighting gravity!

Δv_loss = g × t_burn

**Example: Vertical Burn**

If rocket burns for 150 seconds vertically:
Δv_loss = 9.81 × 150 = 1,472 m/s

That's 1.5 km/s wasted just fighting gravity!

**Minimizing Gravity Losses:**

Solution: **Gravity Turn**
• Start vertical (clear tower)
• Gradually pitch over
• Follow prograde (velocity vector)
• Minimize time spent vertical

**Optimal Trajectory:**
• Vertical: ~10 seconds
• Gravity turn: ~140 seconds
• Horizontal at burnout

Typical gravity loss: 1,200-1,500 m/s (vs 9,500 m/s total)

**Drag Losses:**
Atmosphere also steals delta-v!

Typical drag loss: 100-300 m/s

**Total Losses:**
• Gravity: ~1,400 m/s
• Drag: ~200 m/s
• Total: ~1,600 m/s

**LEO Budget:**
• Orbital velocity: 7,800 m/s
• Gravity losses: 1,400 m/s
• Drag losses: 200 m/s
• **Total Δv needed: 9,400 m/s**

This is why LEO requires ~9.5 km/s delta-v!`
      },
      {
        title: "⚙️ Acceleration Profile During Ascent",
        content: `**Changing Acceleration**

Rocket equation for acceleration:
a(t) = T/m(t) - g

As fuel burns:
m(t) = m_0 - ṁ·t

Therefore:
a(t) = T/(m_0 - ṁ·t) - g

Acceleration INCREASES with time!

**Example: Saturn V First Stage**

Given:
• Initial mass: m_0 = 2,970,000 kg
• Thrust: T = 33,300 kN
• Burn time: 168 seconds
• Fuel flow: ṁ = 13,000 kg/s

**At Liftoff (t=0):**
a_0 = 33,300,000/2,970,000 - 9.81
a_0 = 11.21 - 9.81 = 1.40 m/s² = 0.14g
TWR = 1.14

**At Burnout (t=168s):**
m_f = 2,970,000 - 13,000×168 = 786,000 kg
a_f = 33,300,000/786,000 - 9.81
a_f = 42.37 - 9.81 = 32.56 m/s² = 3.32g
TWR = 4.32

**Acceleration increased by 23× during burn!**

**Max Q Throttling:**

Problem: Dynamic pressure q = ½ρv² increases during ascent
• Velocity v increases
• Density ρ decreases with altitude
• Peak occurs around 10-15 km altitude

Solution: Throttle engines down at max-Q
• Falcon 9: throttles to 70% at max-Q
• Reduces structural loads
• Prevents aerodynamic breakup`
      }
    ],
    
    keyTakeaways: [
      "TWR = T/(mg) must exceed 1.0 for liftoff; typical rockets have TWR = 1.2-1.5",
      "TWR increases during flight as mass decreases - can reach 10-15× initial value",
      "Gravity losses: Δv_loss = g×t_burn ≈ 1,400 m/s for typical ascent",
      "Gravity turn minimizes losses by pitching over early",
      "Total LEO Δv ≈ 9,400 m/s (7,800 orbital + 1,600 losses)",
      "Engines must throttle at max-Q to prevent structural failure"
    ],
    
    vocabulary: [
      { term: "Thrust-to-Weight Ratio (TWR)", definition: "Ratio of thrust to weight; must exceed 1.0 for vertical liftoff" },
      { term: "Gravity Loss", definition: "Delta-v wasted fighting gravity during ascent; ~1,400 m/s typical" },
      { term: "Drag Loss", definition: "Delta-v lost to atmospheric drag; ~200 m/s typical" },
      { term: "Max-Q", definition: "Point of maximum dynamic pressure during ascent; requires throttling" },
      { term: "Gravity Turn", definition: "Optimal ascent trajectory that minimizes gravity losses" }
    ]
  },

  {
    id: 3,
    title: "Foundations: Nozzle Math & Thermodynamics",
    unit: "Foundations: Math & Physics Bridge",
    duration: "50 min",
    introduction: "🌪️ Nozzles are where thermodynamics becomes thrust! Hot gases at 3,600K expand through the nozzle, converting thermal energy to kinetic energy. Understanding Isp (specific impulse) reveals why hydrogen engines are efficient but need huge tanks. This is the mathematics of rocket performance!",
    
    sections: [
      {
        title: "🔥 Thermodynamics of Rocket Engines",
        content: `**Energy Conversion in Nozzles**

Combustion chamber:
• Temperature: T_c ≈ 3,000-3,600 K
• Pressure: P_c ≈ 5-20 MPa
• Gas velocity: v_c ≈ 0 (nearly stationary)

Nozzle exit:
• Temperature: T_e ≈ 1,500-2,500 K
• Pressure: P_e ≈ 0.01-0.1 MPa
• Gas velocity: v_e ≈ 2,500-4,500 m/s

**Energy Conservation:**
Thermal energy → Kinetic energy

h_c = h_e + ½v_e²

Where h = enthalpy (J/kg)

**Ideal Exhaust Velocity:**

v_e = √(2c_p T_c [1 - (P_e/P_c)^((γ-1)/γ)])

Where:
• c_p = specific heat at constant pressure
• γ = heat capacity ratio (≈1.2 for combustion products)
• T_c = chamber temperature
• P_c = chamber pressure
• P_e = exit pressure

**Simplified Form:**

For ideal expansion (P_e = P_ambient):

v_e ≈ √(2γ/(γ-1) × R/M × T_c × [1-(P_e/P_c)^((γ-1)/γ)])

**Example: RP-1/LOX Engine**

Given:
• T_c = 3,600 K
• P_c = 10 MPa
• P_e = 0.1 MPa (sea level)
• γ = 1.2
• M = 23 g/mol (average molecular weight)
• R = 8,314 J/(kmol·K)

Calculate v_e:
v_e = √(2×1.2/0.2 × 8,314/23 × 3,600 × [1-(0.1/10)^(0.2/1.2)])
v_e = √(12 × 361.5 × 3,600 × [1-0.398])
v_e = √(12 × 361.5 × 3,600 × 0.602)
v_e = √(9,425,000)
v_e ≈ 3,070 m/s

**Typical RP-1/LOX v_e: 3,000-3,100 m/s** ✓`
      },
      {
        title: "📊 Specific Impulse: The Efficiency Metric",
        content: `**Specific Impulse (Isp)**

Definition: Isp = v_e/g_0

Where:
• v_e = exhaust velocity (m/s)
• g_0 = 9.81 m/s² (standard gravity)
• Isp measured in seconds

**Physical Meaning:**
Isp = seconds of thrust per kg of propellant

Higher Isp = more efficient engine

**Alternative Definition:**
Isp = T/(ṁ·g_0)

Where:
• T = thrust (N)
• ṁ = propellant mass flow rate (kg/s)

**Propellant Comparison:**

**Solid Propellants:**
• Isp = 250-280 s
• v_e = 2,450-2,750 m/s
• Simple, reliable, can't throttle

**RP-1/LOX (Kerosene):**
• Isp = 300-310 s (sea level)
• Isp = 340-360 s (vacuum)
• v_e = 3,000-3,500 m/s
• Dense, storable, good performance

**LH₂/LOX (Hydrogen):**
• Isp = 380-420 s (sea level)
• Isp = 450-465 s (vacuum)
• v_e = 4,200-4,560 m/s
• Best performance, but huge tanks

**Methane/LOX:**
• Isp = 330-350 s (sea level)
• Isp = 370-380 s (vacuum)
• v_e = 3,300-3,700 m/s
• Good compromise, Mars-producible

**Example: Comparing Engines**

Mission: Deliver 10,000 kg to LEO (Δv = 9,500 m/s)

**Using RP-1/LOX (Isp = 350s):**
v_e = 350 × 9.81 = 3,434 m/s
R = e^(9,500/3,434) = e^2.77 = 15.9
m_0 = 10,000 × 15.9 = 159,000 kg
Fuel needed: 149,000 kg

**Using LH₂/LOX (Isp = 460s):**
v_e = 460 × 9.81 = 4,513 m/s
R = e^(9,500/4,513) = e^2.11 = 8.2
m_0 = 10,000 × 8.2 = 82,000 kg
Fuel needed: 72,000 kg

**Hydrogen saves 77,000 kg of fuel!**

But:
• RP-1 density: 820 kg/m³
• LH₂ density: 71 kg/m³

RP-1 volume: 149,000/820 = 182 m³
LH₂ volume: 72,000/71 = 1,014 m³

**Hydrogen needs 5.6× larger tanks!**`
      },
      {
        title: "🌪️ Nozzle Expansion Ratio",
        content: `**Expansion Ratio (ε)**

Definition: ε = A_e/A_t

Where:
• A_e = nozzle exit area
• A_t = throat area

**Relationship to Pressure:**

Higher ε → Lower P_e → Higher v_e

But: Optimal ε depends on ambient pressure!

**Optimal Expansion:**
P_e = P_ambient

**Under-expanded (P_e > P_ambient):**
• Gases still have pressure at exit
• Could expand more
• Lost performance

**Over-expanded (P_e < P_ambient):**
• Ambient pressure pushes back
• Flow separation possible
• Lost performance, instability

**Altitude Compensation:**

Sea level: P_ambient = 101 kPa
• Optimal ε ≈ 15-20
• Merlin 1D: ε = 16

Vacuum: P_ambient ≈ 0
• Optimal ε = ∞ (impractical)
• Typical ε = 40-100
• Merlin 1D Vacuum: ε = 117

**Example: Merlin 1D Performance**

**Sea Level Version:**
• ε = 16
• P_e ≈ 100 kPa (matched)
• Isp = 282 s
• Thrust = 845 kN

**Vacuum Version:**
• ε = 117
• P_e ≈ 5 kPa
• Isp = 348 s
• Thrust = 934 kN

**23% more Isp in vacuum!**

**Thrust Equation (Complete):**

T = ṁ·v_e + (P_e - P_a)·A_e

Two components:
1. Momentum thrust: ṁ·v_e
2. Pressure thrust: (P_e - P_a)·A_e

At sea level: P_a = 101 kPa
• If P_e > P_a: positive pressure thrust
• If P_e < P_a: negative pressure thrust (bad!)

In vacuum: P_a = 0
• Pressure thrust always positive
• Higher total thrust`
      }
    ],
    
    keyTakeaways: [
      "Exhaust velocity: v_e = √(2c_p T_c [1-(P_e/P_c)^((γ-1)/γ)]) - from thermodynamics",
      "Specific impulse: Isp = v_e/g_0 - efficiency metric in seconds",
      "Higher Isp = more efficient, but trade-offs exist (tank size, complexity)",
      "Expansion ratio ε = A_e/A_t determines pressure at exit",
      "Optimal expansion: P_e = P_ambient (changes with altitude)",
      "Complete thrust: T = ṁ·v_e + (P_e-P_a)·A_e - momentum + pressure"
    ],
    
    vocabulary: [
      { term: "Specific Impulse (Isp)", definition: "Engine efficiency metric; Isp = v_e/g_0; measured in seconds" },
      { term: "Exhaust Velocity (v_e)", definition: "Speed of exhaust gases; typically 2,500-4,500 m/s for chemical rockets" },
      { term: "Expansion Ratio (ε)", definition: "Ratio of exit area to throat area; determines exit pressure" },
      { term: "Chamber Pressure (P_c)", definition: "Pressure in combustion chamber; typically 5-20 MPa" },
      { term: "Throat", definition: "Narrowest part of nozzle where flow reaches Mach 1" }
    ]
  },

  {
    id: 4,
    title: "Foundations: Trajectory Optimization",
    unit: "Foundations: Math & Physics Bridge",
    duration: "50 min",
    introduction: "🎯 The gravity turn is rocket science elegance! Instead of fighting gravity, rockets follow a natural curved path that minimizes losses. Understanding launch windows reveals why Mars missions launch every 26 months and why Cape Canaveral is perfect for ISS launches. This is the mathematics of optimal trajectories!",
    
    sections: [
      {
        title: "🌀 The Gravity Turn: Natural Trajectory",
        content: `**Gravity Turn Concept**

Instead of flying straight up then turning horizontal:
• Start vertical (clear launch tower)
• Pitch over slightly (~5-10°)
• Let gravity naturally curve the trajectory
• Follow prograde (velocity vector)
• Minimize steering losses

**Why It Works:**

Vertical flight:
• Fights gravity directly
• High gravity losses
• Wastes delta-v

Gravity turn:
• Gravity provides free steering
• Minimizes angle of attack
• Reduces drag and structural loads
• Optimal trajectory emerges naturally

**Mathematics:**

Flight path angle: γ = arctan(v_y/v_x)

Where:
• v_y = vertical velocity component
• v_x = horizontal velocity component

**Optimal Profile:**
• t = 0-10s: γ = 90° (vertical)
• t = 10-30s: γ decreases to 80°
• t = 30-100s: γ decreases to 45°
• t = 100-150s: γ decreases to 0° (horizontal)

**Example: Falcon 9 Ascent**

**Phase 1 (0-10s):**
• Vertical climb
• Clear tower and pad
• γ = 90°

**Phase 2 (10-60s):**
• Pitch program starts
• Gradual turn eastward
• γ decreases from 90° to 60°

**Phase 3 (60-150s):**
• Gravity turn
• Follow prograde
• γ decreases from 60° to 20°

**Phase 4 (150-162s):**
• Nearly horizontal
• γ ≈ 10-20°
• MECO (Main Engine Cutoff)

**Result:**
• Gravity losses: ~1,400 m/s
• Drag losses: ~150 m/s
• Steering losses: ~50 m/s
• Total losses: ~1,600 m/s

Compare to vertical-then-turn:
• Would waste ~2,500 m/s!
• Gravity turn saves ~900 m/s`
      },
      {
        title: "🌍 Launch Azimuth and Inclination",
        content: `**Orbital Inclination**

Inclination (i) = angle between orbital plane and equator

**Constraints:**
• Minimum inclination = launch latitude
• Cannot launch into lower inclination without plane change
• Plane changes are EXPENSIVE (Δv = 2v·sin(Δi/2))

**Launch Azimuth (β)**

Azimuth = compass heading at launch

**Relationship:**
sin(i) = cos(β) × cos(φ)

Where:
• i = orbital inclination
• β = launch azimuth
• φ = launch latitude

**Special Cases:**

**Due East (β = 90°):**
i = φ (minimum inclination)
Maximum Earth rotation benefit

**Due West (β = 270°):**
i = φ (minimum inclination)
Loses Earth rotation benefit

**Due North (β = 0°):**
i = 90° (polar orbit)
No Earth rotation benefit

**Example: Cape Canaveral to ISS**

Given:
• Launch site: 28.5°N
• ISS inclination: 51.6°
• Find launch azimuth

Using: sin(51.6°) = cos(β) × cos(28.5°)
0.783 = cos(β) × 0.877
cos(β) = 0.893
β = 26.7° or 153.3°

**Two launch opportunities per day:**
• Northeasterly: β = 26.7°
• Southeasterly: β = 153.3°

**Earth Rotation Benefit:**

Earth rotates at equator: v_rot = 465 m/s
At latitude φ: v_rot = 465 × cos(φ)

Cape Canaveral (28.5°N):
v_rot = 465 × cos(28.5°) = 408 m/s

**Eastward launch:**
Free 408 m/s delta-v!

**Westward launch:**
Must overcome 408 m/s
Penalty: 816 m/s total

This is why almost all launches go eastward!`
      },
      {
        title: "🚀 Launch Windows: Timing is Everything",
        content: `**Launch Window Concept**

Launch window = time period when launch can occur to reach target orbit

**Types:**

**1. Instantaneous Window:**
• Only one exact moment works
• Example: ISS rendezvous
• Miss it by 1 second = miss the orbit

**2. Daily Window:**
• Several minutes to hours per day
• Example: GEO satellites
• Any time works, but some better than others

**3. Planetary Window:**
• Weeks to months every few years
• Example: Mars missions
• Determined by planetary alignment

**ISS Launch Window:**

ISS orbit plane rotates under Earth:
• Period: 92.9 minutes
• Earth rotates: 15°/hour
• Orbital plane shifts: 22.5° per orbit

Launch site passes through plane:
• Twice per day
• Window: ~5-10 minutes each
• Miss it = wait 12 hours

**Interplanetary Windows:**

**Mars Transfer:**
• Occurs every 26 months
• Window duration: ~30 days
• Optimal day: ~3 days
• Miss it = wait 26 months!

**Why 26 months?**

Synodic period: T_syn = 1/(1/T_E - 1/T_M)

Where:
• T_E = Earth year = 365 days
• T_M = Mars year = 687 days

T_syn = 1/(1/365 - 1/687)
T_syn = 1/(0.00274 - 0.00146)
T_syn = 1/0.00128
T_syn = 780 days = 26 months

**Hohmann Transfer to Mars:**

Δv from LEO: ~3,600 m/s
Transfer time: ~260 days

**Launch Windows 2024-2030:**
• 2024: September
• 2026: November
• 2028: December
• 2030: January

**Venus Transfer:**
• Every 19 months
• Shorter synodic period
• More frequent opportunities

**Outer Planets:**
• Jupiter: every 13 months
• Saturn: every 12.5 months
• More frequent but need more Δv`
      }
    ],
    
    keyTakeaways: [
      "Gravity turn minimizes losses by following natural curved trajectory",
      "Minimum orbital inclination equals launch latitude",
      "Eastward launches gain ~400 m/s from Earth's rotation",
      "Launch azimuth: sin(i) = cos(β)×cos(φ) determines heading",
      "ISS has instantaneous windows twice daily",
      "Mars windows occur every 26 months due to synodic period"
    ],
    
    vocabulary: [
      { term: "Gravity Turn", definition: "Optimal ascent trajectory that follows prograde, minimizing losses" },
      { term: "Flight Path Angle (γ)", definition: "Angle between velocity vector and horizontal; γ=90° is vertical" },
      { term: "Inclination (i)", definition: "Angle between orbital plane and equator; minimum = launch latitude" },
      { term: "Launch Azimuth (β)", definition: "Compass heading at launch; determines orbital inclination" },
      { term: "Synodic Period", definition: "Time between planetary alignments; determines launch windows" }
    ]
  },

  {
    id: 5,
    title: "Foundations: Structural Loads & Mass Budgets",
    unit: "Foundations: Math & Physics Bridge",
    duration: "50 min",
    introduction: "🏗️ Every kilogram of structure is one less kilogram of payload! Rockets experience 5g acceleration and must survive extreme loads while being as light as possible. Understanding structural mass fraction reveals why modern rockets are engineering marvels - 95% fuel, 5% everything else. This is the mathematics of optimization!",
    
    sections: [
      {
        title: "⚙️ Structural Loads: Forces on Rockets",
        content: `**Types of Loads**

**1. Axial Loads (Compression):**
From thrust and acceleration
F_axial = m × a_max

**2. Bending Loads:**
From aerodynamic forces and wind
M_bending = F_aero × L

**3. Internal Pressure:**
From propellant tanks
P_internal = ρ × g × h + P_ullage

**4. Thermal Loads:**
From aerodynamic heating and cryogenics
ΔT = 100-1,500 K

**Axial Load Analysis:**

Maximum load occurs at base during max acceleration:
F_max = m_total × a_max

**Example: Falcon 9 First Stage**

Given:
• Total mass: m = 549,000 kg
• Max acceleration: a_max = 5g = 49 m/s²

Calculate axial load:
F_axial = 549,000 × 49 = 26,900,000 N = 26.9 MN

This force must be carried by the structure!

**Stress in Tank Walls:**

Stress: σ = F/A

For cylindrical tank:
σ_axial = F/(π × D × t)

Where:
• D = tank diameter
• t = wall thickness

**Example: Falcon 9 LOX Tank**

Given:
• Diameter: D = 3.66 m
• Load: F = 26.9 MN
• Material: Aluminum 2219-T87
• Yield strength: σ_yield = 400 MPa
• Safety factor: SF = 1.4

Required stress:
σ_allow = σ_yield/SF = 400/1.4 = 286 MPa

Required area:
A = F/σ_allow = 26,900,000/286,000,000 = 0.094 m²

Required thickness:
t = A/(π×D) = 0.094/(π×3.66) = 0.0082 m = 8.2 mm

**Actual Falcon 9 tank thickness: ~4-8 mm** ✓

Thinner at top (less load), thicker at bottom (more load)`
      },
      {
        title: "📊 Mass Budget: Every Gram Counts",
        content: `**Structural Mass Fraction**

Definition: λ = m_structure/m_total

**Components:**
• Tanks and airframe
• Engines
• Avionics and systems
• Plumbing and wiring
• Thermal protection

**Typical Values:**

**First Stage:**
• Structure: 4-6% of total mass
• Engines: 2-3%
• Systems: 1-2%
• Total dry mass: 7-11%
• Propellant: 89-93%

**Upper Stage:**
• Structure: 6-10% (lighter loads)
• Engine: 1-2%
• Systems: 2-3%
• Total dry mass: 9-15%
• Propellant: 85-91%

**Example: Falcon 9 First Stage Mass Budget**

Total mass: 549,000 kg

**Propellant:**
• RP-1: 123,500 kg
• LOX: 395,700 kg
• Total: 519,200 kg (94.6%)

**Structure:**
• Tanks: 12,000 kg (2.2%)
• Interstage: 2,000 kg (0.4%)
• Landing legs: 2,100 kg (0.4%)
• Grid fins: 800 kg (0.1%)
• Total: 16,900 kg (3.1%)

**Engines:**
• 9× Merlin 1D: 9×470 kg = 4,230 kg (0.8%)

**Systems:**
• Avionics: 500 kg (0.1%)
• Pneumatics: 300 kg (0.05%)
• Wiring: 200 kg (0.04%)
• Misc: 1,000 kg (0.2%)
• Total: 2,000 kg (0.4%)

**Residuals:**
• Trapped propellant: 6,670 kg (1.2%)

**Total Dry Mass: 29,800 kg (5.4%)**

**Payload Fraction:**

For complete vehicle:
• Launch mass: 549,000 kg
• Payload to LEO: 22,800 kg
• Payload fraction: 4.2%

This is typical for modern rockets!

**Mass Growth Problem:**

Adding 1 kg of payload requires:
• More fuel to lift it
• Stronger structure to hold fuel
• More fuel to lift structure
• Exponential spiral!

**Example:**
Adding 1,000 kg payload with R = 15:
• Requires 15,000 kg more at liftoff
• Structure increases by 1,500 kg
• Actually need 16,500 kg more
• Which needs more structure...

Final result: ~18,000 kg increase for 1,000 kg payload!`
      },
      {
        title: "🔧 Optimization: The Engineering Challenge",
        content: `**Structural Efficiency**

Goal: Minimize mass while maintaining strength

**Key Metrics:**

**1. Specific Strength:**
σ_specific = σ_yield/ρ

Higher is better!

**Material Comparison:**

**Aluminum 2219-T87:**
• Density: ρ = 2,840 kg/m³
• Yield: σ = 400 MPa
• Specific: 141 kPa·m³/kg

**Aluminum-Lithium 2195:**
• Density: ρ = 2,700 kg/m³
• Yield: σ = 460 MPa
• Specific: 170 kPa·m³/kg
• 20% better than standard aluminum!

**Carbon Fiber (CFRP):**
• Density: ρ = 1,600 kg/m³
• Strength: σ = 600 MPa
• Specific: 375 kPa·m³/kg
• 2.7× better than aluminum!

**But:**
• CFRP is expensive
• Difficult to manufacture
• Can't hold cryogenics easily
• Used for fairings, interstages

**2. Pressure Vessel Efficiency:**

For cylindrical tank under pressure:

Hoop stress: σ_hoop = P×r/t
Axial stress: σ_axial = P×r/(2t)

Mass: m = ρ × 2πr × L × t

Minimize m while maintaining σ < σ_allow

**Optimal Design:**
• Thin walls (limited by buckling)
• Stiffening rings
• Isogrid structure
• Common bulkhead (shared tank wall)

**Example: Space Shuttle ET**

Used isogrid structure:
• Machined aluminum with triangular pattern
• 50% lighter than solid wall
• Same strength
• Saved 3,000 kg!

**Falcon 9 Innovations:**
• Friction stir welding (stronger joints)
• Aluminum-lithium alloy (lighter)
• Densified propellants (more fuel, same tank)
• Common bulkhead (saves one tank wall)

**Starship Innovations:**
• Stainless steel (cheaper, handles heat)
• Heavier than aluminum BUT:
  - No thermal protection needed
  - Stronger at cryogenic temps
  - Easier to manufacture
  - Net benefit for reusability!

**The Ultimate Trade:**

Every design decision affects:
• Mass
• Cost
• Reliability
• Performance
• Manufacturability

Optimization is finding the best balance!`
      }
    ],
    
    keyTakeaways: [
      "Axial loads: F = m×a_max; maximum at base during max acceleration",
      "Structural mass fraction: λ = 4-6% for first stage, 6-10% for upper stage",
      "Every kg of payload requires ~15-20 kg at liftoff (exponential!)",
      "Specific strength: σ/ρ determines material efficiency",
      "Carbon fiber is 2.7× better than aluminum but harder to use",
      "Optimization balances mass, cost, reliability, and manufacturability"
    ],
    
    vocabulary: [
      { term: "Structural Mass Fraction (λ)", definition: "Ratio of structure mass to total mass; typically 4-10%" },
      { term: "Specific Strength", definition: "Strength-to-weight ratio; σ/ρ; higher is better" },
      { term: "Axial Load", definition: "Compressive force along rocket axis; F = m×a" },
      { term: "Isogrid", definition: "Machined structure with triangular pattern; 50% lighter than solid" },
      { term: "Common Bulkhead", definition: "Shared wall between tanks; saves mass of one bulkhead" }
    ]
  }
];

export default rocketUnit0Complete;
