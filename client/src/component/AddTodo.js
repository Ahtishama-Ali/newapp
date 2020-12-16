import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    // data fetching
    componentDidMount() {
        axios.get('/api', {headers: {"content-type": "application/json"}})
            .then(res => {
                console.log("33333333333333333333333333333333",res)
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

    // delete item
    deleteHandler = (id) => {
        axios.delete('/api/delete/' + id , {headers: {"content-type": "application/json"}})
            .then(res => {
                console.log(res.data)
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
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div id="mytable">
                <br /><br /><br /><br /><br />
                <h2 id="txt">TODO LIST</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>
                                        <Link className="btn btn-primary btn-sm" to={"/edittodo/" + todo.id}>Edit</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteHandler(todo.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        )
    }
}
