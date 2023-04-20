package com.georgialr.webservices.udemy.todos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoJpaRepository extends JpaRepository<Todo,Long> {

    List<Todo> findByUsername(String username);
}
