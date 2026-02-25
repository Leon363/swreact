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
    const fields = [
        "name", "gender",
        "birth_year",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color"
    ];

    const formatKeys = (key) => {
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, (l) => l.toUpperCase());
    }


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
                <div className='text-2xl leading-loose text-justify ms-20'>
                    {fields.map((key) => {
                        return (
                            <p key={key}>
                        <span className='display-3'>
                            {formatKeys(key)} :
                        </span>{' '}
                                {hero[key]}
                            </p>)
                    })
                    }

                </div>
            }
        </>
    );

}

export default AboutMe;