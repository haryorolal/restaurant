import React from 'react';
import './Header.css';
import {images} from '../../constants'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The key to Fine Dinning</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>
        In a virtual betting matchup between Fiorentina (FIO) and Napoli (NAP), the likely winner depends on the simulation's logic and whether it prioritizes real-world team strength, recent form, or randomization
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
