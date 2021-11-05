import React, { Component } from "react";
import FormVerb from "../components/app/controls/FormVerb";


export default class ToolAPIContainer extends Component{
    state={
        loading:false,
    }





    render(){
        const verbs =  ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
        return(
            <FormVerb verbs={verbs}/>
        );







    }
}