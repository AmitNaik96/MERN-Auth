import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  } from 'react-router-dom'; // React route setup 
import store from './store.js';
import { Provider } from 'react-redux';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';

// adding routes to components 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route index={true} path='/' element={<HomeScreen />}/>
    {/* index true bcoz HomeScreen(main page)  */}
    <Route path='/login' element={<LoginScreen />}/>
    <Route path='/register' element={<RegisterScreen />}/>

    {/* private  */}
    <Route path='' element={<PrivateRoute/>}>
      <Route path='/profile' element={<ProfileScreen />}/>
    </Route>

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);
