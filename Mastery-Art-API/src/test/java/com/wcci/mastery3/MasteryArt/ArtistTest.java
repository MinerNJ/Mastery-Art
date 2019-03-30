package com.wcci.mastery3.MasteryArt;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class ArtistTest {

	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	ArtistRepository artistRepo;
	
	@Test
	public void shouldGetArtist() {
		Artist artist = artistRepo.save(new Artist("name", null));
		
		entityManager.persist(artist);
		entityManager.flush();
		entityManager.clear();
		
		Long idToFind = 1L;
		Artist artistFromDB = artistRepo.findById(idToFind).get();
		
		assertThat(artistFromDB.getArtistName(), is("name"));
	}


}
