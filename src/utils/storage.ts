const STORAGE_KEY_PREFIX = 'csharp_learning_'

export const storage = {
  // Playground code
  getPlaygroundCode: (): string => {
    const code = localStorage.getItem(`${STORAGE_KEY_PREFIX}playground_code`)
    if (code) return code

    // Default starter code
    return `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}`
  },

  savePlaygroundCode: (code: string): void => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}playground_code`, code)
  },

  // Exercise code
  getExerciseCode: (exerciseId: number): string => {
    return localStorage.getItem(`${STORAGE_KEY_PREFIX}exercise_${exerciseId}_code`) || ''
  },

  saveExerciseCode: (exerciseId: number, code: string): void => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}exercise_${exerciseId}_code`, code)
  },

  // Quiz progress
  getQuizProgress: (): Record<string, any> => {
    const progress = localStorage.getItem(`${STORAGE_KEY_PREFIX}quiz_progress`)
    return progress ? JSON.parse(progress) : {}
  },

  saveQuizProgress: (quizId: number, score: number, attempts: number): void => {
    const progress = storage.getQuizProgress()
    progress[quizId] = { score, attempts, timestamp: Date.now() }
    localStorage.setItem(`${STORAGE_KEY_PREFIX}quiz_progress`, JSON.stringify(progress))
  },

  // Exercise completion
  getCompletedExercises: (): number[] => {
    const completed = localStorage.getItem(`${STORAGE_KEY_PREFIX}completed_exercises`)
    return completed ? JSON.parse(completed) : []
  },

  markExerciseComplete: (exerciseId: number): void => {
    const completed = storage.getCompletedExercises()
    if (!completed.includes(exerciseId)) {
      completed.push(exerciseId)
      localStorage.setItem(`${STORAGE_KEY_PREFIX}completed_exercises`, JSON.stringify(completed))
    }
  },

  // User preferences
  getUserPreferences: () => {
    const prefs = localStorage.getItem(`${STORAGE_KEY_PREFIX}preferences`)
    return prefs ? JSON.parse(prefs) : { theme: 'light', language: 'he' }
  },

  saveUserPreferences: (preferences: Record<string, any>): void => {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}preferences`, JSON.stringify(preferences))
  },

  // Clear all data
  clearAll: (): void => {
    const keys = Object.keys(localStorage)
    keys.forEach((key) => {
      if (key.startsWith(STORAGE_KEY_PREFIX)) {
        localStorage.removeItem(key)
      }
    })
  },
}
