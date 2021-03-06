import React, { Component } from "react";
import { Link } from "gatsby";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home"><Link to="/"></Link></div>
          
          <div className="intro">
            <div className="introHello">
              Catalogging the creative studios & internal design teams in the pacific northwest. 
            </div>

            <div className="introSubmit">
              <a target="_blank" href="mailto:jonmccon@gmail.com">Contact us</a> 
              {/* <a href="#">Add an entry</a>
              <a href="#">Sign up for news</a> */}
            </div>
          
        </div>
      </React.Fragment>  
    );
  }
}

export default Intro;
