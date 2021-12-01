import TopMenu from "./components/top-menu/TopMenu";
import NavBar from "./components/nav-bar/NavBar";
import '@fontsource/roboto';
import 'normalize.css';
import './style.css'
import CatalogPage from "./components/catalog-page/CatalogPage";
import CardWorkPage from "./components/card-work-page/CardWorkPage";
import AccountPage from "./components/account-page/AccountPage";
import NewsPage from "./components/news-page/NewsPage";
import FaqPage from "./components/faq-page/FaqPage";
import CardNewsPage from "./components/card-news-page/CardNewsPage";
import MainPage from "./components/main-page/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopMenu/>
        <main className="main">
          <NavBar />
            <div className="main__content custom-scroll">
              <ScrollToTop />
              <Routes>
                <Route exact path="/digital-wind/" element={<MainPage />}/>
                <Route path="/digital-wind/catalog" element={<CatalogPage />}/>
                <Route exact path="/digital-wind/news" element={<NewsPage />}/>
                <Route path="/digital-wind/news/1" element={<CardNewsPage />}/>
                <Route path="/digital-wind/faq" element={<FaqPage />}/>
                <Route path="/digital-wind/catalog/1" element={<CardWorkPage />}/>
                <Route path="/digital-wind/account" element={<AccountPage />}/>
              </Routes>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
