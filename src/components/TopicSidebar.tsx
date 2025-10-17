import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { topics } from '../data/topics'
import { exercises } from '../data/exercises'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'

interface TopicSidebarProps {
  activeContentType?: 'exercise' | 'quiz'
}

export default function TopicSidebar(_props: TopicSidebarProps = {}) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const location = useLocation()
  const completedExercises = storage.getCompletedExercises()
  const quizProgress = storage.getQuizProgress()

  const getExercisesForTopic = (hebrewTopicName: string) => {
    return exercises.filter((e) => e.topic === hebrewTopicName)
  }

  const getQuizzesForTopic = (hebrewTopicName: string) => {
    return quizzes.filter((q) => q.topic === hebrewTopicName)
  }

  const getTopicProgressExercises = (hebrewTopicName: string) => {
    const topicExercises = getExercisesForTopic(hebrewTopicName)
    const completed = topicExercises.filter((e) => completedExercises.includes(e.id))
    return { completed: completed.length, total: topicExercises.length }
  }

  const getTopicProgressQuizzes = (hebrewTopicName: string) => {
    const topicQuizzes = getQuizzesForTopic(hebrewTopicName)
    const completed = topicQuizzes.filter((q) => !!(quizProgress as Record<number, any>)[q.id])
    return { completed: completed.length, total: topicQuizzes.length }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-fit sticky top-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">📚 נושאים</h2>

      <div className="space-y-2">
        {topics.map((topic) => {
          const isExpanded = expandedTopic === topic.id
          const topicExercises = getExercisesForTopic(topic.hebrewName)
          const topicQuizzes = getQuizzesForTopic(topic.hebrewName)
          const exerciseProgress = getTopicProgressExercises(topic.hebrewName)
          const topicQuizProgress = getTopicProgressQuizzes(topic.hebrewName)

          return (
            <div key={topic.id}>
              {/* Topic Header */}
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
                  isExpanded ? 'bg-blue-50 border-r-4 border-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2 flex-1 text-right">
                  <span className="text-xl">{topic.icon}</span>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{topic.hebrewName}</p>
                    <p className="text-xs text-gray-500">
                      {topicExercises.length} תרגילים, {topicQuizzes.length} חידונים
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="ml-4 mt-2 mb-2 space-y-1 border-r-2 border-gray-200 pr-3">
                  {/* Exercises */}
                  {topicExercises.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-gray-600 mb-1">
                        תרגילים ({exerciseProgress.completed}/{exerciseProgress.total})
                      </p>
                      {topicExercises.map((exercise) => {
                        const isCompleted = completedExercises.includes(exercise.id)
                        const isActive = location.pathname === `/exercise/${exercise.id}`
                        return (
                          <Link
                            key={exercise.id}
                            to={`/exercise/${exercise.id}`}
                            className={`block text-sm px-2 py-1 rounded transition ${
                              isActive
                                ? 'bg-blue-600 text-white font-semibold'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span>{exercise.id}. {exercise.title}</span>
                            {isCompleted && <span className="mr-1">✓</span>}
                          </Link>
                        )
                      })}
                    </div>
                  )}

                  {/* Quizzes */}
                  {topicQuizzes.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-gray-600 mb-1 mt-2">
                        חידונים ({topicQuizProgress.completed}/{topicQuizProgress.total})
                      </p>
                      {topicQuizzes.map((quiz) => {
                        const hasAttempted = !!(quizProgress as Record<number, any>)[quiz.id]
                        const isActive = location.pathname === `/quiz/${quiz.id}`
                        return (
                          <Link
                            key={quiz.id}
                            to={`/quiz/${quiz.id}`}
                            className={`block text-sm px-2 py-1 rounded transition ${
                              isActive
                                ? 'bg-purple-600 text-white font-semibold'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <span>{quiz.title}</span>
                            {hasAttempted && <span className="mr-1">✓</span>}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Stats Summary */}
      <div className="mt-6 pt-4 border-t">
        <p className="text-xs font-bold text-gray-600 mb-2">התקדמות כללית</p>
        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-600">תרגילים: {completedExercises.length}/{exercises.length}</p>
            <div className="w-full bg-gray-300 rounded-full h-1.5 mt-1">
              <div
                className="bg-green-600 h-1.5 rounded-full transition-all"
                style={{ width: `${(completedExercises.length / exercises.length) * 100}%` }}
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-600">חידונים: {Object.keys(quizProgress).length}/{quizzes.length}</p>
            <div className="w-full bg-gray-300 rounded-full h-1.5 mt-1">
              <div
                className="bg-purple-600 h-1.5 rounded-full transition-all"
                style={{ width: `${(Object.keys(quizProgress).length / quizzes.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
