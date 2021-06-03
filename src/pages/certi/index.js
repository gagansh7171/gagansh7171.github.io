import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Paper } from "@material-ui/core";

let width = window.innerWidth>360?360:window.innerWidth;
console.log(width)
const useStyles = (theme) => (
    {
    skills:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        paddingBottom : "20px",
        marginBottom:"14px"
    },
    widthManage:{
        maxWidth : "100%",
    },
    alignCenter :{
        display:"flex",
        justifyContent:"center"
    },
    hover:{
        height : '300px',
        transition: 'width 0.75s, height 0.75s',
        '&:hover':{
            boxShadow : '0.5rem 1.25rem 1.75rem 0 rgb(100 110 140 / 34%)',
        }
    },
    image:{
        height:'100%',
        maxWidth:"100%"
    }

})


class Certi extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <>
            <Box className={classes.skills} >
                <Typography variant="h3">
                    <Box display="block" fontFamily="'Lora', serif" fontWeight={700} fontStyle="italic" mb={2}>
                        Certificates and Testimonials
                    </Box>
                </Typography>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/coursera1.png" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/somt.jpeg" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/ntse.jpg" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/nsea2018.png" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/nsec2018.png" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/nsep2018.png" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/nsea2017.jpeg" className ={classes.image}/></div>
                            </Grid>
                            
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/jstse.jpeg" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/ftre.jpeg" className ={classes.image}/></div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                    <div className={classes.hover}><img src="./assets/certi/mikat.jpeg" className ={classes.image}/></div>
                            </Grid>

                        </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>  
                    
            </Box>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
      currentTheme : state.app.theme || "light",
    };
}

export default withStyles(useStyles)(connect(mapStateToProps, null)(Certi));