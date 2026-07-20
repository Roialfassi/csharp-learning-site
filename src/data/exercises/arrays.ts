import type { Exercise } from '../../types/exercise'

// מערכים
export const arraysExercises: Exercise[] = [
  {
    id: 19,
    title: 'איבר ממערך',
    description: 'קבל את האלמנט השני (אינדקס 1) ממערך [5, 15, 25]',
    difficulty: 'קל',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        // קבל את האלמנט השני
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {5, 15, 25};
        Console.WriteLine(arr[1]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '15', description: 'הדפס את האלמנט השני' }],
    hints: ['השתמשו בסוגריים מרובעים עם אינדקס', 'האלמנט השני הוא בפינדקס 1', 'הדפיסו arr[1]'],
  },
  {
    id: 20,
    title: 'אורך המערך',
    description: 'הדפס את גודל המערך [10, 20, 30, 40]',
    difficulty: 'קל',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40};
        // הדפס את אורך המערך
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40};
        Console.WriteLine(arr.Length);
    }
}`,
    testCases: [{ input: '', expectedOutput: '4', description: 'המערך בעל 4 אלמנטים' }],
    hints: ['השתמשו ב-.Length כדי לקבל את אורך המערך', 'זה מחזיר את מספר האלמנטים', 'הדפיסו את הערך'],
  },
  {
    id: 21,
    title: 'סכום מערך',
    description: 'חשב את סכום כל האלמנטים במערך [1, 2, 3, 4, 5]',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {1, 2, 3, 4, 5};
        // חשב את הסכום
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        foreach (int num in arr)
        {
            sum += num;
        }
        Console.WriteLine(sum);
    }
}`,
    testCases: [{ input: '', expectedOutput: '15', description: 'סכום 1+2+3+4+5=15' }],
    hints: ['השתמשו בלולאה foreach כדי לעבור על כל אלמנט', 'הוסיפו כל אלמנט לסכום', 'הדפיסו את הסכום הסופי'],
  },
  {
    id: 22,
    title: 'אלמנט אחרון',
    description: 'הדפס את האלמנט האחרון במערך [10, 20, 30, 40, 50]',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40, 50};
        // הדפס את האלמנט האחרון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] arr = {10, 20, 30, 40, 50};
        Console.WriteLine(arr[arr.Length - 1]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '50', description: 'האלמנט האחרון הוא 50' }],
    hints: ['האלמנט האחרון נמצא בפינדקס arr.Length - 1', 'השתמשו בנוסחה זו כדי למצוא אלמנט אחרון', 'הדפיסו את התוצאה'],
  },
  {
    id: 0,
    title: 'המספר הגדול במערך',
    description: 'נתון מערך מספרים. מצאו והדפיסו את המספר הגדול ביותר בו',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 12, 45, 7, 89, 23 };
        // מצאו את המקסימום בלולאה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 12, 45, 7, 89, 23 };
        int max = numbers[0];
        foreach (int n in numbers)
        {
            if (n > max)
            {
                max = n;
            }
        }
        Console.WriteLine(max);
    }
}`,
    testCases: [{ input: '', expectedOutput: '89', description: 'המקסימום הוא 89' }],
    hints: ['התחילו מ-max ששווה לאיבר הראשון', 'עברו על המערך והשוו כל איבר ל-max', 'מצאתם גדול יותר? עדכנו את max'],
  },
  {
    id: 0,
    title: 'ממוצע המערך',
    description: 'חשבו והדפיסו את הממוצע של איברי המערך. זהירות מחלוקת שלמים!',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] grades = { 80, 95, 70, 85 };
        // חשבו סכום ואז ממוצע עשרוני
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] grades = { 80, 95, 70, 85 };
        int sum = 0;
        foreach (int g in grades)
        {
            sum += g;
        }
        double average = (double)sum / grades.Length;
        Console.WriteLine(average);
    }
}`,
    testCases: [{ input: '', expectedOutput: '82.5', description: 'ממוצע של 80,95,70,85' }],
    hints: ['קודם סכמו את כל האיברים בלולאה', 'חלקו את הסכום ב-grades.Length', 'המירו ל-double לפני החלוקה כדי לא לאבד את השבר'],
  },
  {
    id: 0,
    title: 'ספירת זוגיים',
    description: 'ספרו כמה מספרים זוגיים יש במערך והדפיסו את התוצאה',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 8, 12, 5, 6, 9 };
        // ספרו את הזוגיים
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 3, 8, 12, 5, 6, 9 };
        int count = 0;
        foreach (int n in numbers)
        {
            if (n % 2 == 0)
            {
                count++;
            }
        }
        Console.WriteLine(count);
    }
}`,
    testCases: [{ input: '', expectedOutput: '3', description: '8, 12 ו-6 זוגיים' }],
    hints: ['מספר זוגי: n % 2 == 0', 'מונה שמתחיל מ-0 וגדל בכל התאמה', 'הדפיסו את המונה אחרי הלולאה'],
  },
  {
    id: 0,
    title: 'הדפסה בסדר הפוך',
    description: 'הדפיסו את איברי המערך מהאחרון לראשון, כל איבר בשורה משלו',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        // הדפיסו מהסוף להתחלה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        for (int i = numbers.Length - 1; i >= 0; i--)
        {
            Console.WriteLine(numbers[i]);
        }
    }
}`,
    testCases: [{ input: '', expectedOutput: '5\n4\n3\n2\n1', description: 'מ-5 עד 1' }],
    hints: ['foreach תמיד הולכת קדימה — כאן צריך for', 'התחילו מהאינדקס האחרון: Length - 1', 'רדו עם i-- עד 0 (כולל!)'],
  },
  {
    id: 0,
    title: 'מערך דו-מימדי: גישה',
    description: 'נתונה טבלת מספרים 2x3. הדפיסו את האיבר בשורה 0 עמודה 2, ואז את האיבר בשורה 1 עמודה 0',
    difficulty: 'בינוני',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[,] table = { { 10, 20, 30 }, { 40, 50, 60 } };
        // הדפיסו את שני האיברים המבוקשים
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[,] table = { { 10, 20, 30 }, { 40, 50, 60 } };
        Console.WriteLine(table[0, 2]);
        Console.WriteLine(table[1, 0]);
    }
}`,
    testCases: [{ input: '', expectedOutput: '30\n40', description: 'שורה 0 עמודה 2 = 30; שורה 1 עמודה 0 = 40' }],
    hints: ['מערך דו-מימדי מוגדר עם פסיק: int[,]', 'ניגשים עם שני אינדקסים: table[שורה, עמודה]', 'גם כאן הספירה מתחילה מ-0'],
  },
  {
    id: 0,
    title: 'סכום טבלה',
    description: 'סכמו את כל האיברים בטבלה הדו-מימדית והדפיסו את התוצאה. תצטרכו לולאה בתוך לולאה עם GetLength',
    difficulty: 'קשה',
    topic: 'מערכים',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        int[,] table = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        // סכמו את כל האיברים
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        int[,] table = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        int sum = 0;
        for (int row = 0; row < table.GetLength(0); row++)
        {
            for (int col = 0; col < table.GetLength(1); col++)
            {
                sum += table[row, col];
            }
        }
        Console.WriteLine(sum);
    }
}`,
    testCases: [{ input: '', expectedOutput: '45', description: '1+2+...+9 = 45' }],
    hints: ['GetLength(0) נותן את מספר השורות, GetLength(1) את מספר העמודות', 'לולאה חיצונית על שורות, פנימית על עמודות', 'הוסיפו כל איבר ל-sum'],
  },
]
