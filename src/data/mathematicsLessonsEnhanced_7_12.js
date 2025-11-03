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
