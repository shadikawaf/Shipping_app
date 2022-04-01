package com.example.BoxinatorApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BoxinatorApp.model.Box;

public interface BoxRepository extends JpaRepository<Box, Integer> {
}