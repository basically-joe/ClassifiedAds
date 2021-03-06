package com.example.classifiedjavaproject.repositories.advertRepositories;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.projections.EmbedAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(excerptProjection = EmbedAdvert.class)
public interface AdvertRepository extends JpaRepository<Advert, Long> {

    public Advert getAdvertById(Long id);

    public List<Advert> getAdvertByCategory(String category);
}


