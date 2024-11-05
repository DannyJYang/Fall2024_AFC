import * as React from 'react';


export default function LandingPage() {
    return (
        <>
            <h1>I am in landing!</h1>

            <p>This is a monster hunter database project that I created to kill large monsters quickly.</p>
            <p>I wanted to know what certain large monsters are weak to element and ailment wise, what sort of elements or ailments</p>
            <p>they cause hunters, and what parts are breakable/severable. </p>

            <h3>Limitations</h3>
            <p>Currently limited to only large monsters in Monster hunter World</p>

            <h3>API that I am using</h3>
            <p>Currently utilizing MH: World DB (https://contrib.mhw-db.com/)</p>

            <h3>Future Updates</h3>
            <p>Will have to make my own database and assets for MH World: Iceborne, MH Rise and MH Wilds</p>

            <h2>Things to do</h2>
            <p>Change font to a custom font</p>
            <p>Implement favorites function</p>
            <p>Fix background music audio slider to somewhere better</p>
            <p>Move search function to the navbar search bar</p>
        </>
    )
}