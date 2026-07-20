import type { Project } from '../../types/project'

export const methodsProject: Project = {
  topicId: 'methods',
  title: 'מחשבון קונסולה',
  subtitle: 'מחשבון אמיתי עם תפריט — בנוי כולו ממתודות קטנות ונקיות',
  icon: '🧮',
  description: [
    'תבנו מחשבון קונסולה מלא: המשתמש בוחר פעולה מתפריט, מקליד שני מספרים, ומקבל תוצאה. המחשבון ממשיך לעבוד עד שבוחרים לצאת.',
    'הטוויסט: כל פעולה תהיה מתודה נפרדת. ככה נראה קוד של מתכנתים אמיתיים — `Main` קצר שמנצח על מתודות קטנות.',
  ],
  finalPreview: `=== המחשבון שלי ===
בחרו פעולה: + - * / (או "יציאה")
+
מספר ראשון: 8
מספר שני: 5
תוצאה: 13
בחרו פעולה: + - * / (או "יציאה")
/
מספר ראשון: 10
מספר שני: 0
אי אפשר לחלק באפס!
בחרו פעולה: + - * / (או "יציאה")
יציאה
להתראות! ביצעתם 2 חישובים`,
  steps: [
    {
      title: 'ארבע מתודות חישוב',
      goal: 'Add, Subtract, Multiply, Divide — הלב של המחשבון',
      instructions: [
        'כתבו ארבע מתודות, כל אחת מקבלת שני `double` ומחזירה `double`: `Add`, `Subtract`, `Multiply`, `Divide`.',
        'ב-`Main`, בדקו אותן זמנית: הדפיסו את `Add(8, 5)` ואת `Divide(10, 4)`.',
      ],
      code: `using System;

class Program
{
    static double Add(double a, double b)
    {
        return a + b;
    }

    static double Subtract(double a, double b)
    {
        return a - b;
    }

    static double Multiply(double a, double b)
    {
        return a * b;
    }

    static double Divide(double a, double b)
    {
        return a / b;
    }

    static void Main()
    {
        Console.WriteLine(Add(8, 5));      // 13
        Console.WriteLine(Divide(10, 4));  // 2.5
    }
}`,
      checkpoint: 'שתי ההדפסות הזמניות מציגות 13 ו-2.5.',
    },
    {
      title: 'מתודה לקליטת מספר',
      goal: 'ReadNumber — כי גם קלט מגיע למתודה',
      instructions: [
        'שימו לב שקליטת מספר (הדפסת בקשה + ReadLine + Parse) תחזור הרבה פעמים — מושלם למתודה!',
        'כתבו `static double ReadNumber(string message)` שמדפיסה את ההודעה, קולטת ומחזירה `double`.',
        'החליפו את הבדיקות הזמניות ב: קליטת שני מספרים והדפסת חיבורם.',
      ],
      code: `static double ReadNumber(string message)
{
    Console.Write(message);
    return double.Parse(Console.ReadLine());
}

static void Main()
{
    double a = ReadNumber("מספר ראשון: ");
    double b = ReadNumber("מספר שני: ");
    Console.WriteLine($"תוצאה: {Add(a, b)}");
}`,
      checkpoint: 'התוכנית קולטת שני מספרים ומדפיסה את סכומם.',
    },
    {
      title: 'בחירת פעולה',
      goal: 'switch שמנתב לפי הפעולה שנבחרה',
      instructions: [
        'קלטו מהמשתמש את הפעולה הרצויה: `+`, `-`, `*` או `/`.',
        'השתמשו ב-`switch` על המחרוזת כדי לקרוא למתודה הנכונה ולשמור את התוצאה.',
        'ב-`default` הדפיסו `פעולה לא מוכרת`.',
      ],
      code: `Console.WriteLine("בחרו פעולה: + - * / (או \\"יציאה\\")");
string op = Console.ReadLine();
double a = ReadNumber("מספר ראשון: ");
double b = ReadNumber("מספר שני: ");

switch (op)
{
    case "+":
        Console.WriteLine($"תוצאה: {Add(a, b)}");
        break;
    case "-":
        Console.WriteLine($"תוצאה: {Subtract(a, b)}");
        break;
    case "*":
        Console.WriteLine($"תוצאה: {Multiply(a, b)}");
        break;
    case "/":
        Console.WriteLine($"תוצאה: {Divide(a, b)}");
        break;
    default:
        Console.WriteLine("פעולה לא מוכרת");
        break;
}`,
      checkpoint: 'כל אחת מארבע הפעולות עובדת, ופעולה לא מוכרת מקבלת הודעה מתאימה.',
    },
    {
      title: 'לולאת התפריט',
      goal: 'המחשבון ממשיך עד שבוחרים לצאת',
      instructions: [
        'עטפו את הכל בלולאה שממשיכה עד שהמשתמש מקליד `יציאה`.',
        'שימו לב לסדר: קודם קולטים את הפעולה, בודקים אם היא `יציאה` (עם `break`), ורק אז קולטים מספרים.',
        'הוסיפו מונה חישובים והדפיסו אותו בהודעת הפרידה.',
      ],
      code: `int calculations = 0;
while (true)
{
    Console.WriteLine("בחרו פעולה: + - * / (או \\"יציאה\\")");
    string op = Console.ReadLine();
    if (op == "יציאה")
    {
        break;
    }
    double a = ReadNumber("מספר ראשון: ");
    double b = ReadNumber("מספר שני: ");
    // ... ה-switch מהשלב הקודם ...
    calculations++;
}
Console.WriteLine($"להתראות! ביצעתם {calculations} חישובים");`,
      checkpoint: 'אפשר לבצע כמה חישובים ברצף, ו"יציאה" מסיימת עם ספירה נכונה.',
    },
    {
      title: 'הגנה מחלוקה באפס',
      goal: 'מחשבון שלא נשבר',
      instructions: [
        'מה קורה כשמחלקים ב-0? נסו! (עם double תקבלו ∞ — אבל אנחנו רוצים הודעה יפה).',
        'ב-case של החלוקה, בדקו אם `b == 0` — אם כן הדפיסו `אי אפשר לחלק באפס!` במקום לחשב.',
        'אתגר רשות: הוסיפו פעולה חמישית `%` (שארית), או מתודה `Power` לחזקה עם לולאה.',
      ],
      code: `case "/":
    if (b == 0)
    {
        Console.WriteLine("אי אפשר לחלק באפס!");
    }
    else
    {
        Console.WriteLine($"תוצאה: {Divide(a, b)}");
    }
    break;`,
      checkpoint: 'חלוקה באפס מדפיסה הודעה יפה, וכל שאר הפעולות עובדות — המחשבון שלכם מוכן! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static double Add(double a, double b)
    {
        return a + b;
    }

    static double Subtract(double a, double b)
    {
        return a - b;
    }

    static double Multiply(double a, double b)
    {
        return a * b;
    }

    static double Divide(double a, double b)
    {
        return a / b;
    }

    static double ReadNumber(string message)
    {
        Console.Write(message);
        return double.Parse(Console.ReadLine());
    }

    static void Main()
    {
        Console.WriteLine("=== המחשבון שלי ===");
        int calculations = 0;

        while (true)
        {
            Console.WriteLine("בחרו פעולה: + - * / (או \\"יציאה\\")");
            string op = Console.ReadLine();
            if (op == "יציאה")
            {
                break;
            }

            double a = ReadNumber("מספר ראשון: ");
            double b = ReadNumber("מספר שני: ");

            switch (op)
            {
                case "+":
                    Console.WriteLine($"תוצאה: {Add(a, b)}");
                    calculations++;
                    break;
                case "-":
                    Console.WriteLine($"תוצאה: {Subtract(a, b)}");
                    calculations++;
                    break;
                case "*":
                    Console.WriteLine($"תוצאה: {Multiply(a, b)}");
                    calculations++;
                    break;
                case "/":
                    if (b == 0)
                    {
                        Console.WriteLine("אי אפשר לחלק באפס!");
                    }
                    else
                    {
                        Console.WriteLine($"תוצאה: {Divide(a, b)}");
                        calculations++;
                    }
                    break;
                default:
                    Console.WriteLine("פעולה לא מוכרת");
                    break;
            }
        }

        Console.WriteLine($"להתראות! ביצעתם {calculations} חישובים");
    }
}`,
}
