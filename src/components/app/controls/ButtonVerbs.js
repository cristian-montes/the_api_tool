import React  from "react";

export default function ButtonVerb({name, handleInputChange, verbValue}){
    return(
        <div>
            <input
                id={name}
                type="radio"
                name="verbValue"
                value={name}
                checked={verbValue === name}
                onChange={ handleInputChange }
            />
            <label htmlFor={name}>
            {name}
            </label>
        </div>
    )
}