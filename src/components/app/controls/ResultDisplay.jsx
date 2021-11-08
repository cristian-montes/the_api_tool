import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

export default function ResultsDisplay({response}){
    return(
        <div>
            <ReactJson
                src={response}
                style={{ backgroundColor:'pink', width: '80%', padding: '10px', borderRadius:'10px', margin:'5%'}}
            />
        </div>
    )
};