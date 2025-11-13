// Unit 4: Linear Algebra Intro (Lessons 18-21)
export const unit4Lessons = {
  18: {
    id: 18,
    title: 'Linear Algebra Intro: Vectors & Matrices',
    subtitle: 'Data Containers',
    description: 'Vectors and matrices are like super-powered lists! They store data and help solve complex engineering problems. Think of them as containers for robot positions, forces, and transformations',
    coreIdea: 'Vectors are ordered lists of numbers; matrices are rectangular arrays that store and transform data',
    engineeringExample: 'Robot positions, force vectors, transformations, image data',
    learningObjectives: [
      'Understand vectors as ordered lists of numbers',
      'Understand matrices as rectangular arrays of numbers',
      'Use vectors to store positions, forces, and velocities',
      'Use matrices to store transformations and multiple data points',
      'Understand matrix dimensions (rows × columns)'
    ],
    keyEquations: [
      { eq: '\\vec{v} = [x, y, z]', meaning: 'Vector notation (3D)' },
      { eq: 'A_{m \\times n}', meaning: 'Matrix dimensions: m rows, n columns' },
      { eq: '\\vec{v_1} + \\vec{v_2} = [x_1+x_2, y_1+y_2, z_1+z_2]', meaning: 'Vector addition (component-wise)' },
      { eq: 'k \\times \\vec{v} = [kx, ky, kz]', meaning: 'Scalar multiplication of vector' }
    ],
    practiceProblems: [
      {
        id: '4.18a',
        prompt: 'Robot is at: 10m east, 5m north, 3m high. Create position vector.',
        solution: 'Position vector: p = [10, 5, 3]\nOr as column vector:\n    [10]\np = [ 5]\n    [ 3]\nThis represents the robot\'s 3D position.',
        hints: ['Write coordinates in order: [x, y, z]', 'East = x, North = y, High = z', 'Vector stores all three coordinates']
      },
      {
        id: '4.18b',
        prompt: 'Two forces: F1 = [20, 10] N and F2 = [5, -15] N. Find total force.',
        solution: 'Total force = F1 + F2\nF_total = [20+5, 10+(-15)]\nF_total = [25, -5] N\nBox moves right and slightly down!',
        hints: ['Add vectors component-wise', 'x-components: 20+5=25', 'y-components: 10+(-15)=-5']
      },
      {
        id: '4.18c',
        prompt: 'Create a 2×2 scaling matrix that doubles x and triples y.',
        solution: 'Scaling matrix:\n    [2  0]\nS = [0  3]\nWhen applied to point (1, 1):\n    [2  0]   [1]   [2]\nS = [0  3] × [1] = [3]\nNew point: (2, 3)\nx doubled, y tripled!',
        hints: ['Diagonal matrix for scaling', 'First diagonal = x scaling', 'Second diagonal = y scaling']
      },
      {
        id: '4.18d',
        prompt: 'Store 3 robot positions: (0,0,0), (5,3,2), (10,6,4) in a matrix.',
        solution: 'Position matrix:\n    [0   0   0]\nP = [5   3   2]\n    [10  6   4]\nEach row represents one robot\'s position!\nRow 1 = Robot 1, Row 2 = Robot 2, Row 3 = Robot 3',
        hints: ['Each row = one robot position', 'Each column = one coordinate (x, y, z)', '3 rows × 3 columns matrix']
      }
    ],
    metadata: { difficulty: 'Easy', estTime: '25 min', tags: ['vectors', 'matrices', 'data-structures'] },
    content: {
      intro: 'Vectors and matrices are like super-powered lists! They store data and help solve complex engineering problems. Think of them as containers for robot positions, forces, and transformations! Vectors are ordered lists of numbers - like coordinates on steroids! Matrices are rectangular arrays of numbers - like spreadsheets!',
      concepts: [
        {
          title: '🧠 What are Vectors? - Lists with Purpose',
          explanation: 'Vectors are ordered lists of numbers - like coordinates on steroids! VECTOR AS POSITION: Robot position in 3D space: v = [x, y, z] = [5, 3, 2]. This means: 5 meters right, 3 meters forward, 2 meters up. VECTOR NOTATION: Column vector (vertical): v = [5; 3; 2]. Row vector (horizontal): v = [5, 3, 2]. Both represent the same data! REAL-WORLD EXAMPLES: 1. Drone Position: position = [100, 50, 25] meters (east, north, altitude). 2. RGB Color: red = [255, 0, 0], green = [0, 255, 0], blue = [0, 0, 255]. 3. Force Vector: F = [10, 20, 5] Newtons (x-force, y-force, z-force). 4. Velocity: v = [15, 0, -5] m/s (moving right, not forward, falling).',
          example: 'Robot position vector: [10, 5, 3] means 10m east, 5m north, 3m high. Force vector: [20, 10] N means 20N right, 10N up. Velocity vector: [15, 0, -5] m/s means moving right at 15 m/s and falling at 5 m/s.'
        },
        {
          title: '🔧 What are Matrices? - Tables of Data',
          explanation: 'Matrices are rectangular arrays of numbers - like spreadsheets! MATRIX STRUCTURE: A 2×3 matrix (2 rows, 3 columns): A = [1 2 3; 4 5 6]. Read as: "A is a 2 by 3 matrix". MATRIX DIMENSIONS: m × n matrix: m = number of rows, n = number of columns. Examples: 2×2 matrix: [a b; c d]. 3×1 matrix (column vector): [x; y; z]. 1×3 matrix (row vector): [x y z]. SPECIAL MATRICES: Identity Matrix (like multiplying by 1): I = [1 0 0; 0 1 0; 0 0 1]. Zero Matrix (like adding 0): O = [0 0; 0 0]. Square Matrix (rows = columns): A = [1 2; 3 4].',
          example: 'Rotation Matrix (2D): R = [cos(θ) -sin(θ); sin(θ) cos(θ)]. Rotates points around origin! Robot Joint Angles: A = [30° 45° 60°; 20° 50° 70°]. Two different poses stored in matrix! Image Data: Each pixel has RGB values. Image = matrix of color vectors!'
        },
        {
          title: '🧮 Vector Operations',
          explanation: 'VECTOR OPERATIONS: Addition (component-wise): [2; 4; 6] + [3; 1; 2] = [5; 5; 8]. Add corresponding components! Scalar Multiplication: 3 × [2; 4; 1] = [6; 12; 3]. Multiply each component by 3! REAL EXAMPLE: Robot Forces. Force from Motor 1: F1 = [10, 5; 3, 8]. Force from Motor 2: F2 = [2, 3; 4, 1]. Total Force: F_total = [12, 8; 7, 9]. Add component by component!',
          example: 'Vector addition: [2, 4, 6] + [3, 1, 2] = [5, 5, 8]. Scalar multiplication: 3 × [2, 4, 1] = [6, 12, 3]. Double all forces: 2 × [10, 5; 3, 8] = [20, 10; 6, 16].'
        }
      ],
      realWorld: [
        {
          icon: '🤖',
          title: 'Robot Positions',
          description: 'Robots use position vectors for navigation. Each robot has a 3D position vector [x, y, z]. Multiple robots stored in position matrix. Fleet management uses matrices. Coordinate transformations use vectors.'
        },
        {
          icon: '🚁',
          title: 'Drone Navigation',
          description: 'Drones use position vectors for GPS tracking. Position = [latitude, longitude, altitude]. Velocity vectors for flight control. Force vectors for motor control. Navigation systems use vectors extensively.'
        },
        {
          icon: '🎮',
          title: 'Computer Graphics',
          description: '3D graphics use vectors for vertices. Position vectors define object shapes. Color vectors define pixel colors. Transformation matrices rotate and scale objects. Game engines use matrices constantly.'
        },
        {
          icon: '🏗️',
          title: 'Structural Engineering',
          description: 'Engineers use force vectors for analysis. Multiple forces stored in matrices. Structural analysis uses vector operations. Load calculations use matrices. Design optimization uses linear algebra.'
        },
        {
          icon: '🖼️',
          title: 'Image Processing',
          description: 'Images stored as matrices. Each pixel = vector [R, G, B]. Image processing uses matrix operations. Filters use matrix multiplication. Computer vision uses linear algebra.'
        }
      ]
    }
  },
  19: {
    id: 19,
    title: 'Linear Algebra Intro: Matrix Operations',
    subtitle: 'Addition, Multiplication & Scaling',
    description: 'Learn to add, multiply, and scale matrices! These operations power computer graphics, robotics, and AI. Master the math that moves objects and transforms data',
    coreIdea: 'Matrix operations (addition, multiplication, scaling) enable transformations and data manipulation',
    engineeringExample: 'Computer graphics, robotics, AI, transformations',
    learningObjectives: [
      'Add matrices component by component',
      'Multiply matrices using row-column products',
      'Scale matrices by multiplying by scalars',
      'Apply matrix operations to transformations',
      'Combine multiple transformations'
    ],
    keyEquations: [
      { eq: 'A + B = [a_{ij} + b_{ij}]', meaning: 'Matrix addition (component-wise)' },
      { eq: 'kA = [ka_{ij}]', meaning: 'Scalar multiplication (multiply each element)' },
      { eq: '(AB)_{ij} = \\sum_k A_{ik}B_{kj}', meaning: 'Matrix multiplication (row × column)' },
      { eq: 'R(\\theta) = \\begin{bmatrix} \\cos(\\theta) & -\\sin(\\theta) \\\\ \\sin(\\theta) & \\cos(\\theta) \\end{bmatrix}', meaning: '2D rotation matrix' }
    ],
    practiceProblems: [
      {
        id: '4.19a',
        prompt: 'Add matrices: [1 2; 3 4] + [5 6; 7 8]',
        solution: 'Matrix addition (component-wise):\n    [1  2]   [5  6]   [1+5  2+6]   [6   8]\nA = [3  4] + [7  8] = [3+7  4+8] = [10  12]\nAdd corresponding elements!',
        hints: ['Add matrices component by component', 'Top-left: 1+5=6', 'Top-right: 2+6=8', 'Bottom-left: 3+7=10', 'Bottom-right: 4+8=12']
      },
      {
        id: '4.19b',
        prompt: 'Multiply matrices: [1 2; 3 4] × [5 6; 7 8]',
        solution: 'Matrix multiplication (row × column):\nTop-left: (1×5 + 2×7) = 5+14 = 19\nTop-right: (1×6 + 2×8) = 6+16 = 22\nBottom-left: (3×5 + 4×7) = 15+28 = 43\nBottom-right: (3×6 + 4×8) = 18+32 = 50\nResult: [19 22; 43 50]',
        hints: ['Multiply row by column', 'Top-left: row1 × col1', 'Top-right: row1 × col2', 'Bottom-left: row2 × col1', 'Bottom-right: row2 × col2']
      },
      {
        id: '4.19c',
        prompt: 'Scale matrix by 3: 3 × [1 2; 3 4]',
        solution: 'Scalar multiplication:\n    [1  2]       [3×1  3×2]   [3   6]\n3 × [3  4]  =   [3×3  3×4] = [9  12]\nMultiply every element by 3!',
        hints: ['Multiply every element by the scalar', 'Top-left: 3×1=3', 'Top-right: 3×2=6', 'Bottom-left: 3×3=9', 'Bottom-right: 3×4=12']
      },
      {
        id: '4.19d',
        prompt: 'Rotate point (1, 0) by 90° using rotation matrix.',
        solution: '90° rotation matrix:\n    [0  -1]\nR = [1   0]\n\nApply to point (1, 0):\n    [0  -1]   [1]   [0×1 + (-1)×0]   [0]\nR = [1   0] × [0] = [1×1 +   0×0] = [1]\n\nPoint moved from (1, 0) to (0, 1)!\nRotated 90° counterclockwise!',
        hints: ['Use rotation matrix for 90°', 'cos(90°)=0, sin(90°)=1', 'Multiply matrix by point vector', 'Result is new point position']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['matrix-operations', 'multiplication', 'transformations'] },
    content: {
      intro: 'Learn to add, multiply, and scale matrices! These operations power computer graphics, robotics, and AI. Master the math that moves objects and transforms data! Matrix addition combines data. Matrix multiplication combines transformations. Scalar multiplication scales everything.',
      concepts: [
        {
          title: '🧠 Matrix Addition - Combining Data',
          explanation: 'Add matrices component by component - like adding vectors! THE RULE: Matrices must have SAME dimensions to add! EXAMPLE: 2×2 Matrices. A = [1 2; 3 4] + [5 6; 7 8] = [6 8; 10 12]. Step-by-step: 1. Add top-left: 1+5 = 6. 2. Add top-right: 2+6 = 8. 3. Add bottom-left: 3+7 = 10. 4. Add bottom-right: 4+8 = 12. REAL EXAMPLE: Robot Forces. Force from Motor 1: F1 = [10 5; 3 8]. Force from Motor 2: F2 = [2 3; 4 1]. Total Force: F_total = [12 8; 7 9]. SCALAR MULTIPLICATION: Multiply every element by a number! 3 × [1 2; 3 4] = [3 6; 9 12]. Multiply each by 3!',
          example: 'Matrix addition: [1 2; 3 4] + [5 6; 7 8] = [6 8; 10 12]. Scalar multiplication: 3 × [1 2; 3 4] = [3 6; 9 12]. Double all forces: 2 × [10 5; 3 8] = [20 10; 6 16].'
        },
        {
          title: '🔧 Matrix Multiplication - The Power Operation',
          explanation: 'Matrix multiplication is different - it combines transformations! THE RULE: To multiply A×B: Columns of A must equal rows of B. Result has rows of A, columns of B. STEP-BY-STEP EXAMPLE: A = [1 2; 3 4], B = [5 6; 7 8]. Calculate A×B: Top-left: (1×5 + 2×7) = 19. Top-right: (1×6 + 2×8) = 22. Bottom-left: (3×5 + 4×7) = 43. Bottom-right: (3×6 + 4×8) = 50. Result: A×B = [19 22; 43 50]. VISUAL METHOD: Row 1 of A × Column 1 of B: [1 2] × [5; 7] = 1×5 + 2×7 = 19. Row 1 of A × Column 2 of B: [1 2] × [6; 8] = 1×6 + 2×8 = 22.',
          example: 'Matrix multiplication: [1 2; 3 4] × [5 6; 7 8] = [19 22; 43 50]. Rotation example: Rotate point (1, 0) by 90°. R = [0 -1; 1 0]. R × [1; 0] = [0; 1]. Point moved from (1,0) to (0,1)!'
        },
        {
          title: '🧮 Combining Transformations',
          explanation: 'You can combine multiple transformations! EXAMPLE: Scale then rotate. 1. Scale by 2: S = [2 0; 0 2]. 2. Rotate 45°: R = [0.707 -0.707; 0.707 0.707]. 3. Combined: T = R×S. Apply T to transform in one step! ROTATION EXAMPLE: Rotate 90° twice = 180° rotation. R×R = [-1 0; 0 -1]. This flips both x and y! (180° rotation).',
          example: 'Scale by 2: S = [2 0; 0 2]. Rotate 90°: R = [0 -1; 1 0]. Combined: R×S = [0 -2; 2 0]. Apply to point (1, 0): Result = (0, 2). Scale first, then rotate!'
        }
      ],
      realWorld: [
        {
          icon: '🎮',
          title: 'Computer Graphics',
          description: '3D graphics use matrix multiplication for transformations. Rotation matrices rotate objects. Scaling matrices resize objects. Combined transformations use matrix multiplication. Game engines use matrices constantly. Graphics cards optimize matrix operations.'
        },
        {
          icon: '🤖',
          title: 'Robotics',
          description: 'Robot control uses matrix operations. Joint transformations use matrices. Forward kinematics uses matrix multiplication. Robot poses stored in matrices. Motion planning uses matrix operations. Control systems use linear algebra.'
        },
        {
          icon: '🖼️',
          title: 'Image Processing',
          description: 'Image transformations use matrices. Rotation of images uses rotation matrices. Scaling uses scaling matrices. Filters use matrix multiplication. Image processing uses matrix operations. Computer vision uses linear algebra.'
        },
        {
          icon: '🧠',
          title: 'Artificial Intelligence',
          description: 'Neural networks use matrix operations. Weights stored in matrices. Forward propagation uses matrix multiplication. Deep learning relies on matrices. AI training uses matrix operations. Machine learning uses linear algebra.'
        },
        {
          icon: '📊',
          title: 'Data Analysis',
          description: 'Data stored in matrices. Statistical analysis uses matrix operations. Principal component analysis uses matrices. Data transformation uses matrices. Machine learning uses matrices. Big data uses linear algebra.'
        }
      ]
    }
  },
  20: {
    id: 20,
    title: 'Linear Algebra Intro: Solving Systems',
    subtitle: 'The Matrix Way',
    description: 'Solve multiple equations at once using matrices! From force balance to circuit analysis, learn the powerful Ax=b method that engineers use every day',
    coreIdea: 'Systems of equations can be solved using matrix form Ax=b, where A is coefficients, x is variables, b is constants',
    engineeringExample: 'Force balance, circuit analysis, constraint systems, optimization',
    learningObjectives: [
      'Convert systems of equations to matrix form Ax=b',
      'Understand matrix notation for systems',
      'Solve 2×2 systems using elimination',
      'Solve systems using inverse matrices',
      'Apply Ax=b to engineering problems'
    ],
    keyEquations: [
      { eq: 'A\\vec{x} = \\vec{b}', meaning: 'Matrix form of system of equations' },
      { eq: '\\vec{x} = A^{-1}\\vec{b}', meaning: 'Solution using inverse matrix' },
      { eq: '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} e \\\\ f \\end{bmatrix}', meaning: '2×2 system in matrix form' }
    ],
    practiceProblems: [
      {
        id: '4.20a',
        prompt: 'Convert system to matrix form: 2x + 3y = 8, 4x + y = 10',
        solution: 'Matrix form: Ax = b\n    [2  3]   [x]   [8]\nA = [4  1] × [y] = [10]\n\nWhere:\nA = coefficient matrix\nx = variables (what we solve for)\nb = constants (right side)',
        hints: ['Write coefficients in matrix A', 'Write variables in vector x', 'Write constants in vector b']
      },
      {
        id: '4.20b',
        prompt: 'Solve system: F1 + 2F2 = 10 N, 3F1 - F2 = 5 N',
        solution: 'Matrix form:\n    [1   2]   [F1]   [10]\n    [3  -1] × [F2] = [ 5]\n\nUsing elimination:\nFrom equation 1: F1 = 10 - 2F2\nSubstitute into equation 2:\n3(10 - 2F2) - F2 = 5\n30 - 6F2 - F2 = 5\n7F2 = 25\nF2 = 25/7 ≈ 3.57 N\n\nF1 = 10 - 2(3.57) = 2.86 N\n\nAnswer: F1 = 2.86 N, F2 = 3.57 N',
        hints: ['Use elimination method', 'Solve for one variable', 'Substitute into other equation', 'Check your answer']
      },
      {
        id: '4.20c',
        prompt: 'Circuit: 2I1 + I2 = 10 V, I1 + 3I2 = 11 V. Find currents.',
        solution: 'Matrix form:\n    [2  1]   [I1]   [10]\n    [1  3] × [I2] = [11]\n\nUsing elimination:\nFrom equation 1: I2 = 10 - 2I1\nSubstitute into equation 2:\nI1 + 3(10 - 2I1) = 11\nI1 + 30 - 6I1 = 11\n-5I1 = -19\nI1 = 3.8 A\n\nI2 = 10 - 2(3.8) = 2.4 A\n\nAnswer: I1 = 3.8 A, I2 = 2.4 A',
        hints: ['Set up matrix form', 'Use elimination', 'Solve for I1 first', 'Then solve for I2']
      },
      {
        id: '4.20d',
        prompt: 'Robot joint angles: θ1 + θ2 = 90°, 2θ1 - θ2 = 30°. Find angles.',
        solution: 'Matrix form:\n    [1   1]   [θ1]   [90]\n    [2  -1] × [θ2] = [30]\n\nUsing elimination:\nFrom equation 1: θ2 = 90 - θ1\nSubstitute into equation 2:\n2θ1 - (90 - θ1) = 30\n2θ1 - 90 + θ1 = 30\n3θ1 = 120\nθ1 = 40°\n\nθ2 = 90 - 40 = 50°\n\nAnswer: θ1 = 40°, θ2 = 50°',
        hints: ['Set up matrix form', 'Use elimination method', 'Solve for θ1', 'Then solve for θ2']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['systems', 'Ax=b', 'solving-equations'] },
    content: {
      intro: 'Solve multiple equations at once using matrices! From force balance to circuit analysis, learn the powerful Ax=b method that engineers use every day. Turn systems of equations into matrix form! WHY USE MATRICES? 1. Organize complex systems. 2. Use computer algorithms. 3. Solve many equations at once. 4. Standard engineering method.',
      concepts: [
        {
          title: '🧠 What is Ax = b? - Systems as Matrices',
          explanation: 'Turn systems of equations into matrix form! TRADITIONAL SYSTEM: 2x + 3y = 8, 4x + y = 10. MATRIX FORM: Ax = b. A = [2 3; 4 1], x = [x; y], b = [8; 10]. Where: A = coefficient matrix, x = variables (what we solve for), b = constants (right side). STEP-BY-STEP CONVERSION: System: x + 2y = 5, 3x - y = 4. Step 1: Write coefficients in A: A = [1 2; 3 -1]. Step 2: Write variables in x: x = [x; y]. Step 3: Write constants in b: b = [5; 4]. Result: Ax = b. SOLVING METHODS: Method 1: Inverse Matrix: x = A⁻¹b. Method 2: Elimination: Reduce to simpler form. Method 3: Calculator/Computer: Let technology do the work!',
          example: 'System: 2x + 3y = 8, 4x + y = 10. Matrix form: [2 3; 4 1] × [x; y] = [8; 10]. This is Ax = b form! Solve using elimination or inverse matrix.'
        },
        {
          title: '🔧 Solving 2×2 Systems',
          explanation: 'Let\'s solve Ax = b step by step! PROBLEM: Force Balance. Two forces in equilibrium: F1 + 2F2 = 10 N, 3F1 - F2 = 5 N. Step 1: Write as Ax = b: [1 2; 3 -1] × [F1; F2] = [10; 5]. Step 2: Use elimination. From equation 1: F1 = 10 - 2F2. Substitute into equation 2: 3(10 - 2F2) - F2 = 5. 30 - 6F2 - F2 = 5. 7F2 = 25. F2 = 25/7 ≈ 3.57 N. Step 3: Find F1. F1 = 10 - 2(3.57) = 2.86 N. Answer: F1 = 2.86 N, F2 = 3.57 N. CHECK: 2.86 + 2(3.57) = 10 ✓, 3(2.86) - 3.57 = 5.01 ≈ 5 ✓.',
          example: 'Force balance: F1 + 2F2 = 10, 3F1 - F2 = 5. Solution: F1 = 2.86 N, F2 = 3.57 N. Check: 2.86 + 2(3.57) = 10 ✓, 3(2.86) - 3.57 ≈ 5 ✓.'
        },
        {
          title: '🧮 Engineering Applications',
          explanation: 'PROBLEM 1: 2-Force Balance. Horizontal: Fx + 2Fy = 12 N, Vertical: 3Fx - Fy = 6 N. Matrix form: [1 2; 3 -1] × [Fx; Fy] = [12; 6]. Solution: Fx = 4 N, Fy = 4 N. PROBLEM 2: Circuit Currents. Loop 1: 2I1 + I2 = 10 V, Loop 2: I1 + 3I2 = 11 V. Matrix form: [2 1; 1 3] × [I1; I2] = [10; 11]. Solution: I1 = 2.6 A, I2 = 2.8 A. PROBLEM 3: Robot Joint Angles. Constraint 1: θ1 + θ2 = 90°, Constraint 2: 2θ1 - θ2 = 30°. Matrix form: [1 1; 2 -1] × [θ1; θ2] = [90; 30]. Solution: θ1 = 40°, θ2 = 50°.',
          example: 'Circuit analysis: 2I1 + I2 = 10, I1 + 3I2 = 11. Solution: I1 = 2.6 A, I2 = 2.8 A. Robot joints: θ1 + θ2 = 90°, 2θ1 - θ2 = 30°. Solution: θ1 = 40°, θ2 = 50°.'
        }
      ],
      realWorld: [
        {
          icon: '⚡',
          title: 'Circuit Analysis',
          description: 'Electrical engineers use Ax=b for circuit analysis. Kirchhoff\'s laws create systems of equations. Currents calculated using matrix methods. Voltage analysis uses Ax=b. Circuit simulation uses linear algebra. Power systems use matrix methods.'
        },
        {
          icon: '🏗️',
          title: 'Structural Analysis',
          description: 'Engineers use Ax=b for force balance. Multiple forces in equilibrium. Support forces calculated using matrices. Structural analysis uses systems of equations. Load distribution uses Ax=b. Design optimization uses linear algebra.'
        },
        {
          icon: '🤖',
          title: 'Robot Control',
          description: 'Robots use Ax=b for inverse kinematics. Joint angles calculated from end position. Constraint systems use Ax=b. Robot control uses matrix methods. Motion planning uses systems of equations. Robot design uses linear algebra.'
        },
        {
          icon: '📊',
          title: 'Optimization',
          description: 'Optimization problems use Ax=b. Constraint satisfaction uses matrices. Linear programming uses Ax=b. Resource allocation uses matrix methods. Scheduling uses systems of equations. Operations research uses linear algebra.'
        },
        {
          icon: '🔬',
          title: 'Scientific Computing',
          description: 'Scientists use Ax=b for simulations. Finite element method uses matrices. Numerical methods use Ax=b. Scientific computing uses linear algebra. Simulations use matrix methods. Data analysis uses systems of equations.'
        }
      ]
    }
  },
  21: {
    id: 21,
    title: 'Linear Algebra Intro: Transformations',
    subtitle: 'Moving & Rotating Objects',
    description: 'Bring objects to life! Learn how matrices move, rotate, and scale objects in 2D and 3D. This is the math behind video games, robotics, and computer graphics',
    coreIdea: 'Matrices perform transformations: translation (moving), rotation (spinning), scaling (resizing)',
    engineeringExample: 'Video games, robotics, computer graphics, CAD software',
    learningObjectives: [
      'Understand translation, rotation, and scaling transformations',
      'Apply rotation matrices to rotate points',
      'Apply scaling matrices to resize objects',
      'Combine multiple transformations',
      'Use transformations in engineering applications'
    ],
    keyEquations: [
      { eq: 'R(\\theta) = \\begin{bmatrix} \\cos(\\theta) & -\\sin(\\theta) \\\\ \\sin(\\theta) & \\cos(\\theta) \\end{bmatrix}', meaning: '2D rotation matrix by angle θ' },
      { eq: 'S = \\begin{bmatrix} s_x & 0 \\\\ 0 & s_y \\end{bmatrix}', meaning: '2D scaling matrix' },
      { eq: '\\vec{p\'} = R \\times \\vec{p}', meaning: 'Rotate point by multiplying by rotation matrix' },
      { eq: 'T = R \\times S', meaning: 'Combined transformation (scale then rotate)' }
    ],
    practiceProblems: [
      {
        id: '4.21a',
        prompt: 'Point (2, 3) translated by [5, 1]. Find new position.',
        solution: 'Translation = moving (add vector)\nNew position = (2, 3) + [5, 1]\nNew position = (2+5, 3+1) = (7, 4)\n\nPoint moved right 5 units and up 1 unit!',
        hints: ['Translation = vector addition', 'Add x-components: 2+5=7', 'Add y-components: 3+1=4']
      },
      {
        id: '4.21b',
        prompt: 'Rotate point (1, 0) by 90° using rotation matrix.',
        solution: '90° rotation matrix:\n    [0  -1]\nR = [1   0]\n\nApply to point (1, 0):\n    [0  -1]   [1]   [0]\nR = [1   0] × [0] = [1]\n\nPoint moved from (1, 0) to (0, 1)!\nRotated 90° counterclockwise!',
        hints: ['Use 90° rotation matrix', 'cos(90°)=0, sin(90°)=1', 'Multiply matrix by point vector', 'Result is new point position']
      },
      {
        id: '4.21c',
        prompt: 'Scale point (4, 2) by 1.5x using scaling matrix.',
        solution: 'Scaling matrix (1.5x):\n    [1.5  0]\nS = [0    1.5]\n\nApply to point (4, 2):\n    [1.5  0]   [4]   [6]\nS = [0    1.5] × [2] = [3]\n\nNew point: (6, 3)\nWidth doubled (4→6), height increased (2→3)!',
        hints: ['Use scaling matrix', 'Diagonal matrix for scaling', 'Multiply matrix by point', 'Both x and y scaled by 1.5']
      },
      {
        id: '4.21d',
        prompt: 'Point (2, 0): Scale by 2, then rotate 90°. Find final position.',
        solution: 'Step 1: Scale by 2\n    [2  0]   [2]   [4]\nS = [0  2] × [0] = [0]\nAfter scaling: (4, 0)\n\nStep 2: Rotate 90°\n    [0  -1]   [4]   [0]\nR = [1   0] × [0] = [4]\n\nFinal position: (0, 4)\n\nOr combined: T = R×S\n    [0  -2]\nT = [2   0]\n\nT × [2; 0] = [0; 4]\nSame result!',
        hints: ['Apply scale first', 'Then apply rotation', 'Or combine: T = R×S', 'Apply combined transformation']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['transformations', 'rotation', 'scaling', 'translation'] },
    content: {
      intro: 'Bring objects to life! Learn how matrices move, rotate, and scale objects in 2D and 3D. This is the math behind video games, robotics, and computer graphics! Transformations change position, size, or orientation! THE BIG THREE: 1. TRANSLATION (Moving): Shift object by adding a vector. 2. ROTATION (Spinning): Rotate around a point using matrix. 3. SCALING (Resizing): Change size using matrix.',
      concepts: [
        {
          title: '🧠 Types of Transformations',
          explanation: 'Transformations change position, size, or orientation! THE BIG THREE: 1. TRANSLATION (Moving): Shift object by adding a vector. Point: (2, 3), Move by: [5, 1], New point: (7, 4). 2. ROTATION (Spinning): Rotate around a point using matrix. 90° rotation matrix: R = [0 -1; 1 0]. 3. SCALING (Resizing): Change size using matrix. Scale 2x in x, 3x in y: S = [2 0; 0 3]. VISUAL EXAMPLES: Original square: corners at (0,0), (1,0), (1,1), (0,1). After translation [2, 1]: New corners: (2,1), (3,1), (3,2), (2,2). Square moved right and up! After 90° rotation: New corners: (0,0), (0,1), (-1,1), (-1,0). Square rotated counterclockwise! After scaling [2, 2]: New corners: (0,0), (2,0), (2,2), (0,2). Square doubled in size!',
          example: 'Translation: Point (2, 3) + [5, 1] = (7, 4). Rotation: Point (1, 0) rotated 90° → (0, 1). Scaling: Point (4, 2) scaled 1.5x → (6, 3).'
        },
        {
          title: '🔧 Rotation Matrices in Detail',
          explanation: 'Master rotation matrices! 2D ROTATION BY ANGLE θ: R = [cos(θ) -sin(θ); sin(θ) cos(θ)]. COMMON ROTATIONS: 30° rotation: R = [0.866 -0.5; 0.5 0.866]. 45° rotation: R = [0.707 -0.707; 0.707 0.707]. 90° rotation: R = [0 -1; 1 0]. 180° rotation: R = [-1 0; 0 -1]. ROTATING A POINT: Point: (3, 0), Rotate 90°: R = [0 -1; 1 0] × [3; 0] = [0; 3]. Point moved from (3, 0) to (0, 3)! 3D ROTATIONS: Around Z-axis (like 2D): Rz = [cos(θ) -sin(θ) 0; sin(θ) cos(θ) 0; 0 0 1]. Around X-axis: Rx = [1 0 0; 0 cos(θ) -sin(θ); 0 sin(θ) cos(θ)]. Around Y-axis: Ry = [cos(θ) 0 sin(θ); 0 1 0; -sin(θ) 0 cos(θ)].',
          example: '90° rotation: R = [0 -1; 1 0]. Point (1, 0) rotated → (0, 1). 45° rotation: R = [0.707 -0.707; 0.707 0.707]. Point (1, 0) rotated → (0.707, 0.707).'
        },
        {
          title: '🧮 Combining Transformations',
          explanation: 'You can combine multiple transformations! EXAMPLE: Scale then rotate. 1. Scale by 2: S = [2 0; 0 2]. 2. Rotate 45°: R = [0.707 -0.707; 0.707 0.707]. 3. Combined: T = R×S. Apply T to transform in one step! ORDER MATTERS: Scale then rotate ≠ Rotate then scale! Combined: T = R×S (scale first, then rotate). Or: T = S×R (rotate first, then scale). Different results!',
          example: 'Point (2, 0): Scale by 2 → (4, 0), then rotate 90° → (0, 4). Combined: T = R×S = [0 -2; 2 0]. T × [2; 0] = [0; 4]. Same result in one step!'
        }
      ],
      realWorld: [
        {
          icon: '🎮',
          title: 'Video Games',
          description: 'Game engines use transformations constantly. Objects moved using translation. Characters rotated using rotation matrices. Objects scaled for zoom effects. Camera transformations use matrices. 3D graphics use transformation matrices. Game physics uses transformations.'
        },
        {
          icon: '🤖',
          title: 'Robotics',
          description: 'Robots use transformations for movement. End-effector positioning uses transformations. Joint rotations use rotation matrices. Robot poses use transformation matrices. Forward kinematics uses transformations. Robot control uses matrix operations.'
        },
        {
          icon: '🖼️',
          title: 'Computer Graphics',
          description: 'Graphics use transformations extensively. 3D modeling uses transformation matrices. Rendering uses transformations. Animation uses transformations. CAD software uses transformations. Image processing uses transformations. Graphics programming uses matrices.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Control',
          description: 'Aircraft use transformations for orientation. Roll, pitch, yaw use rotation matrices. Flight control uses transformations. Navigation uses transformations. Aircraft simulation uses matrices. Flight dynamics uses transformations.'
        },
        {
          icon: '🏗️',
          title: 'CAD Software',
          description: 'CAD software uses transformations for design. Object positioning uses translation. Object orientation uses rotation. Object scaling uses scaling matrices. Assembly uses transformations. Manufacturing uses transformations. Design uses matrix operations.'
        }
      ]
    }
  }
};

export default unit4Lessons;
