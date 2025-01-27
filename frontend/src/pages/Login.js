import {Button, Form} from "react-bootstrap";
import './Login.css';
function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-form-container">
                <h2 className="login-title">Login</h2>

                <Form className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label column="lg">Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label column="lg">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">Login</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;