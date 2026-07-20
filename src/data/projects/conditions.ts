import type { Project } from '../../types/project'

export const conditionsProject: Project = {
  topicId: 'conditions',
  title: 'מחשבון ציונים חכם',
  subtitle: 'תוכנית שמקבלת ציונים, בודקת תקינות ונותנת הערכה אישית',
  icon: '🎓',
  description: [
    'תבנו מחשבון ציונים: המשתמש מקליד שלושה ציונים, והתוכנית מחשבת ממוצע, קובעת הערכה מילולית (מצוין / יפה מאוד / עובר / נכשל), ואפילו בודקת שהקלט הגיוני.',
    'זה הפרויקט הראשון שבו התוכנית שלכם באמת "מחליטה" — כל הרצה יכולה להסתיים אחרת, תלוי בקלט.',
  ],
  finalPreview: `=== מחשבון הציונים ===
הקלידו ציון 1: 95
הקלידו ציון 2: 88
הקלידו ציון 3: 79
הממוצע שלך: 87.33
הערכה: יפה מאוד
עוד קצת מאמץ ותגיעו למצוין!`,
  steps: [
    {
      title: 'קליטת שלושה ציונים',
      goal: 'שלושה ציונים שמורים במשתנים',
      instructions: [
        'התחילו עם כותרת `=== מחשבון הציונים ===`.',
        'קלטו שלושה ציונים לשלושה משתנים `int` (השתמשו ב-`int.Parse` — למדתם במודול הקודם!).',
        'לכל ציון הדפיסו קודם בקשה: `הקלידו ציון 1:` וכן הלאה.',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== מחשבון הציונים ===");
        Console.Write("הקלידו ציון 1: ");
        int grade1 = int.Parse(Console.ReadLine());
        Console.Write("הקלידו ציון 2: ");
        int grade2 = int.Parse(Console.ReadLine());
        Console.Write("הקלידו ציון 3: ");
        int grade3 = int.Parse(Console.ReadLine());
    }
}`,
      checkpoint: 'הריצו והקלידו שלושה ציונים — התוכנית מסיימת בלי לקרוס.',
    },
    {
      title: 'חישוב ממוצע מדויק',
      goal: 'ממוצע עשרוני נכון, לא חלוקת שלמים',
      instructions: [
        'חשבו את הממוצע של שלושת הציונים ושמרו ב-`double`.',
        'זהירות מהמלכודת של חלוקת שלמים! חלקו ב-`3.0` ולא ב-`3`.',
        'עגלו לשתי ספרות עם `Math.Round(average, 2)` והדפיסו: `הממוצע שלך: X`.',
      ],
      code: `double average = (grade1 + grade2 + grade3) / 3.0;
average = Math.Round(average, 2);
Console.WriteLine($"הממוצע שלך: {average}");`,
      checkpoint: 'עבור הציונים 95, 88 ו-79 הממוצע אמור להיות 87.33.',
      checkpointOutput: 'הממוצע שלך: 87.33',
    },
    {
      title: 'הערכה מילולית',
      goal: 'שרשרת else if שממירה ממוצע להערכה',
      instructions: [
        'הוסיפו שרשרת תנאים שמדפיסה `הערכה:` ואת ההערכה המתאימה:',
        '90 ומעלה — `מצוין`; 80 עד 89 — `יפה מאוד`; 55 עד 79 — `עובר`; מתחת ל-55 — `נכשל`.',
        'זכרו: בודקים מהגבוה לנמוך, והתנאי הראשון שמתקיים מנצח.',
      ],
      code: `if (average >= 90)
{
    Console.WriteLine("הערכה: מצוין");
}
else if (average >= 80)
{
    Console.WriteLine("הערכה: יפה מאוד");
}
else if (average >= 55)
{
    Console.WriteLine("הערכה: עובר");
}
else
{
    Console.WriteLine("הערכה: נכשל");
}`,
      checkpoint: 'נסו כמה הרצות עם ציונים שונים ובדקו שכל טווח נותן את ההערכה הנכונה (נסו גם ממוצע 90 בדיוק!).',
    },
    {
      title: 'בדיקת תקינות קלט',
      goal: 'התוכנית מזהה ציונים לא הגיוניים',
      instructions: [
        'מה אם המשתמש הקליד 150? או -20? לפני חישוב הממוצע, בדקו שכל שלושת הציונים בטווח 0 עד 100.',
        'השתמשו ב-`&&` כדי לחבר את הבדיקות, או בדקו כל ציון בנפרד עם `||`: אם ציון קטן מ-0 או גדול מ-100 — הקלט לא תקין.',
        'אם הקלט לא תקין, הדפיסו `שגיאה: ציון חייב להיות בין 0 ל-100` — ואת שאר החישוב עטפו ב-else.',
      ],
      code: `if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100)
{
    Console.WriteLine("שגיאה: ציון חייב להיות בין 0 ל-100");
}
else
{
    // כל החישוב וההערכה עוברים לכאן
}`,
      checkpoint: 'הקלידו ציון 150 — התוכנית אמורה להדפיס את הודעת השגיאה ולא לחשב ממוצע.',
      checkpointOutput: 'שגיאה: ציון חייב להיות בין 0 ל-100',
    },
    {
      title: 'הודעה אישית + הרצה מלאה',
      goal: 'התוכנית המלאה עם טאץ׳ אישי',
      instructions: [
        'הוסיפו הודעת עידוד מותאמת: אם הממוצע בין 80 ל-89, הדפיסו `עוד קצת מאמץ ותגיעו למצוין!`. אם מתחת ל-55, הדפיסו `לא נורא — ממשיכים לתרגל ומשתפרים!`.',
        'הריצו את התוכנית המלאה עם קלטים שונים: ממוצע גבוה, נמוך, וקלט לא תקין.',
        'אתגר רשות: הוסיפו בעזרת `?:` שורה שמדפיסה `עובר` או `לא עובר` בקצרה.',
      ],
      checkpoint: 'שלוש הרצות שונות (מצוין / נכשל / קלט שגוי) מתנהגות בדיוק כמו שתכננתם — סיימתם! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== מחשבון הציונים ===");
        Console.Write("הקלידו ציון 1: ");
        int grade1 = int.Parse(Console.ReadLine());
        Console.Write("הקלידו ציון 2: ");
        int grade2 = int.Parse(Console.ReadLine());
        Console.Write("הקלידו ציון 3: ");
        int grade3 = int.Parse(Console.ReadLine());

        if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100)
        {
            Console.WriteLine("שגיאה: ציון חייב להיות בין 0 ל-100");
        }
        else
        {
            double average = Math.Round((grade1 + grade2 + grade3) / 3.0, 2);
            Console.WriteLine($"הממוצע שלך: {average}");

            if (average >= 90)
            {
                Console.WriteLine("הערכה: מצוין");
            }
            else if (average >= 80)
            {
                Console.WriteLine("הערכה: יפה מאוד");
                Console.WriteLine("עוד קצת מאמץ ותגיעו למצוין!");
            }
            else if (average >= 55)
            {
                Console.WriteLine("הערכה: עובר");
            }
            else
            {
                Console.WriteLine("הערכה: נכשל");
                Console.WriteLine("לא נורא — ממשיכים לתרגל ומשתפרים!");
            }
        }
    }
}`,
}
