import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'debounce-promise';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import ColorCard from './ColorCard';

const randomNums = Array.from({length: 20}, () => Math.floor(Math.random() * 20));

const ColorSearcher = (props) => {
    const {
        aProp,
    } = props;
    const [colorText, setColorText] = React.useState('');
    const [colors, setColors] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const onSearchColor = React.useCallback(debounce(async (newColorText) => {
        if (!newColorText) {
            setErrorMessage('');
            setColors([]);
            return;
        }
        try {
            setLoading(true);
            const response =
                await axios.get(`https://api.color.pizza/v1/names/?name=${newColorText}`);
            console.log('asd9aud0asdas', response.data);
            setLoading(false);
            setColors(response.data?.colors);
            setErrorMessage('');
        } catch (e) {
            console.error('asd0ua0d9asd', e?.response?.data?.error?.message);
            setLoading(false);
            setColors([]);
            setErrorMessage(e?.response?.data?.error?.message);
        }
    }, 500), []);

    React.useEffect(() => {
        onSearchColor(colorText);
    }, [colorText]);
    console.log(aProp, colorText, setColorText);
    console.log('asd9aus09d-asd0s', colors, errorMessage);
    return (
        <div style={{ marginTop: '2rem' }}>
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <TextField
                        variant="outlined"
                        label="Color"
                        size="small"
                        fullWidth
                        placeholder="Search for a color"
                        onChange={(e) => (
                            setColorText(e.target.value)
                        )}
                        value={colorText}
                    />
                </Grid>
                {
                    (errorMessage && !loading) && (
                        <Grid
                            item
                            sm={12}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {errorMessage}
                        </Grid>
                    )
                }
                <Grid item sm={8} />
                {
                    loading && (
                        <>
                            {
                                randomNums.map((a) => (
                                    <Grid item sm={3} key={a}>
                                        <Skeleton variant="rectangular" width="auto" height={118} />
                                    </Grid>
                                ))
                            }
                        </>
                    )
                }
                {
                    !loading && colors && Array.isArray(colors) && colors.length > 0 &&
                    colors.map((aColor) => (
                        <Grid sm={3} item key={aColor.hex}>
                            <ColorCard
                                colorDef={aColor}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

ColorSearcher.propTypes = {
    aProp: PropTypes.object,
};

ColorSearcher.defaultProps = {
    aProp: {},
};

export default ColorSearcher;

