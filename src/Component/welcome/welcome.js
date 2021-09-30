import React from 'react'
import styles from './welcome.module.css'
import { useHistory } from "react-router-dom";

const Welcome =() =>{
    const history = useHistory();
    return(
        <div className={styles.Conatiner}>
            <h1>welcome! to salt pe</h1>
            <button className={styles.Button} 
            onClick={()=>{
                localStorage.removeItem("userInfo")
                history.push('/')
                }}>Logout</button>
        </div>
    )
}

export default Welcome;