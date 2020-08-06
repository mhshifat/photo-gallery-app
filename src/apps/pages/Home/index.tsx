import React from "react";
import Banner from "./components/Banner";
import UploadForm from "./components/forms/UploadForm";
import ImageList from "./components/ImageList";

const Home = () => {
  return (
    <div className="App">
      <Banner />
      <UploadForm />
      <ImageList />
    </div>
  );
};

export default Home;
