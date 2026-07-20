import type { Exercise } from '../../types/exercise'

// תנאים
export const conditionsExercises: Exercise[] = [
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
  {
    id: 0,
    title: 'זוגי או אי-זוגי',
    description: 'קלטו מספר מהמשתמש והדפיסו "זוגי" אם הוא זוגי או "אי-זוגי" אם לא',
    difficulty: 'קל',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());
        // בדקו זוגיות עם % והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());
        if (number % 2 == 0)
        {
            Console.WriteLine("זוגי");
        }
        else
        {
            Console.WriteLine("אי-זוגי");
        }
    }
}`,
    testCases: [
      { input: '8', expectedOutput: 'זוגי', description: 'קלט: 8' },
      { input: '7', expectedOutput: 'אי-זוגי', description: 'קלט: 7' },
    ],
    hints: ['מספר זוגי מתחלק ב-2 בלי שארית', 'השתמשו ב-number % 2 == 0', 'אל תשכחו == להשוואה (לא =)'],
  },
  {
    id: 0,
    title: 'הגדול מבין שניים',
    description: 'קלטו שני מספרים (כל אחד בשורה נפרדת) והדפיסו את הגדול מביניהם',
    difficulty: 'קל',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        // הדפיסו את הגדול
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        if (a > b)
        {
            Console.WriteLine(a);
        }
        else
        {
            Console.WriteLine(b);
        }
    }
}`,
    testCases: [
      { input: '3\n9', expectedOutput: '9', description: 'קלט: 3 ואז 9' },
      { input: '12\n5', expectedOutput: '12', description: 'קלט: 12 ואז 5' },
    ],
    hints: ['השוו עם האופרטור >', 'אם a גדול — הדפיסו את a, אחרת את b', 'מה קורה כשהם שווים? else מדפיס את b — וזה בסדר, הם שווים'],
  },
  {
    id: 0,
    title: 'הגדול מבין שלושה',
    description: 'קלטו שלושה מספרים והדפיסו את הגדול מביניהם',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        // מצאו את הגדול מבין השלושה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        int max = a;
        if (b > max)
        {
            max = b;
        }
        if (c > max)
        {
            max = c;
        }
        Console.WriteLine(max);
    }
}`,
    testCases: [
      { input: '4\n9\n2', expectedOutput: '9', description: 'הגדול הוא 9' },
      { input: '1\n2\n10', expectedOutput: '10', description: 'הגדול הוא 10' },
    ],
    hints: ['התחילו ממשתנה max ששווה ל-a', 'השוו את max מול b ואז מול c ועדכנו אם צריך', 'זו טכניקה שתשמש אתכם המון גם עם מערכים'],
  },
  {
    id: 0,
    title: 'switch: יום בשבוע',
    description: 'קלטו מספר בין 1 ל-7 והדפיסו את שם היום המתאים בעזרת switch: 1=ראשון, 2=שני, 3=שלישי, 4=רביעי, 5=חמישי, 6=שישי, 7=שבת. לכל מספר אחר הדפיסו "לא חוקי"',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int day = int.Parse(Console.ReadLine());
        // כתבו switch עם case לכל יום
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int day = int.Parse(Console.ReadLine());
        switch (day)
        {
            case 1:
                Console.WriteLine("ראשון");
                break;
            case 2:
                Console.WriteLine("שני");
                break;
            case 3:
                Console.WriteLine("שלישי");
                break;
            case 4:
                Console.WriteLine("רביעי");
                break;
            case 5:
                Console.WriteLine("חמישי");
                break;
            case 6:
                Console.WriteLine("שישי");
                break;
            case 7:
                Console.WriteLine("שבת");
                break;
            default:
                Console.WriteLine("לא חוקי");
                break;
        }
    }
}`,
    testCases: [
      { input: '1', expectedOutput: 'ראשון', description: 'קלט: 1' },
      { input: '6', expectedOutput: 'שישי', description: 'קלט: 6' },
      { input: '9', expectedOutput: 'לא חוקי', description: 'קלט: 9' },
    ],
    hints: ['switch (day) ואז case לכל ערך', 'כל case חייב להסתיים ב-break', 'default תופס כל ערך שאין לו case'],
  },
  {
    id: 0,
    title: 'בדיקת טווח',
    description: 'קלטו ציון והדפיסו "תקין" אם הוא בין 0 ל-100 (כולל), אחרת הדפיסו "לא תקין"',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int grade = int.Parse(Console.ReadLine());
        // בדקו שהציון בטווח 0-100
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int grade = int.Parse(Console.ReadLine());
        if (grade >= 0 && grade <= 100)
        {
            Console.WriteLine("תקין");
        }
        else
        {
            Console.WriteLine("לא תקין");
        }
    }
}`,
    testCases: [
      { input: '85', expectedOutput: 'תקין', description: 'קלט: 85' },
      { input: '105', expectedOutput: 'לא תקין', description: 'קלט: 105' },
      { input: '0', expectedOutput: 'תקין', description: 'קלט: 0 (גבול!)' },
    ],
    hints: ['שני תנאים צריכים להתקיים ביחד — זה &&', 'גדול-או-שווה ל-0 וגם קטן-או-שווה ל-100', 'בדקו את מקרי הקצה: 0 ו-100 הם תקינים'],
  },
  {
    id: 0,
    title: 'אופרטור התנאי המקוצר',
    description: 'קלטו גיל והדפיסו "בגיר" אם הגיל 18 ומעלה או "קטין" אחרת — בשורת קוד אחת עם האופרטור ?:',
    difficulty: 'בינוני',
    topic: 'תנאים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int age = int.Parse(Console.ReadLine());
        // השתמשו ב: תנאי ? ערך-אם-כן : ערך-אם-לא
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int age = int.Parse(Console.ReadLine());
        string result = age >= 18 ? "בגיר" : "קטין";
        Console.WriteLine(result);
    }
}`,
    testCases: [
      { input: '20', expectedOutput: 'בגיר', description: 'קלט: 20' },
      { input: '15', expectedOutput: 'קטין', description: 'קלט: 15' },
      { input: '18', expectedOutput: 'בגיר', description: 'קלט: 18 (גבול!)' },
    ],
    hints: ['המבנה: condition ? valueIfTrue : valueIfFalse', 'age >= 18 ? "בגיר" : "קטין"', 'זה בדיוק if-else מקוצר שמחזיר ערך'],
  },
]
