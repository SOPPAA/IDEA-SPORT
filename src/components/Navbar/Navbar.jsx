import React, { useState} from 'react'
import styles from './Navbar.module.css'
import { HiBars3BottomRight } from "react-icons/hi2";


function navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled) //false + false = true
  }



  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
            <div className={styles.logo}>
              <a href="#">IDEA SPORT</a>
            </div>

            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

        <div className={styles.button}>
                <a href="#">Hire me</a>
            </div>
        </div>

        {/* Mobile Menu */}

        <HiBars3BottomRight className={styles.bars} onClick={handleToggle}/>
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
              <li><a href="#">Product</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#">Hire me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default navbar
