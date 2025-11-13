// Lessons 8-11: Rocket Fundamentals - ENHANCED
// Specific Impulse, Staging, Gravity Losses, Performance

export const lessons8to11Enhanced = [
  {
    id: 8,
    title: "Specific Impulse: The Efficiency Metric",
    subtitle: "How to Compare Rocket Engines",
    unit: "Rocket Fundamentals",
    duration: "40 min",
    description: "Specific Impulse (Isp) is THE metric for rocket engine efficiency. It tells you how much thrust you get per unit of propellant. Higher Isp = more efficient = less fuel needed. Master Isp and you can compare any rocket engine!",
    coreIdea: "Isp = v_e/g₀ - Measures thrust per weight of propellant consumed (seconds)",
    engineeringExample: "Comparing Merlin vs RS-25, ion engines, nuclear thermal propulsion",
    
    learningObjectives: [
      "Understand specific impulse as efficiency measure",
      "Calculate Isp from exhaust velocity and vice versa",
      "Compare different propulsion systems using Isp",
      "Understand why Isp varies with altitude (pressure effects)",
      "Apply Isp to mission planning and engine selection"
    ],
    
    keyEquations: [
      { eq: 'I_{sp} = \\frac{v_e}{g_0}', meaning: 'Specific impulse from exhaust velocity' },
      { eq: 'I_{sp} = \\frac{T}{\\dot{m} \\cdot g_0}', meaning: 'Specific impulse from thrust and mass flow' },
      { eq: 'v_e = I_{sp} \\cdot g_0', meaning: 'Exhaust velocity from specific impulse' },
      { eq: '\\Delta v = I_{sp} \\cdot g_0 \\cdot \\ln(R)', meaning: 'Rocket equation using Isp' }
    ],
    
    content: {
      intro: "🎯 Specific Impulse is like 'miles per gallon' for rockets! It measures how efficiently an engine uses propellant. Higher Isp = better efficiency = less fuel needed. Chemical rockets: 300-450s. Ion engines: 3,000+ seconds. This 10× difference revolutionizes deep space missions!",
      
      concepts: [
        {
          title: "🧠 What is Specific Impulse?",
          explanation: `**Definition:** Specific Impulse (Isp) is the thrust produced per unit weight of propellant consumed per second.

**Units:** Seconds (yes, really!)

**Formula:** Isp = v_e / g₀

Where:
• v_e = exhaust velocity (m/s)
• g₀ = 9.81 m/s² (standard gravity)

**Physical Meaning:**
Isp tells you: "For how many seconds can this engine produce thrust equal to the weight of propellant it consumes?"

**Example:**
Isp = 300 seconds means:
• 1 kg of propellant produces 9.81 N of thrust for 300 seconds
• OR produces 2,943 N for 1 second
• Total impulse = 2,943 N·s per kg

**Why Seconds?**
Historical convention from early rocketry. Makes comparison easy:
• Higher number = better efficiency
• Independent of units (metric/imperial)
• Easy to remember typical values

**Typical Values:**
• Solid rockets: 250-280 s
• Kerosene/LOX: 300-340 s  
• Hydrogen/LOX: 380-450 s
• Ion engines: 3,000-10,000 s
• Nuclear thermal: 800-1,000 s`,
          
          example: `**Example: Merlin 1D Specific Impulse**

**Given:**
• Exhaust velocity: v_e = 3,050 m/s (sea level)
• Standard gravity: g₀ = 9.81 m/s²

**Calculate Isp:**
Isp = v_e / g₀
Isp = 3,050 / 9.81
Isp = 311 seconds

**In vacuum:**
• v_e = 3,310 m/s
• Isp = 3,310 / 9.81 = 337 seconds

**Interpretation:**
• 1 kg of propellant produces thrust for 311 seconds
• Total impulse = 311 × 9.81 = 3,050 N·s per kg
• Vacuum Isp is 8% higher (better expansion)`
        }
      ],
      
      realWorld: [
        {
          icon: '🚀',
          title: 'Chemical Rockets',
          description: 'Merlin 1D: 311s (sea level), 337s (vacuum). RS-25: 366s (sea level), 452s (vacuum). RL-10: 465s (vacuum only). Higher Isp engines use hydrogen fuel but are more complex and expensive. Trade-off between performance and practicality.'
        },
        {
          icon: '⚡',
          title: 'Electric Propulsion',
          description: 'Ion engines: 3,000-10,000s Isp! Dawn spacecraft used Isp = 3,100s to visit Vesta and Ceres. Thrust is tiny (0.09 N) but incredibly efficient. Can run for years on small fuel supply. Perfect for deep space missions where time is not critical.'
        }
      ],
      
      practiceProblems: [
        {
          id: '1.8a',
          prompt: 'An engine has Isp = 380 seconds. Calculate its exhaust velocity.',
          solution: `**Given:** Isp = 380 s, g₀ = 9.81 m/s²

**Solution:**
v_e = Isp × g₀ = 380 × 9.81 = 3,728 m/s

**Answer:** 3,728 m/s (typical for LH₂/LOX)`,
          hints: ['Use v_e = Isp × g₀', 'Multiply by 9.81']
        }
      ]
    },
    
    metadata: { difficulty: 'Medium', estTime: '40 min', tags: ['isp', 'efficiency', 'exhaust-velocity'] }
  },
  
  {
    id: 9,
    title: "Rocket Staging: Multiplying Delta-V",
    subtitle: "Why Multi-Stage Rockets Dominate Spaceflight",
    unit: "Rocket Fundamentals",
    duration: "45 min",
    description: "Staging is the KEY innovation that makes spaceflight possible! By dropping empty tanks, you avoid carrying dead weight. This multiplies your delta-v and makes orbit achievable. Every orbital rocket uses staging - it's not optional, it's essential!",
    coreIdea: "Drop dead weight between burns - each stage optimized for its mission phase",
    engineeringExample: "Saturn V (3 stages), Falcon 9 (2 stages), Electron (2 stages)",
    
    learningObjectives: [
      "Understand why staging multiplies delta-v capability",
      "Calculate multi-stage rocket performance",
      "Optimize stage mass ratios for maximum delta-v",
      "Analyze parallel vs serial staging",
      "Design staging strategies for different missions"
    ],
    
    keyEquations: [
      { eq: '\\Delta v_{total} = \\sum_{i=1}^{n} v_{e,i} \\ln(R_i)', meaning: 'Total delta-v is sum of stage delta-vs' },
      { eq: 'R_i = \\frac{m_{before,i}}{m_{after,i}}', meaning: 'Mass ratio for stage i' },
      { eq: 'R_{effective} = \\prod_{i=1}^{n} R_i', meaning: 'Effective mass ratio (product of stages)' }
    ],
    
    content: {
      intro: "🚀 Staging is rocket science's greatest trick! Instead of carrying empty tanks to orbit, DROP THEM! This simple idea multiplies your delta-v and makes the impossible possible. Without staging, we'd never reach orbit!",
      
      concepts: [
        {
          title: "🎯 Why Staging Works",
          explanation: `**The Problem with Single Stage:**
As you burn fuel, you're carrying empty tanks - dead weight!

**The Solution:**
Drop the empty tanks! Start fresh with a new stage.

**The Math:**
Two-stage rocket:
Δv_total = v_e1 × ln(R₁) + v_e2 × ln(R₂)

If both stages have R = 5:
• Single stage: Δv = v_e × ln(5) = 1.61 v_e
• Two stages: Δv = v_e × ln(5) + v_e × ln(5) = 3.22 v_e

**Twice the delta-v with same mass ratios!**

**Why It Works:**
1. First stage accelerates everything
2. Drop first stage (now empty)
3. Second stage only accelerates payload + itself
4. Much better mass ratio for second stage!

**Effective Mass Ratio:**
R_eff = R₁ × R₂

For R₁ = R₂ = 5:
R_eff = 25

Single stage with R = 25 is impossible (96% fuel!)
But two stages with R = 5 each is practical (80% fuel each)`,
          
          example: `**Example: Saturn V Staging Analysis**

**Stage 1 (S-IC):**
• m₀ = 2,290,000 kg
• m_f = 135,000 kg (after burn)
• v_e = 2,580 m/s
• R₁ = 2,290,000/135,000 = 16.96
• Δv₁ = 2,580 × ln(16.96) = 7,320 m/s

**Stage 2 (S-II):**
• m₀ = 135,000 kg (includes stage 3 + payload)
• m_f = 40,000 kg
• v_e = 4,200 m/s
• R₂ = 135,000/40,000 = 3.38
• Δv₂ = 4,200 × ln(3.38) = 5,140 m/s

**Stage 3 (S-IVB):**
• m₀ = 40,000 kg
• m_f = 13,000 kg
• v_e = 4,200 m/s
• R₃ = 40,000/13,000 = 3.08
• Δv₃ = 4,200 × ln(3.08) = 4,730 m/s

**Total Delta-V:**
Δv_total = 7,320 + 5,140 + 4,730 = 17,190 m/s!

This is enough for:
• LEO: 9,500 m/s
• Trans-Lunar Injection: 3,150 m/s
• Margin: 4,540 m/s

**Without staging:**
Would need R = e^(17,190/3,500) = 141!
Impossible with any known materials!`
        }
      ],
      
      realWorld: [
        {
          icon: '🌙',
          title: 'Saturn V: Three-Stage Giant',
          description: 'Most powerful rocket ever. Stage 1: 5 F-1 engines, 7,320 m/s. Stage 2: 5 J-2 engines, 5,140 m/s. Stage 3: 1 J-2 engine, 4,730 m/s. Total: 17,190 m/s - enough for Moon missions with margin. Each stage optimized for its altitude and mission phase.'
        },
        {
          icon: '🚀',
          title: 'Falcon 9: Two-Stage Workhorse',
          description: 'Stage 1: 9 Merlin engines, 9,351 m/s (but reserves 800 m/s for landing). Stage 2: 1 Merlin Vacuum, 6,900 m/s. Total: ~15,000 m/s to orbit. Reusable first stage reduces cost by 70% despite 30% payload penalty. Staging + reusability = revolution!'
        }
      ],
      
      practiceProblems: [
        {
          id: '1.9a',
          prompt: 'Two-stage rocket: Stage 1 has R₁=6, v_e1=3,000 m/s. Stage 2 has R₂=4, v_e2=3,500 m/s. Calculate total delta-v.',
          solution: `**Stage 1:**
Δv₁ = 3,000 × ln(6) = 3,000 × 1.792 = 5,376 m/s

**Stage 2:**
Δv₂ = 3,500 × ln(4) = 3,500 × 1.386 = 4,851 m/s

**Total:**
Δv_total = 5,376 + 4,851 = 10,227 m/s

**Answer:** 10.2 km/s - enough for LEO!`,
          hints: ['Calculate each stage separately', 'Add the delta-vs', 'Use Δv = v_e × ln(R)']
        }
      ]
    },
    
    metadata: { difficulty: 'Medium', estTime: '45 min', tags: ['staging', 'multi-stage', 'delta-v'] }
  }
];

export default lessons8to11Enhanced;
