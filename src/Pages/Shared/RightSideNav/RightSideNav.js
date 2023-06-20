import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import BrandsCarousel from '../Brands/BrandsCarousel/BrandsCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleProviderLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error', error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleProviderLogin} variant="outline-primary" className='mb-2 rounded-bottom'><FaGoogle></FaGoogle> SignIn with Google</Button>

                <Button variant="outline-dark" className='rounded-top'><FaGithub></FaGithub> SignIN with Github</Button>
            </ButtonGroup>

            <div className='mt-3'>
                <h5>Find us on.</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded-bottom'><FaFacebook></FaFacebook>  Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'>
                        <FaInstagram></FaInstagram> Instagram
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'>
                        <FaTwitter></FaTwitter> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded'>
                        <FaWhatsapp></FaWhatsapp> Whatsapp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded-top'>
                        <FaLinkedin></FaLinkedin> Linkedin
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandsCarousel></BrandsCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;