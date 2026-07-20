import type { Exercise } from '../../types/exercise'

// ירושה
export const inheritanceExercises: Exercise[] = [
  {
    id: 0,
    title: 'הירושה הראשונה',
    description: 'נתונה מחלקה Animal עם מתודה Eat. צרו מחלקה Dog שיורשת ממנה, צרו כלב והפעילו את Eat — בלי לכתוב אותה מחדש!',
    difficulty: 'בינוני',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    public void Eat()
    {
        Console.WriteLine("אוכל...");
    }
}

// צרו כאן את Dog שיורשת מ-Animal

class Program
{
    static void Main()
    {
        // צרו כלב והפעילו Eat
    }
}`,
    solution: `using System;

class Animal
{
    public void Eat()
    {
        Console.WriteLine("אוכל...");
    }
}

class Dog : Animal
{
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Eat();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אוכל...', description: 'הכלב ירש את היכולת לאכול' }],
    hints: ['סימן הירושה הוא נקודתיים: class Dog : Animal', 'Dog מקבל אוטומטית את כל מה שיש ל-Animal', 'גם מחלקה ריקה לגמרי יורשת הכל'],
  },
  {
    id: 0,
    title: 'הרחבת מחלקת הבסיס',
    description: 'הוסיפו למחלקה Dog (שיורשת מ-Animal) מתודה משלה בשם Bark שמדפיסה "הב הב!". הפעילו גם Eat וגם Bark',
    difficulty: 'בינוני',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    public void Eat()
    {
        Console.WriteLine("אוכל...");
    }
}

class Dog : Animal
{
    // הוסיפו את Bark
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        // הפעילו את שתי המתודות
    }
}`,
    solution: `using System;

class Animal
{
    public void Eat()
    {
        Console.WriteLine("אוכל...");
    }
}

class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("הב הב!");
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Eat();
        dog.Bark();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אוכל...\nהב הב!', description: 'מתודה מורשת ומתודה חדשה' }],
    hints: ['מחלקה יורשת יכולה להוסיף יכולות משלה', 'Bark קיימת רק ב-Dog, לא ב-Animal', 'הכלב יודע לעשות את שניהם'],
  },
  {
    id: 0,
    title: 'ירושת properties',
    description: 'צרו מחלקה Vehicle עם property בשם Brand, ומחלקה Car שיורשת ממנה ומוסיפה property בשם Doors. צרו מכונית "טויוטה" עם 4 דלתות והדפיסו את שניהם',
    difficulty: 'בינוני',
    topic: 'ירושה',
    starterCode: `using System;

class Vehicle
{
    public string Brand { get; set; }
}

// צרו את Car עם property נוסף

class Program
{
    static void Main()
    {
        // צרו מכונית והדפיסו מותג ואז מספר דלתות
    }
}`,
    solution: `using System;

class Vehicle
{
    public string Brand { get; set; }
}

class Car : Vehicle
{
    public int Doors { get; set; }
}

class Program
{
    static void Main()
    {
        Car car = new Car();
        car.Brand = "טויוטה";
        car.Doors = 4;
        Console.WriteLine(car.Brand);
        Console.WriteLine(car.Doors);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'טויוטה\n4', description: 'property מורש ו-property חדש' }],
    hints: ['Car מקבל את Brand בירושה — לא צריך להגדיר מחדש', 'Doors שייך רק ל-Car', 'שניהם נגישים דרך אובייקט ה-Car'],
  },
  {
    id: 0,
    title: 'virtual ו-override',
    description: 'במחלקה Animal יש מתודה virtual בשם MakeSound שמדפיסה "משמיע קול". דרסו אותה ב-Cat כך שתדפיס "מיאו!". הפעילו על חתול',
    difficulty: 'בינוני',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("משמיע קול");
    }
}

class Cat : Animal
{
    // דרסו את MakeSound
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat();
        cat.MakeSound();
    }
}`,
    solution: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("משמיע קול");
    }
}

