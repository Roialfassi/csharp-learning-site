import type { Exercise } from '../../types/exercise'

// פולימורפיזם
export const polymorphismExercises: Exercise[] = [
  {
    id: 0,
    title: 'הפניה מטיפוס הבסיס',
    description: 'נתונות Animal (עם MakeSound virtual) ו-Dog שדורסת אותה. צרו משתנה מטיפוס Animal שמחזיק אובייקט Dog והפעילו MakeSound. איזו גרסה תרוץ?',
    difficulty: 'בינוני',
    topic: 'פולימורפיזם',
    starterCode: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("קול כללי");
    }
}

class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("הב הב!");
    }
}

class Program
{
    static void Main()
    {
        // Animal a = new Dog(); והפעילו MakeSound
    }
}`,
    solution: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("קול כללי");
    }
}

class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("הב הב!");
    }
}

class Program
{
    static void Main()
    {
        Animal a = new Dog();
        a.MakeSound();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'הב הב!', description: 'הטיפוס האמיתי קובע — לא טיפוס המשתנה' }],
    hints: ['מותר להשים אובייקט של מחלקה יורשת למשתנה מטיפוס הבסיס', 'C# בודקת בזמן ריצה מה האובייקט האמיתי', 'זה הלב של פולימורפיזם!'],
  },
  {
    id: 0,
    title: 'מערך פולימורפי',
    description: 'צרו מערך מטיפוס Animal שמכיל Dog, Cat ו-Animal רגיל. עברו עליו בלולאה והפעילו MakeSound על כל אחד',
    difficulty: 'בינוני',
    topic: 'פולימורפיזם',
    starterCode: `using System;

class Animal
{
    public virtual void MakeSound() { Console.WriteLine("קול כללי"); }
}
class Dog : Animal
{
    public override void MakeSound() { Console.WriteLine("הב הב!"); }
}
class Cat : Animal
{
    public override void MakeSound() { Console.WriteLine("מיאו!"); }
}

class Program
{
    static void Main()
    {
        // מערך Animal[] עם כלב, חתול וחיה, ולולאה שמשמיעה את כולם
    }
}`,
    solution: `using System;

class Animal
{
    public virtual void MakeSound() { Console.WriteLine("קול כללי"); }
}
class Dog : Animal
{
    public override void MakeSound() { Console.WriteLine("הב הב!"); }
}
class Cat : Animal
{
    public override void MakeSound() { Console.WriteLine("מיאו!"); }
}

