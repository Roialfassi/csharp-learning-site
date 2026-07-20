import type { Lesson } from '../../types/lesson'

export const exceptionsLesson: Lesson = {
  topicId: 'exceptions',
  title: 'טיפול בשגיאות',
  subtitle: 'try, catch, finally, throw — איך כותבים תוכניות שלא קורסות',
  sections: [
    {
      id: 'why',
      icon: '💥',
      title: 'למה תוכניות קורסות',
      blocks: [
        {
          kind: 'p',
          text: 'כתבתם תוכנית מושלמת, והמשתמש הקליד "abc" במקום מספר. התוכנית מתה עם הודעה אדומה ומפחידה. זה קורה כי `int.Parse` **זרקה חריגה** (exception) — אירוע חריג שהקוד לא ידע להתמודד איתו.',
        },
        {
          kind: 'p',
          text: 'חריגות אינן באגים בהכרח — הן דרך של C# להודיע "קרה משהו שלא יכולתי לטפל בו". התפקיד שלנו הוא לתפוס אותן ולהגיב בחן.',
        },
        {
          kind: 'table',
          headers: ['חריגה נפוצה', 'מתי היא קורית'],
          rows: [
            ['`FormatException`', '`int.Parse("abc")` — הטקסט אינו מספר'],
            ['`DivideByZeroException`', 'חלוקת שלמים באפס'],
            ['`IndexOutOfRangeException`', 'גישה לאינדקס שלא קיים במערך'],
            ['`NullReferenceException`', 'שימוש בהפניה שהיא `null`'],
            ['`KeyNotFoundException`', 'שליפת מפתח שלא קיים ב-Dictionary'],
          ],
        },
      ],
    },
    {
      id: 'try-catch',
      icon: '🥅',
      title: 'try ו-catch',
      blocks: [
        {
          kind: 'p',
          text: 'הקוד המסוכן נכנס ל-`try`, והטיפול ל-`catch`. אם הכל תקין — ה-`catch` פשוט לא רץ. אם נזרקה חריגה — הביצוע קופץ מיד ל-`catch` והתוכנית ממשיכה לחיות.',
        },
        {
          kind: 'code',
          code: `try
{
    int number = int.Parse(Console.ReadLine());
    Console.WriteLine($"קיבלתי {number}");
}
catch (Exception)
{
    Console.WriteLine("קלט לא תקין");
}

Console.WriteLine("התוכנית ממשיכה כרגיל!");`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'שימו לב: ברגע שנזרקת חריגה, שאר הקוד בתוך ה-`try` **לא רץ**. לכן שמים ב-`try` רק את מה שקשור לפעולה המסוכנת.',
        },
      ],
    },
    {
      id: 'specific',
      icon: '🎯',
      title: 'תפיסה ספציפית',
      blocks: [
        {
          kind: 'p',
          text: 'תפיסת `Exception` כללית עובדת — אבל היא כמו לומר "משהו השתבש". עדיף לתפוס בדיוק את מה שצפיתם ולתת הודעה מדויקת. אפשר לשרשר כמה `catch`:',
        },
        {
          kind: 'code',
          code: `try
{
    int a = int.Parse(Console.ReadLine());
    int b = int.Parse(Console.ReadLine());
    Console.WriteLine(a / b);
}
catch (DivideByZeroException)
{
    Console.WriteLine("אי אפשר לחלק באפס");
}
catch (FormatException)
{
    Console.WriteLine("זה לא מספר");
}
catch (Exception ex)               // רשת ביטחון אחרונה
{
    Console.WriteLine("שגיאה: " + ex.Message);
}`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'הסדר חשוב! מהספציפי לכללי. `catch (Exception)` תופס הכל — אם תשימו אותו ראשון, שאר ה-catch לעולם לא ירוצו (והקומפיילר יתלונן).',
        },
        {
          kind: 'p',
          text: 'המשתנה `ex` נותן גישה לפרטים: `ex.Message` היא ההודעה, ו-`ex.StackTrace` מראה בדיוק באיזו שורה זה קרה — כלי דיבוג מצוין.',
        },
      ],
    },
    {
      id: 'finally',
      icon: '🔚',
      title: 'finally',
      blocks: [
        {
          kind: 'p',
          text: 'בלוק `finally` רץ **תמיד** — בין אם הייתה שגיאה ובין אם לא. הוא נועד לניקוי: סגירת קובץ, ניתוק מחיבור, שחרור משאבים.',
        },
        {
          kind: 'code',
          code: `try
{
    // עבודה עם קובץ
}
catch (Exception ex)
{
    Console.WriteLine("שגיאה: " + ex.Message);
}
finally
{
    Console.WriteLine("סוגרים את הקובץ");   // רץ בכל מקרה
}`,
        },
      ],
    },
    {
      id: 'throw',
      icon: '🚀',
      title: 'זריקת חריגות משלכם',
      blocks: [
        {
          kind: 'p',
          text: 'גם אתם יכולים לזרוק חריגה כשמשהו לא הגיוני. זה עדיף על החזרת ערך מיוחד כמו `-1` שאף אחד לא בודק:',
        },
        {
          kind: 'code',
          code: `static void SetAge(int age)
{
    if (age < 0)
    {
        throw new ArgumentException("גיל לא יכול להיות שלילי");
    }
    // המשך רגיל
}

// הקורא אחראי לטפל:
try
{
    SetAge(-5);
}
catch (ArgumentException ex)
{
    Console.WriteLine(ex.Message);
}`,
        },
        {
          kind: 'p',
          text: 'אפשר אפילו ליצור סוג חריגה משלכם — וזו פשוט ירושה רגילה מ-`Exception` (זוכרים את המודול?):',
        },
        {
          kind: 'code',
          code: `class InsufficientFundsException : Exception
{
    public InsufficientFundsException(string message) : base(message)
    {
    }
}

throw new InsufficientFundsException("אין מספיק כסף בחשבון");`,
        },
      ],
    },
    {
      id: 'best-practice',
      icon: '✨',
      title: 'מתי try/catch ומתי לא',
      blocks: [
        {
          kind: 'p',
          text: 'חריגות נועדו למצבים חריגים — לא לזרימה רגילה. אם אפשר פשוט **לבדוק** במקום לתפוס, עדיף לבדוק:',
        },
        {
          kind: 'code',
          code: `// פחות טוב: משתמשים בחריגה כתנאי
try { int n = int.Parse(input); }
catch { Console.WriteLine("לא מספר"); }

// טוב יותר: בודקים מראש
if (int.TryParse(input, out int n))
{
    Console.WriteLine(n);
}
else
{
    Console.WriteLine("לא מספר");
}`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'כלל: מה שאפשר לבדוק (null, מפתח קיים, טווח אינדקס, TryParse) — בדקו. `try/catch` שמור למה שבאמת לא ניתן לצפות מראש.',
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'החטא הגדול: `catch { }` ריק שבולע שגיאות בשקט. הבאג לא נעלם — הוא רק הופך לבלתי ניתן לאיתור. תמיד לפחות הדפיסו הודעה.',
        },
      ],
    },
    {
      id: 'summary',
      icon: '📋',
      title: 'סיכום',
      blocks: [
        {
          kind: 'list',
          items: [
            'חריגה = הודעה על מצב שהקוד לא ידע לטפל בו; בלי טיפול — התוכנית קורסת',
            '`try` עוטף קוד מסוכן, `catch` מטפל, `finally` רץ תמיד',
            'תופסים מהספציפי לכללי; `ex.Message` נותן את הפרטים',
            '`throw new Exception(...)` מודיע על בעיה; אפשר גם סוג חריגה משלכם',
            'מה שאפשר לבדוק — בודקים (`TryParse`, `ContainsKey`, `!= null`)',
            'לעולם לא `catch { }` ריק',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט תבנו קולט קלט חסין — רכיב שאפשר לזרוק עליו כל זבל והוא לא ייפול!',
        },
      ],
    },
  ],
}
