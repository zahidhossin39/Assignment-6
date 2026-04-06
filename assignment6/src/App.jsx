import "./App.css";
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/navbar/banner/Banner";
import StatsBar from "./component/navbar/StatsBar/StatsBar";
import PremiumTools from "./component/PremiumTools/PremiumTools";


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <StatsBar />
      <PremiumTools />
    </div>
  );
}

export default App;
