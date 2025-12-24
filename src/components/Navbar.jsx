import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';


const linkStyle = ({ isActive }) => ({
textDecoration: 'none',
marginRight: '16px',
color: isActive ? '#1976d2' : '#555',
fontWeight: isActive ? 600 : 500
});


export default function Navbar() {
return (
<AppBar position="static" elevation={1} color="inherit">
<Toolbar>
<Typography variant="h6" sx={{ flexGrow: 1 }}>
Study Planner
</Typography>
<Box>
<NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
<NavLink to="/planner" style={linkStyle}>Planner</NavLink>
<NavLink to="/progress" style={linkStyle}>Progress</NavLink>
</Box>
</Toolbar>
</AppBar>
);
}