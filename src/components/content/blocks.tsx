import type { ReactNode } from 'react'
import type { CalloutVariant, LessonBlock } from '../../types/lesson'

export function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded font-mono text-[0.85em]">
      {children}
    </code>
  )
}

// Renders `backtick` spans inside text as inline code
export function rich(text: string): ReactNode {
  const parts = text.split('`')
  if (parts.length === 1) return text
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <InlineCode key={i}>{part}</InlineCode> : <span key={i}>{part}</span>
      )}
    </>
  )
}

export function CodeBlock({ code, caption }: { code: string; caption?: string }) {
  return (
    <div className="my-4">
      {caption && <p className="text-xs font-semibold text-gray-500 mb-1">{caption}</p>}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto leading-relaxed">
        <pre>{code}</pre>
      </div>
    </div>
  )
}

const calloutStyles: Record<CalloutVariant, { bg: string; border: string; label: string }> = {
  tip: { bg: 'bg-yellow-50', border: 'border-yellow-500', label: '💡 טיפ' },
  warning: { bg: 'bg-red-50', border: 'border-red-500', label: '⚠️ שימו לב' },
  success: { bg: 'bg-green-50', border: 'border-green-500', label: '✅ עצה טובה' },
  info: { bg: 'bg-blue-50', border: 'border-blue-500', label: 'ℹ️ הסבר נוסף' },
}

export function Callout({ variant, children }: { variant: CalloutVariant; children: ReactNode }) {
  const style = calloutStyles[variant]
  return (
    <div className={`${style.bg} border-r-4 ${style.border} rounded p-4 text-sm text-gray-700 my-4 leading-relaxed`}>
      <span className="font-bold">{style.label}: </span>
      {children}
    </div>
  )
}

export function CompareTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            {headers.map((h, i) => (
              <th key={i} className="p-3 text-right font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} className="p-3 border-t border-gray-200 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.kind) {
    case 'p':
      return <p className="text-gray-700 leading-relaxed my-3">{rich(block.text)}</p>
    case 'h3':
      return <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">{rich(block.text)}</h3>
    case 'code':
      return <CodeBlock code={block.code} caption={block.caption} />
    case 'callout':
      return <Callout variant={block.variant}>{rich(block.text)}</Callout>
    case 'table':
      return (
        <CompareTable
          headers={block.headers}
          rows={block.rows.map((row) => row.map((cell) => rich(cell)))}
        />
      )
    case 'list':
      return block.ordered ? (
        <ol className="list-decimal pr-6 my-3 space-y-1 text-gray-700 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{rich(item)}</li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc pr-6 my-3 space-y-1 text-gray-700 leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i}>{rich(item)}</li>
          ))}
        </ul>
      )
  }
}
