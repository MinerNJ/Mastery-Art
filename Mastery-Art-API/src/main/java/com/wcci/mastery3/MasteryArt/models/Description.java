package com.wcci.mastery3.MasteryArt.models;
import javax.persistence.Embeddable;
import javax.persistence.Lob;

@Embeddable
public class Description {

	@Lob
	private String descriptionContent;

	public String getDescriptionContent() {
		return descriptionContent;
	}

	public Description() {}
	
	public Description(String descriptionContent) {
		this.descriptionContent = descriptionContent;
	}
	
	
}
