import type { Lesson } from '../../types/lesson'

export const arraysLesson: Lesson = {
  topicId: 'arrays',
  title: 'מערכים: הרבה ערכים במקום אחד',
  subtitle: 'במקום 100 משתנים — מערך אחד: הגדרה, גישה, לולאות ומערכים דו-מימדיים',
  sections: [
    {
      id: 'what-is-array',
      icon: '📦',
      title: 'מה זה מערך?',
      blocks: [
        {
          kind: 'p',
          text: 'רוצים לשמור את הציונים של 30 תלמידים? ליצור 30 משתנים זה סיוט. מערך (`array`) הוא שורה של תאים מאותו טיפוס, שיושבים ביחד תחת שם אחד, וכל תא נגיש לפי מיקום — אינדקס.',
        },
        {
          kind: 'code',
          code: `int[] grades = { 85, 92, 78, 95, 88 };

Console.WriteLine(grades[0]);       // 85 — האיבר הראשון
Console.WriteLine(grades[4]);       // 88 — האחרון
Console.WriteLine(grades.Length);   // 5 — כמה איברים יש

grades[2] = 80;                     // אפשר לשנות איבר קיים`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'האינדקס הראשון הוא 0, לא 1! והאחרון הוא `Length - 1`. גישה לאינדקס לא קיים (`grades[5]` במערך של 5) מפילה את התוכנית עם `IndexOutOfRangeException`.',
        },
        {
          kind: 'p',
          text: 'אפשר גם ליצור מערך ריק בגודל קבוע ולמלא אותו אחר כך: `int[] scores = new int[10];` — עשרה תאים שמתחילים כולם מ-0.',
        },
      ],
    },
    {
      id: 'loops-arrays',
      icon: '🔁',
      title: 'מערכים ולולאות — החברים הכי טובים',
      blocks: [
        {
          kind: 'p',
          text: 'הכוח האמיתי של מערכים מתגלה עם לולאות: פעולה אחת על כל האיברים. `foreach` כשרק קוראים, `for` כשצריך את האינדקס או לשנות ערכים.',
        },
        {
          kind: 'code',
          caption: 'סכום כל האיברים:',
          code: `int[] numbers = { 4, 8, 15, 16, 23 };
int sum = 0;
foreach (int n in numbers)
{
    sum += n;
}
Console.WriteLine(sum);   // 66`,
        },
        {
          kind: 'code',
          caption: 'הדפסה עם מיקומים (צריך אינדקס — לכן for):',
          code: `for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine($"תא {i}: {numbers[i]}");
}`,
        },
      ],
    },
    {
      id: 'patterns',
      icon: '🧩',
      title: 'שלוש תבניות שחייבים להכיר',
      blocks: [
        {
          kind: 'p',
          text: 'רוב תרגילי המערכים בעולם הם וריאציה על שלוש תבניות: סכימה, חיפוש מקסימום, וספירה לפי תנאי. שווה לזכור אותן בעל־פה:',
        },
        {
          kind: 'code',
          caption: 'מציאת המקסימום:',
          code: `int max = numbers[0];        // מתחילים מהראשון
foreach (int n in numbers)
{
    if (n > max)
    {
        max = n;             // מצאנו גדול יותר — מעדכנים
    }
}`,
        },
        {
          kind: 'code',
          caption: 'ספירה לפי תנאי (כמה זוגיים?):',
          code: `int count = 0;
foreach (int n in numbers)
{
    if (n % 2 == 0)
    {
        count++;
    }
}`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'שימו לב לתבנית המשותפת: משתנה "צובר" שמאותחל לפני הלולאה, מתעדכן בתוכה, ומודפס אחריה. סכום, מקסימום, מונה — כולם עובדים ככה.',
        },
      ],
    },
    {
      id: 'two-dimensional',
      icon: '🗺️',
      title: 'מערכים דו-מימדיים',
      blocks: [
        {
          kind: 'p',
          text: 'לוח שחמט, טבלת ציונים של כמה כיתות, מפת משחק — לפעמים המידע הוא טבלה עם שורות ועמודות. מערך דו-מימדי מוגדר עם פסיק בסוגריים: `int[,]`.',
        },
        {
          kind: 'code',
          code: `int[,] table = {
    { 1, 2, 3 },
    { 4, 5, 6 }
};

Console.WriteLine(table[0, 2]);        // 3 — שורה 0, עמודה 2
Console.WriteLine(table.GetLength(0)); // 2 שורות
Console.WriteLine(table.GetLength(1)); // 3 עמודות`,
        },
        {
          kind: 'p',
          text: 'מעבר על טבלה = לולאה מקוננת (מהמודול על לולאות!): החיצונית על שורות, הפנימית על עמודות.',
        },
        {
          kind: 'code',
          code: `for (int row = 0; row < table.GetLength(0); row++)
{
    for (int col = 0; col < table.GetLength(1); col++)
    {
        Console.Write(table[row, col] + " ");
    }
    Console.WriteLine();
}`,
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
            'מערך שומר הרבה ערכים מאותו טיפוס; גישה לפי אינדקס שמתחיל מ-0',
            '`Length` נותן את הגודל; האינדקס האחרון הוא `Length - 1`',
            'התבניות המרכזיות: סכימה, מקסימום, ספירה לפי תנאי',
            'מערך דו-מימדי `int[,]` = שורות ועמודות; ניגשים עם `[row, col]` ועוברים עם לולאה מקוננת',
            'גישה מחוץ לגבולות = קריסה. תמיד בדקו את הטווח',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט תבנו יומן ציונים אמיתי שמנתח את הציונים של כיתה שלמה!',
        },
      ],
    },
  ],
}
