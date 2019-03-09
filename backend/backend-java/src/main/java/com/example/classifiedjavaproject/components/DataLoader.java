package com.example.classifiedjavaproject.components;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.adminRepositories.AdminRepository;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    AdvertRepository advertRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Admin admin1 = new Admin("gilroy_ms", "Harry's Pottery");
        adminRepository.save(admin1);

        Admin admin2 = new Admin("raul_2000", "Billious Beards");
        adminRepository.save(admin2);

        Admin admin3 = new Admin("tony_piano_fingers", "Spaghetti Inc");
        adminRepository.save(admin3);

        Advert advert1 = new Advert("Beauty", "True blue eyeshadow, best for eyelids", "Eleganza Extravaganza", 2, admin3);
        advertRepository.save(advert1);

        Advert advert2 = new Advert("Automobile", "An old jalopy, still running. Rusty but runs like a dream.","Motorists Who Drive", 500, admin1);
        advertRepository.save(advert2);

        Advert advert3 = new Advert("Clothing", "Cream-egg inspired jumper, fresh for Easter", "Egg-Wear", 10, admin2);
        advertRepository.save(advert3);

        Advert advert4 = new Advert("Clothing", "Faux-whale-skin parka. Water resistant.", "Stylish, Orca-Chic Coat", 50, admin1);
        advertRepository.save(advert4);

    }






}
