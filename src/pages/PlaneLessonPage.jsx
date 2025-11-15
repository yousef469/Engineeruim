import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock, Brain, XCircle } from 'lucide-react';
import planesLessons from '../data/planesLessonsData';
import { useProgress } from '../contexts/ProgressContext';
import EnhancedLessonContent from '../components/EnhancedLessonContent';
import LessonBreadcrumb from '../components/LessonBreadcrumb';
import LessonNavigation from '../components/LessonNavigation';

export default function PlaneLessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  
  const lesson = planesLessons[parseInt(lessonId)];
  const { completeLesson } = useProgress();
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <button
            onClick={() => navigate('/games/map/planes')}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  const totalSections = lesson.content.sections.length;
  const isLastSection = currentSection === totalSections - 1;
  const hasQuiz = lesson.quiz && lesson.quiz.questions && lesson.quiz.questions.length > 0;

  const handleNext = async () => {
    if (isLastSection && !showQuiz && hasQuiz) {
      // Show quiz after last section
      setShowQuiz(true);
    } else if (showQuiz && currentQuestion < lesson.quiz.questions.length - 1) {
      // Move to next quiz question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else if (showQuiz && currentQuestion === lesson.quiz.questions.length - 1) {
      // Quiz complete, finish lesson
      if (!lessonCompleted) {
        const totalQuestions = lesson.quiz.questions.length;
        const percentage = (quizScore / totalQuestions) * 100;
        
        // Save quiz score
        completeLesson('planes', parseInt(lessonId), {
          score: quizScore,
          total: totalQuestions,
          percentage
        });
        
        setLessonCompleted(true);
      }
      navigate('/games/map/planes');
    } else {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (showQuiz && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    } else if (showQuiz && currentQuestion === 0) {
      setShowQuiz(false);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (answeredQuestions.includes(currentQuestion)) return; // Already answered
    
    setSelectedAnswer(answerIndex);
    const question = lesson.quiz.questions[currentQuestion];
    if (answerIndex === question.correctAnswer) {
      setQuizScore(quizScore + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const currentContent = lesson.content.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-600 text-white">
      {/* Header */}
      <div className="border-b border-white/20 bg-blue-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/games/map/planes')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Map</span>
            </button>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">{lesson.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <LessonBreadcrumb 
          subject="planes" 
          lessonId={lessonId} 
          lessonTitle={lesson.title} 
        />
        
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
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
            />
          </div>
          <div className="text-sm text-white/60 mt-2 text-center">
            Section {currentSection + 1} of {totalSections}
          </div>
        </div>

        {/* Introduction (only on first section) */}
        {currentSection === 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Introduction</h3>
                <p className="text-white/90 leading-relaxed">{lesson.content.introduction}</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Interactive Content */}
        <EnhancedLessonContent lessonId={parseInt(lessonId)} subject="planes" />

        {/* Current Section Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6">{currentContent.title}</h2>
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
        )}

        {/* Vocabulary (only on last section) */}
        {isLastSection && !showQuiz && lesson.content.vocabulary.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <h3 className="font-bold text-xl mb-4">Vocabulary</h3>
            <div className="grid gap-4">
              {lesson.content.vocabulary.map((item, index) => (
                <div key={index} className="border-l-4 border-cyan-400 pl-4">
                  <div className="font-bold text-cyan-300">{item.term}</div>
                  <div className="text-white/80 text-sm mt-1">{item.definition}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {showQuiz && hasQuiz && (
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-400/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-purple-300" />
                <div>
                  <h3 className="font-bold text-2xl">Knowledge Check</h3>
                  <p className="text-white/60 text-sm">Test your understanding</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60">Question {currentQuestion + 1} of {lesson.quiz.questions.length}</div>
                <div className="text-lg font-bold text-purple-300">Score: {quizScore}/{lesson.quiz.questions.length}</div>
              </div>
            </div>

            {(() => {
              const question = lesson.quiz.questions[currentQuestion];
              const isAnswered = answeredQuestions.includes(currentQuestion);
              
              return (
                <div>
                  <h4 className="text-xl font-semibold mb-6">{question.question}</h4>
                  <div className="space-y-3 mb-6">
                    {question.options.map((option, idx) => {
                      const isSelected = selectedAnswer === idx;
                      const isCorrect = idx === question.correctAnswer;
                      const showCorrect = isAnswered && isCorrect;
                      const showWrong = isAnswered && isSelected && !isCorrect;

                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(idx)}
                          disabled={isAnswered}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            showCorrect
                              ? 'border-green-400 bg-green-500/20'
                              : showWrong
                              ? 'border-red-400 bg-red-500/20'
                              : isSelected
                              ? 'border-purple-400 bg-purple-500/20'
                              : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                          } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              showCorrect ? 'border-green-400 bg-green-400' : 
                              showWrong ? 'border-red-400 bg-red-400' : 
                              'border-white/40'
                            }`}>
                              {showCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                              {showWrong && <XCircle className="w-4 h-4 text-white" />}
                            </div>
                            <span className="flex-1">{option}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && question.explanation && (
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <div className="font-semibold text-cyan-300 mb-2">Explanation:</div>
                      <p className="text-white/90">{question.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-8">
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
            disabled={showQuiz && !answeredQuestions.includes(currentQuestion)}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-all shadow-lg"
          >
            {showQuiz && currentQuestion === lesson.quiz.questions.length - 1 ? 'Complete Lesson' : 
             showQuiz ? 'Next Question' :
             isLastSection && hasQuiz ? 'Start Quiz' : 
             isLastSection ? 'Complete Lesson' : 'Next'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Enhanced Lesson Navigation */}
        <LessonNavigation 
          subject="planes" 
          currentLessonId={lessonId} 
          allLessons={planesLessons} 
        />
      </div>
    </div>
  );
}
