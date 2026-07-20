import { Link } from 'react-router-dom'
import { CheckCircle, ChevronLeft } from 'lucide-react'
import { topics } from '../data/topics'
import { projects } from '../data/projects'
import { storage } from '../utils/storage'

export default function Projects() {
  const progress = storage.getProjectProgress()
  const available = topics
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((topic) => ({ topic, project: projects[topic.id] }))
    .filter((x) => x.project)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🚀 פרויקטים</h1>
          <p className="text-gray-600">
            כל מודול נגמר בפרויקט קטן: תוכנית אמיתית שאתם בונים שלב אחרי שלב עם כל מה שלמדתם
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {available.map(({ topic, project }) => {
            const done = (progress[topic.id] || []).length
            const total = project!.steps.length
            const complete = done === total
            return (
              <Link
                key={topic.id}
                to={`/project/${topic.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-4xl">{project!.icon}</span>
                  {complete && <CheckCircle size={24} className="text-green-600" />}
                </div>
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  מודול {topic.order}: {topic.hebrewName}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project!.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project!.subtitle}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full transition-all ${complete ? 'bg-green-500' : 'bg-orange-500'}`}
                    style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">{done}/{total} שלבים</p>
                  <span className="flex items-center gap-1 text-orange-600 font-semibold text-sm">
                    לפרויקט
                    <ChevronLeft size={16} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {available.length === 0 && (
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded text-center">
            <p className="text-gray-700">הפרויקטים בדרך — בקרוב!</p>
          </div>
        )}
      </div>
    </div>
  )
}
