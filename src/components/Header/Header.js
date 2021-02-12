import React from 'react';
import { Button, Grid } from '@material-ui/core';

const Header = () => {

    const onClick = (e)=> {
        console.log(e)
    }

    return (
        <header>
            <Grid  container direction="row" justify="space-evenly" alignItems="center">
                <h1 xs={8}>Task Tracker</h1>
                <Button variant="contained" size="large" color="primary" xs={4} onClick={onClick}>Add</Button>
            </Grid>
        </header>
    );
};

export default Header;