import type { Quiz } from '../../types/quiz'

// Enum ו-Struct
export const enumsStructsQuizzes: Quiz[] = [
  {
    id: 0,
    title: 'Enum ו-Struct',
    description: 'טיפוסים מותאמים אישית: קבוצות ערכים קבועות ומבנים פשוטים',
    topic: 'Enum ו-Struct',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'מתי כדאי להשתמש ב-enum?',
        options: [
          'כשיש קבוצה קבועה וקטנה של ערכים אפשריים (ימים, כיוונים, מצבים)',
          'כשצריך לשמור מספרים גדולים',
          'כשרוצים לשנות טקסט',
          'כשצריך רשימה שגדלה בזמן ריצה',
        ],
        correctAnswer: 0,
        explanation: 'enum מתאים בדיוק לקבוצות ערכים קבועות מראש — במקום "מספרים קסומים" מקבלים שמות ברורים והקומפיילר שומר שלא תשתמשו בערך לא חוקי.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `enum Day { Sunday, Monday, Tuesday }

Console.WriteLine((int)Day.Tuesday);`,
        options: ['3', '2', 'Tuesday', '0'],
        correctAnswer: 1,
        explanation: 'הערך הראשון ב-enum מקבל 0 כברירת מחדל: Sunday=0, Monday=1, Tuesday=2.',
      },
      {
        id: 3,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `enum Color { Red, Green, Blue }

Color c = Color.Green;
Console.WriteLine(c);`,
        options: ['1', 'Green', 'Color.Green', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'הדפסת ערך enum מציגה את השם שלו — Green — ולא את המספר. זה בדיוק היתרון על מספרים רגילים.',
      },
      {
        id: 4,
        type: 'השלם את הקוד',
        question: 'איך ממירים את המספר 1 לערך enum מטיפוס Color?',
        code: `enum Color { Red, Green, Blue }`,
        options: ['Color c = 1;', 'Color c = (Color)1;', 'Color c = Color.Parse(1);', 'Color c = new Color(1);'],
        correctAnswer: 1,
        explanation: 'ממספר ל-enum ממירים עם casting מפורש: (Color)1 נותן את Green. השמה ישירה של מספר לא מתקמפלת.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה זה struct?',
        options: [
          'סוג של לולאה',
          'טיפוס שמאגד כמה שדות קשורים תחת שם אחד',
          'מתודה מיוחדת',
          'קובץ נפרד בפרויקט',
        ],
        correctAnswer: 1,
        explanation: 'struct מאגד נתונים קשורים — כמו נקודה עם X ו-Y — לטיפוס אחד חדש שאפשר ליצור ממנו משתנים.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `struct Point
{
    public int X;
    public int Y;
}

Point p;
p.X = 4;
p.Y = 9;
Console.WriteLine(p.X + p.Y);`,
        options: ['49', '13', '(4,9)', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'ניגשים לשדות עם נקודה ומחברים כרגיל: 4 + 9 = 13.',
      },
      {
        id: 7,
        type: 'מצא את השגיאה',
        question: 'מה הבעיה בקוד הבא?',
        code: `enum Size { Small, Medium, Large }

Size s = "Small";`,
        options: [
          'אי אפשר להשים מחרוזת לתוך enum — צריך Size.Small',
          'חסר new',
          'enum לא יכול להכיל שלושה ערכים',
          'אין בעיה',
        ],
        correctAnswer: 0,
        explanation: 'ערך enum אינו מחרוזת. כותבים Size s = Size.Small; — בלי גרשיים.',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `enum Level { Easy = 1, Medium = 5, Hard = 10 }

Console.WriteLine((int)Level.Medium);`,
        options: ['1', '5', '2', 'Medium'],
        correctAnswer: 1,
        explanation: 'אפשר לקבוע מספרים מפורשים לערכי enum. Medium הוגדר במפורש כ-5.',
      },
      {
        id: 9,
        type: 'בחר תשובה',
        question: 'איפה מגדירים מתודה של struct?',
        options: [
          'בתוך גוף ה-struct, ליד השדות',
          'רק בתוך Main',
          'בקובץ נפרד חובה',
          'ל-struct אסור שיהיו מתודות',
        ],
        correctAnswer: 0,
        explanation: 'struct יכול להכיל גם שדות וגם מתודות — המתודה נכתבת בתוך גוף ה-struct וניגשת לשדות ישירות.',
      },
      {
        id: 10,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `enum Light { Red, Green }

Light l = Light.Red;
if (l == Light.Red)
{
    Console.WriteLine("עצור");
}
else
{
    Console.WriteLine("סע");
}`,
        options: ['עצור', 'סע', 'Red', 'שגיאת קומפילציה'],
        correctAnswer: 0,
        explanation: 'ערכי enum משווים עם == רגיל. l שווה ל-Light.Red ולכן מודפס "עצור".',
      },
    ],
  },
]
