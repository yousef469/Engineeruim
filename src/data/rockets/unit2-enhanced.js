// Unit 2: Rocket Propulsion Physics - ENHANCED
// Lessons 16-19: MIT-Quality comprehensive propulsion content
// Matching mathematics section depth with detailed explanations and examples

export const unit2EnhancedLessons = [
  {
    id: 16,
    title: "Thrust Vectoring & Engine Control",
    unit: "Rocket Propulsion Physics",
    duration: "50 min",
    introduction: "🎯 Thrust vectoring is how rockets steer in space! By gimbaling engines ±5-15°, rockets can generate enormous torques for precise control. Understanding the mathematics of moments and control authority reveals why Falcon 9 can land with pinpoint accuracy and why the Space Shuttle needed those massive gimbals. This is the physics of rocket steering!",
    
    sections: [
      {
        title: "🔄 Thrust Vectoring Fundamentals: Force Decomposition",
        content: `**The Steering Problem**

In space (or atmosphere), rockets need to:
• Correct trajectory deviations
• Maintain stable flight
• Perform orbital maneuvers
• Land precisely (SpaceX style!)

**But how do you steer with no air?**

Answer: **Thrust Vectoring** - change the direction of thrust!

**Force Decomposition Mathematics**

When engine gimbals by angle θ:

Original thrust: T (along rocket axis)

After gimbal:
• Axial component: T_axial = T × cos(θ)
• Lateral component: T_lateral = T × sin(θ)

**Small Angle Approximation:**

For θ < 15° (typical range):
• cos(θ) ≈ 1 - θ²/2 ≈ 1 (very close!)
• sin(θ) ≈ θ (in radians)

Therefore:
• T_axial ≈ T (almost no loss!)
• T_lateral ≈ T × θ

**Example 1: Merlin 1D Gimbal**

Given:
• Thrust: T = 845 kN
• Gimbal angle: θ = 10° = 0.1745 rad

Calculate components:
T_axial = 845 × cos(10°) = 845 × 0.9848 = 832 kN
T_lateral = 845 × sin(10°) = 845 × 0.1736 = 147 kN

Using small angle approximation:
T_lateral ≈ 845 × 0.1745 = 147 kN ✓ (same!)

**Thrust loss: Only 13 kN (1.5%)** - negligible!

**Example 2: Maximum Gimbal**

At θ = 15° (maximum typical):
T_axial = 845 × cos(15°) = 845 × 0.9659 = 816 kN
T_lateral = 845 × sin(15°) = 845 × 0.2588 = 219 kN

Thrust loss: 29 kN (3.4%) - still acceptable!

**Why Not Gimbal More?**

At θ = 30°:
T_axial = 845 × cos(30°) = 732 kN
Loss: 113 kN (13.4%) - too much!

Plus:
• Structural loads increase
• Plumbing complexity
• Actuator forces grow
• Diminishing returns

**Typical gimbal ranges:**
• Small engines: ±5-8°
• Medium engines: ±8-12°
• Large engines: ±10-15°
• RS-25 (Shuttle): ±10.5°`
      },
      {
        title: "⚙️ Control Authority: Torque and Moments",
        content: `**Torque Generation**

Lateral thrust creates torque about center of mass:

τ = T_lateral × L

Where:
• τ = torque (N·m)
• T_lateral = lateral thrust component (N)
• L = moment arm (distance from CoM to thrust line)

**Physical Meaning:**

Torque causes angular acceleration:
τ = I × α

Where:
• I = moment of inertia (kg·m²)
• α = angular acceleration (rad/s²)

**Example: Falcon 9 First Stage Control**

**Configuration:**
• 9 Merlin 1D engines in "Octaweb"
• Center engine: Fixed (no gimbal)
• 8 outer engines: Can gimbal
• Outer engine distance from centerline: L = 4.0 m

**Single Engine Torque:**

At θ = 10°:
T_lateral = 147 kN
τ_single = 147 × 4.0 = 588 kN·m

**Maximum Control Authority:**

All 8 outer engines gimbal same direction:
τ_max = 8 × 588 = 4,704 kN·m

**Enormous torque!** For comparison:
• Formula 1 car engine: ~0.4 kN·m
• Falcon 9 control: 11,760× more!

**Angular Acceleration:**

Falcon 9 first stage:
• Mass: m = 549,000 kg
• Length: L = 42 m
• Approximate as cylinder: I ≈ (1/12) × m × L²

I ≈ (1/12) × 549,000 × 42² = 80,430,000 kg·m²

Angular acceleration:
α = τ/I = 4,704,000/80,430,000 = 0.058 rad/s²

**In 1 second:**
• Angular velocity: ω = 0.058 rad/s = 3.3°/s
• In 10 seconds: 33° rotation!

This is why Falcon 9 can flip and land!

**Differential Control:**

For pitch/yaw:
• Gimbal engines on one side
• Creates torque about CoM
• Rotates vehicle

For roll:
• Differential gimbal (opposite directions)
• Or dedicated roll thrusters
• Less critical during ascent

**Example: Pitch Maneuver**

Want to pitch up 5° in 3 seconds:

Required angular displacement: θ = 5° = 0.0873 rad
Time: t = 3 s

Using: θ = ½αt²
α = 2θ/t² = 2 × 0.0873/9 = 0.0194 rad/s²

Required torque:
τ = I × α = 80,430,000 × 0.0194 = 1,560 kN·m

Number of engines needed:
N = 1,560/588 = 2.65 → Use 3 engines

**Falcon 9 has plenty of control authority!**`
      },
      {
        title: "🎛️ Throttling: Thrust Modulation",
        content: `**Why Throttle?**

Reasons to vary thrust:

**1. Max-Q Limiting:**
• Dynamic pressure: q = ½ρv²
• Peaks around 10-15 km altitude
• Throttle down to reduce loads
• Falcon 9: 70% thrust at max-Q

**2. Acceleration Limiting:**
• As fuel burns, mass decreases
• TWR increases dramatically
• Throttle to limit acceleration
• Protect payload (humans: 3-4g max)

**3. Precision Landing:**
• Need fine control of descent rate
• Throttle for soft touchdown
• Critical for reusability

**4. Orbital Insertion:**
• Need precise final velocity
• Throttle for accuracy
• Better than on/off

**Throttling Methods**

**Method 1: Turbopump Speed Control**

Vary turbopump RPM:
• Propellant flow: ṁ ∝ RPM
• Thrust: T ∝ ṁ
• Maintain mixture ratio

Control methods:
• Gas generator flow (gas generator cycle)
• Pre-burner flow (staged combustion)
• Valve position (expander cycle)

**Method 2: Multiple Engines**

Discrete thrust levels:
• Shut down some engines
• Simple but coarse control
• Falcon 9: 9 → 3 → 1 engines

**Method 3: Pulse Mode**

Rapid on/off cycling:
• Average thrust control
• Used for small thrusters
• Not for main engines

**Throttle Range Limitations**

**Typical ranges:**
• Merlin 1D: 40-100% (2.5:1)
• Raptor: 40-100% (2.5:1)
• RS-25: 67-109% (1.6:1)
• RL-10: 60-100% (1.7:1)
• F-1: Not throttleable!

**Minimum Throttle Limited By:**

**1. Combustion Stability:**
• Low flow → unstable combustion
• Risk of flameout
• Pressure oscillations

**2. Turbopump Operation:**
• Minimum RPM for stable operation
• Bearing lubrication
• Seal integrity

**3. Cooling Requirements:**
• Regenerative cooling needs flow
• Too low → overheating
• Engine damage

**4. Mixture Ratio Control:**
• Hard to maintain O/F ratio at low flow
• Efficiency drops
• Incomplete combustion

**Example: Falcon 9 Landing Burn**

**The Hover Problem:**

At landing:
• Stage mass: m ≈ 25,000 kg
• Weight: W = 25,000 × 9.81 = 245 kN

Minimum thrust:
• 1 engine at 40%: T_min = 845 × 0.40 = 338 kN

TWR = T_min/W = 338/245 = 1.38

**TWR > 1.0 means can't hover!**

**Solution: Suicide Burn**

Must time perfectly:
• Start burn at calculated altitude
• Throttle dynamically
• Reach v = 0 exactly at ground
• No margin for error!

**Mathematics:**

Constant deceleration:
v² = v_0² - 2a × h

At touchdown: v = 0
0 = v_0² - 2a × h
h = v_0²/(2a)

Where:
• v_0 = initial velocity
• a = deceleration = (T-W)/m
• h = altitude

**Example Calculation:**

Approach velocity: v_0 = 100 m/s
Thrust: T = 338 kN (1 engine, 40%)
Mass: m = 25,000 kg
Weight: W = 245 kN

Deceleration:
a = (338-245)/25,000 × 1,000 = 3.72 m/s²

Burn altitude:
h = 100²/(2×3.72) = 1,344 m

**Start burn at 1,344 m altitude!**

Burn time:
t = v_0/a = 100/3.72 = 26.9 seconds

**This is why SpaceX landings look so dramatic!**`
      },
      {
        title: "📊 Engine Health Monitoring & Redundancy",
        content: `**Sensor Systems**

**Critical Parameters Monitored:**

**Pressures (10-20 sensors):**
• Chamber pressure (P_c)
• Turbopump inlet/outlet
• Pre-burner pressure
• Propellant line pressures
• Pneumatic system pressure

**Temperatures (20-40 sensors):**
• Chamber wall temperature
• Nozzle temperature
• Turbine inlet temperature
• Bearing temperatures
• Propellant temperatures

**Flow Rates (4-8 sensors):**
• Fuel flow rate
• Oxidizer flow rate
• Gas generator flow
• Coolant flow

**Mechanical (10-20 sensors):**
• Turbopump RPM
• Vibration (accelerometers)
• Thrust (load cells)
• Gimbal position
• Valve positions

**Total Sensor Count:**
• Small engine (Merlin): ~50 sensors
• Medium engine (BE-4): ~100 sensors
• Large engine (RS-25): ~400 sensors

**Sampling Rate:**
• Critical parameters: 1,000-10,000 Hz
• Standard parameters: 100-1,000 Hz
• Slow parameters: 10-100 Hz

**Data volume:**
• RS-25: ~1 MB/second
• Over 8 minute burn: 480 MB per engine!

**Failure Detection**

**Anomaly Types:**

**1. Pressure Drop:**
• Indicates: Leak, blockage, pump failure
• Detection time: <0.1 seconds
• Response: Shutdown or compensate

**2. Temperature Spike:**
• Indicates: Cooling failure, hot spot
• Detection time: <0.5 seconds
• Response: Immediate shutdown

**3. Vibration Increase:**
• Indicates: Bearing failure, combustion instability
• Detection time: <0.2 seconds
• Response: Shutdown

**4. Thrust Loss:**
• Indicates: Combustion problem, leak
• Detection time: <0.5 seconds
• Response: Compensate or abort

**5. Mixture Ratio Shift:**
• Indicates: Valve problem, sensor failure
• Detection time: <1.0 seconds
• Response: Adjust or shutdown

**Detection Algorithm:**

For each parameter:
1. Compare to nominal value
2. Check rate of change
3. Compare to other sensors (cross-check)
4. Determine severity
5. Decide action

**Response Time Budget:**
• Detection: 0.1 seconds
• Processing: 0.2 seconds
• Decision: 0.1 seconds
• Action: 0.5 seconds
• **Total: 0.9 seconds**

**Engine-Out Capability**

**Design Philosophy:**

Multiple smaller engines > One huge engine

**Advantages:**
• Graceful degradation
• Higher mission success rate
• Easier testing
• Better throttle range
• Redundancy

**Examples:**

**Falcon 9:**
• 9 engines first stage
• Can reach orbit with 1 engine out
• Proven: CRS-1 mission (2012)
• Engine shut down at T+79s
• Mission successful!

**Saturn V:**
• 5 F-1 engines
• Could reach orbit with 1 out
• Never needed (100% success)

**Space Shuttle:**
• 3 RS-25 engines
• NO engine-out capability
• All 3 must work
• Higher risk

**Starship Super Heavy:**
• 33 Raptor engines!
• Can lose several engines
• Extreme redundancy
• Distributed control

**Performance Impact:**

Losing 1 engine:
• Thrust: -11% (9 engines)
• TWR: -11%
• Δv capability: Slightly reduced
• Trajectory: Adjust in real-time

**Compensation:**

Automatic actions:
1. Detect engine failure
2. Shut down failed engine
3. Gimbal remaining engines
4. Adjust trajectory
5. Recalculate orbit
6. Continue mission

**Falcon 9 CRS-1 Example:**

Engine 1 failed at T+79s:
• Detected in 0.5 seconds
• Shut down engine
• Gimbaled remaining 8 engines
• Adjusted trajectory
• Reached orbit successfully!
• Payload delivered ✓

**This is the power of redundancy!**`
      }
    ],
    
    keyTakeaways: [
      "Thrust vectoring: T_lateral = T×sin(θ), T_axial = T×cos(θ); typical range ±5-15°",
      "Control authority: τ = T_lateral × L; Falcon 9 can generate 4,700 kN·m torque",
      "Throttling enables precision control but limited by combustion stability (40-100% typical)",
      "Suicide burn required when minimum thrust > weight (can't hover)",
      "Engine health monitoring uses 50-400 sensors sampling at 100-10,000 Hz",
      "Multiple engines provide engine-out capability and graceful degradation"
    ],
    
    vocabulary: [
      { term: "Thrust Vectoring", definition: "Changing thrust direction by gimbaling engine; creates lateral force for control" },
      { term: "Gimbal", definition: "Pivoting mount allowing engine to rotate ±5-15°; driven by actuators" },
      { term: "Control Authority", definition: "Torque capability; τ = T_lateral × L; determines maneuverability" },
      { term: "Throttling", definition: "Varying thrust level by controlling propellant flow; typical range 40-100%" },
      { term: "Suicide Burn", definition: "Landing burn timed to reach v=0 at ground; used when can't hover" },
      { term: "Engine-Out Capability", definition: "Ability to complete mission with failed engine; requires redundancy" }
    ],
    
    practiceProblems: [
      {
        id: "16-1",
        problem: "Raptor engine: T = 2,300 kN, gimbal θ = 12°. Calculate T_lateral and T_axial. What percentage of thrust is lost?",
        solution: "T_lateral = 2,300 × sin(12°) = 2,300 × 0.2079 = 478 kN\nT_axial = 2,300 × cos(12°) = 2,300 × 0.9781 = 2,250 kN\nThrust loss = 2,300 - 2,250 = 50 kN\nPercentage = 50/2,300 = 2.2%\n\nOnly 2.2% thrust loss for significant steering capability!",
        hint: "Use T_lateral = T×sin(θ) and T_axial = T×cos(θ), then compare"
      },
      {
        id: "16-2",
        problem: "Starship has 6 Raptor engines at L = 5 m from centerline. If 4 engines gimbal 15°, calculate total torque. (T = 2,300 kN per engine)",
        solution: "Per engine:\nT_lateral = 2,300 × sin(15°) = 2,300 × 0.2588 = 595 kN\nTorque = 595 × 5 = 2,975 kN·m\n\nTotal (4 engines):\nτ_total = 4 × 2,975 = 11,900 kN·m\n\nEnormous control authority for landing!",
        hint: "Calculate lateral thrust, then torque per engine, then multiply by 4"
      },
      {
        id: "16-3",
        problem: "A rocket stage has mass 30,000 kg. Minimum engine thrust is 400 kN. Can it hover? If not, calculate suicide burn altitude for v_0 = 120 m/s.",
        solution: "Weight: W = 30,000 × 9.81 = 294 kN\nMinimum thrust: T = 400 kN\nTWR = 400/294 = 1.36 > 1.0\n\nCannot hover! Must use suicide burn.\n\nDeceleration: a = (400-294)/30,000 × 1,000 = 3.53 m/s²\nBurn altitude: h = v_0²/(2a) = 120²/(2×3.53) = 2,040 m\nBurn time: t = v_0/a = 120/3.53 = 34.0 seconds\n\nStart burn at 2,040 m altitude!",
        hint: "Check if TWR > 1, then use h = v²/(2a) where a = (T-W)/m"
      },
      {
        id: "16-4",
        problem: "Falcon 9 loses 1 of 9 engines at T+60s. Remaining engines: 8 × 845 kN. Original thrust: 7,605 kN. Calculate thrust loss percentage and new TWR if mass = 400,000 kg.",
        solution: "New thrust: 8 × 845 = 6,760 kN\nThrust loss: 7,605 - 6,760 = 845 kN\nPercentage: 845/7,605 = 11.1%\n\nOriginal TWR: 7,605/(400,000×9.81/1000) = 1.94\nNew TWR: 6,760/(400,000×9.81/1000) = 1.72\n\nStill plenty of thrust! Mission continues.",
        hint: "Calculate new total thrust, compare to original, then calculate TWR = T/(mg)"
      }
    ],
    
    quiz: {
      questions: [
        {
          id: "q16-1",
          question: "What happens to thrust when an engine gimbals 10°?",
          options: [
            "Thrust increases",
            "Axial thrust decreases by ~1.5%, lateral thrust = T×sin(10°) ≈ 17% of T",
            "All thrust becomes lateral",
            "Thrust stays the same"
          ],
          correctAnswer: 1,
          explanation: "At θ=10°: T_axial = T×cos(10°) = 0.985T (1.5% loss), T_lateral = T×sin(10°) = 0.174T. Small thrust loss but significant steering capability!"
        },
        {
          id: "q16-2",
          question: "Why is control authority (torque) so important?",
          options: [
            "It determines fuel efficiency",
            "τ = T_lateral × L determines how quickly the rocket can rotate for steering",
            "It affects engine temperature",
            "It controls throttle range"
          ],
          correctAnswer: 1,
          explanation: "Control authority τ = T_lateral × L creates angular acceleration α = τ/I. Higher torque means faster rotation and better maneuverability. Falcon 9's 4,700 kN·m enables precise landing!"
        },
        {
          id: "q16-3",
          question: "Why can't Falcon 9 hover during landing?",
          options: [
            "Not enough fuel",
            "Minimum thrust (1 engine at 40% = 338 kN) exceeds stage weight (~245 kN), so TWR > 1",
            "Too much drag",
            "Engines can't throttle low enough"
          ],
          correctAnswer: 1,
          explanation: "Minimum thrust = 338 kN, weight = 245 kN, so TWR = 1.38 > 1.0. Can't hover! Must use 'suicide burn' - time perfectly to reach v=0 at ground. This is why landings look so dramatic!"
        },
        {
          id: "q16-4",
          question: "What is engine-out capability and why is it valuable?",
          options: [
            "Ability to shut down engines",
            "Ability to complete mission even if one or more engines fail; provides redundancy",
            "Ability to restart engines",
            "Ability to throttle engines"
          ],
          correctAnswer: 1,
          explanation: "Engine-out capability means the rocket can still succeed if an engine fails. Falcon 9 can reach orbit with 1 of 9 engines out. Proven on CRS-1 mission! Multiple smaller engines > one huge engine."
        },
        {
          id: "q16-5",
          question: "Why do engines have minimum throttle limits (typically 40%)?",
          options: [
            "To save fuel",
            "Below minimum: combustion becomes unstable, turbopumps can't operate properly, cooling fails",
            "For safety only",
            "Regulations require it"
          ],
          correctAnswer: 1,
          explanation: "Below ~40% throttle: combustion becomes unstable (risk of flameout), turbopumps can't maintain proper operation, regenerative cooling fails. Physical limits, not arbitrary!"
        }
      ]
    }
  }
];

export default unit2EnhancedLessons;
