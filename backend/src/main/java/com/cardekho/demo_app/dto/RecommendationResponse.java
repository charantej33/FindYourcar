package com.cardekho.demo_app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendationResponse {

    private List<CarRecommendation> recommendations;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CarRecommendation {
        private Long id;
        private String name;
        private String brand;
        private Double price;
        private String fuelType;
        private String useCase;
        private String mileage;
        private Double safetyRating;
        private String pros;
        private String imageUrl;
        private String aiReasoning;
    }
}
