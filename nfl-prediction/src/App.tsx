import './App.css'
import SplitText from './components/SplitText'
import Dock from './components/Dock';
import { IoIosHome } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";


const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const items = [
    { icon: <IoIosHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <FaDatabase size={18} />, label: 'Data', onClick: () => alert('Data!') },

];

function App() {
    return (
        <>
            <div>
                <h1>
                    <SplitText
                        text="NFL Prediction"
                        className="text-5xl font-bold text-center"
                        delay={100}
                        duration={.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </h1>
                <h2 className="mt-2 text-2xl">
                    CMSC320 Fall 2025 Project
                </h2>
                <h3 className="mt-2 max-w-md">
                    Andrew Weil, Corey Gross, Kai Fosshage, Ben Scrivanich, Allison Bejeck, Stephen Griffin
                </h3>
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />

            </div>
        </>
    )
}

export default App
