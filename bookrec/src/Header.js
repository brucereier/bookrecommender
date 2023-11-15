import React from 'react';
import {AppBar, Toolbar, Button, Box} from '@mui/material';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Box style={{ flex: 1 }}></Box>
                <Button color="inherit" component={Link} to="/">Main Page</Button>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                    <Button color="inherit" component={Link} to="/about">About Page</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;