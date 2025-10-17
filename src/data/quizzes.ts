import { Quiz } from '../types/quiz'

export const quizzes: Quiz[] = [
  // ========================== BASICS (יסודות) ==========================
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

  // ========================== CONDITIONS (תנאים) ==========================
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

  // ========================== LOOPS (לולאות) ==========================
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

  // ========================== STRINGS (מחרוזות) ==========================
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

  // ========================== ARRAYS (מערכים) ==========================
  {
    id: 8,
    title: 'מערכים - חלק 1',
    description: 'הגדרה, גישה, ו-iteration על מערכים',
    topic: 'מערכים',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] numbers = {10, 20, 30};
Console.WriteLine(numbers[0]);`,
        options: ['0', '10', '20', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 10. numbers[0] הוא האלמנט הראשון.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = {5, 15, 25};
Console.WriteLine(arr[1]);`,
        options: ['1', '5', '15', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 15. arr[1] הוא האלמנט השני.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה יהיה אורך מערך עם 5 אלמנטים?',
        options: ['4', '5', '6', 'בלתי מוגדר'],
        correctAnswer: 1,
        explanation: 'התשובה היא 5.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
Console.WriteLine(arr.Length);`,
        options: ['0', '1', '3', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 3. arr.Length מחזירה את גודל המערך.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה אינדקס האלמנט הראשון?',
        options: ['0', '1', '-1', 'פירסט'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0. אינדקסים מתחילים מ-0.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string[] fruits = {"apple", "banana", "cherry"};
Console.WriteLine(fruits[2]);`,
        options: ['apple', 'banana', 'cherry', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא "cherry". fruits[2] הוא האלמנט השלישי.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה יקרה אם נגשנו לאינדקס שאינו קיים?',
        options: ['יודפס 0', 'יודפס null', 'שגיאת IndexOutOfRangeException', 'כלום'],
        correctAnswer: 2,
        explanation: 'התשובה היא "שגיאת IndexOutOfRangeException".',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] numbers = {1, 2, 3, 4, 5};
foreach (int num in numbers)
{
    Console.WriteLine(num);
}`,
        options: ['1 2 3 4 5', '1\n2\n3\n4\n5', '0 1 2 3 4', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 1 2 3 4 5 בשורות נפרדות.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = {10, 20, 30, 40};
Console.WriteLine(arr[arr.Length - 1]);`,
        options: ['10', '30', '40', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 40. arr.Length - 1 הוא האינדקס של האלמנט האחרון.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'איך יוצרים מערך ריק של 5 אלמנטים?',
        options: [
          'int[] arr = {};',
          'int[] arr = new int[5];',
          'int[] arr = {5};',
          'int[] arr = 5;',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'int[] arr = new int[5];\'.',
      },
    ],
  },

  // ========================== COLLECTIONS (אוספים) ==========================
  {
    id: 9,
    title: 'קולקציות - List ו-Dictionary',
    description: 'שימוש ב-List, Dictionary, Add, Remove וכו\'',
    topic: 'אוספים',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מה ההבדל בין Array ל-List?',
        options: [
          'Array קטן יותר',
          'List יכול להשתנות בגודל, Array לא',
          'List מהיר יותר',
          'אין הבדל',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'List יכול להשתנות בגודל, Array לא\'.',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'איך יוצרים List?',
        options: [
          'List list = {};',
          'List<int> list = new List<int>();',
          'int[] list = new List();',
          'list = [];',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'List<int> list = new List<int>();\'.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה משמש Add בתוך List?',
        options: ['מסיר אלמנט', 'מוסיף אלמנט', 'מחליף אלמנט', 'מפחית אלמנט'],
        correctAnswer: 1,
        explanation: 'התשובה היא \'מוסיף אלמנט\'.',
      },
      {
        id: 4,
        type: 'בחר תשובה',
        question: 'איך מחזקים את כמות האלמנטים ב-List?',
        options: ['list.Length', 'list.Count()', 'list.Size', 'list.Count'],
        correctAnswer: 3,
        explanation: 'התשובה היא \'list.Count\'.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה משמש Dictionary?',
        options: [
          'שמירת זוגות של מפתח-ערך',
          'שמירת רשימה',
          'שמירת מערך',
          'שמירת תווים',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'שמירת זוגות של מפתח-ערך\'.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'איך יוצרים Dictionary?',
        options: [
          'Dictionary dict = {};',
          'Dictionary<string, int> dict = new Dictionary<string, int>();',
          'dict = {}',
          'new dict();',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'Dictionary<string, int> dict = new Dictionary<string, int>();\'.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'איך מוסיפים ערך ל-Dictionary?',
        options: [
          'dict.Add("key", 5);',
          'dict["key"] = 5;',
          'shniihum משניים נכונים',
          'dict.Insert("key", 5);',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'שניהם משניים נכונים\'.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'איך מסירים אלמנט מ-List?',
        options: ['list.Delete(item);', 'list.Remove(item);', 'list.Pop();', 'delete list[0];'],
        correctAnswer: 1,
        explanation: 'התשובה היא \'list.Remove(item);\'.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה HashSet?',
        options: [
          'מערך בטוח',
          'אוסף של ערכים ייחודיים ללא סדר',
          'מילון',
          'רשימה מיושרת',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'אוסף של ערכים ייחודיים ללא סדר\'.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה יתרון של List על Array?',
        options: [
          'List מהיר יותר',
          'List יכול להשתנות בגודל',
          'List עובד רק עם מספרים',
          'אין יתרון',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'List יכול להשתנות בגודל\'.',
      },
    ],
  },

  // ========================== CLASSES (מחלקות) ==========================
  {
    id: 10,
    title: 'מחלקות ו-OOP',
    description: 'יסודות OOP, constructors, properties ופעולות',
    topic: 'מחלקות',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מה משמש constructor?',
        options: [
          'לשנות משתנה',
          'לאתחל עצם',
          'להדפיס טקסט',
          'להגדיר מחלקה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'לאתחל עצם\'.',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'מה שם constructor?',
        options: [
          'זהה לשם המתודה',
          'זהה לשם המחלקה',
          '__init__',
          'constructor',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'זהה לשם המחלקה\'.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה משמש property?',
        options: [
          'להפעיל פעולה',
          'לשמור נתונים של עצם',
          'להדפיס טקסט',
          'להגדיר מחלקה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'לשמור נתונים של עצם\'.',
      },
      {
        id: 4,
        type: 'בחר תשובה',
        question: 'מה משמש method?',
        options: [
          'לשנות משתנה',
          'להפעיל פעולה של עצם',
          'להדפיס טקסט',
          'להגדיר מחלקה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'להפעיל פעולה של עצם\'.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה משמש new?',
        options: [
          'להגדיר משתנה',
          'ליצור עצם חדש',
          'להדפיס טקסט',
          'לשנות ערך',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'ליצור עצם חדש\'.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה הם שלושת עמודי OOP?',
        options: [
          'משתנים, מתודות, classes',
          'Encapsulation, Inheritance, Polymorphism',
          'Array, List, Dictionary',
          'if, for, while',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'Encapsulation, Inheritance, Polymorphism\'.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה Encapsulation?',
        options: [
          'הסתרת פרטים וחשיפת ממשק',
          'שימוש במתודות',
          'יצירת מערך',
          'קריאה לפונקציה',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'הסתרת פרטים וחשיפת ממשק\'.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה this?',
        options: [
          'יצירת משתנה',
          'התייחסות לעצם הנוכחי',
          'קריאה למתודה',
          'ערך בריק',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'התייחסות לעצם הנוכחי\'.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה המטרה של getter ו-setter?',
        options: [
          'לשמור נתונים',
          'להפעיל פעולות',
          'לשלוט על גישה ל-properties',
          'להדפיס טקסט',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'לשלוט על גישה ל-properties\'.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה public ו-private?',
        options: [
          'שמות של משתנים',
          'רמות גישה',
          'סוגי לולאות',
          'תנאים לוגיים',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'רמות גישה\'.',
      },
    ],
  },

  // ========================== METHODS (מתודות) ==========================
  {
    id: 11,
    title: 'מתודות - הגדרה וקריאה',
    description: 'יצירת מתודות עם פרמטרים וערכי החזרה',
    topic: 'מתודות',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מה הוא signature של מתודה?',
        options: [
          'שם המתודה בלבד',
          'שם, פרמטרים וסוג החזרה',
          'גוף המתודה',
          'מספר הקוד',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'שם, פרמטרים וסוג החזרה\'.',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'מה משמש return?',
        options: [
          'להדפיס טקסט',
          'להחזיר ערך מ-method',
          'לסיים את התוכנית',
          'ליצור משתנה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'להחזיר ערך מ-method\'.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה void?',
        options: [
          'דוחה',
          'סוג של משתנה',
          'מתודה שלא מחזירה ערך',
          'מחלקה',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'מתודה שלא מחזירה ערך\'.',
      },
      {
        id: 4,
        type: 'בחר תשובה',
        question: 'איך קוראים למתודה?',
        options: [
          'methodName;',
          'methodName();',
          'call methodName;',
          'methodName{}',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'methodName();\'.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה פרמטר?',
        options: [
          'ערך מוחזר',
          'משתנה שמתודה קיבלה',
          'שם המתודה',
          'סוג של משתנה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'משתנה שמתודה קיבלה\'.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה מספר הפרמטרים המקסימלי?',
        options: ['1', '2', '5', 'ללא הגבלה'],
        correctAnswer: 3,
        explanation: 'התשובה היא \'ללא הגבלה\'.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'איך מחזירים מערך מ-method?',
        options: [
          'return array;',
          'int[] = array;',
          'array return;',
          'שלא ניתן',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'return array;\'.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה Overloading?',
        options: [
          'להגדיר מתודה פעמיים',
          'מתודות עם אותו שם אבל פרמטרים שונים',
          'להפעיל מתודה פעמיים',
          'סוג של לולאה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'מתודות עם אותו שם אבל פרמטרים שונים\'.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה Default Parameters?',
        options: [
          'משתנים גלובליים',
          'ערך ברירת מחדל לפרמטר',
          'משתנים מקומיים',
          'משתנים סטטיים',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'ערך ברירת מחדל לפרמטר\'.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה stack overflow?',
        options: [
          'שגיאת זיכרון',
          'קריאה עמוקה מדי של מתודה',
          'מתודה שקוראת לעצמה',
          'שגיאת syntax',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'קריאה עמוקה מדי של מתודה\'.',
      },
    ],
  },

  // ========================== EXCEPTION HANDLING (טיפול בשגיאות) ==========================
  {
    id: 12,
    title: 'טיפול בשגיאות - try/catch',
    description: 'טיפול בשגיאות, exceptions וניקוי משאבים',
    topic: 'טיפול בשגיאות',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מה משמש try block?',
        options: [
          'להגדיר משתנה',
          'לכוסות קוד שעלול להסיב שגיאה',
          'להדפיס טקסט',
          'להגדיר מתודה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'לכוסות קוד שעלול להסיב שגיאה\'.',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'מה משמש catch block?',
        options: [
          'להגדיר משתנה',
          'לטפל בשגיאה',
          'להדפיס טקסט',
          'להגדיר מתודה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'לטפל בשגיאה\'.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה משמש finally block?',
        options: [
          'להגדיר משתנה',
          'לטפל בשגיאה',
          'להפעיל קוד בכל מקרה',
          'להגדיר מתודה',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'להפעיל קוד בכל מקרה\'.',
      },
      {
        id: 4,
        type: 'בחר תשובה',
        question: 'מה throw?',
        options: [
          'להדפיס שגיאה',
          'להשליך exception',
          'להחזיר ערך',
          'להגדיר משתנה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'להשליך exception\'.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה IndexOutOfRangeException?',
        options: [
          'שגיאה בחלוקה',
          'גישה לאינדקס שאינו קיים',
          'אתחול שגוי',
          'שגיאה בחיבור',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'גישה לאינדקס שאינו קיים\'.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה NullReferenceException?',
        options: [
          'שגיאה בחלוקה',
          'גישה לערך null',
          'אתחול שגוי',
          'שגיאה בחיבור',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'גישה לערך null\'.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה DivideByZeroException?',
        options: [
          'חלוקה באפס',
          'שגיאה בחלוקה במספר',
          'גישה לאינדקס שאינו קיים',
          'אתחול שגוי',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'חלוקה באפס\'.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'האם ניתן לתפוס רק exception מסוג אחד?',
        options: ['כן', 'לא', 'רק Exception הכללי', 'רק ממחלקה אחת'],
        correctAnswer: 0,
        explanation: 'התשובה היא \'כן\'.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה Stacktrace?',
        options: [
          'שם המתודה',
          'רשימה של קריאות המתודות',
          'מספר השגיאה',
          'שם של משתנה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'רשימה של קריאות המתודות\'.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'איך כותבים catch עם סוג ספציפי של exception?',
        options: [
          'catch',
          'catch (Exception e)',
          'catch (ArgumentException e)',
          'catch Exception',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'catch (ArgumentException e)\'.',
      },
    ],
  },

  // ========================== LINQ ==========================
  {
    id: 13,
    title: 'LINQ - שאילתות על נתונים',
    description: 'Where, Select, OrderBy וביצוע שאילתות',
    topic: 'LINQ',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מה LINQ?',
        options: [
          'שפת תכנות',
          'Language Integrated Query - שפה לשאילתות',
          'סוג של מערך',
          'מחלקה',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'Language Integrated Query - שפה לשאילתות\'.',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'מה Where?',
        options: [
          'סידור נתונים',
          'סיכום נתונים',
          'סינון נתונים על פי תנאי',
          'הוספת נתונים',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'סינון נתונים על פי תנאי\'.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה Select?',
        options: [
          'בחירת נתונים',
          'הפוך נתונים לצורה חדשה',
          'סינון נתונים',
          'סידור נתונים',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'הפוך נתונים לצורה חדשה\'.',
      },
      {
        id: 4,
        type: 'בחר תשובה',
        question: 'מה OrderBy?',
        options: [
          'סיכום נתונים',
          'סינון נתונים',
          'סידור נתונים בסדר עולה',
          'הפוך נתונים',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'סידור נתונים בסדר עולה\'.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה OrderByDescending?',
        options: [
          'סיכום נתונים',
          'סינון נתונים',
          'סידור נתונים בסדר יורד',
          'הפוך נתונים',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'סידור נתונים בסדר יורד\'.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה Count?',
        options: [
          'הקטנה של רשימה',
          'סיכום ערכים',
          'ספירת אלמנטים',
          'בחירת ערך',
        ],
        correctAnswer: 2,
        explanation: 'התשובה היא \'ספירת אלמנטים\'.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה First?',
        options: [
          'האלמנט הראשון',
          'האלמנט האחרון',
          'ספירת אלמנטים',
          'סידור אלמנטים',
        ],
        correctAnswer: 0,
        explanation: 'התשובה היא \'האלמנט הראשון\'.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'מה Last?',
        options: [
          'האלמנט הראשון',
          'האלמנט האחרון',
          'ספירת אלמנטים',
          'סידור אלמנטים',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'האלמנט האחרון\'.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה Sum?',
        options: [
          'ספירה',
          'סיכום ערכים',
          'בחירה',
          'סינון',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'סיכום ערכים\'.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מה Average?',
        options: [
          'סיכום ערכים',
          'חישוב הממוצע',
          'בחירה',
          'סינון',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'חישוב הממוצע\'.',
      },
    ],
  },
]
