import type { Project } from '../../types/project'

export const basicsProject: Project = {
  topicId: 'basics',
  title: 'תעודת זהות דיגיטלית',
  subtitle: 'תוכנית ששואלת את המשתמש פרטים ומדפיסה לו תעודה מעוצבת',
  icon: '🪪',
  description: [
    'בפרויקט הראשון שלכם תבנו מחולל תעודות: התוכנית תשאל את המשתמש כמה שאלות על עצמו, ובסוף תדפיס תעודת זהות דיגיטלית מעוצבת עם כל הפרטים.',
    'תשתמשו בכל מה שלמדתם במודול: הדפסה, משתנים, קלט מהמשתמש ו-string interpolation.',
  ],
  finalPreview: `מה שמך? נועה
באיזו עיר את/ה גר/ה? חיפה
מה התחביב האהוב עליך? ציור

==============================
      תעודת זהות דיגיטלית
==============================
שם:     נועה
עיר:    חיפה
תחביב:  ציור
==============================
ברוכה הבאה לעולם התכנות!`,
  steps: [
    {
      title: 'שלד התוכנית וכותרת',
      goal: 'תוכנית שרצה ומדפיסה כותרת',
      instructions: [
        'פתחו את העורך וכתבו את שלד התוכנית: `using System;`, מחלקה `Program` ומתודת `Main`.',
        'בתוך `Main`, הדפיסו שורת כותרת: `תעודת זהות דיגיטלית`.',
      ],
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("תעודת זהות דיגיטלית");
    }
}`,
      checkpoint: 'הריצו את התוכנית — אתם אמורים לראות את הכותרת מודפסת.',
      checkpointOutput: 'תעודת זהות דיגיטלית',
    },
    {
      title: 'שאלת שם וקליטת תשובה',
      goal: 'התוכנית שואלת לשם ושומרת את התשובה במשתנה',
      instructions: [
        'לפני הכותרת, הדפיסו את השאלה `מה שמך?` בעזרת `Console.Write` (כדי שהתשובה תוקלד באותה שורה).',
        'קלטו את התשובה עם `Console.ReadLine()` ושמרו אותה במשתנה `string` בשם `name`.',
        'בינתיים, הדפיסו את השם מיד אחרי הקליטה כדי לבדוק שהוא נקלט.',
      ],
      code: `Console.Write("מה שמך? ");
string name = Console.ReadLine();
Console.WriteLine(name);`,
      checkpoint: 'הריצו, הקלידו שם ולחצו Enter — השם שהקלדתם אמור להיות מודפס חזרה.',
    },
    {
      title: 'עוד שתי שאלות: עיר ותחביב',
      goal: 'שלושה פרטים שמורים בשלושה משתנים',
      instructions: [
        'באותה שיטה בדיוק, שאלו וקלטו גם `באיזו עיר את/ה גר/ה?` לתוך משתנה `city`, ו`מה התחביב האהוב עליך?` לתוך משתנה `hobby`.',
        'מחקו את הדפסת הבדיקה מהשלב הקודם — כבר לא צריך אותה.',
      ],
      code: `Console.Write("מה שמך? ");
string name = Console.ReadLine();
Console.Write("באיזו עיר את/ה גר/ה? ");
string city = Console.ReadLine();
Console.Write("מה התחביב האהוב עליך? ");
string hobby = Console.ReadLine();`,
      checkpoint: 'הריצו וענו על שלוש השאלות. התוכנית עדיין לא מדפיסה תעודה — אבל היא לא אמורה לקרוס.',
    },
    {
      title: 'הדפסת התעודה',
      goal: 'תעודה מעוצבת עם כל הפרטים',
      instructions: [
        'עכשיו החלק המהנה: אחרי קליטת כל הפרטים, הדפיסו את התעודה.',
        'הדפיסו שורת מסגרת מסימני `=`, את הכותרת, שוב מסגרת, ואז את הפרטים — כל פרט בשורה משלו בעזרת string interpolation: `$"שם:     {name}"`.',
        'סגרו עם עוד שורת מסגרת.',
      ],
      code: `Console.WriteLine("==============================");
Console.WriteLine("      תעודת זהות דיגיטלית");
Console.WriteLine("==============================");
Console.WriteLine($"שם:     {name}");
Console.WriteLine($"עיר:    {city}");
Console.WriteLine($"תחביב:  {hobby}");
Console.WriteLine("==============================");`,
      checkpoint: 'הריצו וענו על השאלות — אתם אמורים לקבל תעודה מעוצבת עם הפרטים שהקלדתם.',
      checkpointOutput: `==============================
      תעודת זהות דיגיטלית
==============================
שם:     נועה
עיר:    חיפה
תחביב:  ציור
==============================`,
    },
    {
      title: 'שורת סיום אישית',
      goal: 'התוכנית המלאה עם ברכת סיום',
      instructions: [
        'הוסיפו אחרי התעודה שורת ברכה שמשתמשת בשם: `ברוך/ה הבא/ה לעולם התכנות!` — או כל ברכה אחרת שתבחרו.',
        'הריצו הכל מההתחלה ובדקו שהתוכנית שלמה: שאלות ➝ תעודה ➝ ברכה.',
      ],
      checkpoint: 'הרצה מלאה מהתחלה ועד הסוף נראית כמו בדוגמה שבראש העמוד. סיימתם את הפרויקט הראשון שלכם! 🎉',
    },
  ],
  fullSolution: `using System;

class Program
{
    static void Main()
    {
        Console.Write("מה שמך? ");
        string name = Console.ReadLine();
        Console.Write("באיזו עיר את/ה גר/ה? ");
        string city = Console.ReadLine();
        Console.Write("מה התחביב האהוב עליך? ");
        string hobby = Console.ReadLine();

        Console.WriteLine("==============================");
        Console.WriteLine("      תעודת זהות דיגיטלית");
        Console.WriteLine("==============================");
        Console.WriteLine($"שם:     {name}");
        Console.WriteLine($"עיר:    {city}");
        Console.WriteLine($"תחביב:  {hobby}");
        Console.WriteLine("==============================");
        Console.WriteLine($"ברוך/ה הבא/ה לעולם התכנות, {name}!");
    }
}`,
}
