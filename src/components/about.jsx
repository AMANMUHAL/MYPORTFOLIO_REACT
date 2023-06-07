import React from 'react'
import MyComponent from './typed/typed'
import profile from "../Screenshot_20221222_120520.png";

const about = () => {
  return (
    <div>
     <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
           
            <img src={profile} alt="Profile_Image" />
          </div>
          <div className="column right">
            <div className="text">I'm Aman and I'm a <MyComponent /></div>
            <p>Undergrad at Netaji Subhas University of Technology (NSUT), pursuing Bachelor of Technology in Information Technology. I am passionate about Web Development and strive to become a skilled professional in this field.</p>
            <br />
            <div className="text">Why Work With Me</div>
            <p>With years of experience in this field, attention to detail, effective communication, collaboration, and dedication, I am confident in my ability to deliver high-quality work that exceeds your expectations.</p>
            <a href="#link" target="blank">Download CV</a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default about