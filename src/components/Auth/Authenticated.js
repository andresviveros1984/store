import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';



const Authenticated = ({children}) => {
    const auth = useAuth0();
    const navigate = useNavigate();

    if(auth.isAuthenticated){
        return <>{children}</>
    }else{
        auth.loginWithRedirect()
    }
}




export default Authenticated;