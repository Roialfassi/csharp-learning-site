import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle, Dumbbell, HelpCircle, Rocket } from 'lucide-react'
import { getLessonByTopicId } from '../data/lessons'
import { getProjectByTopicId } from '../data/projects'
import { getTopicById } from '../data/topics'
import { exercises } from '../data/exercises'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'
import { LessonBlockView } from '../components/content/blocks'

export default function LessonPage() {
  const { topicId } = useParams()
  const topic = getTopicById(topicId || '')
  const lesson = getLessonByTopicId(topicId || '')
  const project = getProjectByTopicId(topicId || '')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setCompleted(storage.getCompletedLessons().includes(topicId || ''))
  }, [topicId])

  if (!topic || !lesson) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-700 mb-4">השיעור הזה עדיין לא זמין</p>
          <Link to="/path" className="text-blue-600 font-semibold hover:underline">
            חזרה למסלול הלמידה
          </Link>
        </div>
      </div>
    )
  }

  const topicExercises = exercises.filter((e) => e.topic === topic.hebrewName)
  const topicQuizzes = quizzes.filter((q) => q.topic === topic.hebrewName)

  const handleComplete = () => {
    storage.markLessonComplete(topic.id)
    setCompleted(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
        {/* Section nav */}
        <aside className="hidden lg:block">
          <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen size={18} />
              בשיעור הזה
            </h2>
            <nav className="space-y-1">
              {lesson.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded px-2 py-1.5 transition"
                >
                  <span className="ml-1">{s.icon}</span> {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-3">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">
              <Link to="/path" className="hover:underline">מסלול הלמידה</Link>
              {' / '}
              נושא {topic.order}: {topic.hebrewName}
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
              <span>{topic.icon}</span>
              {lesson.title}
            </h1>
            <p className="text-gray-600 text-lg">{lesson.subtitle}</p>
          </div>

          <div className="space-y-6">
            {lesson.sections.map((section) => (
              <section key={section.id} id={section.id} className="bg-white rounded-lg shadow-lg p-6 scroll-mt-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  <span className="ml-2">{section.icon}</span>
                  {section.title}
                </h2>
                {section.blocks.map((block, i) => (
                  <LessonBlockView key={i} block={block} />
                ))}
              </section>
            ))}
          </div>

          {/* Completion + next steps */}
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            {completed ? (
              <div className="bg-green-50 border-r-4 border-green-600 p-4 rounded flex items-center gap-3 mb-6">
                <CheckCircle size={28} className="text-green-600" />
                <p className="font-bold text-green-800">סיימתם את השיעור! עכשיו תורגלו את מה שלמדתם 👇</p>
              </div>
            ) : (
              <button
                onClick={handleComplete}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition mb-6"
              >
                <CheckCircle size={20} />
                סיימתי לקרוא את השיעור
              </button>
            )}

            <h3 className="text-xl font-bold text-gray-800 mb-4">ההמשך של המודול הזה</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/exercises"
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-400 transition"
              >
                <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                  <Dumbbell size={18} className="text-blue-600" />
                  תרגילים
                </div>
                <p className="text-sm text-gray-600">{topicExercises.length} תרגילים בנושא {topic.hebrewName}</p>
              </Link>
              {topicQuizzes.length > 0 && (
                <Link
                  to={`/quiz/${topicQuizzes[0].id}`}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-purple-400 transition"
                >
                  <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                    <HelpCircle size={18} className="text-purple-600" />
                    חידון
                  </div>
                  <p className="text-sm text-gray-600">בדקו את עצמכם בחידון על {topic.hebrewName}</p>
                </Link>
              )}
              {project && (
                <Link
                  to={`/project/${topic.id}`}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-orange-400 transition"
                >
                  <div className="flex items-center gap-2 font-bold text-gray-800 mb-1">
                    <Rocket size={18} className="text-orange-600" />
                    פרויקט
                  </div>
                  <p className="text-sm text-gray-600">{project.title}</p>
                </Link>
              )}
            </div>

            <div className="mt-6 pt-4 border-t">
              <Link to="/path" className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:underline">
                <ArrowRight size={18} />
                חזרה למסלול הלמידה
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
