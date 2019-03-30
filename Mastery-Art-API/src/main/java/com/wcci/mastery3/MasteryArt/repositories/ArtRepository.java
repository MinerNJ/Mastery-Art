package com.wcci.mastery3.MasteryArt.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.wcci.mastery3.MasteryArt.models.Art;

@Repository
public interface ArtRepository extends CrudRepository<Art, Long> {

}
