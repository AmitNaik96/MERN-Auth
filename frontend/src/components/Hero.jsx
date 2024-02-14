import { Button, Container, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Hero section -> card (refer bootstrap documentation)
const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN Authentication 🥷</h1>   
                    <p className='text-center mb-4'>
                    This MERN authentication web app employs JWT storage in HTTP-Only cookies, integrating Redux Toolkit and React Bootstrap for efficient state management and UI development.
                    </p>
                    <div className='d-flex'>
                        <LinkContainer to='/login'>
                            <Button variant='primary' className='me-3'> Sign In </Button>
                        </LinkContainer>

                        <LinkContainer to='/register'>
                            <Button variant='secondary'> Sign Up </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Hero;