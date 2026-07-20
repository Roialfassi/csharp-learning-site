import type { Project } from '../../types/project'

export const collectionsProject: Project = {
  topicId: 'collections',
  title: 'מנהל רשימת הקניות',
  subtitle: 'אפליקציית קניות אמיתית: הוספה, הסרה, חיפוש וחשבון כולל',
  icon: '🛒',
  description: [
    'תבנו מנהל רשימת קניות עם תפריט אינטראקטיבי: מוסיפים פריטים, מסירים, מציגים את הרשימה ומקבלים חשבון כולל לפי מחירון.',
    'הפריטים יישבו ב-`List` (הסדר חשוב וכפילויות מותרות), והמחירון ב-`Dictionary` (חיפוש מחיר לפי שם המוצר).',
  ],
  finalPreview: `=== רשימת הקניות ===
1=הוספה, 2=הסרה, 3=הצגה, 4=חשבון, 5=יציאה
1
מה להוסיף? חלב
נוסף: חלב
1
מה להוסיף? לחם
נוסף: לחם
3
--- הרשימה (2 פריטים) ---
* חלב
* לחם
4
סה"כ לתשלום: 18 ש"ח
5
להתראות!`,
  steps: [
    {
      title: 'תפריט בלולאה',
      goal: 'שלד האפליקציה: תפריט שרץ עד יציאה',
      instructions: [
        'צרו `List<string> cart = new List<string>();` (אל תשכחו `using System.Collections.Generic;`).',
        'בנו לולאת `while (true)` שמציגה את התפריט: `1=הוספה, 2=הסרה, 3=הצגה, 4=חשבון, 5=יציאה`, קולטת בחירה, וב-`5` יוצאת עם `break` ו"להתראות!".',
        'לכל שאר האפשרויות — בינתיים `switch` עם הודעת "בקרוב" בכל case.',
      ],
      code: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> cart = new List<string>();
        Console.WriteLine("=== רשימת הקניות ===");

        while (true)
        {
            Console.WriteLine("1=הוספה, 2=הסרה, 3=הצגה, 4=חשבון, 5=יציאה");
            string choice = Console.ReadLine();
            if (choice == "5")
            {
                Console.WriteLine("להתראות!");
                break;
            }
            switch (choice)
            {
                case "1":
                    Console.WriteLine("בקרוב");
                    break;
                // ... שאר המקרים
            }
        }
    }
}`,
      checkpoint: 'התפריט חוזר אחרי כל בחירה, ו-5 מסיים עם "להתראות!".',
    },
    {
      title: 'הוספה והצגה',
      goal: 'הרשימה מתמלאת ומוצגת יפה',
      instructions: [
        'ב-case של 1: שאלו `מה להוסיף?`, קלטו שם, הוסיפו עם `cart.Add(...)` והדפיסו אישור `נוסף: X`.',
        'ב-case של 3: הדפיסו כותרת `--- הרשימה (X פריטים) ---` עם `cart.Count`, ואז כל פריט בשורה עם `*` לפניו (foreach).',
        'אם הרשימה ריקה — הדפיסו `הרשימה ריקה` במקום.',
      ],
      code: `case "1":
    Console.Write("מה להוסיף? ");
    string item = Console.ReadLine();
    cart.Add(item);
    Console.WriteLine($"נוסף: {item}");
    break;
case "3":
    if (cart.Count == 0)
    {
        Console.WriteLine("הרשימה ריקה");
    }
    else
    {
        Console.WriteLine($"--- הרשימה ({cart.Count} פריטים) ---");
        foreach (string it in cart)
        {
            Console.WriteLine("* " + it);
        }
    }
    break;`,
      checkpoint: 'הוסיפו חלב ולחם, הציגו — שניהם מופיעים עם כוכבית וספירה נכונה.',
    },
    {
      title: 'הסרה בטוחה',
      goal: 'מסירים רק מה שקיים',
      instructions: [
        'ב-case של 2: שאלו `מה להסיר?`, קלטו שם.',
        'לפני ההסרה בדקו עם `cart.Contains(...)`: אם קיים — `cart.Remove(...)` והודעת אישור; אם לא — `הפריט לא נמצא ברשימה`.',
      ],
      code: `case "2":
    Console.Write("מה להסיר? ");
    string toRemove = Console.ReadLine();
    if (cart.Contains(toRemove))
    {
        cart.Remove(toRemove);
        Console.WriteLine($"הוסר: {toRemove}");
    }
    else
    {
        Console.WriteLine("הפריט לא נמצא ברשימה");
    }
    break;`,
      checkpoint: 'הסרת פריט קיים עובדת; הסרת פריט שלא קיים מדפיסה הודעה בלי לקרוס.',
    },
    {
      title: 'מחירון וחשבון',
      goal: 'Dictionary פוגש List — חשבון כולל',
      instructions: [
        'לפני הלולאה, צרו מחירון: `Dictionary<string, int> prices` עם כמה מוצרים: חלב-8, לחם-10, ביצים-15, שוקולד-7.',
        'ב-case של 4: עברו על העגלה, ולכל פריט — אם הוא במחירון (`ContainsKey`) הוסיפו את מחירו לסכום; אם לא, הדפיסו `אין מחיר עבור X` ואל תוסיפו.',
        'בסוף הדפיסו `סה"כ לתשלום: X ש"ח`.',
      ],
      code: `Dictionary<string, int> prices = new Dictionary<string, int>
{
    { "חלב", 8 },
    { "לחם", 10 },
    { "ביצים", 15 },
    { "שוקולד", 7 }
};

// ב-case "4":
int total = 0;
foreach (string it in cart)
{
    if (prices.ContainsKey(it))
    {
        total += prices[it];
    }
    else
    {
        Console.WriteLine($"אין מחיר עבור {it}");
    }
}
Console.WriteLine($"סה\\"כ לתשלום: {total} ש\\"ח");`,
      checkpoint: 'עגלה עם חלב ולחם נותנת 18 ש"ח; פריט בלי מחיר מקבל הודעה.',
      checkpointOutput: 'סה"כ לתשלום: 18 ש"ח',
    },
    {
      title: 'שדרוגים אחרונים',
      goal: 'האפליקציה המלאה, מלוטשת',
      instructions: [
        'טפלו בבחירה לא חוקית (default ב-switch): `בחירה לא מוכרת`.',
        'אתגר 1: מנעו כפילויות — אם הפריט כבר בעגלה, שאלו אם להוסיף שוב בכל זאת.',
        'אתגר 2: בהצגת הרשימה, הציגו ליד כל פריט את מחירו אם קיים: `* חלב (8 ש"ח)`.',
        'הריצו תרחיש מלא: הוספה ➝ הצגה ➝ הסרה ➝ חשבון ➝ יציאה.',
      ],
      checkpoint: 'כל חמש פעולות התפריט עובדות חלק ברצף אחד — האפליקציה שלכם מוכנה! 🎉',
    },
  ],
  fullSolution: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> cart = new List<string>();
        Dictionary<string, int> prices = new Dictionary<string, int>
        {
            { "חלב", 8 },
            { "לחם", 10 },
            { "ביצים", 15 },
            { "שוקולד", 7 }
        };

        Console.WriteLine("=== רשימת הקניות ===");

        while (true)
        {
            Console.WriteLine("1=הוספה, 2=הסרה, 3=הצגה, 4=חשבון, 5=יציאה");
            string choice = Console.ReadLine();
            if (choice == "5")
            {
                Console.WriteLine("להתראות!");
                break;
            }

            switch (choice)
            {
                case "1":
                    Console.Write("מה להוסיף? ");
                    string item = Console.ReadLine();
                    cart.Add(item);
                    Console.WriteLine($"נוסף: {item}");
                    break;

                case "2":
                    Console.Write("מה להסיר? ");
                    string toRemove = Console.ReadLine();
                    if (cart.Contains(toRemove))
                    {
                        cart.Remove(toRemove);
                        Console.WriteLine($"הוסר: {toRemove}");
                    }
                    else
                    {
                        Console.WriteLine("הפריט לא נמצא ברשימה");
                    }
                    break;

                case "3":
                    if (cart.Count == 0)
                    {
                        Console.WriteLine("הרשימה ריקה");
                    }
                    else
                    {
                        Console.WriteLine($"--- הרשימה ({cart.Count} פריטים) ---");
                        foreach (string it in cart)
                        {
                            if (prices.ContainsKey(it))
                            {
                                Console.WriteLine($"* {it} ({prices[it]} ש\\"ח)");
                            }
                            else
                            {
                                Console.WriteLine("* " + it);
                            }
                        }
                    }
                    break;

                case "4":
                    int total = 0;
                    foreach (string it in cart)
                    {
                        if (prices.ContainsKey(it))
                        {
                            total += prices[it];
                        }
                        else
                        {
                            Console.WriteLine($"אין מחיר עבור {it}");
                        }
                    }
                    Console.WriteLine($"סה\\"כ לתשלום: {total} ש\\"ח");
                    break;

                default:
                    Console.WriteLine("בחירה לא מוכרת");
                    break;
            }
        }
    }
}`,
}
