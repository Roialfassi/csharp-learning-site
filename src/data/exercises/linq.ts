import type { Exercise } from '../../types/exercise'

// LINQ
export const linqExercises: Exercise[] = [
  {
    id: 0,
    title: 'Where: סינון ראשון',
    description: 'נתון מערך מספרים. סננו עם Where רק את הזוגיים והדפיסו אותם, כל אחד בשורה',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 8, 12, 5, 6, 9 };
        // סננו זוגיים עם Where והדפיסו
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 8, 12, 5, 6, 9 };
        var evens = numbers.Where(n => n % 2 == 0);
        foreach (int n in evens)
        {
            Console.WriteLine(n);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '8\n12\n6', description: 'רק הזוגיים' }],
    hints: ['אל תשכחו using System.Linq;', 'Where(n => תנאי) — ה-n הוא כל איבר בתורו', 'החץ => קורא "עבור n, החזר..."'],
  },
  {
    id: 0,
    title: 'Select: שינוי כל איבר',
    description: 'הכפילו כל איבר במערך ב-10 בעזרת Select והדפיסו את התוצאות',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };
        // הכפילו כל איבר ב-10 עם Select
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };
        var multiplied = numbers.Select(n => n * 10);
        foreach (int n in multiplied)
        {
            Console.WriteLine(n);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '10\n20\n30', description: 'כל איבר הוכפל' }],
    hints: ['Select הופך כל איבר לערך חדש', 'Select(n => n * 10)', 'ההבדל מ-Where: Select משנה, Where מסנן'],
  },
  {
    id: 0,
    title: 'Count עם תנאי',
    description: 'ספרו כמה מספרים במערך גדולים מ-10 והדפיסו את המספר',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 5, 15, 8, 22, 3, 11 };
        // ספרו כמה גדולים מ-10
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 5, 15, 8, 22, 3, 11 };
        Console.WriteLine(numbers.Count(n => n > 10));
    }
}`,
    testCases: [{ input: '', expectedOutput: '3', description: '15, 22 ו-11' }],
    hints: ['Count יכולה לקבל תנאי ישירות', 'numbers.Count(n => n > 10)', 'זה מחליף לולאה שלמה עם מונה'],
  },
  {
    id: 0,
    title: 'Sum, Average, Max, Min',
    description: 'הדפיסו בארבע שורות: הסכום, הממוצע, המקסימום והמינימום של המערך',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] grades = { 80, 95, 70, 85 };
        // סכום, ממוצע, מקסימום, מינימום
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] grades = { 80, 95, 70, 85 };
        Console.WriteLine(grades.Sum());
        Console.WriteLine(grades.Average());
        Console.WriteLine(grades.Max());
        Console.WriteLine(grades.Min());
    }
}`,
    testCases: [{ input: '', expectedOutput: '330\n82.5\n95\n70', description: 'ארבע פעולות צבירה' }],
    hints: ['כל אחת מהן היא קריאה אחת בלי פרמטרים', 'Average מחזירה double אוטומטית — בלי מלכודת חלוקת שלמים!', 'ארבע השורות האלה מחליפות ארבע לולאות'],
  },
  {
    id: 0,
    title: 'OrderBy: מיון',
    description: 'מיינו את המערך מהקטן לגדול והדפיסו, ואז מיינו מהגדול לקטן והדפיסו את האיבר הראשון בלבד',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 30, 10, 20 };
        // מיון עולה והדפסה, ואז יורד — רק הראשון
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 30, 10, 20 };
        foreach (int n in numbers.OrderBy(n => n))
        {
            Console.WriteLine(n);
        }
        Console.WriteLine(numbers.OrderByDescending(n => n).First());
    }
}`,
    testCases: [{ input: '', expectedOutput: '10\n20\n30\n30', description: 'מיון עולה ואז הגדול ביותר' }],
    hints: ['OrderBy(n => n) ממיין לפי הערך עצמו', 'OrderByDescending ממיין הפוך', 'First() מחזירה את האיבר הראשון'],
  },
  {
    id: 0,
    title: 'שרשור: Where ואז Select',
    description: 'מהמערך, קחו רק את המספרים הגדולים מ-5, הכפילו אותם ב-2 והדפיסו את התוצאות',
    difficulty: 'קשה',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 7, 2, 9, 6 };
        // סננו > 5, הכפילו ב-2, הדפיסו
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 7, 2, 9, 6 };
        var result = numbers.Where(n => n > 5).Select(n => n * 2);
        foreach (int n in result)
        {
            Console.WriteLine(n);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '14\n18\n12', description: '7,9,6 הוכפלו' }],
    hints: ['אפשר לשרשר פעולות בנקודה: .Where(...).Select(...)', 'הסדר חשוב: קודם מסננים ואז משנים', 'כל פעולה מקבלת את התוצאה של הקודמת'],
  },
  {
    id: 0,
    title: 'Any ו-All',
    description: 'הדפיסו True/False לשתי שאלות: האם יש במערך מספר שלילי? והאם כל המספרים חיוביים?',
    difficulty: 'בינוני',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 4, 8, 15, 16 };
        // Any לשלילי, All לחיוביים
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 4, 8, 15, 16 };
        Console.WriteLine(numbers.Any(n => n < 0));
        Console.WriteLine(numbers.All(n => n > 0));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'False\nTrue', description: 'אין שליליים, כולם חיוביים' }],
    hints: ['Any = "האם קיים לפחות אחד ש..."', 'All = "האם כולם מקיימים..."', 'שתיהן מחזירות bool'],
  },
  {
    id: 0,
    title: 'LINQ על אובייקטים',
    description: 'נתונה רשימת תלמידים. סננו את מי שציונו מעל 85, מיינו לפי שם, והדפיסו את שמותיהם',
    difficulty: 'קשה',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "יובל", Grade = 92 },
            new Student { Name = "דנה", Grade = 78 },
            new Student { Name = "עומר", Grade = 88 }
        };
        // סננו > 85, מיינו לפי שם, הדפיסו שמות
    }
}`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "יובל", Grade = 92 },
            new Student { Name = "דנה", Grade = 78 },
            new Student { Name = "עומר", Grade = 88 }
        };

        var top = students.Where(s => s.Grade > 85).OrderBy(s => s.Name);
        foreach (Student s in top)
        {
            Console.WriteLine(s.Name);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'יובל\nעומר', description: 'שני המצטיינים לפי סדר א"ב' }],
    hints: ['בתוך ה-lambda ניגשים ל-properties: s.Grade', 'OrderBy(s => s.Name) ממיין לפי שדה', 'כאן LINQ באמת זורח — נסו לכתוב את זה בלולאות!'],
  },
  {
    id: 0,
    title: 'FirstOrDefault',
    description: 'מצאו את התלמיד הראשון עם ציון מעל 90. אם קיים הדפיסו את שמו, אחרת הדפיסו "אין מצטיינים"',
    difficulty: 'קשה',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "דנה", Grade = 78 },
            new Student { Name = "יובל", Grade = 95 }
        };
        // FirstOrDefault + בדיקת null
    }
}`,
    solution: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "דנה", Grade = 78 },
            new Student { Name = "יובל", Grade = 95 }
        };

        Student top = students.FirstOrDefault(s => s.Grade > 90);
        if (top != null)
        {
            Console.WriteLine(top.Name);
        }
        else
        {
            Console.WriteLine("אין מצטיינים");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'יובל', description: 'נמצא מצטיין' }],
    hints: ['First זורקת שגיאה כשאין תוצאה; FirstOrDefault מחזירה null', 'תמיד בדקו != null אחריה — זוכרים את מודול ההפניות?', 'זו הדרך הבטוחה לחפש'],
  },
  {
    id: 0,
    title: 'GroupBy: קיבוץ',
    description: 'קבצו את המספרים לזוגיים ואי-זוגיים והדפיסו לכל קבוצה כמה איברים יש בה בפורמט "זוגי: 3" ו-"אי-זוגי: 2"',
    difficulty: 'קשה',
    topic: 'LINQ',
    starterCode: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 6 };
        // קבצו לפי זוגיות והדפיסו ספירה לכל קבוצה
    }
}`,
    solution: `using System;
using System.Linq;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 6 };
        var groups = numbers.GroupBy(n => n % 2 == 0 ? "זוגי" : "אי-זוגי");
        foreach (var group in groups)
        {
            Console.WriteLine($"{group.Key}: {group.Count()}");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אי-זוגי: 2\nזוגי: 3', description: 'שתי קבוצות עם ספירה' }],
    hints: ['GroupBy מקבצת לפי מפתח שאתם מחשבים', 'לכל קבוצה יש Key (המפתח) ואפשר לספור אותה עם Count()', 'הקבוצות מופיעות לפי סדר ההופעה הראשונה'],
  },
]
