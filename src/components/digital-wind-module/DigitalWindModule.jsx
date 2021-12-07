import React from 'react';
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import AddWordkPage from "../add-work-page/AddWordkPage";
import CatalogPage from "../catalog-page/CatalogPage";
import CardWorkPage from "../card-work-page/CardWorkPage";
import AccountPage from "../account-page/AccountPage";
import NewsPage from "../news-page/NewsPage";
import FaqPage from "../faq-page/FaqPage";
import CardNewsPage from "../card-news-page/CardNewsPage";
import MainPage from "../main-page/MainPage";
import TopMenu from "../top-menu/TopMenu";
import NavBar from "../nav-bar/NavBar";
import { Route, Routes } from "react-router-dom";

const DigitalWindModule = () => {
  return (
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
            <Route path="/digital-wind/add-work" element={<AddWordkPage />}/>
          </Routes>
        </div>
    </main>
  </div>
  );
}

export default DigitalWindModule;
