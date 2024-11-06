package com.example.Monster_Hunter_API.service;

import com.example.Monster_Hunter_API.entity.Monster;
import org.springframework.stereotype.Service;
import com.example.Monster_Hunter_API.repository.MonsterRepository;

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
        boolean newFavoriteStatus = (monster.isFavorite()) ? false : true;
        monsterRepository.findById(id).get().setFavorite(newFavoriteStatus);
        monsterRepository.save(monster);
        System.out.println("In service: " + monster.getName() + " " + monster.isFavorite());
        return monsterRepository.findById(id).get();
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
