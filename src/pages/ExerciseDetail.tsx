import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft, Lightbulb, CheckCircle } from 'lucide-react'
import { exercises } from '../data/exercises'
import { storage } from '../utils/storage'

export default function ExerciseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exerciseId = parseInt(id || '1')
  const exercise = exercises.find((e) => e.id === exerciseId)

  const [showHints, setShowHints] = useState<number[]>([])
  const [showSolution, setShowSolution] = useState(false)
  const [markedComplete, setMarkedComplete] = useState(false)

  useEffect(() => {
    if (exercise) {
      setShowHints([])
      setShowSolution(false)
      const completed = storage.getCompletedExercises().includes(exerciseId)
      setMarkedComplete(completed)
    }
  }, [exerciseId, exercise])

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-800">לא מצאנו את התרגיל המבוקש</p>
        </div>
      </div>
    )
  }

  const handleMarkComplete = () => {
    storage.markExerciseComplete(exerciseId)
    setMarkedComplete(true)
  }

  const handleNextExercise = () => {
    const nextId = exerciseId + 1
    if (exercises.find((e) => e.id === nextId)) {
      navigate(`/exercise/${nextId}`)
    }
  }

  const handlePrevExercise = () => {
    const prevId = exerciseId - 1
    if (prevId >= 1) {
      navigate(`/exercise/${prevId}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              תרגיל {exerciseId}: {exercise.title}
            </h1>
            <div className="flex gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  exercise.difficulty === 'קל'
                    ? 'bg-green-100 text-green-800'
                    : exercise.difficulty === 'בינוני'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                }`}
              >
                {exercise.difficulty}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {exercise.topic}
              </span>
            </div>
          </div>
          {markedComplete && <div className="text-4xl">✅</div>}
        </div>

        {/* Exercise Content */}
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">תיאור התרגיל</h2>
            <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
          </div>

          {/* Starter Code Reference */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">קוד התחלתי</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>{exercise.starterCode}</pre>
            </div>
          </div>

          {/* DotNetFiddle Editor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-6 py-4">
              <h2 className="text-lg font-bold">עורך קוד - כתבו את הפתרון שלכם</h2>
            </div>
            <div style={{ height: '600px' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://dotnetfiddle.net/Widget"
                frameBorder="0"
                title="C# Exercise Editor"
                style={{ border: 'none' }}
              />
            </div>
          </div>

          {/* Expected Test Cases */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">מקרי בדיקה - בדקו את הקוד שלכם</h2>
            <p className="text-gray-600 mb-4">הריצו את הקוד שלכם בעורך למעלה ובדקו שהוא עובד נכון עבור המקרים הבאים:</p>
            <div className="space-y-3">
              {exercise.testCases.map((testCase, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="font-semibold text-gray-800 mb-2">בדיקה {index + 1}</div>
                  {testCase.input && (
                    <div className="text-sm text-gray-700 mb-1">
                      <span className="font-semibold">קלט:</span> {testCase.input}
                    </div>
                  )}
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">פלט צפוי:</span> {testCase.expectedOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mark Complete */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {markedComplete ? (
              <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded flex items-center gap-3">
                <CheckCircle size={32} className="text-green-600" />
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-1">כל הכבוד! 🎉</h3>
                  <p className="text-green-700">סימנת את התרגיל כהושלם!</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-4">כשפתרתם את התרגיל ובדקתם שהכל עובד נכון, סמנו אותו כהושלם:</p>
                <button
                  onClick={handleMarkComplete}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
                >
                  <CheckCircle size={20} />
                  סמן כהושלם
                </button>
              </div>
            )}
          </div>

          {/* Hints */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">רמזים</h2>
            <div className="space-y-2">
              {exercise.hints.map((hint, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setShowHints((prev) =>
                      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
                    )
                  }
                  className="w-full text-right bg-blue-50 hover:bg-blue-100 p-4 rounded border-r-4 border-blue-600 transition flex items-start gap-2"
                >
                  <Lightbulb size={18} className="flex-shrink-0 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">רמז {index + 1}</div>
                    {showHints.includes(index) && (
                      <p className="text-gray-700 mt-2 text-sm">{hint}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="w-full bg-purple-600 text-white px-4 py-3 rounded font-bold hover:bg-purple-700 transition mb-4"
            >
              {showSolution ? 'הסתר פתרון' : 'הראה פתרון'}
            </button>

            {showSolution && (
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">פתרון מוצע</h2>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                  <pre>{exercise.solution}</pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between gap-4">
          <button
            onClick={handlePrevExercise}
            disabled={exerciseId === 1}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            <ChevronLeft size={20} />
            תרגיל קודם
          </button>

          <div className="text-center flex-1">
            <p className="text-gray-600">תרגיל {exerciseId} מתוך {exercises.length}</p>
          </div>

          <button
            onClick={handleNextExercise}
            disabled={exerciseId === exercises.length}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            תרגיל הבא
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
