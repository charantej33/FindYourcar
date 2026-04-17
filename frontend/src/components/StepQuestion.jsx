export default function StepQuestion({ stepNum, totalSteps, question, options, onSelect, isLoading }) {
  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(stepNum / totalSteps) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">STEP {stepNum} OF {totalSteps}</span>
      </div>

      <div className="quiz-content">
        <h2 className="quiz-question">{question}</h2>

        <div className="quiz-options">
          {options.map((option, idx) => (
            <button
              key={idx}
              className="quiz-option-btn"
              onClick={() => onSelect(option.value)}
              disabled={isLoading}
            >
              <span className="option-emoji">{option.emoji}</span>
              <div className="option-text">
                <div className="option-title">{option.label}</div>
                {option.subtitle && (
                  <div className="option-subtitle">{option.subtitle}</div>
                )}
              </div>
              <span className="option-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
