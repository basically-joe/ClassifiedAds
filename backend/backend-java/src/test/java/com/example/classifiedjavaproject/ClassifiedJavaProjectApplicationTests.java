package com.example.classifiedjavaproject;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.adminRepositories.AdminRepository;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ClassifiedJavaProjectApplicationTests {

	@Autowired
	AdvertRepository advertRepository;

	@Autowired
	AdminRepository adminRepository;


	@Test
	public void contextLoads() {
	}

//	@Test
//	public void canUpdateAdvert(){
//		Admin admin = new Admin("James Gandolfini", "The Husky Gentleman");
//		Advert advert = new Advert("Appliances", "tells time OK", "Used clock radio", 90, admin);
//		advertRepository.save(advert);
////		advert.updateAdvertById("Telephonics", "tells time OK", "Used clock telephone", 90, admin);
////		advertRepository.save(advert);
//


//	}

}
