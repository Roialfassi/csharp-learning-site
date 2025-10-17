import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ConsolePlayground from './pages/ConsolePlayground'
import Exercises from './pages/Exercises'
import Quizzes from './pages/Quizzes'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/playground" element={<ConsolePlayground />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
