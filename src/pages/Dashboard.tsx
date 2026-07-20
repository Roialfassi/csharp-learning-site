import { Link } from 'react-router-dom'
import { TrendingUp, Target, Zap, Award, Rocket } from 'lucide-react'
import { exercises } from '../data/exercises'
import { quizzes } from '../data/quizzes'
import { topics } from '../data/topics'
import { lessons } from '../data/lessons'
import { projects } from '../data/projects'
import { storage } from '../utils/storage'

export default function Dashboard() {
  const completedExercises = storage.getCompletedExercises()
  const quizProgress = storage.getQuizProgress()
  const completedLessons = storage.getCompletedLessons()
  const projectProgress = storage.getProjectProgress()

  const projectList = Object.values(projects)
  const completedProjects = projectList.filter(
    (p) => (projectProgress[p.topicId] || []).length === p.steps.length
  ).length
  const lessonCount = Object.keys(lessons).length

  const totalTasks = exercises.length + quizzes.length + lessonCount + projectList.length
  const completedTasks =
    completedExercises.length +
    Object.keys(quizProgress).length +
    completedLessons.length +
    completedProjects
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  // Calculate average quiz score
  const avgQuizScore =
    Object.keys(quizProgress).length > 0
      ? Math.round(
          Object.values(quizProgress).reduce((acc: any, q: any) => acc + q.score, 0) /
            Object.keys(quizProgress).length
        )
      : 0

  // Get topic statistics
  const getTopicStats = (topicName: string) => {
    const topicEx = exercises.filter((e) => e.topic === topicName)
    const topicQuiz = quizzes.filter((q) => q.topic === topicName)
    const exComplete = topicEx.filter((e) => completedExercises.includes(e.id)).length
    const quizComplete = topicQuiz.filter((q) => !!quizProgress[q.id]).length
    return {
      total: topicEx.length + topicQuiz.length,
      completed: exComplete + quizComplete,
    }
  }

  // Recent activity
  interface Activity {
    type: 'exercise' | 'quiz'
    id: number
    title: string
    topic: string
  }

  const getRecentActivity = (): Activity[] => {
    const activities: Activity[] = []
    completedExercises.forEach((id) => {
      const ex = exercises.find((e) => e.id === id)
      if (ex) {
        activities.push({
          type: 'exercise',
          id,
          title: ex.title,
          topic: ex.topic,
        })
      }
    })
    Object.entries(quizProgress).forEach(([id, _progress]: [string, any]) => {
      const quiz = quizzes.find((q) => q.id === parseInt(id))
      if (quiz) {
        activities.push({
          type: 'quiz',
          id: quiz.id,
          title: quiz.title,
          topic: quiz.topic,
        })
      }
    })
    return activities.slice(0, 5)
  }

  const recentActivity = getRecentActivity()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">📊 לוח מחוונים</h1>
          <p className="text-xl text-gray-600">ניהול תقדמותך בתכנות C#</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {/* Overall Progress */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">התקדמות כללית</h3>
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">{progressPercentage}%</div>
            <p className="text-sm text-gray-600">
              {completedTasks} / {totalTasks} משימות
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Exercises */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">תרגילים</h3>
              <Target className="text-green-600" size={24} />
            </div>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {completedExercises.length}/{exercises.length}
            </div>
            <p className="text-sm text-gray-600">
              {Math.round((completedExercises.length / exercises.length) * 100)}% הושלמו
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedExercises.length / exercises.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Quizzes */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">חידונים</h3>
              <Zap className="text-purple-600" size={24} />
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {Object.keys(quizProgress).length}/{quizzes.length}
            </div>
            <p className="text-sm text-gray-600">ממוצע: {avgQuizScore}%</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${(Object.keys(quizProgress).length / quizzes.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">פרויקטים</h3>
              <Rocket className="text-orange-600" size={24} />
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {completedProjects}/{projectList.length}
            </div>
            <p className="text-sm text-gray-600">
              {completedLessons.length}/{lessonCount} שיעורים נלמדו
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
              <div
                className="bg-orange-600 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${projectList.length > 0 ? (completedProjects / projectList.length) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">הישגים</h3>
              <Award className="text-yellow-600" size={24} />
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {
                [
                  completedExercises.length >= 1,
                  completedExercises.length >= 10,
                  completedExercises.length >= 50,
                  completedProjects >= 1,
                  completedProjects >= 5,
                  completedLessons.length >= 5,
                ].filter(Boolean).length
              }
            </div>
            <p className="text-sm text-gray-600">תגים שהשגת</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {completedExercises.length >= 1 && <div className="text-2xl" title="תרגיל ראשון">🏅</div>}
              {completedExercises.length >= 10 && <div className="text-2xl" title="10 תרגילים">🌟</div>}
              {completedExercises.length >= 50 && <div className="text-2xl" title="50 תרגילים">🏆</div>}
              {completedProjects >= 1 && <div className="text-2xl" title="פרויקט ראשון">🚀</div>}
              {completedProjects >= 5 && <div className="text-2xl" title="5 פרויקטים">🎖️</div>}
              {completedLessons.length >= 5 && <div className="text-2xl" title="5 שיעורים">📚</div>}
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Topics Progress */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">התקדמות לפי נושא</h2>
            <div className="space-y-4">
              {topics.map((topic) => {
                const stats = getTopicStats(topic.hebrewName)
                const percentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

                return (
                  <div key={topic.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{topic.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-800">{topic.hebrewName}</h3>
                          <p className="text-xs text-gray-600">
                            {stats.completed}/{stats.total} משימות
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-800">{percentage}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">פעילות אחרונה</h2>
              {recentActivity.length > 0 ? (
                <div className="space-y-2">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                      <span className="text-xl">
                        {activity.type === 'exercise' ? '✅' : '🎯'}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{activity.title}</p>
                        <p className="text-xs text-gray-600">{activity.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">אין פעילות עדיין. התחלו עכשיו!</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">פעולות מהירות</h2>
              <div className="space-y-2">
                <Link
                  to="/exercises"
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 text-center transition"
                >
                  פתור תרגיל
                </Link>
                <Link
                  to="/quizzes"
                  className="block w-full bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 text-center transition"
                >
                  עשה חידון
                </Link>
                <Link
                  to="/playground"
                  className="block w-full bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 text-center transition"
                >
                  תרגול חופשי
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-blue-900 mb-2">💡 טיפ</h3>
          <p className="text-blue-800">
            שמרו על רצף קבוע! תרגלו כל יום כדי לשנן את המושגים. תוכלו לעשות זאת! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
