import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { exercises } from '../data/exercises'
import { storage } from '../utils/storage'

export default function Exercises() {
  const completed = storage.getCompletedExercises()

  const exercisesByTopic = exercises.reduce(
    (acc, exercise) => {
      if (!acc[exercise.topic]) {
        acc[exercise.topic] = []
      }
      acc[exercise.topic].push(exercise)
      return acc
    },
    {} as Record<string, typeof exercises>
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'קל':
        return 'bg-green-100 text-green-800'
      case 'בינוני':
        return 'bg-yellow-100 text-yellow-800'
      case 'קשה':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 תרגילים</h1>
          <p className="text-gray-600">
            בחרו תרגיל וריצו אותו. כל תרגיל כולל בדיקות אוטומטיות להערכת הפתרון שלכם
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">סך הכל תרגילים</p>
            <p className="text-3xl font-bold text-blue-600">{exercises.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">תרגילים שהושלמו</p>
            <p className="text-3xl font-bold text-green-600">{completed.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">אחוז התקדמות</p>
            <p className="text-3xl font-bold text-purple-600">
              {exercises.length > 0 ? Math.round((completed.length / exercises.length) * 100) : 0}%
            </p>
          </div>
        </div>

        {/* Exercises by Topic */}
        <div className="space-y-8">
          {Object.entries(exercisesByTopic).map(([topic, topicExercises]) => (
            <div key={topic}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                {topic}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topicExercises.map((exercise) => {
                  const isCompleted = completed.includes(exercise.id)
                  return (
                    <Link
                      key={exercise.id}
                      to={`/exercise/${exercise.id}`}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 hover:scale-105 transform transition-all duration-200"
                    >
                      <div className="mb-4">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(exercise.difficulty)}`}>
                            {exercise.difficulty}
                          </span>
                          {isCompleted && <span className="text-2xl">✅</span>}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        תרגיל {exercise.id}: {exercise.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {exercise.description}
                      </p>

                      <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        <span>פתור</span>
                        <ChevronRight size={18} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {exercises.length === 0 && (
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded text-center">
            <p className="text-gray-700">אין תרגילים זמינים כרגע</p>
          </div>
        )}
      </div>
    </div>
  )
}
