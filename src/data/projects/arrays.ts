import type { Project } from '../../types/project'

export const arraysProject: Project = {
  topicId: 'arrays',
  title: 'יומן הציונים של הכיתה',
  subtitle: 'תוכנית שקולטת ציונים של כיתה ומפיקה דו"ח סטטיסטי מלא',
  icon: '📊',
  description: [
    'תבנו יומן ציונים כמו של מורה אמיתי: התוכנית קולטת את הציונים של כל הכיתה לתוך מערך, ואז מפיקה דו"ח — ממוצע, הציון הגבוה והנמוך, וכמה תלמידים עברו.',
    'כאן תפעילו את כל תבניות המערכים מהשיעור: סכימה, מקסימום, מינימום וספירה לפי תנאי.',
  ],
  finalPreview: `=== יומן הציונים ===
כמה תלמידים בכיתה? 4
ציון תלמיד 1: 85
ציון תלמיד 2: 62
ציון תלמיד 3: 94
ציון תלמיד 4: 51
--- דו"ח הכיתה ---
ממוצע: 73
הציון הגבוה: 94
הציון הנמוך: 51
עברו: 3 מתוך 4`,
  steps: [
    {
      title: 'מערך בגודל דינמי',
      goal: 'מערך שנוצר לפי מספר התלמידים',
      instructions: [
        'שאלו `כמה תלמידים בכיתה?` וקלטו מספר.',
        'צרו מערך בגודל הזה: `int[] grades = new int[count];`.',
        'זה ההבדל מ-`{ 1, 2, 3 }` — כאן הגודל נקבע בזמן ריצה, לפי הקלט!',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== יומן הציונים ===");
        Console.Write("כמה תלמידים בכיתה? ");
        int count = int.Parse(Console.ReadLine());
        int[] grades = new int[count];
        Console.WriteLine($"נוצר מערך עם {grades.Length} תאים");
    }
}`,
      checkpoint: 'הקלידו 4 — התוכנית מדפיסה שנוצר מערך עם 4 תאים.',
    },
    {
      title: 'מילוי המערך בלולאה',
      goal: 'קליטת ציון לכל תלמיד לתוך המערך',
      instructions: [
        'כתבו לולאת `for` שרצה על כל תא במערך.',
        'בכל סיבוב בקשו `ציון תלמיד X:` (שימו לב: התלמיד הראשון הוא i+1, כי בני אדם סופרים מ-1!) ושמרו את הקלט ב-`grades[i]`.',
        'מחקו את שורת הבדיקה מהשלב הקודם.',
      ],
      code: `for (int i = 0; i < grades.Length; i++)
{
    Console.Write($"ציון תלמיד {i + 1}: ");
    grades[i] = int.Parse(Console.ReadLine());
}`,
      checkpoint: 'הריצו עם 3 תלמידים — התוכנית מבקשת בדיוק 3 ציונים, עם מספור נכון (1, 2, 3).',
    },
    {
      title: 'ממוצע הכיתה',
      goal: 'תבנית הסכימה בפעולה',
      instructions: [
        'הדפיסו כותרת `--- דו"ח הכיתה ---`.',
        'סכמו את כל הציונים עם `foreach` וחשבו ממוצע.',
        'זוכרים את המלכודת? המירו ל-`double` לפני החלוקה, ועגלו עם `Math.Round(avg, 1)`.',
      ],
      code: `Console.WriteLine("--- דו\\"ח הכיתה ---");
int sum = 0;
foreach (int g in grades)
{
    sum += g;
}
double average = Math.Round((double)sum / grades.Length, 1);
Console.WriteLine($"ממוצע: {average}");`,
      checkpoint: 'עבור הציונים 85, 62, 94 ו-51 הממוצע אמור להיות 73.',
      checkpointOutput: 'ממוצע: 73',
    },
    {
      title: 'הגבוה והנמוך',
      goal: 'תבניות המקסימום והמינימום',
      instructions: [
        'מצאו את הציון הגבוה ביותר: התחילו מ-`grades[0]` ועדכנו כשמוצאים גדול יותר.',
        'באותה לולאה בדיוק (או בנפרד) מצאו גם את הנמוך ביותר — אותה תבנית עם `<` במקום `>`.',
        'הדפיסו את שניהם.',
      ],
      code: `int max = grades[0];
int min = grades[0];
foreach (int g in grades)
{
    if (g > max)
    {
        max = g;
    }
    if (g < min)
    {
        min = g;
    }
}
Console.WriteLine($"הציון הגבוה: {max}");
Console.WriteLine($"הציון הנמוך: {min}");`,
      checkpoint: 'עם הציונים מהדוגמה: הגבוה 94 והנמוך 51.',
    },
    {
      title: 'כמה עברו + הרצה מלאה',
      goal: 'הדו"ח המלא',
      instructions: [
        'ספרו כמה ציונים הם 55 ומעלה (תבנית הספירה לפי תנאי) והדפיסו `עברו: X מתוך Y`.',
        'הריצו את התוכנית המלאה עם כיתה של 5 תלמידים ובדקו את כל המספרים ביד.',
        'אתגר רשות: הדפיסו גם כמה תלמידים קיבלו מעל הממוצע.',
      ],
      code: `int passed = 0;
foreach (int g in grades)
{
    if (g >= 55)
    {
        passed++;
    }
}
Console.WriteLine($"עברו: {passed} מתוך {grades.Length}");`,
      checkpoint: 'הדו"ח המלא מודפס עם כל הנתונים נכונים — היומן שלכם מוכן! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("=== יומן הציונים ===");
        Console.Write("כמה תלמידים בכיתה? ");
        int count = int.Parse(Console.ReadLine());
        int[] grades = new int[count];

        for (int i = 0; i < grades.Length; i++)
        {
            Console.Write($"ציון תלמיד {i + 1}: ");
            grades[i] = int.Parse(Console.ReadLine());
        }

        Console.WriteLine("--- דו\\"ח הכיתה ---");

        int sum = 0;
        int max = grades[0];
        int min = grades[0];
        int passed = 0;
        foreach (int g in grades)
        {
            sum += g;
            if (g > max)
            {
                max = g;
            }
            if (g < min)
            {
                min = g;
            }
            if (g >= 55)
            {
                passed++;
            }
        }

        double average = Math.Round((double)sum / grades.Length, 1);
        Console.WriteLine($"ממוצע: {average}");
        Console.WriteLine($"הציון הגבוה: {max}");
        Console.WriteLine($"הציון הנמוך: {min}");
        Console.WriteLine($"עברו: {passed} מתוך {grades.Length}");
    }
}`,
}
