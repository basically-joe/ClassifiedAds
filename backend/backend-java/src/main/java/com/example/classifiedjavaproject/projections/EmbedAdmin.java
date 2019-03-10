package com.example.classifiedjavaproject.projections;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.List;

@Projection(name="embedAdmin", types= Admin.class)
public interface EmbedAdmin {
    String getuserName();
    String getClientName();
    List<Advert> getAdverts();





}