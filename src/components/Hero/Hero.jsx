import React from 'react'
import styles from './Hero.module.css'
import {FaGofore, FaFacebookF,  FaLine } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}><i>WELCOME TO!</i></p>
                <h3 className={styles.text_2}>IDEA SPORT</h3>
                <p className={styles.text_3}>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Sportswear Sewing Factory',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'We design, We produce.',
                        1000,
                        // 'We produce food for Guinea Pigs',
                        // 1000,
                        // 'We produce food for Chinchillas',
                        // 1000
                      ]}
                      // wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                    
                    
                </p>
                <p className={styles.text_4}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaGofore /></a></li>
                    <li><a href="https://www.facebook.com/IDEASPORT2018"><FaFacebookF /></a></li>
                    <li><a href="#"><FaLine /></a></li>
                </ul>
            </div>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverss={true}>
                <div className={styles.hero_img}></div>
            </Tilt>

        </div>
      </div>
    </div>
  )
}

export default Hero
