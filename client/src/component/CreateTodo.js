import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            todos: []
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // data sending
    submitHandler = e => {
        e.preventDefault();

        const todo = {
            title: this.state.title,
            desc: this.state.desc
        }

        axios.post('/api/add', todo, {headers: {"content-type": "application/json"}})
            .then(res => {
                console.log(res.data)
                axios.get('/api', {headers: {"content-type": "application/json"}})
                    .then(res => {
                        this.setState({
                            todos: res.data
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({
            title: '',
            desc: ''
        })
        this.props.history.push('/dashboard')
    }

    // data fetching
    componentDidMount() {
        axios.get('/api')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        todos: res.data
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div id="myform">
                <br/><br/><br/><br/><br/>
                <form onSubmit={this.submitHandler} className="form">
                    <h2>Add Todo</h2>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" name="desc" rows="3" value={this.state.desc} cols="3" onChange={this.changeHandler} ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}
