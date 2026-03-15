import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Landing from './pages/Landing'
import { LangProvider } from './context/LangContext'

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/:appName/privacy" element={<Privacy />} />
              <Route path="/:appName" element={<Landing />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LangProvider>
  )
}

export default App