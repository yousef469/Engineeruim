// Unit 3: Calculus Basics (Lessons 12-16) - FULLY ENHANCED
export const unit3Lessons = [
  // LESSON 12: Derivative Concept
  {
    id: 12,
    title: 'Derivatives - Understanding Rate of Change',
    unit: 'Calculus Basics',
    unitNumber: 3,
    lessonNumber: 1,
    emoji: '🔵',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Discover derivatives - the math that tells you HOW FAST things change! From car speed to rocket acceleration, derivatives are everywhere in engineering.',
      
      sections: [
        {
          title: '🧠 What is a Derivative? - The Slope Story',
          type: 'concept',
          content: `A derivative tells you the RATE OF CHANGE - how fast something is changing!

🎯 REAL-WORLD EXAMPLE:
Imagine you're driving a car:
• Position tells you WHERE you are
• Derivative of position tells you HOW FAST you're moving (velocity!)

📊 VISUALIZING SLOPE:

Position vs Time Graph:
     Position (m)
        |
    100 |        ●  ← At t=5s, you're at 100m
     80 |      /
     60 |    /  ← This slope is your speed!
     40 |  /
     20 |/
      0 |________→ Time (s)
        0 1 2 3 4 5

The STEEPER the line, the FASTER you're moving!

💡 SLOPE = DERIVATIVE:

Slope = Rise / Run = Change in Position / Change in Time

Example:
From t=0s to t=5s:
Position changes from 0m to 100m
Slope = 100m / 5s = 20 m/s

This slope IS your velocity!

🔧 MATHEMATICAL NOTATION:

If position = f(t), then:
• Derivative = f'(t) or df/dt
• Reads as: "f prime of t" or "dee-f dee-t"

Example: f(t) = 5t²
Derivative: f'(t) = 10t

At t=2s: f'(2) = 10(2) = 20 m/s

📐 THE POWER RULE (Easy Way):

For f(x) = xⁿ
Derivative: f'(x) = n·xⁿ⁻¹

Examples:
• f(x) = x² → f'(x) = 2x
• f(x) = x³ → f'(x) = 3x²
• f(x) = 5x⁴ → f'(x) = 20x³

Step-by-step:
1. Bring down the exponent as a coefficient
2. Subtract 1 from the exponent
3. Done!`
        },
        {
          title: '🔧 Finding Derivatives - Step by Step',
          type: 'concept',
          content: `Let's practice finding derivatives!

PROBLEM 1: Find derivative of f(x) = x³

Step 1: Identify the exponent
n = 3

Step 2: Apply power rule
f'(x) = n·xⁿ⁻¹
f'(x) = 3·x³⁻¹
f'(x) = 3x²

Answer: f'(x) = 3x²

PROBLEM 2: Find derivative of f(t) = 4t²

Step 1: Identify coefficient and exponent
Coefficient = 4, exponent = 2

Step 2: Apply power rule
f'(t) = 4 · 2 · t²⁻¹
f'(t) = 8t

Answer: f'(t) = 8t

PROBLEM 3: Position function s(t) = 2t³ + 5t

Step 1: Take derivative of each term
d/dt(2t³) = 2·3·t² = 6t²
d/dt(5t) = 5

Step 2: Add them together
s'(t) = 6t² + 5

Answer: s'(t) = 6t² + 5

This is the velocity function!

🎨 VISUAL UNDERSTANDING:

Graph of f(x) = x²:
     y
     |    /
   4 |   /
     |  /  ← Curve gets steeper
   1 | /
     |/
     |________→ x
     0  1  2

At x=1: f'(1) = 2(1) = 2 (slope = 2)
At x=2: f'(2) = 2(2) = 4 (slope = 4)

The curve gets steeper as x increases!`
        },
        {
          title: '🧮 Practice: Real Engineering Problems',
          type: 'practice',
          content: `Let's solve real problems!

PROBLEM 1: Rocket Height
A rocket's height is h(t) = 100t - 5t²

Question: What is the rocket's velocity at t=3s?

Step 1: Find velocity (derivative of height)
h'(t) = d/dt(100t - 5t²)
h'(t) = 100 - 10t

Step 2: Evaluate at t=3s
h'(3) = 100 - 10(3)
h'(3) = 100 - 30
h'(3) = 70 m/s

Answer: Rocket is moving at 70 m/s upward at t=3s

PROBLEM 2: Car Position
Car position: s(t) = 3t² + 2t (meters)

Question: Find velocity at t=4s

Step 1: Find velocity function
s'(t) = 6t + 2

Step 2: Evaluate at t=4s
s'(4) = 6(4) + 2
s'(4) = 24 + 2
s'(4) = 26 m/s

Answer: Car is traveling at 26 m/s

PROBLEM 3: Temperature Change
Temperature: T(t) = 20 + 5t - 0.5t²

Question: How fast is temperature changing at t=2 hours?

Step 1: Find rate of change
T'(t) = 5 - t

Step 2: Evaluate at t=2
T'(2) = 5 - 2 = 3°C/hour

Answer: Temperature is increasing at 3°C per hour

PROBLEM 4: Given Position-Time Graph
Graph shows: At t=2s, position = 20m; at t=4s, position = 60m

Question: Find average velocity

Step 1: Calculate slope
Velocity = Δposition / Δtime
Velocity = (60-20) / (4-2)
Velocity = 40 / 2
Velocity = 20 m/s

Answer: Average velocity is 20 m/s`
        },
        {
          title: '🧩 Challenge: Motion Analysis',
          type: 'simulation',
          content: `Analyze a drone's flight!

SCENARIO:
Drone height: h(t) = 50t - 2t² (meters)
Time range: 0 to 12 seconds

CHALLENGE 1: Find velocity function
h'(t) = d/dt(50t - 2t²)
h'(t) = 50 - 4t m/s

CHALLENGE 2: When is drone moving fastest upward?
Velocity is maximum when t is smallest
At t=0: h'(0) = 50 - 0 = 50 m/s
This is the fastest upward speed!

CHALLENGE 3: When does drone stop rising?
Set velocity = 0:
50 - 4t = 0
4t = 50
t = 12.5 seconds

Drone stops rising at 12.5s

CHALLENGE 4: What's the maximum height?
At t=12.5s:
h(12.5) = 50(12.5) - 2(12.5)²
h(12.5) = 625 - 312.5
h(12.5) = 312.5 meters

Maximum height is 312.5m!

CHALLENGE 5: Graph interpretation
Sketch velocity vs time:

Velocity (m/s)
   50 |●
      | \
   25 |  \
      |   \
    0 |____●___→ Time (s)
      0   12.5

Velocity decreases linearly from 50 m/s to 0!

YOUR TURN:
A ball is thrown with h(t) = 30t - 5t²
1. Find velocity function
2. When does it hit the ground?
3. What's the maximum height?`
        }
      ],
      
      keyTakeaways: [
        'Derivative = rate of change = slope of the curve',
        'Velocity is the derivative of position',
        'Power rule: d/dx(xⁿ) = n·xⁿ⁻¹',
        'Steeper slope = faster change',
        'Derivative tells you HOW FAST, not WHERE'
      ],
      
      vocabulary: [
        { term: 'Derivative', definition: 'Rate of change; slope of a function at a point' },
        { term: 'Slope', definition: 'Rise over run; steepness of a line' },
        { term: 'Rate of Change', definition: 'How fast one quantity changes relative to another' },
        { term: 'Power Rule', definition: 'Formula for finding derivative of xⁿ' },
        { term: 'Velocity', definition: 'Derivative of position; rate of change of position' }
      ],
      
      quiz: [
        {
          question: 'What is the derivative of f(x) = x³?',
          options: ['x²', '3x²', '3x³', 'x³/3'],
          correct: 1
        },
        {
          question: 'If position s(t) = 5t², what is velocity at t=2s?',
          options: ['10 m/s', '20 m/s', '5 m/s', '40 m/s'],
          correct: 1
        },
        {
          question: 'The derivative tells you:',
          options: ['Where you are', 'How fast you are changing', 'The total distance', 'The starting point'],
          correct: 1
        },
        {
          question: 'Given position-time graph, if slope = 15, velocity is:',
          options: ['0 m/s', '15 m/s', '30 m/s', 'Cannot determine'],
          correct: 1
        },
        {
          question: 'Derivative of f(x) = 4x² is:',
          options: ['4x', '8x', '2x²', '4x³'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 13: Velocity & Acceleration
  {
    id: 13,
    title: 'Velocity & Acceleration - Motion in Action',
    unit: 'Calculus Basics',
    unitNumber: 3,
    lessonNumber: 2,
    emoji: '🔵',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn how derivatives describe motion! Velocity tells you speed, acceleration tells you how speed changes. Master the math of moving objects!',
      
      sections: [
        {
          title: '🧠 The Motion Chain - Position → Velocity → Acceleration',
          type: 'concept',
          content: `Motion has THREE levels, each is the derivative of the previous!

📊 THE MOTION CHAIN:

Position (where you are)
    ↓ Take derivative
Velocity (how fast you're moving)
    ↓ Take derivative  
Acceleration (how fast your speed changes)

🎯 REAL EXAMPLE: Car Trip

Position: s(t) = 2t³ meters

Step 1: Find Velocity (1st derivative)
v(t) = s'(t) = 6t² m/s

Step 2: Find Acceleration (2nd derivative)
a(t) = v'(t) = 12t m/s²

At t=2 seconds:
• Position: s(2) = 2(8) = 16 m
• Velocity: v(2) = 6(4) = 24 m/s
• Acceleration: a(2) = 12(2) = 24 m/s²

💡 UNDERSTANDING ACCELERATION:

Positive acceleration = Speeding up
• Car: 0 → 20 → 40 m/s (accelerating!)

Negative acceleration = Slowing down
• Car: 40 → 20 → 0 m/s (braking!)

Zero acceleration = Constant speed
• Car: 30 → 30 → 30 m/s (cruise control!)

🔧 NOTATION:

Position: s(t) or x(t)
Velocity: v(t) = s'(t) = ds/dt
Acceleration: a(t) = v'(t) = s''(t) = d²s/dt²

The double prime (s'') means "second derivative"!`
        },
        {
          title: '🔧 Calculating Motion - Step by Step',
          type: 'concept',
          content: `Let's analyze motion problems!

PROBLEM: Car Acceleration
Position: s(t) = t³ - 3t² + 5t

Find velocity and acceleration at t=3s

Step 1: Find velocity (1st derivative)
v(t) = s'(t)
v(t) = 3t² - 6t + 5

Step 2: Find acceleration (2nd derivative)
a(t) = v'(t)
a(t) = 6t - 6

Step 3: Evaluate at t=3s
v(3) = 3(9) - 6(3) + 5 = 27 - 18 + 5 = 14 m/s
a(3) = 6(3) - 6 = 18 - 6 = 12 m/s²

Answer:
• Velocity: 14 m/s
• Acceleration: 12 m/s² (speeding up!)

🎨 VISUAL INTERPRETATION:

Position Graph (curved):
s(t) |     /
     |   /
     | /
     |/___→ t

Velocity Graph (less curved):
v(t) |   /
     | /
     |/___→ t

Acceleration Graph (straight line):
a(t) | /
     |/___→ t

Each derivative "flattens" the curve!`
        },
        {
          title: '🧮 Practice: Motion Problems',
          type: 'practice',
          content: `Solve real motion scenarios!

PROBLEM 1: Rocket Launch
Position: h(t) = 100t - 5t²

Find velocity and acceleration at t=5s

Step 1: Velocity
v(t) = 100 - 10t
v(5) = 100 - 50 = 50 m/s

Step 2: Acceleration
a(t) = -10 m/s²

Answer: Moving at 50 m/s, decelerating at 10 m/s²

PROBLEM 2: Car Acceleration Quiz
Position data:
t=0s: s=0m
t=2s: s=20m
t=4s: s=60m

Find average acceleration

Step 1: Find velocities
v₁ = (20-0)/(2-0) = 10 m/s
v₂ = (60-20)/(4-2) = 20 m/s

Step 2: Find acceleration
a = (v₂-v₁)/(t₂-t₁)
a = (20-10)/(4-2)
a = 10/2 = 5 m/s²

Answer: Average acceleration is 5 m/s²

PROBLEM 3: Drone Flight
h(t) = 50t - 2t²

When is acceleration zero?

Step 1: Find acceleration
v(t) = 50 - 4t
a(t) = -4 m/s²

Answer: Acceleration is ALWAYS -4 m/s² (constant!)
Never zero - drone is always decelerating!`
        },
        {
          title: '🧩 Challenge: Complete Motion Analysis',
          type: 'simulation',
          content: `Analyze a ball thrown upward!

SCENARIO:
Ball height: h(t) = 30t - 5t²
(t in seconds, h in meters)

CHALLENGE 1: Find velocity function
v(t) = h'(t) = 30 - 10t m/s

CHALLENGE 2: Find acceleration
a(t) = v'(t) = -10 m/s²

This is gravity! (g ≈ -10 m/s²)

CHALLENGE 3: When does ball reach maximum height?
At max height, velocity = 0:
30 - 10t = 0
t = 3 seconds

CHALLENGE 4: What is maximum height?
h(3) = 30(3) - 5(9)
h(3) = 90 - 45 = 45 meters

CHALLENGE 5: When does ball hit ground?
Set h(t) = 0:
30t - 5t² = 0
5t(6 - t) = 0
t = 0 or t = 6

Ball hits ground at t=6s

CHALLENGE 6: Impact velocity
v(6) = 30 - 10(6) = -30 m/s

Negative means downward!

YOUR MISSION:
Create motion graphs for:
1. Position vs time
2. Velocity vs time
3. Acceleration vs time

Describe what's happening at each stage!`
        }
      ],
      
      keyTakeaways: [
        'Velocity = 1st derivative of position',
        'Acceleration = 2nd derivative of position = 1st derivative of velocity',
        'Positive acceleration = speeding up',
        'Negative acceleration = slowing down',
        'Gravity causes constant acceleration of -10 m/s²'
      ],
      
      vocabulary: [
        { term: 'Velocity', definition: 'Rate of change of position; speed with direction' },
        { term: 'Acceleration', definition: 'Rate of change of velocity; how fast speed changes' },
        { term: 'Second Derivative', definition: 'Derivative of the derivative; written as f\'\'(x)' },
        { term: 'Deceleration', definition: 'Negative acceleration; slowing down' },
        { term: 'Constant Velocity', definition: 'Zero acceleration; speed not changing' }
      ],
      
      quiz: [
        {
          question: 'If s(t) = t³, what is acceleration at t=2?',
          options: ['6', '12', '4', '8'],
          correct: 1
        },
        {
          question: 'Negative acceleration means:',
          options: ['Moving backward', 'Slowing down', 'Stopped', 'Moving forward'],
          correct: 1
        },
        {
          question: 'If velocity is constant, acceleration is:',
          options: ['Positive', 'Negative', 'Zero', 'Increasing'],
          correct: 2
        },
        {
          question: 'Gravity causes acceleration of:',
          options: ['-5 m/s²', '-10 m/s²', '10 m/s²', '0 m/s²'],
          correct: 1
        },
        {
          question: 'If s(t) = 5t², then a(t) =',
          options: ['5', '10', '10t', '5t'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 14: Integration Concept
  {
    id: 14,
    title: 'Integration - Finding Total Change',
    unit: 'Calculus Basics',
    unitNumber: 3,
    lessonNumber: 3,
    emoji: '🔵',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Integration is the OPPOSITE of derivatives! While derivatives find rates, integrals find totals. Learn to calculate distance, work, and energy!',
      
      sections: [
        {
          title: '🧠 What is Integration? - Area Under the Curve',
          type: 'concept',
          content: `Integration adds up tiny pieces to find the TOTAL!

🎯 THE BIG IDEA:

Derivative: Breaks things apart (finds rate)
Integral: Puts things together (finds total)

📊 VISUAL UNDERSTANDING:

Velocity vs Time Graph:
v(m/s)|
   20 |████████  ← This shaded area
   10 |████████      is the DISTANCE!
    0 |________→ t(s)
      0  2  4

Area = Distance traveled!

If velocity = 20 m/s for 4 seconds:
Distance = 20 × 4 = 80 meters

💡 INTEGRATION NOTATION:

∫ v(t) dt = distance

The ∫ symbol means "integrate" or "add up"
dt means "with respect to time"

🔧 THE POWER RULE FOR INTEGRATION:

∫ xⁿ dx = xⁿ⁺¹/(n+1) + C

Steps:
1. Add 1 to the exponent
2. Divide by the new exponent
3. Add constant C

Examples:
• ∫ x² dx = x³/3 + C
• ∫ x³ dx = x⁴/4 + C
• ∫ 5x dx = 5x²/2 + C

📐 WHY THE +C?

When you integrate, you lose information!
If f'(x) = 2x, then f(x) could be:
• x² + 5
• x² + 10
• x² + 0
• x² + C (any constant!)

The derivative of ANY constant is zero!`
        },
        {
          title: '🔧 Calculating Integrals - Step by Step',
          type: 'concept',
          content: `Let's practice integration!

PROBLEM 1: Find ∫ 3x² dx

Step 1: Add 1 to exponent
2 + 1 = 3

Step 2: Divide by new exponent
3x³/3 = x³

Step 3: Add constant
Answer: x³ + C

PROBLEM 2: Find distance from velocity
v(t) = 10t

∫ 10t dt = 10 · t²/2 + C = 5t² + C

If starting position is 0 (C=0):
Distance at t=3s: s(3) = 5(9) = 45 meters

PROBLEM 3: Calculate work from force
Force F = 20 N over distance 0 to 5m

Work = ∫ F dx = ∫ 20 dx
Work = 20x |₀⁵
Work = 20(5) - 20(0)
Work = 100 Joules

🎨 DEFINITE vs INDEFINITE INTEGRALS:

Indefinite (no limits):
∫ x² dx = x³/3 + C

Definite (with limits):
∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9

Definite integrals give you a NUMBER (the area)!`
        },
        {
          title: '🧮 Practice: Real Applications',
          type: 'practice',
          content: `Solve integration problems!

PROBLEM 1: Distance from Velocity
v(t) = 6t² m/s
Find distance from t=0 to t=2s

Step 1: Integrate
s(t) = ∫ 6t² dt = 6t³/3 = 2t³

Step 2: Evaluate from 0 to 2
s(2) - s(0) = 2(8) - 0 = 16 meters

Answer: 16 meters traveled

PROBLEM 2: Work from Force Graph
Force graph shows F=50N from x=0 to x=3m

Work = Force × Distance
Work = 50 × 3 = 150 Joules

Or using integration:
Work = ∫₀³ 50 dx = 50x |₀³ = 150 J

PROBLEM 3: Energy Calculation
Power P(t) = 100t Watts
Find energy from t=0 to t=5s

Energy = ∫₀⁵ 100t dt
Energy = 100t²/2 |₀⁵
Energy = 50(25) - 0
Energy = 1250 Joules

PROBLEM 4: Area Under Curve
Find area under f(x) = x² from x=0 to x=3

Area = ∫₀³ x² dx
Area = x³/3 |₀³
Area = 27/3 - 0
Area = 9 square units`
        },
        {
          title: '🧩 Challenge: Motion and Energy',
          type: 'simulation',
          content: `Calculate distance and work!

SCENARIO 1: Car Trip
Velocity: v(t) = 20 - 2t m/s

CHALLENGE 1: Find position function
s(t) = ∫ (20 - 2t) dt
s(t) = 20t - t² + C

If s(0) = 0, then C = 0
s(t) = 20t - t²

CHALLENGE 2: Distance after 5 seconds
s(5) = 20(5) - 25 = 100 - 25 = 75 meters

CHALLENGE 3: When does car stop?
Set v(t) = 0:
20 - 2t = 0
t = 10 seconds

CHALLENGE 4: Total distance traveled
s(10) = 20(10) - 100 = 200 - 100 = 100 meters

SCENARIO 2: Lifting a Box
Force needed: F(x) = 50 + 2x Newtons
Lift from ground (x=0) to shelf (x=3m)

CHALLENGE 5: Calculate work done
Work = ∫₀³ (50 + 2x) dx
Work = [50x + x²]₀³
Work = 150 + 9 - 0
Work = 159 Joules

YOUR TURN:
A rocket has acceleration a(t) = 10 - t m/s²
Starting from rest:
1. Find velocity function
2. Find position function
3. Calculate distance after 5 seconds!`
        }
      ],
      
      keyTakeaways: [
        'Integration is the opposite of differentiation',
        'Integral = area under the curve',
        'Distance = integral of velocity',
        'Work = integral of force',
        'Power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C'
      ],
      
      vocabulary: [
        { term: 'Integration', definition: 'Process of finding the total from a rate; opposite of derivative' },
        { term: 'Integral', definition: 'The result of integration; represents area or total' },
        { term: 'Definite Integral', definition: 'Integral with limits; gives a specific number' },
        { term: 'Indefinite Integral', definition: 'Integral without limits; includes +C' },
        { term: 'Area Under Curve', definition: 'The region between a function and the x-axis' }
      ],
      
      quiz: [
        {
          question: 'What is ∫ x² dx?',
          options: ['x³ + C', 'x³/3 + C', '2x + C', 'x²/2 + C'],
          correct: 1
        },
        {
          question: 'If velocity = 10 m/s for 5 seconds, distance is:',
          options: ['2 m', '15 m', '50 m', '100 m'],
          correct: 2
        },
        {
          question: 'Integration finds:',
          options: ['Rate of change', 'Total amount', 'Slope', 'Maximum value'],
          correct: 1
        },
        {
          question: 'The area under a velocity-time graph represents:',
          options: ['Acceleration', 'Distance', 'Speed', 'Time'],
          correct: 1
        },
        {
          question: '∫₀² 4 dx =',
          options: ['4', '8', '2', '16'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 15: Basic Applications
  {
    id: 15,
    title: 'Calculus in Action - Energy, Motion & More',
    unit: 'Calculus Basics',
    unitNumber: 3,
    lessonNumber: 4,
    emoji: '🔵',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'See calculus in action! From falling balls to rocket launches, learn how derivatives and integrals solve real engineering problems.',
      
      sections: [
        {
          title: '🧠 Energy and Work - Calculus Powers Engineering',
          type: 'concept',
          content: `Calculus is EVERYWHERE in engineering!

🎯 KINETIC ENERGY:
KE = ½mv²

If mass m = 10 kg and velocity changes from 0 to 20 m/s:
KE = ½(10)(20)² = 2000 Joules

💡 WORK-ENERGY THEOREM:
Work = Change in Kinetic Energy

If you push a 10kg box from rest to 20 m/s:
Work = 2000 - 0 = 2000 Joules

🔧 POWER:
Power = Rate of energy use = dE/dt

If 2000 J used in 5 seconds:
Power = 2000/5 = 400 Watts

📊 DISPLACEMENT FROM ACCELERATION:

Given: a(t) = 10 m/s²

Step 1: Integrate to get velocity
v(t) = ∫ 10 dt = 10t + C
If v(0) = 0, then C = 0
v(t) = 10t

Step 2: Integrate to get position
s(t) = ∫ 10t dt = 5t²

At t=3s: s(3) = 5(9) = 45 meters!`
        },
        {
          title: '🔧 Ball Drop Simulation',
          type: 'concept',
          content: `Analyze a falling ball!

SETUP:
Ball dropped from 100m height
Gravity: g = -10 m/s²

Step 1: Acceleration
a(t) = -10 m/s²

Step 2: Velocity (integrate)
v(t) = ∫ -10 dt = -10t + C
At t=0, v=0, so C=0
v(t) = -10t m/s

Step 3: Position (integrate again)
h(t) = ∫ -10t dt = -5t² + C
At t=0, h=100, so C=100
h(t) = 100 - 5t²

Step 4: When does it hit ground?
Set h(t) = 0:
100 - 5t² = 0
t² = 20
t ≈ 4.47 seconds

Step 5: Impact speed
v(4.47) = -10(4.47) ≈ -44.7 m/s

Negative means downward!`
        },
        {
          title: '🧮 Practice: Real Scenarios',
          type: 'practice',
          content: `PROBLEM 1: Rocket Launch
Initial velocity: 0 m/s
Acceleration: 20 m/s²
Find height after 5 seconds

v(t) = 20t
h(t) = 10t²
h(5) = 10(25) = 250 meters

PROBLEM 2: Car Braking
Initial speed: 30 m/s
Deceleration: -5 m/s²
How far before stopping?

v(t) = 30 - 5t
Stops when v=0: t=6s
s(t) = 30t - 2.5t²
s(6) = 180 - 90 = 90 meters

PROBLEM 3: Energy from Power
Power: P(t) = 50t Watts
Energy from t=0 to t=4s?

E = ∫₀⁴ 50t dt = 25t² |₀⁴
E = 400 Joules`
        },
        {
          title: '🧩 Challenge: Complete Analysis',
          type: 'simulation',
          content: `MISSION: Analyze ball throw

Ball thrown up at 25 m/s from ground

Given: v₀ = 25 m/s, a = -10 m/s²

Find:
1. Velocity function: v(t) = 25 - 10t
2. Position function: h(t) = 25t - 5t²
3. Max height time: v=0 → t=2.5s
4. Max height: h(2.5) = 31.25m
5. Ground impact: h=0 → t=5s
6. Impact speed: v(5) = -25 m/s

Complete motion profile calculated!`
        }
      ],
      
      keyTakeaways: [
        'Work = Force × Distance',
        'Kinetic Energy = ½mv²',
        'Power = dE/dt (rate of energy use)',
        'Integrate acceleration twice to get position',
        'Gravity causes a = -10 m/s²'
      ],
      
      vocabulary: [
        { term: 'Kinetic Energy', definition: 'Energy of motion; KE = ½mv²' },
        { term: 'Work', definition: 'Energy transferred by force; W = F·d' },
        { term: 'Power', definition: 'Rate of energy use; P = dE/dt' },
        { term: 'Displacement', definition: 'Change in position' },
        { term: 'Free Fall', definition: 'Motion under gravity alone' }
      ],
      
      quiz: [
        {
          question: 'Ball dropped from rest, after 3s velocity is:',
          options: ['-10 m/s', '-20 m/s', '-30 m/s', '-40 m/s'],
          correct: 2
        },
        {
          question: 'If a=10 m/s² constant, after 5s from rest, distance is:',
          options: ['50 m', '125 m', '250 m', '500 m'],
          correct: 1
        },
        {
          question: 'Kinetic energy formula is:',
          options: ['mv', '½mv²', 'mv²', '½mv'],
          correct: 1
        },
        {
          question: 'Power is measured in:',
          options: ['Joules', 'Watts', 'Newtons', 'Meters'],
          correct: 1
        },
        {
          question: 'Work equals:',
          options: ['Force', 'Distance', 'Force × Distance', 'Force / Distance'],
          correct: 2
        }
      ]
    }
  },

  // LESSON 16: Graph Interpretation
  {
    id: 16,
    title: 'Reading Motion Graphs - The Visual Story',
    unit: 'Calculus Basics',
    unitNumber: 3,
    lessonNumber: 5,
    emoji: '🔵',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Graphs tell stories! Learn to read position, velocity, and acceleration graphs to understand exactly what is happening in motion.',
      
      sections: [
        {
          title: '🧠 The Three Motion Graphs',
          type: 'concept',
          content: `Each graph tells a different part of the story!

📊 POSITION GRAPH:
Shows WHERE you are

Flat line = Not moving
Straight line = Constant speed
Curved up = Speeding up
Curved down = Slowing down

📊 VELOCITY GRAPH:
Shows HOW FAST you're moving

Above zero = Moving forward
Below zero = Moving backward
Slope = Acceleration!

📊 ACCELERATION GRAPH:
Shows HOW SPEED CHANGES

Positive = Speeding up
Negative = Slowing down
Zero = Constant speed

🎯 READING THE STORY:

Position: Curved upward
- Velocity: Increasing (sloped up)
- Acceleration: Positive (above zero)

Story: Object speeding up!`
        },
        {
          title: '🔧 Matching Graphs to Motion',
          type: 'concept',
          content: `SCENARIO 1: Car Starting from Rest

Position: Curves up (parabola)
Velocity: Straight line up
Acceleration: Flat line (constant)

SCENARIO 2: Ball Thrown Up

Position: Curves up then down (parabola)
Velocity: Straight line down (crosses zero)
Acceleration: Flat negative line (gravity)

SCENARIO 3: Constant Speed

Position: Straight line
Velocity: Flat line
Acceleration: Zero line

Match the motion to the graphs!`
        },
        {
          title: '🧮 Practice: Graph Analysis',
          type: 'practice',
          content: `PROBLEM 1: Given velocity graph
Horizontal line at v=20 m/s

What's happening?
- Constant speed
- Zero acceleration
- Position increases linearly

PROBLEM 2: Position graph curves down
What does this mean?
- Slowing down
- Negative acceleration
- Velocity decreasing

PROBLEM 3: Acceleration jumps from 0 to 10
What happens to velocity?
- Starts increasing
- Slope changes
- Speed goes up!`
        },
        {
          title: '🧩 Challenge: Complete Story',
          type: 'simulation',
          content: `Interpret this motion:

t=0-2s: a=10 m/s² (speeding up)
t=2-4s: a=0 m/s² (constant speed)
t=4-6s: a=-10 m/s² (slowing down)

Draw all three graphs!
Describe the complete motion story!

Answer: Car accelerates, cruises, then brakes!`
        }
      ],
      
      keyTakeaways: [
        'Position graph shows location',
        'Velocity graph shows speed',
        'Acceleration graph shows speed change',
        'Slope of position = velocity',
        'Slope of velocity = acceleration'
      ],
      
      vocabulary: [
        { term: 'Position Graph', definition: 'Shows location vs time' },
        { term: 'Velocity Graph', definition: 'Shows speed vs time' },
        { term: 'Acceleration Graph', definition: 'Shows rate of speed change vs time' },
        { term: 'Slope', definition: 'Steepness of graph; rate of change' },
        { term: 'Intercept', definition: 'Where graph crosses axis' }
      ],
      
      quiz: [
        {
          question: 'Flat position graph means:',
          options: ['Speeding up', 'Slowing down', 'Not moving', 'Constant speed'],
          correct: 2
        },
        {
          question: 'Velocity graph slope tells you:',
          options: ['Position', 'Velocity', 'Acceleration', 'Distance'],
          correct: 2
        },
        {
          question: 'Negative velocity means:',
          options: ['Stopped', 'Moving backward', 'Slowing down', 'Speeding up'],
          correct: 1
        },
        {
          question: 'Zero acceleration graph means:',
          options: ['Not moving', 'Constant velocity', 'Speeding up', 'Slowing down'],
          correct: 1
        },
        {
          question: 'Position graph curves upward means:',
          options: ['Slowing down', 'Constant speed', 'Speeding up', 'Stopped'],
          correct: 2
        }
      ]
    }
  }
];

export default unit3Lessons;
