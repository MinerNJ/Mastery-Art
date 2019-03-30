package com.wcci.mastery3.MasteryArt;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.repositories.ArtRepository;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;
import com.wcci.mastery3.MasteryArt.repositories.MediumRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	ArtistRepository artistRepo;
	
	@Resource
	MediumRepository mediumRepo;
	
	@Resource
	ArtRepository artRepo;

	@Override
	public void run(String... args) throws Exception {
		
		Artist artist1 = artistRepo.save(new Artist("Pink Floyd", "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Pink_Floyd-Animals-Frontal.jpg/220px-Pink_Floyd-Animals-Frontal.jpg"));
		Artist artist2 = artistRepo.save(new Artist("Elton John", "http://d2lubch9d26anb.cloudfront.net/cdn/farfuture/_M1XdrrPaO5z9a0sscNy_SAmd-cLzanx-C2Htf7QjUo/mtime:1524196841/sites/default/files/elton%20john%20rock%20of%20the%20westies.jpg"));
		Artist artist3 = artistRepo.save(new Artist("Backstreet Boys", "https://imgix.ranker.com/user_node_img/155/3084911/original/millennium-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces"));

	}
	
	
}
