import React from 'react';
import { images } from '../../constants';
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='heatext__cormorant'>What We Believe In</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quotes'/>
          <p className='p__opensans'>Assign object to a variable before exporting as module default.</p>
        </div>
        <p className='p__opensans'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kelvin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>

  </div>
);

export default Chef;
