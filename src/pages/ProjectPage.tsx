import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle, Circle, Code, Eye, EyeOff, Rocket, Target } from 'lucide-react'
import { getProjectByTopicId } from '../data/projects'
import { getTopicById } from '../data/topics'
import { storage } from '../utils/storage'
import { CodeBlock, rich } from '../components/content/blocks'

export default function ProjectPage() {
  const { topicId } = useParams()
  const topic = getTopicById(topicId || '')
  const project = getProjectByTopicId(topicId || '')

  const [doneSteps, setDoneSteps] = useState<number[]>([])
  const [openCode, setOpenCode] = useState<number[]>([])
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setDoneSteps(storage.getProjectProgress()[topicId || ''] || [])
    setOpenCode([])
    setShowSolution(false)
  }, [topicId])

  if (!topic || !project) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-700 mb-4">הפרויקט הזה עדיין לא זמין</p>
          <Link to="/path" className="text-blue-600 font-semibold hover:underline">
            חזרה למסלול הלמידה
          </Link>
        </div>
      </div>
    )
  }

  const toggleStep = (index: number) => {
    setDoneSteps(storage.toggleProjectStep(topic.id, index))
  }

  const toggleCode = (index: number) => {
    setOpenCode((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const allDone = doneSteps.length === project.steps.length
  const progressPct = Math.round((doneSteps.length / project.steps.length) * 100)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">
            <Link to="/path" className="hover:underline">מסלול הלמידה</Link>
            {' / '}
            {topic.hebrewName} / פרויקט
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <span>{project.icon}</span>
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg">{project.subtitle}</p>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-gray-800">
              התקדמות: {doneSteps.length}/{project.steps.length} שלבים
            </p>
            <p className="text-sm text-gray-600">{progressPct}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-orange-500 h-3 rounded-full transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          {allDone && (
            <div className="mt-4 bg-green-50 border-r-4 border-green-600 p-4 rounded flex items-center gap-3">
              <CheckCircle size={28} className="text-green-600" />
              <p className="font-bold text-green-800">
                🎉 כל הכבוד! סיימתם את הפרויקט — יש לכם עכשיו תוכנית שלמה שכתבתם בעצמכם!
              </p>
            </div>
          )}
        </div>

        {/* Intro */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Rocket size={20} className="text-orange-600" />
            מה בונים?
          </h2>
          {project.description.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed my-2">{rich(p)}</p>
          ))}
          {project.finalPreview && (
            <CodeBlock code={project.finalPreview} caption="ככה תיראה הרצה של התוכנית המוכנה:" />
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Steps */}
          <div className="space-y-4">
            {project.steps.map((step, index) => {
              const isDone = doneSteps.includes(index)
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden border-r-4 ${
                    isDone ? 'border-green-500' : 'border-orange-400'
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        שלב {index + 1}: {step.title}
                      </h3>
                      <button
                        onClick={() => toggleStep(index)}
                        className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full transition flex-shrink-0 ${
                          isDone
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {isDone ? <CheckCircle size={16} /> : <Circle size={16} />}
                        {isDone ? 'בוצע' : 'סמן כבוצע'}
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-orange-700 mb-3 flex items-center gap-1">
                      <Target size={14} />
                      {step.goal}
                    </p>
                    {step.instructions.map((inst, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed my-2 text-sm">{rich(inst)}</p>
                    ))}

                    {step.code && (
                      <div className="mt-3">
                        <button
                          onClick={() => toggleCode(index)}
                          className="flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900 transition"
                        >
                          {openCode.includes(index) ? <EyeOff size={16} /> : <Eye size={16} />}
                          {openCode.includes(index) ? 'הסתר את הקוד לשלב הזה' : 'נתקעתם? הציצו בקוד לשלב הזה'}
                        </button>
                        {openCode.includes(index) && <CodeBlock code={step.code} />}
                      </div>
                    )}

                    {/* Checkpoint */}
                    <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm font-bold text-blue-800 mb-1">🏁 נקודת ביקורת</p>
                      <p className="text-sm text-gray-700">{rich(step.checkpoint)}</p>
                      {step.checkpointOutput && (
                        <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto mt-2">
                          <pre>{step.checkpointOutput}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Full solution */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="w-full bg-purple-600 text-white px-4 py-3 rounded font-bold hover:bg-purple-700 transition"
              >
                {showSolution ? 'הסתר את הפתרון המלא' : 'הראה את הפתרון המלא'}
              </button>
              {showSolution && <CodeBlock code={project.fullSolution} caption="פתרון מלא — השוו אליו רק אחרי שניסיתם בעצמכם!" />}
            </div>
          </div>

          {/* Editor */}
          <div className="lg:sticky lg:top-4 h-fit">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center gap-2">
                <Code size={18} />
                <h2 className="text-lg font-bold">עורך קוד — בנו כאן את הפרויקט שלב אחרי שלב</h2>
              </div>
              <div style={{ height: '600px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://dotnetfiddle.net/Widget"
                  frameBorder="0"
                  title="C# Project Editor"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg shadow p-4">
              <Link to="/path" className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:underline">
                <ArrowRight size={18} />
                חזרה למסלול הלמידה
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
