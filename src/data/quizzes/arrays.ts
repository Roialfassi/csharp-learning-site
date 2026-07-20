import type { Quiz } from '../../types/quiz'

// מערכים
export const arraysQuizzes: Quiz[] = [
  {
    id: 8,
    title: 'מערכים - חלק 1',
    description: 'הגדרה, גישה, ו-iteration על מערכים',
    topic: 'מערכים',
    questions: [
      {
        id: 1,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] numbers = {10, 20, 30};
Console.WriteLine(numbers[0]);`,
        options: ['0', '10', '20', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 10. numbers[0] הוא האלמנט הראשון.',
      },
      {
        id: 2,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = {5, 15, 25};
Console.WriteLine(arr[1]);`,
        options: ['1', '5', '15', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 15. arr[1] הוא האלמנט השני.',
      },
      {
        id: 3,
        type: 'בחר תשובה',
        question: 'מה יהיה אורך מערך עם 5 אלמנטים?',
        options: ['4', '5', '6', 'בלתי מוגדר'],
        correctAnswer: 1,
        explanation: 'התשובה היא 5.',
      },
      {
        id: 4,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
Console.WriteLine(arr.Length);`,
        options: ['0', '1', '3', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 3. arr.Length מחזירה את גודל המערך.',
      },
      {
        id: 5,
        type: 'בחר תשובה',
        question: 'מה אינדקס האלמנט הראשון?',
        options: ['0', '1', '-1', 'פירסט'],
        correctAnswer: 0,
        explanation: 'התשובה היא 0. אינדקסים מתחילים מ-0.',
      },
      {
        id: 6,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `string[] fruits = {"apple", "banana", "cherry"};
Console.WriteLine(fruits[2]);`,
        options: ['apple', 'banana', 'cherry', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא "cherry". fruits[2] הוא האלמנט השלישי.',
      },
      {
        id: 7,
        type: 'בחר תשובה',
        question: 'מה יקרה אם נגשנו לאינדקס שאינו קיים?',
        options: ['יודפס 0', 'יודפס null', 'שגיאת IndexOutOfRangeException', 'כלום'],
        correctAnswer: 2,
        explanation: 'התשובה היא "שגיאת IndexOutOfRangeException".',
      },
      {
        id: 8,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] numbers = {1, 2, 3, 4, 5};
foreach (int num in numbers)
{
    Console.WriteLine(num);
}`,
        options: ['1 2 3 4 5', '1\n2\n3\n4\n5', '0 1 2 3 4', 'שגיאה'],
        correctAnswer: 1,
        explanation: 'התשובה היא 1 2 3 4 5 בשורות נפרדות.',
      },
      {
        id: 9,
        type: 'מה יהיה הפלט',
        question: 'מה יהיה הפלט של הקוד הבא?',
        code: `int[] arr = {10, 20, 30, 40};
Console.WriteLine(arr[arr.Length - 1]);`,
        options: ['10', '30', '40', 'שגיאה'],
        correctAnswer: 2,
        explanation: 'התשובה היא 40. arr.Length - 1 הוא האינדקס של האלמנט האחרון.',
      },
      {
        id: 10,
        type: 'בחר תשובה',
        question: 'איך יוצרים מערך ריק של 5 אלמנטים?',
        options: [
          'int[] arr = {};',
          'int[] arr = new int[5];',
          'int[] arr = {5};',
          'int[] arr = 5;',
        ],
        correctAnswer: 1,
        explanation: 'התשובה היא \'int[] arr = new int[5];\'.',
      },
    ],
  },
]
