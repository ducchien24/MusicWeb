import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home , Login , Public ,Personal ,Album } from './containers/public/';
import {Routes, Route} from 'react-router-dom';
import Path from './ultis/path'
import * as actions from './redux/actions'
import {useDispatch} from 'react-redux'

function App() {

  
const dispath= useDispatch()
useEffect(() => {  
    dispath(actions.getHome())
}, []);

  return (
    <>     
  
    <div className=''>
      <Routes>
        <Route path={Path.PUBLIC} element={<Public />}>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.LOGIN} element={<Login />} />    
        <Route path={Path.MY_MUSIC } element={<Personal />} /> 
        <Route path={Path.PLAYLIST__TITLE__PID } element={<Album />} /> 
        <Route path={Path.ALBUM__TITLE__PID } element={<Album />} /> 
        <Route path={Path.STAR} element={<Home />} />
        </Route>
      </Routes>

    </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        containerId="toastID"
        // transition: Bounce,
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}
export default App;
