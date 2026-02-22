import {useEffect, useState} from "react";
import {base_url, timeLimitData} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const savedPlanets = localStorage.getItem("planets");
        if (!savedPlanets) return [];
        try {
            const parsedPlanets = JSON.parse(savedPlanets);
            const timeLeft = Date.now() - parsedPlanets.loadTime;
            if (timeLeft < timeLimitData)  {
                return parsedPlanets.payload;
            } else {
                localStorage.removeItem("planets");
                return null;
            }
        }catch (error) {
            return [];
        }
    });




    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => {
                const info = data.map(item => ({name: item.name}));
                setPlanets(info);
                const storeData = {
                    payload: info,
                    loadTime: Date.now()
                };
                localStorage.setItem("planets", JSON.stringify(storeData));
            })
            .catch(err => console.error("Error of loading:", err));
    }, [planets])


    return (
        <div className="container">
            <form>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planets">Planet</label>
                <select id="planets" name="planets" defaultValue='' >
                    <option value="">Choose the planet</option>

                    {planets.map((planet, index) => (
                        <option key={index} value={planet.name} placeholder="Your last name..">
                            {planet.name}
                        </option>
                    ))}

                </select>

                <label htmlFor="subject">Subject</label>

                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" className='nav-item btn btn-danger border-warning' value="Submit"/>

            </form>
        </div>
    )
}

export default Contact;