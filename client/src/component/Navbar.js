import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import setAuthenticationToken from '../setAuthenticationToken';


class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('jwt');
        window.location.href = "/"
    }


    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">TODO</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {localStorage.jwt ? <Link className="nav-link" to="/dashboard">Dashboard</Link> : <Link className="nav-link active" aria-current="page" to="/">Home</Link>}
                                
                                {localStorage.jwt ? <Link className="nav-link" to="/create">Create</Link> : null}
                                
                                {localStorage.jwt ? <Link onClick={this.logout} className="nav-link" to="/create">Logout</Link> : null}
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default Navbar;