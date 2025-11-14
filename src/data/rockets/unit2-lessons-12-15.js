// Unit 2: Rocket Propulsion Physics - Lessons 12-15
// Basic propulsion physics before advanced topics

export const unit2Lessons12to15 = [
  {
    id: 12,
    title: "Combustion Fundamentals",
    unit: "Rocket Propulsion Physics",
    duration: "35 min",
    introduction: "🔥 Combustion is where chemistry becomes thrust! Understanding how propellants burn, release energy, and create high-temperature gases is fundamental to rocket propulsion. This lesson covers combustion chemistry, flame temperature, and energy release.",
    
    sections: [
      {
        title: "Chemical Energy Release",
        content: `**Combustion Basics:**

Rocket propulsion relies on exothermic chemical reactions:
• Fuel + Oxidizer → Products + Heat
• Heat creates high pressure
• Pressure accelerates gases through nozzle

**Example: RP-1/LOX Combustion**

Simplified reaction:
CH₂ + 1.5 O₂ → CO₂ + H₂O + Heat

Energy release: ~10 MJ/kg

**Flame Temperature:**

Adiabatic flame temperature for common propellants:
• RP-1/LOX: 3,670 K
• LH₂/LOX: 3,410 K  
• CH₄/LOX: 3,480 K
• Solid (APCP): 3,500 K

Higher temperature = higher exhaust velocity = better Isp`
      },
      {
        title: "Mixture Ratio Optimization",
        content: `**Mixture Ratio (O/F):**

O/F = mass of oxidizer / mass of fuel

**Stoichiometric vs Optimal:**

Stoichiometric: Complete combustion
• RP-1/LOX: O/F = 3.4
• LH₂/LOX: O/F = 8.0
• CH₄/LOX: O/F = 4.0

Optimal for Isp: Usually fuel-rich
• RP-1/LOX: O/F = 2.5-2.7
• LH₂/LOX: O/F = 5.5-6.0
• CH₄/LOX: O/F = 3.5-3.8

Why fuel-rich?
• Lower molecular weight exhaust
• Higher exhaust velocity
• Better Isp despite incomplete combustion`
      },
      {
        title: "Combustion Chamber Design",
        content: `**Key Parameters:**

Chamber pressure (P_c):
• Typical: 5-30 MPa
• Higher = better Isp
• But requires stronger structure

Chamber volume:
• Must allow complete combustion
• Residence time: 1-10 ms
• L* (characteristic length): 1-2 m

Injector design:
• Mixes fuel and oxidizer
• Critical for combustion efficiency
• Many small holes for atomization`
      }
    ],
    
    keyTakeaways: [
      "Combustion converts chemical energy to thermal energy and pressure",
      "Flame temperature determines maximum exhaust velocity",
      "Optimal mixture ratio is usually fuel-rich for best Isp",
      "Chamber pressure affects Isp - higher is better",
      "Injector design critical for efficient combustion"
    ],
    
    vocabulary: [
      { term: "Mixture Ratio (O/F)", definition: "Mass ratio of oxidizer to fuel" },
      { term: "Stoichiometric", definition: "Ratio for complete combustion with no excess reactants" },
      { term: "Adiabatic Flame Temperature", definition: "Maximum temperature achieved in combustion" },
      { term: "Chamber Pressure (P_c)", definition: "Pressure in combustion chamber" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q12-1",
          question: "Why do rockets typically run fuel-rich instead of stoichiometric?",
          options: [
            "Saves fuel",
            "Fuel-rich produces lower molecular weight exhaust, giving higher exhaust velocity and better Isp",
            "Prevents explosions",
            "Easier to control"
          ],
          correctAnswer: 1,
          explanation: "Fuel-rich combustion produces exhaust with lower average molecular weight (more H₂, less CO₂). Lower molecular weight = higher exhaust velocity = better Isp, even though combustion is incomplete!"
        },
        {
          id: "q12-2",
          question: "What is the typical flame temperature in a rocket combustion chamber?",
          options: [
            "1,000-1,500 K",
            "2,000-2,500 K",
            "3,400-3,700 K",
            "5,000-6,000 K"
          ],
          correctAnswer: 2,
          explanation: "Rocket combustion chambers reach 3,400-3,700 K (over 3,000°C)! This extreme temperature is why cooling is so critical and why we need special materials."
        }
      ]
    }
  },

  {
    id: 13,
    title: "Nozzle Theory & Design",
    unit: "Rocket Propulsion Physics",
    duration: "40 min",
    introduction: "🌪️ The nozzle is where pressure becomes velocity! By carefully shaping the nozzle, we convert thermal energy into kinetic energy with 95%+ efficiency. Understanding converging-diverging nozzles, expansion ratios, and altitude compensation is essential for rocket design.",
    
    sections: [
      {
        title: "Converging-Diverging Nozzle",
        content: `**De Laval Nozzle:**

Three sections:
1. Converging: Accelerates to Mach 1
2. Throat: Minimum area, Mach = 1
3. Diverging: Accelerates to supersonic

**Why This Shape?**

Subsonic flow (M < 1):
• Converging section accelerates flow
• Reaches Mach 1 at throat

Supersonic flow (M > 1):
• Diverging section accelerates further
• Can reach Mach 3-5 at exit

**Area Ratio:**

ε = A_exit / A_throat

Typical values:
• Sea level: 10-20
• Vacuum: 50-400
• Merlin 1D (SL): 16
• Merlin Vacuum: 117`
      },
      {
        title: "Expansion Ratio & Altitude",
        content: `**Optimal Expansion:**

Best performance when:
P_exit = P_ambient

**Under-expanded (P_exit > P_ambient):**
• Not enough expansion
• Lost potential
• Common at sea level

**Over-expanded (P_exit < P_ambient):**
• Too much expansion
• Flow separation
• Efficiency loss
• Can damage nozzle

**Altitude Compensation:**

Sea level engines: ε = 10-20
Vacuum engines: ε = 50-400

Example: Merlin
• Merlin 1D (SL): ε = 16, Isp = 282 s
• Merlin Vac: ε = 117, Isp = 348 s

23% Isp improvement from nozzle alone!`
      },
      {
        title: "Nozzle Efficiency",
        content: `**Losses:**

1. Divergence loss:
• Flow not perfectly axial
• Typical: 2-3% loss

2. Boundary layer loss:
• Friction at walls
• Typical: 1-2% loss

3. Two-phase flow loss:
• Liquid droplets in exhaust
• Typical: 1-2% loss (solid rockets)

**Overall Efficiency:**

η_nozzle = 95-98%

Well-designed nozzles are incredibly efficient!`
      }
    ],
    
    keyTakeaways: [
      "Converging-diverging nozzle accelerates flow to supersonic speeds",
      "Expansion ratio (ε) determines altitude optimization",
      "Optimal expansion: P_exit = P_ambient",
      "Sea level engines: ε = 10-20, Vacuum engines: ε = 50-400",
      "Nozzle efficiency typically 95-98%"
    ],
    
    vocabulary: [
      { term: "Expansion Ratio (ε)", definition: "Ratio of exit area to throat area" },
      { term: "Throat", definition: "Minimum area where flow reaches Mach 1" },
      { term: "Under-expanded", definition: "Exit pressure higher than ambient - lost potential" },
      { term: "Over-expanded", definition: "Exit pressure lower than ambient - flow separation" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q13-1",
          question: "Why does the nozzle diverge after the throat?",
          options: [
            "To slow down the flow",
            "In supersonic flow, diverging section accelerates the flow further",
            "To reduce pressure",
            "For structural strength"
          ],
          correctAnswer: 1,
          explanation: "In supersonic flow (M > 1), a diverging section accelerates the flow! This is counterintuitive but fundamental to rocket nozzles. The flow reaches Mach 1 at the throat, then accelerates to Mach 3-5 in the diverging section."
        },
        {
          id: "q13-2",
          question: "Why does Merlin Vacuum have ε = 117 while Merlin 1D has ε = 16?",
          options: [
            "Vacuum version is more powerful",
            "Vacuum has no ambient pressure, so can expand more without over-expansion",
            "Sea level version is cheaper",
            "Random design choice"
          ],
          correctAnswer: 1,
          explanation: "In vacuum (P_ambient ≈ 0), you can expand exhaust to very low pressure without over-expansion. At sea level, too much expansion causes flow separation. Merlin Vac's larger nozzle gives 23% better Isp in space!"
        }
      ]
    }
  },

  {
    id: 14,
    title: "Propellant Properties & Selection",
    unit: "Rocket Propulsion Physics",
    duration: "35 min",
    introduction: "⚗️ Choosing the right propellant is a complex trade-off! Hydrogen gives best Isp but is hard to store. Kerosene is dense and easy but lower performance. Methane is the Goldilocks option. Understanding propellant properties determines mission success.",
    
    sections: [
      {
        title: "Key Propellant Properties",
        content: `**Performance Metrics:**

1. Specific Impulse (Isp):
• LH₂/LOX: 450 s (best)
• CH₄/LOX: 370 s (good)
• RP-1/LOX: 340 s (moderate)

2. Density:
• RP-1: 820 kg/m³ (dense)
• CH₄: 422 kg/m³ (moderate)
• LH₂: 71 kg/m³ (very light!)

3. Storage Temperature:
• RP-1: Room temp (easy!)
• CH₄: -162°C (moderate)
• LH₂: -253°C (very cold!)

4. Density Impulse:
• ρ × Isp metric
• Accounts for tank size
• RP-1 often wins for first stages`
      },
      {
        title: "Common Propellant Combinations",
        content: `**RP-1/LOX (Kerosene/Oxygen):**

Advantages:
✓ Dense (small tanks)
✓ Room temperature fuel
✓ Well understood
✓ Good Isp (340 s)

Disadvantages:
✗ Coking (carbon deposits)
✗ Lower Isp than hydrogen
✗ Not Mars-producible

Used in: Falcon 9, Soyuz, Atlas V

**LH₂/LOX (Hydrogen/Oxygen):**

Advantages:
✓ Highest Isp (450 s)
✓ Clean burning
✓ Water as exhaust

Disadvantages:
✗ Very low density (huge tanks)
✗ Cryogenic (-253°C)
✗ Boil-off issues
✗ Expensive

Used in: SLS, Delta IV, Ariane 5

**CH₄/LOX (Methane/Oxygen):**

Advantages:
✓ Good Isp (370 s)
✓ Moderate density
✓ No coking
✓ Mars-producible!

Disadvantages:
✗ Cryogenic (-162°C)
✗ Less flight heritage

Used in: Starship, Vulcan (BE-4)`
      },
      {
        title: "Propellant Selection Criteria",
        content: `**First Stage:**
• Need: High thrust, density
• Best: RP-1/LOX or CH₄/LOX
• Density matters (smaller tanks)

**Upper Stage:**
• Need: High Isp
• Best: LH₂/LOX
• Performance critical

**Reusable:**
• Need: No coking, easy restart
• Best: CH₄/LOX
• Clean burning essential

**Mars Mission:**
• Need: In-situ producible
• Best: CH₄/LOX
• Can make from Mars atmosphere!

**Cost-Optimized:**
• Need: Cheap, simple
• Best: RP-1/LOX
• Proven and affordable`
      }
    ],
    
    keyTakeaways: [
      "LH₂/LOX: Best Isp (450s) but very low density and cryogenic",
      "RP-1/LOX: Dense, room temp fuel, good Isp (340s), but coking issues",
      "CH₄/LOX: Balanced option (370s), no coking, Mars-producible",
      "Density impulse (ρ×Isp) important for first stages",
      "Propellant choice depends on mission requirements"
    ],
    
    vocabulary: [
      { term: "Density Impulse", definition: "Product of density and Isp; accounts for tank size" },
      { term: "Coking", definition: "Carbon deposits from incomplete combustion" },
      { term: "Cryogenic", definition: "Very low temperature (below -150°C)" },
      { term: "Boil-off", definition: "Propellant evaporation due to heat leak" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q14-1",
          question: "Why does SpaceX use RP-1 for Falcon 9 but methane for Starship?",
          options: [
            "Methane is cheaper",
            "Falcon 9: RP-1 proven and dense. Starship: CH₄ for Mars production and no coking for reusability",
            "RP-1 is better",
            "Random choice"
          ],
          correctAnswer: 1,
          explanation: "Falcon 9 uses proven RP-1/LOX (dense, good performance). Starship uses CH₄/LOX because: 1) Can be produced on Mars (Sabatier reaction), 2) No coking for rapid reusability, 3) Better Isp than RP-1. Different missions, different choices!"
        },
        {
          id: "q14-2",
          question: "Why don't all rockets use LH₂/LOX for best Isp?",
          options: [
            "Too expensive",
            "LH₂ is very low density (huge tanks) and cryogenic (-253°C), making it impractical for many missions",
            "Not enough hydrogen",
            "Safety concerns"
          ],
          correctAnswer: 1,
          explanation: "LH₂ has amazing Isp (450s) but density is only 71 kg/m³ vs 820 for RP-1! This means 11× larger tanks. Plus -253°C storage is very difficult. For first stages, the tank mass penalty often outweighs the Isp benefit."
        }
      ]
    }
  },

  {
    id: 15,
    title: "Cooling Systems & Thermal Management",
    unit: "Rocket Propulsion Physics",
    duration: "35 min",
    introduction: "🧊 Rocket engines face extreme heat! Combustion chambers reach 3,600 K while nozzles must survive 2,000+ K. Without cooling, engines would melt in seconds. Understanding regenerative cooling, film cooling, and ablative cooling is essential for engine survival.",
    
    sections: [
      {
        title: "The Cooling Challenge",
        content: `**Extreme Conditions:**

Combustion chamber:
• Temperature: 3,600 K (3,300°C)
• Pressure: 5-30 MPa
• Heat flux: 50-200 MW/m²

Nozzle throat:
• Highest heat flux point
• Temperature: 3,000+ K
• Must survive for minutes

**Material Limits:**

Copper alloys: 1,300 K
Nickel superalloys: 1,500 K
Refractory metals: 2,500 K

Even best materials can't survive without cooling!`
      },
      {
        title: "Regenerative Cooling",
        content: `**Most Common Method:**

How it works:
1. Cold propellant flows through jacket
2. Absorbs heat from chamber walls
3. Propellant heats up
4. Hot propellant injected into chamber

**Advantages:**
✓ Very effective
✓ No mass penalty
✓ Propellant must be used anyway
✓ Can handle high heat flux

**Design:**

Channel geometry:
• 100-400 small channels
• Milled into chamber wall
• Typically 2-5 mm wide

Coolant choice:
• Usually fuel (RP-1, CH₄, or LH₂)
• Fuel has better cooling properties
• Oxidizer too reactive

Heat removal:
• 50-200 MW/m² heat flux
• Coolant temperature rise: 100-300 K
• Pressure drop: 1-5 MPa

**Examples:**

Merlin 1D:
• RP-1 regenerative cooling
• 360 channels
• Removes ~100 MW total

RS-25:
• LH₂ regenerative cooling
• Extremely effective
• Enables 20.6 MPa chamber pressure`
      },
      {
        title: "Other Cooling Methods",
        content: `**Film Cooling:**

Inject cool propellant along walls:
• Creates protective film
• Reduces heat transfer
• Used with regenerative cooling
• 5-10% of propellant flow

**Ablative Cooling:**

Material burns away:
• Absorbs heat through ablation
• Simple, no plumbing
• Used in solid rockets
• Limited lifetime

**Radiation Cooling:**

Heat radiates away:
• Only for small engines
• Nozzle extension in vacuum
• No active cooling needed
• Merlin Vac nozzle extension

**Dump Cooling:**

Propellant dumped on walls:
• Simple but wasteful
• Used in some gas generators
• Not for main chamber`
      }
    ],
    
    keyTakeaways: [
      "Combustion chambers reach 3,600 K - must be actively cooled",
      "Regenerative cooling uses propellant to absorb heat",
      "Fuel typically used as coolant (better properties than oxidizer)",
      "Heat flux at throat: 50-200 MW/m² (extreme!)",
      "Film cooling supplements regenerative cooling"
    ],
    
    vocabulary: [
      { term: "Regenerative Cooling", definition: "Propellant flows through jacket to absorb heat" },
      { term: "Heat Flux", definition: "Heat transfer rate per unit area (MW/m²)" },
      { term: "Film Cooling", definition: "Cool propellant injected along walls for protection" },
      { term: "Ablative Cooling", definition: "Material burns away, absorbing heat" }
    ],
    
    quiz: {
      questions: [
        {
          id: "q15-1",
          question: "Why is regenerative cooling so effective?",
          options: [
            "Uses special materials",
            "Propellant absorbs heat before combustion - no mass penalty and very effective",
            "Engines run cooler",
            "Less fuel needed"
          ],
          correctAnswer: 1,
          explanation: "Regenerative cooling is brilliant: the propellant must flow to the chamber anyway, so route it through cooling channels first! It absorbs 50-200 MW/m² of heat, protecting the engine, with zero mass penalty. Win-win!"
        },
        {
          id: "q15-2",
          question: "Why is fuel typically used as coolant instead of oxidizer?",
          options: [
            "Fuel is cheaper",
            "Fuel has better cooling properties and is less reactive/dangerous in cooling channels",
            "Oxidizer is too cold",
            "Fuel flows faster"
          ],
          correctAnswer: 1,
          explanation: "Fuel (RP-1, CH₄, LH₂) has better heat capacity and is safer in cooling channels. Oxidizer (LOX) is highly reactive and could cause fires if it leaks. Plus hydrogen has exceptional cooling properties!"
        }
      ]
    }
  }
];

export default unit2Lessons12to15;
