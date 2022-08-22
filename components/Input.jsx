import React,{useState,useEffect} from 'react';

import useAutocomplete from '../hooks/useAutocomplete';

const Input = ({fields}) => {
    const [filter, SetFilter, options] = useAutocomplete(fields);
    const [open, SetOpen] = useState(false);

    const handleChange = (e) => {
        SetFilter(e.target.value)
    }
    const onFocus = (e) => {
        SetOpen(true)
    }
    const handleClick = (e) => {
        SetFilter(e.target.innerText)
    }
    const handleBlur = (e) => {

        setTimeout(() => {
            SetOpen(false)
        }, 100);
        
    
    }
    
    return (
        <>  
            <div className='input-container' onFocus={onFocus} onBlur={handleBlur}>
                <input type="text" value={filter} onChange={handleChange} 
                
                name='servicio'
                autoComplete='off'
                className='campo' placeholder='Seleccione el servicio al cual asistio...'/>
                
                {open&&<div className='options' >

                    {
                        options.map( (field, index) => {
                            return (
                                <div key={index}  className='option'
                                onClick={handleClick}
                                >{field}</div>
                            )
                        })
                    }

                </div>}
               
            </div>
            
        </>
    );
}

export default Input;
