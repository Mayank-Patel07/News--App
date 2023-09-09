import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="general"
                key="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="business"
                key="business"
                colorname={"warning"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="entertainment"
                key="entertainment"
                colorname={"success"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="general"
                key="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="health"
                key="health"
                colorname={"success"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="science"
                key="science"
                colorname={"danger"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="sports"
                key="sports"
                colorname={"warning"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                setProgress={setProgress}
                pageSize={5}
                category="technology"
                key="technology"
                colorname={"danger"}
              />
            }
          />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}
