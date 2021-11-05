import React  from "react";

export default function ButtonVerb({verbName}){
    return(
        <div>
            <input
                id={verbName}
                type="radio"
                name="methodValue"
                value='ALGO'
                // checked={methodSelected === name}
                // onChange={onChange}
            />
            <label htmlFor='verbs'>
            {verbName}
            </label>
        </div>
    )
}