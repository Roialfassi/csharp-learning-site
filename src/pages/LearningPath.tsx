import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { topics } from '../data/topics'
import { exercises } from '../data/exercises'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'

export default function LearningPath() {
  const completedExercises = storage.getCompletedExercises()
  const quizProgress = storage.getQuizProgress()

  const getTopicStats = (topic: (typeof topics)[0]) => {
    const topicExercises = exercises.filter((e) => e.topic === topic.hebrewName)
    const topicQuizzes = quizzes.filter((q) => q.topic === topic.hebrewName)

    const exercisesCompleted = topicExercises.filter((e) => completedExercises.includes(e.id)).length
    const quizzesCompleted = topicQuizzes.filter((q) => !!quizProgress[q.id]).length

    const totalTasks = topicExercises.length + topicQuizzes.length
    const completedTasks = exercisesCompleted + quizzesCompleted

    return {
      exercisesCompleted,
      exercisesTotal: topicExercises.length,
      quizzesCompleted,
      quizzesTotal: topicQuizzes.length,
      completedTasks,
      totalTasks,
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🎯 המסלול המלא</h1>
          <p className="text-xl text-gray-600">
            מסלול למידה מובנה מיסודות וכל ל-OOP מתקדמות
          </p>
        </div>

        {/* Learning Path */}
        <div className="space-y-6">
          {topics.map((topic, index) => {
            const stats = getTopicStats(topic)
            const isCompleted = stats.completedTasks === stats.totalTasks && stats.totalTasks > 0
            const isInProgress = stats.completedTasks > 0 && !isCompleted

            return (
              <div key={topic.id}>
                {/* Topic Card */}
                <div
                  className={`rounded-lg shadow-lg p-6 transition ${
                    isCompleted
                      ? 'bg-green-50 border-r-4 border-green-600'
                      : isInProgress
                        ? 'bg-blue-50 border-r-4 border-blue-600'
                        : 'bg-white border-r-4 border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className="text-4xl flex-shrink-0">{topic.icon}</div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{topic.hebrewName}</h2>
                        {isCompleted && <span className="text-2xl">✅</span>}
                        {isInProgress && <span className="text-2xl">⏳</span>}
                      </div>
                      <p className="text-gray-700 mb-4">{topic.description}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white rounded p-3">
                          <p className="text-xs text-gray-600 mb-1">תרגילים</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.exercisesCompleted}/{stats.exercisesTotal}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs text-gray-600 mb-1">חידונים</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.quizzesCompleted}/{stats.quizzesTotal}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs text-gray-600 mb-1">סה"כ משימות</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.completedTasks}/{stats.totalTasks}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs text-gray-600 mb-1">התקדמות</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0}%
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${stats.totalTasks > 0 ? (stats.completedTasks / stats.totalTasks) * 100 : 0}%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      {stats.totalTasks > 0 && (
                        <Link
                          to={`/exercise/${exercises.find((e) => e.topic === topic.hebrewName)?.id || 1}`}
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                          <span>{isCompleted ? 'סקור שוב' : isInProgress ? 'המשך' : 'התחל'}</span>
                          <ArrowRight size={18} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Between Topics */}
                {index < topics.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-300" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">סטטיסטיקת כללית</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {completedExercises.length}/{exercises.length}
              </div>
              <p className="text-gray-600">תרגילים שהושלמו</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Object.keys(quizProgress).length}/{quizzes.length}
              </div>
              <p className="text-gray-600">חידונים שבוצעו</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {Math.round(
                  ((completedExercises.length + Object.keys(quizProgress).length) /
                    (exercises.length + quizzes.length)) *
                    100
                )}
                %
              </div>
              <p className="text-gray-600">התקדמות כוללת</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
