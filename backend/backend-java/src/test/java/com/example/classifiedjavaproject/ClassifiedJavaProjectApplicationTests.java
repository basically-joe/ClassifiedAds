package com.example.classifiedjavaproject;

import com.example.classifiedjavaproject.models.Admin;
import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.repositories.adminRepositories.AdminRepository;
import com.example.classifiedjavaproject.repositories.advertRepositories.AdvertRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

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

	@Test
	public void canGetAdvertsFromAdmin(){
		Admin admin = new Admin("gilroy_ms", "Harry's Pottery");
		adminRepository.save(admin);
		Advert advert = new Advert("hi", "hello", "soda", 90, admin);
		advertRepository.save(advert);


		List<Advert> adverts = advertRepository.getAdvertsByAdmin("gilroy_ms");
		assertEquals(1, adverts.size());
	}


}
