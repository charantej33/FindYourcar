package com.cardekho.demo_app.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private Double price; // Price in lakhs (₹)

    @Column(nullable = false)
    private String fuelType; // Petrol, Diesel, Electric, Hybrid

    @Column(nullable = false)
    private String useCase; // City commute, Family, Off-road, Long highway

    @Column(nullable = false)
    private String mileage; // e.g., "22 kmpl" or "312 km/charge"

    @Column(nullable = false)
    private Double safetyRating; // Out of 5

    @Column(columnDefinition = "TEXT")
    private String pros;

    private String imageUrl;
}
