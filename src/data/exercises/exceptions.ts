import type { Exercise } from '../../types/exercise'

// טיפול בשגיאות
export const exceptionsExercises: Exercise[] = [
  {
    id: 0,
    title: 'ה-try/catch הראשון',
    description: 'הקוד מנסה לחלק ב-0 וקורס. עטפו אותו ב-try/catch כך שבמקום קריסה יודפס "שגיאה בחישוב"',
    difficulty: 'קל',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 0;
        // עטפו ב-try/catch
        Console.WriteLine(a / b);
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 0;
        try
        {
            Console.WriteLine(a / b);
        }
        catch (Exception)
        {
            Console.WriteLine("שגיאה בחישוב");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'שגיאה בחישוב', description: 'התוכנית שרדה!' }],
    hints: ['try { קוד מסוכן } catch (Exception) { טיפול }', 'הקוד שעלול לקרוס נכנס לתוך ה-try', 'ה-catch רץ רק אם באמת קרתה שגיאה'],
  },
  {
    id: 0,
    title: 'תפיסת המרה כושלת',
    description: 'קלטו טקסט מהמשתמש ונסו להמיר ל-int עם int.Parse בתוך try. אם ההמרה נכשלה הדפיסו "קלט לא תקין", אחרת הדפיסו את המספר',
    difficulty: 'קל',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string input = Console.ReadLine();
        // try/catch סביב ההמרה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string input = Console.ReadLine();
        try
        {
            int number = int.Parse(input);
            Console.WriteLine(number);
        }
        catch (Exception)
        {
            Console.WriteLine("קלט לא תקין");
        }
    }
}`,
    testCases: [
      { input: '42', expectedOutput: '42', description: 'קלט תקין' },
      { input: 'abc', expectedOutput: 'קלט לא תקין', description: 'קלט שגוי — בלי קריסה' },
    ],
    hints: ['int.Parse זורקת FormatException על קלט לא מספרי', 'שימו גם את ההמרה וגם את ההדפסה בתוך ה-try', 'אם ההמרה נכשלה — הקוד קופץ מיד ל-catch'],
  },
  {
    id: 0,
    title: 'תפיסת חריגה ספציפית',
    description: 'תפסו במפורש את DivideByZeroException בחלוקה ב-0 והדפיסו "אי אפשר לחלק באפס"',
    difficulty: 'בינוני',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 0;
        try
        {
            Console.WriteLine(a / b);
        }
        // תפסו את DivideByZeroException
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int a = 5;
        int b = 0;
        try
        {
            Console.WriteLine(a / b);
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("אי אפשר לחלק באפס");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אי אפשר לחלק באפס', description: 'תפיסה ממוקדת' }],
    hints: ['catch (DivideByZeroException)', 'תפיסה ספציפית עדיפה — היא מטפלת בדיוק במה שציפיתם', 'תפיסת Exception כללית עלולה להסתיר באגים אחרים'],
  },
  {
    id: 0,
    title: 'כמה catch בזה אחר זה',
    description: 'נתון מערך בגודל 3. הקוד ניגש לאינדקס 10. תפסו IndexOutOfRangeException עם הודעה "אינדקס מחוץ לתחום" ואחריו catch כללי עם "שגיאה אחרת"',
    difficulty: 'בינוני',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };
        try
        {
            Console.WriteLine(numbers[10]);
        }
        // שני catch: ספציפי ואז כללי
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3 };
        try
        {
            Console.WriteLine(numbers[10]);
        }
        catch (IndexOutOfRangeException)
        {
            Console.WriteLine("אינדקס מחוץ לתחום");
        }
        catch (Exception)
        {
            Console.WriteLine("שגיאה אחרת");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'אינדקס מחוץ לתחום', description: 'ה-catch הספציפי תפס ראשון' }],
    hints: ['אפשר לשרשר כמה catch אחרי try אחד', 'הסדר קריטי: מהספציפי לכללי!', 'רק ה-catch הראשון שמתאים ירוץ'],
  },
  {
    id: 0,
    title: 'finally',
    description: 'הריצו חלוקה ב-0 בתוך try, תפסו את השגיאה והדפיסו "שגיאה", ואז בבלוק finally הדפיסו "סיום התוכנית"',
    difficulty: 'בינוני',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = 5 / int.Parse("0");
        }
        catch (Exception)
        {
            Console.WriteLine("שגיאה");
        }
        // הוסיפו finally
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = 5 / int.Parse("0");
        }
        catch (Exception)
        {
            Console.WriteLine("שגיאה");
        }
        finally
        {
            Console.WriteLine("סיום התוכנית");
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'שגיאה\nסיום התוכנית', description: 'finally תמיד רץ' }],
    hints: ['finally בא אחרי כל ה-catch-ים', 'הוא רץ תמיד — גם אם הייתה שגיאה וגם אם לא', 'משמש לניקוי: סגירת קבצים, חיבורים וכו'],
  },
  {
    id: 0,
    title: 'קריאת פרטי השגיאה',
    description: 'תפסו חריגה מהמרה כושלת של "abc" והדפיסו את ההודעה שלה עם ex.Message (הדפיסו את המילה "שגיאה:" ואז את ההודעה)',
    difficulty: 'בינוני',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = int.Parse("abc");
        }
        // תפסו עם משתנה ex והדפיסו את ההודעה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = int.Parse("abc");
        }
        catch (Exception ex)
        {
            Console.WriteLine("שגיאה: " + ex.Message);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'שגיאה: The input string \'abc\' was not in a correct format.', description: 'ההודעה מהמערכת' }],
    hints: ['catch (Exception ex) — ex הוא אובייקט השגיאה', 'ex.Message מכיל את תיאור השגיאה', 'יש גם ex.StackTrace שמראה איפה בדיוק זה קרה'],
  },
  {
    id: 0,
    title: 'זריקת שגיאה משלכם',
    description: 'כתבו מתודה CheckAge שמקבלת גיל וזורקת Exception עם ההודעה "גיל לא חוקי" אם הוא שלילי. קראו לה עם 5- בתוך try ותפסו',
    difficulty: 'קשה',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void CheckAge(int age)
    {
        // זרקו שגיאה אם הגיל שלילי
    }

    static void Main()
    {
        try
        {
            CheckAge(-5);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`,
    solution: `using System;

class Program
{
    static void CheckAge(int age)
    {
        if (age < 0)
        {
            throw new Exception("גיל לא חוקי");
        }
    }

    static void Main()
    {
        try
        {
            CheckAge(-5);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'גיל לא חוקי', description: 'השגיאה שזרקנו נתפסה' }],
    hints: ['throw new Exception("הודעה")', 'המתודה "מודיעה" על בעיה במקום להמשיך בשקט', 'מי שקורא לה אחראי לתפוס'],
  },
  {
    id: 0,
    title: 'קלט חוזר עד שהוא תקין',
    description: 'קלטו מספרים מהמשתמש בלולאה עד שמתקבל קלט תקין. על קלט שגוי הדפיסו "נסו שוב", ועל קלט תקין הדפיסו את המספר וצאו',
    difficulty: 'קשה',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // לולאה עם try/catch עד קלט תקין
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        while (true)
        {
            try
            {
                int number = int.Parse(Console.ReadLine());
                Console.WriteLine(number);
                break;
            }
            catch (Exception)
            {
                Console.WriteLine("נסו שוב");
            }
        }
    }
}`,
    testCases: [
      { input: 'abc\n7', expectedOutput: 'נסו שוב\n7', description: 'קלט שגוי ואז תקין' },
      { input: '3', expectedOutput: '3', description: 'קלט תקין מיד' },
    ],
    hints: ['while (true) עם break אחרי הצלחה', 'ה-break נמצא בתוך ה-try, אחרי ההמרה המוצלחת', 'אם ההמרה נכשלה — מגיעים ל-catch ולא ל-break'],
  },
  {
    id: 0,
    title: 'חריגה מותאמת אישית',
    description: 'צרו מחלקת חריגה משלכם בשם NegativeNumberException שיורשת מ-Exception. זרקו אותה עם ההודעה "מספר שלילי!" ותפסו אותה',
    difficulty: 'קשה',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

// צרו את NegativeNumberException שיורשת מ-Exception

class Program
{
    static void Main()
    {
        try
        {
            throw new NegativeNumberException("מספר שלילי!");
        }
        catch (NegativeNumberException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`,
    solution: `using System;

class NegativeNumberException : Exception
{
    public NegativeNumberException(string message) : base(message)
    {
    }
}

class Program
{
    static void Main()
    {
        try
        {
            throw new NegativeNumberException("מספר שלילי!");
        }
        catch (NegativeNumberException ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: 'מספר שלילי!', description: 'חריגה מותאמת אישית' }],
    hints: ['class NegativeNumberException : Exception — ירושה רגילה!', 'ה-constructor מעביר את ההודעה ל-base', 'עכשיו אפשר לתפוס בדיוק את סוג השגיאה הזה'],
  },
  {
    id: 0,
    title: 'מחשבון חסין',
    description: 'קלטו שני מספרים וחלקו אותם. טפלו בשתי בעיות: קלט לא מספרי ("קלט לא תקין") וחלוקה באפס ("אי אפשר לחלק באפס"). בהצלחה הדפיסו את התוצאה',
    difficulty: 'קשה',
    topic: 'טיפול בשגיאות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        // קלטו שניים, חלקו, וטפלו בשני סוגי שגיאות
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine(a / b);
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("אי אפשר לחלק באפס");
        }
        catch (FormatException)
        {
            Console.WriteLine("קלט לא תקין");
        }
    }
}`,
    testCases: [
      { input: '10\n2', expectedOutput: '5', description: 'חלוקה תקינה' },
      { input: '10\n0', expectedOutput: 'אי אפשר לחלק באפס', description: 'חלוקה באפס' },
      { input: 'abc\n2', expectedOutput: 'קלט לא תקין', description: 'קלט לא מספרי' },
    ],
    hints: ['שני catch נפרדים: DivideByZeroException ו-FormatException', 'כל סוג שגיאה מקבל הודעה מתאימה', 'זו תוכנית שמשתמש אמיתי לא יצליח להפיל'],
  },
]
