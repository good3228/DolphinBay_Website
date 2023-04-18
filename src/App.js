import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import {
  FullMenu,
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <AboutUs />
              <SpecialMenu />
              <Chef />
              <Intro />
              <Gallery />
              <FindUs />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/menu"
          element={
            <>
              <Navbar /> <FullMenu />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
