package com.example.Monster_Hunter_API.controller;

import com.example.Monster_Hunter_API.entity.Monster;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Monster_Hunter_API.service.MonsterService;

import java.util.List;

//(origins = "http://localhost:3000")  //Allow CORS from React App - put this next to crossorigin

@RestController
@RequestMapping("/api/monster")
@CrossOrigin
public class MonsterController {

    private final MonsterService monsterService;

    public MonsterController(MonsterService monsterService) {
        this.monsterService = monsterService;
    }

    @GetMapping()
    public List<Monster> fetchMonsters() {
        return monsterService.findAllMonster();
    }

    @GetMapping("/favorites")
    public List<Monster> fetchFavoriteMonsters() {
        return monsterService.findFavoriteMonsters();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Monster> updateFavoriteStatus (@PathVariable("id") Long id) {
//        Monster updatedMonster = monsterService.changeFavorite(id);
        monsterService.changeFavorite(id);
        System.out.println("I am in controller - updating favorite status:" +
                monsterService.findMonsterById(id).getName() + " " + monsterService.findMonsterById(id).isFavorite());
        return ResponseEntity.ok(monsterService.findMonsterById(id));
    }

    @GetMapping("/favoritestatus/{id}")
    public Boolean getFavoriteStatus (@PathVariable("id") Long id) {
        return monsterService.getFavoriteStatus(id);
    }

}
