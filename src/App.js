import React from 'react';
import Wind from './componentes/Wind';
import './App.css'
import Back from './componentes/Back';
import Form from './componentes/Form';




const App = () => {
  return ( 
    <>
    <div className='row'>
        <Wind props={<Form/>}/>
        <Wind props={<Back/>}/>
    </div>
    
    </>
   );
}
 
export default App;