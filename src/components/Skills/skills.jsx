import React from 'react'
import styles from './skills.module.css'
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro} from "react-icons/si";

function skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li><SiAdobeillustrator/></li>
            <li><SiAdobephotoshop/></li>
            <li><SiAdobeaftereffects/></li>
            <li><SiAdobepremierepro/></li>
        </ul>
    </div>
  )
}

export default skills
