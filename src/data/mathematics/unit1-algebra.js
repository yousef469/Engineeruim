// Unit 1: Algebra & Equations (Lessons 1-6)
export const unit1Lessons = [
  // LESSON 1: Variables, Units & Symbols
  {
    id: 1,
    title: 'Variables, Units & Symbols',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 1,
    emoji: '🟢',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Master the language of engineering! Variables and units are your tools for describing the physical world. One wrong unit cost NASA $327 million - learn why precision matters!',

      sections: [
        {
          title: '🧠 Variables - The Language of Engineering',
          type: 'concept',
          content: `Variables are like containers that hold values. Think of them as labeled boxes!

📦 COMMON ENGINEERING VARIABLES:

Mass (m):
  Box labeled "m" → contains "50 kg"
  Used for: rockets, cars, robots

Force (F):
  Box labeled "F" → contains "1000 N"
  Used for: thrust, weight, tension

Velocity (v):
  Box labeled "v" → contains "100 m/s"
  Used for: speed, motion, flow

Time (t):
  Box labeled "t" → contains "5 s"
  Used for: duration, intervals

🎯 WHY USE VARIABLES?

Instead of writing:
"A car travels 100 meters in 5 seconds"

We write:
d = 100 m, t = 5 s
v = d/t = 100/5 = 20 m/s

Now this formula works for ANY car, ANY distance!

💡 REAL EXAMPLE - Drone Flight:

Drone specs:
• Battery capacity: E = 5000 mAh
• Flight time: t = 20 minutes
• Speed: v = 15 m/s

Distance traveled: d = v × t = 15 × (20×60) = 18,000 m = 18 km!

Variables let us calculate ANYTHING once we know the formula!`
        },
        {
          title: '⚠️ Units - The $327 Million Mistake',
          type: 'concept',
          content: `Units are NOT optional - they can make or break a mission!

🚀 THE NASA DISASTER (1999):

Mars Climate Orbiter Mission:
• Cost: $327 million
• Mission: Study Mars climate
• Result: CRASHED into Mars!

What went wrong?
Team A (Lockheed): Used pounds-force (lbf)
Team B (NASA): Expected Newtons (N)

1 lbf = 4.45 N

The spacecraft thought it was 4.45× closer to Mars than it actually was!
Result: Burned up in atmosphere 💥

📐 THE GOLDEN RULES:

1. ALWAYS write units:
   ✓ "Speed = 50 m/s"
   ✗ "Speed = 50" (50 what??)

2. Convert BEFORE calculating:
   Can't add 5 meters + 3 feet directly!
   Convert first: 3 feet = 0.914 m
   Then: 5 + 0.914 = 5.914 m

3. Check if answer makes sense:
   Car speed = 2000 m/s? 
   That's 7200 km/h! 🤔
   Probably made an error!

🔄 ESSENTIAL CONVERSIONS:

Distance:
1 km = 1000 m
1 mile = 1.609 km
1 foot = 0.3048 m

Time:
1 hour = 3600 seconds
1 minute = 60 seconds
1 day = 86,400 seconds

Speed:
1 km/h = 0.278 m/s
1 mph = 0.447 m/s
100 km/h = 27.8 m/s

💡 QUICK TRICK:
To convert km/h to m/s: divide by 3.6
72 km/h ÷ 3.6 = 20 m/s`
        },
        {
          title: '🧮 Practice Zone: Unit Conversions',
          type: 'practice',
          content: `Let's practice converting between units!

Problem 1: A car travels at 72 km/h. Convert to m/s.
Solution:
72 km/h = 72 × (1000 m / 3600 s) = 72 × 0.278 = 20 m/s

Problem 2: A rocket accelerates for 120 seconds. How many minutes?
Solution:
120 s ÷ 60 = 2 minutes

Problem 3: Convert 5000 grams to kilograms.
Solution:
5000 g ÷ 1000 = 5 kg

Try These:
• Convert 90 km/h to m/s
• Convert 3.5 hours to seconds
• A force of 2500 N is how many kN (kilonewtons)?`
        },
        {
          title: '🧩 Interactive Challenge: Find the Missing Variable',
          type: 'simulation',
          content: `Real Engineering Scenario:

A robot moves at a constant speed of 5 m/s and travels 20 meters.
Formula: distance = speed × time
20 = 5 × t

Question: How long did it take?
Solution: t = 20 ÷ 5 = 4 seconds

Your Turn - Solve These:

1. A plane flies at 250 m/s for 600 seconds. How far does it travel?
   Formula: d = v × t
   
2. A car travels 150 km in 2 hours. What's its average speed?
   Formula: v = d ÷ t
   
3. An engine produces 5000 N of force on a 1000 kg rocket. What's the acceleration?
   Formula: F = m × a (rearrange to find a)`
        }
      ],

      keyTakeaways: [
        'Variables represent physical quantities (mass, force, velocity, etc.)',
        'Always include units with numbers to avoid costly mistakes',
        'Learn common conversions: km/h ↔ m/s, hours ↔ seconds',
        'Rearrange formulas to solve for any variable'
      ],

      vocabulary: [
        { term: 'Variable', definition: 'A symbol (like m, v, t) that represents a quantity' },
        { term: 'Physical Quantity', definition: 'A measurable property like mass, speed, or force' },
        { term: 'Unit', definition: 'The standard measurement (kg, m/s, N)' },
        { term: 'Conversion', definition: 'Changing from one unit to another (e.g., km to m)' }
      ],

      quiz: [
        {
          question: 'What does the variable "v" typically represent in physics?',
          options: ['Volume', 'Velocity', 'Voltage', 'Variable'],
          correct: 1
        },
        {
          question: 'Convert 108 km/h to m/s',
          options: ['20 m/s', '25 m/s', '30 m/s', '35 m/s'],
          correct: 2
        },
        {
          question: 'A robot travels 15 m at 3 m/s. How long does it take?',
          options: ['3 seconds', '5 seconds', '12 seconds', '45 seconds'],
          correct: 1
        },
        {
          question: 'Why are units important in engineering?',
          options: [
            'They make calculations harder',
            'They prevent errors and ensure accuracy',
            'They are optional',
            'They only matter in physics'
          ],
          correct: 1
        },
        {
          question: 'If F = m × a, and F = 100 N, m = 20 kg, what is a?',
          options: ['2 m/s²', '5 m/s²', '80 m/s²', '2000 m/s²'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 2: Linear Equations
  {
    id: 2,
    title: 'Linear Equations',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 2,
    emoji: '🟢',
    level: 'Beginner',
    duration: '15 min',
    content: {
      introduction: 'Master solving single-variable equations - the foundation of all engineering calculations.',

      sections: [
        {
          title: '🧠 What is a Linear Equation?',
          type: 'concept',
          content: `A linear equation has one variable and can be written as:
ax + b = c

Where:
• x is the unknown variable we want to find
• a, b, c are known numbers
• The equation forms a straight line when graphed

Examples:
• 2x + 5 = 15
• 3v - 7 = 20
• 5t = 40

Goal: Isolate the variable on one side to find its value.`
        },
        {
          title: '🔧 Solving Linear Equations - Step by Step',
          type: 'concept',
          content: `The Golden Rule: Whatever you do to one side, do to the other!

Steps to Solve:
1. Simplify both sides (combine like terms)
2. Move variable terms to one side
3. Move constant terms to the other side
4. Divide or multiply to isolate the variable

Example: Solve 3x + 7 = 22

Step 1: Subtract 7 from both sides
3x + 7 - 7 = 22 - 7
3x = 15

Step 2: Divide both sides by 3
3x ÷ 3 = 15 ÷ 3
x = 5

Check: 3(5) + 7 = 15 + 7 = 22 ✓`
        },
        {
          title: '🧮 Practice Zone: Engineering Problems',
          type: 'practice',
          content: `Problem 1: Robot Motion
A robot moves at 5 m/s for t seconds and travels 20 meters.
Equation: 5t = 20
Solution: t = 20 ÷ 5 = 4 seconds

Problem 2: Force Calculation
A force F pushes a 10 kg box with acceleration 3 m/s².
Equation: F = 10 × 3
Solution: F = 30 N

Problem 3: Temperature Conversion
Convert 25°C to Fahrenheit using F = (9/5)C + 32
F = (9/5)(25) + 32 = 45 + 32 = 77°F

Your Turn:
1. Solve: 4x - 8 = 20
2. A car travels distance d at 25 m/s for 8 seconds. Find d.
3. Solve: 2v + 15 = 45`
        },
        {
          title: '🧩 Interactive Challenge: Real-World Scenarios',
          type: 'simulation',
          content: `Scenario 1: Rocket Fuel
A rocket burns fuel at 50 kg/s. After time t, it has burned 400 kg.
Equation: 50t = 400
Find t: t = 400 ÷ 50 = 8 seconds

Scenario 2: Electric Circuit
Voltage V = 12V, Resistance R = 4Ω. Find current I.
Ohm's Law: V = I × R
12 = I × 4
I = 12 ÷ 4 = 3 Amperes

Scenario 3: Airplane Altitude
A plane descends at 5 m/s. After t seconds, it has descended 150 m.
Equation: 5t = 150
Find t: t = 30 seconds

Challenge: Create your own engineering equation and solve it!`
        }
      ],

      keyTakeaways: [
        'Linear equations have one variable and form straight lines',
        'Always do the same operation to both sides of the equation',
        'Check your answer by substituting back into the original equation',
        'Linear equations appear everywhere in engineering: motion, circuits, forces'
      ],

      vocabulary: [
        { term: 'Linear Equation', definition: 'An equation with one variable to the first power (no x² or x³)' },
        { term: 'Variable', definition: 'The unknown value we are solving for (usually x, t, v, etc.)' },
        { term: 'Coefficient', definition: 'The number multiplying the variable (in 3x, the coefficient is 3)' },
        { term: 'Constant', definition: 'A fixed number that doesn\'t change' }
      ],

      quiz: [
        {
          question: 'Solve: 2x + 6 = 18',
          options: ['x = 4', 'x = 6', 'x = 8', 'x = 12'],
          correct: 1
        },
        {
          question: 'A robot moves at 4 m/s for t seconds = 32 m. Find t.',
          options: ['6 s', '8 s', '10 s', '12 s'],
          correct: 1
        },
        {
          question: 'Solve: 5v - 10 = 40',
          options: ['v = 6', 'v = 8', 'v = 10', 'v = 12'],
          correct: 2
        },
        {
          question: 'What is the first step to solve 3x + 7 = 22?',
          options: [
            'Divide by 3',
            'Subtract 7 from both sides',
            'Add 7 to both sides',
            'Multiply by 3'
          ],
          correct: 1
        },
        {
          question: 'If F = ma and F = 60 N, a = 5 m/s², find m.',
          options: ['10 kg', '12 kg', '15 kg', '20 kg'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 3: Quadratic Equations
  {
    id: 3,
    title: 'Quadratic Equations',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 3,
    emoji: '🟢',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Discover how quadratic equations model motion, projectiles, and acceleration in engineering.',

      sections: [
        {
          title: '🧠 What is a Quadratic Equation?',
          type: 'concept',
          content: `A quadratic equation has a variable squared (x²):
ax² + bx + c = 0

Where:
• a, b, c are constants
• x is the variable
• The highest power is 2 (that's why it's "quadratic")

Examples in Engineering:
• Projectile motion: h = -5t² + 20t + 10
• Falling objects: s = ut + ½at²
• Parabolic paths of rockets and balls

The graph of a quadratic is a parabola (U-shape or ∩-shape).`
        },
        {
          title: '🔧 Solving Quadratic Equations',
          type: 'concept',
          content: `Method 1: Factoring (when possible)
Example: x² + 5x + 6 = 0
Factor: (x + 2)(x + 3) = 0
Solutions: x = -2 or x = -3

Method 2: Quadratic Formula (always works!)
For ax² + bx + c = 0:

x = [-b ± √(b² - 4ac)] / 2a

Example: 2x² + 3x - 2 = 0
a = 2, b = 3, c = -2

x = [-3 ± √(9 + 16)] / 4
x = [-3 ± 5] / 4
x = 0.5 or x = -2

Engineering Tip: Often only one solution makes physical sense (time can't be negative!)`
        },
        {
          title: '🧮 Practice Zone: Motion Equations',
          type: 'practice',
          content: `Problem 1: Falling Object
An object is dropped from a height. Its position is:
s = 100 - 5t²

When does it hit the ground (s = 0)?
0 = 100 - 5t²
5t² = 100
t² = 20
t = √20 ≈ 4.47 seconds

Problem 2: Rocket Launch
A rocket's height is h = -5t² + 50t
When does it return to ground (h = 0)?
0 = -5t² + 50t
0 = t(-5t + 50)
t = 0 (launch) or t = 10 seconds (landing)

Problem 3: Projectile Range
A ball follows: y = -x² + 4x
Where does it land (y = 0)?
0 = -x² + 4x
0 = x(-x + 4)
x = 0 (start) or x = 4 meters (landing)`
        },
        {
          title: '🧩 Interactive Challenge: Design a Jump',
          type: 'simulation',
          content: `Scenario: Designing a Ramp Jump

A car leaves a ramp at 20 m/s at an angle.
Height equation: h = -5t² + 20t

Questions:
1. When does the car reach maximum height?
   (Hint: At the peak, the derivative = 0, or use t = -b/2a)
   t = -20/(2×-5) = 2 seconds

2. What is the maximum height?
   h = -5(2)² + 20(2) = -20 + 40 = 20 meters

3. When does it land (h = 0)?
   0 = -5t² + 20t
   t = 0 or t = 4 seconds

Your Challenge:
Design a jump where the car stays airborne for 6 seconds.
What initial velocity is needed?`
        }
      ],

      keyTakeaways: [
        'Quadratic equations model acceleration, projectiles, and parabolic motion',
        'The quadratic formula works for any quadratic equation',
        'In engineering, check if both solutions make physical sense',
        'Motion equations often use s = ut + ½at² (a quadratic!)'
      ],

      vocabulary: [
        { term: 'Quadratic', definition: 'An equation with x² as the highest power' },
        { term: 'Parabola', definition: 'The U-shaped curve formed by quadratic equations' },
        { term: 'Discriminant', definition: 'b² - 4ac; tells us how many solutions exist' },
        { term: 'Projectile Motion', definition: 'The curved path of objects under gravity' }
      ],

      quiz: [
        {
          question: 'What is the highest power in a quadratic equation?',
          options: ['1', '2', '3', '4'],
          correct: 1
        },
        {
          question: 'Solve: x² - 4 = 0',
          options: ['x = ±1', 'x = ±2', 'x = ±3', 'x = ±4'],
          correct: 1
        },
        {
          question: 'An object falls: s = 80 - 5t². When does it hit ground?',
          options: ['2 s', '4 s', '6 s', '8 s'],
          correct: 1
        },
        {
          question: 'In ax² + bx + c = 0, what is the quadratic formula?',
          options: [
            'x = -b/2a',
            'x = [-b ± √(b² - 4ac)] / 2a',
            'x = b² - 4ac',
            'x = a + b + c'
          ],
          correct: 1
        },
        {
          question: 'A rocket: h = -5t² + 30t. When is it at max height?',
          options: ['t = 2 s', 't = 3 s', 't = 4 s', 't = 5 s'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 4: Systems of Equations
  {
    id: 4,
    title: 'Systems of Equations (2-3 unknowns)',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 4,
    emoji: '🟢',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Learn to solve multiple equations with multiple unknowns - essential for circuits, forces, and complex systems.',

      sections: [
        {
          title: '🧠 What is a System of Equations?',
          type: 'concept',
          content: `A system has multiple equations with multiple unknowns:

Example with 2 variables:
x + y = 10
2x - y = 5

We need to find values of x and y that satisfy BOTH equations.

Real Engineering Examples:
• Circuit analysis: multiple currents and voltages
• Force balance: thrust vs drag, lift vs weight
• Chemical reactions: multiple reactants and products

Why Systems Matter:
Most real engineering problems have multiple constraints and multiple unknowns!`
        },
        {
          title: '🔧 Solving Methods',
          type: 'concept',
          content: `Method 1: Substitution
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable

Example:
x + y = 10  →  y = 10 - x
2x - y = 5  →  2x - (10 - x) = 5
                2x - 10 + x = 5
                3x = 15
                x = 5
Then: y = 10 - 5 = 5

Method 2: Elimination
1. Multiply equations to make coefficients match
2. Add or subtract to eliminate one variable
3. Solve for remaining variable

Example:
x + y = 10
2x - y = 5
Add them: 3x = 15, so x = 5
Then: 5 + y = 10, so y = 5`
        },
        {
          title: '🧮 Practice Zone: Engineering Systems',
          type: 'practice',
          content: `Problem 1: Thrust and Drag Balance
A plane has thrust T and drag D:
T - D = 1000 (net force)
T + D = 6000 (total forces)

Add equations: 2T = 7000, T = 3500 N
Subtract: 2D = 5000, D = 2500 N

Problem 2: Circuit with Two Currents
I₁ + I₂ = 5 A (total current)
2I₁ + 3I₂ = 12 (voltage equation)

From first: I₁ = 5 - I₂
Substitute: 2(5 - I₂) + 3I₂ = 12
           10 - 2I₂ + 3I₂ = 12
           I₂ = 2 A
           I₁ = 3 A

Problem 3: Mixture Problem
x + y = 100 (total volume)
0.2x + 0.5y = 35 (concentration)

Solve to find x and y!`
        },
        {
          title: '🧩 Interactive Challenge: Robot Navigation',
          type: 'simulation',
          content: `Scenario: A robot moves in 2D space

The robot's position after time t:
x-direction: 3t + 2s = 20
y-direction: 2t + s = 12

Where t = time forward, s = time sideways

Question 1: Find t and s
From second equation: s = 12 - 2t
Substitute: 3t + 2(12 - 2t) = 20
           3t + 24 - 4t = 20
           -t = -4
           t = 4 seconds
           s = 12 - 8 = 4 seconds

Question 2: Three Forces on a Rocket
Fx + Fy = 100
2Fx - Fy = 50
Fx + 2Fy = 120

Can you solve this 3-equation system?
(Hint: Use elimination twice!)`
        }
      ],

      keyTakeaways: [
        'Systems of equations have multiple unknowns and multiple constraints',
        'Use substitution or elimination to solve',
        'Check your solution in ALL original equations',
        'Real engineering often involves 3+ equations with 3+ unknowns'
      ],

      vocabulary: [
        { term: 'System of Equations', definition: 'Multiple equations that must all be true simultaneously' },
        { term: 'Substitution', definition: 'Solving one equation for a variable, then replacing it in another' },
        { term: 'Elimination', definition: 'Adding or subtracting equations to remove a variable' },
        { term: 'Solution', definition: 'Values that satisfy all equations in the system' }
      ],

      quiz: [
        {
          question: 'How many equations do you need to solve for 2 unknowns?',
          options: ['1', '2', '3', '4'],
          correct: 1
        },
        {
          question: 'Solve: x + y = 8 and x - y = 2',
          options: ['x=4, y=4', 'x=5, y=3', 'x=6, y=2', 'x=3, y=5'],
          correct: 1
        },
        {
          question: 'In elimination method, what do we do first?',
          options: [
            'Solve for x',
            'Make coefficients of one variable match',
            'Substitute',
            'Graph the equations'
          ],
          correct: 1
        },
        {
          question: 'If 2x + y = 10 and x + y = 7, what is x?',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
          correct: 1
        },
        {
          question: 'Why are systems important in engineering?',
          options: [
            'They are not important',
            'Real problems have multiple constraints',
            'They are easier than single equations',
            'They only work in math class'
          ],
          correct: 1
        }
      ]
    }
  },

  // LESSON 5: Exponents & Powers
  {
    id: 5,
    title: 'Exponents, Powers & Roots',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 5,
    emoji: '🟢',
    level: 'Beginner',
    duration: '18 min',
    content: {
      introduction: 'Master exponents and powers - critical for understanding exponential growth, decay, and energy calculations.',

      sections: [
        {
          title: '🧠 What Are Exponents?',
          type: 'concept',
          content: `An exponent tells us how many times to multiply a number by itself:

x^n means x × x × x... (n times)

Examples:
• 2³ = 2 × 2 × 2 = 8
• 5² = 5 × 5 = 25
• 10⁴ = 10 × 10 × 10 × 10 = 10,000

Key Terms:
• Base: the number being multiplied (2 in 2³)
• Exponent/Power: how many times (3 in 2³)
• Result: the answer (8)

Special Cases:
• x¹ = x (anything to power 1 is itself)
• x⁰ = 1 (anything to power 0 is 1)
• x⁻¹ = 1/x (negative exponent means reciprocal)`
        },
        {
          title: '🔧 Exponent Rules',
          type: 'concept',
          content: `Essential Rules for Engineering:

1. Multiplication: x^a × x^b = x^(a+b)
   Example: 2³ × 2² = 2⁵ = 32

2. Division: x^a ÷ x^b = x^(a-b)
   Example: 5⁴ ÷ 5² = 5² = 25

3. Power of Power: (x^a)^b = x^(a×b)
   Example: (3²)³ = 3⁶ = 729

4. Power of Product: (xy)^a = x^a × y^a
   Example: (2×3)² = 2² × 3² = 4 × 9 = 36

5. Roots: x^(1/n) = ⁿ√x
   Example: 16^(1/2) = √16 = 4

Engineering Applications:
• Energy: E = mc² (speed of light squared!)
• Area: A = πr² (radius squared)
• Volume: V = r³ (radius cubed)`
        },
        {
          title: '🧮 Practice Zone: Growth and Decay',
          type: 'practice',
          content: `Problem 1: Exponential Growth
A bacteria population doubles every hour:
P(t) = P₀ × 2^t

Starting with 100 bacteria, how many after 5 hours?
P(5) = 100 × 2⁵ = 100 × 32 = 3,200 bacteria

Problem 2: Fuel Decay
A rocket's fuel decreases by half every minute:
F(t) = F₀ × (1/2)^t = F₀ × 2^(-t)

Starting with 1000 kg, how much after 3 minutes?
F(3) = 1000 × (1/2)³ = 1000 × 0.125 = 125 kg

Problem 3: Acceleration
A car accelerates: v = v₀ + at
If a = 2 m/s² and t = 4 s, starting from rest:
v = 0 + 2(4) = 8 m/s

Distance: s = ½at² = ½(2)(4²) = ½(2)(16) = 16 m`
        },
        {
          title: '🧩 Interactive Challenge: Compound Interest',
          type: 'simulation',
          content: `Engineering Investment Scenario:

You invest in a robotics startup. The value grows by 20% per year.
Formula: V = V₀(1.2)^t

Starting investment: $10,000

Year 1: V = 10,000(1.2)¹ = $12,000
Year 2: V = 10,000(1.2)² = $14,400
Year 3: V = 10,000(1.2)³ = $17,280
Year 5: V = 10,000(1.2)⁵ = $24,883

Challenge Questions:
1. How much after 10 years?
2. When does it double? (Solve: 20,000 = 10,000(1.2)^t)
3. If it grows 30% per year instead, what's the 5-year value?

Real Engineering:
• Battery capacity decay: C = C₀(0.95)^t
• Signal strength: S = S₀(0.5)^(d/100)
• Moore's Law: transistors double every 2 years!`
        }
      ],

      keyTakeaways: [
        'Exponents represent repeated multiplication',
        'Learn the 5 key exponent rules for calculations',
        'Exponential growth/decay appears everywhere in engineering',
        'Negative exponents mean reciprocals, fractional exponents mean roots'
      ],

      vocabulary: [
        { term: 'Exponent', definition: 'The power to which a number is raised (the small number)' },
        { term: 'Base', definition: 'The number being multiplied repeatedly' },
        { term: 'Exponential Growth', definition: 'When something increases by a constant percentage' },
        { term: 'Exponential Decay', definition: 'When something decreases by a constant percentage' }
      ],

      quiz: [
        {
          question: 'What is 2⁴?',
          options: ['8', '12', '16', '24'],
          correct: 2
        },
        {
          question: 'Simplify: x³ × x²',
          options: ['x⁵', 'x⁶', 'x⁹', '2x⁵'],
          correct: 0
        },
        {
          question: 'What is 10⁰?',
          options: ['0', '1', '10', 'undefined'],
          correct: 1
        },
        {
          question: 'A population doubles every year. Starting with 50, how many after 3 years?',
          options: ['150', '200', '300', '400'],
          correct: 3
        },
        {
          question: 'What does x⁻² equal?',
          options: ['-x²', '1/x²', '-2x', '2/x'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 6: Logarithms
  {
    id: 6,
    title: 'Logarithms (sensors, sound, drag)',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 6,
    emoji: '🟢',
    level: 'Beginner',
    duration: '20 min',
    content: {
      introduction: 'Understand logarithms - the inverse of exponents, used in decibels, pH, earthquakes, and sensor readings.',

      sections: [
        {
          title: '🧠 What is a Logarithm?',
          type: 'concept',
          content: `A logarithm answers the question: "What power do I need?"

If 2^x = 8, then x = log₂(8) = 3

Definition: log_b(x) = y means b^y = x

Common Logarithms:
• log₁₀(x) or log(x) - base 10 (most common)
• ln(x) - natural log, base e ≈ 2.718
• log₂(x) - base 2 (computers, binary)

Examples:
• log₁₀(100) = 2 because 10² = 100
• log₁₀(1000) = 3 because 10³ = 1000
• ln(e) = 1 because e¹ = e
• log₂(8) = 3 because 2³ = 8

Key Insight: Logarithms turn multiplication into addition!`
        },
        {
          title: '🔧 Logarithm Rules & Properties',
          type: 'concept',
          content: `Essential Rules:

1. Product Rule: log(xy) = log(x) + log(y)
   Example: log(100) = log(10×10) = log(10) + log(10) = 1 + 1 = 2

2. Quotient Rule: log(x/y) = log(x) - log(y)
   Example: log(100/10) = log(100) - log(10) = 2 - 1 = 1

3. Power Rule: log(x^n) = n × log(x)
   Example: log(10³) = 3 × log(10) = 3 × 1 = 3

4. Change of Base: log_b(x) = log(x) / log(b)

5. Inverse Property: log(10^x) = x and 10^(log x) = x

Special Values:
• log(1) = 0 (any base)
• log(10) = 1 (base 10)
• log(0) = undefined
• log(negative) = undefined (in real numbers)`
        },
        {
          title: '🧮 Practice Zone: Real Engineering Applications',
          type: 'practice',
          content: `Problem 1: Sound Levels (Decibels)
Decibels: dB = 10 × log₁₀(I/I₀)

A sound is 1000 times more intense than threshold I₀.
dB = 10 × log₁₀(1000) = 10 × 3 = 30 dB

Problem 2: Earthquake Magnitude (Richter Scale)
M = log₁₀(A/A₀)

An earthquake has amplitude 10,000 times the reference:
M = log₁₀(10,000) = 4 (magnitude 4 earthquake)

Problem 3: pH Scale (Chemistry)
pH = -log₁₀[H⁺]

If [H⁺] = 0.001 = 10⁻³:
pH = -log₁₀(10⁻³) = -(-3) = 3 (acidic)

Problem 4: Signal Strength
Power ratio in dB = 10 × log₁₀(P₁/P₂)

If P₁ = 100W and P₂ = 1W:
dB = 10 × log₁₀(100) = 10 × 2 = 20 dB`
        },
        {
          title: '🧩 Interactive Challenge: Sensor Calibration',
          type: 'simulation',
          content: `Scenario: Calibrating a Pressure Sensor

Sensor output follows logarithmic scale:
V = 2 + 3×log₁₀(P)

Where V = voltage, P = pressure in kPa

Question 1: What voltage at P = 100 kPa?
V = 2 + 3×log₁₀(100) = 2 + 3×2 = 8 volts

Question 2: If V = 5 volts, what is the pressure?
5 = 2 + 3×log₁₀(P)
3 = 3×log₁₀(P)
log₁₀(P) = 1
P = 10¹ = 10 kPa

Question 3: Doubling Pressure
If pressure doubles from P to 2P, how much does voltage change?
ΔV = 3×log₁₀(2P) - 3×log₁₀(P)
ΔV = 3×[log₁₀(2) + log₁₀(P) - log₁₀(P)]
ΔV = 3×log₁₀(2) ≈ 3×0.301 ≈ 0.9 volts

Challenge: Design your own logarithmic sensor!`
        }
      ],

      keyTakeaways: [
        'Logarithms are the inverse of exponents',
        'Used in decibels (sound), pH (chemistry), Richter scale (earthquakes)',
        'Logarithms compress large ranges into manageable scales',
        'Product rule: log(xy) = log(x) + log(y) is extremely useful'
      ],

      vocabulary: [
        { term: 'Logarithm', definition: 'The power to which a base must be raised to get a number' },
        { term: 'Decibel (dB)', definition: 'Logarithmic unit for sound intensity and power ratios' },
        { term: 'Natural Log (ln)', definition: 'Logarithm with base e ≈ 2.718' },
        { term: 'Common Log', definition: 'Logarithm with base 10, written as log(x)' }
      ],

      quiz: [
        {
          question: 'What is log₁₀(1000)?',
          options: ['2', '3', '4', '10'],
          correct: 1
        },
        {
          question: 'If 10^x = 100, what is x?',
          options: ['1', '2', '3', '10'],
          correct: 1
        },
        {
          question: 'Sound intensity increases 100×. How many dB increase?',
          options: ['10 dB', '20 dB', '50 dB', '100 dB'],
          correct: 1
        },
        {
          question: 'Simplify: log(x) + log(y)',
          options: ['log(x+y)', 'log(xy)', 'log(x/y)', 'log(x-y)'],
          correct: 1
        },
        {
          question: 'What is log₁₀(1)?',
          options: ['-1', '0', '1', 'undefined'],
          correct: 1
        }
      ]
    }
  },

];

export default unit1Lessons;
