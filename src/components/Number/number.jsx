import React from 'react'
import styles from './number.module.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function number() {
  return (
    <div className={styles.numer_con}>
        <div className={styles.number_items}>
            <h3>
                <VisibilitySensor partialVisibility offset ={{ bottom: 20}}>
                    {({isVisible}) => (
                        <div>
                            {isVisible ? <CountUp start={0} end={100} duration={3}/> : null}+
                        </div>
                    )}
                </VisibilitySensor>
            </h3>
            <p>Product from us</p>
        </div>
        <div className={styles.number_items}>
            <h3>
                <VisibilitySensor partialVisibility offset ={{ bottom: 20}}>
                    {({isVisible}) => (
                        <div>
                            {isVisible ? <CountUp start={0} end={50} duration={3}/> : null}+
                        </div>
                    )}
                </VisibilitySensor>
            </h3>
            <p>Companies Helped</p>
        </div>
        <div className={styles.number_items}>
            <h3>
                 <VisibilitySensor partialVisibility offset ={{ bottom: 20}}>
                    {({isVisible}) => (
                        <div>
                            {isVisible ? <CountUp start={0} end={10} duration={3}/> : null}+
                        </div>
                    )}
                </VisibilitySensor>

            </h3>
            <p>Years of experience</p>
        </div>
        <div className={styles.number_items}>
            <h3>
                <VisibilitySensor partialVisibility offset ={{ bottom: 20}}>
                    {({isVisible}) => (
                        <div>
                            {isVisible ? <CountUp start={0} end={100} duration={3}/> : null}+
                        </div>
                    )}
                </VisibilitySensor>

            </h3>
            <p>Happy Clients</p>
        </div>
      
    </div>
  )
}

export default number
