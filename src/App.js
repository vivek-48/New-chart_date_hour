import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DatehourData from './DatehourData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
return (     
    <div className="App container-fluid">
       <div className=''>
            <div className=''>     
               <BrowserRouter>
                 <Routes>
                   <Route path='/' element={<DatehourData/>}></Route>
                 </Routes>
               </BrowserRouter>
            </div>
           
       </div>
    </div>
  );
}

export default App;



