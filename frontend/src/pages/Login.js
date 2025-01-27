import {Button, Form} from "react-bootstrap";
import './Login.css';
import {validateInput} from "../utils/validateInput";
import {useState} from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});


    const formErrors = validateInput(email, password);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(Object.keys(formErrors).length > 0){
            console.log(formErrors);
            setErrors(formErrors);
            return;
        }

        setErrors({});
    }

    return (
        <div className="login-wrapper">
            <div className="login-form-container">
                <h2 className="login-title">Login</h2>

                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column="lg">Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label column="lg">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">Login</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;