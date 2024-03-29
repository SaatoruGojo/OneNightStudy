import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../Images/Logo1.png"

const Footer = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", width: "100%", marginTop: "auto" }}>
      <footer style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", borderRadius: "10px 10px 0 0" }}>
        <div className="left-footer" style={{ flex: 1, textAlign: "center", marginBottom: "10px" }}>
          <img
            className="image"
            src={logoImage}
            alt="logo"
            href="/"
            style={{ maxWidth: "350px" }}
          />
         
        </div>
        <div className="right-footer" style={{ flex: 1, textAlign: "center" }}>
          <div className="footer-part" style={{ marginBottom: "10px", textAlign: "left" }}>
            <p>
              <Link to={"/"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>Home</Link>
              <Link to={"/About"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>About</Link>
              <Link to={"/Question"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>Question Paper</Link>
              <Link to={"/ContactUs"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>Contact Us</Link>
              <Link to={"/privacy"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>Privacy Policy</Link>
             {/* <Link to={"/faq"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>FAQ</Link> */}
              <Link to={"/upload"} style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", margin: "5px" }}>Upload</Link>
            </p>
          </div>
          <div className="footer-icons">
            {/* <a
              className="text-gray-500"
              href="https://www.facebook.com/OneNightStudy-100731219267632"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://twitter.com/OneNightStudy?t=9MGpXgxPPs7TvQ0xWATLhQ&s=09"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-twitter"></i>
            </a> */}
            <a
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/_onenightstudy/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-instagram"></i>
            </a>
            {/* <a
              className="ml-3 text-gray-500 "
              href="https://www.linkedin.com/company/bunk4study/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-linkedin"></i>
            </a> */}
            {/* <a
              className="ml-3 text-gray-500"
              href="https://telegram.me/bunk4study"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-telegram"></i>
            </a> */}
            {/* <a
              className="ml-3 text-gray-500"
              href="https://discord.gg/s3uyrJ8mcT"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", fontSize: "22px", margin: "5px" }}
            >
              <i className="bi bi-discord"></i>
            </a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
