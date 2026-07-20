import type { Exercise } from '../../types/exercise'

// ערך מול הפניה
export const valueReferenceExercises: Exercise[] = [
  {
    id: 0,
    title: 'העתקה של ערך',
    description: 'צרו משתנה a=5, העתיקו אותו ל-b, שנו את b ל-10, והדפיסו את a ואז את b. מה קרה ל-a?',
    difficulty: 'קל',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        // העתיקו ל-b, שנו את b ל-10, הדפיסו את שניהם
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = a;
        b = 10;
        Console.WriteLine(a);
        Console.WriteLine(b);
    }
}`,
    testCases: [{ input: '', expectedOutput: '5\n10', description: 'a לא השתנה!' }],
    hints: ['int הוא טיפוס ערך — ההשמה מעתיקה את הערך עצמו', 'b קיבל עותק של 5, לא קשר ל-a', 'שינוי של b לא נוגע ב-a בכלל'],
  },
  {
    id: 0,
    title: 'שני שמות לאותו מערך',
    description: 'צרו מערך first עם {1, 2, 3}, השימו אותו למשתנה second, שנו את second[0] ל-99, והדפיסו את first[0]. מופתעים?',
    difficulty: 'קל',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] first = { 1, 2, 3 };
        // השימו ל-second, שנו את second[0] ל-99, הדפיסו את first[0]
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] first = { 1, 2, 3 };
        int[] second = first;
        second[0] = 99;
        Console.WriteLine(first[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '99', description: 'first[0] השתנה — כי זה אותו מערך!' }],
    hints: ['מערך הוא טיפוס הפניה — ההשמה מעתיקה את ה"כתובת", לא את התוכן', 'first ו-second מצביעים לאותו מערך בזיכרון', 'שינוי דרך אחד נראה דרך השני'],
  },
  {
    id: 0,
    title: 'העתקת struct',
    description: 'צרו נקודה p1 עם X=3, העתיקו אותה ל-p2, שנו את p2.X ל-50, והדפיסו את p1.X ואז את p2.X',
    difficulty: 'בינוני',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point p1;
        p1.X = 3;
        p1.Y = 0;
        // העתיקו ל-p2, שנו את p2.X, הדפיסו את שני ה-X-ים
    }
}`,
    solution: `using System;

struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point p1;
        p1.X = 3;
        p1.Y = 0;
        Point p2 = p1;
        p2.X = 50;
        Console.WriteLine(p1.X);
        Console.WriteLine(p2.X);
    }
}`,
    testCases: [{ input: '', expectedOutput: '3\n50', description: 'p1 לא הושפע — struct הוא טיפוס ערך' }],
    hints: ['struct מתנהג כמו int: השמה מעתיקה את כל התוכן', 'p2 הוא עותק עצמאי לגמרי', 'השוו לתרגיל הקודם עם המערך — זה ההבדל המרכזי!'],
  },
  {
    id: 0,
    title: 'מתודה שלא משנה כלום',
    description: 'כתבו מתודה TryToChange שמקבלת int ומשימה בו 100. קראו לה עם משתנה שערכו 5 והדפיסו אותו אחרי הקריאה. מה קיבלתם?',
    difficulty: 'בינוני',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void TryToChange(int number)
    {
        number = 100;
    }

    static void Main()
    {
        int x = 5;
        TryToChange(x);
        // הדפיסו את x — האם הוא השתנה?
    }
}`,
    solution: `using System;

class Program
{
    static void TryToChange(int number)
    {
        number = 100;
    }

