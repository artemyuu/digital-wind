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
                <Route exact path="/" element={<MainPage />}/>
                <Route path="/catalog" element={<CatalogPage />}/>
                <Route exact path="/news" element={<NewsPage />}/>
                <Route path="/news/1" element={<CardNewsPage />}/>
                <Route path="/faq" element={<FaqPage />}/>
                <Route path="/catalog/1" element={<CardWorkPage />}/>
                <Route path="/account" element={<AccountPage />}/>
              </Routes>
            </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
