export type QuestionType = 'מה יהיה הפלט' | 'מצא את השגיאה' | 'בחר תשובה' | 'השלם את הקוד'

export interface QuizQuestion {
  id: number
  type: QuestionType
  question: string
  code?: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  id: number
  title: string
  description: string
  topic: string
  questions: QuizQuestion[]
}

export interface QuizAttempt {
  quizId: number
  answers: number[]
  score: number
  totalQuestions: number
  timestamp: number
}
