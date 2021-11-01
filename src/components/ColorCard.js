import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'all ease-in-out 0.2s',
        },
    },
});

const pickTextColorBasedOnBgColorSimple = (
    bgColor,
    lightColor = '#ffffff',
    darkColor = '#000',
) => {
    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        darkColor : lightColor;
};

const ColorCard = (props) => {
    const {
        colorDef,
    } = props;
    const classes = useStyles();
    const [sampleState, setSampleState] = React.useState();
    console.log(colorDef, sampleState, setSampleState);
    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent
                style={{
                    background: colorDef.hex,
                    color: pickTextColorBasedOnBgColorSimple(colorDef.hex),
                }}
            >
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    {colorDef.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {colorDef.hex}
                </Typography>
            </CardContent>
        </Card>
    );
};

ColorCard.propTypes = {
    colorDef: PropTypes.object,
};

ColorCard.defaultProps = {
    colorDef: {},
};

export default ColorCard;

