import React from 'react'
import styles from './Testi.module.css'

function Testi() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonial</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://i.pinimg.com/564x/77/96/da/7796dac17a605c93de40d26154d74fbf.jpg" alt="" />
                <h4 >somsak</h4>
                <p className={styles.bio}>Kru</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://i.pinimg.com/564x/77/96/da/7796dac17a605c93de40d26154d74fbf.jpg" alt="" />
                <h4 >somsak</h4>
                <p className={styles.bio}>Kru</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                </p>
                <img src="https://i.pinimg.com/564x/77/96/da/7796dac17a605c93de40d26154d74fbf.jpg" alt="" />
                <h4 >somsak</h4>
                <p className={styles.bio}>Kru</p>
            </div>
        </div>
    </div>
  )
}

export default Testi
