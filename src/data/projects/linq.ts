import type { Project } from '../../types/project'

export const linqProject: Project = {
  topicId: 'linq',
  title: 'מערכת ניהול התלמידים',
  subtitle: 'הפרויקט המסכם: מסד נתונים קטן עם דוחות, סינונים וסטטיסטיקות — הכל ב-LINQ',
  icon: '🎓',
  description: [
    'הפרויקט האחרון של המסלול: מערכת שמנהלת תלמידים ומפיקה דוחות אמיתיים — מצטיינים, נכשלים, ממוצעים לפי כיתה, ודירוגים.',
    'תשתמשו בכל מה שלמדתם במסלול: מחלקות, אוספים, לולאות — אבל את כל השאילתות תכתבו ב-LINQ. שימו לב תוך כדי כמה קוד לא כתבתם.',
  ],
  finalPreview: `=== מערכת ניהול התלמידים ===
סה"כ תלמידים: 6

--- מצטיינים (מעל 85) ---
יובל לוי (ט'1): 95
נועה כהן (ט'2): 92
עומר דוד (ט'1): 88

--- ממוצע לפי כיתה ---
ט'1: 82.33 (3 תלמידים)
ט'2: 79.67 (3 תלמידים)

--- סטטיסטיקה כללית ---
הציון הגבוה: 95 (יובל לוי)
הציון הנמוך: 55 (רון אבני)
ממוצע כללי: 81
אחוז עוברים: 83%`,
  steps: [
    {
      title: 'מחלקת התלמיד והנתונים',
      goal: 'רשימת תלמידים מוכנה לשאילתות',
      instructions: [
        'צרו `class Student` עם properties: `Name` (string), `ClassName` (string), `Grade` (int).',
        'ב-`Main`, בנו `List<Student>` עם 6 תלמידים משתי כיתות (ט\'1 ו-ט\'2) עם ציונים מגוונים — כולל אחד מתחת ל-55.',
        'הדפיסו `סה"כ תלמידים: X` בעזרת `Count`.',
        'אל תשכחו: `using System.Linq;` ו-`using System.Collections.Generic;`',
      ],
      code: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public string ClassName { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "יובל לוי", ClassName = "ט'1", Grade = 95 },
            new Student { Name = "נועה כהן", ClassName = "ט'2", Grade = 92 },
            new Student { Name = "עומר דוד", ClassName = "ט'1", Grade = 88 },
            new Student { Name = "מאיה שרון", ClassName = "ט'2", Grade = 76 },
            new Student { Name = "רון אבני", ClassName = "ט'1", Grade = 55 },
            new Student { Name = "טל בר", ClassName = "ט'2", Grade = 71 }
        };

        Console.WriteLine("=== מערכת ניהול התלמידים ===");
        Console.WriteLine($"סה\\"כ תלמידים: {students.Count}");
    }
}`,
      checkpoint: 'מודפס: סה"כ תלמידים: 6',
    },
    {
      title: 'דוח מצטיינים',
      goal: 'Where + OrderByDescending בשרשור',
      instructions: [
        'הפיקו דוח מצטיינים: סננו תלמידים עם ציון מעל 85, מיינו מהגבוה לנמוך.',
        'הדפיסו כותרת `--- מצטיינים (מעל 85) ---` ואז כל תלמיד בפורמט `שם (כיתה): ציון`.',
        'טיפ: כתבו את השרשור בשורות נפרדות — זה קריא הרבה יותר.',
      ],
      code: `Console.WriteLine("--- מצטיינים (מעל 85) ---");
var top = students
    .Where(s => s.Grade > 85)
    .OrderByDescending(s => s.Grade);

foreach (Student s in top)
{
    Console.WriteLine($"{s.Name} ({s.ClassName}): {s.Grade}");
}`,
      checkpoint: 'שלושה מצטיינים מודפסים לפי סדר יורד של ציון.',
      checkpointOutput: `--- מצטיינים (מעל 85) ---
יובל לוי (ט'1): 95
נועה כהן (ט'2): 92
עומר דוד (ט'1): 88`,
    },
    {
      title: 'ממוצע לפי כיתה',
      goal: 'GroupBy עם חישוב לכל קבוצה',
      instructions: [
        'קבצו את התלמידים לפי `ClassName` עם `GroupBy`.',
        'לכל קבוצה הדפיסו: `כיתה: ממוצע (N תלמידים)`.',
        'בתוך הקבוצה אפשר להשתמש ב-`group.Average(s => s.Grade)` ו-`group.Count()`.',
        'עגלו את הממוצע לשתי ספרות עם `Math.Round`.',
      ],
      code: `Console.WriteLine("--- ממוצע לפי כיתה ---");
var byClass = students.GroupBy(s => s.ClassName);

foreach (var group in byClass)
{
    double avg = Math.Round(group.Average(s => s.Grade), 2);
    Console.WriteLine($"{group.Key}: {avg} ({group.Count()} תלמידים)");
}`,
      checkpoint: 'שתי כיתות עם ממוצע וספירה נכונים לכל אחת.',
    },
    {
      title: 'סטטיסטיקה כללית',
      goal: 'Max, Min, Average ואחוזים',
      instructions: [
        'הדפיסו `--- סטטיסטיקה כללית ---`.',
        'הציון הגבוה ושם בעליו: השתמשו ב-`students.Max(s => s.Grade)` ואז מצאו את התלמיד עם `FirstOrDefault`. (או פשוט: `OrderByDescending(...).First()`.)',
        'אותו דבר לציון הנמוך.',
        'ממוצע כללי עם `Average`, ואחוז העוברים: `Count(s => s.Grade >= 55) * 100 / Count` — שימו לב לחלוקת שלמים!',
      ],
      code: `Console.WriteLine("--- סטטיסטיקה כללית ---");

Student best = students.OrderByDescending(s => s.Grade).First();
Student worst = students.OrderBy(s => s.Grade).First();
Console.WriteLine($"הציון הגבוה: {best.Grade} ({best.Name})");
Console.WriteLine($"הציון הנמוך: {worst.Grade} ({worst.Name})");
Console.WriteLine($"ממוצע כללי: {Math.Round(students.Average(s => s.Grade), 2)}");

double passRate = students.Count(s => s.Grade >= 55) * 100.0 / students.Count;
Console.WriteLine($"אחוז עוברים: {Math.Round(passRate)}%");`,
      checkpoint: 'כל ארבע השורות מציגות נתונים נכונים (בדקו ידנית אחת מהן!).',
    },
    {
      title: 'חיפוש אינטראקטיבי + אתגרים',
      goal: 'המערכת המלאה',
      instructions: [
        'הוסיפו חיפוש: קלטו שם (או חלק ממנו) והציגו את התלמידים שמתאימים — רמז: `Where(s => s.Name.Contains(query))`.',
        'אם לא נמצא אף אחד — הדפיסו `לא נמצאו תלמידים`. (השתמשו ב-`Any()` כדי לבדוק.)',
        'אתגר 1: הוסיפו דוח "נכשלים" (מתחת ל-55) ממוין לפי שם.',
        'אתגר 2: הדפיסו את שלושת התלמידים המובילים בלבד — רמז: `Take(3)`.',
        'אתגר 3: מצאו את הכיתה עם הממוצע הגבוה ביותר.',
      ],
      code: `Console.Write("חיפוש תלמיד: ");
string query = Console.ReadLine();
var found = students.Where(s => s.Name.Contains(query));

if (found.Any())
{
    foreach (Student s in found)
    {
        Console.WriteLine($"{s.Name} ({s.ClassName}): {s.Grade}");
    }
}
else
{
    Console.WriteLine("לא נמצאו תלמידים");
}`,
      checkpoint: 'החיפוש עובד, כל הדוחות מודפסים — סיימתם את הפרויקט האחרון ואת כל המסלול! 🎉🎓',
    },
  ],
  fullSolution: `using System;
using System.Linq;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public string ClassName { get; set; }
    public int Grade { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "יובל לוי", ClassName = "ט'1", Grade = 95 },
            new Student { Name = "נועה כהן", ClassName = "ט'2", Grade = 92 },
            new Student { Name = "עומר דוד", ClassName = "ט'1", Grade = 88 },
            new Student { Name = "מאיה שרון", ClassName = "ט'2", Grade = 76 },
            new Student { Name = "רון אבני", ClassName = "ט'1", Grade = 55 },
            new Student { Name = "טל בר", ClassName = "ט'2", Grade = 71 }
        };

        Console.WriteLine("=== מערכת ניהול התלמידים ===");
        Console.WriteLine($"סה\\"כ תלמידים: {students.Count}");
        Console.WriteLine();

        Console.WriteLine("--- מצטיינים (מעל 85) ---");
        foreach (Student s in students.Where(s => s.Grade > 85).OrderByDescending(s => s.Grade))
        {
            Console.WriteLine($"{s.Name} ({s.ClassName}): {s.Grade}");
        }
        Console.WriteLine();

        Console.WriteLine("--- ממוצע לפי כיתה ---");
        foreach (var group in students.GroupBy(s => s.ClassName).OrderBy(g => g.Key))
        {
            double avg = Math.Round(group.Average(s => s.Grade), 2);
            Console.WriteLine($"{group.Key}: {avg} ({group.Count()} תלמידים)");
        }
        Console.WriteLine();

        Console.WriteLine("--- סטטיסטיקה כללית ---");
        Student best = students.OrderByDescending(s => s.Grade).First();
        Student worst = students.OrderBy(s => s.Grade).First();
        Console.WriteLine($"הציון הגבוה: {best.Grade} ({best.Name})");
        Console.WriteLine($"הציון הנמוך: {worst.Grade} ({worst.Name})");
        Console.WriteLine($"ממוצע כללי: {Math.Round(students.Average(s => s.Grade), 2)}");

        double passRate = students.Count(s => s.Grade >= 55) * 100.0 / students.Count;
        Console.WriteLine($"אחוז עוברים: {Math.Round(passRate)}%");
        Console.WriteLine();

        Console.WriteLine("--- שלושת המובילים ---");
        foreach (Student s in students.OrderByDescending(s => s.Grade).Take(3))
        {
            Console.WriteLine($"{s.Name}: {s.Grade}");
        }
        Console.WriteLine();

        Console.Write("חיפוש תלמיד: ");
        string query = Console.ReadLine();
        var found = students.Where(s => s.Name.Contains(query));
        if (found.Any())
        {
            foreach (Student s in found)
            {
                Console.WriteLine($"{s.Name} ({s.ClassName}): {s.Grade}");
            }
        }
        else
        {
            Console.WriteLine("לא נמצאו תלמידים");
        }
    }
}`,
}
