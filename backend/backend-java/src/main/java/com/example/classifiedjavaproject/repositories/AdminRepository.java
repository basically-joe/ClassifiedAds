package com.example.classifiedjavaproject.repositories;

import com.example.classifiedjavaproject.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {



}
