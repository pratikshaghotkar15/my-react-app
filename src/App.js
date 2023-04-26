
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';//imrs
import Alert from './components/Alert';
//import About from './components/About';
// import { 
//   BrowserRouter as Router, 
//   Switch,
//   Route, 
//   Link, 
//   Routes} from "react-router-dom";
 
//let name="prati";
function App() {
  const[mode,setMode]=useState('light');//wheather dark mode enable or what
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#150b59'
      showAlert("dark mode is enabled","success");
      document.title="TextUtils-Dark Mode"

      // setInterval(()=>{
      //   document.title="TextUtils amazing"
      // },2000)

      // setInterval(()=>{
      //   document.title="install TextUtils"
      // },4000)
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success");
      document.title="TextUtils-light Mode"
    }
  }
  return (
    
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div classNameName="container">
    //   <h1>Hello {name}</h1>
    //   <p>fgfku bhjbijkj;jiojiuytyfrdefhkklokihfdszdg</p>
    // </div>
    //<Navbar title="TextUtils" aboutText="About TextUtil" />
    <>
   
        
   {/* <Router>     */}
   <Navbar title="TextUtils" aboutText="About TextUtil" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    {/* <Routes>
      <Route exact path='/about' element={<About/>}>
      </Route>

       <Route exact path='/' element={<TextForm  heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
      </Route>
    
      </Routes> */}

   <TextForm  heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
   {/* <About/> */}

   </div>
   {/* </Router> */}
    </>
    
    
  );
}

export default App;