class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("מיאו!");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat();
        cat.MakeSound();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מיאו!', description: 'הגרסה של החתול גברה' }],
    hints: ['במחלקת הבסיס: virtual — "מותר לדרוס אותי"', 'במחלקה היורשת: override — "אני דורס"', 'בלי virtual אי אפשר לדרוס!'],
  },
  {
    id: 0,
    title: 'base: קריאה לגרסת האב',
    description: 'ב-Cat, דרסו את MakeSound כך שקודם תפעיל את הגרסה של Animal (עם base) ורק אחר כך תדפיס "מיאו!"',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("משמיע קול");
    }
}

class Cat : Animal
{
    public override void MakeSound()
    {
        // קראו קודם לגרסת הבסיס ואז הדפיסו מיאו!
    }
}

class Program
{
    static void Main()
    {
        new Cat().MakeSound();
    }
}`,
    solution: `using System;

class Animal
{
    public virtual void MakeSound()
    {
        Console.WriteLine("משמיע קול");
    }
}

class Cat : Animal
{
    public override void MakeSound()
    {
        base.MakeSound();
        Console.WriteLine("מיאו!");
    }
}

class Program
{
    static void Main()
    {
        new Cat().MakeSound();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'משמיע קול\nמיאו!', description: 'הרחבה במקום החלפה' }],
    hints: ['base.MakeSound() מפעילה את הגרסה של מחלקת האב', 'ככה מרחיבים התנהגות במקום להחליף אותה לגמרי', 'סדר השורות קובע את סדר ההדפסה'],
  },
  {
    id: 0,
    title: 'Constructor עם base',
    description: 'למחלקה Animal יש constructor שמקבל שם. צרו Dog עם constructor שמקבל שם וגזע, מעביר את השם ל-base, ומדפיס אותם. צרו כלב "רקסי" מגזע "לברדור"',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
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

    // constructor שמקבל name ו-breed ומעביר את name ל-base
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog("רקסי", "לברדור");
        Console.WriteLine(dog.Name);
        Console.WriteLine(dog.Breed);
    }
}`,
    solution: `using System;

class Animal
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

class Program
{
    static void Main()
    {
        Dog dog = new Dog("רקסי", "לברדור");
        Console.WriteLine(dog.Name);
        Console.WriteLine(dog.Breed);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'רקסי\nלברדור', description: 'שרשרת constructors' }],
    hints: ['התחביר: public Dog(string name, string breed) : base(name)', 'ה-constructor של האב רץ קודם', 'רק אחר כך רץ הגוף של ה-constructor של Dog'],
  },
  {
    id: 0,
    title: 'שלוש רמות ירושה',
    description: 'צרו שרשרת: Animal (מתודה Breathe), Mammal יורשת ממנה (מתודה Walk), ו-Dog יורשת מ-Mammal (מתודה Bark). צרו כלב והפעילו את שלוש המתודות',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    public void Breathe()
    {
        Console.WriteLine("נושם");
    }
}

// Mammal יורשת מ-Animal ומוסיפה Walk
// Dog יורשת מ-Mammal ומוסיפה Bark

class Program
{
    static void Main()
    {
        // צרו כלב והפעילו את כל שלוש המתודות
    }
}`,
    solution: `using System;

class Animal
{
    public void Breathe()
    {
        Console.WriteLine("נושם");
    }
}

class Mammal : Animal
{
    public void Walk()
    {
        Console.WriteLine("הולך");
    }
}

