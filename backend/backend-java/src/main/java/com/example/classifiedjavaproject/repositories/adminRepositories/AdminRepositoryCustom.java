package com.example.classifiedjavaproject.repositories.adminRepositories;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.projections.EmbedAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAdmin.class)
public interface AdminRepositoryCustom extends JpaRepository<Admin, Long> {


}
