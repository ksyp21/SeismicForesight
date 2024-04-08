package com.earthquakeprediction.sesmicforesight.repository;


import com.earthquakeprediction.sesmicforesight.entity.LocationData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<LocationData,Long> {
}
