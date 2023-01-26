import React from 'react';
import Feature from '../../components/feature/Feature';
import './minting.css';

const Minting = () => (
  <div className="gpt3__whatgpt3 section__margin" id="minting">
    <div className="gpt3__minting-content">
      <h1 className="gradient__text">Minting</h1>
   </div>
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Enter Gmail ID" />
    </div>  <div className="velas__minting-content__input">
      <input type="email" placeholder="Your Email Address" />
    </div>

    <div className="gpt3__whatgpt3-feature">
      <Feature title="Enter Token ID" />
       </div>  <div className="velas__minting-content__input">
          <input type="number" placeholder="Your Email Address" />
    </div>
    <div className="gpt3__whatgpt3-feature">
       </div>  <div className="velas__minting-content__input">
          <button type="button">Transfer</button>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="NFT" text= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestias expedita qui nemo consectetur mollitia deleniti assumenda amet fuga est vitae molestiae" />
      <Feature title="MINTING" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestias expedita qui nemo consectetur mollitia deleniti assumenda amet fuga est vitae molestiae" />
      <Feature title="CRYPTO" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis molestias expedita qui nemo consectetur mollitia deleniti assumenda amet fuga est vitae molestiae" />
    </div>
  </div>
);

export default Minting;
