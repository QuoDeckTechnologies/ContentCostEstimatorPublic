import { React, useState, useEffect, useRef } from 'react'
import { Button, Paper, styled, Table, TableBody, TableCell, Grid, TableContainer, TableHead, TableRow, Grow, Popper, MenuItem, Stack, MenuList, ClickAwayListener } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function detailsData(name, proportions) {
    return { name, proportions };
}
function priceEstimatorData(name, estimatePrice) {
    return { name, estimatePrice }
}

const detailsRow = [
    detailsData('Texual Content Slide', 44),
    detailsData('Visual Content Slide', 12),
    detailsData('Interactive Content', 13),
    detailsData('Texual Question Slide', 16),
    detailsData('Visual Question Slide', 20),
    detailsData('Slideshows', 24),
    detailsData('Story Based Slideshows', 22),
    detailsData('Screencasts', 16),
    detailsData('Iconic / Iconograph Video', 35),
];
let totalCost = () => {
    return (
        <Paper elevation={3} align="center" sx={{ width: "7em", p: 1 }}><b>Total Cost</b></Paper>
    )
}
const estimatorPriceRow = [
    priceEstimatorData('Story Branding', "00000"),
    priceEstimatorData('Asset Creation', "00000"),
    priceEstimatorData('Authoring', "00000"),
    priceEstimatorData('Voiceover', "00000"),
    priceEstimatorData('Translations', "00000"),
    priceEstimatorData(totalCost(), "00000"),
];

const ViewDetails = () => {

    const [open, setOpen] = useState(false);
    const prevOpen = useRef(open);

    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };

    const handleMenuClose = (event, reason) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuOpen(false)
    };
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.screen.width,
        height: window.screen.height
    });
    const getScreenDimensions = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setScreenDimensions({ width, height });
    };
    useEffect(() => {
        window.addEventListener("resize", getScreenDimensions);
        return () => {
            window.removeEventListener("resize", getScreenDimensions);
        };
    });

    const StyledButton = styled(Button)`
    background-color:transparent;
    border: 1px solid #fff;
    color: #fff;
    margin:1em;
    font-family:oswald;
    font-weight:bold;
    &:hover {
        background-color: #ffca00;
        border: 1px solid #fff;
        color:#000;
    }
    &:focus {
        background-color: #ffca00;
        color:#000;
    }`;

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: screenDimensions.width <= 400 ? "300px" : screenDimensions <= 600 ? "400px" : screenDimensions <= 900 ? "auto" : "auto"
    }));
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenuOpen(false);
        } else if (event.key === 'Escape') {
            setMenuOpen(false);
        }
    }
    let upgradeDropdown = () => {
        return (
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={menuOpen ? 'composition-menu' : undefined}
                    aria-expanded={menuOpen ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{ width: "9em" }}
                    variant="outlined"
                    color="secondary"
                    endIcon={<ArrowDropDownOutlinedIcon />}
                >
                    Upgrade
                </Button>
                <Popper
                    open={menuOpen}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleMenuClose}>
                                    <MenuList
                                        autoFocusItem={menuOpen}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        sx={{ width: "8em" }}
                                    >
                                        <MenuItem sx={{ justifyContent: "center" }} onClick={handleMenuClose}>Level 1</MenuItem>
                                        <MenuItem sx={{ justifyContent: "center" }} onClick={handleMenuClose}>Level 2</MenuItem>
                                        <MenuItem sx={{ justifyContent: "center" }} onClick={handleMenuClose}>Level 3</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        )
    }


    return (
        <Grid container sx={{ backgroundColor: "#6f6f6f", height: "92.5vh", p: 4 }} justifyContent='center' alignItems='center'>
            <StyledButton >View Recommendation</StyledButton>
            <StyledButton>Customise</StyledButton>
            <StyledButton >Cart</StyledButton>
            <div>{upgradeDropdown()}</div>
            <Grid container spacing={{ xs: 1, md: 2 }} justifyContent="center" >
                <Grid item xs={12} sm={7} md={7} lg={7}>
                    <TableContainer component={Item}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>Details</b></TableCell>
                                    <TableCell align="center"><b>Proportions</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {detailsRow.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={2} align="center" sx={{ width: "3em", margin: "auto" }}>{row.proportions}%</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                    <TableContainer component={Item}>
                        <Paper elevation={0} sx={{ p: 2.1, backgroundColor: "#45454533", borderRadius: "0" }} ><b>Price Estimator</b></Paper>
                        <Table aria-label="simple table">
                            <TableBody>
                                {estimatorPriceRow.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={2} align="center" sx={{ width: "5em", margin: "auto" }}>{row.estimatePrice}</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default ViewDetails