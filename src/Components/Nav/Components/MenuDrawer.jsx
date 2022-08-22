import React from 'react';
import '../style.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import Logout from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import DvrIcon from '@mui/icons-material/Dvr';
import DiamondIcon from '@mui/icons-material/Diamond';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import DrawerListItem from './DrawerListItem';
import { Link } from 'react-router-dom';
import { useDispatch, useStateContext } from '../../../Context/Context';
import { actionTypes } from '../../../Context/reducer';
import { useSignOut, useAuthenticationStatus } from '@nhost/react';
import IconButton from '@mui/material/IconButton';

const categories = [
    { icon: <DvrIcon />, primary: 'electronics' },
    { icon: <DiamondIcon />, primary: 'jewelery' },
    { icon: <WomanIcon />, primary: "women's clothing" },
    { icon: <ManIcon />, primary: "men's clothing" },
    { icon: <AlignHorizontalLeftIcon />, primary: 'all categories' },
]

export default function MenuDrawer() {
    const [open, setOpen] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false);

    const dispatch = useDispatch();
    const { signOut } = useSignOut();
    const { isAuthenticated } = useAuthenticationStatus();
    const { theme } = useStateContext();

    const handleClick = () => {
        setOpenCategories(!openCategories);
    };

    const toggleDrawer = (open) => {
        setOpen(open);
    };

    const handleLogOut = () => {
        signOut();
        dispatch({
            type: actionTypes.REMOVE_USER
        })
    }

    return (
        <>
            <div className='navMenu'>
                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </div>

            <Drawer
                open={open}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >
                    <List>
                        <Link to={'/'}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to={'/checkout'}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText>Basket</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <ListItem disablePadding onClick={handleClick}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                <ListItemText primary='Categories' />
                                {openCategories ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={openCategories} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    categories.map((category, index) => <DrawerListItem key={index} icon={category.icon} primary={category.primary} />)
                                }
                            </List>
                        </Collapse>
                        {/* <Divider /> */}
                        {
                            isAuthenticated ? <ListItem disablePadding onClick={handleLogOut}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Logout />
                                    </ListItemIcon>
                                    <ListItemText primary={'LogOut'} />
                                </ListItemButton>
                            </ListItem> :
                                <Link to={'/register'}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <LoginIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={'Login'} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                        }

                    </List>
                    {/* <Divider />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary={'LogOut'} />
                            </ListItemButton>
                        </ListItem>
                    </List> */}
                </Box>
            </Drawer>
        </>
    )
}
