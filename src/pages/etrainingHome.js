import logo from '../logo.png';
import '../App.css';
import * as React from 'react';
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
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div class="home-page-header">
        <img src={logo} class="logo" />
        <div class="buttons">
          <Stack spacing={2} direction="row">
            <Link to="/"><Button variant="text" color="secondary">Home</Button></Link>
            <Link to="/etrainingHome"><Button variant="contained">E-Training</Button></Link>
            <Button variant="text" color="secondary">Job Portal</Button>
          </Stack>
        </div>
      </div>
      <hr class="line-break2" />
      <div class="etraining-header">Selamat datang kembali di Modul E-Training Anda!</div>
      <div class="etraining-page-boxes-holder">
        <Stack direction="row" spacing={2}>
          <img src={ModuleOneIcon} class="etrainingIcon" />
          <div>
            <div class="etraining-page-boxes-top-title">Modul Dalam Proses:</div>
            <div class="etraining-page-boxes">
              <div class="etraining-page-boxes-title">01 Mengenal Potensi Diri</div>
              <div class="home-page-boxes-text">Modul ini akan memandu Anda melalui cara menemukan potensi Anda berdasarkan tipe kepribadian Anda.</div>
              <div class="home-page-boxes-button" ><Button variant="contained">Lanjutkan Belajar</Button></div>
            </div>
          </div>
        </Stack>
      </div>

      <div class="etraining-page-modules-holder">
        <Stack direction="row" spacing={2}>
        <div class="etraining-module-box">
            <div class="etraining-page-modules-top-title">Modul Selesai:</div>
          </div>
          <div class="etraining-module-box">
            <div class="etraining-page-modules-top-title">Modul Dalam Proses:</div>
            <div class="etraining-page-boxes">
              <div class="etraining-page-module-title">02 Mental Block</div>
              <div class="home-page-boxes-text">Modul ini membahas tentang mental block dan cara mengatasinya.</div>
              <div class="home-page-boxes-button" ><Button variant="contained">Lihat Detail Modul</Button></div>
            </div>
            <div class="etraining-page-boxes">
              <div class="etraining-page-module-title">03 Pengenalan Nilai Sosial Dan Nilai Diri</div>
              <div class="home-page-boxes-text">Pelajari cara menentukan nilai pribadi Anda di setiap tatanan sosial.</div>
              <div class="home-page-boxes-button" ><Button variant="contained">Lihat Detail Modul</Button></div>
            </div>
          </div>
        </Stack>
      </div>
      <div class="footer">Kerjaku.org <br /> Telp : 024 672 4835 / 024 672 4865 <br /> Email : ykks.semarang19@gmail.com</div>
    </ThemeProvider>
  );
}

export default Home;
