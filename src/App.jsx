import FirstHero from "./components/FirstHero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <FirstHero />
    </div>
  );
};

export default App;
