package repository;

import entity.Monster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class MonsterRepository extends JpaRepository<Monster, Long> {
}
