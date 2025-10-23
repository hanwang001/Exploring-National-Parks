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
import yosemite from "./HomePage/Assets/yosemite.jpg"; // (kept if used elsewhere)
import "./Style/homepage.css";
import HighlightGallery from "./HomePage/Components/HighlightGallery";

const HomePage = () => {
  // Light theme tweak to satisfy the "theme change" requirement
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "#faf0f0";
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  return (
    <div className="home-page main-component" style={{ padding: "24px" }}>
      {/* Two-column layout: left = existing homepage content, right = TempleFeed */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        <div>
          <Welcome />
          <HighlightGallery />
          <Buttons />
        </div>

        <div>
          <TempleFeed />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
