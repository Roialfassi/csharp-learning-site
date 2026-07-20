import type { Lesson } from '../../types/lesson'

export const linqLesson: Lesson = {
  topicId: 'linq',
  title: 'LINQ: שאילתות על נתונים',
  subtitle: 'לסנן, למיין, לחשב ולקבץ — בשורה אחת במקום לולאה שלמה',
  sections: [
    {
      id: 'why',
      icon: '✨',
      title: 'למה LINQ?',
      blocks: [
        {
          kind: 'p',
          text: 'רוצים את כל הזוגיים במערך? כתבתם את זה עשר פעמים במסלול הזה: משתנה, לולאה, `if`, הוספה. LINQ עושה את זה בשורה:',
        },
        {
          kind: 'code',
          code: `// הדרך הישנה
List<int> evens = new List<int>();
foreach (int n in numbers)
{
    if (n % 2 == 0)
    {
        evens.Add(n);
    }
}

// עם LINQ
var evens = numbers.Where(n => n % 2 == 0);`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'LINQ עובד על כל אוסף: מערכים, `List`, `Dictionary` — הכל. חובה להוסיף בראש הקובץ: `using System.Linq;`',
        },
      ],
    },
    {
      id: 'lambda',
      icon: '🏹',
      title: 'ביטויי lambda: החץ =>',
      blocks: [
        {
          kind: 'p',
          text: 'לפני LINQ צריך להבין את החץ. `n => n % 2 == 0` היא מתודה זעירה בלי שם: "קבל `n`, החזר האם הוא זוגי". קוראים אותה "עבור n, החזר...".',
        },
        {
          kind: 'code',
          code: `n => n * 2              // קבל n, החזר את הכפול שלו
n => n > 10             // קבל n, החזר האם הוא גדול מ-10
s => s.Grade > 85       // קבל תלמיד, החזר האם ציונו מעל 85
(a, b) => a + b         // שני פרמטרים`,
        },
        {
          kind: 'p',
          text: 'שם המשתנה שרירותי לגמרי — `n`, `x`, `student`, מה שקריא. LINQ מפעיל את הביטוי על כל איבר בתורו.',
        },
      ],
    },
    {
      id: 'core',
      icon: '🔧',
      title: 'הפעולות המרכזיות',
      blocks: [
        {
          kind: 'table',
          headers: ['פעולה', 'מה היא עושה', 'דוגמה'],
          rows: [
            ['`Where`', 'מסננת לפי תנאי', '`nums.Where(n => n > 5)`'],
            ['`Select`', 'ממירה כל איבר', '`nums.Select(n => n * 2)`'],
            ['`OrderBy`', 'ממיינת בסדר עולה', '`nums.OrderBy(n => n)`'],
            ['`OrderByDescending`', 'ממיינת בסדר יורד', '`s.OrderByDescending(x => x.Grade)`'],
            ['`Count`', 'סופרת (עם תנאי או בלי)', '`nums.Count(n => n > 10)`'],
            ['`Sum` / `Average`', 'סכום / ממוצע', '`grades.Average()`'],
            ['`Max` / `Min`', 'הגדול / הקטן ביותר', '`grades.Max()`'],
            ['`Any` / `All`', 'קיים אחד ש... / כולם', '`nums.Any(n => n < 0)`'],
            ['`First` / `FirstOrDefault`', 'האיבר הראשון שמתאים', '`s.FirstOrDefault(x => x.Grade > 90)`'],
          ],
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'ההבדל שהכי מבלבל: `Where` **מסננת** (פחות איברים, אותו סוג), `Select` **ממירה** (אותו מספר איברים, סוג אחר).',
        },
      ],
    },
    {
      id: 'chaining',
      icon: '⛓️',
      title: 'שרשור פעולות',
      blocks: [
        {
          kind: 'p',
          text: 'הכוח האמיתי הוא בשרשור: כל פעולה מקבלת את התוצאה של הקודמת, ונוצרת "שאילתה" שקוראים אותה כמעט כמו משפט באנגלית:',
        },
        {
          kind: 'code',
          code: `var result = students
    .Where(s => s.Grade > 85)          // רק המצטיינים
    .OrderByDescending(s => s.Grade)   // מהגבוה לנמוך
    .Select(s => s.Name);              // רק השמות

foreach (string name in result)
{
    Console.WriteLine(name);
}`,
        },
        {
          kind: 'p',
          text: 'נסו לרגע לדמיין את הקוד הזה בלולאות: רשימה חדשה, לולאת סינון, אלגוריתם מיון, לולאה נוספת לחילוץ שמות. 20 שורות מול 3.',
        },
      ],
    },
    {
      id: 'var',
      icon: '❓',
      title: 'מה זה var?',
      blocks: [
        {
          kind: 'p',
          text: '`var` אומר לקומפיילר "תסיק בעצמך את הטיפוס". זה שימושי במיוחד ב-LINQ, שבו טיפוסי התוצאה ארוכים ומסורבלים.',
        },
        {
          kind: 'code',
          code: `var evens = numbers.Where(n => n % 2 == 0);
// הטיפוס האמיתי: IEnumerable<int> — var חוסך את הכתיבה

int x = 5;      // כאן אין צורך ב-var, הטיפוס ברור וקצר`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: '`var` אינו "טיפוס דינמי"! הטיפוס נקבע בקומפילציה ולא משתנה. `var x = 5;` הוא `int` לכל דבר, ו-`x = "abc"` יהיה שגיאה.',
        },
      ],
    },
    {
      id: 'groupby',
      icon: '🗃️',
      title: 'GroupBy: קיבוץ',
      blocks: [
        {
          kind: 'p',
          text: 'הפעולה המתקדמת ביותר במודול: `GroupBy` מקבצת איברים לפי מפתח. לכל קבוצה יש `Key` ואפשר לעבוד עליה כמו על אוסף:',
        },
        {
          kind: 'code',
          code: `var byClass = students.GroupBy(s => s.ClassName);

foreach (var group in byClass)
{
    Console.WriteLine($"כיתה {group.Key}: {group.Count()} תלמידים");
    Console.WriteLine($"  ממוצע: {group.Average(s => s.Grade)}");
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
            'LINQ = שאילתות על אוספים; דורש `using System.Linq;`',
            '`x => תנאי` הוא ביטוי lambda — מתודה זעירה בלי שם',
            '`Where` מסננת, `Select` ממירה, `OrderBy` ממיינת',
            '`Count`, `Sum`, `Average`, `Max`, `Min` — צבירה בשורה אחת',
            '`Any`/`All` לשאלות כן-לא; `FirstOrDefault` לחיפוש בטוח (בדקו `null`!)',
            'שרשור פעולות הופך 20 שורות לולאות ל-3 שורות קריאות',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'הפרויקט האחרון של המסלול: מערכת ניהול תלמידים עם דוחות מלאים — כולו LINQ. אחריו סיימתם הכל! 🎓',
        },
      ],
    },
  ],
}
