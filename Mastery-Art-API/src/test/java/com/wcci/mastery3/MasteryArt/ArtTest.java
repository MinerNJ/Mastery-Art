package com.wcci.mastery3.MasteryArt;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wcci.mastery3.MasteryArt.models.Art;
import com.wcci.mastery3.MasteryArt.models.Artist;
import com.wcci.mastery3.MasteryArt.repositories.ArtRepository;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class ArtTest {

	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	ArtRepository artRepo;
	
	@Test
	public void shouldGetArt() {
		Art art = artRepo.save(new Art("art", null));
		
		entityManager.persist(art);
		entityManager.flush();
		entityManager.clear();
		
		Long idToFind = 1L;
		Art artFromDB = artRepo.findById(idToFind).get();
		
		assertThat(artFromDB.getArtTitle(), is("art"));
	}

}
