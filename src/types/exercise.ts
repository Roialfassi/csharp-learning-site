export type Difficulty = 'קל' | 'בינוני' | 'קשה'

export interface TestCase {
  input: string
  expectedOutput: string
  description?: string
}

export interface Exercise {
  id: number
  title: string
  description: string
  difficulty: Difficulty
  topic: string
  starterCode: string
  solution: string
  testCases: TestCase[]
  hints: string[]
}

export interface TestResult {
  testNumber: number
  passed: boolean
  expected: string
  actual: string
  error?: string
}
