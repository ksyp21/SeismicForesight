package com.earthquakeprediction.sesmicforesight.consumingrest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PredictionData {
    private String date;
    private float depth_prediction;
    private float magnitude_prediction;
}
