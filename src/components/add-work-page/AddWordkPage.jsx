import React from 'react';
import AddWorkForm from '../add-work-form/AddWorkForm';
import SectionTitle from '../section-title/SectionTitle';

const AddWordkPage = () => {
  return (
    <>
      <SectionTitle title="Заявка работы"/>
      <div className="container">
        <AddWorkForm/>
      </div>
    </>
  );
}

export default AddWordkPage;
