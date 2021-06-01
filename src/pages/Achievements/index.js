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
    }

})

class Achievements extends React.Component{
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
                        My Achievements
                    </Box>
                </Typography>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <ul>
                                <li>
                                    <b><a href="https://play.picoctf.org/practice" target="_blank"><u>PicoCTF</u></a> 2021</b><br/>
                                    <b>Global Rank 466</b><br/>
                                    Among 6215 participants worldwide. Participated as a member of team SecretSix.
                                </li>
                                <li>
                                    <b>Codechef</b><br/>
                                    <b><a href="https://www.codechef.com/users/gagan_sharma" target="_blank"><u>gagan_sharma</u></a> 4★</b><br/>
                                    Scored Global Rank 9 and 64 in Long Contests
                                </li>
                                <li>
                                    <strong>JEE Advanced 2019</strong><br/>
                                    <strong>All India Rank - 303</strong><br/>
                                    Ranked in top 0.18 percentile in the JEE Advanced.
                                </li>
                                <li>
                                    <b>JEE MAINS 2019</b><br/>
                                    <b>All India Rank - 206</b><br/>
                                    Ranked in top 0.02 percentile in JEE MAINS
                                </li>
                                <li>
                                    <b><a href="http://www.kvpy.iisc.ernet.in/main/index.htm" target="_blank"><u>KVPY</u></a> SA 2018</b><br/>
                                    <b>All India Rank - 198</b><br/>
                                    Ranked 198 among 50K participants conducted by Department of Science and Technology, Government of India
                                </li>
                                <li>
                                    <b>NTSE 2017</b><br/>
                                    <b>Scholar</b><br/>
                                    Was selected among the top 775 students from about 1 million participants for a scholarship funded by NCERT.
                                </li>
                                <li>
                                    <b>SOMT 2017</b><br/>
                                    <b>Delhi State Rank 1</b><br/>
                                    Got 1st rank in SOMT 2017 conducted by <a href="http://dsstf.org/" target="_blank"><u>DSSTF</u></a>, among 15,300 participants from all over Delhi.
                                </li>
                                <li>
                                    <b><a href="https://www.iapt.org.in/" target="_blank"><u>NSEs</u></a></b><br/>
                                    National Top 1% NSEA, NSEP, NSEC 2018. Cleared NSEP, NSEC.<br/>
                                    State Top 1% NSEA 2017. Cleared NSEA.
                                </li>
                                <li>
                                    <b>FTRE 2016</b><br/>
                                    <b>National Rank 125</b><br/>
                                    Conducted by FIITJEE in more than 60 cities across the country.
                                </li>
                                <li>
                                    <b><a href="http://www.edudel.nic.in/welcome_folder/ntsejsts.htm" target="_blank"><u>JSTSE</u></a> 2016</b><br/>
                                    <b>Delhi State Rank 104</b><br/>
                                    Among 22082 students conducted by Directorate of Education Delhi. 
                                </li>
                                
                            </ul>
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(Achievements));