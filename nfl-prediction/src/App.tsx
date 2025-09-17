import './App.css'
import SplitText from './components/SplitText'
import Dock from './components/Dock';
import { IoIosHome } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";


const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const items = [
    { icon: <IoIosHome size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <FaDatabase size={18} />, label: 'Data', onClick: () => document.getElementById('data')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) },
];

function App() {
    return (
        <>
            {/* Hero section */}
            <section id="home" className="min-h-screen flex flex-col items-center justify-center pb-32 bg-neutral-950 text-white">
                <h1>
                    <SplitText
                        text="NFL Prediction"
                        className="text-5xl md:text-7xl font-bold text-center"
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
                <h2 className="mt-2 text-2xl">CMSC320 Fall 2025 Project</h2>
                <h3 className="mt-2 max-w-md text-gray-300 text-center">
                    Andrew Weil, Corey Gross, Kai Fosshage, Ben Scrivanich, Allison Bejeck, Stephen Griffin
                </h3>
            </section>

            {/* Below section with slightly different color */}
            <section id="data" className="min-h-screen flex items-center justify-center bg-neutral-900 text-gray-100 pb-32">
                <div className="max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Explore the Data</h2>
                    <p className="text-gray-300">
                        This section sits below the intro and uses a slightly different background.
                        Add your content here — charts, tables, or explanations.
                    </p>
                </div>
            </section>

            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </>
    )
}

export default App
