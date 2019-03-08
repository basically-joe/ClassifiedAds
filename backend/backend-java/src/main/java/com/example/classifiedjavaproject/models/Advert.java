package com.example.classifiedjavaproject.models;

public class Advert {

    private Long id;

    private String category;

    private String description;

    private String title;

    private double askingPrice;

    public Advert(String category, String description, String title, double askingPrice ){

        this.category = category;
        this.description = description;
        this.title = title;
        this.askingPrice = askingPrice;
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
}
