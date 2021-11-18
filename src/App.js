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
import Works from "./components/works/Works";
import PartnersSlider from "./components/partners-slider/PartnersSlider";
import Footer from "./components/footer/Footer";
import CatalogPage from "./components/catalog-page/CatalogPage";
import CardWorkPage from "./components/card-work-page/CardWorkPage";
import AccountPage from "./components/account-page/AccountPage";
import NewsPage from "./components/news-page/NewsPage";
import FaqPage from "./components/faq-page/FaqPage";
import CardNewsPage from "./components/card-news-page/CardNewsPage";

function App() {
  return (
    <div className="App">
      <TopMenu/>
      <main className="main">
        <NavBar />
        <div className="main__content custom-scroll">
          {/* <SlideHeader/>         
          <Aboutcontest/>
          <Scorebar/>
          <SectionTitle title="наши победители"/>
          <Winners />
          <SectionTitle title="работы участников"/>
          <Works />
          <SectionTitle title="наши партнёры"/>
          <PartnersSlider />
          <Footer /> */}
          {/* <CatalogPage /> */}
          {/* <CardWorkPage /> */}
          {/* <AccountPage /> */}
          {/* <NewsPage /> */}
          <CardNewsPage />
        </div>
      </main>
    </div>
  );
}

export default App;
