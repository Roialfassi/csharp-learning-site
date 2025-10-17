import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'
import TopicSidebar from '../components/TopicSidebar'

export default function Quizzes() {
  const quizProgress = storage.getQuizProgress()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div>
          <TopicSidebar activeContentType="quiz" />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🧠 חידונים</h1>
          <p className="text-gray-600">
            בדוק את הידע שלך עם חידונים מרובי ברירה על מושגי C# שונים
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">סך הכל חידונים</p>
            <p className="text-3xl font-bold text-blue-600">{quizzes.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">חידונים שנעשו</p>
            <p className="text-3xl font-bold text-green-600">{Object.keys(quizProgress).length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">ממוצע ציונים</p>
            <p className="text-3xl font-bold text-purple-600">
              {Object.keys(quizProgress).length > 0
                ? Math.round(
                    Object.values(quizProgress).reduce((acc: any, q: any) => acc + q.score, 0) /
                      Object.keys(quizProgress).length
                  )
                : 0}
            </p>
          </div>
        </div>

        {/* Quizzes List */}
        <div className="grid md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => {
            const progress = quizProgress[quiz.id]
            const hasAttempted = !!progress
            return (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 hover:scale-105 transform transition-all duration-200"
              >
                <div className="mb-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{quiz.questions.length} שאלות</p>
                  </div>
                  {hasAttempted && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{progress.score}</div>
                      <div className="text-xs text-gray-600">/ {quiz.questions.length}</div>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{quiz.description}</p>

                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>{hasAttempted ? 'נסו שוב' : 'התחילו'}</span>
                  <ChevronRight size={18} />
                </div>
              </Link>
            )
          })}
        </div>

        {quizzes.length === 0 && (
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded text-center">
            <p className="text-gray-700">אין חידונים זמינים כרגע</p>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
