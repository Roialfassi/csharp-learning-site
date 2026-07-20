import type { Exercise } from '../../types/exercise'

// מתודות
export const methodsExercises: Exercise[] = [
  {
    id: 23,
    title: 'מתודה פשוטה',
    description: 'כתוב מתודה בשם Greet שמדפיסה "Hello" וקרא לה',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתוב מתודה כאן

    static void Main()
    {
        // קרא למתודה כאן
    }
}`,
    solution: `using System;

class Program
{
    static void Greet()
    {
        Console.WriteLine("Hello");
    }

    static void Main()
    {
        Greet();
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Hello', description: 'המתודה צריכה להדפיס Hello' }],
    hints: ['כתוב static void Greet() {}', 'בתוכה הדפס "Hello"', 'קרא ל-Greet() מ-Main'],
  },
  {
    id: 24,
    title: 'מתודה עם פרמטר',
    description: 'כתוב מתודה בשם PrintNumber שמקבלת מספר ומדפיסה אותו',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתוב מתודה שמקבלת פרמטר

    static void Main()
    {
        // קרא למתודה עם מספר
    }
}`,
    solution: `using System;

class Program
{
    static void PrintNumber(int num)
    {
        Console.WriteLine(num);
    }

    static void Main()
    {
        PrintNumber(42);
    }
}`,
    testCases: [{ input: '', expectedOutput: '42', description: 'המתודה צריכה להדפיס את המספר שהיא קיבלה' }],
    hints: ['כתוב static void PrintNumber(int num)', 'בתוכה הדפס את num', 'קרא עם PrintNumber(42)'],
  },
  {
    id: 25,
    title: 'מתודה עם ערך החזרה',
    description: 'כתוב מתודה בשם Add שמקבלת שני מספרים ומחזירה את סכומם',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתוב מתודה שמחזירה ערך

    static void Main()
    {
        // קרא למתודה והדפס את התוצאה
    }
}`,
    solution: `using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        int result = Add(5, 3);
        Console.WriteLine(result);
    }
}`,
    testCases: [{ input: '', expectedOutput: '8', description: '5 + 3 = 8' }],
    hints: ['כתוב static int Add(int a, int b)', 'בתוכה return a + b', 'קרא עם int result = Add(5, 3)'],
  },
  {
    id: 0,
    title: 'הגדול מבין שניים — כמתודה',
    description: 'כתבו מתודה Max שמקבלת שני מספרים ומחזירה את הגדול. קראו לה עם 7 ו-12 והדפיסו את התוצאה',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתבו כאן את המתודה Max

    static void Main()
    {
        // קראו ל-Max עם 7 ו-12 והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static int Max(int a, int b)
    {
        if (a > b)
        {
            return a;
        }
        return b;
    }

    static void Main()
    {
        Console.WriteLine(Max(7, 12));
    }
}`,
    testCases: [{ input: '', expectedOutput: '12', description: 'Max(7, 12) מחזירה 12' }],
    hints: ['חתימת המתודה: static int Max(int a, int b)', 'return מסיים את המתודה מיד — לכן לא צריך else', 'קוראים לה מתוך Main ומדפיסים את הערך שחזר'],
  },
  {
    id: 0,
    title: 'האם זוגי?',
    description: 'כתבו מתודה IsEven שמקבלת מספר ומחזירה true אם הוא זוגי. הדפיסו את התוצאה עבור 8 ואז עבור 7',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתבו כאן את המתודה IsEven שמחזירה bool

    static void Main()
    {
        // הדפיסו את IsEven(8) ואת IsEven(7)
    }
}`,
    solution: `using System;

class Program
{
    static bool IsEven(int number)
    {
        return number % 2 == 0;
    }

    static void Main()
    {
        Console.WriteLine(IsEven(8));
        Console.WriteLine(IsEven(7));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'True\nFalse', description: '8 זוגי, 7 לא' }],
    hints: ['טיפוס ההחזרה הוא bool', 'הביטוי number % 2 == 0 הוא כבר true או false — אפשר להחזיר אותו ישירות', 'אין צורך ב-if בכלל!'],
  },
  {
    id: 0,
    title: 'הדפסה חוזרת',
    description: 'כתבו מתודה Repeat שמקבלת מחרוזת ומספר, ומדפיסה את המחרוזת את מספר הפעמים הזה. קראו לה עם "hi" ו-3',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתבו כאן את המתודה Repeat

    static void Main()
    {
        // קראו: Repeat("hi", 3)
    }
}`,
    solution: `using System;

class Program
{
    static void Repeat(string text, int times)
    {
        for (int i = 0; i < times; i++)
        {
            Console.WriteLine(text);
        }
    }

    static void Main()
    {
        Repeat("hi", 3);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'hi\nhi\nhi', description: 'hi שלוש פעמים' }],
    hints: ['המתודה לא מחזירה כלום — void', 'היא מקבלת שני פרמטרים: string ו-int', 'בתוכה — לולאת for פשוטה'],
  },
  {
    id: 0,
    title: 'Overloading: אותו שם, טיפוסים שונים',
    description: 'כתבו שתי מתודות בשם Double: אחת שמקבלת int ומחזירה אותו כפול 2, ואחת שמקבלת string ומחזירה אותו פעמיים ("ab" הופך ל-"abab"). הדפיסו את Double(5) ואת Double("ab")',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // כתבו כאן שתי מתודות בשם Double

    static void Main()
    {
        // הדפיסו את שתי הקריאות
    }
}`,
    solution: `using System;

class Program
{
    static int Double(int number)
    {
        return number * 2;
    }

    static string Double(string text)
    {
        return text + text;
    }

    static void Main()
    {
        Console.WriteLine(Double(5));
        Console.WriteLine(Double("ab"));
    }
}`,
    testCases: [{ input: '', expectedOutput: '10\nabab', description: 'מספר מוכפל, מחרוזת משוכפלת' }],
    hints: ['מותר לשתי מתודות לחלוק שם אם הפרמטרים שונים — זה Overloading', 'C# בוחרת אוטומטית את הגרסה הנכונה לפי הטיפוס שהעברתם', 'אחת מחזירה int, השנייה string'],
  },
  {
    id: 0,
    title: 'פרמטר עם ערך ברירת מחדל',
    description: 'כתבו מתודה Greet שמקבלת שם, ופרמטר שני greeting עם ערך ברירת מחדל "שלום". קראו לה פעם עם שם בלבד ופעם עם ברכה אחרת',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // Greet עם פרמטר ברירת מחדל

    static void Main()
    {
        // Greet("דנה") ואז Greet("יובל", "בוקר טוב")
    }
}`,
    solution: `using System;

class Program
{
    static void Greet(string name, string greeting = "שלום")
    {
        Console.WriteLine($"{greeting} {name}!");
    }

    static void Main()
    {
        Greet("דנה");
        Greet("יובל", "בוקר טוב");
    }
}`,
    testCases: [{ input: '', expectedOutput: 'שלום דנה!\nבוקר טוב יובל!', description: 'ברירת מחדל ואז ערך מפורש' }],
    hints: ['ברירת מחדל נכתבת בחתימה: string greeting = "שלום"', 'כשלא מעבירים את הפרמטר — הערך הדיפולטי נכנס', 'פרמטרים עם ברירת מחדל חייבים להיות אחרונים ברשימה'],
  },
  {
    id: 0,
    title: 'סכום מערך — כמתודה',
    description: 'כתבו מתודה SumArray שמקבלת מערך של מספרים ומחזירה את סכומם. קראו לה עם המערך {5, 10, 15} והדפיסו',
    difficulty: 'בינוני',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // SumArray מקבלת int[] ומחזירה int

    static void Main()
    {
        int[] numbers = { 5, 10, 15 };
        // קראו והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static int SumArray(int[] numbers)
    {
        int sum = 0;
        foreach (int n in numbers)
        {
            sum += n;
        }
        return sum;
    }

    static void Main()
    {
        int[] numbers = { 5, 10, 15 };
        Console.WriteLine(SumArray(numbers));
    }
}`,
    testCases: [{ input: '', expectedOutput: '30', description: '5+10+15 = 30' }],
    hints: ['מערך הוא פרמטר לגמרי רגיל: int[] numbers', 'בתוך המתודה — תבנית הסכימה המוכרת', 'המתודה מחזירה את הסכום, וההדפסה קורית ב-Main'],
  },
  {
    id: 0,
    title: 'רקורסיה: עצרת',
    description: 'כתבו מתודה Factorial שמחשבת עצרת בעזרת קריאה לעצמה: העצרת של n היא n כפול העצרת של n-1, והעצרת של 0 היא 1. הדפיסו את העצרת של 5',
    difficulty: 'קשה',
    topic: 'מתודות',
    starterCode: `using System;

class Program
{
    // Factorial קוראת לעצמה!

    static void Main()
    {
        // הדפיסו את Factorial(5)
    }
}`,
    solution: `using System;

class Program
{
    static int Factorial(int n)
    {
        if (n == 0)
        {
            return 1;
        }
        return n * Factorial(n - 1);
    }

    static void Main()
    {
        Console.WriteLine(Factorial(5));
    }
}`,
    testCases: [{ input: '', expectedOutput: '120', description: '5! = 5*4*3*2*1 = 120' }],
    hints: ['מתודה שקוראת לעצמה נקראת רקורסיבית', 'חובה תנאי עצירה! כאן: אם n == 0 מחזירים 1', 'Factorial(5) = 5 * Factorial(4) = 5 * 4 * Factorial(3)...'],
  },
]
