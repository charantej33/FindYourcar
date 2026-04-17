package com.cardekho.demo_app.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RecommendationRequest {

    @NotBlank(message = "Budget is required")
    private String budget; // "5-8", "8-12", "12-20", "20+"

    @NotBlank(message = "Fuel type is required")
    private String fuelType; // "Petrol", "Diesel", "Electric", "Hybrid"

    @NotBlank(message = "Use case is required")
    private String useCase; // "City commute", "Family", "Off-road", "Long highway"

    @NotBlank(message = "City type is required")
    private String cityType; // "Metro", "Tier-2", "Highway heavy"
}
