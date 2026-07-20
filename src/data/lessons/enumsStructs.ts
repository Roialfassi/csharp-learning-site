import type { Lesson } from '../../types/lesson'

export const enumsStructsLesson: Lesson = {
  topicId: 'enums-structs',
  title: 'Enum ו-Struct: טיפוסים משלכם',
  subtitle: 'הצעד הראשון מעבר לטיפוסים המובנים — קבוצות ערכים קבועות ומבנים של נתונים',
  sections: [
    {
      id: 'why-custom',
      icon: '🎨',
      title: 'למה טיפוסים משלנו?',
      blocks: [
        {
          kind: 'p',
          text: 'עד עכשיו השתמשנו בטיפוסים ש-C# נתנה לנו: `int`, `string`, `bool`. אבל מה אם רוצים משתנה שמייצג יום בשבוע? אפשר לשמור מספר 1-7... אבל מה מונע ממישהו לשים 99? ומה אם רוצים "נקודה" עם X ו-Y — לגרור שני משתנים נפרדים לכל מקום?',
        },
        {
          kind: 'p',
          text: 'הפתרון: להגדיר טיפוסים חדשים משלנו. `enum` לקבוצת ערכים קבועה, ו-`struct` לחבילת נתונים שהולכים ביחד. זה גם החימום המושלם לקראת מחלקות!',
        },
      ],
    },
    {
      id: 'enums',
      icon: '🚦',
      title: 'Enum: קבוצת ערכים עם שמות',
      blocks: [
        {
          kind: 'p',
          text: '`enum` (קיצור של enumeration — מנייה) מגדיר טיפוס שיכול לקבל רק ערכים מרשימה סגורה. מגדירים אותו מחוץ למחלקה:',
        },
        {
          kind: 'code',
          code: `enum TrafficLight
{
    Red,
    Yellow,
    Green
}

class Program
{
    static void Main()
    {
        TrafficLight light = TrafficLight.Red;
        Console.WriteLine(light);   // Red — מודפס השם!

        if (light == TrafficLight.Red)
        {
            Console.WriteLine("עצור!");
        }
    }
}`,
        },
        {
          kind: 'p',
          text: 'מאחורי הקלעים כל ערך הוא מספר: הראשון 0, השני 1 וכן הלאה. אפשר להמיר בשני הכיוונים — שימושי במיוחד לתפריטים ממוספרים:',
        },
        {
          kind: 'code',
          code: `Console.WriteLine((int)TrafficLight.Green);   // 2

int choice = 1;
TrafficLight selected = (TrafficLight)choice; // Yellow`,
        },
        {
          kind: 'callout',
          variant: 'tip',
          text: 'enum + switch = זוג מנצח. הקוד קריא (`case TrafficLight.Red` במקום `case 0`), והקומפיילר מוודא שאתם משתמשים רק בערכים חוקיים.',
        },
      ],
    },
    {
      id: 'structs',
      icon: '📐',
      title: 'Struct: חבילת נתונים',
      blocks: [
        {
          kind: 'p',
          text: '`struct` מאגד כמה שדות שקשורים זה לזה לטיפוס אחד. נקודה במרחב היא הדוגמה הקלאסית: במקום `x1, y1, x2, y2...` — פשוט `Point`:',
        },
        {
          kind: 'code',
          code: `struct Point
{
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        Point p;
        p.X = 3;
        p.Y = 7;
        Console.WriteLine($"({p.X},{p.Y})");   // (3,7)
    }
}`,
        },
        {
          kind: 'list',
          items: [
            'השדות מוגדרים עם `public` כדי שיהיו נגישים מבחוץ',
            'ניגשים לשדה עם נקודה: `p.X`',
            'struct עובר למתודות כמו כל פרמטר, ואפשר ליצור ממנו מערכים: `Point[] points`',
          ],
        },
      ],
    },
    {
      id: 'struct-methods',
      icon: '🛠️',
      title: 'מתודות בתוך struct',
      blocks: [
        {
          kind: 'p',
          text: 'struct יכול להכיל גם מתודות שעובדות על השדות שלו. שימו לב: בלי `static` — המתודה שייכת לכל נקודה ספציפית, וניגשת לשדות שלה ישירות:',
        },
        {
          kind: 'code',
          code: `struct Point
{
    public int X;
    public int Y;

    public void Print()
    {
        Console.WriteLine($"({X},{Y})");
    }
}

// שימוש:
Point p;
p.X = 5;
p.Y = 2;
p.Print();   // (5,2) — הנקודה מדפיסה את עצמה!`,
        },
        {
          kind: 'callout',
          variant: 'info',
          text: 'מרגישים את זה? נתונים + התנהגות באותה חבילה. זה בדיוק הרעיון הגדול של תכנות מונחה עצמים — ובמודול מחלקות ניקח אותו עד הסוף.',
        },
      ],
    },
    {
      id: 'when-what',
      icon: '⚖️',
      title: 'מתי enum, מתי struct?',
      blocks: [
        {
          kind: 'table',
          headers: ['אם...', 'אז...'],
          rows: [
            ['יש רשימה סגורה של אפשרויות (ימים, כיוונים, מצבי משחק)', '`enum`'],
            ['כמה ערכים תמיד הולכים ביחד (נקודה, צבע RGB, תאריך)', '`struct`'],
            ['צריך גם התנהגות מורכבת, ירושה, ואובייקטים "חיים"', '`class` — המודול הבא בקרוב!'],
          ],
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
            '`enum` = טיפוס עם רשימת ערכים קבועה; כל ערך הוא בעצם מספר (מ-0)',
            'המרות: `(int)Color.Red` ובחזרה `(Color)2`',
            '`struct` = חבילת שדות (ולפעמים מתודות) תחת שם אחד',
            'ניגשים לשדות ולמתודות עם נקודה',
            'שניהם הופכים קוד עם "מספרים קסומים" לקוד קריא ובטוח',
          ],
        },
        {
          kind: 'callout',
          variant: 'success',
          text: 'בפרויקט תבנו דף דמות למשחק תפקידים — עם enum למקצוע הדמות ו-struct לדמות עצמה!',
        },
      ],
    },
  ],
}
