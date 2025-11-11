import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Award } from 'lucide-react'
import { topics } from '../data/topics'
import { exercises } from '../data/exercises'
import { quizzes } from '../data/quizzes'
import { storage } from '../utils/storage'

// Detailed explanations for each topic
const topicExplanations: Record<string, { overview: string; whatYouWillLearn: string[]; tips: string }> = {
  basics: {
    overview: 'תכנות ב-C# מתחיל עם הבנת היסודות: איך הקוד שלנו עובד, איך מדפיסים טקסט למסך, ואיך שומרים מידע במשתנים. זהו הבסיס החיוני לכל מה שיבוא אחר כך.',
    whatYouWillLearn: [
      'הדפסת טקסט למסך באמצעות Console.WriteLine',
      'יצירת משתנים וטיפוסי נתונים (int, string, double, bool)',
      'קריאת קלט מהמשתמש',
      'ביצוע פעולות חשבוניות בסיסיות',
    ],
    tips: 'התחילו עם תרגילים פשוטים ועברו הלאה רק כשאתם מרגישים בטוחים. זה התשתית לכל מה שיבוא!'
  },
  conditions: {
    overview: 'תנאים הם הדרך שבה התוכנית שלנו מקבלת החלטות. נלמד להשתמש ב-if, else ו-switch כדי לגרום לקוד להתנהג אחרת בהתאם למצבים שונים.',
    whatYouWillLearn: [
      'שימוש ב-if, else if, ו-else',
      'תנאים מורכבים עם &&, || ו-!',
      'משפט switch-case',
      'אופרטורים להשוואה (==, !=, <, >, <=, >=)',
    ],
    tips: 'חשבו על תנאים כמו שאלות שהתוכנית שואלת את עצמה: "האם המשתמש הזין מספר חיובי?" ועל בסיס התשובה, היא מחליטה מה לעשות.'
  },
  loops: {
    overview: 'לולאות מאפשרות לנו לבצע פעולות חוזרות בקלות. במקום לכתוב את אותו הקוד 100 פעמים, אפשר לבקש מהמחשב לחזור על זה בשבילנו!',
    whatYouWillLearn: [
      'לולאת for - כשיודעים כמה פעמים לחזור',
      'לולאת while - כשממשיכים עד שתנאי מתקיים',
      'לולאת do-while - מבצעים לפחות פעם אחת',
      'לולאת foreach - מעבר על אוספים',
    ],
    tips: 'לולאות הן כלי עוצמתי! שימו לב למנוע לולאות אינסופיות - תמיד וודאו שיש דרך לצאת מהלולאה.'
  },
  strings: {
    overview: 'מחרוזות (Strings) הן הדרך שבה אנחנו עובדים עם טקסט בתכנות. נלמד כיצד לבצע פעולות שונות על טקסט - לחתוך, לחבר, לחפש ולעצב.',
    whatYouWillLearn: [
      'שיטות בסיסיות: Length, Substring, IndexOf',
      'עיצוב מחרוזות עם string interpolation',
      'המרת אותיות גדולות/קטנות',
      'חיפוש והחלפת טקסט',
    ],
    tips: 'זכרו: מחרוזות ב-C# הן immutable - כל שינוי יוצר מחרוזת חדשה!'
  },
  arrays: {
    overview: 'מערכים מאפשרים לנו לשמור הרבה ערכים מאותו סוג במקום אחד. במקום ליצור 100 משתנים, אפשר ליצור מערך אחד!',
    whatYouWillLearn: [
      'הגדרת מערכים והשמת ערכים',
      'גישה לאיברים במערך',
      'מעבר על מערכים עם לולאות',
      'מערכים דו-מימדיים',
    ],
    tips: 'האינדקס הראשון במערך הוא תמיד 0, לא 1! זה אחד הטעויות השכיחות ביותר.'
  },
  methods: {
    overview: 'מתודות (פונקציות) מאפשרות לנו לארגן את הקוד שלנו בצורה מסודרת. במקום להעתיק קוד, כותבים אותו פעם אחת ומשתמשים בו מספר פעמים.',
    whatYouWillLearn: [
      'הגדרת מתודות עם ובלי פרמטרים',
      'החזרת ערכים עם return',
      'העברת פרמטרים by value ו-by reference',
      'Method overloading',
    ],
    tips: 'מתודה טובה עושה דבר אחד היטב. אם מתודה עושה יותר מדי דברים, כדאי לפצל אותה.'
  },
  collections: {
    overview: 'אוספים הם מבני נתונים מתקדמים יותר ממערכים. הם גמישים יותר ומאפשרים להוסיף ולהסיר פריטים בקלות.',
    whatYouWillLearn: [
      'List<T> - רשימה דינמית',
      'Dictionary<TKey, TValue> - מיפוי מפתח-ערך',
      'HashSet<T> - אוסף ללא כפילויות',
      'שימוש ב-LINQ בסיסי',
    ],
    tips: 'List היא כמו מערך, רק שאפשר להוסיף ולהסיר ממנה ברגע נתון - הרבה יותר גמיש!'
  },
  classes: {
    overview: 'מחלקות הן האבני היסוד של תכנות מונחה עצמים (OOP). נלמד ליצור טיפוסי נתונים משלנו עם תכונות והתנהגות.',
    whatYouWillLearn: [
      'הגדרת מחלקה עם fields ו-properties',
      'Constructors - יצירת אובייקטים',
      'Methods במחלקה',
      'Access modifiers: public, private, protected',
    ],
    tips: 'חשבו על מחלקה כ"תבנית" ליצירת אובייקטים. כמו תבנית עוגיות - המחלקה היא התבנית, והאובייקטים הם העוגיות.'
  },
  inheritance: {
    overview: 'ירושה מאפשרת למחלקה "לרשת" תכונות ומתודות ממחלקה אחרת. זה מאפשר לנו לכתוב קוד פחות חוזר ולארגן אותו בצורה הגיונית.',
    whatYouWillLearn: [
      'יצירת מחלקת בסיס (base class) ומחלקה יורשת (derived class)',
      'שימוש במילה השמורה base',
      'Override של מתודות',
      'Abstract classes',
    ],
    tips: 'ירושה מתאימה כשיש קשר "הוא סוג של" - כלב הוא סוג של חיה, אז Dog יכול לרשת מ-Animal.'
  },
  polymorphism: {
    overview: 'פולימורפיזם מאפשר לאובייקטים שונים להגיב אחרת לאותה קריאה. זה אחד העקרונות החזקים ביותר ב-OOP.',
    whatYouWillLearn: [
      'Virtual methods ו-Override',
      'Interfaces וכיצד להשתמש בהם',
      'Polymorphism בפעולה',
      'Abstract methods',
    ],
    tips: 'פולימורפיזם מאפשר לכתוב קוד גנרי שיכול לעבוד עם סוגים שונים של אובייקטים!'
  },
  exceptions: {
    overview: 'שגיאות קורות תמיד! הדרך הנכונה להתמודד עם שגיאות היא באמצעות exceptions - זה מאפשר לנו לטפל בבעיות בצורה מסודרת.',
    whatYouWillLearn: [
      'שימוש ב-try, catch, finally',
      'זריקת exceptions עם throw',
      'יצירת exceptions מותאמים אישית',
      'Best practices לטיפול בשגיאות',
    ],
    tips: 'אל תשתמשו ב-exceptions לשליטה בזרימת התוכנית - השתמשו בהם רק לטיפול במצבים חריגים!'
  },
  linq: {
    overview: 'LINQ (Language Integrated Query) הוא כלי עוצמתי לביצוע שאילתות על נתונים. במקום לולאות מסובכות, אפשר לבצע פעולות על אוספים בצורה פשוטה וברורה.',
    whatYouWillLearn: [
      'Where - סינון נתונים',
      'Select - המרת נתונים',
      'OrderBy - מיון',
      'GroupBy, Join, ופעולות מתקדמות',
    ],
    tips: 'LINQ הופך קוד מורכב לקריא וברור. זה חוסך המון זמן כתיבה!'
  },
}

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
      topicExercises,
      topicQuizzes,
      exercisesCompleted,
      exercisesTotal: topicExercises.length,
      quizzesCompleted,
      quizzesTotal: topicQuizzes.length,
      completedTasks,
      totalTasks,
    }
  }

  // Calculate overall progress
  const totalExercises = exercises.length
  const totalQuizzes = quizzes.length
  const totalTasks = totalExercises + totalQuizzes
  const completedTasks = completedExercises.length + Object.keys(quizProgress).length
  const overallProgress = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🎓 מסלול הלמידה המלא</h1>
          <p className="text-xl text-gray-600 mb-6">
            מיסודות C# ועד תכנות מונחה עצמים - מסלול מובנה צעד אחר צעד
          </p>

          {/* Overall Progress Bar */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-bold text-gray-800">ההתקדמות הכוללת שלך</span>
              <span className="text-3xl font-bold text-blue-600">{overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{completedTasks} מתוך {totalTasks} משימות הושלמו</span>
              <span>{topics.filter((_, idx) => {
                const stats = getTopicStats(topics[idx])
                return stats.completedTasks === stats.totalTasks && stats.totalTasks > 0
              }).length} מתוך {topics.length} נושאים הושלמו</span>
            </div>
          </div>
        </div>

        {/* Course Steps Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">📚 שלבי הקורס</h2>
          <p className="text-center text-gray-600">עברו דרך כל שלב לפי הסדר - כל שלב בונה על הקודם</p>
        </div>

        {/* Learning Path */}
        <div className="space-y-6">
          {topics.map((topic, index) => {
            const stats = getTopicStats(topic)
            const isCompleted = stats.completedTasks === stats.totalTasks && stats.totalTasks > 0
            const isInProgress = stats.completedTasks > 0 && !isCompleted

            return (
              <div key={topic.id} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -right-4 top-8 z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isInProgress
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                  }`}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                </div>

                {/* Topic Card */}
                <div
                  className={`rounded-lg shadow-xl p-8 transition mr-8 ${
                    isCompleted
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border-r-4 border-green-600'
                      : isInProgress
                        ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-r-4 border-blue-600'
                        : 'bg-white border-r-4 border-gray-300 hover:shadow-2xl hover:border-blue-400'
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

                      {/* Detailed Explanation */}
                      {topicExplanations[topic.id] && (
                        <div className="mb-4">
                          <p className="text-gray-700 mb-3 leading-relaxed">
                            {topicExplanations[topic.id].overview}
                          </p>
                          <div className="bg-blue-50 rounded p-4 mb-3">
                            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                              <BookOpen size={18} />
                              מה תלמדו בנושא הזה:
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1 mr-4">
                              {topicExplanations[topic.id].whatYouWillLearn.map((item, idx) => (
                                <li key={idx} className="list-disc">{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-yellow-50 border-r-2 border-yellow-500 p-3 text-sm text-gray-700">
                            <span className="font-bold">💡 טיפ: </span>
                            {topicExplanations[topic.id].tips}
                          </div>
                        </div>
                      )}

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">תרגילים</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.exercisesCompleted}/{stats.exercisesTotal}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">חידונים</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.quizzesCompleted}/{stats.quizzesTotal}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">סה"כ משימות</p>
                          <p className="text-lg font-bold text-gray-800">
                            {stats.completedTasks}/{stats.totalTasks}
                          </p>
                        </div>
                        <div className="bg-white rounded p-3 border border-gray-200">
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

                      {/* Links to Exercises and Quizzes */}
                      <div className="flex flex-wrap gap-3">
                        {stats.topicExercises.length > 0 && (
                          <Link
                            to={`/exercise/${stats.topicExercises[0].id}`}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                          >
                            <BookOpen size={18} />
                            <span>תרגילים ({stats.topicExercises.length})</span>
                            <ArrowRight size={16} />
                          </Link>
                        )}
                        {stats.topicQuizzes.length > 0 && (
                          <Link
                            to={`/quiz/${stats.topicQuizzes[0].id}`}
                            className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                          >
                            <Award size={18} />
                            <span>חידונים ({stats.topicQuizzes.length})</span>
                            <ArrowRight size={16} />
                          </Link>
                        )}
                        {stats.totalTasks === 0 && (
                          <div className="text-gray-500 text-sm italic">
                            תוכן יתווסף בקרוב...
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Between Steps */}
                {index < topics.length - 1 && (
                  <div className="flex justify-center py-6 relative">
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow">
                        ↓
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">🏆 ההישגים שלך</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Exercises Completed */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition border-t-4 border-green-500">
              <div className="text-6xl mb-4">📝</div>
              <div className="text-5xl font-bold text-green-600 mb-2">
                {completedExercises.length}
              </div>
              <p className="text-gray-600 text-lg mb-2">תרגילים הושלמו</p>
              <div className="text-sm text-gray-500">מתוך {exercises.length} תרגילים</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${(completedExercises.length / exercises.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Quizzes Completed */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition border-t-4 border-purple-500">
              <div className="text-6xl mb-4">🎯</div>
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {Object.keys(quizProgress).length}
              </div>
              <p className="text-gray-600 text-lg mb-2">חידונים בוצעו</p>
              <div className="text-sm text-gray-500">מתוך {quizzes.length} חידונים</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${(Object.keys(quizProgress).length / quizzes.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition border-t-4 border-blue-500">
              <div className="text-6xl mb-4">🎓</div>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {overallProgress}%
              </div>
              <p className="text-gray-600 text-lg mb-2">התקדמות כוללת</p>
              <div className="text-sm text-gray-500">{completedTasks} מתוך {totalTasks} משימות</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          {overallProgress === 100 ? (
            <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h4 className="text-3xl font-bold mb-2">מזל טוב! סיימת את כל הקורס!</h4>
              <p className="text-xl">עכשיו אתם מומחים ב-C#! 🚀</p>
            </div>
          ) : overallProgress >= 75 ? (
            <div className="mt-8 bg-blue-50 border-r-4 border-blue-500 rounded-lg p-6 text-center">
              <p className="text-xl text-gray-700">
                <span className="font-bold">כמעט שם!</span> רק עוד {100 - overallProgress}% וסיימתם את הקורס המלא! 💪
              </p>
            </div>
          ) : overallProgress >= 50 ? (
            <div className="mt-8 bg-purple-50 border-r-4 border-purple-500 rounded-lg p-6 text-center">
              <p className="text-xl text-gray-700">
                <span className="font-bold">חצי דרך!</span> אתם עושים עבודה מצוינת! המשיכו כך! 🌟
              </p>
            </div>
          ) : overallProgress > 0 ? (
            <div className="mt-8 bg-green-50 border-r-4 border-green-500 rounded-lg p-6 text-center">
              <p className="text-xl text-gray-700">
                <span className="font-bold">התחלה מצוינת!</span> המשיכו ללמוד ותתקדמו במהירות! 🚀
              </p>
            </div>
          ) : (
            <div className="mt-8 bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6 text-center">
              <p className="text-xl text-gray-700">
                <span className="font-bold">מוכנים להתחיל?</span> התחילו מהשלב הראשון ובנו את היסודות שלכם! 📚
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
