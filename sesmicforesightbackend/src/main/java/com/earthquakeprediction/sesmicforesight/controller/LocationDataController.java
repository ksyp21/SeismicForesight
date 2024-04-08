package com.earthquakeprediction.sesmicforesight.controller;

import com.earthquakeprediction.sesmicforesight.entity.LocationData;
import com.earthquakeprediction.sesmicforesight.repository.LocationRepository;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@AllArgsConstructor
public class LocationDataController {

    private LocationRepository locationRepository;

    @PostMapping("/api/location")
    public void saveLocationData(@RequestBody LocationData locationData) {

        locationRepository.save(locationData);
    }
}
