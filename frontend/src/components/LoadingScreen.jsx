import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    { icon: '🔍', text: 'Analyzing your preferences...' },
    { icon: '🚗', text: 'Matching cars to your needs...' },
    { icon: '⭐', text: 'Ranking best options...' },
    { icon: '✅', text: 'Almost ready!' },
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90; // Cap at 90% until actual load
        return prev + Math.random() * 8 + 2;
      });
    }, 400);

    const stepTimer = setInterval(() => {
      setStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <div className="loading-screen">
      {/* Background particles */}
      <div className="loading-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="loading-card">
        {/* Animated car icon */}
        <div className="loading-car-icon">
          <div className="car-glow" />
          <span className="car-emoji">🏎️</span>
        </div>

        <h2 className="loading-main-title">Best Recommended Cars for You</h2>
        <p className="loading-desc">We're curating the perfect matches based on your preferences</p>

        {/* Progress bar */}
        <div className="loading-progress-wrapper">
          <div className="loading-progress-track">
            <div
              className="loading-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="loading-progress-percent">{Math.round(Math.min(progress, 99))}%</span>
        </div>

        {/* Steps */}
        <div className="loading-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`loading-step ${i < stepIndex ? 'done' : ''} ${i === stepIndex ? 'active' : ''} ${i > stepIndex ? 'pending' : ''}`}
            >
              <span className="step-icon">{i < stepIndex ? '✓' : step.icon}</span>
              <span className="step-text">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
