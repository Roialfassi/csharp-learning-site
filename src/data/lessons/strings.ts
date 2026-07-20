import type { Lesson } from '../../types/lesson'

export const stringsLesson: Lesson = {
  topicId: 'strings',
  title: 'מחרוזות: עבודה עם טקסט',
  subtitle: 'לחתוך, לחפש, להחליף ולעצב — כל הכלים לעבודה עם טקסט',
  sections: [
    {
      id: 'what-is-string',
      icon: '🔤',
      title: 'מחרוזת היא רצף של תווים',
      blocks: [
        {
          kind: 'p',
          text: 'מחרוזת (`string`) היא רצף של תווים, וכל תו יושב במיקום (אינדקס) משלו — בדיוק כמו במערך. הספירה מתחילה מ-0, ואפשר לגשת לכל תו עם סוגריים מרובעים.',
        },
        {
          kind: 'code',
          code: `string word = "hello";
Console.WriteLine(word[0]);                // h
Console.WriteLine(word[4]);                // o
Console.WriteLine(word.Length);            // 5
Console.WriteLine(word[word.Length - 1]);  // o — התו האחרון`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'גישה לאינדקס שלא קיים (למשל `word[5]` במילה בת 5 תווים) מקריסה את התוכנית. האינדקס האחרון הוא תמיד `Length - 1`.',
        },
      ],
    },
    {
      id: 'methods',
      icon: '🛠️',
      title: 'המתודות החשובות',
      blocks: [
        {
          kind: 'p',
          text: 'למחרוזות יש עשרות מתודות מובנות. אלה שתשתמשו בהן שוב ושוב:',
        },
        {
          kind: 'table',
          headers: ['מתודה', 'מה היא עושה', 'דוגמה'],
          rows: [
            ['`Length`', 'אורך המחרוזת', '`"abc".Length` ➝ `3`'],
            ['`ToUpper()` / `ToLower()`', 'אותיות גדולות/קטנות', '`"abc".ToUpper()` ➝ `"ABC"`'],
            ['`Contains(s)`', 'האם מכיל?', '`"hello".Contains("ell")` ➝ `true`'],
            ['`IndexOf(c)`', 'מיקום ההופעה הראשונה (או 1-)', '`"hello".IndexOf(\'l\')` ➝ `2`'],
            ['`Substring(i, len)`', 'חיתוך קטע', '`"hello".Substring(1, 3)` ➝ `"ell"`'],
            ['`Replace(a, b)`', 'החלפת כל המופעים', '`"aha".Replace("a", "o")` ➝ `"oho"`'],
            ['`Trim()`', 'ניקוי רווחים מהקצוות', '`"  hi  ".Trim()` ➝ `"hi"`'],
            ['`StartsWith(s)` / `EndsWith(s)`', 'מתחיל/נגמר ב...?', '`"shalom".EndsWith("om")` ➝ `true`'],
          ],
        },
        {
          kind: 'code',
          code: `string email = "  Dana@Gmail.COM  ";
string clean = email.Trim().ToLower();
Console.WriteLine(clean);                     // dana@gmail.com
Console.WriteLine(clean.Contains("@"));       // True
Console.WriteLine(clean.IndexOf("@"));        // 4`,
        },
      ],
    },
    {
      id: 'immutable',
      icon: '🧊',
      title: 'מחרוזות לא משתנות!',
      blocks: [
        {
          kind: 'p',
          text: 'עובדה חשובה שמפתיעה מתחילים: מחרוזת ב-C# היא immutable — אי אפשר לשנות אותה. כל מתודה כמו `ToUpper` או `Replace` לא נוגעת במקור, אלא מחזירה מחרוזת חדשה.',
        },
        {
          kind: 'code',
          code: `string name = "dana";
name.ToUpper();               // לא עושה כלום ל-name!
Console.WriteLine(name);      // dana

name = name.ToUpper();        // ככה כן: שומרים את התוצאה
Console.WriteLine(name);      // DANA`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'הבאג הקלאסי: קוראים ל-`word.Trim()` ושוכחים לשמור את התוצאה. אם לא כתבתם `word = word.Trim()` — שום דבר לא השתנה.',
        },
      ],
    },
    {
      id: 'loop-over',
      icon: '🔁',
      title: 'לולאות על מחרוזות',
      blocks: [
        {
          kind: 'p',
          text: 'אפשר לעבור על תווי המחרוזת עם `foreach` (זוכרים מהמודול הקודם?) או עם `for` כשצריך את האינדקס. ככה סופרים, מחפשים ובונים מחרוזות חדשות:',
        },
        {
          kind: 'code',
          caption: 'ספירת אותיות a במילה:',
          code: `string word = "banana";
int count = 0;
foreach (char c in word)
{
    if (c == 'a')
    {
        count++;
    }
}
Console.WriteLine(count);   // 3`,
        },
        {
          kind: 'code',
          caption: 'בניית מחרוזת הפוכה עם לולאה יורדת:',
          code: `string word = "abc";
string reversed = "";
for (int i = word.Length - 1; i >= 0; i--)
{
    reversed += word[i];
}
Console.WriteLine(reversed);   // cba`,
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
            'מחרוזת היא רצף תווים עם אינדקסים מ-0 עד `Length - 1`',
            '`Contains`, `IndexOf`, `Substring`, `Replace`, `Trim` — ארגז הכלים היומיומי',
            'מחרוזות לא משתנות: תמיד שומרים את התוצאה — `s = s.Trim()`',
            '`foreach` על מחרוזת נותן תו-תו; `for` כשצריך אינדקסים',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט של המודול תבנו בודק חוזק סיסמאות — כמו באתרי הרשמה אמיתיים!',
        },
      ],
    },
  ],
}
