import React from 'react';
import News from '../news/News';
import SectionTitle from '../section-title/SectionTitle';

const NewsPage = () => {
  return (
    <>
      <SectionTitle title="Новости"/>
      <div className="container">
        <News />
      </div>
    </>
  );
}

export default NewsPage;
