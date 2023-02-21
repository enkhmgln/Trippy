import React from "react";


const Footer = () => {
  return (
    <footer className="footer px-24 py-16 bg-black text-white md:py-16 md:px-8">
      <div className="top flex items-center text-start flex-wrap flex-row justify-between">
        <div>
          <h1>Trippy</h1>
          <p>Choose Your Favorite Destination.</p>
        </div>
        <div>
          <a href="/" className="aLink">
            <i className="fa-brands fa-facebook text-white ml-4 font-extraBold hover:text-main md:mt-4 md:mr-4  "></i>
          </a>
          <a href="/" className="aLink">
            <i className="fa-brands fa-twitter  text-white ml-4 font-extraBold hover:text-main md:mt-4 md:mr-4"></i>
          </a>
          <a href="/" className="aLink">
            <i className="fa-brands fa-youtube  text-white ml-4 font-extraBold hover:text-main md:mt-4 md:mr-4"></i>
          </a>
        </div>
      </div>
      <div className="bottom mt-8 text-start flex justify-between flex-wrap">
        <div className="bottomDiv">
          <h4 className="text-xl pt-4 pb-3">Project</h4>
          <a href="/" className="aLink">
            Changelog
          </a>
          <a href="/" className="aLink">
            Status
          </a>
          <a href="/" className="aLink">
            License
          </a>
          <a href="/" className="aLink">
            All Versions
          </a>
        </div>
        <div className="bottomDiv">
          <h4 className="text-xl pt-4 pb-3">Community</h4>
          <a href="/" className="aLink">
            Github
          </a>
          <a href="/" className="aLink">
            Issues
          </a>
          <a href="/" className="aLink">
            Project
          </a>
          <a href="/" className="aLink">
            Twitter
          </a>
        </div>
        <div className="bottomDiv">
          <h4 className="text-xl pt-4 pb-3">Help</h4>
          <a href="/" className="aLink">
            Support
          </a>
          <a href="/" className="aLink">
            Troubleshooting
          </a>
          <a href="/" className="aLink">
            Contact us
          </a>
        </div>
        <div className="bottomDiv">
          <h4 className="text-xl pt-4 pb-3">Others</h4>
          <a href="/" className="aLink">
            Terms of Service
          </a>
          <a href="/" className="aLink">
            Privacy Policy
          </a>
          <a href="/" className="aLink">
            License
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
