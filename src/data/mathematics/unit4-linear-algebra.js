// Unit 4: Linear Algebra Intro (Lessons 18-21) - FULLY ENHANCED
export const unit4Lessons = [
  // LESSON 18: Vectors & Matrices
  {
    id: 18,
    title: 'Vectors & Matrices - Data Containers',
    unit: 'Linear Algebra Intro',
    unitNumber: 4,
    lessonNumber: 18,
    emoji: '🟠',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Vectors and matrices are like super-powered lists! They store data and help solve complex engineering problems. Think of them as containers for robot positions, forces, and transformations!',
      
      sections: [
        {
          title: '🧠 What are Vectors? - Lists with Purpose',
          type: 'concept',
          content: `Vectors are ordered lists of numbers - like coordinates on steroids!

🎯 VECTOR AS POSITION:

Robot position in 3D space:
v = [x, y, z] = [5, 3, 2]

This means:
• 5 meters right
• 3 meters forward
• 2 meters up

📊 VECTOR NOTATION:

Column vector (vertical):
    [5]
v = [3]
    [2]

Row vector (horizontal):
v = [5, 3, 2]

Both represent the same data!

💡 REAL-WORLD EXAMPLES:

1. Drone Position:
   position = [100, 50, 25] meters
   (east, north, altitude)

2. RGB Color:
   red = [255, 0, 0]
   green = [0, 255, 0]
   blue = [0, 0, 255]

3. Force Vector:
   F = [10, 20, 5] Newtons
   (x-force, y-force, z-force)

4. Velocity:
   v = [15, 0, -5] m/s
   (moving right, not forward, falling)

🔧 VECTOR OPERATIONS:

Addition (component-wise):
[2]   [3]   [5]
[4] + [1] = [5]
[6]   [2]   [8]

Scalar Multiplication:
    [2]   [6]
3 × [4] = [12]
    [1]   [3]

Multiply each component by 3!`
        },
        {
          title: '🔧 What are Matrices? - Tables of Data',
          type: 'concept',
          content: `Matrices are rectangular arrays of numbers - like spreadsheets!

📊 MATRIX STRUCTURE:

A 2×3 matrix (2 rows, 3 columns):

    [1  2  3]
A = [4  5  6]

Read as: "A is a 2 by 3 matrix"

💡 REAL-WORLD EXAMPLES:

1. Rotation Matrix (2D):
   R = [cos(θ)  -sin(θ)]
       [sin(θ)   cos(θ)]
   
   Rotates points around origin!

2. Robot Joint Angles:
       [Joint1  Joint2  Joint3]
   A = [  30°     45°     60°  ]
       [  20°     50°     70°  ]
   
   Two different poses!

3. Image Data:
   Each pixel has RGB values
   Image = matrix of color vectors!

🎯 MATRIX DIMENSIONS:

m × n matrix:
• m = number of rows
• n = number of columns

Examples:
• 2×2 matrix: [a b]
              [c d]

• 3×1 matrix (column vector): [x]
                               [y]
                               [z]

• 1×3 matrix (row vector): [x y z]

🔧 SPECIAL MATRICES:

Identity Matrix (like multiplying by 1):
    [1  0  0]
I = [0  1  0]
    [0  0  1]

Zero Matrix (like adding 0):
    [0  0]
O = [0  0]

Square Matrix (rows = columns):
    [1  2]
A = [3  4]`
        },
        {
          title: '🧮 Practice: Creating Vectors & Matrices',
          type: 'practice',
          content: `Let's create vectors and matrices for real scenarios!

PROBLEM 1: Robot Position Vector
Robot is at:
• 10 meters east
• 5 meters north  
• 3 meters high

Create position vector:
p = [10, 5, 3]

Or as column vector:
    [10]
p = [ 5]
    [ 3]

PROBLEM 2: Force Vectors
Two forces act on a box:
F1 = [20, 10] N (right and up)
F2 = [5, -15] N (right and down)

Total force:
F_total = F1 + F2
F_total = [20+5, 10+(-15)]
F_total = [25, -5] N

Box moves right and slightly down!

PROBLEM 3: Transformation Matrix
Create a 2×2 scaling matrix that doubles x and triples y:

    [2  0]
S = [0  3]

When applied to point (1, 1):
Result = (2, 3)

PROBLEM 4: Data Matrix
Store 3 robot positions:
Robot 1: (0, 0, 0)
Robot 2: (5, 3, 2)
Robot 3: (10, 6, 4)

    [0   0   0]
P = [5   3   2]
    [10  6   4]

Each row is one robot's position!`
        },
        {
          title: '🧩 Challenge: Robot Fleet Management',
          type: 'simulation',
          content: `Manage a fleet of drones using vectors!

SCENARIO:
You have 4 drones in 3D space

CHALLENGE 1: Create position matrix
Drone 1: (0, 0, 10)
Drone 2: (5, 5, 15)
Drone 3: (10, 0, 20)
Drone 4: (5, 10, 12)

    [ 0   0  10]
P = [ 5   5  15]
    [10   0  20]
    [ 5  10  12]

Each row = one drone's position!

CHALLENGE 2: Move all drones
Command: Move 3m east, 2m north, 5m up
Movement vector: v = [3, 2, 5]

Add v to each row:
    [ 3   2  15]
P = [ 8   7  20]
    [13   2  25]
    [ 8  12  17]

All drones moved together!

CHALLENGE 3: Find center position
Average all positions:
x_avg = (3+8+13+8)/4 = 8
y_avg = (2+7+2+12)/4 = 5.75
z_avg = (15+20+25+17)/4 = 19.25

Center = [8, 5.75, 19.25]

CHALLENGE 4: Create velocity matrix
Each drone has velocity:
Drone 1: [2, 0, 1] m/s
Drone 2: [1, 1, 0] m/s
Drone 3: [0, 2, -1] m/s
Drone 4: [1, 0, 2] m/s

    [2  0   1]
V = [1  1   0]
    [0  2  -1]
    [1  0   2]

YOUR MISSION:
1. Predict positions after 5 seconds
2. Which drone is fastest?
3. Create a formation matrix!`
        }
      ],
      
      keyTakeaways: [
        'Vectors are ordered lists of numbers',
        'Matrices are rectangular arrays (tables) of numbers',
        'Vectors store positions, forces, velocities',
        'Matrices store transformations and multiple data points',
        'Dimensions: m×n means m rows, n columns'
      ],
      
      vocabulary: [
        { term: 'Vector', definition: 'Ordered list of numbers; represents position, force, or direction' },
        { term: 'Matrix', definition: 'Rectangular array of numbers arranged in rows and columns' },
        { term: 'Dimension', definition: 'Size of matrix (rows × columns) or length of vector' },
        { term: 'Component', definition: 'Individual number in a vector or matrix' },
        { term: 'Column Vector', definition: 'Vector written vertically' },
        { term: 'Row Vector', definition: 'Vector written horizontally' }
      ],
      
      quiz: [
        {
          question: 'A vector [5, 3, 2] has how many components?',
          options: ['1', '2', '3', '4'],
          correct: 2
        },
        {
          question: 'A 3×2 matrix has:',
          options: ['3 rows, 2 columns', '2 rows, 3 columns', '6 rows', '5 total'],
          correct: 0
        },
        {
          question: 'Robot at (10, 5, 3) moves by [2, 1, 0]. New position?',
          options: ['(8, 4, 3)', '(12, 6, 3)', '(10, 5, 3)', '(20, 5, 0)'],
          correct: 1
        },
        {
          question: 'What does a position vector store?',
          options: ['Time', 'Color', 'Location coordinates', 'Temperature'],
          correct: 2
        },
        {
          question: 'Identity matrix is like:',
          options: ['Adding zero', 'Multiplying by one', 'Subtracting', 'Dividing'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 19: Matrix Operations
  {
    id: 19,
    title: 'Matrix Operations - Addition, Multiplication & Scaling',
    unit: 'Linear Algebra Intro',
    unitNumber: 4,
    lessonNumber: 19,
    emoji: '🟠',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn to add, multiply, and scale matrices! These operations power computer graphics, robotics, and AI. Master the math that moves objects and transforms data!',
      
      sections: [
        {
          title: '🧠 Matrix Addition - Combining Data',
          type: 'concept',
          content: `Add matrices component by component - like adding vectors!

📊 THE RULE:
Matrices must have SAME dimensions to add!

🎯 EXAMPLE: 2×2 Matrices

    [1  2]   [5  6]   [1+5  2+6]   [6   8]
A = [3  4] + [7  8] = [3+7  4+8] = [10  12]

Step-by-step:
1. Add top-left: 1+5 = 6
2. Add top-right: 2+6 = 8
3. Add bottom-left: 3+7 = 10
4. Add bottom-right: 4+8 = 12

💡 REAL EXAMPLE: Robot Forces

Force from Motor 1:    Force from Motor 2:
    [10  5]                [2   3]
F1= [3   8]            F2= [4   1]

Total Force:
       [10+2  5+3]   [12  8]
F_total=[3+4   8+1] = [7   9]

🔧 SCALAR MULTIPLICATION:
Multiply every element by a number!

    [1  2]       [3   6]
3 × [3  4]  =    [9  12]

Multiply each by 3!

Example: Double all forces
    [10  5]      [20  10]
2 × [3   8]  =   [6   16]`
        },
        {
          title: '🔧 Matrix Multiplication - The Power Operation',
          type: 'concept',
          content: `Matrix multiplication is different - it combines transformations!

📐 THE RULE:
To multiply A×B:
• Columns of A must equal rows of B
• Result has rows of A, columns of B

🎯 STEP-BY-STEP EXAMPLE:

    [1  2]       [5  6]
A = [3  4]   B = [7  8]

Calculate A×B:

Top-left: (1×5 + 2×7) = 5+14 = 19
Top-right: (1×6 + 2×8) = 6+16 = 22
Bottom-left: (3×5 + 4×7) = 15+28 = 43
Bottom-right: (3×6 + 4×8) = 18+32 = 50

Result:
      [19  22]
A×B = [43  50]

💡 VISUAL METHOD:

Row 1 of A × Column 1 of B:
[1  2] × [5] = 1×5 + 2×7 = 19
             [7]

Row 1 of A × Column 2 of B:
[1  2] × [6] = 1×6 + 2×8 = 22
             [8]

🔧 ROTATION EXAMPLE:

Rotate point (1, 0) by 90°:

R = [0  -1]  Point = [1]
    [1   0]          [0]

R × Point = [0×1 + (-1)×0] = [0]
            [1×1 +   0×0]    [1]

Point moved from (1,0) to (0,1)!
Rotated 90° counterclockwise!`
        },
        {
          title: '🧮 Practice: Matrix Operations',
          type: 'practice',
          content: `Let's practice matrix operations!

PROBLEM 1: Add Position Matrices
Current positions:    Movement:
    [0  0]               [2  1]
P = [5  3]           M = [1  2]

New positions:
       [0+2  0+1]   [2  1]
P_new =[5+1  3+2] = [6  5]

PROBLEM 2: Scale a Transformation
Original scaling:
    [2  0]
S = [0  3]

Double the scaling:
      [4  0]
2S =  [0  6]

Now scales 4x in x, 6x in y!

PROBLEM 3: Multiply Rotation Matrices
Rotate 90° twice = 180° rotation

    [0  -1]       [0  -1]
R = [1   0]   R = [1   0]

R×R = [0×0+(-1)×1  0×(-1)+(-1)×0]
      [1×0+  0×1   1×(-1)+ 0×0]

R×R = [-1   0]
      [ 0  -1]

This flips both x and y! (180° rotation)

PROBLEM 4: Transform a Point
Point: (2, 3)
Scale by 2 in x, 3 in y:

    [2  0]   [2]   [4]
S = [0  3] × [3] = [9]

New point: (4, 9)
x doubled, y tripled!`
        },
        {
          title: '🧩 Challenge: Rotation Visualization',
          type: 'simulation',
          content: `Rotate objects using matrices!

SCENARIO: Rotate a square

Square corners:
A = (1, 0)
B = (1, 1)
C = (0, 1)
D = (0, 0)

CHALLENGE 1: Rotate 90° counterclockwise
Rotation matrix:
    [0  -1]
R = [1   0]

Point A: (1, 0)
    [0  -1]   [1]   [0]
R × [1   0] × [0] = [1]
New A = (0, 1)

Point B: (1, 1)
    [0  -1]   [1]   [-1]
R × [1   0] × [1] = [ 1]
New B = (-1, 1)

Continue for C and D!

CHALLENGE 2: Rotate 45°
    [0.707  -0.707]
R = [0.707   0.707]

Apply to all corners!

CHALLENGE 3: Scale then Rotate
First scale by 2:
    [2  0]
S = [0  2]

Then rotate 90°:
    [0  -1]
R = [1   0]

Combined: R×S
    [0  -2]
  = [2   0]

Apply to point (1, 0):
Result = (0, 2)

YOUR MISSION:
1. Rotate a triangle by 60°
2. Scale a rectangle by (3, 2)
3. Combine: scale then rotate!
4. Create your own transformation!`
        }
      ],
      
      keyTakeaways: [
        'Add matrices component by component (same dimensions)',
        'Scalar multiplication: multiply every element',
        'Matrix multiplication: row × column',
        'Rotation matrices transform points',
        'Order matters: A×B ≠ B×A usually'
      ],
      
      vocabulary: [
        { term: 'Matrix Addition', definition: 'Adding corresponding elements of two matrices' },
        { term: 'Scalar Multiplication', definition: 'Multiplying every matrix element by a number' },
        { term: 'Matrix Multiplication', definition: 'Combining matrices using row-column products' },
        { term: 'Transformation', definition: 'Operation that changes position, size, or orientation' },
        { term: 'Rotation Matrix', definition: 'Matrix that rotates points around origin' }
      ],
      
      quiz: [
        {
          question: '[1 2] + [3 4] = ?',
          options: ['[4 6]', '[3 8]', '[4 8]', '[1 6]'],
          correct: 0
        },
        {
          question: '2 × [1 2; 3 4] = ?',
          options: ['[2 4; 6 8]', '[3 4; 5 6]', '[1 2; 3 4]', '[2 2; 6 6]'],
          correct: 0
        },
        {
          question: 'To multiply A×B, columns of A must equal:',
          options: ['Columns of B', 'Rows of B', 'Elements of B', 'Dimensions of B'],
          correct: 1
        },
        {
          question: 'Rotation matrix rotates points around:',
          options: ['Any point', 'Origin', 'Center', 'Edge'],
          correct: 1
        },
        {
          question: '[2 0; 0 3] × [1; 1] = ?',
          options: ['[2; 3]', '[1; 1]', '[3; 4]', '[2; 2]'],
          correct: 0
        }
      ]
    }
  },

  // LESSON 20: Solving Ax = b
  {
    id: 20,
    title: 'Solving Systems - The Matrix Way',
    unit: 'Linear Algebra Intro',
    unitNumber: 4,
    lessonNumber: 20,
    emoji: '🟠',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Solve multiple equations at once using matrices! From force balance to circuit analysis, learn the powerful Ax=b method that engineers use every day.',
      
      sections: [
        {
          title: '🧠 What is Ax = b? - Systems as Matrices',
          type: 'concept',
          content: `Turn systems of equations into matrix form!

🎯 TRADITIONAL SYSTEM:
2x + 3y = 8
4x + y = 10

🔧 MATRIX FORM: Ax = b

    [2  3]   [x]   [8]
A = [4  1] × [y] = [10]

Where:
• A = coefficient matrix
• x = variables (what we solve for)
• b = constants (right side)

💡 WHY USE MATRICES?

1. Organize complex systems
2. Use computer algorithms
3. Solve many equations at once
4. Standard engineering method

📊 STEP-BY-STEP CONVERSION:

System:
x + 2y = 5
3x - y = 4

Step 1: Write coefficients in A
    [1   2]
A = [3  -1]

Step 2: Write variables in x
    [x]
x = [y]

Step 3: Write constants in b
    [5]
b = [4]

Result: Ax = b
    [1   2]   [x]   [5]
    [3  -1] × [y] = [4]

🔧 SOLVING METHODS:

Method 1: Inverse Matrix
x = A⁻¹b

Method 2: Elimination
Reduce to simpler form

Method 3: Calculator/Computer
Let technology do the work!`
        },
        {
          title: '🔧 Solving 2×2 Systems',
          type: 'concept',
          content: `Let's solve Ax = b step by step!

PROBLEM: Force Balance
Two forces in equilibrium:
F1 + 2F2 = 10 N
3F1 - F2 = 5 N

Step 1: Write as Ax = b
    [1   2]   [F1]   [10]
    [3  -1] × [F2] = [ 5]

Step 2: Use elimination

From equation 1: F1 = 10 - 2F2
Substitute into equation 2:
3(10 - 2F2) - F2 = 5
30 - 6F2 - F2 = 5
30 - 7F2 = 5
7F2 = 25
F2 = 25/7 ≈ 3.57 N

Step 3: Find F1
F1 = 10 - 2(3.57)
F1 = 10 - 7.14
F1 = 2.86 N

Answer: F1 = 2.86 N, F2 = 3.57 N

✓ CHECK:
2.86 + 2(3.57) = 2.86 + 7.14 = 10 ✓
3(2.86) - 3.57 = 8.58 - 3.57 = 5.01 ≈ 5 ✓

🎯 USING INVERSE MATRIX:

For A = [1   2]
        [3  -1]

A⁻¹ = 1/(-7) × [-1  -2]
                [-3   1]

x = A⁻¹b = calculation gives same answer!`
        },
        {
          title: '🧮 Practice: Engineering Systems',
          type: 'practice',
          content: `Solve real engineering problems!

PROBLEM 1: 2-Force Balance
Horizontal: Fx + 2Fy = 12 N
Vertical: 3Fx - Fy = 6 N

Matrix form:
    [1   2]   [Fx]   [12]
    [3  -1] × [Fy] = [ 6]

Solution:
Fx = 4 N, Fy = 4 N

PROBLEM 2: Circuit Currents
Loop 1: 2I1 + I2 = 10 V
Loop 2: I1 + 3I2 = 11 V

Matrix form:
    [2  1]   [I1]   [10]
    [1  3] × [I2] = [11]

Solution:
I1 = 2.6 A, I2 = 2.8 A

PROBLEM 3: Robot Joint Angles
Constraint 1: θ1 + θ2 = 90°
Constraint 2: 2θ1 - θ2 = 30°

Matrix form:
    [1   1]   [θ1]   [90]
    [2  -1] × [θ2] = [30]

Solution:
θ1 = 40°, θ2 = 50°

PROBLEM 4: Material Mix
Mix A: 2x + y = 100 kg
Mix B: x + 3y = 150 kg

Matrix form:
    [2  1]   [x]   [100]
    [1  3] × [y] = [150]

Solution:
x = 30 kg, y = 40 kg`
        },
        {
          title: '🧩 Challenge: Complex Force System',
          type: 'simulation',
          content: `Solve a 3-force balance problem!

SCENARIO: Drone Hovering
Three motor forces must balance:

Horizontal balance:
F1 + F2 cos(45°) = 10 N

Vertical balance:
F3 + F2 sin(45°) = 20 N

Power constraint:
F1 + F2 + F3 = 40 N

CHALLENGE 1: Simplify
cos(45°) = sin(45°) = 0.707

F1 + 0.707F2 = 10
F3 + 0.707F2 = 20
F1 + F2 + F3 = 40

CHALLENGE 2: Matrix form
    [1    0.707   0]   [F1]   [10]
    [0    0.707   1] × [F2] = [20]
    [1    1       1]   [F3]   [40]

CHALLENGE 3: Solve using calculator
(This is a 3×3 system - use matrix calculator!)

Expected solution:
F1 ≈ 5.86 N
F2 ≈ 5.86 N
F3 ≈ 15.86 N

CHALLENGE 4: Verify
Check all three equations!

YOUR MISSION:
1. Set up a 4-force system
2. Write in matrix form
3. Solve using any method
4. Verify your solution!`
        }
      ],
      
      keyTakeaways: [
        'Ax = b represents systems of equations',
        'A = coefficients, x = variables, b = constants',
        'Solve using elimination, inverse, or calculator',
        'Used for force balance, circuits, constraints',
        'Matrix methods handle many equations efficiently'
      ],
      
      vocabulary: [
        { term: 'System of Equations', definition: 'Multiple equations with multiple unknowns' },
        { term: 'Coefficient Matrix', definition: 'Matrix A containing equation coefficients' },
        { term: 'Solution Vector', definition: 'Vector x containing the unknown values' },
        { term: 'Inverse Matrix', definition: 'Matrix A⁻¹ where A×A⁻¹ = I' },
        { term: 'Elimination', definition: 'Method of solving by removing variables' }
      ],
      
      quiz: [
        {
          question: 'In Ax = b, what does x represent?',
          options: ['Coefficients', 'Variables to solve', 'Constants', 'Matrix'],
          correct: 1
        },
        {
          question: 'System: x+y=5, 2x-y=4. What is matrix A?',
          options: ['[1 1; 2 -1]', '[5; 4]', '[x; y]', '[1 2; 1 -1]'],
          correct: 0
        },
        {
          question: 'To solve Ax=b using inverse: x = ?',
          options: ['Ab', 'A⁻¹b', 'bA⁻¹', 'A/b'],
          correct: 1
        },
        {
          question: 'Force balance uses Ax=b to find:',
          options: ['Time', 'Force magnitudes', 'Distance', 'Speed'],
          correct: 1
        },
        {
          question: 'A 3×3 system has how many equations?',
          options: ['2', '3', '6', '9'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 21: Transformations
  {
    id: 21,
    title: 'Transformations - Moving & Rotating Objects',
    unit: 'Linear Algebra Intro',
    unitNumber: 4,
    lessonNumber: 21,
    emoji: '🟠',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Bring objects to life! Learn how matrices move, rotate, and scale objects in 2D and 3D. This is the math behind video games, robotics, and computer graphics!',
      
      sections: [
        {
          title: '🧠 Types of Transformations',
          type: 'concept',
          content: `Transformations change position, size, or orientation!

🎯 THE BIG THREE:

1. TRANSLATION (Moving):
   Shift object by adding a vector
   
   Point: (2, 3)
   Move by: [5, 1]
   New point: (7, 4)

2. ROTATION (Spinning):
   Rotate around a point using matrix
   
   90° rotation matrix:
       [0  -1]
   R = [1   0]

3. SCALING (Resizing):
   Change size using matrix
   
   Scale 2x in x, 3x in y:
       [2  0]
   S = [0  3]

📊 VISUAL EXAMPLES:

Original square: corners at (0,0), (1,0), (1,1), (0,1)

After translation [2, 1]:
New corners: (2,1), (3,1), (3,2), (2,2)
Square moved right and up!

After 90° rotation:
New corners: (0,0), (0,1), (-1,1), (-1,0)
Square rotated counterclockwise!

After scaling [2, 2]:
New corners: (0,0), (2,0), (2,2), (0,2)
Square doubled in size!

💡 COMBINING TRANSFORMATIONS:

You can combine multiple transformations!

Example: Scale then rotate
1. Scale by 2: S = [2 0; 0 2]
2. Rotate 45°: R = [0.707 -0.707; 0.707 0.707]
3. Combined: T = R×S

Apply T to transform in one step!`
        },
        {
          title: '🔧 Rotation Matrices in Detail',
          type: 'concept',
          content: `Master rotation matrices!

📐 2D ROTATION BY ANGLE θ:

    [cos(θ)  -sin(θ)]
R = [sin(θ)   cos(θ)]

🎯 COMMON ROTATIONS:

30° rotation:
    [0.866  -0.5]
R = [0.5    0.866]

45° rotation:
    [0.707  -0.707]
R = [0.707   0.707]

90° rotation:
    [0  -1]
R = [1   0]

180° rotation:
    [-1   0]
R = [ 0  -1]

💡 ROTATING A POINT:

Point: (3, 0)
Rotate 90°:

    [0  -1]   [3]   [0]
R = [1   0] × [0] = [3]

Point moved from (3, 0) to (0, 3)!

🔧 3D ROTATIONS:

Around Z-axis (like 2D):
    [cos(θ)  -sin(θ)  0]
Rz= [sin(θ)   cos(θ)  0]
    [0        0       1]

Around X-axis:
    [1   0        0      ]
Rx= [0   cos(θ)  -sin(θ)]
    [0   sin(θ)   cos(θ)]

Around Y-axis:
    [cos(θ)   0   sin(θ)]
Ry= [0        1   0     ]
    [-sin(θ)  0   cos(θ)]`
        },
        {
          title: '🧮 Practice: Transform Objects',
          type: 'practice',
          content: `Apply transformations!

PROBLEM 1: Move a Car
Car at (10, 5)
Move 3m forward, 2m right: [3, 2]

New position:
(10+3, 5+2) = (13, 7)

PROBLEM 2: Rotate a Drone
Drone facing (1, 0) direction
Rotate 45° counterclockwise

    [0.707  -0.707]   [1]   [0.707]
R = [0.707   0.707] × [0] = [0.707]

New direction: (0.707, 0.707)
Now facing northeast!

PROBLEM 3: Scale a Rectangle
Rectangle: width=4, height=2
Scale by 1.5x

    [1.5  0]   [4]   [6]
S = [0    1.5] × [2] = [3]

New size: width=6, height=3

PROBLEM 4: Combined Transform
Point (2, 0)
1. Scale by 2
2. Rotate 90°

Step 1: Scale
    [2  0]   [2]   [4]
S = [0  2] × [0] = [0]

Step 2: Rotate
    [0  -1]   [4]   [0]
R = [1   0] × [0] = [4]

Final: (0, 4)`
        },
        {
          title: '🧩 Challenge: Interactive Model Movement',
          type: 'simulation',
          content: `Control a robot using transformations!

SCENARIO: Robot Navigation
Robot starts at origin (0, 0) facing right (1, 0)

CHALLENGE 1: Move Forward 5 units
Current position: (0, 0)
Direction: (1, 0)
Movement: 5 × (1, 0) = (5, 0)
New position: (0+5, 0+0) = (5, 0)

CHALLENGE 2: Rotate 90° Left
Current direction: (1, 0)
Rotation matrix (90°):
    [0  -1]
R = [1   0]

New direction:
    [0  -1]   [1]   [0]
R = [1   0] × [0] = [1]

Now facing up!

CHALLENGE 3: Move Forward 3 units
Current position: (5, 0)
Direction: (0, 1)
Movement: 3 × (0, 1) = (0, 3)
New position: (5, 0+3) = (5, 3)

CHALLENGE 4: Rotate 45° and Scale 2x
Combined transformation:
1. Rotate 45°
2. Scale by 2

Create combined matrix T = S×R!

CHALLENGE 5: Create Path
Design a sequence:
1. Move to (10, 0)
2. Rotate 60°
3. Move forward 5
4. Rotate -30°
5. Move forward 3

Calculate final position!

YOUR MISSION:
1. Create a square path
2. Use only rotations and forward movement
3. Return to start
4. Visualize the path!`
        }
      ],
      
      keyTakeaways: [
        'Translation = moving (add vector)',
        'Rotation = spinning (multiply by rotation matrix)',
        'Scaling = resizing (multiply by scale matrix)',
        'Combine transformations by multiplying matrices',
        'Used in games, robotics, graphics, CAD'
      ],
      
      vocabulary: [
        { term: 'Translation', definition: 'Moving an object by adding a vector' },
        { term: 'Rotation', definition: 'Spinning an object around a point' },
        { term: 'Scaling', definition: 'Changing the size of an object' },
        { term: 'Transformation Matrix', definition: 'Matrix that performs geometric transformation' },
        { term: 'Combined Transformation', definition: 'Multiple transformations applied in sequence' }
      ],
      
      quiz: [
        {
          question: 'Point (3, 2) translated by [1, 4] becomes:',
          options: ['(2, -2)', '(4, 6)', '(3, 8)', '(1, 4)'],
          correct: 1
        },
        {
          question: '90° rotation matrix is:',
          options: ['[1 0; 0 1]', '[0 -1; 1 0]', '[-1 0; 0 -1]', '[0 1; -1 0]'],
          correct: 1
        },
        {
          question: 'Scaling matrix [2 0; 0 3] does what?',
          options: ['Rotates', 'Moves', 'Scales 2x in x, 3x in y', 'Flips'],
          correct: 2
        },
        {
          question: 'To combine scale then rotate, multiply:',
          options: ['S+R', 'R×S', 'S×R', 'R/S'],
          correct: 1
        },
        {
          question: 'Translation is done by:',
          options: ['Matrix multiplication', 'Vector addition', 'Division', 'Subtraction'],
          correct: 1
        }
      ]
    }
  }
];

export default unit4Lessons;
