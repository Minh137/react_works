package com.minh137.minh137.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minh137.minh137.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long>{

    //post 기준으로 검색
    Optional<Post> findByPost(String post);
}
