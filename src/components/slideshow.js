import React from "react";
import "../styles/slideshow.scss"
import Student1 from "../media/student1.png"
import Student2 from "../media/student2.png"
import Student3 from "../media/student3.png"
import Student4 from "../media/student4.png"
import Student5 from "../media/student5.png"
import Student6 from "../media/student6.png"
import Student7 from "../media/student7.png"
import Student8 from "../media/student8.png"
import Student9 from "../media/student9.png"
import Student10 from "../media/student10.png"
import HorizontalGallery from 'react-dynamic-carousel'

// const example = [
//     "../media/student1.png",
//     "../media/student2.png",
//     "../media/student3.png",
//     "../media/student4.png",
//     "../media/student5.png",
//     "../media/student6.png"
//   ];
const example = [<img id="slot1" className="student" alt="student pic" src={Student1}/>, <img id="slot2" className="student" alt="student pic" src={Student2}/>, <img id="slot3" className="student" alt="student pic" src={Student3}/>, <img id="slot4" className="student" alt="student pic" src={Student4}/>, <img id="slot5" className="student" alt="student pic" src={Student5}/>, 
<img id="slot6" className="student" alt="student pic" src={Student6}/>, <img id="slot7" className="student" alt="student pic" src={Student7}/>, <img id="slot8" className="student" alt="student pic" src={Student8}/>, <img id="slot9" className="student" alt="student pic" src={Student9}/>, <img id="slot10" className="student" alt="student pic" src={Student10}/>];

class Slideshow extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    height: window.innerHeight,
    width: window.innerWidth
  };
  window.addEventListener('resize', ()=> {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  });

}

  render() {
    return (
      <div id="slideshow-holder">
        <div id="slideshow">
            <HorizontalGallery tiles={example.map((value) => (
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}><h1>{value}</h1></div>))}
                elementWidth={this.state.width/20}
                fadeDistance={100}
                minPadding={0} />
           <div id="never">IT'S NEVER TOO LATE TO DO WHATEVER THE HELL YOU WANNA DO, NEVER EVER</div>     
        </div>
        
      </div>
    );
  }
}

export default Slideshow;
