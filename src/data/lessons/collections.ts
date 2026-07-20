import type { Lesson } from '../../types/lesson'

export const collectionsLesson: Lesson = {
  topicId: 'collections',
  title: 'אוספים: List, Dictionary ו-HashSet',
  subtitle: 'מבני הנתונים הגמישים שמחליפים מערכים כשלא יודעים מראש כמה ומה',
  sections: [
    {
      id: 'why-collections',
      icon: '🤷',
      title: 'מה חסר למערכים?',
      blocks: [
        {
          kind: 'p',
          text: 'מערך נולד עם גודל קבוע ומת איתו. אבל מה אם המשתמש מוסיף פריטים לעגלת קניות? לא יודעים מראש כמה יהיו! בשביל זה יש אוספים (Collections) — מבני נתונים שגדלים ומצטמצמים לפי הצורך.',
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'כל האוספים גרים ב-namespace נפרד — מוסיפים בראש הקובץ: `using System.Collections.Generic;`',
        },
      ],
    },
    {
      id: 'list',
      icon: '📜',
      title: 'List — הרשימה הגמישה',
      blocks: [
        {
          kind: 'p',
          text: '`List<T>` היא מערך שיודע לגדול. ה-`<T>` אומר איזה טיפוס היא מחזיקה: `List<int>`, `List<string>` וכן הלאה.',
        },
        {
          kind: 'code',
          code: `List<string> tasks = new List<string>();
tasks.Add("שיעורי בית");        // הוספה לסוף
tasks.Add("אימון כדורסל");
tasks.Add("לתרגל C#");

Console.WriteLine(tasks.Count);   // 3 — כמה יש (לא Length!)
Console.WriteLine(tasks[0]);      // גישה לפי אינדקס, כמו מערך

tasks.Remove("אימון כדורסל");     // הסרה לפי ערך
tasks.RemoveAt(0);                // הסרה לפי אינדקס

foreach (string task in tasks)    // מעבר — בדיוק כמו מערך
{
    Console.WriteLine(task);
}`,
        },
        {
          kind: 'table',
          headers: ['פעולה', 'מה היא עושה'],
          rows: [
            ['`Add(x)`', 'מוסיפה לסוף'],
            ['`Remove(x)`', 'מסירה את המופע הראשון של הערך'],
            ['`RemoveAt(i)`', 'מסירה לפי אינדקס'],
            ['`Contains(x)`', 'האם הערך קיים? (bool)'],
            ['`Count`', 'כמה איברים יש'],
            ['`Sort()` / `Reverse()`', 'מיון והיפוך במקום'],
            ['`Clear()`', 'מרוקנת הכל'],
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'מתי מערך ומתי List? כלל אצבע: אם הגודל קבוע וידוע מראש — מערך. בכל שאר המקרים — List. ברוב הקוד האמיתי תפגשו List.',
        },
      ],
    },
    {
      id: 'dictionary',
      icon: '📖',
      title: 'Dictionary — מפתח וערך',
      blocks: [
        {
          kind: 'p',
          text: 'איך שומרים ציון לכל תלמיד? רשימה של ציונים לא זוכרת של מי כל ציון. `Dictionary<TKey, TValue>` שומר זוגות: מפתח ➝ ערך, ושולף בזמן קבוע לפי המפתח — כמו מילון אמיתי.',
        },
        {
          kind: 'code',
          code: `Dictionary<string, int> grades = new Dictionary<string, int>();
grades["דנה"] = 95;              // הוספה או עדכון
grades["יובל"] = 88;

Console.WriteLine(grades["דנה"]);   // 95 — שליפה לפי מפתח

// זהירות: שליפת מפתח שלא קיים = קריסה!
if (grades.ContainsKey("רון"))
{
    Console.WriteLine(grades["רון"]);
}
else
{
    Console.WriteLine("אין תלמיד כזה");
}`,
        },
        {
          kind: 'p',
          text: 'מעבר על מילון נותן זוגות — לכל זוג יש `Key` ו-`Value`:',
        },
        {
          kind: 'code',
          code: `foreach (KeyValuePair<string, int> pair in grades)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'שני כללי ברזל: מפתחות הם ייחודיים (השמה למפתח קיים דורסת את הערך הישן), ושליפת מפתח שלא קיים זורקת שגיאה — לכן `ContainsKey` לפני גישה לא בטוחה.',
        },
      ],
    },
    {
      id: 'hashset',
      icon: '🎯',
      title: 'HashSet — אוסף בלי כפילויות',
      blocks: [
        {
          kind: 'p',
          text: '`HashSet<T>` שומר כל ערך פעם אחת בלבד — `Add` של ערך קיים פשוט לא עושה כלום. מושלם לשאלות כמו "כמה מילים שונות יש בטקסט?"',
        },
        {
          kind: 'code',
          code: `HashSet<string> visitors = new HashSet<string>();
visitors.Add("דנה");
visitors.Add("יובל");
visitors.Add("דנה");     // נבלע בשקט — כבר קיימת

Console.WriteLine(visitors.Count);   // 2, לא 3!`,
        },
      ],
    },
    {
      id: 'choosing',
      icon: '🧭',
      title: 'איזה אוסף לבחור?',
      blocks: [
        {
          kind: 'table',
          headers: ['הצורך', 'האוסף'],
          rows: [
            ['רשימת פריטים לפי סדר, עם כפילויות', '`List<T>`'],
            ['חיפוש מהיר לפי "שם" או מזהה', '`Dictionary<K, V>`'],
            ['ספירת ערכים ייחודיים / סינון כפילויות', '`HashSet<T>`'],
            ['גודל קבוע וידוע מראש', 'מערך `T[]`'],
          ],
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
            '`List<T>` — מערך גמיש: `Add`, `Remove`, `Contains`, `Count`, `Sort`',
            '`Dictionary<K, V>` — זוגות מפתח-ערך; `ContainsKey` לפני שליפה לא בטוחה',
            '`HashSet<T>` — כל ערך פעם אחת; מושלם לספירת ייחודיים',
            'כולם דורשים `using System.Collections.Generic;`',
            '`Count` באוספים, `Length` במערכים ובמחרוזות',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט תבנו מנהל רשימת קניות שלם — עם List לפריטים ו-Dictionary למחירים!',
        },
      ],
    },
  ],
}
