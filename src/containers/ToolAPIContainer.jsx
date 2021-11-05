import React, { Component } from "react";
import FormVerb from "../components/app/controls/FormVerb";
import { fetchRequest } from "../services/fetchRequest";


export default class ToolAPIContainer extends Component{
    state={
        loading:true,
        url:'',
        verbValue:'',
        response:[],
        jsonValue:null,
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
    
        const { verbValue, url, } = this.state;
        let response;
            console.log('VERB VALUE', verbValue);
            console.log('URL', url)
        // this.setState({ loading: true });
    
        try {
          response = await fetchRequest(verbValue, url);
            console.log('response', response)
        } catch (error) {
          response = `This ${error.message} happened!!`;
            console.log('response22', response)
        }

        this.setState({
            // loading: false,
            response,
        })
    
      };





    render(){
        const verbs =  ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
        const {url, verbValue, response } = this.state

        return(
            <FormVerb 
                verbs={verbs} 
                url={url}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                />
        );







    }
}