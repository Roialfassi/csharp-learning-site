import type { Project } from '../../types/project'

export const stringsProject: Project = {
  topicId: 'strings',
  title: 'בודק חוזק סיסמאות',
  subtitle: 'תוכנית שבודקת כמה חזקה הסיסמה שלכם — כמו באתרי הרשמה אמיתיים',
  icon: '🔐',
  description: [
    'כשנרשמים לאתר, הוא בודק אם הסיסמה חזקה מספיק. בפרויקט הזה תבנו בודק כזה בעצמכם: הוא יבדוק אורך, יחפש ספרות ואותיות גדולות, וייתן ציון חוזק.',
    'תשתמשו בכל כלי המחרוזות: `Length`, גישה לתווים, לולאות על תווים ו-`Contains`.',
  ],
  finalPreview: `=== בודק חוזק סיסמאות ===
הקלידו סיסמה: Sunshine42
אורך: 10 תווים ✓
מכילה ספרה ✓
מכילה אות גדולה ✓
לא מכילה רווחים ✓
ציון חוזק: 4 מתוך 4
סיסמה מצוינת!`,
  steps: [
    {
      title: 'קליטה ובדיקת אורך',
      goal: 'בדיקה ראשונה: לפחות 8 תווים',
      instructions: [
        'קלטו סיסמה מהמשתמש.',
        'צרו משתנה `int score = 0` — נצבור בו נקודות על כל בדיקה שעוברת.',
        'אם `password.Length >= 8`, הדפיסו `אורך: X תווים ✓` והוסיפו נקודה ל-score. אחרת הדפיסו `קצרה מדי — צריך לפחות 8 תווים ✗`.',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== בודק חוזק סיסמאות ===");
        Console.Write("הקלידו סיסמה: ");
        string password = Console.ReadLine();
        int score = 0;

        if (password.Length >= 8)
        {
            Console.WriteLine($"אורך: {password.Length} תווים ✓");
            score++;
        }
        else
        {
            Console.WriteLine("קצרה מדי — צריך לפחות 8 תווים ✗");
        }
    }
}`,
      checkpoint: 'נסו סיסמה קצרה ("abc") וסיסמה ארוכה — כל אחת אמורה לקבל את ההודעה הנכונה.',
    },
    {
      title: 'חיפוש ספרה',
      goal: 'לולאה על תווים שמזהה ספרות',
      instructions: [
        'עברו על תווי הסיסמה עם `foreach` ובדקו אם יש ספרה.',
        'תו הוא ספרה אם הוא בין `\'0\'` ל-`\'9\'`: `c >= \'0\' && c <= \'9\'` (אפשר גם `char.IsDigit(c)` — שתי הדרכים טובות!).',
        'מצאתם? הדפיסו `מכילה ספרה ✓` והוסיפו נקודה. לא? `אין ספרה ✗`.',
      ],
      code: `bool hasDigit = false;
foreach (char c in password)
{
    if (char.IsDigit(c))
    {
        hasDigit = true;
    }
}
if (hasDigit)
{
    Console.WriteLine("מכילה ספרה ✓");
    score++;
}
else
{
    Console.WriteLine("אין ספרה ✗");
}`,
      checkpoint: '"abcdefgh" אמורה לקבל ✗ על ספרה, ו-"abcdefg7" אמורה לקבל ✓.',
    },
    {
      title: 'אות גדולה ורווחים',
      goal: 'שתי בדיקות נוספות באותה טכניקה',
      instructions: [
        'באותה שיטה בדיוק (משתנה `bool` + לולאה), בדקו אם יש אות גדולה: `char.IsUpper(c)`.',
        'בדיקת רווחים הפוכה: אם הסיסמה לא מכילה רווח — נקודה! השתמשו ב-`password.Contains(" ")` — בלי לולאה בכלל.',
        'כל בדיקה מדפיסה ✓ או ✗ ומעדכנת את score.',
      ],
      code: `bool hasUpper = false;
foreach (char c in password)
{
    if (char.IsUpper(c))
    {
        hasUpper = true;
    }
}
if (hasUpper)
{
    Console.WriteLine("מכילה אות גדולה ✓");
    score++;
}
else
{
    Console.WriteLine("אין אות גדולה ✗");
}

if (!password.Contains(" "))
{
    Console.WriteLine("לא מכילה רווחים ✓");
    score++;
}
else
{
    Console.WriteLine("מכילה רווחים ✗");
}`,
      checkpoint: '"Sunshine42" אמורה לעבור את כל הבדיקות; "sunshine 42" אמורה להיכשל ברווחים ובאות גדולה.',
    },
    {
      title: 'ציון סופי והערכה',
      goal: 'סיכום כל הבדיקות לציון אחד',
      instructions: [
        'הדפיסו `ציון חוזק: X מתוך 4`.',
        'תרגמו את הציון להערכה: 4 — `סיסמה מצוינת!`; 3 — `סיסמה סבירה`; פחות — `סיסמה חלשה — כדאי לשפר`.',
      ],
      code: `Console.WriteLine($"ציון חוזק: {score} מתוך 4");
if (score == 4)
{
    Console.WriteLine("סיסמה מצוינת!");
}
else if (score == 3)
{
    Console.WriteLine("סיסמה סבירה");
}
else
{
    Console.WriteLine("סיסמה חלשה — כדאי לשפר");
}`,
      checkpoint: 'שלוש סיסמאות שונות — חזקה, בינונית וחלשה — מקבלות שלוש הערכות שונות.',
    },
    {
      title: 'שדרוגים',
      goal: 'בודק סיסמאות ברמה של אתר אמיתי',
      instructions: [
        'אתגר 1: הוסיפו בדיקה חמישית — תו מיוחד (`!`, `@`, `#`...). רמז: `!char.IsLetterOrDigit(c)`.',
        'אתגר 2: אם הסיסמה היא בדיוק `password` או `12345678` — ציון 0 אוטומטי והודעה `זו הסיסמה הכי נפוצה בעולם! 😱`.',
        'הריצו בדיקה אחרונה על כמה סיסמאות ותראו שהכל מתנהג כמצופה.',
      ],
      checkpoint: 'הבודק שלכם נותן ציונים הגיוניים לכל סיסמה שזרקתם עליו — פרויקט הושלם! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== בודק חוזק סיסמאות ===");
        Console.Write("הקלידו סיסמה: ");
        string password = Console.ReadLine();
        int score = 0;

        if (password == "password" || password == "12345678")
        {
            Console.WriteLine("זו הסיסמה הכי נפוצה בעולם! 😱");
            Console.WriteLine("ציון חוזק: 0 מתוך 4");
            return;
        }

        if (password.Length >= 8)
        {
            Console.WriteLine($"אורך: {password.Length} תווים ✓");
            score++;
        }
        else
        {
            Console.WriteLine("קצרה מדי — צריך לפחות 8 תווים ✗");
        }

        bool hasDigit = false;
        bool hasUpper = false;
        foreach (char c in password)
        {
            if (char.IsDigit(c))
            {
                hasDigit = true;
            }
            if (char.IsUpper(c))
            {
                hasUpper = true;
            }
        }

        if (hasDigit)
        {
            Console.WriteLine("מכילה ספרה ✓");
            score++;
        }
        else
        {
            Console.WriteLine("אין ספרה ✗");
        }

        if (hasUpper)
        {
            Console.WriteLine("מכילה אות גדולה ✓");
            score++;
        }
        else
        {
            Console.WriteLine("אין אות גדולה ✗");
        }

        if (!password.Contains(" "))
        {
            Console.WriteLine("לא מכילה רווחים ✓");
            score++;
        }
        else
        {
            Console.WriteLine("מכילה רווחים ✗");
        }

        Console.WriteLine($"ציון חוזק: {score} מתוך 4");
        if (score == 4)
        {
            Console.WriteLine("סיסמה מצוינת!");
        }
        else if (score == 3)
        {
            Console.WriteLine("סיסמה סבירה");
        }
        else
        {
            Console.WriteLine("סיסמה חלשה — כדאי לשפר");
        }
    }
}`,
}
