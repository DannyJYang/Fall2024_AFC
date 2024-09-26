import { diceArray } from "./Helper";
import "./Dice.css"


const Dice = (props) => {
    let {roll} = props;
    return (
        <span id="diceContainer">
            <i class={`fas fa-dice-${diceArray[roll]}`}></i>
        </span>
    )
}

export default Dice;
