import { Button, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import handleInputChange from "../utils/handleInputChange";
import { validateInput } from "../utils/validateInput";
import {getRoutePath, NamedLink} from "../routes/NamedLink";
import {useNavigate} from "react-router-dom";
import {signUpUser} from "../services/fetchApi";

function SignUp() {
    const navigate = useNavigate();
    const userRef = useRef();
    const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => userRef.current.focus(), []);
    useEffect(() => { setErrors({}); setResponseMessage(""); }, [formData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = validateInput(formData, "signup");
        if (Object.keys(formErrors).length) {
            setErrors(formErrors);
            return;
        }

        const result = await signUpUser(formData);
        if (result.success) {
            setResponseMessage("User registered successfully.");
            setTimeout(() => navigate(getRoutePath("LOGIN")), 2000);
        } else {
            setResponseMessage(result.message || "Something went wrong.");
        }
    };

    return (
        <div className="sign-up-wrapper">
            <div className="sign-up-form-container">
                <h2 className="sign-up-title">Register</h2>
                {responseMessage && <div className="alert alert-info">{responseMessage}</div>}

                <Form className="sign-up-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column="lg">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            ref={userRef}
                            placeholder="Enter email"
                            onChange={(e) => handleInputChange("email", e.target.value, setFormData)}
                            value={formData.email}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label column="lg">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => handleInputChange("password", e.target.value, setFormData)}
                            value={formData.password}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label column="lg">Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value, setFormData)}
                            value={formData.confirmPassword}
                            isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="sign-up-button">Sign Up</Button>
                </Form>

                <p>Already have an account? <NamedLink routeName="LOGIN">Login</NamedLink></p>
            </div>
        </div>
    );
}

export default SignUp;
