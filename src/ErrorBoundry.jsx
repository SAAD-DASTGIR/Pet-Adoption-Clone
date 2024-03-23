import React from "react";
import { Component } from "react";

class ErrorBoundry extends Component{
    state= { hasError:false}
    static getDerivedStatefromError(){
        return{hasError:true}
    }
    componentDidCatch(error,data){
        console.log(`Error Boindry component caught an error ${error}and ${data}`)
    }
    render(){
        if(this.state.hasError){
        return(
            <div>
                <h1>There is ands Error Listing these items</h1>
            </div>
        )}
        return (
            this.props.children
        )
}}
export default ErrorBoundry