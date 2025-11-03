// ENHANCED LESSONS 7-12 with detailed explanations
// These will replace the existing lessons 7-12 in mathematicsLessonsData.js

export const enhancedLessons = [
  // LESSON 7: 3D Coordinate Geometry - ENHANCED
  {
    id: 7,
    title: '3D Coordinate Geometry (x, y, z)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 2,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn to navigate 3D space using coordinates - essential for robotics, flight paths, and CAD design. We\'ll break it down step-by-step with visual examples!',
      
      sections: [
        {
          title: '🧠 Understanding Coordinates - Like Giving Directions',
          type: 'concept',
          content: `Think of coordinates as GPS for math! They tell you EXACTLY where something is.

📍 2D COORDINATES (Flat Map):
Imagine you're looking at a city from above:

     ↑ y-axis (North/South)
     |
  4  |    ● (3, 4) ← This point is here!
  3  |
  2  |
  1  |
  0  ├─────────→ x-axis (East/West)
     0 1 2 3 4

To reach point (3, 4):
1. Start at origin (0, 0) - the center
2. Walk 3 steps RIGHT (x = 3)
3. Walk 4 steps UP (y = 4)
4. You're there!

Think of it like: "Go 3 blocks east, then 4 blocks north"

📦 3D COORDINATES (Adding Height):
Now imagine you're in a building with floors!

z-axis ↑ (Height/Altitude)
        |
        |  ● (3, 4, 5) ← Point in 3D space
        |
        └─────→ y-axis (Forward/Back)
       /
      /
     ↙ x-axis (Left/Right)

To reach point (3, 4, 5):
1. Start at origin (0, 0, 0) - ground floor center
2. Move 3 units RIGHT (x = 3)
3. Move 4 units FORWARD (y = 4)
4. Move 5 units UP (z = 5)
5. You're at the point!

Real Examples:
• Drone: (100m east, 200m north, 50m high)
• Robot arm: (0.5m right, 0.3m forward, 0.8m up)
• Minecraft block: (x, y, z) position`
        },
        {
          title: '🔧 Distance Formula - How Far Apart?',
          type: 'concept',
          content: `How do we find the distance between two points?

🎯 2D DISTANCE (Pythagorean Theorem):
Formula: d = √[(x₂-x₁)² + (y₂-y₁)²]

Let's break it down with an example:
Find distance from (1, 2) to (4, 6)

Step 1: Find the differences
Δx = 4 - 1 = 3 (horizontal distance)
Δy = 6 - 2 = 4 (vertical distance)

Step 2: Draw it out (imagine a right triangle):
     (4,6) ●
          /|
         / |
        /  | 4 units up
       /   |
      /    |
(1,2)●─────┘
     3 units right

Step 3: Use Pythagorean theorem
d² = 3² + 4²
d² = 9 + 16 = 25
d = √25 = 5 units

Visual: It's like finding the hypotenuse of a triangle!

🎯 3D DISTANCE (Same idea, add z):
Formula: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]

Example: Distance from (1, 2, 3) to (4, 6, 8)

Step 1: Find differences
Δx = 4 - 1 = 3
Δy = 6 - 2 = 4
Δz = 8 - 3 = 5

Step 2: Calculate
d = √[3² + 4² + 5²]
d = √[9 + 16 + 25]
d = √50 ≈ 7.07 units

💡 MIDPOINT (Halfway Point):
Formula: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)

Example: Midpoint of (2, 4, 6) and (8, 10, 12)
M = ((2+8)/2, (4+10)/2, (6+12)/2)
M = (5, 7, 9)

Think: Average the coordinates!`
        },
        {
          title: '🧮 Practice: Plane Flight Path',
          type: 'practice',
          content: `Let's track a plane's journey!

SCENARIO: Plane takes off and climbs
Start: (0, 0, 0) - runway
End: (1000, 500, 200) meters

Question 1: How far did the plane travel?
Step 1: Identify the coordinates
Point A = (0, 0, 0)
Point B = (1000, 500, 200)

Step 2: Find differences
Δx = 1000 - 0 = 1000 m (horizontal distance)
Δy = 500 - 0 = 500 m (forward distance)
Δz = 200 - 0 = 200 m (altitude gained)

Step 3: Calculate distance
d = √[1000² + 500² + 200²]
d = √[1,000,000 + 250,000 + 40,000]
d = √1,290,000
d ≈ 1,136 meters

Question 2: What's the climb angle?
We look at horizontal vs vertical:
Horizontal = √[1000² + 500²] ≈ 1,118 m
Vertical = 200 m
Angle = arctan(200/1118) ≈ 10.1°

Question 3: Where's the halfway checkpoint?
Midpoint = ((0+1000)/2, (0+500)/2, (0+200)/2)
Midpoint = (500, 250, 100)

The plane should be at 500m forward, 250m sideways, 100m high!`
        },
        {
          title: '🧩 Challenge: Drone Delivery System',
          type: 'simulation',
          content: `Design a drone delivery route!

MISSION SETUP:
• Warehouse: (0, 0, 50) - 50m altitude
• Customer: (300, 400, 100) - 100m altitude
• Drone speed: 10 m/s

CHALLENGE 1: Calculate flight distance
d = √[(300-0)² + (400-0)² + (100-50)²]
d = √[90,000 + 160,000 + 2,500]
d = √252,500 ≈ 502.5 meters

CHALLENGE 2: How long will delivery take?
Time = Distance / Speed
Time = 502.5 / 10 = 50.3 seconds

CHALLENGE 3: Place a charging station halfway
Midpoint = ((0+300)/2, (0+400)/2, (50+100)/2)
Station = (150, 200, 75)

CHALLENGE 4: Add a second customer at (600, 800, 150)
From warehouse to customer 2:
d = √[600² + 800² + 100²]
d = √[360,000 + 640,000 + 10,000]
d = √1,010,000 ≈ 1,005 meters

Which customer is closer? Customer 1 (502.5m) is closer!

YOUR TURN:
Design a route that visits both customers.
Calculate total distance traveled!`
        }
      ],
      
      keyTakeaways: [
        '3D coordinates use (x, y, z) to locate points in space',
        'Distance formula: d = √[(Δx)² + (Δy)² + (Δz)²] - like Pythagorean theorem in 3D',
        'Midpoint formula averages the coordinates: ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)',
        'Always subtract coordinates in same order: (end - start)',
        'Used everywhere: drones, robots, games, GPS, CAD software'
      ],
      
      vocabulary: [
        { term: 'Coordinate', definition: 'A number that tells position along an axis (like an address)' },
        { term: 'Origin', definition: 'The starting point (0, 0, 0) where all axes meet' },
        { term: 'Distance', definition: 'Straight-line length between two points (as the crow flies)' },
        { term: 'Midpoint', definition: 'The exact middle point between two locations' },
        { term: 'Axis', definition: 'A reference line (x, y, or z) used to measure position' }
      ],
      
      quiz: [
        {
          question: 'What is the distance from (0, 0) to (3, 4)?',
          options: ['3', '4', '5', '7'],
          correct: 2
        },
        {
          question: 'What is the midpoint of (2, 4) and (8, 10)?',
          options: ['(4, 6)', '(5, 7)', '(6, 8)', '(10, 14)'],
          correct: 1
        },
        {
          question: 'In 3D space, how many numbers do you need to locate a point?',
          options: ['1', '2', '3', '4'],
          correct: 2
        },
        {
          question: 'A drone moves from (0, 0, 0) to (0, 0, 10). It moved:',
          options: ['Left', 'Right', 'Forward', 'Up'],
          correct: 3
        },
        {
          question: 'Distance from (1, 2, 3) to (1, 2, 8) is:',
          options: ['3', '5', '8', '11'],
          correct: 1
        }
      ]
    }
  }
];

  // LESSON 8: Trigonometry - ENHANCED
  {
    id: 8,
    title: 'Triangles (sin, cos, tan)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 3,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Master trigonometry - the math of angles and triangles. We\'ll use the magic of SOH-CAH-TOA to solve real engineering problems!',
      
      sections: [
        {
          title: '🧠 Right Triangles - The Foundation',
          type: 'concept',
          content: `Let's understand triangles step by step!

🔺 WHAT IS A RIGHT TRIANGLE?
A triangle with one 90° angle (a square corner)

Visual:
        /|
       / |
      /  | ← This side is OPPOSITE to angle θ
     /   |
    / θ  |
   /_____|
   ↑     ↑
   This is ADJACENT to angle θ
   
   The slanted side (/) is the HYPOTENUSE (longest side)

📏 THE THREE SIDES (from angle θ's perspective):

1. HYPOTENUSE (H):
   • Always the longest side
   • Always opposite the 90° angle
   • Never changes no matter which angle you look at

2. OPPOSITE (O):
   • The side ACROSS from your angle
   • Changes depending on which angle you're measuring

3. ADJACENT (A):
   • The side NEXT TO your angle
   • Also changes with the angle

Example with labels:
        C
       /|
    5 / | 4 ← Opposite (from angle A)
     /  |
    / A |
   /____|
  B  3  C
     ↑
  Adjacent (from angle A)

From angle A: Opposite = 4, Adjacent = 3, Hypotenuse = 5

🎯 PYTHAGOREAN THEOREM:
a² + b² = c²
3² + 4² = 5²
9 + 16 = 25 ✓

This ALWAYS works for right triangles!`
        },
        {
          title: '🔧 SOH-CAH-TOA - The Magic Formula',
          type: 'concept',
          content: `The three ratios that unlock ALL triangle problems!

📐 SOH-CAH-TOA Memory Trick:
"Some Old Hippie Caught Another Hippie Tripping On Acid"
(Or make up your own!)

Let's break it down:

🟢 SOH = Sine = Opposite / Hypotenuse
sin(θ) = O/H

Example: If Opposite = 3, Hypotenuse = 5
sin(θ) = 3/5 = 0.6

🔵 CAH = Cosine = Adjacent / Hypotenuse  
cos(θ) = A/H

Example: If Adjacent = 4, Hypotenuse = 5
cos(θ) = 4/5 = 0.8

🟣 TOA = Tangent = Opposite / Adjacent
tan(θ) = O/A

Example: If Opposite = 3, Adjacent = 4
tan(θ) = 3/4 = 0.75

📊 VISUAL EXAMPLE:
        
       /|
    5 / | 3 ← Opposite
     /  |
    /θ  |
   /____|
      4
   Adjacent

From angle θ:
• sin(θ) = 3/5 = 0.6
• cos(θ) = 4/5 = 0.8
• tan(θ) = 3/4 = 0.75

🎯 FINDING THE ANGLE:
If you know the ratio, use inverse functions:
• θ = arcsin(0.6) ≈ 36.9°
• θ = arccos(0.8) ≈ 36.9°
• θ = arctan(0.75) ≈ 36.9°

All give the same angle!

💡 COMMON ANGLES TO REMEMBER:
30°: sin=0.5, cos=0.866, tan=0.577
45°: sin=0.707, cos=0.707, tan=1
60°: sin=0.866, cos=0.5, tan=1.732`
        },
        {
          title: '🧮 Practice: Step-by-Step Solutions',
          type: 'practice',
          content: `Let's solve real problems together!

PROBLEM 1: Find the height of a building
You're 50 meters from a building.
You measure the angle to the top: 60°

Step 1: Draw it
        Top
        /|
       / | h ← Height (OPPOSITE)
      /  |
     /60°|
    /____|
   You  50m
      ↑
   Adjacent

Step 2: Identify what you know
• Adjacent = 50 m (distance from building)
• Angle = 60°
• Want: Opposite (height)

Step 3: Choose the right formula
We have Adjacent, want Opposite → Use TAN!
tan(θ) = Opposite / Adjacent

Step 4: Solve
tan(60°) = h / 50
1.732 = h / 50
h = 50 × 1.732
h = 86.6 meters

The building is 86.6 meters tall!

PROBLEM 2: Find the angle of a ramp
Ramp rises 2 meters over 10 meters horizontal distance

Step 1: Draw it
      /
   2m/ | ← Rise (OPPOSITE)
    /θ |
   /___|
    10m
   ↑ Run (ADJACENT)

Step 2: What do we know?
• Opposite = 2 m
• Adjacent = 10 m
• Want: angle θ

Step 3: Choose formula
Have O and A → Use TAN!
tan(θ) = O / A

Step 4: Solve
tan(θ) = 2 / 10 = 0.2
θ = arctan(0.2)
θ ≈ 11.3°

The ramp angle is 11.3°!

PROBLEM 3: Cable length for a tower
Tower is 30m tall, anchored 40m from base

Step 1: Draw it
    Top
     |\
  c  | \ ← Cable (HYPOTENUSE)
     |  \
  30m|   \
     |    \
     |_____\
       40m

Step 2: Use Pythagorean theorem
c² = 30² + 40²
c² = 900 + 1600
c² = 2500
c = 50 meters

Cable needs to be 50 meters long!`
        },
        {
          title: '🧩 Challenge: Rocket Tracking Station',
          type: 'simulation',
          content: `You're operating a rocket tracking station!

SETUP:
• Your station is 2000 meters from the launch pad
• You have an angle-measuring device
• Track the rocket as it climbs

CHALLENGE 1: Rocket at 30° elevation
Question: How high is the rocket?

Draw it:
    Rocket
      /|
     / | h ← Height
    /  |
   /30°|
  /____|
 Station 2000m Pad

Solution:
tan(30°) = h / 2000
0.577 = h / 2000
h = 2000 × 0.577
h = 1,154 meters

CHALLENGE 2: Rocket at 60° elevation
tan(60°) = h / 2000
1.732 = h / 2000
h = 3,464 meters

CHALLENGE 3: Rocket reaches 5000m
Question: What angle do you measure?

tan(θ) = 5000 / 2000
tan(θ) = 2.5
θ = arctan(2.5)
θ ≈ 68.2°

CHALLENGE 4: Direct distance to rocket
At 60° elevation (height = 3,464m):

Using Pythagorean theorem:
d² = 2000² + 3464²
d² = 4,000,000 + 12,000,000
d = √16,000,000
d = 4,000 meters

Or using cosine:
cos(60°) = 2000 / d
0.5 = 2000 / d
d = 4,000 meters

YOUR MISSION:
Track a rocket that climbs from 0° to 80° in 60 seconds.
Calculate heights at 15-second intervals!`
        }
      ],
      
      keyTakeaways: [
        'SOH-CAH-TOA: sin=O/H, cos=A/H, tan=O/A',
        'Right triangle has one 90° angle',
        'Opposite and Adjacent change based on which angle you\'re measuring',
        'Hypotenuse is always the longest side',
        'Use arcsin, arccos, arctan to find angles from ratios',
        'Pythagorean theorem: a² + b² = c² for right triangles'
      ],
      
      vocabulary: [
        { term: 'Hypotenuse', definition: 'Longest side of right triangle, opposite the 90° angle' },
        { term: 'Opposite', definition: 'Side across from the angle you\'re measuring' },
        { term: 'Adjacent', definition: 'Side next to the angle you\'re measuring (not hypotenuse)' },
        { term: 'Sine (sin)', definition: 'Ratio of opposite to hypotenuse' },
        { term: 'Cosine (cos)', definition: 'Ratio of adjacent to hypotenuse' },
        { term: 'Tangent (tan)', definition: 'Ratio of opposite to adjacent' }
      ],
      
      quiz: [
        {
          question: 'In SOH-CAH-TOA, what does "SOH" stand for?',
          options: ['Sine = Opposite/Hypotenuse', 'Sine = Opposite/Height', 'Side = Over/Hypotenuse', 'Sin = Old/Hippie'],
          correct: 0
        },
        {
          question: 'If opposite = 3 and hypotenuse = 5, what is sin(θ)?',
          options: ['0.5', '0.6', '0.75', '1.67'],
          correct: 1
        },
        {
          question: 'You\'re 100m from a building, angle to top is 45°. Height?',
          options: ['50 m', '70.7 m', '100 m', '141 m'],
          correct: 2
        },
        {
          question: 'What is tan(45°)?',
          options: ['0.5', '0.707', '1', '1.732'],
          correct: 2
        },
        {
          question: 'If opposite = 4 and adjacent = 3, find the hypotenuse:',
          options: ['5', '6', '7', '12'],
          correct: 0
        }
      ]
    }
  },

  // LESSON 9: Vectors - ENHANCED
  {
    id: 9,
    title: 'Vector Basics (direction & magnitude)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 4,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn vectors - quantities with both size AND direction. Think of them as arrows that show force, velocity, or movement!',
      
      sections: [
        {
          title: '🧠 What is a Vector? - Arrows with Purpose',
          type: 'concept',
          content: `Vectors are like GPS directions - they tell you HOW MUCH and WHICH WAY!

📊 SCALAR vs VECTOR:

Scalar (just a number):
• Speed: "50 km/h" - but which direction?
• Temperature: "25°C" - no direction
• Mass: "10 kg" - just amount

Vector (number + direction):
• Velocity: "50 km/h North" - speed AND direction!
• Force: "100 N upward" - strength AND direction!
• Displacement: "5 m East" - distance AND direction!

🎯 VISUALIZING VECTORS AS ARROWS:

Vector: 3 units right, 4 units up
     ↑
   4 |    ●  ← End point (3, 4)
     |   /
     |  /
     | / ← This arrow IS the vector!
     |/
     ●────→
     0  3

The arrow shows:
• Direction: Northeast (diagonal)
• Magnitude: Length of arrow = √(3² + 4²) = 5 units

📝 VECTOR NOTATION:
• Arrow: v⃗ or →v
• Components: v = (3, 4) or v = 3i + 4j
• In 3D: v = (x, y, z)

🎨 REAL-WORLD EXAMPLES:

1. Wind Vector:
   "20 m/s from the West"
   ←─────● (arrow pointing East)
   
2. Robot Movement:
   "Move 5m forward, 3m right"
   Start ●─→─→─→─→─→
         ↓
         ↓
         ↓ ● End
         
3. Force on a Box:
   Push with 50N at 45° angle
        ↗ (arrow at 45°)
       ●
      Box`
        },
        {
          title: '🔧 Vector Math - Adding and Measuring',
          type: 'concept',
          content: `Let's learn to work with vectors step by step!

➕ ADDING VECTORS (Tip-to-Tail Method):

Example: Walk 3m East, then 4m North
Where do you end up?

Visual:
     N
     ↑
   4 |    ● End (3, 4)
     |   /|
     |  / | ← Resultant vector
     | /  |
     |/   |
     ●────→ E
     0  3

Step 1: Draw first vector (3, 0)
Step 2: From its tip, draw second vector (0, 4)
Step 3: Draw arrow from start to final end
Result: (3, 4)

Component Addition:
v₁ = (3, 0)
v₂ = (0, 4)
v₁ + v₂ = (3+0, 0+4) = (3, 4)

📏 MAGNITUDE (Length of Vector):
Formula: |v| = √(x² + y² + z²)

Example: v = (3, 4)
|v| = √(3² + 4²)
|v| = √(9 + 16)
|v| = √25 = 5 units

Think: It's the Pythagorean theorem!

🧭 DIRECTION (Angle):
Formula: θ = arctan(y/x)

Example: v = (3, 4)
θ = arctan(4/3)
θ = arctan(1.333)
θ ≈ 53.1° from horizontal

✖️ SCALAR MULTIPLICATION:
Multiply vector by a number = change its length

Example: v = (2, 3)
2v = (2×2, 2×3) = (4, 6)

Visual:
v:  ●──→
2v: ●────────→ (twice as long, same direction)

-v: ←──● (same length, opposite direction)

🎯 UNIT VECTOR (Length = 1):
Divide by magnitude to get direction only

v = (3, 4), |v| = 5
Unit vector = v/|v| = (3/5, 4/5) = (0.6, 0.8)
Check: √(0.6² + 0.8²) = 1 ✓`
        },
        {
          title: '🧮 Practice: Force Vectors on a Robot',
          type: 'practice',
          content: `Let's solve real engineering problems!

PROBLEM 1: Two Motors Pushing a Robot

Motor 1 pushes with force F₁ = (30, 40) N
Motor 2 pushes with force F₂ = (20, 10) N

Question: What's the total force?

Step 1: Add components
F_total = F₁ + F₂
F_total = (30+20, 40+10)
F_total = (50, 50) N

Step 2: Find magnitude
|F_total| = √(50² + 50²)
|F_total| = √(2500 + 2500)
|F_total| = √5000
|F_total| ≈ 70.7 N

Step 3: Find direction
θ = arctan(50/50) = arctan(1) = 45°

Answer: 70.7 N at 45° angle!

PROBLEM 2: Drone Velocity

Drone flies at 10 m/s East and 5 m/s North

Step 1: Write as vector
v = (10, 5) m/s

Step 2: Find speed (magnitude)
|v| = √(10² + 5²)
|v| = √(100 + 25)
|v| = √125 ≈ 11.2 m/s

Step 3: Find heading
θ = arctan(5/10) = arctan(0.5) ≈ 26.6° North of East

PROBLEM 3: Opposite Force

A spring pulls with F = (15, 20) N
What force cancels it out?

Answer: -F = (-15, -20) N
Check: (15, 20) + (-15, -20) = (0, 0) ✓

PROBLEM 4: Triple the Force

Original: F = (4, 3) N
Triple it: 3F = (12, 9) N

Magnitude check:
|F| = √(16 + 9) = 5 N
|3F| = √(144 + 81) = 15 N = 3 × 5 ✓`
        },
        {
          title: '🧩 Challenge: 2D Force Balance System',
          type: 'simulation',
          content: `Design a balanced force system for a hovering drone!

SCENARIO:
A drone needs to hover (net force = 0)
Three forces act on it:

Force 1 (Wind): F₁ = (20, 10) N pushing it
Force 2 (Gravity): F₂ = (0, -50) N pulling down
Force 3 (Motors): F₃ = (?, ?) N - YOU design this!

CHALLENGE 1: Find F₃ for balance
For balance: F₁ + F₂ + F₃ = (0, 0)

Step 1: Add known forces
F₁ + F₂ = (20, 10) + (0, -50)
F₁ + F₂ = (20, -40) N

Step 2: Find F₃
F₃ = -(F₁ + F₂)
F₃ = (-20, 40) N

Check: (20, -40) + (-20, 40) = (0, 0) ✓

CHALLENGE 2: Motor power needed
|F₃| = √(20² + 40²)
|F₃| = √(400 + 1600)
|F₃| = √2000 ≈ 44.7 N

CHALLENGE 3: Motor angle
θ = arctan(40/-20) = arctan(-2)
θ ≈ 116.6° (pointing up and left)

CHALLENGE 4: Add a fourth force
New wind gust: F₄ = (10, 5) N
What must motors do now?

New F₃ = -(F₁ + F₂ + F₄)
F₃ = -[(20, 10) + (0, -50) + (10, 5)]
F₃ = -(30, -35)
F₃ = (-30, 35) N

YOUR TURN:
Design a 3-force system where:
• All forces have magnitude 10 N
• Net force = 0
Hint: Use 120° angles between them!`
        }
      ],
      
      keyTakeaways: [
        'Vectors have magnitude (size) AND direction',
        'Add vectors by adding their components: (x₁+x₂, y₁+y₂)',
        'Magnitude: |v| = √(x² + y²) - like Pythagorean theorem',
        'Direction: θ = arctan(y/x)',
        'Scalar multiplication changes length, not direction',
        'Vectors represent forces, velocity, displacement in engineering'
      ],
      
      vocabulary: [
        { term: 'Vector', definition: 'Quantity with both magnitude and direction (like an arrow)' },
        { term: 'Magnitude', definition: 'Length or size of a vector' },
        { term: 'Component', definition: 'x, y, z parts of a vector' },
        { term: 'Resultant', definition: 'Sum of multiple vectors' },
        { term: 'Unit Vector', definition: 'Vector with magnitude = 1, shows direction only' }
      ],
      
      quiz: [
        {
          question: 'What is the magnitude of v = (3, 4)?',
          options: ['3', '4', '5', '7'],
          correct: 2
        },
        {
          question: 'Add vectors (2, 3) + (1, 4) = ?',
          options: ['(3, 7)', '(2, 12)', '(3, 12)', '(1, 7)'],
          correct: 0
        },
        {
          question: 'What makes a vector different from a scalar?',
          options: ['Size only', 'Direction only', 'Both size and direction', 'Neither'],
          correct: 2
        },
        {
          question: 'If v = (6, 8), what is |v|?',
          options: ['10', '14', '48', '100'],
          correct: 0
        },
        {
          question: '2 × (3, 4) = ?',
          options: ['(5, 6)', '(6, 8)', '(9, 16)', '(6, 4)'],
          correct: 1
        }
      ]
    }
  }
];
,

  // LESSON 10: Dot & Cross Product - ENHANCED
  {
    id: 10,
    title: 'Dot & Cross Product',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 5,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Master two powerful vector operations: dot product (for work and angles) and cross product (for torque and perpendicular vectors)!',
      
      sections: [
        {
          title: '🧠 Dot Product - Multiplying Vectors to Get a Number',
          type: 'concept',
          content: `The dot product takes two vectors and gives you ONE NUMBER!

📐 WHAT IS DOT PRODUCT?
Symbol: v · w (read as "v dot w")
Result: A single number (scalar)

Formula: v · w = vₓwₓ + vᵧwᵧ + vᵤwᵤ

Think: Multiply matching components, then add them all up!

🎯 STEP-BY-STEP EXAMPLE:
v = (2, 3, 1)
w = (4, 1, 2)

Step 1: Multiply x-components
2 × 4 = 8

Step 2: Multiply y-components
3 × 1 = 3

Step 3: Multiply z-components
1 × 2 = 2

Step 4: Add them all
v · w = 8 + 3 + 2 = 13

That's it! The answer is just 13 (a number, not a vector)

📊 VISUAL UNDERSTANDING:
Imagine two arrows:
v: ──→
w: ──→ (pointing same direction)

If they point the SAME way: dot product is POSITIVE
If they point OPPOSITE ways: dot product is NEGATIVE
If they're PERPENDICULAR (90°): dot product is ZERO!

🔍 WHY IS THIS USEFUL?

1. CHECK IF PERPENDICULAR:
   If v · w = 0, vectors are at 90° angle!
   
   Example: v = (3, 4), w = (-4, 3)
   v · w = 3(-4) + 4(3) = -12 + 12 = 0
   They're perpendicular! ✓

2. CALCULATE WORK (Physics):
   Work = Force · Displacement
   
   Example: Push box with F = (10, 0) N
   Box moves d = (5, 3) m
   Work = F · d = 10(5) + 0(3) = 50 Joules

3. FIND ANGLE BETWEEN VECTORS:
   Formula: cos(θ) = (v · w) / (|v| × |w|)
   
   Example: v = (1, 0), w = (1, 1)
   v · w = 1(1) + 0(1) = 1
   |v| = 1, |w| = √2
   cos(θ) = 1 / √2 = 0.707
   θ = 45°

💡 PROPERTIES:
• v · w = w · v (order doesn't matter)
• v · v = |v|² (dot product with itself = magnitude squared)
• If v · w > 0: angle < 90° (pointing similar direction)
• If v · w < 0: angle > 90° (pointing opposite direction)
• If v · w = 0: angle = 90° (perpendicular)`
        },
        {
          title: '🔧 Cross Product - Creating Perpendicular Vectors',
          type: 'concept',
          content: `The cross product takes two vectors and creates a NEW VECTOR perpendicular to both!

📐 WHAT IS CROSS PRODUCT?
Symbol: v × w (read as "v cross w")
Result: A new vector (perpendicular to both v and w)

Formula (3D): v × w = (vᵧwᵤ - vᵤwᵧ, vᵤwₓ - vₓwᵤ, vₓwᵧ - vᵧwₓ)

Don't panic! Let's break it down:

🎯 STEP-BY-STEP EXAMPLE:
v = (2, 3, 1)
w = (1, 0, 2)

Step 1: x-component (use y and z)
x = vᵧwᵤ - vᵤwᵧ
x = 3(2) - 1(0) = 6 - 0 = 6

Step 2: y-component (use z and x)
y = vᵤwₓ - vₓwᵤ
y = 1(1) - 2(2) = 1 - 4 = -3

Step 3: z-component (use x and y)
z = vₓwᵧ - vᵧwₓ
z = 2(0) - 3(1) = 0 - 3 = -3

Result: v × w = (6, -3, -3)

This new vector is perpendicular to BOTH v and w!

📊 VISUAL UNDERSTANDING:
     v
     ↑
     |
     |
     └────→ w
    /
   /
  ↙ v × w (perpendicular to both!)

🎨 2D SIMPLIFIED (for torque):
In 2D, we only care about the MAGNITUDE:
|v × w| = vₓwᵧ - vᵧwₓ

Example: v = (3, 0), w = (0, 4)
|v × w| = 3(4) - 0(0) = 12

🔍 WHY IS THIS USEFUL?

1. CALCULATE TORQUE:
   Torque = r × F (position × force)
   
   Example: Wrench problem
   r = (0.3, 0, 0) m (wrench length)
   F = (0, 50, 0) N (force perpendicular)
   
   τ = r × F
   Magnitude = 0.3 × 50 = 15 N·m

2. FIND PERPENDICULAR VECTOR:
   Need a vector perpendicular to v = (1, 2, 3)?
   Cross it with any other vector!
   
   v × (1, 0, 0) = (0, 3, -2)
   Check: v · result = 1(0) + 2(3) + 3(-2) = 0 ✓

3. CALCULATE AREA:
   Area of parallelogram = |v × w|
   
   Example: v = (3, 0), w = (0, 4)
   Area = |v × w| = 12 square units

🖐️ RIGHT-HAND RULE:
Point fingers along v, curl them toward w
Your thumb points in direction of v × w!

💡 PROPERTIES:
• v × w = -(w × v) (order MATTERS!)
• v × v = 0 (cross product with itself = zero)
• v × w is perpendicular to both v and w
• |v × w| = |v| × |w| × sin(θ)`
        },
        {
          title: '🧮 Practice: Real Engineering Problems',
          type: 'practice',
          content: `Let's solve problems with both dot and cross products!

PROBLEM 1: Work Calculation (Dot Product)
A robot pushes a box with force F = (20, 10) N
Box moves displacement d = (5, 0) m
How much work is done?

Step 1: Use dot product
Work = F · d

Step 2: Calculate
Work = 20(5) + 10(0)
Work = 100 + 0
Work = 100 Joules

Answer: 100 J of work done!

PROBLEM 2: Check if Perpendicular (Dot Product)
Are these vectors perpendicular?
v = (3, 4)
w = (4, -3)

Step 1: Calculate dot product
v · w = 3(4) + 4(-3)
v · w = 12 - 12
v · w = 0

Step 2: Interpret
Since v · w = 0, they ARE perpendicular! ✓

PROBLEM 3: Torque on a Bolt (Cross Product)
Wrench: r = (0.4, 0) m from bolt center
Force: F = (0, 25) N applied perpendicular
Find torque magnitude.

Step 1: Use 2D cross product
|τ| = |r × F|
|τ| = rₓFᵧ - rᵧFₓ

Step 2: Calculate
|τ| = 0.4(25) - 0(0)
|τ| = 10 N·m

Answer: 10 N·m of torque!

PROBLEM 4: Robot Arm Torque (Cross Product)
Arm position: r = (0.5, 0.3, 0) m
Force applied: F = (0, 0, 100) N (downward)
Find torque vector.

Step 1: Calculate cross product
τ = r × F
τₓ = rᵧFᵤ - rᵤFᵧ = 0.3(100) - 0(0) = 30
τᵧ = rᵤFₓ - rₓFᵤ = 0(0) - 0.5(100) = -50
τᵤ = rₓFᵧ - rᵧFₓ = 0.5(0) - 0.3(0) = 0

Step 2: Result
τ = (30, -50, 0) N·m

Step 3: Magnitude
|τ| = √(30² + 50²) = √(900 + 2500) = √3400 ≈ 58.3 N·m

PROBLEM 5: Angle Between Forces (Dot Product)
F₁ = (10, 0) N
F₂ = (7, 7) N
Find angle between them.

Step 1: Calculate dot product
F₁ · F₂ = 10(7) + 0(7) = 70

Step 2: Calculate magnitudes
|F₁| = 10
|F₂| = √(49 + 49) = √98 ≈ 9.9

Step 3: Use formula
cos(θ) = (F₁ · F₂) / (|F₁| × |F₂|)
cos(θ) = 70 / (10 × 9.9) = 70 / 99 ≈ 0.707
θ = arccos(0.707) ≈ 45°`
        },
        {
          title: '🧩 Challenge: Design a Balanced System',
          type: 'simulation',
          content: `CHALLENGE: Robot Gripper Design

You're designing a robot gripper that needs to apply precise torque.

SETUP:
• Gripper fingers are 0.2 m long
• Each finger can apply up to 50 N force
• Need to grip objects with different torques

CHALLENGE 1: Maximum Torque
If force is perpendicular to finger, what's max torque?

Solution:
r = (0.2, 0) m
F = (0, 50) N
τ = r × F = 0.2 × 50 = 10 N·m

Maximum torque = 10 N·m per finger

CHALLENGE 2: Angle Effect
If force is at 30° angle instead of 90°:
F = (50cos(30°), 50sin(30°)) = (43.3, 25) N

τ = 0.2 × 25 = 5 N·m

Torque is reduced by half!

CHALLENGE 3: Check Perpendicularity
Finger 1 force: F₁ = (10, 20) N
Finger 2 force: F₂ = (20, -10) N
Are they perpendicular?

F₁ · F₂ = 10(20) + 20(-10) = 200 - 200 = 0
Yes! They're perpendicular ✓

CHALLENGE 4: Work Done
Gripper closes, fingers move d = (0.05, 0) m
Force applied: F = (100, 50) N
How much work?

Work = F · d = 100(0.05) + 50(0) = 5 Joules

CHALLENGE 5: Design Task
You need 15 N·m torque with 0.3 m finger.
What force is needed?

τ = r × F
15 = 0.3 × F
F = 15 / 0.3 = 50 N

Need 50 N perpendicular force!

YOUR TURN:
Design a gripper with:
• 0.25 m fingers
• 20 N·m required torque
• Calculate required force
• Check if two 45° forces are perpendicular`
        }
      ],
      
      keyTakeaways: [
        'Dot product: v · w = vₓwₓ + vᵧwᵧ + vᵤwᵤ (gives a number)',
        'Cross product: v × w (gives a perpendicular vector)',
        'Dot product = 0 means vectors are perpendicular',
        'Torque = r × F (cross product)',
        'Work = F · d (dot product)',
        'Cross product order matters: v × w ≠ w × v'
      ],
      
      vocabulary: [
        { term: 'Dot Product', definition: 'Multiplying vectors to get a scalar (number)' },
        { term: 'Cross Product', definition: 'Multiplying vectors to get a perpendicular vector' },
        { term: 'Torque', definition: 'Rotational force, calculated as τ = r × F' },
        { term: 'Work', definition: 'Energy transferred, calculated as W = F · d' },
        { term: 'Perpendicular', definition: 'At 90° angle, dot product = 0' }
      ],
      
      quiz: [
        {
          question: 'Calculate (2, 3) · (4, 1)',
          options: ['5', '8', '11', '14'],
          correct: 2
        },
        {
          question: 'What is the torque formula?',
          options: ['r + F', 'r · F', 'r × F', 'r / F'],
          correct: 2
        },
        {
          question: 'If v · w = 0, the vectors are:',
          options: ['Parallel', 'Perpendicular', 'Equal', 'Opposite'],
          correct: 1
        },
        {
          question: 'Cross product result is a:',
          options: ['Scalar', 'Vector', 'Number', 'Angle'],
          correct: 1
        },
        {
          question: 'Torque with r=0.4m, F=25N perpendicular:',
          options: ['5 N·m', '10 N·m', '15 N·m', '20 N·m'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 11: Rotations - ENHANCED
  {
    id: 11,
    title: 'Transformations & Rotations',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 6,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn how to rotate objects in 2D and 3D space - essential for robotics, game development, and CAD design!',
      
      sections: [
        {
          title: '🧠 Understanding Rotation - Like a Clock',
          type: 'concept',
          content: `Rotation means spinning around a point or axis!

🕐 2D ROTATION (Like Clock Hands):
Imagine a point on a clock face rotating around the center.

Starting point: (1, 0) - at 3 o'clock
Rotate 90° counterclockwise → (0, 1) - at 12 o'clock
Rotate 180° → (-1, 0) - at 9 o'clock
Rotate 270° → (0, -1) - at 6 o'clock

Visual:
     (0,1) 12 o'clock
       ↑
       |
(-1,0)←●→(1,0)
  9    |    3
       ↓
     (0,-1) 6

📐 ROTATION FORMULAS (2D):
To rotate point (x, y) by angle θ around origin:

x' = x cos(θ) - y sin(θ)
y' = x sin(θ) + y cos(θ)

Don't memorize yet! Let's see examples first.

🎯 EXAMPLE 1: Rotate (1, 0) by 90°

Step 1: Identify values
x = 1, y = 0, θ = 90°
cos(90°) = 0, sin(90°) = 1

Step 2: Apply formulas
x' = 1(0) - 0(1) = 0
y' = 1(1) + 0(0) = 1

Result: (0, 1) ✓

Visual:
Before: ●──→ (1, 0)
After:  ↑
        ●    (0, 1)

🎯 EXAMPLE 2: Rotate (2, 0) by 45°

Step 1: Values
x = 2, y = 0, θ = 45°
cos(45°) = 0.707, sin(45°) = 0.707

Step 2: Calculate
x' = 2(0.707) - 0(0.707) = 1.414
y' = 2(0.707) + 0(0.707) = 1.414

Result: (1.414, 1.414)

Visual:
Before: ●────→ (2, 0)
After:    ↗
        ●    (1.414, 1.414)

💡 KEY INSIGHTS:
• Positive angle = counterclockwise
• Negative angle = clockwise
• Distance from origin stays the same!
• Only direction changes

Check: √(2²) = 2, √(1.414² + 1.414²) = 2 ✓`
        },
        {
          title: '🔧 Rotation Matrices - The Power Tool',
          type: 'concept',
          content: `Matrices make rotation easy! Think of them as rotation machines.

📊 2D ROTATION MATRIX:
R(θ) = [cos(θ)  -sin(θ)]
       [sin(θ)   cos(θ)]

To rotate a point, multiply matrix by point vector!

🎯 EXAMPLE: Rotate (3, 4) by 90°

Step 1: Set up matrix
R(90°) = [cos(90°)  -sin(90°)]   [0  -1]
         [sin(90°)   cos(90°)] = [1   0]

Step 2: Multiply by point
[0  -1] [3]   [0(3) + (-1)(4)]   [-4]
[1   0] [4] = [1(3) +  0(4) ] = [ 3]

Result: (-4, 3)

Visual:
Before:     ●
          (3,4)
           /
          /
         ●────→

After:  ←──●
        (-4,3)

🎯 COMMON ROTATION MATRICES:

90° rotation:
[0  -1]
[1   0]

180° rotation:
[-1   0]
[ 0  -1]

270° rotation (or -90°):
[ 0   1]
[-1   0]

🔄 3D ROTATIONS:
In 3D, we rotate around axes (X, Y, or Z)

Rotate around Z-axis (like 2D):
[cos(θ)  -sin(θ)   0]
[sin(θ)   cos(θ)   0]
[  0        0      1]

Rotate around X-axis:
[1     0        0   ]
[0  cos(θ)  -sin(θ)]
[0  sin(θ)   cos(θ)]

Rotate around Y-axis:
[ cos(θ)   0   sin(θ)]
[   0      1     0   ]
[-sin(θ)   0   cos(θ)]

💡 PRACTICAL TIP:
Most 3D software (Unity, Blender, CAD) does this automatically!
You just say "rotate 45° around Y-axis" and it works!`
        },
        {
          title: '🧮 Practice: Rotating Objects',
          type: 'practice',
          content: `Let's rotate some real objects!

PROBLEM 1: Rotate a Point
Rotate (4, 0) by 60° counterclockwise

Step 1: Get trig values
cos(60°) = 0.5
sin(60°) = 0.866

Step 2: Apply formulas
x' = 4(0.5) - 0(0.866) = 2
y' = 4(0.866) + 0(0.5) = 3.464

Result: (2, 3.464)

Check distance: √(4²) = 4, √(2² + 3.464²) ≈ 4 ✓

PROBLEM 2: Rotate Back
We have point (0, 5) after rotation.
Rotate it back by -90° (clockwise)

Step 1: Values
cos(-90°) = 0, sin(-90°) = -1

Step 2: Calculate
x' = 0(0) - 5(-1) = 5
y' = 0(-1) + 5(0) = 0

Result: (5, 0)

Visual: We rotated from 12 o'clock to 3 o'clock!

PROBLEM 3: Robot Arm
Arm starts at (10, 0) cm from shoulder
Rotate 30° to reach object

Step 1: Trig values
cos(30°) = 0.866, sin(30°) = 0.5

Step 2: New position
x' = 10(0.866) - 0(0.5) = 8.66 cm
y' = 10(0.5) + 0(0.866) = 5 cm

Arm tip is now at (8.66, 5)!

PROBLEM 4: Full Circle
Start at (3, 0)
Rotate by 360° (full circle)

cos(360°) = 1, sin(360°) = 0
x' = 3(1) - 0(0) = 3
y' = 3(0) + 0(1) = 0

Back to (3, 0)! Full circle returns to start ✓

PROBLEM 5: Using Matrix
Rotate (2, 3) by 180°

Matrix: [-1   0]
        [ 0  -1]

Multiply: [-1   0] [2]   [-2]
          [ 0  -1] [3] = [-3]

Result: (-2, -3)

This flips the point to opposite side!`
        },
        {
          title: '🧩 Challenge: Robot Arm Control',
          type: 'simulation',
          content: `MISSION: Program a 2-joint robot arm!

SETUP:
• Joint 1 (shoulder): 0.5 m long
• Joint 2 (elbow): 0.3 m long
• Both start horizontal (0°)

CHALLENGE 1: Reach point (0.6, 0.4)

Step 1: Rotate joint 1 by 45°
End of joint 1:
x₁ = 0.5 × cos(45°) = 0.354 m
y₁ = 0.5 × sin(45°) = 0.354 m

Step 2: From there, rotate joint 2 by 30°
Relative to joint 1:
Δx = 0.3 × cos(45° + 30°) = 0.3 × cos(75°) = 0.078 m
Δy = 0.3 × sin(75°) = 0.290 m

Step 3: Final position
x = 0.354 + 0.078 = 0.432 m
y = 0.354 + 0.290 = 0.644 m

Close to target!

CHALLENGE 2: Rotate to vertical
Both joints need to point up (90°)

Joint 1 end: (0, 0.5)
Joint 2 end: (0, 0.5 + 0.3) = (0, 0.8)

Total reach: 0.8 m straight up!

CHALLENGE 3: Maximum reach
When both joints align horizontally:
Max reach = 0.5 + 0.3 = 0.8 m

CHALLENGE 4: Minimum reach
When joints point opposite directions:
Min reach = 0.5 - 0.3 = 0.2 m

CHALLENGE 5: Draw a circle
Keep joint 2 at 0°, rotate joint 1 full 360°
This draws a circle with radius 0.8 m!

YOUR TURN:
Design a 3-joint arm:
• Joint 1: 0.4 m
• Joint 2: 0.3 m  
• Joint 3: 0.2 m
Calculate maximum and minimum reach!`
        }
      ],
      
      keyTakeaways: [
        'Rotation formulas: x\' = x cos(θ) - y sin(θ), y\' = x sin(θ) + y cos(θ)',
        'Rotation matrices multiply with point vectors to rotate them',
        'Positive angles rotate counterclockwise, negative clockwise',
        'Distance from origin stays constant during rotation',
        '3D rotations happen around X, Y, or Z axes',
        'Used everywhere: robotics, games, CAD, animation'
      ],
      
      vocabulary: [
        { term: 'Rotation', definition: 'Spinning around a point or axis' },
        { term: 'Rotation Matrix', definition: 'A grid of numbers that rotates points when multiplied' },
        { term: 'Counterclockwise', definition: 'Rotating opposite to clock hands (positive angle)' },
        { term: 'Clockwise', definition: 'Rotating same as clock hands (negative angle)' },
        { term: 'Axis', definition: 'Line around which rotation happens (X, Y, or Z)' }
      ],
      
      quiz: [
        {
          question: 'Rotate (1, 0) by 90° counterclockwise:',
          options: ['(0, 1)', '(1, 1)', '(-1, 0)', '(0, -1)'],
          correct: 0
        },
        {
          question: 'What is cos(0°)?',
          options: ['0', '0.5', '0.707', '1'],
          correct: 3
        },
        {
          question: 'Rotation matrices are used with:',
          options: ['Addition', 'Multiplication', 'Division', 'Subtraction'],
          correct: 1
        },
        {
          question: 'In 3D, how many rotation axes are there?',
          options: ['1', '2', '3', '4'],
          correct: 2
        },
        {
          question: 'Rotate (0, 1) by 180°:',
          options: ['(0, -1)', '(1, 0)', '(-1, 0)', '(0, 1)'],
          correct: 0
        }
      ]
    }
  }
];
