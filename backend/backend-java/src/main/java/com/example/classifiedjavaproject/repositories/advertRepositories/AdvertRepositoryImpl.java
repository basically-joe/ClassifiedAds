package com.example.classifiedjavaproject.repositories.advertRepositories;

import com.example.classifiedjavaproject.models.Advert;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Transactional
public class AdvertRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    List<Advert> findAdvertsFromAdmin(String userName) {
        List<Advert> result = null;

        Session session = entityManager.unwrap(Session.class);
        Criteria cr = session.createCriteria(Advert.class);
        cr.createAlias("admins", "adminAlias");           // NEW
        cr.add(Restrictions.eq("adminAlias.userName", userName)); // NEW
        result = cr.list();  // NEW


        return result;
    }
}
