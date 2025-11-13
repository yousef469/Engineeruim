// Unit 2: Geometry & Trigonometry (Lessons 7-12)
export const unit2Lessons = {
  7: {
    id: 7,
    title: 'Geometry & Trigonometry: Basic Shapes & Angles',
    subtitle: 'The Foundation of Engineering Design',
    description: 'Master the fundamental shapes and measurements that form the basis of all engineering design',
    coreIdea: 'Basic geometric shapes (circles, rectangles, triangles) are fundamental to all engineering calculations',
    engineeringExample: 'Wheels, gears, panels, trusses, support structures',
    learningObjectives: [
      'Calculate area and perimeter of circles, rectangles, and triangles',
      'Understand angle measurements in degrees and radians',
      'Break complex shapes into simple components for calculation',
      'Apply geometric formulas to real engineering problems',
      'Design composite shapes for engineering applications'
    ],
    keyEquations: [
      { eq: 'A = \\pi r^2', meaning: 'Circle area = π × radius²' },
      { eq: 'C = 2\\pi r', meaning: 'Circle circumference = 2π × radius' },
      { eq: 'A = l \\times w', meaning: 'Rectangle area = length × width' },
      { eq: 'A = \\frac{1}{2} \\times b \\times h', meaning: 'Triangle area = ½ × base × height' },
      { eq: '360° = 2\\pi \\text{ radians}', meaning: 'Full circle = 360 degrees = 2π radians' }
    ],
    practiceProblems: [
      {
        id: '2.7a',
        prompt: 'A robot has a circular base with diameter 60 cm. Find the area and circumference.',
        solution: 'Radius = 30 cm\nArea = πr² = π(30)² = 900π ≈ 2,827 cm²\nCircumference = 2πr = 2π(30) = 60π ≈ 188.5 cm',
        hints: ['Diameter = 2 × radius', 'Use A = πr² for area', 'Use C = 2πr for circumference']
      },
      {
        id: '2.7b',
        prompt: 'A rectangular drone frame is 50 cm × 40 cm. Find the area and perimeter.',
        solution: 'Area = 50 × 40 = 2,000 cm²\nPerimeter = 2(50 + 40) = 2(90) = 180 cm',
        hints: ['Area = length × width', 'Perimeter = 2(length + width)']
      },
      {
        id: '2.7c',
        prompt: 'A triangular wing section has base 3 m and height 1.5 m. Find the area.',
        solution: 'Area = ½ × base × height\nArea = ½ × 3 × 1.5 = 2.25 m²',
        hints: ['Use A = ½ × b × h', 'Multiply base and height first, then divide by 2']
      },
      {
        id: '2.7d',
        prompt: 'A robot arm has a rectangular section (10×5 cm) with a semicircular end (radius 5 cm). Find the total area.',
        solution: 'Rectangle area = 10 × 5 = 50 cm²\nSemicircle area = ½πr² = ½π(5)² = 12.5π ≈ 39.3 cm²\nTotal area = 50 + 39.3 = 89.3 cm²',
        hints: ['Calculate each shape separately', 'Semicircle = half of full circle', 'Add the areas together']
      }
    ],
    metadata: { difficulty: 'Easy', estTime: '18 min', tags: ['geometry', 'shapes', 'angles'] },
    content: {
      intro: 'Master the fundamental shapes and measurements that form the basis of all engineering design. Every engineering project uses basic geometric shapes: circles for wheels and gears, rectangles for panels and screens, triangles for trusses and support structures. Understanding these shapes and their properties is essential for all engineering calculations.',
      concepts: [
        {
          title: '🧠 Basic Shapes in Engineering',
          explanation: 'Every engineering design uses basic geometric shapes. Circles: Area = πr², Circumference = 2πr. Used in wheels, gears, pipes, turbines. Rectangles: Area = length × width, Perimeter = 2(length + width). Used in panels, screens, solar arrays. Triangles: Area = ½ × base × height. Used in trusses, support structures, wings. Angles: Measured in degrees (°) or radians. Full circle = 360° = 2π radians. Right angle = 90° = π/2 radians. Why Geometry Matters: Every part you design needs accurate dimensions!',
          example: 'Car wheel rim: Outer radius = 30 cm, Inner radius = 25 cm. Rim area = π(30²) - π(25²) = π(900 - 625) = 275π ≈ 864 cm². Solar panel: Length = 2 m, Width = 1 m. Area = 2 × 1 = 2 m². Perimeter = 2(2 + 1) = 6 m. Triangular support: Base = 4 m, Height = 3 m. Area = ½ × 4 × 3 = 6 m².'
        },
        {
          title: '🔧 Calculating Areas and Perimeters',
          explanation: 'Real Engineering Calculations: For circles, use A = πr² and C = 2πr. For rectangles, use A = l×w and P = 2(l+w). For triangles, use A = ½×b×h. Composite Shapes: Break complex shapes into simple ones, calculate each, then add or subtract! This approach works for any complex shape.',
          example: 'Car wheel rim: Outer radius = 30 cm, Inner radius = 25 cm. Rim area = π(30²) - π(25²) = π(900 - 625) = 275π ≈ 864 cm². Solar panel: Length = 2 m, Width = 1 m. Area = 2 × 1 = 2 m². Perimeter = 2(2 + 1) = 6 m. Triangular support: Base = 4 m, Height = 3 m. Area = ½ × 4 × 3 = 6 m².'
        },
        {
          title: '📐 Angles and Measurements',
          explanation: 'Angles are measured in degrees (°) or radians. Full circle = 360° = 2π radians. Right angle = 90° = π/2 radians. Straight angle = 180° = π radians. To convert degrees to radians: multiply by π/180. To convert radians to degrees: multiply by 180/π.',
          example: 'A gear rotates 45°. How many degrees left to complete full rotation? 360° - 45° = 315°. In radians: 45° = 45 × π/180 = π/4 radians. Full rotation = 2π radians, so remaining = 2π - π/4 = 7π/4 radians.'
        }
      ],
      realWorld: [
        {
          icon: '🚗',
          title: 'Wheels and Gears',
          description: 'Car wheels use circular geometry for smooth rotation. Gear systems depend on precise circular calculations: gear ratio = large radius / small radius. When small gear (r=5cm) rotates once, large gear (r=10cm) rotates 0.5 times. Gear meshing requires exact circumference calculations for proper engagement.'
        },
        {
          icon: '☀️',
          title: 'Solar Panels',
          description: 'Solar arrays use rectangular panels for maximum surface area. Engineers calculate total area: length × width for each panel, then sum all panels. Panel efficiency depends on surface area exposed to sunlight. Perimeter calculations determine frame material needed for installation.'
        },
        {
          icon: '🏗️',
          title: 'Trusses and Support Structures',
          description: 'Triangular trusses provide maximum strength with minimum material. Triangle geometry is inherently stable - three sides form a rigid structure. Engineers calculate triangle area to determine material needs. Support beams use triangular bracing for optimal load distribution.'
        },
        {
          icon: '🚁',
          title: 'Aircraft Wings',
          description: 'Wing sections use triangular and trapezoidal shapes for aerodynamic design. Engineers calculate wing area (lift surface) using geometric formulas. Composite shapes (triangles + rectangles) model complex wing geometries. Precise angle calculations ensure proper wing positioning for optimal flight.'
        },
        {
          icon: '⚙️',
          title: 'Composite Shapes in Engineering',
          description: 'Complex engineering components combine multiple basic shapes. Robot arms: rectangular sections + semicircular ends. Building facades: rectangles + triangles + circles. Engineers break complex shapes into simple components, calculate each separately, then combine results. This modular approach simplifies design and calculation.'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'Geometry & Trigonometry: 3D Coordinate Geometry',
    subtitle: 'Navigating 3D Space',
    description: 'Learn to navigate 3D space using coordinates - essential for robotics, flight paths, and CAD design',
    coreIdea: '3D coordinates use (x, y, z) to locate points in space, essential for robotics and 3D modeling',
    engineeringExample: 'Robotics, flight paths, CAD design, drone navigation',
    learningObjectives: [
      'Understand 2D and 3D coordinate systems',
      'Calculate distance between points using distance formula',
      'Find midpoint between two points',
      'Apply coordinate geometry to real engineering problems',
      'Use coordinates for navigation and positioning'
    ],
    keyEquations: [
      { eq: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}', meaning: '2D distance formula' },
      { eq: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}', meaning: '3D distance formula' },
      { eq: 'M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)', meaning: 'Midpoint formula' },
      { eq: '\\text{slope} = \\frac{\\Delta y}{\\Delta x}', meaning: 'Slope = rise over run' }
    ],
    practiceProblems: [
      {
        id: '2.8a',
        prompt: 'Find the distance from (0, 0) to (3, 4).',
        solution: 'd = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5 units',
        hints: ['Use distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]', 'Substitute the coordinates', 'Calculate the differences first']
      },
      {
        id: '2.8b',
        prompt: 'Find the distance from (1, 2, 3) to (4, 6, 8).',
        solution: 'd = √[(4-1)² + (6-2)² + (8-3)²] = √[3² + 4² + 5²] = √[9 + 16 + 25] = √50 ≈ 7.07 units',
        hints: ['Use 3D distance formula', 'Include z-coordinate', 'Calculate each difference separately']
      },
      {
        id: '2.8c',
        prompt: 'Find the midpoint of (2, 4) and (8, 10).',
        solution: 'M = ((2+8)/2, (4+10)/2) = (10/2, 14/2) = (5, 7)',
        hints: ['Use midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)', 'Average the x-coordinates', 'Average the y-coordinates']
      },
      {
        id: '2.8d',
        prompt: 'A plane travels from (0, 0, 0) to (1000, 500, 200) meters. How far did it travel?',
        solution: 'd = √[(1000-0)² + (500-0)² + (200-0)²] = √[1,000,000 + 250,000 + 40,000] = √1,290,000 ≈ 1,136 meters',
        hints: ['Use 3D distance formula', 'All coordinates are in meters', 'Calculate step by step']
      }
    ],
    metadata: { difficulty: 'Easy', estTime: '25 min', tags: ['coordinates', '3D', 'distance'] },
    content: {
      intro: 'Learn to navigate 3D space using coordinates - essential for robotics, flight paths, and CAD design. Think of coordinates as GPS for math! They tell you EXACTLY where something is. 2D coordinates work on a flat plane (like a map), while 3D coordinates add height (like a building with floors).',
      concepts: [
        {
          title: '🧠 Understanding Coordinates - Like GPS for Math',
          explanation: 'Think of coordinates as GPS for math! They tell you EXACTLY where something is. 2D COORDINATES (Flat Map): To reach point (3, 4): Start at origin (0, 0), walk 3 steps RIGHT (x = 3), walk 4 steps UP (y = 4). 3D COORDINATES (Adding Height): To reach point (3, 4, 5): Start at origin (0, 0, 0), move 3 units RIGHT (x = 3), move 4 units FORWARD (y = 4), move 5 units UP (z = 5). Real Examples: Drone: (100m east, 200m north, 50m high). Robot arm: (0.5m right, 0.3m forward, 0.8m up).',
          example: 'Drone position: (100m east, 200m north, 50m high) = (100, 200, 50). Robot arm end effector: (0.5m right, 0.3m forward, 0.8m up) = (0.5, 0.3, 0.8). These coordinates precisely locate objects in 3D space.'
        },
        {
          title: '🔧 Distance Formula - How Far Apart?',
          explanation: '2D DISTANCE (Pythagorean Theorem): Formula: d = √[(x₂-x₁)² + (y₂-y₁)²]. Find distance from (1, 2) to (4, 6): Δx = 4 - 1 = 3, Δy = 6 - 2 = 4. d = √[3² + 4²] = √[9 + 16] = √25 = 5 units. 3D DISTANCE: Formula: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]. Example: Distance from (1, 2, 3) to (4, 6, 8): Δx = 3, Δy = 4, Δz = 5. d = √[3² + 4² + 5²] = √[9 + 16 + 25] = √50 ≈ 7.07 units. MIDPOINT: Formula: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2). Think: Average the coordinates!',
          example: 'Find distance from (1, 2) to (4, 6): d = √[(4-1)² + (6-2)²] = √[3² + 4²] = √25 = 5 units. Midpoint of (2, 4, 6) and (8, 10, 12): M = ((2+8)/2, (4+10)/2, (6+12)/2) = (5, 7, 9).'
        },
        {
          title: '✈️ Real-World Applications',
          explanation: 'Plane Flight Path: Plane travels from (0, 0, 0) to (1000, 500, 200) meters. Distance = √[1000² + 500² + 200²] = √1,290,000 ≈ 1,136 meters. Drone Delivery: Warehouse at (0, 0, 50), Customer at (300, 400, 100). Distance = √[300² + 400² + 50²] = √252,500 ≈ 502.5 meters. Robot Navigation: Robot moves from (1, 1, 0) to (5, 3, 2). Distance = √[(5-1)² + (3-1)² + (2-0)²] = √[16 + 4 + 4] = √24 ≈ 4.9 units.',
          example: 'Drone delivery system: Warehouse at (0, 0, 50), Customer at (300, 400, 100). Flight distance = √[300² + 400² + 50²] = √252,500 ≈ 502.5 meters. If drone speed = 10 m/s, time = 502.5/10 ≈ 50.3 seconds.'
        }
      ],
      realWorld: [
        {
          icon: '✈️',
          title: 'Aircraft Flight Paths',
          description: 'Pilots use 3D coordinates to track flight paths. Aircraft position: (x = east/west, y = north/south, z = altitude). Air traffic control monitors all aircraft positions in 3D space. Flight paths calculated using distance formulas. Collision avoidance uses 3D distance calculations.'
        },
        {
          icon: '🚁',
          title: 'Drone Navigation',
          description: 'Drones use GPS coordinates (latitude, longitude, altitude) for navigation. Delivery drones calculate optimal routes using 3D distance formulas. Obstacle avoidance requires precise 3D positioning. Flight controllers use coordinate transformations for stable flight.'
        },
        {
          icon: '🤖',
          title: 'Robotics and Automation',
          description: 'Robot arms use 3D coordinates for end-effector positioning. Each joint has coordinates relative to base. Inverse kinematics calculates joint angles from desired positions. Coordinate frames transform between robot base and world coordinates.'
        },
        {
          icon: '🏗️',
          title: 'CAD and 3D Modeling',
          description: 'Computer-aided design uses 3D coordinates for every point in a model. Engineers design components using precise coordinate systems. 3D printing requires exact coordinate positioning. Assembly planning uses coordinate transformations.'
        },
        {
          icon: '🛰️',
          title: 'Satellite Positioning',
          description: 'GPS satellites transmit position data using 3D coordinates. Receivers calculate position using trilateration (distance from multiple satellites). Coordinate systems: ECEF (Earth-Centered, Earth-Fixed) for global positioning. Precise timing and coordinate calculations enable accurate navigation.'
        }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Geometry & Trigonometry: Triangles (sin, cos, tan)',
    subtitle: 'The Math of Angles and Triangles',
    description: 'Master trigonometry - the math of angles and triangles. Use SOH-CAH-TOA to solve real engineering problems',
    coreIdea: 'Trigonometric functions (sin, cos, tan) relate angles to side ratios in right triangles',
    engineeringExample: 'Navigation, slopes, force analysis, building heights, ramp angles',
    learningObjectives: [
      'Understand right triangles and their properties',
      'Master SOH-CAH-TOA memory trick',
      'Use trigonometric functions to find unknown sides or angles',
      'Apply trigonometry to real engineering problems',
      'Calculate angles and distances using trigonometry'
    ],
    keyEquations: [
      { eq: '\\sin(\\theta) = \\frac{O}{H}', meaning: 'Sine = Opposite / Hypotenuse' },
      { eq: '\\cos(\\theta) = \\frac{A}{H}', meaning: 'Cosine = Adjacent / Hypotenuse' },
      { eq: '\\tan(\\theta) = \\frac{O}{A}', meaning: 'Tangent = Opposite / Adjacent' },
      { eq: 'a^2 + b^2 = c^2', meaning: 'Pythagorean theorem: a² + b² = c²' },
      { eq: '\\theta = \\arctan\\left(\\frac{O}{A}\\right)', meaning: 'Angle from tangent ratio' }
    ],
    practiceProblems: [
      {
        id: '2.9a',
        prompt: 'In a right triangle, opposite = 3 and hypotenuse = 5. Find sin(θ).',
        solution: 'sin(θ) = Opposite / Hypotenuse = 3/5 = 0.6',
        hints: ['Use SOH: sin = O/H', 'Substitute the given values', 'Simplify the fraction']
      },
      {
        id: '2.9b',
        prompt: 'You are 50 meters from a building. The angle to the top is 60°. Find the building height.',
        solution: 'tan(60°) = h / 50\n1.732 = h / 50\nh = 50 × 1.732 = 86.6 meters',
        hints: ['Use TOA: tan = O/A', 'Adjacent = 50m, Opposite = height', 'tan(60°) = 1.732']
      },
      {
        id: '2.9c',
        prompt: 'A ramp rises 2 meters over 10 meters horizontal distance. Find the ramp angle.',
        solution: 'tan(θ) = 2 / 10 = 0.2\nθ = arctan(0.2) ≈ 11.3°',
        hints: ['Use TOA: tan = O/A', 'Opposite = 2m, Adjacent = 10m', 'Use arctan to find angle']
      },
      {
        id: '2.9d',
        prompt: 'A tower is 30m tall, anchored 40m from base. Find the cable length.',
        solution: 'Use Pythagorean theorem: c² = 30² + 40² = 900 + 1600 = 2500\nc = √2500 = 50 meters',
        hints: ['Use Pythagorean theorem: a² + b² = c²', 'c is the hypotenuse (cable)', 'Calculate step by step']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['trigonometry', 'triangles', 'SOH-CAH-TOA'] },
    content: {
      intro: 'Master trigonometry - the math of angles and triangles. We will use the magic of SOH-CAH-TOA to solve real engineering problems! Trigonometry relates angles to side ratios in right triangles. This is essential for navigation, slopes, force analysis, and many engineering applications.',
      concepts: [
        {
          title: '🧠 Right Triangles - The Foundation',
          explanation: 'A right triangle has one 90° angle (a square corner). The three sides (from angle θ\'s perspective): HYPOTENUSE (H): Always the longest side, always opposite the 90° angle. OPPOSITE (O): The side ACROSS from your angle. ADJACENT (A): The side NEXT TO your angle. PYTHAGOREAN THEOREM: a² + b² = c². This ALWAYS works for right triangles!',
          example: 'Triangle with sides 3, 4, 5: From angle A: Opposite = 4, Adjacent = 3, Hypotenuse = 5. Check: 3² + 4² = 9 + 16 = 25 = 5² ✓'
        },
        {
          title: '🔧 SOH-CAH-TOA - The Magic Formula',
          explanation: 'SOH-CAH-TOA Memory Trick: SOH = Sine = Opposite / Hypotenuse. sin(θ) = O/H. CAH = Cosine = Adjacent / Hypotenuse. cos(θ) = A/H. TOA = Tangent = Opposite / Adjacent. tan(θ) = O/A. FINDING THE ANGLE: If you know the ratio, use inverse functions: θ = arcsin(ratio), θ = arccos(ratio), θ = arctan(ratio). COMMON ANGLES: 30°: sin=0.5, cos=0.866, tan=0.577. 45°: sin=0.707, cos=0.707, tan=1. 60°: sin=0.866, cos=0.5, tan=1.732.',
          example: 'Triangle: Opposite = 3, Adjacent = 4, Hypotenuse = 5. From angle θ: sin(θ) = 3/5 = 0.6, cos(θ) = 4/5 = 0.8, tan(θ) = 3/4 = 0.75. Finding angle: θ = arcsin(0.6) ≈ 36.9°, or θ = arctan(0.75) ≈ 36.9°.'
        },
        {
          title: '🧮 Step-by-Step Problem Solving',
          explanation: 'Problem 1: Find building height. You\'re 50m from building, angle to top = 60°. Step 1: Draw triangle. Step 2: Identify: Adjacent = 50m, Angle = 60°, Want: Opposite (height). Step 3: Use TAN! tan(60°) = h/50. Step 4: Solve: h = 50 × 1.732 = 86.6 meters. Problem 2: Find ramp angle. Ramp rises 2m over 10m horizontal. Step 1: Identify: Opposite = 2m, Adjacent = 10m. Step 2: Use TAN! tan(θ) = 2/10 = 0.2. Step 3: Solve: θ = arctan(0.2) ≈ 11.3°.',
          example: 'Building height problem: Distance = 50m, angle = 60°. Height = 50 × tan(60°) = 50 × 1.732 = 86.6 meters. Ramp angle problem: Rise = 2m, Run = 10m. Angle = arctan(2/10) = arctan(0.2) ≈ 11.3°.'
        }
      ],
      realWorld: [
        {
          icon: '🏗️',
          title: 'Building Height Measurement',
          description: 'Surveyors use trigonometry to measure building heights. Distance from building and angle to top measured with theodolite. Height calculated using tan(θ) = height/distance. This method works for any tall structure: buildings, towers, trees, mountains.'
        },
        {
          icon: '🛣️',
          title: 'Road and Ramp Design',
          description: 'Engineers design ramps using trigonometry. Ramp angle calculated from rise and run: tan(θ) = rise/run. Maximum ramp angle for accessibility: 4.8° (1:12 ratio). Steeper ramps require more force to climb. Road grades expressed as percentage: 5% grade = arctan(0.05) ≈ 2.9°.'
        },
        {
          icon: '🚁',
          title: 'Aircraft Navigation',
          description: 'Pilots use trigonometry for navigation. Climb angle calculated from altitude gain and horizontal distance. Glide slope for landing: typically 3° angle. Flight path calculations use trigonometric functions. Wind triangle problems use vector trigonometry.'
        },
        {
          icon: '🏗️',
          title: 'Structural Engineering',
          description: 'Engineers analyze forces using trigonometry. Cable tension calculated from angles and loads. Truss analysis uses triangle geometry. Support forces resolved into components using sin and cos. Bridge design requires precise angle calculations.'
        },
        {
          icon: '🚀',
          title: 'Rocket Tracking',
          description: 'Tracking stations use trigonometry to monitor rocket trajectories. Distance to rocket calculated from angle and baseline distance. Altitude determined using angle measurements. Multiple stations use triangulation for precise positioning. Real-time tracking requires continuous trigonometric calculations.'
        }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Geometry & Trigonometry: Vector Basics',
    subtitle: 'Direction & Magnitude',
    description: 'Learn vectors - quantities with both size AND direction. Think of them as arrows that show force, velocity, or movement',
    coreIdea: 'Vectors have both magnitude (size) and direction, essential for force, velocity, and displacement calculations',
    engineeringExample: 'Robot forces, drone velocity, structural forces, navigation',
    learningObjectives: [
      'Understand the difference between scalars and vectors',
      'Visualize vectors as arrows with direction and magnitude',
      'Add vectors using component addition',
      'Calculate vector magnitude and direction',
      'Apply vectors to real engineering problems'
    ],
    keyEquations: [
      { eq: '|\\vec{v}| = \\sqrt{x^2 + y^2}', meaning: 'Vector magnitude in 2D' },
      { eq: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}', meaning: 'Vector magnitude in 3D' },
      { eq: '\\theta = \\arctan\\left(\\frac{y}{x}\\right)', meaning: 'Vector direction (angle)' },
      { eq: '\\vec{v_1} + \\vec{v_2} = (x_1+x_2, y_1+y_2)', meaning: 'Vector addition (component-wise)' }
    ],
    practiceProblems: [
      {
        id: '2.10a',
        prompt: 'Find the magnitude of vector v = (3, 4).',
        solution: '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5 units',
        hints: ['Use |v| = √(x² + y²)', 'Square each component', 'Add them, then take square root']
      },
      {
        id: '2.10b',
        prompt: 'Add vectors (2, 3) + (1, 4).',
        solution: 'v₁ + v₂ = (2+1, 3+4) = (3, 7)',
        hints: ['Add components separately', 'x-components: 2+1=3', 'y-components: 3+4=7']
      },
      {
        id: '2.10c',
        prompt: 'Two motors push a robot: F₁ = (30, 40) N and F₂ = (20, 10) N. Find total force.',
        solution: 'F_total = (30+20, 40+10) = (50, 50) N\n|F_total| = √(50² + 50²) = √5000 ≈ 70.7 N\nDirection: θ = arctan(50/50) = 45°',
        hints: ['Add vectors component-wise', 'Calculate magnitude', 'Find direction using arctan']
      },
      {
        id: '2.10d',
        prompt: 'A drone flies at 10 m/s East and 5 m/s North. Find speed and heading.',
        solution: 'v = (10, 5) m/s\nSpeed = |v| = √(10² + 5²) = √125 ≈ 11.2 m/s\nHeading = arctan(5/10) = arctan(0.5) ≈ 26.6° North of East',
        hints: ['Write velocity as vector', 'Calculate magnitude for speed', 'Use arctan for direction']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['vectors', 'magnitude', 'direction'] },
    content: {
      intro: 'Learn vectors - quantities with both size AND direction. Think of them as arrows that show force, velocity, or movement! Vectors are like GPS directions - they tell you HOW MUCH and WHICH WAY! Scalars are just numbers (speed, temperature, mass), but vectors have both magnitude and direction (velocity, force, displacement).',
      concepts: [
        {
          title: '🧠 What is a Vector? - Arrows with Purpose',
          explanation: 'SCALAR vs VECTOR: Scalar (just a number): Speed: "50 km/h" - but which direction? Temperature: "25°C" - no direction. Mass: "10 kg" - just amount. Vector (number + direction): Velocity: "50 km/h North" - speed AND direction! Force: "100 N upward" - strength AND direction! Displacement: "5 m East" - distance AND direction! VISUALIZING VECTORS AS ARROWS: Vector: 3 units right, 4 units up. The arrow shows: Direction: Northeast (diagonal), Magnitude: Length of arrow = √(3² + 4²) = 5 units. VECTOR NOTATION: Arrow: v⃗ or →v, Components: v = (3, 4) or v = 3i + 4j, In 3D: v = (x, y, z).',
          example: 'Wind vector: "20 m/s from the West" - arrow pointing East. Robot movement: "Move 5m forward, 3m right" - diagonal arrow. Force on a box: "Push with 50N at 45° angle" - arrow at 45°.'
        },
        {
          title: '🔧 Vector Math - Adding and Measuring',
          explanation: 'ADDING VECTORS (Tip-to-Tail Method): Example: Walk 3m East, then 4m North. Result: (3, 4). Component Addition: v₁ = (3, 0), v₂ = (0, 4), v₁ + v₂ = (3+0, 0+4) = (3, 4). MAGNITUDE (Length of Vector): Formula: |v| = √(x² + y² + z²). Example: v = (3, 4), |v| = √(3² + 4²) = √25 = 5 units. DIRECTION (Angle): Formula: θ = arctan(y/x). Example: v = (3, 4), θ = arctan(4/3) ≈ 53.1° from horizontal. SCALAR MULTIPLICATION: Multiply vector by a number = change its length. Example: v = (2, 3), 2v = (4, 6) - twice as long, same direction.',
          example: 'Adding vectors: (3, 0) + (0, 4) = (3, 4). Magnitude: |(3, 4)| = √(9 + 16) = 5. Direction: arctan(4/3) ≈ 53.1°. Scalar multiplication: 2 × (2, 3) = (4, 6).'
        },
        {
          title: '🧮 Engineering Applications',
          explanation: 'PROBLEM 1: Two Motors Pushing a Robot. Motor 1: F₁ = (30, 40) N, Motor 2: F₂ = (20, 10) N. Total: F_total = (50, 50) N. Magnitude: |F_total| = √(50² + 50²) ≈ 70.7 N. Direction: θ = 45°. PROBLEM 2: Drone Velocity. v = (10, 5) m/s. Speed: |v| = √(10² + 5²) ≈ 11.2 m/s. Heading: θ = arctan(5/10) ≈ 26.6° North of East.',
          example: 'Robot forces: F₁ = (30, 40) N, F₂ = (20, 10) N. Total = (50, 50) N, magnitude = 70.7 N at 45°. Drone velocity: (10, 5) m/s, speed = 11.2 m/s, heading = 26.6° North of East.'
        }
      ],
      realWorld: [
        {
          icon: '🤖',
          title: 'Robot Force Systems',
          description: 'Robots use multiple motors to generate forces. Each motor produces a force vector. Total force is the sum of all force vectors. Engineers calculate resultant force using vector addition. Force balance requires net force = 0 for stable operation.'
        },
        {
          icon: '🚁',
          title: 'Drone Navigation',
          description: 'Drones use velocity vectors for navigation. Velocity = speed + direction. Multiple propellers generate force vectors. Flight controller calculates resultant force. GPS provides position vectors for navigation.'
        },
        {
          icon: '🏗️',
          title: 'Structural Forces',
          description: 'Buildings experience multiple force vectors. Gravity (downward), wind (horizontal), support forces. Engineers calculate resultant forces. Structural analysis uses vector addition. Force balance ensures structural stability.'
        },
        {
          icon: '🚗',
          title: 'Vehicle Dynamics',
          description: 'Cars experience multiple force vectors. Engine force (forward), friction (backward), gravity (down), normal force (up). Net force determines acceleration. Traction depends on force vector components. Stability requires balanced force vectors.'
        },
        {
          icon: '⚡',
          title: 'Electrical Fields',
          description: 'Electric fields are vector fields. Field strength has magnitude and direction. Multiple charges create field vectors. Engineers calculate resultant fields. Field vectors determine force on charges.'
        }
      ]
    }
  },
  11: {
    id: 11,
    title: 'Geometry & Trigonometry: Dot & Cross Product',
    subtitle: 'Advanced Vector Operations',
    description: 'Master dot and cross products - powerful tools for calculating work, torque, and finding perpendicular vectors',
    coreIdea: 'Dot product measures alignment between vectors; cross product finds perpendicular vectors and calculates torque',
    engineeringExample: 'Work calculations, torque, force analysis, perpendicular vectors',
    learningObjectives: [
      'Understand dot product and its applications',
      'Understand cross product and its applications',
      'Calculate work using dot product',
      'Calculate torque using cross product',
      'Apply dot and cross products to engineering problems'
    ],
    keyEquations: [
      { eq: '\\vec{v} \\cdot \\vec{w} = v_x w_x + v_y w_y', meaning: 'Dot product (2D)' },
      { eq: 'W = \\vec{F} \\cdot \\vec{d}', meaning: 'Work = Force · Displacement' },
      { eq: '|\\vec{v} \\times \\vec{w}| = v_x w_y - v_y w_x', meaning: 'Cross product magnitude (2D)' },
      { eq: '\\tau = \\vec{r} \\times \\vec{F}', meaning: 'Torque = radius × Force' },
      { eq: '\\vec{v} \\cdot \\vec{w} = 0 \\text{ if perpendicular}', meaning: 'Dot product = 0 when perpendicular' }
    ],
    practiceProblems: [
      {
        id: '2.11a',
        prompt: 'Calculate dot product: (2, 3) · (4, 1)',
        solution: 'v · w = 2×4 + 3×1 = 8 + 3 = 11',
        hints: ['Multiply matching components', 'x-components: 2×4=8', 'y-components: 3×1=3', 'Add them together']
      },
      {
        id: '2.11b',
        prompt: 'A robot pushes with force F = (20, 15) N. Object moves d = (3, 2) m. Find work done.',
        solution: 'Work = F · d = 20×3 + 15×2 = 60 + 30 = 90 Joules',
        hints: ['Use Work = F · d', 'Calculate dot product', 'Work is in Joules']
      },
      {
        id: '2.11c',
        prompt: 'Check if vectors (4, 3) and (-3, 4) are perpendicular.',
        solution: 'v · w = 4×(-3) + 3×4 = -12 + 12 = 0\nYes! They are perpendicular (dot product = 0)',
        hints: ['Calculate dot product', 'If dot product = 0, vectors are perpendicular', 'Check the result']
      },
      {
        id: '2.11d',
        prompt: 'Wrench length r = 0.4 m, force F = 60 N (perpendicular). Find torque.',
        solution: 'Torque = r × F = 0.4 × 60 = 24 N·m',
        hints: ['Use τ = r × F', 'For perpendicular force, multiply directly', 'Torque units: N·m']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['dot-product', 'cross-product', 'torque', 'work'] },
    content: {
      intro: 'Master dot and cross products - powerful tools for calculating work, torque, and finding perpendicular vectors in engineering! The dot product tells you HOW MUCH two vectors point in the same direction. The cross product creates a NEW vector perpendicular to both inputs, essential for torque calculations.',
      concepts: [
        {
          title: '🧠 Dot Product - Measuring Alignment',
          explanation: 'DOT PRODUCT FORMULA: v · w = vₓwₓ + vᵧwᵧ. Think: Multiply matching components, then add them up! Example: v = (2, 3), w = (4, 1). v · w = 2×4 + 3×1 = 8 + 3 = 11. Result: 11 (a single number, not a vector!). WHAT DOES IT MEAN? Positive result: Vectors point in similar directions (angle < 90°). Zero result: Vectors are PERPENDICULAR! (angle = 90°). Negative result: Vectors point in opposite directions (angle > 90°). REAL-WORLD USES: 1) WORK in Physics: Work = Force · Displacement. 2) CHECK PERPENDICULARITY: If v · w = 0, vectors are perpendicular. 3) FIND ANGLE BETWEEN VECTORS: cos(θ) = (v · w) / (|v| × |w|).',
          example: 'Work calculation: Push box with F = (10, 0) N, box moves d = (5, 3) m. Work = 10×5 + 0×3 = 50 Joules. Perpendicular check: v = (3, 4), w = (-4, 3). v · w = 3×(-4) + 4×3 = -12 + 12 = 0. They are perpendicular!'
        },
        {
          title: '🔧 Cross Product - Finding Perpendiculars',
          explanation: '2D SIMPLIFIED VERSION: For 2D vectors, we find the MAGNITUDE: |v × w| = vₓwᵧ - vᵧwₓ. Example: v = (3, 2), w = (1, 4). |v × w| = 3×4 - 2×1 = 12 - 2 = 10. WHAT DOES IT MEAN? The magnitude tells you: Area of parallelogram formed by the vectors, How "perpendicular" the vectors are. REAL-WORLD USES: 1) TORQUE (Rotational Force): τ = r × F. Visual: Force applied at distance r from pivot creates torque. 2) WRENCH EXAMPLE: r = 0.3 m, F = 50 N (perpendicular). Torque = 0.3 × 50 = 15 N·m. Longer wrench = more torque! Perpendicular force = maximum torque! 3) AREA CALCULATION: Triangle with sides v = (4, 0) and w = (0, 3). Area = ½|v × w| = ½(4×3 - 0×0) = 6 square units.',
          example: 'Wrench torque: r = 0.3 m, F = 50 N (perpendicular). Torque = 0.3 × 50 = 15 N·m. Area calculation: Triangle with sides (4, 0) and (0, 3). Area = ½|(4,0) × (0,3)| = ½(12) = 6 square units.'
        },
        {
          title: '🧮 Engineering Applications',
          explanation: 'PROBLEM 1: Calculate Work Done. Robot pushes with F = (20, 15) N, object moves d = (3, 2) m. Work = F · d = 20×3 + 15×2 = 60 + 30 = 90 Joules. PROBLEM 2: Check if Perpendicular. Beam A: v = (4, 3), Beam B: w = (-3, 4). v · w = 4×(-3) + 3×4 = -12 + 12 = 0. Yes! They are perpendicular! PROBLEM 3: Wrench Torque. Wrench length: r = 0.4 m, Applied force: F = 60 N (perpendicular). Torque = r × F = 0.4 × 60 = 24 N·m.',
          example: 'Work: F = (20, 15) N, d = (3, 2) m. Work = 90 Joules. Perpendicular check: (4, 3) · (-3, 4) = 0 ✓. Torque: r = 0.4 m, F = 60 N. Torque = 24 N·m.'
        }
      ],
      realWorld: [
        {
          icon: '🔧',
          title: 'Torque and Rotation',
          description: 'Wrenches use torque (r × F) to turn bolts. Longer wrench = more torque for same force. Perpendicular force = maximum torque. Electric motors generate torque using magnetic fields. Engine crankshafts convert linear force to rotational torque.'
        },
        {
          icon: '⚡',
          title: 'Work and Energy',
          description: 'Work = Force · Displacement (dot product). Only force component in direction of motion does work. Pushing perpendicular to motion does no work. Mechanical advantage uses force vectors. Energy transfer depends on work done.'
        },
        {
          icon: '🏗️',
          title: 'Structural Analysis',
          description: 'Engineers check if support beams are perpendicular using dot product. Perpendicular beams (dot product = 0) provide optimal support. Force vectors analyzed using dot and cross products. Torque analysis ensures structural stability.'
        },
        {
          icon: '🚁',
          title: 'Aircraft Control',
          description: 'Aircraft control surfaces generate torque. Rudder (yaw), elevator (pitch), ailerons (roll). Each control surface applies force at distance from center. Torque calculations determine control effectiveness. Flight controllers use vector operations.'
        },
        {
          icon: '🤖',
          title: 'Robot Arm Design',
          description: 'Robot arms use torque for movement. Each joint generates torque (r × F). Motor torque calculated using cross product. Optimal arm length for maximum torque. Force vectors determine joint torques.'
        }
      ]
    }
  },
  12: {
    id: 12,
    title: 'Geometry & Trigonometry: Transformations & Rotations',
    subtitle: 'Spinning Points in Space',
    description: 'Understand 3D rotations and transformations - essential for robotics, animation, CAD, and game development',
    coreIdea: 'Rotation matrices transform coordinates, enabling 3D rotations around X, Y, Z axes',
    engineeringExample: 'Robot arm joints, drone stabilization, 3D game cameras, CAD software',
    learningObjectives: [
      'Understand 2D rotation formulas',
      'Understand 3D rotation matrices',
      'Apply rotations to points and objects',
      'Use rotation matrices for transformations',
      'Apply rotations to engineering problems'
    ],
    keyEquations: [
      { eq: 'x\' = x\\cos(\\theta) - y\\sin(\\theta)', meaning: '2D rotation: new x-coordinate' },
      { eq: 'y\' = x\\sin(\\theta) + y\\cos(\\theta)', meaning: '2D rotation: new y-coordinate' },
      { eq: 'R(\\theta) = \\begin{bmatrix} \\cos(\\theta) & -\\sin(\\theta) \\\\ \\sin(\\theta) & \\cos(\\theta) \\end{bmatrix}', meaning: '2D rotation matrix' },
      { eq: '90°: (x,y) \\to (-y,x)', meaning: '90° rotation shortcut' },
      { eq: '180°: (x,y) \\to (-x,-y)', meaning: '180° rotation shortcut' }
    ],
    practiceProblems: [
      {
        id: '2.12a',
        prompt: 'Rotate point (1, 0) by 90° counterclockwise.',
        solution: 'Use shortcut: (x, y) → (-y, x)\n(1, 0) → (0, 1)\nOr using formulas:\nx\' = 1(0) - 0(1) = 0\ny\' = 1(1) + 0(0) = 1\nResult: (0, 1)',
        hints: ['Use 90° shortcut: (x,y) → (-y,x)', 'Or use rotation formulas', 'cos(90°) = 0, sin(90°) = 1']
      },
      {
        id: '2.12b',
        prompt: 'Rotate point (2, 0) by 45°.',
        solution: 'cos(45°) = 0.707, sin(45°) = 0.707\nx\' = 2(0.707) - 0(0.707) = 1.414\ny\' = 2(0.707) + 0(0.707) = 1.414\nResult: (1.414, 1.414)',
        hints: ['Use rotation formulas', 'cos(45°) = sin(45°) = 0.707', 'Calculate step by step']
      },
      {
        id: '2.12c',
        prompt: 'Rotate point (4, 3) by 90°.',
        solution: 'Use shortcut: (x, y) → (-y, x)\n(4, 3) → (-3, 4)',
        hints: ['Use 90° shortcut', 'Swap coordinates and negate first', 'Check with formulas if needed']
      },
      {
        id: '2.12d',
        prompt: 'A robot gripper is at (10, 0) cm from robot center. Robot rotates 30°. Find new position.',
        solution: 'cos(30°) = 0.866, sin(30°) = 0.5\nx\' = 10(0.866) - 0(0.5) = 8.66 cm\ny\' = 10(0.5) + 0(0.866) = 5 cm\nNew position: (8.66, 5)',
        hints: ['Use rotation formulas', 'cos(30°) = 0.866, sin(30°) = 0.5', 'Calculate new coordinates']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['rotation', 'transformation', 'matrices'] },
    content: {
      intro: 'Understand 3D rotations and transformations - essential for robotics, animation, CAD, and game development! Rotation = spinning a point around the origin. 2D rotations work on a flat plane, while 3D rotations work around X, Y, or Z axes. Rotation matrices let you rotate ANY point easily!',
      concepts: [
        {
          title: '🧠 Rotation Basics - Spinning Points',
          explanation: '2D ROTATION FORMULAS: To rotate point (x, y) by angle θ around origin: x\' = x cos(θ) - y sin(θ), y\' = x sin(θ) + y cos(θ). COMMON ROTATIONS: 90° rotation: (x, y) → (-y, x). 180° rotation: (x, y) → (-x, -y). 270° rotation (or -90°): (x, y) → (y, -x). 3D ROTATIONS: In 3D, we rotate around axes: Rotate around X-axis: y and z change. Rotate around Y-axis: x and z change. Rotate around Z-axis: x and y change (like 2D!). Used in: drone orientation, robot arms, 3D games.',
          example: 'Rotate (1, 0) by 90°: x\' = 1(0) - 0(1) = 0, y\' = 1(1) + 0(0) = 1. Result: (0, 1) ✓. Or use shortcut: (1, 0) → (0, 1).'
        },
        {
          title: '🔧 Rotation Matrices - The Power Tool',
          explanation: '2D ROTATION MATRIX: R(θ) = [cos(θ)  -sin(θ); sin(θ)   cos(θ)]. To rotate point (x, y): [x\'; y\'] = R(θ) [x; y]. WHY USE MATRICES? 1) Rotate multiple points at once. 2) Combine rotations easily. 3) Used in computer graphics. 4) Essential for robotics. 3D ROTATION MATRICES: Around Z-axis (like 2D): Rz(θ) = [cos(θ) -sin(θ) 0; sin(θ) cos(θ) 0; 0 0 1]. Around X-axis: Rx(θ) = [1 0 0; 0 cos(θ) -sin(θ); 0 sin(θ) cos(θ)]. Around Y-axis: Ry(θ) = [cos(θ) 0 sin(θ); 0 1 0; -sin(θ) 0 cos(θ)].',
          example: 'Rotate (2, 1) by 45°: cos(45°) = 0.707, sin(45°) = 0.707. x\' = 0.707(2) - 0.707(1) = 0.707, y\' = 0.707(2) + 0.707(1) = 2.121. Result: (0.707, 2.121).'
        },
        {
          title: '🧮 Engineering Applications',
          explanation: 'ROBOT ARM JOINTS: Each joint rotates the arm segment. Multiple joints = complex rotations. Forward kinematics: calculate end position from joint angles. Inverse kinematics: calculate joint angles from desired position. DRONE STABILIZATION: Drones rotate around roll, pitch, yaw axes. Flight controller uses rotation matrices. Gyroscopes measure rotation rates. Stabilization algorithms use rotation transformations. 3D GAME CAMERAS: Camera rotation changes view direction. Players control camera rotation. Smooth rotation requires interpolation. Rotation matrices transform 3D coordinates.',
          example: 'Robot gripper at (10, 0) cm, robot rotates 30°: New position = (8.66, 5) cm. Square corners rotated 45°: Square becomes a diamond shape.'
        }
      ],
      realWorld: [
        {
          icon: '🤖',
          title: 'Robot Arm Control',
          description: 'Robot arms use rotations for movement. Each joint rotates around an axis. Forward kinematics calculates end-effector position. Inverse kinematics calculates required joint angles. Rotation matrices transform coordinates between joints. Multi-axis robots use combined rotations.'
        },
        {
          icon: '🚁',
          title: 'Drone Stabilization',
          description: 'Drones rotate around three axes: roll, pitch, yaw. Flight controllers use rotation matrices. Gyroscopes measure rotation rates. Stabilization algorithms correct rotations. Gimbal systems isolate camera from drone rotation.'
        },
        {
          icon: '🎮',
          title: '3D Game Development',
          description: '3D games use rotations extensively. Camera rotation changes view direction. Object rotation for animation. Player controls use rotation matrices. Smooth rotations require interpolation. Graphics engines optimize rotation calculations.'
        },
        {
          icon: '🏗️',
          title: 'CAD Software',
          description: 'CAD software uses rotations for object orientation. Users rotate objects in 3D space. Multiple rotations combine using matrices. Precise rotations for manufacturing. Assembly planning uses rotation transformations.'
        },
        {
          icon: '🛰️',
          title: 'Satellite Orientation',
          description: 'Satellites rotate for attitude control. Solar panels orient toward sun. Antennas point toward Earth. Reaction wheels control rotation. Rotation matrices track satellite orientation. Precise orientation critical for communication.'
        }
      ]
    }
  }
};

export default unit2Lessons;
