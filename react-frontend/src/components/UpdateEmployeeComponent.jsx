import React, {useEffect, useState} from 'react';
import EmployeeService from "../services/EmployeeService";
import Button from "./general/Button";
import {useParams} from "react-router-dom";

function UpdateEmployeeComponent(){

    let {id} = useParams();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then( res => {
            let emp = res.data
            setFirstName(emp.firstName)
            setLastName(emp.lastName)
            setEmailId(emp.emailId)
        })
    }, []);

    const onChangeFirstName = e => {
        setFirstName(e.target.value)
    }

    const onChangeLastName = e => {
        setLastName(e.target.value)
    }

    const onChangeEmailId = e => {
        setEmailId(e.target.value)
    }

    const updateEmployee = () => {
        let employee = {firstName: firstName, lastName: lastName, emailId: emailId};
        console.log('employee => ' + JSON.stringify(employee))
        EmployeeService.updateEmployee(employee, id).then()
    }

    return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={firstName} onChange={onChangeFirstName}/>

                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={lastName} onChange={onChangeLastName}/>

                                        <label>Email Address:</label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                               value={emailId} onChange={onChangeEmailId}/>

                                        <Button uri={"/employees"} buttonName={"Save"} method={updateEmployee} />
                                        <Button uri={"/"} buttonName={"Cancel"} style={"button btn-danger"}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default UpdateEmployeeComponent;