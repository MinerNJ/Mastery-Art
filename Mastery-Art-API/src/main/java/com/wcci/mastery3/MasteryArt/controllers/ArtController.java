package com.wcci.mastery3.MasteryArt.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.mastery3.MasteryArt.models.Art;
import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.repositories.ArtRepository;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;

@CrossOrigin
@RestController
@RequestMapping("/art")
public class ArtController {

	@Resource
	ArtRepository artRepo;
	
	@Resource
	ArtistRepository artistRepo;
	
	@GetMapping("")
	public Collection<Art> getArt() {
		return (Collection<Art>) artRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Art getSingleArt(@PathVariable Long id) {
		return artRepo.findById(id).get(); 
	}
	
	@PostMapping ("/add/{id}")
	public Artist addArtToArtist(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		String artTitle = json.getString("artTitle");
		String artImage = json.getString("artImage");
		
		Art art = artRepo.save(new Art(artTitle, artImage));
		Artist artist = artistRepo.findById(id).get();
		artist.addArtToArtist(art);
		
		return artistRepo.save(artist);
	}
}
