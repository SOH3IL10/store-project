import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch } from '../../../Context/Context';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { setDarkModeAction, setLightModeAction } from '../../../Context/actions';

export default function ChangeTheme({ theme }) {
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    theme === 'light' ? dispatch(setDarkModeAction()) : dispatch(setLightModeAction());
  }

  return (
    <Grid item xs={1} lg={0.5} className='changeTheme'>
      <IconButton onClick={handleChangeTheme} >
        {
          theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />
        }
      </IconButton>
    </Grid>
  )
}
