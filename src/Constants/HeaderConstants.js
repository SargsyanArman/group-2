import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '60ch',
            '&:focus': {
                width: '80ch',
            },
        },
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
        },
    },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}));



export { TypographyStyled, IconButtonStyled, Search, SearchIconWrapper, StyledInputBase }