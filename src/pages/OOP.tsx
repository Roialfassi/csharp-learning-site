import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BookOpen, ArrowRight } from 'lucide-react'

// ============================================================
// Small building blocks used throughout the guide
// ============================================================

function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded font-mono text-[0.85em]">
      {children}
    </code>
  )
}

function CodeBlock({ code, caption }: { code: string; caption?: string }) {
  return (
    <div className="my-4">
      {caption && <p className="text-xs font-semibold text-gray-500 mb-1">{caption}</p>}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto leading-relaxed">
        <pre>{code}</pre>
      </div>
    </div>
  )
}

type CalloutVariant = 'tip' | 'warning' | 'success' | 'info'

const calloutStyles: Record<CalloutVariant, { bg: string; border: string; label: string }> = {
  tip: { bg: 'bg-yellow-50', border: 'border-yellow-500', label: '💡 טיפ' },
  warning: { bg: 'bg-red-50', border: 'border-red-500', label: '⚠️ שימו לב' },
  success: { bg: 'bg-green-50', border: 'border-green-500', label: '✅ עצה טובה' },
  info: { bg: 'bg-blue-50', border: 'border-blue-500', label: 'ℹ️ הסבר נוסף' },
}

function Callout({ variant, children }: { variant: CalloutVariant; children: ReactNode }) {
  const style = calloutStyles[variant]
  return (
    <div className={`${style.bg} border-r-4 ${style.border} rounded p-4 text-sm text-gray-700 my-4 leading-relaxed`}>
      <span className="font-bold">{style.label}: </span>
      {children}
    </div>
  )
}

function CompareTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            {headers.map((h, i) => (
              <th key={i} className="p-3 text-right font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} className="p-3 border-t border-gray-200 text-gray-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface OOPSectionMeta {
  id: string
  icon: string
  title: string
}

const sections: OOPSectionMeta[] = [
  { id: 'intro', icon: '🧠', title: 'מבוא: מה זה OOP?' },
  { id: 'classes-objects', icon: '🏗️', title: 'מחלקות ואובייקטים' },
  { id: 'constructors', icon: '🔨', title: 'Constructors ומילת המפתח this' },
  { id: 'encapsulation', icon: '🔒', title: 'הכמסה (Encapsulation) ו-Properties' },
  { id: 'access-modifiers', icon: '🚪', title: 'מגבילי גישה' },
  { id: 'static', icon: '📌', title: 'חברים סטטיים (Static)' },
  { id: 'inheritance', icon: '👨‍👧', title: 'ירושה (Inheritance)' },
  { id: 'abstraction', icon: '🎨', title: 'הפשטה (Abstraction)' },
  { id: 'polymorphism', icon: '🎭', title: 'פולימורפיזם (Polymorphism)' },
  { id: 'interfaces', icon: '🔌', title: 'ממשקים (Interfaces)' },
  { id: 'object-class', icon: '🧩', title: 'מחלקת הבסיס Object' },
  { id: 'composition', icon: '🧱', title: 'הרכבה מול ירושה' },
  { id: 'solid', icon: '⚖️', title: 'עקרונות SOLID' },
  { id: 'pitfalls', icon: '⚠️', title: 'טעויות נפוצות' },
  { id: 'full-example', icon: '🚀', title: 'דוגמה מלאה - הכל ביחד' },
  { id: 'summary', icon: '📋', title: 'סיכום ומילון מונחים' },
]

const pillars = [
  { id: 'encapsulation', icon: '🔒', name: 'הכמסה', desc: 'הסתרת המידע הפנימי וחשיפת ממשק מבוקר בלבד' },
  { id: 'abstraction', icon: '🎨', name: 'הפשטה', desc: 'התמקדות במה שאובייקט עושה, לא איך הוא עושה זאת' },
  { id: 'inheritance', icon: '👨‍👧', name: 'ירושה', desc: 'שימוש חוזר בהתנהגות דרך יחס "הוא סוג של"' },
  { id: 'polymorphism', icon: '🎭', name: 'פולימורפיזם', desc: 'אותה קריאה, התנהגות שונה בהתאם לסוג האובייקט' },
]

function Section({ id, icon, title, children }: { id: string; icon: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="bg-white rounded-lg shadow-lg p-6 md:p-8 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

function TableOfContents() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-fit sticky top-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <BookOpen size={20} />
        תוכן העניינים
      </h2>
      <nav className="space-y-1 max-h-[70vh] overflow-y-auto pl-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded px-2 py-1.5 transition"
          >
            <span>{s.icon}</span>
            <span>{s.title}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

// ============================================================
// Page
// ============================================================

export default function OOP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">🧩 תכנות מונחה עצמים (OOP)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            מדריך מקיף שמסביר מ-א׳ ועד ת׳ את כל מה שצריך לדעת על OOP ב-C#: מחלקות, אובייקטים, ירושה, פולימורפיזם,
            הפשטה, ממשקים ועוד - עם דוגמאות קוד לכל מושג.
          </p>

          {/* Four pillars quick nav */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:-translate-y-1 transition transform text-center"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="font-bold text-gray-800 mb-1">{p.name}</div>
                <div className="text-xs text-gray-500">{p.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Layout: TOC + Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* ============================ INTRO ============================ */}
            <Section id="intro" icon="🧠" title="מבוא: מה זה תכנות מונחה עצמים?">
              <p>
                תכנות מונחה עצמים (Object-Oriented Programming, בקיצור OOP) היא גישה לארגון קוד סביב{' '}
                <strong>אובייקטים</strong> - יחידות שמאגדות יחד גם <strong>נתונים</strong> (מצב) וגם{' '}
                <strong>התנהגות</strong> (מתודות) הפועלת על אותם נתונים. זה שונה מתכנות פרוצדורלי, שבו הקוד הוא רשימת
                פעולות שרצות אחת אחרי השנייה על נתונים שמאוחסנים בנפרד.
              </p>
              <p>בואו נשווה בין שתי גישות לאותה בעיה - ניהול רשימת תלמידים וציונים:</p>

              <CodeBlock
                caption="גישה פרוצדורלית - הנתונים מפוזרים במערכים נפרדים"
                code={`string[] names = { "דנה", "יוסי" };
int[] grades = { 95, 88 };

for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine($"{names[i]}: {grades[i]}");
}
// כל "תלמיד" מפוזר בין שני מערכים - קל לאבד סנכרון ביניהם`}
              />

              <CodeBlock
                caption="גישה מונחית עצמים - כל תלמיד הוא אובייקט אחד שלם"
                code={`public class Student
{
    public string Name;
    public int Grade;
}

List<Student> students = new List<Student>
{
    new Student { Name = "דנה", Grade = 95 },
    new Student { Name = "יוסי", Grade = 88 }
};

foreach (Student s in students)
{
    Console.WriteLine($"{s.Name}: {s.Grade}");
}
// כל המידע על תלמיד אחד "ארוז" יחד באובייקט אחד`}
              />

              <p>
                OOP בנוי על ארבעה עמודי תווך שנחזור אליהם לעומק בהמשך המדריך - לחצו על אחד מהם כדי לקפוץ ישר לפרק שלו:
              </p>

              <Callout variant="info">
                OOP לא "מחליף" את מה שלמדתם עד עכשיו (משתנים, תנאים, לולאות, מתודות) - הוא בונה עליהם ומוסיף שכבת
                ארגון שמתאימה במיוחד לתוכנות גדולות ומורכבות, שבהן צריך לדגמן "דברים" מהעולם האמיתי: לקוחות, מוצרים,
                חיות, צורות גאומטריות ועוד.
              </Callout>
            </Section>

            {/* ============================ CLASSES & OBJECTS ============================ */}
            <Section id="classes-objects" icon="🏗️" title="מחלקות ואובייקטים">
              <p>
                <strong>מחלקה (Class)</strong> היא תבנית - היא מגדירה אילו נתונים (fields) ואילו פעולות (methods) יהיו
                לכל אובייקט מהסוג הזה, אבל היא עצמה לא "דבר" קונקרטי. <strong>אובייקט (Object)</strong> הוא מופע (instance)
                קונקרטי שנוצר מהתבנית, עם ערכים ממשיים משלו.
              </p>
              <Callout variant="tip">
                חשבו על מחלקה כמו תבנית עוגיות, והאובייקטים הם העוגיות עצמן. מתבנית אחת אפשר להכין הרבה עוגיות, וכל
                אחת יכולה להיות שונה (טעם אחר, תוספות אחרות) - בדיוק כמו שכל אובייקט מחזיק ערכים משלו בשדות שלו.
              </Callout>

              <CodeBlock
                code={`// הגדרת מחלקה - התבנית
public class Dog
{
    // Fields - "תיבות אחסון" של האובייקט
    public string Name;
    public int Age;

    // Method - התנהגות
    public void Bark()
    {
        Console.WriteLine($"{Name} אומר האו האו!");
    }
}

// שימוש במחלקה - יצירת אובייקטים (מופעים) עם new
Dog myDog = new Dog();
myDog.Name = "רקס";
myDog.Age = 3;
myDog.Bark(); // רקס אומר האו האו!

Dog anotherDog = new Dog();
anotherDog.Name = "באדי";
anotherDog.Age = 1;
anotherDog.Bark(); // באדי אומר האו האו!
// לכל אובייקט יש עותק נפרד משלו של Name ו-Age`}
              />

              <p>
                נקודה חשובה: מחלקות ב-C# הן <strong>Reference Types</strong> - כשמשתנה מסוג מחלקה "מכיל" אובייקט, הוא
                בעצם מכיל <em>הפניה (reference)</em> למקום בזיכרון שבו האובייקט נמצא, לא את האובייקט עצמו. זה אומר
                שהעתקת המשתנה מעתיקה את ההפניה, לא יוצרת אובייקט חדש:
              </p>

              <CodeBlock
                code={`Dog d1 = new Dog();
d1.Name = "רקס";

Dog d2 = d1; // d2 מצביע לאותו אובייקט בזיכרון כמו d1!
d2.Name = "באדי";

Console.WriteLine(d1.Name); // באדי - שינינו את אותו אובייקט משני המשתנים`}
              />

              <Callout variant="warning">
                זו טעות נפוצה למתחילים: לצפות ש-<InlineCode>{'d2 = d1'}</InlineCode> תיצור עותק עצמאי. כדי לקבל אובייקט
                עצמאי באמת צריך ליצור אותו מפורשות עם <InlineCode>{'new'}</InlineCode> ולהעתיק את הערכים בעצמכם.
              </Callout>
            </Section>

            {/* ============================ CONSTRUCTORS ============================ */}
            <Section id="constructors" icon="🔨" title="Constructors (בנאים) ומילת המפתח this">
              <p>
                <strong>Constructor</strong> הוא מתודה מיוחדת שרצה אוטומטית ברגע היצירה של אובייקט (עם{' '}
                <InlineCode>{'new'}</InlineCode>), ותפקידה לאתחל את מצב האובייקט. לבנאי אין טיפוס החזרה, ושמו זהה תמיד
                לשם המחלקה.
              </p>
              <p>
                אם לא כותבים בנאי בכלל, C# מייצר עבורכם אוטומטית <strong>בנאי ברירת מחדל</strong> ריק (ללא פרמטרים).
                ברגע שאתם כותבים בנאי משלכם, ברירת המחדל נעלמת - ואם עדיין תרצו בנאי ריק תצטרכו לכתוב אותו בעצמכם.
              </p>

              <CodeBlock
                code={`public class Dog
{
    public string Name;
    public int Age;

    // בנאי ברירת מחדל
    public Dog()
    {
        Name = "ללא שם";
        Age = 0;
    }

    // בנאי עם פרמטרים
    public Dog(string name, int age)
    {
        Name = name;
        Age = age;
    }

    // Overloading של בנאים + חיבור (chaining) לבנאי אחר עם this(...)
    public Dog(string name) : this(name, 0)
    {
    }
}

Dog d1 = new Dog();          // Name = "ללא שם", Age = 0
Dog d2 = new Dog("רקס", 3);  // Name = "רקס", Age = 3
Dog d3 = new Dog("באדי");    // קורא לבנאי השני, Age = 0`}
              />

              <p>
                מילת המפתח <InlineCode>{'this'}</InlineCode> מייצגת את האובייקט הנוכחי עצמו. השימוש הנפוץ ביותר הוא
                להבדיל בין שדה של האובייקט לפרמטר שיש לו אותו שם:
              </p>

              <CodeBlock
                code={`public class Point
{
    public int X, Y;

    public Point(int x, int y)
    {
        this.X = x; // this.X הוא השדה, x (הקטן) הוא הפרמטר
        this.Y = y;
    }

    public Point Move(int dx, int dy)
    {
        return new Point(this.X + dx, this.Y + dy);
    }
}`}
              />

              <p>
                דרך נוחה נוספת ליצור אובייקט ולאתחל שדות/properties ציבוריים היא <strong>Object Initializer</strong>{' '}
                - היא רצה אחרי הבנאי, לרוב יחד עם בנאי ברירת מחדל:
              </p>
              <CodeBlock code={`Dog d4 = new Dog { Name = "מוצי", Age = 2 };`} />
            </Section>

            {/* ============================ ENCAPSULATION ============================ */}
            <Section id="encapsulation" icon="🔒" title="הכמסה (Encapsulation) ו-Properties">
              <p>
                <strong>הכמסה</strong> היא העיקרון של איגוד הנתונים וההתנהגות יחד בתוך המחלקה, תוך <strong>הסתרת</strong>{' '}
                המימוש הפנימי מהעולם החיצון וחשיפת "ממשק" מבוקר בלבד. במקום לתת לכל קוד חיצוני לגעת ישירות בשדות
                הפנימיים, חושפים <strong>Properties</strong> ומתודות ציבוריות ששולטות בגישה.
              </p>
              <p>
                למה זה חשוב? כי זה מאפשר לוודא תקינות נתונים (validation), למנוע מצבים לא חוקיים, ולשנות את המימוש
                הפנימי בעתיד בלי לשבור קוד שמשתמש במחלקה.
              </p>

              <CodeBlock
                code={`public class BankAccount
{
    private decimal balance; // שדה פרטי - לא נגיש ישירות מבחוץ

    public string Owner { get; set; } // property אוטומטי - קיצור נוח

    public decimal Balance
    {
        get { return balance; }
        private set // אפשר לשנות רק מבפנים המחלקה עצמה
        {
            if (value < 0)
                throw new ArgumentException("היתרה לא יכולה להיות שלילית");
            balance = value;
        }
    }

    public BankAccount(string owner, decimal initialBalance)
    {
        Owner = owner;
        Balance = initialBalance;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("סכום ההפקדה חייב להיות חיובי");
        Balance += amount;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
            throw new InvalidOperationException("אין מספיק כסף בחשבון");
        Balance -= amount;
    }
}

var account = new BankAccount("דנה", 1000);
account.Deposit(500);
account.Withdraw(200);
Console.WriteLine(account.Balance); // 1300

// account.Balance = -50; // שגיאת קומפילציה! ה-setter פרטי`}
              />

              <p>ל-Properties יש כמה צורות נפוצות:</p>
              <CompareTable
                headers={['סוג', 'תחביר', 'מתי משתמשים']}
                rows={[
                  [
                    'Auto Property',
                    <InlineCode key="1">{'public string Name { get; set; }'}</InlineCode>,
                    'כשאין צורך בבדיקות מיוחדות - קיצור נוח',
                  ],
                  [
                    'Property עם setter פרטי',
                    <InlineCode key="2">{'public int Age { get; private set; }'}</InlineCode>,
                    'קריאה חופשית, אך שינוי רק מתוך המחלקה',
                  ],
                  [
                    'Property מלא (backing field)',
                    <InlineCode key="3">{'get { ... } set { ... }'}</InlineCode>,
                    'כשצריך לוגיקה/ולידציה בקריאה או בכתיבה',
                  ],
                  [
                    'Property לקריאה בלבד',
                    <InlineCode key="4">{'public int Id { get; }'}</InlineCode>,
                    'ערך שנקבע רק פעם אחת, בבנאי, ולא משתנה אחר כך',
                  ],
                ]}
              />

              <Callout variant="warning">
                שדות ציבוריים (<InlineCode>{'public'}</InlineCode> fields) חשופים לגמרי - כל קוד חיצוני יכול לשנות
                אותם לכל ערך, גם לא הגיוני, בלי שום בקרה. כמעט תמיד עדיף לחשוף Properties במקום שדות ציבוריים.
              </Callout>
            </Section>

            {/* ============================ ACCESS MODIFIERS ============================ */}
            <Section id="access-modifiers" icon="🚪" title="מגבילי גישה (Access Modifiers)">
              <p>
                מגבילי גישה קובעים מאיפה אפשר "לראות" ולהשתמש בחבר מסוים (שדה, property, מתודה, מחלקה). הכלל האצבע:
                התחילו תמיד עם ההגבלה הקפדנית ביותר האפשרית, ופתחו רק כשבאמת צריך.
              </p>

              <CompareTable
                headers={['מגביל', 'נגישות מ...']}
                rows={[
                  [<InlineCode key="1">{'public'}</InlineCode>, 'מכל מקום, בכל המחלקות'],
                  [<InlineCode key="2">{'private'}</InlineCode>, 'רק מתוך אותה מחלקה (ברירת המחדל)'],
                  [<InlineCode key="3">{'protected'}</InlineCode>, 'מתוך המחלקה עצמה ומכל מחלקה שיורשת ממנה'],
                  [<InlineCode key="4">{'internal'}</InlineCode>, 'מכל מקום באותו פרויקט (assembly), לא מבחוץ'],
                  [<InlineCode key="5">{'protected internal'}</InlineCode>, 'protected או internal - הרחב מבין השניים'],
                  [<InlineCode key="6">{'private protected'}</InlineCode>, 'protected וגם internal - רק יורשות באותו assembly'],
                ]}
              />

              <CodeBlock
                code={`public class Animal
{
    protected string secretName; // נגיש רק מתוך Animal והיורשות שלה

    private void InternalCleanup() // נגיש רק מתוך Animal עצמה
    {
        // ...
    }
}

public class Dog : Animal
{
    public void PrintName()
    {
        Console.WriteLine(secretName); // תקין - Dog יורשת מ-Animal
        // InternalCleanup(); // שגיאת קומפילציה - private לא נגיש ליורשות
    }
}`}
              />
            </Section>

            {/* ============================ STATIC ============================ */}
            <Section id="static" icon="📌" title="חברים סטטיים (Static)">
              <p>
                חבר <InlineCode>{'static'}</InlineCode> שייך <strong>למחלקה עצמה</strong> ולא לאובייקט ספציפי - הוא
                משותף לכל המופעים, ואפשר לגשת אליו ישירות דרך שם המחלקה בלי ליצור אובייקט בכלל.
              </p>

              <CodeBlock
                code={`public class Counter
{
    private static int totalCount = 0; // משותף לכל האובייקטים מהמחלקה
    public int Id;

    public Counter()
    {
        totalCount++;
        Id = totalCount;
    }

    public static int GetTotalCount() // static method - נקרא דרך שם המחלקה
    {
        return totalCount;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
Counter c3 = new Counter();
Console.WriteLine(Counter.GetTotalCount()); // 3`}
              />

              <p>
                <strong>מחלקה סטטית</strong> (<InlineCode>{'static class'}</InlineCode>) אי אפשר ליצור ממנה אובייקטים
                כלל - כל החברים בה חייבים להיות static. דוגמאות מוכרות: <InlineCode>{'Math'}</InlineCode> ו-
                <InlineCode>{'Console'}</InlineCode> מ-.NET עצמה.
              </p>

              <Callout variant="info">
                מתודת instance יכולה לגשת בחופשיות לחברים static של אותה מחלקה, אבל ההפך לא נכון: מתודה static לא
                יכולה לגשת ישירות לשדה instance, כי היא לא "יודעת" על איזה אובייקט ספציפי לדבר.
              </Callout>
            </Section>

            {/* ============================ INHERITANCE ============================ */}
            <Section id="inheritance" icon="👨‍👧" title="ירושה (Inheritance)">
              <p>
                ירושה מאפשרת למחלקה (<strong>derived / subclass</strong>) "לרשת" שדות, properties ומתודות ממחלקה אחרת
                (<strong>base / superclass</strong>), ולהוסיף או לשנות התנהגות משלה. ירושה מתאימה כשיש יחס אמיתי של{' '}
                <strong>"הוא סוג של" (is-a)</strong>: כלב הוא סוג של חיה.
              </p>
              <p>
                ב-C# מחלקה יכולה לרשת ממחלקת בסיס <strong>אחת בלבד</strong> (בניגוד לממשקים, שאפשר לממש כמה - ראו בפרק
                הבא).
              </p>

              <CodeBlock
                code={`public class Animal
{
    public string Name;

    public Animal(string name)
    {
        Name = name;
    }

    public virtual void MakeSound() // virtual = מותר ליורשים לדרוס אותה
    {
        Console.WriteLine($"{Name} משמיע קול");
    }

    public void Sleep() // לא virtual - זהה לכל היורשים
    {
        Console.WriteLine($"{Name} ישן... 💤");
    }
}

public class Dog : Animal // Dog יורשת מ-Animal
{
    public Dog(string name) : base(name) // קריאה מפורשת לבנאי של הבסיס
    {
    }

    public override void MakeSound() // דריסה (override) של המימוש
    {
        Console.WriteLine($"{Name} נובח: האו האו!");
    }
}

public class Cat : Animal
{
    public Cat(string name) : base(name) { }

    public override void MakeSound()
    {
        Console.WriteLine($"{Name} מיילל: מיאו!");
    }
}

Animal a = new Animal("יצור");
Dog d = new Dog("רקס");
Cat c = new Cat("מיצי");

a.MakeSound(); // יצור משמיע קול
d.MakeSound(); // רקס נובח: האו האו!
c.MakeSound(); // מיצי מיילל: מיאו!

d.Sleep(); // רקס ישן... 💤 - ירשה מ-Animal בלי לכתוב שוב`}
              />

              <p>
                מילת המפתח <InlineCode>{'base'}</InlineCode> משמשת גם לקריאה לבנאי של מחלקת הבסיס (כמו בדוגמה למעלה),
                וגם לקריאה למימוש המקורי של מתודה שנדרסה, מתוך המימוש הדרוס:
              </p>
              <CodeBlock
                code={`public override void MakeSound()
{
    base.MakeSound(); // מריץ קודם את ההתנהגות של Animal
    Console.WriteLine($"{Name} נובח: האו האו!"); // ואז מוסיף התנהגות משלו
}`}
              />

              <p>
                חשוב להבדיל בין <strong>דריסה (override)</strong> ל<strong>הסתרה (new)</strong> - שתיהן "מגדירות מחדש"
                מתודה במחלקה יורשת, אך מתנהגות אחרת לגמרי כשקוראים דרך משתנה מטיפוס הבסיס:
              </p>

              <CodeBlock
                code={`public class Base
{
    public virtual void Show() => Console.WriteLine("Base.Show");
}

public class Derived : Base
{
    public new void Show() => Console.WriteLine("Derived.Show"); // מסתירה, לא דורסת!
}

Base b = new Derived();
b.Show(); // Base.Show - כי new לא פולימורפית!

Derived dd = new Derived();
dd.Show(); // Derived.Show`}
              />

              <CompareTable
                headers={['', 'override (דריסה)', 'new (הסתרה)']}
                rows={[
                  ['קריאה דרך משתנה מטיפוס הבסיס', 'מריצה את מימוש היורש (פולימורפיזם אמיתי)', 'מריצה את מימוש הבסיס!'],
                  ['קריאה דרך משתנה מטיפוס היורש', 'מריצה את מימוש היורש', 'מריצה את מימוש היורש'],
                  ['דרישה במחלקת הבסיס', <InlineCode key="1">{'virtual'}</InlineCode>, 'אף דבר מיוחד'],
                ]}
              />

              <Callout variant="warning">
                השכחה הכי נפוצה: לכתוב מתודה חדשה עם אותו שם במחלקה יורשת, בלי <InlineCode>{'override'}</InlineCode>{' '}
                (ובלי <InlineCode>{'virtual'}</InlineCode> בבסיס). זה מקמפל בהצלחה אך יוצר הסתרה שקטה במקום פולימורפיזם
                - באג נפוץ וקשה לאיתור.
              </Callout>

              <p>
                אפשר גם למנוע ירושה נוספת לגמרי עם <InlineCode>{'sealed'}</InlineCode> על מחלקה, או למנוע דריסה נוספת
                של מתודה ספציפית שכבר נדרסה:
              </p>
              <CodeBlock
                code={`public sealed class Puppy : Dog { } // אי אפשר לרשת מ-Puppy יותר

public class Cat2 : Animal
{
    public sealed override void MakeSound() // אי אפשר לדרוס שוב במחלקות הבאות
    {
        Console.WriteLine($"{Name} מיילל");
    }
}`}
              />
            </Section>

            {/* ============================ ABSTRACTION ============================ */}
            <Section id="abstraction" icon="🎨" title="הפשטה (Abstraction)">
              <p>
                הפשטה היא העיקרון של הצגת ה<strong>מה</strong> (מה אובייקט עושה) מבלי לחשוף את ה<strong>איך</strong>{' '}
                (איך בדיוק זה קורה בפנים). כשאתם קוראים ל-<InlineCode>{'Console.WriteLine'}</InlineCode> אתם לא צריכים
                לדעת איך היא כותבת בייטים למסך - זו הפשטה בפעולה.
              </p>
              <p>
                הכלי המרכזי ליצירת הפשטה במחלקות הוא <strong>מחלקה אבסטרקטית</strong> (
                <InlineCode>{'abstract class'}</InlineCode>): מחלקה שאי אפשר ליצור ממנה אובייקט ישירות, שיכולה להכיל
                גם מתודות רגילות (עם מימוש) וגם <strong>מתודות אבסטרקטיות</strong> - בלי מימוש בכלל, שכל מחלקה יורשת{' '}
                <em>חייבת</em> לממש.
              </p>

              <CodeBlock
                code={`public abstract class Shape
{
    public abstract double GetArea(); // אין מימוש - חובה על היורשים לספק אחד

    public void PrintArea() // מתודה רגילה - יש לה מימוש, היורשים מקבלים אותה כמו שהיא
    {
        Console.WriteLine($"השטח הוא: {GetArea():F2}");
    }
}

public class Circle : Shape
{
    public double Radius;
    public Circle(double radius) { Radius = radius; }

    public override double GetArea() => Math.PI * Radius * Radius;
}

public class Rectangle : Shape
{
    public double Width, Height;
    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public override double GetArea() => Width * Height;
}

// Shape s = new Shape(); // שגיאת קומפילציה! אי אפשר ליצור אובייקט ממחלקה אבסטרקטית

Shape[] shapes = { new Circle(5), new Rectangle(4, 6) };
foreach (Shape shape in shapes)
{
    shape.PrintArea(); // לכל צורה יש חישוב שטח משלה
}`}
              />

              <Callout variant="tip">
                השתמשו במחלקה אבסטרקטית כשיש משפחת מחלקות עם יחס "is-a" חזק שגם <strong>חולקות קוד או מצב משותף</strong>{' '}
                (כמו <InlineCode>{'PrintArea'}</InlineCode> למעלה). אם צריך רק "חוזה" בלי שום קוד משותף - ממשק (הפרק
                הבא) הוא לרוב הבחירה הנכונה יותר.
              </Callout>
            </Section>

            {/* ============================ POLYMORPHISM ============================ */}
            <Section id="polymorphism" icon="🎭" title="פולימורפיזם (Polymorphism)">
              <p>
                פולימורפיזם ("הרבה צורות") הוא היכולת של אותה קריאת מתודה להתנהג אחרת בהתאם לסוג האובייקט שקורא לה
                בפועל. יש שני סוגים עיקריים:
              </p>

              <CompareTable
                headers={['סוג', 'מתי נקבע', 'איך מושגים']}
                rows={[
                  ['Compile-time (סטטי)', 'בזמן קומפילציה', 'Method Overloading - כמה מתודות באותו שם, פרמטרים שונים'],
                  ['Runtime (דינמי)', 'בזמן ריצה, לפי הסוג האמיתי של האובייקט', 'virtual + override, או ממשקים'],
                ]}
              />

              <p>
                <strong>Overloading</strong> - כמה מתודות באותו שם עם רשימת פרמטרים שונה (סוג, כמות או סדר):
              </p>
              <CodeBlock
                code={`public class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
    public int Add(int a, int b, int c) => a + b + c;
}

var calc = new Calculator();
calc.Add(1, 2);       // קוראת לגרסת ה-int
calc.Add(1.5, 2.5);   // קוראת לגרסת ה-double
calc.Add(1, 2, 3);    // קוראת לגרסה עם 3 פרמטרים
// הקומפיילר בוחר איזו גרסה להריץ כבר בזמן קומפילציה`}
              />

              <p>
                <strong>Overriding</strong> הוא הפולימורפיזם ה"אמיתי" - אותה קריאה בדיוק, אבל ההתנהגות נקבעת בזמן ריצה
                לפי הסוג האמיתי של האובייקט. ראינו את זה כבר בדוגמת ה-Animal בפרק הירושה:
              </p>
              <CodeBlock
                code={`Animal[] animals = { new Dog("רקס"), new Cat("מיצי"), new Animal("יצור") };

foreach (Animal animal in animals)
{
    animal.MakeSound(); // אותה שורת קוד בדיוק - התנהגות שונה לכל אובייקט!
}
// רקס נובח: האו האו!
// מיצי מיילל: מיאו!
// יצור משמיע קול`}
              />

              <p>
                לפעמים צריך לבדוק או להמיר אובייקט חזרה לסוג הספציפי שלו. יש כמה כלים לכך:
              </p>
              <CodeBlock
                code={`Animal animal = new Dog("רקס");

// is - בודק ובו-זמנית מקצה למשתנה חדש (pattern matching, מומלץ)
if (animal is Dog dog)
{
    Console.WriteLine($"זה כלב בשם {dog.Name}");
}

// as - ממיר, ומחזיר null אם ההמרה נכשלה (לא זורק שגיאה)
Dog d2 = animal as Dog;
if (d2 != null)
{
    Console.WriteLine("ההמרה הצליחה");
}

// (Dog)animal - המרה ישירה, זורקת InvalidCastException אם נכשלת`}
              />

              <Callout variant="tip">
                בקוד C# מודרני עדיף כמעט תמיד <InlineCode>{'is'}</InlineCode> עם pattern matching - הוא קצר, בטוח ולא
                זורק חריגות במקרה כישלון.
              </Callout>
            </Section>

            {/* ============================ INTERFACES ============================ */}
            <Section id="interfaces" icon="🔌" title="ממשקים (Interfaces)">
              <p>
                ממשק הוא <strong>חוזה</strong>: רשימה של מתודות (ולעיתים properties) שכל מחלקה שמממשת אותו{' '}
                <em>מתחייבת</em> לספק. לפי המוסכמה, שמות ממשקים מתחילים באות <InlineCode>{'I'}</InlineCode> (
                <InlineCode>{'IMovable'}</InlineCode>, <InlineCode>{'IDrawable'}</InlineCode>).
              </p>
              <p>
                בניגוד לירושה ממחלקה (רק אחת), מחלקה יכולה <strong>לממש כמה ממשקים</strong> בו זמנית - זה ההבדל
                המרכזי, ומה שהופך ממשקים לכלי גמיש במיוחד להגדרת "יכולות" (can-do) בלי קשר להיררכיה.
              </p>

              <CodeBlock
                code={`public interface IMovable
{
    void Move(int dx, int dy);
}

public interface IDrawable
{
    void Draw();
}

// מחלקה יכולה לממש כמה ממשקים - גם אם אין ביניהם קשר משפחתי
public class Sprite : IMovable, IDrawable
{
    public int X, Y;

    public void Move(int dx, int dy)
    {
        X += dx;
        Y += dy;
    }

    public void Draw()
    {
        Console.WriteLine($"מצייר ב-({X}, {Y})");
    }
}`}
              />

              <p>שאלה קלאסית: מתי משתמשים במחלקה אבסטרקטית ומתי בממשק?</p>
              <CompareTable
                headers={['', 'מחלקה אבסטרקטית', 'ממשק']}
                rows={[
                  ['ירושה/מימוש', 'מחלקה יכולה לרשת רק אחת', 'מחלקה יכולה לממש כמה ממשקים'],
                  ['שדות ומצב (state)', 'כן, יכולה להכיל שדות', 'לא - רק חתימות (ללא state)'],
                  ['Constructor', 'כן', 'לא'],
                  ['מימוש ברירת מחדל', 'כן, לכל מתודה שרוצים', 'רק מ-C# 8 ואילך, ולא נפוץ בקוד יומיומי'],
                  ['מתי להשתמש', 'יחס "is-a" חזק + קוד/מצב משותף', 'חוזה של יכולת ("can-do"), ללא תלות בהיררכיה'],
                ]}
              />

              <Callout variant="info">
                החל מ-C# 8 אפשר להוסיף מימוש ברירת מחדל למתודה בממשק (Default Interface Methods), אבל זהו כלי מתקדם
                שמיועד בעיקר לתחזוקת ספריות קיימות בלי לשבור קוד ישן - ברוב הקוד היומיומי שלכם ממשקים עדיין יהיו "חוזה
                בלבד" ללא מימוש.
              </Callout>
            </Section>

            {/* ============================ OBJECT CLASS ============================ */}
            <Section id="object-class" icon="🧩" title="מחלקת הבסיס Object">
              <p>
                כל מחלקה ב-C# יורשת (בעקיפין) מ-<InlineCode>{'System.Object'}</InlineCode>, גם אם לא כתבתם{' '}
                <InlineCode>{': object'}</InlineCode> בעצמכם. זה נותן לכל אובייקט כמה מתודות virtual מובנות שכדאי
                להכיר - ולפעמים לדרוס.
              </p>

              <CodeBlock
                code={`public class Point
{
    public int X, Y;
    public Point(int x, int y) { X = x; Y = y; }

    public override string ToString() => $"({X}, {Y})"; // איך "מדפיסים" את האובייקט

    public override bool Equals(object obj)
    {
        if (obj is not Point other) return false;
        return X == other.X && Y == other.Y;
    }

    public override int GetHashCode() => HashCode.Combine(X, Y);
}

Point p1 = new Point(1, 2);
Console.WriteLine(p1); // קורא אוטומטית ל-ToString: (1, 2)
Console.WriteLine(p1.Equals(new Point(1, 2))); // True - השוואה לפי ערך, לא לפי הפניה`}
              />

              <Callout variant="warning">
                אם דורסים <InlineCode>{'Equals'}</InlineCode>, חובה לדרוס גם <InlineCode>{'GetHashCode'}</InlineCode>{' '}
                בהתאמה - שני אובייקטים ש"שווים" חייבים להחזיר אותו hash code, אחרת אוספים כמו{' '}
                <InlineCode>{'Dictionary'}</InlineCode> ו-<InlineCode>{'HashSet'}</InlineCode> יתנהגו בצורה שגויה.
              </Callout>

              <p>
                בונוס מתקדם: החל מ-C# 9 יש <InlineCode>{'record'}</InlineCode> - קיצור שמייצר עבורכם אוטומטית{' '}
                <InlineCode>{'ToString'}</InlineCode>, <InlineCode>{'Equals'}</InlineCode> ו-
                <InlineCode>{'GetHashCode'}</InlineCode> מבוססי-ערך, מתאים במיוחד לאובייקטים ש"מייצגים נתונים":
              </p>
              <CodeBlock
                code={`public record PointRecord(int X, int Y);

var p1 = new PointRecord(1, 2);
var p2 = new PointRecord(1, 2);
Console.WriteLine(p1 == p2); // True - records משווים לפי ערך אוטומטית`}
              />
            </Section>

            {/* ============================ COMPOSITION ============================ */}
            <Section id="composition" icon="🧱" title="הרכבה מול ירושה (Composition vs Inheritance)">
              <p>
                ירושה מבטאת יחס <strong>"הוא סוג של" (is-a)</strong>. <strong>הרכבה (Composition)</strong> מבטאת יחס{' '}
                <strong>"יש לו" (has-a)</strong> - מחלקה מחזיקה כשדה אובייקט ממחלקה אחרת, ומאצילה לו חלק מהעבודה.
              </p>
              <CodeBlock
                code={`// ירושה: Car הוא סוג של Vehicle
public class Vehicle { }
public class Car : Vehicle { }

// הרכבה: Car מכיל Engine - גמיש הרבה יותר
public class Engine
{
    public void Start() => Console.WriteLine("המנוע מותנע");
}

public class Car2
{
    private Engine engine = new Engine(); // Car2 "מכיל" Engine, ולא "הוא סוג של" Engine

    public void Start()
    {
        engine.Start();
        Console.WriteLine("הרכב זז");
    }
}`}
              />
              <p>
                למה זה חשוב? היררכיות ירושה עמוקות מדי נוטות להיות שבירות: שינוי במחלקת בסיס עלול "לשבור" יורשים
                רחוקים בלי כוונה, ולפעמים מוצאים את עצמם יורשים ממחלקה רק כדי לקבל פונקציה אחת, ומקבלים איתה הרבה
                דברים לא רלוונטיים.
              </p>
              <Callout variant="success">
                כלל אצבע ידוע בעולם ה-OOP: <strong>"Favor composition over inheritance"</strong> - העדיפו הרכבה על
                ירושה כשאין יחס is-a חד משמעי וברור. שאלו את עצמכם: "האם X באמת <em>הוא</em> סוג של Y, או שהוא פשוט
                משתמש ב-Y?"
              </Callout>
            </Section>

            {/* ============================ SOLID ============================ */}
            <Section id="solid" icon="⚖️" title="עקרונות SOLID">
              <p>
                SOLID הם חמישה עקרונות עיצוב מוכרים שבונים על ארבעת עמודי ה-OOP, ועוזרים לכתוב קוד מונחה עצמים גמיש
                וקל לתחזוקה. כדאי להכיר אותם, גם אם עוד מוקדם מדי ליישם את כולם בקפדנות:
              </p>
              <CompareTable
                headers={['אות', 'עיקרון', 'הרעיון בקצרה']}
                rows={[
                  ['S', 'Single Responsibility', 'לכל מחלקה צריכה להיות סיבה אחת בלבד להשתנות - אחריות אחת וברורה'],
                  ['O', 'Open/Closed', 'קוד צריך להיות פתוח להרחבה, אך סגור לשינוי - הוסיפו התנהגות דרך ירושה/ממשקים'],
                  ['L', 'Liskov Substitution', 'אפשר להחליף אובייקט בסיס באובייקט יורש בלי לשבור את נכונות התוכנית'],
                  ['I', 'Interface Segregation', 'עדיף כמה ממשקים קטנים וממוקדים על פני ממשק "מנופח" אחד גדול'],
                  ['D', 'Dependency Inversion', 'תלות בהפשטות (ממשקים) ולא במימושים קונקרטיים ספציפיים'],
                ]}
              />
              <Callout variant="info">
                לא חייבים לשנן את SOLID בעל פה בשלב הזה - חשוב יותר להבין שהעקרונות האלה הם פשוט הרחבה טבעית של
                הכמסה, הפשטה, ירושה ופולימורפיזם שכבר למדתם.
              </Callout>
            </Section>

            {/* ============================ PITFALLS ============================ */}
            <Section id="pitfalls" icon="⚠️" title="טעויות נפוצות">
              <p>כמה מלכודות קלאסיות שכדאי להכיר מראש כדי להימנע מהן:</p>
              <div className="space-y-3">
                <Callout variant="warning">
                  <strong>שדות public במקום properties</strong> - מאבדים כל שליטה על תקינות הנתונים ואי אפשר להוסיף
                  ולידציה בעתיד בלי לשבור קוד קיים.
                </Callout>
                <Callout variant="warning">
                  <strong>שכחת virtual/override</strong> - מובילה להסתרה (new) שקטה במקום דריסה אמיתית, ולתוצאות
                  מפתיעות כשקוראים דרך משתנה מטיפוס הבסיס.
                </Callout>
                <Callout variant="warning">
                  <strong>ירושה "כי אפשר"</strong> - יורשים ממחלקה רק כדי לקבל פונקציה אחת נוחה, בלי שיש באמת יחס
                  is-a. עדיפה הרכבה במקרים כאלה.
                </Callout>
                <Callout variant="warning">
                  <strong>חשיפת אוספים פנימיים ישירות</strong> - property מסוג <InlineCode>{'List<T>'}</InlineCode>{' '}
                  שנחשף public מאפשר לכל קוד חיצוני לרוקן או לשנות את האוסף הפנימי ללא בקרה.
                </Callout>
                <Callout variant="warning">
                  <strong>Equals בלי GetHashCode</strong> - שוברת את ההתנהגות של Dictionary ו-HashSet.
                </Callout>
                <Callout variant="warning">
                  <strong>God Class</strong> - מחלקה ש"עושה הכל": גם ניהול נתונים, גם לוגיקה עסקית, גם תצוגה. מפרה את
                  עקרון האחריות היחידה ומקשה מאוד על תחזוקה.
                </Callout>
              </div>
            </Section>

            {/* ============================ FULL EXAMPLE ============================ */}
            <Section id="full-example" icon="🚀" title="דוגמה מלאה - הכל ביחד">
              <p>
                דוגמה מסכמת שמשלבת ממשק, מחלקה אבסטרקטית, ירושה, constructors עם <InlineCode>{'base'}</InlineCode>,
                properties לקריאה בלבד, דריסת מתודות, פולימורפיזם ו-pattern matching - מערכת פשוטה לחישוב שכר עובדים:
              </p>

              <CodeBlock
                code={`using System;
using System.Collections.Generic;

public interface IBonusEligible
{
    decimal CalculateBonus();
}

public abstract class Employee
{
    public string Name { get; }
    protected decimal BaseSalary { get; }

    protected Employee(string name, decimal baseSalary)
    {
        Name = name;
        BaseSalary = baseSalary;
    }

    public abstract decimal CalculateSalary();

    public override string ToString() => $"{Name}: {CalculateSalary():N0} ₪";
}

public class Developer : Employee
{
    public Developer(string name, decimal baseSalary) : base(name, baseSalary) { }

    public override decimal CalculateSalary() => BaseSalary;
}

public class Manager : Employee, IBonusEligible
{
    public List<Employee> TeamMembers { get; } = new List<Employee>();

    public Manager(string name, decimal baseSalary) : base(name, baseSalary) { }

    public decimal CalculateBonus() => TeamMembers.Count * 500;

    public override decimal CalculateSalary() => BaseSalary + CalculateBonus();
}

class Program
{
    static void Main()
    {
        Developer dev = new Developer("יוסי", 15000);
        Manager mgr = new Manager("רונית", 20000);
        mgr.TeamMembers.Add(dev); // רונית מנהלת את יוסי - הרכבה (has-a)

        List<Employee> staff = new List<Employee> { dev, mgr };

        decimal totalPayroll = 0;
        foreach (Employee emp in staff)
        {
            Console.WriteLine(emp); // פולימורפיזם - כל עובד "מדפיס" את עצמו לפי החישוב שלו
            totalPayroll += emp.CalculateSalary();

            if (emp is IBonusEligible bonusEligible) // בדיקה אם רלוונטי בונוס
            {
                Console.WriteLine($"  בונוס: {bonusEligible.CalculateBonus():N0} ₪");
            }
        }

        Console.WriteLine($"סך הכל לתשלום: {totalPayroll:N0} ₪");
    }
}`}
              />

              <CodeBlock
                caption="פלט (Output):"
                code={`יוסי: 15,000 ₪
רונית: 20,500 ₪
  בונוס: 500 ₪
סך הכל לתשלום: 35,500 ₪`}
              />

              <p>שימו לב כמה עקרונות פועלים כאן ביחד באותה דוגמה קטנה:</p>
              <ul className="list-disc mr-6 space-y-1">
                <li>
                  <strong>הפשטה</strong> - <InlineCode>{'Employee'}</InlineCode> אבסטרקטית מגדירה "מה" כל עובד יודע
                  לעשות (<InlineCode>{'CalculateSalary'}</InlineCode>), בלי לקבוע איך בדיוק.
                </li>
                <li>
                  <strong>ירושה</strong> - <InlineCode>{'Developer'}</InlineCode> ו-<InlineCode>{'Manager'}</InlineCode>{' '}
                  יורשים שדות והתנהגות משותפת מ-<InlineCode>{'Employee'}</InlineCode>.
                </li>
                <li>
                  <strong>פולימורפיזם</strong> - הלולאה קוראת ל-<InlineCode>{'CalculateSalary'}</InlineCode> דרך
                  משתנה מטיפוס <InlineCode>{'Employee'}</InlineCode>, וכל עובד מחשב אחרת.
                </li>
                <li>
                  <strong>ממשקים</strong> - רק <InlineCode>{'Manager'}</InlineCode> מממש{' '}
                  <InlineCode>{'IBonusEligible'}</InlineCode>, ונבדק בזמן ריצה עם <InlineCode>{'is'}</InlineCode>.
                </li>
                <li>
                  <strong>הכמסה</strong> - <InlineCode>{'BaseSalary'}</InlineCode> הוא <InlineCode>{'protected'}</InlineCode>{' '}
                  ולא נגיש מבחוץ, רק ליורשים.
                </li>
              </ul>
            </Section>

            {/* ============================ SUMMARY ============================ */}
            <Section id="summary" icon="📋" title="סיכום ומילון מונחים">
              <p>טבלת מונחים מהירה לחזרה לפני תרגול:</p>
              <CompareTable
                headers={['מונח', 'הסבר קצר']}
                rows={[
                  ['Class (מחלקה)', 'תבנית שמגדירה שדות ומתודות עבור אובייקטים מסוג מסוים'],
                  ['Object (אובייקט)', 'מופע קונקרטי שנוצר מתבנית המחלקה באמצעות new'],
                  ['Field (שדה)', 'משתנה ששייך לאובייקט ומחזיק חלק ממצבו'],
                  ['Property', 'חבר שמאפשר גישה מבוקרת (get/set) לנתון, לרוב עם ולידציה'],
                  ['Constructor (בנאי)', 'מתודה מיוחדת שרצה ביצירת האובייקט ומאתחלת את מצבו'],
                  ['Encapsulation (הכמסה)', 'הסתרת מימוש פנימי וחשיפת ממשק מבוקר בלבד'],
                  ['Inheritance (ירושה)', 'מחלקה יורשת שדות והתנהגות ממחלקת בסיס (יחס is-a)'],
                  ['Polymorphism (פולימורפיזם)', 'אותה קריאה, התנהגות שונה בהתאם לסוג האובייקט בזמן ריצה'],
                  ['Abstraction (הפשטה)', 'התמקדות במה שאובייקט עושה, לא באיך הוא עושה זאת'],
                  ['Interface (ממשק)', 'חוזה של מתודות שכל מחלקה מממשת חייבת לספק; אפשר לממש כמה'],
                  ['Abstract class', 'מחלקה שאי אפשר ליצור ממנה אובייקט; יכולה לערבב קוד מוכן וקוד חובה למימוש'],
                  ['virtual / override', 'מסמנים מתודה שמותר/שדורסת התנהגות של מחלקת בסיס'],
                  ['static', 'חבר ששייך למחלקה עצמה ולא לאובייקט ספציפי, משותף לכולם'],
                  ['this / base', 'הפניה לאובייקט הנוכחי / להתייחסות למחלקת הבסיס'],
                  ['Composition (הרכבה)', 'מחלקה מחזיקה אובייקט ממחלקה אחרת כשדה (יחס has-a)'],
                ]}
              />

              <p className="pt-2">
                עכשיו כשיש לכם תמונה מלאה על OOP ב-C#, הדרך הכי טובה לבסס את זה היא תרגול. הנושאים{' '}
                <strong>מחלקות</strong>, <strong>ירושה</strong> ו<strong>פולימורפיזם</strong> נמצאים ב
                <Link to="/path" className="text-blue-600 font-semibold hover:underline">
                  {' '}
                  מסלול הלמידה
                </Link>{' '}
                - זה הזמן לגשת לתרגילים ולחידונים ולנסות בעצמכם.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/exercises"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  <span>לתרגילים</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/quizzes"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  <span>לחידונים</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/playground"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  <span>תרגול חופשי</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  )
}
