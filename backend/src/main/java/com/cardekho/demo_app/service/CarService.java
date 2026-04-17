package com.cardekho.demo_app.service;

import com.cardekho.demo_app.dto.RecommendationRequest;
import com.cardekho.demo_app.entity.Car;
import com.cardekho.demo_app.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CarService {

    private final CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public List<Car> filterCars(RecommendationRequest request) {
        Double minPrice = getMinPrice(request.getBudget());
        Double maxPrice = getMaxPrice(request.getBudget());
        String fuelType = request.getFuelType();

        log.info("Filtering cars - Budget: ₹{}L-₹{}L, Fuel: {}", minPrice, maxPrice, fuelType);

        List<Car> filtered;

        if (fuelType != null && !fuelType.isBlank()) {
            filtered = carRepository.findByFuelTypeAndPriceBetween(fuelType, minPrice, maxPrice);
        } else {
            filtered = carRepository.findByPriceBetween(minPrice, maxPrice);
        }

        // If no exact matches, widen search to just price range
        if (filtered.isEmpty()) {
            log.info("No exact match found, widening search to price range only");
            filtered = carRepository.findByPriceBetween(minPrice, maxPrice);
        }

        // If still empty, return all cars (let AI pick the best)
        if (filtered.isEmpty()) {
            log.info("No cars in price range, returning all cars for AI to evaluate");
            filtered = carRepository.findAll();
        }

        log.info("Found {} matching cars", filtered.size());
        return filtered;
    }

    private Double getMinPrice(String budget) {
        return switch (budget) {
            case "5-8" -> 5.0;
            case "8-12" -> 8.0;
            case "12-20" -> 12.0;
            case "20+" -> 20.0;
            default -> 0.0;
        };
    }

    private Double getMaxPrice(String budget) {
        return switch (budget) {
            case "5-8" -> 8.0;
            case "8-12" -> 12.0;
            case "12-20" -> 20.0;
            case "20+" -> 100.0;
            default -> 100.0;
        };
    }
}
