import type { Project } from '../../types/project'

export const exceptionsProject: Project = {
  topicId: 'exceptions',
  title: 'קולט הקלט החסין',
  subtitle: 'ספריית קלט שאי אפשר להפיל — כל זבל שתזרקו עליה תיבלע בחן',
  icon: '🛡️',
  description: [
    'תבנו סט מתודות לקליטת קלט שלא ניתן להפיל: מספר שלם, מספר בטווח, כן/לא ובחירה מתפריט. כל אחת מבקשת שוב ושוב עד שמתקבל קלט תקין.',
    'זה לא רק תרגיל — זה רכיב שתוכלו להעתיק לכל פרויקט עתידי שלכם. בסוף תבנו עליו מערכת רישום קטנה.',
  ],
  finalPreview: `=== מערכת הרשמה ===
שם מלא: דנה כהן
גיל (0-120): abc
❌ זה לא מספר שלם. נסו שוב.
גיל (0-120): 200
❌ המספר חייב להיות בין 0 ל-120. נסו שוב.
גיל (0-120): 15
בחרו מסלול: 1=מתחילים, 2=מתקדמים
5
❌ בחירה לא חוקית. נסו שוב.
2
לאשר הרשמה? (כן/לא): כן
--- נרשמת בהצלחה! ---
דנה כהן, בת 15, מסלול מתקדמים`,
  steps: [
    {
      title: 'ReadInt — מספר שלם חסין',
      goal: 'מתודה שלא מוותרת עד שמקבלת מספר',
      instructions: [
        'כתבו `static int ReadInt(string message)`.',
        'בתוכה: לולאה אינסופית שמדפיסה את ההודעה, קולטת, ומנסה להמיר בתוך `try`.',
        'הצליח? `return` מיד. נכשל? ב-`catch (FormatException)` הדפיסו `❌ זה לא מספר שלם. נסו שוב.` והלולאה תחזור.',
        'בדקו ב-`Main`: קלטו גיל וזרקו עליה "abc", "12.5" ואז 15.',
      ],
      code: `using System;

class Program
{
    static int ReadInt(string message)
    {
        while (true)
        {
            Console.Write(message);
            try
            {
                return int.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("❌ זה לא מספר שלם. נסו שוב.");
            }
        }
    }

    static void Main()
    {
        int age = ReadInt("גיל: ");
        Console.WriteLine($"קיבלתי: {age}");
    }
}`,
      checkpoint: 'הקלידו abc — מקבלים הודעה ובקשה חוזרת. הקלידו 15 — המתודה מחזירה 15.',
    },
    {
      title: 'ReadIntInRange — עם גבולות',
      goal: 'מספר שגם תקין וגם בטווח הגיוני',
      instructions: [
        'כתבו `static int ReadIntInRange(string message, int min, int max)`.',
        'השתמשו ב-`ReadInt` שכתבתם (אל תשכפלו קוד!) ואז בדקו טווח.',
        'מחוץ לטווח? הדפיסו `❌ המספר חייב להיות בין X ל-Y. נסו שוב.` והמשיכו בלולאה.',
        'שימו לב שכאן אין `try/catch` בכלל — כי זו בדיקה רגילה, לא חריגה. בדיוק כמו שלמדנו!',
      ],
      code: `static int ReadIntInRange(string message, int min, int max)
{
    while (true)
    {
        int value = ReadInt(message);
        if (value >= min && value <= max)
        {
            return value;
        }
        Console.WriteLine($"❌ המספר חייב להיות בין {min} ל-{max}. נסו שוב.");
    }
}`,
      checkpoint: 'קלטו גיל בטווח 0-120: נסו 200 (נדחה), abc (נדחה), 15 (מתקבל).',
    },
    {
      title: 'ReadYesNo ו-ReadChoice',
      goal: 'קלט טקסטואלי מוגבל',
      instructions: [
        'כתבו `static bool ReadYesNo(string message)`: מחזירה `true` ל-"כן" ו-`false` ל-"לא", וכל דבר אחר נדחה.',
        'טיפ: השתמשו ב-`.Trim().ToLower()` על הקלט כדי לסלוח על רווחים ואותיות גדולות.',
        'כתבו `static int ReadChoice(string message, int optionsCount)` שמקבלת מספר בין 1 ל-optionsCount — אפשר פשוט להשתמש ב-`ReadIntInRange`!',
      ],
      code: `static bool ReadYesNo(string message)
{
    while (true)
    {
        Console.Write(message);
        string answer = Console.ReadLine().Trim().ToLower();
        if (answer == "כן")
        {
            return true;
        }
        if (answer == "לא")
        {
            return false;
        }
        Console.WriteLine("❌ ענו כן או לא. נסו שוב.");
    }
}`,
      checkpoint: '"כן", " כן " ו-"לא" מתקבלים; "אולי" נדחה בנימוס.',
    },
    {
      title: 'ReadNonEmpty וחריגה משלכם',
      goal: 'טקסט שחייב להכיל משהו',
      instructions: [
        'כתבו `static string ReadNonEmpty(string message)` שדוחה מחרוזת ריקה או רווחים בלבד (רמז: `string.IsNullOrWhiteSpace`).',
        'עכשיו הוסיפו נופך מקצועי: הגדירו `class InvalidInputException : Exception` עם constructor שמעביר הודעה ל-`base`.',
        'ב-`ReadNonEmpty`, במקום להדפיס — **זרקו** את החריגה שלכם, ותפסו אותה באותה מתודה כדי להדפיס. (בפרויקט אמיתי הייתם נותנים לה לעלות מעלה — כאן זה תרגול של `throw`.)',
      ],
      code: `class InvalidInputException : Exception
{
    public InvalidInputException(string message) : base(message)
    {
    }
}

static string ReadNonEmpty(string message)
{
    while (true)
    {
        Console.Write(message);
        try
        {
            string value = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(value))
            {
                throw new InvalidInputException("❌ השדה לא יכול להיות ריק. נסו שוב.");
            }
            return value.Trim();
        }
        catch (InvalidInputException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`,
      checkpoint: 'Enter ריק נדחה עם ההודעה שלכם; שם אמיתי מתקבל ומנוקה מרווחים.',
    },
    {
      title: 'מערכת ההרשמה',
      goal: 'שימוש אמיתי בכל מה שבניתם',
      instructions: [
        'ב-`Main`, בנו מערכת הרשמה שמשתמשת בכל המתודות: שם (`ReadNonEmpty`), גיל (`ReadIntInRange` 0-120), מסלול (`ReadChoice` 1-2), ואישור (`ReadYesNo`).',
        'אם המשתמש אישר — הדפיסו סיכום הרשמה יפה. אם לא — `ההרשמה בוטלה`.',
        'עכשיו האתגר האמיתי: **נסו להפיל את התוכנית**. תנו לחבר להקליד מה שבא לו — ריק, אותיות, מספרים ענקיים, סימנים. היא צריכה לשרוד הכל.',
      ],
      checkpoint: 'התוכנית שורדת כל קלט זבל שזרקתם עליה ומסיימת הרשמה תקינה — בניתם קוד חסין! 🎉',
    },
  ],
  fullSolution: `using System;

class InvalidInputException : Exception
{
    public InvalidInputException(string message) : base(message)
    {
    }
}

class Program
{
    static int ReadInt(string message)
    {
        while (true)
        {
            Console.Write(message);
            try
            {
                return int.Parse(Console.ReadLine());
            }
            catch (FormatException)
            {
                Console.WriteLine("❌ זה לא מספר שלם. נסו שוב.");
            }
            catch (OverflowException)
            {
                Console.WriteLine("❌ המספר גדול מדי. נסו שוב.");
            }
        }
    }

    static int ReadIntInRange(string message, int min, int max)
    {
        while (true)
        {
            int value = ReadInt(message);
            if (value >= min && value <= max)
            {
                return value;
            }
            Console.WriteLine($"❌ המספר חייב להיות בין {min} ל-{max}. נסו שוב.");
        }
    }

    static bool ReadYesNo(string message)
    {
        while (true)
        {
            Console.Write(message);
            string answer = Console.ReadLine().Trim().ToLower();
            if (answer == "כן")
            {
                return true;
            }
            if (answer == "לא")
            {
                return false;
            }
            Console.WriteLine("❌ ענו כן או לא. נסו שוב.");
        }
    }

    static string ReadNonEmpty(string message)
    {
        while (true)
        {
            Console.Write(message);
            try
            {
                string value = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new InvalidInputException("❌ השדה לא יכול להיות ריק. נסו שוב.");
                }
                return value.Trim();
            }
            catch (InvalidInputException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }

    static void Main()
    {
        Console.WriteLine("=== מערכת הרשמה ===");

        string name = ReadNonEmpty("שם מלא: ");
        int age = ReadIntInRange("גיל (0-120): ", 0, 120);

        Console.WriteLine("בחרו מסלול: 1=מתחילים, 2=מתקדמים");
        int track = ReadIntInRange("", 1, 2);
        string trackName = track == 1 ? "מתחילים" : "מתקדמים";

        if (ReadYesNo("לאשר הרשמה? (כן/לא): "))
        {
            Console.WriteLine("--- נרשמת בהצלחה! ---");
            Console.WriteLine($"{name}, בגיל {age}, מסלול {trackName}");
        }
        else
        {
            Console.WriteLine("ההרשמה בוטלה");
        }
    }
}`,
}
