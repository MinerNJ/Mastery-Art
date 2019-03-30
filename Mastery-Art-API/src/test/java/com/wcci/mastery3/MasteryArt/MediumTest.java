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
import com.wcci.mastery3.MasteryArt.models.Medium;
import com.wcci.mastery3.MasteryArt.repositories.ArtistRepository;
import com.wcci.mastery3.MasteryArt.repositories.MediumRepository;


@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class MediumTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	MediumRepository mediumRepo;
	
	@Test
	public void shouldGetMedium() {
		Medium medium = mediumRepo.save(new Medium("medium"));
		
		entityManager.persist(medium);
		entityManager.flush();
		entityManager.clear();
		
		Long idToFind = 1L;
		Medium mediumFromDB = mediumRepo.findById(idToFind).get();
		
		assertThat(mediumFromDB.getMediumName(), is("medium"));
	}
}
