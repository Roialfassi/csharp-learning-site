import type { Lesson } from '../../types/lesson'

export const basicsLesson: Lesson = {
  topicId: 'basics',
  title: 'יסודות: התוכנית הראשונה שלכם',
  subtitle: 'איך תוכנית עובדת, איך מדפיסים למסך, ואיך שומרים מידע במשתנים',
  sections: [
    {
      id: 'first-program',
      icon: '🚀',
      title: 'התוכנית הראשונה',
      blocks: [
        {
          kind: 'p',
          text: 'כל תוכנית C# בנויה מאותו שלד בסיסי: מחלקה (`class`) שבתוכה מתודה בשם `Main`. כשמריצים את התוכנית, המחשב מתחיל לבצע את הפקודות שבתוך `Main`, שורה אחרי שורה, מלמעלה למטה.',
        },
        {
          kind: 'code',
          caption: 'התוכנית הקצרה ביותר שמדפיסה משהו:',
          code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World");
    }
}`,
        },
        {
          kind: 'list',
          items: [
            '`using System;` — שורת פתיחה שנותנת לנו גישה לכלים בסיסיים כמו `Console`',
            '`class Program` — "קופסה" שמכילה את הקוד שלנו. על מחלקות נלמד לעומק בהמשך המסלול',
            '`static void Main()` — נקודת ההתחלה. מכאן התוכנית מתחילה לרוץ',
            '`Console.WriteLine(...)` — פקודה שמדפיסה טקסט למסך',
          ],
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'כל פקודה ב-C# חייבת להסתיים בנקודה-פסיק `;`. שכחתם? התוכנית לא תתקמפל — זו טעות הקומפילציה הנפוצה ביותר אצל מתחילים.',
        },
      ],
    },
    {
      id: 'printing',
      icon: '🖨️',
      title: 'הדפסה למסך',
      blocks: [
        {
          kind: 'p',
          text: 'יש שתי פקודות הדפסה עיקריות: `Console.WriteLine` שמדפיסה ועוברת לשורה חדשה, ו-`Console.Write` שמדפיסה ונשארת באותה שורה.',
        },
        {
          kind: 'code',
          code: `Console.WriteLine("שלום");   // מדפיס ויורד שורה
Console.Write("א");          // מדפיס ונשאר באותה שורה
Console.Write("ב");
// הפלט:
// שלום
// אב`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'טקסט שרוצים להדפיס חייב להיות בתוך גרשיים כפולים: `"ככה"`. בלי גרשיים, C# יחשוב שזה שם של משתנה.',
        },
      ],
    },
    {
      id: 'variables',
      icon: '📦',
      title: 'משתנים וטיפוסי נתונים',
      blocks: [
        {
          kind: 'p',
          text: 'משתנה הוא "קופסה" עם שם, ששומרת ערך שאפשר להשתמש בו ולשנות אותו. לכל משתנה יש טיפוס (type) שקובע איזה סוג מידע הוא יכול להכיל.',
        },
        {
          kind: 'code',
          code: `int age = 14;            // מספר שלם
double height = 1.62;    // מספר עשרוני
string name = "נועה";    // טקסט
char grade = 'A';        // תו בודד (גרש בודד!)
bool isHappy = true;     // אמת או שקר`,
        },
        {
          kind: 'table',
          headers: ['טיפוס', 'מה הוא שומר', 'דוגמה'],
          rows: [
            ['`int`', 'מספרים שלמים', '`42`, `-7`, `0`'],
            ['`double`', 'מספרים עשרוניים', '`3.14`, `-0.5`'],
            ['`string`', 'טקסט (בגרשיים כפולים)', '`"שלום עולם"`'],
            ['`char`', 'תו בודד (בגרש בודד)', "`'a'`, `'!'`"],
            ['`bool`', 'אמת או שקר', '`true`, `false`'],
          ],
        },
        {
          kind: 'p',
          text: 'שמות משתנים טובים מתארים מה הם מכילים: `age` ולא `a`, `studentName` ולא `x`. השם נכתב באנגלית, מתחיל באות קטנה, ובלי רווחים.',
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'אי אפשר לשמור טקסט במשתנה `int` או מספר עשרוני במשתנה `string` — הקומפיילר ישמור עליכם ויציג שגיאה. זה היתרון הגדול של טיפוסים!',
        },
      ],
    },
    {
      id: 'input',
      icon: '⌨️',
      title: 'קלט מהמשתמש',
      blocks: [
        {
          kind: 'p',
          text: 'הפקודה `Console.ReadLine()` עוצרת את התוכנית ומחכה שהמשתמש יקליד משהו וילחץ Enter. מה שהוקלד חוזר אלינו תמיד בתור `string`.',
        },
        {
          kind: 'code',
          code: `Console.Write("מה שמך? ");
string name = Console.ReadLine();
Console.WriteLine("נעים מאוד, " + name + "!");`,
        },
        {
          kind: 'p',
          text: 'הדרך הנוחה ביותר לשלב משתנים בתוך משפט היא string interpolation: מוסיפים `$` לפני הגרשיים, וכותבים את המשתנים בתוך סוגריים מסולסלים.',
        },
        {
          kind: 'code',
          code: `string name = "יובל";
int age = 15;
Console.WriteLine($"{name} בן {age}");
// פלט: יובל בן 15`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'המשתמש הקליד מספר? הוא עדיין מגיע אלינו כ-`string`! איך הופכים אותו למספר אמיתי שאפשר לחשב איתו — זה בדיוק הנושא של המודול הבא: המרות.',
        },
      ],
    },
    {
      id: 'arithmetic',
      icon: '🧮',
      title: 'פעולות חשבון',
      blocks: [
        {
          kind: 'p',
          text: 'C# יודעת לחשב עם האופרטורים המוכרים: חיבור `+`, חיסור `-`, כפל `*` וחילוק `/`. אפשר לשלב אותם עם סוגריים בדיוק כמו במתמטיקה.',
        },
        {
          kind: 'code',
          code: `int a = 10;
int b = 3;
Console.WriteLine(a + b);   // 13
Console.WriteLine(a - b);   // 7
Console.WriteLine(a * b);   // 30
Console.WriteLine(a / b);   // 3  <-- רגע, לא 3.333?`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'חילוק של שני מספרים שלמים (`int`) נותן תוצאה שלמה — החלק העשרוני פשוט נחתך! `10 / 3` הוא `3`, לא `3.333`. כדי לקבל תוצאה עשרונית, לפחות אחד מהמספרים צריך להיות `double`, למשל `10 / 3.0`.',
        },
        {
          kind: 'p',
          text: 'ל-`+` יש תפקיד כפול: בין מספרים הוא מחבר, בין מחרוזות הוא מדביק. `"אב" + "גד"` נותן `"אבגד"`.',
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
            'תוכנית C# מתחילה לרוץ מ-`Main` ומבצעת פקודות שורה אחרי שורה',
            '`Console.WriteLine` מדפיסה למסך, `Console.ReadLine` קולטת מהמשתמש',
            'משתנים שומרים מידע, ולכל משתנה יש טיפוס: `int`, `double`, `string`, `char`, `bool`',
            'string interpolation (`$"{...}"`) היא הדרך הנוחה לשלב משתנים במשפט',
            'זהירות מחלוקת שלמים: `7 / 2` הוא `3`, אבל `7 / 2.0` הוא `3.5`',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'עכשיו תורכם! פתרו את התרגילים של המודול, ענו על החידונים, ובנו את הפרויקט: תעודת זהות דיגיטלית.',
        },
      ],
    },
  ],
}
