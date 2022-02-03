import React, { Component } from 'react'
import data from './modules.json'
import logo from '../logo.png';
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ModuleOneIcon from "./ModuleOneIcon.png"
const theme = createTheme({
    palette: {
        primary: {
            main: '#068238',
        },
        secondary: {
            main: '#000000',
        },
        tertiary: {
            main: '#FFA800',
        }
    },
});
const newdata = data.map((data) => {
    const link = "/moduleone" + data.id
    
    return (
        <div class="module-page-boxes">
            <Stack direction="row" spacing={2}>
                <div class="module-page-module-title">{data.name}</div>
                <div class="module-page-boxes-button" ><Link to={link}><Button variant="contained" color="tertiary">Mulailah</Button></Link></div>
            </Stack>
        </div>
    )
}
)


export default class Main extends Component {
    render() {
        return (<ThemeProvider theme={theme}>

            <div class="home-page-header">
                <img src={logo} alt="logo"  class="logo" />
                <div class="buttons">
                    <Stack spacing={2} direction="row">
                        <Link to="/"><Button variant="text" color="secondary">Home</Button></Link>
                        <Link to="/etrainingHome"><Button variant="contained">E-Training</Button></Link>
                        <Button variant="text" color="secondary">Job Portal</Button>
                    </Stack>
                </div>
            </div>
            <hr class="line-break2" />

            <div class="etraining-page-boxes-holder">
                <div class="module-title">01 Mengenal Potensi Diri</div>
                <Stack direction="row" spacing={2}>
                    <img alt="etrainingicon" src={ModuleOneIcon} class="etrainingIcon" />
                    <div>

                        <div class="etraining-page-boxes">

                            <div class="home-page-boxes-text">Modul ini akan memandu Anda melalui cara menemukan potensi Anda berdasarkan tipe kepribadian Anda.</div>
                            <div class="module-time">Saatnya Menyelesaikan: 135 menit</div>
                            <div class="home-page-boxes-button" ><Button variant="contained">Lanjutkan Belajar</Button></div>
                        </div>
                    </div>
                </Stack>
            </div>

            <div class="module-page-modules-holder">


                <div class="etraining-module-box">
                    <div class="module-subtitle">Topik Modul:</div>
                    {newdata}
                </div>

            </div>
            <div class="footer">Kerjaku.org <br /> Telp : 024 672 4835 / 024 672 4865 <br /> Email : ykks.semarang19@gmail.com</div>

        </ThemeProvider >

        )
    }
}