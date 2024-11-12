import MenuClick1 from "./assets/audio/MenuClick.mp3"
import MenuClick2 from "./assets/audio/MenuClick2.mp3"
import MenuClick3 from "./assets/audio/MenuClick3.mp3"
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const monsterNameAutoComplete = [
    'Anjanath',
    'Ancient Leshen',
    'Azure Rathalos',
    'Barroth',
    'Bazelgeuse',
    'Behemoth',
    'Black Diablos',
    'Deviljho',
    'Diablos',
    'Dodogama',
    'Great Girros',
    'Great Jagras',
    'Jyuratodus',
    'Kirin',
    'Kulve Taroth',
    'Kushala Daora',
    'Kulu-Ya-Ku',
    'Lavasioth',
    'Legiana',
    'Leshen',
    'Lunastra',
    'Namielle',
    'Nergigante',
    'Odogaron',
    'Paolumu',
    'Pink Rathian',
    'Pukei-Pukei',
    'Radobaan',
    'Rajang',
    'Rathalos',
    'Rathian',
    'Safi\'jiiva',
    'Stygian Zinogre',
    'Teostra',
    'Tobi-Kadachi',
    'Tzitzi-Ya-Ku',
    'Uragaan',
    'Vaal Hazak',
    'Viper Tobi-Kadachi',
    'Zinogre',
    'Zorah Magdaros',
    'Xeno\'jiiva'
];

const hoverSound = new Audio (MenuClick1)
const clickSound = new Audio (MenuClick2)
const confirmSound = new Audio (MenuClick3)



export function playHover(){
    hoverSound.currentTime = 0;
    hoverSound.play();
}
export function playClick(){
    clickSound.currentTime = 0;
    clickSound.play();
}
export function playConFirm(){
    confirmSound.currentTime = 0;
    confirmSound.play();
}


export default monsterNameAutoComplete