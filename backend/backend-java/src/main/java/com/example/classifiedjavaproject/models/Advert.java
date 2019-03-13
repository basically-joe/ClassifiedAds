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

    @Column(name="image")
    private String image;

    @Column(name="likes_counter")
    private Integer likes_counter;


    @ManyToOne
    @JoinColumn(name="admin_id", nullable = true)
    private Admin admin;

    public Advert(Integer likes_counter, String image, String category, String description, String title, double askingPrice, Admin admin ){

        this.category = category;
        this.description = description;
        this.title = title;
        this.askingPrice = askingPrice;
        this.admin = admin;
        this.image = image;
        this.likes_counter = likes_counter;
    }

    public Advert(){

    }

    public String getImage() {
        return image;
    }

    public Integer getLikes_counter() {
        return likes_counter;
    }

    public void setLikes_counter(Integer likes_counter) {
        this.likes_counter = likes_counter;
    }

    public void setImage(String image) {
        this.image = image;
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
