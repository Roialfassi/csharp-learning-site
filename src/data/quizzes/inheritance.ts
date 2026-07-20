import type { Quiz } from '../../types/quiz'

// ירושה
export const inheritanceQuizzes: Quiz[] = [
  {
    id: 0,
    title: 'ירושה',
    description: 'מחלקות בסיס ויורשות, virtual, override, base ו-protected',
    topic: 'ירושה',
    questions: [
      {
        id: 1,
        type: 'בחר תשובה',
        question: 'איך מסמנים ש-Dog יורשת מ-Animal?',
        options: ['class Dog extends Animal', 'class Dog : Animal', 'class Dog inherits Animal', 'class Dog(Animal)'],
        correctAnswer: 1,
        explanation: 'ב-C# מסמנים ירושה עם נקודתיים: class Dog : Animal. (extends היא התחביר של Java.)',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class Animal
{
    public void Eat() { Console.WriteLine("אוכל"); }
}
class Dog : Animal { }

new Dog().Eat();`,
        options: ['שגיאת קומפילציה — ל-Dog אין Eat', 'אוכל', 'לא יודפס כלום', 'הב הב'],
        correctAnswer: 1,
        explanation: 'Dog יורשת את כל המתודות הציבוריות של Animal — גם אם גוף המחלקה ריק לגמרי.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה תפקיד המילה virtual?',
        options: [
          'מסמנת שהמתודה לא ניתנת לשימוש',
          'מסמנת שמותר למחלקה יורשת לדרוס את המתודה',
          'הופכת את המתודה לסטטית',
          'מוחקת את המתודה בזמן ריצה',
        ],
        correctAnswer: 1,
        explanation: 'virtual במחלקת הבסיס אומרת "מותר לרשת ולשנות אותי". בלעדיה, המחלקה היורשת לא יכולה לעשות override.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class Animal
{
    public virtual void Sound() { Console.WriteLine("קול כללי"); }
}
class Cat : Animal
{
    public override void Sound() { Console.WriteLine("מיאו"); }
}

new Cat().Sound();`,
        options: ['קול כללי', 'מיאו', 'קול כללי ואז מיאו', 'שגיאת קומפילציה'],
        correctAnswer: 1,
        explanation: 'הגרסה שנדרסה במחלקה היורשת גוברת. מודפס רק "מיאו".',
      },
      {
        id: 5,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class Animal
{
    public virtual void Sound() { Console.WriteLine("קול כללי"); }
}
class Cat : Animal
{
    public override void Sound()
    {
        base.Sound();
        Console.WriteLine("מיאו");
    }
}

new Cat().Sound();`,
        options: ['מיאו', 'קול כללי', 'קול כללי ואז מיאו', 'מיאו ואז קול כללי'],
        correctAnswer: 2,
        explanation: 'base.Sound() מפעילה קודם את גרסת מחלקת האב, ורק אז ממשיך הקוד של Cat — כך מרחיבים התנהגות במקום להחליף אותה.',
      },
      {
        id: 6,
        type: 'בחר תשובה',
        question: 'מה ההבדל בין private ל-protected?',
        options: [
          'אין הבדל',
          'private נגיש רק במחלקה עצמה; protected נגיש גם למחלקות שיורשות ממנה',
          'protected נגיש לכולם',
          'private נגיש למחלקות יורשות',
        ],
        correctAnswer: 1,
        explanation: 'protected הוא "אמצע הדרך": מוסתר מהעולם החיצון, אבל פתוח למחלקות היורשות. זו בדיוק המטרה שלו בירושה.',
      },
      {
        id: 7,
        type: 'השלם את הקוד',
        question: 'איך constructor של Dog מעביר את השם ל-constructor של Animal?',
        code: `class Animal
{
    public Animal(string name) { }
}
class Dog : Animal
{
    public Dog(string name) ??? { }
}`,
        options: [': base(name)', ': Animal(name)', '=> base(name)', 'base.Animal(name)'],
        correctAnswer: 0,
        explanation: 'התחביר הוא : base(name) אחרי חתימת ה-constructor. ה-constructor של מחלקת האב רץ ראשון.',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `class A
{
    public A() { Console.WriteLine("A"); }
}
class B : A
{
    public B() { Console.WriteLine("B"); }
}

new B();`,
        options: ['B בלבד', 'A בלבד', 'A ואז B', 'B ואז A'],
        correctAnswer: 2,
        explanation: 'ה-constructor של מחלקת הבסיס רץ תמיד לפני זה של המחלקה היורשת — קודם "A" ואז "B".',
      },
      {
        id: 9,
        type: 'מצא את השגיאה',
        question: 'מה הבעיה בקוד הבא?',
        code: `class Animal
{
    public void Sound() { Console.WriteLine("קול"); }
}
class Dog : Animal
{
    public override void Sound() { Console.WriteLine("הב"); }
}`,
        options: [
          'Sound במחלקת הבסיס אינה virtual — אי אפשר לדרוס אותה',
          'חסר constructor',
          'Dog לא יכולה לרשת מ-Animal',
          'אין בעיה',
        ],
        correctAnswer: 0,
        explanation: 'override דורש שהמתודה במחלקת הבסיס תסומן virtual (או abstract). בלי זה — שגיאת קומפילציה.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'מתי כדאי להשתמש בירושה?',
        options: [
          'תמיד, לכל מחלקה',
          'כשיש קשר אמיתי של "הוא סוג של" — כלב הוא סוג של חיה',
          'כשרוצים לחסוך שורות קוד בלבד',
          'כשיש שתי מחלקות עם אותו שם',
        ],
        correctAnswer: 1,
        explanation: 'ירושה מתאימה ליחס "is-a": כלב הוא חיה, מנהל הוא עובד. אם היחס הוא "has-a" (למכונית יש מנוע) — עדיפה הרכבה.',
      },
    ],
  },
]
