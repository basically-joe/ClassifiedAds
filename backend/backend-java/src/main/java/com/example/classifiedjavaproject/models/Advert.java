package com.example.classifiedjavaproject.models;


import javax.persistence.*;

@Entity
@Table(name="adverts")

public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="category")
    private String category;

    @Column(name="description")
    private String description;

    @Column(name="title")
    private String title;

    @Column(name="asking_price")
    private double askingPrice;

    @ManyToOne
    @JoinColumn(name="admin_id", nullable = false)
    private Admin admin;

    public Advert(String category, String description, String title, double askingPrice, Admin admin ){

        this.category = category;
        this.description = description;
        this.title = title;
        this.askingPrice = askingPrice;
        this.admin = admin;
    }

    public Advert(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getAskingPrice() {
        return askingPrice;
    }

    public void setAskingPrice(double askingPrice) {
        this.askingPrice = askingPrice;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
}
