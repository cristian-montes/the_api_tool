import React from 'react';
import ButtonVerb from './ButtonVerbs';

function FormVerb({verbs, url, handleInputChange, handleSubmit}){
   
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
                            handleInputChange = {handleInputChange}
                        />
                        ))

                    }
                </div>
                <button>FETCH IT</button>
                
            </form>
        </section>
    )
}

export default FormVerb;