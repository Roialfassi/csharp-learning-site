import { useState, useEffect, useRef } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import { Play, Trash2, Download, Copy } from 'lucide-react'
import { executeCode } from '../utils/codeExecutor'

interface ExecutionOutput {
  stdout: string
  stderr: string
  isRunning: boolean
}

const DEFAULT_CODE = `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("שלום עולם!");
    }
}`

// Storage utility
const storage = {
  getPlaygroundCode: () => {
    try {
      return localStorage.getItem('playground-code') || ''
    } catch {
      return ''
    }
  },
  savePlaygroundCode: (code: string) => {
    try {
      localStorage.setItem('playground-code', code)
    } catch (e) {
      console.error('Failed to save code:', e)
    }
  }
}

export default function ConsolePlayground() {
  const [code, setCode] = useState<string>('')
  const [output, setOutput] = useState<ExecutionOutput>({
    stdout: '',
    stderr: '',
    isRunning: false,
  })
  const [fontSize, setFontSize] = useState(14)
  const [wordWrap, setWordWrap] = useState(true)
  const [theme, setTheme] = useState<'vs-dark' | 'vs-light'>('vs-dark')
  const [autoSaved, setAutoSaved] = useState(false)
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const editorRef = useRef<any>(null)
  const monaco = useMonaco()

  // Configure Monaco on first mount
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('custom-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#1e1e1e',
        },
      })
    }
  }, [monaco])

  // Load code from storage on mount
  useEffect(() => {
    const savedCode = storage.getPlaygroundCode()
    if (savedCode && savedCode.length > 0) {
      setCode(savedCode)
    } else {
      setCode(DEFAULT_CODE)
    }
  }, [])

  // Auto-save code
  useEffect(() => {
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current)
    }

    setAutoSaved(false)

    autoSaveTimerRef.current = setTimeout(() => {
      if (code && code.length > 0) {
        storage.savePlaygroundCode(code)
        setAutoSaved(true)
      }
    }, 1500)

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
        stdout: result.stdout || '',
        stderr: result.stderr || '',
        isRunning: false,
      })
    } catch (error) {
      setOutput({
        stdout: '',
        stderr: `שגיאה בלתי צפויה בהרצת הקוד: ${error instanceof Error ? error.message : 'Unknown error'}`,
        isRunning: false,
      })
    }
  }

  const handleClear = () => {
    setCode(DEFAULT_CODE)
    setOutput({ stdout: '', stderr: '', isRunning: false })
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      alert('קוד הועתק ללוח')
    } catch {
      alert('שגיאה בהעתקה')
    }
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

  const handleLoadExample = (example: string) => {
    setCode(example)
  }

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor

    // Add keyboard shortcut: Ctrl+Enter to run
    editor.addCommand(monaco?.KeyMod?.CtrlCmd! | monaco?.KeyCode?.Enter!, () => {
      handleRun()
    })

    // Set initial focus
    editor.focus()
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
            <div className="flex-1" style={{ height: '500px' }}>
              <Editor
                height="100%"
                language="csharp"
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={theme}
                options={{
                  minimap: { enabled: true, maxColumn: 120 },
                  scrollBeyondLastLine: false,
                  wordWrap: wordWrap ? 'on' : 'off',
                  lineNumbers: 'on',
                  glyphMargin: true,
                  fontSize: fontSize,
                  tabSize: 4,
                  insertSpaces: true,
                  automaticLayout: true,
                  quickSuggestions: {
                    other: true,
                    comments: false,
                    strings: false,
                  },
                  acceptSuggestionOnCommitCharacter: true,
                  formatOnPaste: true,
                  formatOnType: true,
                  autoClosingBrackets: 'always',
                  autoClosingQuotes: 'always',
                  autoIndent: 'full',
                  renderWhitespace: 'selection',
                  copyWithSyntaxHighlighting: true,
                  showUnused: true,
                  renderLineHighlight: 'line',
                  occurrencesHighlight: 'singleFile',
                  selectionHighlight: true,
                  codeLens: true,
                  folding: true,
                  foldingHighlight: true,
                  foldingImportsByDefault: false,
                }}
                onMount={handleEditorDidMount}
              />
            </div>

            {/* Control Buttons */}
            <div className="bg-gray-100 px-6 py-4 space-y-3 border-t">
              <div className="flex gap-3 flex-wrap items-center">
                <button
                  onClick={handleRun}
                  disabled={output.isRunning}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
                  title="הרץ קוד (Ctrl+Enter)"
                >
                  <Play size={18} />
                  הרץ
                </button>
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
                  title="נקה קוד"
                >
                  <Trash2 size={18} />
                  נקה
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition text-sm"
                  title="העתק קוד"
                >
                  <Copy size={16} />
                  העתק
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 transition text-sm"
                  title="הורד קוד"
                >
                  <Download size={16} />
                  הורד
                </button>
                {autoSaved && (
                  <div className="text-sm text-green-700 font-semibold ml-auto">
                    ✓ נשמר אוטומטית
                  </div>
                )}
              </div>

              {/* Editor Settings */}
              <div className="flex gap-4 items-center text-sm bg-white p-3 rounded border border-gray-300">
                <div className="flex items-center gap-2">
                  <label className="font-semibold text-gray-700">גודל גופן:</label>
                  <input
                    type="range"
                    min="10"
                    max="20"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span className="text-gray-600 w-8">{fontSize}px</span>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wordWrap}
                    onChange={(e) => setWordWrap(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="font-semibold text-gray-700">גלילת טקסט</span>
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as 'vs-dark' | 'vs-light')}
                  className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-800"
                >
                  <option value="vs-dark">כהה</option>
                  <option value="vs-light">בהיר</option>
                </select>
              </div>
            </div>
          </div>

          {/* Output Console */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-black text-white px-6 py-4">
              <h2 className="text-lg font-bold">פלט</h2>
            </div>

            {/* Output Display */}
            <div className="flex-1 bg-black text-green-400 font-mono text-sm p-6 overflow-auto min-h-96">
              {output.isRunning ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin">⏳</div>
                  <span>מריצים...</span>
                </div>
              ) : output.stderr ? (
                <div className="text-red-400">
                  <div className="font-bold mb-2">❌ שגיאה:</div>
                  <pre className="whitespace-pre-wrap break-words font-mono">{output.stderr}</pre>
                </div>
              ) : output.stdout ? (
                <pre className="whitespace-pre-wrap break-words font-mono">{output.stdout}</pre>
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

        {/* Keyboard Shortcuts & Documentation */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Keyboard Shortcuts */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">⌨️ קיצורי מקלדת</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">הרץ קוד:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Enter</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">עותק:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + C</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">הדבק:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + V</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ביטול:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Z</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">חזרה:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Shift + Z</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">עיצוב קוד:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + Shift + F</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">הערה:</span>
                <kbd className="bg-gray-800 text-white px-2 py-1 rounded text-xs">Ctrl + /</kbd>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">דוגמאות קוד - לחץ כדי לטעון</h3>
            <div className="space-y-2">
              <button
                onClick={() =>
                  handleLoadExample(
                    `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("שלום עולם!");
    }
}`
                  )
                }
                className="w-full text-right bg-gray-50 hover:bg-blue-50 p-3 rounded border border-gray-200 hover:border-blue-400 transition text-sm font-semibold text-gray-800"
              >
                ✏️ הדפסה פשוטה
              </button>
              <button
                onClick={() =>
                  handleLoadExample(
                    `using System;

class Program
{
    static void Main()
    {
        int x = 5;
        double y = 3.14;
        string name = "אני";
        bool flag = true;

        Console.WriteLine($"x = {x}");
        Console.WriteLine($"y = {y}");
        Console.WriteLine($"name = {name}");
        Console.WriteLine($"flag = {flag}");
    }
}`
                  )
                }
                className="w-full text-right bg-gray-50 hover:bg-blue-50 p-3 rounded border border-gray-200 hover:border-blue-400 transition text-sm font-semibold text-gray-800"
              >
                📝 משתנים וטיפוסים
              </button>
              <button
                onClick={() =>
                  handleLoadExample(
                    `using System;

class Program
{
    static void Main()
    {
        for(int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"מספר: {i}");
        }
    }
}`
                  )
                }
                className="w-full text-right bg-gray-50 hover:bg-blue-50 p-3 rounded border border-gray-200 hover:border-blue-400 transition text-sm font-semibold text-gray-800"
              >
                🔁 לולאת For
              </button>
              <button
                onClick={() =>
                  handleLoadExample(
                    `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        if(x > 5)
        {
            Console.WriteLine("x גדול מ-5");
        }
        else if(x == 5)
        {
            Console.WriteLine("x שווה ל-5");
        }
        else
        {
            Console.WriteLine("x קטן מ-5");
        }
    }
}`
                  )
                }
                className="w-full text-right bg-gray-50 hover:bg-blue-50 p-3 rounded border border-gray-200 hover:border-blue-400 transition text-sm font-semibold text-gray-800"
              >
                ✅ תנאים (If/Else)
              </button>
              <button
                onClick={() =>
                  handleLoadExample(
                    `using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        int result = Add(5, 3);
        Console.WriteLine($"5 + 3 = {result}");
    }
}`
                  )
                }
                className="w-full text-right bg-gray-50 hover:bg-blue-50 p-3 rounded border border-gray-200 hover:border-blue-400 transition text-sm font-semibold text-gray-800"
              >
                🔧 מתודות
              </button>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-blue-50 border-r-4 border-blue-600 p-6 rounded">
          <h3 className="text-lg font-bold mb-2 text-blue-900">💡 טיפים</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>✨ העורך ישמור את הקוד שלך אוטומטית כל 1.5 שניות</li>
            <li>🎯 בחרו דוגמה מהרשימה לימין כדי להטעין קוד</li>
            <li>⌨️ השתמשו בקיצורי מקלדת לחוויה טובה יותר</li>
            <li>📋 תוכלו להעתיק, להוריד, וליצור קבצים חדשים</li>
            <li>🎨 שנו את גודל הגופן וה-theme כדי שתרגישו בנוח</li>
          </ul>
        </div>
      </div>
    </div>
  )
}