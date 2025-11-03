// Unit 2: Geometry & Trigonometry (Lessons 7-12)
export const unit2Lessons = [
  // LESSON 7: Basic Shapes & Angles
  {
    id: 7,
    title: '2D Geometry (distance, area, angles)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 7,
    emoji: '🟣',
    level: 'Beginner',
    duration: '18 min',
    content: {
      introduction: 'Master the fundamental shapes and measurements that form the basis of all engineering design.',

      sections: [
        {
          title: '🧠 Basic Shapes in Engineering',
          type: 'concept',
          content: `Every engineering design uses basic geometric shapes:

Circles:
• Area = πr² (where r = radius)
• Circumference = 2πr
• Used in: wheels, gears, pipes, turbines

Rectangles:
• Area = length × width
• Perimeter = 2(length + width)
• Used in: panels, screens, solar arrays

Triangles:
• Area = ½ × base × height
• Used in: trusses, support structures, wings

Angles:
• Measured in degrees (°) or radians
• Full circle = 360° = 2π radians
• Right angle = 90° = π/2 radians

Why Geometry Matters:
Every part you design needs accurate dimensions!`
        },
        {
          title: '🔧 Calculating Areas and Perimeters',
          type: 'concept',
          content: `Real Engineering Calculations:

Example 1: Car Wheel Rim
Outer radius = 30 cm, Inner radius = 25 cm
Rim area = π(30²) - π(25²)
         = π(900 - 625)
         = 275π ≈ 864 cm²

Example 2: Solar Panel
Length = 2 m, Width = 1 m
Area = 2 × 1 = 2 m²
Perimeter = 2(2 + 1) = 6 m

Example 3: Triangular Support
Base = 4 m, Height = 3 m
Area = ½ × 4 × 3 = 6 m²

Composite Shapes:
Break complex shapes into simple ones, calculate each, then add/subtract!`
        },
        {
          title: '🧮 Practice Zone: Robot Base Plate',
          type: 'practice',
          content: `Problem 1: Circular Robot Base
A robot has a circular base with diameter 60 cm.
Radius = 30 cm
Area = πr² = π(30)² = 900π ≈ 2,827 cm²
Circumference = 2πr = 2π(30) = 60π ≈ 188.5 cm

Problem 2: Rectangular Drone Frame
Length = 50 cm, Width = 40 cm
Area = 50 × 40 = 2,000 cm²
Perimeter = 2(50 + 40) = 180 cm

Problem 3: Triangular Wing Section
Base = 3 m, Height = 1.5 m
Area = ½ × 3 × 1.5 = 2.25 m²

Problem 4: Composite Shape
A robot arm has a rectangular section (10×5 cm) with a semicircular end (radius 5 cm).
Rectangle area = 10 × 5 = 50 cm²
Semicircle area = ½πr² = ½π(5)² ≈ 39.3 cm²
Total area ≈ 89.3 cm²`
        },
        {
          title: '🧩 Interactive Challenge: Design a Gear',
          type: 'simulation',
          content: `Scenario: Designing a Gear System

You need to design two gears that mesh together:
• Large gear: radius = 10 cm
• Small gear: radius = 5 cm

Question 1: What are the circumferences?
Large: C = 2π(10) = 20π ≈ 62.8 cm
Small: C = 2π(5) = 10π ≈ 31.4 cm

Question 2: Gear Ratio
Ratio = Large radius / Small radius = 10/5 = 2:1
When small gear rotates once, large gear rotates 0.5 times

Question 3: Design Challenge
You need a gear with area 314 cm². What radius?
πr² = 314
r² = 314/π ≈ 100
r = 10 cm

Question 4: Angle Calculation
A gear rotates 45°. How many degrees left to complete full rotation?
360° - 45° = 315°

Your Turn: Design a gear system with 3:1 ratio!`
        }
      ],

      keyTakeaways: [
        'Circle area = πr², circumference = 2πr',
        'Rectangle area = length × width',
        'Triangle area = ½ × base × height',
        'Break complex shapes into simple ones for calculation',
        'Angles: 360° = full circle, 90° = right angle'
      ],

      vocabulary: [
        { term: 'Radius', definition: 'Distance from center to edge of a circle' },
        { term: 'Diameter', definition: 'Distance across a circle through center (2 × radius)' },
        { term: 'Perimeter', definition: 'Total distance around the outside of a shape' },
        { term: 'Area', definition: 'Amount of space inside a 2D shape' },
        { term: 'Composite Shape', definition: 'Shape made by combining multiple basic shapes' }
      ],

      quiz: [
        {
          question: 'What is the area of a circle with radius 5 cm? (Use π ≈ 3.14)',
          options: ['15.7 cm²', '31.4 cm²', '78.5 cm²', '157 cm²'],
          correct: 2
        },
        {
          question: 'A rectangular panel is 8 m × 3 m. What is its area?',
          options: ['11 m²', '22 m²', '24 m²', '32 m²'],
          correct: 2
        },
        {
          question: 'A triangle has base 6 m and height 4 m. What is its area?',
          options: ['10 m²', '12 m²', '20 m²', '24 m²'],
          correct: 1
        },
        {
          question: 'How many degrees in a right angle?',
          options: ['45°', '60°', '90°', '180°'],
          correct: 2
        },
        {
          question: 'A wheel has diameter 40 cm. What is its radius?',
          options: ['10 cm', '20 cm', '40 cm', '80 cm'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 8: Coordinate Geometry - ENHANCED
  {
    id: 8,
    title: '3D Coordinate Geometry (x, y, z)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 8,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn to navigate 3D space using coordinates - essential for robotics, flight paths, and CAD design. We will break it down step-by-step with visual examples!',

      sections: [
        {
          title: '🧠 Understanding Coordinates - Like GPS for Math',
          type: 'concept',
          content: `Think of coordinates as GPS for math! They tell you EXACTLY where something is.

📍 2D COORDINATES (Flat Map):
Imagine looking at a city from above:

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
M = ((2+8)/2, (4+10)/2, (6+12)/2) = (5, 7, 9)

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
Time = 502.5 / 10 ≈ 50.3 seconds

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
        'Distance formula: d = √[(Δx)² + (Δy)² + (Δz)²]',
        'Midpoint formula finds the center between two points',
        'Slope = rise/run shows steepness of a path',
        'Essential for robotics, flight paths, and 3D modeling'
      ],

      vocabulary: [
        { term: 'Coordinate', definition: 'A number that specifies position along an axis' },
        { term: 'Origin', definition: 'The point (0, 0, 0) where all axes meet' },
        { term: 'Distance', definition: 'Straight-line length between two points' },
        { term: 'Midpoint', definition: 'The point exactly halfway between two points' },
        { term: 'Slope', definition: 'The steepness of a line, calculated as rise/run' }
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
          question: 'In 3D space, how many coordinates does a point have?',
          options: ['1', '2', '3', '4'],
          correct: 2
        },
        {
          question: 'A line goes from (0, 0) to (100, 20). What is the slope?',
          options: ['0.2', '0.5', '2', '5'],
          correct: 0
        },
        {
          question: 'Distance from (1, 2, 3) to (1, 2, 8) is:',
          options: ['3', '5', '8', '11'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 9: Triangle Trigonometry - ENHANCED
  {
    id: 9,
    title: 'Triangles (sin, cos, tan)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 9,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Master trigonometry - the math of angles and triangles. We will use the magic of SOH-CAH-TOA to solve real engineering problems!',

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
   /______|
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
   /______|
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
   /______|
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
    /______|
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
     |_____|
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
  /______|
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
        'SOH-CAH-TOA: sin = O/H, cos = A/H, tan = O/A',
        'Use trig to find unknown sides or angles in right triangles',
        'Pythagorean theorem: a² + b² = c²',
        'arctan, arcsin, arccos find angles from ratios',
        'Essential for navigation, slopes, and force analysis'
      ],

      vocabulary: [
        { term: 'Hypotenuse', definition: 'Longest side of right triangle, opposite the 90° angle' },
        { term: 'Sine (sin)', definition: 'Ratio of opposite side to hypotenuse' },
        { term: 'Cosine (cos)', definition: 'Ratio of adjacent side to hypotenuse' },
        { term: 'Tangent (tan)', definition: 'Ratio of opposite side to adjacent side' },
        { term: 'Inverse Trig', definition: 'Functions (arcsin, arccos, arctan) that find angles from ratios' }
      ],

      quiz: [
        {
          question: 'In a right triangle, what is sin(θ)?',
          options: ['Adjacent/Hypotenuse', 'Opposite/Hypotenuse', 'Opposite/Adjacent', 'Hypotenuse/Opposite'],
          correct: 1
        },
        {
          question: 'If opposite = 3 and hypotenuse = 5, what is sin(θ)?',
          options: ['0.5', '0.6', '0.75', '1.67'],
          correct: 1
        },
        {
          question: 'You are 100 m from a building. Angle to top = 45°. Height?',
          options: ['50 m', '70.7 m', '100 m', '141 m'],
          correct: 2
        },
        {
          question: 'What is tan(45°)?',
          options: ['0.5', '0.707', '1', '1.732'],
          correct: 2
        },
        {
          question: 'If a = 3 and b = 4, what is c (hypotenuse)?',
          options: ['5', '6', '7', '12'],
          correct: 0
        }
      ]
    }
  }
  ,

  // LESSON 10: Vectors - ENHANCED
  {
    id: 10,
    title: 'Vector Basics (direction & magnitude)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 10,
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
        'Vectors have magnitude and direction',
        'Add vectors component-wise',
        'Magnitude: |v| = √(x² + y²)',
        'Direction: θ = arctan(y/x)'
      ],
      vocabulary: [
        { term: 'Vector', definition: 'Quantity with magnitude and direction' },
        { term: 'Magnitude', definition: 'Length or size of a vector' },
        { term: 'Resultant', definition: 'Sum of multiple vectors' },
        { term: 'Component', definition: 'x, y, z parts of a vector' }
      ],
      quiz: [
        { question: 'What is |v| for v = (3, 4)?', options: ['5', '7', '12', '25'], correct: 0 },
        { question: 'Add (2, 3) + (1, 4)', options: ['(3, 7)', '(2, 12)', '(3, 12)', '(1, 7)'], correct: 0 },
        { question: 'What makes a vector different from scalar?', options: ['Size', 'Direction', 'Both', 'Neither'], correct: 1 },
        { question: 'If v = (6, 8), what is |v|?', options: ['10', '14', '48', '100'], correct: 0 },
        { question: '2 × (3, 4) = ?', options: ['(5, 6)', '(6, 8)', '(9, 16)', '(6, 4)'], correct: 1 }
      ]
    }
  },

  // LESSON 11: Dot & Cross Product - ENHANCED
  {
    id: 11,
    title: 'Dot & Cross Product',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 11,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Master dot and cross products - powerful tools for calculating work, torque, and finding perpendicular vectors in engineering!',
      sections: [
        {
          title: '🧠 Dot Product - Measuring Alignment',
          type: 'concept',
          content: `The dot product tells you HOW MUCH two vectors point in the same direction!

📐 DOT PRODUCT FORMULA:
v · w = vₓwₓ + vᵧwᵧ + vᵤwᵤ

Think: Multiply matching components, then add them up!

🎯 STEP-BY-STEP EXAMPLE:
v = (2, 3), w = (4, 1)

Step 1: Multiply x-components
2 × 4 = 8

Step 2: Multiply y-components
3 × 1 = 3

Step 3: Add them together
v · w = 8 + 3 = 11

Result: 11 (a single number, not a vector!)

💡 WHAT DOES IT MEAN?

Positive result: Vectors point in similar directions
• v · w > 0 → angle < 90°

Zero result: Vectors are PERPENDICULAR!
• v · w = 0 → angle = 90°

Negative result: Vectors point in opposite directions
• v · w < 0 → angle > 90°

🔧 REAL-WORLD USES:

1. WORK in Physics:
   Work = Force · Displacement
   
   Example: Push box with F = (10, 0) N
   Box moves d = (5, 3) m
   Work = 10×5 + 0×3 = 50 Joules
   
2. CHECK PERPENDICULARITY:
   v = (3, 4), w = (-4, 3)
   v · w = 3×(-4) + 4×3 = -12 + 12 = 0
   They're perpendicular! ✓

3. FIND ANGLE BETWEEN VECTORS:
   cos(θ) = (v · w) / (|v| × |w|)`
        },
        {
          title: '🔧 Cross Product - Finding Perpendiculars',
          type: 'concept',
          content: `The cross product creates a NEW vector perpendicular to both inputs!

📐 2D SIMPLIFIED VERSION:
For 2D vectors, we find the MAGNITUDE:
|v × w| = vₓwᵧ - vᵧwₓ

Example: v = (3, 2), w = (1, 4)
|v × w| = 3×4 - 2×1 = 12 - 2 = 10

💡 WHAT DOES IT MEAN?

The magnitude tells you:
• Area of parallelogram formed by the vectors
• How "perpendicular" the vectors are

🔧 REAL-WORLD USES:

1. TORQUE (Rotational Force):
   τ = r × F
   
   Visual:
        F (force)
        ↑
        |
   ●────→ r (distance from pivot)
   Pivot
   
   Torque = how much rotation you get!

2. WRENCH EXAMPLE:
   r = (0.3, 0, 0) m (wrench length)
   F = (0, 50, 0) N (force perpendicular)
   
   In 2D: Torque = 0.3 × 50 = 15 N·m
   
   Longer wrench = more torque!
   Perpendicular force = maximum torque!

3. AREA CALCULATION:
   Triangle with sides v = (4, 0) and w = (0, 3)
   Area = ½|v × w| = ½(4×3 - 0×0) = 6 square units`
        },
        {
          title: '🧮 Practice: Engineering Applications',
          type: 'practice',
          content: `Let's solve real problems!

PROBLEM 1: Calculate Work Done
A robot pushes with force F = (20, 15) N
Object moves displacement d = (3, 2) m

Question: How much work was done?

Step 1: Use dot product
Work = F · d

Step 2: Calculate
Work = 20×3 + 15×2
Work = 60 + 30
Work = 90 Joules

Answer: 90 J of work done!

PROBLEM 2: Check if Perpendicular
Two support beams:
Beam A: direction v = (4, 3)
Beam B: direction w = (-3, 4)

Question: Are they perpendicular?

Step 1: Calculate dot product
v · w = 4×(-3) + 3×4
v · w = -12 + 12
v · w = 0

Answer: YES! They're perpendicular! ✓

PROBLEM 3: Wrench Torque
Wrench length: r = 0.4 m
Applied force: F = 60 N (perpendicular)

Question: What's the torque?

Step 1: Use cross product magnitude
Torque = r × F

Step 2: Calculate (perpendicular case)
Torque = 0.4 × 60
Torque = 24 N·m

Answer: 24 N·m of torque!`
        },
        {
          title: '🧩 Challenge: Robot Arm Design',
          type: 'simulation',
          content: `Design a robot arm with optimal torque!

SCENARIO:
You're designing a robot arm that needs to lift objects.

CHALLENGE 1: Single Joint Torque
Arm length from joint: r = 0.5 m
Motor applies force: F = 100 N perpendicular

Calculate torque:
τ = r × F = 0.5 × 100 = 50 N·m

CHALLENGE 2: Angled Force
Same arm, but force at 60° angle

Step 1: Find perpendicular component
F_perp = 100 × sin(60°) = 100 × 0.866 = 86.6 N

Step 2: Calculate torque
τ = 0.5 × 86.6 = 43.3 N·m

Less torque! Perpendicular is best!

CHALLENGE 3: Two-Joint Arm
Joint 1: r₁ = 0.5 m, F₁ = 100 N
Joint 2: r₂ = 0.3 m, F₂ = 80 N

Total torque:
τ₁ = 0.5 × 100 = 50 N·m
τ₂ = 0.3 × 80 = 24 N·m
τ_total = 50 + 24 = 74 N·m

CHALLENGE 4: Optimize Design
You need 60 N·m of torque
Motor can provide 120 N of force

What arm length do you need?
τ = r × F
60 = r × 120
r = 60/120 = 0.5 m

Design arm with 0.5 m length!

YOUR TURN:
Design a 3-joint robot arm that can generate:
• 100 N·m total torque
• Using motors that provide 150 N each
• Calculate optimal arm lengths!`
        }
      ],
      keyTakeaways: [
        'Dot product: v · w = sum of component products',
        'Cross product gives perpendicular vector',
        'Torque = r × F (cross product)',
        'Dot = 0 means perpendicular'
      ],
      vocabulary: [
        { term: 'Dot Product', definition: 'Scalar result from multiplying vectors' },
        { term: 'Cross Product', definition: 'Vector perpendicular to both inputs' },
        { term: 'Torque', definition: 'Rotational force, τ = r × F' },
        { term: 'Perpendicular', definition: 'At 90° angle, dot product = 0' }
      ],
      quiz: [
        { question: '(2, 3) · (4, 1) = ?', options: ['8', '11', '14', '5'], correct: 1 },
        { question: 'What is torque formula?', options: ['r + F', 'r · F', 'r × F', 'r / F'], correct: 2 },
        { question: 'If v · w = 0, vectors are:', options: ['Parallel', 'Perpendicular', 'Equal', 'Opposite'], correct: 1 },
        { question: 'Cross product result is:', options: ['Scalar', 'Vector', 'Number', 'Angle'], correct: 1 },
        { question: 'Torque with r=0.4m, F=25N perpendicular:', options: ['5 N·m', '10 N·m', '15 N·m', '20 N·m'], correct: 1 }
      ]
    }
  },

  // LESSON 12: Rotations - ENHANCED
  {
    id: 12,
    title: 'Transformations & Rotations',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 12,
    emoji: '🟣',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Understand 3D rotations and transformations - essential for robotics, animation, CAD, and game development!',
      sections: [
        {
          title: '🧠 Rotation Basics - Spinning Points',
          type: 'concept',
          content: `Rotation = spinning a point around the origin!

📐 2D ROTATION FORMULAS:
To rotate point (x, y) by angle θ around origin:

x' = x cos(θ) - y sin(θ)
y' = x sin(θ) + y cos(θ)

🎯 STEP-BY-STEP EXAMPLE:
Rotate point (1, 0) by 90° counterclockwise

Step 1: Identify values
x = 1, y = 0, θ = 90°
cos(90°) = 0, sin(90°) = 1

Step 2: Apply formulas
x' = 1(0) - 0(1) = 0
y' = 1(1) + 0(0) = 1

Result: (0, 1) ✓

Visual:
     y
     |
  (0,1)●
     |
─────●─────→ x
   (1,0)

The point rotated 90° counterclockwise!

💡 COMMON ROTATIONS:

90° rotation:
(x, y) → (-y, x)
Example: (3, 2) → (-2, 3)

180° rotation:
(x, y) → (-x, -y)
Example: (3, 2) → (-3, -2)

270° rotation (or -90°):
(x, y) → (y, -x)
Example: (3, 2) → (2, -3)

🎨 3D ROTATIONS:
In 3D, we rotate around axes:

• Rotate around X-axis: y and z change
• Rotate around Y-axis: x and z change
• Rotate around Z-axis: x and y change (like 2D!)

Used in: drone orientation, robot arms, 3D games`
        },
        {
          title: '🔧 Rotation Matrices - The Power Tool',
          type: 'concept',
          content: `Rotation matrices let you rotate ANY point easily!

📐 2D ROTATION MATRIX:
R(θ) = [cos(θ)  -sin(θ)]
       [sin(θ)   cos(θ)]

To rotate point (x, y):
[x']   [cos(θ)  -sin(θ)] [x]
[y'] = [sin(θ)   cos(θ)] [y]

🎯 EXAMPLE: Rotate (2, 1) by 45°

Step 1: Set up matrix
cos(45°) = 0.707, sin(45°) = 0.707
R(45°) = [0.707  -0.707]
         [0.707   0.707]

Step 2: Multiply
x' = 0.707(2) - 0.707(1) = 1.414 - 0.707 = 0.707
y' = 0.707(2) + 0.707(1) = 1.414 + 0.707 = 2.121

Result: (0.707, 2.121)

💡 WHY USE MATRICES?

1. Rotate multiple points at once
2. Combine rotations easily
3. Used in computer graphics
4. Essential for robotics

🎨 3D ROTATION MATRICES:

Around Z-axis (like 2D):
Rz(θ) = [cos(θ)  -sin(θ)  0]
        [sin(θ)   cos(θ)  0]
        [0        0       1]

Around X-axis:
Rx(θ) = [1   0        0      ]
        [0   cos(θ)  -sin(θ)]
        [0   sin(θ)   cos(θ)]

Around Y-axis:
Ry(θ) = [cos(θ)   0   sin(θ)]
        [0        1   0     ]
        [-sin(θ)  0   cos(θ)]

🔧 REAL APPLICATIONS:
• Robot arm joints
• Drone stabilization
• 3D game cameras
• CAD software
• Animation systems`
        },
        {
          title: '🧮 Practice: Rotating Objects',
          type: 'practice',
          content: `Let's rotate some points!

PROBLEM 1: Rotate (2, 0) by 45°
cos(45°) = 0.707, sin(45°) = 0.707

x' = 2(0.707) - 0(0.707) = 1.414
y' = 2(0.707) + 0(0.707) = 1.414

Result: (1.414, 1.414)

PROBLEM 2: Rotate (4, 3) by 90°
Use shortcut: (x, y) → (-y, x)

Result: (-3, 4)

Check with formulas:
x' = 4(0) - 3(1) = -3 ✓
y' = 4(1) + 3(0) = 4 ✓

PROBLEM 3: Rotate Square
Square corners: (1,1), (-1,1), (-1,-1), (1,-1)
Rotate 45° around origin

Corner (1, 1):
x' = 1(0.707) - 1(0.707) = 0
y' = 1(0.707) + 1(0.707) = 1.414
New: (0, 1.414)

The square becomes a diamond!

PROBLEM 4: Robot Gripper
Gripper at (10, 0) cm from robot center
Robot rotates 30°

cos(30°) = 0.866, sin(30°) = 0.5

x' = 10(0.866) - 0(0.5) = 8.66 cm
y' = 10(0.5) + 0(0.866) = 5 cm

New position: (8.66, 5)`
        },
        {
          title: '🧩 Challenge: Multi-Joint Robot Arm',
          type: 'simulation',
          content: `Design and control a 2-joint robot arm!

SETUP:
• Joint 1 (shoulder): at origin (0, 0)
• Arm 1 length: 5 cm
• Joint 2 (elbow): at end of arm 1
• Arm 2 length: 3 cm

CHALLENGE 1: Arm straight out
Joint 1 angle: 0°
Joint 2 angle: 0°

Elbow position: (5, 0)
Hand position: (5+3, 0) = (8, 0)

CHALLENGE 2: Bend elbow 90°
Joint 1: 0°
Joint 2: 90°

Elbow: (5, 0)
Hand relative to elbow: (0, 3)
Hand absolute: (5, 3)

CHALLENGE 3: Rotate shoulder 45°
Joint 1: 45°
Joint 2: 0° (straight)

Elbow position:
x = 5 cos(45°) = 3.54
y = 5 sin(45°) = 3.54
Elbow: (3.54, 3.54)

Hand (3 cm further at 45°):
x = 3.54 + 3 cos(45°) = 5.66
y = 3.54 + 3 sin(45°) = 5.66
Hand: (5.66, 5.66)

CHALLENGE 4: Complex Motion
Joint 1: 30°
Joint 2: 60° (relative to arm 1)

Step 1: Find elbow
x₁ = 5 cos(30°) = 4.33
y₁ = 5 sin(30°) = 2.5
Elbow: (4.33, 2.5)

Step 2: Find hand
Total angle = 30° + 60° = 90°
x₂ = 4.33 + 3 cos(90°) = 4.33
y₂ = 2.5 + 3 sin(90°) = 5.5
Hand: (4.33, 5.5)

YOUR MISSION:
1. Position hand at (6, 4)
2. Calculate required joint angles
3. Design a 3-joint arm
4. Create a circular motion path!`
        }
      ],
      keyTakeaways: [
        'Rotation matrices transform coordinates',
        '2D rotation: x\' = x cos(θ) - y sin(θ)',
        '3D uses separate rotations for X, Y, Z axes',
        'Essential for robotics and 3D graphics'
      ],
      vocabulary: [
        { term: 'Rotation', definition: 'Turning around a point or axis' },
        { term: 'Transformation', definition: 'Changing position, rotation, or scale' },
        { term: 'Matrix', definition: 'Grid of numbers used for transformations' },
        { term: 'Coordinate Frame', definition: 'Reference system for position and orientation' }
      ],
      quiz: [
        { question: 'Rotate (1, 0) by 90° gives:', options: ['(0, 1)', '(1, 1)', '(-1, 0)', '(0, -1)'], correct: 0 },
        { question: 'What is cos(0°)?', options: ['0', '0.5', '0.707', '1'], correct: 3 },
        { question: 'Rotation matrices are used in:', options: ['Addition', 'Multiplication', 'Division', 'Subtraction'], correct: 1 },
        { question: 'How many axes in 3D rotation?', options: ['1', '2', '3', '4'], correct: 2 },
        { question: 'Rotate (0, 1) by 180°:', options: ['(0, -1)', '(1, 0)', '(-1, 0)', '(0, 1)'], correct: 0 }
      ]
    }
  }
];

export default unit2Lessons;
