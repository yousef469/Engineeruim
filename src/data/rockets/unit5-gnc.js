// Unit 5: Guidance, Navigation & Control - MIT-Quality Content
// Lessons 26-29: GNC systems, sensors, control theory, landing

export const unit5Lessons = [
  {
    id: 26,
    title: "Navigation Systems & Sensors",
    unit: "Guidance, Navigation & Control",
    duration: "30 min",
    introduction: "Navigation systems determine a rocket's position, velocity, and attitude. Understanding sensors and navigation is essential for accurate guidance and control.",
    
    sections: [
      {
        title: "Inertial Measurement Units",
        content: "IMU Components:\n\n1. Accelerometers:\n• Measure acceleration\n• 3 axes (x, y, z)\n• Precision: 10⁻⁶ g\n• Integration gives velocity\n\n2. Gyroscopes:\n• Measure rotation rate\n• 3 axes (roll, pitch, yaw)\n• Precision: 0.001°/hour\n• Integration gives attitude\n\nInertial Navigation:\n\nPosition from acceleration:\nx(t) = x₀ + v₀t + ½∫∫a dt²\n\nVelocity from acceleration:\nv(t) = v₀ + ∫a dt\n\nAttitude from rotation:\nθ(t) = θ₀ + ∫ω dt\n\nError Growth:\n\nAccelerometer bias:\n• 10⁻⁶ g bias\n• After 100 seconds: 0.5 m/s error\n• After 1000 seconds: 50 m/s error\n• Grows quadratically!\n\nGyro drift:\n• 0.001°/hour drift\n• After 1 hour: 0.001° error\n• After 10 hours: 0.01° error\n• Grows linearly\n\nThis is why GPS is needed!\n\nModern IMUs:\n\nFalcon 9:\n• MEMS accelerometers\n• Ring laser gyros\n• Update rate: 100 Hz\n• Redundant: 3 IMUs\n\nApollo:\n• Pendulous accelerometers\n• Spinning mass gyros\n• Update rate: 10 Hz\n• Mass: 30 kg\n\nModern vs Apollo:\n• 10× more accurate\n• 100× lighter\n• 1000× cheaper\n• Technology improvement!"
      },
      {
        title: "GPS & External Navigation",
        content: "GPS Basics:\n\nHow it works:\n• 24+ satellites in MEO\n• Altitude: 20,200 km\n• Transmit time signals\n• Receiver calculates position\n\nPosition accuracy:\n• Civilian: 5-10 m\n• Military: 1-3 m\n• Differential: 0.1-1 m\n\nVelocity accuracy:\n• Standard: 0.1 m/s\n• High-precision: 0.01 m/s\n\nLimitations:\n\nAltitude limit:\n• CoCom limit: 18 km or 515 m/s\n• Prevents missile use\n• Rockets exceed this!\n• Need special GPS receivers\n\nFalcon 9 GPS:\n• Works to 80 km altitude\n• Works to 2,000 m/s\n• Special military-grade receiver\n• Provides position + velocity\n\nSensor Fusion:\n\nCombine IMU + GPS:\n• IMU: High rate, drifts\n• GPS: Low rate, accurate\n• Kalman filter combines both\n• Best of both worlds!\n\nKalman Filter:\n\nOptimal estimation:\n• Predicts state from IMU\n• Corrects with GPS\n• Accounts for noise\n• Provides best estimate\n\nResult:\n• Position: 1-5 m accuracy\n• Velocity: 0.01-0.1 m/s\n• Attitude: 0.1-1° accuracy\n\nOther Sensors:\n\nRadar altimeter:\n• Measures height above ground\n• Used for landing\n• Range: 0-5 km\n• Accuracy: 0.1 m\n\nStar tracker:\n• Identifies star patterns\n• Determines attitude\n• Accuracy: 0.001°\n• Used in space\n\nHorizon sensor:\n• Detects Earth's edge\n• Determines attitude\n• Used in orbit\n• Accuracy: 0.1°"
      },
      {
        title: "Coordinate Systems",
        content: "Reference Frames:\n\n1. Inertial Frame (ECI):\n• Earth-Centered Inertial\n• Fixed relative to stars\n• Used for orbital mechanics\n• Origin: Earth center\n\n2. Earth-Fixed Frame (ECEF):\n• Earth-Centered Earth-Fixed\n• Rotates with Earth\n• Used for ground tracking\n• Origin: Earth center\n\n3. Body Frame:\n• Fixed to rocket\n• x: forward, y: right, z: down\n• Used for control\n• Origin: Center of mass\n\n4. Local Frame (NED):\n• North-East-Down\n• Tangent to Earth surface\n• Used for navigation\n• Origin: Launch site\n\nCoordinate Transformations:\n\nRotation matrices:\nR_x(θ) = [1, 0, 0; 0, cos(θ), -sin(θ); 0, sin(θ), cos(θ)]\n\nEuler angles:\n• Roll (φ): Rotation about x\n• Pitch (θ): Rotation about y\n• Yaw (ψ): Rotation about z\n\nQuaternions:\n• 4-element representation\n• Avoids gimbal lock\n• Computationally efficient\n• Used in modern systems\n\nExample: Launch Trajectory\n\nAt liftoff:\n• Position: (0, 0, 0) in NED\n• Velocity: (0, 0, 0)\n• Attitude: (0, 90°, 0) (vertical)\n\nAt 100 seconds:\n• Position: (5 km, 2 km, 40 km) in NED\n• Velocity: (200 m/s, 50 m/s, 800 m/s)\n• Attitude: (0, 60°, 5°) (pitching over)\n\nTransform to inertial frame:\n• Account for Earth rotation\n• Account for launch site latitude\n• Used for orbital calculations"
      },
      {
        title: "Navigation Accuracy Requirements",
        content: "Mission Requirements:\n\nLaunch to LEO:\n• Position: ±10 km acceptable\n• Velocity: ±10 m/s acceptable\n• Attitude: ±1° acceptable\n\nOrbital insertion:\n• Position: ±1 km\n• Velocity: ±1 m/s\n• Attitude: ±0.1°\n\nRendezvous (ISS):\n• Position: ±10 m\n• Velocity: ±0.01 m/s\n• Attitude: ±0.01°\n\nLanding:\n• Position: ±10 m horizontal\n• Velocity: ±0.1 m/s vertical\n• Attitude: ±1°\n\nError Sources:\n\n1. Sensor errors:\n• IMU bias and drift\n• GPS multipath\n• Calibration errors\n\n2. Environmental:\n• Atmospheric density\n• Wind gusts\n• Magnetic interference\n\n3. Modeling:\n• Gravity model\n• Thrust variation\n• Mass uncertainty\n\nError Budget:\n\nExample: Falcon 9 Landing\n\nPosition error sources:\n• IMU drift: ±2 m\n• GPS error: ±3 m\n• Wind: ±5 m\n• Control: ±2 m\n• RSS total: ±6.5 m\n\nActual performance: <10 m ✓\n\nRedundancy:\n\nTriple redundancy:\n• 3 independent IMUs\n• 2 GPS receivers\n• Voting logic\n• Fault detection\n\nFalcon 9:\n• 3 flight computers\n• 3 IMUs\n• 2 GPS\n• Can lose 1 and continue\n\nApollo:\n• 1 IMU (no redundancy!)\n• Backup: Sextant + stars\n• Manual navigation possible\n• Risky by modern standards"
      }
    ],
    
    keyTakeaways: [
      "IMUs measure acceleration and rotation; integrate to get position and attitude",
      "GPS provides absolute position but has altitude/velocity limits for rockets",
      "Kalman filters fuse IMU and GPS for optimal state estimation",
      "Multiple coordinate frames used: inertial, Earth-fixed, body, local",
      "Navigation accuracy requirements vary: LEO (±10 km) to docking (±10 m)",
      "Triple redundancy standard for critical systems"
    ],
    
    vocabulary: [
      { term: "IMU", definition: "Inertial Measurement Unit; accelerometers + gyroscopes" },
      { term: "Kalman Filter", definition: "Optimal estimation algorithm that fuses multiple sensors" },
      { term: "ECI", definition: "Earth-Centered Inertial frame; fixed relative to stars" },
      { term: "Euler Angles", definition: "Roll, pitch, yaw; describe 3D orientation" },
      { term: "Sensor Fusion", definition: "Combining multiple sensors for better accuracy" }
    ]
  },

  {
    id: 27,
    title: "Control Theory & Autopilot",
    unit: "Guidance, Navigation & Control",
    duration: "30 min",
    introduction: "Control systems keep rockets on course and stable. Understanding control theory is essential for autopilot design and mission success.",
    
    sections: [
      {
        title: "PID Control Basics",
        content: "PID Controller:\n\nControl law:\nu(t) = K_p×e(t) + K_i×∫e(t)dt + K_d×de(t)/dt\n\nWhere:\n• u = control output (thrust vector angle)\n• e = error (desired - actual)\n• K_p = proportional gain\n• K_i = integral gain\n• K_d = derivative gain\n\nProportional (P):\n• Responds to current error\n• Fast response\n• But: Steady-state error\n\nIntegral (I):\n• Eliminates steady-state error\n• Accumulates past errors\n• But: Can cause overshoot\n\nDerivative (D):\n• Predicts future error\n• Dampens oscillations\n• But: Sensitive to noise\n\nExample: Attitude Control\n\nDesired pitch: 60°\nActual pitch: 58°\nError: e = 2°\n\nControl gains:\n• K_p = 5 (°/°)\n• K_i = 0.1 (°/(°·s))\n• K_d = 2 (°·s/°)\n\nControl output:\n• P term: 5 × 2 = 10°\n• I term: 0.1 × ∫2 dt = 0.2° (assuming 1s)\n• D term: 2 × 0.5 = 1° (assuming de/dt = 0.5°/s)\n• Total: u = 11.2° gimbal angle\n\nTuning:\n\nZiegler-Nichols method:\n1. Set K_i = K_d = 0\n2. Increase K_p until oscillation\n3. Measure period T_u\n4. Set gains from table\n\nTypical values for rockets:\n• K_p: 1-10\n• K_i: 0.01-0.1\n• K_d: 0.1-1"
      },
      {
        title: "Guidance Algorithms",
        content: "Gravity Turn:\n\nNatural trajectory:\n• Start vertical\n• Pitch over slightly\n• Let gravity turn rocket\n• Minimize steering losses\n\nPitch program:\nθ(t) = 90° - k×t²\n\nWhere k is tuned for each rocket\n\nFalcon 9 gravity turn:\n• Pitch starts at T+10s\n• Reaches 45° at T+60s\n• Horizontal at MECO\n\nPowered Explicit Guidance (PEG):\n\nUsed by Space Shuttle:\n• Calculates optimal trajectory\n• Updates every second\n• Accounts for:\n  - Current state\n  - Target orbit\n  - Remaining fuel\n  - Thrust profile\n\nAlgorithm:\n1. Predict trajectory\n2. Calculate error\n3. Compute correction\n4. Update thrust vector\n\nConverges in 3-5 iterations\n\nConvex Optimization:\n\nModern approach (SpaceX):\n• Formulate as optimization problem\n• Minimize fuel use\n• Subject to constraints:\n  - Thrust limits\n  - Gimbal limits\n  - Trajectory constraints\n\nSolves in real-time:\n• 10-50 Hz update rate\n• Handles uncertainties\n• Optimal solution\n\nLanding Guidance:\n\nSuicide burn:\n• Start burn at last possible moment\n• Reach zero velocity at ground\n• No hover capability\n\nTiming calculation:\nh = v²/(2a)\n\nWhere:\n• h = altitude\n• v = velocity\n• a = deceleration\n\nExample: Falcon 9 Landing\n• Altitude: 2,000 m\n• Velocity: 200 m/s\n• Thrust: 400 kN\n• Mass: 25,000 kg\n• Deceleration: 16 - 9.81 = 6.19 m/s²\n\nBurn time:\nt = v/a = 200/6.19 = 32.3 seconds\n\nStart altitude:\nh = v²/(2a) = 200²/(2×6.19) = 3,230 m\n\nWait until 3,230 m, then burn!"
      },
      {
        title: "Stability & Control",
        content: "Static Stability:\n\nCenter of Pressure (CP):\n• Point where aerodynamic forces act\n• Depends on shape\n\nCenter of Mass (CM):\n• Point where mass is concentrated\n• Changes as fuel burns\n\nStability condition:\nCP must be behind CM\n\nStability margin:\nSM = (CP - CM) / L\n\nWhere L = reference length\n\nTypical: SM = 5-15%\n\nDynamic Stability:\n\nOscillation modes:\n• Short period: Fast, damped\n• Long period (phugoid): Slow\n\nDamping ratio:\nζ = c/(2√(km))\n\nWhere:\n• c = damping coefficient\n• k = spring constant\n• m = mass\n\nDesired: ζ = 0.7 (critically damped)\n\nControl Authority:\n\nRequired torque:\nτ = I×α\n\nWhere:\n• τ = torque (N·m)\n• I = moment of inertia (kg·m²)\n• α = angular acceleration (rad/s²)\n\nExample: Falcon 9 Pitch Control\n• I = 5×10⁶ kg·m²\n• Desired α = 1°/s² = 0.0175 rad/s²\n• Required τ = 87,500 N·m\n\nEngine gimbal:\n• Thrust: 845 kN\n• Gimbal: 5°\n• Moment arm: 20 m\n• Torque: 845,000 × sin(5°) × 20 = 147,000 N·m\n\nMore than enough! ✓\n\nSlosh Dynamics:\n\nLiquid propellant sloshes:\n• Acts like pendulum\n• Natural frequency: 0.5-2 Hz\n• Can destabilize rocket\n\nSolution:\n• Baffles in tanks\n• Control system compensation\n• Careful frequency separation"
      },
      {
        title: "Fault Detection & Recovery",
        content: "Failure Modes:\n\n1. Sensor failures:\n• IMU malfunction\n• GPS loss\n• Pressure sensor error\n\n2. Actuator failures:\n• Engine shutdown\n• Gimbal stuck\n• Valve failure\n\n3. Software errors:\n• Computation error\n• Communication loss\n• Timing issue\n\nFault Detection:\n\nRedundancy voting:\n• 3 sensors measure same thing\n• Compare readings\n• If one differs: Fault!\n• Use majority vote\n\nExample: Triple IMU\n• IMU 1: 58.0°\n• IMU 2: 58.1°\n• IMU 3: 62.5°\n• IMU 3 is faulty!\n• Use average of 1 & 2: 58.05°\n\nPlausibility checks:\n• Is acceleration reasonable?\n• Is position consistent?\n• Is velocity within limits?\n\nFalcon 9 CRS-1:\n• Engine 1 lost pressure\n• Detected in 0.5 seconds\n• Shut down engine\n• Compensated with others\n• Mission success!\n\nRecovery Strategies:\n\n1. Graceful degradation:\n• Continue with reduced capability\n• Example: 8 engines instead of 9\n\n2. Reconfiguration:\n• Switch to backup system\n• Example: Use IMU 2 instead of IMU 1\n\n3. Abort:\n• If mission cannot continue\n• Crew safety priority\n• Example: Launch abort system\n\nAutonomous Decision Making:\n\nModern rockets decide:\n• Which engine to shut down\n• How to compensate\n• Whether to abort\n• All in milliseconds\n\nNo human in loop:\n• Too fast for human reaction\n• Pre-programmed logic\n• Extensive testing required"
      }
    ],
    
    keyTakeaways: [
      "PID control uses proportional, integral, and derivative terms for stability",
      "Gravity turn minimizes steering losses during ascent",
      "Convex optimization enables real-time optimal guidance",
      "Stability requires center of pressure behind center of mass",
      "Triple redundancy with voting logic detects sensor failures",
      "Modern rockets make autonomous decisions in milliseconds"
    ],
    
    vocabulary: [
      { term: "PID Controller", definition: "Proportional-Integral-Derivative control algorithm" },
      { term: "Gravity Turn", definition: "Natural trajectory that minimizes steering losses" },
      { term: "Center of Pressure", definition: "Point where aerodynamic forces act" },
      { term: "Stability Margin", definition: "Distance between center of pressure and center of mass" },
      { term: "Fault Detection", definition: "Identifying system failures through redundancy and checks" }
    ]
  }
];

export default unit5Lessons;
