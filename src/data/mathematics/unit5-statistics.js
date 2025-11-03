// Unit 5: Basic Statistics & Data (Lessons 21-24) - FULLY ENHANCED
export const unit5Lessons = [
  // LESSON 21: Data & Averages
  {
    id: 21,
    title: 'Data & Averages - Finding the Center',
    unit: 'Statistics & Data',
    unitNumber: 5,
    lessonNumber: 1,
    emoji: '🟡',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'Learn to make sense of data! Averages help you find the typical value in sensor readings, test scores, and measurements. Master mean, median, and mode!',
      
      sections: [
        {
          title: '🧠 What is an Average? - Finding the Typical',
          type: 'concept',
          content: `Averages tell you what is TYPICAL in your data!

🎯 THE THREE TYPES:

1. MEAN (Average):
   Add all values, divide by count
   
   Example: Test scores: 80, 85, 90, 95
   Mean = (80+85+90+95)/4 = 350/4 = 87.5

2. MEDIAN (Middle):
   Sort values, pick the middle one
   
   Example: 80, 85, 90, 95
   Middle two: 85 and 90
   Median = (85+90)/2 = 87.5

3. MODE (Most Common):
   The value that appears most often
   
   Example: 80, 85, 85, 90, 85
   Mode = 85 (appears 3 times)

📊 VISUAL UNDERSTANDING:

Data: 2, 4, 4, 6, 8, 10

Number line:
2   4   4   6   8   10
|   |   |   |   |   |
    ↑       ↑
   Mode   Median

Mean = (2+4+4+6+8+10)/6 = 34/6 ≈ 5.67

💡 WHEN TO USE EACH:

MEAN: When data is evenly spread
- Average temperature
- Average speed
- Average sensor reading

MEDIAN: When there are outliers
- House prices (some very expensive)
- Salaries (CEOs skew the mean)
- Test scores with one failure

MODE: When looking for most common
- Most common shoe size
- Most frequent error code
- Popular product choice

🔧 REAL ENGINEERING EXAMPLE:

Sensor readings: 10.2, 10.1, 10.3, 10.2, 15.0

Mean = (10.2+10.1+10.3+10.2+15.0)/5 = 11.16
(Pulled up by outlier!)

Median = 10.2 (middle value)
(Not affected by outlier!)

Mode = 10.2 (appears twice)

Which is best? Median! The 15.0 is probably an error.`
        },
        {
          title: '🔧 Calculating Averages - Step by Step',
          type: 'concept',
          content: `Let's calculate all three averages!

PROBLEM: Motor RPM readings
Data: 1200, 1250, 1200, 1300, 1200, 1350

STEP 1: Calculate MEAN

Add all values:
1200 + 1250 + 1200 + 1300 + 1200 + 1350 = 7500

Divide by count:
Mean = 7500 / 6 = 1250 RPM

STEP 2: Calculate MEDIAN

Sort the data:
1200, 1200, 1200, 1250, 1300, 1350

Find middle:
6 values, so middle is between 3rd and 4th
Median = (1200 + 1250) / 2 = 1225 RPM

STEP 3: Calculate MODE

Count occurrences:
1200 appears 3 times
1250 appears 1 time
1300 appears 1 time
1350 appears 1 time

Mode = 1200 RPM (most common)

📊 SUMMARY:
Mean = 1250 RPM (average)
Median = 1225 RPM (middle)
Mode = 1200 RPM (most common)

The motor typically runs around 1200-1250 RPM!

🎯 ODD vs EVEN COUNT:

Odd count (5 values): 10, 20, 30, 40, 50
Median = 30 (exact middle)

Even count (6 values): 10, 20, 30, 40, 50, 60
Median = (30+40)/2 = 35 (average of middle two)`
        },
        {
          title: '🧮 Practice: Real Sensor Data',
          type: 'practice',
          content: `Analyze real engineering data!

PROBLEM 1: Temperature Sensor
Readings (°C): 22, 23, 22, 24, 22, 25, 23

Find mean:
Sum = 22+23+22+24+22+25+23 = 161
Mean = 161/7 = 23°C

Find median:
Sorted: 22, 22, 22, 23, 23, 24, 25
Middle (4th value) = 23°C

Find mode:
22 appears 3 times (most)
Mode = 22°C

PROBLEM 2: Drone Battery Life
Tests (minutes): 18, 20, 19, 18, 21, 18, 20

Mean = (18+20+19+18+21+18+20)/7 = 134/7 ≈ 19.1 min
Median = 19 min (middle of sorted list)
Mode = 18 min (appears 3 times)

PROBLEM 3: Robot Speed
Trials (m/s): 2.5, 2.7, 2.6, 2.5, 2.8, 2.5

Mean = (2.5+2.7+2.6+2.5+2.8+2.5)/6 = 15.6/6 = 2.6 m/s
Median = (2.5+2.6)/2 = 2.55 m/s
Mode = 2.5 m/s

PROBLEM 4: With Outlier
Sensor: 50, 51, 50, 52, 50, 200 (error!)

Mean = 402/6 = 67 (skewed by error!)
Median = (50+51)/2 = 50.5 (not affected!)
Mode = 50

Use median when outliers present!`
        },
        {
          title: '🧩 Challenge: Quality Control Analysis',
          type: 'simulation',
          content: `Analyze production data!

SCENARIO: Manufacturing Parts
Measuring part lengths (mm):
Day 1: 100.2, 100.1, 100.3, 100.2, 100.1
Day 2: 100.0, 100.5, 100.2, 100.3, 100.1
Day 3: 100.1, 100.2, 100.1, 100.4, 100.2

CHALLENGE 1: Daily Averages

Day 1 Mean:
(100.2+100.1+100.3+100.2+100.1)/5 = 100.18 mm

Day 2 Mean:
(100.0+100.5+100.2+100.3+100.1)/5 = 100.22 mm

Day 3 Mean:
(100.1+100.2+100.1+100.4+100.2)/5 = 100.20 mm

CHALLENGE 2: Overall Average
All 15 measurements:
Mean = (100.18×5 + 100.22×5 + 100.20×5)/15
Mean = 100.20 mm

CHALLENGE 3: Most Common Value
Count all occurrences:
100.1 appears 5 times
100.2 appears 5 times
Mode = 100.1 and 100.2 (bimodal!)

CHALLENGE 4: Quality Check
Target: 100.0 mm ± 0.5 mm
Range: 99.5 to 100.5 mm

All measurements within range? YES!
Mean close to target? YES (100.20 ≈ 100.0)

Production quality: GOOD!

YOUR MISSION:
1. Collect 10 measurements
2. Calculate all three averages
3. Identify any outliers
4. Determine if process is stable!`
        }
      ],
      
      keyTakeaways: [
        'Mean = sum of values / count (average)',
        'Median = middle value when sorted',
        'Mode = most frequently occurring value',
        'Use median when outliers present',
        'Averages help identify typical values in data'
      ],
      
      vocabulary: [
        { term: 'Mean', definition: 'Sum of all values divided by count; the average' },
        { term: 'Median', definition: 'Middle value when data is sorted' },
        { term: 'Mode', definition: 'Most frequently occurring value' },
        { term: 'Outlier', definition: 'Value far from others; unusual data point' },
        { term: 'Data Set', definition: 'Collection of measurements or observations' }
      ],
      
      quiz: [
        {
          question: 'Mean of 10, 20, 30 is:',
          options: ['10', '20', '30', '60'],
          correct: 1
        },
        {
          question: 'Median of 5, 10, 15, 20, 25 is:',
          options: ['10', '15', '20', '75'],
          correct: 1
        },
        {
          question: 'Mode of 2, 3, 3, 4, 3, 5 is:',
          options: ['2', '3', '4', '5'],
          correct: 1
        },
        {
          question: 'Which average is best with outliers?',
          options: ['Mean', 'Median', 'Mode', 'All equal'],
          correct: 1
        },
        {
          question: 'Sensor readings: 50, 51, 50, 52. Mean is:',
          options: ['50', '50.5', '50.75', '51'],
          correct: 2
        }
      ]
    }
  },

  // LESSON 22: Standard Deviation
  {
    id: 22,
    title: 'Standard Deviation - Measuring Consistency',
    unit: 'Statistics & Data',
    unitNumber: 5,
    lessonNumber: 2,
    emoji: '🟡',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'How spread out is your data? Standard deviation tells you if values are clustered together or scattered. Learn which motor is more consistent and which sensor is more reliable!',
      
      sections: [
        {
          title: '🧠 What is Standard Deviation? - Measuring Spread',
          type: 'concept',
          content: `Standard deviation tells you how SPREAD OUT your data is!

🎯 THE CONCEPT:

Low standard deviation = Data clustered together
High standard deviation = Data spread out

📊 VISUAL COMPARISON:

Motor A: 100, 101, 100, 99, 100 RPM
Very consistent! (low spread)

Motor B: 80, 120, 90, 110, 100 RPM
Inconsistent! (high spread)

Both have mean = 100 RPM
But Motor A is more reliable!

💡 THE FORMULA:

Standard Deviation (σ):
σ = √[Σ(x - mean)² / n]

Steps:
1. Find the mean
2. Subtract mean from each value
3. Square each difference
4. Average the squared differences
5. Take square root

🔧 SIMPLE EXAMPLE:

Data: 2, 4, 6

Step 1: Mean = (2+4+6)/3 = 4

Step 2: Differences from mean
2 - 4 = -2
4 - 4 = 0
6 - 4 = 2

Step 3: Square differences
(-2)² = 4
(0)² = 0
(2)² = 4

Step 4: Average squared differences
(4+0+4)/3 = 8/3 = 2.67

Step 5: Square root
σ = √2.67 ≈ 1.63

Standard deviation = 1.63

📐 INTERPRETATION:

Small σ (< 10% of mean): Very consistent
Medium σ (10-30% of mean): Moderate variation
Large σ (> 30% of mean): High variation

Example: Mean = 100, σ = 5
5/100 = 5% - Very consistent!`
        },
        {
          title: '🔧 Calculating Standard Deviation',
          type: 'concept',
          content: `Let's calculate step by step!

PROBLEM: Motor Performance
RPM readings: 1000, 1020, 980, 1010, 990

STEP 1: Calculate mean
Mean = (1000+1020+980+1010+990)/5
Mean = 5000/5 = 1000 RPM

STEP 2: Find differences from mean
1000 - 1000 = 0
1020 - 1000 = 20
980 - 1000 = -20
1010 - 1000 = 10
990 - 1000 = -10

STEP 3: Square the differences
0² = 0
20² = 400
(-20)² = 400
10² = 100
(-10)² = 100

STEP 4: Average squared differences
(0+400+400+100+100)/5 = 1000/5 = 200

STEP 5: Take square root
σ = √200 ≈ 14.14 RPM

INTERPRETATION:
Mean = 1000 RPM
Standard deviation = 14.14 RPM
Variation = 14.14/1000 = 1.4%

Very consistent motor!

🎯 COMPARING TWO MOTORS:

Motor A: Mean = 1000, σ = 10
Motor B: Mean = 1000, σ = 50

Motor A is 5x more consistent!
Choose Motor A for precision work.`
        },
        {
          title: '🧮 Practice: Consistency Analysis',
          type: 'practice',
          content: `Compare consistency!

PROBLEM 1: Two Temperature Sensors

Sensor A: 20, 21, 20, 22, 20°C
Mean = 20.6°C

Differences: -0.6, 0.4, -0.6, 1.4, -0.6
Squared: 0.36, 0.16, 0.36, 1.96, 0.36
Average: 3.2/5 = 0.64
σ_A = √0.64 = 0.8°C

Sensor B: 18, 23, 19, 24, 21°C
Mean = 21°C

Differences: -3, 2, -2, 3, 0
Squared: 9, 4, 4, 9, 0
Average: 26/5 = 5.2
σ_B = √5.2 ≈ 2.28°C

Sensor A is more consistent! (σ = 0.8 vs 2.28)

PROBLEM 2: Production Quality

Machine A parts (mm): 100.1, 100.2, 100.1, 100.3, 100.1
Mean = 100.16
σ ≈ 0.08 mm (very precise!)

Machine B parts (mm): 99.8, 100.5, 99.9, 100.6, 100.2
Mean = 100.2
σ ≈ 0.32 mm (less precise)

Machine A produces more consistent parts!

PROBLEM 3: Battery Life

Brand X: 18, 19, 18, 20, 19 hours
Mean = 18.8 hours
σ ≈ 0.75 hours

Brand Y: 15, 22, 17, 21, 20 hours
Mean = 19 hours
σ ≈ 2.74 hours

Brand X is more reliable despite lower mean!`
        },
        {
          title: '🧩 Challenge: Quality Control Decision',
          type: 'simulation',
          content: `Choose the best motor!

SCENARIO: Selecting a Motor
You need consistent performance for precision work.

MOTOR A:
Trials (RPM): 1500, 1520, 1480, 1510, 1490
Mean = 1500 RPM
σ = 15.8 RPM
Variation = 1.05%

MOTOR B:
Trials (RPM): 1550, 1450, 1500, 1600, 1400
Mean = 1500 RPM
σ = 70.7 RPM
Variation = 4.71%

MOTOR C:
Trials (RPM): 1498, 1502, 1500, 1499, 1501
Mean = 1500 RPM
σ = 1.58 RPM
Variation = 0.11%

CHALLENGE 1: Rank by consistency
1st: Motor C (σ = 1.58)
2nd: Motor A (σ = 15.8)
3rd: Motor B (σ = 70.7)

CHALLENGE 2: Which for precision CNC?
Motor C! Lowest variation (0.11%)

CHALLENGE 3: Which is acceptable?
Requirement: σ < 20 RPM
Motor A: YES (15.8 < 20)
Motor B: NO (70.7 > 20)
Motor C: YES (1.58 < 20)

CHALLENGE 4: Cost vs Performance
Motor A: $100, σ = 15.8
Motor C: $300, σ = 1.58

Is 10x better consistency worth 3x cost?
For precision work: YES!
For general use: Motor A is fine!

YOUR MISSION:
1. Collect data from 3 sensors
2. Calculate σ for each
3. Rank by consistency
4. Make recommendation!`
        }
      ],
      
      keyTakeaways: [
        'Standard deviation measures data spread',
        'Low σ = consistent, high σ = variable',
        'Formula: σ = √[Σ(x-mean)²/n]',
        'Compare σ to choose most reliable option',
        'Consistency matters in engineering!'
      ],
      
      vocabulary: [
        { term: 'Standard Deviation', definition: 'Measure of how spread out data is from the mean' },
        { term: 'Variance', definition: 'Square of standard deviation; σ²' },
        { term: 'Consistency', definition: 'Low variation; values close together' },
        { term: 'Spread', definition: 'How scattered or dispersed data points are' },
        { term: 'Precision', definition: 'Ability to reproduce same result; low σ' }
      ],
      
      quiz: [
        {
          question: 'Low standard deviation means:',
          options: ['Data spread out', 'Data clustered', 'High mean', 'Low mean'],
          correct: 1
        },
        {
          question: 'Motor A: σ=5, Motor B: σ=20. Which is more consistent?',
          options: ['Motor A', 'Motor B', 'Same', 'Cannot tell'],
          correct: 0
        },
        {
          question: 'Data: 10, 10, 10, 10. Standard deviation is:',
          options: ['0', '10', '40', 'Undefined'],
          correct: 0
        },
        {
          question: 'Standard deviation is measured in:',
          options: ['Percent', 'Same units as data', 'Squared units', 'No units'],
          correct: 1
        },
        {
          question: 'Which indicates better quality control?',
          options: ['High σ', 'Low σ', 'High mean', 'Low mean'],
          correct: 1
        }
      ]
    }
  },

  // LESSON 23: Probability Basics
  {
    id: 23,
    title: 'Probability - Predicting Outcomes',
    unit: 'Statistics & Data',
    unitNumber: 5,
    lessonNumber: 3,
    emoji: '🟡',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'What are the chances? Learn to calculate probabilities for sensor failures, successful tests, and system reliability. Essential for risk analysis and quality control!',
      
      sections: [
        {
          title: '🧠 What is Probability? - Measuring Likelihood',
          type: 'concept',
          content: `Probability tells you HOW LIKELY something is to happen!

🎯 THE BASICS:

Probability = (Favorable outcomes) / (Total possible outcomes)

Range: 0 to 1 (or 0% to 100%)
• 0 = Impossible
• 0.5 = 50-50 chance
• 1 = Certain

📊 SIMPLE EXAMPLES:

Coin flip:
P(heads) = 1/2 = 0.5 = 50%

Die roll:
P(rolling 6) = 1/6 ≈ 0.167 = 16.7%

Deck of cards:
P(drawing ace) = 4/52 ≈ 0.077 = 7.7%

💡 ENGINEERING EXAMPLES:

Sensor reliability:
Fails 1 time in 100 tests
P(failure) = 1/100 = 0.01 = 1%
P(success) = 99/100 = 0.99 = 99%

Quality control:
2 defects in 1000 parts
P(defect) = 2/1000 = 0.002 = 0.2%
P(good) = 998/1000 = 0.998 = 99.8%

🔧 COMPLEMENTARY PROBABILITY:

P(success) + P(failure) = 1

If P(sensor works) = 0.95
Then P(sensor fails) = 1 - 0.95 = 0.05

📐 MULTIPLE EVENTS:

Independent events (multiply):
P(A AND B) = P(A) × P(B)

Example: Two sensors both work
P(both work) = 0.99 × 0.99 = 0.9801 = 98.01%

Either event (add):
P(A OR B) = P(A) + P(B) - P(A AND B)

Example: At least one sensor works
P = 0.99 + 0.99 - (0.99×0.99) = 0.9999 = 99.99%`
        },
        {
          title: '🔧 Calculating Probabilities',
          type: 'concept',
          content: `Let's solve probability problems!

PROBLEM 1: Sensor Failure
Sensor fails 1 in 100 times

Single test:
P(fail) = 1/100 = 0.01
P(success) = 99/100 = 0.99

10 tests (all succeed):
P(all succeed) = 0.99^10 ≈ 0.904 = 90.4%

At least one failure:
P(≥1 fail) = 1 - P(all succeed)
P(≥1 fail) = 1 - 0.904 = 0.096 = 9.6%

PROBLEM 2: Quality Control
Production: 5 defects per 1000 parts

Random part:
P(defect) = 5/1000 = 0.005 = 0.5%

Sample of 100 parts:
Expected defects = 100 × 0.005 = 0.5 parts
(About 1 defect every 2 samples)

PROBLEM 3: Redundant Systems
Two backup systems:
System A: P(works) = 0.95
System B: P(works) = 0.95

Both fail (disaster):
P(both fail) = 0.05 × 0.05 = 0.0025 = 0.25%

At least one works:
P(≥1 works) = 1 - 0.0025 = 0.9975 = 99.75%

Redundancy improves reliability!`
        },
        {
          title: '🧮 Practice: Real Scenarios',
          type: 'practice',
          content: `Calculate probabilities!

PROBLEM 1: Battery Life
Battery lasts full day: 95% of time
P(lasts) = 0.95

3-day mission:
P(all 3 days) = 0.95³ ≈ 0.857 = 85.7%

PROBLEM 2: Network Reliability
Connection drops: 2% of time
P(drop) = 0.02
P(stable) = 0.98

10-hour operation:
P(no drops) = 0.98^10 ≈ 0.817 = 81.7%

PROBLEM 3: Component Testing
Test 20 components
Each has 10% failure rate

Expected failures:
20 × 0.10 = 2 components

P(all pass) = 0.90^20 ≈ 0.122 = 12.2%

PROBLEM 4: Parallel Systems
3 motors, need at least 1 working
Each: P(works) = 0.90

P(all fail) = 0.10³ = 0.001 = 0.1%
P(≥1 works) = 1 - 0.001 = 0.999 = 99.9%

Very reliable!`
        },
        {
          title: '🧩 Challenge: System Reliability Design',
          type: 'simulation',
          content: `Design a reliable system!

SCENARIO: Drone Delivery Service
Single drone: P(completes delivery) = 0.90

CHALLENGE 1: 10 Deliveries
P(all succeed) = 0.90^10 ≈ 0.349 = 34.9%

Only 35% chance all succeed!

CHALLENGE 2: Add Backup Drone
If first fails, send backup
P(first succeeds) = 0.90
P(backup succeeds if needed) = 0.90

P(delivery succeeds) = 0.90 + (0.10 × 0.90)
P = 0.90 + 0.09 = 0.99 = 99%

Much better!

CHALLENGE 3: 10 Deliveries with Backup
P(all succeed) = 0.99^10 ≈ 0.904 = 90.4%

Improved from 35% to 90%!

CHALLENGE 4: Triple Redundancy
Three drones available
P(all 3 fail) = 0.10³ = 0.001

P(delivery succeeds) = 1 - 0.001 = 0.999 = 99.9%

10 deliveries:
P(all succeed) = 0.999^10 ≈ 0.990 = 99%

Nearly perfect!

YOUR MISSION:
1. Calculate reliability for your system
2. Add redundancy to improve it
3. Find optimal cost vs reliability
4. Design for 99.9% success rate!`
        }
      ],
      
      keyTakeaways: [
        'Probability = favorable / total outcomes',
        'Range: 0 (impossible) to 1 (certain)',
        'P(A AND B) = P(A) × P(B) for independent events',
        'P(not A) = 1 - P(A)',
        'Redundancy improves system reliability'
      ],
      
      vocabulary: [
        { term: 'Probability', definition: 'Measure of likelihood; ranges from 0 to 1' },
        { term: 'Independent Events', definition: 'Events that do not affect each other' },
        { term: 'Complementary', definition: 'Opposite event; probabilities sum to 1' },
        { term: 'Redundancy', definition: 'Backup systems to improve reliability' },
        { term: 'Expected Value', definition: 'Average outcome over many trials' }
      ],
      
      quiz: [
        {
          question: 'Sensor fails 1 in 100 times. P(success) = ?',
          options: ['0.01', '0.99', '0.10', '0.90'],
          correct: 1
        },
        {
          question: 'P(A) = 0.7. What is P(not A)?',
          options: ['0.3', '0.7', '1.0', '1.4'],
          correct: 0
        },
        {
          question: 'Two independent events: P(A)=0.5, P(B)=0.5. P(both) = ?',
          options: ['0.25', '0.5', '0.75', '1.0'],
          correct: 0
        },
        {
          question: 'P(works) = 0.95. For 10 trials, P(all work) = ?',
          options: ['0.95', '0.90', '0.60', '9.5'],
          correct: 2
        },
        {
          question: 'Adding backup systems:',
          options: ['Decreases reliability', 'No effect', 'Increases reliability', 'Doubles cost only'],
          correct: 2
        }
      ]
    }
  },

  // LESSON 24: Error & Uncertainty
  {
    id: 24,
    title: 'Error & Uncertainty - Dealing with Imperfection',
    unit: 'Statistics & Data',
    unitNumber: 5,
    lessonNumber: 4,
    emoji: '🟡',
    level: 'Beginner',
    duration: '25 min',
    content: {
      introduction: 'No measurement is perfect! Learn to quantify errors, understand uncertainty, and see how small measurement errors can affect your final results. Essential for real engineering!',
      
      sections: [
        {
          title: '🧠 Types of Errors - Understanding Imperfection',
          type: 'concept',
          content: `All measurements have errors! Learn to identify and minimize them.

🎯 TWO MAIN TYPES:

1. SYSTEMATIC ERROR (Bias):
   Consistent error in one direction
   
   Examples:
   • Scale reads 2kg too heavy (always)
   • Thermometer reads 1°C too low (always)
   • Sensor calibrated incorrectly
   
   Fix: Recalibrate instrument!

2. RANDOM ERROR (Noise):
   Unpredictable variations
   
   Examples:
   • Sensor readings fluctuate: 10.1, 10.3, 9.9
   • Human reaction time varies
   • Environmental interference
   
   Fix: Take multiple measurements, average them!

📊 VISUAL COMPARISON:

Target: 10.0

Systematic error:
Readings: 12.0, 12.1, 11.9, 12.0
All too high! (biased)

Random error:
Readings: 10.1, 9.9, 10.2, 9.8
Scattered around target (unbiased)

💡 MEASUREMENT UNCERTAINTY:

Express as: Value ± Uncertainty

Examples:
• Length: 10.5 ± 0.1 cm
• Temperature: 25 ± 2°C
• Voltage: 5.0 ± 0.05 V

Means: True value is likely between:
10.4 and 10.6 cm

🔧 SIGNIFICANT FIGURES:

Show precision of measurement:

12.5 cm → 3 significant figures
12.50 cm → 4 significant figures (more precise!)

Rules:
• Non-zero digits count
• Zeros between digits count
• Trailing zeros after decimal count

Examples:
123 → 3 sig figs
120 → 2 sig figs (trailing zero ambiguous)
120.0 → 4 sig figs (decimal shows precision)
0.0012 → 2 sig figs (leading zeros don't count)`
        },
        {
          title: '🔧 Error Propagation - How Errors Multiply',
          type: 'concept',
          content: `Small errors can become BIG errors in calculations!

📐 ADDITION/SUBTRACTION:
Add absolute uncertainties

Example: Length calculation
L1 = 10.0 ± 0.1 cm
L2 = 5.0 ± 0.1 cm

Total = L1 + L2 = 15.0 ± 0.2 cm
(Uncertainties add: 0.1 + 0.1 = 0.2)

📐 MULTIPLICATION/DIVISION:
Add relative uncertainties (percentages)

Example: Area calculation
Length = 10.0 ± 0.1 cm (1% error)
Width = 5.0 ± 0.1 cm (2% error)

Area = 10 × 5 = 50 cm²
Relative error = 1% + 2% = 3%
Absolute error = 50 × 0.03 = 1.5 cm²

Area = 50 ± 1.5 cm²

🎯 REAL EXAMPLE: Speed Calculation

Distance = 100 ± 1 m (1% error)
Time = 10 ± 0.2 s (2% error)

Speed = Distance / Time
Speed = 100/10 = 10 m/s

Relative error = 1% + 2% = 3%
Absolute error = 10 × 0.03 = 0.3 m/s

Speed = 10.0 ± 0.3 m/s

💡 KEY INSIGHT:
Errors compound in calculations!
Measure accurately at each step!`
        },
        {
          title: '🧮 Practice: Error Analysis',
          type: 'practice',
          content: `Calculate with uncertainties!

PROBLEM 1: Voltage Measurement
V1 = 5.0 ± 0.1 V
V2 = 3.0 ± 0.1 V

Total voltage:
V_total = 5.0 + 3.0 = 8.0 V
Uncertainty = 0.1 + 0.1 = 0.2 V

Answer: 8.0 ± 0.2 V

PROBLEM 2: Resistance Calculation
V = 10.0 ± 0.2 V (2% error)
I = 2.0 ± 0.1 A (5% error)

R = V/I = 10/2 = 5.0 Ω

Relative error = 2% + 5% = 7%
Absolute error = 5.0 × 0.07 = 0.35 Ω

Answer: 5.0 ± 0.4 Ω (rounded)

PROBLEM 3: Volume Calculation
Cube side = 10.0 ± 0.1 cm (1% error)

Volume = side³ = 1000 cm³

For powers: multiply relative error by exponent
Relative error = 3 × 1% = 3%
Absolute error = 1000 × 0.03 = 30 cm³

Answer: 1000 ± 30 cm³

PROBLEM 4: Significant Figures
12.5 cm × 3.2 cm = ?

12.5 has 3 sig figs
3.2 has 2 sig figs

Result: 40 cm² (2 sig figs, limited by 3.2)
Not 40.0 or 40.00!`
        },
        {
          title: '🧩 Challenge: Measurement Error Impact',
          type: 'simulation',
          content: `See how errors affect results!

SCENARIO: Robot Arm Positioning
Measuring arm position using 3 sensors

CHALLENGE 1: Individual Measurements
Sensor X: 10.0 ± 0.1 cm (1% error)
Sensor Y: 15.0 ± 0.2 cm (1.3% error)
Sensor Z: 20.0 ± 0.3 cm (1.5% error)

CHALLENGE 2: Calculate Distance
Distance = √(x² + y² + z²)
Distance = √(100 + 225 + 400)
Distance = √725 ≈ 26.9 cm

Error propagation (approximate):
Relative error ≈ √(1² + 1.3² + 1.5²) ≈ 2.2%
Absolute error ≈ 26.9 × 0.022 ≈ 0.6 cm

Distance = 26.9 ± 0.6 cm

CHALLENGE 3: Improve Precision
Upgrade sensors to ±0.05 cm each

New errors: 0.5%, 0.33%, 0.25%
Combined ≈ 0.7%
New uncertainty ≈ 0.2 cm

Distance = 26.9 ± 0.2 cm

3x improvement!

CHALLENGE 4: Cost vs Precision
Standard sensors: $10 each, ±0.1 cm
Precision sensors: $50 each, ±0.01 cm

10x better precision, 5x cost
Worth it for precision robotics!

YOUR MISSION:
1. Measure with standard tools
2. Calculate total uncertainty
3. Determine if acceptable
4. Upgrade if needed!

INTERACTIVE: Drag slider to see error impact
Input error: 1% → Output error: 3%
Input error: 5% → Output error: 15%
Input error: 10% → Output error: 30%

Small input errors multiply!`
        }
      ],
      
      keyTakeaways: [
        'All measurements have uncertainty',
        'Systematic error = bias, random error = noise',
        'Express as: value ± uncertainty',
        'Errors propagate through calculations',
        'Significant figures show precision'
      ],
      
      vocabulary: [
        { term: 'Systematic Error', definition: 'Consistent bias in measurements' },
        { term: 'Random Error', definition: 'Unpredictable variations in measurements' },
        { term: 'Uncertainty', definition: 'Range of possible error; ± value' },
        { term: 'Significant Figures', definition: 'Digits that indicate precision of measurement' },
        { term: 'Error Propagation', definition: 'How uncertainties combine in calculations' }
      ],
      
      quiz: [
        {
          question: 'Scale always reads 2kg too heavy. This is:',
          options: ['Random error', 'Systematic error', 'No error', 'Acceptable error'],
          correct: 1
        },
        {
          question: '10.0 ± 0.1 + 5.0 ± 0.1 = ?',
          options: ['15.0 ± 0.1', '15.0 ± 0.2', '15.0 ± 0.01', '15.0'],
          correct: 1
        },
        {
          question: 'How many significant figures in 120.0?',
          options: ['2', '3', '4', '5'],
          correct: 2
        },
        {
          question: 'To reduce random error:',
          options: ['Recalibrate', 'Take multiple measurements', 'Use different tool', 'Ignore it'],
          correct: 1
        },
        {
          question: 'Errors in multiplication:',
          options: ['Add absolute', 'Add relative', 'Subtract', 'Multiply'],
          correct: 1
        }
      ]
    }
  }
];

export default unit5Lessons;
