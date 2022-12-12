import React from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ViewDetails from '../viewDetails/ViewDetails.react';
import Customise from '../customise/Customise.react';

const UtilitiesAndDetails = () => {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#fcbf000" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="View Details" {...a11yProps(0)} />
                    <Tab label="Customise" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <ViewDetails />
            </TabPanel>
            <TabPanel value={value} index={1} sx={{ backgroundColor: "#6f6f6f" }}>
                <Customise />
            </TabPanel>
        </Box>
    );
}

export default UtilitiesAndDetails