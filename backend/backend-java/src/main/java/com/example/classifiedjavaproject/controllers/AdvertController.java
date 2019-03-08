package com.example.classifiedjavaproject.controllers;

import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/adverts")

public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;



}
