import type { Exercise } from '../../types/exercise'

// Enum ו-Struct
export const enumsStructsExercises: Exercise[] = [
  {
    id: 0,
    title: 'ה-enum הראשון שלי',
    description: 'הגדירו enum בשם Season עם ארבע עונות השנה (Winter, Spring, Summer, Autumn). צרו משתנה עם הערך Summer והדפיסו אותו',
    difficulty: 'קל',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

// הגדירו כאן את ה-enum Season

class Program
{
    static void Main()
    {
        // צרו משתנה Season והדפיסו
    }
}`,
    solution: `using System;

enum Season
{
    Winter,
    Spring,
    Summer,
    Autumn
}

class Program
{
    static void Main()
    {
        Season current = Season.Summer;
        Console.WriteLine(current);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Summer', description: 'הדפסת ערך enum מציגה את שמו' }],
    hints: ['enum מוגדר מחוץ למחלקה: enum Season { ... }', 'הערכים מופרדים בפסיקים, בלי גרשיים', 'ניגשים לערך עם נקודה: Season.Summer'],
  },
  {
    id: 0,
    title: 'המספר שמאחורי ה-enum',
    description: 'לכל ערך enum יש מספר סמוי (הראשון הוא 0). הגדירו enum Direction עם North, East, South, West והדפיסו את המספר של West בעזרת המרה ל-int',
    difficulty: 'קל',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

enum Direction
{
    North,
    East,
    South,
    West
}

class Program
{
    static void Main()
    {
        // המירו את West ל-int והדפיסו
    }
}`,
    solution: `using System;

enum Direction
{
    North,
    East,
    South,
    West
}

class Program
{
    static void Main()
    {
        Console.WriteLine((int)Direction.West);
    }
}`,
    testCases: [{ input: '', expectedOutput: '3', description: 'North=0, East=1, South=2, West=3' }],
    hints: ['הערך הראשון מקבל 0, השני 1 וכן הלאה', 'ממירים בדיוק כמו casting של מספרים: (int)', 'West הוא הרביעי — אז המספר שלו 3'],
  },
  {
    id: 0,
    title: 'ממספר ל-enum',
    description: 'קלטו מספר בין 0 ל-3 מהמשתמש והמירו אותו לערך Direction המתאים (North=0, East=1, South=2, West=3). הדפיסו את הכיוון',
    difficulty: 'קל',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

enum Direction
{
    North,
    East,
    South,
    West
}

class Program
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());
        // המירו ל-Direction והדפיסו
    }
}`,
    solution: `using System;

enum Direction
{
    North,
    East,
    South,
    West
}

class Program
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());
        Direction dir = (Direction)number;
        Console.WriteLine(dir);
    }
}`,
    testCases: [
      { input: '2', expectedOutput: 'South', description: '2 הוא South' },
      { input: '0', expectedOutput: 'North', description: '0 הוא North' },
    ],
    hints: ['ההמרה ההפוכה: (Direction)number', 'ההדפסה מציגה את השם, לא את המספר', 'זה שימושי כשקולטים בחירה מתפריט ממוספר'],
  },
  {
    id: 0,
    title: 'enum בתוך switch',
    description: 'הגדירו enum TrafficLight עם Red, Yellow, Green. כתבו switch שמדפיס עבור Red את "עצור", עבור Yellow את "היכון" ועבור Green את "סע". בדקו עם הערך Green',
    difficulty: 'בינוני',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

enum TrafficLight
{
    Red,
    Yellow,
    Green
}

class Program
{
    static void Main()
    {
        TrafficLight light = TrafficLight.Green;
        // switch על הרמזור
    }
}`,
    solution: `using System;

enum TrafficLight
{
    Red,
    Yellow,
    Green
}

class Program
{
    static void Main()
    {
        TrafficLight light = TrafficLight.Green;
        switch (light)
        {
            case TrafficLight.Red:
                Console.WriteLine("עצור");
                break;
            case TrafficLight.Yellow:
                Console.WriteLine("היכון");
                break;
            case TrafficLight.Green:
                Console.WriteLine("סע");
                break;
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'סע', description: 'Green מדפיס סע' }],
    hints: ['ב-case כותבים את השם המלא: case TrafficLight.Red:', 'switch עם enum בטוח יותר ממספרים קסומים', 'אל תשכחו break בכל case'],
  },
  {
    id: 0,
    title: 'השוואת ערכי enum',
    description: 'הגדירו enum Level עם Easy, Medium, Hard. צרו משתנה עם Hard, ואם הוא שווה ל-Hard הדפיסו "רמה קשה נבחרה!"',
    difficulty: 'קל',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

enum Level
{
    Easy,
    Medium,
    Hard
}

class Program
{
    static void Main()
    {
        Level chosen = Level.Hard;
        // השוו והדפיסו
    }
}`,
    solution: `using System;

enum Level
{
    Easy,
    Medium,
    Hard
}

class Program
{
    static void Main()
    {
        Level chosen = Level.Hard;
        if (chosen == Level.Hard)
        {
            Console.WriteLine("רמה קשה נבחרה!");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'רמה קשה נבחרה!', description: 'השוואה עם ==' }],
    hints: ['משווים ערכי enum עם == רגיל', 'chosen == Level.Hard', 'זה קריא בהרבה מ-chosen == 2'],
  },
  {
    id: 0,
    title: 'ה-struct הראשון שלי',
    description: 'הגדירו struct בשם Point עם שני שדות: X ו-Y מטיפוס int. צרו נקודה עם X=3 ו-Y=7 והדפיסו אותה בפורמט (3,7)',
    difficulty: 'בינוני',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

// הגדירו כאן את ה-struct Point

class Program
{
    static void Main()
    {
        // צרו נקודה, מלאו ערכים והדפיסו (3,7)
    }
}`,
    solution: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point p;
        p.X = 3;
        p.Y = 7;
        Console.WriteLine($"({p.X},{p.Y})");
    }
}`,
    testCases: [{ input: '', expectedOutput: '(3,7)', description: 'נקודה עם שני שדות' }],
    hints: ['struct Point { public int X; public int Y; }', 'public מאפשר גישה לשדות מבחוץ', 'ניגשים לשדות עם נקודה: p.X'],
  },
  {
    id: 0,
    title: 'struct עם מתודה',
    description: 'הוסיפו ל-struct Point מתודה בשם Print שמדפיסה את הנקודה בפורמט (X,Y). צרו נקודה (5,2) וקראו ל-Print שלה',
    difficulty: 'בינוני',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

struct Point
{
    public int X;
    public int Y;

    // הוסיפו כאן מתודת Print
}

class Program
{
    static void Main()
    {
        Point p;
        p.X = 5;
        p.Y = 2;
        // קראו ל-Print של הנקודה
    }
}`,
    solution: `using System;

struct Point
{
    public int X;
    public int Y;

    public void Print()
    {
        Console.WriteLine($"({X},{Y})");
    }
}

class Program
{
    static void Main()
    {
        Point p;
        p.X = 5;
        p.Y = 2;
        p.Print();
    }
}`,
    testCases: [{ input: '', expectedOutput: '(5,2)', description: 'הנקודה מדפיסה את עצמה' }],
    hints: ['המתודה מוגדרת בתוך ה-struct, בלי static', 'בתוך המתודה ניגשים לשדות ישירות: X ו-Y', 'קוראים לה דרך המשתנה: p.Print()'],
  },
  {
    id: 0,
    title: 'מרחק בין נקודות',
    description: 'כתבו מתודה סטטית Distance שמקבלת שתי נקודות ומחזירה את המרחק ביניהן (השתמשו ב-Math.Sqrt). הדפיסו את המרחק בין (0,0) ל-(3,4)',
    difficulty: 'קשה',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    // כתבו כאן את Distance

    static void Main()
    {
        Point a;
        a.X = 0;
        a.Y = 0;
        Point b;
        b.X = 3;
        b.Y = 4;
        // הדפיסו את המרחק
    }
}`,
    solution: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static double Distance(Point a, Point b)
    {
        int dx = b.X - a.X;
        int dy = b.Y - a.Y;
        return Math.Sqrt(dx * dx + dy * dy);
    }

    static void Main()
    {
        Point a;
        a.X = 0;
        a.Y = 0;
        Point b;
        b.X = 3;
        b.Y = 4;
        Console.WriteLine(Distance(a, b));
    }
}`,
    testCases: [{ input: '', expectedOutput: '5', description: 'משולש 3-4-5 קלאסי' }],
    hints: ['נוסחת המרחק: שורש של (dx² + dy²)', 'Math.Sqrt מחשבת שורש ריבועי', 'struct עובר למתודה כמו כל פרמטר אחר'],
  },
  {
    id: 0,
    title: 'מערך של structs',
    description: 'צרו מערך של 3 נקודות: (1,1), (2,4), (5,3). עברו עליו בלולאה והדפיסו את סכום כל ערכי ה-X',
    difficulty: 'קשה',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point[] points = new Point[3];
        // מלאו את הנקודות וסכמו את ה-X-ים
    }
}`,
    solution: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point[] points = new Point[3];
        points[0].X = 1;
        points[0].Y = 1;
        points[1].X = 2;
        points[1].Y = 4;
        points[2].X = 5;
        points[2].Y = 3;

        int sumX = 0;
        foreach (Point p in points)
        {
            sumX += p.X;
        }
        Console.WriteLine(sumX);
    }
}`,
    testCases: [{ input: '', expectedOutput: '8', description: '1+2+5 = 8' }],
    hints: ['מערך structs נוצר כמו כל מערך: new Point[3]', 'ניגשים לשדה של איבר: points[0].X', 'תבנית הסכימה המוכרת — רק עם שדה של struct'],
  },
  {
    id: 0,
    title: 'תפריט עם enum',
    description: 'הגדירו enum MenuChoice עם Pizza, Burger, Salad. קלטו מספר (0-2), המירו ל-MenuChoice, והדפיסו את המחיר לפי הבחירה: פיצה 45, המבורגר 52, סלט 38',
    difficulty: 'בינוני',
    topic: 'Enum ו-Struct',
    starterCode: `using System;

enum MenuChoice
{
    Pizza,
    Burger,
    Salad
}

class Program
{
    static void Main()
    {
        int input = int.Parse(Console.ReadLine());
        // המירו ל-MenuChoice והדפיסו מחיר לפי switch
    }
}`,
    solution: `using System;

enum MenuChoice
{
    Pizza,
    Burger,
    Salad
}

class Program
{
    static void Main()
    {
        int input = int.Parse(Console.ReadLine());
        MenuChoice choice = (MenuChoice)input;
        switch (choice)
        {
            case MenuChoice.Pizza:
                Console.WriteLine(45);
                break;
            case MenuChoice.Burger:
                Console.WriteLine(52);
                break;
            case MenuChoice.Salad:
                Console.WriteLine(38);
                break;
        }
    }
}`,
    testCases: [
      { input: '0', expectedOutput: '45', description: 'Pizza עולה 45' },
      { input: '2', expectedOutput: '38', description: 'Salad עולה 38' },
    ],
    hints: ['שלב 1: (MenuChoice)input', 'שלב 2: switch על ה-enum', 'זו תבנית של תפריטים אמיתיים: מספר ➝ enum ➝ פעולה'],
  },
]
