import type { Quiz } from '../../types/quiz'

// מחרוזות
export const stringsQuizzes: Quiz[] = [
  {
    id: 7,
    title: 'מחרוזות ופעולות על מחרוזות',
    description: 'Length, Substring, ToUpper, Split וכו\'',
    topic: 'מחרוזות',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "Hello";
Console.WriteLine(text.Length);`,
        options: ['4', '5', '6', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 5. "Hello" מכיל 5 תווים.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "Hello World";
Console.WriteLine(text.Substring(0, 5));`,
        options: ['Hello', 'World', 'Hello ', ' Worl', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא "Hello". Substring(0, 5) מחזירה 5 תווים החל מאינדקס 0.',
      },
      {
        id: 3,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "hello";
Console.WriteLine(text.ToUpper());`,
        options: ['hello', 'HELLO', 'Hello', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "HELLO". ToUpper() הופכת הכל לאותיות גדולות.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "HELLO";
Console.WriteLine(text.ToLower());`,
        options: ['HELLO', 'hello', 'Hello', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "hello". ToLower() הופכת הכל לאותיות קטנות.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה יעשה Replace?',
        options: [
          'יחליף תו ספציפי בתו אחר',
          'יוסיף טקסט',
          'ימחק טקסט',
          'יטייל על המחרוזת',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'יחליף תו ספציפי בתו אחר\'.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "apple";
Console.WriteLine(text.Replace("a", "A"));`,
        options: ['apple', 'Apple', 'APPLE', 'Aple'],
        correctAnswer: 1,
        explanation: 'התשובה היא "Apple". Replace מחליף את "a" עם "A".',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "one,two,three";
string[] words = text.Split(',');
Console.WriteLine(words[1]);`,
        options: ['one', 'two', 'three', ','],
        correctAnswer: 1,
        explanation: 'התשובה היא "two". Split מפצלת מחרוזת, words[1] הוא האלמנט השני.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה יעשה Contains?',
        options: [
          'יבדוק אם מחרוזת מכילה טקסט',
          'יתרגם מחרוזת',
          'יוסיף מחרוזת',
          'יחליף מחרוזת',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'יבדוק אם מחרוזת מכילה טקסט\'.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "Hello World";
if (text.Contains("World"))
    Console.WriteLine("כן");
else
    Console.WriteLine("לא");`,
        options: ['כן', 'לא', 'שגיאה', 'בלתי מוגדר'],
        correctAnswer: 0,
        explanation: 'התשובה היא "כן". "Hello World" מכיל "World".',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה יעשה Trim?',
        options: [
          'יוסיף רווחים',
          'יוסיף טקסט',
          'יסיר רווחים מתחילה וסוף',
          'יוחלף תו',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'יסיר רווחים מתחילה וסוף\'.',
      },
    ],
  },
]
