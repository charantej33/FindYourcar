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

# Set environment variables
ENV OPENROUTER_API_KEY=${OPENROUTER_API_KEY}
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_NAME=carfinder_db
ENV DB_USER=carfinder
ENV DB_PASSWORD=carfinder123

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s --retries=3 \
  CMD java -cp app.jar org.springframework.boot.loader.JarLauncher &>/dev/null || exit 1

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
