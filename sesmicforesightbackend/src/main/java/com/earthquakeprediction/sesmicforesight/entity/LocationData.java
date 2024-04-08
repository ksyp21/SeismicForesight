package com.earthquakeprediction.sesmicforesight.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "location_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Long id;

    @Column(name = "lat")
    private Float latitude;
    @Column(name = "lng")
    private Float longitude;

    @Column(name = "email")
    private String email;

}
