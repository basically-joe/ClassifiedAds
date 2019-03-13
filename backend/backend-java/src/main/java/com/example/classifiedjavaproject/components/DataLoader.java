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

        Advert advert1 = new Advert(5, "https://i.pinimg.com/236x/c2/73/6a/c2736a7de616aef6811450d413801d44--fake-blood-artemis.jpg",  "Makeup", "True blue eyeshadow, best for eyelids", "Eleganza Extravaganza", 2, admin3);
        advertRepository.save(advert1);

        Advert advert2 = new Advert(4, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCAfntjz9tY3Gmhrad3qkSRSH48jqVL7EmefbBQmb-meFfzf7", "Automobile", "An old jalopy, still running. Rusty but runs like a dream.","Motorists Who Drive", 500, admin1);
        advertRepository.save(advert2);

        Advert advert3 = new Advert(1, "https://images4-b.ravelrycache.com/uploads/Knitclick1/426520875/IMG_4648_small2.JPG", "Clothing", "Cream-egg inspired jumper, fresh for Easter", "Egg-Wear", 10, admin2);
        advertRepository.save(advert3);

        Advert advert4 = new Advert(3 ,"http://3.bp.blogspot.com/_ZX_AQttCiRA/SKXknLPfsiI/AAAAAAAAAIk/IsrO2ix1vz4/s400/Fish-skin-jacket.jpg", "Clothing", "Faux-whale-skin parka. Water resistant.", "Stylish, Orca-Chic Coat", 50, admin1);
        advertRepository.save(advert4);

    }






}
