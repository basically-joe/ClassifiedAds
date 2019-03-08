package com.example.classifiedjavaproject.components;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AdminRepository adminRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Admin admin1 = new Admin("gilroy_ms", "McDonalds");
        adminRepository.save(admin1);


    }






}
