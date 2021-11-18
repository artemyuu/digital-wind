import React from 'react';
import FilterBar from '../filter-bar/FilterBar';
import SectionTitle from '../section-title/SectionTitle';
import Works from '../works/Works';

const CatalogPage = () => {
  return (
    <>
    <SectionTitle title="Каталог работ"/>
    <div className="container">
      <FilterBar />
      <Works showLink={false} />
    </div>
    </>
  );
}

export default CatalogPage;
