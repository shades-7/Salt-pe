
import Landing from './Component/Landing/landing'
import Welcome from './Component/welcome/welcome'
import {Route} from 'react-router-dom'
import ProctedRoute from './ProctedRoute'

function App() {


  return (
    <div className="App">
    <Route exact path="/"><Landing /></Route>
    <ProctedRoute exact path="/welcome" comp={Welcome} />
    </div>
  );
}

export default App;
