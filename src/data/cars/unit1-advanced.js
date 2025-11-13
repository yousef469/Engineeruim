// Unit 1: Vehicle Dynamics - Advanced Topics
// Lessons 7-9: Acceleration, braking, cornering

export const carsUnit1AdvancedLessons = [
  {
    id: 7,
    title: "Acceleration Performance & 0-60 Times",
    unit: "Vehicle Dynamics",
    duration: "25 min",
    introduction: "Acceleration performance is a key metric for vehicles. Understanding the physics of acceleration helps optimize performance and predict 0-60 times.",
    
    sections: [
      {
        title: "Acceleration Equation",
        content: "Newton's Second Law:\n\nma = F_drive - F_drag - F_rr\n\nAt low speed (drag negligible):\nma ≈ F_drive - F_rr\n\nMaximum acceleration limited by:\n1. Engine power\n2. Tire traction\n3. Weight distribution\n\nTraction-Limited:\n\na_max = μg × (Weight on drive wheels / Total weight)\n\nExample: RWD Sports Car\n• μ = 0.9\n• 60% weight on rear\n• a_max = 0.9 × 9.81 × 0.6 = 5.3 m/s² = 0.54 g\n\nAWD advantage:\n• 100% weight available\n• a_max = 0.9 × 9.81 = 8.8 m/s² = 0.90 g\n\n67% better!\n\n0-60 mph Calculation:\n\nSimplified (constant acceleration):\nt = v/a\n\nFor 0-60 mph (0-26.8 m/s):\n• RWD: t = 26.8/5.3 = 5.1 seconds\n• AWD: t = 26.8/8.8 = 3.0 seconds\n\nReal Performance:\n\nTesla Model 3 Performance:\n• 0-60: 3.1 seconds\n• AWD electric\n• Instant torque\n• Traction limited\n\nPorsche 911 Turbo:\n• 0-60: 2.6 seconds\n• AWD\n• Launch control\n• 640 HP\n\nToyota Camry:\n• 0-60: 7.5 seconds\n• FWD\n• 203 HP\n• Economy focused"
      },
      {
        title: "Braking Performance",
        content: "Braking Force:\n\nF_brake = μ × mg\n\nMaximum deceleration:\na_max = μg\n\nTypical values:\n• Dry road: μ = 0.8-1.0\n• a_max = 7.8-9.8 m/s² (0.8-1.0 g)\n\nBraking Distance:\n\ns = v²/(2a)\n\nFrom 30 m/s (108 km/h):\n• a = 8 m/s²\n• s = 30²/(2×8) = 56 m\n\nFrom 40 m/s (144 km/h):\n• s = 40²/(2×8) = 100 m\n\n78% increase for 33% speed increase!\n\nWeight Transfer:\n\nDuring braking:\nΔW_f = (a/g) × h/L × W\n\nWhere:\n• h = CG height\n• L = wheelbase\n• W = weight\n\nExample: Sedan\n• Weight: 15,000 N\n• h = 0.5 m\n• L = 2.7 m\n• a = 8 m/s²\n\nΔW_f = (8/9.81) × (0.5/2.7) × 15,000\nΔW_f = 2,240 N\n\nFront gains 2,240 N\nRear loses 2,240 N\n\nThis is why:\n• Front brakes larger (70% braking)\n• Rear brakes smaller (30% braking)\n• Prevents rear lockup\n\nABS (Anti-lock Braking):\n\nPrevents wheel lockup:\n• Monitors wheel speed\n• Releases brake if locking\n• Pulses 10-15 times/second\n• Maintains steering control\n\nBraking with ABS:\n• Slightly longer distance\n• But maintains control\n• Can steer while braking\n• Essential safety feature"
      },
      {
        title: "Cornering Dynamics",
        content: "Centripetal Force:\n\nF_c = mv²/R\n\nWhere:\n• m = mass\n• v = velocity\n• R = turn radius\n\nProvided by tire lateral force:\nF_y = μN\n\nMaximum cornering speed:\nv_max = √(μgR)\n\nExample: 50 m radius turn\n• μ = 0.9\n• v_max = √(0.9 × 9.81 × 50)\n• v_max = 21 m/s = 76 km/h\n\nLateral Acceleration:\n\na_y = v²/R = μg\n\nTypical limits:\n• Economy car: 0.7-0.8 g\n• Sports car: 1.0-1.2 g\n• Race car: 1.5-2.0 g\n• F1 car: 4-6 g!\n\nSlip Angle:\n\nTire deforms:\n• Points one direction\n• Travels slightly different\n• Angle = slip angle (α)\n\nLateral force:\nF_y = C_α × α\n\nWhere C_α = cornering stiffness\n\nTypical: α = 2-8° for max grip\n\nUndersteering vs Oversteering:\n\nUndersteer (front slides first):\n• Safe, predictable\n• Turn less than steering input\n• Most road cars\n\nOversteer (rear slides first):\n• Exciting, challenging\n• Turn more than input\n• Sports cars, RWD\n\nNeutral:\n• Balanced\n• Rare\n• Ideal for racing"
      }
    ],
    
    keyTakeaways: [
      "Drag force increases with v²: F_d = ½ρv²C_D A",
      "Rolling resistance nearly constant: F_r = C_rr×mg",
      "Maximum acceleration limited by tire traction: a_max = μg",
      "Braking distance: s = v²/(2μg); doubles when speed increases 41%",
      "Cornering speed: v_max = √(μgR); limited by tire grip",
      "Weight transfer during braking: front gains, rear loses"
    ],
    
    vocabulary: [
      { term: "Drag Coefficient (C_D)", definition: "Dimensionless aerodynamic drag measure" },
      { term: "Rolling Resistance (C_rr)", definition: "Tire deformation coefficient; typically 0.010-0.015" },
      { term: "Traction", definition: "Grip between tire and road; F = μN" },
      { term: "Weight Transfer", definition: "Load shift during acceleration or braking" },
      { term: "Slip Angle", definition: "Angle between tire direction and travel direction" },
      { term: "Understeer", definition: "Front tires lose grip first; safe handling" }
    ]
  }
];

export default carsUnit1AdvancedLessons;
