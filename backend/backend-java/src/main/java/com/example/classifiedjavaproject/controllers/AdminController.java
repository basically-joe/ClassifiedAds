package com.example.classifiedjavaproject.controllers;


import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.repositories.adminRepositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/administrators")

public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id){
        return adminRepository.getAdminById(id);
    }




}
