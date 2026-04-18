-- CarFinder: Seed data — Cars organized by company
-- Prices in Lakhs (₹), Safety ratings out of 5

DELETE FROM cars;

INSERT INTO cars (name, brand, price, fuel_type, use_case, mileage, safety_rating, pros, image_url) VALUES

-- ===========================
-- MARUTI SUZUKI (7 cars)
-- ===========================
('Alto K10', 'Maruti Suzuki', 3.99, 'Petrol', 'City commute', '24.39 kmpl', 3.0, 'Most affordable car with best-in-class mileage, perfect for first-time buyers and daily city commuting.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/112839/alto-k10-exterior-right-front-three-quarter-3.jpeg'),
('Swift', 'Maruti Suzuki', 6.49, 'Petrol', 'City commute', '22.38 kmpl', 4.0, 'Best-selling hatchback in India with excellent fuel efficiency, low maintenance cost, and wide service network.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg'),
('Baleno', 'Maruti Suzuki', 6.61, 'Petrol', 'City commute', '22.35 kmpl', 4.0, 'Premium hatchback with feature-rich cabin, heads-up display, and refined 1.2L DualJet engine.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/baleno-exterior-right-front-three-quarter.jpeg'),
('Dzire', 'Maruti Suzuki', 6.79, 'Petrol', 'City commute', '23.26 kmpl', 4.0, 'Best-selling sedan in India with spacious boot, refined engine, and excellent fuel economy.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/dzire-exterior-right-front-three-quarter.jpeg'),
('Brezza', 'Maruti Suzuki', 8.34, 'Petrol', 'Family', '20.15 kmpl', 4.0, 'Compact SUV with strong brand trust, sunroof, heads-up display, and excellent resale value.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/brezza-exterior-right-front-three-quarter.jpeg'),
('Ertiga', 'Maruti Suzuki', 8.69, 'Petrol', 'Family', '20.51 kmpl', 4.0, 'India''s favourite 7-seater MPV with best-in-class mileage, smart hybrid tech, and low maintenance cost.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/ertiga-exterior-right-front-three-quarter.jpeg'),
('Grand Vitara', 'Maruti Suzuki', 10.70, 'Hybrid', 'Long highway', '27.97 kmpl', 5.0, 'Strong hybrid SUV with class-leading 27.97 kmpl mileage, AllGrip AWD, and panoramic sunroof.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/grand-vitara-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- HYUNDAI (5 cars)
-- ===========================
('i20', 'Hyundai', 7.04, 'Petrol', 'City commute', '20.25 kmpl', 4.0, 'Premium hatchback with sunroof, wireless charging, Bose sound system, and sporty design.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/i20-exterior-right-front-three-quarter.jpeg'),
('Venue', 'Hyundai', 7.94, 'Petrol', 'City commute', '17.5 kmpl', 4.0, 'Connected compact SUV with BlueLink technology, turbo engine option, and great urban maneuverability.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/venue-exterior-right-front-three-quarter.jpeg'),
('Verna', 'Hyundai', 10.96, 'Petrol', 'Long highway', '20.6 kmpl', 5.0, 'Feature-rich sedan with ADAS, ventilated seats, 6 airbags, and excellent highway stability.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/verna-exterior-right-front-three-quarter.jpeg'),
('Creta', 'Hyundai', 11.0, 'Petrol', 'Family', '17.0 kmpl', 5.0, 'Feature-loaded SUV with ADAS, panoramic sunroof, ventilated seats, and 5-star GNCAP safety rating.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/creta-exterior-right-front-three-quarter.jpeg'),
('Tucson', 'Hyundai', 27.7, 'Diesel', 'Long highway', '18.4 kmpl', 5.0, 'Premium SUV with ADAS Level 2, 4WD, panoramic sunroof, and bold parametric design.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/tucson-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- TATA MOTORS (6 cars)
-- ===========================
('Tiago', 'Tata', 5.65, 'Petrol', 'City commute', '20.09 kmpl', 4.0, 'Value-for-money hatchback with 4-star safety rating, Harman infotainment, and peppy Revotron engine.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/tiago-exterior-right-front-three-quarter.jpeg'),
('Punch', 'Tata', 6.13, 'Petrol', 'City commute', '18.97 kmpl', 5.0, 'Micro-SUV with 5-star safety rating, high ground clearance, and rugged design for Indian roads.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/punch-exterior-right-front-three-quarter.jpeg'),
('Nexon', 'Tata', 8.0, 'Petrol', 'Family', '17.4 kmpl', 5.0, 'Safest car in India with 5-star GNCAP rating, sunroof, connected features, and turbo petrol engine.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/nexon-exterior-right-front-three-quarter.jpeg'),
('Nexon EV', 'Tata', 14.74, 'Electric', 'City commute', '312 km/charge', 5.0, 'India''s best-selling EV with 312 km range, fast charging support, and zero tailpipe emissions.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/nexon-ev-exterior-right-front-three-quarter.jpeg'),
('Harrier', 'Tata', 15.49, 'Diesel', 'Long highway', '16.35 kmpl', 5.0, 'Premium SUV built on OMEGARC platform with ADAS, panoramic sunroof, and commanding road presence.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/harrier-exterior-right-front-three-quarter.jpeg'),
('Safari', 'Tata', 16.19, 'Diesel', 'Family', '14.5 kmpl', 5.0, 'Flagship 7-seater SUV with captain seats, ADAS, terrain response modes, and premium interiors.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/safari-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- MAHINDRA (3 cars)
-- ===========================
('Thar', 'Mahindra', 11.35, 'Diesel', 'Off-road', '15.2 kmpl', 4.0, 'Iconic lifestyle off-roader with 4x4, convertible top, and unmatched off-road capability in its segment.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/thar-exterior-right-front-three-quarter.jpeg'),
('Scorpio N', 'Mahindra', 13.85, 'Diesel', 'Off-road', '15.31 kmpl', 5.0, 'Body-on-frame SUV with 4x4, powerful diesel engine, and rugged build for adventure enthusiasts.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/scorpio-n-exterior-right-front-three-quarter.jpeg'),
('XUV700', 'Mahindra', 13.99, 'Diesel', 'Family', '16.0 kmpl', 5.0, 'Tech-loaded SUV with ADAS, largest-in-class sunroof, AdrenoX system, and 5-star GNCAP rating.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/xuv700-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- KIA (3 cars)
-- ===========================
('Sonet', 'Kia', 7.99, 'Petrol', 'City commute', '18.2 kmpl', 4.0, 'Compact SUV with clutchless manual (iMT), ventilated seats, air purifier, and connected tech.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/sonet-exterior-right-front-three-quarter.jpeg'),
('Carens', 'Kia', 10.52, 'Petrol', 'Family', '16.5 kmpl', 4.5, 'Stylish 6/7-seater MPV with 10.25-inch screens, ventilated seats, air purifier, and 1.5 turbo engine.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/carens-exterior-right-front-three-quarter.jpeg'),
('Seltos', 'Kia', 10.90, 'Petrol', 'Family', '16.8 kmpl', 4.5, 'Feature-packed SUV with 10.25-inch screens, ADAS, ventilated seats, and Bose premium sound.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/seltos-exterior-right-front-three-quarter.jpeg'),
('EV6', 'Kia', 60.97, 'Electric', 'Long highway', '528 km/charge', 5.0, 'Premium electric crossover with 528 km range, 350 kW ultra-fast charging, and GT performance mode.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/ev6-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- TOYOTA (4 cars)
-- ===========================
('Glanza', 'Toyota', 6.86, 'Petrol', 'City commute', '22.35 kmpl', 4.0, 'Toyota reliability in a premium hatchback package with heads-up display, connected features, and low cost of ownership.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/glanza-exterior-right-front-three-quarter.jpeg'),
('Hyryder', 'Toyota', 10.48, 'Hybrid', 'Long highway', '27.97 kmpl', 5.0, 'Toyota''s strong hybrid SUV with Neo Drive technology, AWD option, and segment-best fuel efficiency.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/hyryder-exterior-right-front-three-quarter.jpeg'),
('Innova Crysta', 'Toyota', 19.99, 'Diesel', 'Family', '11.36 kmpl', 4.5, 'India''s most trusted MPV with captain seats, legendary reliability, low maintenance, and spacious 7-seat layout.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/innova-crysta-exterior-right-front-three-quarter.jpeg'),
('Fortuner', 'Toyota', 33.43, 'Diesel', 'Off-road', '10.0 kmpl', 4.5, 'Legendary full-size SUV with bulletproof reliability, 4x4, commanding road presence, and best resale value.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/fortuner-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- MG MOTOR (2 cars)
-- ===========================
('Hector', 'MG', 14.0, 'Hybrid', 'Family', '15.8 kmpl', 4.5, '48V mild-hybrid SUV with India''s largest 14-inch infotainment, i-SMART connected system, and panoramic sunroof.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/hector-exterior-right-front-three-quarter.jpeg'),
('ZS EV', 'MG', 18.98, 'Electric', 'City commute', '461 km/charge', 4.5, 'Premium electric SUV with 461 km range, PM2.5 filter, connected car features, and global build quality.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/zs-ev-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- HONDA (1 car)
-- ===========================
('City', 'Honda', 11.82, 'Petrol', 'Long highway', '18.4 kmpl', 4.5, 'Premium sedan with advanced Honda Sensing ADAS, lane watch camera, refined CVT, and spacious rear seat.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/city-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- SKODA (1 car)
-- ===========================
('Slavia', 'Skoda', 10.69, 'Petrol', 'Long highway', '19.07 kmpl', 4.5, 'European-engineered sedan with 1.5 TSI turbo engine, 6-speed AT, ventilated seats, and solid build quality.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/slavia-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- BMW (1 car)
-- ===========================
('X1', 'BMW', 45.90, 'Petrol', 'City commute', '13.0 kmpl', 5.0, 'Entry-level luxury SUV with BMW driving dynamics, panoramic sunroof, iDrive infotainment, and premium interiors.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/x1-exterior-right-front-three-quarter.jpeg'),

-- ===========================
-- MERCEDES-BENZ (1 car)
-- ===========================
('GLC', 'Mercedes-Benz', 73.50, 'Petrol', 'Long highway', '12.5 kmpl', 5.0, 'Premium luxury SUV with MBUX system, Burmester sound, 4MATIC AWD, and unmatched cabin refinement.', 'https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/glc-exterior-right-front-three-quarter.jpeg');
