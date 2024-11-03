import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="page">
      <PopupWithForm />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
