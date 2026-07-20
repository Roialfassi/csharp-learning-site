import type { Project } from '../../types/project'

export const valueReferenceProject: Project = {
  topicId: 'value-reference',
  title: 'ציד הבאגים',
  subtitle: 'חמש תוכניות שבורות מחכות לכם — נבאו, הריצו, תקנו',
  icon: '🐛',
  description: [
    'הפרויקט הזה שונה: במקום לבנות תוכנית — תתקנו חמש. כל שלב מציג תוכנית קצרה עם באג שקשור לערך-מול-הפניה. קודם נבאו מה יודפס, אז הריצו ובדקו את עצמכם, ולבסוף תקנו.',
    'אלה בדיוק הבאגים שמתכנתים אמיתיים פוגשים — מי שמזהה אותם בעין, חוסך לעצמו שעות דיבוג בעתיד.',
  ],
  steps: [
    {
      title: 'באג העותק המדומה',
      goal: 'לזהות שהשמת מערך אינה העתקה',
      instructions: [
        'העתיקו לעורך את התוכנית הבאה. לפני שמריצים — נבאו: מה יודפס?',
        '```',
        'int[] scores = { 90, 85, 70 };',
        'int[] backup = scores;',
        'scores[0] = 0;',
        'Console.WriteLine("הגיבוי: " + backup[0]);',
        '```',
        'הריצו. הגיבוי היה אמור לשמור 90 — אבל הודפס 0! תקנו את התוכנית כך שהגיבוי יהיה אמיתי (מערך חדש + העתקה בלולאה).',
      ],
      code: `int[] scores = { 90, 85, 70 };
int[] backup = new int[scores.Length];
for (int i = 0; i < scores.Length; i++)
{
    backup[i] = scores[i];
}
scores[0] = 0;
Console.WriteLine("הגיבוי: " + backup[0]);   // 90 — גיבוי אמיתי`,
      checkpoint: 'אחרי התיקון מודפס: הגיבוי: 90.',
      checkpointOutput: 'הגיבוי: 90',
    },
    {
      title: 'באג המתודה חסרת האונים',
      goal: 'להבין למה המתודה לא שינתה כלום',
      instructions: [
        'התוכנית הבאה מנסה לאפס ניקוד דרך מתודה:',
        '```',
        'static void ResetScore(int score)',
        '{',
        '    score = 0;',
        '}',
        'static void Main()',
        '{',
        '    int playerScore = 250;',
        '    ResetScore(playerScore);',
        '    Console.WriteLine(playerScore);',
        '}',
        '```',
        'נבאו, הריצו — הניקוד עדיין 250! תקנו בשתי דרכים: (א) עם `ref`; (ב) בלי ref — המתודה תחזיר 0 ונשמור את התוצאה. איזו דרך יפה יותר בעיניכם?',
      ],
      code: `// דרך א: ref
static void ResetScore(ref int score)
{
    score = 0;
}
// קריאה: ResetScore(ref playerScore);

// דרך ב: החזרת ערך (לרוב עדיפה!)
static int ResetScore()
{
    return 0;
}
// קריאה: playerScore = ResetScore();`,
      checkpoint: 'בשתי הדרכים מודפס 0 אחרי הקריאה.',
      checkpointOutput: '0',
    },
    {
      title: 'באג ה-null המתגנב',
      goal: 'לתפוס NullReferenceException לפני שהיא תופסת אתכם',
      instructions: [
        'התוכנית הבאה קורסת. מצאו איפה ולמה:',
        '```',
        'string winner = null;',
        'Console.Write("מי ניצח? (Enter = אין מנצח) ");',
        'string input = Console.ReadLine();',
        'if (input != "")',
        '{',
        '    winner = input;',
        '}',
        'Console.WriteLine("אורך שם המנצח: " + winner.Length);',
        '```',
        'הריצו עם Enter ריק — קריסה! `winner` נשאר null ו-`.Length` על null מפיל הכל.',
        'תקנו: בדקו `winner == null` לפני הגישה, והדפיסו "אין מנצח" במקום לקרוס.',
      ],
      code: `if (winner == null)
{
    Console.WriteLine("אין מנצח");
}
else
{
    Console.WriteLine("אורך שם המנצח: " + winner.Length);
}`,
      checkpoint: 'עם Enter ריק מודפס "אין מנצח" בלי קריסה; עם שם אמיתי מודפס האורך.',
    },
    {
      title: 'באג ה-struct החמקן',
      goal: 'לזכור ש-struct הוא עותק — גם בלולאות',
      instructions: [
        'התוכנית הזו מנסה להזיז נקודה, אבל היא לא זזה:',
        '```',
        'struct Point { public int X; public int Y; }',
        '',
        'static void MoveRight(Point p)',
        '{',
        '    p.X = p.X + 10;',
        '}',
        'static void Main()',
        '{',
        '    Point hero;',
        '    hero.X = 5;',
        '    hero.Y = 0;',
        '    MoveRight(hero);',
        '    Console.WriteLine(hero.X);',
        '}',
        '```',
        'נבאו, הריצו — עדיין 5! ה-struct הועתק אל המתודה, והמקור לא זז.',
        'תקנו עם `ref Point p` בחתימה ו-`MoveRight(ref hero)` בקריאה.',
      ],
      code: `static void MoveRight(ref Point p)
{
    p.X = p.X + 10;
}
// קריאה: MoveRight(ref hero);
// עכשיו יודפס 15`,
      checkpoint: 'אחרי התיקון מודפס 15 — הגיבור זז!',
      checkpointOutput: '15',
    },
    {
      title: 'באג הקלט הקורס',
      goal: 'להחליף Parse ב-TryParse ולהיות חסינים',
      instructions: [
        'תוכנית תמימה: `int age = int.Parse(Console.ReadLine());` ואז הדפסת הגיל.',
        'הריצו והקלידו `abc` — קריסה מכוערת!',
        'תקנו עם `int.TryParse`: אם ההמרה הצליחה הדפיסו את הגיל, אחרת `זה לא מספר, נסו שוב` — בתוך לולאת while שממשיכה עד לקלט תקין.',
        'סיימתם? מזל טוב — עברתם את חמשת הבאגים הקלאסיים של ערך-מול-הפניה!',
      ],
      code: `int age;
while (true)
{
    Console.Write("מה גילך? ");
    if (int.TryParse(Console.ReadLine(), out age))
    {
        break;
    }
    Console.WriteLine("זה לא מספר, נסו שוב");
}
Console.WriteLine($"גילך: {age}");`,
      checkpoint: 'קלט זבל מקבל הודעה ובקשה חוזרת; קלט תקין מודפס — אף קריסה! צדתם את כל הבאגים 🎉',
    },
  ],
  fullSolution: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void ResetScore(ref int score)
    {
        score = 0;
    }

    static void MoveRight(ref Point p)
    {
        p.X = p.X + 10;
    }

    static void Main()
    {
        // 1: גיבוי אמיתי של מערך
        int[] scores = { 90, 85, 70 };
        int[] backup = new int[scores.Length];
        for (int i = 0; i < scores.Length; i++)
        {
            backup[i] = scores[i];
        }
        scores[0] = 0;
        Console.WriteLine("הגיבוי: " + backup[0]);

        // 2: איפוס עם ref
        int playerScore = 250;
        ResetScore(ref playerScore);
        Console.WriteLine(playerScore);

        // 3: בדיקת null
        string winner = null;
        if (winner == null)
        {
            Console.WriteLine("אין מנצח");
        }

        // 4: הזזת struct עם ref
        Point hero;
        hero.X = 5;
        hero.Y = 0;
        MoveRight(ref hero);
        Console.WriteLine(hero.X);

        // 5: קלט חסין עם TryParse
        int age;
        while (true)
        {
            Console.Write("מה גילך? ");
            if (int.TryParse(Console.ReadLine(), out age))
            {
                break;
            }
            Console.WriteLine("זה לא מספר, נסו שוב");
        }
        Console.WriteLine($"גילך: {age}");
    }
}`,
}
