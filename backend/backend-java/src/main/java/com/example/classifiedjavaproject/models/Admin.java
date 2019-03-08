package com.example.classifiedjavaproject.models;

import java.util.ArrayList;
import java.util.List;


public class Admin {


        private Long id;

        private String userName;

        private String clientName;

        private List<Advert> adverts;

        public Admin(String userName, String clientName){
            this.userName = userName;
            this.clientName = clientName;
            this.adverts = new ArrayList<>();
        }

        public Admin(){

        }

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getClientName() {
            return clientName;
        }

        public void setClientName(String clientName) {
            this.clientName = clientName;
        }

        public List<Advert> getAdverts() {
            return adverts;
        }

        public void setAdverts(List<Advert> adverts) {
            this.adverts = adverts;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }


