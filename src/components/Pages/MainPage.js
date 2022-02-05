import React from "react";
import "../../fonts.css";
import "./MainPage.css";
import "../../App.css";
import line1 from "../assests/line1.svg";


export const MainPage = () => {
  return (
    <div className="container-center-horizontal"> 
      <div className="main-page screen">
        <div className="overlap-group">
        <h1 className="title sen-extra-bold-spindle-72px"> hei. </h1>
          <div className="hai-graduate sen-extra-bold-spindle-18px">
            <span className="sen-extra-bold-spindle-18px">  she/her. <br />  </span>
            <span className="sen-extra-bold-spindle-36px">  <br /> 
                    Hai is a recent graduate with a Bachelor's in Computer Science looking for opportunities with a passion in problem solving, programming and designing. 
                    <br />
                    <br />
                    <br />
            </span>
            <span className="sen-extra-bold-spindle-24px"> 
              skills: C++, Python, Javascript, React <br />
              programs: Visual Studio Code, PyCharm, Adobe Illustrator, InDesign, Photoshop
              <br />
              <br />
              <br />
              <br />
            </span>
          </div>
          <img className="line1" alt="className" src={line1} />
          <div className="hei-originate sen-extra-bold-spindle-36px">
            <span className="span0 sen-extra-bold-spindle-36px">
              <> Where did 'hei" originate?
              <br />
              <br />
              </>
            </span>
            <span className="sen-bold-spindle-24px">
              <> 'hei' is a name that was created when hai needed an alias for the internet.
              <br /> 
              <br />
              It can mean many things.  Just as 'Hai' can be read as 'hi', 'hei' can be read as 'hey'.
              <br />
              <br />
              'hei' in chinese can mean 'black'. Black is the color of nothingness but also, back can be a color of statement. Black can hide in the back 
              and blend in with others or black can be the main statement and be the standout color. It depends on what I want it to become.
              </>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

