import CarCard from '../components/CarCard';

export default function ResultsPage({ results, onBack }) {
  return (
    <div className="results-container">
      <div className="results-header">
        <button className="back-btn" onClick={onBack}>
          ← Find Another
        </button>
        <h2 className="results-title">Your Perfect Matches</h2>
        <p className="results-subtitle">
          {results.length} cars that fit your needs perfectly
        </p>
      </div>

      <div className="results-grid">
        {results.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <footer className="results-footer">
        <p className="footer-note">
          © 2026 CarDekho · Prices are indicative · AI Powered
        </p>
      </footer>
    </div>
  );
}
