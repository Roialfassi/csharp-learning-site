import type { Lesson } from '../../types/lesson'

export const valueReferenceLesson: Lesson = {
  topicId: 'value-reference',
  title: 'ערך מול הפניה: איך C# באמת שומרת דברים',
  subtitle: 'למה שינוי של מערך אחד משנה "גם" את השני, מה זה null, ומה עושים ref ו-out',
  sections: [
    {
      id: 'two-worlds',
      icon: '🌍',
      title: 'שני עולמות של טיפוסים',
      blocks: [
        {
          kind: 'p',
          text: 'הריצו את שני הקטעים האלה בראש. בראשון — `b` קיבל עותק, ו-`a` לא השתנה. בשני — משהו מוזר קורה:',
        },
        {
          kind: 'code',
          code: `// עולם 1: טיפוסי ערך
int a = 5;
int b = a;
b = 10;
Console.WriteLine(a);        // 5 — לא השתנה

// עולם 2: טיפוסי הפניה
int[] first = { 1, 2, 3 };
int[] second = first;
second[0] = 99;
Console.WriteLine(first[0]); // 99 — השתנה?!`,
        },
        {
          kind: 'p',
          text: 'ההסבר: משתנה של טיפוס ערך מכיל את הערך עצמו, ולכן השמה מעתיקה אותו. משתנה של טיפוס הפניה מכיל רק "כתובת" של המקום בזיכרון — והשמה מעתיקה את הכתובת. `first` ו-`second` הם שני שמות לאותו מערך אחד.',
        },
        {
          kind: 'table',
          headers: ['טיפוסי ערך (value)', 'טיפוסי הפניה (reference)'],
          rows: [
            ['`int`, `double`, `bool`, `char`', 'מערכים (`int[]`)'],
            ['`struct` (כמו Point שלנו)', '`string`, מחלקות (בקרוב!)'],
            ['השמה = עותק מלא ועצמאי', 'השמה = עוד שם לאותו דבר'],
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: '`string` הוא טכנית טיפוס הפניה, אבל בגלל שמחרוזות לא ניתנות לשינוי (זוכרים? immutable) — הוא מתנהג בפועל כמו טיפוס ערך. לכן הוא לא מפתיע אף אחד.',
        },
      ],
    },
    {
      id: 'methods-params',
      icon: '📦',
      title: 'מה קורה בפרמטרים של מתודות',
      blocks: [
        {
          kind: 'p',
          text: 'פרמטרים עוברים למתודות by value — המתודה מקבלת עותק. אבל עכשיו אתם מבינים את הטריק: עותק של מה?',
        },
        {
          kind: 'code',
          code: `static void ChangeNumber(int n)
{
    n = 100;                  // משנה רק את העותק המקומי
}

static void ChangeArray(int[] arr)
{
    arr[0] = 100;             // ההפניה מצביעה למערך המקורי!
}

static void Main()
{
    int x = 5;
    ChangeNumber(x);
    Console.WriteLine(x);     // 5 — לא השתנה

    int[] nums = { 5, 6, 7 };
    ChangeArray(nums);
    Console.WriteLine(nums[0]); // 100 — השתנה!
}`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'הכלל: מתודה שמקבלת טיפוס ערך לא יכולה לשנות את המקור. מתודה שמקבלת מערך יכולה לשנות את האיברים שלו — כי ההפניה המועתקת מצביעה לאותו מקום.',
        },
      ],
    },
    {
      id: 'null',
      icon: '🕳️',
      title: 'null: ההפניה לשום מקום',
      blocks: [
        {
          kind: 'p',
          text: 'להפניה מותר להצביע על... כלום. זה `null`. הבעיה מתחילה כשמנסים להשתמש בהפניה כזו — התוכנית קורסת עם `NullReferenceException`, כנראה השגיאה המפורסמת ביותר בהיסטוריית התכנות.',
        },
        {
          kind: 'code',
          code: `string name = null;
Console.WriteLine(name.Length);   // 💥 קריסה!

// הדרך הבטוחה:
if (name == null)
{
    Console.WriteLine("אין ערך");
}
else
{
    Console.WriteLine(name.Length);
}`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'לפני שנוגעים בהפניה שאולי ריקה — בודקים `== null`. תפגשו את הכלל הזה שוב ושוב במודול המחלקות.',
        },
      ],
    },
    {
      id: 'copy-array',
      icon: '📋',
      title: 'איך מעתיקים מערך באמת',
      blocks: [
        {
          kind: 'p',
          text: 'עכשיו כשברור ש-`copy = original` רק נותן שם נוסף, ככה מעתיקים באמת — מערך חדש והעתקה איבר-איבר:',
        },
        {
          kind: 'code',
          code: `int[] original = { 1, 2, 3 };
int[] copy = new int[original.Length];
for (int i = 0; i < original.Length; i++)
{
    copy[i] = original[i];
}

copy[0] = 99;
Console.WriteLine(original[0]);   // 1 — המקור מוגן`,
        },
      ],
    },
    {
      id: 'ref-out',
      icon: '🔧',
      title: 'ref ו-out: שליטה מלאה',
      blocks: [
        {
          kind: 'p',
          text: 'ומה אם דווקא רוצים שמתודה תשנה משתנה של המקור? המילה `ref` מעבירה את המשתנה עצמו במקום עותק:',
        },
        {
          kind: 'code',
          code: `static void DoubleIt(ref int n)
{
    n *= 2;
}

int x = 6;
DoubleIt(ref x);        // ref גם בקריאה!
Console.WriteLine(x);   // 12`,
        },
        {
          kind: 'p',
          text: '`out` דומה, אבל מיועד להוצאת תוצאות: המתודה חייבת להשים ערך בפרמטר. ככה מתודה "מחזירה" יותר מערך אחד — וככה עובדת `int.TryParse`, הדרך הבטוחה להמיר קלט:',
        },
        {
          kind: 'code',
          code: `string input = Console.ReadLine();
if (int.TryParse(input, out int number))
{
    Console.WriteLine($"קיבלתי את {number}");
}
else
{
    Console.WriteLine("זה לא מספר — אבל לא קרסתי!");
}`,
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'מהיום, כשקולטים מספר מהמשתמש — `TryParse` עדיפה על `Parse`: היא מחזירה false במקום להקריס את התוכנית.',
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
            'טיפוסי ערך (`int`, `struct`...) — השמה והעברה לפרמטר מעתיקות את התוכן',
            'טיפוסי הפניה (מערכים, מחלקות) — השמה מעתיקה כתובת; שניים יכולים להצביע לאותו דבר',
            'מתודה יכולה לשנות איברי מערך שקיבלה — אבל לא int שקיבלה',
            '`null` = הפניה לכלום; לגעת בה = קריסה; בודקים `== null`',
            '`ref` נותן למתודה גישה למשתנה המקורי; `out` מוציא תוצאות נוספות',
            '`int.TryParse` — ההמרה שלא קורסת',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הפרויקט של המודול שונה מהרגיל: אתם הופכים לצדי באגים! חמש תוכניות עם באגים אמיתיים מחכות שתתקנו אותן.',
        },
      ],
    },
  ],
}
