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
public class Artist {
	@Id	
	@GeneratedValue
	private Long id;
	private String artistName;
	@Lob
	private String artistImage;
	
	public Long getId() {
		return id;
	}
	public String getArtistName() {
		return artistName;
	}
	public String getArtistImage() {
		return artistImage;
	}
	
	public Artist() {}
	
	public Artist(String artistName, String artistImage) {
		this.artistName = artistName;
		this.artistImage = artistImage;
	}
	
	
}
