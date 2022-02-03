import logo from '../logo.png';
import homepageicon from '../homepage-icon.PNG'
import childfundlogo from '../childfund-logo.PNG'
import '../App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#068238',
        },
        secondary: {
            main: '#000000',
        },
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <div class="home-page-header">
                <img src={logo} class="logo" alt="logo" />
                <div class="buttons">
                    <Stack spacing={2} direction="row">
                        <Link to="/"><Button variant="contained">Home</Button></Link>
                        <Link to="/etrainingHome"><Button variant="text" color="secondary">E-Training</Button></Link>
                        <Button variant="text" color="secondary">Job Portal</Button>
                    </Stack>
                </div>
            </div>
            <img src={homepageicon} alt="homepageicon" class="home-page-icon" />
            <div class="home-page-header">Get Started</div>
            <div class="home-page-boxes-holder">
                <Stack direction="row" >
                    <div class="home-page-boxes">
                        <div class="home-page-boxes-title">E-Training Home</div>
                        <div class="home-page-boxes-text">Build new skills to make you
                            stand out in today's competitive job market</div>
                            <Link to="/etrainingHome"><div class="home-page-boxes-button" ><Button variant="contained">Start Learning</Button></div></Link>
                    </div>
                    <div class="home-page-boxes">
                        <div class="home-page-boxes-title">Job Board Home</div>
                        <div class="home-page-boxes-text">Explore hundreds of open positions from top companies in your area</div>
                        <div class="home-page-boxes-button" ><Button variant="contained">See Available Jobs</Button></div>
                    </div>
                </Stack>
            </div>
            <hr class="line-break" />
            <div class="home-page-header">About Kerjaku</div>
            <div class="home-page-header2">Vision</div>
            <div class="home-page-text">To create easy access for young people to enter the world of work and business</div>
            <div class="home-page-header2">Mission</div>
            <div class="home-page-text">As a medium of information that facilitates access for young people in determining and developing careers in work and entrepreneurship. In addition to online media, offline platforms are also available which are managed in good partnership with various parties to develop the capacity and quality of young people with character, and also provide qualified skills both offline in the form of seminars, workshops, courses and skills training</div>
            <hr class="line-break" />
            <div class="home-page-header2">Sponsors</div>
            <img src={childfundlogo} alt="childfundlogo" class="home-page-sponsor-icon" />
            <div class="sponsor-text">ChildFund International</div>
            <Link  ><div class="sponsor-link">Visit Site</div></Link>
            <hr class="line-break" />
            <div class="footer">Kerjaku.org <br /> Telp : 024 672 4835 / 024 672 4865 <br /> Email : ykks.semarang19@gmail.com</div>
        </ThemeProvider>
    );
}

export default Home;
