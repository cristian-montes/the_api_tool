import React, { Component } from "react";
import FormVerb from "../components/app/controls/FormVerb";
import ResultsDisplay from "../components/app/controls/ResultDisplay";
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
    
        const { verbValue, url,jsonValue } = this.state;
        let response;
            console.log('VERB VALUE', verbValue);
            console.log('URL', url)
        // this.setState({ loading: true });
    
        try {
          response = await fetchRequest(verbValue, url, jsonValue);
            console.log('response', response)
        } catch (error) {
          response = `This ${error.message} happened!!`;
            console.log('response2', response)
        }

        this.setState({
            // loading: false,
            response,
        })
    
      };





    render(){
        const verbs =  ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
        const {url, verbValue, response, jsonValue } = this.state

        return(
            <div>
                <FormVerb 
                    verbs={verbs} 
                    url={url}
                    verbValue={verbValue}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    jsonValue={jsonValue}
                    />

                    <ResultsDisplay response={response}/>
            </div>


        );







    }
}