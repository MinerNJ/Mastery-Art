package com.wcci.mastery3.MasteryArt;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import com.wcci.mastery3.MasteryArt.models.Art;
import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.models.Medium;
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
		
		Artist artist1 = artistRepo.save(new Artist("Alfred Eisenstaedt", "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Pink_Floyd-Animals-Frontal.jpg/220px-Pink_Floyd-Animals-Frontal.jpg"));
		Artist artist2 = artistRepo.save(new Artist("Michaelangelo", "http://d2lubch9d26anb.cloudfront.net/cdn/farfuture/_M1XdrrPaO5z9a0sscNy_SAmd-cLzanx-C2Htf7QjUo/mtime:1524196841/sites/default/files/elton%20john%20rock%20of%20the%20westies.jpg"));
		Artist artist3 = artistRepo.save(new Artist("Auguste Rodin", "https://imgix.ranker.com/user_node_img/155/3084911/original/millennium-photo-u2?w=650&q=50&fm=pjpg&fit=crop&crop=faces"));

		Medium medium1 = mediumRepo.save(new Medium("Photograph"));
		Medium medium2 = mediumRepo.save(new Medium("Paint on Canvas"));
		Medium medium3 = mediumRepo.save(new Medium("Marble"));
		
		Art art1 = artRepo.save(new Art("Sailor Kissing Woman", "https://cdn.cnn.com/cnnnext/dam/assets/130830221007-05-iconic-kiss---restricted-horizontal-large-gallery.jpg"));
		Art art2 = artRepo.save(new Art("The Creation of Adam", "https://imgix.ranker.com/node_img/110/2185637/original/the-creation-of-adam-artwork-photo-1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"));
		Art art3 = artRepo.save(new Art("The Thinker", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Thinker%2C_Rodin.jpg/260px-The_Thinker%2C_Rodin.jpg"));
	}
	
	
}
