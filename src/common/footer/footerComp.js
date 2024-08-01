import React from "react";
import "./footer.scss";

const FooterComp = () => {
  // Create a new Date object for today
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  return <div className="footer">Copyright © {currentYear} Aziza</div>;
};

export default FooterComp;
