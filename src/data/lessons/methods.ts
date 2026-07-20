import type { Lesson } from '../../types/lesson'

export const methodsLesson: Lesson = {
  topicId: 'methods',
  title: 'מתודות: קוד שכותבים פעם אחת',
  subtitle: 'הגדרה, פרמטרים, ערכי החזרה ו-overloading — איך מארגנים קוד לחתיכות קטנות ושימושיות',
  sections: [
    {
      id: 'why-methods',
      icon: '🧩',
      title: 'למה מתודות?',
      blocks: [
        {
          kind: 'p',
          text: 'כשאותו קטע קוד חוזר בכמה מקומות — מעתיקים אותו? לא! עוטפים אותו במתודה: נותנים לו שם, ומעכשיו קוראים לו בשורה אחת. מתודה היא "מכונה" קטנה: מקבלת קלט (פרמטרים), עושה עבודה, ולפעמים מחזירה תוצאה.',
        },
        {
          kind: 'p',
          text: 'בעצם אתם כבר משתמשים במתודות מהיום הראשון: `Console.WriteLine` היא מתודה, `int.Parse` היא מתודה — עכשיו תלמדו לכתוב משלכם.',
        },
      ],
    },
    {
      id: 'define-call',
      icon: '⚙️',
      title: 'הגדרה וקריאה',
      blocks: [
        {
          kind: 'code',
          code: `using System;

class Program
{
    static void SayHello()
    {
        Console.WriteLine("שלום לכולם!");
    }

    static void Main()
    {
        SayHello();   // קריאה למתודה
        SayHello();   // ואפשר שוב ושוב
    }
}`,
        },
        {
          kind: 'list',
          items: [
            '`static` — כרגע כל המתודות שלנו יהיו כאלה; במודול מחלקות נבין למה',
            '`void` — המתודה לא מחזירה שום ערך, רק עושה משהו',
            '`SayHello` — שם המתודה; מתחיל באות גדולה לפי המוסכמה ב-C#',
            'המתודה מוגדרת בתוך המחלקה אבל מחוץ ל-`Main`',
          ],
        },
      ],
    },
    {
      id: 'parameters',
      icon: '📥',
      title: 'פרמטרים',
      blocks: [
        {
          kind: 'p',
          text: 'פרמטרים הופכים מתודה לגמישה: במקום להדפיס תמיד אותו דבר, היא מקבלת ערכים ועובדת איתם. כל פרמטר מוגדר עם טיפוס ושם, וכשקוראים למתודה מעבירים ערכים לפי הסדר.',
        },
        {
          kind: 'code',
          code: `static void Greet(string name, int age)
{
    Console.WriteLine($"שלום {name}, את/ה בת/בן {age}");
}

static void Main()
{
    Greet("דנה", 14);
    Greet("יובל", 16);
}`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'אפשר לתת לפרמטר ערך ברירת מחדל: `static void Greet(string name, string greeting = "שלום")`. מי שלא מעביר את הפרמטר השני — מקבל את "שלום" אוטומטית.',
        },
      ],
    },
    {
      id: 'return',
      icon: '📤',
      title: 'ערכי החזרה: return',
      blocks: [
        {
          kind: 'p',
          text: 'מתודה יכולה גם לחשב ולהחזיר תוצאה. במקום `void` כותבים את טיפוס התוצאה, ובגוף המתודה `return` שולח את הערך חזרה למי שקרא.',
        },
        {
          kind: 'code',
          code: `static int Add(int a, int b)
{
    return a + b;
}

static bool IsEven(int number)
{
    return number % 2 == 0;   // הביטוי כבר true/false
}

static void Main()
{
    int result = Add(3, 4);         // result = 7
    Console.WriteLine(IsEven(10));  // True
}`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: '`return` מסיים את המתודה מיד — קוד שנמצא אחריו באותו מסלול לא ירוץ. מתודה שאינה `void` חייבת להחזיר ערך בכל מסלול אפשרי.',
        },
      ],
    },
    {
      id: 'overloading',
      icon: '👯',
      title: 'Overloading: אותו שם, גרסאות שונות',
      blocks: [
        {
          kind: 'p',
          text: 'מותר לכמה מתודות לחלוק שם — כל עוד הפרמטרים שלהן שונים. C# בוחרת אוטומטית את הגרסה המתאימה לפי מה שהעברתם. ככה `Console.WriteLine` יודעת להדפיס גם מספר, גם מחרוזת וגם bool!',
        },
        {
          kind: 'code',
          code: `static int Double(int number)
{
    return number * 2;
}

static string Double(string text)
{
    return text + text;
}

static void Main()
{
    Console.WriteLine(Double(5));      // 10
    Console.WriteLine(Double("ab"));   // abab
}`,
        },
      ],
    },
    {
      id: 'good-methods',
      icon: '✨',
      title: 'איך נראית מתודה טובה?',
      blocks: [
        {
          kind: 'list',
          items: [
            'עושה דבר אחד ועושה אותו טוב — מתודה שעושה שלושה דברים כדאי לפצל',
            'שם שמתאר מה היא עושה: `CalculateAverage`, לא `DoStuff`',
            'מתודות שמחזירות ערך עדיפות על כאלה שמדפיסות — את התוצאה אפשר גם להדפיס, גם לשמור וגם להעביר הלאה',
            'אם אתם מעתיקים-מדביקים קוד — זה סימן שהגיע הזמן למתודה',
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'טעים לדעת: מתודה שקוראת לעצמה נקראת רקורסיבית. זה כלי חזק לבעיות שמוגדרות "בעזרת עצמן" — כמו עצרת: n! = n × (n-1)!. חובה תמיד תנאי עצירה, אחרת התוכנית קורסת.',
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
            'מתודה = קטע קוד עם שם, שמגדירים פעם אחת וקוראים לו כמה שרוצים',
            'פרמטרים מכניסים מידע פנימה; `return` מחזיר תוצאה החוצה',
            '`void` = לא מחזירה כלום; כל טיפוס אחר = חייבת להחזיר ערך',
            'Overloading: אותו שם עם פרמטרים שונים — C# בוחרת לבד',
            'מתודה טובה עושה דבר אחד ויש לה שם ברור',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הפרויקט של המודול: מחשבון קונסולה שלם שבנוי כולו ממתודות קטנות ונקיות!',
        },
      ],
    },
  ],
}
