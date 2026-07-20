import type { Quiz } from '../../types/quiz'

// ערך מול הפניה
export const valueReferenceQuizzes: Quiz[] = [
  {
    id: 0,
    title: 'ערך מול הפניה',
    description: 'טיפוסי ערך, טיפוסי הפניה, null, ref ו-out',
    topic: 'ערך מול הפניה',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int a = 5;
int b = a;
b = 10;
Console.WriteLine(a);`,
        options: ['10', '5', '15', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'int הוא טיפוס ערך — b קיבל עותק של הערך 5. שינוי של b לא משפיע על a.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] first = { 1, 2, 3 };
int[] second = first;
second[0] = 99;
Console.WriteLine(first[0]);`,
        options: ['1', '99', '0', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'מערך הוא טיפוס הפניה — second ו-first מצביעים לאותו מערך בזיכרון, ולכן שינוי דרך second נראה גם דרך first.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'אילו מהטיפוסים הבאים הם טיפוסי ערך (value types)?',
        options: ['מערכים ומחרוזות', 'int, double, bool ו-struct', 'רק string', 'כל הטיפוסים ב-C#'],
        correctAnswer: 1,
        explanation: 'הטיפוסים הפרימיטיביים (int, double, bool, char) ו-struct הם טיפוסי ערך — השמה מעתיקה את התוכן. מערכים, מחרוזות ומחלקות הם טיפוסי הפניה.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `static void Change(int n)
{
    n = 100;
}

static void Main()
{
    int x = 7;
    Change(x);
    Console.WriteLine(x);
}`,
        options: ['100', '7', '107', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'פרמטרים עוברים by value: המתודה קיבלה עותק של 7. השינוי בתוך המתודה לא נוגע ב-x המקורי.',
      },
      {
        id: 5,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `static void Change(ref int n)
{
    n = 100;
}

static void Main()
{
    int x = 7;
    Change(ref x);
    Console.WriteLine(x);
}`,
        options: ['7', '100', '0', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'עם ref המתודה מקבלת גישה למשתנה המקורי עצמו — לא לעותק. לכן x באמת השתנה ל-100.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה המשמעות של null?',
        options: [
          'הפניה שלא מצביעה לשום אובייקט',
          'המספר 0',
          'מחרוזת ריקה ""',
          'שגיאת קומפילציה',
        ],
        correctAnswer: 0,
        explanation: 'null אומר "אין כאן כלום" — ההפניה לא מצביעה לשום דבר. שימו לב: זה שונה מ-0 וממחרוזת ריקה!',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'מה יקרה בהרצת הקוד הבא?',
        code: `string name = null;
Console.WriteLine(name.Length);`,
        options: [
          'יודפס 0',
          'התוכנית תקרוס עם NullReferenceException',
          'יודפס null',
          'שגיאת קומפילציה',
        ],
        correctAnswer: 1,
        explanation: 'אי אפשר לקרוא למתודה או property על הפניה שהיא null — התוכנית קורסת עם NullReferenceException, השגיאה המפורסמת בעולם התכנות.',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `struct Point { public int X; }

Point p1;
p1.X = 3;
Point p2 = p1;
p2.X = 50;
Console.WriteLine(p1.X);`,
        options: ['50', '3', '53', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'struct הוא טיפוס ערך — p2 = p1 יצר עותק מלא ועצמאי. שינוי של p2 לא נוגע ב-p1.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'מה היתרון של int.TryParse על int.Parse?',
        options: [
          'TryParse מהירה יותר',
          'TryParse לא קורסת על קלט לא תקין — היא מחזירה false',
          'TryParse יודעת להמיר גם אותיות',
          'אין הבדל',
        ],
        correctAnswer: 1,
        explanation: 'Parse קורסת כשהמחרוזת אינה מספר. TryParse מחזירה bool שאומר אם ההמרה הצליחה, והמספר עצמו חוזר דרך פרמטר out — בלי קריסות.',
      },
      {
        id: 10,
        type: 'מצא את השגיאה',
        question: 'רוצים להעתיק מערך כך שהמקור לא יושפע משינויים בעותק. מה הבעיה בקוד?',
        code: `int[] original = { 1, 2, 3 };
int[] copy = original;
copy[0] = 99;`,
        options: [
          'copy = original מעתיק רק את ההפניה — שניהם אותו מערך; צריך מערך חדש והעתקה איבר-איבר',
          'חסר new int[3]',
          'אי אפשר לשנות איברי מערך',
          'אין בעיה',
        ],
        correctAnswer: 0,
        explanation: 'השמת מערך מעתיקה את הכתובת, לא את התוכן. העתקה אמיתית: ליצור מערך חדש ולהעתיק בלולאה (או עם Array.Copy).',
      },
    ],
  },
]
