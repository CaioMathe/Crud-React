import React from 'react';
import './Form.css'

const Form = () => {
    return ( 
        <div className='formulario'>
            <label><h3>Nome:</h3></label>
            <input type="text" value={''}/>
            <label><h3>Gênero:</h3></label>
            <input type="text" value={''}/><br/>
            <input type="button" value="enviar" />
        </div>
     );
}
 
export default Form;
<div className='formulario'>

</div>