import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      {/* About us */}
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>
          In a virtual betting scenario, comparing Brighton & Hove Albion (BHA) and Chelsea (CHE) depends on the simulation model's logic, but we can consider some key points based on real-world football dynamics:
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      {/* knife image */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about__knife' />
      </div>
      {/* our history */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>
          In a virtual betting scenario, comparing Brighton & Hove Albion (BHA) and Chelsea (CHE) depends on the simulation model's logic, but we can consider some key points based on real-world football dynamics:
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
