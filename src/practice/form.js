import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
//import Getlocal from './getlocal';



class form extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.state = {
            name: "",
            dob: "",
            email: "",
            sex: "",
            skills: ""

        }
    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleCheckboxChange(e) {
        this.setState({
            skills: e.target.value
        });
    };
    handlechange(e) {
        this.setState({
            sex: e.target.value,

        });
    };

    submit() {
        
    let setvalue= JSON.parse(localStorage.getItem('formsData'));
   
     if (setvalue && setvalue.length){
         setvalue.push(this.state);
     }else{
         setvalue=[this.state]
     }
     localStorage.setItem('formsData', JSON.stringify(setvalue));
    }


    render() {
        return (
            <div  >
                    <Form>
                        <FormGroup >
                            <Label sm={14}>
                                <b>Name</b>
                                <Input
                                    type="text"
                                    id="Name"
                                    name="name" placeholder="Name"
                                    value={this.state.name}
                                    onChange={e => this.change(e)} />

                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label sm={14}>
                                <b>DOB:</b>

                                <Input type="Date"
                                    name="dob"
                                    id="DOB"
                                    placeholder="dob"
                                    value={this.state.dob}
                                    onChange={e => this.change(e)} />
                            </Label>
                        </FormGroup>
                        <FormGroup >
                            <Label sm={14}>
                                <b>Email:</b>

                                <Input type="email"
                                    name="email"
                                    id="Email"
                                    placeholder="example@email.com"
                                    value={this.state.email}
                                    onChange={e => this.change(e)} />
                            </Label>
                        </FormGroup>

                        <p>Sex:
                    <label className="radio">
                                
                                    <input type="radio"
                                     name="sex"
                                     value="male"
                                     checked={this.state.sex === "male"}
                                     onChange={e => this.handlechange(e)} />male
                                    
                            </label>
                            <label>
                                <input type="radio"
                                    name="sex"
                                    value="female"
                                    checked={this.state.sex === "female"}
                                    onChange={e => this.handlechange(e)} />female</label>
                            <label>
                                <input type="radio"
                                    name="sex"
                                    value="other"
                                    checked={this.state.sex === "other"}
                                    onChange={e => this.handlechange(e)} />other

                            </label>
                        </p><br />
                        <p>Skills:
                <label>
                                <input type='checkbox'
                                    name="skills"
                                    value="java"
                                    checked={this.state.checked}
                                    onChange={e => this.handleCheckboxChange(e)} />Java
                    </label>
                            <label>
                                <input type='checkbox'
                                    name="skills"
                                    value="css"
                                    checked={this.state.checked}
                                    onChange={e => this.handleCheckboxChange(e)} />CSS
                    </label>
                            <label>
                                <input type='checkbox'
                                    name="skills"
                                    value="C++"
                                    checked={this.state.checked}
                                    onChange={e => this.handleCheckboxChange(e)} />C++
                    </label>
                        </p>

                        <button type="submit" onClick={this.submit} className="btn btn-primary">Submit</button>
                  
                </Form>
                {/* <Getlocal/> */}
            </div >
        );
    }
}

export default form;