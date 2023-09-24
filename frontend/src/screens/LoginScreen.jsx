import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // for links in page
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; // dispatch action and select global state
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from 'react-toastify';
import Loader from "../components/Loader.jsx"; 


const LoginScreen = () => {
    const [email, setEmail] = useState('');  // react state
    const [password, setPassword] = useState('');

    //init var's for dispatch and navigate
    const navigate =  useNavigate();
    const dispatch = useDispatch();

    //fire off mutation
    const [login, { isLoading }] = useLoginMutation();

    //get user data
    const { userInfo } = useSelector((state) => state.auth);

    //if there is userInfo then we redirect to home screen
    useEffect(() => {
        if(userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log('submit');
        try {
            //making request
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({...res})) //spread operator
            navigate('/')
        }
        catch(err) {

            toast.error(err?.data?.message || err.error);
        }
    }

    //refer react bootstrap Forms
    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={ submitHandler }>

                {/* email */}
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    ></Form.Control>      
                </Form.Group>

                {/* paasword  */}
                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                    ></Form.Control>      
                </Form.Group>

                {/* spinner Loader Component  */}
                {/* { isLoading && <h2>Loading</h2>} */}
                { isLoading && <Loader /> }

                <Button type='submit' variant='primary' className='mt-3'>
                    Sign In
                </Button>

                {/* to register  */}
                <Row className='py-3'>
                    <Col>
                        New Customer? <Link to='/register'>Register</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    ); 
}

export default LoginScreen;