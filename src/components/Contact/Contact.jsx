import React from 'react'
import styles from './Contact.module.css'
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.
                </p>
                <p className={styles.contact_address}>
                123 Main Street <br />
                Bangkok, Thailand
                </p>
                <p> <FaPhoneVolume /> (+66)954382679 </p>
                <p> <FaRegEnvelope /> ideasport2018@gmail.com </p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First name</label>
                            <input type="text" placeholder='eg. Ahmad'/>
                        </div>
                        <div>
                            <label htmlFor="last name">last name</label>
                            <input type="text" placeholder='eg. Waehama'/>
                        </div>
                    </div>
                    <label htmlFor="email addres">email address</label>
                    <input type="email" placeholder='eg. ideasport2018@gmail.com'/>
                    <label htmlFor="masssage">message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='type here'></textarea>                    
                    <button type='submit'>SUBMIT</button>                
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
