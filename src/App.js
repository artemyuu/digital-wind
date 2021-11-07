import TopMenu from "./components/top-menu/TopMenu";
import NavBar from "./components/nav-bar/NavBar";
import '@fontsource/roboto';
import 'normalize.css';
import './style.css'
import SlideHeader from "./components/slide-header/SlideHeader";
import Aboutcontest from "./components/about-contest/AboutContest";
import Scorebar from "./components/score-bar/ScoreBar";
import SectionTitle from "./components/section-title/SectionTitle";
import Winners from "./components/winners/Winners";

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <main className="main">
        <NavBar />
        <div className="main__content">
          <SlideHeader/>         
          <Aboutcontest/>
          <Scorebar/>
          <SectionTitle title="наши победители"/>
          <Winners />
        </div>
      </main>
    </div>
  );
}

export default App;
