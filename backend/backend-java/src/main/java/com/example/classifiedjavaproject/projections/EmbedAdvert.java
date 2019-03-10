package com.example.classifiedjavaproject.projections;


import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedAdvert", types= Advert.class)
public interface EmbedAdvert {

   String getCategory();
   String getDescription();
   String getTitle();
   double getAskingPrice();
   Admin getAdmin();

}

