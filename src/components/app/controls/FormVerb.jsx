import React from 'react';
import ButtonVerb from './ButtonVerbs';

function FormVerb({verbs}){
   
    return(
        <form>
            <label>Fetch API</label>

            <input
                type="url"
                placeholder="URL"
                value=''
                name="urlValue"
            />
            <div>
                { verbs.map((verb)=>(
                    <ButtonVerb
                        verbName={verb}
                        key={verb}
                    />
                    ))

                }
            </div>
            <button>FETCH IT</button>
            
        </form>
    )
}

export default FormVerb;