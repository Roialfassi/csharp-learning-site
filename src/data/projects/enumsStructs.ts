import type { Project } from '../../types/project'

export const enumsStructsProject: Project = {
  topicId: 'enums-structs',
  title: 'דף דמות למשחק תפקידים',
  subtitle: 'בונים גיבור: enum למקצוע, struct לדמות, וקרב כוח בין שתי דמויות',
  icon: '⚔️',
  description: [
    'בכל משחק תפקידים יש דף דמות: שם, מקצוע (לוחם? קוסם? קשת?), נקודות חיים וכוח. תבנו מחולל דמויות שיוצר גיבורים ומשווה ביניהם.',
    'המקצוע הוא `enum` (רשימה סגורה של אפשרויות), והדמות עצמה היא `struct` (שם + מקצוע + חוזק שהולכים ביחד).',
  ],
  finalPreview: `=== מחולל הדמויות ===
שם הדמות: לילית
בחרו מקצוע: 0=לוחם, 1=קוסם, 2=קשת
1
--- דף דמות ---
שם: לילית
מקצוע: Mage
חיים: 80
כוח: 95
--- הקרב! ---
לילית (95) נגד גורן (85)
לילית מנצח/ת!`,
  steps: [
    {
      title: 'enum המקצועות',
      goal: 'טיפוס CharacterClass עם שלושה מקצועות',
      instructions: [
        'הגדירו מחוץ למחלקה `enum CharacterClass` עם `Warrior`, `Mage`, `Archer`.',
        'ב-`Main`, צרו משתנה מהטיפוס הזה עם הערך `Mage` והדפיסו אותו כבדיקה.',
      ],
      code: `using System;

enum CharacterClass
{
    Warrior,
    Mage,
    Archer
}

class Program
{
    static void Main()
    {
        CharacterClass test = CharacterClass.Mage;
        Console.WriteLine(test);   // Mage
    }
}`,
      checkpoint: 'התוכנית מדפיסה Mage.',
    },
    {
      title: 'struct הדמות',
      goal: 'Character עם שם, מקצוע, חיים וכוח',
      instructions: [
        'הגדירו `struct Character` עם ארבעה שדות public: `Name` (string), `Class` (CharacterClass), `Health` (int), `Power` (int).',
        'צרו דמות ראשונה ביד: שם "גורן", לוחם, 120 חיים, 85 כוח — והדפיסו את השם שלה.',
      ],
      code: `struct Character
{
    public string Name;
    public CharacterClass Class;
    public int Health;
    public int Power;
}

// ב-Main:
Character hero;
hero.Name = "גורן";
hero.Class = CharacterClass.Warrior;
hero.Health = 120;
hero.Power = 85;
Console.WriteLine(hero.Name);`,
      checkpoint: 'התוכנית מדפיסה גורן — יש לכם דמות ראשונה!',
    },
    {
      title: 'יצירת דמות מקלט',
      goal: 'המשתמש בונה דמות משלו',
      instructions: [
        'קלטו שם מהמשתמש.',
        'הציגו את המקצועות: `בחרו מקצוע: 0=לוחם, 1=קוסם, 2=קשת`, קלטו מספר והמירו ל-enum: `(CharacterClass)int.Parse(...)`.',
        'קבעו חיים וכוח לפי המקצוע עם switch: לוחם — 120 חיים ו-85 כוח; קוסם — 80 ו-95; קשת — 100 ו-90.',
      ],
      code: `Console.Write("שם הדמות: ");
hero.Name = Console.ReadLine();
Console.WriteLine("בחרו מקצוע: 0=לוחם, 1=קוסם, 2=קשת");
hero.Class = (CharacterClass)int.Parse(Console.ReadLine());

switch (hero.Class)
{
    case CharacterClass.Warrior:
        hero.Health = 120;
        hero.Power = 85;
        break;
    case CharacterClass.Mage:
        hero.Health = 80;
        hero.Power = 95;
        break;
    case CharacterClass.Archer:
        hero.Health = 100;
        hero.Power = 90;
        break;
}`,
      checkpoint: 'בחרו קוסם (1) — לדמות אמורים להיות 80 חיים ו-95 כוח.',
    },
    {
      title: 'מתודת PrintSheet',
      goal: 'ה-struct מדפיס את דף הדמות של עצמו',
      instructions: [
        'הוסיפו ל-struct מתודה `public void PrintSheet()` שמדפיסה את דף הדמות: כותרת, שם, מקצוע, חיים וכוח.',
        'קראו לה: `hero.PrintSheet();`.',
      ],
      code: `public void PrintSheet()
{
    Console.WriteLine("--- דף דמות ---");
    Console.WriteLine($"שם: {Name}");
    Console.WriteLine($"מקצוע: {Class}");
    Console.WriteLine($"חיים: {Health}");
    Console.WriteLine($"כוח: {Power}");
}`,
      checkpoint: 'דף הדמות המלא מודפס בפורמט מסודר.',
      checkpointOutput: `--- דף דמות ---
שם: לילית
מקצוע: Mage
חיים: 80
כוח: 95`,
    },
    {
      title: 'הקרב!',
      goal: 'שתי דמויות נלחמות — החזקה מנצחת',
      instructions: [
        'צרו דמות שנייה קבועה בקוד (יריב מוכן) או קלטו גם אותה מהמשתמש.',
        'הדפיסו `--- הקרב! ---` ואת שתי הדמויות עם הכוח שלהן.',
        'השוו את הכוח והכריזו על המנצח (אל תשכחו מקרה תיקו!).',
        'אתגר רשות: קרב אמיתי בלולאה — כל סיבוב היריבים מורידים זה לזה חיים לפי הכוח חלקי 10, עד שמישהו מגיע ל-0.',
      ],
      code: `Character rival;
rival.Name = "גורן";
rival.Class = CharacterClass.Warrior;
rival.Health = 120;
rival.Power = 85;

Console.WriteLine("--- הקרב! ---");
Console.WriteLine($"{hero.Name} ({hero.Power}) נגד {rival.Name} ({rival.Power})");
if (hero.Power > rival.Power)
{
    Console.WriteLine($"{hero.Name} מנצח/ת!");
}
else if (rival.Power > hero.Power)
{
    Console.WriteLine($"{rival.Name} מנצח/ת!");
}
else
{
    Console.WriteLine("תיקו!");
}`,
      checkpoint: 'הקרב מוכרז ומנצח נקבע לפי הכוח — הדמויות שלכם חיות! 🎉',
    },
  ],
  fullSolution: `using System;

enum CharacterClass
{
    Warrior,
    Mage,
    Archer
}

struct Character
{
    public string Name;
    public CharacterClass Class;
    public int Health;
    public int Power;

    public void PrintSheet()
    {
        Console.WriteLine("--- דף דמות ---");
        Console.WriteLine($"שם: {Name}");
        Console.WriteLine($"מקצוע: {Class}");
        Console.WriteLine($"חיים: {Health}");
        Console.WriteLine($"כוח: {Power}");
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("=== מחולל הדמויות ===");

        Character hero;
        Console.Write("שם הדמות: ");
        hero.Name = Console.ReadLine();
        Console.WriteLine("בחרו מקצוע: 0=לוחם, 1=קוסם, 2=קשת");
        hero.Class = (CharacterClass)int.Parse(Console.ReadLine());

        hero.Health = 100;
        hero.Power = 80;
        switch (hero.Class)
        {
            case CharacterClass.Warrior:
                hero.Health = 120;
                hero.Power = 85;
                break;
            case CharacterClass.Mage:
                hero.Health = 80;
                hero.Power = 95;
                break;
            case CharacterClass.Archer:
                hero.Health = 100;
                hero.Power = 90;
                break;
        }

        hero.PrintSheet();

        Character rival;
        rival.Name = "גורן";
        rival.Class = CharacterClass.Warrior;
        rival.Health = 120;
        rival.Power = 85;

        Console.WriteLine("--- הקרב! ---");
        Console.WriteLine($"{hero.Name} ({hero.Power}) נגד {rival.Name} ({rival.Power})");
        if (hero.Power > rival.Power)
        {
            Console.WriteLine($"{hero.Name} מנצח/ת!");
        }
        else if (rival.Power > hero.Power)
        {
            Console.WriteLine($"{rival.Name} מנצח/ת!");
        }
        else
        {
            Console.WriteLine("תיקו!");
        }
    }
}`,
}
