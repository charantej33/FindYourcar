import { useState } from 'react'
import './index.css'
import QuizPage from './pages/QuizPage'

function App() {
  const [page, setPage] = useState('landing')

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          Car<span className="brand-red">Dekho</span>
        </div>
        <span className="navbar-tag">
          <span className="pulse-dot"></span>
          AI Powered
        </span>
      </nav>

      {/* Landing Page */}
      {page === 'landing' && (
        <>
          <section className="hero">
            <div className="hero-badge">
              <span className="dot"></span>
              AI-Powered Car Finder
            </div>

            <h1 className="hero-title">
              Find your <span className="highlight">dream</span> car
              <br />in 60 seconds
            </h1>

            <p className="hero-subtitle">
              Answer 4 quick questions. We match you with the right car
              for your budget, lifestyle, and city.
            </p>

            <button
              className="hero-cta"
              id="find-my-car-btn"
              onClick={() => setPage('quiz')}
            >
              Find My Car
              <span className="arrow">→</span>
            </button>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">35<span className="red">+</span></div>
                <div className="stat-label">Cars Analyzed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number"><span className="red">4</span></div>
                <div className="stat-label">Quick Questions</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60<span className="red">s</span></div>
                <div className="stat-label">To Your Match</div>
              </div>
            </div>
          </section>

          <div className="features-strip">
            <div className="feature-chip">
              <span className="icon">🏎️</span>
              <span className="label">Personalized picks</span>
            </div>
            <div className="feature-chip">
              <span className="icon">🤖</span>
              <span className="label">AI-powered reasoning</span>
            </div>
            <div className="feature-chip">
              <span className="icon">💰</span>
              <span className="label">Budget-matched</span>
            </div>
            <div className="feature-chip">
              <span className="icon">🛡️</span>
              <span className="label">Safety rated</span>
            </div>
          </div>

          <footer className="footer">
            © 2026 CarDekho · Prices are indicative · V1.0
          </footer>
        </>
      )}

      {page === 'quiz' && (
        <QuizPage onBack={() => setPage('landing')} />
      )}
    </div>
  )
}

export default App
