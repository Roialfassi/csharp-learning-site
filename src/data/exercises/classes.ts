import type { Exercise } from '../../types/exercise'

// מחלקות
export const classesExercises: Exercise[] = [
  {
    id: 26,
    title: 'מחלקה פשוטה',
    description: 'צור מחלקה בשם Person עם שדה בשם name',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

// כתוב מחלקה כאן

class Program
{
    static void Main()
    {
        // צור עצם וקרא להדפסה
    }
}`,
    solution: `using System;

class Person
{
    public string name;
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.name = "Alice";
        Console.WriteLine(p.name);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Alice', description: 'הדפס את שם האדם' }],
    hints: ['צור class Person {}', 'הוסף public string name', 'צור עצם עם new Person()'],
  },
  {
    id: 27,
    title: 'Constructor',
    description: 'צור מחלקה Car עם constructor שמגדיר את הצבע',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

// כתוב מחלקה עם constructor

class Program
{
    static void Main()
    {
        // צור עצם עם זריקה של צבע
    }
}`,
    solution: `using System;

class Car
{
    public string color;

    public Car(string c)
    {
        color = c;
    }
}

class Program
{
    static void Main()
    {
        Car car = new Car("Red");
        Console.WriteLine(car.color);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Red', description: 'הדפס את צבע המכונית' }],
    hints: ['צור constructor בשם Car(string c)', 'הגדר את color = c בתוכו', 'צור עצם עם new Car("Red")'],
  },
  {
    id: 0,
    title: 'מחלקה עם Property',
    description: 'צרו מחלקה Person עם property אוטומטי בשם Name. צרו אובייקט, השימו לו את השם "נועה" והדפיסו את שמו',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

// הגדירו כאן את המחלקה Person

class Program
{
    static void Main()
    {
        // צרו אובייקט, השימו שם והדפיסו
    }
}`,
    solution: `using System;

class Person
{
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        Person p = new Person();
        p.Name = "נועה";
        Console.WriteLine(p.Name);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'נועה', description: 'property אוטומטי בפעולה' }],
    hints: ['property אוטומטי: public string Name { get; set; }', 'יוצרים אובייקט עם new Person()', 'ניגשים ל-property עם נקודה: p.Name'],
  },
  {
    id: 0,
    title: 'מתודה של אובייקט',
    description: 'צרו מחלקה Dog עם property בשם Name ומתודה Bark שמדפיסה "שם: הב הב!". צרו כלב בשם רקסי והפעילו את Bark',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

class Dog
{
    public string Name { get; set; }

    // הוסיפו כאן את המתודה Bark
}

class Program
{
    static void Main()
    {
        // צרו כלב והפעילו Bark
    }
}`,
    solution: `using System;

class Dog
{
    public string Name { get; set; }

    public void Bark()
    {
        Console.WriteLine($"{Name}: הב הב!");
    }
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Name = "רקסי";
        dog.Bark();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'רקסי: הב הב!', description: 'הכלב נובח בשמו' }],
    hints: ['המתודה מוגדרת בתוך המחלקה, בלי static', 'בתוך המתודה ניגשים ל-Name ישירות', 'מפעילים דרך האובייקט: dog.Bark()'],
  },
  {
    id: 0,
    title: 'Constructor עם this',
    description: 'צרו מחלקה Student עם Name ו-Grade ו-constructor שמקבל את שניהם ומשתמש ב-this. צרו תלמיד "יובל" עם ציון 92 והדפיסו: יובל: 92',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    // כתבו constructor שמקבל name ו-grade
}

class Program
{
    static void Main()
    {
        // צרו תלמיד בשורה אחת והדפיסו
    }
}`,
    solution: `using System;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }
}

class Program
{
    static void Main()
    {
        Student s = new Student("יובל", 92);
        Console.WriteLine($"{s.Name}: {s.Grade}");
    }
}`,
    testCases: [{ input: '', expectedOutput: 'יובל: 92', description: 'אתחול מלא בשורה אחת' }],
    hints: ['ל-constructor אין טיפוס החזרה ושמו כשם המחלקה', 'this.Name מבדיל בין ה-property לפרמטר', 'עכשיו האובייקט נולד עם כל הנתונים: new Student("יובל", 92)'],
  },
  {
    id: 0,
    title: 'שני Constructors',
    description: 'הוסיפו למחלקה Student גם constructor ריק שנותן שם "אלמוני" וציון 0. צרו תלמיד אחד עם נתונים ואחד ריק, והדפיסו את שניהם',
    difficulty: 'בינוני',
    topic: 'מחלקות',
    starterCode: `using System;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }

    // הוסיפו constructor ריק
}

class Program
{
    static void Main()
    {
        Student a = new Student("דנה", 88);
        Student b = new Student();
        Console.WriteLine($"{a.Name}: {a.Grade}");
        Console.WriteLine($"{b.Name}: {b.Grade}");
    }
}`,
    solution: `using System;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }

    public Student()
    {
        this.Name = "אלמוני";
        this.Grade = 0;
    }
}

