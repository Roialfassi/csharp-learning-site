import type { Quiz } from '../../types/quiz'

// תנאים
export const conditionsQuizzes: Quiz[] = [
  {
    id: 3,
    title: 'תנאים ותנאים לוגיים - חלק 1',
    description: 'חידון על if/else ותנאים',
    topic: 'תנאים',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 10;
if (x > 5)
    Console.WriteLine("גדול");
else
    Console.WriteLine("קטן");`,
        options: ['גדול', 'קטן', 'שגיאה', 'לא יודפס כלום'],
        correctAnswer: 0,
        explanation: 'התשובה היא "גדול". x שווה 10, שהוא גדול מ-5.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int age = 15;
if (age >= 18)
    Console.WriteLine("בחור");
else
    Console.WriteLine("קטין");`,
        options: ['בחור', 'קטין', 'שניהם', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "קטין". גיל 15 אינו גדול או שווה ל-18.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'איזה סמל משמש ל"גדול מ"?',
        options: ['>=', '>', '<', '=='],
        correctAnswer: 1,
        explanation: 'התשובה היא ">". זה אופרטור ההשוואה ל"גדול מ".',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
if (x == 5)
    Console.WriteLine("שווה");
else
    Console.WriteLine("לא שווה");`,
        options: ['שווה', 'לא שווה', 'שגיאה', 'לא יודפס כלום'],
        correctAnswer: 0,
        explanation: 'התשובה היא "שווה". x שווה 5 והתנאי אמיתי.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה הם הערכים האפשריים ל-bool?',
        options: ['0 ו-1', 'true ו-false', 'yes ו-no', 'קל ו-קשה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "true ו-false".',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
if (x < 3)
    Console.WriteLine("קטן");
else if (x < 10)
    Console.WriteLine("בינוני");
else
    Console.WriteLine("גדול");`,
        options: ['קטן', 'בינוני', 'גדול', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "בינוני". 5 אינו קטן מ-3, אבל הוא קטן מ-10.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'איך כותבים "לא שווה" ב-C#?',
        options: ['!=', '<>', '~=', '!=!'],
        correctAnswer: 0,
        explanation: 'התשובה היא "!=".',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 10;
if (x > 5 && x < 15)
    Console.WriteLine("בטווח");
else
    Console.WriteLine("מחוץ לטווח");`,
        options: ['בטווח', 'מחוץ לטווח', 'שגיאה', 'לא יודפס כלום'],
        correctAnswer: 0,
        explanation: 'התשובה היא "בטווח". x = 10 עומד בשני התנאים.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה משמש אופרטור &&?',
        options: ['OR לוגי', 'AND לוגי', 'NOT לוגי', 'XOR לוגי'],
        correctAnswer: 1,
        explanation: 'התשובה היא "AND לוגי". && בודקת ששני התנאים אמיתיים.',
      },
      {
        id: 10,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 3;
if (x > 5 || x < 1)
    Console.WriteLine("מחוץ");
else
    Console.WriteLine("בתוך");`,
        options: ['מחוץ', 'בתוך', 'שגיאה', 'לא יודפס כלום'],
        correctAnswer: 1,
        explanation: 'התשובה היא "בתוך". 3 לא מחוץ לטווח 1-5.',
      },
    ],
  },
  {
    id: 4,
    title: 'תנאים ותנאים לוגיים - חלק 2',
    description: 'switch, OR לוגי, operator דורבילות',
    topic: 'תנאים',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int day = 2;
switch (day)
{
    case 1:
        Console.WriteLine("שני");
        break;
    case 2:
        Console.WriteLine("שלישי");
        break;
    default:
        Console.WriteLine("יום אחר");
        break;
}`,
        options: ['שני', 'שלישי', 'יום אחר', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "שלישי". case 2 תואם ו-break עוצר את ה-switch.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `bool a = true;
bool b = false;
Console.WriteLine(a || b);`,
        options: ['true', 'false', 'שגיאה', 'בלתי מוגדר'],
        correctAnswer: 0,
        explanation: 'התשובה היא "true". || הוא OR לוגי, true OR false = true.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה משמש אופרטור ||?',
        options: ['AND לוגי', 'OR לוגי', 'NOT לוגי', 'XOR לוגי'],
        correctAnswer: 1,
        explanation: 'התשובה היא "OR לוגי". || נכון אם לפחות אחד מהתנאים נכון.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `bool x = !true;
Console.WriteLine(x);`,
        options: ['true', 'false', 'שגיאה', '!true'],
        correctAnswer: 1,
        explanation: 'התשובה היא "false". ! הוא NOT לוגי, !true = false.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה משמש אופרטור !?',
        options: ['AND לוגי', 'OR לוגי', 'NOT לוגי', 'XOR לוגי'],
        correctAnswer: 2,
        explanation: 'התשובה היא "NOT לוגי". ! הופך את ערך ה-bool.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
bool result = (x > 3) && (x < 10);
Console.WriteLine(result);`,
        options: ['true', 'false', 'שגיאה', 'לא יודפס כלום'],
        correctAnswer: 0,
        explanation: 'התשובה היא "true". 5 גדול מ-3 וקטן מ-10.',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int grade = 75;
if (grade >= 90)
    Console.WriteLine("A");
else if (grade >= 80)
    Console.WriteLine("B");
else if (grade >= 70)
    Console.WriteLine("C");
else
    Console.WriteLine("F");`,
        options: ['A', 'B', 'C', 'F'],
        correctAnswer: 2,
        explanation: 'התשובה היא "C". 75 קטן מ-80 אבל גדול או שווה ל-70.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה ההבדל בין = ל-==?',
        options: [
          'אין הבדל',
          '= הוא השמה, == הוא השוואה',
          '== הוא השמה, = הוא השוואה',
          'לא ניתן להשתמש בשניהם במטבח',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'= הוא השמה, == הוא השוואה\'.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string status = "active";
if (status == "active")
    Console.WriteLine("פעיל");
else
    Console.WriteLine("לא פעיל");`,
        options: ['פעיל', 'לא פעיל', 'שגיאה', 'active'],
        correctAnswer: 0,
        explanation: 'התשובה היא "פעיל". המחרוזות זהות.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה יהיה התוצאה של true && false && true?',
        options: ['true', 'false', 'שגיאה', 'בלתי מוגדר'],
        correctAnswer: 1,
        explanation: 'התשובה היא "false". כל התנאים חייבים להיות true, אחד מהם false.',
      },
    ],
  },
]
