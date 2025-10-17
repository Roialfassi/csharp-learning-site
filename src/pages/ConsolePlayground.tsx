import { useState, useEffect, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Play, Trash2, Download, Copy } from 'lucide-react'
import { executeCode } from '../utils/codeExecutor'
import { storage } from '../utils/storage'

interface ExecutionOutput {
  stdout: string
  stderr: string
  isRunning: boolean
}

export default function ConsolePlayground() {
  const [code, setCode] = useState<string>('')
  const [output, setOutput] = useState<ExecutionOutput>({
    stdout: '',
    stderr: '',
    isRunning: false,
  })
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load code from storage on mount
  useEffect(() => {
    const savedCode = storage.getPlaygroundCode()
    setCode(savedCode)
  }, [])

  // Auto-save code
  useEffect(() => {
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current)
    }

    autoSaveTimerRef.current = setTimeout(() => {
      storage.savePlaygroundCode(code)
    }, 2000)

    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current)
      }
    }
  }, [code])

  const handleRun = async () => {
    setOutput({ stdout: '', stderr: '', isRunning: true })

    try {
      const result = await executeCode(code)
      setOutput({
        stdout: result.stdout,
        stderr: result.stderr,
        isRunning: false,
      })
    } catch (error) {
      setOutput({
        stdout: '',
        stderr: 'שגיאה בלתי צפויה בהרצת הקוד',
        isRunning: false,
      })
    }
  }

  const handleClear = () => {
    setCode('')
    setOutput({ stdout: '', stderr: '', isRunning: false })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code))
    element.setAttribute('download', 'program.cs')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-lg font-bold">עורך קוד</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-700 rounded transition"
                  title="העתקה"
                >
                  <Copy size={18} />
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 hover:bg-gray-700 rounded transition"
                  title="הורדה"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-96">
              <Editor
                height="100%"
                language="csharp"
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="bg-gray-100 px-6 py-4 flex gap-3 border-t">
              <button
                onClick={handleRun}
                disabled={output.isRunning}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
              >
                <Play size={18} />
                הרץ
              </button>
              <button
                onClick={handleClear}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                <Trash2 size={18} />
                נקה
              </button>
              {output.stdout || output.stderr ? (
                <div className="text-sm text-gray-600 mr-auto">
                  ✓ נשמר אוטומטית
                </div>
              ) : null}
            </div>
          </div>

          {/* Output Console */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-black text-white px-6 py-4">
              <h2 className="text-lg font-bold">פלט</h2>
            </div>

            {/* Output Display */}
            <div className="flex-1 bg-black text-green-400 font-code text-sm p-6 overflow-auto min-h-96">
              {output.isRunning ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin">⏳</div>
                  <span>מריצים...</span>
                </div>
              ) : output.stderr ? (
                <div className="text-red-400">
                  <div className="font-bold mb-2">❌ שגיאה:</div>
                  <pre className="whitespace-pre-wrap break-words">{output.stderr}</pre>
                </div>
              ) : output.stdout ? (
                <pre className="whitespace-pre-wrap break-words">{output.stdout}</pre>
              ) : (
                <div className="text-gray-500">
                  הפלט יופיע כאן...
                </div>
              )}
            </div>

            {/* Info Section */}
            {!output.stdout && !output.stderr && !output.isRunning && (
              <div className="bg-blue-50 border-t border-blue-200 px-6 py-4 text-sm text-gray-700">
                <p className="mb-2">💡 טיפים:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>כתבו קוד C# כאן וליחצו על הרץ</li>
                  <li>הקוד נשמר אוטומטית כדי שלא תאבדו עבודה</li>
                  <li>תוכלו להשתמש בכל הפונקציות הסטנדרטיות של C#</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">דוגמאות קוד</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-800">הדפסה פשוטה:</p>
              <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block overflow-x-auto">
                Console.WriteLine("שלום עולם");
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-800">משתנים:</p>
              <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block overflow-x-auto">
                {`int x = 5;
Console.WriteLine(x);`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-800">לולאה:</p>
              <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block overflow-x-auto">
                {`for(int i = 0; i < 3; i++)
    Console.WriteLine(i);`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold mb-2 text-gray-800">תנאי:</p>
              <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block overflow-x-auto">
                {`int x = 10;
if(x > 5)
    Console.WriteLine("גדול");`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
