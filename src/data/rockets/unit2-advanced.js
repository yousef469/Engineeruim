// Unit 2: Rocket Propulsion Physics - Advanced Topics
// Lessons 16-19: Thrust vectoring, engine cycles, performance analysis

export const unit2AdvancedLessons = [
  {
    id: 16,
    title: "Thrust Vectoring & Engine Control",
    unit: "Rocket Propulsion Physics",
    duration: "25 min",
    introduction: "Thrust vectoring allows rockets to steer by changing the direction of thrust. This is essential for guidance, stability, and precision maneuvers including landing.",
    
    sections: [
      {
        title: "Thrust Vectoring Methods",
        content: "Why Thrust Vectoring?\n\nRockets need to:\n• Correct trajectory during ascent\n• Maintain stability\n• Perform orbital maneuvers\n• Land precisely (SpaceX)\n\nMethods:\n\n1. Gimbaled Engine:\n• Engine pivots on mount\n• Typical range: ±5-15°\n• Most common method\n• Used in: Most liquid engines\n\n2. Jet Vanes:\n• Vanes in exhaust deflect flow\n• Simple, reliable\n• High drag, erosion\n• Used in: V-2, early missiles\n\n3. Vernier Thrusters:\n• Small auxiliary engines\n• Point in different directions\n• Precise control\n• Used in: Soyuz, some spacecraft\n\n4. Differential Throttling:\n• Multiple engines at different thrust\n• No moving parts\n• Limited authority\n• Used in: Falcon Heavy center core\n\nGimbal Mechanics:\n\nGimbal angle: θ\nThrust components:\n• Axial: T_axial = T × cos(θ)\n• Lateral: T_lateral = T × sin(θ)\n\nFor small angles (θ < 15°):\n• cos(θ) ≈ 1\n• sin(θ) ≈ θ (radians)\n• T_lateral ≈ T × θ\n\nExample: 10° gimbal, 1,000 kN thrust\n• θ = 10° = 0.174 rad\n• T_lateral = 1,000 × 0.174 = 174 kN\n• T_axial = 1,000 × 0.985 = 985 kN"
      },
      {
        title: "Control Authority & Moments",
        content: "Moment Arm:\n\nTorque = Force × Distance\nτ = T_lateral × L\n\nWhere:\n• τ = torque (N·m)\n• T_lateral = lateral thrust\n• L = distance from center of mass\n\nExample: Falcon 9 First Stage\n\n• 9 Merlin engines\n• Outer engines: L = 4 m from centerline\n• Thrust per engine: 845 kN\n• Gimbal: ±15°\n\nMaximum torque (one engine):\n• T_lateral = 845 × sin(15°) = 219 kN\n• τ = 219 × 4 = 876 kN·m\n\nWith 4 outer engines gimbaling:\n• Total torque: 3,504 kN·m\n• Enormous control authority!\n\nControl Requirements:\n\nPitch/Yaw control:\n• Need torque to rotate vehicle\n• Overcome aerodynamic forces\n• Maintain stability\n\nRoll control:\n• Differential gimbal\n• Or dedicated roll thrusters\n• Less critical during ascent\n\nGimbal Actuation:\n\nHydraulic:\n• High force capability\n• Fast response\n• Used in: Most large engines\n• Example: RS-25, F-1\n\nElectromechanical:\n• Electric motors + gears\n• Simpler, lighter\n• Used in: Modern engines\n• Example: Merlin 1D\n\nActuator Requirements:\n• Force: 50-500 kN\n• Speed: 5-20°/second\n• Precision: ±0.1°\n• Reliability: Critical"
      },
      {
        title: "Throttling Capability",
        content: "Why Throttle?\n\nReasons to vary thrust:\n• Limit max-Q loads\n• Control acceleration (protect payload)\n• Precision landing\n• Abort scenarios\n• Orbital insertion accuracy\n\nThrottling Methods:\n\n1. Vary Propellant Flow:\n• Adjust turbopump speed\n• Change valve positions\n• Maintain mixture ratio\n• Most common\n\n2. Engine Shutdown:\n• Turn off some engines\n• Discrete steps\n• Simple but coarse\n• Example: Falcon 9 (9→3→1 engines)\n\n3. Pulse Mode:\n• Rapid on/off cycling\n• Average thrust control\n• Used in: Thrusters\n\nThrottle Range:\n\nTypical ranges:\n• Merlin 1D: 40-100%\n• Raptor: 40-100%\n• RS-25: 67-109%\n• RL-10: 60-100%\n\nLimitations:\n\nMinimum throttle limited by:\n• Combustion stability\n• Turbopump operation\n• Cooling requirements\n• Mixture ratio control\n\nBelow minimum:\n• Unstable combustion\n• Risk of flameout\n• Possible engine damage\n\nThrottle Response:\n\nTime to change thrust:\n• Typical: 0.5-2 seconds\n• Limited by:\n  - Propellant line dynamics\n  - Turbopump inertia\n  - Control system response\n\nFaster response = better control\n\nLanding Application:\n\nFalcon 9 Landing Burn:\n\n• Start: 3 engines at 100%\n• Mid-burn: Throttle to 70%\n• Final: 1 engine at 40-70%\n• Touchdown: Shutdown\n\nChallenge: Minimum thrust > weight\n• 1 engine at 40% = 338 kN\n• Stage mass = 25,000 kg\n• Weight = 245 kN\n• TWR = 1.38 (still accelerating!)\n\nSolution: Suicide burn\n• Time perfectly\n• Reach zero velocity at ground\n• No hover capability"
      },
      {
        title: "Engine Health Monitoring",
        content: "Critical Parameters:\n\nMeasured continuously:\n• Chamber pressure\n• Turbopump speed\n• Propellant flow rates\n• Temperatures (multiple points)\n• Vibration levels\n• Thrust (load cells)\n\nTypical sensor count:\n• Small engine: 20-50 sensors\n• Large engine: 100-200 sensors\n• RS-25: 400+ sensors\n\nFailure Detection:\n\nAnomalies to detect:\n• Pressure drop (leak, blockage)\n• Temperature spike (cooling failure)\n• Vibration increase (bearing failure)\n• Thrust loss (combustion issue)\n• Mixture ratio shift\n\nResponse time:\n• Detection: <0.1 seconds\n• Decision: <0.5 seconds\n• Action: Shutdown or compensate\n\nRedundancy & Fault Tolerance:\n\nEngine-out capability:\n• Falcon 9: Can reach orbit with 1 engine out\n• Saturn V: Could reach orbit with 1 F-1 out\n• Space Shuttle: No engine-out capability\n\nDesign philosophy:\n• Multiple engines better than one huge engine\n• Allows graceful degradation\n• Improves mission success rate\n\nModern Control Systems:\n\nFalcon 9:\n• Real-time thrust optimization\n• Automatic engine-out compensation\n• Adaptive trajectory planning\n• Proven in flight (CRS-1 mission)\n\nStarship:\n• 33 Raptor engines (Super Heavy)\n• Can lose several and still succeed\n• Distributed control\n• Redundant systems\n\nReusability Considerations:\n\nPost-flight inspection:\n• Sensor data analysis\n• Visual inspection\n• Non-destructive testing\n• Component life tracking\n\nMaintenance triggers:\n• Cycle count\n• Anomaly detection\n• Wear indicators\n• Scheduled overhaul\n\nMerlin 1D:\n• Designed for 10+ flights\n• Minimal refurbishment\n• Proven: 15+ flights on some engines"
      }
    ],
    
    keyTakeaways: [
      "Thrust vectoring enables steering by gimbaling engines ±5-15°",
      "Control authority depends on thrust magnitude and moment arm",
      "Throttling allows thrust variation from 40-100% for most engines",
      "Engine health monitoring uses 100+ sensors for real-time fault detection",
      "Multiple engines provide engine-out capability and redundancy",
      "Modern engines designed for reusability with minimal refurbishment"
    ],
    
    vocabulary: [
      { term: "Thrust Vectoring", definition: "Changing thrust direction to control vehicle attitude" },
      { term: "Gimbal", definition: "Pivoting mount that allows engine to rotate" },
      { term: "Control Authority", definition: "Ability to generate torque for vehicle control" },
      { term: "Throttling", definition: "Varying engine thrust level" },
      { term: "Engine-Out Capability", definition: "Ability to complete mission with one or more engines failed" }
    ],
    
    practiceProblems: [
      {
        id: "16-1",
        problem: "An engine gimbals 12° with thrust 1,200 kN. Calculate lateral and axial thrust components.",
        solution: "θ = 12° = 0.209 rad\nT_lateral = T × sin(θ) = 1,200 × sin(12°) = 1,200 × 0.208 = 250 kN\nT_axial = T × cos(θ) = 1,200 × cos(12°) = 1,200 × 0.978 = 1,174 kN\nLateral thrust provides steering, axial provides forward acceleration.",
        hint: "Use T_lateral = T×sin(θ) and T_axial = T×cos(θ)"
      },
      {
        id: "16-2",
        problem: "Falcon 9 has 4 outer engines at L=4m from centerline, each producing 845 kN thrust. If all gimbal 10°, calculate total torque.",
        solution: "Per engine: T_lateral = 845 × sin(10°) = 147 kN\nTorque per engine: τ = 147 × 4 = 588 kN·m\nTotal (4 engines): τ_total = 4 × 588 = 2,352 kN·m\nEnormous control authority!",
        hint: "Calculate lateral thrust, then torque = force × distance, then multiply by 4 engines"
      },
      {
        id: "16-3",
        problem: "Why can't Falcon 9 hover during landing?",
        solution: "Minimum thrust: 1 engine at 40% = 845 × 0.40 = 338 kN\nStage weight at landing: ~25,000 kg × 9.81 = 245 kN\nTWR = 338/245 = 1.38 > 1.0\nMinimum thrust exceeds weight, so it can't hover! Must use 'suicide burn' - time perfectly to reach zero velocity at touchdown.",
        hint: "Compare minimum thrust to stage weight"
      },
      {
        id: "16-4",
        problem: "An engine throttles from 100% to 60% in 1.5 seconds. If thrust is 2,000 kN at 100%, what is the average thrust change rate?",
        solution: "Thrust change: 2,000 × (1.00 - 0.60) = 800 kN\nTime: 1.5 seconds\nRate: 800/1.5 = 533 kN/s\nThis rapid response enables precise control during landing and ascent.",
        hint: "Calculate thrust change, then divide by time"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q16-1",
          question: "What is thrust vectoring?",
          options: [
            "Increasing thrust",
            "Changing thrust direction by gimbaling engines to control vehicle attitude",
            "Throttling engines",
            "Shutting down engines"
          ],
          correctAnswer: 1,
          explanation: "Thrust vectoring changes the direction of thrust by pivoting (gimbaling) the engine. This creates lateral force for steering and attitude control!"
        },
        {
          id: "q16-2",
          question: "What is the typical gimbal range for rocket engines?",
          options: [
            "±1-3°",
            "±5-15° (provides sufficient control authority)",
            "±20-30°",
            "±45°"
          ],
          correctAnswer: 1,
          explanation: "Most rocket engines gimbal ±5-15°. This provides sufficient lateral thrust for control while maintaining most thrust in the axial direction. Larger angles would waste too much thrust!"
        },
        {
          id: "q16-3",
          question: "Why is throttling capability important for landing?",
          options: [
            "To save fuel",
            "To control descent rate and achieve precise touchdown velocity",
            "To reduce noise",
            "For safety only"
          ],
          correctAnswer: 1,
          explanation: "Throttling allows precise control of descent rate during landing. Without it, you can't adjust for variations in mass, wind, or trajectory. Essential for SpaceX-style propulsive landing!"
        },
        {
          id: "q16-4",
          question: "What is engine-out capability?",
          options: [
            "Ability to shut down engines",
            "Ability to complete mission even if one or more engines fail",
            "Ability to restart engines",
            "Ability to throttle"
          ],
          correctAnswer: 1,
          explanation: "Engine-out capability means the rocket can still complete its mission if one or more engines fail. Falcon 9 can reach orbit with 1 engine out. This requires multiple engines and excess performance!"
        },
        {
          id: "q16-5",
          question: "Why do modern engines use electromechanical actuators instead of hydraulic?",
          options: [
            "Cheaper",
            "Simpler, lighter, and more reliable (no hydraulic fluid)",
            "Faster",
            "More powerful"
          ],
          correctAnswer: 1,
          explanation: "Electromechanical actuators (electric motors + gears) are simpler, lighter, and more reliable than hydraulic systems. No hydraulic fluid, pumps, or lines needed. Merlin 1D uses this approach!"
        }
      ]
    }
  },

  {
    id: 17,
    title: "Engine Cycles Comparison",
    unit: "Rocket Propulsion Physics",
    duration: "30 min",
    introduction: "Different engine cycles represent fundamental trade-offs between performance, complexity, and reliability. Understanding these cycles is essential for engine selection and design.",
    
    sections: [
      {
        title: "Gas Generator Cycle Deep Dive",
        content: "Operating Principle:\n\n1. Small amount of propellant burned separately\n2. Hot gas drives turbine\n3. Turbine drives pumps\n4. Exhaust dumped overboard (not through main nozzle)\n\nPropellant Split:\n• Main combustion: 97-98%\n• Gas generator: 2-3%\n\nGas Generator Conditions:\n• Temperature: 800-1,000 K (fuel-rich)\n• Pressure: 5-15 MPa\n• Mixture ratio: Very fuel-rich (prevents melting)\n\nAdvantages:\n✓ Simple design\n✓ Proven reliability\n✓ Lower development cost\n✓ Easier to manufacture\n✓ Good throttle range\n\nDisadvantages:\n✗ 2-3% propellant wasted\n✗ Lower chamber pressure possible\n✗ Slightly lower I_sp\n\nPerformance:\n• Efficiency: 95-97%\n• I_sp: 300-340 s (RP-1/LOX)\n• Chamber pressure: 5-15 MPa\n\nExamples:\n\nMerlin 1D (SpaceX):\n• P_c: 9.7 MPa\n• I_sp: 282 s (SL), 311 s (Vac)\n• Thrust: 845 kN (SL)\n• Cost: ~$1M\n• Reliability: 99.7%\n\nF-1 (Saturn V):\n• P_c: 7.0 MPa\n• I_sp: 263 s (SL), 304 s (Vac)\n• Thrust: 6,770 kN (SL)\n• Most powerful single-chamber engine ever\n\nRD-107/108 (Soyuz):\n• P_c: 5.8 MPa\n• I_sp: 257 s (SL), 320 s (Vac)\n• Thrust: 1,000 kN (SL)\n• Most flown rocket engine (1,900+ flights)"
      },
      {
        title: "Staged Combustion Cycle",
        content: "Operating Principle:\n\n1. All propellant goes through turbopump\n2. Pre-burner creates hot gas\n3. Hot gas drives turbine\n4. Turbine exhaust goes to main chamber\n5. No propellant wasted!\n\nTwo Variants:\n\n1. Fuel-Rich Staged Combustion:\n• Pre-burner runs very fuel-rich\n• Lower temperature (protects turbine)\n• Fuel-rich gas to main chamber\n• Used in: RD-180, RD-191\n\n2. Oxidizer-Rich Staged Combustion:\n• Pre-burner runs oxidizer-rich\n• Higher temperature (more power)\n• Requires exotic materials\n• Used in: RS-25, RD-170\n\nAdvantages:\n✓ Maximum efficiency (99%)\n✓ Higher chamber pressure possible\n✓ Better I_sp\n✓ All propellant through nozzle\n\nDisadvantages:\n✗ Very complex design\n✗ Difficult development\n✗ Higher cost\n✗ More failure modes\n✗ Harder to throttle\n\nPerformance:\n• Efficiency: 98-99%\n• I_sp: 340-465 s\n• Chamber pressure: 15-30 MPa\n\nExamples:\n\nRS-25 (Space Shuttle):\n• Oxidizer-rich staged combustion\n• P_c: 20.6 MPa\n• I_sp: 366 s (SL), 452 s (Vac)\n• Thrust: 1,860 kN (SL)\n• Throttle: 67-109%\n• Cost: ~$50M\n• Most complex engine ever\n\nRD-180 (Atlas V):\n• Fuel-rich staged combustion\n• P_c: 26.7 MPa\n• I_sp: 311 s (SL), 338 s (Vac)\n• Thrust: 3,827 kN (SL)\n• Dual combustion chambers\n• Russian engineering masterpiece\n\nRD-170 (Energia, Zenit):\n• Oxidizer-rich staged combustion\n• P_c: 24.5 MPa\n• I_sp: 309 s (SL), 337 s (Vac)\n• Thrust: 7,257 kN (SL)\n• Most powerful liquid engine ever"
      },
      {
        title: "Full-Flow Staged Combustion",
        content: "Operating Principle:\n\n1. Two separate pre-burners\n2. Fuel pre-burner: Fuel-rich\n3. Oxidizer pre-burner: Oxidizer-rich\n4. Both drive separate turbines\n5. Both exhausts meet in main chamber\n6. Complete combustion there\n\nAdvantages:\n✓ Highest possible efficiency (99.5%)\n✓ Lower turbine temperatures\n✓ Better reliability potential\n✓ Higher power density\n✓ Optimal for both propellants\n\nDisadvantages:\n✗ Most complex design\n✗ Two pre-burners\n✗ Dual turbopump system\n✗ Very difficult development\n✗ Highest cost\n\nPerformance:\n• Efficiency: 99-99.5%\n• I_sp: 350-380 s (CH₄/LOX)\n• Chamber pressure: 25-35 MPa\n\nWhy So Difficult?\n\nChallenges:\n• Two pre-burners to develop\n• Complex plumbing\n• Precise flow control\n• Synchronization required\n• More potential failure modes\n\nDevelopment History:\n• Concept: 1960s (Soviet Union)\n• RD-270: Developed but cancelled\n• Decades of attempts\n• Raptor: First operational FFSC (2019)\n\nSpaceX Raptor:\n\nBreakthrough achievement:\n• P_c: 30.0 MPa (world record)\n• I_sp: 327 s (SL), 380 s (Vac)\n• Thrust: 2,300 kN (SL)\n• Propellant: CH₄/LOX\n• Throttle: 40-100%\n• Designed for 1,000+ uses\n\nRaptor 2 Improvements:\n• Simplified design (fewer parts)\n• Higher thrust: 2,300 kN\n• Better manufacturing\n• Lower cost: Target <$250k\n\nWhy Raptor Succeeded:\n• Modern materials\n• Advanced manufacturing (3D printing)\n• Computational design\n• Rapid iteration\n• Vertical integration"
      },
      {
        title: "Cycle Comparison & Selection",
        content: "Performance Comparison:\n\nGas Generator:\n• I_sp: 300-340 s\n• P_c: 5-15 MPa\n• Complexity: Low\n• Cost: Low\n• Reliability: High\n• Development: Easy\n\nStaged Combustion:\n• I_sp: 340-465 s\n• P_c: 15-30 MPa\n• Complexity: High\n• Cost: High\n• Reliability: Medium\n• Development: Hard\n\nFull-Flow SC:\n• I_sp: 350-380 s\n• P_c: 25-35 MPa\n• Complexity: Very High\n• Cost: Very High (initially)\n• Reliability: TBD (promising)\n• Development: Very Hard\n\nExpander Cycle:\n• I_sp: 430-465 s\n• P_c: 5-10 MPa\n• Complexity: Medium\n• Cost: Medium\n• Reliability: Very High\n• Development: Medium\n• Limitation: Small engines only\n\nSelection Criteria:\n\nFirst Stage:\n• Need: High thrust, reliability\n• Best: Gas generator or staged combustion\n• Examples: Merlin, RD-180, F-1\n\nUpper Stage:\n• Need: High I_sp, restartable\n• Best: Expander or staged combustion\n• Examples: RL-10, Vinci, RL-10\n\nReusable:\n• Need: Durability, throttle, cost\n• Best: Gas generator or full-flow SC\n• Examples: Merlin, Raptor\n\nDeep Space:\n• Need: Maximum I_sp\n• Best: LH₂/LOX expander\n• Examples: RL-10, Vinci\n\nReal-World Choices:\n\nFalcon 9:\n• Both stages: Gas generator\n• Reason: Simplicity, cost, reusability\n• Trade-off: Slightly lower I_sp\n\nStarship:\n• Both stages: Full-flow SC\n• Reason: Maximum performance, reusability\n• Trade-off: Development complexity\n\nSLS:\n• Core: Staged combustion (RS-25)\n• Boosters: Solid\n• Upper stage: Will use RL-10 (expander)\n• Reason: Heritage, performance\n\nVulcan:\n• First stage: Staged combustion (BE-4)\n• Upper stage: Expander (RL-10)\n• Reason: Optimal for each stage"
      }
    ],
    
    keyTakeaways: [
      "Gas generator is simplest: 95-97% efficient, proven reliability",
      "Staged combustion achieves 98-99% efficiency but very complex",
      "Full-flow staged combustion is most efficient (99.5%) but hardest to develop",
      "Raptor is first operational full-flow SC engine (2019)",
      "Expander cycle best for small upper stage engines (RL-10)",
      "Cycle selection depends on mission requirements and development resources"
    ],
    
    vocabulary: [
      { term: "Gas Generator", definition: "Small burner that creates hot gas to drive turbine; exhaust dumped" },
      { term: "Staged Combustion", definition: "Pre-burner exhaust goes to main chamber; no propellant wasted" },
      { term: "Full-Flow Staged Combustion", definition: "Both propellants have separate pre-burners; highest efficiency" },
      { term: "Pre-burner", definition: "Small combustion chamber that generates gas to drive turbine" },
      { term: "Expander Cycle", definition: "Fuel heated in cooling jacket drives turbine; gentle, reliable" }
    ],
    
    practiceProblems: [
      {
        id: "17-1",
        problem: "Gas generator uses 3% propellant for turbine. For ṁ=300 kg/s total, how much is wasted vs staged combustion?",
        solution: "Gas generator waste: 300 × 0.03 = 9 kg/s\nStaged combustion waste: 0 kg/s (all goes through main chamber)\nOver 150s burn: 9 × 150 = 1,350 kg wasted\nBut gas generator is simpler and cheaper!",
        hint: "Calculate 3% of total flow rate, then multiply by burn time"
      },
      {
        id: "17-2",
        problem: "Compare efficiency: Gas generator (96%) vs Staged combustion (99%) vs FFSC (99.5%). For 10,000 m/s Δv mission with 5,000 kg payload, calculate fuel needs (v_e=3,500 m/s base).",
        solution: "Gas gen: v_e = 3,500×0.96 = 3,360 m/s, R = e^(10,000/3,360) = 17.8, Fuel = 84,000 kg\nStaged: v_e = 3,500×0.99 = 3,465 m/s, R = e^(10,000/3,465) = 15.6, Fuel = 73,000 kg\nFFSC: v_e = 3,500×0.995 = 3,483 m/s, R = e^(10,000/3,483) = 15.2, Fuel = 71,000 kg\nFFSC saves 13,000 kg vs gas generator!",
        hint: "Apply efficiency to v_e, then use rocket equation"
      },
      {
        id: "17-3",
        problem: "Why did SpaceX choose gas generator for Merlin but FFSC for Raptor?",
        solution: "Merlin (2002-2009 development):\n- Needed: Simple, cheap, reliable, reusable\n- Gas generator: Proven, easy to develop, good enough\n- Trade-off: 3% efficiency loss acceptable\n\nRaptor (2012-2019 development):\n- Needed: Maximum performance for Mars mission\n- FFSC: Highest efficiency, better for reusability\n- Trade-off: Complex but worth it for long-term goals\n- Modern tech made FFSC achievable",
        hint: "Consider mission requirements and development era"
      },
      {
        id: "17-4",
        problem: "RS-25 uses oxidizer-rich staged combustion at P_c=20.6 MPa. Why not use simpler gas generator?",
        solution: "RS-25 requirements:\n- Need: Maximum Isp for Space Shuttle (LH₂/LOX)\n- Target: 450+ seconds Isp\n- High P_c needed: 20+ MPa for best performance\n\nGas generator limitations:\n- Typically limited to P_c < 15 MPa\n- Lower efficiency (96% vs 99%)\n- Would give Isp ~420s instead of 452s\n\nResult: 7% Isp improvement worth the complexity for Shuttle's reusable design.",
        hint: "Consider Isp requirements and chamber pressure capabilities"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q17-1",
          question: "What is the main difference between gas generator and staged combustion?",
          options: [
            "Fuel type",
            "Gas generator dumps turbine exhaust; staged combustion sends it to main chamber",
            "Thrust level",
            "Cost"
          ],
          correctAnswer: 1,
          explanation: "Gas generator burns ~3% propellant to drive turbine, then dumps exhaust overboard (wasted). Staged combustion sends ALL propellant through main chamber - nothing wasted! This gives 99% vs 96% efficiency."
        },
        {
          id: "q17-2",
          question: "Why is full-flow staged combustion so difficult?",
          options: [
            "Requires exotic fuel",
            "Needs two separate pre-burners and complex synchronization",
            "Too expensive",
            "Not enough thrust"
          ],
          correctAnswer: 1,
          explanation: "FFSC requires TWO pre-burners (fuel-rich and oxidizer-rich), dual turbopump systems, and precise synchronization. This is incredibly complex! Only Raptor has achieved operational FFSC (2019)."
        },
        {
          id: "q17-3",
          question: "What is the efficiency advantage of staged combustion over gas generator?",
          options: [
            "1-2% better",
            "3-4% better (99% vs 96%)",
            "10% better",
            "No difference"
          ],
          correctAnswer: 1,
          explanation: "Staged combustion achieves 98-99% efficiency vs 95-97% for gas generator. This 3-4% improvement reduces fuel needs significantly but adds major complexity!"
        },
        {
          id: "q17-4",
          question: "Why is Raptor the first operational full-flow staged combustion engine?",
          options: [
            "SpaceX invented it",
            "Modern materials, manufacturing (3D printing), and computational design made it achievable",
            "It's cheaper",
            "Better fuel"
          ],
          correctAnswer: 1,
          explanation: "FFSC was conceived in the 1960s but too difficult. Raptor succeeded due to: modern materials, 3D printing, computational fluid dynamics, rapid iteration, and vertical integration. Technology finally caught up to the concept!"
        },
        {
          id: "q17-5",
          question: "When would you choose gas generator over staged combustion?",
          options: [
            "Never - staged combustion is always better",
            "When simplicity, cost, and reliability are more important than maximum efficiency",
            "For upper stages only",
            "For small engines only"
          ],
          correctAnswer: 1,
          explanation: "Gas generator is simpler, cheaper, more reliable, and easier to develop. For missions where 3% efficiency loss is acceptable (like Falcon 9), it's the better choice! Not everything needs maximum performance."
        }
      ]
    }
  },

  {
    id: 18,
    title: "Engine Performance Analysis",
    unit: "Rocket Propulsion Physics",
    duration: "30 min",
    introduction: "Analyzing rocket engine performance requires understanding multiple metrics and their relationships. This lesson covers how to evaluate and compare engine designs.",
    
    sections: [
      {
        title: "Key Performance Metrics",
        content: "Primary Metrics:\n\n1. Specific Impulse (I_sp):\n• Efficiency measure\n• Units: seconds\n• Higher = better\n• Typical: 250-465 s\n\n2. Thrust (T):\n• Force produced\n• Units: Newtons or kN\n• Determines acceleration\n• Typical: 100 kN - 10,000 kN\n\n3. Thrust-to-Weight (T/W):\n• Engine thrust / engine weight\n• Dimensionless\n• Higher = lighter engine\n• Typical: 50-200\n\n4. Chamber Pressure (P_c):\n• Combustion pressure\n• Units: MPa or bar\n• Higher = better performance\n• Typical: 5-30 MPa\n\nSecondary Metrics:\n\n5. Mixture Ratio (O/F):\n• Oxidizer mass / fuel mass\n• Affects performance and cooling\n• Typical: 2.0-8.0\n\n6. Expansion Ratio (ε):\n• Exit area / throat area\n• Altitude optimization\n• Typical: 10-400\n\n7. Combustion Efficiency (η_c):\n• Actual / theoretical performance\n• Percentage\n• Typical: 94-99%\n\n8. Nozzle Efficiency (η_n):\n• Actual / ideal nozzle performance\n• Accounts for losses\n• Typical: 95-98%"
      },
      {
        title: "Performance Calculations",
        content: "Theoretical Performance:\n\nCharacteristic Velocity:\nc* = P_c × A_t / ṁ\n\nTypical values:\n• RP-1/LOX: c* = 1,800 m/s\n• LH₂/LOX: c* = 2,400 m/s\n• CH₄/LOX: c* = 2,000 m/s\n\nThrust Coefficient:\nC_F = T / (P_c × A_t)\n\nTypical values:\n• Sea level: C_F = 1.3-1.6\n• Vacuum: C_F = 1.7-2.0\n\nSpecific Impulse:\nI_sp = c* × C_F / g₀\n\nExample Calculation:\n\nEngine specifications:\n• Propellant: RP-1/LOX\n• P_c = 10 MPa\n• A_t = 0.05 m²\n• ṁ = 280 kg/s\n• Expansion ratio: ε = 16\n• Altitude: Sea level\n\nStep 1: Calculate c*\nc* = (10×10⁶ × 0.05) / 280\nc* = 1,786 m/s\n\nStep 2: Estimate C_F (sea level, ε=16)\nC_F ≈ 1.55\n\nStep 3: Calculate I_sp\nI_sp = (1,786 × 1.55) / 9.81\nI_sp = 282 seconds\n\nStep 4: Calculate thrust\nT = P_c × A_t × C_F\nT = 10×10⁶ × 0.05 × 1.55\nT = 775 kN\n\nThis matches Merlin 1D performance!"
      },
      {
        title: "Losses & Efficiency",
        content: "Performance Losses:\n\n1. Combustion Losses (1-6%):\n• Incomplete mixing\n• Finite reaction time\n• Heat losses\n• Dissociation\n\n2. Nozzle Losses (2-5%):\n• Friction\n• Non-ideal expansion\n• Divergence losses\n• Boundary layer\n\n3. Kinetic Losses (<1%):\n• Unburned propellant\n• Droplets in exhaust\n\nTotal Efficiency:\nη_total = η_c × η_n × η_kinetic\n\nTypical: η_total = 0.94-0.98\n\nExample: Real vs Ideal\n\nTheoretical (ideal):\n• I_sp = 310 s\n• T = 850 kN\n\nWith losses (η = 0.96):\n• I_sp = 310 × 0.96 = 298 s\n• T = 850 × 0.96 = 816 kN\n\nLoss breakdown:\n• Combustion: 2%\n• Nozzle: 1.5%\n• Kinetic: 0.5%\n• Total: 4%\n\nMinimizing Losses:\n\n1. Better injector design:\n• Finer atomization\n• Better mixing\n• Stable combustion\n\n2. Optimized nozzle:\n• Smooth contour\n• Proper expansion ratio\n• Minimal divergence\n\n3. Higher chamber pressure:\n• Better combustion\n• Reduced losses\n• But heavier structure\n\n4. Advanced materials:\n• Better cooling\n• Higher temperatures\n• Improved performance"
      },
      {
        title: "Comparative Analysis",
        content: "Engine Comparison Example:\n\nEngine A (Gas Generator):\n• I_sp: 310 s\n• Thrust: 850 kN\n• Engine mass: 470 kg\n• T/W: 185\n• P_c: 10 MPa\n• Cost: $1M\n• Reliability: 99.7%\n\nEngine B (Staged Combustion):\n• I_sp: 340 s\n• Thrust: 900 kN\n• Engine mass: 550 kg\n• T/W: 167\n• P_c: 25 MPa\n• Cost: $15M\n• Reliability: 99.0%\n\nMission Analysis:\n\nFor LEO mission (Δv = 9,500 m/s):\n\nWith Engine A:\n• Better T/W (lighter)\n• Lower cost\n• Higher reliability\n• But: Need more fuel (lower I_sp)\n\nWith Engine B:\n• Better I_sp (less fuel)\n• Higher performance\n• But: Heavier, more expensive\n\nPayload Comparison:\n\nSame rocket, 100,000 kg total:\n\nEngine A:\n• Fuel needed: 85,000 kg\n• Structure: 10,000 kg\n• Payload: 5,000 kg\n\nEngine B:\n• Fuel needed: 82,000 kg\n• Structure: 11,000 kg\n• Payload: 7,000 kg\n\nEngine B delivers 40% more payload!\n\nBut:\n• Development cost: 15× higher\n• Unit cost: 15× higher\n• Reliability: Slightly lower\n\nTrade-off Decision:\n\nChoose Engine A if:\n• Cost-sensitive\n• High flight rate\n• Proven reliability critical\n• Example: Falcon 9\n\nChoose Engine B if:\n• Performance critical\n• Low flight rate\n• Budget available\n• Example: SLS, Ariane 6\n\nModern Trend:\n\nSpaceX approach:\n• Simple, cheap engines (Merlin)\n• Mass production\n• Reusability\n• Result: Lowest $/kg to orbit\n\nTraditional approach:\n• Complex, expensive engines (RS-25)\n• High performance\n• Limited reuse\n• Result: Higher cost but proven"
      }
    ],
    
    keyTakeaways: [
      "Key metrics: I_sp (efficiency), Thrust (power), T/W (engine mass)",
      "Characteristic velocity (c*) and thrust coefficient (C_F) determine performance",
      "Total efficiency typically 94-98% due to combustion and nozzle losses",
      "Engine selection involves trade-offs: performance vs cost vs reliability",
      "Higher I_sp reduces fuel mass but may increase engine complexity",
      "Modern trend: Simple, reusable engines vs traditional high-performance approach"
    ],
    
    vocabulary: [
      { term: "Characteristic Velocity (c*)", definition: "Measure of combustion efficiency; typical 1,800-2,400 m/s" },
      { term: "Thrust Coefficient (C_F)", definition: "Nozzle performance parameter; typical 1.3-2.0" },
      { term: "Thrust-to-Weight (T/W)", definition: "Engine thrust divided by engine weight; typical 50-200" },
      { term: "Combustion Efficiency (η_c)", definition: "Ratio of actual to theoretical combustion performance" },
      { term: "Nozzle Efficiency (η_n)", definition: "Ratio of actual to ideal nozzle performance" }
    ],
    
    practiceProblems: [
      {
        id: "18-1",
        problem: "Calculate c* for an engine: P_c=10 MPa, A_t=0.05 m², ṁ=280 kg/s.",
        solution: "c* = (P_c × A_t) / ṁ = (10×10⁶ × 0.05) / 280 = 500,000 / 280 = 1,786 m/s\nThis is typical for RP-1/LOX engines.",
        hint: "Use c* = (P_c × A_t) / ṁ"
      },
      {
        id: "18-2",
        problem: "Engine has c*=1,800 m/s, C_F=1.55. Calculate Isp.",
        solution: "Isp = (c* × C_F) / g₀ = (1,800 × 1.55) / 9.81 = 2,790 / 9.81 = 284 seconds\nTypical sea-level performance for kerosene engine.",
        hint: "Isp = (c* × C_F) / g₀"
      },
      {
        id: "18-3",
        problem: "Compare two engines for same mission: Engine A (Isp=310s, T/W=185, cost=$1M) vs Engine B (Isp=340s, T/W=167, cost=$15M). For 100,000 kg rocket to LEO, which delivers more payload?",
        solution: "Engine A: R = e^(9,500/3,041) = 20.1, Fuel = 95,000 kg, Structure (5%) = 5,000 kg, Payload = 0 kg (impossible!)\nEngine B: R = e^(9,500/3,335) = 16.8, Fuel = 94,000 kg, Structure (5.5%) = 5,500 kg, Payload = 500 kg\nEngine B barely works despite higher Isp! Need staging or better mass fractions.",
        hint: "Calculate fuel needs for each, account for structure mass"
      },
      {
        id: "18-4",
        problem: "Engine has theoretical Isp=310s but actual=298s. Calculate total efficiency and identify losses if combustion efficiency is 97%.",
        solution: "η_total = 298/310 = 0.961 = 96.1%\nη_c = 0.97 (given)\nη_n × η_other = 0.961/0.97 = 0.991\nLosses: Combustion 3%, Nozzle+other 0.9%, Total 3.9%\nVery efficient engine!",
        hint: "η_total = actual/theoretical, then break down by component"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q18-1",
          question: "What does characteristic velocity (c*) measure?",
          options: [
            "Exhaust velocity",
            "Combustion chamber performance; typical 1,800-2,400 m/s",
            "Nozzle performance",
            "Thrust"
          ],
          correctAnswer: 1,
          explanation: "c* = (P_c × A_t) / ṁ measures combustion chamber performance. Higher c* means better combustion efficiency. Typical values: RP-1/LOX ~1,800 m/s, LH₂/LOX ~2,400 m/s."
        },
        {
          id: "q18-2",
          question: "What is thrust coefficient (C_F)?",
          options: [
            "Thrust divided by weight",
            "Nozzle performance parameter; relates thrust to chamber pressure",
            "Combustion efficiency",
            "Fuel consumption rate"
          ],
          correctAnswer: 1,
          explanation: "C_F = T / (P_c × A_t) measures nozzle performance. Higher C_F means better expansion. Sea level: C_F ~1.3-1.6, Vacuum: C_F ~1.7-2.0."
        },
        {
          id: "q18-3",
          question: "What is engine thrust-to-weight ratio (T/W)?",
          options: [
            "Rocket TWR",
            "Engine thrust divided by engine weight; typical 50-200",
            "Specific impulse",
            "Thrust coefficient"
          ],
          correctAnswer: 1,
          explanation: "Engine T/W = engine thrust / engine weight. Higher is better (lighter engine). Merlin 1D: T/W ~180. RS-25: T/W ~73 (heavier but more complex)."
        },
        {
          id: "q18-4",
          question: "Why is total engine efficiency typically 94-98%?",
          options: [
            "Poor design",
            "Losses from incomplete combustion (1-6%), nozzle friction (2-5%), and other factors",
            "Fuel quality",
            "Manufacturing defects"
          ],
          correctAnswer: 1,
          explanation: "Even well-designed engines have losses: combustion (1-6%), nozzle friction/divergence (2-5%), kinetic losses (<1%). Total efficiency 94-98% is excellent!"
        },
        {
          id: "q18-5",
          question: "When comparing engines, what matters most for first stage?",
          options: [
            "Maximum Isp only",
            "Balance of thrust, T/W, cost, and reliability (Isp less critical)",
            "Lowest cost only",
            "Highest chamber pressure"
          ],
          correctAnswer: 1,
          explanation: "First stages need: high thrust (TWR>1.2), good T/W (lighter), reliability, and reasonable cost. Isp is important but not critical. Upper stages prioritize Isp more!"
        }
      ]
    }
  }
];

export default unit2AdvancedLessons;
