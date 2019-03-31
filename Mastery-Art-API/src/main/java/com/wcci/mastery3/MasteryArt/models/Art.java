package com.wcci.mastery3.MasteryArt.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Art {
	@Id	
	@GeneratedValue
	private Long id;
	private String artTitle;
	@Lob
	private String artImage;
	@ElementCollection
	@CollectionTable
	private Collection<Description> descriptions;
	@ManyToMany(mappedBy="art")
	@JsonIgnore
	private Collection<Artist> artists;
	
	public Long getId() {
		return id;
	}
	public String getArtTitle() {
		return artTitle;
	}
	public String getArtImage() {
		return artImage;
	}
	
	public Collection<Description> getDescriptions() {
		return descriptions;
	}
	
	public void addDescription(Description descriptionToAdd) {
		descriptions.add(descriptionToAdd);
	}
	
	public Collection<Artist> getArtists() {
		return artists;
	}
	
	public Art() {}
	
	public Art(String artTitle, String artImage) {
		this.artTitle = artTitle;
		this.artImage = artImage;
		this.descriptions = new ArrayList<Description>();
	}
	
	

}
