import React from "react";
import "../styles/socialmedia.scss";
import Facebook from "../media/facebook.png";
import Twitter from "../media/twitter.png";
import Pinterest from "../media/pinterest.png";
import Youtube from "../media/youtube.png";
import Instagram from "../media/instagram.png";

class SocialMedia extends React.Component {

  render() {
    return (
        <div id="social-media" >
           <img src={Facebook} alt="Facebook"/>
           <img src={Twitter} alt="Twitter"/>
           <img src={Pinterest} alt="Pinterest"/>
           <img src={Youtube} alt="Youtube"/>
           <img src={Instagram} alt="Instagram"/>
        </div>
    );
  }
}

export default SocialMedia;
