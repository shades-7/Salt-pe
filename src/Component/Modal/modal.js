import React from 'react'
import styles from './modal.module.css'

const modal =(props) =>{
    if(!props.show){
        return null;
    }
    return(
        <div className={styles.Backdrop} onClick={props.onClose}>
            <div className={styles.Modal} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.Heading}>Create Account</div>
                <div className={styles.Form}>
                    <form>
                        <label>Name*</label>
                        <input placeholder="John Deo" required type="text"/>
                        <label>Email*</label>
                        <input placeholder="johndeo@gmail.com" required type="email"/>
                        <label>Password*</label>
                        <input placeholder="Password" required type="password"/>
                        <button className={styles.button1}>SignIn</button>
                    </form>
                </div>
                <div className={styles.Text}>I'm already a member.<p style={{color:"#1C31EE"}} onClick={props.onClose}>Login In</p></div>
            </div>
        </div>
    )
}

export default modal;