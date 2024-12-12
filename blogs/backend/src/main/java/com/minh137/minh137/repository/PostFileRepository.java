package com.minh137.minh137.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minh137.minh137.entity.PostFile;

public interface PostFileRepository extends JpaRepository<PostFile, Long>{
    List<PostFile> findAllByNtime(Long ntime);
    void deleteFileByNtime(Long ntime);
 }
