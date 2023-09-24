import { createSlice } from "@reduxjs/toolkit";

// take initial state from local Storage(frontend) if found else null
// localStorage -> saved data in browser session
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

//two functions in this slice
// setcredentials : sets userInfo to local storage
// logout : deleltes userInfo from local storage
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setCredentials: (state, action) => {
            //action passed is userdata, payload -> user data, name email and password
            state.userInfo = action.payload;
            // setting user data from action to local storage 
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },

        logout: (state, action) => {
            state.userInfo = null; //clearing from state and local storage!!
            localStorage.removeItem('userInfo');
        },
    },
});

//to call these actions ex: in login screen
export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;