package com.minh137.minh137.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@DynamicInsert    
@Entity
@Getter
@Setter
@Table(name="post_table")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String post;

    private String category;

    @Column(nullable=false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(name = "create_date", insertable=false, updatable = false)
    private LocalDateTime createDate;

    @Column(columnDefinition = "INT DEFAULT 0", insertable=false)
    private Integer hit; 

    @Column(columnDefinition = "INT DEFAULT 0", insertable=false)
    private Integer empathy; 

    private String hashtag;

    private Long ntime;

}

