import type { Project } from '../../types/project'

export const conversionProject: Project = {
  topicId: 'conversion',
  title: 'ממיר יחידות',
  subtitle: 'תוכנית שממירה טמפרטורות, מטבעות וזמן — עם קלט אמיתי מהמשתמש',
  icon: '🌡️',
  description: [
    'תבנו ממיר יחידות אמיתי: המשתמש מקליד ערכים, והתוכנית ממירה — צלזיוס לפרנהייט, שקלים לדולרים, ושניות לדקות ושניות.',
    'כאן תרגישו למה המרות חשובות: כל קלט מגיע כמחרוזת, כל חישוב דורש את הטיפוס הנכון, וחלוקת שלמים אורבת בכל פינה.',
  ],
  finalPreview: `=== ממיר היחידות שלי ===
הקלידו טמפרטורה בצלזיוס: 30
30 מעלות צלזיוס = 86 מעלות פרנהייט
הקלידו סכום בשקלים: 100
100 שקלים = 27.03 דולר
הקלידו מספר שניות: 200
200 שניות = 3 דקות ו-20 שניות`,
  steps: [
    {
      title: 'כותרת וקליטת טמפרטורה',
      goal: 'התוכנית קולטת מספר אמיתי מהמשתמש',
      instructions: [
        'התחילו מתוכנית עם כותרת `=== ממיר היחידות שלי ===`.',
        'בקשו מהמשתמש טמפרטורה בצלזיוס וקלטו אותה. זכרו: `Console.ReadLine()` מחזירה מחרוזת — המירו אותה ל-`double` עם `double.Parse`.',
        'בינתיים הדפיסו את הערך שנקלט כדי לוודא שהכל עובד.',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== ממיר היחידות שלי ===");
        Console.Write("הקלידו טמפרטורה בצלזיוס: ");
        double celsius = double.Parse(Console.ReadLine());
        Console.WriteLine(celsius);
    }
}`,
      checkpoint: 'הריצו והקלידו 30 — התוכנית אמורה להדפיס 30 בחזרה בלי לקרוס.',
    },
    {
      title: 'המרה לפרנהייט',
      goal: 'חישוב עם הנוסחה הנכונה והדפסה מעוצבת',
      instructions: [
        'הנוסחה: פרנהייט = צלזיוס × 9 / 5 + 32.',
        'חשבו את התוצאה ושמרו במשתנה `fahrenheit`.',
        'שימו לב למלכודת: אם תכתבו `celsius * 9 / 5` כשcelsius הוא double — הכל בסדר. אבל אם הייתם עובדים עם int, `9 / 5` לבד היה נותן 1!',
        'הדפיסו משפט מלא עם string interpolation.',
      ],
      code: `double fahrenheit = celsius * 9 / 5 + 32;
Console.WriteLine($"{celsius} מעלות צלזיוס = {fahrenheit} מעלות פרנהייט");`,
      checkpoint: 'עבור קלט 30 אתם אמורים לקבל:',
      checkpointOutput: '30 מעלות צלזיוס = 86 מעלות פרנהייט',
    },
    {
      title: 'שקלים לדולרים',
      goal: 'המרת מטבע עם עיגול לשתי ספרות',
      instructions: [
        'בקשו סכום בשקלים וקלטו אותו כ-`double`.',
        'המירו לדולרים לפי שער של 3.7 (חלקו ב-3.7).',
        'העיגול: השתמשו ב-`Math.Round(dollars, 2)` כדי לעגל לשתי ספרות אחרי הנקודה.',
        'הדפיסו את התוצאה במשפט מלא.',
      ],
      code: `Console.Write("הקלידו סכום בשקלים: ");
double shekels = double.Parse(Console.ReadLine());
double dollars = Math.Round(shekels / 3.7, 2);
Console.WriteLine($"{shekels} שקלים = {dollars} דולר");`,
      checkpoint: 'עבור קלט 100 אתם אמורים לקבל 27.03 דולר.',
      checkpointOutput: '100 שקלים = 27.03 דולר',
    },
    {
      title: 'שניות לדקות ושניות',
      goal: 'שימוש בחלוקת שלמים ובשארית ביחד',
      instructions: [
        'בקשו מספר שניות וקלטו אותו — הפעם כ-`int` עם `int.Parse`.',
        'דקות שלמות: חלוקת שלמים ב-60. שניות שנשארו: שארית עם `% 60`.',
        'הדפיסו: `X שניות = Y דקות ו-Z שניות`.',
      ],
      code: `Console.Write("הקלידו מספר שניות: ");
int totalSeconds = int.Parse(Console.ReadLine());
int minutes = totalSeconds / 60;
int seconds = totalSeconds % 60;
Console.WriteLine($"{totalSeconds} שניות = {minutes} דקות ו-{seconds} שניות");`,
      checkpoint: 'עבור קלט 200 אתם אמורים לקבל 3 דקות ו-20 שניות.',
      checkpointOutput: '200 שניות = 3 דקות ו-20 שניות',
    },
    {
      title: 'הרצה מלאה וניסויים',
      goal: 'ממיר יחידות שלם ועובד',
      instructions: [
        'הריצו את התוכנית המלאה מההתחלה ובדקו את כל שלוש ההמרות ברצף.',
        'נסו ערכים מעניינים: 0 צלזיוס (אמור לתת 32 פרנהייט), 37 שקלים (בערך 10 דולר), 59 שניות (0 דקות ו-59 שניות).',
        'אתגר רשות: הוסיפו המרה רביעית משלכם — למשל ק"מ למייל (חלקו ב-1.609).',
      ],
      checkpoint: 'שלוש ההמרות רצות ברצף ומחזירות תוצאות נכונות — הממיר שלכם מוכן! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== ממיר היחידות שלי ===");

        Console.Write("הקלידו טמפרטורה בצלזיוס: ");
        double celsius = double.Parse(Console.ReadLine());
        double fahrenheit = celsius * 9 / 5 + 32;
        Console.WriteLine($"{celsius} מעלות צלזיוס = {fahrenheit} מעלות פרנהייט");

        Console.Write("הקלידו סכום בשקלים: ");
        double shekels = double.Parse(Console.ReadLine());
        double dollars = Math.Round(shekels / 3.7, 2);
        Console.WriteLine($"{shekels} שקלים = {dollars} דולר");

        Console.Write("הקלידו מספר שניות: ");
        int totalSeconds = int.Parse(Console.ReadLine());
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        Console.WriteLine($"{totalSeconds} שניות = {minutes} דקות ו-{seconds} שניות");
    }
}`,
}
