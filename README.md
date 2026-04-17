# CarFinder - AI-Powered Car Recommendation App

A full-stack web application that uses AI to recommend the perfect car based on user preferences. Answer 4 quick questions about your budget, fuel type, use case, and city type, and get personalized car recommendations with AI-powered reasoning.

## 🚀 Features

- **Smart Questionnaire**: 4-step interactive quiz with beautiful UI
- **AI-Powered Recommendations**: Uses Google Gemini 2.0 Flash via OpenRouter API
- **Real Indian Car Database**: 25+ pre-seeded cars with detailed specs
- **Personalized Reasoning**: AI explains why each car is perfect for you
- **Full-Stack Architecture**: React 18 + Spring Boot 3 + PostgreSQL
- **Docker Ready**: Single command deployment
- **Responsive Design**: Works flawlessly on mobile and desktop

## 📋 Tech Stack

### Backend
- **Java 21** with Spring Boot 4.0.5
- **PostgreSQL** for persistent data
- **Spring Data JPA** for database operations
- **OpenRouter API** for AI recommendations (Google Gemini 2.0 Flash)
- **Lombok** for cleaner code

### Frontend
- **React 18** with Vite build tool
- **Modern CSS3** with CSS Variables and animations
- **Responsive Design** - Mobile first approach

### Deployment
- **Docker** & **Docker Compose** for containerization
- **3-service architecture**: PostgreSQL, Backend, Frontend

## 🎯 The 4-Question Quiz

1. **Budget**: ₹5-8L / ₹8-12L / ₹12-20L / ₹20L+
2. **Fuel Type**: Petrol / Diesel / Electric / Hybrid
3. **Use Case**: City commute / Family / Off-road / Long highway
4. **City Type**: Metro / Tier-2 / Highway heavy

## 🏗️ Project Structure

```
carfinder/
├── docker-compose.yml          # Multi-container orchestration
├── Dockerfile                  # Backend image definition
├── build.gradle               # Gradle build config
├── src/
│   ├── main/
│   │   ├── java/com/cardekho/demo_app/
│   │   │   ├── DemoAppApplication.java
│   │   │   ├── config/WebConfig.java (CORS)
│   │   │   ├── controller/CarController.java
│   │   │   ├── service/
│   │   │   │   ├── CarService.java (filtering logic)
│   │   │   │   └── AIRecommendationService.java (AI integration)
│   │   │   ├── entity/Car.java
│   │   │   ├── repository/CarRepository.java
│   │   │   └── dto/
│   │   │       ├── RecommendationRequest.java
│   │   │       └── RecommendationResponse.java
│   │   └── resources/
│   │       ├── application.yml (config)
│   │       └── data.sql (25 cars seeded)
│   └── test/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css (complete design system)
│       ├── pages/
│       │   ├── LandingPage.jsx
│       │   ├── QuizPage.jsx (quiz orchestration)
│       │   └── ResultsPage.jsx (recommendations)
│       └── components/
│           ├── StepQuestion.jsx (reusable question UI)
│           ├── LoadingScreen.jsx (AI thinking state)
│           └── CarCard.jsx (individual car display)
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose installed
- OpenRouter API key (get free: https://openrouter.ai)

### 1. Clone & Navigate
```bash
cd carfinder
```

### 2. Set Environment Variables
Create a `.env` file in the root directory:
```env
OPENROUTER_API_KEY=your-api-key-here
```

### 3. Run with Docker Compose
```bash
docker compose up --build
```

This single command will:
- ✅ Start PostgreSQL database
- ✅ Build and run the Spring Boot backend (port 8080)
- ✅ Build and run the React frontend (port 5173)
- ✅ Seed 25 cars into the database
- ✅ Enable CORS for frontend-backend communication

### 4. Access the App
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080/api
- **Database**: PostgreSQL on port 5432

## 📡 API Endpoints

### Get All Cars
```bash
GET /api/cars
```
Returns all 25 cars in the database.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Alto K10",
    "brand": "Maruti Suzuki",
    "price": 3.99,
    "fuelType": "Petrol",
    "useCase": "City commute",
    "mileage": "24.39 kmpl",
    "safetyRating": 3.0,
    "pros": "Most affordable car with best-in-class mileage...",
    "imageUrl": "https://..."
  }
]
```

