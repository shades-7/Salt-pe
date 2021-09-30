import Landing from './Component/Landing/landing'
import Welcome from './Component/welcome/welcome'
import {Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
    <Route exact path="/"><Landing /></Route>
    <Route exact path="/welcome"><Welcome /></Route>
    </div>
  );
}

export default App;
