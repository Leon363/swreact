import {useEffect, useState} from "react";
import {base_url, openingCrawls} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState();
    useEffect(() => {
        fetch(`https://sw-info-api.herokuapp.com/v1/peoples/1`)
        .then((res) => res.json())
        .then((data) => setAboutMe(data))

    }, []);
    if (!aboutMe) return <p>Loading...</p>;

    return (
        <div>
            <p>Name: {aboutMe.name}</p>
            <p>Gender: {aboutMe.gender}</p>
            <p>Year of birth: {aboutMe.birth_year} (Before the Battle of Yavin)  </p>
            <p>Weight: {aboutMe.mass}</p>
            <p>Eyes: {aboutMe.eye_color}</p>
            <p></p>
        </div>
    );
};

export default AboutMe;

//
// const OpeningCrawl = () => {
//     const [openingCrawl, setOpeningCrawl] = useState();
//     useEffect(() => {
//         const episode = Math.floor(Math.random() * 6) + 1;
//         fetch(`${base_url}/v1/films/${episode}`)
//             .then((res) => res.json())
//             .then((data) => setOpeningCrawl(data.opening_crawl))
//             .catch(()=> setOpeningCrawl("Error loading opening crawl"))
//     }, [])
//     // const [crawl] = useState(() => {
//     //     const randomIndex = Math.floor(Math.random() * openingCrawls.length);
//     //     return openingCrawls[randomIndex];
//
//     // });
//     if(openingCrawls) {
//         return (
//             <div className="star-wars-container">
//                 <div className="fade"></div>
//                 <section className="crawl">
//                     <p>{openingCrawl}</p>
//                 </section>
//             </div>);
//     } else {
//         return (
//             <p className={'far-galaxy'}>
//                 <span className={'spinner-border spinner-border-sm'}></span>
//                 <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
//             </p>
//         )
//     }
//
// };