### Get Recommendations
```bash
POST /api/recommend
Content-Type: application/json

{
  "budget": "5-8",
  "fuelType": "Petrol",
  "useCase": "City commute",
  "cityType": "Metro"
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "id": 10,
      "name": "Swift",
      "brand": "Maruti Suzuki",
      "price": 6.49,
      "fuelType": "Petrol",
      "useCase": "City commute",
      "mileage": "22.38 kmpl",
      "safetyRating": 4.0,
      "pros": "Best-selling hatchback with excellent fuel efficiency...",
      "imageUrl": "https://...",
      "aiReasoning": "The Swift is perfect for you! As a metro commuter with a ₹5-8L budget, you need a car that's nimble in traffic, affordable to run, and easy to park. The Swift delivers all three: it's the best-selling hatchback in India, with incredible 22.38 kmpl mileage to keep fuel costs down, and its compact size makes city driving effortless. Plus, it has excellent resale value!"
    }
  ]
}
```

## 🎨 UI/UX Highlights

- **Dark Theme**: Red & white sporty aesthetic (inspired by autocaretelugu.com)
- **Smooth Animations**: Fade-in transitions, button hover effects
- **Progress Bar**: Visual feedback for quiz progress
- **Loading States**: Animated spinner while AI is thinking
- **Responsive Grid**: Car cards adapt to screen size
- **Detailed Specs**: Each car shows fuel type, mileage, use case, safety rating
- **AI Explanation**: Why each car is perfect for your specific needs

## 🔧 Configuration

### Backend (application.yml)
- Database: PostgreSQL (configurable via env vars)
- API Port: 8080
- CORS: Enabled for frontend (5173, 3000, docker container)
- OpenRouter: Configured for Google Gemini 2.0 Flash

### Frontend (vite.config.js)
- API URL: Configurable via `VITE_API_URL` env variable
- Dev port: 5173
- Build: Optimized production build

## 📦 Database Schema

### cars table
```sql
CREATE TABLE cars (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  price DOUBLE PRECISION NOT NULL,
  fuel_type VARCHAR(50) NOT NULL,
  use_case VARCHAR(100) NOT NULL,
  mileage VARCHAR(50) NOT NULL,
  safety_rating DOUBLE PRECISION NOT NULL,
  pros TEXT,
  image_url TEXT
);
```

**25 Pre-seeded Cars from:**
- Maruti Suzuki (7 cars)
- Hyundai (5 cars)
- Tata Motors (6 cars)
- Mahindra (3 cars)
- Kia (4 cars)

## 🛑 Troubleshooting

### Backend won't start
- Check OpenRouter API key in `.env`
- Verify PostgreSQL is healthy: `docker ps`
- Check logs: `docker compose logs backend`

### Frontend can't reach backend
- Verify `VITE_API_URL` is set correctly
- Check network: `docker compose logs frontend`
- Ensure backend is running: `docker compose logs backend`

### Database connection errors
- Wait for postgres to be healthy (30s startup)
- Check database credentials in `docker-compose.yml`
- Verify postgres service is running: `docker compose exec postgres psql -U carfinder -d carfinder_db -c "SELECT COUNT(*) FROM cars;"`

## 📝 Environment Variables

```env
# Required
OPENROUTER_API_KEY=sk-or-v1-xxxx...

# Optional (defaults provided)
DB_HOST=postgres (default in docker)
DB_PORT=5432
DB_NAME=carfinder_db
DB_USER=carfinder
DB_PASSWORD=carfinder123
VITE_API_URL=http://backend:8080 (in docker)
```

## 🚀 Deployment to Production

### AWS ECS / Cloud Run
1. Build and push Docker images to registry
2. Update `docker-compose.yml` with secret management
3. Deploy using your cloud provider's container service

### Self-hosted
1. Install Docker and Docker Compose
2. Clone repository on server
3. Set environment variables
4. Run `docker compose up -d`
5. Access via domain/IP on port 5173

## 📄 License

MIT License - feel free to use this project

## 🤝 Support

For issues or questions:
- Check application logs: `docker compose logs -f`
- Verify all services are running: `docker compose ps`
- Restart services: `docker compose restart`

---

**Built with ❤️ using React, Spring Boot, and AI** 🚗✨
