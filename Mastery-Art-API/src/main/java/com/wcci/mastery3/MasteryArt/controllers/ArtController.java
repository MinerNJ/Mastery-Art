package com.wcci.mastery3.MasteryArt.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.mastery3.MasteryArt.models.Art;
import com.wcci.mastery3.MasteryArt.repositories.ArtRepository;

@CrossOrigin
@RestController
@RequestMapping("/art")
public class ArtController {

	@Resource
	ArtRepository artRepo;
	
	@GetMapping("")
	public Collection<Art> getArt() {
		return (Collection<Art>) artRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Art getSingleArt(@PathVariable Long id) {
		return artRepo.findById(id).get(); 
	}
}
