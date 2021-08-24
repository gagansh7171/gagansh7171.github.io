import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Paper } from "@material-ui/core";


let width = window.innerWidth>360?360:window.innerWidth;

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
    flex:{
        display:"flex",
        height:"fit-content"
    },
    nameBox:{
        display:"flex",
        height:"fit-content",
        marginLeft:"15px",
        flexDirection:'column'
    },
    images:{
        width: "63px",
        height : "63px"
    },
    name : {
        fontWeight:600,
        fontSize:"16px",
        lineHeight:"24px"
    },
    duration:{
        fontSize:"14px",
        color : "#808080",
        fontWeight:400
    },
    desc:{
        marginTop:"10px",
        maxWidth:"800px",
        fontSize:"16px",
        fontFamily : "arial"
    }

})

class WorkEx extends React.Component{
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
                        Work Experience
                    </Box>
                </Typography>
                <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                                <Grid item xs={12} >
                                    <Grid>
                                        <Grid item xs={12}>
                                            <Box className={classes.flex}>
                                                <img className={classes.images} src="/assets/workex/img.png"/>
                                                <Box className={classes.nameBox} >
                                                    <Typography className={classes.name}>Information Management Group, IIT Roorkee</Typography>
                                                    <Typography className={classes.duration}>Full Stack Developer</Typography>
                                                    <Typography className={classes.duration}>Jan 2020 - Present</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className={classes.desc}>
                                        IMG is a group of students that constantly strive to lead in the innovation, development and maintenance of advanced information technologies including computer systems, software and database systems.
                                        Through IMG I learnt about various tools like ReactJS, Git, Django, MySQL and  was introduced to Open Source. 
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid>
                                        <Grid item xs={12}>
                                            <Box className={classes.flex}>
                                                <img className={classes.images} src="/assets/workex/airblack.jfif"/>
                                                <Box className={classes.nameBox} >
                                                    <Typography className={classes.name}>Airblack</Typography>
                                                    <Typography className={classes.duration}>Engineering Intern</Typography>
                                                    <Typography className={classes.duration}>Mar 2021 - May 2021 · 3 months</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className={classes.desc}>
                                        Worked in a professional environment to develop premium features of Airblack's  website.<br/>
                                        Skills I acquired during the internship : MongoDB, Express JS, AWS, Retool <br/>
                                        Tech Stack I worked on : <a href="https://docs.bit.dev/docs/quick-start"><u>Bit</u></a>, Express JS, MongoDB, ReactJS, Redux-Saga, <a href="https://branch.io/"><u>Branch.io</u></a> (deep links). <br/>
                                        Projects I worked on :
                                        <ul>
                                            <li>
                                                Whatsapp Notification
                                            </li>
                                            <li>
                                                Events and Analytics
                                            </li>
                                            <li>
                                                Rebuild Checkout and Payment Link Generation system
                                            </li>
                                            <li>
                                                Intercom Integration
                                            </li>
                                            <li>
                                                Enhancement and addition of Website features
                                            </li>
                                        </ul>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid>
                                        <Grid item xs={12}>
                                            <Box className={classes.flex}>
                                                <img className={classes.images} src="/assets/workex/NewtonSchool.png"/>
                                                <Box className={classes.nameBox} >
                                                    <Typography className={classes.name}>Newton School</Typography>
                                                    <Typography className={classes.duration}>Tech Intern</Typography>
                                                    <Typography className={classes.duration}>Jun 2021 - Aug 2021 · 2 months</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className={classes.desc}>
                                        Worked in a professional environment to develop and improve features of Newton's website and mobile app.<br/>
                                        Skills I acquired during the internship: React Native, Firestore <br/>
                                        Tech Stack I worked on : React JS, Redux, Redux-Saga, Bootstrap<br/>
                                        Projects I worked on :
                                        <ul>
                                            <li>
                                                Making the website more mobile responsive.
                                            </li>
                                            <li>
                                                Webcam integration in test playgrounds.
                                            </li>
                                            <li>
                                                Improving Newton Chat.
                                            </li>
                                            <li>
                                                Verified 300 questions for Newton assignments and tests on topics of JS, React and HTML
                                            </li>
                                            <li>
                                                Improving UI of feedback forms
                                            </li>
                                            <li>
                                                Documenting feature additions in Notion docs.
                                            </li>
                                        </ul>
                                        </Grid>
                                    </Grid>
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(WorkEx));