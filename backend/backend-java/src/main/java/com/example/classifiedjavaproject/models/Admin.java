package com.example.classifiedjavaproject.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="admins")

public class Admin {

        @Id
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        private Long id;

        @Column(name="user_name")
        private String userName;

        @Column(name="client_name")
        private String clientName;


        @JsonIgnore
        @OneToMany(mappedBy = "admin", cascade = CascadeType.REMOVE, orphanRemoval = true)
        private List<Advert> adverts;

        public Admin(String userName, String clientName){
            this.userName = userName;
            this.clientName = clientName;
            this.adverts = new ArrayList<>();

        }

        public Admin(){

        }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

        public Long getAdminId() {
            return id;
        }

        public void setAdminId(Long id) {
            this.id = id;
        }



    }


