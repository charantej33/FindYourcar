package com.cardekho.demo_app.controller;

import com.cardekho.demo_app.dto.RecommendationRequest;
import com.cardekho.demo_app.dto.RecommendationResponse;
import com.cardekho.demo_app.entity.Car;
import com.cardekho.demo_app.service.AIRecommendationService;
import com.cardekho.demo_app.service.CarService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class CarController {

    private final CarService carService;
    private final AIRecommendationService aiRecommendationService;

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars() {
        log.info("GET /api/cars - Fetching all cars");
        List<Car> cars = carService.getAllCars();
        return ResponseEntity.ok(cars);
    }

    @PostMapping("/recommend")
    public ResponseEntity<RecommendationResponse> getRecommendations(
            @Valid @RequestBody RecommendationRequest request) {
        log.info("POST /api/recommend - Budget: {}, Fuel: {}, Use: {}, City: {}",
                request.getBudget(), request.getFuelType(),
                request.getUseCase(), request.getCityType());

        // Step 1: Filter cars from DB based on preferences
        List<Car> filteredCars = carService.filterCars(request);
        log.info("Filtered {} cars matching preferences", filteredCars.size());

        // Step 2: Get AI-powered recommendations
        RecommendationResponse response = aiRecommendationService.getRecommendations(request, filteredCars);
        log.info("Returning {} recommendations", response.getRecommendations().size());

        return ResponseEntity.ok(response);
    }
}
