import React from 'react'
import Styles from './Services.module.css'

import { MdDesignServices } from "react-icons/md";
import { FaHandHoldingHeart, FaHandshakeSimple } from "react-icons/fa6";

function Services() {
  return (
    <div className={Styles.services_con}>
      <h3 className={Styles.services_title}></h3>
      <div className={Styles.services_list}>
        <div className={Styles.services_items}>
            <FaHandshakeSimple/>
            <h4>service</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>
        <div className={Styles.services_items}>
            <MdDesignServices/>
            <h4>Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>
        <div className={Styles.services_items}>
            <FaHandHoldingHeart/>
            <h4>service</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services
