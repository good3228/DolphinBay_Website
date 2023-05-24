/* eslint-disable */
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
              <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
                <Navbar />
              </div>
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
        <Route path="/menu" element={<FullMenu />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
