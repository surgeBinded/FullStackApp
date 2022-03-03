import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">Employee Management App</a></div>
                        <Link to="/add-employee">Add Employee</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
