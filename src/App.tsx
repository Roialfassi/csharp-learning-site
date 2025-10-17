import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ConsolePlayground from './pages/ConsolePlayground'
import Exercises from './pages/Exercises'
import ExerciseDetail from './pages/ExerciseDetail'
import Quizzes from './pages/Quizzes'
import QuizDetail from './pages/QuizDetail'
import LearningPath from './pages/LearningPath'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/path" element={<LearningPath />} />
          <Route path="/playground" element={<ConsolePlayground />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<QuizDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
