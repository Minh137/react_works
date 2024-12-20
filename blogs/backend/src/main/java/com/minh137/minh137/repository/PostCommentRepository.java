package com.minh137.minh137.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minh137.minh137.entity.PostComment;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {

    //post_id 기분으로 검색
    List<PostComment> findAllByPostId(Long id);
 
 }
