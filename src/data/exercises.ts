import { Exercise } from '../types/exercise'

export const exercises: Exercise[] = [
  // ========================== יסודות ==========================
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

  // ========================== תנאים ==========================
  {
    id: 6,
    title: 'תנאי if פשוט',
    description: 'כתוב תוכנית שמדפיסה "גדול" אם x גדול מ-5, אחרת "קטן או שווה"',
    difficulty: 'קל',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        // כתוב את התנאי כאן
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        if (x > 5)
        {
            Console.WriteLine("גדול");
        }
        else
        {
            Console.WriteLine("קטן או שווה");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'גדול', description: 'כאשר x = 10, צריך להדפיס גדול' }],
    hints: ['השתמשו ב-if לתנאי', 'השוו את x עם 5 באמצעות >', 'הדפיסו "גדול" או "קטן או שווה" בהתאם לתנאי'],
  },
  {
    id: 7,
    title: 'תנאים מרובים עם else if',
    description: 'בדוק אם הגיל הוא מעל 18 (מבוגר), בין 13 ל-17 (נער), או מתחת ל-13 (ילד)',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int age = 15;
        // כתוב תנאים מרובים
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int age = 15;
        if (age >= 18)
        {
            Console.WriteLine("מבוגר");
        }
        else if (age >= 13)
        {
            Console.WriteLine("נער");
        }
        else
        {
            Console.WriteLine("ילד");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'נער', description: 'בגיל 15, צריך להדפיס נער' }],
    hints: ['בדקו תחילה אם age >= 18', 'אח"כ בדקו אם age >= 13', 'אחרת הדפיסו ילד'],
  },
  {
    id: 8,
    title: 'AND לוגי (&&)',
    description: 'בדוק אם x גדול מ-5 וגם קטן מ-15',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        // בדוק אם x בטווח 5-15
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int x = 10;
        if (x > 5 && x < 15)
        {
            Console.WriteLine("בטווח");
        }
        else
        {
            Console.WriteLine("מחוץ לטווח");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'בטווח', description: 'בדוק אם x בטווח' }],
    hints: ['השתמשו ב-&& לAND לוגי', 'בדקו שני תנאים בו-זמנית', 'שניהם חייבים להיות true'],
  },
  {
    id: 9,
    title: 'OR לוגי (||)',
    description: 'בדוק אם המשתמש הוא מנהל או מפקח (role הוא "admin" או "supervisor")',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string role = "admin";
        // בדוק אם הוא מנהל או מפקח
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string role = "admin";
        if (role == "admin" || role == "supervisor")
        {
            Console.WriteLine("גישה מאושרת");
        }
        else
        {
            Console.WriteLine("גישה נדחתה");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'גישה מאושרת', description: 'admin צריך להיות מאושר' }],
    hints: ['השתמשו ב-|| לOR לוגי', 'בדקו אם role הוא "admin" או "supervisor"', 'אחד מהם צריך להיות true'],
  },

  // ========================== לולאות ==========================
  {
    id: 10,
    title: 'לולאת for',
    description: 'כתוב לולאה שמדפיסה את המספרים מ-1 עד 5',
    difficulty: 'קל',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב לולאת for כאן
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '1\n2\n3\n4\n5', description: 'הדפס את המספרים מ-1 עד 5' }],
    hints: ['השתמשו בלולאת for', 'התחילו מ-i = 1 וסיימו כאשר i <= 5', 'הגדילו את i בכל איטרציה'],
  },
  {
    id: 11,
    title: 'לולאה while פשוטה',
    description: 'כתוב לולאה שמדפיסה את המספרים מ-1 עד 3 באמצעות while',
    difficulty: 'קל',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // השתמשו בלולאת while כאן
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int i = 1;
        while (i <= 3)
        {
            Console.WriteLine(i);
            i++;
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '1\n2\n3', description: 'הדפס 1, 2, 3 בעזרת while' }],
    hints: ['הגדירו משתנה i = 1 לפני הלולאה', 'הלולאה צריכה להמשיך כל עוד i <= 3', 'הגדילו את i בכל איטרציה עם i++'],
  },
  {
    id: 12,
    title: 'כפל טבלה פשוטה',
    description: 'כתוב לולאה שמדפיסה את לוח הכפל של 5 (5*1 עד 5*5)',
    difficulty: 'בינוני',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב לולאה שמדפיסה את לוח הכפל של 5
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            int result = 5 * i;
            Console.WriteLine(result);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '5\n10\n15\n20\n25', description: 'הדפס את תוצאות הכפל של 5' }],
    hints: ['השתמשו בלולאת for מ-1 עד 5', 'חשבו את 5 * i בכל איטרציה', 'הדפיסו את התוצאה'],
  },
  {
    id: 13,
    title: 'לולאה foreach על מערך',
    description: 'כתוב לולאה שמדפיסה כל תו ברצף המילה "Hello"',
    difficulty: 'בינוני',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello";
        // השתמשו בלולאת foreach לעבור על כל תו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello";
        foreach (char c in text)
        {
            Console.WriteLine(c);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'H\ne\nl\nl\no', description: 'הדפס כל תו של Hello בשורה נפרדת' }],
    hints: ['השתמשו בchar כטיפוס של המשתנה בלולאה', 'השתמשו ב-foreach כדי לעבור על הטקסט', 'הדפיסו כל תו בשורה נפרדת'],
  },
  {
    id: 14,
    title: 'תנאי בתוך לולאה עם break',
    description: 'כתוב לולאה שמדפיסה מספרים מ-0 עד 10, אבל עצור כאשר i == 5',
    difficulty: 'בינוני',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב לולאה עם break
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 0; i <= 10; i++)
        {
            if (i == 5)
                break;
            Console.WriteLine(i);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '0\n1\n2\n3\n4', description: 'עצור כאשר i == 5' }],
    hints: ['משתמשו בbreak כדי לסיים את הלולאה', 'בדקו אם i == 5 בתוך הלולאה', 'הדפיסו רק לפני ה-break'],
  },

  // ========================== מחרוזות ==========================
  {
    id: 15,
    title: 'אורך מחרוזת',
    description: 'הדפס את אורך המחרוזת "Programming"',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "Programming";
        // הדפס את אורך המחרוזת
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "Programming";
        Console.WriteLine(text.Length);
    }
}`,
    testCases: [{ input: '', expectedOutput: '11', description: 'אורך "Programming" הוא 11' }],
    hints: ['השתמשו ב-.Length כדי לקבל את אורך המחרוזת', 'עברו על כל תו ספור אותם', 'הדפיסו את המספר'],
  },
  {
    id: 16,
    title: 'חלק מתוך מחרוזת',
    description: 'הדפס חלק מהמחרוזת "Hello World" החל מ-0 באורך 5 תווים',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello World";
        // הדפס את החלק הראשון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello World";
        Console.WriteLine(text.Substring(0, 5));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Hello', description: 'הדפס 5 תווים מתחילה' }],
    hints: ['השתמשו ב-Substring(0, 5)', 'זה מחזיר 5 תווים החל מאינדקס 0', 'התוצאה תהיה "Hello"'],
  },
  {
    id: 17,
    title: 'הפוך אותיות',
    description: 'הפוך את "hello" ל-"HELLO"',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "hello";
        // הפוך ל-HELLO
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "hello";
        Console.WriteLine(text.ToUpper());
    }
}`,
    testCases: [{ input: '', expectedOutput: 'HELLO', description: 'הפוך "hello" ל-"HELLO"' }],
    hints: ['השתמשו ב-ToUpper()', 'זה הופך את כל האותיות לגדולות', 'הדפיסו את התוצאה'],
  },
  {
    id: 18,
    title: 'החלף טקסט',
    description: 'החלף את "a" ב-"A" במחרוזת "banana"',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "banana";
        // החלף את "a" ב-"A"
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "banana";
        Console.WriteLine(text.Replace("a", "A"));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'bAnAnA', description: 'החלף את כל ה-a ב-A' }],
    hints: ['השתמשו ב-Replace("a", "A")', 'זה מחליף את כל ההופעות של "a" ב-"A"', 'הדפיסו את התוצאה'],
  },

  // ========================== מערכים ==========================
  {
    id: 19,
    title: 'איבר ממערך',
    description: 'קבל את האלמנט השני (אינדקס 1) ממערך [5, 15, 25]',
    difficulty: 'קל',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        // קבל את האלמנט השני
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        Console.WriteLine(arr[1]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '15', description: 'הדפס את האלמנט השני' }],
    hints: ['השתמשו בסוגריים מרובעים עם אינדקס', 'האלמנט השני הוא בפינדקס 1', 'הדפיסו arr[1]'],
  },
  {
    id: 20,
    title: 'אורך המערך',
    description: 'הדפס את גודל המערך [10, 20, 30, 40]',
    difficulty: 'קל',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40};
        // הדפס את אורך המערך
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40};
        Console.WriteLine(arr.Length);
    }
}`,
    testCases: [{ input: '', expectedOutput: '4', description: 'המערך בעל 4 אלמנטים' }],
    hints: ['השתמשו ב-.Length כדי לקבל את אורך המערך', 'זה מחזיר את מספר האלמנטים', 'הדפיסו את הערך'],
  },
  {
    id: 21,
    title: 'סכום מערך',
    description: 'חשב את סכום כל האלמנטים במערך [1, 2, 3, 4, 5]',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {1, 2, 3, 4, 5};
        // חשב את הסכום
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        foreach (int num in arr)
        {
            sum += num;
        }
        Console.WriteLine(sum);
    }
}`,
    testCases: [{ input: '', expectedOutput: '15', description: 'סכום 1+2+3+4+5=15' }],
    hints: ['השתמשו בלולאה foreach כדי לעבור על כל אלמנט', 'הוסיפו כל אלמנט לסכום', 'הדפיסו את הסכום הסופי'],
  },
  {
    id: 22,
    title: 'אלמנט אחרון',
    description: 'הדפס את האלמנט האחרון במערך [10, 20, 30, 40, 50]',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40, 50};
        // הדפס את האלמנט האחרון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40, 50};
        Console.WriteLine(arr[arr.Length - 1]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '50', description: 'האלמנט האחרון הוא 50' }],
    hints: ['האלמנט האחרון נמצא בפינדקס arr.Length - 1', 'השתמשו בנוסחה זו כדי למצוא אלמנט אחרון', 'הדפיסו את התוצאה'],
  },

  // ========================== מתודות ==========================
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

  // ========================== מחלקות ==========================
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

  // ========================== קולקציות ==========================
  {
    id: 28,
    title: 'List בסיסי',
    description: 'צור List, הוסף שלושה מספרים, והדפס את הראשון',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // צור List והוסף מספרים
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int>();
        numbers.Add(10);
        numbers.Add(20);
        numbers.Add(30);
        Console.WriteLine(numbers[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '10', description: 'הדפס את האלמנט הראשון' }],
    hints: ['השתמשו ב-List<int>', 'הוסיפו עם Add()', 'קבלו עם [0]'],
  },
  {
    id: 29,
    title: 'Dictionary בסיסי',
    description: 'צור Dictionary עם שמות וגילים, הדפס את הגיל של "Alice"',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // צור Dictionary עם שמות וגילים
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> ages = new Dictionary<string, int>();
        ages["Alice"] = 25;
        ages["Bob"] = 30;
        Console.WriteLine(ages["Alice"]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '25', description: 'הדפס את גיל Alice' }],
    hints: ['השתמשו ב-Dictionary<string, int>', 'הוסיפו עם ages["key"] = value', 'קבלו עם ages["Alice"]'],
  },

  // ========================== קשה/advanced ==========================
  {
    id: 30,
    title: 'פירמידה מספרים',
    description: 'כתוב לולאה שמדפיסה פירמידה:\n1\n1 2\n1 2 3',
    difficulty: 'קשה',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב לולאה כפולה לפירמידה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 3; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                Console.Write(j + " ");
            }
            Console.WriteLine();
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '1 \n1 2 \n1 2 3 \n', description: 'כתוב פירמידה' }],
    hints: ['השתמשו בלולאה כפולה', 'הלולאה הבחוצונית לשורות', 'הלולאה הפנימית למספרים בשורה'],
  },
  {
    id: 31,
    title: 'פיבונאצ\'י',
    description: 'כתוב תוכנית שמדפיסה את הסדרה הראשונה של 10 מספרי פיבונאצ\'י',
    difficulty: 'קשה',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // כתוב אלגוריתם פיבונאצ'י
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 0, b = 1;
        for (int i = 0; i < 10; i++)
        {
            Console.WriteLine(a);
            int temp = a + b;
            a = b;
            b = temp;
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n', description: 'הדפס 10 מספרי פיבונאצ\'י' }],
    hints: ['התחילו עם a=0, b=1', 'בכל איטרציה הדפיסו a', 'חשבו את הבא: temp = a+b, a=b, b=temp'],
  },
]
