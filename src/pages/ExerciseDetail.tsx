import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { Play, ChevronRight, ChevronLeft, Lightbulb } from 'lucide-react'
import { exercises } from '../data/exercises'
import { runExerciseTests, allTestsPassed, getPassedCount } from '../utils/exerciseValidator'
import { storage } from '../utils/storage'
import type { TestResult } from '../types/exercise'

export default function ExerciseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const exerciseId = parseInt(id || '1')
  const exercise = exercises.find((e) => e.id === exerciseId)

  const [code, setCode] = useState('')
  const [results, setResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [showHints, setShowHints] = useState<number[]>([])
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    if (exercise) {
      const savedCode = storage.getExerciseCode(exerciseId)
      setCode(savedCode || exercise.starterCode)
      setResults([])
      setShowHints([])
      setShowSolution(false)
    }
  }, [exerciseId, exercise])

  useEffect(() => {
    if (code && exercise) {
      const timer = setTimeout(() => {
        storage.saveExerciseCode(exerciseId, code)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [code, exerciseId, exercise])

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-800">לא מצאנו את התרגיל המבוקש</p>
        </div>
      </div>
    )
  }

  const handleRun = async () => {
    setIsRunning(true)
    try {
      const testResults = await runExerciseTests(code, exercise.testCases)
      setResults(testResults)

      if (allTestsPassed(testResults)) {
        storage.markExerciseComplete(exerciseId)
      }
    } finally {
      setIsRunning(false)
    }
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

  const allPassed = allTestsPassed(results)

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
          {allPassed && <div className="text-4xl">✅</div>}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel: Description & Instructions */}
          <div className="space-y-4">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">תיאור התרגיל</h2>
              <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
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
            {results.length > 0 && !allPassed && (
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="w-full bg-purple-600 text-white px-4 py-3 rounded font-bold hover:bg-purple-700 transition"
              >
                {showSolution ? 'הסתר פתרון' : 'הראה פתרון'}
              </button>
            )}

            {showSolution && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">פתרון רמוז</h2>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-code text-sm overflow-x-auto">
                  <pre>{exercise.solution}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Code Editor & Tests */}
          <div className="space-y-4">
            {/* Code Editor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: '500px' }}>
              <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                <h2 className="text-lg font-bold">עורך קוד</h2>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  language="csharp"
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: true, maxColumn: 120 },
                    fontSize: 14,
                    automaticLayout: true,
                    tabSize: 4,
                    insertSpaces: true,
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    glyphMargin: true,
                    quickSuggestions: {
                      other: true,
                      comments: false,
                      strings: false,
                    },
                    acceptSuggestionOnCommitCharacter: true,
                    formatOnPaste: true,
                    formatOnType: true,
                    autoClosingBrackets: 'always',
                    autoClosingQuotes: 'always',
                    autoIndent: 'full',
                    renderWhitespace: 'selection',
                    copyWithSyntaxHighlighting: true,
                    showUnused: true,
                    renderLineHighlight: 'line',
                    occurrencesHighlight: 'singleFile',
                    selectionHighlight: true,
                    codeLens: true,
                    folding: true,
                    foldingHighlight: true,
                  }}
                />
              </div>
              <div className="bg-gray-100 px-4 py-3 border-t flex gap-2">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
                >
                  <Play size={16} />
                  הרץ בדיקות
                </button>
              </div>
            </div>

            {/* Test Results */}
            {results.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  תוצאות: {getPassedCount(results)}/{results.length} עברו
                </h2>
                <div className="space-y-2">
                  {results.map((result) => (
                    <div
                      key={result.testNumber}
                      className={`p-3 rounded border-r-4 ${
                        result.passed
                          ? 'bg-green-50 border-green-600'
                          : 'bg-red-50 border-red-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold mb-1">
                        {result.passed ? '✅' : '❌'}
                        בדיקה {result.testNumber}
                        {result.passed ? ': עברה' : ': נכשלה'}
                      </div>
                      {!result.passed && (
                        <div className="text-sm text-gray-700 space-y-1">
                          <div>
                            <span className="font-semibold">צפוי:</span> {result.expected}
                          </div>
                          <div>
                            <span className="font-semibold">קיבלנו:</span> {result.actual}
                          </div>
                          {result.error && (
                            <div className="text-red-700 mt-2">
                              <span className="font-semibold">שגיאה:</span> {result.error}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Success Message */}
            {allPassed && results.length > 0 && (
              <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded">
                <h3 className="text-xl font-bold text-green-800 mb-2">כל הכבוד! 🎉</h3>
                <p className="text-green-700">פתרת את התרגיל בהצלחה!</p>
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
