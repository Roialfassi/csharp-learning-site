import type { Project } from '../../types/project'

export const loopsProject: Project = {
  topicId: 'loops',
  title: 'משחק ניחוש המספרים',
  subtitle: 'המחשב בוחר מספר סודי — ואתם צריכים לנחש אותו בכמה שפחות ניסיונות',
  icon: '🎲',
  description: [
    'תבנו משחק אמיתי: המחשב "חושב" על מספר בין 1 ל-100, והשחקן מנחש. אחרי כל ניחוש המחשב אומר אם המספר הסודי גדול או קטן יותר — עד שמנחשים נכון.',
    'זה בדיוק סוג התוכנית שלולאת `while` נולדה בשבילו: אי אפשר לדעת מראש כמה ניחושים יידרשו.',
  ],
  finalPreview: `=== משחק ניחוש המספרים ===
ניחשו מספר בין 1 ל-100: 50
המספר הסודי גדול יותר!
ניחשו מספר בין 1 ל-100: 75
המספר הסודי קטן יותר!
ניחשו מספר בין 1 ל-100: 62
כל הכבוד! ניחשתם ב-3 ניסיונות`,
  steps: [
    {
      title: 'המספר הסודי',
      goal: 'המחשב מגריל מספר בין 1 ל-100',
      instructions: [
        'צרו אובייקט הגרלה: `Random random = new Random();`.',
        'הגרילו מספר: `int secret = random.Next(1, 101);` — הגבול העליון לא נכלל, לכן 101.',
        'בינתיים הדפיסו את המספר הסודי כדי לבדוק שהוא באמת משתנה בין הרצות (נמחק את זה בסוף!).',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== משחק ניחוש המספרים ===");
        Random random = new Random();
        int secret = random.Next(1, 101);
        Console.WriteLine(secret);   // זמני — למחוק בסוף!
    }
}`,
      checkpoint: 'הריצו כמה פעמים — בכל הרצה אמור להיות מודפס מספר אחר בין 1 ל-100.',
    },
    {
      title: 'ניחוש ראשון',
      goal: 'קליטת ניחוש והשוואה למספר הסודי',
      instructions: [
        'קלטו ניחוש מהמשתמש (`int.Parse`).',
        'השוו למספר הסודי עם if / else if / else: אם הניחוש קטן — הדפיסו `המספר הסודי גדול יותר!`; אם גדול — `המספר הסודי קטן יותר!`; אם שווה — `כל הכבוד!`.',
      ],
      code: `Console.Write("ניחשו מספר בין 1 ל-100: ");
int guess = int.Parse(Console.ReadLine());
if (guess < secret)
{
    Console.WriteLine("המספר הסודי גדול יותר!");
}
else if (guess > secret)
{
    Console.WriteLine("המספר הסודי קטן יותר!");
}
else
{
    Console.WriteLine("כל הכבוד!");
}`,
      checkpoint: 'הריצו, הציצו במספר הסודי המודפס, ונחשו בכוונה נמוך מדי, גבוה מדי ובול — כל אחת משלוש התגובות אמורה להופיע.',
    },
    {
      title: 'לולאת המשחק',
      goal: 'המשחק ממשיך עד שמנחשים נכון',
      instructions: [
        'עכשיו העיקר: עטפו את הניחוש וההשוואה בלולאת `while` שממשיכה כל עוד לא ניחשו נכון.',
        'דרך נוחה: הגדירו את `guess` לפני הלולאה עם ערך שלא יכול להיות נכון (למשל 0), והתנאי: `while (guess != secret)`.',
        'שימו לב שהקליטה וההשוואה חייבות להיות בתוך הלולאה!',
      ],
      code: `int guess = 0;
while (guess != secret)
{
    Console.Write("ניחשו מספר בין 1 ל-100: ");
    guess = int.Parse(Console.ReadLine());
    if (guess < secret)
    {
        Console.WriteLine("המספר הסודי גדול יותר!");
    }
    else if (guess > secret)
    {
        Console.WriteLine("המספר הסודי קטן יותר!");
    }
}
Console.WriteLine("כל הכבוד!");`,
      checkpoint: 'שחקו סיבוב שלם! נחשו כמה פעמים עד שתקלעו — והמשחק אמור להסתיים רק כשצדקתם.',
    },
    {
      title: 'ספירת ניסיונות',
      goal: 'המשחק מדווח בכמה ניסיונות ניצחתם',
      instructions: [
        'הוסיפו משתנה `attempts` שמתחיל מ-0, והגדילו אותו ב-1 (`attempts++`) בכל סיבוב של הלולאה.',
        'שנו את הודעת הניצחון ל: `כל הכבוד! ניחשתם ב-X ניסיונות` עם string interpolation.',
      ],
      code: `int attempts = 0;
while (guess != secret)
{
    // ... הקוד הקיים ...
    attempts++;
}
Console.WriteLine($"כל הכבוד! ניחשתם ב-{attempts} ניסיונות");`,
      checkpoint: 'שחקו שוב — ההודעה בסוף אמורה להראות בדיוק כמה ניחושים ניחשתם.',
    },
    {
      title: 'ליטוש אחרון',
      goal: 'משחק אמיתי מוכן לשחקנים',
      instructions: [
        'מחקו את השורה הזמנית שמדפיסה את המספר הסודי — בלי רמאויות!',
        'אתגר רשות 1: אם הניחוש מחוץ לטווח 1-100, הדפיסו `הניחוש חייב להיות בין 1 ל-100` בלי "לבזבז" את הסיבוב.',
        'אתגר רשות 2: אחרי ניצחון, דרגו את השחקן — עד 6 ניסיונות: `אלופים!`; 7 עד 10: `לא רע`; יותר: `אפשר יותר טוב 😉` (רמז: החצי הבינארי מנצח תמיד בפחות מ-7).',
      ],
      checkpoint: 'שחקו נגד חבר או בן משפחה — מי מנחש בפחות ניסיונות? המשחק שלכם מוכן! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== משחק ניחוש המספרים ===");
        Random random = new Random();
        int secret = random.Next(1, 101);

        int guess = 0;
        int attempts = 0;
        while (guess != secret)
        {
            Console.Write("ניחשו מספר בין 1 ל-100: ");
            guess = int.Parse(Console.ReadLine());
            attempts++;

            if (guess < secret)
            {
                Console.WriteLine("המספר הסודי גדול יותר!");
            }
            else if (guess > secret)
            {
                Console.WriteLine("המספר הסודי קטן יותר!");
            }
        }

        Console.WriteLine($"כל הכבוד! ניחשתם ב-{attempts} ניסיונות");
        if (attempts <= 6)
        {
            Console.WriteLine("אלופים!");
        }
        else if (attempts <= 10)
        {
            Console.WriteLine("לא רע");
        }
        else
        {
            Console.WriteLine("אפשר יותר טוב 😉");
        }
    }
}`,
}
