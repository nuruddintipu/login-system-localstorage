import {Button, Form} from "react-bootstrap";
import {validateInput} from "../utils/validateInput";
import {useEffect, useRef, useState} from "react";
import {NamedLink} from "../routes/NamedLink";
import handleInputChange from "../utils/handleInputChange";

function Login() {
    const userRef = useRef();

    const [user, setUser] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});



    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateInput(user, "login");
        if(Object.keys(formErrors).length > 0){
            console.log(formErrors);
            setErrors(formErrors);
            return;
        }
        console.log(user);
        setErrors({});
    };

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrors({});
    }, [user])

    return (
        <div className="login-wrapper">
            <div className="login-form-container">
                <h2 className="login-title">Login</h2>

                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column="lg">Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            ref={userRef}
                            placeholder="Enter email"
                            onChange={(event) => handleInputChange("email", event.target.value, setUser)}
                            value={user.email}
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
                            onChange={(event) => handleInputChange("password", event.target.value, setUser)}
                            value={user.password}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">Login</Button>
                </Form>
                <p>
                    Need an Account?
                    <NamedLink routeName='SIGNUP'> Sign Up</NamedLink>
                </p>
            </div>
        </div>
    );
}

export default Login;