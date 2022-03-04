import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import Button from "./general/Button";

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
                employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then(res => {
            this.setState({employees: res.data.employees})
        })
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <Button uri={"/add-employee"} buttonName={"Add Employee"}/>
                 </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                            <td>
                                                <Button uri={`/update-employee/${employee.id}`} buttonName={"Update"} style={"button btn-info"}/>
                                                <button className="btn button btn-danger" onClick={() => {EmployeeService.deleteEmployee(employee.id).then()}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
