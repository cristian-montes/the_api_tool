import React from 'react';
import BodyText from './BodyText';
import ButtonVerb from './ButtonVerbs';

function FormVerb({verbs, url, handleInputChange, handleSubmit, verbValue, jsonValue}){
   
    return(
        <section aria-label="request-form" >
            <form onSubmit={handleSubmit}>
                <label htmlFor={verbs}></label>

                <input
                    id={verbs}
                    type="url"
                    placeholder="URL"
                    value={url}
                    name="url"
                    onInput= {handleInputChange}
                />

                <div>
                    { verbs.map((verb)=>(
                        <ButtonVerb
                            name={verb}
                            key={verb}
                            verbValue={verbValue}
                            handleInputChange = {handleInputChange}
                        />
                        ))

                    }
                </div>


                <div>
                    <BodyText
                        jsonValue={jsonValue}
                        handleInputChange = {handleInputChange}
                    />

                </div>
                <button>FETCH IT</button>
                
            </form>
        </section>
    )
}

export default FormVerb;