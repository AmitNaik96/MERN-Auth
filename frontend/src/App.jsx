import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen"; no nedd because outlet
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return(
    <>
    <Header />
    <ToastContainer />
    <Container className='my-5'>
      <Outlet />
    </Container>
    </>
  );
};
export default App;