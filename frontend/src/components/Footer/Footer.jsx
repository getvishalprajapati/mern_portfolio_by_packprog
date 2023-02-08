import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hi, My name is Vishal Prajapati. I am a Full-Stack (JAVA/MERN) Developer and a
          tutorial on Youtube channel called <b> JustWalkSimply</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/getvishalprajapati/" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/watch?v=i9ucQQ_TK5g&ab_channel=Vakya" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.linkedin.com/in/vishal-prajapati-2470b21b4/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vishal-prajapati-2470b21b4/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