class Dog : Mammal
{
    public void Bark()
    {
        Console.WriteLine("נובח");
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Breathe();
        dog.Walk();
        dog.Bark();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'נושם\nהולך\nנובח', description: 'ירושה מצטברת לאורך שרשרת' }],
    hints: ['הירושה מצטברת: Dog מקבל גם מ-Mammal וגם מ-Animal', 'כל רמה מוסיפה יכולת', 'זו היררכיה — בדיוק כמו בטבע'],
  },
  {
    id: 0,
    title: 'protected: בין private ל-public',
    description: 'ב-Animal יש שדה protected בשם energy עם הערך 100. במחלקה Dog הוסיפו מתודה Run שמורידה 30 מהאנרגיה ומדפיסה אותה',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Animal
{
    protected int energy = 100;
}

class Dog : Animal
{
    // Run שמורידה 30 ומדפיסה את energy
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Run();
    }
}`,
    solution: `using System;

class Animal
{
    protected int energy = 100;
}

class Dog : Animal
{
    public void Run()
    {
        energy -= 30;
        Console.WriteLine(energy);
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Run();
    }
}`,
    testCases: [{ input: '', expectedOutput: '70', description: '100 פחות 30' }],
    hints: ['protected = נגיש למחלקה ולכל מי שיורש ממנה, אבל לא מבחוץ', 'אם היה private — Dog לא היה יכול לגעת בו', 'אם היה public — כל אחד היה יכול לשנות אותו'],
  },
  {
    id: 0,
    title: 'ToString: דריסת מתודה מובנית',
    description: 'צרו מחלקה Point עם X ו-Y ודרסו את ToString כך שתחזיר "(X,Y)". צרו נקודה (3,4) והדפיסו אותה ישירות עם Console.WriteLine',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Point
{
    public int X { get; set; }
    public int Y { get; set; }

    // דרסו את ToString
}

class Program
{
    static void Main()
    {
        Point p = new Point();
        p.X = 3;
        p.Y = 4;
        Console.WriteLine(p);
    }
}`,
    solution: `using System;

class Point
{
    public int X { get; set; }
    public int Y { get; set; }

    public override string ToString()
    {
        return $"({X},{Y})";
    }
}

class Program
{
    static void Main()
    {
        Point p = new Point();
        p.X = 3;
        p.Y = 4;
        Console.WriteLine(p);
    }
}`,
    testCases: [{ input: '', expectedOutput: '(3,4)', description: 'ההדפסה משתמשת ב-ToString שלנו' }],
    hints: ['כל מחלקה ב-C# יורשת בסתר ממחלקת object', 'ל-object יש ToString שמוגדרת virtual', 'Console.WriteLine קוראת ל-ToString אוטומטית!'],
  },
  {
    id: 0,
    title: 'עובדים ומנהלים',
    description: 'צרו Employee עם Name ומתודה virtual בשם CalculateBonus שמחזירה 1000. צרו Manager שיורשת ודורסת אותה כך שתחזיר 5000. הדפיסו את הבונוס של עובד ואז של מנהל',
    difficulty: 'קשה',
    topic: 'ירושה',
    starterCode: `using System;

class Employee
{
    public string Name { get; set; }

    public virtual int CalculateBonus()
    {
        return 1000;
    }
}

// Manager שדורסת את CalculateBonus

class Program
{
    static void Main()
    {
        Employee e = new Employee();
        // צרו גם מנהל והדפיסו את שני הבונוסים
    }
}`,
    solution: `using System;

class Employee
{
    public string Name { get; set; }

    public virtual int CalculateBonus()
    {
        return 1000;
    }
}

class Manager : Employee
{
    public override int CalculateBonus()
    {
        return 5000;
    }
}

class Program
{
    static void Main()
    {
        Employee e = new Employee();
        Manager m = new Manager();
        Console.WriteLine(e.CalculateBonus());
        Console.WriteLine(m.CalculateBonus());
    }
}`,
    testCases: [{ input: '', expectedOutput: '1000\n5000', description: 'כל תפקיד והבונוס שלו' }],
    hints: ['virtual במחלקת הבסיס, override במחלקה היורשת', 'מתודה שמחזירה ערך נדרסת בדיוק כמו void', 'זו דוגמה קלאסית: אותה פעולה, חישוב שונה לכל סוג'],
  },
]
