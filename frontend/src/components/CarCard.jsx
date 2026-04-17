export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <div className="car-card-image-wrapper">
        <img 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.name}`}
          className="car-card-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x250?text=' + encodeURIComponent(car.brand + ' ' + car.name);
          }}
        />
      </div>

      <div className="car-card-content">
        <div className="car-card-header">
          <h3 className="car-card-title">{car.brand} {car.name}</h3>
          <span className="car-card-price">₹{car.price.toFixed(2)}L</span>
        </div>

        <div className="car-card-specs">
          <div className="spec-item">
            <span className="spec-icon">⛽</span>
            <div>
              <div className="spec-label">Fuel</div>
              <div className="spec-value">{car.fuelType}</div>
            </div>
          </div>
          <div className="spec-item">
            <span className="spec-icon">📊</span>
            <div>
              <div className="spec-label">Mileage</div>
              <div className="spec-value">{car.mileage}</div>
            </div>
          </div>
          <div className="spec-item">
            <span className="spec-icon">🎯</span>
            <div>
              <div className="spec-label">Use Case</div>
              <div className="spec-value">{car.useCase}</div>
            </div>
          </div>
          <div className="spec-item">
            <span className="spec-icon">🛡️</span>
            <div>
              <div className="spec-label">Safety</div>
              <div className="spec-value">{car.safetyRating}/5 ⭐</div>
            </div>
          </div>
        </div>

        <div className="car-card-pros">
          <h4 className="pros-title">Why you'll love it</h4>
          <p className="pros-text">{car.pros}</p>
        </div>

        <div className="car-card-ai-reasoning">
          <h4 className="ai-title">Why it's perfect for you</h4>
          <p className="ai-text">{car.aiReasoning}</p>
        </div>
      </div>
    </div>
  );
}
