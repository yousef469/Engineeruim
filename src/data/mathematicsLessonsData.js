// Mathematics Engineering Lessons Data
const mathematicsLessons = [
  // LESSON 0: Variables, Units & Symbols
  {
    id: 0,
    title: 'Variables, Units & Symbols',
    unit: 'Algebra & Equations',
    unitNumber: 1,
    lessonNumber: 1,
    emoji: '🟢',
    level: 'Beginner',
    duration: '15 min',
    content: {
      introduction: 'Learn the fundamental language of engineering: variables, physical quantities, and why units are critical in every calculation.',
      
      sections: [
        {
          title: '🧠 What Are Variables and Physical Quantities?',
          type: 'concept',
          content: `In engineering, we work with physical quantities that describe the world around us:

• Mass (m) - measured in kilograms (kg)
• Force (F) - measured in Newtons (N)
• Velocity (v) - measured in meters per second (m/s)
• Time (t) - measured in seconds (s)
• Distance (d or s) - measured in meters (m)

Variables are symbols (like m, F, v) that represent these quantities. They let us write formulas that work for any value.

Example: Distance = Speed × Time
Written as: d = v × t

This formula works whether you're calculating how far a car travels or how far a rocket flies!`
        },
        {
          title: '⚠️ Why Units Matter',
          type: 'concept',
          content: `Using the wrong units can cause disasters!

Real Example: NASA's Mars Climate Orbiter crashed in 1999 because one team used metric units (Newtons) and another used imperial units (pounds-force). Cost: $327 million!

Key Rules:
1. Always write units with your numbers: 50 m/s (not just 50)
2. Convert all values to the same unit system before calculating
3. Check that your answer's units make sense

Common Conversions:
• 1 km = 1000 m
• 1 hour = 3600 seconds
• 1 km/h = 0.278 m/s`
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

  // LESSON 1: Linear Equations
  {
    id: 1,
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

  // LESSON 2: Quadratic Equations
  {
    id: 2,
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

  // LESSON 3: Systems of Equations
  {
    id: 3,
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

  // LESSON 4: Exponents & Powers
  {
    id: 4,
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

  // LESSON 5: Logarithms
  {
    id: 5,
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

export default mathematicsLessons;
