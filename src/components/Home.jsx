import OpeningCrawl from "./OpeningCrawl.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Hero from "./Hero.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <OpeningCrawl />
        </main>
    );
};

export default Home;