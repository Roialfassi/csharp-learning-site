import type { Project } from '../../types/project'

export const inheritanceProject: Project = {
  topicId: 'inheritance',
  title: 'צי הרכבים',
  subtitle: 'מחלקת בסיס אחת, שלושה סוגי רכבים — וכל אחד מתמחה בדרכו',
  icon: '🚗',
  description: [
    'תבנו מערכת ניהול צי רכבים: מחלקת בסיס `Vehicle` עם המשותף לכל רכב, ושלוש מחלקות יורשות — מכונית, אופנוע ומשאית — שכל אחת מוסיפה ומשנה מה שרלוונטי לה.',
    'זה הפרויקט שבו תרגישו למה ירושה שווה: תוסיפו סוג רכב רביעי בחמש שורות, כי כל המשותף כבר כתוב.',
  ],
  finalPreview: `=== צי הרכבים ===
--- טויוטה קורולה ---
סוג: מכונית משפחתית
מהירות מרבית: 180 קמ"ש
מספר מושבים: 5
מתניע... וררר!
--- ימאהה R1 ---
סוג: אופנוע
מהירות מרבית: 250 קמ"ש
מתניע... ברררם!
עושה וילי! 🏍️
--- וולוו FH16 ---
סוג: משאית
מהירות מרבית: 90 קמ"ש
עומס מרבי: 20 טון
מתניע... וררר!
סה"כ רכבים בצי: 3`,
  steps: [
    {
      title: 'מחלקת הבסיס Vehicle',
      goal: 'כל מה שמשותף לכל רכב',
      instructions: [
        'צרו מחלקה `Vehicle` עם properties: `Brand` (string), `Model` (string), `MaxSpeed` (int).',
        'הוסיפו constructor שמקבל את שלושתם.',
        'הוסיפו מתודה `public virtual void Start()` שמדפיסה `מתניע... וררר!` — סימנו אותה `virtual` כי בהמשך סוגים מסוימים יתניעו אחרת.',
        'הוסיפו `public virtual void PrintInfo()` שמדפיסה כותרת עם המותג והדגם ואת המהירות המרבית.',
      ],
      code: `using System;

class Vehicle
{
    public string Brand { get; set; }
    public string Model { get; set; }
    public int MaxSpeed { get; set; }

    public Vehicle(string brand, string model, int maxSpeed)
    {
        Brand = brand;
        Model = model;
        MaxSpeed = maxSpeed;
    }

    public virtual void Start()
    {
        Console.WriteLine("מתניע... וררר!");
    }

    public virtual void PrintInfo()
    {
        Console.WriteLine($"--- {Brand} {Model} ---");
        Console.WriteLine($"מהירות מרבית: {MaxSpeed} קמ\\"ש");
    }
}`,
      checkpoint: 'צרו רכב אחד ב-Main והפעילו PrintInfo ו-Start — שניהם עובדים.',
    },
    {
      title: 'Car יורשת ומרחיבה',
      goal: 'מכונית עם מספר מושבים',
      instructions: [
        'צרו `class Car : Vehicle` עם property נוסף `Seats` (int).',
        'ה-constructor מקבל ארבעה ערכים ומעביר שלושה ל-`base`.',
        'דרסו את `PrintInfo`: קראו ל-`base.PrintInfo()` ואז הוסיפו את שורת המושבים — ככה לא משכפלים קוד!',
      ],
      code: `class Car : Vehicle
{
    public int Seats { get; set; }

    public Car(string brand, string model, int maxSpeed, int seats)
        : base(brand, model, maxSpeed)
    {
        Seats = seats;
    }

    public override void PrintInfo()
    {
        base.PrintInfo();
        Console.WriteLine($"מספר מושבים: {Seats}");
    }
}`,
      checkpoint: 'מכונית מדפיסה גם את פרטי הבסיס וגם את מספר המושבים.',
      checkpointOutput: `--- טויוטה קורולה ---
מהירות מרבית: 180 קמ"ש
מספר מושבים: 5`,
    },
    {
      title: 'Motorcycle משנה התנהגות',
      goal: 'אופנוע שמתניע אחרת ויודע לעשות וילי',
      instructions: [
        'צרו `class Motorcycle : Vehicle`.',
        'דרסו את `Start` כך שתדפיס `מתניע... ברררם!` — הפעם **בלי** `base`, כי ההתנהגות מוחלפת לגמרי.',
        'הוסיפו מתודה ייחודית `Wheelie()` שמדפיסה `עושה וילי! 🏍️` — היא קיימת רק לאופנוע.',
      ],
      code: `class Motorcycle : Vehicle
{
    public Motorcycle(string brand, string model, int maxSpeed)
        : base(brand, model, maxSpeed)
    {
    }

    public override void Start()
    {
        Console.WriteLine("מתניע... ברררם!");
    }

    public void Wheelie()
    {
        Console.WriteLine("עושה וילי! 🏍️");
    }
}`,
      checkpoint: 'האופנוע מתניע עם "ברררם!" בעוד המכונית עדיין מתניעה עם "וררר!".',
    },
    {
      title: 'Truck ומונה סטטי',
      goal: 'משאית עם עומס, וספירת כל הרכבים',
      instructions: [
        'צרו `class Truck : Vehicle` עם property `MaxLoad` (int, בטונות) ו-`PrintInfo` שמרחיבה עם שורת העומס.',
        'הוסיפו ל-`Vehicle` שדה `public static int TotalVehicles = 0;` והגדילו אותו ב-constructor של הבסיס.',
        'למה בבסיס? כי כל רכב — מכל סוג — עובר דרכו, אז הספירה תמיד מדויקת.',
      ],
      code: `// ב-Vehicle:
public static int TotalVehicles = 0;

public Vehicle(string brand, string model, int maxSpeed)
{
    Brand = brand;
    Model = model;
    MaxSpeed = maxSpeed;
    TotalVehicles++;
}

class Truck : Vehicle
{
    public int MaxLoad { get; set; }

    public Truck(string brand, string model, int maxSpeed, int maxLoad)
        : base(brand, model, maxSpeed)
    {
        MaxLoad = maxLoad;
    }

    public override void PrintInfo()
    {
        base.PrintInfo();
        Console.WriteLine($"עומס מרבי: {MaxLoad} טון");
    }
}`,
      checkpoint: 'אחרי יצירת שלושה רכבים, `Vehicle.TotalVehicles` מציג 3.',
    },
    {
      title: 'הצי המלא',
      goal: 'רשימה של רכבים מסוגים שונים',
      instructions: [
        'ב-`Main`, צרו `List<Vehicle>` והוסיפו לתוכה מכונית, אופנוע ומשאית — שימו לב שכולם נכנסים לרשימה של `Vehicle`, כי כל אחד מהם **הוא** רכב!',
        'עברו בלולאה: לכל רכב קראו ל-`PrintInfo()` ואז ל-`Start()`.',
        'שימו לב לקסם: כל רכב מדפיס ומתניע בדרכו שלו, למרות שהלולאה זהה. זה הרעיון שנפתח לעומק במודול הבא — פולימורפיזם!',
        'בסוף הדפיסו `סה"כ רכבים בצי: X`.',
      ],
      code: `List<Vehicle> fleet = new List<Vehicle>
{
    new Car("טויוטה", "קורולה", 180, 5),
    new Motorcycle("ימאהה", "R1", 250),
    new Truck("וולוו", "FH16", 90, 20)
};

foreach (Vehicle v in fleet)
{
    v.PrintInfo();
    v.Start();
}
Console.WriteLine($"סה\\"כ רכבים בצי: {Vehicle.TotalVehicles}");`,
      checkpoint: 'הלולאה מדפיסה שלושה רכבים שונים, כל אחד עם הפרטים וההתנעה שלו — הצי שלכם פועל! 🎉',
    },
  ],
  fullSolution: `using System;
using System.Collections.Generic;

class Vehicle
{
    public static int TotalVehicles = 0;

    public string Brand { get; set; }
    public string Model { get; set; }
    public int MaxSpeed { get; set; }

    public Vehicle(string brand, string model, int maxSpeed)
    {
        Brand = brand;
        Model = model;
        MaxSpeed = maxSpeed;
        TotalVehicles++;
    }

    public virtual void Start()
    {
        Console.WriteLine("מתניע... וררר!");
    }

    public virtual void PrintInfo()
    {
        Console.WriteLine($"--- {Brand} {Model} ---");
        Console.WriteLine($"מהירות מרבית: {MaxSpeed} קמ\\"ש");
    }
}

class Car : Vehicle
{
    public int Seats { get; set; }

    public Car(string brand, string model, int maxSpeed, int seats)
        : base(brand, model, maxSpeed)
    {
        Seats = seats;
    }

    public override void PrintInfo()
    {
        base.PrintInfo();
        Console.WriteLine($"מספר מושבים: {Seats}");
    }
}

class Motorcycle : Vehicle
{
    public Motorcycle(string brand, string model, int maxSpeed)
        : base(brand, model, maxSpeed)
    {
    }

    public override void Start()
    {
        Console.WriteLine("מתניע... ברררם!");
    }

    public void Wheelie()
    {
        Console.WriteLine("עושה וילי! 🏍️");
    }
}

class Truck : Vehicle
{
    public int MaxLoad { get; set; }

    public Truck(string brand, string model, int maxSpeed, int maxLoad)
        : base(brand, model, maxSpeed)
    {
        MaxLoad = maxLoad;
    }

    public override void PrintInfo()
    {
        base.PrintInfo();
        Console.WriteLine($"עומס מרבי: {MaxLoad} טון");
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("=== צי הרכבים ===");

        List<Vehicle> fleet = new List<Vehicle>
        {
            new Car("טויוטה", "קורולה", 180, 5),
            new Motorcycle("ימאהה", "R1", 250),
            new Truck("וולוו", "FH16", 90, 20)
        };

        foreach (Vehicle v in fleet)
        {
            v.PrintInfo();
            v.Start();
            if (v is Motorcycle bike)
            {
                bike.Wheelie();
            }
        }

        Console.WriteLine($"סה\\"כ רכבים בצי: {Vehicle.TotalVehicles}");
    }
}`,
}
