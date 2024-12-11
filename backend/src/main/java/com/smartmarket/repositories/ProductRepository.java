package com.smartgrocerymarket.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smartgrocerymarket.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {}
