import { useState } from 'react';
import StepQuestion from '../components/StepQuestion';
import LoadingScreen from '../components/LoadingScreen';
import ResultsPage from './ResultsPage';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const QUIZ_QUESTIONS = [
  {
    id: 'budget',
    question: "What's your budget?",
    subtitle: 'Your comfort range — the most important filter.',
    options: [
      { emoji: '🌱', label: '₹5–8 Lakhs', subtitle: 'Entry-level, first car', value: '5-8' },
      { emoji: '🚗', label: '₹8–12 Lakhs', subtitle: 'Sweet spot, great value', value: '8-12' },
      { emoji: '⚡', label: '₹12–20 Lakhs', subtitle: 'Feature-rich midrange', value: '12-20' },
      { emoji: '🏆', label: '₹20L+', subtitle: 'Premium SUV territory', value: '20+' },
    ],
  },
  {
    id: 'fuelType',
    question: 'What fuel type do you prefer?',
    subtitle: 'Engine power and running costs depend on this.',
    options: [
      { emoji: '⛽', label: 'Petrol', subtitle: 'Affordable & reliable', value: 'Petrol' },
      { emoji: '🛢️', label: 'Diesel', subtitle: 'Long-range efficiency', value: 'Diesel' },
      { emoji: '🔋', label: 'Electric', subtitle: 'Zero emissions', value: 'Electric' },
      { emoji: '🌿', label: 'Hybrid', subtitle: 'Best of both worlds', value: 'Hybrid' },
    ],
  },
  {
    id: 'useCase',
    question: 'What will you use it for?',
    subtitle: 'Different needs, different cars.',
    options: [
      { emoji: '🏙️', label: 'City commute', subtitle: 'Daily traffic, parking ease', value: 'City commute' },
      { emoji: '👨‍👩‍👧‍👦', label: 'Family trips', subtitle: 'Comfort & space', value: 'Family' },
      { emoji: '🏔️', label: 'Off-road', subtitle: 'Adventure ready', value: 'Off-road' },
      { emoji: '🛣️', label: 'Long highway', subtitle: 'Fuel efficiency & comfort', value: 'Long highway' },
    ],
  },
  {
    id: 'cityType',
    question: 'What type of city do you live in?',
    subtitle: 'City terrain shapes the ideal car.',
    options: [
      { emoji: '🌆', label: 'Metro', subtitle: 'Heavy traffic, cramped roads', value: 'Metro' },
      { emoji: '🏘️', label: 'Tier-2', subtitle: 'Moderate traffic', value: 'Tier-2' },
      { emoji: '🛣️', label: 'Highway-heavy', subtitle: 'Good roads, long distances', value: 'Highway heavy' },
    ],
  },
];

export default function QuizPage({ onBack }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelect = async (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };
    setAnswers(newAnswers);

    // If this is the last question, submit the quiz
    if (currentStep === QUIZ_QUESTIONS.length - 1) {
      await submitQuiz(newAnswers);
    } else {
      // Move to next question
      setCurrentStep(currentStep + 1);
    }
  };

  const submitQuiz = async (finalAnswers) => {
    setIsLoading(true);
    setError(null);

    try {
      const payload = {
        budget: finalAnswers.budget,
        fuelType: finalAnswers.fuelType,
        useCase: finalAnswers.useCase,
        cityType: finalAnswers.cityType,
      };

      console.log('Sending request:', payload);

      const response = await fetch(`${API_URL}/api/recommend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Recommendations:', data);
      setResults(data.recommendations || []);
      setIsLoading(false);
    } catch (err) {
      console.warn('Backend unavailable, using mock data for demonstration.', err);
      // Mock data fallback to demonstrate the UI
      setTimeout(() => {
        setResults([
          {
            id: 1,
            name: "Grand Vitara",
            brand: "Maruti Suzuki",
            price: 10.70,
            fuelType: "Hybrid",
            useCase: "Long highway",
            mileage: "27.97 kmpl",
            safetyRating: 5.0,
            pros: "Strong hybrid SUV with class-leading 27.97 kmpl mileage, AllGrip AWD, and panoramic sunroof.",
            imageUrl: "https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/grand-vitara-exterior-right-front-three-quarter.jpeg",
            aiReasoning: "Perfect value match for your budget, excellent highway fuel economy."
          },
          {
            id: 2,
            name: "Nexon EV",
            brand: "Tata",
            price: 14.74,
            fuelType: "Electric",
            useCase: "City commute",
            mileage: "312 km/charge",
            safetyRating: 5.0,
            pros: "India's best-selling EV with 312 km range, fast charging support, and zero tailpipe emissions.",
            imageUrl: "https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/nexon-ev-exterior-right-front-three-quarter.jpeg",
            aiReasoning: "Great cost savings on daily commutes with zero emissions."
          }
        ]);
        setIsLoading(false);
      }, 5000); // 5-second simulated delay to show the loading screen
    }
  };

  const handleBack = () => {
    setResults(null);
    setCurrentStep(0);
    setAnswers({});
    setError(null);
    onBack();
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (results) {
    return <ResultsPage results={results} onBack={handleBack} />;
  }

  return (
    <div className="quiz-page">
      <StepQuestion
        stepNum={currentStep + 1}
        totalSteps={QUIZ_QUESTIONS.length}
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelect={handleSelect}
        isLoading={isLoading}
      />

      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button 
            className="error-retry-btn"
            onClick={() => {
              setError(null);
              setCurrentStep(0);
              setAnswers({});
            }}
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
