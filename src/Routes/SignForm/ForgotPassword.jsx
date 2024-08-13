import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        textDecoration: 'underline',
        color: '#a103fc',
        transition: 'color 0.3s ease, text-decoration 0.3s ease',
    },
});

const defaultTheme = createTheme();

export default function ForgotPassword() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot Password
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Reset Link
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <StyledLink to="/signin" variant="body2">
                                    Back to Sign In
                                </StyledLink>
                            </Grid>
                            <Grid item>
                                <StyledLink to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
