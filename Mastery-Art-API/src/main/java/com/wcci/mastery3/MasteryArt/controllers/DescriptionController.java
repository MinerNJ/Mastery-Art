package com.wcci.mastery3.MasteryArt.controllers;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.mastery3.MasteryArt.models.Art;
import com.wcci.mastery3.MasteryArt.models.Description;
import com.wcci.mastery3.MasteryArt.repositories.ArtRepository;

@CrossOrigin
@RestController
@RequestMapping("/descriptions")
public class DescriptionController {
	
	@Resource
	ArtRepository artRepo;
	
	@PostMapping("/add/{id}")
	public Art addDescription(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
	    String descriptionContent = json.getString("descriptionContent");
	    Description descriptionToAdd = new Description(descriptionContent);
	    Art art = artRepo.findById(id).get();
	    art.addDescription(descriptionToAdd); 
	    return artRepo.save(art);
	    
	}

}





