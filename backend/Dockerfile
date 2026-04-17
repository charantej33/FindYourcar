# Multi-stage build for Spring Boot backend
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# Copy gradle files
COPY build.gradle settings.gradle gradlew ./
COPY gradle/ ./gradle/

# Copy source code
COPY src/ ./src/

# Build the application
RUN chmod +x ./gradlew && ./gradlew bootJar -x test

# Runtime stage
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy the built JAR from builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Environment variables
ENV ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
ENV DATABASE_URL=${DATABASE_URL}
ENV PGUSER=${PGUSER}
ENV PGPASSWORD=${PGPASSWORD}
ENV ALLOWED_ORIGINS=${ALLOWED_ORIGINS}

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]