class Program
{
    static void Main()
    {
        Student a = new Student("דנה", 88);
        Student b = new Student();
        Console.WriteLine($"{a.Name}: {a.Grade}");
        Console.WriteLine($"{b.Name}: {b.Grade}");
    }
}`,
    testCases: [{ input: '', expectedOutput: 'דנה: 88\nאלמוני: 0', description: 'שתי דרכים ליצור תלמיד' }],
    hints: ['גם constructors אפשר להעמיס (overload) — כמו מתודות!', 'ה-constructor הריק: public Student()', 'C# בוחרת לפי מספר הארגומנטים בקריאה'],
  },
  {
    id: 0,
    title: 'הכמסה: שדה private עם בדיקה',
    description: 'צרו מחלקה BankAccount עם שדה פרטי balance ומתודות Deposit (מוסיפה רק סכום חיובי) ו-GetBalance. הפקידו 100, נסו להפקיד 50-, והדפיסו את היתרה',
    difficulty: 'קשה',
    topic: 'מחלקות',
    starterCode: `using System;

class BankAccount
{
    private int balance = 0;

    // Deposit עם בדיקה + GetBalance
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();
        account.Deposit(100);
        account.Deposit(-50);
        Console.WriteLine(account.GetBalance());
    }
}`,
    solution: `using System;

class BankAccount
{
    private int balance = 0;

    public void Deposit(int amount)
    {
        if (amount > 0)
        {
            balance += amount;
        }
    }

    public int GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();
        account.Deposit(100);
        account.Deposit(-50);
        Console.WriteLine(account.GetBalance());
    }
}`,
    testCases: [{ input: '', expectedOutput: '100', description: 'ההפקדה השלילית נחסמה' }],
    hints: ['private מסתיר את balance מהעולם — אי אפשר לשנות ישירות', 'Deposit בודקת שהסכום חיובי לפני העדכון', 'זו הכמסה (Encapsulation): המחלקה שומרת על הנתונים של עצמה'],
  },
  {
    id: 0,
    title: 'Property עם לוגיקה',
    description: 'צרו מחלקה Player עם property בשם Score שלא מאפשר ערך שלילי: השמה של מספר שלילי תשמור 0. בדקו עם 50 ואז עם 10-',
    difficulty: 'קשה',
    topic: 'מחלקות',
    starterCode: `using System;

class Player
{
    private int score;

    // כתבו property בשם Score עם get ו-set חכם
}

class Program
{
    static void Main()
    {
        Player p = new Player();
        p.Score = 50;
        Console.WriteLine(p.Score);
        p.Score = -10;
        Console.WriteLine(p.Score);
    }
}`,
    solution: `using System;

class Player
{
    private int score;

    public int Score
    {
        get { return score; }
        set
        {
            if (value < 0)
            {
                score = 0;
            }
            else
            {
                score = value;
            }
        }
    }
}

class Program
{
    static void Main()
    {
        Player p = new Player();
        p.Score = 50;
        Console.WriteLine(p.Score);
        p.Score = -10;
        Console.WriteLine(p.Score);
    }
}`,
    testCases: [{ input: '', expectedOutput: '50\n0', description: 'ערך שלילי הפך ל-0' }],
    hints: ['property מלא: get מחזיר את השדה, set מקבל את value', 'בתוך ה-set, value הוא הערך שהושם', 'ככה property שומר על חוקי המחלקה בכל השמה'],
  },
  {
    id: 0,
    title: 'static: מונה אובייקטים',
    description: 'הוסיפו למחלקה Cat מונה סטטי שסופר כמה חתולים נוצרו (מתעדכן ב-constructor). צרו 3 חתולים והדפיסו את Cat.Count',
    difficulty: 'קשה',
    topic: 'מחלקות',
    starterCode: `using System;

class Cat
{
    public static int Count = 0;

    // constructor שמעדכן את המונה
}

class Program
{
    static void Main()
    {
        Cat a = new Cat();
        Cat b = new Cat();
        Cat c = new Cat();
        Console.WriteLine(Cat.Count);
    }
}`,
    solution: `using System;

class Cat
{
    public static int Count = 0;

    public Cat()
    {
        Count++;
    }
}

class Program
{
    static void Main()
    {
        Cat a = new Cat();
        Cat b = new Cat();
        Cat c = new Cat();
        Console.WriteLine(Cat.Count);
    }
}`,
    testCases: [{ input: '', expectedOutput: '3', description: 'שלושה חתולים נוצרו' }],
    hints: ['שדה static שייך למחלקה, לא לאובייקט מסוים', 'כל קריאה ל-constructor מעלה את המונה', 'ניגשים דרך שם המחלקה: Cat.Count, לא דרך אובייקט'],
  },
  {
    id: 0,
    title: 'רשימה של אובייקטים',
    description: 'צרו List של תלמידים (השתמשו במחלקה Student עם constructor), הוסיפו שלושה, ועברו בלולאה: הדפיסו כל תלמיד וחשבו את ממוצע הציונים',
    difficulty: 'קשה',
    topic: 'מחלקות',
    starterCode: `using System;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }
}

class Program
{
    static void Main()
    {
        // צרו List<Student> עם דנה-90, יובל-80, עומר-85
        // הדפיסו כל תלמיד ואז את הממוצע
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student("דנה", 90),
            new Student("יובל", 80),
            new Student("עומר", 85)
        };

        int sum = 0;
        foreach (Student s in students)
        {
            Console.WriteLine($"{s.Name}: {s.Grade}");
            sum += s.Grade;
        }
        Console.WriteLine((double)sum / students.Count);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'דנה: 90\nיובל: 80\nעומר: 85\n85', description: 'שלושה תלמידים וממוצע 85' }],
    hints: ['List<Student> עובדת בדיוק כמו List<int> — רק עם אובייקטים', 'אפשר ליצור אובייקטים ישירות בתוך ה-{ }', 'בלולאה ניגשים ל-properties של כל תלמיד'],
  },
]
