// Unit 3: Aircraft Structures - MIT-Quality Content
// Lessons 14-17: Structural design and analysis (4 core lessons)

export const planesUnit3Lessons = [
  {
    id: 14,
    title: "Aircraft Structural Loads",
    unit: "Aircraft Structures",
    duration: "30 min",
    introduction: "Aircraft structures must withstand extreme loads during flight. Understanding load analysis is essential for safe structural design.",
    
    sections: [
      {
        title: "Load Factor & V-n Diagram",
        content: "Load Factor:\n\nn = L/W\n\nWhere:\n• n = load factor (g's)\n• L = lift (N)\n• W = weight (N)\n\nLevel flight: n = 1\nTurn: n = 1/cos(φ)\nPullup: n = 1 + V²/(gR)\n\nExample: 60° bank turn\nn = 1/cos(60°) = 2.0 g\n\nLimit Load Factor:\n\nCertification requirements:\n• Transport (FAR 25): n = +2.5 to -1.0\n• Utility: n = +4.4 to -1.76\n• Aerobatic: n = +6.0 to -3.0\n• Fighter: n = +9.0 to -3.0\n\nUltimate Load Factor:\nn_ult = 1.5 × n_limit\n\nStructure must withstand without failure\n\nV-n Diagram Boundaries:\n\n1. Stall line:\nV_s(n) = V_s0 × √n\n\n2. Positive limit: n = +2.5 (transport)\n\n3. Negative limit: n = -1.0\n\n4. Maximum speed: V_D (dive speed)\n\nExample: Boeing 737\n• V_s0 = 70 m/s\n• n_limit = +2.5\n• At n = 2.5: V_s = 70√2.5 = 111 m/s\n• V_D = 200 m/s\n• Operating envelope defined"
      },
      {
        title: "Wing Loads",
        content: "Lift Distribution:\n\nElliptical (ideal):\nL(y) = L_0√(1 - (y/b)²)\n\nWhere:\n• y = spanwise position\n• b = wingspan\n• L_0 = root lift\n\nActual distribution:\n• Tapered wings\n• Flaps deployed\n• Fuel in wings\n\nBending Moment:\n\nM(y) = ∫[y to b/2] L(y)×(y-y')dy'\n\nMaximum at root\n\nExample: Boeing 737 Wing\n• Span: 35.8 m\n• Weight: 700,000 N\n• Load factor: n = 2.5\n• Total lift: 1,750,000 N\n\nRoot bending moment:\nM_root ≈ 0.25 × L × b/2\nM_root = 0.25 × 1,750,000 × 17.9\nM_root = 7,831,250 N·m\n\nShear Force:\n\nV(y) = ∫[y to b/2] L(y)dy\n\nMaximum at root\n\nTorsion:\n\nT(y) = ∫[y to b/2] L(y)×x_ac dy\n\nWhere x_ac = aerodynamic center offset\n\nGust Loads:\n\nVertical gust:\nΔn = (ρVU_g a C_Lα)/(2W/S)\n\nWhere:\n• U_g = gust velocity (m/s)\n• a = lift curve slope\n• C_Lα = ∂C_L/∂α\n\nDesign gust: 15 m/s at cruise\n\nExample:\n• V = 250 m/s\n• U_g = 15 m/s\n• W/S = 6,000 N/m²\n• Δn = 0.8 g\n\nTotal: n = 1.0 + 0.8 = 1.8 g"
      },
      {
        title: "Fuselage Loads",
        content: "Pressurization:\n\nCabin pressure:\nΔP = P_cabin - P_ambient\n\nTypical cruise (11 km):\n• P_ambient = 22 kPa\n• P_cabin = 75 kPa (2,400 m equivalent)\n• ΔP = 53 kPa = 0.53 bar\n\nHoop Stress:\nσ_h = (ΔP × r)/t\n\nWhere:\n• r = fuselage radius\n• t = skin thickness\n\nExample: Boeing 787\n• Radius: 2.9 m\n• ΔP: 55 kPa\n• Thickness: 2.5 mm\n\nσ_h = (55,000 × 2.9)/0.0025\nσ_h = 63.8 MPa\n\nAluminum yield: 350 MPa\nSafety factor: 5.5 ✓\n\nLongitudinal Stress:\nσ_l = (ΔP × r)/(2t)\n\nHalf of hoop stress\n\nBending:\n\nFuselage acts as beam:\n• Wing lift creates upward force\n• Weight distributed along length\n• Maximum bending at wing root\n\nBending stress:\nσ = My/I\n\nWhere:\n• M = bending moment\n• y = distance from neutral axis\n• I = moment of inertia\n\nFatigue:\n\nPressurization cycles:\n• Each flight = 1 cycle\n• Stress range: 0 to σ_max\n• Cracks can grow\n\nDesign life:\n• Transport: 60,000 cycles\n• Business jet: 20,000 cycles\n\nInspection intervals:\n• Check for cracks\n• Eddy current\n• Ultrasonic\n• X-ray"
      },
      {
        title: "Landing Gear Loads",
        content: "Landing Impact:\n\nVertical load factor:\nn = 1 + (V_sink/V_stall) × √(2W/(ρSC_Lmax))\n\nTypical sink rate: 3 m/s\n\nExample: Boeing 737\n• V_sink = 3 m/s\n• V_stall = 70 m/s\n• n = 1 + 3/70 × correction\n• n ≈ 2.0 g\n\nDesign landing load:\nn = 3.0 g (certification)\n\nGear must support:\nF = n × W = 3.0 × 700,000 = 2,100,000 N\n\nShock Absorber:\n\nOleo-pneumatic strut:\n• Oil for damping\n• Nitrogen gas for spring\n• Stroke: 0.3-0.5 m\n\nEnergy absorption:\nE = ½mV²\n\nFor 70,000 kg at 3 m/s:\nE = ½ × 70,000 × 3² = 315,000 J\n\nStroke required:\ns = E/(F_avg)\n\nWith F_avg = 1,000,000 N:\ns = 315,000/1,000,000 = 0.32 m ✓\n\nBraking Loads:\n\nDeceleration: 0.5 g typical\n\nForward load on gear:\nF = 0.5 × W = 350,000 N\n\nTire friction:\nμ = 0.8 (dry runway)\nμ = 0.3 (wet runway)\n\nBraking distance:\ns = V²/(2μg)\n\nAt 70 m/s, dry:\ns = 70²/(2 × 0.8 × 9.81) = 312 m\n\nWith reverse thrust:\ns = 200 m (typical)"
      }
    ],
    
    keyTakeaways: [
      "Load factor n = L/W; transport aircraft certified to +2.5/-1.0 g",
      "Ultimate load = 1.5 × limit load; must not fail",
      "Wing root bending moment: M ≈ 0.25×L×b/2",
      "Pressurization hoop stress: σ_h = ΔP×r/t",
      "Landing gear designed for 3.0 g impact load",
      "Fatigue life: 60,000 pressurization cycles for transport aircraft"
    ],
    
    vocabulary: [
      { term: "Load Factor (n)", definition: "Ratio of lift to weight; measured in g's" },
      { term: "Ultimate Load", definition: "1.5× limit load; structure must not fail" },
      { term: "Hoop Stress", definition: "Circumferential stress from pressurization" },
      { term: "Bending Moment", definition: "Torque causing structure to bend" },
      { term: "Fatigue", definition: "Progressive damage from repeated loading cycles" },
      { term: "Oleo Strut", definition: "Shock absorber using oil and gas" }
    ]
  },

  {
    id: 15,
    title: "Aircraft Materials & Manufacturing",
    unit: "Aircraft Structures",
    duration: "30 min",
    introduction: "Material selection determines aircraft performance, weight, and cost. Understanding materials and manufacturing is essential for modern aircraft design.",
    
    sections: [
      {
        title: "Aluminum Alloys",
        content: "Why Aluminum?\n\nAdvantages:\n• Good strength-to-weight (2,700 kg/m³)\n• Easy to form and machine\n• Well understood\n• Relatively cheap\n• Good fatigue resistance\n\nCommon Alloys:\n\n2024-T3 (Wing skins):\n• Yield: 345 MPa\n• Ultimate: 485 MPa\n• Density: 2,780 kg/m³\n• Good fatigue life\n\n7075-T6 (High stress):\n• Yield: 505 MPa\n• Ultimate: 570 MPa\n• Density: 2,810 kg/m³\n• Highest strength aluminum\n\n6061-T6 (General purpose):\n• Yield: 240 MPa\n• Ultimate: 290 MPa\n• Easy to weld\n• Lower cost\n\nExample: Boeing 737\n• Fuselage: 2024-T3\n• Wing spars: 7075-T6\n• Fairings: 6061-T6\n• Total aluminum: 85% of structure\n\nCorrosion:\n\nAluminum corrodes:\n• Requires protection\n• Anodizing\n• Primer and paint\n• Regular inspection\n\nCorrosion types:\n• Pitting\n• Intergranular\n• Stress corrosion\n\nPrevention:\n• Protective coatings\n• Proper drainage\n• Dissimilar metal isolation"
      },
      {
        title: "Composite Materials",
        content: "Carbon Fiber Composites:\n\nProperties:\n• Tensile strength: 3,500 MPa\n• Density: 1,600 kg/m³\n• Specific strength: 2.2 MPa/(kg/m³)\n• Compare aluminum: 0.17 MPa/(kg/m³)\n\n13× better specific strength!\n\nLaminate Construction:\n\nLayers (plies):\n• 0° (longitudinal)\n• ±45° (shear)\n• 90° (transverse)\n\nTypical layup: [0/±45/90]_s\n\nThickness: 0.125 mm per ply\n\nAdvantages:\n• 20-30% weight savings\n• No corrosion\n• Better fatigue resistance\n• Complex shapes possible\n\nDisadvantages:\n• Expensive ($50-200/kg)\n• Difficult to inspect\n• Impact damage\n• Repair complexity\n\nBoeing 787:\n• 50% composite by weight\n• Wing: Carbon fiber\n• Fuselage: Carbon fiber barrels\n• Weight savings: 20%\n\nAirbus A350:\n• 53% composite\n• Similar construction\n• Competing with 787\n\nManufacturing:\n\nAutoclave:\n• Layup in mold\n• Vacuum bag\n• Heat and pressure\n• 180°C, 6 bar\n• Cures resin\n\nOut-of-autoclave:\n• Oven cure\n• Lower cost\n• Larger parts\n• Slightly lower properties"
      },
      {
        title: "Titanium & Steel",
        content: "Titanium Alloys:\n\nTi-6Al-4V (most common):\n• Yield: 880 MPa\n• Density: 4,430 kg/m³\n• Max temp: 400°C\n• Excellent corrosion resistance\n\nApplications:\n• Engine mounts\n• Landing gear\n• High-stress fittings\n• Fasteners\n\nExample: Boeing 777\n• Landing gear: Titanium\n• Engine pylons: Titanium\n• Total: 7% of structure\n\nAdvantages:\n• High strength\n• Temperature resistant\n• Corrosion proof\n\nDisadvantages:\n• Expensive ($30-50/kg)\n• Difficult to machine\n• Requires special tools\n\nSteel Alloys:\n\n300M (Landing gear):\n• Yield: 1,520 MPa\n• Ultimate: 1,860 MPa\n• Density: 7,850 kg/m³\n• Very high strength\n\nApplications:\n• Landing gear struts\n• High-load bearings\n• Actuator rods\n\nLimited use:\n• Heavy\n• Corrosion issues\n• Only where strength critical\n\nMaterial Selection:\n\nStructural efficiency:\nη = σ/ρ\n\nComparison:\n• Aluminum 7075: 180 kPa·m³/kg\n• Titanium Ti-6Al-4V: 199 kPa·m³/kg\n• Carbon fiber: 2,188 kPa·m³/kg\n• Steel 300M: 194 kPa·m³/kg\n\nCarbon fiber wins by far!"
      },
      {
        title: "Manufacturing Processes",
        content: "Sheet Metal:\n\nForming:\n• Brake press\n• Roll forming\n• Stretch forming\n• Hydroforming\n\nJoining:\n• Riveting (most common)\n• Welding (limited)\n• Bonding (adhesives)\n\nRivets:\n• Solid rivets (strongest)\n• Blind rivets (one-side access)\n• Hi-Lok (high strength)\n\nBoeing 737:\n• 500,000+ rivets\n• Mostly solid aluminum\n• Some Hi-Lok in critical areas\n\nMachining:\n\nCNC milling:\n• Wing spars from billet\n• 90% material removed!\n• Very expensive\n• High precision\n\nExample: 787 wing spar\n• Start: 10,000 kg billet\n• Finish: 1,000 kg part\n• 9,000 kg chips!\n• Cost: $500,000\n\nComposite Layup:\n\nHand layup:\n• Labor intensive\n• Low volume\n• Complex shapes\n\nAutomated tape laying:\n• Robotic\n• High volume\n• Consistent quality\n• Boeing 787 fuselage\n\nAdditive Manufacturing:\n\n3D printing:\n• Titanium parts\n• Complex geometries\n• Weight optimization\n• Topology optimization\n\nGE LEAP engine:\n• 3D printed fuel nozzles\n• 25% lighter\n• 5× more durable\n• Single piece vs 20 parts\n\nFuture:\n• More 3D printing\n• Automated assembly\n• Digital twins\n• AI optimization"
      }
    ],
    
    keyTakeaways: [
      "Aluminum alloys: 2024 for skins, 7075 for high stress, 6061 general",
      "Carbon fiber composites: 13× better specific strength than aluminum",
      "Boeing 787: 50% composite by weight, 20% weight savings",
      "Titanium for high-stress, high-temp applications (7% of structure)",
      "Riveting most common joining method: 500,000+ rivets per aircraft",
      "Additive manufacturing enables complex, optimized geometries"
    ],
    
    vocabulary: [
      { term: "Specific Strength", definition: "Strength divided by density; efficiency metric" },
      { term: "Composite Laminate", definition: "Multiple layers of fiber/resin at different angles" },
      { term: "Autoclave", definition: "Pressure vessel for curing composites with heat" },
      { term: "CNC Machining", definition: "Computer-controlled cutting from solid billet" },
      { term: "Topology Optimization", definition: "Computer algorithm to minimize weight" },
      { term: "Rivet", definition: "Mechanical fastener; most common aircraft joint" }
    ]
  }
];

export default planesUnit3Lessons;
