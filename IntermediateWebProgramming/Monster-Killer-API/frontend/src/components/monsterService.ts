import axios, {Axios, AxiosResponse} from 'axios'
import {Monster} from "./type.ts";


// @ts-ignore
export const getMonster = async (monsterName: string): Promise<Monster[]> => {
    try {
        const response: AxiosResponse<Monster[]> = await axios.get('https://mhw-db.com/monsters')
        const monsterList: Monster[] = response.data;
        const filteredMonster: Monster[] = monsterList.filter((monster: Monster) => monster.name.toLowerCase() === monsterName.toLowerCase());
        return filteredMonster;
    }catch (e) {
        console.log('Error fetching monster', e);
        return [];
    }
}