import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProctedRoute({Auth:isAuth, comp:Component, value: valueFunc, ...rest}) {
    return (
        <Route {...rest} render={(props)=>{ 
            if(isAuth){
                return <Component data={valueFunc}/>
            } else{
                return (
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                )
            }
        }}/>
    )
    
}

export default ProctedRoute
