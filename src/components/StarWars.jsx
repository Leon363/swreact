import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className='text-2xl text-justify leading-loose'>
            {starWarsInfo}
        </div>
    )
}

export default StarWars;