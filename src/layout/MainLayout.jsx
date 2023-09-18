import React from "react";
import "./styles/mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: "url('src/assets/background-img.jpg')" }}
      className="background-wrapper"
    >
      <div className="form-wrapper"> {children}</div>
    </div>
  );
};

export default MainLayout;
