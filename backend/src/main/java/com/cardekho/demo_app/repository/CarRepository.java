package com.cardekho.demo_app.repository;

import com.cardekho.demo_app.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByFuelType(String fuelType);

    List<Car> findByPriceBetween(Double minPrice, Double maxPrice);

    List<Car> findByFuelTypeAndPriceBetween(String fuelType, Double minPrice, Double maxPrice);
}
