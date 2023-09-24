import { Navigate, Outlet } from 'react-router-dom'; // to direct
import { useSelector } from 'react-redux'; //to get userInfo

const PrivateRoute = () => {

    const { userInfo } = useSelector((state) => (state.auth));

    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
    // if no user then navigate to login 
}

export default PrivateRoute;