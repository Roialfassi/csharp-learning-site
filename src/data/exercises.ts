import { Exercise } from '../types/exercise'

export const exercises: Exercise[] = [
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
    hints: [
      'השתמשו בפונקציה Console.WriteLine()',
      'ההודעה צריכה להיות בתוך גרשיים',
      'אל תשכחו את הנקודה-פסיק בסוף השורה',
    ],
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
    testCases: [
      {
        input: '',
        expectedOutput: 'Alice',
        description: 'הדפס את ערך המשתנה',
      },
    ],
    hints: [
      'משתנה string מתחיל בקוד: string name = "...";',
      'ערך המשתנה צריך להיות Alice',
      'השתמשו ב-Console.WriteLine כדי להדפיס',
    ],
  },
  {
    id: 3,
    title: 'תנאי if פשוט',
    description:
      'כתוב תוכנית שמדפיסה "גדול" אם x גדול מ-5, אחרת "קטן או שווה"',
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
    testCases: [
      {
        input: '',
        expectedOutput: 'גדול',
        description: 'כאשר x = 10, צריך להדפיס גדול',
      },
    ],
    hints: [
      'השתמשו ב-if לתנאי',
      'השוו את x עם 5 באמצעות >',
      'הדפיסו "גדול" או "קטן או שווה" בהתאם לתנאי',
    ],
  },
  {
    id: 4,
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
    testCases: [
      {
        input: '',
        expectedOutput: '1\n2\n3\n4\n5',
        description: 'הדפס את המספרים מ-1 עד 5',
      },
    ],
    hints: [
      'השתמשו בלולאת for',
      'התחילו מ-i = 1 וסיימו כאשר i <= 5',
      'הגדילו את i בכל איטרציה',
    ],
  },
  {
    id: 5,
    title: 'חיבור שני מספרים',
    description:
      'כתוב תוכנית שמחברת שני מספרים (3 ו-7) ומדפיסה את הסכום',
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
    testCases: [
      {
        input: '',
        expectedOutput: '10',
        description: 'הדפס את הסכום של 3 ו-7',
      },
    ],
    hints: [
      'השתמשו ב- + לחיבור',
      'שמרו את התוצאה במשתנה בשם sum',
      'הדפיסו את sum',
    ],
  },
  {
    id: 6,
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
    testCases: [
      {
        input: '',
        expectedOutput: '1\n2\n3',
        description: 'הדפס 1, 2, 3 בעזרת while',
      },
    ],
    hints: [
      'הגדירו משתנה i = 1 לפני הלולאה',
      'הלולאה צריכה להמשיך כל עוד i <= 3',
      'הגדילו את i בכל איטרציה עם i++',
    ],
  },
  {
    id: 7,
    title: 'לולאה foreach על טקסט',
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
    testCases: [
      {
        input: '',
        expectedOutput: 'H\ne\nl\nl\no',
        description: 'הדפס כל תו של Hello בשורה נפרדת',
      },
    ],
    hints: [
      'השתמשו בchar כטיפוס של המשתנה בלולאה',
      'השתמשו ב-foreach כדי לעבור על הטקסט',
      'הדפיסו כל תו בשורה נפרדת',
    ],
  },
  {
    id: 8,
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
    testCases: [
      {
        input: '',
        expectedOutput: '10',
        description: 'הדפס את האלמנט הראשון של המערך',
      },
    ],
    hints: [
      'השתמשו בסוגריים מרובעים [ ] להגדרת מערך',
      'האינדקס של האלמנט הראשון הוא 0',
      'הדפיסו numbers[0]',
    ],
  },
  {
    id: 9,
    title: 'שגיאה במערך - תוקן',
    description: 'תקן את הקוד - הגדר מערך ודפס את האלמנט השני',
    difficulty: 'בינוני',
    topic: 'יסודות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        Console.WriteLine(arr[3]); // זה יגרום לשגיאה!
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        Console.WriteLine(arr[1]); // האלמנט השני באינדקס 1
    }
}`,
    testCases: [
      {
        input: '',
        expectedOutput: '15',
        description: 'הדפס את האלמנט השני (15)',
      },
    ],
    hints: [
      'האלמנט השני נמצא באינדקס 1, לא 3',
      'האינדקס מתחיל מ-0',
      'המערך יש רק 3 אלמנטים',
    ],
  },
  {
    id: 10,
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
    testCases: [
      {
        input: '',
        expectedOutput: '5\n10\n15\n20\n25',
        description: 'הדפס את תוצאות הכפל של 5',
      },
    ],
    hints: [
      'השתמשו בלולאת for מ-1 עד 5',
      'חשבו את 5 * i בכל איטרציה',
      'הדפיסו את התוצאה',
    ],
  },
]
