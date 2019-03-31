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

import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;

@CrossOrigin
@RestController
@RequestMapping("/artists")
public class ArtistController {

	@Resource
	ArtistRepository artistRepo;

	@GetMapping("")
	public Collection<Artist> getArtists() {
		return (Collection<Artist>) artistRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Artist getArtist(@PathVariable Long id) {
		return artistRepo.findById(id).get(); 
	}
	
	@PostMapping("/add/{id}")
	public Collection<Artist> addArtist(@RequestBody String body) throws JSONException{
     JSONObject json = new JSONObject(body);
     String artistName = json.getString("artistName");
     String artistImage = json.getString("artistImage");
     artistRepo.save(new Artist(artistName, artistImage));
     return (Collection<Artist>) artistRepo.findAll();
	}
}
