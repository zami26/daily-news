import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { emailLogin, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password);
        emailLogin(email, password)
            .then(ans => {
                const user = ans.user;
                console.log(user);
                setError('');
                if (user.emailVerified) {

                    navigate(from, { replace: true });
                }
                else {
                    toast('please check your mail box')
                }
            })
            .catch(e => {
                console.error('error', e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>
            <p className='text-danger'>{error}</p>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;