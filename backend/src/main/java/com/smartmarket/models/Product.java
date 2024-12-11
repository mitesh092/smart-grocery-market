package com.smartgrocerymarket.models;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
    @Id
    private Long id;
    private String name;
    private Double price;
    private String description;

    // Getters and setters
}
