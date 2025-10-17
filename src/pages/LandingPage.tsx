import { Link } from 'react-router-dom'
import { Code2, BookOpen, Brain } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🎓 פלטפורמת לימוד C#
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            למדו C# מיסודות וכל עד ל-OOP
          </p>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            פלטפורמה אינטראקטיבית להוראת תכנות C# לסטודנטים. תרגלו קוד, פתרו תרגילים, וקחו חידונים
          </p>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            בחרו איך להתחיל
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Console Playground Card */}
            <Link to="/playground">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 h-full cursor-pointer hover:scale-105 transform transition">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  תרגול חופשי בקונסול
                </h3>
                <p className="text-gray-600 mb-6">
                  כתבו וריצו קוד C# בחופשיות. אין תרגילים, רק קוד וריצה
                </p>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg inline-block">
                  התחילו עכשיו →
                </div>
              </div>
            </Link>

            {/* Exercises Card */}
            <Link to="/exercises">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 h-full cursor-pointer hover:scale-105 transform transition">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  תרגילים מובנים
                </h3>
                <p className="text-gray-600 mb-6">
                  פתרו תרגילים בדרגות קושי שונות עם בדיקות אוטומטיות
                </p>
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg inline-block">
                  התחילו עכשיו →
                </div>
              </div>
            </Link>

            {/* Quizzes Card */}
            <Link to="/quizzes">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 h-full cursor-pointer hover:scale-105 transform transition">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  חידונים
                </h3>
                <p className="text-gray-600 mb-6">
                  בחנו את ידיעותיכם עם חידונים מרובי ברירה על מושגי C#
                </p>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg inline-block">
                  התחילו עכשיו →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            מאפיינים
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Code2 className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">קוד בזמן אמת</h3>
                <p className="text-gray-600">
                  ריצו קוד C# מיד וראו את התוצאות בזמן אמת
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BookOpen className="text-green-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">ספרייה עשירה</h3>
                <p className="text-gray-600">
                  עשרות תרגילים וחידונים מעבר לכל הנושאים
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Brain className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">למידה מובנית</h3>
                <p className="text-gray-600">
                  סדרה לוגית של נושאים מיסודות לOOP מתקדמות
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">✅</span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">בדיקות אוטומטיות</h3>
                <p className="text-gray-600">
                  קבלו משוב מיידי על הפתרונות שלכם
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8">
            בחרו באחד המסלולים בעל יד להתחיל ללמוד C# היום
          </p>
          <Link to="/playground" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            התחילו בתרגול חופשי
          </Link>
        </div>
      </section>
    </div>
  )
}
