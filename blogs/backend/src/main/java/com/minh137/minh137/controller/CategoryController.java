package com.minh137.minh137.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minh137.minh137.entity.CategoryEntity;
import com.minh137.minh137.repository.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryEntity>> getCategories(){
        List<CategoryEntity> categories = categoryRepository.findAllByOrderByNumAsc();
        return ResponseEntity.ok(categories);
    }
    
}
