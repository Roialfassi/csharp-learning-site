export interface Topic {
  id: string
  name: string
  hebrewName: string
  description: string
  order: number
  icon: string
}

export const topics: Topic[] = [
  {
    id: 'basics',
    name: 'Basics',
    hebrewName: 'יסודות',
    description: 'קלט, פלט, משתנים וטיפוסי נתונים',
    order: 1,
    icon: '📚',
  },
  {
    id: 'conversion',
    name: 'Type Conversion & Operators',
    hebrewName: 'המרות ואופרטורים',
    description: 'Parse, Convert, casting, אופרטורים חשבוניים ומקוצרים',
    order: 2,
    icon: '🔄',
  },
  {
    id: 'conditions',
    name: 'Conditions',
    hebrewName: 'תנאים',
    description: 'if/else, switch, תנאים לוגיים',
    order: 3,
    icon: '🔀',
  },
  {
    id: 'loops',
    name: 'Loops',
    hebrewName: 'לולאות',
    description: 'for, while, do-while, foreach',
    order: 4,
    icon: '🔁',
  },
  {
    id: 'strings',
    name: 'Strings',
    hebrewName: 'מחרוזות',
    description: 'פעולות על מחרוזות, פורמט וטיוב',
    order: 5,
    icon: '📝',
  },
  {
    id: 'arrays',
    name: 'Arrays',
    hebrewName: 'מערכים',
    description: 'הגדרה, גישה, איטרציה, מערכים דו-מימדיים',
    order: 6,
    icon: '📦',
  },
  {
    id: 'methods',
    name: 'Methods',
    hebrewName: 'מתודות',
    description: 'הגדרה, פרמטרים, ערכי החזרה',
    order: 7,
    icon: '⚙️',
  },
  {
    id: 'enums-structs',
    name: 'Enums & Structs',
    hebrewName: 'Enum ו-Struct',
    description: 'טיפוסים מותאמים אישית: קבוצות ערכים קבועות ומבנים פשוטים',
    order: 8,
    icon: '🧱',
  },
  {
    id: 'value-reference',
    name: 'Value vs Reference Types',
    hebrewName: 'ערך מול הפניה',
    description: 'ההבדל בין טיפוסי ערך לטיפוסי הפניה, null והעתקה',
    order: 9,
    icon: '🪞',
  },
  {
    id: 'collections',
    name: 'Collections',
    hebrewName: 'אוספים',
    description: 'List, Dictionary, HashSet וקולקציות אחרות',
    order: 10,
    icon: '🗂️',
  },
  {
    id: 'classes',
    name: 'Classes',
    hebrewName: 'מחלקות',
    description: 'יסודות OOP, constructors, properties',
    order: 11,
    icon: '🏗️',
  },
  {
    id: 'inheritance',
    name: 'Inheritance',
    hebrewName: 'ירושה',
    description: 'יורש, override, base keyword',
    order: 12,
    icon: '👨‍👧',
  },
  {
    id: 'polymorphism',
    name: 'Polymorphism',
    hebrewName: 'פולימורפיזם',
    description: 'virtual methods, interfaces',
    order: 13,
    icon: '🎭',
  },
  {
    id: 'exceptions',
    name: 'Exception Handling',
    hebrewName: 'טיפול בשגיאות',
    description: 'try/catch/finally, throw, custom exceptions',
    order: 14,
    icon: '⚠️',
  },
  {
    id: 'linq',
    name: 'LINQ',
    hebrewName: 'LINQ',
    description: 'שאילתות על נתונים, filtering, ordering',
    order: 15,
    icon: '🔍',
  },
]

export function getTopicById(id: string): Topic | undefined {
  return topics.find((t) => t.id === id)
}

export function getTopicByHebrewName(name: string): Topic | undefined {
  return topics.find((t) => t.hebrewName === name)
}
