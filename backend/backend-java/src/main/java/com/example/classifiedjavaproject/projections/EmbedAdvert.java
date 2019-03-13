package com.example.classifiedjavaproject.projections;


import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedAdvert", types= Advert.class)
public interface EmbedAdvert {
    String getDescription();
    String getTitle();
    String getCategory();
    double getAskingPrice();
    Admin getAdmin();
    Long getId();
    String getImage();
    Integer getLikes_counter();
}
