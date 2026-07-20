import type { Project } from '../../types/project'

export const classesProject: Project = {
  topicId: 'classes',
  title: 'חשבון בנק',
  subtitle: 'המחלקה הראשונה שלכם שבאמת שומרת על עצמה: הפקדות, משיכות והיסטוריה',
  icon: '🏦',
  description: [
    'תבנו מחלקת `BankAccount` אמיתית: היא תשמור יתרה, תאפשר הפקדות ומשיכות — אבל תסרב לפעולות לא חוקיות (משיכה מעל היתרה, הפקדה שלילית).',
    'זה הפרויקט שבו הכמסה מפסיקה להיות מילה בשיעור והופכת למשהו שאתם מרגישים: היתרה מוגנת, ואף אחד לא יכול לשנות אותה מבחוץ.',
  ],
  finalPreview: `=== ברוכים הבאים לבנק ===
שם בעל החשבון: דנה
1=הפקדה, 2=משיכה, 3=יתרה, 4=היסטוריה, 5=יציאה
1
כמה להפקיד? 500
הופקדו 500 ש"ח. יתרה חדשה: 500
2
כמה למשוך? 800
אין מספיק כסף! היתרה היא 500
4
--- היסטוריית פעולות ---
הפקדה: 500
משיכה נדחתה: 800`,
  steps: [
    {
      title: 'המחלקה והבנאי',
      goal: 'BankAccount עם שם בעלים ויתרה מוגנת',
      instructions: [
        'צרו מחלקה `BankAccount` עם property ציבורי `Owner` (string) ושדה **פרטי** `balance` (double).',
        'כתבו constructor שמקבל את שם הבעלים ומאתחל יתרה 0.',
        'הוסיפו `public double GetBalance()` שמחזירה את היתרה.',
        'ב-`Main`: קלטו שם, צרו חשבון והדפיסו את היתרה ההתחלתית.',
      ],
      code: `using System;

class BankAccount
{
    public string Owner { get; set; }
    private double balance;

    public BankAccount(string owner)
    {
        this.Owner = owner;
        this.balance = 0;
    }

    public double GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main()
    {
        Console.Write("שם בעל החשבון: ");
        string name = Console.ReadLine();
        BankAccount account = new BankAccount(name);
        Console.WriteLine($"יתרה: {account.GetBalance()}");
    }
}`,
      checkpoint: 'החשבון נוצר והיתרה ההתחלתית 0 מודפסת.',
      checkpointOutput: 'יתרה: 0',
    },
    {
      title: 'הפקדה עם הגנה',
      goal: 'Deposit שמסרבת לסכומים לא חוקיים',
      instructions: [
        'הוסיפו `public bool Deposit(double amount)`: אם הסכום גדול מ-0 — הוסיפו ליתרה והחזירו `true`; אחרת החזירו `false` בלי לשנות כלום.',
        'למה `bool`? כדי שהקוד שקורא ידע אם הפעולה הצליחה ויוכל להגיב.',
        'בדקו ב-`Main`: הפקידו 500, ואז נסו להפקיד 100- ובדקו שהיתרה לא נפגעה.',
      ],
      code: `public bool Deposit(double amount)
{
    if (amount > 0)
    {
        balance += amount;
        return true;
    }
    return false;
}`,
      checkpoint: 'אחרי הפקדה של 500 והפקדה שלילית — היתרה עדיין 500 בדיוק.',
    },
    {
      title: 'משיכה עם בדיקת כיסוי',
      goal: 'Withdraw שלא נותנת להיכנס למינוס',
      instructions: [
        'הוסיפו `public bool Withdraw(double amount)`.',
        'שני תנאים חייבים להתקיים: הסכום חיובי **וגם** קטן-או-שווה ליתרה. רק אז מורידים ומחזירים `true`.',
        'אחרת — `false` בלי לגעת ביתרה.',
      ],
      code: `public bool Withdraw(double amount)
{
    if (amount > 0 && amount <= balance)
    {
        balance -= amount;
        return true;
    }
    return false;
}`,
      checkpoint: 'משיכה של 800 מיתרה של 500 מוחזרת כ-false והיתרה נשארת 500.',
    },
    {
      title: 'תפריט אינטראקטיבי',
      goal: 'הבנק פועל בלולאה עם הודעות ברורות',
      instructions: [
        'בנו לולאת תפריט: `1=הפקדה, 2=משיכה, 3=יתרה, 4=היסטוריה, 5=יציאה`.',
        'בהפקדה: קלטו סכום, קראו ל-`Deposit` — לפי הערך המוחזר הדפיסו `הופקדו X ש"ח. יתרה חדשה: Y` או `סכום לא חוקי`.',
        'במשיכה: אם `Withdraw` החזירה false, הדפיסו `אין מספיק כסף! היתרה היא X`.',
      ],
      code: `case "1":
    Console.Write("כמה להפקיד? ");
    double amount = double.Parse(Console.ReadLine());
    if (account.Deposit(amount))
    {
        Console.WriteLine($"הופקדו {amount} ש\\"ח. יתרה חדשה: {account.GetBalance()}");
    }
    else
    {
        Console.WriteLine("סכום לא חוקי");
    }
    break;`,
      checkpoint: 'אפשר להפקיד ולמשוך שוב ושוב, וכל פעולה מקבלת הודעה מתאימה.',
    },
    {
      title: 'היסטוריית פעולות',
      goal: 'החשבון זוכר מה עבר עליו',
      instructions: [
        'הוסיפו למחלקה שדה פרטי `private List<string> history = new List<string>();` (עם `using System.Collections.Generic;`).',
        'בכל `Deposit`/`Withdraw` — הוסיפו רשומה: `הפקדה: 500`, `משיכה: 200`, או `משיכה נדחתה: 800`.',
        'הוסיפו `public void PrintHistory()` שמדפיסה את כל הרשומות.',
        'אתגר רשות: הוסיפו מונה סטטי `AccountsCreated` שסופר כמה חשבונות נוצרו בסך הכל.',
      ],
      code: `private List<string> history = new List<string>();

public void PrintHistory()
{
    Console.WriteLine("--- היסטוריית פעולות ---");
    foreach (string record in history)
    {
        Console.WriteLine(record);
    }
}`,
      checkpoint: 'אחרי כמה פעולות, אפשרות 4 מציגה את כל ההיסטוריה לפי הסדר — הבנק שלכם מוכן! 🎉',
    },
  ],
  fullSolution: `using System;
using System.Collections.Generic;

class BankAccount
{
    public static int AccountsCreated = 0;

    public string Owner { get; set; }
    private double balance;
    private List<string> history = new List<string>();

    public BankAccount(string owner)
    {
        this.Owner = owner;
        this.balance = 0;
        AccountsCreated++;
    }

    public double GetBalance()
    {
        return balance;
    }

    public bool Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
            history.Add($"הפקדה: {amount}");
            return true;
        }
        history.Add($"הפקדה נדחתה: {amount}");
        return false;
    }

    public bool Withdraw(double amount)
    {
        if (amount > 0 && amount <= balance)
        {
            balance -= amount;
            history.Add($"משיכה: {amount}");
            return true;
        }
        history.Add($"משיכה נדחתה: {amount}");
        return false;
    }

    public void PrintHistory()
    {
        Console.WriteLine("--- היסטוריית פעולות ---");
        foreach (string record in history)
        {
            Console.WriteLine(record);
        }
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("=== ברוכים הבאים לבנק ===");
        Console.Write("שם בעל החשבון: ");
        BankAccount account = new BankAccount(Console.ReadLine());

        while (true)
        {
            Console.WriteLine("1=הפקדה, 2=משיכה, 3=יתרה, 4=היסטוריה, 5=יציאה");
            string choice = Console.ReadLine();
            if (choice == "5")
            {
                Console.WriteLine($"להתראות, {account.Owner}!");
                break;
            }

            switch (choice)
            {
                case "1":
                    Console.Write("כמה להפקיד? ");
                    double toDeposit = double.Parse(Console.ReadLine());
                    if (account.Deposit(toDeposit))
                    {
                        Console.WriteLine($"הופקדו {toDeposit} ש\\"ח. יתרה חדשה: {account.GetBalance()}");
                    }
                    else
                    {
                        Console.WriteLine("סכום לא חוקי");
                    }
                    break;

                case "2":
                    Console.Write("כמה למשוך? ");
                    double toWithdraw = double.Parse(Console.ReadLine());
                    if (account.Withdraw(toWithdraw))
                    {
                        Console.WriteLine($"נמשכו {toWithdraw} ש\\"ח. יתרה חדשה: {account.GetBalance()}");
                    }
                    else
                    {
                        Console.WriteLine($"אין מספיק כסף! היתרה היא {account.GetBalance()}");
                    }
                    break;

                case "3":
                    Console.WriteLine($"היתרה שלך: {account.GetBalance()} ש\\"ח");
                    break;

                case "4":
                    account.PrintHistory();
                    break;

                default:
                    Console.WriteLine("בחירה לא מוכרת");
                    break;
            }
        }
    }
}`,
}
