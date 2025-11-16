import { ExternalLink } from 'lucide-react'

export default function ConsolePlayground() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            💻 תרגול חופשי בקונסול
          </h1>
          <p className="text-gray-600">
            כתבו קוד C#, הריצו אותו בקלות וראו את התוצאות בזמן אמת
          </p>
        </div>

        {/* DotNetFiddle Iframe Embed */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: 'calc(100vh - 250px)', minHeight: '600px' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://dotnetfiddle.net/Widget"
            frameBorder="0"
            title="C# Console Playground"
            style={{ border: 'none' }}
          />
        </div>

        {/* Info Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* About DotNetFiddle */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">אודות העורך</h3>
            <p className="text-gray-700 mb-4">
              אנחנו משתמשים ב-DotNetFiddle - עורך C# מקוון מתקדם שמאפשר לכם לכתוב ולהריץ קוד ישירות בדפדפן.
            </p>
            <a
              href="https://dotnetfiddle.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              פתח ב-DotNetFiddle
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded">
            <h3 className="text-lg font-bold mb-2 text-blue-900">💡 טיפים</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>✨ לחצו על "Run" כדי להריץ את הקוד</li>
              <li>🎯 השתמשו ב-Console.WriteLine() להדפסת פלט</li>
              <li>⌨️ העורך תומך באוטומציה והשלמה אוטומטית</li>
              <li>📋 תוכלו לשמור את הקוד שלכם (דורש הרשמה)</li>
              <li>🎨 העורך תומך בכל פיצ'רים של C#</li>
            </ul>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">דוגמאות קוד מהירות</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">✏️ הדפסה פשוטה</h4>
              <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
{`using System;

namespace MyProgram
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("שלום עולם!");
        }
    }
}`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">📝 משתנים</h4>
              <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
{`using System;

class Program
{
    static void Main()
    {
        int x = 5;
        string name = "אני";
        Console.WriteLine($"x = {x}");
        Console.WriteLine($"name = {name}");
    }
}`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">🔁 לולאת For</h4>
              <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
{`using System;

class Program
{
    static void Main()
    {
        for(int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"מספר: {i}");
        }
    }
}`}
              </pre>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">✅ תנאים</h4>
              <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
{`using System;

class Program
{
    static void Main()
    {
        int x = 10;
        if(x > 5)
            Console.WriteLine("גדול מ-5");
        else
            Console.WriteLine("קטן או שווה ל-5");
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}