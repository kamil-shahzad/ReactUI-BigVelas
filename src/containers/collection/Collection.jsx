import React from 'react';
import ape02 from '../../assets/hero6.png'
import ape03 from '../../assets/hero3.png'
import ape04 from '../../assets/hero4.png'
import ape05 from '../../assets/hero5.png'
import './collection.css';
import Apes from '../../components/ApesPics/Apes';

const Collection= () => (
  <div className="gpt3__blog section__padding" id="collection">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">The Collection</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Apes imgUrl={ape02} text="Velas best NFT. Let us exlore how it is?" />
        <Apes imgUrl={ape03} text="Velas best NFT.. Let us exlore how it is?" />
        <Apes imgUrl={ape04} text="Velas best NFT. Let us exlore how it is?" />
        <Apes imgUrl={ape05} text="Velas best NFT. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Collection;
