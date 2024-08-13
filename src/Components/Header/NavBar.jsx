import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { TypographyStyled, IconButtonStyled, Search, SearchIconWrapper, StyledInputBase } from '../../Constants/HeaderConstants';
import { Link, Outlet } from 'react-router-dom';

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',

});

export default function SearchAppBar({ handleMenuClick, handleMenuClose, sign }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'linear-gradient(to right, #a103fc, #e703fc)', height: '80px' }}>
                <Toolbar sx={{ mt: 1 }}>
                    <IconButtonStyled
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButtonStyled>
                    <TypographyStyled
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', md: 'block' }, mr: 2 }}
                    >
                        GROUP-2 MARKET NAME
                    </TypographyStyled>
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box
                        sx={{
                            display: 'none',
                            '@media (min-width: 750px)': {
                                display: 'flex',
                            },
                            gap: 1,
                        }}
                    >
                        <IconButtonStyled size="large" color="inherit">
                            <NotificationsIcon />
                        </IconButtonStyled>
                        <IconButtonStyled size="large" color="inherit">
                            <SettingsIcon />
                        </IconButtonStyled>
                        <IconButtonStyled size="large" color="inherit" onClick={handleMenuClick}>
                            <AccountCircleIcon />
                        </IconButtonStyled>
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={sign}
                open={Boolean(sign)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        width: 200,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))',
                        mt: 1.5,
                        '& .MuiMenuItem-root': {
                            '&:hover': {
                                backgroundColor: alpha('#4caf50', 0.1),
                            },
                        },
                    },
                }}
            >
                <StyledLink to='/signin'>
                    <MenuItem onClick={handleMenuClose}>
                        <PersonIcon sx={{ mr: 1 }} /> Sign In
                    </MenuItem>
                </StyledLink>
                <StyledLink to='/signup'>
                    <MenuItem onClick={handleMenuClose}>
                        <PersonAddIcon sx={{ mr: 1 }} /> Sign Up
                    </MenuItem>
                </StyledLink>
            </Menu>
            <Outlet></Outlet>
        </Box>
    );
}
