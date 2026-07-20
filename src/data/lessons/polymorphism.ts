import type { Lesson } from '../../types/lesson'

export const polymorphismLesson: Lesson = {
  topicId: 'polymorphism',
  title: 'פולימורפיזם: אותו קוד, התנהגויות שונות',
  subtitle: 'הפניות מטיפוס בסיס, מחלקות אבסטרקטיות וממשקים — הפסגה של OOP',
  sections: [
    {
      id: 'idea',
      icon: '🎭',
      title: 'הרעיון',
      blocks: [
        {
          kind: 'p',
          text: 'פולימורפיזם פירושו "רב-צורתיות": אותה קריאה למתודה מתנהגת אחרת, לפי סוג האובייקט האמיתי. זה נשמע מופשט — עד שרואים את זה:',
        },
        {
          kind: 'code',
          code: `Animal[] animals = { new Dog(), new Cat(), new Cow() };

foreach (Animal a in animals)
{
    a.MakeSound();     // כל אחד משמיע את הקול שלו!
}
// הב הב!
// מיאו!
// מוווו!`,
        },
        {
          kind: 'p',
          text: 'שימו לב מה אין כאן: אין `if` שבודק איזו חיה זו. הלולאה לא מכירה כלבים או חתולים — היא רק אומרת "תשמיע קול", וכל אובייקט יודע בעצמו מה לעשות.',
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הרווח האמיתי: כשתוסיפו מחר `class Duck : Animal`, הלולאה תעבוד איתה מיד — בלי לשנות שורה אחת בקוד הקיים. זו הסיבה שהעולם עבר ל-OOP.',
        },
      ],
    },
    {
      id: 'base-reference',
      icon: '👆',
      title: 'הפניה מטיפוס הבסיס',
      blocks: [
        {
          kind: 'p',
          text: 'המפתח לפולימורפיזם: משתנה מטיפוס מחלקת הבסיס יכול להחזיק אובייקט של כל מחלקה יורשת. בזמן ריצה, C# בודקת מהו האובייקט **באמת** ומפעילה את הגרסה שלו:',
        },
        {
          kind: 'code',
          code: `Animal a = new Dog();    // חוקי לגמרי: כלב הוא חיה
a.MakeSound();           // הב הב! — הגרסה של Dog`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'אבל שימו לב: דרך משתנה מטיפוס `Animal` אפשר לקרוא רק למה שמוגדר ב-`Animal`. אם ל-`Dog` יש `Fetch()` ייחודית — צריך קודם לבדוק ולהמיר.',
        },
        {
          kind: 'code',
          caption: 'בדיקת טיפוס עם is:',
          code: `foreach (Animal a in animals)
{
    if (a is Dog dog)       // בודק וגם יוצר משתנה מטיפוס Dog
    {
        dog.Fetch();
    }
}`,
        },
      ],
    },
    {
      id: 'abstract',
      icon: '🎨',
      title: 'מחלקות אבסטרקטיות',
      blocks: [
        {
          kind: 'p',
          text: 'מה השטח של "צורה כללית"? אין תשובה — השאלה חסרת מובן. מחלקה `abstract` מתארת בדיוק את זה: מושג שאי אפשר ליצור ממנו אובייקט, שמכריח את היורשות למלא את הפרטים.',
        },
        {
          kind: 'code',
          code: `abstract class Shape
{
    public abstract double Area();      // בלי גוף! חובה לממש

    public void Describe()               // מתודה רגילה — יורשים כרגיל
    {
        Console.WriteLine($"השטח שלי: {Area()}");
    }
}

class Square : Shape
{
    public double Side { get; set; }
    public Square(double side) { Side = side; }

    public override double Area()
    {
        return Side * Side;
    }
}

class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(double r) { Radius = r; }

    public override double Area()
    {
        return Math.PI * Radius * Radius;
    }
}`,
        },
        {
          kind: 'list',
          items: [
            '`new Shape()` — שגיאת קומפילציה. אי אפשר ליצור "צורה כללית"',
            'מתודה `abstract` היא חתימה בלבד; היורשת **חייבת** לממש אותה',
            'מחלקה אבסטרקטית יכולה להכיל גם מתודות רגילות ממומשות',
          ],
        },
      ],
    },
    {
      id: 'interfaces',
      icon: '🔌',
      title: 'ממשקים (Interfaces)',
      blocks: [
        {
          kind: 'p',
          text: 'ממשק הוא חוזה: רשימת יכולות שמחלקה מתחייבת לספק, בלי שום מימוש. השם מתחיל באות `I` לפי המוסכמה.',
        },
        {
          kind: 'code',
          code: `interface IPlayable
{
    void Play();            // בלי גוף, בלי public
}

class Guitar : IPlayable
{
    public void Play()      // במימוש — כן public
    {
        Console.WriteLine("מנגן בגיטרה");
    }
}

class Piano : IPlayable
{
    public void Play()
    {
        Console.WriteLine("מנגן בפסנתר");
    }
}

IPlayable[] instruments = { new Guitar(), new Piano() };
foreach (IPlayable i in instruments)
{
    i.Play();
}`,
        },
        {
          kind: 'p',
          text: 'היתרון הגדול: ב-C# יורשים ממחלקה אחת בלבד — אבל ממשקים אפשר לממש כמה שרוצים:',
        },
        {
          kind: 'code',
          code: `class SmartPiano : IPlayable, IRecordable, IBluetooth
{
    // מחויבת לממש את כל המתודות של שלושת הממשקים
}`,
        },
      ],
    },
    {
      id: 'which',
      icon: '⚖️',
      title: 'מחלקה אבסטרקטית או ממשק?',
      blocks: [
        {
          kind: 'table',
          headers: ['', 'מחלקה אבסטרקטית', 'ממשק'],
          rows: [
            ['היחס', '"הוא סוג של" (is-a)', '"יכול לעשות" (can-do)'],
            ['כמה אפשר', 'אחת בלבד', 'כמה שרוצים'],
            ['קוד משותף', 'כן — מתודות ממומשות ושדות', 'לא (רק חתימות)'],
            ['דוגמה', '`Shape` ➝ `Square`', '`IComparable` ➝ כל דבר שניתן להשוואה'],
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'כלל אצבע: יש קוד משותף אמיתי והיררכיה טבעית? מחלקה אבסטרקטית. רוצים לסמן יכולת שמחלקות לא-קשורות חולקות (רובוט וכלב שניהם "יכולים ללכת")? ממשק.',
        },
      ],
    },
    {
      id: 'summary',
      icon: '📋',
      title: 'סיכום',
      blocks: [
        {
          kind: 'list',
          items: [
            'פולימורפיזם = אותה קריאה, התנהגות לפי הטיפוס האמיתי של האובייקט',
            'משתנה/מערך/פרמטר מטיפוס הבסיס מקבל כל יורש — וזה מייתר שרשראות `if`',
            '`abstract` = מחלקה שאי אפשר ליצור ממנה אובייקט; מתודות אבסטרקטיות חייבות מימוש',
            '`interface` = חוזה יכולות; מחלקה יכולה לממש כמה ממשקים',
            '`is` בודק טיפוס בזמן ריצה כשצריך יכולת ייחודית',
            'המטרה: קוד שנפתח להרחבה בלי להישבר',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הפרויקט הוא הקאפסטון של כל מסלול ה-OOP: מערכת צורות גיאומטריות עם מחלקה אבסטרקטית וממשק. בהצלחה!',
        },
      ],
    },
  ],
}
