import type { Project } from '../../types/project'

export const polymorphismProject: Project = {
  topicId: 'polymorphism',
  title: 'מערכת הצורות הגיאומטריות',
  subtitle: 'הפרויקט המסכם של OOP: מחלקה אבסטרקטית, ממשק וקוד שנפתח להרחבה',
  icon: '🔺',
  description: [
    'תבנו מערכת צורות: מחלקה אבסטרקטית `Shape` שמגדירה מה כל צורה חייבת לדעת (שטח והיקף), וכמה צורות קונקרטיות שמממשות בדרכן — ריבוע, מעגל ומלבן.',
    'זה פרויקט הסיום של מסלול ה-OOP: תשתמשו בהכל — מחלקות, ירושה, דריסה, מחלקה אבסטרקטית וממשק. בסוף תוסיפו צורה רביעית ותראו כמה קל זה כשהתכנון נכון.',
  ],
  finalPreview: `=== מערכת הצורות ===
ריבוע (צלע 4)
  שטח: 16
  היקף: 16
מעגל (רדיוס 3)
  שטח: 28.27
  היקף: 18.85
מלבן (5x2)
  שטח: 10
  היקף: 14
--- סיכום ---
סה"כ צורות: 3
השטח הכולל: 54.27
הצורה הגדולה ביותר: מעגל (רדיוס 3)`,
  steps: [
    {
      title: 'המחלקה האבסטרקטית',
      goal: 'Shape שמגדירה את החוזה של כל צורה',
      instructions: [
        'צרו `abstract class Shape` עם שתי מתודות אבסטרקטיות: `public abstract double Area();` ו-`public abstract double Perimeter();` — שתיהן בלי גוף.',
        'הוסיפו `public abstract string Describe();` שתחזיר תיאור טקסטואלי של הצורה.',
        'הוסיפו מתודה **רגילה** (לא אבסטרקטית) `public void Print()` שמדפיסה את התיאור, השטח וההיקף — היא משותפת לכל הצורות ולכן ממומשת פה.',
      ],
      code: `using System;

abstract class Shape
{
    public abstract double Area();
    public abstract double Perimeter();
    public abstract string Describe();

    public void Print()
    {
        Console.WriteLine(Describe());
        Console.WriteLine($"  שטח: {Math.Round(Area(), 2)}");
        Console.WriteLine($"  היקף: {Math.Round(Perimeter(), 2)}");
    }
}`,
      checkpoint: 'הקוד מתקמפל. נסו `new Shape()` — תקבלו שגיאה, וזה בדיוק מה שאמור לקרות!',
    },
    {
      title: 'ריבוע ומעגל',
      goal: 'שתי צורות שמממשות את החוזה בדרכן',
      instructions: [
        'צרו `class Square : Shape` עם property `Side` ו-constructor. ממשו את שלוש המתודות: שטח = צלע², היקף = 4×צלע, תיאור = `ריבוע (צלע X)`.',
        'צרו `class Circle : Shape` עם `Radius`. שטח = π×r², היקף = 2×π×r (השתמשו ב-`Math.PI`).',
        'ב-`Main` צרו אחת מכל סוג והפעילו `Print()`.',
      ],
      code: `class Square : Shape
{
    public double Side { get; set; }
    public Square(double side) { Side = side; }

    public override double Area() { return Side * Side; }
    public override double Perimeter() { return 4 * Side; }
    public override string Describe() { return $"ריבוע (צלע {Side})"; }
}

class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(double radius) { Radius = radius; }

    public override double Area() { return Math.PI * Radius * Radius; }
    public override double Perimeter() { return 2 * Math.PI * Radius; }
    public override string Describe() { return $"מעגל (רדיוס {Radius})"; }
}`,
      checkpoint: 'ריבוע בצלע 4 מדפיס שטח 16 והיקף 16; מעגל ברדיוס 3 מדפיס שטח 28.27 והיקף 18.85.',
      checkpointOutput: `ריבוע (צלע 4)
  שטח: 16
  היקף: 16`,
    },
    {
      title: 'הלולאה הפולימורפית',
      goal: 'רשימה אחת, צורות שונות, קוד זהה',
      instructions: [
        'צרו `List<Shape>` והוסיפו ריבוע, מעגל ומלבן (צרו גם `class Rectangle : Shape` עם `Width` ו-`Height`).',
        'עברו בלולאה אחת והפעילו `Print()` על כל צורה.',
        'עצרו רגע והתבוננו: הלולאה לא יודעת אילו צורות יש ברשימה, ואין בה אף `if`. כל צורה יודעת לחשב את עצמה. זה פולימורפיזם.',
      ],
      code: `List<Shape> shapes = new List<Shape>
{
    new Square(4),
    new Circle(3),
    new Rectangle(5, 2)
};

foreach (Shape s in shapes)
{
    s.Print();
}`,
      checkpoint: 'שלוש הצורות מודפסות ברצף, כל אחת עם החישובים הנכונים שלה.',
    },
    {
      title: 'סיכום וסטטיסטיקה',
      goal: 'חישובים על כל האוסף',
      instructions: [
        'אחרי הלולאה, הדפיסו `--- סיכום ---` וכמה צורות יש.',
        'חשבו את השטח הכולל של כל הצורות (סכמו את `Area()` של כולן) והדפיסו מעוגל לשתי ספרות.',
        'מצאו את הצורה עם השטח הגדול ביותר (תבנית המקסימום — רק עם אובייקטים!) והדפיסו את התיאור שלה.',
      ],
      code: `double totalArea = 0;
Shape biggest = shapes[0];
foreach (Shape s in shapes)
{
    totalArea += s.Area();
    if (s.Area() > biggest.Area())
    {
        biggest = s;
    }
}

Console.WriteLine("--- סיכום ---");
Console.WriteLine($"סה\\"כ צורות: {shapes.Count}");
Console.WriteLine($"השטח הכולל: {Math.Round(totalArea, 2)}");
Console.WriteLine($"הצורה הגדולה ביותר: {biggest.Describe()}");`,
      checkpoint: 'הסיכום מציג 3 צורות, שטח כולל 54.27, והמעגל כגדול ביותר.',
    },
    {
      title: 'המבחן האמיתי: ממשק והרחבה',
      goal: 'מוסיפים יכולת חדשה וצורה חדשה — בלי לשבור כלום',
      instructions: [
        'הגדירו ממשק `interface IDrawable { void Draw(); }` שמדפיס ייצוג טקסטואלי פשוט של הצורה.',
        'ממשו אותו ב-`Square` (הדפיסו ריבוע מכוכביות בעזרת לולאה מקוננת) — שימו לב: `class Square : Shape, IDrawable` — ירושה **וגם** ממשק.',
        'בלולאה הראשית, הוסיפו: `if (s is IDrawable d) { d.Draw(); }` — רק צורות שיודעות להצטייר יצטיירו.',
        '**המבחן הגדול**: הוסיפו `class Triangle : Shape` (שטח = בסיס×גובה/2, היקף = סכום שלוש הצלעות) והוסיפו אותו לרשימה. כמה שורות בקוד הקיים נאלצתם לשנות? אפס!',
      ],
      code: `interface IDrawable
{
    void Draw();
}

class Square : Shape, IDrawable
{
    // ... הקוד הקיים ...

    public void Draw()
    {
        for (int i = 0; i < Side; i++)
        {
            for (int j = 0; j < Side; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}`,
      checkpoint: 'המשולש נוסף ועובד מיד, והריבוע מצייר את עצמו. סיימתם את מסלול ה-OOP המלא! 🎉🎓',
    },
  ],
  fullSolution: `using System;
using System.Collections.Generic;

abstract class Shape
{
    public abstract double Area();
    public abstract double Perimeter();
    public abstract string Describe();

    public void Print()
    {
        Console.WriteLine(Describe());
        Console.WriteLine($"  שטח: {Math.Round(Area(), 2)}");
        Console.WriteLine($"  היקף: {Math.Round(Perimeter(), 2)}");
    }
}

interface IDrawable
{
    void Draw();
}

class Square : Shape, IDrawable
{
    public double Side { get; set; }
    public Square(double side) { Side = side; }

    public override double Area() { return Side * Side; }
    public override double Perimeter() { return 4 * Side; }
    public override string Describe() { return $"ריבוע (צלע {Side})"; }

    public void Draw()
    {
        for (int i = 0; i < Side; i++)
        {
            for (int j = 0; j < Side; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}

class Circle : Shape
{
    public double Radius { get; set; }
    public Circle(double radius) { Radius = radius; }

    public override double Area() { return Math.PI * Radius * Radius; }
    public override double Perimeter() { return 2 * Math.PI * Radius; }
    public override string Describe() { return $"מעגל (רדיוס {Radius})"; }
}

class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public override double Area() { return Width * Height; }
    public override double Perimeter() { return 2 * (Width + Height); }
    public override string Describe() { return $"מלבן ({Width}x{Height})"; }
}

class Triangle : Shape
{
    public double A { get; set; }
    public double B { get; set; }
    public double C { get; set; }
    public double Height { get; set; }

    public Triangle(double a, double b, double c, double height)
    {
        A = a;
        B = b;
        C = c;
        Height = height;
    }

    public override double Area() { return A * Height / 2; }
    public override double Perimeter() { return A + B + C; }
    public override string Describe() { return $"משולש (בסיס {A})"; }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("=== מערכת הצורות ===");

        List<Shape> shapes = new List<Shape>
        {
            new Square(4),
            new Circle(3),
            new Rectangle(5, 2),
            new Triangle(6, 5, 5, 4)
        };

        double totalArea = 0;
        Shape biggest = shapes[0];

        foreach (Shape s in shapes)
        {
            s.Print();
            if (s is IDrawable d)
            {
                d.Draw();
            }
            totalArea += s.Area();
            if (s.Area() > biggest.Area())
            {
                biggest = s;
            }
        }

        Console.WriteLine("--- סיכום ---");
        Console.WriteLine($"סה\\"כ צורות: {shapes.Count}");
        Console.WriteLine($"השטח הכולל: {Math.Round(totalArea, 2)}");
        Console.WriteLine($"הצורה הגדולה ביותר: {biggest.Describe()}");
    }
}`,
}
