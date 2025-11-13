// Unit 5: Statistics & Data (Lessons 22-27)
export const unit5Lessons = {
  22: {
    id: 22,
    title: 'Statistics & Data: Data & Averages',
    subtitle: 'Finding the Center',
    description: 'Learn to make sense of data! Averages help you find the typical value in sensor readings, test scores, and measurements. Master mean, median, and mode',
    coreIdea: 'Averages (mean, median, mode) help identify typical values in data sets',
    engineeringExample: 'Sensor readings, test scores, measurements, quality control',
    learningObjectives: [
      'Calculate mean, median, and mode',
      'Understand when to use each average',
      'Identify outliers in data sets',
      'Apply averages to real engineering problems',
      'Choose the best average for different scenarios'
    ],
    keyEquations: [
      { eq: '\\text{Mean} = \\frac{\\sum x}{n}', meaning: 'Mean = sum of values divided by count' },
      { eq: '\\text{Median} = \\text{middle value when sorted}', meaning: 'Median = middle value' },
      { eq: '\\text{Mode} = \\text{most frequent value}', meaning: 'Mode = most common value' }
    ],
    practiceProblems: [
      {
        id: '5.22a',
        prompt: 'Temperature sensor readings (°C): 22, 23, 22, 24, 22, 25, 23. Find mean, median, and mode.',
        solution: 'Mean: Sum = 22+23+22+24+22+25+23 = 161\nMean = 161/7 = 23°C\n\nMedian: Sorted = 22, 22, 22, 23, 23, 24, 25\nMiddle (4th value) = 23°C\n\nMode: 22 appears 3 times (most)\nMode = 22°C\n\nAnswer: Mean = 23°C, Median = 23°C, Mode = 22°C',
        hints: ['Calculate sum for mean', 'Sort data for median', 'Count occurrences for mode']
      },
      {
        id: '5.22b',
        prompt: 'Motor RPM readings: 1200, 1250, 1200, 1300, 1200, 1350. Find mean, median, and mode.',
        solution: 'Mean: Sum = 1200+1250+1200+1300+1200+1350 = 7500\nMean = 7500/6 = 1250 RPM\n\nMedian: Sorted = 1200, 1200, 1200, 1250, 1300, 1350\nMiddle = (1200+1250)/2 = 1225 RPM\n\nMode: 1200 appears 3 times (most)\nMode = 1200 RPM\n\nAnswer: Mean = 1250 RPM, Median = 1225 RPM, Mode = 1200 RPM',
        hints: ['Calculate mean first', 'Sort for median (even count)', 'Find most frequent for mode']
      },
      {
        id: '5.22c',
        prompt: 'Sensor readings: 10.2, 10.1, 10.3, 10.2, 15.0. Which average is best? (Outlier present)',
        solution: 'Mean = (10.2+10.1+10.3+10.2+15.0)/5 = 11.16 (skewed by outlier!)\nMedian = 10.2 (middle value, not affected by outlier)\nMode = 10.2 (appears twice)\n\nBest: MEDIAN! The 15.0 is probably an error (outlier).\nMedian gives the true typical value without being affected by the outlier.',
        hints: ['Mean is pulled up by outlier', 'Median is not affected by outlier', 'Use median when outliers present']
      },
      {
        id: '5.22d',
        prompt: 'Drone battery life (minutes): 18, 20, 19, 18, 21, 18, 20. Find all three averages.',
        solution: 'Mean = (18+20+19+18+21+18+20)/7 = 134/7 ≈ 19.1 min\nMedian = 19 min (middle of sorted list)\nMode = 18 min (appears 3 times)\n\nAnswer: Mean = 19.1 min, Median = 19 min, Mode = 18 min',
        hints: ['Calculate sum and divide by count', 'Sort for median', 'Count occurrences for mode']
      }
    ],
    metadata: { difficulty: 'Easy', estTime: '25 min', tags: ['statistics', 'averages', 'mean', 'median', 'mode'] },
    content: {
      intro: 'Learn to make sense of data! Averages help you find the typical value in sensor readings, test scores, and measurements. Master mean, median, and mode! Averages tell you what is TYPICAL in your data! THE THREE TYPES: 1. MEAN (Average): Add all values, divide by count. 2. MEDIAN (Middle): Sort values, pick the middle one. 3. MODE (Most Common): The value that appears most often.',
      concepts: [
        {
          title: '🧠 What is an Average? - Finding the Typical',
          explanation: 'Averages tell you what is TYPICAL in your data! THE THREE TYPES: 1. MEAN (Average): Add all values, divide by count. Example: Test scores: 80, 85, 90, 95. Mean = (80+85+90+95)/4 = 350/4 = 87.5. 2. MEDIAN (Middle): Sort values, pick the middle one. Example: 80, 85, 90, 95. Middle two: 85 and 90. Median = (85+90)/2 = 87.5. 3. MODE (Most Common): The value that appears most often. Example: 80, 85, 85, 90, 85. Mode = 85 (appears 3 times). WHEN TO USE EACH: MEAN: When data is evenly spread (average temperature, average speed, average sensor reading). MEDIAN: When there are outliers (house prices, salaries, test scores with one failure). MODE: When looking for most common (most common shoe size, most frequent error code, popular product choice).',
          example: 'Sensor readings: 10.2, 10.1, 10.3, 10.2, 15.0. Mean = (10.2+10.1+10.3+10.2+15.0)/5 = 11.16 (pulled up by outlier!). Median = 10.2 (middle value, not affected by outlier!). Mode = 10.2 (appears twice). Which is best? Median! The 15.0 is probably an error.'
        },
        {
          title: '🔧 Calculating Averages - Step by Step',
          explanation: 'Let\'s calculate all three averages! PROBLEM: Motor RPM readings. Data: 1200, 1250, 1200, 1300, 1200, 1350. STEP 1: Calculate MEAN. Add all values: 1200 + 1250 + 1200 + 1300 + 1200 + 1350 = 7500. Divide by count: Mean = 7500 / 6 = 1250 RPM. STEP 2: Calculate MEDIAN. Sort the data: 1200, 1200, 1200, 1250, 1300, 1350. Find middle: 6 values, so middle is between 3rd and 4th. Median = (1200 + 1250) / 2 = 1225 RPM. STEP 3: Calculate MODE. Count occurrences: 1200 appears 3 times (most). Mode = 1200 RPM. SUMMARY: Mean = 1250 RPM (average), Median = 1225 RPM (middle), Mode = 1200 RPM (most common). The motor typically runs around 1200-1250 RPM!',
          example: 'Motor RPM: 1200, 1250, 1200, 1300, 1200, 1350. Mean = 1250 RPM, Median = 1225 RPM, Mode = 1200 RPM. All three averages give different insights into the data!'
        },
        {
          title: '🧮 Choosing the Right Average',
          explanation: 'WHEN TO USE EACH: MEAN: When data is evenly spread. Average temperature, average speed, average sensor reading. Best for: Symmetric data, no outliers. MEDIAN: When there are outliers. House prices (some very expensive), salaries (CEOs skew the mean), test scores with one failure. Best for: Skewed data, outliers present. MODE: When looking for most common. Most common shoe size, most frequent error code, popular product choice. Best for: Categorical data, finding most frequent value. ODD vs EVEN COUNT: Odd count (5 values): 10, 20, 30, 40, 50. Median = 30 (exact middle). Even count (6 values): 10, 20, 30, 40, 50, 60. Median = (30+40)/2 = 35 (average of middle two).',
          example: 'Data with outlier: 50, 51, 50, 52, 50, 200 (error!). Mean = 67 (skewed by error!), Median = 50.5 (not affected!), Mode = 50. Use median when outliers present!'
        }
      ],
      realWorld: [
        {
          icon: '🌡️',
          title: 'Temperature Monitoring',
          description: 'Engineers use averages to monitor temperature. Mean gives average temperature. Median removes effect of sensor errors. Mode shows most common temperature. Quality control uses averages. Process monitoring uses statistics.'
        },
        {
          icon: '⚙️',
          title: 'Motor Performance',
          description: 'Engineers analyze motor performance using averages. RPM readings averaged over time. Mean shows typical speed. Median removes effect of outliers. Mode shows preferred operating speed. Performance analysis uses statistics.'
        },
        {
          icon: '📊',
          title: 'Quality Control',
          description: 'Manufacturing uses averages for quality control. Part dimensions averaged. Mean shows target value. Median shows consistency. Mode shows most common size. Quality control uses statistics. Process improvement uses averages.'
        },
        {
          icon: '🔋',
          title: 'Battery Life',
          description: 'Engineers test battery life using averages. Multiple tests averaged. Mean shows average life. Median shows typical life. Mode shows most common life. Battery testing uses statistics. Product development uses averages.'
        },
        {
          icon: '📈',
          title: 'Data Analysis',
          description: 'Engineers analyze data using averages. Sensor data averaged. Mean shows central tendency. Median removes outliers. Mode shows most common value. Data analysis uses statistics. Decision making uses averages.'
        }
      ]
    }
  },
  23: {
    id: 23,
    title: 'Statistics & Data: Standard Deviation',
    subtitle: 'Measuring Consistency',
    description: 'How spread out is your data? Standard deviation tells you if values are clustered together or scattered. Learn which motor is more consistent and which sensor is more reliable',
    coreIdea: 'Standard deviation measures data spread - low σ means consistent, high σ means variable',
    engineeringExample: 'Motor consistency, sensor reliability, quality control, process monitoring',
    learningObjectives: [
      'Understand standard deviation as a measure of spread',
      'Calculate standard deviation step by step',
      'Compare consistency between different systems',
      'Interpret standard deviation in engineering contexts',
      'Use standard deviation for quality control'
    ],
    keyEquations: [
      { eq: '\\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}}', meaning: 'Standard deviation formula' },
      { eq: '\\text{Variance} = \\sigma^2', meaning: 'Variance = square of standard deviation' },
      { eq: '\\text{Relative error} = \\frac{\\sigma}{\\bar{x}} \\times 100\\%', meaning: 'Relative error as percentage' }
    ],
    practiceProblems: [
      {
        id: '5.23a',
        prompt: 'Motor RPM readings: 1000, 1020, 980, 1010, 990. Find standard deviation.',
        solution: 'Step 1: Calculate mean\nMean = (1000+1020+980+1010+990)/5 = 1000 RPM\n\nStep 2: Find differences from mean\n1000-1000=0, 1020-1000=20, 980-1000=-20, 1010-1000=10, 990-1000=-10\n\nStep 3: Square differences\n0²=0, 20²=400, (-20)²=400, 10²=100, (-10)²=100\n\nStep 4: Average squared differences\n(0+400+400+100+100)/5 = 200\n\nStep 5: Take square root\nσ = √200 ≈ 14.14 RPM\n\nAnswer: Standard deviation = 14.14 RPM\nVariation = 14.14/1000 = 1.4% (very consistent!)',
        hints: ['Calculate mean first', 'Find differences from mean', 'Square the differences', 'Average squared differences', 'Take square root']
      },
      {
        id: '5.23b',
        prompt: 'Two temperature sensors. Sensor A: 20, 21, 20, 22, 20°C. Sensor B: 18, 23, 19, 24, 21°C. Which is more consistent?',
        solution: 'Sensor A:\nMean = 20.6°C\nDifferences: -0.6, 0.4, -0.6, 1.4, -0.6\nSquared: 0.36, 0.16, 0.36, 1.96, 0.36\nAverage: 3.2/5 = 0.64\nσ_A = √0.64 = 0.8°C\n\nSensor B:\nMean = 21°C\nDifferences: -3, 2, -2, 3, 0\nSquared: 9, 4, 4, 9, 0\nAverage: 26/5 = 5.2\nσ_B = √5.2 ≈ 2.28°C\n\nSensor A is more consistent! (σ = 0.8 vs 2.28)\nSensor A has lower standard deviation = more reliable!',
        hints: ['Calculate mean for each', 'Find differences from mean', 'Calculate standard deviation', 'Compare standard deviations']
      },
      {
        id: '5.23c',
        prompt: 'Machine A parts (mm): 100.1, 100.2, 100.1, 100.3, 100.1. Machine B parts (mm): 99.8, 100.5, 99.9, 100.6, 100.2. Which produces more consistent parts?',
        solution: 'Machine A:\nMean = 100.16 mm\nσ ≈ 0.08 mm (very precise!)\n\nMachine B:\nMean = 100.2 mm\nσ ≈ 0.32 mm (less precise)\n\nMachine A produces more consistent parts!\nMachine A has 4× lower standard deviation = much more precise!\n\nAnswer: Machine A is more consistent (σ = 0.08 vs 0.32 mm)',
        hints: ['Calculate standard deviation for each machine', 'Compare standard deviations', 'Lower σ = more consistent']
      },
      {
        id: '5.23d',
        prompt: 'Data: 10, 10, 10, 10. What is the standard deviation?',
        solution: 'Step 1: Mean = (10+10+10+10)/4 = 10\n\nStep 2: Differences from mean\n10-10=0, 10-10=0, 10-10=0, 10-10=0\n\nStep 3: Square differences\n0²=0, 0²=0, 0²=0, 0²=0\n\nStep 4: Average squared differences\n(0+0+0+0)/4 = 0\n\nStep 5: Square root\nσ = √0 = 0\n\nAnswer: Standard deviation = 0\nPerfect consistency! All values are the same!',
        hints: ['All values are the same', 'Differences from mean are all zero', 'Standard deviation is zero for perfect consistency']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['statistics', 'standard-deviation', 'consistency', 'variability'] },
    content: {
      intro: 'How spread out is your data? Standard deviation tells you if values are clustered together or scattered. Learn which motor is more consistent and which sensor is more reliable! Standard deviation tells you how SPREAD OUT your data is! THE CONCEPT: Low standard deviation = Data clustered together (very consistent!). High standard deviation = Data spread out (inconsistent!).',
      concepts: [
        {
          title: '🧠 What is Standard Deviation? - Measuring Spread',
          explanation: 'Standard deviation tells you how SPREAD OUT your data is! THE CONCEPT: Low standard deviation = Data clustered together. High standard deviation = Data spread out. VISUAL COMPARISON: Motor A: 100, 101, 100, 99, 100 RPM. Very consistent! (low spread). Motor B: 80, 120, 90, 110, 100 RPM. Inconsistent! (high spread). Both have mean = 100 RPM, but Motor A is more reliable! THE FORMULA: Standard Deviation (σ): σ = √[Σ(x - mean)² / n]. Steps: 1. Find the mean. 2. Subtract mean from each value. 3. Square each difference. 4. Average the squared differences. 5. Take square root. INTERPRETATION: Small σ (< 10% of mean): Very consistent. Medium σ (10-30% of mean): Moderate variation. Large σ (> 30% of mean): High variation. Example: Mean = 100, σ = 5. 5/100 = 5% - Very consistent!',
          example: 'Motor A: Mean = 100 RPM, σ = 10 RPM (variation = 10%). Motor B: Mean = 100 RPM, σ = 50 RPM (variation = 50%). Motor A is 5× more consistent! Choose Motor A for precision work.'
        },
        {
          title: '🔧 Calculating Standard Deviation',
          explanation: 'Let\'s calculate step by step! PROBLEM: Motor Performance. RPM readings: 1000, 1020, 980, 1010, 990. STEP 1: Calculate mean. Mean = (1000+1020+980+1010+990)/5 = 1000 RPM. STEP 2: Find differences from mean. 1000 - 1000 = 0, 1020 - 1000 = 20, 980 - 1000 = -20, 1010 - 1000 = 10, 990 - 1000 = -10. STEP 3: Square the differences. 0² = 0, 20² = 400, (-20)² = 400, 10² = 100, (-10)² = 100. STEP 4: Average squared differences. (0+400+400+100+100)/5 = 1000/5 = 200. STEP 5: Take square root. σ = √200 ≈ 14.14 RPM. INTERPRETATION: Mean = 1000 RPM, Standard deviation = 14.14 RPM, Variation = 14.14/1000 = 1.4%. Very consistent motor!',
          example: 'Motor RPM: 1000, 1020, 980, 1010, 990. Mean = 1000 RPM, σ = 14.14 RPM, Variation = 1.4%. Very consistent motor!'
        },
        {
          title: '🧮 Comparing Consistency',
          explanation: 'COMPARING TWO MOTORS: Motor A: Mean = 1000, σ = 10. Motor B: Mean = 1000, σ = 50. Motor A is 5× more consistent! Choose Motor A for precision work. REAL EXAMPLE: Two Temperature Sensors. Sensor A: 20, 21, 20, 22, 20°C. Mean = 20.6°C, σ = 0.8°C. Sensor B: 18, 23, 19, 24, 21°C. Mean = 21°C, σ = 2.28°C. Sensor A is more consistent! (σ = 0.8 vs 2.28). Production Quality: Machine A parts (mm): 100.1, 100.2, 100.1, 100.3, 100.1. Mean = 100.16, σ ≈ 0.08 mm (very precise!). Machine B parts (mm): 99.8, 100.5, 99.9, 100.6, 100.2. Mean = 100.2, σ ≈ 0.32 mm (less precise). Machine A produces more consistent parts!',
          example: 'Motor A: σ = 10 RPM, Motor B: σ = 50 RPM. Motor A is 5× more consistent! Sensor A: σ = 0.8°C, Sensor B: σ = 2.28°C. Sensor A is more reliable! Machine A: σ = 0.08 mm, Machine B: σ = 0.32 mm. Machine A is more precise!'
        }
      ],
      realWorld: [
        {
          icon: '⚙️',
          title: 'Motor Consistency',
          description: 'Engineers compare motor consistency using standard deviation. Lower σ = more consistent motor. Precision work requires low σ. Quality control uses standard deviation. Motor selection uses statistics. Performance analysis uses σ.'
        },
        {
          icon: '🌡️',
          title: 'Sensor Reliability',
          description: 'Engineers test sensor reliability using standard deviation. Lower σ = more reliable sensor. Sensor selection uses standard deviation. Quality control uses statistics. Process monitoring uses σ. Instrument selection uses statistics.'
        },
        {
          icon: '🏭',
          title: 'Quality Control',
          description: 'Manufacturing uses standard deviation for quality control. Lower σ = better quality control. Process improvement uses standard deviation. Quality assurance uses statistics. Production monitoring uses σ. Six Sigma uses standard deviation.'
        },
        {
          icon: '📊',
          title: 'Process Monitoring',
          description: 'Engineers monitor processes using standard deviation. Stable process has low σ. Process control uses standard deviation. Statistical process control uses σ. Quality management uses statistics. Continuous improvement uses standard deviation.'
        },
        {
          icon: '🔬',
          title: 'Scientific Measurements',
          description: 'Scientists use standard deviation for measurements. Lower σ = more precise measurements. Experimental analysis uses standard deviation. Data analysis uses statistics. Measurement uncertainty uses σ. Research uses standard deviation.'
        }
      ]
    }
  },
  24: {
    id: 24,
    title: 'Statistics & Data: Probability Basics',
    subtitle: 'Predicting Outcomes',
    description: 'What are the chances? Learn to calculate probabilities for sensor failures, successful tests, and system reliability. Essential for risk analysis and quality control',
    coreIdea: 'Probability measures likelihood - ranges from 0 (impossible) to 1 (certain)',
    engineeringExample: 'Sensor reliability, system reliability, quality control, risk analysis',
    learningObjectives: [
      'Understand probability as a measure of likelihood',
      'Calculate probabilities for simple events',
      'Calculate probabilities for multiple events',
      'Apply probability to reliability analysis',
      'Use probability for risk assessment'
    ],
    keyEquations: [
      { eq: 'P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}', meaning: 'Probability formula' },
      { eq: 'P(A \\text{ AND } B) = P(A) \\times P(B)', meaning: 'Probability of independent events (multiply)' },
      { eq: 'P(\\text{not } A) = 1 - P(A)', meaning: 'Complementary probability' },
      { eq: 'P(A \\text{ OR } B) = P(A) + P(B) - P(A \\text{ AND } B)', meaning: 'Probability of either event' }
    ],
    practiceProblems: [
      {
        id: '5.24a',
        prompt: 'Sensor fails 1 in 100 times. Find P(success) and P(failure).',
        solution: 'P(failure) = 1/100 = 0.01 = 1%\nP(success) = 99/100 = 0.99 = 99%\n\nOr using complementary:\nP(success) = 1 - P(failure) = 1 - 0.01 = 0.99 = 99%\n\nAnswer: P(success) = 99%, P(failure) = 1%',
        hints: ['P(failure) = failures / total', 'P(success) = 1 - P(failure)', 'Check that probabilities sum to 1']
      },
      {
        id: '5.24b',
        prompt: 'Two independent sensors: P(works) = 0.95 each. Find P(both work) and P(both fail).',
        solution: 'P(both work) = P(sensor 1 works) × P(sensor 2 works)\nP(both work) = 0.95 × 0.95 = 0.9025 = 90.25%\n\nP(both fail) = P(sensor 1 fails) × P(sensor 2 fails)\nP(both fail) = 0.05 × 0.05 = 0.0025 = 0.25%\n\nAnswer: P(both work) = 90.25%, P(both fail) = 0.25%',
        hints: ['Independent events: multiply probabilities', 'P(both work) = P(work) × P(work)', 'P(both fail) = P(fail) × P(fail)']
      },
      {
        id: '5.24c',
        prompt: 'Battery lasts full day: 95% of time. Find P(all 3 days work) for 3-day mission.',
        solution: 'P(lasts one day) = 0.95\nP(all 3 days) = P(day 1) × P(day 2) × P(day 3)\nP(all 3 days) = 0.95 × 0.95 × 0.95 = 0.95³\nP(all 3 days) ≈ 0.857 = 85.7%\n\nAnswer: P(all 3 days work) = 85.7%\n\nAt least one failure:\nP(≥1 fail) = 1 - P(all work) = 1 - 0.857 = 0.143 = 14.3%',
        hints: ['Independent events: multiply probabilities', 'P(all 3) = P(one day)³', 'Use complementary for at least one failure']
      },
      {
        id: '5.24d',
        prompt: '3 motors, need at least 1 working. Each: P(works) = 0.90. Find P(at least 1 works).',
        solution: 'P(all 3 fail) = P(fail) × P(fail) × P(fail)\nP(all 3 fail) = 0.10 × 0.10 × 0.10 = 0.001 = 0.1%\n\nP(at least 1 works) = 1 - P(all fail)\nP(at least 1 works) = 1 - 0.001 = 0.999 = 99.9%\n\nAnswer: P(at least 1 works) = 99.9%\n\nVery reliable! Redundancy improves reliability significantly!',
        hints: ['Find P(all fail) first', 'Use complementary: P(≥1 works) = 1 - P(all fail)', 'Redundancy improves reliability']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['probability', 'statistics', 'reliability', 'risk-analysis'] },
    content: {
      intro: 'What are the chances? Learn to calculate probabilities for sensor failures, successful tests, and system reliability. Essential for risk analysis and quality control! Probability tells you HOW LIKELY something is to happen! THE BASICS: Probability = (Favorable outcomes) / (Total possible outcomes). Range: 0 to 1 (or 0% to 100%). 0 = Impossible, 0.5 = 50-50 chance, 1 = Certain.',
      concepts: [
        {
          title: '🧠 What is Probability? - Measuring Likelihood',
          explanation: 'Probability tells you HOW LIKELY something is to happen! THE BASICS: Probability = (Favorable outcomes) / (Total possible outcomes). Range: 0 to 1 (or 0% to 100%). 0 = Impossible, 0.5 = 50-50 chance, 1 = Certain. SIMPLE EXAMPLES: Coin flip: P(heads) = 1/2 = 0.5 = 50%. Die roll: P(rolling 6) = 1/6 ≈ 0.167 = 16.7%. Deck of cards: P(drawing ace) = 4/52 ≈ 0.077 = 7.7%. ENGINEERING EXAMPLES: Sensor reliability: Fails 1 time in 100 tests. P(failure) = 1/100 = 0.01 = 1%, P(success) = 99/100 = 0.99 = 99%. Quality control: 2 defects in 1000 parts. P(defect) = 2/1000 = 0.002 = 0.2%, P(good) = 998/1000 = 0.998 = 99.8%.',
          example: 'Sensor reliability: Fails 1 in 100 times. P(failure) = 1/100 = 1%, P(success) = 99/100 = 99%. Quality control: 2 defects in 1000 parts. P(defect) = 0.2%, P(good) = 99.8%.'
        },
        {
          title: '🔧 Complementary Probability',
          explanation: 'COMPLEMENTARY PROBABILITY: P(success) + P(failure) = 1. If P(sensor works) = 0.95, then P(sensor fails) = 1 - 0.95 = 0.05. MULTIPLE EVENTS: Independent events (multiply): P(A AND B) = P(A) × P(B). Example: Two sensors both work. P(both work) = 0.99 × 0.99 = 0.9801 = 98.01%. Either event (add): P(A OR B) = P(A) + P(B) - P(A AND B). Example: At least one sensor works. P = 0.99 + 0.99 - (0.99×0.99) = 0.9999 = 99.99%.',
          example: 'Two sensors: P(works) = 0.99 each. P(both work) = 0.99 × 0.99 = 98.01%. P(at least one works) = 1 - P(both fail) = 1 - (0.01 × 0.01) = 99.99%. Redundancy improves reliability!'
        },
        {
          title: '🧮 Calculating Probabilities',
          explanation: 'PROBLEM 1: Sensor Failure. Sensor fails 1 in 100 times. Single test: P(fail) = 1/100 = 0.01, P(success) = 99/100 = 0.99. 10 tests (all succeed): P(all succeed) = 0.99^10 ≈ 0.904 = 90.4%. At least one failure: P(≥1 fail) = 1 - P(all succeed) = 1 - 0.904 = 0.096 = 9.6%. PROBLEM 2: Quality Control. Production: 5 defects per 1000 parts. Random part: P(defect) = 5/1000 = 0.005 = 0.5%. Sample of 100 parts: Expected defects = 100 × 0.005 = 0.5 parts (about 1 defect every 2 samples). PROBLEM 3: Redundant Systems. Two backup systems: System A: P(works) = 0.95, System B: P(works) = 0.95. Both fail (disaster): P(both fail) = 0.05 × 0.05 = 0.0025 = 0.25%. At least one works: P(≥1 works) = 1 - 0.0025 = 0.9975 = 99.75%. Redundancy improves reliability!',
          example: 'Two backup systems: P(works) = 0.95 each. P(both fail) = 0.05 × 0.05 = 0.25%. P(at least one works) = 99.75%. Redundancy dramatically improves reliability!'
        }
      ],
      realWorld: [
        {
          icon: '🔋',
          title: 'Battery Reliability',
          description: 'Engineers test battery reliability using probability. Battery life probability calculated. Mission success probability calculated. Redundancy improves reliability. Battery selection uses probability. System design uses statistics.'
        },
        {
          icon: '🌐',
          title: 'Network Reliability',
          description: 'Engineers design networks using probability. Connection reliability calculated. System uptime calculated. Redundancy improves reliability. Network design uses probability. Communication systems use statistics.'
        },
        {
          icon: '⚡',
          title: 'Power Systems',
          description: 'Engineers design power systems using probability. System reliability calculated. Backup systems improve reliability. Power system design uses probability. Electrical systems use statistics. Grid reliability uses probability.'
        },
        {
          icon: '🚀',
          title: 'Mission Reliability',
          description: 'Engineers design missions using probability. Mission success probability calculated. Component reliability calculated. Redundancy improves reliability. Mission planning uses probability. Space systems use statistics.'
        },
        {
          icon: '🏗️',
          title: 'Structural Reliability',
          description: 'Engineers design structures using probability. Structural reliability calculated. Failure probability calculated. Safety factors use probability. Structural design uses statistics. Building codes use probability.'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Statistics & Data: Error & Uncertainty',
    subtitle: 'Dealing with Imperfection',
    description: 'No measurement is perfect! Learn to quantify errors, understand uncertainty, and see how small measurement errors can affect your final results. Essential for real engineering',
    coreIdea: 'All measurements have uncertainty - systematic errors (bias) and random errors (noise)',
    engineeringExample: 'Measurement accuracy, sensor calibration, quality control, experimental error',
    learningObjectives: [
      'Understand systematic and random errors',
      'Express measurements with uncertainty',
      'Calculate error propagation',
      'Use significant figures correctly',
      'Apply error analysis to engineering problems'
    ],
    keyEquations: [
      { eq: '\\text{measurement} = \\text{value} \\pm \\text{uncertainty}', meaning: 'Measurement with uncertainty' },
      { eq: '\\text{relative error} = \\frac{\\text{uncertainty}}{\\text{value}}', meaning: 'Relative error' },
      { eq: '\\text{for addition: } \\Delta(A+B) = \\Delta A + \\Delta B', meaning: 'Error propagation for addition' },
      { eq: '\\text{for multiplication: } \\frac{\\Delta(AB)}{AB} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}', meaning: 'Error propagation for multiplication' }
    ],
    practiceProblems: [
      {
        id: '5.25a',
        prompt: 'Length L1 = 10.0 ± 0.1 cm, L2 = 5.0 ± 0.1 cm. Find total length with uncertainty.',
        solution: 'Total length: L = L1 + L2 = 10.0 + 5.0 = 15.0 cm\n\nUncertainty: For addition, add absolute uncertainties\nΔL = ΔL1 + ΔL2 = 0.1 + 0.1 = 0.2 cm\n\nAnswer: L = 15.0 ± 0.2 cm\n\nTrue value is likely between 14.8 and 15.2 cm',
        hints: ['For addition, add absolute uncertainties', 'Total = sum of values', 'Uncertainty = sum of uncertainties']
      },
      {
        id: '5.25b',
        prompt: 'Area calculation: Length = 10.0 ± 0.1 cm (1% error), Width = 5.0 ± 0.1 cm (2% error). Find area with uncertainty.',
        solution: 'Area: A = Length × Width = 10.0 × 5.0 = 50 cm²\n\nUncertainty: For multiplication, add relative errors\nRelative error = 1% + 2% = 3%\nAbsolute error = 50 × 0.03 = 1.5 cm²\n\nAnswer: A = 50 ± 1.5 cm²\n\nOr: A = 50 cm² ± 3%',
        hints: ['For multiplication, add relative errors', 'Relative error = sum of relative errors', 'Absolute error = value × relative error']
      },
      {
        id: '5.25c',
        prompt: 'Speed calculation: Distance = 100 ± 1 m (1% error), Time = 10 ± 0.2 s (2% error). Find speed with uncertainty.',
        solution: 'Speed: v = Distance / Time = 100/10 = 10 m/s\n\nUncertainty: For division, add relative errors\nRelative error = 1% + 2% = 3%\nAbsolute error = 10 × 0.03 = 0.3 m/s\n\nAnswer: v = 10.0 ± 0.3 m/s\n\nOr: v = 10 m/s ± 3%',
        hints: ['For division, add relative errors', 'Relative error = sum of relative errors', 'Absolute error = value × relative error']
      },
      {
        id: '5.25d',
        prompt: 'Identify error type: Scale always reads 2kg too heavy. Thermometer readings fluctuate: 20.1, 20.3, 19.9°C.',
        solution: 'Scale always reads 2kg too heavy:\nThis is SYSTEMATIC ERROR (bias)\n- Consistent error in one direction\n- Always too high\n- Fix: Recalibrate instrument!\n\nThermometer readings fluctuate:\nThis is RANDOM ERROR (noise)\n- Unpredictable variations\n- Scattered around true value\n- Fix: Take multiple measurements, average them!\n\nAnswer: Scale = Systematic error (bias), Thermometer = Random error (noise)',
        hints: ['Systematic error = consistent bias', 'Random error = unpredictable variations', 'Different fixes for each type']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['error', 'uncertainty', 'measurement', 'accuracy'] },
    content: {
      intro: 'No measurement is perfect! Learn to quantify errors, understand uncertainty, and see how small measurement errors can affect your final results. Essential for real engineering! All measurements have errors! Learn to identify and minimize them. TWO MAIN TYPES: 1. SYSTEMATIC ERROR (Bias): Consistent error in one direction. 2. RANDOM ERROR (Noise): Unpredictable variations.',
      concepts: [
        {
          title: '🧠 Types of Errors - Understanding Imperfection',
          explanation: 'All measurements have errors! Learn to identify and minimize them. TWO MAIN TYPES: 1. SYSTEMATIC ERROR (Bias): Consistent error in one direction. Examples: Scale reads 2kg too heavy (always), Thermometer reads 1°C too low (always), Sensor calibrated incorrectly. Fix: Recalibrate instrument! 2. RANDOM ERROR (Noise): Unpredictable variations. Examples: Sensor readings fluctuate: 10.1, 10.3, 9.9, Human reaction time varies, Environmental interference. Fix: Take multiple measurements, average them! VISUAL COMPARISON: Target: 10.0. Systematic error: Readings: 12.0, 12.1, 11.9, 12.0. All too high! (biased). Random error: Readings: 10.1, 9.9, 10.2, 9.8. Scattered around target (unbiased).',
          example: 'Systematic error: Scale always reads 2kg too heavy. All readings are biased high. Fix: Recalibrate! Random error: Thermometer readings fluctuate: 20.1, 20.3, 19.9°C. Readings scatter around true value. Fix: Take multiple measurements, average!'
        },
        {
          title: '🔧 Measurement Uncertainty',
          explanation: 'MEASUREMENT UNCERTAINTY: Express as: Value ± Uncertainty. Examples: Length: 10.5 ± 0.1 cm, Temperature: 25 ± 2°C, Voltage: 5.0 ± 0.05 V. Means: True value is likely between 10.4 and 10.6 cm. SIGNIFICANT FIGURES: Show precision of measurement. 12.5 cm → 3 significant figures. 12.50 cm → 4 significant figures (more precise!). Rules: Non-zero digits count, Zeros between digits count, Trailing zeros after decimal count. Examples: 123 → 3 sig figs, 120 → 2 sig figs (trailing zero ambiguous), 120.0 → 4 sig figs (decimal shows precision), 0.0012 → 2 sig figs (leading zeros don\'t count).',
          example: 'Length: 10.5 ± 0.1 cm means true value is likely between 10.4 and 10.6 cm. Significant figures: 12.5 cm (3 sig figs) is less precise than 12.50 cm (4 sig figs).'
        },
        {
          title: '🧮 Error Propagation - How Errors Multiply',
          explanation: 'Small errors can become BIG errors in calculations! ADDITION/SUBTRACTION: Add absolute uncertainties. Example: Length calculation. L1 = 10.0 ± 0.1 cm, L2 = 5.0 ± 0.1 cm. Total = L1 + L2 = 15.0 ± 0.2 cm (Uncertainties add: 0.1 + 0.1 = 0.2). MULTIPLICATION/DIVISION: Add relative uncertainties (percentages). Example: Area calculation. Length = 10.0 ± 0.1 cm (1% error), Width = 5.0 ± 0.1 cm (2% error). Area = 10 × 5 = 50 cm². Relative error = 1% + 2% = 3%. Absolute error = 50 × 0.03 = 1.5 cm². Area = 50 ± 1.5 cm². REAL EXAMPLE: Speed Calculation. Distance = 100 ± 1 m (1% error), Time = 10 ± 0.2 s (2% error). Speed = Distance / Time = 100/10 = 10 m/s. Relative error = 1% + 2% = 3%. Absolute error = 10 × 0.03 = 0.3 m/s. Speed = 10.0 ± 0.3 m/s. KEY INSIGHT: Errors compound in calculations! Measure accurately at each step!',
          example: 'Distance = 100 ± 1 m (1%), Time = 10 ± 0.2 s (2%). Speed = 10.0 ± 0.3 m/s (3% error). Errors add up in calculations!'
        }
      ],
      realWorld: [
        {
          icon: '📏',
          title: 'Measurement Accuracy',
          description: 'Engineers quantify measurement accuracy using uncertainty. All measurements have uncertainty. Uncertainty must be reported. Measurement standards use uncertainty. Calibration uses uncertainty. Quality control uses uncertainty.'
        },
        {
          icon: '🌡️',
          title: 'Sensor Calibration',
          description: 'Engineers calibrate sensors to reduce systematic errors. Calibration removes bias. Systematic errors fixed by calibration. Random errors reduced by averaging. Sensor selection uses uncertainty. Instrument accuracy uses uncertainty.'
        },
        {
          icon: '⚖️',
          title: 'Quality Control',
          description: 'Manufacturing uses uncertainty for quality control. Part dimensions have uncertainty. Tolerances use uncertainty. Quality control uses uncertainty. Process monitoring uses uncertainty. Production standards use uncertainty.'
        },
        {
          icon: '🔬',
          title: 'Experimental Error',
          description: 'Scientists quantify experimental error using uncertainty. All experiments have error. Error analysis uses uncertainty. Experimental design uses uncertainty. Data analysis uses uncertainty. Scientific reporting uses uncertainty.'
        },
        {
          icon: '📊',
          title: 'Data Analysis',
          description: 'Engineers analyze data with uncertainty in mind. Error propagation calculated. Uncertainty affects conclusions. Data interpretation uses uncertainty. Decision making uses uncertainty. Risk analysis uses uncertainty.'
        }
      ]
    }
  },
  26: {
    id: 26,
    title: 'Statistics & Data: Units, Dimensions & Conversions',
    subtitle: 'Dimensional Consistency',
    description: 'Master dimensional analysis - the secret weapon that prevents engineering disasters! Learn to check if equations make sense and catch errors before they become expensive mistakes',
    coreIdea: 'Dimensional analysis checks equation validity - both sides must have same dimensions',
    engineeringExample: 'NASA Mars Climate Orbiter ($327M failure), equation validation, unit conversion',
    learningObjectives: [
      'Understand fundamental dimensions (length, mass, time)',
      'Check dimensional consistency of equations',
      'Use dimensional analysis to find errors',
      'Convert between different units',
      'Apply dimensional analysis to engineering problems'
    ],
    keyEquations: [
      { eq: '[L] = \\text{Length}, [M] = \\text{Mass}, [T] = \\text{Time}', meaning: 'Fundamental dimensions' },
      { eq: '[V] = [L]/[T] = [LT^{-1}]', meaning: 'Velocity dimensions' },
      { eq: '[F] = [M][LT^{-2}] = [MLT^{-2}]', meaning: 'Force dimensions' },
      { eq: '[E] = [ML^2T^{-2}]', meaning: 'Energy dimensions' }
    ],
    practiceProblems: [
      {
        id: '5.26a',
        prompt: 'Check if F = ma is dimensionally correct.',
        solution: 'Step 1: Identify dimensions\nF = Force = [MLT⁻²]\nm = Mass = [M]\na = Acceleration = [LT⁻²]\n\nStep 2: Check right side\nma = [M][LT⁻²] = [MLT⁻²]\n\nStep 3: Compare\nLeft: [MLT⁻²]\nRight: [MLT⁻²]\n\nMatch! ✓\n\nAnswer: F = ma is dimensionally correct!',
        hints: ['Identify dimensions of each term', 'Check right side: ma = [M][LT⁻²]', 'Compare left and right sides']
      },
      {
        id: '5.26b',
        prompt: 'Check if E = ½mv² is dimensionally correct.',
        solution: 'Step 1: Dimensions\nE = Energy = [ML²T⁻²]\nm = Mass = [M]\nv = Velocity = [LT⁻¹]\n\nStep 2: Check right side\n½ is dimensionless (just a number)\nmv² = [M][LT⁻¹]² = [M][L²T⁻²] = [ML²T⁻²]\n\nStep 3: Compare\nLeft: [ML²T⁻²]\nRight: [ML²T⁻²]\n\nMatch! ✓\n\nAnswer: E = ½mv² is dimensionally correct!',
        hints: ['Energy dimensions: [ML²T⁻²]', 'Velocity squared: [LT⁻¹]² = [L²T⁻²]', 'Check both sides match']
      },
      {
        id: '5.26c',
        prompt: 'Check if v = at² is dimensionally correct. (Hint: It\'s wrong!)',
        solution: 'Step 1: Dimensions\nv = Velocity = [LT⁻¹]\na = Acceleration = [LT⁻²]\nt = Time = [T]\n\nStep 2: Check right side\nat² = [LT⁻²][T²] = [LT⁰] = [L]\n\nStep 3: Compare\nLeft: [LT⁻¹]\nRight: [L]\n\nNO MATCH! ✗\n\nAnswer: v = at² is dimensionally INCORRECT!\n\nCorrect equation: v = at (not t²)\nCheck: at = [LT⁻²][T] = [LT⁻¹] ✓',
        hints: ['Check dimensions of each term', 'at² = [LT⁻²][T²] = [L]', 'Compare with velocity: [LT⁻¹]', 'They don\'t match!']
      },
      {
        id: '5.26d',
        prompt: 'Convert 72 km/h to m/s using dimensional analysis.',
        solution: 'Step 1: Write conversion factors\n1 km = 1000 m\n1 hour = 3600 seconds\n\nStep 2: Convert\n72 km/h × (1000 m / 1 km) × (1 h / 3600 s)\n= 72 × 1000/3600 m/s\n= 72,000/3600 m/s\n= 20 m/s\n\nStep 3: Check dimensions\n[LT⁻¹] = [LT⁻¹] ✓\n\nAnswer: 72 km/h = 20 m/s\n\nQuick trick: Divide by 3.6\n72 ÷ 3.6 = 20 m/s',
        hints: ['Use conversion factors', 'Cancel units', 'Check dimensions match', 'Quick trick: divide by 3.6']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['dimensions', 'units', 'conversions', 'dimensional-analysis'] },
    content: {
      intro: 'Master dimensional analysis - the secret weapon that prevents engineering disasters! Learn to check if equations make sense and catch errors before they become expensive mistakes. Dimensions tell you WHAT TYPE of quantity you have! FUNDAMENTAL DIMENSIONS: [L] = Length (meters, feet, km), [M] = Mass (kg, grams, tons), [T] = Time (seconds, hours, years). All other dimensions are combinations!',
      concepts: [
        {
          title: '🧠 What are Dimensions? - The DNA of Equations',
          explanation: 'Dimensions tell you WHAT TYPE of quantity you have! FUNDAMENTAL DIMENSIONS: [L] = Length (meters, feet, km), [M] = Mass (kg, grams, tons), [T] = Time (seconds, hours, years). All other dimensions are combinations! DERIVED DIMENSIONS: Velocity = Distance / Time. [V] = [L]/[T] = [LT⁻¹]. Units: m/s, km/h, mph. Acceleration = Velocity / Time. [A] = [LT⁻¹]/[T] = [LT⁻²]. Units: m/s², ft/s². Force = Mass × Acceleration. [F] = [M][LT⁻²] = [MLT⁻²]. Units: Newton (N), pound-force (lbf). Energy = Force × Distance. [E] = [MLT⁻²][L] = [ML²T⁻²]. Units: Joule (J), calorie, BTU. THE GOLDEN RULE: Both sides of equation MUST have same dimensions! ✓ CORRECT: F = ma. [MLT⁻²] = [M][LT⁻²] ✓. ✗ WRONG: F = m + a. [MLT⁻²] ≠ [M] + [LT⁻²] ✗. Can\'t add mass to acceleration!',
          example: 'F = ma: [MLT⁻²] = [M][LT⁻²] = [MLT⁻²] ✓ Correct! F = m + a: [MLT⁻²] ≠ [M] + [LT⁻²] ✗ Wrong! Can\'t add mass to acceleration!'
        },
        {
          title: '🔧 Checking Equations - Dimensional Detective',
          explanation: 'Let\'s check if equations make sense! PROBLEM 1: Is F = ma correct? Step 1: Identify dimensions. F = Force = [MLT⁻²], m = Mass = [M], a = Acceleration = [LT⁻²]. Step 2: Check right side. ma = [M][LT⁻²] = [MLT⁻²]. Step 3: Compare. Left: [MLT⁻²], Right: [MLT⁻²]. Match! ✓. PROBLEM 2: Is E = ½mv² correct? Step 1: Dimensions. E = Energy = [ML²T⁻²], m = Mass = [M], v = Velocity = [LT⁻¹]. Step 2: Check right side. ½ is dimensionless (just a number). mv² = [M][LT⁻¹]² = [M][L²T⁻²] = [ML²T⁻²]. Step 3: Compare. Left: [ML²T⁻²], Right: [ML²T⁻²]. Match! ✓. PROBLEM 3: Is v = at² WRONG? Step 1: Dimensions. v = [LT⁻¹], a = [LT⁻²], t = [T]. Step 2: Check right side. at² = [LT⁻²][T²] = [LT⁰] = [L]. Step 3: Compare. Left: [LT⁻¹], Right: [L]. NO MATCH! ✗. Correct equation: v = at (not t²).',
          example: 'F = ma: [MLT⁻²] = [MLT⁻²] ✓ Correct! E = ½mv²: [ML²T⁻²] = [ML²T⁻²] ✓ Correct! v = at²: [LT⁻¹] ≠ [L] ✗ Wrong! Correct: v = at.'
        },
        {
          title: '🧮 Real Disaster Example',
          explanation: 'REAL DISASTER EXAMPLE: NASA Mars Climate Orbiter (1999). One team used: Newtons [MLT⁻²]. Other team used: pound-force [MLT⁻²]. Same dimensions, different UNITS! Result: $327 million crash! Lesson: Check dimensions AND units! DIMENSIONAL ANALYSIS STEPS: 1. Write equation. 2. Replace each term with dimensions. 3. Simplify both sides. 4. Check if they match. Example: Check v² = 2as. Left side: [LT⁻¹]² = [L²T⁻²]. Right side: [LT⁻²][L] = [L²T⁻²]. Match! ✓ Equation is dimensionally correct!',
          example: 'NASA Mars Climate Orbiter: Same dimensions [MLT⁻²], different units (N vs lbf). Result: $327 million crash! Always check dimensions AND units!'
        }
      ],
      realWorld: [
        {
          icon: '🚀',
          title: 'NASA Mars Climate Orbiter',
          description: 'Mission cost $327 million. Failed due to unit mismatch: Lockheed used pounds-force (lbf), NASA expected Newtons (N). Spacecraft crashed into Mars. Same dimensions, different units! This disaster shows why dimensional analysis is critical!'
        },
        {
          icon: '⚡',
          title: 'Electrical Engineering',
          description: 'Engineers check equation dimensions. Power = Force × Velocity. [ML²T⁻³] = [MLT⁻²][LT⁻¹] ✓. Pressure = Force / Area. [ML⁻¹T⁻²] = [MLT⁻²]/[L²] ✓. Circuit analysis uses dimensional analysis. Electrical design uses dimensional checking.'
        },
        {
          icon: '🏗️',
          title: 'Structural Engineering',
          description: 'Engineers check structural equations using dimensions. Force = Mass × Acceleration. [MLT⁻²] = [M][LT⁻²] ✓. Energy = Force × Distance. [ML²T⁻²] = [MLT⁻²][L] ✓. Structural analysis uses dimensional analysis. Building design uses dimensional checking.'
        },
        {
          icon: '💧',
          title: 'Fluid Mechanics',
          description: 'Engineers check fluid equations using dimensions. Pressure = Force / Area. [ML⁻¹T⁻²] = [MLT⁻²]/[L²] ✓. Flow rate = Volume / Time. [L³T⁻¹] = [L³]/[T] ✓. Fluid mechanics uses dimensional analysis. Hydraulic design uses dimensional checking.'
        },
        {
          icon: '🔬',
          title: 'Scientific Research',
          description: 'Scientists check equations using dimensions. All equations must be dimensionally consistent. Dimensional analysis catches errors. Experimental design uses dimensions. Research uses dimensional analysis. Scientific reporting uses dimensions.'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: 'Statistics & Data: Vector Math in Physical Systems',
    subtitle: 'Motion Without Laws',
    description: 'Vectors are everywhere in motion! Learn how to add velocities, combine forces, and track positions using vector mathematics. No physics laws needed - just pure vector power',
    coreIdea: 'Vectors describe motion - position, velocity, and displacement are all vectors',
    engineeringExample: 'Robot navigation, drone flight, aircraft motion, vehicle dynamics',
    learningObjectives: [
      'Understand vectors in motion systems',
      'Calculate position and displacement vectors',
      'Calculate velocity vectors from displacement',
      'Apply relative velocity concepts',
      'Use vectors for navigation and tracking'
    ],
    keyEquations: [
      { eq: '\\vec{r} = (x, y, z)', meaning: 'Position vector in 3D' },
      { eq: '\\Delta\\vec{r} = \\vec{r_2} - \\vec{r_1}', meaning: 'Displacement vector' },
      { eq: '\\vec{v} = \\frac{\\Delta\\vec{r}}{\\Delta t}', meaning: 'Velocity = displacement / time' },
      { eq: '|\\vec{v}| = \\sqrt{x^2 + y^2 + z^2}', meaning: 'Speed = magnitude of velocity vector' },
      { eq: '\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B', meaning: 'Relative velocity' }
    ],
    practiceProblems: [
      {
        id: '5.27a',
        prompt: 'Robot starts at (2, 1) and moves to (5, 4). Find displacement vector.',
        solution: 'Displacement: Δr⃗ = r⃗₂ - r⃗₁\nΔr⃗ = (5, 4) - (2, 1)\nΔr⃗ = (5-2, 4-1) = (3, 3)\n\nDistance: |Δr⃗| = √(3² + 3²) = √18 ≈ 4.24 meters\n\nAnswer: Displacement = (3, 3) meters\nDistance = 4.24 meters\n\nRobot moved 3m right and 3m up!',
        hints: ['Displacement = final - initial', 'Subtract component-wise', 'Distance = magnitude of displacement']
      },
      {
        id: '5.27b',
        prompt: 'Displacement Δr⃗ = (6, 8) meters in 2 seconds. Find velocity vector and speed.',
        solution: 'Velocity: v⃗ = Δr⃗ / Δt\nv⃗ = (6, 8) / 2 = (3, 4) m/s\n\nSpeed: |v⃗| = √(3² + 4²) = √25 = 5 m/s\n\nDirection: θ = arctan(4/3) ≈ 53.1° from horizontal\n\nAnswer: Velocity = (3, 4) m/s\nSpeed = 5 m/s\nDirection = 53.1° from horizontal',
        hints: ['Velocity = displacement / time', 'Speed = magnitude of velocity', 'Direction = arctan(y/x)']
      },
      {
        id: '5.27c',
        prompt: 'Car A: v⃗ₐ = (20, 0) m/s (east). Car B: v⃗ᵦ = (15, 10) m/s (northeast). Find velocity of B relative to A.',
        solution: 'Relative velocity: v⃗ᵦₐ = v⃗ᵦ - v⃗ₐ\nv⃗ᵦₐ = (15, 10) - (20, 0)\nv⃗ᵦₐ = (15-20, 10-0) = (-5, 10) m/s\n\nSpeed: |v⃗ᵦₐ| = √((-5)² + 10²) = √125 ≈ 11.2 m/s\n\nDirection: θ = arctan(10/-5) ≈ 116.6° (northwest)\n\nAnswer: Velocity of B relative to A = (-5, 10) m/s\nSpeed = 11.2 m/s\n\nFrom A\'s perspective, B moves 5 m/s west and 10 m/s north!',
        hints: ['Relative velocity = v⃗ᵦ - v⃗ₐ', 'Subtract component-wise', 'Calculate magnitude and direction']
      },
      {
        id: '5.27d',
        prompt: 'Boat velocity: v⃗ᵦ = (5, 0) m/s (east). Current velocity: v⃗c = (0, 3) m/s (north). Find total velocity and speed.',
        solution: 'Total velocity: v⃗ₜₒₜₐₗ = v⃗ᵦ + v⃗c\nv⃗ₜₒₜₐₗ = (5, 0) + (0, 3) = (5, 3) m/s\n\nSpeed: |v⃗ₜₒₜₐₗ| = √(5² + 3²) = √34 ≈ 5.83 m/s\n\nDirection: θ = arctan(3/5) ≈ 31° north of east\n\nAnswer: Total velocity = (5, 3) m/s\nSpeed = 5.83 m/s\nDirection = 31° north of east\n\nBoat moves northeast at 5.83 m/s!',
        hints: ['Add velocities component-wise', 'Calculate magnitude for speed', 'Calculate direction using arctan']
      }
    ],
    metadata: { difficulty: 'Medium', estTime: '25 min', tags: ['vectors', 'motion', 'navigation', 'physics'] },
    content: {
      intro: 'Vectors are everywhere in motion! Learn how to add velocities, combine forces, and track positions using vector mathematics. No physics laws needed - just pure vector power! In real systems, direction is just as important as magnitude! POSITION VECTORS: Robot position in 2D: r⃗ = (x, y) = (5, 3) meters. DISPLACEMENT VECTORS: Change in position = Final - Initial. Δr⃗ = r⃗₂ - r⃗₁ = (5-2, 4-1) = (3, 3).',
      concepts: [
        {
          title: '🧠 Vectors in Motion - Direction Matters!',
          explanation: 'In real systems, direction is just as important as magnitude! POSITION VECTORS: Robot position in 2D: r⃗ = (x, y) = (5, 3) meters. This means: 5 meters right, 3 meters forward. Position vector points from origin to robot! DISPLACEMENT VECTORS: Change in position = Final - Initial. Start: r⃗₁ = (2, 1), End: r⃗₂ = (5, 4). Displacement: Δr⃗ = r⃗₂ - r⃗₁ = (5-2, 4-1) = (3, 3). Moved 3m right, 3m up! VELOCITY VECTORS: Velocity = Displacement / Time. v⃗ = Δr⃗ / Δt. Example: Δr⃗ = (6, 8) meters, Δt = 2 seconds. v⃗ = (6/2, 8/2) = (3, 4) m/s. Speed (magnitude): |v⃗| = √(3² + 4²) = √25 = 5 m/s. Direction: θ = arctan(4/3) ≈ 53.1° from horizontal.',
          example: 'Robot position: (2, 1) → (5, 4). Displacement: (3, 3) meters. Velocity: (3, 4) m/s. Speed: 5 m/s. Direction: 53.1° from horizontal.'
        },
        {
          title: '🔧 Relative Velocity',
          explanation: 'RELATIVE VELOCITY: Two objects moving. Car A: v⃗ₐ = (20, 0) m/s (east). Car B: v⃗ᵦ = (15, 10) m/s (northeast). Velocity of B relative to A: v⃗ᵦₐ = v⃗ᵦ - v⃗ₐ. v⃗ᵦₐ = (15-20, 10-0) = (-5, 10) m/s. From A\'s perspective, B moves 5 m/s west and 10 m/s north! VECTOR ADDITION IN MOTION: Boat velocity: v⃗ᵦ = (5, 0) m/s (east). Current velocity: v⃗c = (0, 3) m/s (north). Total velocity: v⃗ₜₒₜₐₗ = v⃗ᵦ + v⃗c = (5, 3) m/s. Boat moves northeast at √(5² + 3²) ≈ 5.83 m/s!',
          example: 'Boat: (5, 0) m/s east, Current: (0, 3) m/s north. Total: (5, 3) m/s. Speed: 5.83 m/s northeast. Wind effect: Plane: (200, 0) m/s, Wind: (-20, 30) m/s. Ground: (180, 30) m/s. Speed: 182.5 m/s.'
        },
        {
          title: '🧮 Vector Operations in Systems',
          explanation: 'PROBLEM 1: Drone Navigation. Drone at origin (0, 0). Command 1: Move (10, 5) meters. Command 2: Move (3, 8) meters. Final position: r⃗ = (10, 5) + (3, 8) = (13, 13) meters. Distance from start: |r⃗| = √(13² + 13²) = √338 ≈ 18.4 meters. PROBLEM 2: Wind Effect on Plane. Plane airspeed: v⃗ₚ = (200, 0) m/s (east). Wind: v⃗w = (-20, 30) m/s (west + north). Ground velocity: v⃗g = v⃗ₚ + v⃗w = (200-20, 0+30) = (180, 30) m/s. Ground speed: |v⃗g| = √(180² + 30²) = √33,300 ≈ 182.5 m/s. Heading angle: θ = arctan(30/180) ≈ 9.5° north of east.',
          example: 'Drone navigation: (0, 0) → (10, 5) → (13, 13). Total displacement: (13, 13) meters. Distance: 18.4 meters. Plane with wind: (200, 0) + (-20, 30) = (180, 30) m/s. Ground speed: 182.5 m/s.'
        }
      ],
      realWorld: [
        {
          icon: '🤖',
          title: 'Robot Navigation',
          description: 'Robots use position vectors for navigation. Each robot has a 3D position vector [x, y, z]. Displacement vectors for movement. Velocity vectors for motion control. Navigation systems use vectors. Robot control uses vector math.'
        },
        {
          icon: '🚁',
          title: 'Drone Flight',
          description: 'Drones use velocity vectors for flight. Position vectors for GPS tracking. Wind vectors affect flight. Flight controllers use vectors. Navigation uses vector math. Autonomous flight uses vectors.'
        },
        {
          icon: '✈️',
          title: 'Aircraft Navigation',
          description: 'Aircraft use velocity vectors for navigation. Airspeed vs ground speed. Wind vectors affect flight. Flight paths use vectors. Navigation systems use vectors. Air traffic control uses vectors.'
        },
        {
          icon: '🚗',
          title: 'Vehicle Dynamics',
          description: 'Vehicles use velocity vectors for motion. Position vectors for GPS. Relative velocity for passing. Traffic analysis uses vectors. Navigation uses vectors. Autonomous vehicles use vectors.'
        },
        {
          icon: '🚢',
          title: 'Marine Navigation',
          description: 'Ships use velocity vectors for navigation. Current vectors affect movement. Wind vectors affect ships. Navigation uses vectors. Marine systems use vectors. Ship control uses vector math.'
        }
      ]
    }
  }
};

export default unit5Lessons;
