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
