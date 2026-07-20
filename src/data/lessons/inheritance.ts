import type { Lesson } from '../../types/lesson'

export const inheritanceLesson: Lesson = {
  topicId: 'inheritance',
  title: 'ירושה: לבנות על מה שכבר קיים',
  subtitle: 'מחלקות שיורשות מחלקות — virtual, override, base ו-protected',
  sections: [
    {
      id: 'why',
      icon: '🌳',
      title: 'למה ירושה?',
      blocks: [
        {
          kind: 'p',
          text: 'נניח שאתם בונים משחק עם כלב, חתול וציפור. לכל אחד יש שם, גיל ויכולת לאכול ולישון. תעתיקו את אותו קוד שלוש פעמים? ואם תרצו לתקן באג — בשלושה מקומות?',
        },
        {
          kind: 'p',
          text: 'ירושה פותרת בדיוק את זה: כותבים מחלקת בסיס אחת (`Animal`) עם כל המשותף, וכל מחלקה יורשת (`Dog`, `Cat`) מקבלת הכל אוטומטית ומוסיפה רק את הייחודי לה.',
        },
        {
          kind: 'code',
          code: `class Animal
{
    public string Name { get; set; }

    public void Eat()
    {
        Console.WriteLine($"{Name} אוכל...");
    }
}

class Dog : Animal          // הנקודתיים = ירושה
{
    public void Bark()      // תוספת ייחודית לכלב
    {
        Console.WriteLine("הב הב!");
    }
}

Dog rex = new Dog();
rex.Name = "רקסי";          // ירש מ-Animal
rex.Eat();                  // ירש מ-Animal
rex.Bark();                 // משלו`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'המבחן לירושה נכונה הוא יחס "is-a": כלב **הוא** חיה ✓. מנהל **הוא** עובד ✓. אבל מכונית **אינה** מנוע — למכונית **יש** מנוע, וזה מקרה של הרכבה, לא ירושה.',
        },
      ],
    },
    {
      id: 'terms',
      icon: '📖',
      title: 'המונחים',
      blocks: [
        {
          kind: 'table',
          headers: ['מונח', 'פירוש'],
          rows: [
            ['מחלקת בסיס (base / parent)', 'המחלקה שממנה יורשים — `Animal`'],
            ['מחלקה יורשת (derived / child)', 'המחלקה שיורשת — `Dog`'],
            ['`:`', 'סימן הירושה: `class Dog : Animal`'],
            ['`base`', 'מילת מפתח לגישה לגרסת מחלקת האב'],
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'ב-C# מחלקה יכולה לרשת ממחלקה אחת בלבד — אבל אפשר שרשרת: `Dog : Mammal` ו-`Mammal : Animal`. הכלב מקבל הכל, מכל הרמות.',
        },
      ],
    },
    {
      id: 'override',
      icon: '🔄',
      title: 'virtual ו-override',
      blocks: [
        {
          kind: 'p',
          text: 'לפעמים המחלקה היורשת צריכה לעשות משהו אחרת. כלב לא "משמיע קול כללי" — הוא נובח. מחלקת הבסיס מסמנת מתודה כ-`virtual` ("מותר לשנות אותי"), והיורשת דורסת עם `override`.',
        },
        {
          kind: 'code',
          code: `class Animal
{
    public virtual void MakeSound()      // מותר לדרוס
    {
        Console.WriteLine("משמיע קול");
    }
}

class Cat : Animal
{
    public override void MakeSound()     // דורסים
    {
        Console.WriteLine("מיאו!");
    }
}

new Cat().MakeSound();   // מיאו!`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'בלי `virtual` במחלקת הבסיס — `override` לא מתקמפל. שתי המילים תמיד באות בזוג.',
        },
        {
          kind: 'p',
          text: 'רוצים להרחיב במקום להחליף? `base` מפעילה את הגרסה המקורית ואז מוסיפה:',
        },
        {
          kind: 'code',
          code: `public override void MakeSound()
{
    base.MakeSound();                // "משמיע קול"
    Console.WriteLine("מיאו!");      // ואז שלנו
}`,
        },
      ],
    },
    {
      id: 'constructors',
      icon: '🔨',
      title: 'Constructors בירושה',
      blocks: [
        {
          kind: 'p',
          text: 'כשנוצר אובייקט של מחלקה יורשת, ה-constructor של הבסיס רץ **ראשון** — הגיוני, כי צריך קודם לבנות את החלק הכללי. מעבירים לו ערכים עם `: base(...)`:',
        },
        {
          kind: 'code',
          code: `class Animal
{
    public string Name { get; set; }

    public Animal(string name)
    {
        this.Name = name;
    }
}

class Dog : Animal
{
    public string Breed { get; set; }

    public Dog(string name, string breed) : base(name)
    {
        this.Breed = breed;
    }
}

Dog d = new Dog("רקסי", "לברדור");`,
        },
      ],
    },
    {
      id: 'protected',
      icon: '🚪',
      title: 'protected: הרשאה שלישית',
      blocks: [
        {
          kind: 'p',
          text: 'הכרנו `public` (פתוח לכולם) ו-`private` (סגור לגמרי). בירושה נכנס שחקן שלישי: `protected` — סגור לעולם החיצון, אבל פתוח למחלקות היורשות.',
        },
        {
          kind: 'table',
          headers: ['מגביל', 'המחלקה עצמה', 'מחלקות יורשות', 'קוד חיצוני'],
          rows: [
            ['`public`', '✓', '✓', '✓'],
            ['`protected`', '✓', '✓', '✗'],
            ['`private`', '✓', '✗', '✗'],
          ],
        },
        {
          kind: 'code',
          code: `class Animal
{
    protected int energy = 100;    // היורשות יוכלו לגעת
}

class Dog : Animal
{
    public void Run()
    {
        energy -= 30;              // מותר! protected
        Console.WriteLine(energy);
    }
}`,
        },
      ],
    },
    {
      id: 'object',
      icon: '🧩',
      title: 'כולם יורשים מ-object',
      blocks: [
        {
          kind: 'p',
          text: 'עובדה מפתיעה: כל מחלקה ב-C# יורשת בסתר ממחלקה בשם `object`. משם מגיעה המתודה `ToString()` — וכשדורסים אותה, גם `Console.WriteLine` מתחילה להשתמש בגרסה שלנו:',
        },
        {
          kind: 'code',
          code: `class Point
{
    public int X { get; set; }
    public int Y { get; set; }

    public override string ToString()
    {
        return $"({X},{Y})";
    }
}

Point p = new Point { X = 3, Y = 4 };
Console.WriteLine(p);   // (3,4) — קוראת ל-ToString שלנו!`,
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
            '`class Dog : Animal` — Dog מקבלת את כל מה שיש ל-Animal ומוסיפה משלה',
            'ירושה מתאימה ליחס "is-a"; ל-"has-a" מתאימה הרכבה',
            '`virtual` + `override` = המחלקה היורשת משנה התנהגות; `base` = הרחבה במקום החלפה',
            'ה-constructor של הבסיס רץ ראשון; מעבירים לו ערכים עם `: base(...)`',
            '`protected` = פתוח ליורשות, סגור לעולם',
            'כולם יורשים מ-`object` — דריסת `ToString()` משפרת כל הדפסה',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט תבנו צי רכבים שלם: מחלקת בסיס אחת וכמה סוגי רכבים שיורשים ומתמחים!',
        },
      ],
    },
  ],
}
