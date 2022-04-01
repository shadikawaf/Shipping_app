package com.example.BoxinatorApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "box_table")
public class Box {

	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private int id;
	 
	  @Column(name = "Name")
	  private String name;
	 
	  @Column(name = "Weight")
	  private int weight;
	 
	  @Column(name = "Color")
	  private String color;
	 
	  @Column(name = "Country")
	  private String country;
	 

	  public int getId() {
	    return id;
	  }
	 
	  public void setId(int id) {
		  this.id = id;
	  }
	  
	  public String getName() {
	    return name;
	  }
	 
	  public void setName(String name) {
	    this.name = name;
	  }
	 
	  public int getWeight() {
	    return weight;
	  }
	 
	  public void setWeight(int weight) {
	    this.weight = weight;
	  }
	 
	  public String getColor() {
	    return color;
	  }
	 
	  public void setColor(String color) {
	    this.color = color;
	  }
	 
	  public String getCountry() {
	    return country;
	  }
	 
	  public void setCountry(String country) {
	    this.country = country;
	  }
	  
	  public Box() {
	  }
	  
	 
	  @Override
	  public String toString() {
	    return "Box [id=" + id + ", name=" + name + ", weight=" + weight + ", color=" + color
	        + ", country=" + country + "]";
	  }
	 
	}
	