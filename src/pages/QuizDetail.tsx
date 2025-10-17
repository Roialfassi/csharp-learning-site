import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'

export default function QuizDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const quizId = parseInt(id || '1')
  const quiz = quizzes.find((q) => q.id === quizId)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (quiz) {
      setAnswers(new Array(quiz.questions.length).fill(-1))
    }
  }, [quiz])

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-800">לא מצאנו את החידון המבוקש</p>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const selectedAnswer = answers[currentQuestion]

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleFinish()
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleFinish = () => {
    const score = answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length
    storage.saveQuizProgress(quizId, score, 1)
    setShowResults(true)
  }

  const score = answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length
  const percentage = Math.round((score / quiz.questions.length) * 100)

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Results */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
            <div className="text-6xl mb-4">
              {percentage === 100 ? '🏆' : percentage >= 80 ? '👏' : percentage >= 60 ? '👍' : '💪'}
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">הציון שלך</h2>
            <div className="flex justify-center items-baseline gap-4 mb-8">
              <span className="text-7xl font-bold text-blue-600">{score}</span>
              <span className="text-3xl text-gray-600">/ {quiz.questions.length}</span>
            </div>
            <div className="text-2xl font-bold text-gray-700 mb-8">{percentage}%</div>

            {percentage === 100 && <p className="text-xl text-green-600 mb-8">מעולה! ענית נכון על כל השאלות!</p>}
            {percentage >= 80 && percentage < 100 && (
              <p className="text-xl text-blue-600 mb-8">טוב מאוד! נסו לתרגל עוד קצת</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-xl text-yellow-600 mb-8">טוב! אתם בדרך הנכונה</p>
            )}
            {percentage < 60 && <p className="text-xl text-orange-600 mb-8">נסו שוב! תוכלו לשפר את הציון</p>}
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">סקירת התשובות</h3>
            <div className="space-y-6">
              {quiz.questions.map((q, index) => {
                const correct = answers[index] === q.correctAnswer
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-r-4 ${
                      correct ? 'bg-green-50 border-green-600' : 'bg-red-50 border-red-600'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{correct ? '✅' : '❌'}</span>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">שאלה {index + 1}: {q.question}</p>
                        {q.code && (
                          <div className="bg-gray-900 text-green-400 p-3 rounded mt-2 font-code text-sm overflow-x-auto">
                            <pre>{q.code}</pre>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ml-8 space-y-1 text-sm">
                      <p className="text-gray-700">
                        <span className="font-semibold">התשובה שלך:</span> {q.options[answers[index]]}
                      </p>
                      {!correct && (
                        <p className="text-gray-700">
                          <span className="font-semibold">התשובה הנכונה:</span> {q.options[q.correctAnswer]}
                        </p>
                      )}
                      <p className="text-gray-700 mt-2">
                        <span className="font-semibold">הסבר:</span> {q.explanation}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswers(new Array(quiz.questions.length).fill(-1))
                setShowResults(false)
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              נסו שוב
            </button>
            <button
              onClick={() => navigate('/quizzes')}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700"
            >
              חזור לחידונים
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
            <span className="text-gray-600">שאלה {currentQuestion + 1} מתוך {quiz.questions.length}</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Question Text */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">שאלה {currentQuestion + 1}</h3>
          <p className="text-lg text-gray-700 mb-6">{question.question}</p>

          {/* Code Display */}
          {question.code && (
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-8 font-code text-sm overflow-x-auto">
              <pre>{question.code}</pre>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-lg text-right transition ${
                  selectedAnswer === index
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            <ChevronLeft size={20} />
            הקודמת
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === -1}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {currentQuestion === quiz.questions.length - 1 ? 'סיים' : 'הבאה'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
