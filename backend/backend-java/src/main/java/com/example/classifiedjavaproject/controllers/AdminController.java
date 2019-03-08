package com.example.classifiedjavaproject.controllers;


import com.example.classifiedjavaproject.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/administrators")
public class AdminController {

    @Autowired
    AdminRepository adminRepository;





}
