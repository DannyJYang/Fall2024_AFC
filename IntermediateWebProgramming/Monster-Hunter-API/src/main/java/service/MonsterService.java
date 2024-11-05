package service;

import entity.Monster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.MonsterRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MonsterService {

    private final MonsterRepository monsterRepository;

    public MonsterService(MonsterRepository monsterRepository) {
        this.monsterRepository = monsterRepository;
    }

    public Monster saveMonster (Monster monster) {
        return monsterRepository.save(monster);
    }
    public List<Monster> findAllMonster() {
        return monsterRepository.findAll();
    }
    public Monster findMonsterById(Long id) {
        return monsterRepository.findById(id).get();
    }

    public Monster changeFavorite(Long id) {
        Monster monster = monsterRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("Monster not found with id: " + id)
        );
        if(monster.isFavorite()) {
            monsterRepository.findById(id).get().setFavorite(false);
            System.out.println(monsterRepository.findById(id).get().isFavorite());
            return monster;
        }
        else {
            monsterRepository.findById(id).get().setFavorite(true);
            System.out.println(monsterRepository.findById(id).get().isFavorite());
            return monster;
        }
    }

    public Boolean getFavoriteStatus (Long id) {
        Monster monster = findMonsterById(id);
        return monster.isFavorite();
    }

    public List<Monster> findFavoriteMonsters() {
        List<Monster> allMonsters = monsterRepository.findAll();
        List<Monster> favoriteMonsters = new ArrayList<>();
        for(Monster m: allMonsters) {
            if(m.isFavorite()) {
                favoriteMonsters.add(m);
            }
        }
        return favoriteMonsters;

//        List<Monster> allMonsters = monsterRepository.findAll();
//        return allMonsters.stream()
//                .filter(Monster::isFavorite)
//                .collect(Collectors.toList());

    }

}
