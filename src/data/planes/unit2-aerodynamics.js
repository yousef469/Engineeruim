// Unit 2: Aerodynamics - MIT-Quality Content
// Lessons 12-15: Advanced aerodynamics (4 core lessons)

export const planesUnit2Lessons = [
  {
    id: 12,
    title: "Compressible Flow & Mach Number",
    unit: "Aerodynamics",
    duration: "30 min",
    introduction: "At high speeds, air compressibility becomes significant. Understanding compressible flow is essential for designing high-speed aircraft.",
    
    sections: [
      {
        title: "Speed of Sound & Mach Number",
        content: "Speed of Sound:\n\na = √(γRT)\n\nWhere:\n• a = speed of sound (m/s)\n• γ = 1.4 (specific heat ratio for air)\n• R = 287 J/(kg·K) (gas constant)\n• T = temperature (K)\n\nAt sea level (T = 288 K):\na = √(1.4 × 287 × 288) = 340 m/s\n\nAt 11 km altitude (T = 217 K):\na = √(1.4 × 287 × 217) = 295 m/s\n\nMach Number:\nM = V/a\n\nWhere V = aircraft velocity\n\nFlight Regimes:\n• Subsonic: M < 0.8\n• Transonic: M = 0.8-1.2\n• Supersonic: M = 1.2-5.0\n• Hypersonic: M > 5.0\n\nExample: Boeing 787 Cruise\n• Altitude: 11,000 m\n• Speed: 250 m/s\n• Temperature: 217 K\n• Speed of sound: 295 m/s\n• Mach number: M = 250/295 = 0.85\n\nCompressibility Effects:\n\nBelow M = 0.3:\n• Air acts incompressible\n• Density constant\n• Simple equations work\n\nAbove M = 0.3:\n• Density changes\n• Shock waves possible\n• Complex analysis needed"
      },
      {
        title: "Critical Mach Number",
        content: "Local Supersonic Flow:\n\nEven at subsonic flight:\n• Air accelerates over wing\n• Can reach M = 1.0 locally\n• Shock wave forms\n\nCritical Mach Number (M_cr):\nLowest flight Mach where local M = 1.0\n\nTypical values:\n• Straight wing: M_cr = 0.70-0.75\n• Swept wing: M_cr = 0.80-0.85\n• Supercritical airfoil: M_cr = 0.85-0.90\n\nDrag Divergence:\n\nAbove M_cr:\n• Shock wave forms\n• Wave drag appears\n• Total drag increases rapidly\n\nDrag rise:\nC_D = C_D0 + K(M - M_cr)²\n\nExample: Boeing 737\n• M_cr = 0.82\n• At M = 0.78: Normal drag\n• At M = 0.84: Drag increases 30%\n• At M = 0.88: Drag doubles!\n\nThis is why cruise Mach is limited\n\nSweep Angle:\n\nReduces effective Mach:\nM_eff = M × cos(Λ)\n\nWhere Λ = sweep angle\n\nExample: 30° sweep at M = 0.85\nM_eff = 0.85 × cos(30°) = 0.74\n\nDelays shock formation!\n\nBoeing 787:\n• Sweep: 32°\n• Cruise: M = 0.85\n• Effective: M = 0.72\n• Well below critical"
      },
      {
        title: "Shock Waves",
        content: "Normal Shock:\n\nPerpendicular to flow:\n• Supersonic → Subsonic\n• Pressure increases\n• Temperature increases\n• Total pressure decreases (loss)\n\nNormal shock relations:\nM₂ = √((M₁² + 2/(γ-1))/(2γM₁²/(γ-1) - 1))\n\nExample: M₁ = 1.5\nM₂ = 0.70 (subsonic after shock)\n\nPressure ratio:\nP₂/P₁ = 1 + (2γ/(γ+1))(M₁² - 1)\n\nFor M₁ = 1.5:\nP₂/P₁ = 2.46 (pressure increases 2.46×)\n\nOblique Shock:\n\nAngled to flow:\n• Weaker than normal shock\n• Less total pressure loss\n• Flow remains supersonic (if weak)\n\nShock angle (β):\ntan(β) = 2cot(θ)(M₁²sin²(β) - 1)/(M₁²(γ + cos(2β)) + 2)\n\nWhere θ = deflection angle\n\nExpansion Waves:\n\nSupersonic flow around corner:\n• Pressure decreases\n• Temperature decreases\n• Mach number increases\n• No losses (isentropic)\n\nPrandtl-Meyer function:\nν(M) = √((γ+1)/(γ-1))arctan(√((γ-1)/(γ+1)(M²-1))) - arctan(√(M²-1))\n\nUsed for supersonic wing design"
      },
      {
        title: "Transonic Aerodynamics",
        content: "Transonic Challenges:\n\nM = 0.8-1.2:\n• Mixed subsonic/supersonic flow\n• Shock waves move\n• Buffeting\n• Control issues\n\nArea Rule:\n\nSmooth cross-sectional area distribution:\n• Reduces wave drag\n• \"Coke bottle\" fuselage\n• Indents where wing joins\n\nExample: F-102\n• Original design: Poor transonic\n• Added area rule: Broke sound barrier\n• Fuselage waisted at wing\n\nSupercritical Airfoil:\n\nFlat upper surface:\n• Delays shock formation\n• Weaker shock when it forms\n• Less wave drag\n\nFeatures:\n• Flat top\n• Curved bottom\n• Aft camber\n\nBoeing 787 wing:\n• Supercritical airfoil\n• M_cr = 0.87\n• Cruise M = 0.85\n• Very efficient\n\nWinglets:\n\nReduce induced drag:\n• 3-5% fuel savings\n• Vertical tip extensions\n• Reduce wingtip vortices\n\nAlso help at transonic speeds:\n• Smooth pressure distribution\n• Delay shock formation\n\nModern airliners:\n• All have winglets\n• Various designs (blended, split, raked)\n• Significant fuel savings"
      }
    ],
    
    keyTakeaways: [
      "Speed of sound: a = √(γRT); decreases with altitude",
      "Mach number M = V/a; defines flight regime",
      "Critical Mach (M_cr): where local flow reaches M=1.0",
      "Sweep angle delays shock: M_eff = M×cos(Λ)",
      "Shock waves cause pressure rise and drag increase",
      "Supercritical airfoils and area rule reduce transonic drag"
    ],
    
    vocabulary: [
      { term: "Mach Number (M)", definition: "Ratio of aircraft speed to speed of sound" },
      { term: "Critical Mach (M_cr)", definition: "Flight Mach where local flow first reaches M=1.0" },
      { term: "Shock Wave", definition: "Discontinuity in supersonic flow; pressure rises suddenly" },
      { term: "Area Rule", definition: "Smooth cross-sectional area distribution reduces wave drag" },
      { term: "Supercritical Airfoil", definition: "Flat-top airfoil that delays shock formation" },
      { term: "Transonic", definition: "Flight regime around M=1.0 with mixed flow" }
    ]
  },

  {
    id: 13,
    title: "Supersonic Flight & Shock Waves",
    unit: "Aerodynamics",
    duration: "30 min",
    introduction: "Supersonic flight presents unique challenges. Understanding shock waves, wave drag, and supersonic aerodynamics is essential for high-speed aircraft design.",
    
    sections: [
      {
        title: "Supersonic Drag",
        content: "Wave Drag:\n\nNew drag component above M=1.0:\nD_wave = ½ρV²SC_Dwave\n\nWave drag coefficient:\nC_Dwave ≈ 4/√(M²-1) × (t/c)²\n\nWhere:\n• M = Mach number\n• t/c = thickness ratio\n\nExample: M = 2.0, t/c = 0.05\nC_Dwave = 4/√(4-1) × 0.05² = 0.0058\n\nTotal drag at supersonic:\nC_D = C_D0 + C_Di + C_Dwave\n\nF-16 at M = 1.5:\n• C_D0 = 0.015 (parasite)\n• C_Di = 0.008 (induced)\n• C_Dwave = 0.012 (wave)\n• Total: C_D = 0.035\n\nDrag increases 3× from subsonic!\n\nThrust Required:\n\nAt M = 2.0, altitude 15 km:\n• Weight: 120,000 N\n• L/D = 6 (much lower than subsonic)\n• Drag: 20,000 N\n• Thrust needed: 20,000 N\n\nCompare subsonic (M = 0.8):\n• L/D = 12\n• Drag: 10,000 N\n• Thrust: 10,000 N\n\nSupersonic needs 2× thrust!"
      },
      {
        title: "Supersonic Wing Design",
        content: "Delta Wings:\n\nTriangular planform:\n• High sweep (60-70°)\n• Large area\n• Strong structure\n• Good supersonic L/D\n\nAdvantages:\n• Low wave drag\n• High volume\n• Simple structure\n\nDisadvantages:\n• High induced drag (low speed)\n• High angle of attack\n• Poor low-speed performance\n\nExamples:\n• Concorde: 60° sweep\n• F-106: Delta wing\n• Mirage 2000: Pure delta\n\nOgive Delta:\n\nCurved leading edge:\n• Better low-speed\n• Vortex lift\n• Concorde used this\n\nVariable Sweep:\n\nWings pivot:\n• Swept for supersonic\n• Straight for subsonic\n• Best of both worlds\n\nExamples:\n• F-14 Tomcat: 20-68° sweep\n• B-1 Lancer: 15-67.5° sweep\n• Tornado: 25-67° sweep\n\nAdvantages:\n• Optimal for all speeds\n• Good carrier operations\n• Efficient cruise\n\nDisadvantages:\n• Heavy mechanism\n• Complex\n• Maintenance intensive\n\nSlender Body:\n\nLow fineness ratio:\n• Length/diameter > 10\n• Reduces wave drag\n• SR-71: Ratio = 15"
      },
      {
        title: "Sonic Boom",
        content: "Boom Formation:\n\nShock waves from:\n• Nose\n• Wing leading edge\n• Tail\n• Engine inlets\n\nCoalesce into N-wave:\n• Overpressure\n• Underpressure\n• Heard as double boom\n\nBoom Intensity:\n\nΔP = K × (W^0.75)/(h^1.25)\n\nWhere:\n• ΔP = overpressure (Pa)\n• W = weight (N)\n• h = altitude (m)\n• K = constant\n\nExample: Concorde\n• Weight: 1,800,000 N\n• Altitude: 18,000 m\n• ΔP = 100 Pa = 1 psf\n\nPerceived loudness:\n• 100 Pa: Loud boom\n• 50 Pa: Moderate\n• 20 Pa: Barely noticeable\n\nBoom Carpet:\n\nWidth on ground:\n• Typically 80-100 km wide\n• Follows flight path\n• Concorde: 100 km wide\n\nThis is why supersonic flight banned over land!\n\nBoom Mitigation:\n\nShaping:\n• Smooth area distribution\n• Reduces peak pressure\n• NASA X-59: 75 dB vs 105 dB\n\nAltitude:\n• Higher = weaker boom\n• But less efficient\n\nSpeed:\n• Lower Mach = weaker boom\n• M = 1.2 vs M = 2.0\n\nFuture supersonic:\n• Low-boom designs\n• May allow overland flight\n• NASA X-59 demonstrator"
      },
      {
        title: "Supersonic Aircraft Examples",
        content: "Concorde:\n\n• Cruise: M = 2.04\n• Altitude: 18,000 m (60,000 ft)\n• Range: 7,250 km\n• Passengers: 100\n• Engines: 4× Olympus 593\n• Thrust: 169 kN each\n• L/D: 7.5 (supersonic)\n• Fuel consumption: 25,000 kg/hour\n\nRetired 2003:\n• High operating costs\n• Sonic boom restrictions\n• Limited routes\n\nSR-71 Blackbird:\n\n• Speed: M = 3.2+ (3,540 km/h)\n• Altitude: 26,000 m (85,000 ft)\n• Range: 5,400 km\n• Crew: 2\n• Engines: 2× J58\n• Thrust: 145 kN each (afterburner)\n• Titanium structure (heat)\n• Retired 1998\n\nF-22 Raptor:\n\n• Max speed: M = 2.25 (supercruise M = 1.8)\n• Altitude: 19,800 m\n• Engines: 2× F119\n• Thrust: 156 kN each\n• Supercruise: Supersonic without afterburner\n• Stealth design\n• Active service\n\nFuture Supersonic:\n\nBoom Supersonic Overture:\n• Cruise: M = 1.7\n• Passengers: 65-80\n• Range: 7,900 km\n• Low-boom design\n• Sustainable fuel\n• Target: 2029\n\nNASA X-59:\n• Cruise: M = 1.4\n• Altitude: 16,800 m\n• Boom: 75 dB (vs 105 dB)\n• Demonstrator for quiet supersonic\n• First flight: 2024"
      }
    ],
    
    keyTakeaways: [
      "Wave drag dominates at supersonic speeds; proportional to (t/c)²",
      "Delta wings optimal for supersonic: high sweep, large area",
      "Sonic boom: ΔP ∝ W^0.75/h^1.25; limits overland flight",
      "Concorde cruised at M=2.04 with L/D=7.5",
      "Variable sweep wings optimize for all speeds but add complexity",
      "Future supersonic focuses on low-boom designs for overland flight"
    ],
    
    vocabulary: [
      { term: "Wave Drag", definition: "Drag from shock waves in supersonic flight" },
      { term: "Delta Wing", definition: "Triangular wing planform; good for supersonic" },
      { term: "Sonic Boom", definition: "Loud noise from shock waves reaching ground" },
      { term: "Supercruise", definition: "Sustained supersonic flight without afterburner" },
      { term: "Variable Sweep", definition: "Wings that pivot to optimize for different speeds" },
      { term: "N-wave", definition: "Characteristic pressure signature of sonic boom" }
    ]
  }
];

export default planesUnit2Lessons;
