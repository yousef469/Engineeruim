// Unit 3: Orbital Mechanics - ENHANCED
// Lessons 20-21: Kepler's Laws and Hohmann Transfers with MIT-quality depth

export const unit3Enhanced20to21 = [
  {
    id: 20,
    title: "Kepler's Laws & Orbital Energy",
    unit: "Orbital Mechanics",
    duration: "55 min",
    introduction: "🪐 Kepler's Laws are the foundation of spaceflight! Discovered 400 years ago, these three elegant laws govern every orbit from ISS to interplanetary missions. Understanding the vis-viva equation reveals why orbital velocity at ISS is 7.7 km/s while GEO satellites cruise at only 3.1 km/s. This is the mathematics that powers space navigation!",
    
    sections: [
      {
        title: "📐 Kepler's Three Laws: The Foundation",
        content: `**First Law: Law of Ellipses**

All orbits are ellipses with the central body at one focus.

**Ellipse Equation:**
r(θ) = a(1 - e²)/(1 + e·cos(θ))

Where:
• r = distance from focus (m)
• a = semi-major axis (m)
• e = eccentricity (0 ≤ e < 1)
• θ = true anomaly (angle from periapsis)

**Special Cases:**
• e = 0: Perfect circle (r = a always)
• e = 0.5: Moderate ellipse
• e → 1: Highly elliptical
• e = 1: Parabola (escape trajectory)
• e > 1: Hyperbola (interplanetary)

**Periapsis and Apoapsis:**
r_p = a(1 - e)  (closest point)
r_a = a(1 + e)  (farthest point)

**Example: Molniya Orbit**
• a = 26,554 km
• e = 0.737 (highly elliptical!)
• r_p = a(1-e) = 26,554 × 0.263 = 6,984 km (500 km altitude)
• r_a = a(1+e) = 26,554 × 1.737 = 46,120 km (39,749 km altitude)

**Second Law: Law of Equal Areas**

A line from planet to sun sweeps equal areas in equal times.

**Physical Meaning:** Angular momentum is conserved!

L = m × v × r = constant

**Consequences:**
At periapsis: small r → large v
At apoapsis: large r → small v

**Velocity Relationship:**
v_p × r_p = v_a × r_a

**Example: Molniya Orbit**
If v_p = 10,000 m/s at r_p = 6,984 km:
v_a = v_p × (r_p/r_a) = 10,000 × (6,984/46,120) = 1,514 m/s

**6.6× slower at apoapsis!**

**Third Law: Law of Periods**

The square of orbital period is proportional to the cube of semi-major axis.

T² = (4π²/μ) × a³

Or: T = 2π√(a³/μ)

Where:
• T = orbital period (seconds)
• a = semi-major axis (meters)
• μ = GM = gravitational parameter
• For Earth: μ = 3.986×10¹⁴ m³/s²

**Example: ISS Orbit**
• Altitude: 400 km
• a = 6,371 + 400 = 6,771 km = 6.771×10⁶ m

T = 2π√((6.771×10⁶)³/(3.986×10¹⁴))
T = 2π√(3.102×10²⁰/3.986×10¹⁴)
T = 2π√(7.781×10⁵)
T = 2π × 882.1 = 5,541 seconds = 92.4 minutes

**ISS actual period: 92.9 minutes** ✓

**Example: GEO Orbit**
Want T = 24 hours = 86,400 seconds

a³ = T² × μ/(4π²)
a³ = 86,400² × 3.986×10¹⁴/(4π²)
a³ = 7.496×10⁹ × 3.986×10¹⁴/39.478
a³ = 7.571×10²² m³
a = 42,164 km

Altitude = 42,164 - 6,371 = 35,793 km

**GEO altitude: 35,786 km** ✓ (close!)`
      },
      {
        title: "⚡ Vis-Viva Equation: Energy and Velocity",
        content: `**Orbital Energy**

Total specific energy (energy per unit mass):
ε = v²/2 - μ/r

Where:
• ε = specific energy (J/kg)
• v = velocity (m/s)
• r = distance from center (m)
• μ = GM

**For Elliptical Orbits:**
ε = -μ/(2a)

**Key Insight:** Energy depends ONLY on semi-major axis!

**Vis-Viva Equation**

Combining energy and position:
v² = μ(2/r - 1/a)

Or: v = √(μ(2/r - 1/a))

**This is THE fundamental equation of orbital mechanics!**

**Special Cases:**

**Circular Orbit (a = r):**
v_circular = √(μ/r)

**Escape Trajectory (a = ∞):**
v_escape = √(2μ/r) = √2 × v_circular

**Parabolic (ε = 0):**
v_parabolic = √(2μ/r)

**Example: LEO Circular Orbit**
At h = 400 km:
r = 6,771 km = 6.771×10⁶ m

v = √(μ/r) = √(3.986×10¹⁴/6.771×10⁶)
v = √(5.886×10⁷) = 7,672 m/s

**ISS velocity: 7.67 km/s**

**Example: GEO Circular Orbit**
At r = 42,164 km:

v = √(3.986×10¹⁴/42.164×10⁶)
v = √(9.454×10⁶) = 3,075 m/s

**GEO velocity: 3.07 km/s**

**2.5× slower than LEO!**

**Example: Elliptical Orbit Velocities**

Molniya orbit:
• a = 26,554 km
• r_p = 6,984 km
• r_a = 46,120 km

At periapsis:
v_p = √(μ(2/r_p - 1/a))
v_p = √(3.986×10¹⁴ × (2/6.984×10⁶ - 1/26.554×10⁶))
v_p = √(3.986×10¹⁴ × (2.863×10⁻⁷ - 3.766×10⁻⁸))
v_p = √(3.986×10¹⁴ × 2.486×10⁻⁷)
v_p = √(9.910×10⁷) = 9,955 m/s

At apoapsis:
v_a = √(μ(2/r_a - 1/a))
v_a = √(3.986×10¹⁴ × (2/46.120×10⁶ - 1/26.554×10⁶))
v_a = √(3.986×10¹⁴ × (4.337×10⁻⁸ - 3.766×10⁻⁸))
v_a = √(3.986×10¹⁴ × 5.71×10⁻⁹)
v_a = √(2.276×10⁶) = 1,509 m/s

**Ratio: v_p/v_a = 6.6×**

**Escape Velocity**

From Earth surface:
r = 6,371 km

v_escape = √(2μ/r) = √(2 × 3.986×10¹⁴/6.371×10⁶)
v_escape = √(1.251×10⁸) = 11,186 m/s

**Earth escape velocity: 11.2 km/s**

**Relationship:**
v_escape = √2 × v_circular = 1.414 × v_circular

At any altitude:
• Circular orbit: v_c
• Escape velocity: 1.414 × v_c`
      }
    ],
    
    keyTakeaways: [
      "Kepler's Third Law: T² = (4π²/μ)·a³; determines orbital periods",
      "Vis-viva equation: v² = μ(2/r - 1/a); gives velocity anywhere in orbit",
      "Circular orbit velocity: v = √(μ/r); decreases with altitude",
      "Escape velocity: v_esc = √(2μ/r) = √2 × v_circular at any altitude",
      "Orbital energy: ε = -μ/(2a); depends only on semi-major axis",
      "Angular momentum conservation: v_p·r_p = v_a·r_a; explains speed variation"
    ],
    
    vocabulary: [
      { term: "Semi-major Axis (a)", definition: "Half longest diameter of ellipse; determines orbital energy and period" },
      { term: "Eccentricity (e)", definition: "Shape parameter; e=0 circle, 0<e<1 ellipse, e=1 parabola" },
      { term: "Periapsis", definition: "Closest point in orbit; highest velocity" },
      { term: "Apoapsis", definition: "Farthest point in orbit; lowest velocity" },
      { term: "Vis-Viva Equation", definition: "v² = μ(2/r - 1/a); fundamental velocity equation" },
      { term: "Specific Energy (ε)", definition: "Energy per unit mass; ε = -μ/(2a) for elliptical orbits" }
    ],
    
    practiceProblems: [
      {
        id: "20-1",
        problem: "Calculate orbital period for GPS satellite at 20,200 km altitude. (μ = 3.986×10¹⁴ m³/s²)",
        solution: "a = 6,371 + 20,200 = 26,571 km = 26.571×10⁶ m\nT = 2π√(a³/μ) = 2π√((26.571×10⁶)³/(3.986×10¹⁴))\nT = 2π√(1.876×10²²/3.986×10¹⁴) = 2π√(4.707×10⁷)\nT = 2π × 6,862 = 43,082 seconds = 11.97 hours ≈ 12 hours\n\nGPS satellites complete 2 orbits per day!",
        hint: "Use Kepler's Third Law: T = 2π√(a³/μ)"
      },
      {
        id: "20-2",
        problem: "Calculate velocity at ISS altitude (400 km) and compare to escape velocity.",
        solution: "r = 6,771 km = 6.771×10⁶ m\nv_circular = √(μ/r) = √(3.986×10¹⁴/6.771×10⁶) = 7,672 m/s\nv_escape = √2 × v_circular = 1.414 × 7,672 = 10,848 m/s\n\nTo escape from ISS altitude: need 10.8 km/s\nISS orbits at: 7.7 km/s\nDifference: 3.1 km/s more needed to escape!",
        hint: "v_circular = √(μ/r), v_escape = √2 × v_circular"
      },
      {
        id: "20-3",
        problem: "Elliptical orbit: r_p = 7,000 km, r_a = 40,000 km. Calculate a, e, v_p, and v_a.",
        solution: "a = (r_p + r_a)/2 = (7,000 + 40,000)/2 = 23,500 km\ne = (r_a - r_p)/(r_a + r_p) = 33,000/47,000 = 0.702\n\nv_p = √(μ(2/r_p - 1/a)) = √(3.986×10¹⁴(2/7×10⁶ - 1/23.5×10⁶))\nv_p = √(3.986×10¹⁴ × 2.429×10⁻⁷) = 9,683 m/s\n\nv_a = √(μ(2/r_a - 1/a)) = √(3.986×10¹⁴(2/40×10⁶ - 1/23.5×10⁶))\nv_a = √(3.986×10¹⁴ × 7.43×10⁻⁹) = 1,695 m/s\n\nRatio: v_p/v_a = 5.7× faster at periapsis!",
        hint: "a = (r_p+r_a)/2, e = (r_a-r_p)/(r_a+r_p), then use vis-viva"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q20-1",
          question: "What does Kepler's Third Law tell us?",
          options: [
            "All orbits are ellipses",
            "Orbital period squared is proportional to semi-major axis cubed (T² ∝ a³)",
            "Velocity is constant",
            "Energy is conserved"
          ],
          correctAnswer: 1,
          explanation: "Kepler's Third Law: T² = (4π²/μ)·a³. Farther orbits take longer! ISS at 400 km: 92 min. GPS at 20,200 km: 12 hours. GEO at 35,786 km: 24 hours!"
        },
        {
          id: "q20-2",
          question: "Why do satellites move faster at periapsis than apoapsis?",
          options: [
            "Engines fire",
            "Conservation of angular momentum: L = m·v·r = constant, so closer = faster",
            "Gravity is stronger",
            "Random"
          ],
          correctAnswer: 1,
          explanation: "Angular momentum L = m·v·r is conserved. At periapsis (small r), velocity must be high. At apoapsis (large r), velocity must be low. This is Kepler's Second Law!"
        }
      ]
    }
  }
];

export default unit3Enhanced20to21;
