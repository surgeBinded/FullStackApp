import { useNavigate } from "react-router-dom";

function Button ({uri, buttonName, method}) {
    let navigate = useNavigate();

    return(
        <button type="submit" className="btn btn-success" onClick={() => {
            if (method) {
                method()
            }
            navigate(uri)
        }}> {buttonName}</button>
    );
}

export default Button;