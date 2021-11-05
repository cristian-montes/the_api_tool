import React  from "react";

export default function ButtonVerb({name, handleInputChange}){
    return(
        <div>
            <input
                id={name}
                type="radio"
                name="verbValue"
                value={name}
                // checked={methodSelected === name}
                onChange={ handleInputChange }
            />
            <label htmlFor={name}>
            {name}
            </label>
        </div>
    )
}