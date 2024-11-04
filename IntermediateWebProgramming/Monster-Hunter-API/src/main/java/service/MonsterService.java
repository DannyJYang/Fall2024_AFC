package service;

import entity.Monster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.MonsterRepository;

import java.util.List;

@Service
public class MonsterService {


    @Autowired
    private MonsterRepository monsterRepository;

    public Monster saveMonster (Monster monster) {
        return monsterRepository.save(monster);
    }
    public List<Monster> findAllMonster() {
        return monsterRepository.findAll();
    }
    public Monster findMonsterById(Long id) {
        return monsterRepository.findById(id).get();
    }
    public Boolean makeFavorite(Long id) {
        Monster monster = findMonsterById(id);
        if(monster.isFavorite() == true) {
            monsterRepository.findById(id).get().setFavorite(false);
            return monster.isFavorite();
        }
        else {
            monsterRepository.findById(id).get().setFavorite(true);
            return monster.isFavorite();
        }
    }
}
