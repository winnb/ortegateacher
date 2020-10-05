// React
import React from "react";
import "../styles/about.scss";

class About extends React.Component {

render() {
  return (
    <div id="about">
        <div><p id="est">EST. <text id="twenty">2020</text></p></div>
        <div id="gal">ONE GAL'S SEARCH FOR EVERYTHING:</div>
        <div className="graytext">TEACHING HIGH SCHOOL SCIENCE</div>
        <div className="graytext">MANAGING AN ONLINE BUSINESS</div>
        <div className="graytext">BLACK LIVES MATTER</div>
        <div className="graytext">TRANS STUDENTS RIGHTS</div>
        <div className="graytext">ENVIRONMENTAL JUSTICE</div>
        <div id="mom">CAT MOM OF 2</div>
        <div className="kid">--Yuki 3</div>
        <div className="kid">--Lola 2</div>
        <div className="educator">PUBLIC SCHOOL EDUCATOR</div>
        <div className="educator">B.S. IN BIOLOGY</div>
        <div className="educator">ENVIRONMENTAL SCIENCE</div>
        <div className="educator">CHEMISTRY</div>
        <div className="educator">CODER</div>
    </div>
  );
}
}
export default About;