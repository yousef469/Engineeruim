# Aircraft Curriculum - Quiz Addition Plan

## Current Status
- ✅ 20 lessons with MIT-quality content
- ❌ 0 quizzes (all have `quiz: { questions: [] }`)

## Structure
- Unit 0: Foundations (6 lessons) - Lessons 0-5
- Unit 1: Flight Fundamentals (6 lessons) - Lessons 6-11
- Unit 2: Aerodynamics (2 lessons) - Lessons 12-13
- Unit 3: Structures (2 lessons) - Lessons 14-15
- Unit 4: Propulsion (2 lessons) - Lessons 16-17
- Unit 5: Operations (2 lessons) - Lessons 18-19

**Total: 20 lessons need 80 quiz questions (4 per lesson)**

## Quiz Addition Strategy

### Phase 1: Add quizzes to unit files
- Add quiz objects to each lesson in unit files
- 4 questions per lesson
- Multiple choice format
- Include explanations

### Phase 2: Update planesLessonsData.js
- Remove `quiz: { questions: [] }` fallback
- Change to `quiz: lesson.quiz`
- Let actual quiz data flow through

### Phase 3: Verify display
- Check if PlaneLessonPage needs updates
- Ensure quizzes display properly
- Test with sample lesson

## Quiz Question Types

For each lesson, create questions testing:
1. **Conceptual understanding** - Why/how things work
2. **Calculations** - Apply equations with numbers
3. **Real examples** - Boeing 737, Cessna 172, etc.
4. **Engineering trade-offs** - Design decisions

## Starting with Unit 1 (Flight Fundamentals)
Most critical unit, already has excellent content.
