export default function Exercises() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          📝 תרגילים
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  תרגיל {i}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                תרגיל #{i}
              </h3>
              <p className="text-gray-600 mb-4">
                תיאור התרגיל יופיע כאן
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">קל</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  פתור
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 border-r-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold mb-2 text-gray-800">ממתיני פתיחה...</h3>
          <p className="text-gray-700">
            תכונה זו תהיה זמינה בשלב הבא. כאן יופיעו תרגילים מובנים עם בדיקות אוטומטיות
          </p>
        </div>
      </div>
    </div>
  )
}
