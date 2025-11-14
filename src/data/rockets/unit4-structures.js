// Unit 4: Rocket Structures & Materials - MIT-Quality Content
// Lessons 24-27: Structural design, materials, loads, thermal protection

export const unit4Lessons = [
  {
    id: 24,
    title: "Structural Loads & Stress Analysis",
    unit: "Rocket Structures & Materials",
    duration: "30 min",
    introduction: "Rocket structures must withstand extreme loads during launch, flight, and landing. Understanding structural analysis is essential for safe and efficient rocket design.",
    
    sections: [
      {
        title: "Types of Loads",
        content: "1. Axial Loads (Thrust):\n\nCompression during launch:\n• Entire rocket weight + acceleration\n• Maximum at base\n• Decreases toward top\n\nLoad factor:\nn = (T - mg)/mg = TWR - 1\n\nExample: Falcon 9 at liftoff\n• TWR = 1.41\n• Load factor: n = 0.41\n• Axial load at base: 1.41 × 549,000 kg × 9.81 = 7,605 kN\n\n2. Bending Loads:\n\nCauses:\n• Wind during ascent\n• Thrust vector offset\n• Aerodynamic forces\n\nMaximum at Max-Q:\n• Dynamic pressure peak\n• Altitude: 10-15 km\n• Highest bending moment\n\n3. Aerodynamic Loads:\n\nDrag force:\nF_drag = ½ρv²C_D A\n\nMax-Q conditions:\n• q = ½ρv² ≈ 35 kPa\n• Velocity: 400-600 m/s\n• Altitude: 10-15 km\n\n4. Acoustic Loads:\n\nSound pressure:\n• Launch: 160-180 dB\n• Causes vibration\n• Can damage electronics\n• Requires acoustic blankets\n\n5. Thermal Loads:\n\nTemperature gradients:\n• Cryogenic tanks: -253°C\n• Engine bay: +800°C\n• Causes thermal stress\n\n6. Vibration:\n\nSources:\n• Engine combustion\n• Aerodynamic buffeting\n• Structural resonance\n\nFrequencies:\n• Low: 5-50 Hz (structural)\n• High: 100-2,000 Hz (acoustic)"
      },
      {
        title: "Stress & Strain Analysis",
        content: "Basic Stress Equations:\n\nAxial stress:\nσ = F/A\n\nWhere:\n• σ = stress (Pa)\n• F = force (N)\n• A = cross-sectional area (m²)\n\nShear stress:\nτ = V/A\n\nBending stress:\nσ = My/I\n\nWhere:\n• M = bending moment\n• y = distance from neutral axis\n• I = moment of inertia\n\nStrain:\nε = ΔL/L = σ/E\n\nWhere:\n• ε = strain (dimensionless)\n• E = Young's modulus (Pa)\n\nExample: Falcon 9 Interstage\n\nLoad conditions:\n• Axial load: 5,000 kN\n• Material: Aluminum 2219\n• Thickness: 3 mm\n• Diameter: 3.66 m\n• Area: π × 3.66 × 0.003 = 0.0345 m²\n\nStress:\nσ = 5,000,000 / 0.0345 = 145 MPa\n\nMaterial strength:\n• Yield: 350 MPa\n• Ultimate: 450 MPa\n\nSafety factor:\nSF = 350 / 145 = 2.4 ✓\n\nBuckling:\n\nThin-walled cylinders fail by buckling:\n\nCritical stress:\nσ_cr = Et/R\n\nWhere:\n• E = Young's modulus\n• t = wall thickness\n• R = radius\n\nFor Falcon 9 tank:\n• E = 73 GPa (aluminum)\n• t = 3 mm\n• R = 1.83 m\n• σ_cr = 73×10⁹ × 0.003 / 1.83 = 120 MPa\n\nMust stay below this to avoid buckling!\n\nFatigue:\n\nRepeated loads cause fatigue:\n• Each flight cycle\n• Vibration during flight\n• Thermal cycling\n\nFatigue life:\nN = C / (Δσ)^m\n\nWhere:\n• N = cycles to failure\n• Δσ = stress range\n• C, m = material constants\n\nReusable rockets must consider:\n• 10+ flights for Falcon 9\n• 100+ flights for Starship (goal)\n• Requires careful fatigue analysis"
      },
      {
        title: "Tank Design",
        content: "Pressure Vessel Theory:\n\nThin-walled cylinder:\n\nHoop stress:\nσ_h = PR/t\n\nLongitudinal stress:\nσ_l = PR/(2t)\n\nWhere:\n• P = internal pressure\n• R = radius\n• t = wall thickness\n\nExample: LOX Tank Design\n\nRequirements:\n• Pressure: 3.5 bar = 0.35 MPa\n• Radius: 1.83 m\n• Material: Aluminum 2219\n• Yield strength: 350 MPa\n• Safety factor: 2.0\n\nAllowable stress:\nσ_allow = 350 / 2.0 = 175 MPa\n\nRequired thickness:\nt = PR / σ_allow\nt = 0.35×10⁶ × 1.83 / 175×10⁶\nt = 0.0037 m = 3.7 mm\n\nActual: 3-4 mm (includes margin)\n\nTank Mass:\n\nCylindrical section:\nm_cyl = 2πRLtρ\n\nDomes (elliptical):\nm_dome = 2πR²tρ\n\nTotal tank mass:\nm_tank = m_cyl + 2×m_dome\n\nExample: Falcon 9 LOX Tank\n• Length: 12 m\n• Radius: 1.83 m\n• Thickness: 3.5 mm\n• Density: 2,800 kg/m³\n\nMass:\nm_cyl = 2π × 1.83 × 12 × 0.0035 × 2,800 = 1,360 kg\nm_dome = 2 × 2π × 1.83² × 0.0035 × 2,800 = 520 kg\nm_total = 1,880 kg\n\nPropellant mass: 123,000 kg\nTank fraction: 1.5% ✓\n\nCryogenic Considerations:\n\nThermal contraction:\nΔL = αLΔT\n\nFor aluminum:\n• α = 23×10⁻⁶ /K\n• ΔT = 273 K (room to LOX temp)\n• ΔL/L = 0.0063 = 0.63%\n\nFor 12 m tank:\nΔL = 75 mm shrinkage!\n\nMust account for:\n• Thermal stress\n• Seal design\n• Plumbing flexibility"
      },
      {
        title: "Structural Optimization",
        content: "Mass Minimization:\n\nGoal: Minimize structural mass while maintaining strength.\n\nStructural efficiency:\nη = σ_allow / ρ\n\nWhere:\n• σ_allow = allowable stress\n• ρ = density\n\nMaterial comparison:\n\nAluminum 2219:\n• σ = 350 MPa\n• ρ = 2,800 kg/m³\n• η = 125 kPa·m³/kg\n\nTitanium Ti-6Al-4V:\n• σ = 900 MPa\n• ρ = 4,430 kg/m³\n• η = 203 kPa·m³/kg\n\nCarbon Fiber:\n• σ = 1,500 MPa\n• ρ = 1,600 kg/m³\n• η = 938 kPa·m³/kg\n\nCarbon fiber is 7.5× more efficient!\n\nGrid Fins:\n\nFalcon 9 landing fins:\n• Material: Titanium\n• Mass: 1,000 kg (4 fins)\n• Drag area: 20 m²\n• Withstand: 1,000°C reentry\n\nWhy titanium?\n• High temperature capability\n• Good strength-to-weight\n• Reusable without refurbishment\n\nInterstage:\n\nConnects stages:\n• Carries loads between stages\n• Houses separation system\n• Aerodynamic fairing\n\nFalcon 9 interstage:\n• Material: Aluminum\n• Mass: 1,500 kg\n• Length: 3.5 m\n• Separates with pneumatic pushers\n\nComposite Structures:\n\nCarbon fiber advantages:\n• 50% lighter than aluminum\n• Higher strength\n• Better fatigue resistance\n\nChallenges:\n• More expensive\n• Difficult to manufacture\n• Cryogenic compatibility\n\nStarship:\n• Stainless steel (not composite!)\n• Reason: Cryogenic performance\n• Cheaper to manufacture\n• Better at extreme temperatures\n\nCounterIntuitive choice:\n• Steel heavier than aluminum\n• But: Better at -253°C\n• And: Better at +1,500°C (reentry)\n• Net: Better overall performance"
      }
    ],
    
    keyTakeaways: [
      "Rockets experience axial, bending, aerodynamic, thermal, and vibration loads",
      "Max-Q at 10-15 km altitude causes maximum bending loads",
      "Tank wall thickness determined by pressure vessel theory: t = PR/σ",
      "Structural efficiency (σ/ρ) favors carbon fiber, but manufacturing matters",
      "Buckling is critical failure mode for thin-walled cylinders",
      "Reusable rockets must consider fatigue from multiple flight cycles"
    ],
    
    vocabulary: [
      { term: "Axial Load", definition: "Force along the length of structure; compression or tension" },
      { term: "Bending Moment", definition: "Torque causing structure to bend" },
      { term: "Buckling", definition: "Sudden collapse of thin-walled structure under compression" },
      { term: "Hoop Stress", definition: "Circumferential stress in pressure vessel" },
      { term: "Fatigue", definition: "Progressive damage from repeated loading cycles" },
      { term: "Structural Efficiency", definition: "Ratio of strength to density; higher is better" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q24-1",
          question: "What is Max-Q and why is it critical for rocket structures?",
          options: [
            "Maximum thrust; causes highest acceleration loads",
            "Maximum dynamic pressure; causes highest bending loads at 10-15 km altitude",
            "Maximum velocity; causes highest drag forces",
            "Maximum temperature; causes thermal stress"
          ],
          correctAnswer: 1,
          explanation: "Max-Q is the point of maximum dynamic pressure (q = ½ρv²), occurring at 10-15 km altitude. This creates the highest aerodynamic bending loads on the rocket structure."
        },
        {
          id: "q24-2",
          question: "For a pressure vessel, hoop stress is σ_h = PR/t. If you double the tank radius while keeping pressure constant, what happens to required wall thickness?",
          options: [
            "Stays the same",
            "Doubles (2× thicker)",
            "Halves (0.5× thicker)",
            "Quadruples (4× thicker)"
          ],
          correctAnswer: 1,
          explanation: "From σ_h = PR/t, if we keep stress constant and double R, we must double t to maintain the same stress level. Wall thickness scales linearly with radius."
        },
        {
          id: "q24-3",
          question: "What is buckling and why is it critical for rocket tanks?",
          options: [
            "Gradual bending under load",
            "Sudden collapse of thin-walled structure under compression",
            "Cracking due to thermal stress",
            "Vibration at resonant frequency"
          ],
          correctAnswer: 1,
          explanation: "Buckling is sudden structural collapse of thin-walled cylinders under compression. Rocket tanks have thin walls (3-4 mm) and large diameters, making them susceptible to buckling before material yield."
        },
        {
          id: "q24-4",
          question: "Why must reusable rockets like Falcon 9 consider fatigue analysis?",
          options: [
            "Each flight cycle causes repeated loads that can lead to progressive damage",
            "Reentry heating weakens the structure",
            "Landing impacts cause immediate damage",
            "Fuel residue corrodes the structure"
          ],
          correctAnswer: 0,
          explanation: "Fatigue is progressive damage from repeated loading cycles. Each flight subjects the structure to loads, and after 10+ flights, fatigue cracks can develop. This requires careful analysis for reusability."
        }
      ]
    }
  },

  {
    id: 25,
    title: "Materials Selection & Properties",
    unit: "Rocket Structures & Materials",
    duration: "25 min",
    introduction: "Material selection is critical for rocket performance. Different materials excel in different applications based on strength, weight, temperature, and cost.",
    
    sections: [
      {
        title: "Aluminum Alloys",
        content: "Why Aluminum?\n\nAdvantages:\n• Good strength-to-weight ratio\n• Easy to manufacture\n• Well understood\n• Relatively cheap\n• Good thermal conductivity\n\nDisadvantages:\n• Moderate strength\n• Poor high-temperature performance\n• Susceptible to fatigue\n\nCommon Alloys:\n\n2219 (Falcon 9, Saturn V):\n• Yield strength: 350 MPa\n• Density: 2,800 kg/m³\n• Good weldability\n• Cryogenic compatible\n• Used for: Tanks, structures\n\n7075 (High strength):\n• Yield strength: 500 MPa\n• Density: 2,810 kg/m³\n• Difficult to weld\n• Used for: Fittings, fasteners\n\n6061 (General purpose):\n• Yield strength: 240 MPa\n• Density: 2,700 kg/m³\n• Easy to machine\n• Used for: Non-critical parts\n\nCryogenic Performance:\n\nAt -253°C (LH₂ temperature):\n• Strength increases 20-30%\n• Ductility maintained\n• Thermal contraction: 0.4%\n\nThis is why aluminum works well for cryogenic tanks!"
      },
      {
        title: "Advanced Materials",
        content: "Titanium Alloys:\n\nTi-6Al-4V (most common):\n• Yield strength: 900 MPa\n• Density: 4,430 kg/m³\n• Max temperature: 600°C\n• Excellent corrosion resistance\n\nApplications:\n• Grid fins (Falcon 9)\n• Engine components\n• High-stress fittings\n• Pressure vessels\n\nCarbon Fiber Composites:\n\nProperties:\n• Tensile strength: 1,500-3,000 MPa\n• Density: 1,600 kg/m³\n• Specific strength: 3× aluminum\n• Anisotropic (directional)\n\nApplications:\n• Fairings (Falcon 9)\n• Interstages\n• Pressure vessels (COPVs)\n• Future: Tanks (challenging)\n\nChallenges:\n• Expensive ($100-500/kg)\n• Difficult to manufacture\n• Cryogenic microcracking\n• Repair difficult\n\nStainless Steel:\n\n301/304 (Starship):\n• Yield strength: 200-500 MPa (depends on temp)\n• Density: 8,000 kg/m³\n• Max temperature: 1,500°C\n• Cheap: $3-5/kg\n\nWhy Starship uses steel:\n• Excellent at cryogenic temps\n• Excellent at reentry temps\n• Easy to weld\n• Very cheap\n• Net: Better than composites!\n\nCopper Alloys:\n\nNARloy-Z (NASA copper):\n• Yield strength: 400 MPa\n• Density: 8,900 kg/m³\n• Thermal conductivity: 350 W/(m·K)\n• Max temperature: 900 K\n\nApplications:\n• Engine cooling channels\n• Combustion chamber liners\n• Nozzle throats\n\nWhy copper?\n• Best thermal conductivity\n• Survives extreme heat flux\n• Essential for regenerative cooling"
      },
      {
        title: "Material Selection Process",
        content: "Selection Criteria:\n\n1. Strength Requirements:\n• Yield strength\n• Ultimate strength\n• Fatigue resistance\n\n2. Weight:\n• Density\n• Structural efficiency\n• Impact on payload\n\n3. Temperature:\n• Operating range\n• Cryogenic performance\n• High-temperature capability\n\n4. Cost:\n• Material cost\n• Manufacturing cost\n• Tooling requirements\n\n5. Manufacturability:\n• Welding\n• Machining\n• Forming\n• Quality control\n\nExample: Tank Material Selection\n\nRequirements:\n• Cryogenic compatible\n• Pressure: 3-5 bar\n• Weldable\n• Cost-effective\n\nOptions:\n\nAluminum 2219:\n• Strength: Good\n• Weight: Good\n• Cryogenic: Excellent\n• Cost: Moderate\n• Manufacturing: Easy\n• Winner for most applications!\n\nCarbon fiber:\n• Strength: Excellent\n• Weight: Excellent\n• Cryogenic: Problematic\n• Cost: High\n• Manufacturing: Difficult\n• Not yet proven for cryogenic tanks\n\nStainless steel:\n• Strength: Good\n• Weight: Poor (3× heavier)\n• Cryogenic: Excellent\n• Cost: Low\n• Manufacturing: Easy\n• Starship's choice (reentry bonus)\n\nExample: Engine Material Selection\n\nCombustion chamber:\n• Material: Copper alloy (NARloy-Z)\n• Reason: Thermal conductivity\n• Alternative: None viable\n\nNozzle:\n• Material: Niobium alloy or carbon-carbon\n• Reason: High temperature (3,000 K)\n• Cooling: Regenerative or radiative\n\nTurbopump:\n• Material: Titanium or Inconel\n• Reason: Strength + temperature\n• Speeds: 15,000-40,000 RPM"
      }
    ],
    
    keyTakeaways: [
      "Aluminum 2219 is standard for cryogenic tanks: good strength, lightweight, weldable",
      "Carbon fiber offers 3× better specific strength but challenging for cryogenic use",
      "Titanium excels for high-temperature applications like grid fins",
      "Starship uses stainless steel for combined cryogenic and reentry performance",
      "Copper alloys essential for engine cooling due to thermal conductivity",
      "Material selection balances strength, weight, temperature, cost, and manufacturability"
    ],
    
    vocabulary: [
      { term: "Yield Strength", definition: "Stress at which material begins permanent deformation" },
      { term: "Specific Strength", definition: "Strength divided by density; efficiency metric" },
      { term: "Anisotropic", definition: "Properties vary with direction (like carbon fiber)" },
      { term: "Thermal Conductivity", definition: "Ability to conduct heat; critical for cooling" },
      { term: "Cryogenic", definition: "Very low temperature; below -150°C" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q25-1",
          question: "Why is Aluminum 2219 the standard choice for cryogenic rocket tanks?",
          options: [
            "It's the strongest material available",
            "It's the lightest material available",
            "Good strength-to-weight, weldable, cryogenic compatible, and cost-effective",
            "It has the best high-temperature performance"
          ],
          correctAnswer: 2,
          explanation: "Aluminum 2219 offers an excellent balance: good strength (350 MPa), lightweight (2,800 kg/m³), easy to weld, performs well at cryogenic temperatures, and is cost-effective. It's not the best in any single category but optimal overall."
        },
        {
          id: "q25-2",
          question: "Carbon fiber has 3× better specific strength than aluminum. Why isn't it used for all rocket structures?",
          options: [
            "It's too weak for rocket loads",
            "Expensive, difficult to manufacture, cryogenic microcracking issues, hard to repair",
            "It can't withstand launch vibrations",
            "It's heavier than aluminum"
          ],
          correctAnswer: 1,
          explanation: "While carbon fiber has excellent specific strength, it faces challenges: high cost ($100-500/kg vs $5-10/kg for aluminum), difficult manufacturing, cryogenic microcracking problems, and difficult repairs. These trade-offs limit its use."
        },
        {
          id: "q25-3",
          question: "Why does Starship use stainless steel instead of aluminum or carbon fiber?",
          options: [
            "Steel is lighter than other materials",
            "Steel is cheaper and easier to manufacture",
            "Steel performs well at both cryogenic (-253°C) and reentry (1,500°C) temperatures",
            "Steel has better strength-to-weight ratio"
          ],
          correctAnswer: 2,
          explanation: "Starship's counterintuitive choice: stainless steel excels at both cryogenic temperatures (fuel tanks) and extreme reentry temperatures (heat shield). While heavier, this dual capability plus low cost and easy welding makes it optimal for a fully reusable system."
        },
        {
          id: "q25-4",
          question: "Why are copper alloys (like NARloy-Z) essential for rocket engine combustion chambers?",
          options: [
            "Copper is the strongest material at high temperatures",
            "Copper has the best thermal conductivity for regenerative cooling",
            "Copper is the lightest high-temperature material",
            "Copper is the cheapest option"
          ],
          correctAnswer: 1,
          explanation: "Copper alloys have exceptional thermal conductivity (350 W/(m·K)), essential for regenerative cooling. The combustion chamber experiences extreme heat flux, and copper's ability to conduct heat away prevents melting. No viable alternative exists."
        }
      ]
    }
  }
];

export default unit4Lessons;
