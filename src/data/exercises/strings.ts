import type { Exercise } from '../../types/exercise'

// מחרוזות
export const stringsExercises: Exercise[] = [
  {
    id: 15,
    title: 'אורך מחרוזת',
    description: 'הדפס את אורך המחרוזת "Programming"',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "Programming";
        // הדפס את אורך המחרוזת
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "Programming";
        Console.WriteLine(text.Length);
    }
}`,
    testCases: [{ input: '', expectedOutput: '11', description: 'אורך "Programming" הוא 11' }],
    hints: ['השתמשו ב-.Length כדי לקבל את אורך המחרוזת', 'עברו על כל תו ספור אותם', 'הדפיסו את המספר'],
  },
  {
    id: 16,
    title: 'חלק מתוך מחרוזת',
    description: 'הדפס חלק מהמחרוזת "Hello World" החל מ-0 באורך 5 תווים',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello World";
        // הדפס את החלק הראשון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "Hello World";
        Console.WriteLine(text.Substring(0, 5));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'Hello', description: 'הדפס 5 תווים מתחילה' }],
    hints: ['השתמשו ב-Substring(0, 5)', 'זה מחזיר 5 תווים החל מאינדקס 0', 'התוצאה תהיה "Hello"'],
  },
  {
    id: 17,
    title: 'הפוך אותיות',
    description: 'הפוך את "hello" ל-"HELLO"',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "hello";
        // הפוך ל-HELLO
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "hello";
        Console.WriteLine(text.ToUpper());
    }
}`,
    testCases: [{ input: '', expectedOutput: 'HELLO', description: 'הפוך "hello" ל-"HELLO"' }],
    hints: ['השתמשו ב-ToUpper()', 'זה הופך את כל האותיות לגדולות', 'הדפיסו את התוצאה'],
  },
  {
    id: 18,
    title: 'החלף טקסט',
    description: 'החלף את "a" ב-"A" במחרוזת "banana"',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = "banana";
        // החלף את "a" ב-"A"
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = "banana";
        Console.WriteLine(text.Replace("a", "A"));
    }
}`,
    testCases: [{ input: '', expectedOutput: 'bAnAnA', description: 'החלף את כל ה-a ב-A' }],
    hints: ['השתמשו ב-Replace("a", "A")', 'זה מחליף את כל ההופעות של "a" ב-"A"', 'הדפיסו את התוצאה'],
  },
  {
    id: 0,
    title: 'תו לפי מיקום',
    description: 'קלטו מילה והדפיסו את התו הראשון שלה בשורה הראשונה ואת התו האחרון בשורה השנייה',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        // הדפיסו את התו הראשון ואת האחרון
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        Console.WriteLine(word[0]);
        Console.WriteLine(word[word.Length - 1]);
    }
}`,
    testCases: [
      { input: 'שלום', expectedOutput: 'ש\nם', description: 'קלט: שלום' },
      { input: 'abc', expectedOutput: 'a\nc', description: 'קלט: abc' },
    ],
    hints: ['ניגשים לתו עם סוגריים מרובעים: word[0]', 'התו האחרון נמצא באינדקס Length - 1', 'מחרוזת מתנהגת כמו מערך של תווים'],
  },
  {
    id: 0,
    title: 'האם מכיל?',
    description: 'קלטו משפט והדפיסו True אם הוא מכיל את המילה "csharp" או False אחרת',
    difficulty: 'קל',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string sentence = Console.ReadLine();
        // בדקו עם Contains והדפיסו את התוצאה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string sentence = Console.ReadLine();
        Console.WriteLine(sentence.Contains("csharp"));
    }
}`,
    testCases: [
      { input: 'i love csharp code', expectedOutput: 'True', description: 'המשפט מכיל csharp' },
      { input: 'i love python', expectedOutput: 'False', description: 'המשפט לא מכיל csharp' },
    ],
    hints: ['Contains מחזירה bool — אפשר להדפיס אותו ישירות', 'שימו לב: החיפוש רגיש לאותיות גדולות/קטנות', 'sentence.Contains("csharp")'],
  },
  {
    id: 0,
    title: 'מציאת מיקום',
    description: 'קלטו משפט והדפיסו את המיקום (אינדקס) שבו מופיעה האות o בפעם הראשונה. אם היא לא קיימת יודפס 1-',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();
        // מצאו את המיקום של 'o' עם IndexOf
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();
        Console.WriteLine(text.IndexOf('o'));
    }
}`,
    testCases: [
      { input: 'hello world', expectedOutput: '4', description: 'ה-o הראשונה באינדקס 4' },
      { input: 'abc', expectedOutput: '-1', description: 'אין o — מוחזר 1-' },
    ],
    hints: ['IndexOf מחזירה את האינדקס של המופע הראשון', 'הספירה מתחילה מ-0', 'כשהתו לא נמצא, מוחזר 1-'],
  },
  {
    id: 0,
    title: 'ניקוי רווחים',
    description: 'קלטו טקסט עם רווחים מיותרים בהתחלה ובסוף, נקו אותו עם Trim והדפיסו את אורכו הנקי',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string messy = "   hello   ";
        // נקו את הרווחים והדפיסו את האורך החדש
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string messy = "   hello   ";
        string clean = messy.Trim();
        Console.WriteLine(clean.Length);
    }
}`,
    testCases: [{ input: '', expectedOutput: '5', description: '"hello" אחרי ניקוי — 5 תווים' }],
    hints: ['Trim מסירה רווחים מההתחלה ומהסוף בלבד', 'רווחים באמצע נשארים', 'שמרו את התוצאה במשתנה חדש — המחרוזת המקורית לא משתנה!'],
  },
  {
    id: 0,
    title: 'ספירת אותיות',
    description: 'קלטו מילה וספרו כמה פעמים מופיעה בה האות a. הדפיסו את התוצאה',
    difficulty: 'בינוני',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        // עברו על התווים בלולאה וספרו כמה הם a
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        int count = 0;
        foreach (char c in word)
        {
            if (c == 'a')
            {
                count++;
            }
        }
        Console.WriteLine(count);
    }
}`,
    testCases: [
      { input: 'banana', expectedOutput: '3', description: 'שלוש a במילה banana' },
      { input: 'hello', expectedOutput: '0', description: 'אין a במילה hello' },
    ],
    hints: ['אפשר לעבור על מחרוזת עם foreach (char c in word)', 'השוו כל תו ל-a עם ==', 'אל תשכחו לאתחל מונה ל-0 לפני הלולאה'],
  },
  {
    id: 0,
    title: 'מילה הפוכה',
    description: 'קלטו מילה והדפיסו אותה הפוכה. למשל: עבור abc יודפס cba',
    difficulty: 'קשה',
    topic: 'מחרוזות',
    starterCode: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        // בנו מחרוזת הפוכה בעזרת לולאה
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        string reversed = "";
        for (int i = word.Length - 1; i >= 0; i--)
        {
            reversed += word[i];
        }
        Console.WriteLine(reversed);
    }
}`,
    testCases: [
      { input: 'abc', expectedOutput: 'cba', description: 'קלט: abc' },
      { input: 'shalom', expectedOutput: 'molahs', description: 'קלט: shalom' },
    ],
    hints: ['התחילו ממחרוזת ריקה: string reversed = ""', 'רוצו על המחרוזת מהסוף להתחלה: מ-Length-1 עד 0', 'בכל סיבוב הוסיפו את התו הנוכחי עם +='],
  },
]
