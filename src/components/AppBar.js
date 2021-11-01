import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const ApplicationBar = (props) => {
    const {
        aProp,
    } = props;
    const [sampleState, setSampleState] = React.useState();
    console.log(aProp, sampleState, setSampleState);
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Color Searcher
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

ApplicationBar.propTypes = {
    aProp: PropTypes.object,
};

ApplicationBar.defaultProps = {
    aProp: {},
};

export default ApplicationBar;

