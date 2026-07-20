import type { Exercise } from '../../types/exercise'

// אוספים
export const collectionsExercises: Exercise[] = [
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
  {
    id: 0,
    title: 'הוספה והסרה מ-List',
    description: 'צרו רשימת מספרים עם 1, 2, 3. הוסיפו את 4, הסירו את 2, והדפיסו את כמות האיברים ואז את כל האיברים בשורה אחת מופרדים ברווח',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3 };
        // הוסיפו 4, הסירו את 2, הדפיסו כמות ואיברים
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 1, 2, 3 };
        numbers.Add(4);
        numbers.Remove(2);
        Console.WriteLine(numbers.Count);
        foreach (int n in numbers)
        {
            Console.Write(n + " ");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '3\n1 3 4', description: 'אחרי הוספה והסרה: 1, 3, 4' }],
    hints: ['Add מוסיפה לסוף, Remove מסירה את הערך שביקשתם', 'Count (לא Length!) נותן את הכמות', 'Remove(2) מסירה את הערך 2 — לא את האינדקס 2'],
  },
  {
    id: 0,
    title: 'האם ברשימה?',
    description: 'צרו רשימת שמות עם "דנה", "יובל", "עומר". קלטו שם מהמשתמש והדפיסו "נמצא" אם הוא ברשימה או "לא נמצא" אחרת',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string> { "דנה", "יובל", "עומר" };
        string search = Console.ReadLine();
        // בדקו עם Contains
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string> { "דנה", "יובל", "עומר" };
        string search = Console.ReadLine();
        if (names.Contains(search))
        {
            Console.WriteLine("נמצא");
        }
        else
        {
            Console.WriteLine("לא נמצא");
        }
    }
}`,
    testCases: [
      { input: 'יובל', expectedOutput: 'נמצא', description: 'יובל ברשימה' },
      { input: 'רון', expectedOutput: 'לא נמצא', description: 'רון לא ברשימה' },
    ],
    hints: ['Contains עובדת על List בדיוק כמו על מחרוזות', 'היא מחזירה bool — מושלם ל-if', 'ההשוואה רגישה לרישיות ולרווחים'],
  },
  {
    id: 0,
    title: 'סכום רשימה שנבנית תוך כדי',
    description: 'קלטו מספרים מהמשתמש שורה-שורה עד שמוקלד 0, שמרו אותם ברשימה, ואז הדפיסו כמה מספרים נקלטו ומה סכומם',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int>();
        // קלטו עד 0, ואז הדפיסו כמות וסכום
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int>();
        int input = int.Parse(Console.ReadLine());
        while (input != 0)
        {
            numbers.Add(input);
            input = int.Parse(Console.ReadLine());
        }
        int sum = 0;
        foreach (int n in numbers)
        {
            sum += n;
        }
        Console.WriteLine(numbers.Count);
        Console.WriteLine(sum);
    }
}`,
    testCases: [{ input: '5\n8\n2\n0', expectedOutput: '3\n15', description: 'שלושה מספרים שסכומם 15' }],
    hints: ['בדיוק בשביל זה List קיימת — לא יודעים כמה איברים יהיו!', 'לולאת while שרצה עד שהקלט 0', 'ה-0 עצמו לא נכנס לרשימה'],
  },
  {
    id: 0,
    title: 'מיון והפיכה',
    description: 'נתונה רשימה: 30, 10, 20. מיינו אותה עם Sort והדפיסו את האיבר הראשון, ואז הפכו עם Reverse והדפיסו שוב את הראשון',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 30, 10, 20 };
        // מיינו, הדפיסו ראשון; הפכו, הדפיסו ראשון
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 30, 10, 20 };
        numbers.Sort();
        Console.WriteLine(numbers[0]);
        numbers.Reverse();
        Console.WriteLine(numbers[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '10\n30', description: 'אחרי מיון: 10 ראשון; אחרי הפיכה: 30' }],
    hints: ['Sort ממיינת מהקטן לגדול, במקום (בלי רשימה חדשה)', 'Reverse הופכת את הסדר הנוכחי', 'ניגשים לאיברים עם [] כמו במערך'],
  },
  {
    id: 0,
    title: 'מילון ציונים',
    description: 'צרו Dictionary עם ציונים: דנה-95, יובל-88. הוסיפו את עומר עם 76, ואז קלטו שם והדפיסו את הציון שלו',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 }
        };
        // הוסיפו את עומר, קלטו שם והדפיסו ציון
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 }
        };
        grades["עומר"] = 76;
        string name = Console.ReadLine();
        Console.WriteLine(grades[name]);
    }
}`,
    testCases: [
      { input: 'עומר', expectedOutput: '76', description: 'הציון של עומר' },
      { input: 'דנה', expectedOutput: '95', description: 'הציון של דנה' },
    ],
    hints: ['מוסיפים עם סוגריים מרובעים: grades["עומר"] = 76', 'שולפים באותה צורה: grades[name]', 'המפתח הוא השם, הערך הוא הציון'],
  },
  {
    id: 0,
    title: 'ContainsKey: בדיקה לפני שליפה',
    description: 'במילון הציונים הקודם, קלטו שם — אם הוא קיים הדפיסו את ציונו, אחרת הדפיסו "אין תלמיד כזה" (בלי לקרוס!)',
    difficulty: 'בינוני',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 }
        };
        string name = Console.ReadLine();
        // בדקו עם ContainsKey לפני הגישה
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 }
        };
        string name = Console.ReadLine();
        if (grades.ContainsKey(name))
        {
            Console.WriteLine(grades[name]);
        }
        else
        {
            Console.WriteLine("אין תלמיד כזה");
        }
    }
}`,
    testCases: [
      { input: 'דנה', expectedOutput: '95', description: 'תלמידה קיימת' },
      { input: 'רון', expectedOutput: 'אין תלמיד כזה', description: 'תלמיד לא קיים — בלי קריסה' },
    ],
    hints: ['שליפת מפתח שלא קיים מקריסה את התוכנית!', 'ContainsKey מחזירה bool', 'זו התבנית הבטוחה לעבודה עם מילונים'],
  },
  {
    id: 0,
    title: 'מעבר על מילון',
    description: 'עברו על מילון הציונים עם foreach והדפיסו כל תלמיד בפורמט "שם: ציון", ובסוף את ממוצע הציונים',
    difficulty: 'קשה',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 },
            { "עומר", 76 }
        };
        // foreach על המילון + חישוב ממוצע
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> grades = new Dictionary<string, int>
        {
            { "דנה", 95 },
            { "יובל", 88 },
            { "עומר", 76 }
        };
        int sum = 0;
        foreach (KeyValuePair<string, int> pair in grades)
        {
            Console.WriteLine($"{pair.Key}: {pair.Value}");
            sum += pair.Value;
        }
        double average = (double)sum / grades.Count;
        Console.WriteLine(average);
    }
}`,
    testCases: [{ input: '', expectedOutput: 'דנה: 95\nיובל: 88\nעומר: 76\n86.33333333333333', description: 'כל הזוגות ואז הממוצע' }],
    hints: ['כל איבר במילון הוא KeyValuePair עם Key ו-Value', 'foreach (KeyValuePair<string, int> pair in grades)', 'סכמו את pair.Value וחלקו ב-grades.Count'],
  },
  {
    id: 0,
    title: 'HashSet: בלי כפילויות',
    description: 'קלטו 5 מילים מהמשתמש והכניסו אותן ל-HashSet. הדפיסו כמה מילים שונות היו (כפילויות נבלעות אוטומטית!)',
    difficulty: 'קשה',
    topic: 'אוספים',
    starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        HashSet<string> words = new HashSet<string>();
        // קלטו 5 מילים והדפיסו כמה ייחודיות
    }
}`,
    solution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        HashSet<string> words = new HashSet<string>();
        for (int i = 0; i < 5; i++)
        {
            words.Add(Console.ReadLine());
        }
        Console.WriteLine(words.Count);
    }
}`,
    testCases: [
      { input: 'חתול\nכלב\nחתול\nדג\nכלב', expectedOutput: '3', description: '5 מילים, 3 ייחודיות' },
      { input: 'a\nb\nc\nd\ne', expectedOutput: '5', description: 'כולן שונות' },
    ],
    hints: ['HashSet פשוט מתעלם מ-Add של ערך שכבר קיים', 'לא צריך לבדוק כלום — הוא עושה את העבודה', 'Count נותן את מספר הערכים הייחודיים'],
  },
]
