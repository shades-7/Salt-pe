import React,{useState,useEffect} from 'react'
import styles from './landing.module.css'
import axios from 'axios'
import { useHistory} from "react-router-dom"


import Google from '../../asset/google.png'
import Pic from '../../asset/pic.png'

import Modal from '../Modal/modal'

const Landing=(props) =>{
   
    let history = useHistory();

    let [open, setOpen] = useState(false)
    let [data, setData] = useState({email: "", password:""})
    let [error,setError] = useState()
    

    //clear form
    function clear(){
        setData({ email:"", password:""});
    }

    let info = localStorage.getItem("userInfo")
     useEffect(()=>{
        if(info){
             history.push('/welcome')
        }
    },[history,info])

    async function handleSubmit(e){
       e.preventDefault();
         const config ={
            headers:{
                "Content-type" : "application/json"
            }
         }
         await axios.post('https://backendsalt.herokuapp.com/user/login',data,config)
        .then((res)=>{
            console.log(res)
            localStorage.setItem('userInfo',JSON.stringify(res.data))
            props.data();
            
        }).catch((message)=>{
            setError(message.response.data)
            setTimeout(()=>{
                setError(null)
            },3000)
            console.log(message.response.data)
        })

        clear();
    }

    return(
        <div className={styles.Container}>

        <Modal show={open} onClose={()=>{setOpen(!open)}}/>

          <div className={styles.Child1}>

            <div className={styles.Login}>Login</div>

            <div className={styles.Text}>Manage and grow business throughout the company and the globe.</div>

            <button className={styles.buttonG}> 
                <img src={Google} alt={"google icon"} style={{width:"18px",marginRight:"10px"}}/>
                Sign In with Google
            </button>

            <div className={styles.Seperator}>
                <div>or Sign In with Email</div>
            </div>

            {error && <div className={styles.Error}>{error}</div>}

            <div className={styles.Form}>
                <form onSubmit={handleSubmit}>
                    <label>Email*</label>
                    <input placeholder="johndeo@gmail.com" required type="email" value={data.email} onChange={(e)=>{setData({...data, email: e.target.value})}}/>
                    <label>Password*</label>
                    <input placeholder="Password" required type="password" value={data.password} onChange={(e)=>{setData({...data, password: e.target.value})}}/>
                    <button className={styles.button1}>Login</button>
                </form>
            </div>

            <div className={styles.Content}>Not registered yet? &nbsp;<p style={{color:"#1C31EE"}} onClick={()=>{setOpen(!open)}}> Create a new Account</p></div>
          
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