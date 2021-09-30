import React,{useState} from 'react'
import styles from './modal.module.css'
import axios from 'axios'
import Close from '../../asset/close.png'


const Modal =(props) =>{


    let [data,setData] = useState({name: "", email: "", password:""})
    let [error,setError] = useState()
    let [value,setValue] = useState()

    //clear form
    function clear(){
        setData({ name: "" , email:"", password:""});
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('https://backendsalt.herokuapp.com/user/signin',data)
        .then((res)=>{
            console.log(res.data.message)
            setValue(res.data.message)
            setTimeout(()=>{
                setValue(null)
            },3000)
            clear();
        })
        .catch((res)=>{
            console.log(res.response.data)
            setError(res.response.data)
            setTimeout(()=>{
                setError(null)
            },3000)
        })

        
    }

    if(!props.show){
        return null;
    }
    return(
        <div className={styles.Backdrop} onClick={props.onClose}>
            <div className={styles.Modal} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.Close} >
                    <img src={Close} alt={"icon"} style={{width:"8%"}} onClick={props.onClose}/>
                </div>
                <div className={styles.Heading}>Create Account</div>
                <div className={styles.Form}>
                    <form onSubmit={handleSubmit}>
                        {error && <div className={styles.Error}>{error}</div>}
                        {value && <div className={styles.Message}>{value}</div>}
                        <label>Name*</label>
                        <input placeholder="John Doe" required type="text" value={data.name} onChange={(e)=>{ setData({...data, name: e.target.value})}}/>
                        <label>Email*</label>
                        <input placeholder="johndeo@gmail.com" required type="email" value={data.email} onChange={(e)=>{setData({...data, email: e.target.value})}}/>
                        <label>Password*</label>
                        <input placeholder="Password" required type="password" value={data.password} onChange={(e)=>{setData({...data, password: e.target.value})}}/>
                        <button className={styles.button1}>Sign In</button>
                    </form>
                </div>
                <div className={styles.Text}>I'm already a member. &nbsp;<p style={{color:"#1C31EE"}} onClick={props.onClose}>Login </p></div>
            </div>
        </div>
    )
}

export default Modal;