# Mathematics & Physics Implementation Plan

## Overview
Create prerequisite system where students must complete Math & Physics for Engineering before accessing engineering journeys (Rockets, Planes, Cars, Robotics).

## Structure

### 1. Mathematics Page Options
- **Mathematics for Engineering** (Recommended) → 6 lessons
- **Advanced Mathematics** → 6 lessons

### 2. Physics Page Options  
- **Physics for Engineering** (Recommended) → 6 lessons
- **Advanced Physics** → 6 lessons

## Journey Maps (4 total)

Each journey map will have:
- 6 lessons in a single unit
- "Coming Soon" placeholder content
- Journey map style like GameMapRockets/GameMapCars
- Lesson nodes with icons and colors
- Progress tracking

### Mathematics for Engineering Journey
- **Unit 1: Foundation** (6 lessons)
  1. Numbers & Operations
  2. Algebra Basics
  3. Geometry Fundamentals
  4. Trigonometry Intro
  5. Vectors Basics
  6. Applied Problem Solving

### Physics for Engineering Journey
- **Unit 1: Mechanics Basics** (6 lessons)
  1. Forces & Motion
  2. Newton's Laws
  3. Energy & Work
  4. Momentum
  5. Gravity
  6. Applied Mechanics

### Advanced Mathematics Journey
- **Unit 1: Advanced Concepts** (6 lessons)
  1. Calculus I
  2. Calculus II
  3. Linear Algebra
  4. Differential Equations
  5. Complex Analysis
  6. Mathematical Proofs

### Advanced Physics Journey
- **Unit 1: Modern Physics** (6 lessons)
  1. Quantum Basics
  2. Relativity Intro
  3. Electromagnetism
  4. Wave Theory
  5. Particle Physics
  6. Advanced Topics

## Prerequisite System

### Journey Page Logic
```
IF (Math for Engineering NOT complete OR Physics for Engineering NOT complete):
  - Show: Math & Physics for Engineering (unlocked)
  - Show: Advanced Math & Physics (unlocked)
  - Show: Rockets, Planes, Cars, Robotics (LOCKED with message)
  
ELSE IF (Math & Physics for Engineering complete):
  - Show: All journeys unlocked
  - Rockets, Planes, Cars, Robotics become accessible
```

## Implementation Steps

1. ✅ Create 4 journey map pages (6 lessons each)
2. ✅ Update Mathematics/Physics pages with new names
3. ✅ Add prerequisite checking logic
4. ✅ Update LearnSectionsPage to show lock status
5. ⏳ Create lesson content (one by one as requested)

## Next Steps
- Start with Mathematics for Engineering Lesson 1
- Build out interactive lessons similar to Rocket Lesson 1
- Gradually expand to all 24 lessons (6 × 4 paths)
