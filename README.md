# 🎓 C# Learning Platform

A comprehensive, interactive web-based platform for learning C# programming from basics to advanced Object-Oriented Programming concepts. Built with React, TypeScript, and Tailwind CSS with full Hebrew language support and RTL layout.

**[English](#english) | [עברית](#hebrew)**

---

## English

### 📋 Overview

C# Learning Platform is an interactive educational platform designed for students (ages 12-18) to learn C# programming through:

- 💻 **Interactive Code Playground** - Write and execute C# code in real-time
- 📝 **Structured Exercises** - 10+ beginner exercises with automated testing
- 🧠 **Multiple Choice Quizzes** - 20+ questions to test understanding
- 📚 **Organized Learning Path** - 8 topics from basics to OOP
- 📊 **Progress Dashboard** - Track your learning journey with statistics
- 🏆 **Achievement System** - Earn badges as you progress

### ✨ Key Features

- ✅ **Real-time Code Execution** - Powered by Judge0 API for C# compilation
- ✅ **Automated Testing** - Instant feedback on exercise solutions
- ✅ **Progressive Hints** - 3-level hint system for each exercise
- ✅ **Persistent Storage** - Auto-save code and progress using localStorage
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Full Hebrew Support** - RTL layout with Hebrew fonts
- ✅ **Topic-based Navigation** - Sidebar showing all content organized by topic
- ✅ **Visual Progress Tracking** - See your progress across all topics

### 🚀 Quick Start

#### Prerequisites

- **Node.js** v18 or higher
- **npm** v10 or higher
- A modern web browser (Chrome, Firefox, Safari, Edge)

#### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd csharp-learning-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:5173`
   - If not, manually navigate to that URL

#### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 📖 How to Use

#### 1. **Landing Page** (`/`)
- Overview of the platform
- Quick access to main features
- Information about available learning paths

#### 2. **Console Playground** (`/playground`)
- Write C# code freely in the Monaco Editor
- Click **"הרץ" (Run)** to execute your code
- See real-time output and errors
- Save code automatically to browser storage
- Download your code as `.cs` files

#### 3. **Exercises** (`/exercises`)
- Browse 10+ beginner exercises organized by topic
- Click on an exercise to open the editor
- Write your solution
- Click **"הרץ בדיקות" (Run Tests)** to validate
- Get instant feedback on test results
- Use **"רמז" (Hints)** if stuck
- View the **"הראה פתרון" (Show Solution)** after attempts

#### 4. **Quizzes** (`/quizzes`)
- Take 2 comprehensive quizzes (20 questions total)
- Multiple choice format with code snippets
- Get immediate feedback after each answer
- See detailed explanations for correct/incorrect answers
- View your score and performance summary

#### 5. **Learning Path** (`/path`)
- Visual overview of all 8 learning topics
- See your progress per topic
- Understand the recommended learning sequence

#### 6. **Dashboard** (`/dashboard`)
- Overall progress statistics
- Performance by topic
- Recent activity feed
- Quick action buttons
- Achievement tracking

### 🧪 Testing Locally

#### Test Exercise Functionality

1. **Navigate to Exercises page**
   ```
   http://localhost:5173/exercises
   ```

2. **Start Exercise 1 (Hello World)**
   - Click on any exercise
   - You'll see the starter code in the editor
   - Try modifying the code and clicking "הרץ בדיקות"

3. **Example Test Scenario**
   - Exercise: Print "Hello World"
   - Solution code:
     ```csharp
     using System;

     class Program
     {
         static void Main()
         {
             Console.WriteLine("Hello World");
         }
     }
     ```
   - Click "הרץ בדיקות" to run tests
   - You should see "✅ Test 1: Passed"

#### Test Quiz Functionality

1. **Navigate to Quizzes**
   ```
   http://localhost:5173/quizzes
   ```

2. **Start Quiz 1 (Basics)**
   - Answer multiple choice questions
   - Click "הבאה" (Next) to proceed
   - Click "סיים" (Finish) at the end

3. **View Results**
   - See your score
   - Read detailed explanations
   - Review all your answers

#### Test Progress Tracking

1. **Complete an Exercise**
   - Finish any exercise (get all tests passing)
   - Note the checkmark appears next to the exercise

2. **Check Dashboard**
   - Go to `/dashboard`
   - You should see updated progress statistics
   - Exercise count should increase

3. **Verify Storage**
   - Open browser DevTools (F12)
   - Go to **Application** → **Local Storage**
   - Look for keys starting with `csharp_learning_`
   - These store your progress

### 📁 Project Structure

```
csharp-learning-site/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation bar
│   │   └── TopicSidebar.tsx        # Topic navigation sidebar
│   ├── pages/
│   │   ├── LandingPage.tsx         # Home page
│   │   ├── Dashboard.tsx           # Progress dashboard
│   │   ├── ConsolePlayground.tsx   # Code editor & runner
│   │   ├── Exercises.tsx           # Exercise list
│   │   ├── ExerciseDetail.tsx      # Single exercise view
│   │   ├── Quizzes.tsx             # Quiz list
│   │   ├── QuizDetail.tsx          # Single quiz view
│   │   └── LearningPath.tsx        # Learning path visualization
│   ├── data/
│   │   ├── exercises.ts            # Exercise definitions (10 exercises)
│   │   ├── quizzes.ts              # Quiz definitions (20 questions)
│   │   └── topics.ts               # Topic definitions (8 topics)
│   ├── types/
│   │   ├── exercise.ts             # Exercise type definitions
│   │   └── quiz.ts                 # Quiz type definitions
│   ├── utils/
│   │   ├── codeExecutor.ts         # Judge0 API integration
│   │   ├── storage.ts              # localStorage helper
│   │   └── exerciseValidator.ts    # Test validation logic
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tailwind styles
├── public/                         # Static files
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
└── README.md                       # This file
```

### 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Styling with RTL support
- **Monaco Editor** - Code editor component
- **Judge0 API** - C# code compilation and execution
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

### 📚 Content Structure

#### Topics (8 Total)
1. **יסודות (Basics)** - Console I/O, variables, data types
2. **תנאים (Conditions)** - if/else, switch, boolean logic
3. **לולאות (Loops)** - for, while, foreach
4. **מערכים (Arrays)** - Declaration, access, iteration
5. **מתודות (Methods)** - Definition, parameters, returns
6. **מחלקות (Classes)** - OOP basics, properties, constructors
7. **ירושה (Inheritance)** - Base classes, method overriding
8. **פולימורפיזם (Polymorphism)** - Virtual methods, interfaces

#### Exercises (10 Total)
- Exercise 1-5: Basics (printing, variables, conditions, loops, arithmetic)
- Exercise 6-10: Intermediate (while loops, foreach, arrays, debugging)

#### Quizzes (2 Total)
- Quiz 1: Basics (10 questions on fundamentals)
- Quiz 2: Conditions (10 questions on conditional logic)

### 🔄 How Code Execution Works

1. **User writes C# code** in the Monaco Editor
2. **Clicks "הרץ" button** to execute
3. **Code is sent to Judge0 API** for compilation
4. **Judge0 compiles and runs** the C# code
5. **Results are polled** from Judge0 (up to 10 seconds)
6. **Output is displayed** in the console panel
7. **Errors are shown** with Hebrew explanations

### 💾 Data Storage

All progress is stored in the browser's **localStorage**:

- `csharp_learning_playground_code` - Playground code
- `csharp_learning_exercise_X_code` - Exercise code
- `csharp_learning_completed_exercises` - Completed exercise IDs
- `csharp_learning_quiz_progress` - Quiz scores
- `csharp_learning_preferences` - User preferences

**Note:** Data persists only in the current browser on this device. Clear browser data to reset progress.

### 🚀 Deployment

#### Deploy to Vercel (Recommended)

```bash
# Build the project
npm run build

# Push to GitHub
git push origin main

# Connect to Vercel and auto-deploy
```

The project automatically builds and deploys on push to main branch.

#### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### 🔮 Future Enhancements

- 🗄️ Backend with database for user accounts
- 🔐 User authentication and profiles
- 📧 Email notifications and progress reports
- 🏅 Global leaderboard
- 👥 Social features (friend groups, competitions)
- 🎓 Teacher dashboard for managing classes
- 📱 Mobile app (React Native)
- 🎥 Video tutorials for each topic
- 🤖 AI-powered hints and suggestions

### 📝 License

This project is open source and available under the MIT License.

### 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new exercises or quizzes
- Improve documentation
- Add new features

---

## עברית

### 📋 סקירה כללית

פלטפורמת לימוד C# היא פלטפורמה חינוכית אינטראקטיבית המעוצבת לסטודנטים (בגילאים 12-18) ללמוד תכנות C# דרך:

- 💻 **קונסול קוד אינטראקטיבי** - כתוב והרץ קוד C# בזמן אמת
- 📝 **תרגילים מובנים** - 10+ תרגילים לתחילים עם בדיקות אוטומטיות
- 🧠 **חידונים מרובי ברירה** - 20+ שאלות לבדיקת הבנה
- 📚 **מסלול למידה מאורגן** - 8 נושאים מיסודות לOOP
- 📊 **לוח מחוונים** - עקוב אחר המסע שלך עם סטטיסטיקות
- 🏆 **מערכת הישגים** - זכו בתגים כשאתם מתקדמים

### ✨ תכונות עיקריות

- ✅ **הרצת קוד בזמן אמת** - מופעלת ע"י Judge0 API
- ✅ **בדיקות אוטומטיות** - משוב מיידי על פתרונות
- ✅ **מערכת רמזים מדורגת** - 3 רמות רמזים לכל תרגיל
- ✅ **אחסון קבוע** - שמירה אוטומטית של קוד והתקדמות
- ✅ **עיצוב רספונסיבי** - פועל על שולחן, טבלט וסלולר
- ✅ **תמיכה מלאה בעברית** - פריסה RTL עם גופנים עברים
- ✅ **ניווט מבוסס נושאים** - סידבר המציג את כל התוכן מאורגן לפי נושא
- ✅ **עקיבה אחר התקדמות ויזואלית** - ראה את ההתקדמות שלך בכל הנושאים

### 🚀 התחלה מהירה

#### דרישות מוקדמות

- **Node.js** גרסה 18 ומעלה
- **npm** גרסה 10 ומעלה
- דפדפן מודרני (Chrome, Firefox, Safari, Edge)

#### התקנה

1. **שכפל את הריפוזיטורי**
   ```bash
   git clone <repository-url>
   cd csharp-learning-site
   ```

2. **התקן חבילות**
   ```bash
   npm install
   ```

3. **הפעל את שרת ההדevelopment**
   ```bash
   npm run dev
   ```

4. **פתח בדפדפן**
   - האפליקציה תפתח אוטומטית ב- `http://localhost:5173`
   - אם לא, עבור ידנית לכתובת זו

#### בנייה עבור Production

```bash
npm run build
```

זה יוצר בנייה מותאמת ל-production בתיקייה `dist/`.

### 📖 כיצד להשתמש

#### 1. **עמוד הבית** (`/`)
- סקירה כללית של הפלטפורמה
- גישה מהירה לתכונות עיקריות
- מידע על מסלולי למידה זמינים

#### 2. **קונסול תרגול** (`/playground`)
- כתוב קוד C# בחופשיות בעורך Monaco
- לחץ על **"הרץ"** כדי להריץ את הקוד
- ראה פלט וטעויות בזמן אמת
- קוד נשמר אוטומטית לאחסון הדפדפן
- הורד את הקוד שלך כקבצי `.cs`

#### 3. **תרגילים** (`/exercises`)
- עיין ב-10+ תרגילים לתחילים מאורגנים לפי נושא
- לחץ על תרגיל כדי לפתוח את העורך
- כתוב את הפתרון שלך
- לחץ על **"הרץ בדיקות"** כדי לאמת
- קבל משוב מיידי על תוצאות הבדיקות
- השתמש ב- **"רמז"** אם קרא קשיות
- צפה ב- **"הראה פתרון"** לאחר ניסיונות

#### 4. **חידונים** (`/quizzes`)
- עשו 2 חידונים מקיפים (20 שאלות בסך הכל)
- פורמט בחירה מרובה עם מתעדי קוד
- קבל משוב מיידי לאחר כל תשובה
- ראה הסברים מפורטים לתשובות נכונות/שגויות
- צפה בציון ובסיכום הביצועים שלך

#### 5. **מסלול למידה** (`/path`)
- סקירה ויזואלית של כל 8 נושאי הלימוד
- ראה את ההתקדמות שלך לפי נושא
- בן את סדר הלימוד המומלץ

#### 6. **לוח מחוונים** (`/dashboard`)
- סטטיסטיקות התקדמות כוללות
- ביצועים לפי נושא
- הזנת פעילות אחרונה
- כפתורי פעולה מהירה
- עקיבת הישגים

### 🧪 בדיקה מקומית

#### בדוק את פונקציונליות התרגילים

1. **עבור לעמוד התרגילים**
   ```
   http://localhost:5173/exercises
   ```

2. **התחל תרגיל 1 (Hello World)**
   - לחץ על כל תרגיל
   - תראה את קוד ההתחלה בעורך
   - נסה לשנות את הקוד ולחץ על "הרץ בדיקות"

3. **תרחיש בדיקה לדוגמה**
   - תרגיל: הדפס "Hello World"
   - קוד הפתרון:
     ```csharp
     using System;

     class Program
     {
         static void Main()
         {
             Console.WriteLine("Hello World");
         }
     }
     ```
   - לחץ על "הרץ בדיקות" כדי להריץ בדיקות
   - אתה צריך לראות "✅ בדיקה 1: עברה"

#### בדוק את פונקציונליות החידונים

1. **עבור לחידונים**
   ```
   http://localhost:5173/quizzes
   ```

2. **התחל חידון 1 (יסודות)**
   - ענו על שאלות בחירה מרובה
   - לחץ על "הבאה" כדי להמשיך
   - לחץ על "סיים" בסוף

3. **צפה בתוצאות**
   - ראה את הציון שלך
   - קרא הסברים מפורטים
   - סקור את כל התשובות שלך

#### בדוק עקיבת התקדמות

1. **השלם תרגיל**
   - סיים כל תרגיל (קבל את כל הבדיקות עוברות)
   - שים לב לסימן הביקורת שמופיע ליד התרגיל

2. **בדוק לוח מחוונים**
   - עבור ל- `/dashboard`
   - אתה צריך לראות סטטיסטיקות התקדמות מעודכנות
   - מספר התרגילים צריך להגדל

3. **אמת אחסון**
   - פתח DevTools בדפדפן (F12)
   - עבור ל- **Application** → **Local Storage**
   - חפש מפתחות שמתחילים ב- `csharp_learning_`
   - אלו אחסנים את ההתקדמות שלך

### 📁 מבנה הפרויקט

```
csharp-learning-site/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # בר הניווט
│   │   └── TopicSidebar.tsx        # סידבר ניווט נושאים
│   ├── pages/
│   │   ├── LandingPage.tsx         # עמוד הבית
│   │   ├── Dashboard.tsx           # לוח מחוונים
│   │   ├── ConsolePlayground.tsx   # עורך קוד וריץ
│   │   ├── Exercises.tsx           # רשימת תרגילים
│   │   ├── ExerciseDetail.tsx      # תצוגת תרגיל בודד
│   │   ├── Quizzes.tsx             # רשימת חידונים
│   │   ├── QuizDetail.tsx          # תצוגת חידון בודד
│   │   └── LearningPath.tsx        # ויזואליזציית מסלול למידה
│   ├── data/
│   │   ├── exercises.ts            # הגדרות תרגילים (10 תרגילים)
│   │   ├── quizzes.ts              # הגדרות חידונים (20 שאלות)
│   │   └── topics.ts               # הגדרות נושאים (8 נושאים)
│   ├── types/
│   │   ├── exercise.ts             # הגדרות סוגי תרגילים
│   │   └── quiz.ts                 # הגדרות סוגי חידונים
│   ├── utils/
│   │   ├── codeExecutor.ts         # שילוב Judge0 API
│   │   ├── storage.ts              # עוזר localStorage
│   │   └── exerciseValidator.ts    # הגיון אימות בדיקות
│   ├── App.tsx                     # רכיב האפליקציה הראשי
│   ├── main.tsx                    # נקודת הכניסה
│   └── index.css                   # סגנונות Tailwind
├── public/                         # קבצים סטטיים
├── vite.config.ts                  # תצורת Vite
├── tailwind.config.js              # תצורת Tailwind
├── tsconfig.json                   # תצורת TypeScript
├── package.json                    # תלויות
└── README.md                       # קובץ זה
```

### 🛠️ טכנולוגיות בשימוש

- **React 19** - ממשק משתמש
- **TypeScript** - JavaScript בטוח בסוגים
- **Tailwind CSS v4** - סגנון עם תמיכה RTL
- **Monaco Editor** - רכיב עורך קוד
- **Judge0 API** - קומפילציה והרצה של קוד C#
- **React Router** - ניתוב צד-לקוח
- **Lucide React** - ספריית סמלים
- **Vite** - כלי בנייה ושרת פיתוח

### 📚 מבנה התוכן

#### נושאים (8 בסך הכל)
1. **יסודות** - קלט/פלט, משתנים, סוגי נתונים
2. **תנאים** - if/else, switch, לוגיקה בוליאנית
3. **לולאות** - for, while, foreach
4. **מערכים** - הצהרה, גישה, איטרציה
5. **מתודות** - הגדרה, פרמטרים, החזרות
6. **מחלקות** - יסודות OOP, properties, constructors
7. **ירושה** - מחלקות בסיס, override של מתודות
8. **פולימורפיזם** - virtual methods, interfaces

#### תרגילים (10 בסך הכל)
- תרגילים 1-5: יסודות (הדפסה, משתנים, תנאים, לולאות, חשבון)
- תרגילים 6-10: ביניים (לולאות while, foreach, מערכים, ניפוי באגים)

#### חידונים (2 בסך הכל)
- חידון 1: יסודות (10 שאלות על יסודות)
- חידון 2: תנאים (10 שאלות על לוגיקה מותנית)

### 🔄 איך בדיוק עובדת הרצת הקוד

1. **משתמש כותב קוד C#** בעורך Monaco
2. **לוחץ על כפתור "הרץ"** כדי להריץ
3. **הקוד נשלח ל-Judge0 API** לקומפילציה
4. **Judge0 מתרגם ומריץ** את קוד ה-C#
5. **תוצאות נספרות** מ-Judge0 (עד 10 שניות)
6. **פלט מוצג** בפנל הקונסול
7. **טעויות מוצגות** עם הסברים בעברית

### 💾 אחסון נתונים

כל ההתקדמות מאוחסנת ב- **localStorage** של הדפדפן:

- `csharp_learning_playground_code` - קוד התרגול
- `csharp_learning_exercise_X_code` - קוד התרגיל
- `csharp_learning_completed_exercises` - IDs של תרגילים שהושלמו
- `csharp_learning_quiz_progress` - ציוני חידונים
- `csharp_learning_preferences` - העדפות משתמש

**הערה:** נתונים קיימים רק בדפדפן הנוכחי על התקן זה. נקה נתוני דפדפן כדי לאפס התקדמות.

### 🚀 פריסה

#### פרוס ל-Vercel (מומלץ)

```bash
# בנה את הפרויקט
npm run build

# דחוף ל-GitHub
git push origin main

# התחבר ל-Vercel וממפ"ס אוטומטית
```

הפרויקט בונה ופורסם אוטומטית בדחיפה לברנץ' הראשי.

#### פרוס ל-Netlify

```bash
npm run build
# גרור ותזרוק את תיקייה ה-'dist' ל-Netlify
```

### 🔮 שיפורים עתידיים

- 🗄️ Backend עם מסד נתונים לחשבונות משתמשים
- 🔐 אימות משתמשים וחשבונות אישיים
- 📧 הודעות דוא"ל ודוחות התקדמות
- 🏅 טבלת מובילים גלובלית
- 👥 תכונות חברתיות (קבוצות חברים, תחרויות)
- 🎓 דשבורד מורים לניהול כיתות
- 📱 אפליקציה לנייד (React Native)
- 🎥 סרטוני הדרכה לכל נושא
- 🤖 רמזים מופעלים בחכמות בינלאומיות

### 📝 רישיון

פרויקט זה הוא קוד פתוח וזמין תחת רישיון MIT.

### 🤝 תרומה

תרומות מוזמנות! אתה יכול:
- דווח על באגים
- הצע תרגילים או חידונים חדשים
- שפר תיעוד
- הוסף תכונות חדשות

---

**Built with ❤️ for students learning C# | בנוי עם ❤️ לסטודנטים הלומדים C#**
