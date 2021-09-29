import React,{useState} from 'react'
import styles from './landing.module.css'

import Google from '../../asset/google.png'
import Pic from '../../asset/pic.png'

import Modal from '../Modal/modal'

const Landing=() =>{

    let [open, setOpen] = useState(false)

    return(
        <div className={styles.Container}>
        <Modal show={open} onClose={()=>{setOpen(!open)}}/>
          <div className={styles.Child1}>
            <div className={styles.Login}>Login</div>
            <div className={styles.Text}>Manage and grow business throughout the company and the globe.</div>
            <button className={styles.buttonG}> 
                <img src={Google} alt={"google icon"} style={{width:"18px",marginRight:"10px"}}/>
                SignIn with google
            </button>
            <div className={styles.Seperator}>
                <div>or SignIn with Email</div>
            </div>
            <div className={styles.Form}>
                <form>
                    <label>Email*</label>
                    <input placeholder="johndeo@gmail.com" required/>
                    <label>Password*</label>
                    <input placeholder="Password" required/>
                    <button className={styles.button1}>Login</button>
                </form>
            </div>
            <div className={styles.Content}>Not registered yet? <p style={{color:"#1C31EE"}} onClick={()=>{setOpen(!open)}}>Create a new Account</p></div>
          </div>
          <div className={styles.Child2}>
            <div className={styles.Logo}> S A L T</div>
            <div className={styles.Heading}>Truly borderless banking.</div>
            <div className={styles.Image}>
                <img src={Pic} alt={" bank"} style={{width:"70%"}}/>
            </div>
          </div>
        </div>
    )
}
export default Landing;