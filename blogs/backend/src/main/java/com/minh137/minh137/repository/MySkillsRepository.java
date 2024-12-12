package com.minh137.minh137.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.minh137.minh137.entity.MySkills;

@Repository
public interface MySkillsRepository extends JpaRepository<MySkills, Long> {

}
