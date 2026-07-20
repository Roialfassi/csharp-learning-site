import type { Quiz } from '../../types/quiz'

// המרות ואופרטורים
export const conversionQuizzes: Quiz[] = [
  {
    id: 0,
    title: 'המרות ואופרטורים',
    description: 'Parse, casting, חלוקת שלמים, שארית ואופרטורים מקוצרים',
    topic: 'המרות ואופרטורים',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int a = 7;
int b = 2;
Console.WriteLine(a / b);`,
        options: ['3.5', '3', '4', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'חלוקה של שני מספרים שלמים נותנת מספר שלם — החלק העשרוני נחתך. 7/2 = 3.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `Console.WriteLine("5" + 2);`,
        options: ['7', '52', '10', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'כשמחברים מחרוזת עם מספר, המספר הופך למחרוזת ומודבק: "5" + 2 = "52". כדי לחבר מספרית צריך להמיר עם int.Parse.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'איך הופכים את המחרוזת "123" למספר שלם?',
        options: ['(int)"123"', 'int.Parse("123")', '"123".ToInt()', 'int x = "123"'],
        correctAnswer: 1,
        explanation: 'int.Parse היא הדרך להמיר מחרוזת למספר שלם. casting עם (int) עובד רק בין טיפוסים מספריים, לא ממחרוזת.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `double d = 9.99;
int n = (int)d;
Console.WriteLine(n);`,
        options: ['10', '9.99', '9', 'שגיאת קומפילציה'],
        correctAnswer: 2,
        explanation: 'המרה מ-double ל-int חותכת את החלק העשרוני — היא לא מעגלת. 9.99 הופך ל-9.',
      },
      {
        id: 5,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `Console.WriteLine(17 % 5);`,
        options: ['3', '3.4', '2', '0'],
        correctAnswer: 2,
        explanation: 'האופרטור % מחזיר את השארית: 17 = 3*5 + 2, ולכן השארית היא 2.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int x = 5;
x += 3;
x *= 2;
Console.WriteLine(x);`,
        options: ['16', '11', '13', '10'],
        correctAnswer: 0,
        explanation: 'x += 3 נותן 8, ואז x *= 2 נותן 16. האופרטורים המקוצרים מבצעים את הפעולה ושומרים חזרה במשתנה.',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int count = 7;
count++;
count++;
count--;
Console.WriteLine(count);`,
        options: ['7', '8', '9', '10'],
        correctAnswer: 1,
        explanation: 'שתי הגדלות (9) ואז הקטנה אחת: 7+1+1-1 = 8.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'איזו המרה מתבצעת אוטומטית (בלי לכתוב casting)?',
        options: ['double ל-int', 'int ל-double', 'string ל-int', 'double ל-string'],
        correctAnswer: 1,
        explanation: 'מ-int ל-double אין אובדן מידע (5 הופך ל-5.0), ולכן ההמרה אוטומטית. בכיוון ההפוך חייבים (int) כי עלול להיחתך מידע.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int a = 10;
double result = (double)a / 4;
Console.WriteLine(result);`,
        options: ['2', '2.5', '3', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'בזכות ההמרה ל-double, החלוקה היא עשרונית: 10.0 / 4 = 2.5. בלי ההמרה היינו מקבלים 2.',
      },
      {
        id: 10,
        type: 'מצא את השגיאה',
        question: 'מה הבעיה בקוד הבא?',
        code: `string input = Console.ReadLine();
int number = input * 2;`,
        options: [
          'אי אפשר להכפיל מחרוזת במספר — צריך קודם int.Parse',
          'חסר סימן ; בסוף',
          'ReadLine לא קיימת',
          'אין שום בעיה',
        ],
        correctAnswer: 0,
        explanation: 'ReadLine מחזירה string, ואי אפשר לעשות חשבון עם מחרוזת. צריך: int number = int.Parse(input) * 2.',
      },
    ],
  },
]
