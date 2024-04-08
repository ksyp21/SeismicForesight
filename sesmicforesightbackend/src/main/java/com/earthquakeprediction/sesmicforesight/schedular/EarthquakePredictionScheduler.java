package com.earthquakeprediction.sesmicforesight.schedular;

import com.earthquakeprediction.sesmicforesight.consumingrest.PredictionRequest;
import com.earthquakeprediction.sesmicforesight.consumingrest.PredictionResponse;
import com.earthquakeprediction.sesmicforesight.entity.LocationData;
import com.earthquakeprediction.sesmicforesight.repository.LocationRepository;
import com.earthquakeprediction.sesmicforesight.service.EmailService;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
public class EarthquakePredictionScheduler {

    private final RestTemplate restTemplate;
    private final LocationRepository locationDataRepository;
    private final EmailService emailService;

    public EarthquakePredictionScheduler(RestTemplate restTemplate, LocationRepository locationDataRepository, EmailService emailService) {
        this.restTemplate = restTemplate;
        this.locationDataRepository = locationDataRepository;
        this.emailService = emailService;
    }

    @Scheduled(cron = "0 0 0 * * ?") // Run the task every day at 12:00 AM (midnight)
    public void predictAndSendAlert() {
        PredictionRequest request = new PredictionRequest(); // Construct the request object
        PredictionResponse response = restTemplate.postForObject("http://127.0.0.1:4000/predict", request, PredictionResponse.class);

        if (response.getMagnitude_prediction() > 5.0) {
            sendAlert(response);
        }
    }

    private void sendAlert(PredictionResponse response) {
        List<LocationData> locationDataList = locationDataRepository.findAll();
        for (LocationData locationData : locationDataList) {
            emailService.sendAlert(locationData.getEmail(), response);
        }
    }
}