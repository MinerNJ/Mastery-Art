package com.wcci.mastery3.MasteryArt.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

@Entity
public class Artist {
	@Id	
	@GeneratedValue
	private Long id;
	private String artistName;
	@Lob
	private String artistImage;
	@ManyToMany
	private Collection<Art> art;
	
	public Long getId() {
		return id;
	}
	public String getArtistName() {
		return artistName;
	}
	public String getArtistImage() {
		return artistImage;
	}
	
	public Collection<Art> getArt() {
		return art;
	}
	
	public void addGenreToGenres(Art artToAdd) {
		art.add(artToAdd);
	}	
	
	public Artist() {}
	
	public Artist(String artistName, String artistImage) {
		this.artistName = artistName;
		this.artistImage = artistImage;
		this.art = new ArrayList<Art>();
	}
	
	
}
