package com.wcci.mastery3.MasteryArt.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Art {
	@Id	
	@GeneratedValue
	private Long id;
	private String artTitle;
	@Lob
	private String artImage;
	
	public Long getId() {
		return id;
	}
	public String getArtTitle() {
		return artTitle;
	}
	public String getArtImage() {
		return artImage;
	}
	
	public Art() {}
	
	public Art(String artTitle, String artImage) {
		this.artTitle = artTitle;
		this.artImage = artImage;
	}
	
	

}
