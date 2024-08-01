import React from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import { Container, Button } from "react-bootstrap";
import FeIcon from "../../assets/fe-icon.png";
import FooterComp from "../../common/footer/footerComp";
import NavbarComponent from "../../common/navbar/navbarComponent";

const LandingPage = () => {
  // Define the two dates
  const startDate = new Date("2021-07-26");
  const endDate = new Date();

  // Calculate the difference in time (in milliseconds)
  const timeDifference = endDate - startDate;

  // Convert time difference from milliseconds to years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Including leap years
  const yearDifference = Math.floor(timeDifference / millisecondsInYear);

  return (
    <div className="bg-primary-1 relative">
      <div className="absolute top-[-100px] left-[-50px] lg:left-[30%] aspect-square w-[200px] rounded-full bg-secondary-1" />
      <NavbarComponent />
      <div className="w-full max-w-[1140px] mx-auto mt-[50px] lg:mt-0 px-[16px] lg:px-0 h-[calc(100dvh-150px)] lg:h-[calc(100dvh-104px)] bg-primary-1 flex flex-col lg:justify-center relative">
        <div className="absolute bottom-[-35px] lg:bottom-[-55px] right-0">
          <img
            className="w-[577px] aspect-[577/485]"
            src={FeIcon}
            alt="fe-icon"
          />
        </div>
        <div>
          <h1 className="text-primary-2 text-3xl lg:text-5xl font-bold mt-auto">
            Hi There, I am
          </h1>
          <p className="text-secondary-1 text-3xl lg:text-5xl font-bold my-[10px] lg:my-[20px]">
            Aziza Az Zahrawani
          </p>
          <p className="text-primary-2 text-lg lg:text-xl max-w-[500px]">
            Welcome to my portfolio. I am a front-end enthusiast based in Batam,
            Indonesia. Explore my work and let's create something extraordinary
            together.
          </p>
        </div>
      </div>
      <div className="w-full bg-primary-2 text-white">
        <div className="w-full max-w-[1140px] mx-auto py-[64px]">
          <p className="text-center font-bold text-4xl">About Me</p>
          <div className="flex flex-col lg:flex-row px-[16px] lg:px-0 justify-center items-center gap-[50px] mt-[30px]">
            <div className="flex flex-col items-center">
              <span className="text-7xl text-primary-1">
                {yearDifference}+
              </span>
              <span className="text-xl">Years of Experience</span>
            </div>
            <p className="sm:max-w-[400px] lg:max-w-[700px] text-lg tracking-wider">
              Hello! I am Passionate Front-End Developer, specialize in
              designing and developing responsive interactive websites. Adept at
              translating design specifications into interactive web
              applications that enhance user experiences. Proficient in HTML,
              CSS, JavaScript, and modern frameworks such as React.js and
              Next.js. Skilled in collaborating with back-end developers, UI/UX
              Designer, third-party APIs, and collaborating with stakeholders to
              create user-friendly interfaces resulting in increased user
              engagement and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="w-full bg-white text-primary-2">
          <div className="w-full max-w-[1140px] mx-auto py-[64px]">
            <p className="text-center font-bold text-4xl">Experience</p>
            <div className="flex flex-col lg:flex-row px-[16px] lg:px-0 justify-center items-center gap-[50px] mt-[30px]">
              <div className="flex flex-col items-center">
                <span className="text-xl">July 2021 - now</span>
              </div>
              <div className="sm:max-w-[200px] lg:max-w-[500px] tracking-wider">
                <a
                  href="https://www.weekendinc.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="pointer text-lg font-bold hover:text-secondary-1"
                >
                  Frontend Developer - WEEKEND Inc
                </a>
                <ul className="list-disc ml-[20px] mt-[5px]">
                  <li>
                    Develop functional and appealing web applications based on
                    usability.
                  </li>
                  <li>Provide website maintenance and enhancements.</li>
                  <li>
                    Create cascading style sheets (CSS) that are consistent
                    across all browsers and platforms.
                  </li>
                  <li>
                    Assist back-end developers in coding and troubleshooting.
                  </li>
                  <li>
                    Maintain graphic standards and branding throughout the
                    product's interface.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default LandingPage;
