import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./utils/constants.js";
import {StarWarsContext} from "./utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'mx-2'}>
            <StarWarsContext value={page}>
                <Header changePage={setPage}/>
                <div className='min-h-screen'>
                    <Main/>
                </div>
                <Footer/>
            </StarWarsContext>
        </div>
    )
}

export default App
