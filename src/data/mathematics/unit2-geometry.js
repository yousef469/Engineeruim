// Unit 2: Geometry & Trigonometry (Lessons 6-11)
export const unit2Lessons = [
  // LESSON 6: Basic Shapes & Angles
  {
    id: 6,
    title: '2D Geometry (distance, area, angles)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 1,
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

  // LESSON 7: Coordinate Geometry
  {
    id: 7,
    title: '3D Coordinate Geometry (x, y, z)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 2,
    emoji: '🟣',
    level: 'Beginner',
    duration: '18 min',
    content: {
      introduction: 'Learn to navigate 3D space using coordinates - essential for robotics, flight paths, and CAD design.',

      sections: [
        {
          title: '🧠 The Coordinate System',
          type: 'concept',
          content: `2D Coordinates (x, y):
• x-axis: horizontal (left-right)
• y-axis: vertical (up-down)
• Origin: (0, 0) where axes meet
• Point: (3, 4) means 3 right, 4 up

3D Coordinates (x, y, z):
• x-axis: left-right
• y-axis: forward-backward
• z-axis: up-down
• Origin: (0, 0, 0)
• Point: (3, 4, 5) means 3 right, 4 forward, 5 up

Engineering Uses:
• Robot position in space
• Airplane flight path
• 3D CAD modeling
• GPS coordinates (latitude, longitude, altitude)`
        },
        {
          title: '🔧 Distance and Midpoint Formulas',
          type: 'concept',
          content: `Distance Between Two Points:

2D Distance: d = √[(x₂-x₁)² + (y₂-y₁)²]

Example: Distance from (1, 2) to (4, 6)
d = √[(4-1)² + (6-2)²]
d = √[9 + 16]
d = √25 = 5 units

3D Distance: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]

Example: Distance from (1, 2, 3) to (4, 6, 8)
d = √[(4-1)² + (6-2)² + (8-3)²]
d = √[9 + 16 + 25]
d = √50 ≈ 7.07 units

Midpoint Formula:
Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)

Example: Midpoint of (2, 4, 6) and (8, 10, 12)
M = ((2+8)/2, (4+10)/2, (6+12)/2) = (5, 7, 9)`
        },
        {
          title: '🧮 Practice Zone: Flight Path Analysis',
          type: 'practice',
          content: `Problem 1: Plane Takeoff Path
A plane starts at ground level (0, 0, 0) and reaches (1000, 500, 200) meters.
Distance traveled:
d = √[1000² + 500² + 200²]
d = √[1,000,000 + 250,000 + 40,000]
d = √1,290,000 ≈ 1,136 meters

Problem 2: Slope of Takeoff
From (0, 0) to (1000, 200) in 2D (horizontal, vertical)
Slope = rise/run = 200/1000 = 0.2 or 20%
Angle ≈ 11.3°

Problem 3: Robot Navigation
Robot at (5, 3, 2), needs to reach (11, 7, 6)
Distance = √[(11-5)² + (7-3)² + (6-2)²]
         = √[36 + 16 + 16]
         = √68 ≈ 8.25 meters

Problem 4: Midpoint Checkpoint
Drone flies from (0, 0, 100) to (200, 150, 300)
Midpoint = ((0+200)/2, (0+150)/2, (100+300)/2)
         = (100, 75, 200)`
        },
        {
          title: '🧩 Interactive Challenge: 3D Navigation',
          type: 'simulation',
          content: `Scenario: Autonomous Drone Delivery

Starting point: (0, 0, 50) - 50m altitude
Destination: (300, 400, 100) - 100m altitude

Question 1: What is the straight-line distance?
d = √[(300-0)² + (400-0)² + (100-50)²]
d = √[90,000 + 160,000 + 2,500]
d = √252,500 ≈ 502.5 meters

Question 2: Where is the halfway point?
M = ((0+300)/2, (0+400)/2, (50+100)/2)
M = (150, 200, 75)

Question 3: If drone travels at 10 m/s, how long?
Time = distance / speed = 502.5 / 10 ≈ 50.3 seconds

Question 4: Design Challenge
Place a charging station exactly 1/3 of the way from start to destination.
Point = (0 + 300/3, 0 + 400/3, 50 + 50/3)
      = (100, 133.3, 66.7)

Your Turn: Calculate a path with 3 waypoints!`
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

  // LESSON 8: Triangle Trigonometry
  {
    id: 8,
    title: 'Triangles (sin, cos, tan)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 3,
    emoji: '🟣',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Master trigonometry - the mathematics of angles and triangles, crucial for navigation, forces, and rotations.',

      sections: [
        {
          title: '🧠 Right Triangle Basics',
          type: 'concept',
          content: `A right triangle has one 90° angle.

Three sides:
• Hypotenuse: longest side (opposite the right angle)
• Opposite: side across from the angle we're measuring
• Adjacent: side next to the angle we're measuring

Pythagorean Theorem:
a² + b² = c²
(where c is the hypotenuse)

Example: If a = 3 and b = 4
c² = 3² + 4² = 9 + 16 = 25
c = 5

The Three Ratios (SOH-CAH-TOA):
• sin(θ) = Opposite / Hypotenuse
• cos(θ) = Adjacent / Hypotenuse
• tan(θ) = Opposite / Adjacent

These ratios are the same for any triangle with the same angle!`
        },
        {
          title: '🔧 Using Sin, Cos, and Tan',
          type: 'concept',
          content: `Example 1: Finding a Side
Triangle with angle 30°, hypotenuse = 10 m
Find opposite side:
sin(30°) = opposite / 10
opposite = 10 × sin(30°) = 10 × 0.5 = 5 m

Example 2: Finding an Angle
Triangle with opposite = 4, adjacent = 3
tan(θ) = 4/3 = 1.333
θ = arctan(1.333) ≈ 53.1°

Example 3: Rocket Height
You're 100 m from a rocket launch pad.
You measure angle to rocket top = 60°
Height = 100 × tan(60°) = 100 × 1.732 ≈ 173.2 m

Common Angles to Remember:
• sin(30°) = 0.5,  cos(30°) = 0.866,  tan(30°) = 0.577
• sin(45°) = 0.707, cos(45°) = 0.707, tan(45°) = 1
• sin(60°) = 0.866, cos(60°) = 0.5,   tan(60°) = 1.732`
        },
        {
          title: '🧮 Practice Zone: Engineering Applications',
          type: 'practice',
          content: `Problem 1: Ramp Design
A ramp rises 2 m over horizontal distance 10 m.
Angle = arctan(2/10) = arctan(0.2) ≈ 11.3°
Ramp length = √(2² + 10²) = √104 ≈ 10.2 m

Problem 2: Plane Climb Angle
Plane climbs 1000 m while traveling 5000 m horizontally.
Climb angle = arctan(1000/5000) = arctan(0.2) ≈ 11.3°

Problem 3: Tower Height
Standing 50 m from tower, angle to top = 45°
Height = 50 × tan(45°) = 50 × 1 = 50 m

Problem 4: Cable Length
A support cable goes from ground to top of 30 m pole.
Ground distance from pole = 40 m
Cable length = √(30² + 40²) = √(900 + 1600) = √2500 = 50 m
Angle = arctan(30/40) ≈ 36.9°`
        },
        {
          title: '🧩 Interactive Challenge: Rocket Tracking',
          type: 'simulation',
          content: `Scenario: Tracking a Rocket Launch

You're at a tracking station 2000 m from the launch pad.

Question 1: Rocket at 30° elevation
Height = 2000 × tan(30°) = 2000 × 0.577 ≈ 1,154 m

Question 2: Rocket at 60° elevation
Height = 2000 × tan(60°) = 2000 × 1.732 ≈ 3,464 m

Question 3: Rocket reaches 5000 m height
Angle = arctan(5000/2000) = arctan(2.5) ≈ 68.2°

Question 4: Distance to Rocket
At 60° elevation, height = 3,464 m
Direct distance = 2000 / cos(60°) = 2000 / 0.5 = 4,000 m

Challenge: Design a tracking system
If you want to track rockets up to 10 km high from 2 km away:
Maximum angle = arctan(10,000/2,000) = arctan(5) ≈ 78.7°

Your Turn: Calculate angles for different heights!`
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

  // LESSON 9: Vectors 1 - Magnitude & Direction
  {
    id: 9,
    title: 'Vector Basics (direction & magnitude)',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 4,
    emoji: '🟣',
    level: 'Beginner',
    duration: '18 min',
    content: {
      introduction: 'Learn vectors - quantities with both magnitude and direction, essential for forces, velocity, and motion.',
      sections: [
        {
          title: '🧠 What is a Vector?',
          type: 'concept',
          content: `Scalar vs Vector:
• Scalar: magnitude only (speed: 50 km/h)
• Vector: magnitude AND direction (velocity: 50 km/h North)

Vector Notation:
• Arrow notation: →v or v⃗
• Component form: v = (x, y) or v = (x, y, z)
• Magnitude: |v| = √(x² + y²)

Examples:
• Force: 100 N at 30° angle
• Velocity: 20 m/s Northeast
• Displacement: 5 m right, 3 m up = (5, 3)`
        },
        {
          title: '🔧 Vector Operations',
          type: 'concept',
          content: `Adding Vectors:
v₁ = (3, 4), v₂ = (1, 2)
v₁ + v₂ = (3+1, 4+2) = (4, 6)

Magnitude:
v = (3, 4)
|v| = √(3² + 4²) = √25 = 5

Direction (angle):
θ = arctan(y/x) = arctan(4/3) ≈ 53.1°

Scalar Multiplication:
2v = 2(3, 4) = (6, 8)`
        },
        {
          title: '🧮 Practice: Force Systems',
          type: 'practice',
          content: `Problem: Two forces on a robot
F₁ = (30, 40) N
F₂ = (20, 10) N
Resultant = (50, 50) N
Magnitude = √(50² + 50²) ≈ 70.7 N`
        },
        {
          title: '🧩 Challenge: 2D Force Balance',
          type: 'simulation',
          content: `Find resultant of forces:
F₁ = 100 N East
F₂ = 100 N North
Resultant = √(100² + 100²) ≈ 141.4 N at 45° NE`
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

  // LESSON 10: Vectors 2 - Dot & Cross Product
  {
    id: 10,
    title: 'Dot & Cross Product',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 5,
    emoji: '🟣',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Master dot and cross products - used for torque, work, and perpendicularity in engineering.',
      sections: [
        {
          title: '🧠 Dot Product',
          type: 'concept',
          content: `Dot Product (·):
v · w = vₓwₓ + vᵧwᵧ + vᵤwᵤ

Example: v = (2, 3), w = (4, 1)
v · w = 2(4) + 3(1) = 8 + 3 = 11

Uses:
• Work = Force · Displacement
• Check if perpendicular (dot = 0)
• Find angle between vectors`
        },
        {
          title: '🔧 Cross Product',
          type: 'concept',
          content: `Cross Product (×):
v × w = (vᵧwᵤ - vᵤwᵧ, vᵤwₓ - vₓwᵤ, vₓwᵧ - vᵧwₓ)

2D simplified: |v × w| = vₓwᵧ - vᵧwₓ

Uses:
• Torque = r × F
• Find perpendicular vector
• Calculate area`
        },
        {
          title: '🧮 Practice: Torque Calculation',
          type: 'practice',
          content: `Wrench problem:
r = (0.3, 0) m (wrench length)
F = (0, 50) N (force)
Torque = r × F = 0.3 × 50 = 15 N·m`
        },
        {
          title: '🧩 Challenge: Robot Arm Torque',
          type: 'simulation',
          content: `Calculate torque on robot joint:
Arm length: 0.5 m
Force: 100 N perpendicular
Torque = 0.5 × 100 = 50 N·m`
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

  // LESSON 11: Rotations in 3D
  {
    id: 11,
    title: 'Transformations & Rotations',
    unit: 'Geometry & Trigonometry',
    unitNumber: 2,
    lessonNumber: 6,
    emoji: '🟣',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Understand 3D rotations and transformations - critical for robotics, animation, and CAD.',
      sections: [
        {
          title: '🧠 Rotation Basics',
          type: 'concept',
          content: `2D Rotation around origin:
x' = x cos(θ) - y sin(θ)
y' = x sin(θ) + y cos(θ)

Example: Rotate (1, 0) by 90°
x' = 1(0) - 0(1) = 0
y' = 1(1) + 0(0) = 1
Result: (0, 1)

3D Rotations:
• Around X-axis
• Around Y-axis  
• Around Z-axis`
        },
        {
          title: '🔧 Rotation Matrices',
          type: 'concept',
          content: `2D Rotation Matrix:
R(θ) = [cos(θ)  -sin(θ)]
       [sin(θ)   cos(θ)]

Multiply matrix by vector to rotate!

3D rotations use 3×3 matrices
Used in: robotics, game engines, CAD`
        },
        {
          title: '🧮 Practice: Rotate a Point',
          type: 'practice',
          content: `Rotate (2, 0) by 45°:
cos(45°) = 0.707, sin(45°) = 0.707
x' = 2(0.707) - 0(0.707) = 1.414
y' = 2(0.707) + 0(0.707) = 1.414
Result: (1.414, 1.414)`
        },
        {
          title: '🧩 Challenge: Robot Arm Rotation',
          type: 'simulation',
          content: `Robot arm at (5, 0) rotates 60°:
New position = (2.5, 4.33)

Calculate rotation for different angles
Design a 3-joint robot arm!`
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
