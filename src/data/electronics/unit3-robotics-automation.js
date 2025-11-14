// Unit 3: Robotics & Automation - Complete (5 lessons)
// Lessons 15-19: Kinematics, computer vision, SLAM, machine learning, autonomous systems

export const electronicsUnit3RoboticsAutomation = [
  {
    id: 15,
    title: "Robot Kinematics & Motion",
    unit: "Robotics & Automation",
    duration: "30 min",
    introduction: "Robot kinematics describes the motion of robot manipulators. Understanding forward and inverse kinematics enables precise control of robot arms and mobile platforms.",
    
    sections: [
      {
        title: "Forward Kinematics",
        content: `**Degrees of Freedom (DOF):**

DOF = number of independent motions

Examples:
• 2-DOF arm: shoulder + elbow
• 6-DOF arm: 3 position + 3 orientation
• Mobile robot: 3-DOF (x, y, θ)

**2-Link Planar Arm:**

Link lengths: L₁, L₂
Joint angles: θ₁, θ₂

End effector position:
x = L₁×cos(θ₁) + L₂×cos(θ₁+θ₂)
y = L₁×sin(θ₁) + L₂×sin(θ₁+θ₂)

**Example:**
• L₁ = 0.5m, L₂ = 0.3m
• θ₁ = 30°, θ₂ = 45°

Calculate:
x = 0.5×cos(30°) + 0.3×cos(75°)
x = 0.433 + 0.078 = 0.511m

y = 0.5×sin(30°) + 0.3×sin(75°)
y = 0.250 + 0.290 = 0.540m

End effector at (0.511, 0.540)

**Workspace:**

Reachable area:
• Maximum reach: L₁ + L₂ = 0.8m
• Minimum reach: |L₁ - L₂| = 0.2m
• Annular workspace

**Homogeneous Transformations:**

4×4 matrix for position + orientation:

T = [R  p]
    [0  1]

Where:
• R = 3×3 rotation matrix
• p = 3×1 position vector

**DH Parameters:**

Denavit-Hartenberg convention:
• a: link length
• α: link twist
• d: link offset
• θ: joint angle

Transform between joints:
T = Rot_z(θ) × Trans_z(d) × Trans_x(a) × Rot_x(α)`
      },
      {
        title: "Inverse Kinematics",
        content: `**Problem:**

Given desired end effector position (x, y)
Find joint angles (θ₁, θ₂)

**Analytical Solution (2-Link Arm):**

Using law of cosines:
cos(θ₂) = (x² + y² - L₁² - L₂²) / (2×L₁×L₂)

θ₂ = ±acos(...)  // Two solutions (elbow up/down)

θ₁ = atan2(y, x) - atan2(L₂×sin(θ₂), L₁+L₂×cos(θ₂))

**Example: Reach (0.6, 0.4)**

Given: L₁ = 0.5m, L₂ = 0.3m

Step 1: Calculate θ₂
cos(θ₂) = (0.6² + 0.4² - 0.5² - 0.3²) / (2×0.5×0.3)
cos(θ₂) = (0.36 + 0.16 - 0.25 - 0.09) / 0.3
cos(θ₂) = 0.18 / 0.3 = 0.6

θ₂ = acos(0.6) = 53.1° (elbow up)
or θ₂ = -53.1° (elbow down)

Step 2: Calculate θ₁ (elbow up)
θ₁ = atan2(0.4, 0.6) - atan2(0.3×sin(53.1°), 0.5+0.3×cos(53.1°))
θ₁ = 33.7° - 20.3° = 13.4°

Solution: θ₁ = 13.4°, θ₂ = 53.1°

**Numerical Methods:**

For complex robots (>3 DOF):
• Jacobian-based methods
• Iterative optimization
• Neural networks

**Jacobian Matrix:**

Relates joint velocities to end effector velocity:
ẋ = J(θ) × θ̇

Where:
• ẋ = end effector velocity
• θ̇ = joint velocities
• J = Jacobian matrix

**Singularities:**

Configurations where J loses rank:
• Arm fully extended
• Joints aligned
• Loss of DOF

Avoid singularities in path planning!`
      },
      {
        title: "Trajectory Planning",
        content: `**Point-to-Point Motion:**

Trapezoidal velocity profile:
• Acceleration phase
• Constant velocity
• Deceleration phase

**Example: Move 1 meter in 2 seconds**

Parameters:
• Distance: d = 1m
• Time: t_total = 2s
• Acceleration time: t_a = 0.5s

Acceleration:
a = 4×d / (t_total × (2×t_total - t_a))
a = 4×1 / (2 × (4 - 0.5)) = 0.571 m/s²

Max velocity:
v_max = a × t_a = 0.571 × 0.5 = 0.286 m/s

Position profile:
• 0 to 0.5s: x = ½×a×t²
• 0.5 to 1.5s: x = x₁ + v_max×(t-0.5)
• 1.5 to 2.0s: x = x₂ + v_max×(t-1.5) - ½×a×(t-1.5)²

**Smooth Trajectories:**

S-curve (jerk-limited):
• Limits rate of acceleration change
• Smoother motion
• Reduces vibration

Polynomial interpolation:
• 3rd order: position, velocity continuous
• 5th order: adds acceleration continuity

**Multi-Joint Coordination:**

Synchronized motion:
• All joints start and stop together
• Scale velocities proportionally

Example: 2-joint move
• Joint 1: 30° in 2s → 15°/s
• Joint 2: 60° in 2s → 30°/s

Both complete simultaneously

**Path Planning:**

Cartesian space:
• Straight line in workspace
• Complex joint trajectories

Joint space:
• Straight line in joint angles
• Curved path in workspace

**Obstacle Avoidance:**

Via points:
• Intermediate waypoints
• Avoid obstacles
• Smooth interpolation between points`
      }
    ],
    
    keyTakeaways: [
      "Forward kinematics: joint angles → end effector position",
      "Inverse kinematics: desired position → joint angles (may have multiple solutions)",
      "2-link arm: x = L₁cos(θ₁) + L₂cos(θ₁+θ₂)",
      "Jacobian relates joint velocities to end effector velocity: ẋ = J×θ̇",
      "Trapezoidal profile: acceleration, constant velocity, deceleration",
      "Singularities occur when Jacobian loses rank (avoid in planning)"
    ],
    
    vocabulary: [
      { term: "DOF", definition: "Degrees of Freedom; number of independent motions" },
      { term: "Forward Kinematics", definition: "Calculate end effector position from joint angles" },
      { term: "Inverse Kinematics", definition: "Calculate joint angles for desired end effector position" },
      { term: "Jacobian", definition: "Matrix relating joint velocities to end effector velocity" },
      { term: "Singularity", definition: "Configuration where robot loses DOF; Jacobian not full rank" }
    ],
    
    quiz: {
      questions: [
        { id: "q15-1", question: "Forward kinematics calculates:", options: ["Joint angles from position", "End effector position from joint angles", "Velocity from acceleration", "Force from torque"], correctAnswer: 1, explanation: "Forward kinematics: given joint angles, calculate end effector position!" },
        { id: "q15-2", question: "2-link arm with L₁=L₂=0.5m, both at 90°, end effector y-position:", options: ["0m", "0.5m", "0.707m", "1.0m"], correctAnswer: 3, explanation: "y = L₁sin(90°) + L₂sin(180°) = 0.5 + 0.5 = 1.0m!" },
        { id: "q15-3", question: "Inverse kinematics may have:", options: ["No solution", "One solution", "Multiple solutions", "All of the above"], correctAnswer: 3, explanation: "IK can have no solution (unreachable), one solution, or multiple solutions (elbow up/down)!" },
        { id: "q15-4", question: "Jacobian matrix relates:", options: ["Position to angles", "Joint velocities to end effector velocity", "Force to torque", "Acceleration to jerk"], correctAnswer: 1, explanation: "Jacobian: ẋ = J×θ̇ relates joint velocities to end effector velocity!" }
      ]
    }
  },

  {
    id: 16,
    title: "Computer Vision & Image Processing",
    unit: "Robotics & Automation",
    duration: "30 min",
    introduction: "Computer vision enables robots to perceive their environment. Understanding image processing, feature detection, and object recognition is essential for autonomous systems.",
    
    sections: [
      {
        title: "Image Fundamentals",
        content: `**Image Representation:**

Grayscale image:
• 2D array of pixels
• Values: 0 (black) to 255 (white)
• Size: Width × Height

Example: 640×480 image
• 307,200 pixels
• 1 byte per pixel = 300 KB

Color image (RGB):
• 3 channels: Red, Green, Blue
• Each channel: 0-255
• Size: W × H × 3

Example: 640×480 RGB
• 921,600 bytes = 900 KB

**Resolution:**

Spatial resolution:
• Pixels per unit distance
• Higher = more detail

Example: Camera specs
• Sensor: 1920×1080 (2MP)
• FOV: 60° horizontal
• At 1m distance: 1.15m width
• Resolution: 1920/1.15 = 1670 pixels/m

**Frame Rate:**

Processing time:
t_frame = t_capture + t_process

For 30 FPS:
t_frame = 1/30 = 33.3ms

If t_capture = 10ms:
t_process must be <23.3ms

**Color Spaces:**

RGB → Grayscale:
Gray = 0.299×R + 0.587×G + 0.114×B

RGB → HSV:
• Hue: Color (0-360°)
• Saturation: Intensity (0-100%)
• Value: Brightness (0-100%)

Better for color-based detection`
      },
      {
        title: "Image Processing Operations",
        content: `**Filtering:**

**1. Gaussian Blur:**
Reduces noise, smooths image

Kernel (3×3):
[1  2  1]
[2  4  2] × 1/16
[1  2  1]

**2. Edge Detection (Sobel):**

Horizontal edges:
[-1  0  1]
[-2  0  2]
[-1  0  1]

Vertical edges:
[-1 -2 -1]
[ 0  0  0]
[ 1  2  1]

Gradient magnitude:
G = √(G_x² + G_y²)

**3. Thresholding:**

Binary image:
pixel = (value > threshold) ? 255 : 0

Adaptive threshold:
• Different threshold per region
• Better for varying lighting

**Example: Edge Detection**

Original pixel values:
[100 100 100]
[100 150 100]
[100 100 100]

Apply Sobel X:
G_x = -1×100 + 0×100 + 1×100 +
      -2×100 + 0×150 + 2×100 +
      -1×100 + 0×100 + 1×100
G_x = 0

Apply Sobel Y:
G_y = -1×100 - 2×100 - 1×100 +
       1×100 + 2×100 + 1×100
G_y = 0

No edge detected (uniform region)

**Morphological Operations:**

Erosion:
• Shrinks objects
• Removes small noise

Dilation:
• Expands objects
• Fills small holes

Opening = Erosion + Dilation
Closing = Dilation + Erosion`
      },
      {
        title: "Feature Detection & Tracking",
        content: `**Corner Detection (Harris):**

Corners have high gradient in multiple directions

Response function:
R = det(M) - k×trace(M)²

Where M is structure tensor

If R > threshold: corner detected

**Blob Detection:**

Finds circular regions:
• Different from background
• Consistent intensity

Example: Detect circular markers

**Feature Matching:**

**1. ORB (Oriented FAST and Rotated BRIEF):**
• Fast feature detector
• Binary descriptor
• Rotation invariant

**2. SIFT (Scale-Invariant Feature Transform):**
• Scale and rotation invariant
• More accurate but slower
• 128-dimensional descriptor

**Example: Object Tracking**

Frame 1:
• Detect features in object
• Store descriptors

Frame 2:
• Detect features in new frame
• Match with Frame 1 descriptors
• Calculate object motion

Matching distance:
d = Σ|descriptor1[i] - descriptor2[i]|

Match if d < threshold

**Optical Flow:**

Tracks pixel motion between frames:
• Dense: all pixels
• Sparse: selected features

Lucas-Kanade method:
Assumes constant motion in local region

**Example: Calculate Velocity**

Feature moves:
• Frame 1: (100, 150)
• Frame 2: (105, 148)
• Time: 33ms (30 FPS)

Velocity:
v_x = (105-100) / 0.033 = 152 pixels/s
v_y = (148-150) / 0.033 = -61 pixels/s

If 1 pixel = 1cm at this distance:
v = √(152² + 61²) = 164 cm/s = 1.64 m/s`
      }
    ],
    
    keyTakeaways: [
      "Grayscale: 1 byte/pixel, RGB: 3 bytes/pixel",
      "30 FPS requires <33.3ms per frame (capture + processing)",
      "Gaussian blur reduces noise, Sobel detects edges",
      "Thresholding creates binary image: pixel > threshold → 255",
      "Corner detection finds high-gradient points (Harris, FAST)",
      "Feature matching enables object tracking between frames"
    ],
    
    vocabulary: [
      { term: "Grayscale", definition: "Single-channel image; 0 (black) to 255 (white)" },
      { term: "Sobel", definition: "Edge detection filter using gradient calculation" },
      { term: "Thresholding", definition: "Convert to binary: pixel > threshold → white" },
      { term: "Feature", definition: "Distinctive point in image (corner, blob, edge)" },
      { term: "Optical Flow", definition: "Tracks pixel motion between consecutive frames" }
    ],
    
    quiz: {
      questions: [
        { id: "q16-1", question: "640×480 RGB image size:", options: ["300 KB", "600 KB", "900 KB", "1200 KB"], correctAnswer: 2, explanation: "640×480×3 bytes = 921,600 bytes ≈ 900 KB (3 bytes per pixel for RGB)!" },
        { id: "q16-2", question: "30 FPS requires frame time:", options: ["16.7ms", "33.3ms", "50ms", "100ms"], correctAnswer: 1, explanation: "30 FPS = 1/30 = 33.3ms per frame!" },
        { id: "q16-3", question: "Sobel filter detects:", options: ["Colors", "Edges", "Corners", "Circles"], correctAnswer: 1, explanation: "Sobel calculates gradient to detect edges in image!" },
        { id: "q16-4", question: "Thresholding creates:", options: ["Grayscale image", "Binary image (black/white)", "Color image", "Blurred image"], correctAnswer: 1, explanation: "Thresholding converts to binary: pixel > threshold → 255 (white), else 0 (black)!" }
      ]
    }
  },

  {
    id: 17,
    title: "SLAM & Navigation",
    unit: "Robotics & Automation",
    duration: "30 min",
    introduction: "SLAM (Simultaneous Localization and Mapping) enables robots to build maps while tracking their position. Understanding SLAM and path planning is essential for autonomous navigation.",
    
    sections: [
      {
        title: "Localization Fundamentals",
        content: `**Dead Reckoning:**

Estimate position from motion:
x(t+Δt) = x(t) + v×cos(θ)×Δt
y(t+Δt) = y(t) + v×sin(θ)×Δt
θ(t+Δt) = θ(t) + ω×Δt

Where:
• v = linear velocity
• ω = angular velocity
• θ = heading angle

**Example: Robot Motion**

Initial: (0, 0, 0°)
Move: v=1 m/s, ω=0, t=2s

New position:
x = 0 + 1×cos(0°)×2 = 2m
y = 0 + 1×sin(0°)×2 = 0m
θ = 0° + 0×2 = 0°

Position: (2, 0, 0°)

**Error Accumulation:**

Dead reckoning drifts over time:
• Wheel slip
• Measurement errors
• Uneven terrain

Error grows unbounded without correction!

**Sensor Fusion:**

Combine multiple sensors:
• Wheel encoders (odometry)
• IMU (acceleration, gyro)
• GPS (absolute position)
• LIDAR/camera (landmarks)

**Kalman Filter:**

Optimal state estimation:
1. Predict: Use motion model
2. Update: Correct with sensor measurement

Prediction:
x̂ = F×x + B×u

Update:
K = P×H^T / (H×P×H^T + R)
x̂ = x̂ + K×(z - H×x̂)

Where:
• x̂ = state estimate
• K = Kalman gain
• z = measurement
• P = covariance
• R = measurement noise`
      },
      {
        title: "SLAM Algorithms",
        content: `**SLAM Problem:**

Simultaneously:
• Estimate robot pose (x, y, θ)
• Build map of environment
• Associate measurements with landmarks

**EKF-SLAM (Extended Kalman Filter):**

State vector:
x = [x_robot, y_robot, θ, x_1, y_1, ..., x_n, y_n]

Where (x_i, y_i) are landmark positions

Complexity: O(n²) for n landmarks

**FastSLAM:**

Particle filter approach:
• Multiple hypotheses (particles)
• Each particle has own map
• Resample based on likelihood

Complexity: O(M×log(n))
Where M = number of particles

**Example: Simple SLAM**

Robot at (0, 0, 0°)
Detects landmark at:
• Range: 5m
• Bearing: 30°

Landmark position:
x_L = 0 + 5×cos(30°) = 4.33m
y_L = 0 + 5×sin(30°) = 2.50m

Store in map: Landmark 1 at (4.33, 2.50)

Robot moves to (2, 1, 45°)
Detects same landmark:
• Range: 3.61m
• Bearing: 15°

Expected position:
x_L = 2 + 3.61×cos(60°) = 3.81m
y_L = 1 + 3.61×sin(60°) = 4.13m

Discrepancy indicates odometry error!
Update robot pose estimate

**Loop Closure:**

Recognize previously visited location:
• Corrects accumulated drift
• Globally consistent map

Detection methods:
• Visual features
• Place recognition
• Scan matching

**Graph SLAM:**

Pose graph optimization:
• Nodes: robot poses
• Edges: constraints (odometry, loop closures)
• Minimize global error`
      },
      {
        title: "Path Planning",
        content: `**Grid-Based Planning:**

**A* Algorithm:**

Cost function:
f(n) = g(n) + h(n)

Where:
• g(n) = cost from start to n
• h(n) = heuristic (estimated cost to goal)

Heuristic (Euclidean):
h = √((x_goal - x)² + (y_goal - y)²)

**Example: 5×5 Grid**

Start: (0, 0)
Goal: (4, 4)
Obstacle at (2, 2)

Step 1: Expand start
• (0,1): g=1, h=5.66, f=6.66
• (1,0): g=1, h=5.66, f=6.66

Step 2: Expand (1,0)
• (1,1): g=2, h=4.24, f=6.24 ← Best
• (2,0): g=2, h=5.66, f=7.66

Continue until goal reached

Path: (0,0)→(1,0)→(1,1)→(2,1)→(3,2)→(4,3)→(4,4)
Cost: 6 steps

**RRT (Rapidly-exploring Random Tree):**

For high-dimensional spaces:
1. Sample random point
2. Find nearest node in tree
3. Extend toward sample
4. Add if collision-free

Advantages:
• Works in high dimensions
• Probabilistically complete
• Fast for complex spaces

**Dynamic Window Approach:**

Real-time obstacle avoidance:
1. Predict trajectories for velocity pairs (v, ω)
2. Eliminate colliding trajectories
3. Score remaining by:
   • Distance to goal
   • Clearance from obstacles
   • Forward velocity
4. Select best trajectory

**Example: DWA Scoring**

Trajectory 1: v=1.0 m/s, ω=0 rad/s
• Goal distance: 5m
• Clearance: 2m
• Score: 0.8×(1/5) + 0.1×2 + 0.1×1 = 0.46

Trajectory 2: v=0.8 m/s, ω=0.2 rad/s
• Goal distance: 4.5m
• Clearance: 1.5m
• Score: 0.8×(1/4.5) + 0.1×1.5 + 0.1×0.8 = 0.41

Select Trajectory 1 (higher score)

**Potential Fields:**

Attractive force to goal:
F_att = -k_att × (x - x_goal)

Repulsive force from obstacles:
F_rep = k_rep × (1/d - 1/d_0) × (1/d²)

Total force:
F = F_att + ΣF_rep

Move in direction of F`
      }
    ],
    
    keyTakeaways: [
      "Dead reckoning: x(t+Δt) = x(t) + v×cos(θ)×Δt; accumulates error",
      "SLAM simultaneously estimates robot pose and builds map",
      "Kalman filter fuses sensors: predict with model, update with measurement",
      "A* path planning: f(n) = g(n) + h(n); finds optimal path",
      "RRT samples random points, builds tree; good for high dimensions",
      "Loop closure corrects accumulated drift in SLAM"
    ],
    
    vocabulary: [
      { term: "SLAM", definition: "Simultaneous Localization and Mapping" },
      { term: "Dead Reckoning", definition: "Position estimation from motion; accumulates error" },
      { term: "Kalman Filter", definition: "Optimal state estimator; fuses prediction and measurement" },
      { term: "A*", definition: "Graph search algorithm; f(n) = g(n) + h(n)" },
      { term: "Loop Closure", definition: "Recognizing previously visited location; corrects drift" }
    ],
    
    quiz: {
      questions: [
        { id: "q17-1", question: "Dead reckoning problem:", options: ["Too slow", "Error accumulates over time", "Requires GPS", "Too complex"], correctAnswer: 1, explanation: "Dead reckoning accumulates error from wheel slip and measurement errors. Needs correction!" },
        { id: "q17-2", question: "SLAM does:", options: ["Only localization", "Only mapping", "Simultaneous localization and mapping", "Only path planning"], correctAnswer: 2, explanation: "SLAM simultaneously estimates robot pose AND builds map of environment!" },
        { id: "q17-3", question: "A* cost function:", options: ["f = g + h", "f = g - h", "f = g × h", "f = g / h"], correctAnswer: 0, explanation: "A*: f(n) = g(n) + h(n) where g=cost from start, h=heuristic to goal!" },
        { id: "q17-4", question: "Loop closure helps with:", options: ["Speed", "Correcting accumulated drift", "Power consumption", "Sensor noise"], correctAnswer: 1, explanation: "Loop closure recognizes previously visited location, correcting accumulated odometry drift!" }
      ]
    }
  },

  {
    id: 18,
    title: "Machine Learning for Robotics",
    unit: "Robotics & Automation",
    duration: "30 min",
    introduction: "Machine learning enables robots to learn from data and improve performance. Understanding neural networks, training, and deployment on embedded systems is essential for modern robotics.",
    
    sections: [
      {
        title: "Neural Network Fundamentals",
        content: `**Perceptron:**

Single neuron:
y = activation(Σ(w_i × x_i) + b)

Where:
• x_i = inputs
• w_i = weights
• b = bias
• activation = sigmoid, ReLU, etc.

**Example: Binary Classification**

Inputs: x₁=0.5, x₂=0.8
Weights: w₁=0.6, w₂=0.4
Bias: b=-0.3

Calculate:
z = 0.6×0.5 + 0.4×0.8 - 0.3 = 0.32

Sigmoid activation:
y = 1 / (1 + e^(-0.32)) = 0.579

Output: 0.579 (58% probability)

**Multi-Layer Perceptron:**

Layers:
• Input layer
• Hidden layers (1 or more)
• Output layer

Forward propagation:
h₁ = activation(W₁×x + b₁)
h₂ = activation(W₂×h₁ + b₂)
y = activation(W₃×h₂ + b₃)

**Activation Functions:**

ReLU (Rectified Linear Unit):
f(x) = max(0, x)
• Fast computation
• Avoids vanishing gradient
• Most common

Sigmoid:
f(x) = 1 / (1 + e^(-x))
• Output: 0 to 1
• Used for probabilities

Tanh:
f(x) = (e^x - e^(-x)) / (e^x + e^(-x))
• Output: -1 to 1
• Zero-centered`
      },
      {
        title: "Training & Optimization",
        content: `**Loss Functions:**

**Mean Squared Error (Regression):**
L = (1/n) × Σ(y_pred - y_true)²

**Cross-Entropy (Classification):**
L = -Σ(y_true × log(y_pred))

**Gradient Descent:**

Update weights:
w = w - α × ∂L/∂w

Where:
• α = learning rate (0.001-0.1 typical)
• ∂L/∂w = gradient

**Example: Simple Update**

Current weight: w=0.5
Gradient: ∂L/∂w = 0.3
Learning rate: α=0.1

New weight:
w = 0.5 - 0.1×0.3 = 0.47

**Backpropagation:**

Calculate gradients layer by layer:
1. Forward pass: compute outputs
2. Calculate loss
3. Backward pass: compute gradients
4. Update weights

**Optimization Algorithms:**

**SGD (Stochastic Gradient Descent):**
• Update per sample or mini-batch
• Fast but noisy

**Adam (Adaptive Moment Estimation):**
• Adaptive learning rates
• Momentum + RMSprop
• Most popular

**Training Process:**

1. Initialize weights randomly
2. For each epoch:
   • Forward pass
   • Calculate loss
   • Backward pass
   • Update weights
3. Repeat until convergence

**Example: Training Metrics**

Epoch 1: Loss=0.85, Accuracy=65%
Epoch 10: Loss=0.42, Accuracy=82%
Epoch 50: Loss=0.15, Accuracy=94%
Epoch 100: Loss=0.08, Accuracy=96%

Converged after ~100 epochs

**Overfitting Prevention:**

Techniques:
• Dropout: randomly disable neurons
• L2 regularization: penalize large weights
• Data augmentation: increase training data
• Early stopping: stop when validation loss increases`
      },
      {
        title: "Deployment on Edge Devices",
        content: `**Model Optimization:**

**Quantization:**

Convert float32 to int8:
• 4× smaller model
• 4× faster inference
• Minimal accuracy loss

Example:
• Original: 10 MB, 100ms inference
• Quantized: 2.5 MB, 25ms inference

**Pruning:**

Remove unnecessary connections:
• Identify low-weight connections
• Set to zero
• Retrain (fine-tune)

Typical: 50-90% weights can be pruned

**Knowledge Distillation:**

Train small model from large model:
• Large "teacher" model
• Small "student" model
• Student learns from teacher outputs

**TensorFlow Lite:**

For microcontrollers:
• Optimized for ARM Cortex-M
• Quantized models
• Minimal RAM usage

Example: STM32H7
• 2 MB Flash
• 1 MB RAM
• Run 10-50 KB models

**Inference Time:**

Calculate operations:
• Fully connected: 2×n×m (n inputs, m outputs)
• Convolution: 2×k²×c_in×c_out×h×w

Example: Simple CNN
• Conv 3×3, 16 filters: 2×9×1×16×32×32 = 295K ops
• FC 512→10: 2×512×10 = 10K ops
• Total: ~305K ops

At 200 MHz, 1 op/cycle:
Time = 305K / 200M = 1.5ms

Can run at 666 FPS!

**Memory Requirements:**

Model weights:
• Float32: 4 bytes per weight
• Int8: 1 byte per weight

Activations (intermediate):
• Largest layer determines RAM
• Reuse buffers between layers

Example: 10K weights, int8
• Weights: 10 KB Flash
• Activations: 5 KB RAM
• Total: 15 KB (fits easily)

**Real-World Applications:**

**1. Object Detection:**
• MobileNet-SSD
• YOLO-tiny
• 10-30 FPS on Cortex-M7

**2. Gesture Recognition:**
• Simple CNN
• 50-100 FPS
• <10 KB model

**3. Anomaly Detection:**
• Autoencoder
• Real-time monitoring
• Predictive maintenance`
      }
    ],
    
    keyTakeaways: [
      "Neural network: y = activation(Σ(w×x) + b)",
      "Training: forward pass → loss → backprop → update weights",
      "Quantization: float32 → int8 gives 4× smaller, 4× faster",
      "TensorFlow Lite enables ML on microcontrollers (10-50 KB models)",
      "Inference time depends on operations: ~1ms for simple CNN on Cortex-M7",
      "Pruning removes 50-90% of weights with minimal accuracy loss"
    ],
    
    vocabulary: [
      { term: "Neural Network", definition: "Layers of interconnected neurons; learns from data" },
      { term: "Backpropagation", definition: "Algorithm to calculate gradients for weight updates" },
      { term: "Quantization", definition: "Convert float32 to int8; 4× smaller and faster" },
      { term: "Overfitting", definition: "Model memorizes training data; poor generalization" },
      { term: "TensorFlow Lite", definition: "ML framework optimized for microcontrollers" }
    ],
    
    quiz: {
      questions: [
        { id: "q18-1", question: "Neuron output formula:", options: ["y = w × x", "y = activation(Σ(w×x) + b)", "y = Σ(w×x)", "y = w + x + b"], correctAnswer: 1, explanation: "Neuron: y = activation(Σ(w_i×x_i) + b) where activation is ReLU, sigmoid, etc!" },
        { id: "q18-2", question: "Quantization benefit:", options: ["Higher accuracy", "4× smaller and faster", "Easier training", "More layers"], correctAnswer: 1, explanation: "Quantization (float32→int8) gives 4× smaller model and 4× faster inference!" },
        { id: "q18-3", question: "Backpropagation calculates:", options: ["Outputs", "Gradients for weight updates", "Activations", "Loss only"], correctAnswer: 1, explanation: "Backpropagation calculates gradients ∂L/∂w for updating weights!" },
        { id: "q18-4", question: "TensorFlow Lite for:", options: ["Cloud servers", "Desktop computers", "Microcontrollers", "Supercomputers"], correctAnswer: 2, explanation: "TensorFlow Lite optimized for microcontrollers with limited RAM/Flash!" }
      ]
    }
  },

  {
    id: 19,
    title: "Autonomous Systems Integration",
    unit: "Robotics & Automation",
    duration: "30 min",
    introduction: "Autonomous systems integrate perception, planning, and control. Understanding system architecture, safety, and real-world deployment is essential for building reliable autonomous robots.",
    
    sections: [
      {
        title: "System Architecture",
        content: `**Layered Architecture:**

**1. Perception Layer:**
• Sensors: cameras, LIDAR, IMU
• Processing: filtering, feature extraction
• Output: environment model

**2. Planning Layer:**
• Global path planning
• Local obstacle avoidance
• Trajectory generation
• Output: desired path

**3. Control Layer:**
• PID controllers
• Motor drivers
• Actuator commands
• Output: motor voltages/PWM

**Example: Autonomous Car**

Perception:
• Camera: lane detection (30 FPS)
• LIDAR: obstacle detection (10 Hz)
• GPS: global position (1 Hz)
• IMU: orientation (100 Hz)

Planning:
• Route planning: A* on road network
• Local planning: Dynamic Window Approach
• Update rate: 10 Hz

Control:
• Steering: PID on heading error
• Throttle: PID on velocity error
• Update rate: 100 Hz

**Data Flow:**

Sensors → Perception → World Model
World Model → Planning → Trajectory
Trajectory → Control → Actuators
Actuators → Robot → Environment
Environment → Sensors (loop)

**Timing Requirements:**

Critical loops:
• Control: 10-100 Hz (10-100ms)
• Planning: 1-10 Hz (100-1000ms)
• Perception: 10-30 Hz (33-100ms)

**Example: Timing Budget**

100 Hz control loop (10ms):
• Read sensors: 1ms
• State estimation: 2ms
• Control calculation: 1ms
• Output commands: 1ms
• Margin: 5ms

Total: 10ms ✓`
      },
      {
        title: "Safety & Reliability",
        content: `**Fail-Safe Design:**

**Redundancy:**

Critical systems duplicated:
• Dual sensors (primary + backup)
• Redundant processors
• Multiple communication paths

Example: Autonomous drone
• 2× IMUs
• 2× flight controllers
• 2× power systems

**Watchdog Timers:**

Detect software crashes:
• Periodic "heartbeat" required
• If missed: system reset
• Typical timeout: 100-1000ms

\`\`\`c
void main_loop() {
    while(1) {
        // Do work
        process_sensors();
        update_control();
        
        // Reset watchdog
        WDT_Reset();
        
        delay(10);  // 10ms loop
    }
}
\`\`\`

**Emergency Stop:**

Hardware E-stop:
• Physical button
• Directly cuts power
• Independent of software

Software E-stop:
• Detect dangerous conditions
• Immediate safe state
• Log event for analysis

**Fault Detection:**

Monitor system health:
• Sensor validity checks
• Communication timeouts
• Actuator feedback
• Battery voltage
• Temperature

**Example: Sensor Validation**

LIDAR range check:
\`\`\`c
if (range < 0.1 || range > 30.0) {
    // Invalid reading
    sensor_fault = true;
    use_backup_sensor();
}

if (time_since_update > 200) {
    // Timeout
    sensor_fault = true;
    enter_safe_mode();
}
\`\`\`

**Graceful Degradation:**

Continue operation with reduced capability:
• Camera fails → use LIDAR only
• GPS fails → use dead reckoning
• One motor fails → limp home mode

**Safety Levels:**

Level 0: Normal operation
Level 1: Reduced performance
Level 2: Safe mode (stop/hover)
Level 3: Emergency shutdown`
      },
      {
        title: "Real-World Deployment",
        content: `**Testing Strategy:**

**1. Simulation:**
• Test algorithms safely
• Rapid iteration
• Edge cases
• Tools: Gazebo, CARLA, AirSim

**2. Hardware-in-Loop (HIL):**
• Real hardware
• Simulated environment
• Test interfaces

**3. Controlled Environment:**
• Closed course
• Known obstacles
• Safety barriers

**4. Real-World:**
• Gradual deployment
• Safety driver/operator
• Extensive logging

**Performance Metrics:**

**Accuracy:**
• Position error: <10cm
• Heading error: <2°
• Velocity error: <0.1 m/s

**Reliability:**
• MTBF: Mean Time Between Failures
• Target: >1000 hours
• Availability: >99%

**Efficiency:**
• Battery life: >2 hours
• CPU usage: <80%
• Memory usage: <90%

**Example: Delivery Robot**

Requirements:
• Navigate sidewalks
• Avoid pedestrians
• Deliver within 30 minutes
• 99% success rate

System specs:
• LIDAR: 10 Hz, 30m range
• Camera: 30 FPS, 1080p
• Compute: Jetson Nano
• Battery: 4 hours
• Speed: 1.5 m/s max

Performance:
• Position accuracy: ±5cm
• Obstacle detection: 100% at >2m
• Path planning: 10 Hz
• Battery life: 3.5 hours actual

**Continuous Improvement:**

Data collection:
• Log all sensor data
• Record failures
• Track performance metrics

Analysis:
• Identify failure modes
• Improve algorithms
• Update models

Deployment:
• Over-the-air updates
• A/B testing
• Gradual rollout

**Example: Failure Analysis**

Incident: Robot stopped unexpectedly
Data review:
• LIDAR detected obstacle at 1.5m
• Camera saw clear path
• Discrepancy triggered safe stop

Root cause: LIDAR false positive (rain)
Solution: Sensor fusion with camera
Update: Deployed to fleet

Result: 50% reduction in false stops`
      }
    ],
    
    keyTakeaways: [
      "Layered architecture: Perception → Planning → Control",
      "Control loop: 10-100 Hz, Planning: 1-10 Hz, Perception: 10-30 Hz",
      "Redundancy critical for safety: dual sensors, processors, power",
      "Watchdog timer detects software crashes; resets system",
      "Testing progression: Simulation → HIL → Controlled → Real-world",
      "Continuous improvement: log data, analyze failures, update algorithms"
    ],
    
    vocabulary: [
      { term: "Fail-Safe", definition: "System enters safe state on failure" },
      { term: "Watchdog Timer", definition: "Detects software crashes; requires periodic reset" },
      { term: "Redundancy", definition: "Duplicate critical systems for reliability" },
      { term: "HIL", definition: "Hardware-in-Loop; real hardware, simulated environment" },
      { term: "Graceful Degradation", definition: "Continue with reduced capability after failure" }
    ],
    
    quiz: {
      questions: [
        { id: "q19-1", question: "Control loop typical rate:", options: ["1 Hz", "10-100 Hz", "1000 Hz", "10000 Hz"], correctAnswer: 1, explanation: "Control loops run at 10-100 Hz (10-100ms period) for responsive control!" },
        { id: "q19-2", question: "Watchdog timer purpose:", options: ["Measure time", "Detect software crashes", "Control motors", "Read sensors"], correctAnswer: 1, explanation: "Watchdog timer detects software crashes. Must be reset periodically or system resets!" },
        { id: "q19-3", question: "Redundancy means:", options: ["Extra features", "Duplicate critical systems", "Backup power only", "More sensors"], correctAnswer: 1, explanation: "Redundancy duplicates critical systems (sensors, processors, power) for reliability!" },
        { id: "q19-4", question: "Testing order:", options: ["Real-world first", "Simulation → HIL → Controlled → Real-world", "Skip simulation", "Only simulation"], correctAnswer: 1, explanation: "Safe testing progression: Simulation → HIL → Controlled environment → Real-world!" }
      ]
    }
  }
];
