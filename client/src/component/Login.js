import Axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            msg: ''
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
            email: this.state.email,
            password: this.state.password
        }

        Axios.post("/api/signin", user, { headers: { "content-type": "application/json" } })
            .then(res => {
                console.log(res)

                if (res.data.msg === "user found") {
                    const token = res.data.result.token;
                    localStorage.setItem("jwt", token)
                    this.props.history.push('/dashboard')

                } else {
                    this.setState({
                        msg: res.data.msg
                    })
                    this.props.history.push('/')
                }

            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div id="myform">
                <br /><br /><br /><br /><br />
                <form className="form" onSubmit={this.submitHandler}>
                    <h2>Log_In</h2>
                    {this.state.msg}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">password</label>
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changeHandler} />
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link id="log" className="nav-link" to="/register">Signup</Link>
                </form>
            </div>
        )
    }
}






export default withRouter(Login)