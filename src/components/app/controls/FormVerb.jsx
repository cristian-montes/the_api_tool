import React from 'react';
import BodyText from './BodyText';
import ButtonVerb from './ButtonVerbs';
import PropTypes from 'prop-types';

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

FormVerb.propTypes = {
    verbs:PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    verbValue: PropTypes.string,
    jsonValue: PropTypes.string.isRequired,
  };

export default FormVerb;