import React from "react";
import "../styles/home.scss";
import Slideshow from "../components/slideshow";
import BlueWhite from "../media/blue and white.png";
import Teacher from "../media/teacher.gif";
import SocialMedia from "../components/socialmedia";
import About from "../components/about";
import Gallery from "../components/gallery"

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
          <Slideshow/>
          <img id="blue-white" alt="Blue and White Background" src={BlueWhite}/>
          <img id="teacher" alt="teacher gif" src={Teacher}/>
          <SocialMedia />
          <About/>
          <div id="gallery-holder"><Gallery/></div>
      </div>
    );
  };
}

export default Home;
