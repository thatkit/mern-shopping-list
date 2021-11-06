import { useEffect, useRef } from 'react';

const InputField = (props) => {
    const emailInputRef = useRef(null);

    useEffect(()=>{
      emailInputRef.current.focus();
    }, []);
    
    return (
        <input 
            type="text"
            name="name"
            id="item"
            placeholder="Add shopping item"
            className="form-control" // this className enables reactstrap Input el styling
            onChange={props.onChange}
            ref={emailInputRef}
        ></input>
    )
}

export default InputField;