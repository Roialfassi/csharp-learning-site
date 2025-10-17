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
]
