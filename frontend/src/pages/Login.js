import {Button, Form} from "react-bootstrap";
import './Login.css';
import {validateInput} from "../utils/validateInput";
import {useState} from "react";
function Login() {
    const [formData, setFormData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateInput(formData.email, formData.password);
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
                            onChange={(event) => handleInputChange("email", event.target.value)}
                            value={formData.email}
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
                            onChange={(event) => handleInputChange("password", event.target.value)}
                            value={formData.password}
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