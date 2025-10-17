export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          🧠 חידונים
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  חידון {i}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                חידון #{i}
              </h3>
              <p className="text-gray-600 mb-4">
                נושא החידון יופיע כאן
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">10 שאלות</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  התחל
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 border-r-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold mb-2 text-gray-800">ממתיני פתיחה...</h3>
          <p className="text-gray-700">
            תכונה זו תהיה זמינה בשלב הבא. כאן יופיעו חידונים מרובי ברירה עם ניתוח מפורט של התשובות
          </p>
        </div>
      </div>
    </div>
  )
}
