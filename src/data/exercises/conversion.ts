import type { Exercise } from '../../types/exercise'

// המרות ואופרטורים
export const conversionExercises: Exercise[] = [
  {
    id: 0,
    title: 'ממחרוזת למספר',
    description: 'נתונה המחרוזת "42". המירו אותה למספר שלם בעזרת int.Parse, הוסיפו לה 8 והדפיסו את התוצאה',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "42";
        // המירו למספר, הוסיפו 8 והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "42";
        int number = int.Parse(text);
        Console.WriteLine(number + 8);
    }
}`,
    testCases: [{ input: '', expectedOutput: '50', description: '42 + 8 = 50' }],
    hints: ['int.Parse הופך מחרוזת למספר שלם', 'בלי המרה, "42" + 8 היה נותן "428"!', 'אפשר לחבר ישירות בתוך ה-WriteLine'],
  },
  {
    id: 0,
    title: 'קלט מספרי מהמשתמש',
    description: 'קלטו מספר מהמשתמש, הכפילו אותו ב-2 והדפיסו את התוצאה. זכרו: ReadLine מחזירה מחרוזת!',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // קלטו מספר, המירו, הכפילו ב-2 והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int number = int.Parse(Console.ReadLine());
        Console.WriteLine(number * 2);
    }
}`,
    testCases: [
      { input: '6', expectedOutput: '12', description: 'קלט: 6' },
      { input: '25', expectedOutput: '50', description: 'קלט: 25' },
    ],
    hints: ['Console.ReadLine() מחזירה string גם אם המשתמש הקליד מספר', 'עטפו את הקריאה ב-int.Parse', 'אפשר לשלב: int.Parse(Console.ReadLine())'],
  },
  {
    id: 0,
    title: 'חלוקה עשרונית נכונה',
    description: 'נתונים 7 ו-2 כמספרים שלמים. הדפיסו את תוצאת החלוקה המדויקת שלהם: 3.5 (ולא 3!)',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 7;
        int b = 2;
        // הדפיסו 3.5 — תצטרכו המרה!
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 7;
        int b = 2;
        double result = (double)a / b;
        Console.WriteLine(result);
    }
}`,
    testCases: [{ input: '', expectedOutput: '3.5', description: '7 חלקי 2 בדיוק' }],
    hints: ['חלוקת int ב-int נותנת int — 7/2 הוא 3', 'המירו את אחד המספרים ל-double עם (double)', 'מספיק שצד אחד של החלוקה יהיה עשרוני'],
  },
  {
    id: 0,
    title: 'חיתוך עשרוני',
    description: 'נתון המחיר 19.99. המירו אותו למספר שלם בעזרת casting והדפיסו אותו (19)',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        double price = 19.99;
        // המירו ל-int והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        double price = 19.99;
        int wholePrice = (int)price;
        Console.WriteLine(wholePrice);
    }
}`,
    testCases: [{ input: '', expectedOutput: '19', description: 'המרה ל-int חותכת, לא מעגלת' }],
    hints: ['כותבים (int) לפני המשתנה', 'ההמרה חותכת את החלק העשרוני — לא מעגלת!', '19.99 הופך ל-19, לא ל-20'],
  },
  {
    id: 0,
    title: 'שארית חלוקה',
    description: 'הדפיסו את השארית של 17 חלקי 5 בשורה הראשונה, ואת השארית של 20 חלקי 4 בשורה השנייה',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // השתמשו באופרטור % להדפסת שתי השאריות
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(17 % 5);
        Console.WriteLine(20 % 4);
    }
}`,
    testCases: [{ input: '', expectedOutput: '2\n0', description: '17%5=2 ו-20%4=0' }],
    hints: ['האופרטור % מחזיר את השארית מחלוקה', '17 = 3*5 + 2, לכן השארית היא 2', 'כשמספר מתחלק בדיוק, השארית היא 0'],
  },
  {
    id: 0,
    title: 'הפרדת ספרות',
    description: 'נתון מספר דו-ספרתי: 47. הדפיסו את ספרת העשרות (4) בשורה הראשונה ואת ספרת האחדות (7) בשורה השנייה, בעזרת / ו-%',
    difficulty: 'בינוני',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int number = 47;
        // הדפיסו את ספרת העשרות ואז את ספרת האחדות
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int number = 47;
        Console.WriteLine(number / 10);
        Console.WriteLine(number % 10);
    }
}`,
    testCases: [{ input: '', expectedOutput: '4\n7', description: 'עשרות ואז אחדות' }],
    hints: ['חלוקת שלמים ב-10 "זורקת" את ספרת האחדות', 'שארית מחלוקה ב-10 היא בדיוק ספרת האחדות', '47 / 10 = 4 (חלוקת שלמים!), 47 % 10 = 7'],
  },
  {
    id: 0,
    title: 'הגדלה והקטנה',
    description: 'נתון משתנה עם הערך 10. הגדילו אותו ב-1 עם ++, הדפיסו, הקטינו ב-1 עם --, והדפיסו שוב',
    difficulty: 'קל',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int counter = 10;
        // הגדילו ב-1 והדפיסו
        // הקטינו ב-1 והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int counter = 10;
        counter++;
        Console.WriteLine(counter);
        counter--;
        Console.WriteLine(counter);
    }
}`,
    testCases: [{ input: '', expectedOutput: '11\n10', description: '11 אחרי ++, ואז 10 אחרי --' }],
    hints: ['counter++ מוסיף 1 למשתנה', 'counter-- מוריד 1 מהמשתנה', 'הדפיסו אחרי כל שינוי'],
  },
  {
    id: 0,
    title: 'אופרטורים מקוצרים',
    description: 'נתון score עם הערך 100. הוסיפו לו 50 עם +=, הכפילו את התוצאה ב-2 עם *=, והדפיסו',
    difficulty: 'בינוני',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int score = 100;
        // הוסיפו 50 בעזרת +=
        // הכפילו ב-2 בעזרת *=
        Console.WriteLine(score);
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int score = 100;
        score += 50;
        score *= 2;
        Console.WriteLine(score);
    }
}`,
    testCases: [{ input: '', expectedOutput: '300', description: '(100+50)*2 = 300' }],
    hints: ['score += 50 זה קיצור של score = score + 50', 'score *= 2 זה קיצור של score = score * 2', 'הפעולות מתבצעות לפי הסדר: קודם החיבור ואז הכפל'],
  },
  {
    id: 0,
    title: 'מתו לקוד: char למספר',
    description: "לכל תו יש ערך מספרי. המירו את התו 'A' למספר והדפיסו אותו (65), ואז המירו את 66 בחזרה לתו והדפיסו (B)",
    difficulty: 'בינוני',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        char letter = 'A';
        // המירו את letter למספר והדפיסו
        // המירו את המספר 66 לתו והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        char letter = 'A';
        int code = (int)letter;
        Console.WriteLine(code);
        char next = (char)66;
        Console.WriteLine(next);
    }
}`,
    testCases: [{ input: '', expectedOutput: '65\nB', description: "'A' הוא 65, ו-66 הוא 'B'" }],
    hints: ['(int) לפני char נותן את הקוד המספרי של התו', "הקוד של 'A' הוא 65, של 'B' הוא 66 וכן הלאה", '(char) לפני מספר הופך אותו חזרה לתו'],
  },
  {
    id: 0,
    title: 'ממיר שניות',
    description: 'קלטו מספר שניות מהמשתמש והדפיסו כמה דקות שלמות יש בהן ואז כמה שניות נשארות. למשל עבור 130: שתי שורות — 2 ואז 10',
    difficulty: 'בינוני',
    topic: 'המרות ואופרטורים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int totalSeconds = int.Parse(Console.ReadLine());
        // הדפיסו דקות ואז שניות שנותרו
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int totalSeconds = int.Parse(Console.ReadLine());
        int minutes = totalSeconds / 60;
        int seconds = totalSeconds % 60;
        Console.WriteLine(minutes);
        Console.WriteLine(seconds);
    }
}`,
    testCases: [
      { input: '130', expectedOutput: '2\n10', description: '130 שניות = 2 דקות ו-10 שניות' },
      { input: '59', expectedOutput: '0\n59', description: '59 שניות = 0 דקות ו-59 שניות' },
    ],
    hints: ['חלוקת שלמים ב-60 נותנת דקות שלמות', 'האופרטור % נותן את מה שנשאר', 'זה בדיוק כמו תרגיל הפרדת הספרות — רק עם 60 במקום 10'],
  },
]
