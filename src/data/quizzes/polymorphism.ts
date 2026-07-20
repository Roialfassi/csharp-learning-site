import type { Quiz } from '../../types/quiz'

// פולימורפיזם
export const polymorphismQuizzes: Quiz[] = [
  {
    id: 0,
    title: 'פולימורפיזם וממשקים',
    description: 'הפניות מטיפוס בסיס, מחלקות אבסטרקטיות, ממשקים ו-is',
    topic: 'פולימורפיזם',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class Animal
{
    public virtual void Sound() { Console.WriteLine("קול כללי"); }
}
class Dog : Animal
{
    public override void Sound() { Console.WriteLine("הב הב"); }
}

Animal a = new Dog();
a.Sound();`,
        options: ['קול כללי', 'הב הב', 'שגיאת קומפילציה', 'לא יודפס כלום'],
        correctAnswer: 1,
        explanation: 'זה לב הפולימורפיזם: הטיפוס האמיתי של האובייקט (Dog) קובע איזו גרסה תרוץ — לא טיפוס המשתנה (Animal).',
      },
      {
        id: 2,
        type: 'בחר תשובה',
        question: 'מה המשמעות של פולימורפיזם?',
        options: [
          'שמחלקה יכולה לרשת מכמה מחלקות',
          'שאותה קריאה למתודה מתנהגת אחרת לפי סוג האובייקט בפועל',
          'שאפשר לתת לשתי מתודות אותו שם',
          'שמשתנה יכול לשנות טיפוס בזמן ריצה',
        ],
        correctAnswer: 1,
        explanation: 'פולימורפיזם ("רב-צורתיות") = אותו קוד, התנהגויות שונות. לולאה אחת על מערך Animal מפעילה קול אחר לכל חיה.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה נכון לגבי מחלקה abstract?',
        options: [
          'אי אפשר ליצור ממנה אובייקט ישירות',
          'אפשר ליצור ממנה אובייקטים כרגיל',
          'היא לא יכולה להכיל מתודות ממומשות',
          'היא חייבת לרשת ממחלקה אחרת',
        ],
        correctAnswer: 0,
        explanation: 'מחלקה אבסטרקטית היא "שלד" — אי אפשר לעשות new עליה. יוצרים אובייקטים רק מהמחלקות היורשות שמימשו את המתודות האבסטרקטיות.',
      },
      {
        id: 4,
        type: 'מצא את השגיאה',
        question: 'מה הבעיה בקוד הבא?',
        code: `abstract class Shape
{
    public abstract double Area();
}

Shape s = new Shape();`,
        options: [
          'אי אפשר ליצור אובייקט ממחלקה abstract',
          'חסר constructor',
          'Area חייבת להיות public',
          'אין בעיה',
        ],
        correctAnswer: 0,
        explanation: 'new Shape() אינו חוקי — מחלקה אבסטרקטית קיימת רק כבסיס לירושה.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה ההבדל העיקרי בין abstract class ל-interface?',
        options: [
          'אין הבדל',
          'ממחלקה אבסטרקטית יורשים אחת בלבד, וממשקים אפשר לממש כמה',
          'ממשק יכול להכיל שדות ומימושים מלאים',
          'מחלקה אבסטרקטית לא יכולה להכיל מתודות',
        ],
        correctAnswer: 1,
        explanation: 'ב-C# יורשים ממחלקה אחת בלבד, אבל מחלקה אחת יכולה לממש כמה ממשקים. ממשק מגדיר "יכולת", מחלקה אבסטרקטית מגדירה "סוג".',
      },
      {
        id: 6,
        type: 'השלם את הקוד',
        question: 'איך מגדירים ממשק עם מתודה Play?',
        options: [
          'interface IPlayable { void Play(); }',
          'interface IPlayable { public void Play() { } }',
          'class IPlayable { void Play(); }',
          'abstract IPlayable { void Play(); }',
        ],
        correctAnswer: 0,
        explanation: 'מתודות בממשק הן חתימות בלבד — בלי גוף ובלי מגביל גישה (הן ציבוריות אוטומטית).',
      },
      {
        id: 7,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `interface IShape { double Area(); }

class Square : IShape
{
    public double Area() { return 16; }
}

IShape s = new Square();
Console.WriteLine(s.Area());`,
        options: ['שגיאת קומפילציה', '16', '0', 'Square'],
        correctAnswer: 1,
        explanation: 'אפשר להשתמש בשם הממשק כטיפוס משתנה. הקריאה מנותבת למימוש של Square ומחזירה 16.',
      },
      {
        id: 8,
        type: 'בחר תשובה',
        question: 'כמה ממשקים יכולה מחלקה אחת לממש?',
        options: ['אחד בלבד', 'שניים לכל היותר', 'כמה שרוצים', 'אף אחד — רק לרשת ממחלקה'],
        correctAnswer: 2,
        explanation: 'זה היתרון הגדול של ממשקים: class Robot : IWalkable, ISpeakable, IChargeable — כמה יכולות שרוצים, בזמן שירושה מוגבלת למחלקה אחת.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class Animal { }
class Dog : Animal { }

Animal a = new Dog();
Console.WriteLine(a is Dog);
Console.WriteLine(a is Animal);`,
        options: ['True ואז True', 'True ואז False', 'False ואז True', 'False ואז False'],
        correctAnswer: 0,
        explanation: 'האובייקט הוא Dog, ומאחר ש-Dog יורשת מ-Animal — הוא גם Animal. שתי הבדיקות מחזירות True.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'למה פולימורפיזם שימושי?',
        options: [
          'הוא מקצר את זמן הריצה',
          'אפשר לכתוב קוד שעובד עם סוגים חדשים בלי לשנות אותו',
          'הוא חוסך זיכרון',
          'הוא מונע שגיאות תחביר',
        ],
        correctAnswer: 1,
        explanation: 'הערך האמיתי: לולאה שמדפיסה מערך צורות תעבוד גם על משולש שתוסיפו מחר — בלי שינוי שורה אחת בקוד הקיים.',
      },
    ],
  },
]
