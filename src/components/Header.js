import React from "react";
import {connect} from 'react-redux';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link} from 'react-router-dom';
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = (theme) => ({
    rightSpan : {
        display : "flex",
        flex : "1 1 auto"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})

function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = { anchorEl : null, mobileMoreAnchorEl : null }
        this.state.isMenuOpen = Boolean(this.state.anchorEl);
        this.state.isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
    }
    
    handleProfileMenuOpen = (event) => {
        this.setState({anchorEl : event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl : null});
    };

    handleMenuClose = () => {
        this.setState({anchorEl : null});
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event) => {
        this.setState({mobileMoreAnchorEl : event.currentTarget});
    };
    render(){
        const { classes } = this.props;
        return(
            <>
                <ElevationScroll {...this.props}>
                <AppBar position="fixed" className="full-wide">
                <Toolbar>
                    <Typography variant="h1">
                    <Link to="/"><Box fontFamily="'Teko', sans-serif" fontWeight={500}>
                        GS
                        </Box></Link>
                    </Typography>
                    <span className={classes.rightSpan}></span>
                    <div className={classes.sectionDesktop}>
                        <Link to="/"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                About Me
                            </Box>
                        </Button></Link>
                        <Link to="/skills"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Skills
                            </Box>
                        </Button></Link>
                        <Link to="/work"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Work Experience
                            </Box>
                        </Button></Link>
                        <Link to="/projects"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Projects
                            </Box>
                        </Button></Link>
                        <Link to="/achieve"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Achievements
                            </Box>
                        </Button></Link>
                        <Link to="/certi"><Button>
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Certificates
                            </Box>
                        </Button></Link>
                        <Button onClick={() =>{this.props.toggleTheme(this.props.currentTheme)}}>
                            {this.props.currentTheme=="light"?<Brightness4Icon/>:<Brightness7Icon/>}
                        </Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={this.handleMobileMenuOpen}
                            color="inherit"
                            >
                            <MenuIcon />
                        </IconButton>
                        <Button onClick={() =>{this.props.toggleTheme(this.props.currentTheme)}}>
                            {this.props.currentTheme=="light"?<Brightness4Icon/>:<Brightness7Icon/>}
                        </Button>
                    </div>
                    <Menu
                        anchorEl={this.state.mobileMoreAnchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={this.state.mobileMoreAnchorEl}
                        onClose={this.handleMobileMenuClose}
                    >
                        <Link to="/" onClick={this.handleMobileMenuClose}><MenuItem>
                        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                About Me
                            </Box>
                        </MenuItem></Link>
                        <Link to="/skills" onClick={this.handleMobileMenuClose}><MenuItem>
                        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Skills
                            </Box>
                        </MenuItem></Link>
                        <Link to="/work" onClick={this.handleMobileMenuClose}><MenuItem>
        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Work Experience
                            </Box>
                        
                        </MenuItem></Link>
                        <Link to="/projects" onClick={this.handleMobileMenuClose}><MenuItem>
                        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Projects
                            </Box>
                        
                        </MenuItem></Link>
                        <Link to="/achieve" onClick={this.handleMobileMenuClose}><MenuItem>
                        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Achievements
                            </Box>
                        
                        </MenuItem></Link>
                        <Link to="/certi" onClick={this.handleMobileMenuClose}><MenuItem>
                        
                            <Box fontFamily="'Roboto', sans-serif" m={2}>
                                Certificates
                            </Box>
                        
                        </MenuItem></Link>
                    </Menu>
                </Toolbar>
                </AppBar>
                </ElevationScroll>
            </>
        );
    }
}

  
function mapStateToProps(state){
    return {
      currentTheme : state.app.theme || "light",
    };
  }

  function mapDispatchToProps(dispatch){
    return{
      toggleTheme: (t) => {
        let set;
        if(t=="light"){ set="dark";}
        else if(t=="dark"){ set="light";}
        return dispatch({type:"SET_THEME", theme : set});}
    };
  }
  export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(Header));