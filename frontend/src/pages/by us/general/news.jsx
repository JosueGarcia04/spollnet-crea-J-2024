import React from 'react';
import Footer from '../../../components/general/footer';
import Navbar from '../../../components/general/navBar';
import NavDown from '../../../components/general/navDown';
import ContentNews from '../../../components/news/contentNews';

const News = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="py-5">
        <ContentNews />
      </div>
      <NavDown />
      <Footer />
    </div>
  );
};

export default News;
