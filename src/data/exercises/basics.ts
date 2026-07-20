import type { Exercise } from '../../types/exercise'

// יסודות
export const basicsExercises: Exercise[] = [
  {
    id: 1,
    title: 'הדפסת הודעה',
    description: 'כתוב תוכנית שמדפיסה את ההודעה: Hello World',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב את הקוד שלך כאן
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}`,
    testCases: [
      {
        input: '',
        expectedOutput: 'Hello World',
        description: 'הדפס את ההודעה הנכונה',
      },
    ],
    hints: ['השתמשו בפונקציה Console.WriteLine()', 'ההודעה צריכה להיות בתוך גרשיים', 'אל תשכחו את הנקודה-פסיק בסוף השורה'],
  },
  {
    id: 2,
    title: 'הגדרת משתנה והדפסה',
    description: 'הגדר משתנה בשם name עם הערך "Alice" והדפס אותו',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // הגדר את המשתנה כאן
        // הדפס את המשתנה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string name = "Alice";
        Console.WriteLine(name);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Alice', description: 'הדפס את ערך המשתנה' }],
    hints: ['משתנה string מתחיל בקוד: string name = "...";', 'ערך המשתנה צריך להיות Alice', 'השתמשו ב-Console.WriteLine כדי להדפיס'],
  },
  {
    id: 3,
    title: 'חיבור שני מספרים',
    description: 'כתוב תוכנית שמחברת שני מספרים (3 ו-7) ומדפיסה את הסכום',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 3;
        int b = 7;
        // חשוב את הסכום והדפס
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 3;
        int b = 7;
        int sum = a + b;
        Console.WriteLine(sum);
    }
}`,
    testCases: [{ input: '', expectedOutput: '10', description: 'הדפס את הסכום של 3 ו-7' }],
    hints: ['השתמשו ב- + לחיבור', 'שמרו את התוצאה במשתנה בשם sum', 'הדפיסו את sum'],
  },
  {
    id: 4,
    title: 'מערך של מספרים',
    description: 'הגדר מערך עם שלושה מספרים: 10, 20, 30 והדפס את הראשון',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // הגדר מערך עם שלושה מספרים
        // הדפס את האלמנט הראשון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 10, 20, 30 };
        Console.WriteLine(numbers[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '10', description: 'הדפס את האלמנט הראשון של המערך' }],
    hints: ['השתמשו בסוגריים מרובעים [ ] להגדרת מערך', 'האינדקס של האלמנט הראשון הוא 0', 'הדפיסו numbers[0]'],
  },
  {
    id: 5,
    title: 'המרת טיפוסים',
    description: 'המר את המספר העשרוני 5.7 ל-int והדפס אותו',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        double x = 5.7;
        // המר ל-int והדפס
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        double x = 5.7;
        int y = (int)x;
        Console.WriteLine(y);
    }
}`,
    testCases: [{ input: '', expectedOutput: '5', description: 'המר 5.7 ל-int' }],
    hints: ['השתמשו בסוגריים עם int כדי להמיר טיפוס', 'החלק העשרוני יימחק', 'הדפיסו את התוצאה'],
  },
  {
    id: 0,
    title: 'קליטת קלט מהמשתמש',
    description: 'קלוט שם מהמשתמש עם Console.ReadLine והדפס "שלום" ואחריו השם. למשל עבור הקלט דני יודפס: שלום דני',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // קלטו שם מהמשתמש
        // הדפיסו: שלום <השם>
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string name = Console.ReadLine();
        Console.WriteLine("שלום " + name);
    }
}`,
    testCases: [
      { input: 'דני', expectedOutput: 'שלום דני', description: 'קלט: דני' },
      { input: 'מיכל', expectedOutput: 'שלום מיכל', description: 'קלט: מיכל' },
    ],
    hints: ['Console.ReadLine() מחזירה מחרוזת', 'שמרו את הקלט במשתנה string', 'חברו מחרוזות עם + או השתמשו ב-string interpolation'],
  },
  {
    id: 0,
    title: 'משפט עם String Interpolation',
    description: 'הגדירו משתנה name עם הערך "נועה" ומשתנה age עם הערך 14, והדפיסו בעזרת string interpolation את המשפט: נועה בת 14',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string name = "נועה";
        int age = 14;
        // הדפיסו את המשפט בעזרת $"..."
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string name = "נועה";
        int age = 14;
        Console.WriteLine($"{name} בת {age}");
    }
}`,
    testCases: [{ input: '', expectedOutput: 'נועה בת 14', description: 'הדפסת משפט משולב' }],
    hints: ['string interpolation מתחיל ב-$ לפני הגרשיים', 'משתנים נכתבים בתוך סוגריים מסולסלים: {name}', 'שימו לב לרווחים במשפט'],
  },
  {
    id: 0,
    title: 'היקף ושטח של מלבן',
    description: 'נתונות צלעות מלבן: 4 ו-6. חשבו והדפיסו את ההיקף בשורה הראשונה ואת השטח בשורה השנייה',
    difficulty: 'קל',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int width = 4;
        int height = 6;
        // חשבו והדפיסו היקף ואז שטח
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int width = 4;
        int height = 6;
        int perimeter = 2 * (width + height);
        int area = width * height;
        Console.WriteLine(perimeter);
        Console.WriteLine(area);
    }
}`,
    testCases: [{ input: '', expectedOutput: '20\n24', description: 'היקף 20 ואז שטח 24' }],
    hints: ['היקף = פעמיים סכום הצלעות', 'שטח = מכפלת הצלעות', 'כל ערך מודפס בשורה נפרדת עם Console.WriteLine'],
  },
  {
    id: 0,
    title: 'החלפת ערכים בין משתנים',
    description: 'נתונים שני משתנים: a=5 ו-b=9. החליפו את הערכים ביניהם (בעזרת משתנה עזר) והדפיסו את a ואז את b',
    difficulty: 'בינוני',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 9;
        // החליפו את הערכים בין a ל-b
        Console.WriteLine(a);
        Console.WriteLine(b);
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 9;
        int temp = a;
        a = b;
        b = temp;
        Console.WriteLine(a);
        Console.WriteLine(b);
    }
}`,
    testCases: [{ input: '', expectedOutput: '9\n5', description: 'אחרי ההחלפה: a=9, b=5' }],
    hints: ['אי אפשר פשוט לכתוב a = b ואז b = a — הערך המקורי הולך לאיבוד', 'השתמשו במשתנה שלישי temp לשמירת הערך של a', 'temp = a, ואז a = b, ואז b = temp'],
  },
  {
    id: 0,
    title: 'ממוצע של שלושה מספרים',
    description: 'חשבו את הממוצע של המספרים 4, 7 ו-10 והדפיסו אותו. שימו לב: הממוצע אינו מספר שלם!',
    difficulty: 'בינוני',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int x = 4;
        int y = 7;
        int z = 10;
        // חשבו את הממוצע והדפיסו — זהירות מחלוקת שלמים!
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int x = 4;
        int y = 7;
        int z = 10;
        double average = (x + y + z) / 3.0;
        Console.WriteLine(average);
    }
}`,
    testCases: [{ input: '', expectedOutput: '7', description: 'הממוצע של 4, 7 ו-10 הוא 7' }],
    hints: ['חלוקה של int ב-int נותנת int — החלק העשרוני נחתך!', 'חלקו ב-3.0 במקום ב-3 כדי לקבל תוצאה עשרונית', 'שמרו את התוצאה במשתנה double'],
  },
]
