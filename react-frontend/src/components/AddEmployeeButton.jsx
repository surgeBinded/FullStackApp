import { useNavigate } from "react-router-dom";

function AddEmployeeButton () {
    let navigate = useNavigate();

    return(
        <button className="btn btn-primary" onClick={() => {
            navigate("/add-employee")
        }}> Add Employee</button>
    );
}

export default AddEmployeeButton;