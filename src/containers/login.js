import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Button, FormGroup, Label } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            inputData:null
        }
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitFailed = this.handleSubmitFailed.bind(this);
    }
    handleSubmit(values){
        console.log("values", values);
    }

    handleSubmitFailed(errors){
        console.log("errors", errors);
    }
    onChange(e){
        this.setState({
            inputData: e.currentTarget.value
        })
    }
  render() {
    return (
        <div className="col-md-6 offset-3">
            <div className="">
                <h2>Output Input Text</h2>
                <p>{this.state.inputData}</p>
            </div>
             <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}
                onSubmitFailed={this.handleSubmitFailed}
                model="user"
            >
            <FormGroup>
            <Label for="email">Email</Label>
            <Control.text 
                model=".email" 
                type="email" 
                className="form-control"
                validators={{ isRequired: val => val && val.length}}
                onChange={this.onChange.bind(this)}
            />
            <Errors
            model=".email"  
            show="touched"          
            messages={{
                isRequired: 'Please provide an email address.'
            }}/>
            </FormGroup>
            <FormGroup>
            <Label for="password">Password</Label>
            <Control.text model=".password" type="password" className="form-control"/>
            <Errors
            model=".email"
            show="touched"   
            messages={{
                isRequired: 'Please provide an email address.'
            }}/>
            </FormGroup>
            <FormGroup>
            <Control.select model=".role" className="form-control">
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </Control.select>
                </FormGroup>
                <FormGroup>
            <Button type="submit" className="btn btn-primary">Login</Button>
            </FormGroup>
            
        </LocalForm>
        </div>
     
    );
  }
}