import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import styles from './HeaderNav.module.scss';
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import NavLinkCP from '../../NavLinkCP/NavLink.CP';
import owlLogo from '../../../assets/logo/owl-movie.svg';

const pages = [
  { path: '/', page: 'Home' },
  { path: '/test', page: 'test' },
];
interface IHeaderNav {
  window?: () => Window;
}

interface IHideOnScroll {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll({ children, window }: IHideOnScroll) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HeaderNav(props: IHeaderNav) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={styles.appBarContainer}>
          <Toolbar>
            {/* Bars for mobile screen */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <i className="fad fa-bars"></i>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <NavLinkCP
                      path={page.path}
                      page={page.page}
                      key={page.page}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo */}
            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
              <img src={owlLogo} alt="OWL-MOVIE" />
              <Typography variant="h5" className={styles.owlMovie}>
                OWL MOVIE
              </Typography>
            </Box>

            {/* Menu in desktop screen */}
            <Box
              sx={{ ml: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page) => (
                <NavLinkCP path={page.path} page={page.page} key={page.page} />
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
