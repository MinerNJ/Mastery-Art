package com.wcci.mastery3.MasteryArt.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wcci.mastery3.MasteryArt.models.Artist;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Long> {

}
