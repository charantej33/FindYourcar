package com.cardekho.demo_app.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.cardekho.demo_app.dto.RecommendationRequest;
import com.cardekho.demo_app.dto.RecommendationResponse;
import com.cardekho.demo_app.dto.RecommendationResponse.CarRecommendation;
import com.cardekho.demo_app.entity.Car;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AIRecommendationService {

    public RecommendationResponse getRecommendations(RecommendationRequest request, List<Car> filteredCars) {
        log.info("Generating rule-based recommendations for - Budget: {}, Fuel: {}, Use: {}, City: {}",
                request.getBudget(), request.getFuelType(), request.getUseCase(), request.getCityType());
        return generateSmartRecommendations(filteredCars, request);
    }

    /**
     * Generate smart rule-based recommendations based on user preferences
     */
    private RecommendationResponse generateSmartRecommendations(List<Car> cars, RecommendationRequest request) {
        // Score each car based on how well it matches user preferences
        List<ScoredCar> scoredCars = cars.stream()
                .map(car -> new ScoredCar(car, calculateMatchScore(car, request)))
                .sorted(Comparator.comparingDouble(ScoredCar::getScore).reversed())
                .limit(5)
                .collect(Collectors.toList());

        List<CarRecommendation> recommendations = scoredCars.stream()
                .map(scored -> CarRecommendation.builder()
                        .id(scored.car.getId())
                        .name(scored.car.getName())
                        .brand(scored.car.getBrand())
                        .price(scored.car.getPrice())
                        .fuelType(scored.car.getFuelType())
                        .useCase(scored.car.getUseCase())
                        .mileage(scored.car.getMileage())
                        .safetyRating(scored.car.getSafetyRating())
                        .pros(scored.car.getPros())
                        .imageUrl(scored.car.getImageUrl())
                        .aiReasoning(generatePersonalizedReasoning(scored.car, request))
                        .build())
                .collect(Collectors.toList());

        return RecommendationResponse.builder()
                .recommendations(recommendations)
                .build();
    }

    /**
     * Calculate a match score for a car based on user preferences (0-100)
     */
    private double calculateMatchScore(Car car, RecommendationRequest request) {
        double score = 0;

        // Fuel type match (25 points)
        if (car.getFuelType().equalsIgnoreCase(request.getFuelType())) {
            score += 25;
        } else if (request.getFuelType().equalsIgnoreCase("Petrol") && car.getFuelType().equalsIgnoreCase("Hybrid")) {
            score += 15; // Hybrid is good alternative for Petrol preference
        } else if (request.getFuelType().equalsIgnoreCase("Electric") && car.getFuelType().equalsIgnoreCase("Hybrid")) {
            score += 20; // Hybrid is good alternative for Electric preference
        }

        // Use case match (25 points)
        if (car.getUseCase().equalsIgnoreCase(request.getUseCase())) {
            score += 25;
        } else if (isCompatibleUseCase(car.getUseCase(), request.getUseCase())) {
            score += 15;
        }

        // Safety rating (20 points) - Higher is better
        if (car.getSafetyRating() >= 4.5) {
            score += 20;
        } else if (car.getSafetyRating() >= 4.0) {
            score += 15;
        } else if (car.getSafetyRating() >= 3.5) {
            score += 10;
        }

        // Mileage bonus (15 points) - Better mileage is advantage
        if (car.getMileage() != null) {
            if (parseNumberFromMileage(car.getMileage()) >= 18) {
                score += 15;
            } else if (parseNumberFromMileage(car.getMileage()) >= 15) {
                score += 10;
            } else if (parseNumberFromMileage(car.getMileage()) >= 12) {
                score += 5;
            }
        }

        // City type consideration (15 points)
        if (isGoodForCityType(car, request.getCityType())) {
            score += 15;
        }

        return Math.min(score, 100); // Cap at 100
    }

    /**
     * Check if a use case is compatible with another
     */
    private boolean isCompatibleUseCase(String carUseCase, String userPreference) {
        String carLower = carUseCase.toLowerCase();
        String userLower = userPreference.toLowerCase();

        // Define compatible use cases
        if (userLower.contains("city") && (carLower.contains("city") || carLower.contains("commute"))) {
            return true;
        }
        if (userLower.contains("highway") && carLower.contains("highway")) {
            return true;
        }
        if (userLower.contains("off-road") && (carLower.contains("suv") || carLower.contains("off-road"))) {
            return true;
        }
        return false;
    }

    /**
     * Check if car is good for the specified city type
     */
    private boolean isGoodForCityType(Car car, String cityType) {
        String carUseCase = car.getUseCase().toLowerCase();
        String cityLower = cityType.toLowerCase();

        // Metro cities - Smaller, fuel-efficient cars are better
        if (cityLower.contains("metro")) {
            return carUseCase.contains("city") && car.getMileage() != null;
        }

        // Tier-2 cities - Versatile cars work well
        if (cityLower.contains("tier") || cityLower.contains("tier-2")) {
            return carUseCase.contains("city") || carUseCase.contains("highway");
        }

        return true; // Any car works for other city types
    }

    /**
     * Extract numeric mileage value from string like "20 km/l"
     */
    private double parseNumberFromMileage(String mileage) {
        if (mileage == null) return 0;
        return Double.parseDouble(mileage.replaceAll("[^0-9.]", "").split("\\.")[0]);
    }

    /**
     * Generate personalized reasoning for why this car matches the user's preferences
     */
    private String generatePersonalizedReasoning(Car car, RecommendationRequest request) {
        StringBuilder reasoning = new StringBuilder();

        // Fuel type match
        if (car.getFuelType().equalsIgnoreCase(request.getFuelType())) {
            reasoning.append(String.format("Perfect match for your %s preference. ", car.getFuelType()));
        } else {
            reasoning.append(String.format("Great alternative with %s fuel. ", car.getFuelType()));
        }

        // Use case match
        if (car.getUseCase().equalsIgnoreCase(request.getUseCase())) {
            reasoning.append(String.format("Ideal for %s use case. ", request.getUseCase()));
        }

        // Safety and features
        reasoning.append(String.format("Excellent safety rating of %.1f/5. ", car.getSafetyRating()));

        // Budget fit
        reasoning.append(String.format("Priced at ₹%.1f Lakh, fitting your ₹%s Lakh budget. ",
                car.getPrice(), request.getBudget()));

        // Additional pros
        if (car.getPros() != null && !car.getPros().isEmpty()) {
            reasoning.append(String.format("%s", car.getPros()));
        }

        return reasoning.toString();
    }
    /**
     * Helper class to store a car and its match score
     */
    private static class ScoredCar {
        Car car;
        double score;

        ScoredCar(Car car, double score) {
            this.car = car;
            this.score = score;
        }

        double getScore() {
            return score;
        }
    }
}