import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Paper } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

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
    cardHead: {
        backgroundColor : "#d8dee8",//"#f9fafc",
        padding:"10px",
        color : "#1c2d41",
        fontWeight:600,
        fontSize:"24px",
        borderRadius : "6px 6px 0px 0px",
        display:"flex",
        alignItems : "center",
        //border : "1px solid black"
    },
    cardBody: {
        backgroundColor : "white",
        padding:"10px",
        color :"#3c4858",
        borderRadius : " 0px 0px 6px 6px",
        fontSize : "16px",
        fontWeight : 400,
        fontFamily : "arial",
        minHeight : "fit-content",
        marginTop : "1px",
        display: "flex",
        flexDirection: "column",
        //border : "1px solid black"   
    },
    cardWidth:{
        width : 320,
    },
    alignCenter :{
        display:"flex",
        justifyContent:"center"
    },
    role:{
        backgroundColor : "#d8dee8",
        color : "#000000",
        fontSize : "13.33px",
        paddingLeft:"10px",
        paddingRight : "10px",
        display:"flex"
    },
    rightSpan : {
        display : "flex",
        flex : "1 1 auto"
    },

})

let projects = [
    {
        name : "Bug Track",
        image : "./assets/images/bugtrack.png",
        role : "Full-Stack Developer",
        date : "August 2020",
        url : "https://github.com/gagansh7171/BugTrack",
        desc : "An easy to use bug tracking system with an intuitive user interface and instinctive workflow. This app uses Django for backend and react-js for frontend."
    },
    {
        name : "ML Attempts",
        image : "./assets/images/ml.png",
        role : "Machine Learning",
        date : "September 2020",
        url : "https://github.com/gagansh7171/ML-attempts",
        desc : "This Project is created with the intent to collect my attempts on various machine learning problems."
    },
    {
        name : "IITR Database",
        image : "./assets/images/iitrdb.jpeg",
        role : "Full-Stack Developer",
        date : "January 2020",
        url : "https://github.com/gagansh7171/IITR_database",
        desc : "A winter project for maintaining all the course related materials for IITR students. Successful Submission for interview round of IMG recruitment. Tech stack used are PHP, HTML and CSS. MySQL for database management."
    },
    {
        name : "Chatter Box",
        image : "./assets/images/chatter.png",
        role : "Full-Stack Developer",
        date : "March 2020",
        url : "https://github.com/gagansh7171/Chatter-Box",
        desc : "Chat Application for practice purposes. Tech Stacks used are PHP, HTML and CSS. MySQL is used for database management. "
    },
    {
        name : "Tic Tac Toe",
        image : "./assets/images/tictactoe.png",
        role : "Frontend Developer",
        date : "March 2020",
        url : "https://github.com/gagansh7171/js-game",
        desc : "A JavaScript based game. Play Tic-Tac-Toe against AI."
    },
    {
        name : "Alien Invasion",
        image : "./assets/images/alien.bmp",
        role : "Game Developer",
        date : "September 2019",
        url : "https://github.com/gagansh7171/alien",
        desc : "A Python based game. Used PyGame library to render graphics. Based upon the book \"Python Crash Course\"."
    },
    {
        name : "ECO STUDY",
        image : "./assets/images/eco.jpg",
        role : "Frontend Developer",
        date : "November 2019",
        url : "https://gagansh7171.github.io/EVS/light/index.html",
        desc : "A HTML-CSS based website listing flora found in IIT Roorkee. My early attempts at practicing frontend development."
    },
    {
        name : "About Me",
        image : "./assets/images/me.jpg",
        role : "Frontend Developer",
        date : "September 2019",
        url : "https://gagansh7171.github.io/CSN101ASSIGN/",
        desc : "A HTML-CSS based website as a submission for a course assignment. My early attempts at practicing frontend development and making a resume website."
    },
    {
        name : "People Search",
        image : "./assets/images/people_search.svg",
        role : "Full-Stack Developer",
        date : "June 2021",
        url : "https://github.com/IMGIITRoorkee/omniport-frontend-people_search/",
        desc : "An app to search people at IITR based on their details and interests.<br/>Tech Stack - ReactJS, Semantic UI, Django<br/>"
    },
    {
        name : "BruteForce",
        image : "./assets/images/bruteForce.svg",
        role : "Full-Stack Developer",
        date : "September 2020",
        url : "https://github.com/BruteForce-CP/BruteForce",
        desc : "Worked in a team of 5 developers under guidance of Prof. Sandeep Kumar.<br/>The project involved developing a platform for competitive programmers' discussions, blogs and Q&A."
    },
    {
        name : "RISC Processor",
        image : "./assets/images/risc.png",
        role : "Logisim Programmer",
        date : "November 2020",
        url : "https://github.com/gagansh7171/RISC-Processor-Simulator",
        desc : "Worked in a team of 6 developers under the guidance of Prof Peddoju Sateesh Kumar.<br/>We have designed a 32-Bit RISC inspired Processor Simulator with Von Neumann Architecture using Logisim and an assembler in python."
    },

]
class Projects extends React.Component{
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
                        My Projects
                    </Box>
                </Typography>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[8]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/op_logo.png" height={24}/>
                                        <span style={{marginLeft:"10px"}}>Omniport-Setup-CLI</span>
                                    </Box>
                                    <Box className={classes.role}><span>Developer</span><span className={classes.rightSpan}></span><span>December 2020</span></Box>  
                                        <div className={classes.cardBody} >
                                        <div>A CLI to setup Omniport and its components on your local system. Installing Dockerized setup of Omniport
                                        needs referrig to the docs a lot many times and contacting the developers for unresolved issues. But the cli
                                        does all the job for you. Currently published as an npm package.
                                        </div>
                                        <div style={{alignSelf: "flex-end",width: "140px", alignItems: "flex-end",display: "flex",float: "right",justifyContent: "space-around"}}>
                                            <a href="https://www.npmjs.com/package/@imgiitr/omniport-setup-cli" target="_blank">
                                                <img src="./assets/images/npm.png" height={24}/>
                                            </a>
                                            <a href="https://github.com/gagansh7171/omniport-setup-cli" target="_blank"><Button variant="outlined" color="secondary">
                                                Details
                                            </Button></a>
                                        </div>
                                    </div>         
                                </Box>
                                
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[9]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[0]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[10]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[1]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[2]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[3]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[4]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[5]}/>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <ProjectCard {...projects[6]}/>                 
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(Projects));