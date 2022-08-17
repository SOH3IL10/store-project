import React from 'react';
import '../style.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function DrawerListItem({ icon, primary }) {
    return (
        <Link to={`/categories/${primary}`} >
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={primary} />
            </ListItemButton>
        </Link>
    )
}
