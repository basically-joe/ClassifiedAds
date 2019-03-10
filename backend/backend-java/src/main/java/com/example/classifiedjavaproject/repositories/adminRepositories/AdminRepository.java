package com.example.classifiedjavaproject.repositories.adminRepositories;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.projections.EmbedAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;


@RepositoryRestResource(excerptProjection = EmbedAdmin.class)
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Admin getAdminById(Long id);



}
