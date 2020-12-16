import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          password: ""
        }

    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();

        const user = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        }

        Axios.post('/api/signup', user, {headers: {"content-type": "application/json"}})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        this.setState({
            name: "",
            email: "",
            password: ""
        })
        
    }
 
    render() {
        return (
            <div id="myform">
                <br/><br/><br/><br/><br/>
                <form className="form" onSubmit={this.submitHandler}>
                    <h2>Sign_Up</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                    <Link className="nav-link" id="log" to="/">login</Link>
                </form>
                
            </div>
        )
    }
}