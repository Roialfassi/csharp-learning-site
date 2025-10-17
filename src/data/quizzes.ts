import { Quiz } from '../types/quiz'

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'יסודות C#',
    description: 'חידון על קלט/פלט, משתנים וטיפוסי נתונים',
    topic: 'יסודות',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
int y = 3;
Console.WriteLine(x + y);`,
        options: ['8', '5', '53', 'שגיאה'],
        correctAnswer: 0,
        explanation:
          'התשובה היא 8. המשתנה x שווה 5 והמשתנה y שווה 3. כאשר מחברים אותם, התוצאה היא 5 + 3 = 8.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string name = "Alice";
Console.WriteLine("Hello " + name);`,
        options: ['Hello Alice', 'Hello name', 'Alice', 'שגיאה'],
        correctAnswer: 0,
        explanation:
          'התשובה היא "Hello Alice". כאשר מחברים שתי strings, הן מתחברות זו לזו. "Hello " + "Alice" = "Hello Alice"',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'איך מגדירים משתנה מסוג int?',
        code: '',
        options: ['int x = 5;', 'x = 5;', 'integer x = 5;', 'var x = 5;'],
        correctAnswer: 0,
        explanation: 'התשובה הנכונה היא "int x = 5;". זו הדרך הנכונה להגדיר משתנה מסוג מספר שלם ב-C#.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 10;
int y = 3;
Console.WriteLine(x % y);`,
        options: ['3', '13', '1', '0'],
        correctAnswer: 2,
        explanation:
          'התשובה היא 1. האופרטור % מחזיר את השארית של חלוקה. 10 חלקי 3 = 3 עם שארית 1.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'איזה משתנה יכול להכיל טקסט?',
        options: ['int', 'double', 'string', 'bool'],
        correctAnswer: 2,
        explanation: 'התשובה היא string. טיפוס זה משמש לשמירת טקסט ומחרוזות.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `double x = 5.5;
int y = (int)x;
Console.WriteLine(y);`,
        options: ['5.5', '5', '6', 'שגיאה'],
        correctAnswer: 1,
        explanation:
          'התשובה היא 5. כאשר משנים טיפוס מ-double ל-int, החלק העשרוני נמחק. 5.5 הופך ל-5.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה עושה Console.WriteLine?',
        options: [
          'קורא קלט מהמשתמש',
          'מדפיסה טקסט למסך',
          'מוחקת משתנה',
          'בודקת תנאי',
        ],
        correctAnswer: 1,
        explanation: 'Console.WriteLine מדפיסה טקסט למסך ולאחר מכן מעבירה לשורה הבאה.',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 2;
int y = x * x;
Console.WriteLine(y);`,
        options: ['4', '2', '22', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 4. x שווה 2, ו-2 * 2 = 4.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'איזה אופרטור משמש לחלוקה?',
        options: ['+', '-', '*', '/'],
        correctAnswer: 3,
        explanation: 'התשובה היא /. זהו אופרטור החלוקה ב-C#.',
      },
      {
        id: 10,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string a = "He";
string b = "llo";
Console.WriteLine(a + b);`,
        options: ['He llo', 'Hello', 'a + b', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "Hello". שתי המחרוזות "He" ו-"llo" מתחברות ליצירת "Hello".',
      },
    ],
  },
  {
    id: 2,
    title: 'תנאים ותנאים לוגיים',
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
        explanation:
          'התשובה היא "גדול". x שווה 10, שהוא גדול מ-5, ולכן התנאי אמיתי ויודפס "גדול".',
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
        explanation: 'התשובה היא "קטין". גיל 15 אינו גדול או שווה ל-18, לכן התנאי שקר וברנך אחרת יודפס "קטין".',
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
        explanation: 'התשובה היא "שווה". x שווה 5 והתנאי x == 5 אמיתי, ולכן יודפס "שווה".',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה הם הערכים האפשריים ל-bool?',
        options: ['0 ו-1', 'true ו-false', 'yes ו-no', 'קל ו-קשה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "true ו-false". אלו הם הערכים היחידים שמשתנה bool יכול להחזיק.',
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
        explanation:
          'התשובה היא "בינוני". 5 אינו קטן מ-3, אבל הוא קטן מ-10, ולכן יודפס "בינוני".',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'איך כותבים "לא שווה" ב-C#?',
        options: ['!=', '<>', '~=', '!=!'],
        correctAnswer: 0,
        explanation: 'התשובה היא "!=". זה אופרטור ההשוואה "לא שווה" ב-C#.',
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
        explanation:
          'התשובה היא "בטווח". x = 10, וזה גדול מ-5 וגם קטן מ-15, ולכן שני התנאים אמיתיים.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה משמש אופרטור &&?',
        options: [
          'OR לוגי',
          'AND לוגי',
          'NOT לוגי',
          'XOR לוגי',
        ],
        correctAnswer: 1,
        explanation:
          'התשובה היא "AND לוגי". && משמש לבדוק שני תנאים וחייבים שניהם להיות אמיתיים.',
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
        explanation:
          'התשובה היא "בתוך". x = 3 אינו גדול מ-5 וגם אינו קטן מ-1, ולכן התנאי שקר וברנך אחרת יודפס "בתוך".',
      },
    ],
  },
]
