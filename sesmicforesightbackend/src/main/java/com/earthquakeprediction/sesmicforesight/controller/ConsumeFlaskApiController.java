package com.earthquakeprediction.sesmicforesight.controller;

import com.earthquakeprediction.sesmicforesight.consumingrest.*;
import lombok.AllArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ConsumeFlaskApiController {

    private RestTemplate restTemplate;

    @PostMapping("/predict")
    public PredictionResponse getPrediction(@RequestBody PredictionRequest request) {
        String url = "http://127.0.0.1:4000/predict";
        return restTemplate.postForObject(url, request, PredictionResponse.class);
    }

    @PostMapping("/predictWithTime")
    public PredictionResponse getPrediction(@RequestBody PredictionRequestWithTime request){
        String url="http://127.0.0.1:4000/predictWithTime";
        return restTemplate.postForObject(url,request,PredictionResponse.class);
    }

    @PostMapping("/predictRange")
    public List<PredictionResponse> getPrediction(@RequestBody PredictionRequestWithRange request){
        String url="http://127.0.0.1:4000/predictRange";
        // Use exchange method instead of postForObject to handle the List response
        ResponseEntity<List<PredictionResponse>> responseEntity = restTemplate.exchange(
                url,
                HttpMethod.POST,
                new HttpEntity<>(request),
                new ParameterizedTypeReference<List<PredictionResponse>>() {}
        );
        return responseEntity.getBody();
    }


}
