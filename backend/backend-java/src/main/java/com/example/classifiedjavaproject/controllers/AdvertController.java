package com.example.classifiedjavaproject.controllers;

import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostUpdate;


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

    @DeleteMapping("/{id}")
    public void deleteAdvertById(@PathVariable Long id){
        advertRepository.deleteById(id);
    }

//    @PutMapping("/{id}")
//    public void updateAdvertbyId(@PathVariable Long id,
//                                   @RequestBody String updatedCategory,
//                                   @RequestBody String updatedDescription,
//                                   @RequestBody String updatedTitle,
//                                   @RequestBody double updatedAskingPrice){
//        Advert advertToUpdate = advertRepository.getOne(id);
//        advertToUpdate.setCategory(updatedCategory);
//        advertToUpdate.setDescription(updatedDescription);
//        advertToUpdate.setTitle(updatedTitle);
//        advertToUpdate.setAskingPrice(updatedAskingPrice);
//        advertRepository.save(advertToUpdate);
//    }






}
