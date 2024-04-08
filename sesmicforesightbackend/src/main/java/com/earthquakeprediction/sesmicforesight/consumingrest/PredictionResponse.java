package com.earthquakeprediction.sesmicforesight.consumingrest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PredictionResponse {
    private String date;
    private float depth_prediction;
    private float magnitude_prediction;
}
