export default function GroundAndCactus() {

    return <svg
        className="cactus"
        viewBox="0 0 150 275"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            fill="none"
            stroke="#000000"
            stroke-width="30"
            stroke-linecap="round"
            stroke-miterlimit="10"
            x1="75"
            y1="25"
            x2="75"
            y2="275"
        />
        <path
            fill="none"
            stroke="#000000"
            stroke-width="30"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M75,150 c0,0-40-3-40-40s0-65,0-30"
        />
        <path
            fill="none"
            stroke="#000000"
            stroke-width="30"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M75,175 c0,0,40-3,40-40s0-65,0-65"
        />
    </svg>;

}