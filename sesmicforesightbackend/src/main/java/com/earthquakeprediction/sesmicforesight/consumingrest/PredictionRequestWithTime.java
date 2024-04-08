package com.earthquakeprediction.sesmicforesight.consumingrest;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PredictionRequestWithTime {
    @JsonProperty("latitude")
    private float latitude;
    @JsonProperty("longitude")
    private  float longitude;
    @JsonProperty("timestamp")
    private String timestamp;
}
