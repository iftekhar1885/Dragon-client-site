import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp,FaTwitter, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import BrandCarusel from '../BrandCarosel/BrandCarusel';


const RightSideNav = () => {
    const { providerLogin }  = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary "><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
            <h5>Find Us On</h5>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch/> Twich</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </div>
            <div className='mt-5'>
                <BrandCarusel></BrandCarusel>
            </div>
            
        </div>
    );
};

export default RightSideNav; 