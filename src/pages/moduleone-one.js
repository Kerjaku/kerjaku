import React, { Component } from 'react'
import data from './modules.json'
import logo from '../logo.png';
import '../App.css';
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
        tertiary: {
            main: '#FFA800',
        }
    },
});

function nextPage(){
   
}
export default class Main extends Component {
    render() {
        return (<ThemeProvider theme={theme}>

            <div class="home-page-header">
                <img alt="logo" src={logo} class="logo" />
                <div class="buttons">
                    <Stack spacing={2} direction="row">
                        <Link to="/"><Button variant="text" color="secondary">Home</Button></Link>
                        <Link to="/etrainingHome"><Button variant="contained">E-Training</Button></Link>
                        <Button variant="text" color="secondary">Job Portal</Button>
                    </Stack>
                </div>
            </div>
            <hr class="line-break2" />
            <div class="module-page-title" id="moduleonename">
            {data[0].name}
                
            </div>
           <div class="module-text" id="moduleonetext"> 
           {data[0].text} 
           </div>
          <div class="module-button">
          <Button variant="contained" onClick={nextPage()}>Melanjutkan</Button>
          </div>
            
            <div class="footer">Kerjaku.org <br /> Telp : 024 672 4835 / 024 672 4865 <br /> Email : ykks.semarang19@gmail.com</div>

        </ThemeProvider >

        )
    }
}