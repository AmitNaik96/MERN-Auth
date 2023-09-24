import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'; // icons!!
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom' 
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice'; //logout request to backend, to delete cookie
import {logout} from '../slices/authSlice'; //logout from localStorage

// refer react-bootstrap documentation - navbar component
const Header = () => {

    const { userInfo } = useSelector((state) => state.auth);

    //for regular function we need useDispatch
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //function to call useLogoutMutation
    const [logoutApiCall] = useLogoutMutation();


    const logoutHandler = async () => {
        try{
            await logoutApiCall().unwrap();
            dispatch(logout()); // local logout. local storage
            navigate('/');
        }
        catch( err ){
            console.log(error);
        }
    }
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" expand='lg' collapseOnSelect>
                <Container>
                    {/* <Navbar.Brand href="/">MERN App</Navbar.Brand>    / -> http://localhost:3000 frontend  */}
                    <LinkContainer to='/'>
                        <Navbar.Brand>MERN App</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ms-auto">

                        {/* is userInfo is authorized then we render profile otherwise signup/signin 
                         */}
                         {/* {userInfo ? () : ()} */}
                         {userInfo ? (
                            <>
                                <NavDropdown title={userInfo.name} id='username'>
                                   <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                   </LinkContainer> 
                                   <NavDropdown.Item onClick={ logoutHandler }>
                                        Logout
                                   </NavDropdown.Item>
                                </NavDropdown>
                            </>
                         ) : (
                                <>
                                    {/* http://localhost:3000/login  keep comments above react components */}
                                    <LinkContainer to='/login'> 
                                        <Nav.Link> 
                                        <FaSignInAlt /> Sign In 
                                        </Nav.Link>
                                    </LinkContainer>
                                    
                                    {/* http://localhost:3000/  */}
                                    <LinkContainer to='/register'>
                                        <Nav.Link>    
                                            <FaSignOutAlt /> Sign up
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                         )}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         </header>
    );
};

export default Header;