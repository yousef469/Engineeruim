// Mathematics Quizzes for lessons 1-27
export const mathematicsQuizzes = {
  // Unit 1: Algebra & Equations (Lessons 1-6)
  1: {
    lessonId: 1,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What are variables in engineering?', options: ['Fixed numbers', 'Containers that hold values', 'Units', 'Equations'], correctAnswer: 1, explanation: 'Variables are containers that hold values - like labeled boxes for mass, force, velocity, etc.' },
      { id: 2, type: 'multiple-choice', question: 'Convert 72 km/h to m/s.', options: ['20 m/s', '25 m/s', '30 m/s', '72 m/s'], correctAnswer: 0, explanation: '72 km/h ÷ 3.6 = 20 m/s. Quick trick: divide by 3.6 to convert km/h to m/s.' },
      { id: 3, type: 'true-false', question: 'Units are optional in engineering calculations.', correctAnswer: false, explanation: 'False! Units are critical - NASA lost $327 million due to a unit mismatch (pounds vs Newtons).' },
      { id: 4, type: 'multiple-choice', question: 'A robot moves at 5 m/s for 20 meters. How long did it take?', options: ['4 seconds', '5 seconds', '10 seconds', '100 seconds'], correctAnswer: 0, explanation: 'Using v = d/t, rearrange to t = d/v = 20/5 = 4 seconds.' }
    ]
  },
  2: {
    lessonId: 2,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Solve: 3x + 7 = 22', options: ['x = 3', 'x = 5', 'x = 7', 'x = 15'], correctAnswer: 1, explanation: 'Subtract 7: 3x = 15, then divide by 3: x = 5.' },
      { id: 2, type: 'multiple-choice', question: 'Using Ohm\'s Law V = I × R, if V = 12V and R = 4Ω, find I.', options: ['2 A', '3 A', '4 A', '48 A'], correctAnswer: 1, explanation: 'I = V/R = 12/4 = 3 Amperes.' },
      { id: 3, type: 'true-false', question: 'Linear equations form straight lines when graphed.', correctAnswer: true, explanation: 'Correct! Linear equations have the form ax + b = c and graph as straight lines.' },
      { id: 4, type: 'multiple-choice', question: 'A robot moves at 5 m/s for t seconds and travels 20 meters. Find t.', options: ['2 seconds', '4 seconds', '5 seconds', '15 seconds'], correctAnswer: 1, explanation: 'Using 5t = 20, divide both sides by 5: t = 4 seconds.' }
    ]
  },
  3: {
    lessonId: 3,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the highest power in a quadratic equation?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Quadratic equations have x² as the highest power (power of 2).' },
      { id: 2, type: 'multiple-choice', question: 'A rocket\'s height is h = -5t² + 50t. When does it return to ground?', options: ['t = 0', 't = 5', 't = 10', 't = 50'], correctAnswer: 2, explanation: 'Set h = 0: -5t² + 50t = 0, factor: t(-5t + 50) = 0, so t = 0 (launch) or t = 10 (landing).' },
      { id: 3, type: 'true-false', question: 'Quadratic equations model projectile motion.', correctAnswer: true, explanation: 'Correct! Projectile height follows h = -5t² + v₀t + h₀, which is a quadratic equation.' },
      { id: 4, type: 'multiple-choice', question: 'Find the derivative of f(x) = x³', options: ['x²', '2x²', '3x²', '3x'], correctAnswer: 2, explanation: 'Using power rule: f\'(x) = 3x² (bring down exponent, subtract 1).' }
    ]
  },
  4: {
    lessonId: 4,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Solve the system: x + y = 10 and 2x - y = 5', options: ['x = 3, y = 7', 'x = 5, y = 5', 'x = 7, y = 3', 'x = 10, y = 0'], correctAnswer: 1, explanation: 'Add equations: 3x = 15, so x = 5. Then 5 + y = 10, so y = 5.' },
      { id: 2, type: 'multiple-choice', question: 'A plane has thrust T and drag D: T - D = 1000 N and T + D = 6000 N. Find T.', options: ['2500 N', '3000 N', '3500 N', '5000 N'], correctAnswer: 2, explanation: 'Add equations: 2T = 7000, so T = 3500 N.' },
      { id: 3, type: 'true-false', question: 'Systems of equations have multiple unknowns and multiple constraints.', correctAnswer: true, explanation: 'Correct! Systems require all equations to be satisfied simultaneously.' },
      { id: 4, type: 'multiple-choice', question: 'Circuit: I₁ + I₂ = 5 A and 2I₁ + 3I₂ = 12. Find I₁.', options: ['2 A', '3 A', '4 A', '5 A'], correctAnswer: 1, explanation: 'From first: I₁ = 5 - I₂. Substitute: 2(5 - I₂) + 3I₂ = 12, so I₂ = 2 A, then I₁ = 3 A.' }
    ]
  },
  5: {
    lessonId: 5,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What does 2³ equal?', options: ['4', '6', '8', '9'], correctAnswer: 2, explanation: '2³ = 2 × 2 × 2 = 8.' },
      { id: 2, type: 'multiple-choice', question: 'A bacteria population doubles every hour: P(t) = 100 × 2^t. How many after 5 hours?', options: ['500', '1600', '3200', '6400'], correctAnswer: 2, explanation: 'P(5) = 100 × 2⁵ = 100 × 32 = 3,200 bacteria.' },
      { id: 3, type: 'true-false', question: 'Exponential growth is rapid - doubling every period.', correctAnswer: true, explanation: 'Correct! Exponential growth like 2^t grows very quickly as t increases.' },
      { id: 4, type: 'multiple-choice', question: 'Simplify: x³ × x²', options: ['x⁵', 'x⁶', '2x⁵', 'x'], correctAnswer: 0, explanation: 'Using multiplication rule: x³ × x² = x^(3+2) = x⁵.' }
    ]
  },
  6: {
    lessonId: 6,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'A sound is 1000 times more intense than threshold. Calculate decibels: dB = 10 × log₁₀(I/I₀)', options: ['10 dB', '20 dB', '30 dB', '1000 dB'], correctAnswer: 2, explanation: 'dB = 10 × log₁₀(1000) = 10 × 3 = 30 dB.' },
      { id: 2, type: 'multiple-choice', question: 'What is log₁₀(100)?', options: ['1', '2', '10', '100'], correctAnswer: 1, explanation: 'log₁₀(100) = 2 because 10² = 100.' },
      { id: 3, type: 'true-false', question: 'Logarithms turn multiplication into addition.', correctAnswer: true, explanation: 'Correct! log(xy) = log(x) + log(y) - multiplication becomes addition.' },
      { id: 4, type: 'multiple-choice', question: 'An earthquake has amplitude 10,000 times reference. Calculate magnitude: M = log₁₀(A/A₀)', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'M = log₁₀(10,000) = 4 (because 10⁴ = 10,000).' }
    ]
  },
  // Unit 2: Geometry & Trigonometry (Lessons 7-12)
  7: {
    lessonId: 7,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'A circle has radius 30 cm. Find the area.', options: ['60π cm²', '900π cm²', '1800π cm²', '3600π cm²'], correctAnswer: 1, explanation: 'Area = πr² = π(30)² = 900π cm².' },
      { id: 2, type: 'multiple-choice', question: 'A rectangular drone frame is 50 cm × 40 cm. Find the area.', options: ['90 cm²', '180 cm²', '2000 cm²', '4000 cm²'], correctAnswer: 2, explanation: 'Area = length × width = 50 × 40 = 2,000 cm².' },
      { id: 3, type: 'true-false', question: 'A full circle equals 360 degrees or 2π radians.', correctAnswer: true, explanation: 'Correct! 360° = 2π radians is the conversion between degrees and radians.' },
      { id: 4, type: 'multiple-choice', question: 'A triangular wing section has base 3 m and height 1.5 m. Find the area.', options: ['2.25 m²', '4.5 m²', '6 m²', '9 m²'], correctAnswer: 0, explanation: 'Area = ½ × base × height = ½ × 3 × 1.5 = 2.25 m².' }
    ]
  },
  8: {
    lessonId: 8,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Find the distance from (0, 0) to (3, 4).', options: ['5', '7', '12', '25'], correctAnswer: 0, explanation: 'd = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5 units.' },
      { id: 2, type: 'multiple-choice', question: 'Find the distance from (1, 2, 3) to (4, 6, 8).', options: ['5', '7', '7.07', '10'], correctAnswer: 2, explanation: 'd = √[(4-1)² + (6-2)² + (8-3)²] = √[9 + 16 + 25] = √50 ≈ 7.07 units.' },
      { id: 3, type: 'true-false', question: '3D coordinates use (x, y, z) to locate points in space.', correctAnswer: true, explanation: 'Correct! 3D coordinates add a z-axis for height/depth.' },
      { id: 4, type: 'multiple-choice', question: 'Find the midpoint of (2, 4) and (8, 10).', options: ['(4, 6)', '(5, 7)', '(6, 8)', '(10, 14)'], correctAnswer: 1, explanation: 'M = ((2+8)/2, (4+10)/2) = (5, 7).' }
    ]
  },
  9: {
    lessonId: 9,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'In a right triangle, opposite = 3 and hypotenuse = 5. Find sin(θ).', options: ['0.4', '0.5', '0.6', '0.8'], correctAnswer: 2, explanation: 'sin(θ) = Opposite / Hypotenuse = 3/5 = 0.6.' },
      { id: 2, type: 'multiple-choice', question: 'You are 50 meters from a building. The angle to the top is 60°. Find the building height.', options: ['43.3 m', '50 m', '86.6 m', '100 m'], correctAnswer: 2, explanation: 'tan(60°) = h/50, so h = 50 × 1.732 = 86.6 meters.' },
      { id: 3, type: 'true-false', question: 'SOH-CAH-TOA helps remember trigonometric functions.', correctAnswer: true, explanation: 'Correct! SOH = sin = O/H, CAH = cos = A/H, TOA = tan = O/A.' },
      { id: 4, type: 'multiple-choice', question: 'A ramp rises 2 meters over 10 meters horizontal. Find the ramp angle.', options: ['11.3°', '20°', '45°', '90°'], correctAnswer: 0, explanation: 'tan(θ) = 2/10 = 0.2, so θ = arctan(0.2) ≈ 11.3°.' }
    ]
  },
  10: {
    lessonId: 10,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the difference between scalars and vectors?', options: ['Scalars have direction, vectors don\'t', 'Vectors have both magnitude and direction, scalars only have magnitude', 'They are the same', 'Scalars are larger'], correctAnswer: 1, explanation: 'Vectors have both magnitude (size) and direction, while scalars only have magnitude.' },
      { id: 2, type: 'multiple-choice', question: 'Two forces: F1 = [20, 10] N and F2 = [5, -15] N. Find total force.', options: ['[15, -5] N', '[25, -5] N', '[25, 5] N', '[15, 5] N'], correctAnswer: 1, explanation: 'F_total = F1 + F2 = [20+5, 10+(-15)] = [25, -5] N.' },
      { id: 3, type: 'true-false', question: 'Vectors can be added component-wise.', correctAnswer: true, explanation: 'Correct! Vector addition: [a, b] + [c, d] = [a+c, b+d].' },
      { id: 4, type: 'multiple-choice', question: 'A vector has magnitude 5 and direction 30° from horizontal. Find x-component.', options: ['2.5', '4.33', '5', '8.66'], correctAnswer: 1, explanation: 'x = 5 × cos(30°) = 5 × 0.866 = 4.33.' }
    ]
  },
  11: {
    lessonId: 11,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the Law of Sines used for?', options: ['Right triangles only', 'Any triangle with known angles and sides', 'Only equilateral triangles', 'Only isosceles triangles'], correctAnswer: 1, explanation: 'Law of Sines works for any triangle when you know angles and opposite sides.' },
      { id: 2, type: 'multiple-choice', question: 'In triangle with sides a=5, b=7, angle C=60°, find side c using Law of Cosines.', options: ['6.24', '7.14', '8.66', '10'], correctAnswer: 0, explanation: 'c² = a² + b² - 2ab cos(C) = 25 + 49 - 2(5)(7)(0.5) = 39, so c = √39 ≈ 6.24.' },
      { id: 3, type: 'true-false', question: 'Law of Cosines reduces to Pythagorean theorem for right triangles.', correctAnswer: true, explanation: 'Correct! When C = 90°, cos(90°) = 0, so c² = a² + b² (Pythagorean theorem).' },
      { id: 4, type: 'multiple-choice', question: 'Triangle has angles A=30°, B=60°, side a=5. Find side b using Law of Sines.', options: ['5', '8.66', '10', '12'], correctAnswer: 1, explanation: 'b/sin(B) = a/sin(A), so b = 5 × sin(60°)/sin(30°) = 5 × 0.866/0.5 = 8.66.' }
    ]
  },
  12: {
    lessonId: 12,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the period of sin(x)?', options: ['π', '2π', '4π', '1'], correctAnswer: 1, explanation: 'sin(x) repeats every 2π radians (360°).' },
      { id: 2, type: 'multiple-choice', question: 'What is sin(30°)?', options: ['0', '0.5', '0.707', '1'], correctAnswer: 1, explanation: 'sin(30°) = 0.5 (from 30-60-90 triangle).' },
      { id: 3, type: 'true-false', question: 'Trigonometric functions are periodic - they repeat.', correctAnswer: true, explanation: 'Correct! sin, cos, and tan repeat their values periodically.' },
      { id: 4, type: 'multiple-choice', question: 'What is cos(60°)?', options: ['0', '0.5', '0.707', '1'], correctAnswer: 1, explanation: 'cos(60°) = 0.5 (from 30-60-90 triangle).' }
    ]
  },
  // Unit 3: Calculus Basics (Lessons 13-17)
  13: {
    lessonId: 13,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What does a derivative measure?', options: ['Total value', 'Rate of change', 'Area', 'Volume'], correctAnswer: 1, explanation: 'Derivatives measure rate of change - how fast something is changing.' },
      { id: 2, type: 'multiple-choice', question: 'Find the derivative of f(x) = x³', options: ['x²', '2x²', '3x²', '3x'], correctAnswer: 2, explanation: 'Using power rule: f\'(x) = 3x² (bring down exponent, subtract 1).' },
      { id: 3, type: 'true-false', question: 'The derivative of position is velocity.', correctAnswer: true, explanation: 'Correct! Velocity = derivative of position, acceleration = derivative of velocity.' },
      { id: 4, type: 'multiple-choice', question: 'A rocket\'s height is h(t) = 100t - 5t². Find velocity at t=3s.', options: ['70 m/s', '85 m/s', '100 m/s', '115 m/s'], correctAnswer: 0, explanation: 'v(t) = h\'(t) = 100 - 10t, so v(3) = 100 - 30 = 70 m/s.' }
    ]
  },
  14: {
    lessonId: 14,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the relationship between position, velocity, and acceleration?', options: ['They are independent', 'Velocity is derivative of position, acceleration is derivative of velocity', 'They are the same', 'Position is derivative of velocity'], correctAnswer: 1, explanation: 'Velocity = derivative of position, acceleration = derivative of velocity (second derivative of position).' },
      { id: 2, type: 'multiple-choice', question: 'Position: s(t) = 2t³. Find acceleration at t=2s.', options: ['12 m/s²', '24 m/s²', '48 m/s²', '96 m/s²'], correctAnswer: 1, explanation: 'v(t) = 6t², a(t) = 12t, so a(2) = 24 m/s².' },
      { id: 3, type: 'true-false', question: 'Positive acceleration means speeding up.', correctAnswer: true, explanation: 'Correct! Positive acceleration increases velocity (speeding up).' },
      { id: 4, type: 'multiple-choice', question: 'Ball height: h(t) = 30t - 5t². When does it reach maximum height?', options: ['t = 2s', 't = 3s', 't = 4s', 't = 6s'], correctAnswer: 1, explanation: 'At max height, velocity = 0. v(t) = 30 - 10t = 0, so t = 3 seconds.' }
    ]
  },
  15: {
    lessonId: 15,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What does integration find?', options: ['Rate of change', 'Total value (area under curve)', 'Slope', 'Derivative'], correctAnswer: 1, explanation: 'Integration finds totals - the area under a curve.' },
      { id: 2, type: 'multiple-choice', question: 'Find ∫ 3x² dx', options: ['x³ + C', '3x³ + C', 'x³/3 + C', '3x + C'], correctAnswer: 0, explanation: 'Using power rule: ∫ 3x² dx = 3x³/3 + C = x³ + C.' },
      { id: 3, type: 'true-false', question: 'Integration is the opposite of differentiation.', correctAnswer: true, explanation: 'Correct! Integration "undoes" differentiation, finding totals from rates.' },
      { id: 4, type: 'multiple-choice', question: 'Velocity v(t) = 10t. Find distance from t=0 to t=3s.', options: ['30 m', '45 m', '60 m', '90 m'], correctAnswer: 1, explanation: 's(t) = ∫ 10t dt = 5t², so s(3) - s(0) = 45 - 0 = 45 meters.' }
    ]
  },
  16: {
    lessonId: 16,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is kinetic energy?', options: ['Energy of position', 'Energy of motion', 'Stored energy', 'Heat energy'], correctAnswer: 1, explanation: 'Kinetic energy = ½mv² - energy of motion.' },
      { id: 2, type: 'multiple-choice', question: 'Work equals:', options: ['Force × Distance', 'Mass × Velocity', 'Power × Time', 'Energy / Time'], correctAnswer: 0, explanation: 'Work = Force × Distance (when force is constant).' },
      { id: 3, type: 'true-false', question: 'Work can be calculated as the integral of force.', correctAnswer: true, explanation: 'Correct! W = ∫ F dx - work is the integral of force over distance.' },
      { id: 4, type: 'multiple-choice', question: 'Force F = 20 N over distance 0 to 5m. Find work done.', options: ['20 J', '50 J', '100 J', '200 J'], correctAnswer: 2, explanation: 'Work = ∫₀⁵ 20 dx = 20x |₀⁵ = 100 - 0 = 100 Joules.' }
    ]
  },
  17: {
    lessonId: 17,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is optimization in calculus?', options: ['Finding derivatives', 'Finding maximum or minimum values', 'Finding integrals', 'Finding limits'], correctAnswer: 1, explanation: 'Optimization finds maximum or minimum values by setting derivatives equal to zero.' },
      { id: 2, type: 'multiple-choice', question: 'To find maximum, set:', options: ['Function = 0', 'Derivative = 0', 'Integral = 0', 'Second derivative = 0'], correctAnswer: 1, explanation: 'Set derivative = 0 to find critical points (maxima or minima).' },
      { id: 3, type: 'true-false', question: 'At a maximum point, the derivative equals zero.', correctAnswer: true, explanation: 'Correct! At maximum (or minimum), the slope (derivative) is zero.' },
      { id: 4, type: 'multiple-choice', question: 'A box has volume V = x(10-x)(8-x). Find x for maximum volume.', options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], correctAnswer: 1, explanation: 'Set V\' = 0 and solve. Maximum occurs at critical point (requires solving derivative).' }
    ]
  },
  // Unit 4: Linear Algebra Intro (Lessons 18-21)
  18: {
    lessonId: 18,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is a vector?', options: ['A single number', 'An ordered list of numbers', 'A matrix', 'An equation'], correctAnswer: 1, explanation: 'Vectors are ordered lists of numbers - like [x, y, z] for 3D position.' },
      { id: 2, type: 'multiple-choice', question: 'Robot is at: 10m east, 5m north, 3m high. Create position vector.', options: ['[10, 5, 3]', '[3, 5, 10]', '[5, 10, 3]', '[10, 3, 5]'], correctAnswer: 0, explanation: 'Position vector: [10, 5, 3] represents (east, north, height).' },
      { id: 3, type: 'true-false', question: 'Matrices are rectangular arrays of numbers.', correctAnswer: true, explanation: 'Correct! Matrices store data in rows and columns, like spreadsheets.' },
      { id: 4, type: 'multiple-choice', question: 'Two forces: F1 = [20, 10] N and F2 = [5, -15] N. Find total force.', options: ['[15, -5] N', '[25, -5] N', '[25, 5] N', '[15, 5] N'], correctAnswer: 1, explanation: 'F_total = F1 + F2 = [20+5, 10+(-15)] = [25, -5] N.' }
    ]
  },
  19: {
    lessonId: 19,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Add matrices: [1 2; 3 4] + [5 6; 7 8]', options: ['[6 8; 10 12]', '[5 8; 10 12]', '[6 7; 10 11]', '[5 7; 10 12]'], correctAnswer: 0, explanation: 'Add component-wise: [1+5 2+6; 3+7 4+8] = [6 8; 10 12].' },
      { id: 2, type: 'multiple-choice', question: 'Multiply matrices: [1 2; 3 4] × [5 6; 7 8]. Find top-left element.', options: ['19', '22', '43', '50'], correctAnswer: 0, explanation: 'Top-left = (1×5 + 2×7) = 5 + 14 = 19.' },
      { id: 3, type: 'true-false', question: 'Matrix multiplication uses row × column products.', correctAnswer: true, explanation: 'Correct! Each element in result = row of first × column of second.' },
      { id: 4, type: 'multiple-choice', question: 'Scale matrix by 3: 3 × [1 2; 3 4]', options: ['[3 5; 6 7]', '[3 6; 9 12]', '[4 5; 6 7]', '[1 2; 3 4]'], correctAnswer: 1, explanation: 'Multiply every element by 3: [3×1 3×2; 3×3 3×4] = [3 6; 9 12].' }
    ]
  },
  20: {
    lessonId: 20,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Convert system to matrix form: 2x + 3y = 8, 4x + y = 10', options: ['[2 3; 4 1] × [x; y] = [8; 10]', '[x y; 2 3] = [8; 10]', '[2 4; 3 1] × [x; y] = [8; 10]', '[8 10; 2 3] = [x; y]'], correctAnswer: 0, explanation: 'Ax = b form: [2 3; 4 1] × [x; y] = [8; 10].' },
      { id: 2, type: 'multiple-choice', question: 'Solve system: F1 + 2F2 = 10 N, 3F1 - F2 = 5 N. Find F1.', options: ['2.86 N', '3.57 N', '4 N', '5 N'], correctAnswer: 0, explanation: 'From first: F1 = 10 - 2F2. Substitute: 3(10 - 2F2) - F2 = 5, so F2 = 25/7 ≈ 3.57 N, then F1 ≈ 2.86 N.' },
      { id: 3, type: 'true-false', question: 'Systems of equations can be written as Ax = b.', correctAnswer: true, explanation: 'Correct! A = coefficients, x = variables, b = constants.' },
      { id: 4, type: 'multiple-choice', question: 'Circuit: 2I1 + I2 = 10 V, I1 + 3I2 = 11 V. Find I1.', options: ['2.6 A', '3.8 A', '4 A', '5 A'], correctAnswer: 1, explanation: 'From first: I2 = 10 - 2I1. Substitute: I1 + 3(10 - 2I1) = 11, so I1 = 3.8 A.' }
    ]
  },
  21: {
    lessonId: 21,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What does a rotation matrix do?', options: ['Moves objects', 'Rotates objects around a point', 'Scales objects', 'Reflects objects'], correctAnswer: 1, explanation: 'Rotation matrices rotate points around the origin by a given angle.' },
      { id: 2, type: 'multiple-choice', question: 'Rotate point (1, 0) by 90° using rotation matrix. What is the result?', options: ['(0, 1)', '(0, -1)', '(-1, 0)', '(1, 0)'], correctAnswer: 0, explanation: '90° rotation: R = [0 -1; 1 0]. R × [1; 0] = [0; 1], so result is (0, 1).' },
      { id: 3, type: 'true-false', question: 'Transformations can be combined using matrix multiplication.', correctAnswer: true, explanation: 'Correct! Multiple transformations can be combined: T = R × S (rotate then scale).' },
      { id: 4, type: 'multiple-choice', question: 'What does a scaling matrix [2 0; 0 2] do?', options: ['Rotates by 2°', 'Scales by factor of 2', 'Translates by 2 units', 'Reflects'], correctAnswer: 1, explanation: 'Scaling matrix [2 0; 0 2] doubles both x and y coordinates.' }
    ]
  },
  // Unit 5: Statistics & Data (Lessons 22-27)
  22: {
    lessonId: 22,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Temperature readings: 22, 23, 22, 24, 22, 25, 23. Find the mean.', options: ['22°C', '23°C', '24°C', '25°C'], correctAnswer: 1, explanation: 'Mean = (22+23+22+24+22+25+23)/7 = 161/7 = 23°C.' },
      { id: 2, type: 'multiple-choice', question: 'Motor RPM: 1200, 1250, 1200, 1300, 1200, 1350. Find the median.', options: ['1200 RPM', '1225 RPM', '1250 RPM', '1300 RPM'], correctAnswer: 1, explanation: 'Sorted: 1200, 1200, 1200, 1250, 1300, 1350. Median = (1200+1250)/2 = 1225 RPM.' },
      { id: 3, type: 'true-false', question: 'Median is not affected by outliers.', correctAnswer: true, explanation: 'Correct! Median uses the middle value, so outliers don\'t affect it.' },
      { id: 4, type: 'multiple-choice', question: 'Data: 10, 10, 10, 20, 20, 20, 30. Find the mode.', options: ['10', '20', 'Both 10 and 20', '30'], correctAnswer: 2, explanation: 'Both 10 and 20 appear 3 times (most frequent), so mode is both.' }
    ]
  },
  23: {
    lessonId: 23,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Motor RPM: 1000, 1020, 980, 1010, 990. Find standard deviation.', options: ['10 RPM', '14.14 RPM', '20 RPM', '50 RPM'], correctAnswer: 1, explanation: 'Mean = 1000. Differences: 0, 20, -20, 10, -10. Squared: 0, 400, 400, 100, 100. Average = 200. σ = √200 ≈ 14.14 RPM.' },
      { id: 2, type: 'multiple-choice', question: 'Two sensors. Sensor A: σ = 0.8°C, Sensor B: σ = 2.28°C. Which is more consistent?', options: ['Sensor A', 'Sensor B', 'Both equal', 'Cannot determine'], correctAnswer: 0, explanation: 'Lower standard deviation = more consistent. Sensor A (σ = 0.8) is more consistent than Sensor B (σ = 2.28).' },
      { id: 3, type: 'true-false', question: 'Low standard deviation means data is clustered together.', correctAnswer: true, explanation: 'Correct! Low σ = consistent data, high σ = spread out data.' },
      { id: 4, type: 'multiple-choice', question: 'Data: 10, 10, 10, 10. What is the standard deviation?', options: ['0', '1', '10', 'Cannot calculate'], correctAnswer: 0, explanation: 'All values are the same, so differences from mean are all zero. σ = 0 (perfect consistency).' }
    ]
  },
  24: {
    lessonId: 24,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'Sensor fails 1 in 100 times. Find P(success).', options: ['0.01', '0.90', '0.99', '1.00'], correctAnswer: 2, explanation: 'P(failure) = 1/100 = 0.01, so P(success) = 1 - 0.01 = 0.99 = 99%.' },
      { id: 2, type: 'multiple-choice', question: 'Two independent sensors: P(works) = 0.95 each. Find P(both work).', options: ['0.90', '0.9025', '0.95', '1.90'], correctAnswer: 1, explanation: 'P(both work) = P(works) × P(works) = 0.95 × 0.95 = 0.9025 = 90.25%.' },
      { id: 3, type: 'true-false', question: 'Probability ranges from 0 (impossible) to 1 (certain).', correctAnswer: true, explanation: 'Correct! Probability is always between 0 and 1 (or 0% and 100%).' },
      { id: 4, type: 'multiple-choice', question: '3 motors, need at least 1 working. Each: P(works) = 0.90. Find P(at least 1 works).', options: ['0.90', '0.99', '0.999', '1.00'], correctAnswer: 2, explanation: 'P(all fail) = 0.10³ = 0.001, so P(≥1 works) = 1 - 0.001 = 0.999 = 99.9%.' }
    ]
  },
  25: {
    lessonId: 25,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is the difference between systematic and random errors?', options: ['Systematic errors are always larger', 'Systematic errors are consistent bias, random errors are unpredictable noise', 'They are the same', 'Random errors are always larger'], correctAnswer: 1, explanation: 'Systematic errors are consistent bias (like wrong calibration), random errors are unpredictable noise.' },
      { id: 2, type: 'multiple-choice', question: 'Measurement: 10.2 ± 0.1 cm. What does ±0.1 represent?', options: ['Mean', 'Median', 'Uncertainty', 'Mode'], correctAnswer: 2, explanation: '±0.1 represents the uncertainty - the range of possible values.' },
      { id: 3, type: 'true-false', question: 'All measurements have uncertainty.', correctAnswer: true, explanation: 'Correct! No measurement is perfect - there\'s always some uncertainty.' },
      { id: 4, type: 'multiple-choice', question: 'Length measured as 5.0 cm with uncertainty ±0.1 cm. What is the relative error?', options: ['0.1%', '1%', '2%', '5%'], correctAnswer: 2, explanation: 'Relative error = (0.1/5.0) × 100% = 2%.' }
    ]
  },
  26: {
    lessonId: 26,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What does a graph show?', options: ['Only numbers', 'Relationships and patterns in data', 'Only text', 'Only equations'], correctAnswer: 1, explanation: 'Graphs visualize relationships and patterns, making data easier to understand.' },
      { id: 2, type: 'multiple-choice', question: 'What type of graph shows how one variable changes with another?', options: ['Bar chart', 'Line graph', 'Pie chart', 'Histogram'], correctAnswer: 1, explanation: 'Line graphs show how one variable (y) changes with another (x).' },
      { id: 3, type: 'true-false', question: 'Graphs help identify trends and patterns in data.', correctAnswer: true, explanation: 'Correct! Graphs make it easy to see trends, patterns, and relationships.' },
      { id: 4, type: 'multiple-choice', question: 'What does the slope of a line graph represent?', options: ['Starting value', 'Rate of change', 'Maximum value', 'Minimum value'], correctAnswer: 1, explanation: 'Slope = rise/run = rate of change of y with respect to x.' }
    ]
  },
  27: {
    lessonId: 27,
    questions: [
      { id: 1, type: 'multiple-choice', question: 'What is data analysis?', options: ['Collecting data', 'Making sense of data to find patterns and make decisions', 'Deleting data', 'Storing data'], correctAnswer: 1, explanation: 'Data analysis extracts meaning from data to find patterns, trends, and make informed decisions.' },
      { id: 2, type: 'multiple-choice', question: 'Which tool helps summarize data?', options: ['Graphs only', 'Statistics (mean, median, standard deviation)', 'Equations only', 'Variables only'], correctAnswer: 1, explanation: 'Statistics like mean, median, and standard deviation summarize and describe data.' },
      { id: 3, type: 'true-false', question: 'Data analysis helps engineers make informed decisions.', correctAnswer: true, explanation: 'Correct! Analyzing data helps engineers understand systems and make better decisions.' },
      { id: 4, type: 'multiple-choice', question: 'What does comparing averages tell you?', options: ['Nothing', 'Which system performs better or is more consistent', 'Only the maximum value', 'Only the minimum value'], correctAnswer: 1, explanation: 'Comparing averages (mean, median) helps identify which system performs better or is more consistent.' }
    ]
  }
};

