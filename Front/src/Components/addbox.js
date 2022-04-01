import React, { Component } from 'react';
import '../styles.css';
import { connect } from 'react-redux';
import { getBoxes, postBox } from "./store/action";



class addbox extends Component {
    state = {
        name: '',
        weight: '',
        color: '#000000',
        country: 'Sweden',

        nameError: '',
        weightError: '',
        colorError: ''
    }
     
    
       
/* ------------------------- VALIDATION ------------------------- */
    validateForm = () => {

        let isError = false;
        let defaultWeight = 0;

        let color = this.state.color;
        let RG = color.substr(1,4);
        let B = color.substr(5,6);
        B = parseInt(B, 16);
        

        if(!this.state.name){
            this.setState({
                nameError: 'Receiver name is required.'
            })
            isError = true;
        }
        else{
            this.setState({
                nameError: '',
            })
        }


        if(!this.state.weight){
            this.setState({
                weightError: 'Weight is required.'
            })
            isError = true;
        }
        else if(this.state.weight < 0){
            this.setState({
                weightError: 'Negative values are not permitted for weight.',
                weight: defaultWeight 
            })
            isError = true;
        }
        else{
            this.setState({
                weightError: '',
            })
        }


        if((RG==='0000') && (B > 0)){
            this.setState({
                colorError: "The color of the box can not be of shade Blue."
            })
            isError = true;
        }
        else{
            this.setState({
                colorError: '',
            })
        }

        return isError;
    }
    
/*---------------------------EVENT HANDLING------------------------------- */

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.validateForm()){    

            this.props.dispatch(postBox(this.state))
            .then(() => this.props.dispatch(getBoxes()))
            
            // Clear state
            this.setState ({
                name: '',
                weight: '',
                color: '#000000',
                country: 'Sweden',
        
                nameError: '',
                weightError: '',
                colorError: ''
            })

            alert("The box has been successfully added!");
        }
        
    }


    render() {
        return (
            <div className="add-box-container">
                <h1>Add a Box</h1>
                <form onSubmit={this.handleSubmit}>

                    <p className="field-title">Name:</p>
                    <input type="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                    <p className="errorMsg">{this.state.nameError}</p>

                    <p className="field-title">Weight:</p>
                    <input type="name" id="weight"onChange={this.handleChange} value={this.state.weight}/>
                    <p className="errorMsg">{this.state.weightError}</p>

                    <p className="field-title">Box Color:</p>
                    <input type="color" id="color" onChange={this.handleChange} value={this.state.color} /> <label>Click to show colour picker!</label>
                    <p className="errorMsg">{this.state.colorError}</p>

                    <p className="field-title">Country:</p>
                    <select name="country" id="country" onChange={this.handleChange} value={this.state.country}>
                        <option value="Sweden">Sweden</option>
                        <option value="China">China</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Australia">Australia</option>
                    </select> <br />

                    <button className="save-btn">Save</button>

                </form>
            </div>
        )
    } 

}

export default connect()(addbox);