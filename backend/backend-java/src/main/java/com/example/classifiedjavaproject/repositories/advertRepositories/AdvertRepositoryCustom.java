package com.example.classifiedjavaproject.repositories.advertRepositories;

import com.example.classifiedjavaproject.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvertRepositoryCustom extends JpaRepository<Advert, Long> {
}
