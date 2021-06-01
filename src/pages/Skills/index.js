import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Paper } from "@material-ui/core";
import ToolCard from "./toolCard";

let width = window.innerWidth>360?360:window.innerWidth;
console.log(width)
const useStyles = (theme) => (
    {
    resume : {
        fontWeight : 600,
        marginTop: 20
    },
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
        minHeight : "200px",
        marginTop : "1px",
        //border : "1px solid black"   
    },
    cardWidth:{
        width : 320,
    },
    alignCenter :{
        display:"flex",
        justifyContent:"center"
    }

})

class Skills extends React.Component{
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
                        My Skills
                    </Box>
                </Typography>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                            <Grid item xs={12} md={6} lg={4} className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/js.png" height={24}/>
                                        <span style={{marginLeft:"10px"}}>JavaScript</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Reactjs, for most of the frontend and UI development work.
                                    Experienced in using third party react-dependencies. Also capable in working with Redux, NextJS and Websockets.
                                    <p>Backend - Experienced in working with Express Js framework. </p>
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12}md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/py.png" height={24}/>
                                        <span style={{marginLeft:"10px"}}>Python</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Specialities - Django and Django REST, using as the primary programming tool
                                     for backend development. Experience of Django Channels, capable of writing 
                                     scalable, testable, and maintanable program.<br/>
                                    Programming - Basic knowledge of Python Programming Language, used for programming contests.
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/mysql.png" height={33}/>
                                        <span style={{marginLeft:"10px"}}>SQL</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Experienced in MySQL and PHPMyAdmin for database handling. Integrated MySQL in django based web app and 
                                    PHP based website. Familiar with database security enhancement. 
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/php.png" height={24}/>
                                        <span style={{marginLeft:"10px"}}>PHP</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Made PHP based websites. Knows about PHP injection. 
                                    Used php based sessions, cookies, and programming constructs.
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/mongodb.png" height={33}/>
                                        <span style={{marginLeft:"10px"}}>MongoDB</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Learned and worked on MongoDB during an internship. Experienced in using MongoDB Atlas and CLI.
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/html.png" height={24}/>
                                        <span style={{marginLeft:"10px"}}>HTML-CSS</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Experienced in making HTML Websites and css for styling.
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/c++.png" height={33}/>
                                        <span style={{marginLeft:"10px"}}>C++</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Know basic C++ programming, used for contest programming and 
                                    problem solving. Also using STL for data structures and algorithms implementaion.
                                    </Box>         
                                </Box>                 
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}  className={classes.alignCenter}>
                                <Box className={classes.cardWidth}>
                                    <Box className={classes.cardHead}>
                                        <img src="./assets/images/java.png" height={33}/>
                                        <span style={{marginLeft:"10px"}}>Java</span>
                                    </Box>  
                                    <Box className={classes.cardBody} >
                                    Speciality - Object Oriented programming in Java. Mainly using for course related projects and assignments.
                                    </Box>         
                                </Box>                 
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>  
                    <Typography variant="h3" >
                    <Box display="block" fontFamily="'Lora', serif" fontWeight={700} fontStyle="italic" mb={2} mt={3}>
                        Tools & Technologies
                    </Box>
                    </Typography>

                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                                <Grid item>
                                    <ToolCard image="./assets/images/docker.png" text="Docker"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/cronjobs.png" text="CronJobs"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/jupyter.png" text="Jupyter"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/vscode.png" text="VS Code"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/postman.png" text="Postman"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/git.png" text="Git"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/vim.png" text="Vim"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/pandas.png" text="Pandas"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/numpy.svg" text="Numpy"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/seaborn.png" text="SeaBorn"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/linux.png" text="Linux Shell Utilities"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/retool.png" text="Retool"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/semantic.png" text="Semantic UI"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/mui.svg" text="Material-UI"/>            
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography variant="h3" >
                    <Box display="block" fontFamily="'Lora', serif" fontWeight={700} fontStyle="italic" mb={2} mt={3}>
                        Soft Skills
                    </Box>
                    </Typography>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}>
                            <Grid className={classes.widthManage}  container spacing={2} >
                                <Grid item>
                                    <ToolCard image="./assets/images/communication.png" text="Communication"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/teamwork.png" text="Team-Work"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/flexible.svg" text="Flexible"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/leader.png" text="Leadership"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/friendly.png" text="Friendly"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/ethics.png" text="Work Ethics"/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/motivated.webp" text="Motivated "/>            
                                </Grid>
                                <Grid item>
                                    <ToolCard image="./assets/images/passionate.png" text="Passionate "/>            
                                </Grid>
                            </Grid>
                        </Grid>
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(Skills));