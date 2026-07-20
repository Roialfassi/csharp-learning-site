import type { Lesson } from '../../types/lesson'

export const conditionsLesson: Lesson = {
  topicId: 'conditions',
  title: 'תנאים: התוכנית מקבלת החלטות',
  subtitle: 'if, else, switch ותנאים לוגיים — איך גורמים לקוד להתנהג אחרת במצבים שונים',
  sections: [
    {
      id: 'if-basics',
      icon: '🚦',
      title: 'משפט if',
      blocks: [
        {
          kind: 'p',
          text: 'עד עכשיו התוכניות שלנו רצו שורה אחרי שורה, תמיד באותו סדר. משפט `if` משנה את זה: הוא מריץ קטע קוד רק אם תנאי מסוים מתקיים.',
        },
        {
          kind: 'code',
          code: `int age = 16;
if (age >= 18)
{
    Console.WriteLine("מותר להצביע!");
}
Console.WriteLine("התוכנית ממשיכה כרגיל");`,
        },
        {
          kind: 'p',
          text: 'התנאי נכתב בסוגריים והוא תמיד ביטוי שערכו `true` או `false`. אם הוא `true` — הקוד שבסוגריים המסולסלים רץ; אם `false` — מדלגים עליו.',
        },
        {
          kind: 'table',
          headers: ['אופרטור', 'משמעות', 'דוגמה'],
          rows: [
            ['`==`', 'שווה', '`x == 5`'],
            ['`!=`', 'שונה', '`x != 0`'],
            ['`>` / `<`', 'גדול / קטן', '`age > 12`'],
            ['`>=` / `<=`', 'גדול-שווה / קטן-שווה', '`grade >= 55`'],
          ],
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'הטעות הקלאסית: `=` הוא השמה, `==` הוא השוואה. `if (x = 5)` היא שגיאת קומפילציה ב-C# — הקומפיילר מציל אתכם, אבל כדאי להכיר את ההבדל.',
        },
      ],
    },
    {
      id: 'else',
      icon: '🔀',
      title: 'else ו-else if',
      blocks: [
        {
          kind: 'p',
          text: '`else` מגדיר מה קורה כשהתנאי לא מתקיים, ו-`else if` מאפשר לבדוק כמה תנאים בזה אחר זה. ברגע שתנאי אחד מתקיים — השאר לא נבדקים.',
        },
        {
          kind: 'code',
          code: `int grade = 78;
if (grade >= 90)
{
    Console.WriteLine("מצוין!");
}
else if (grade >= 70)
{
    Console.WriteLine("יפה מאוד");
}
else if (grade >= 55)
{
    Console.WriteLine("עובר");
}
else
{
    Console.WriteLine("נכשל");
}
// פלט: יפה מאוד`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'שימו לב לסדר! אם היינו בודקים קודם `grade >= 55`, ציון 95 היה מקבל "עובר" — כי התנאי הראשון שמתקיים מנצח. תמיד בודקים מהמחמיר לקל.',
        },
      ],
    },
    {
      id: 'logical',
      icon: '🧠',
      title: 'תנאים מורכבים: && || !',
      blocks: [
        {
          kind: 'p',
          text: 'לפעמים החלטה תלויה בכמה דברים ביחד. שלושת האופרטורים הלוגיים מחברים תנאים פשוטים לתנאי מורכב:',
        },
        {
          kind: 'table',
          headers: ['אופרטור', 'שם', 'מתי true'],
          rows: [
            ['`&&`', 'וגם (AND)', 'כששני הצדדים true'],
            ['`||`', 'או (OR)', 'כשלפחות צד אחד true'],
            ['`!`', 'לא (NOT)', 'הופך true ל-false ולהפך'],
          ],
        },
        {
          kind: 'code',
          code: `int age = 15;
bool hasTicket = true;

if (age >= 12 && hasTicket)
{
    Console.WriteLine("מותר להיכנס לסרט");
}

if (age < 12 || age > 65)
{
    Console.WriteLine("זכאי להנחה");
}

if (!hasTicket)
{
    Console.WriteLine("צריך לקנות כרטיס");
}`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'בדיקת טווח היא השימוש הנפוץ ביותר ב-`&&`: מספר בין 0 ל-100 נכתב `x >= 0 && x <= 100`. אי אפשר לכתוב `0 <= x <= 100` — זה לא עובד ב-C#!',
        },
      ],
    },
    {
      id: 'switch',
      icon: '🎛️',
      title: 'משפט switch',
      blocks: [
        {
          kind: 'p',
          text: 'כשמשווים משתנה אחד מול הרבה ערכים אפשריים, `switch` קריא יותר משרשרת `else if` ארוכה. כל `case` הוא ערך אפשרי, `default` תופס את כל השאר.',
        },
        {
          kind: 'code',
          code: `int day = 6;
switch (day)
{
    case 6:
        Console.WriteLine("שישי — סופ\\"ש מתקרב!");
        break;
    case 7:
        Console.WriteLine("שבת — מנוחה");
        break;
    default:
        Console.WriteLine("יום חול רגיל");
        break;
}`,
        },
        {
          kind: 'callout',
          variant: 'warning',
          text: 'כל `case` חייב להסתיים ב-`break` — בלעדיו הקוד לא יתקמפל. זו הדרך של C# לוודא שלא "נופלים" בטעות ל-case הבא.',
        },
      ],
    },
    {
      id: 'ternary',
      icon: '⚡',
      title: 'האופרטור המקוצר ?:',
      blocks: [
        {
          kind: 'p',
          text: 'כשכל מה שרוצים הוא לבחור בין שני ערכים לפי תנאי, האופרטור `?:` עושה את זה בשורה אחת: `תנאי ? ערך-אם-כן : ערך-אם-לא`.',
        },
        {
          kind: 'code',
          code: `int age = 20;
string status = age >= 18 ? "בגיר" : "קטין";
Console.WriteLine(status);   // בגיר`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'השתמשו ב-`?:` רק לבחירות פשוטות בין שני ערכים. ברגע שהלוגיקה מסתבכת — עדיף `if` רגיל וקריא.',
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
            '`if` מריץ קוד רק כשתנאי מתקיים; `else` תופס את המקרה ההפוך',
            'בשרשרת `else if` — התנאי הראשון שמתקיים מנצח, לכן הסדר קריטי',
            '`&&` דורש ששני התנאים יתקיימו, `||` מסתפק באחד, `!` הופך',
            '`switch` מסודר יותר כשמשווים משתנה מול הרבה ערכים קבועים',
            '`?:` בוחר בין שני ערכים בשורה אחת',
            'השוואה היא `==`, השמה היא `=` — אל תתבלבלו',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'תרגלו עם 10 התרגילים ושני החידונים, ואז בנו את הפרויקט: מחשבון ציונים שנותן הערכה אישית!',
        },
      ],
    },
  ],
}
