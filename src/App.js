import {useState} from 'react'
import Landing from './Component/Landing/landing'
import Welcome from './Component/welcome/welcome'
import {Route} from 'react-router-dom'
//import ProctedRoute from './ProctedRoute'

function App() {
let[Auth,setAuth] = useState(false)

  return (
    <div className="App">
    <Route exact path="/"><Landing data={()=>{setAuth(true)}}/></Route>
    {/* <ProctedRoute exact path="/welcome" comp={Welcome} value={()=>{setAuth(false)}}  Auth={Auth}/> */}
    <Route exact path="/welcome"><Welcome /></Route>
    </div>
  );
}

export default App;
