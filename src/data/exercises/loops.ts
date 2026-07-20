import type { Exercise } from '../../types/exercise'

// לולאות
export const loopsExercises: Exercise[] = [
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
  {
    id: 0,
    title: 'ספירה לאחור',
    description: 'הדפיסו ספירה לאחור מ-5 עד 1, ואז את המילה "שיגור!"',
    difficulty: 'קל',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // לולאת for שסופרת לאחור מ-5 עד 1
        // ואז הדפיסו: שיגור!
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        for (int i = 5; i >= 1; i--)
        {
            Console.WriteLine(i);
        }
        Console.WriteLine("שיגור!");
    }
}`,
    testCases: [{ input: '', expectedOutput: '5\n4\n3\n2\n1\nשיגור!', description: 'ספירה לאחור ואז שיגור' }],
    hints: ['מתחילים מ-i = 5 במקום מ-0', 'התנאי הוא i >= 1', 'במקום i++ משתמשים ב-i--'],
  },
  {
    id: 0,
    title: 'סכום מ-1 עד N',
    description: 'קלטו מספר N והדפיסו את סכום כל המספרים מ-1 עד N. למשל עבור 5: 1+2+3+4+5 = 15',
    difficulty: 'בינוני',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        // סכמו את המספרים מ-1 עד n בלולאה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int sum = 0;
        for (int i = 1; i <= n; i++)
        {
            sum += i;
        }
        Console.WriteLine(sum);
    }
}`,
    testCases: [
      { input: '5', expectedOutput: '15', description: '1+2+3+4+5 = 15' },
      { input: '100', expectedOutput: '5050', description: 'הסכום מ-1 עד 100' },
    ],
    hints: ['צרו משתנה sum שמתחיל מ-0 לפני הלולאה', 'בכל סיבוב הוסיפו את i לסכום עם +=', 'שימו לב שהתנאי הוא i <= n (כולל n!)'],
  },
  {
    id: 0,
    title: 'מלבן כוכביות',
    description: 'קלטו שני מספרים: מספר שורות ומספר עמודות, והדפיסו מלבן של כוכביות בגודל המתאים. תצטרכו לולאה בתוך לולאה!',
    difficulty: 'בינוני',
    topic: 'לולאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int cols = int.Parse(Console.ReadLine());
        // לולאה חיצונית לשורות, פנימית לעמודות
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int cols = int.Parse(Console.ReadLine());
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}`,
    testCases: [
      { input: '3\n4', expectedOutput: '****\n****\n****', description: '3 שורות של 4 כוכביות' },
      { input: '2\n2', expectedOutput: '**\n**', description: 'ריבוע 2x2' },
    ],
    hints: ['הלולאה החיצונית רצה פעם אחת לכל שורה', 'הלולאה הפנימית מדפיסה כוכבית אחת בכל פעם עם Console.Write', 'אחרי הלולאה הפנימית — Console.WriteLine() ריק כדי לרדת שורה'],
  },
]
