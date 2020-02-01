import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Col ,Jumbotron} from 'reactstrap';
//import Getlocal from './getlocal';




class form extends React.Component {
    constructor(props) {
        super(props);
        //let data = JSON.parse(localStorage.getItem('formsData'));
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.state = {
             name: "",
             dob: "",
             email: "",
             sex: "",
             skills: "",
             index:0,
             errors:{}
                 
        };
     }
    //event change function 
    change = e => { 
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    //checkbox checking 
    handleCheckboxChange(e){
        this.setState({
            skills: e.target.value
        });
    };
    //radio button checked function
    handlechange(e) {
               this.setState({
            sex: e.target.value,
            });
    };
    
    // submit() {
       
    //    //get the value from localstorage 
    // let setvalue= JSON.parse(localStorage.getItem('formsData'));
   
    //  if (setvalue && setvalue.length){
    //      setvalue.push(this.state);
    //  }else{
    //      setvalue=[this.state]
    //  }
    //  localStorage.setItem('formsData', JSON.stringify(setvalue));
    
   
    // }
    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = this.state;
            fields["name"] = "";
            fields["dob"]="",
            fields["email"] = "";
            fields["sex"] = "";
            fields["skills"] = "";
            this.setState({fields:fields});        
            alert("Form submitted");  

                   
        }
        

    }

    validateForm(){
       let fields=this.state;
       let errors={};
       let formIsValid= true;
       //name validation
       if (!fields["name"]){
           formIsValid= false;
           errors["name"]='*Please enter your name';
       }
    //    if (typeof fields["name"] !== "undefined"){
    //        if (fields["name"].match(/^[A-Za-z ]*$/)){
    //            formIsValid= false;
    //            errors["name"]="*Please enter alphabet character only";
    //        }
    //    } 
       
       //dob validation
       if (!fields["dob"]){
           formIsValid=false;
           errors["dob"]="*please select your DOB";
       }
      
       //email validation
       if(!fields["email"]){
           formIsValid=false;
           errors["email"]="*enter your  email id ";
       }
       if(typeof fields["email"] !=="undefined"){
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }
     
      this.setState({
        errors: errors
        
      });
      if(formIsValid==true){

      
      let setvalue= JSON.parse(localStorage.getItem('formsData'));
   
        if (setvalue && setvalue.length){
            setvalue.push(fields);
        }else{
            setvalue=[fields]
        }
        localStorage.setItem('formsData', JSON.stringify(setvalue));
        window.location.reload();
    }
    //   return formIsValid;
     
      
      
    }
    // onEdit = (i) => () =>{
        
    //     const data = JSON.parse(localStorage.getItem('formsData'));
    //     console.log({i, data, editvalue: data[i]});
        
    //     this.setState({fields: data[i]})
       
    //     }

    render() {
        return (
            <div  >
                    <Form>
                    <Col sm="12" md={{ size: 4, offset: 4 } }>
                    <Jumbotron fluid>
                    <form  method="post" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
                      <FormGroup >
                            <Label sm={14}>
                                {/* <b>Name</b> */}
                                <Input  
                                    type="text"
                                    id="Name"
                                    name="name" 
                                    placeholder="enter your name"
                                    value={this.state.name}
                                    onChange={e => this.change(e)}
                                     />                                    
                            </Label>
                            <div className="errorMsg">{this.state.errors.name}</div>
                        </FormGroup>
                        <FormGroup>
                            <Label sm={14}>
                                  <b>DOB:</b>

                                <Input 
                                    type="date"
                                    name="dob"
                                    id="DOB"
                                    placeholder="enter your DOB dd/mm/yyyy"
                                    value={this.state.dob}
                                    onChange={e => this.change(e)} />
                                    
                            </Label>
                            <div className="errorMsg">{this.state.errors.dob}</div>
                        </FormGroup>
                        <FormGroup >
                            <Label sm={14}>
                                {/* <b>Email:</b> */}

                                <Input
                                    type="text"
                                    name="email"
                                    id="Email"
                                    placeholder="example@email.com"
                                    value={this.state.email}
                                    onChange={e => this.change(e)} />
                            </Label>
                            <div className="errorMsg">{this.state.errors.email}</div>
                        </FormGroup>

                        <p>
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
                        <p ><b>Skills :</b>
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

                        <button type="submit" value="Register" className="btn btn-primary">Submit</button>
                        </form>
                  </Jumbotron>
                  </Col>
                </Form>
                {/* <Getlocal/> */}
            </div >
        );
    }
}

export default  form;