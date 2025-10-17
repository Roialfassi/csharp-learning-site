export default function ConsolePlayground() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          💻 תרגול חופשי בקונסול
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">כתוב קוד</h2>
            <div className="bg-gray-900 text-white p-4 rounded font-code text-sm h-96 overflow-auto">
              <p>// קוד יופיע כאן</p>
              <p>Console.WriteLine("Hello World");</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
                הרץ
              </button>
              <button className="bg-gray-400 text-white px-6 py-2 rounded font-bold hover:bg-gray-500">
                נקה
              </button>
            </div>
          </div>

          {/* Output Console */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">פלט</h2>
            <div className="bg-black text-green-400 p-4 rounded font-code text-sm h-96 overflow-auto">
              <p>Hello World</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 border-r-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-bold mb-2 text-gray-800">ממתיני פתיחה...</h3>
          <p className="text-gray-700">
            תכונה זו תהיה זמינה בשלב הבא. כאן תוכלו להשתמש בעורך קוד מלא עם תוכנת תרגום C# אמיתית
          </p>
        </div>
      </div>
    </div>
  )
}
