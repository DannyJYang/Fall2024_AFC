import axios, {Axios, AxiosResponse} from 'axios'
import {Monster} from "./type.ts";



export const getMonster = async (monsterName: string): Promise<Monster[]> => {
    try {
        const response: AxiosResponse<Monster[]> = await axios.get('https://mhw-db.com/monsters')
        const monsterList: Monster[] = response.data;
        const filteredMonster: Monster[] = monsterList.filter((monster: Monster) =>
            monster.name.toLowerCase() === monsterName.toLowerCase());
        return filteredMonster;
    }catch (e) {
        console.log('Error fetching monster', e);
        return [];
    }
}

export const updateFavoriteStatus = async (id) => {
    try {
        console.log("I am in update favorite status!!")
        const response = axios.patch(`http://localhost:8080/api/monster/${id}`).then(response => response.data);
        return response;
    }catch (e){
        console.log("Issues updating the favorite status: ", e);
    }
}

export const getAllFavoriteMonsters = async () => {
    try {
        return axios.get('http://localhost:8080/api/monster/favorites').then(response => response.data);
    }catch(e){
        console.error("Fetch request failed for getting all favorite monsters: ", e);
    }
}

export const getFavoriteStatus = async (id:number) => {
    try {
        return axios.get(`http://localhost:8080/api/monster/favoritestatus/${id}`).then(response => response.data);
    }catch (e) {
        console.log("error catching favorite status of monster", e);
    }
}