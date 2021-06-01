import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';


let width = window.innerWidth>360?360:window.innerWidth;
console.log(width)
const useStyles = (theme) => (
    {
    footer : {
        backgroundColor : "#1c2d41",
        color : "white",
    },
    hr:{
        backgroundColor: "#8392a5",
        marginTop: "1rem",
        marginBottom: "1rem",
        border: 0,
        borderTop: "1px solid rgba(0,0,0,.1)",
        boxSizing: "content-box",
        height: 0,
        overflow: "visible",
        width:"100%"
    },
    outergrid:{
        paddingTop:"50px",
        paddingLeft : "48px",
        paddingRight : "48px",
    },
    subFooter:{
        color : "#8392a5",
        lineHeight : "1.5em"
    },
    spaceTop:{
        marginTop:"10px"
    }
})

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <>
            <Box className={classes.footer}><Grid container direction="column" className={classes.outergrid}>
                <Grid item>
                    <Grid container  justify="center" >
                        <Grid item xs={12} md={5}>                           
                                <Typography variant="h5">Navigation</Typography>
                                <Typography className={classes.subFooter}>
                                    <Link to="/">About Me</Link><br/>
                                    <Link to="/skills">Skills </Link><br/>
                                    <Link to="/work">Work Experience</Link><br/>
                                    <Link to="/projects">Projects</Link><br/>
                                    <Link to="/achieve">Achievements</Link><br/>
                                    <Link to="/certi">Certificates</Link><br/>
                                </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h5" className={classes.spaceTop}>Contact me</Typography>
                                <Typography className={classes.subFooter}>
                                    Email : gagansh7171@gmail.com<br/>
                                    Work : gagan_s@cs.iitr.ac.in<br/>
                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <hr className={classes.hr}/>
                </Grid>
                <Grid item>
                    <Grid container  justify="center" >
                        <Grid item xs={12} md={3} className={classes.spaceTop}>                           
                                    <span className={classes.subFooter} style={{fontSize:"1.5em"}}>
                                    <span style={{fontFamily:"'Teko', sans-serif", fontWeight:500}}>GS </span>
                                    Gagan Sharma</span>
                            </Grid>
                            <Grid item xs={12} md={3} className={classes.spaceTop}>
                                <span className={classes.subFooter} style={{fontSize:"1.5em"}}>
                                <a href="https://github.com/gagansh7171/gagansh7171.github.io">Fork It!</a>
                                </span>
                            </Grid>
                            <Grid item xs={12} md={4} className={classes.spaceTop} style={{paddingBottom:"15px"}}>
                                <span className={classes.subFooter} style={{fontSize:"1.5em"}}>
                                    Made with ❤️ by Gagan sharma
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid></Box>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
      currentTheme : state.app.theme || "light",
    };
}

export default withStyles(useStyles)(connect(mapStateToProps, null)(Footer));