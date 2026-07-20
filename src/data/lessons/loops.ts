import type { Lesson } from '../../types/lesson'

export const loopsLesson: Lesson = {
  topicId: 'loops',
  title: 'לולאות: המחשב חוזר על עצמו',
  subtitle: 'for, while, do-while ו-foreach — איך מבצעים פעולה אלף פעמים בלי לכתוב אותה אלף פעמים',
  sections: [
    {
      id: 'why-loops',
      icon: '🔁',
      title: 'למה לולאות?',
      blocks: [
        {
          kind: 'p',
          text: 'נניח שרוצים להדפיס את המספרים מ-1 עד 100. לכתוב 100 שורות `Console.WriteLine`? ברור שלא. לולאה אומרת למחשב: "חזור על הקוד הזה שוב ושוב, כל עוד תנאי מסוים מתקיים". זה אחד הרעיונות החזקים ביותר בתכנות.',
        },
      ],
    },
    {
      id: 'for',
      icon: '🔢',
      title: 'לולאת for',
      blocks: [
        {
          kind: 'p',
          text: 'לולאת `for` מתאימה כשיודעים מראש כמה פעמים לחזור. יש לה שלושה חלקים: אתחול (פעם אחת בהתחלה), תנאי (נבדק לפני כל סיבוב), וצעד (רץ אחרי כל סיבוב).',
        },
        {
          kind: 'code',
          code: `for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"סיבוב מספר {i}");
}
// מדפיס: סיבוב מספר 0, 1, 2, 3, 4`,
        },
        {
          kind: 'list',
          items: [
            '`int i = 0` — משתנה הספירה מתחיל מ-0',
            '`i < 5` — ממשיכים כל עוד i קטן מ-5',
            '`i++` — אחרי כל סיבוב i גדל ב-1 (זוכרים את `++` מהמרות ואופרטורים?)',
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'רוצים לספור לאחור? מתחילים גבוה ויורדים: `for (int i = 5; i >= 1; i--)`. רוצים לדלג? `i += 2` יספור בקפיצות של 2.',
        },
      ],
    },
    {
      id: 'while',
      icon: '⏳',
      title: 'לולאות while ו-do-while',
      blocks: [
        {
          kind: 'p',
          text: '`while` מתאימה כשלא יודעים כמה סיבובים יידרשו — ממשיכים כל עוד התנאי מתקיים. למשל: לבקש סיסמה עד שהיא נכונה.',
        },
        {
          kind: 'code',
          code: `int number = 1;
while (number < 100)
{
    number *= 2;
}
Console.WriteLine(number);   // 128 — הראשון שעבר את 100`,
        },
        {
          kind: 'p',
          text: '`do-while` דומה, אבל בודקת את התנאי בסוף — ולכן הגוף רץ תמיד לפחות פעם אחת. מושלם לתפריטים: קודם מציגים, אחר כך בודקים אם המשתמש רצה לצאת.',
        },
        {
          kind: 'code',
          code: `string answer;
do
{
    Console.Write("להמשיך? (כן/לא) ");
    answer = Console.ReadLine();
} while (answer == "כן");`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'לולאה אינסופית היא הבאג המפורסם של while: אם התנאי לעולם לא הופך ל-false, התוכנית נתקעת לנצח. ודאו שמשהו בגוף הלולאה משנה את מה שהתנאי בודק!',
        },
      ],
    },
    {
      id: 'foreach',
      icon: '📦',
      title: 'לולאת foreach',
      blocks: [
        {
          kind: 'p',
          text: '`foreach` עוברת על כל האיברים של אוסף — מערך, רשימה וכדומה — בלי להתעסק באינדקסים בכלל: "לכל איבר x בתוך האוסף, עשה...".',
        },
        {
          kind: 'code',
          code: `string[] names = { "דנה", "יובל", "עומר" };
foreach (string name in names)
{
    Console.WriteLine($"שלום {name}!");
}`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'מתי `for` ומתי `foreach`? אם צריך את המיקום (אינדקס) או לשנות איברים — `for`. אם רק קוראים את כל האיברים לפי הסדר — `foreach` נקייה וקצרה יותר.',
        },
      ],
    },
    {
      id: 'break-continue',
      icon: '🚪',
      title: 'break ו-continue',
      blocks: [
        {
          kind: 'p',
          text: 'שתי מילות מפתח נותנות שליטה עדינה יותר: `break` יוצאת מהלולאה מיד, ו-`continue` מדלגת על שאר הסיבוב הנוכחי וממשיכה לבא.',
        },
        {
          kind: 'code',
          code: `for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break;      // עוצרים לגמרי ב-5
    }
    Console.WriteLine(i);
}
// מדפיס: 1 2 3 4

for (int i = 1; i <= 5; i++)
{
    if (i % 2 == 0)
    {
        continue;   // מדלגים על הזוגיים
    }
    Console.WriteLine(i);
}
// מדפיס: 1 3 5`,
        },
      ],
    },
    {
      id: 'nested',
      icon: '🏗️',
      title: 'לולאות מקוננות',
      blocks: [
        {
          kind: 'p',
          text: 'אפשר לשים לולאה בתוך לולאה. הפנימית רצה מההתחלה עד הסוף עבור כל סיבוב אחד של החיצונית. ככה מדפיסים טבלאות, מלבנים ופירמידות:',
        },
        {
          kind: 'code',
          code: `for (int row = 0; row < 3; row++)
{
    for (int col = 0; col < 4; col++)
    {
        Console.Write("*");
    }
    Console.WriteLine();   // ירידת שורה אחרי כל שורה
}
// ****
// ****
// ****`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'תנו ללולאות מקוננות שמות משמעותיים כמו `row` ו-`col` במקום `i` ו-`j` — זה מונע בלבול מי סופר מה.',
        },
      ],
    },
    {
      id: 'summary',
      icon: '📋',
      title: 'סיכום',
      blocks: [
        {
          kind: 'table',
          headers: ['לולאה', 'מתי משתמשים'],
          rows: [
            ['`for`', 'יודעים כמה פעמים: "בדיוק 10 סיבובים"'],
            ['`while`', 'לא יודעים כמה: "כל עוד לא ניחשת נכון"'],
            ['`do-while`', 'כמו while, אבל חייב לרוץ לפחות פעם אחת'],
            ['`foreach`', 'מעבר על כל האיברים של אוסף'],
          ],
        },
        {
          kind: 'list',
          items: [
            '`break` יוצאת מהלולאה; `continue` מדלגת לסיבוב הבא',
            'לולאה בתוך לולאה = שורות ועמודות',
            'ודאו תמיד שיש דרך לצאת — אחרת לולאה אינסופית',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הפרויקט של המודול הזה הוא הכי כיפי עד עכשיו: משחק ניחוש מספרים אמיתי. קודם תרגילים וחידונים!',
        },
      ],
    },
  ],
}
