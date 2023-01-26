import React from 'react';
import AboutImage from '../../assets/KITCHENFT.png';
import './about.css';

const About = () => (
  <div className="gpt3__possibility section__padding" id="about">
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam assumenda eum quas eligendi maxime possimus pariatur excepturi molestias nesciunt, esse laboriosam reprehenderit fuga harum aperiam obcaecati illum incidunt tempora.</p>
    </div>
    <div className="gpt3__possibility-image">
      <img src={AboutImage} alt="possibility" />
    </div>
  </div>
);

export default About;
