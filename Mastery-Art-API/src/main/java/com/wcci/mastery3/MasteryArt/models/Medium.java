package com.wcci.mastery3.MasteryArt.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Medium {
	@Id	
	@GeneratedValue
	private Long id;
	private String mediumName;
	
	public Long getId() {
		return id;
	}
	public String getMediumName() {
		return mediumName;
	}
	
	public Medium() {}
	
	public Medium(String mediumName) {
		this.mediumName = mediumName;
	}

}
