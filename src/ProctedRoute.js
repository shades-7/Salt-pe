import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProctedRoute({ comp:Component, value: valueFunc, ...rest}) {
    return (
        <Route {...rest} render={(props)=>{ 
            if(localStorage.getItem("userInfo")){
                return <Component />
            } else{
                return (
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
        }}/>
    )
    
}

export default ProctedRoute
