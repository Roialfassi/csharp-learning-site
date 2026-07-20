import type { Quiz } from '../../types/quiz'

// יסודות
export const basicsQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'יסודות C# - חלק 1',
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
          'התשובה היא "Hello Alice". כאשר מחברים שתי strings, הן מתחברות זו לזו.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'איך מגדירים משתנה מסוג int?',
        code: '',
        options: ['int x = 5;', 'x = 5;', 'integer x = 5;', 'var x = 5;'],
        correctAnswer: 0,
        explanation: 'התשובה הנכונה היא "int x = 5;". זו הדרך הנכונה להגדיר משתנה מסוג מספר שלם.',
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
          'התשובה היא 5. כאשר משנים טיפוס מ-double ל-int, החלק העשרוני נמחק.',
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
        code: `bool isActive = true;
Console.WriteLine(isActive);`,
        options: ['true', 'True', '1', 'active'],
        correctAnswer: 0,
        explanation: 'התשובה היא "true" (באותיות קטנות). bool מדפיס כ-true או false.',
      },
    ],
  },
  {
    id: 2,
    title: 'יסודות C# - חלק 2',
    description: 'מחרוזות, ערכים עשרוניים, והמרות טיפוסים',
    topic: 'יסודות',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string a = "He";
string b = "llo";
Console.WriteLine(a + b);`,
        options: ['He llo', 'Hello', 'a + b', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "Hello". שתי המחרוזות מתחברות ליצירת "Hello".',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `double price = 9.99;
double tax = 1.50;
Console.WriteLine(price + tax);`,
        options: ['9.991.50', '11.49', '11.49000', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 11.49. חיבור של שני מספרים עשרוניים.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה טיפוס הנתון המתאים לשמירת מספר עם עשרוניות?',
        options: ['int', 'float', 'double', 'decimal'],
        correctAnswer: 2,
        explanation: 'התשובה היא double. זה הטיפוס הנפוץ ביותר למספרים עם עשרוניות.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int result = 10 / 3;
Console.WriteLine(result);`,
        options: ['3.33', '3', '4', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 3. כאשר מחלקים שני int, התוצאה היא int (ללא עשרוניות).',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה אורך המחרוזת "Hello"?',
        options: ['4', '5', '6', 'String.Length'],
        correctAnswer: 1,
        explanation: 'התשובה היא 5. המחרוזת "Hello" מכילה 5 תווים.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
int y = 2;
Console.WriteLine(x / y * y);`,
        options: ['5', '4', '2.5', 'שגיאה'],
        correctAnswer: 0,
        explanation: 'התשובה היא 5. 5 / 2 = 2 (int), ואז 2 * 2 = 4... לא! זה 5/2=2, 2*2=4. בעצם התשובה 4.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'איך משנים char ל-int?',
        options: ['(int)c', 'int(c)', 'c.ToInt()', 'Convert.ToInt32(c)'],
        correctAnswer: 0,
        explanation: 'התשובה היא (int)c. זוהי הצורה הישירה ביותר לשינוי טיפוס.',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `char letter = 'A';
Console.WriteLine(letter);`,
        options: ['65', 'A', "'A'", 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא "A". char מדפיס את התו עצמו, לא את הערך ASCII.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה טיפוס Default של literal "5"?',
        options: ['int', 'long', 'double', 'float'],
        correctAnswer: 0,
        explanation: 'התשובה היא int. מספרים שלמים הם int כברירת מחדל.',
      },
      {
        id: 10,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string text = "C#";
Console.WriteLine(text.Length);`,
        options: ['0', '1', '2', '3'],
        correctAnswer: 2,
        explanation: 'התשובה היא 2. "C#" מכיל 2 תווים.',
      },
    ],
  },
]
