// Unit 3: Orbital Mechanics - MIT-Quality Content
// Lessons 20-29: Understanding orbits, transfers, and space navigation

export const unit3Lessons = [
  {
    id: 20,
    title: "Kepler's Laws & Orbital Fundamentals",
    unit: "Orbital Mechanics",
    duration: "30 min",
    introduction: "Orbital mechanics governs how spacecraft move in space. Understanding Kepler's laws is essential for mission planning, trajectory design, and space navigation.",
    
    sections: [
      {
        title: "Kepler's Three Laws",
        content: "Kepler's First Law (Law of Ellipses):\nAll orbits are ellipses with the central body at one focus.\n\nEllipse equation:\nr = a(1 - e²) / (1 + e·cos(θ))\n\nWhere:\n• r = distance from focus\n• a = semi-major axis\n• e = eccentricity (0 = circle, 0-1 = ellipse)\n• θ = true anomaly (angle from periapsis)\n\nKepler's Second Law (Law of Equal Areas):\nA line from the central body to the orbiting body sweeps equal areas in equal times.\n\nConsequence: Objects move faster at periapsis (closest point) and slower at apoapsis (farthest point).\n\nAngular momentum conservation:\nL = m·v·r = constant\n\nAt periapsis: v_p·r_p = v_a·r_a\n\nKepler's Third Law (Law of Periods):\nThe square of the orbital period is proportional to the cube of the semi-major axis.\n\nT² = (4π²/μ)·a³\n\nWhere:\n• T = orbital period (seconds)\n• a = semi-major axis (meters)\n• μ = GM = gravitational parameter\n• For Earth: μ = 3.986×10¹⁴ m³/s²\n\nExample: ISS Orbit\n• Altitude: 400 km\n• a = 6,371 + 400 = 6,771 km\n• T² = (4π²/3.986×10¹⁴)·(6.771×10⁶)³\n• T = 5,540 seconds = 92.3 minutes\n\nActual ISS period: 92.9 minutes (close!)"
      },
      {
        title: "Orbital Energy & Velocity",
        content: "Specific Orbital Energy:\nε = v²/2 - μ/r\n\nWhere:\n• ε = specific energy (J/kg)\n• v = velocity (m/s)\n• r = distance from center (m)\n• μ = GM\n\nFor elliptical orbits:\nε = -μ/(2a)\n\nKey insight: Energy depends only on semi-major axis!\n\nOrbital Velocity:\n\nCircular orbit:\nv_circular = √(μ/r)\n\nExample: LEO at 400 km\n• r = 6,771 km\n• v = √(3.986×10¹⁴/6.771×10⁶)\n• v = 7,669 m/s\n\nElliptical orbit (vis-viva equation):\nv = √(μ(2/r - 1/a))\n\nAt periapsis:\nv_p = √(μ(1+e)/(a(1-e)))\n\nAt apoapsis:\nv_a = √(μ(1-e)/(a(1+e)))\n\nEscape Velocity:\nv_escape = √(2μ/r) = √2 × v_circular\n\nFrom Earth surface:\n• v_escape = 11,186 m/s\n• v_circular = 7,910 m/s\n• Ratio: 1.414 (√2)\n\nExample: Highly Elliptical Orbit\n• Periapsis: 300 km (r_p = 6,671 km)\n• Apoapsis: 35,786 km (r_a = 42,157 km)\n• a = (r_p + r_a)/2 = 24,414 km\n• e = (r_a - r_p)/(r_a + r_p) = 0.727\n\nVelocities:\n• v_p = 10,250 m/s (fast at periapsis)\n• v_a = 1,620 m/s (slow at apoapsis)\n• Period: 10.7 hours"
      },
      {
        title: "Orbital Parameters",
        content: "Six Classical Orbital Elements:\n\n1. Semi-major axis (a):\n• Size of orbit\n• Determines period and energy\n\n2. Eccentricity (e):\n• Shape of orbit\n• e = 0: circular\n• 0 < e < 1: elliptical\n• e = 1: parabolic (escape)\n• e > 1: hyperbolic\n\n3. Inclination (i):\n• Tilt relative to equator\n• 0°: equatorial\n• 90°: polar\n• 98°: sun-synchronous\n\n4. Right Ascension of Ascending Node (Ω):\n• Where orbit crosses equator going north\n• Measured from vernal equinox\n\n5. Argument of Periapsis (ω):\n• Orientation of ellipse in orbital plane\n• Angle from ascending node to periapsis\n\n6. True Anomaly (θ):\n• Position in orbit\n• Angle from periapsis\n\nCommon Orbit Types:\n\nLow Earth Orbit (LEO):\n• Altitude: 200-2,000 km\n• Period: 90-130 minutes\n• Velocity: 7,000-7,800 m/s\n• Uses: ISS, Starlink, imaging\n\nMedium Earth Orbit (MEO):\n• Altitude: 2,000-35,786 km\n• Period: 2-24 hours\n• Uses: GPS, Galileo, GLONASS\n\nGeostationary Orbit (GEO):\n• Altitude: 35,786 km\n• Period: 24 hours (matches Earth rotation)\n• Inclination: 0° (equatorial)\n• Appears stationary from ground\n• Uses: Communications, weather\n\nGeosynchronous Transfer Orbit (GTO):\n• Periapsis: ~200 km\n• Apoapsis: 35,786 km\n• Used to reach GEO\n\nPolar Orbit:\n• Inclination: 90°\n• Passes over poles\n• Covers entire Earth\n• Uses: Reconnaissance, mapping\n\nSun-Synchronous Orbit:\n• Inclination: ~98°\n• Precesses with Earth around Sun\n• Constant lighting conditions\n• Uses: Earth observation"
      },
      {
        title: "Orbital Perturbations",
        content: "Real orbits are not perfect ellipses due to perturbations:\n\n1. Earth's Oblateness (J2):\n• Earth is not perfectly spherical\n• Bulges at equator\n• Causes orbital precession\n• Ω changes over time\n\nPrecession rate:\ndΩ/dt = -3nJ2(R_e/a)²·cos(i)/(2(1-e²)²)\n\nWhere:\n• n = mean motion\n• J2 = 0.00108263 (Earth's oblateness)\n• R_e = Earth radius\n\nSun-synchronous orbits use this!\n\n2. Atmospheric Drag:\n• Significant below 600 km\n• Removes energy from orbit\n• Lowers altitude over time\n• Eventually causes reentry\n\nDrag force:\nF_drag = ½·ρ·v²·C_D·A\n\nISS altitude decay:\n• Without reboost: ~2 km/month\n• Requires periodic boosts\n• Uses Progress, Dragon, or Cygnus\n\n3. Solar Radiation Pressure:\n• Photons push on spacecraft\n• Significant for large, light objects\n• Solar sails use this!\n\n4. Third-Body Perturbations:\n• Moon and Sun gravity\n• Affects high orbits more\n• Important for GEO satellites\n\n5. Gravitational Harmonics:\n• Earth's uneven mass distribution\n• Mountains, oceans affect orbit\n• Small but measurable\n\nStation-Keeping:\n\nGEO satellites need corrections:\n• North-South: ~50 m/s per year\n• East-West: ~2 m/s per year\n• Total: ~52 m/s per year\n\nSatellite lifetime limited by propellant:\n• 15 years typical\n• When fuel runs out, satellite drifts\n• Moved to graveyard orbit"
      }
    ],
    
    keyTakeaways: [
      "Kepler's laws describe orbital motion: ellipses, equal areas, period-radius relationship",
      "Orbital velocity in LEO is ~7,700 m/s; escape velocity is 11,200 m/s",
      "Six orbital elements completely define an orbit's size, shape, and orientation",
      "GEO satellites orbit at 35,786 km with 24-hour period",
      "Real orbits experience perturbations from Earth's shape, drag, and other bodies",
      "Station-keeping requires ~50 m/s per year for GEO satellites"
    ],
    
    vocabulary: [
      { term: "Semi-major Axis (a)", definition: "Half the longest diameter of an ellipse; determines orbital period" },
      { term: "Eccentricity (e)", definition: "Measure of how elliptical an orbit is; 0 = circle, 1 = parabola" },
      { term: "Periapsis", definition: "Closest point in orbit to central body" },
      { term: "Apoapsis", definition: "Farthest point in orbit from central body" },
      { term: "Inclination (i)", definition: "Tilt of orbital plane relative to equator" },
      { term: "Geostationary Orbit (GEO)", definition: "Orbit at 35,786 km with 24-hour period; appears stationary" }
    ]
  },

  {
    id: 21,
    title: "Hohmann Transfers & Orbital Maneuvers",
    unit: "Orbital Mechanics",
    duration: "35 min",
    introduction: "Hohmann transfers are the most fuel-efficient way to move between circular orbits. Understanding orbital maneuvers is essential for mission planning and spacecraft operations.",
    
    sections: [
      {
        title: "Hohmann Transfer Basics",
        content: "Hohmann Transfer:\nMost efficient two-impulse transfer between coplanar circular orbits.\n\nProcedure:\n1. Burn at periapsis of initial orbit (Δv₁)\n2. Coast on transfer ellipse\n3. Burn at apoapsis to circularize (Δv₂)\n\nTransfer Orbit:\n• Periapsis = initial orbit radius (r₁)\n• Apoapsis = final orbit radius (r₂)\n• Semi-major axis: a_t = (r₁ + r₂)/2\n\nDelta-V Calculations:\n\nFirst burn (at r₁):\nΔv₁ = √(μ/r₁)·(√(2r₂/(r₁+r₂)) - 1)\n\nSecond burn (at r₂):\nΔv₂ = √(μ/r₂)·(1 - √(2r₁/(r₁+r₂)))\n\nTotal delta-v:\nΔv_total = Δv₁ + Δv₂\n\nTransfer time:\nt = π·√(a_t³/μ)\n\nExample: LEO to GEO Transfer\n\nInitial orbit (LEO):\n• r₁ = 6,571 km (200 km altitude)\n• v₁ = 7,784 m/s\n\nFinal orbit (GEO):\n• r₂ = 42,164 km (35,786 km altitude)\n• v₂ = 3,075 m/s\n\nTransfer orbit:\n• a_t = (6,571 + 42,164)/2 = 24,368 km\n• Periapsis velocity: v_p = 10,249 m/s\n• Apoapsis velocity: v_a = 1,597 m/s\n\nDelta-v required:\n• Δv₁ = 10,249 - 7,784 = 2,465 m/s\n• Δv₂ = 3,075 - 1,597 = 1,478 m/s\n• Total: 3,943 m/s\n\nTransfer time:\n• t = π·√(24,368³/3.986×10⁵) = 19,020 seconds\n• t = 5.28 hours\n\nThis is the standard GTO (Geostationary Transfer Orbit)!"
      },
      {
        title: "Bi-Elliptic Transfers",
        content: "Bi-Elliptic Transfer:\nThree-impulse transfer that can be more efficient for large radius changes.\n\nProcedure:\n1. Burn to raise apoapsis to intermediate radius (r_b)\n2. Coast to apoapsis\n3. Burn to raise periapsis to final radius\n4. Coast to periapsis\n5. Burn to circularize\n\nWhen is it better?\n• For radius ratio r₂/r₁ > 11.94\n• Uses less total Δv than Hohmann\n• But takes much longer\n\nExample: LEO to High Orbit\n\nLEO to 100,000 km orbit:\n• r₁ = 6,571 km\n• r₂ = 100,000 km\n• Ratio: 15.2 (> 11.94)\n\nHohmann transfer:\n• Δv_total = 5,830 m/s\n• Time: 11.2 hours\n\nBi-elliptic (via r_b = 200,000 km):\n• Δv_total = 5,620 m/s\n• Time: 42.8 hours\n\nSavings: 210 m/s (3.6%)\nCost: 31.6 hours longer\n\nTrade-off:\n• Bi-elliptic saves fuel\n• But takes 4× longer\n• Rarely used in practice\n• Exception: When time doesn't matter"
      },
      {
        title: "Plane Change Maneuvers",
        content: "Inclination Change:\nChanging orbital plane is very expensive!\n\nSimple plane change:\nΔv = 2v·sin(Δi/2)\n\nWhere:\n• v = orbital velocity\n• Δi = inclination change\n\nExample: 10° plane change in LEO\n• v = 7,700 m/s\n• Δi = 10° = 0.1745 rad\n• Δv = 2×7,700×sin(0.0873) = 1,343 m/s\n\nHuge cost for small change!\n\nCombined Maneuver:\nCombine plane change with Hohmann transfer.\n\nPerform plane change at apoapsis:\n• Velocity is lowest\n• Δv cost is minimized\n\nExample: GTO to GEO with inclination change\n\nAt GTO apoapsis:\n• v = 1,597 m/s (slow!)\n• Δi = 7° (typical from Cape Canaveral)\n• Δv_plane = 2×1,597×sin(3.5°) = 195 m/s\n• Δv_circularize = 1,478 m/s\n• Combined: √(195² + 1,478²) = 1,491 m/s\n\nVs separate maneuvers: 1,673 m/s\nSavings: 182 m/s (11%)\n\nLaunch Site Inclination:\n\nMinimum inclination = launch site latitude\n• Cape Canaveral: 28.5°\n• Baikonur: 45.6°\n• Kourou: 5.2° (best for GEO)\n• Vandenberg: 34.4° (polar launches)\n\nPlane change cost from Cape to equatorial:\n• Δv ≈ 1,800 m/s\n• This is why Kourou is valuable!"
      },
      {
        title: "Rendezvous & Docking",
        content: "Orbital Rendezvous:\nBringing two spacecraft together in orbit.\n\nPhasing:\nAdjust timing to meet target.\n\nIf chaser is behind target:\n• Lower orbit (faster period)\n• Catch up over multiple orbits\n• Raise orbit to match\n\nPhasing orbit:\nΔT = T_target - T_chase\n\nNumber of orbits:\nn = ΔT / (T_target - T_phasing)\n\nExample: ISS Rendezvous\n\nTarget (ISS):\n• Altitude: 400 km\n• Period: 92.9 minutes\n\nChaser (Dragon) initially:\n• Altitude: 350 km\n• Period: 91.5 minutes\n• Catches up: 1.4 min per orbit\n\nTo catch up 90° (23 minutes):\n• Orbits needed: 23/1.4 = 16 orbits\n• Time: 24.5 hours\n\nProximity Operations:\n\nFinal approach phases:\n1. Far field (>1 km): Hohmann transfers\n2. Near field (100m-1km): Careful burns\n3. Close approach (<100m): Very slow\n4. Docking: <0.1 m/s contact\n\nSafety:\n• Approach from below (natural drift away)\n• Multiple abort options\n• Continuous communication\n• Automated systems with manual override\n\nDocking vs Berthing:\n\nDocking:\n• Active spacecraft approaches\n• Captures with probe/drogue\n• Example: Soyuz, Dragon\n\nBerthing:\n• Robotic arm captures spacecraft\n• Brings to port\n• Example: Cygnus, HTV\n\nModern Approach: Automated\n• Dragon: Fully automated\n• Soyuz: Can be manual or auto\n• Progress: Fully automated\n• Cygnus: Berthed by arm"
      }
    ],
    
    keyTakeaways: [
      "Hohmann transfer is most efficient two-impulse maneuver between circular orbits",
      "LEO to GEO requires ~3,943 m/s delta-v and takes 5.28 hours",
      "Plane changes are very expensive: 10° in LEO costs 1,343 m/s",
      "Combine plane change with apoapsis burn to save fuel",
      "Launch site latitude determines minimum orbital inclination",
      "Rendezvous requires careful phasing and proximity operations"
    ],
    
    vocabulary: [
      { term: "Hohmann Transfer", definition: "Most efficient two-impulse transfer between coplanar circular orbits" },
      { term: "Delta-V (Δv)", definition: "Change in velocity required for a maneuver" },
      { term: "Plane Change", definition: "Maneuver to change orbital inclination; very expensive" },
      { term: "Phasing", definition: "Adjusting orbital period to catch up with or wait for target" },
      { term: "Rendezvous", definition: "Bringing two spacecraft together in orbit" },
      { term: "GTO", definition: "Geostationary Transfer Orbit; ellipse from LEO to GEO altitude" }
    ]
  }
];

export default unit3Lessons;
