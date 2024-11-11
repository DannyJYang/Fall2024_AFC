import * as React from 'react';


export default function LandingPage() {
    return (
        <>
            <h1>I am in landing!</h1>

            <p>This is a monster hunter database project that I created to kill large monsters quickly.</p>
            <p>I wanted to know what certain large monsters are weak to element and ailment wise, what sort of elements
                or ailments</p>
            <p>they cause hunters, and what parts are breakable/severable. </p>

            <h3>Limitations</h3>
            <p>Currently limited to only large monsters in Monster hunter World</p>

            <h3>API that I am using</h3>
            <p>Currently utilizing MH: World DB (https://contrib.mhw-db.com/)</p>

            <h3>Future Updates</h3>
            <p>Will have to make my own database and assets for MH World: Iceborne, MH Rise and MH Wilds</p>

            <h2>Things to do</h2>
            <p><s>Change font to a custom font</s></p>
            <p><s>Implement favorites function</s></p>
            <p>Move background music audio slider to somewhere better</p>
            <p>Monster Hunter menu sound effect when mouse hovers or clicks something</p>
            <p>Custom mouse cursor?</p>
            <p>Maybe use monster hunter world theme as another background music</p>
            <p>Click monster icon in search and it plays monster roar sound</p>

        </>
    )
}