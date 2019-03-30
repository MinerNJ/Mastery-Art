package com.wcci.mastery3.MasteryArt.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.models.Medium;
import com.wcci.mastery3.MasteryArt.repositories.MediumRepository;

@CrossOrigin
@RestController
@RequestMapping("/mediums")
public class MediumController {
	
	@Resource
	MediumRepository mediumRepo;
	
	@GetMapping("")
	public Collection<Medium> getMediums() {
		return (Collection<Medium>) mediumRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public Medium getMedium(@PathVariable Long id) {
		return mediumRepo.findById(id).get(); 
	}

}
