import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
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

    // data fetching
    componentDidMount() {
        
        axios.get('/api/' + this.props.match.params.id, {headers: {"content-type": "application/json"}})
            .then(res => {
                this.setState({
                    title: res.data.title,
                    desc: res.data.description,
                    
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // data sending
    submitHandler = e => {
        e.preventDefault();

        const updateTodo = {
            title: this.state.title,
            desc: this.state.desc
        }

        axios.put('/api/update/' + this.props.match.params.id, updateTodo, {headers: {"content-type": "application/json"}})
        .then(res => {
            console.log(res.data)
            axios.get('/api/' + this.props.match.params.id, {headers: {"content-type": "application/json"}})
            .then(res => {
                this.setState({
                    title: res.data.title,
                    desc: res.data.description,
                    
                })
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div id="myform">
                <br/><br/><br/><br/><br/>
                <form onSubmit={this.submitHandler} className="form">
                    <h2>Update Todo</h2>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" name="desc" rows="3" value={this.state.desc} cols="3" onChange={this.changeHandler} ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        )
    }
}