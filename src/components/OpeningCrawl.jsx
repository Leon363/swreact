import {openingCrawls} from "../utils/constants.js";
import {useState} from "react";

const OpeningCrawl = () => {
    const [crawl] = useState(() => {
        const randomIndex = Math.floor(Math.random() * openingCrawls.length);
        return openingCrawls[randomIndex];
    });

    return (
        <div className="star-wars-container">
            <div className="fade"></div>
            <section className="crawl">
                <p>{crawl}</p>
            </section>
        </div>);
};

export default OpeningCrawl;
