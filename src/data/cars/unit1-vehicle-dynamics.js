// Unit 1: Vehicle Dynamics - MIT-Quality Content
// Lessons 6-11: Forces, acceleration, braking, cornering

export const carsUnit1Lessons = [
  {
    id: 6,
    title: "Forces on Vehicles & Traction",
    unit: "Vehicle Dynamics",
    duration: "30 min",
    introduction: "Understanding forces on vehicles is fundamental to automotive engineering. This lesson covers traction, drag, rolling resistance, and how they affect performance.",
    
    sections: [
      {
        title: "Forces Acting on Vehicle",
        content: "Four Primary Forces:\n\n1. Traction Force (F_t):\n• From tires pushing on road\n• Propels vehicle forward\n• Limited by tire grip\n\n2. Drag Force (F_d):\n• Air resistance\n• Opposes motion\n• Increases with v²\n\n3. Rolling Resistance (F_r):\n• Tire deformation\n• Road friction\n• Nearly constant with speed\n\n4. Grade Force (F_g):\n• Component of weight on slope\n• F_g = mg×sin(θ)\n\nEquation of Motion:\n\nma = F_t - F_d - F_r - F_g\n\nWhere:\n• m = mass (kg)\n• a = acceleration (m/s²)\n\nFor level ground (θ = 0):\nma = F_t - F_d - F_r\n\nDrag Force:\n\nF_d = ½ρv²C_D A\n\nWhere:\n• ρ = 1.225 kg/m³ (air density)\n• v = velocity (m/s)\n• C_D = drag coefficient\n• A = frontal area (m²)\n\nTypical Values:\n• Sports car: C_D = 0.25-0.30\n• Sedan: C_D = 0.28-0.32\n• SUV: C_D = 0.32-0.38\n• Truck: C_D = 0.35-0.45\n\nExample: Tesla Model 3\n• C_D = 0.23 (excellent!)\n• A = 2.22 m²\n• At 30 m/s (108 km/h):\n\nF_d = ½ × 1.225 × 30² × 0.23 × 2.22\nF_d = 281 N"
      },
      {
        title: "Rolling Resistance",
        content: "Rolling Resistance Force:\n\nF_r = C_rr × mg\n\nWhere:\n• C_rr = rolling resistance coefficient\n• m = mass\n• g = 9.81 m/s²\n\nTypical C_rr Values:\n• Performance tires: 0.008-0.010\n• Standard tires: 0.010-0.015\n• Off-road tires: 0.020-0.030\n• Concrete: 0.010\n• Asphalt: 0.012\n• Gravel: 0.020\n\nExample: Toyota Camry\n• Mass: 1,500 kg\n• C_rr = 0.012\n\nF_r = 0.012 × 1,500 × 9.81\nF_r = 177 N\n\nPower Required:\n\nP_r = F_r × v\n\nAt 30 m/s:\nP_r = 177 × 30 = 5,310 W = 7.1 HP\n\nJust to overcome rolling resistance!\n\nTotal Road Load:\n\nAt 30 m/s (108 km/h):\n• Rolling: 177 N\n• Drag: 281 N (Tesla Model 3)\n• Total: 458 N\n\nPower: 458 × 30 = 13,740 W = 18.4 HP\n\nAt 40 m/s (144 km/h):\n• Rolling: 177 N (same)\n• Drag: 500 N (increases with v²)\n• Total: 677 N\n\nPower: 677 × 40 = 27,080 W = 36.3 HP\n\nDrag dominates at high speed!"
      },
      {
        title: "Tire Traction & Grip",
        content: "Maximum Traction:\n\nF_max = μ × N\n\nWhere:\n• μ = coefficient of friction\n• N = normal force (weight on tire)\n\nTypical μ Values:\n• Dry asphalt: 0.8-1.0\n• Wet asphalt: 0.5-0.7\n• Snow: 0.2-0.3\n• Ice: 0.1-0.2\n\nExample: Sports Car Acceleration\n• Mass: 1,500 kg\n• Weight: 14,715 N\n• 60% on rear (drive wheels): 8,829 N\n• μ = 0.9 (dry, performance tires)\n\nF_max = 0.9 × 8,829 = 7,946 N\n\nMaximum acceleration:\na = F/m = 7,946/1,500 = 5.3 m/s²\n\nThis is 0.54 g - typical for RWD sports car\n\nTraction Circle:\n\nTotal grip limited:\n√(F_x² + F_y²) ≤ μN\n\nWhere:\n• F_x = longitudinal (accel/brake)\n• F_y = lateral (cornering)\n\nKey insight:\n• Can't brake and corner at max simultaneously\n• Must balance forces\n• Racing line optimization\n\nWeight Transfer:\n\nDuring acceleration:\n• Weight shifts to rear\n• Rear tires gain grip\n• Front tires lose grip\n• RWD benefits\n\nDuring braking:\n• Weight shifts to front\n• Front tires gain grip\n• Rear tires lose grip\n• This is why front brakes larger!"
      },
      {
        title: "Power & Torque",
        content: "Engine Power:\n\nP = τ × ω\n\nWhere:\n• P = power (W)\n• τ = torque (N·m)\n• ω = angular velocity (rad/s)\n\nConversion:\nP (HP) = τ (N·m) × RPM / 7,127\n\nExample: Honda Civic Engine\n• Torque: 220 N·m at 4,500 RPM\n• Power: 220 × 4,500 / 7,127 = 139 HP\n\nWheel Force:\n\nF = τ_wheel / r\n\nWhere:\n• τ_wheel = torque at wheel\n• r = tire radius\n\nWith transmission:\nτ_wheel = τ_engine × G_ratio × η\n\nWhere:\n• G_ratio = gear ratio\n• η = efficiency (0.85-0.95)\n\nExample: First Gear Acceleration\n• Engine torque: 220 N·m\n• First gear: 3.5:1\n• Final drive: 4.1:1\n• Total ratio: 14.35:1\n• Efficiency: 0.90\n• Tire radius: 0.32 m\n\nWheel torque:\nτ_wheel = 220 × 14.35 × 0.90 = 2,843 N·m\n\nWheel force:\nF = 2,843 / 0.32 = 8,884 N\n\nAcceleration:\na = 8,884 / 1,500 = 5.9 m/s² = 0.6 g\n\nLimited by traction!"
      }
    ],
    
    keyTakeaways: [
      "Drag force: F_d = ½ρv²C_D A; increases with speed squared",
      "Rolling resistance: F_r = C_rr×mg; nearly constant with speed",
      "Maximum traction: F_max = μ×N; limited by tire grip",
      "Traction circle: √(F_x² + F_y²) ≤ μN",
      "Power: P = τ×ω; torque and RPM determine power",
      "Wheel force: F = τ_wheel/r; depends on gear ratio"
    ],
    
    vocabulary: [
      { term: "Drag Coefficient (C_D)", definition: "Dimensionless measure of aerodynamic drag" },
      { term: "Rolling Resistance (C_rr)", definition: "Coefficient for tire deformation losses" },
      { term: "Coefficient of Friction (μ)", definition: "Ratio of friction force to normal force" },
      { term: "Traction Circle", definition: "Limit of combined longitudinal and lateral forces" },
      { term: "Weight Transfer", definition: "Load shift during acceleration or braking" },
      { term: "Gear Ratio", definition: "Ratio of input to output speed in transmission" }
    ]
  }
];

export default carsUnit1Lessons;
