import type { Quiz } from '../../types/quiz'

// לולאות
export const loopsQuizzes: Quiz[] = [
  {
    id: 5,
    title: 'לולאות - חלק 1',
    description: 'for, while וביצוע קוד בעיקר חוזר',
    topic: 'לולאות',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `for (int i = 0; i < 3; i++)
    Console.WriteLine(i);`,
        options: ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0 1 2. הלולאה מתחילה ב-0, מסתיימת ב-2.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'כמה פעמים תודפס "Hello"?',
        code: `for (int i = 0; i < 5; i++)
    Console.WriteLine("Hello");`,
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'התשובה היא 5. הלולאה רצה 5 פעמים (i = 0,1,2,3,4).',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה i++ יעשה?',
        options: ['ישקול את i בחזקה', 'יהפוך את i לחיובי', 'יהוסיף 1 ל-i', 'יחסיר 1 מ-i'],
        correctAnswer: 2,
        explanation: 'התשובה היא "יהוסיף 1 ל-i". i++ הוא increment operator.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int i = 0;
while (i < 3)
{
    Console.WriteLine(i);
    i++;
}`,
        options: ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', 'לולאה אינסופית'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0 1 2. while לולאה עם תנאי שגדל עם כל איטרציה.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה ההבדל בין for ו-while?',
        options: [
          'אין הבדל',
          'for משמש לגיל, while לתנאים',
          'for לולאה דטרמיניסטית, while תנאי משתנה',
          'while יעיל יותר',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'for לולאה דטרמיניסטית, while תנאי משתנה\'.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `for (int i = 1; i <= 3; i++)
{
    Console.WriteLine(i * 2);
}`,
        options: ['2\n4\n6', '2\n4\n6\n8', '1\n2\n3', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 2 4 6. לולאה מ-1 ל-3, כל אחד מוכפל ב-2.',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'כמה פעמים הלולאה תרוץ?',
        code: `for (int i = 0; i <= 5; i++)
    Console.WriteLine(i);`,
        options: ['5', '6', '7', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 6. i = 0,1,2,3,4,5 (שש פעמים).',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה קורה במשפט break?',
        options: [
          'מעצר התוכנית',
          'מסיים את הלולאה',
          'מדלג לשורה הבאה',
          'מחזיר שגיאה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא "מסיים את הלולאה".',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `for (int i = 0; i < 5; i++)
{
    if (i == 2) break;
    Console.WriteLine(i);
}`,
        options: ['0\n1', '0\n1\n2', '0\n1\n2\n3\n4', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0 1. break מסיים את הלולאה כאשר i == 2.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה משמש continue?',
        options: [
          'מעצר התוכנית',
          'מסיים את הלולאה',
          'דילוג לאיטרציה הבאה',
          'מחזיר שגיאה',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא "דילוג לאיטרציה הבאה".',
      },
    ],
  },
  {
    id: 6,
    title: 'לולאות - חלק 2',
    description: 'do-while, foreach וקבוצים שונים',
    topic: 'לולאות',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int i = 0;
do
{
    Console.WriteLine(i);
    i++;
} while (i < 3);`,
        options: ['0\n1\n2', '1\n2\n3', '0\n1\n2\n3', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0 1 2. do-while רץ לפחות פעם אחת.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int i = 5;
do
{
    Console.WriteLine(i);
    i++;
} while (i < 3);`,
        options: ['לא יודפס כלום', '5', 'שגיאה', 'לולאה אינסופית'],
        correctAnswer: 1,
        explanation: 'התשובה היא 5. do-while רץ לפחות פעם אחת גם אם התנאי שקר.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה ההבדל בין while ל-do-while?',
        options: [
          'אין הבדל',
          'do-while רץ לפחות פעם אחת',
          'while יעיל יותר',
          'do-while משמש רק ללמודים',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'do-while רץ לפחות פעם אחת\'.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string[] colors = {"Red", "Green", "Blue"};
foreach (string color in colors)
    Console.WriteLine(color);`,
        options: ['Red\nGreen\nBlue', 'Red Green Blue', '0\n1\n2', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא Red Green Blue. foreach עוברת על כל אלמנט.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה יתרון של foreach על for?',
        options: [
          'foreach יותר מהיר',
          'foreach לא דורש עדכון של index',
          'foreach עובד רק על מחרוזות',
          'אין יתרון',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'foreach לא דורש עדכון של index\'.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `for (int i = 0; i < 5; i++)
{
    if (i == 2) continue;
    Console.WriteLine(i);
}`,
        options: ['0\n1\n3\n4', '0\n1\n2\n3\n4', '1\n2\n3', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0 1 3 4. continue מדלג על i=2.',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'כמה פעמים "X" יודפס?',
        code: `for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= 2; j++)
        Console.WriteLine("X");`,
        options: ['3', '5', '6', '9'],
        correctAnswer: 2,
        explanation: 'התשובה היא 6. לולאה כפולה: 3 * 2 = 6.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה משמש continue בתוך לולאה?',
        options: [
          'מעצר התוכנית',
          'מסיים את הלולאה',
          'דילוג לאיטרציה הבאה',
          'מחזיר שגיאה',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא "דילוג לאיטרציה הבאה".',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `for (int i = 0; i < 3; i++)
{
    Console.WriteLine($"i={i}");
}`,
        options: ['i=0\ni=1\ni=2', 'i=0 i=1 i=2', 'i', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא "i=0 i=1 i=2". $ מאפשר interpolation של מחרוזות.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה i-- יעשה?',
        options: ['ישקול את i בחזקה', 'יהפוך את i לשלילי', 'יחסיר 1 מ-i', 'יהוסיף 1 ל-i'],
        correctAnswer: 2,
        explanation: 'התשובה היא "יחסיר 1 מ-i". i-- הוא decrement operator.',
      },
    ],
  },
]
