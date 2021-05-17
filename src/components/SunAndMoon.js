export default function SunAndMoon( { night } ) {

    const sun = <g>
        <circle fill="#FFEDA6" cx="50" cy="50" r="50"/>
        <circle fill="#E3BB83" cx="50" cy="50" r="40"/>
        <circle fill="#D17C4D" cx="50" cy="50" r="30"/>
        <circle fill="#B83647" cx="50" cy="50" r="20"/>
        <circle fill="#872E3F" cx="50" cy="50" r="10"/>
    </g>;

    const moon = <g>
        <circle cx="50" cy="50" r="25" fill="#FAFAFF"/>
    </g>;

    return <svg
        className="sun-and-moon"
        viewBox="0 0 100 100"
    >
        { night ? moon : sun }
    </svg>;

}