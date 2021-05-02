import {
  AppBar,
  Badge,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar
} from '@material-ui/core';
import { AccountCircle, Notifications } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authRef } from '../firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menubar: {
      background: 'linear-gradient(top, #4c4e5a 0%,#2c2d33 100%)'
    },
    menuItem: {
      color: '#F3F3F3',
      transition: 'color .2s ease-in-out',
      background: 'transparent',
      "&:hover": {
        color: '#F26E01',
        background: 'transparent'
      }
    },
    activeLink: {
      'button': {
        color: '#F26E01'
      }
    }
  })
);

export const Menubar = (props: any) => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    authRef.onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerState(open);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      {/*<IconButton onClick={toggleDrawer(true)}>
        <ExpandMore/>
      </IconButton>*/}
      {/*<SwipeableDrawer
        anchor={'top'}
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>*/}
      <div className={classes.grow}>

        <AppBar position="sticky">
          <Toolbar className={classes.menubar}>
            <Link to={'/'}>
              <Button aria-label={'home-menu'} className={classes.menuItem}
                      disableElevation disableTouchRipple disableRipple>
                Home
              </Button>
            </Link>
            <Link to={'/events'}>
              <Button aria-label={'event-menu'} className={classes.menuItem}
                      disableElevation disableTouchRipple disableRipple>
                Events
              </Button>
            </Link>
            <NavLink to={'/test'} activeClassName={classes.activeLink}>
              <Button aria-label={'test-menu'} className={classes.menuItem}
                      disableElevation disableTouchRipple disableRipple>
                Test
              </Button>
            </NavLink>
            <div className={classes.grow}/>
            {isLoggedIn && (
              <div>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <Notifications/>
                  </Badge>
                </IconButton>
                <IconButton
                  edge={'end'}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {/*</SwipeableDrawer>*/}
    </>
  )
}
