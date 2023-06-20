import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { emailSignup, updateUserProfile, emailVerification } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const updateUserName = (name, photoURL) => {
        updateUserProfile(name, photoURL)
            .then(() => console.log('name updated'))
            .catch(error => console.error('error', error))
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        form.reset();


        emailSignup(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                updateUserName(name, photoURL);
                setError('');
                handleEmailVerification();
            })
            .catch(error => {
                console.error('error', error)
                setError(error.message);
            })
    };
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { toast.success('verify your email address') })
            .catch(e => console.error('e', e))
    }
    const handleTrams = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" name='name' required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URl</Form.Label>
                <Form.Control type="text" placeholder="Photo URL" name='photoURL' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleTrams}
                    type="checkbox"
                    label={<>Accept <Link to='/trams'>Trams and Conditions</Link> </>} />
            </Form.Group>

            <p className='text-danger'>{error}</p>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </Form>
    );
};

export default Register;