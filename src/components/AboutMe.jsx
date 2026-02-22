import {base_url, timeLimitData} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState(() => {
        const savedData = localStorage.getItem("hero")
        if (!savedData) return null;
        try {
            const parsedData = JSON.parse(savedData);
            const timeLeft = Date.now() - parsedData.loadTime;
            if (timeLeft < timeLimitData) {
                return parsedData.payload;
            } else {
                localStorage.removeItem("hero");
                return null
            }
        } catch (e) {
            return null;
        }
    })

    useEffect(() => {
        if (!hero) {

            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {

                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color

                    };
                    const storeData = {
                        payload: info,
                        loadTime: Date.now()
                    };
                    localStorage.setItem("hero", JSON.stringify(storeData));

                    setHero(info);
                })
        }
    }, [hero]);

    return (
        <>
            {hero &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    <p><span className='display-3'>name:</span> {hero.name}</p>
                    <p><span className='display-3'>gender:</span> {hero.gender}</p>
                    <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-3'>height:</span> {hero.height}</p>
                    <p><span className='display-3'>mass:</span> {hero.mass}</p>
                    <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );

}

export default AboutMe;