    static void Main()
    {
        int x = 5;
        TryToChange(x);
        Console.WriteLine(x);
    }
}`,
    testCases: [{ input: '', expectedOutput: '5', description: 'x נשאר 5 — המתודה קיבלה עותק' }],
    hints: ['פרמטרים עוברים by value — המתודה מקבלת עותק', 'number בתוך המתודה הוא משתנה נפרד מ-x', 'השינוי בתוך המתודה נעלם כשהיא מסתיימת'],
  },
  {
    id: 0,
    title: 'מתודה שכן משנה מערך',
    description: 'כתבו מתודה ZeroFirst שמקבלת מערך ומאפסת את האיבר הראשון שלו. קראו לה והדפיסו את האיבר הראשון אחרי הקריאה',
    difficulty: 'בינוני',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void ZeroFirst(int[] arr)
    {
        // אפסו את האיבר הראשון
    }

    static void Main()
    {
        int[] numbers = { 7, 8, 9 };
        ZeroFirst(numbers);
        Console.WriteLine(numbers[0]);
    }
}`,
    solution: `using System;

class Program
{
    static void ZeroFirst(int[] arr)
    {
        arr[0] = 0;
    }

    static void Main()
    {
        int[] numbers = { 7, 8, 9 };
        ZeroFirst(numbers);
        Console.WriteLine(numbers[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '0', description: 'המערך המקורי השתנה!' }],
    hints: ['המתודה מקבלת עותק של ההפניה — אבל זו הפניה לאותו מערך', 'שינוי איברים דרך ההפניה משפיע על המקור', 'השוו לתרגיל הקודם: int לא השתנה, מערך כן'],
  },
  {
    id: 0,
    title: 'בדיקת null',
    description: 'נתון משתנה string שערכו null. בדקו אם הוא null — אם כן הדפיסו "אין ערך", אחרת הדפיסו את אורכו',
    difficulty: 'קל',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string name = null;
        // בדקו null לפני שנוגעים!
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string name = null;
        if (name == null)
        {
            Console.WriteLine("אין ערך");
        }
        else
        {
            Console.WriteLine(name.Length);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אין ערך', description: 'זיהינו null בלי לקרוס' }],
    hints: ['null פירושו: ההפניה לא מצביעה לשום דבר', 'קריאה ל-name.Length כש-name הוא null מקריסה את התוכנית!', 'תמיד בודקים == null לפני שנוגעים בהפניה חשודה'],
  },
  {
    id: 0,
    title: 'העתקה אמיתית של מערך',
    description: 'העתיקו את המערך {1, 2, 3} למערך חדש ונפרד (עם לולאה), שנו את האיבר הראשון בעותק ל-99, והוכיחו שהמקור לא נפגע: הדפיסו את original[0] ואז copy[0]',
    difficulty: 'בינוני',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] original = { 1, 2, 3 };
        // צרו מערך חדש באותו גודל והעתיקו איבר-איבר
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] original = { 1, 2, 3 };
        int[] copy = new int[original.Length];
        for (int i = 0; i < original.Length; i++)
        {
            copy[i] = original[i];
        }
        copy[0] = 99;
        Console.WriteLine(original[0]);
        Console.WriteLine(copy[0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '1\n99', description: 'המקור שמור, העותק השתנה' }],
    hints: ['copy = original היה נותן שני שמות לאותו מערך!', 'העתקה אמיתית: מערך חדש + לולאה שמעתיקה איבר-איבר', 'עכשיו כל אחד חי בזיכרון משלו'],
  },
  {
    id: 0,
    title: 'ref: לשנות באמת',
    description: 'כתבו מתודה DoubleIt שמקבלת int עם המילה ref ומכפילה אותו. קראו לה עם משתנה שערכו 6 והדפיסו אחרי הקריאה — הפעם הוא כן ישתנה!',
    difficulty: 'קשה',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    // DoubleIt עם ref int

    static void Main()
    {
        int x = 6;
        // קראו: DoubleIt(ref x) והדפיסו
    }
}`,
    solution: `using System;

class Program
{
    static void DoubleIt(ref int number)
    {
        number = number * 2;
    }

    static void Main()
    {
        int x = 6;
        DoubleIt(ref x);
        Console.WriteLine(x);
    }
}`,
    testCases: [{ input: '', expectedOutput: '12', description: 'x השתנה באמת בזכות ref' }],
    hints: ['ref בחתימה: static void DoubleIt(ref int number)', 'ref גם בקריאה: DoubleIt(ref x)', 'עכשיו המתודה עובדת על x עצמו, לא על עותק'],
  },
  {
    id: 0,
    title: 'out: להחזיר שני ערכים',
    description: 'כתבו מתודה MinMax שמקבלת מערך ומחזירה דרך שני פרמטרי out גם את המינימום וגם את המקסימום. הדפיסו אותם עבור {4, 9, 2, 7}',
    difficulty: 'קשה',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    // MinMax עם out int min, out int max

    static void Main()
    {
        int[] numbers = { 4, 9, 2, 7 };
        // קראו ל-MinMax והדפיסו מינימום ואז מקסימום
    }
}`,
    solution: `using System;

class Program
{
    static void MinMax(int[] arr, out int min, out int max)
    {
        min = arr[0];
        max = arr[0];
        foreach (int n in arr)
        {
            if (n < min)
            {
                min = n;
            }
            if (n > max)
            {
                max = n;
            }
        }
    }

    static void Main()
    {
        int[] numbers = { 4, 9, 2, 7 };
        MinMax(numbers, out int min, out int max);
        Console.WriteLine(min);
        Console.WriteLine(max);
    }
}`,
    testCases: [{ input: '', expectedOutput: '2\n9', description: 'מינימום 2, מקסימום 9' }],
    hints: ['return מחזיר ערך אחד — out מאפשר "להחזיר" כמה', 'המתודה חייבת להשים ערך בכל פרמטר out', 'בקריאה: out int min יוצר את המשתנה במקום'],
  },
  {
    id: 0,
    title: 'TryParse: ה-out המפורסם',
    description: 'קלטו טקסט מהמשתמש ונסו להמיר אותו למספר עם int.TryParse. אם הצליח — הדפיסו את המספר כפול 2. אם לא — הדפיסו "זה לא מספר"',
    difficulty: 'קשה',
    topic: 'ערך מול הפניה',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string input = Console.ReadLine();
        // int.TryParse מחזירה bool ונותנת את המספר דרך out
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string input = Console.ReadLine();
        if (int.TryParse(input, out int number))
        {
            Console.WriteLine(number * 2);
        }
        else
        {
            Console.WriteLine("זה לא מספר");
        }
    }
}`,
    testCases: [
      { input: '21', expectedOutput: '42', description: 'קלט תקין: 21' },
      { input: 'abc', expectedOutput: 'זה לא מספר', description: 'קלט לא מספרי' },
    ],
    hints: ['int.TryParse(input, out int number) מחזירה true/false', 'בניגוד ל-Parse — היא לא קורסת על קלט גרוע!', 'המספר עצמו מגיע דרך פרמטר ה-out'],
  },
]
