import "./App.css";
import NavBar from "./component/navbar/NavBar";
import Banner from "./component/navbar/banner/Banner";
import StatsBar from "./component/navbar/StatsBar/StatsBar";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <StatsBar />
    </div>
  );
}

export default App;
