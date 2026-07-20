import type { Lesson } from '../../types/lesson'

export const classesLesson: Lesson = {
  topicId: 'classes',
  title: 'מחלקות: ברוכים הבאים ל-OOP',
  subtitle: 'מחלקות, אובייקטים, constructors, properties והכמסה — הרעיון הגדול של תכנות מודרני',
  sections: [
    {
      id: 'class-object',
      icon: '🏗️',
      title: 'מחלקה ואובייקט',
      blocks: [
        {
          kind: 'p',
          text: 'מחלקה (class) היא שבלונה: תיאור של "איך נראה" דבר מה — אילו נתונים יש לו ומה הוא יודע לעשות. אובייקט (object) הוא עותק חי שנוצר מהשבלונה. ממחלקת `Dog` אחת אפשר ליצור אלף כלבים שונים.',
        },
        {
          kind: 'code',
          code: `class Dog
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Bark()
    {
        Console.WriteLine($"{Name}: הב הב!");
    }
}

class Program
{
    static void Main()
    {
        Dog rex = new Dog();      // יצירת אובייקט
        rex.Name = "רקסי";
        rex.Age = 3;
        rex.Bark();               // רקסי: הב הב!

        Dog luna = new Dog();     // אובייקט שני, עצמאי לגמרי
        luna.Name = "לונה";
        luna.Bark();              // לונה: הב הב!
    }
}`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'זה בעצם struct משודרג — אבל בניגוד ל-struct, מחלקה היא טיפוס הפניה (זוכרים את המודול הקודם?): `Dog b = a` נותן שני שמות לאותו כלב, לא עותק.',
        },
      ],
    },
    {
      id: 'constructors',
      icon: '🔨',
      title: 'Constructor: הלידה של האובייקט',
      blocks: [
        {
          kind: 'p',
          text: 'במקום ליצור אובייקט ריק ולמלא אותו שדה-שדה, constructor (בנאי) נותן לאובייקט להיוולד מוכן. זו מתודה מיוחדת: שמה כשם המחלקה ואין לה טיפוס החזרה.',
        },
        {
          kind: 'code',
          code: `class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }

    public Student(string name, int grade)
    {
        this.Name = name;
        this.Grade = grade;
    }
}

// שימוש: הכל בשורה אחת
Student s = new Student("יובל", 92);`,
        },
        {
          kind: 'p',
          text: 'המילה `this` מציינת "האובייקט הנוכחי" — היא מבדילה בין ה-property (`this.Name`) לפרמטר (`name`). אפשר גם כמה constructors (עוד overloading!) — למשל אחד ריק שנותן ערכי ברירת מחדל.',
        },
      ],
    },
    {
      id: 'encapsulation',
      icon: '🔒',
      title: 'הכמסה: private ו-public',
      blocks: [
        {
          kind: 'p',
          text: 'העיקרון החשוב ביותר ב-OOP: אובייקט שומר על הנתונים של עצמו. שדות רגישים מסמנים `private` (נגישים רק בתוך המחלקה), והעולם החיצון עובר דרך מתודות או properties שאוכפים את החוקים.',
        },
        {
          kind: 'code',
          code: `class BankAccount
{
    private double balance;          // אף אחד לא נוגע ישירות!

    public void Deposit(double amount)
    {
        if (amount > 0)              // המחלקה שומרת על עצמה
        {
            balance += amount;
        }
    }

    public double GetBalance()
    {
        return balance;
    }
}`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'בלי הכמסה, כל שורת קוד בפרויקט יכולה לכתוב `account.balance = -5000` ולשבור הכל. עם הכמסה — יש שומר בכניסה.',
        },
      ],
    },
    {
      id: 'properties',
      icon: '🎛️',
      title: 'Properties: הדרך האלגנטית',
      blocks: [
        {
          kind: 'p',
          text: '`{ get; set; }` שראינו הוא property אוטומטי. כשצריך חוקים, כותבים property מלא — שדה פרטי מאחורי הקלעים, ולוגיקה ב-set:',
        },
        {
          kind: 'code',
          code: `class Player
{
    private int score;

    public int Score
    {
        get { return score; }
        set
        {
            if (value < 0)      // value = מה שמנסים להשים
            {
                score = 0;
            }
            else
            {
                score = value;
            }
        }
    }
}

Player p = new Player();
p.Score = -10;                  // מנסים לרמות...
Console.WriteLine(p.Score);     // 0 — ה-set הגן עלינו`,
        },
      ],
    },
    {
      id: 'static',
      icon: '📌',
      title: 'static: שייך למחלקה, לא לאובייקט',
      blocks: [
        {
          kind: 'p',
          text: 'שדה או מתודה `static` קיימים פעם אחת — משותפים לכל האובייקטים. מונה כמה אובייקטים נוצרו? static. ועכשיו סוף סוף ברור למה כתבנו `static void Main` כל הזמן: `Main` רצה בלי שנוצר שום אובייקט!',
        },
        {
          kind: 'code',
          code: `class Cat
{
    public static int Count = 0;   // משותף לכל החתולים

    public Cat()
    {
        Count++;                   // כל לידה מעדכנת את המונה
    }
}

new Cat();
new Cat();
Console.WriteLine(Cat.Count);      // 2 — דרך שם המחלקה!`,
        },
      ],
    },
    {
      id: 'summary',
      icon: '📋',
      title: 'סיכום',
      blocks: [
        {
          kind: 'list',
          items: [
            'מחלקה = שבלונה; אובייקט = עותק חי שנוצר עם `new`',
            'constructor מאתחל את האובייקט בלידתו; `this` = האובייקט הנוכחי',
            'הכמסה: שדות `private` + מתודות/properties ציבוריות ששומרות על החוקים',
            'property מלא = שדה פרטי + `get`/`set` עם לוגיקה',
            '`static` שייך למחלקה עצמה ומשותף לכל האובייקטים',
            'מחלקות הן טיפוסי הפניה — השמה משתפת, לא מעתיקה',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'רוצים העמקה? המדריך המלא לתכנות מונחה עצמים מחכה בתפריט. ובפרויקט — תבנו חשבון בנק אמיתי עם הפקדות, משיכות והגנות!',
        },
      ],
    },
  ],
}
