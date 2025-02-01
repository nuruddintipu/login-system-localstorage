import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {deleteUser} from "../services/authRequest";
import {getRoutePath} from "../routes/NamedLink";

const DeleteButton = () => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const user = localStorage.getItem('user');
        const response = await deleteUser(user);

        if(response.success){
            localStorage.removeItem('user');
            navigate(getRoutePath('LOGIN'));
        } else{
            alert(response.message);
        }
    };
    return (
        <Button variant = 'primary' onClick={handleDelete} className = 'mt-4 mx-2' style={{fontSize: "0.8rem"}}>Delete User</Button>
    );
};

export default DeleteButton;