import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock, Calculator, Brain, Wrench, Puzzle } from 'lucide-react';
import mathematicsLessons from '../data/mathematicsLessonsData';

export default function MathematicsLessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  const lesson = mathematicsLessons.find(l => l.id === parseInt(lessonId));
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <button
            onClick={() => navigate('/learn/mathematics/engineering/map')}
            className="px-6 py-3 bg-secondary hover:bg-secondary rounded-lg transition-colors"
          >
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  const totalSections = lesson.content.sections.length;
  const isLastSection = currentSection === totalSections - 1;

  const handleNext = () => {
    if (isLastSection && !showQuiz) {
      setShowQuiz(true);
    } else if (showQuiz) {
      navigate('/learn/mathematics/engineering/map');
    } else {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex });
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    lesson.content.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    return correct;
  };

  const getSectionIcon = (type) => {
    switch(type) {
      case 'concept': return <Brain className="w-6 h-6" />;
      case 'practice': return <Wrench className="w-6 h-6" />;
      case 'simulation': return <Puzzle className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const currentContent = lesson.content.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-950 to-black text-white">
      {/* Header */}
      <div className="border-b border-green-700 bg-green-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/learn/mathematics/engineering/map')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Map</span>
            </button>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-300" />
              <span className="text-sm">{lesson.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-6xl">{lesson.emoji}</div>
            <div>
              <div className="text-sm text-white/60 mb-1">
                {lesson.level} • Unit {lesson.unitNumber} • Lesson {lesson.lessonNumber}
              </div>
              <h1 className="text-4xl font-bold">{lesson.title}</h1>
              <div className="text-lg text-white/80 mt-2">{lesson.unit}</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mt-6">
            <div
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: showQuiz ? '100%' : `${((currentSection + 1) / totalSections) * 100}%` }}
            />
          </div>
          <div className="text-sm text-white/60 mt-2 text-center">
            {showQuiz ? 'Quiz Time!' : `Section ${currentSection + 1} of ${totalSections}`}
          </div>
        </div>

        {!showQuiz ? (
          <>
            {/* Introduction (only on first section) */}
            {currentSection === 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Introduction</h3>
                    <p className="text-white/90 leading-relaxed">{lesson.content.introduction}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Current Section Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-secondary">
                  {getSectionIcon(currentContent.type)}
                </div>
                <h2 className="text-3xl font-bold">{currentContent.title}</h2>
              </div>
              <div className="prose prose-invert prose-lg max-w-none">
                {currentContent.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-white/90 leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Takeaways (only on last section) */}
            {isLastSection && (
              <>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-400/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Key Takeaways</h3>
                      <ul className="space-y-2">
                        {lesson.content.keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-300 mt-1">•</span>
                            <span className="text-white/90">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Vocabulary */}
                {lesson.content.vocabulary.length > 0 && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-secondary" />
                      Key Terms
                    </h3>
                    <div className="grid gap-4">
                      {lesson.content.vocabulary.map((item, index) => (
                        <div key={index} className="border-l-4 border-green-400 pl-4">
                          <div className="font-bold text-green-300">{item.term}</div>
                          <div className="text-white/80 text-sm mt-1">{item.definition}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          /* Quiz Section */
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-secondary" />
              Quiz Time!
            </h2>
            
            {!quizSubmitted ? (
              <div className="space-y-6">
                {lesson.content.quiz.map((question, qIndex) => (
                  <div key={qIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="font-bold text-lg mb-4">
                      {qIndex + 1}. {question.question}
                    </div>
                    <div className="space-y-3">
                      {question.options.map((option, oIndex) => (
                        <button
                          key={oIndex}
                          onClick={() => handleQuizAnswer(qIndex, oIndex)}
                          className={`w-full text-left p-4 rounded-lg transition-all ${
                            quizAnswers[qIndex] === oIndex
                              ? 'bg-secondary/30 border-2 border-green-400'
                              : 'bg-white/5 border-2 border-white/10 hover:border-green-400/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < lesson.content.quiz.length}
                  className="w-full py-4 bg-secondary hover:bg-secondary disabled:bg-background-light disabled:cursor-not-allowed rounded-lg font-bold text-lg transition-colors"
                >
                  Submit Quiz
                </button>
              </div>
            ) : (
              /* Quiz Results */
              <div>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">
                    {calculateScore() === lesson.content.quiz.length ? '🏆' : calculateScore() >= lesson.content.quiz.length * 0.7 ? '⭐' : '📚'}
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    Score: {calculateScore()} / {lesson.content.quiz.length}
                  </div>
                  <div className="text-xl text-white/80">
                    {calculateScore() === lesson.content.quiz.length
                      ? 'Perfect! You mastered this lesson!'
                      : calculateScore() >= lesson.content.quiz.length * 0.7
                      ? 'Great job! Keep learning!'
                      : 'Keep practicing! Review the lesson and try again.'}
                  </div>
                </div>

                <div className="space-y-4">
                  {lesson.content.quiz.map((question, qIndex) => {
                    const userAnswer = quizAnswers[qIndex];
                    const isCorrect = userAnswer === question.correct;
                    
                    return (
                      <div key={qIndex} className={`p-6 rounded-xl border-2 ${
                        isCorrect ? 'bg-secondary/10 border-green-400' : 'bg-red-500/10 border-red-400'
                      }`}>
                        <div className="font-bold mb-2">
                          {qIndex + 1}. {question.question}
                        </div>
                        <div className="text-sm">
                          <div className={isCorrect ? 'text-green-300' : 'text-red-300'}>
                            Your answer: {question.options[userAnswer]}
                          </div>
                          {!isCorrect && (
                            <div className="text-green-300 mt-1">
                              Correct answer: {question.options[question.correct]}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0 && !showQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={showQuiz && !quizSubmitted}
            className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-bold"
          >
            {showQuiz && quizSubmitted ? 'Complete Lesson' : isLastSection && !showQuiz ? 'Take Quiz' : 'Next'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
