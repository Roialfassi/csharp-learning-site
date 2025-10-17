import { executeCode } from './codeExecutor'
import { TestCase, TestResult } from '../types/exercise'

export async function runExerciseTests(
  code: string,
  testCases: TestCase[]
): Promise<TestResult[]> {
  const results: TestResult[] = []

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i]

    try {
      // Wrap the code to accept input via ReadLine (if needed)
      const wrappedCode = wrapCodeWithInput(code, testCase.input)
      const result = await executeCode(wrappedCode)

      if (result.status === 'error') {
        results.push({
          testNumber: i + 1,
          passed: false,
          expected: testCase.expectedOutput,
          actual: '',
          error: result.stderr,
        })
      } else {
        const actualOutput = result.stdout.trim()
        const expectedOutput = testCase.expectedOutput.trim()
        const passed = actualOutput === expectedOutput

        results.push({
          testNumber: i + 1,
          passed,
          expected: expectedOutput,
          actual: actualOutput,
        })
      }
    } catch (error) {
      results.push({
        testNumber: i + 1,
        passed: false,
        expected: testCase.expectedOutput,
        actual: '',
        error: 'שגיאה בהרצת הבדיקה',
      })
    }
  }

  return results
}

function wrapCodeWithInput(code: string, _input: string): string {
  // If there's input needed, we can wrap it, but for now
  // we'll just return the code as-is since most tests use hardcoded values
  return code
}

export function allTestsPassed(results: TestResult[]): boolean {
  return results.length > 0 && results.every((r) => r.passed)
}

export function getPassedCount(results: TestResult[]): number {
  return results.filter((r) => r.passed).length
}
