/**
 * Renders the home page of the application.
 * @component
 * @module HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
import TempleFeed from "./GlobalComponents/TempleFeed";
import { useEffect } from "react";
import React from "react";
import Welcome from "./HomePage/Components/Welcome";
import Buttons from "./HomePage/Components/Buttons";
import "./Style/homepage.css";
import HighlightGallery from "./HomePage/Components/HighlightGallery";

const HomePage = () => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "#faf0f0";
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="home-page main-component" style={{ padding: "24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="left-col">
          <Welcome />
          <HighlightGallery />
          <Buttons />
        </div>

        {/* RIGHT COLUMN: sticky card so it doesn't cover content and stays visible */}
        <div style={{ position: "sticky", top: 16 }}>
          <TempleFeed />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
