/* eslint-disable */
import React from 'react'; 
import Name from './Name.tsx'
class Settings extends React.Component{
    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "", 
            keywords: [], 
        }
    }


    render(){
        return(
        <div>
            <Name/>
        </div>)
    }
}

export default Settings; 