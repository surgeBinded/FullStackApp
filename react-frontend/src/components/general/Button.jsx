import { useNavigate } from "react-router-dom";

function Button ({uri, buttonName, method, style}) {
    let navigate = useNavigate();

    return(
        <button type="submit" className={`btn ${style ? style : "btn-success"}`} onClick={() => {
            if (method) {
                method()
            }
            navigate(uri)
        }}> {buttonName}</button>
    );
}

export default Button;