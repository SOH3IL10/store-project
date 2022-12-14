import React, { useLayoutEffect } from 'react';
import '../style.scss';
import { useSignOut } from '@nhost/react';
import { useAuthenticationStatus } from '@nhost/react'
import { Link } from 'react-router-dom';
import { useDispatch, useStateContext } from '../../../Context/Context';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Grid from '@mui/material/Grid';
import { removeUserAction, setDarkModeAction, setLightModeAction } from '../../../Context/actions';
import LoginIcon from '@mui/icons-material/Login';

export default function ProfileSection() {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const { signOut } = useSignOut()
    const dispatch = useDispatch();
    const { user, theme } = useStateContext();

    function handleLogOut() {
        signOut();
        dispatch(removeUserAction());
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useLayoutEffect(() => {
        if (isAuthenticated)
            setIsLogin(true)
        else setIsLogin(false);
    }, [isAuthenticated])

    const handleChangeTheme = () => {
        theme === 'light' ? dispatch(setDarkModeAction()) : dispatch(setLightModeAction())
    }

    return (
        <>
            <Grid item xs={1.5} md={1} lg={0.5} className='navRegister'>
                {isLoading ? <CircularProgress color={'inherit'} size={'1.5rem'} /> :
                    !isLogin ?
                        <Tooltip title="Login / Signup" >
                            <Link to='/register'>
                                <IconButton>
                                    <LoginIcon />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        :
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>{user?.displayName[0].toUpperCase()}</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                }
            </Grid>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar >{user?.displayName[0].toUpperCase()}</Avatar>
                    {user?.displayName}
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleChangeTheme}>
                    {theme === 'dark' ?
                        <>
                            <ListItemIcon>
                                <LightModeIcon fontSize="small" />
                            </ListItemIcon>
                            Light Mode
                        </> :
                        <>
                            <ListItemIcon>
                                <DarkModeIcon fontSize="small" />
                            </ListItemIcon>
                            Dark Mode
                        </>
                    }

                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}
