// Quizzes for Automotive Lessons - Unit 0 & Unit 1
// 4 questions per lesson

export const unit0Unit1Quizzes = {
  // Lesson 0: Vehicle Dynamics Fundamentals
  0: [
    {
      id: "q0-1",
      question: "What is the formula for kinetic energy of a moving vehicle?",
      options: [
        "E = mv",
        "E = ½mv²",
        "E = ma",
        "E = mgh"
      ],
      correctAnswer: 1,
      explanation: "Kinetic energy is E = ½mv². The v² term means energy increases with the square of velocity - doubling speed requires 4× the energy to stop!"
    },
    {
      id: "q0-2",
      question: "If a car's speed doubles from 50 to 100 km/h, how much does braking distance increase?",
      options: [
        "2× longer",
        "3× longer",
        "4× longer",
        "8× longer"
      ],
      correctAnswer: 2,
      explanation: "Braking distance ∝ v². Doubling speed means 2² = 4× the braking distance. This is why speed limits matter so much for safety!"
    },
    {
      id: "q0-3",
      question: "What does Newton's Second Law (F = ma) tell us about vehicle acceleration?",
      options: [
        "Heavier vehicles accelerate faster",
        "Acceleration is proportional to force and inversely proportional to mass",
        "Force and mass are independent",
        "Acceleration depends only on engine power"
      ],
      correctAnswer: 1,
      explanation: "F = ma means a = F/m. For the same force, a heavier vehicle accelerates slower. This is why sports cars are lightweight!"
    },
    {
      id: "q0-4",
      question: "What is the coefficient of friction (μ) for dry asphalt?",
      options: [
        "μ = 0.1-0.2",
        "μ = 0.3-0.5",
        "μ = 0.8-1.0",
        "μ = 1.5-2.0"
      ],
      correctAnswer: 2,
      explanation: "Dry asphalt has μ = 0.8-1.0, providing excellent grip. Wet asphalt drops to 0.5-0.7, and ice is only 0.1-0.2!"
    }
  ],

  // Lesson 1: Powertrain Analysis
  1: [
    {
      id: "q1-1",
      question: "What is the relationship between power, torque, and RPM?",
      options: [
        "P = T × N",
        "P = T × ω (where ω = 2πN/60)",
        "P = T / ω",
        "P = T + ω"
      ],
      correctAnswer: 1,
      explanation: "Power = Torque × Angular Velocity. P = T × ω where ω = 2πN/60 converts RPM to rad/s. This is why high RPM engines make more power!"
    },
    {
      id: "q1-2",
      question: "Why do electric motors have instant torque from 0 RPM?",
      options: [
        "They have more power than ICE",
        "Torque = k_t × Current, independent of RPM",
        "They use batteries",
        "They have no transmission"
      ],
      correctAnswer: 1,
      explanation: "Electric motor torque T = k_t × I is independent of RPM. ICE engines need to rev up to build torque. This gives EVs instant acceleration!"
    },
    {
      id: "q1-3",
      question: "What is the typical thermal efficiency of a gasoline engine?",
      options: [
        "10-15%",
        "25-35%",
        "50-60%",
        "80-90%"
      ],
      correctAnswer: 1,
      explanation: "Gasoline engines are only 25-35% efficient. The rest is lost as heat! Electric motors are 95-97% efficient, which is why EVs are so much more efficient overall."
    },
    {
      id: "q1-4",
      question: "What does a gear ratio of 3:1 mean?",
      options: [
        "Output speed is 3× input speed",
        "Input speed is 3× output speed; torque is multiplied by 3",
        "Torque is divided by 3",
        "Power is multiplied by 3"
      ],
      correctAnswer: 1,
      explanation: "A 3:1 gear ratio means the input shaft rotates 3 times for every 1 output rotation. This multiplies torque by 3 but divides speed by 3. Power stays the same (minus losses)."
    }
  ],

  // Lesson 2-5 quizzes continue...
  // (Abbreviated for file size - will add in next file)

  // Lesson 6: Forces on Vehicles & Traction
  6: [
    {
      id: "q6-1",
      question: "What is the formula for aerodynamic drag force?",
      options: [
        "F_drag = ½ρv²C_D A",
        "F_drag = C_D × v",
        "F_drag = ρ × A",
        "F_drag = mv²"
      ],
      correctAnswer: 0,
      explanation: "Drag force F = ½ρv²C_D A. The v² term means drag increases dramatically with speed - doubling speed means 4× the drag force!"
    },
    {
      id: "q6-2",
      question: "What limits maximum traction force?",
      options: [
        "Engine power",
        "Tire-road friction: F_max = μN",
        "Vehicle weight only",
        "Transmission ratio"
      ],
      correctAnswer: 1,
      explanation: "Maximum traction is F_max = μN where μ is friction coefficient and N is normal force (weight on tire). This is why AWD helps - it uses all four tires!"
    },
    {
      id: "q6-3",
      question: "Why does weight transfer to the rear during acceleration?",
      options: [
        "Engine is in the rear",
        "ΔW = (a/g) × (h/L) × W due to center of gravity height",
        "Tires compress",
        "Suspension extends"
      ],
      correctAnswer: 1,
      explanation: "Weight transfer ΔW = (a/g) × (h/L) × W. The higher the CG (h) and shorter the wheelbase (L), the more weight transfers. This is why RWD cars 'squat' during acceleration!"
    },
    {
      id: "q6-4",
      question: "Why are front brakes larger than rear brakes?",
      options: [
        "Front wheels are bigger",
        "Weight transfers forward during braking, so front needs 70% of braking force",
        "Front brakes are easier to access",
        "Rear brakes are backup only"
      ],
      correctAnswer: 1,
      explanation: "During braking, weight transfers forward. Front brakes typically provide 70% of total braking force, rear only 30%. This prevents rear lockup and maintains stability."
    }
  ],

  // Lesson 7-9 continue in next section...
};

export default unit0Unit1Quizzes;
