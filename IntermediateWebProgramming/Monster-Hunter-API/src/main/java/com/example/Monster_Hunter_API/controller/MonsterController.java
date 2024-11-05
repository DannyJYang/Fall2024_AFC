package com.example.Monster_Hunter_API.controller;

import com.example.Monster_Hunter_API.entity.Monster;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Monster_Hunter_API.service.MonsterService;

import java.util.List;

@RestController
@RequestMapping("/api/monster")
//@CrossOrigin(origins = "*")
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

    @PutMapping("/{id}")
    public ResponseEntity<Monster> updateFavoriteStatus (@PathVariable("id") Long id) {
        Monster updatedMonster = monsterService.changeFavorite(id);
        return ResponseEntity.ok(updatedMonster);
    }

    @GetMapping("/favoritestatus/{id}")
    public Boolean getFavoriteStatus (@PathVariable("id") Long id) {
        return monsterService.getFavoriteStatus(id);
    }

}
