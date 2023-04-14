import NavSocial from "./components/NavSocial";
import Publicity from "./features/Publicity";
import Videos from "./features/Videos";
import Music from "./features/Music";
import TourDates from "./features/TourDates";
import Biography from "./features/Biography";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <NavSocial />
      <Publicity />
      <Videos />
      <Music />
      <TourDates />
      <Biography />
      <Contact />
    </div>
  );
}

export default App;
