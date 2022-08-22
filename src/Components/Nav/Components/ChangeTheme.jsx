import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch } from '../../../Context/Context';
import IconButton from '@mui/material/IconButton';
import { actionTypes } from '../../../Context/reducer';

export default function ChangeTheme({ theme }) {
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    theme === 'light' ?
      dispatch({
        type: actionTypes.SET_DARK_MODE
      }) : dispatch({
        type: actionTypes.SET_LIGHT_MODE
      })
  }

  return (
    <div className='changeTheme'>
      <IconButton onClick={handleChangeTheme} >
        {theme === 'dark' ?
          <LightModeIcon /> :
          <DarkModeIcon />
        }
      </IconButton>
    </div>
  )
}
