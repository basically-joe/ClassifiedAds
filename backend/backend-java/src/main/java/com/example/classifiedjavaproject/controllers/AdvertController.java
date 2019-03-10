package com.example.classifiedjavaproject.controllers;

import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/adverts")

public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;


    @GetMapping("/{id}")
    public Advert getAdvertById(@PathVariable Long id){
        return advertRepository.getAdvertById(id);
    }
}
