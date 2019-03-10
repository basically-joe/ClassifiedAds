package com.example.classifiedjavaproject.controllers;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.adminRepositories.AdminRepository;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostUpdate;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/adverts")

public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;

    @Autowired
    AdminRepository adminRepository;


    @GetMapping("/{id}")
    public Advert getAdvertById(@PathVariable Long id){
        return advertRepository.getAdvertById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAdvertById(@PathVariable Long id){
        advertRepository.deleteById(id);
    }

    @PostMapping("/")
    public Advert postAdvert(@RequestBody Advert advert, @RequestBody Admin admin){
        adminRepository.save(admin);
        advert.setAdmin(admin);
        advertRepository.save(advert);
        Long advertId = advert.getId();
        Advert newAdvert = getAdvertById(advertId);
        return newAdvert;

    }

//    this post is a little broken - it adds 'null' column to the Admin id field in the DB.
//    all of the other fields are added to the DB, so category, etc.

    @PutMapping("/{id}")
    public Advert updateAdvertById(@PathVariable Long id, @RequestBody Advert advert){
        advertRepository.save(advert);
        return advertRepository.getAdvertById(id);
    }







}