class Program
{
    static void Main()
    {
        Animal[] animals = { new Dog(), new Cat(), new Animal() };
        foreach (Animal a in animals)
        {
            a.MakeSound();
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'הב הב!\nמיאו!\nקול כללי', description: 'לולאה אחת, שלוש התנהגויות' }],
    hints: ['מערך מטיפוס Animal יכול להכיל כל מי שיורש מ-Animal', 'הלולאה זהה לכולם — אבל כל אובייקט מגיב אחרת', 'זה החיסכון הגדול של פולימורפיזם'],
  },
  {
    id: 0,
    title: 'מתודה שמקבלת טיפוס בסיס',
    description: 'כתבו מתודה סטטית PlaySound שמקבלת Animal ומפעילה עליו MakeSound. קראו לה עם Dog ואז עם Cat',
    difficulty: 'בינוני',
    topic: 'פולימורפיזם',
    starterCode: `using System;

class Animal
{
    public virtual void MakeSound() { Console.WriteLine("קול כללי"); }
}
class Dog : Animal
{
    public override void MakeSound() { Console.WriteLine("הב הב!"); }
}
class Cat : Animal
{
    public override void MakeSound() { Console.WriteLine("מיאו!"); }
}

class Program
{
    // כתבו כאן את PlaySound

    static void Main()
    {
        // קראו לה עם כלב ואז עם חתול
    }
}`,
    solution: `using System;

class Animal
{
    public virtual void MakeSound() { Console.WriteLine("קול כללי"); }
}
class Dog : Animal
{
    public override void MakeSound() { Console.WriteLine("הב הב!"); }
}
class Cat : Animal
{
    public override void MakeSound() { Console.WriteLine("מיאו!"); }
}

class Program
{
    static void PlaySound(Animal animal)
    {
        animal.MakeSound();
    }

    static void Main()
    {
        PlaySound(new Dog());
        PlaySound(new Cat());
    }
}`,
    testCases: [{ input: '', expectedOutput: 'הב הב!\nמיאו!', description: 'מתודה אחת עובדת עם כל סוג' }],
    hints: ['הפרמטר מטיפוס Animal מקבל כל יורש', 'לא צריך מתודה נפרדת לכל סוג חיה', 'ואם נוסיף Bird מחר — המתודה תעבוד גם איתו בלי שינוי'],
  },
  {
    id: 0,
    title: 'מחלקה אבסטרקטית',
    description: 'הפכו את Shape למחלקה abstract עם מתודה abstract בשם Area. צרו Square שיורשת ומממשת אותה (צלע בריבוע). הדפיסו את השטח של ריבוע בעל צלע 4',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

// הפכו ל-abstract עם מתודת Area אבסטרקטית
class Shape
{
}

// Square שיורשת ומממשת את Area

class Program
{
    static void Main()
    {
        // צרו ריבוע עם צלע 4 והדפיסו את שטחו
    }
}`,
    solution: `using System;

abstract class Shape
{
    public abstract double Area();
}

class Square : Shape
{
    public double Side { get; set; }

    public Square(double side)
    {
        Side = side;
    }

    public override double Area()
    {
        return Side * Side;
    }
}

class Program
{
    static void Main()
    {
        Square s = new Square(4);
        Console.WriteLine(s.Area());
    }
}`,
    testCases: [{ input: '', expectedOutput: '16', description: '4 בריבוע' }],
    hints: ['abstract class לא ניתן ליצור ממנה אובייקט ישירות', 'מתודה abstract היא ללא גוף — רק חתימה עם נקודה-פסיק', 'המחלקה היורשת חייבת לממש אותה עם override'],
  },
  {
    id: 0,
    title: 'שתי צורות, שטח שונה',
    description: 'הוסיפו למחלקה האבסטרקטית Shape גם מחלקה Circle (שטח = PI כפול רדיוס בריבוע). צרו מערך Shape עם ריבוע בצלע 3 ומעגל ברדיוס 1, והדפיסו את השטחים',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

abstract class Shape
{
    public abstract double Area();
}

class Square : Shape
{
    public double Side { get; set; }
    public Square(double side) { Side = side; }
    public override double Area() { return Side * Side; }
}

// הוסיפו את Circle

class Program
{
    static void Main()
    {
        // מערך Shape עם ריבוע 3 ומעגל 1, ולולאה שמדפיסה שטחים
    }
}`,
    solution: `using System;

abstract class Shape
{
    public abstract double Area();
}

class Square : Shape
{
    public double Side { get; set; }
    public Square(double side) { Side = side; }
    public override double Area() { return Side * Side; }
}

class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(double radius) { Radius = radius; }
    public override double Area() { return Math.PI * Radius * Radius; }
}

class Program
{
    static void Main()
    {
        Shape[] shapes = { new Square(3), new Circle(1) };
        foreach (Shape s in shapes)
        {
            Console.WriteLine(s.Area());
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '9\n3.141592653589793', description: 'שטח ריבוע ושטח מעגל' }],
    hints: ['Math.PI הוא הקבוע פאי', 'כל צורה מחשבת שטח בנוסחה משלה', 'הלולאה לא יודעת ולא צריכה לדעת איזו צורה זו'],
  },
  {
    id: 0,
    title: 'הממשק הראשון',
    description: 'הגדירו interface בשם IPlayable עם מתודה Play. צרו מחלקה Guitar שמממשת אותו ומדפיסה "מנגן בגיטרה". צרו גיטרה והפעילו Play',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

// הגדירו כאן את הממשק IPlayable

// צרו את Guitar שמממשת אותו

class Program
{
    static void Main()
    {
        // צרו גיטרה והפעילו Play
    }
}`,
    solution: `using System;

interface IPlayable
{
    void Play();
}

class Guitar : IPlayable
{
    public void Play()
    {
        Console.WriteLine("מנגן בגיטרה");
    }
}

class Program
{
    static void Main()
    {
        Guitar g = new Guitar();
        g.Play();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מנגן בגיטרה', description: 'מימוש ממשק' }],
    hints: ['interface IPlayable { void Play(); } — בלי גוף ובלי public', 'המימוש: class Guitar : IPlayable', 'המתודה במחלקה חייבת להיות public'],
  },
  {
    id: 0,
    title: 'כמה מחלקות, ממשק אחד',
    description: 'צרו גם Piano שמממשת את IPlayable ומדפיסה "מנגן בפסנתר". צרו מערך IPlayable עם גיטרה ופסנתר והפעילו Play על כולם בלולאה',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

interface IPlayable
{
    void Play();
}

class Guitar : IPlayable
{
    public void Play() { Console.WriteLine("מנגן בגיטרה"); }
}

// הוסיפו את Piano

class Program
{
    static void Main()
    {
        // מערך IPlayable ולולאה
    }
}`,
    solution: `using System;

interface IPlayable
{
    void Play();
}

class Guitar : IPlayable
{
    public void Play() { Console.WriteLine("מנגן בגיטרה"); }
}

class Piano : IPlayable
{
    public void Play() { Console.WriteLine("מנגן בפסנתר"); }
}

class Program
{
    static void Main()
    {
        IPlayable[] instruments = { new Guitar(), new Piano() };
        foreach (IPlayable i in instruments)
        {
            i.Play();
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מנגן בגיטרה\nמנגן בפסנתר', description: 'ממשק כטיפוס משותף' }],
    hints: ['אפשר להשתמש בשם הממשק כטיפוס של מערך או משתנה', 'כל מי שמממש את הממשק מתאים', 'הם לא יורשים אחד מהשני — רק חולקים יכולת'],
  },
  {
    id: 0,
    title: 'שני ממשקים במחלקה אחת',
    description: 'הגדירו IPlayable (Play) ו-IRecordable (Record). צרו מחלקה SmartPiano שמממשת את שניהם ומדפיסה "מנגן" ו-"מקליט". הפעילו את שתי המתודות',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

interface IPlayable
{
    void Play();
}

interface IRecordable
{
    void Record();
}

// SmartPiano שמממשת את שניהם

class Program
{
    static void Main()
    {
        // צרו והפעילו את שתי המתודות
    }
}`,
    solution: `using System;

interface IPlayable
{
    void Play();
}

interface IRecordable
{
    void Record();
}

class SmartPiano : IPlayable, IRecordable
{
    public void Play()
    {
        Console.WriteLine("מנגן");
    }

    public void Record()
    {
        Console.WriteLine("מקליט");
    }
}

class Program
{
    static void Main()
    {
        SmartPiano p = new SmartPiano();
        p.Play();
        p.Record();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מנגן\nמקליט', description: 'שני ממשקים במחלקה אחת' }],
    hints: ['מפרידים ממשקים בפסיק: class SmartPiano : IPlayable, IRecordable', 'מירושה אפשר רק מחלקה אחת — אבל ממשקים כמה שרוצים!', 'חייבים לממש את כל המתודות של כל הממשקים'],
  },
  {
    id: 0,
    title: 'בדיקת טיפוס עם is',
    description: 'נתון מערך Animal עם כלב וחתול. עברו בלולאה, והפעילו Fetch (מתודה ייחודית ל-Dog) רק על מי שהוא באמת Dog',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;

class Animal { }
class Dog : Animal
{
    public void Fetch() { Console.WriteLine("מביא את המקל!"); }
}
class Cat : Animal { }

class Program
{
    static void Main()
    {
        Animal[] animals = { new Dog(), new Cat(), new Dog() };
        // הפעילו Fetch רק על כלבים
    }
}`,
    solution: `using System;

class Animal { }
class Dog : Animal
{
    public void Fetch() { Console.WriteLine("מביא את המקל!"); }
}
class Cat : Animal { }

class Program
{
    static void Main()
    {
        Animal[] animals = { new Dog(), new Cat(), new Dog() };
        foreach (Animal a in animals)
        {
            if (a is Dog dog)
            {
                dog.Fetch();
            }
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מביא את המקל!\nמביא את המקל!', description: 'רק שני הכלבים הביאו' }],
    hints: ['האופרטור is בודק אם אובייקט הוא מטיפוס מסוים', 'a is Dog dog גם בודק וגם יוצר משתנה מהטיפוס הנכון', 'החתול פשוט מדולג'],
  },
  {
    id: 0,
    title: 'מערכת תשלומים פולימורפית',
    description: 'הגדירו interface IPayment עם Pay(int amount). צרו CreditCard (מדפיסה "שולם X בכרטיס אשראי") ו-Cash (מדפיסה "שולם X במזומן"). עברו על רשימה ושלמו 100 בכל אמצעי',
    difficulty: 'קשה',
    topic: 'פולימורפיזם',
    starterCode: `using System;
using System.Collections.Generic;

// interface IPayment עם Pay(int amount)
// CreditCard ו-Cash שמממשות אותו

class Program
{
    static void Main()
    {
        // רשימת IPayment ולולאה שמשלמת 100 בכל אחד
    }
}`,
    solution: `using System;
using System.Collections.Generic;

interface IPayment
{
    void Pay(int amount);
}

class CreditCard : IPayment
{
    public void Pay(int amount)
    {
        Console.WriteLine($"שולם {amount} בכרטיס אשראי");
    }
}

class Cash : IPayment
{
    public void Pay(int amount)
    {
        Console.WriteLine($"שולם {amount} במזומן");
    }
}

class Program
{
    static void Main()
    {
        List<IPayment> methods = new List<IPayment> { new CreditCard(), new Cash() };
        foreach (IPayment m in methods)
        {
            m.Pay(100);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'שולם 100 בכרטיס אשראי\nשולם 100 במזומן', description: 'אותה קריאה, מימושים שונים' }],
    hints: ['מתודה בממשק יכולה לקבל פרמטרים', 'כל מחלקה מממשת את Pay בדרכה', 'ככה בנויות מערכות תשלום אמיתיות — מוסיפים Bit או PayPal בלי לגעת בקוד הקיים'],
  },
]
