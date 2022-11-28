import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import clsx from 'clsx';

let width = window.innerWidth>360?360:window.innerWidth;
console.log(width)
const useStyles = (theme) => (
    {
    outer: {
        justifyContent : "center",
        display : "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${width}px, 1fr))`
    },
    display:{
        overflow: "hidden",
    },
    inner:{
        padding : "4px",
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    logo:{
        display:'flex',
        justifyContent:'space-around'
    },
    wrap:{ 
        flexWrap:  "wrap"
      } ,      
    resume : {
        color : theme.palette.resume.contrastText,
        backgroundColor : theme.palette.resume.main,
        fontWeight : 600,
        marginTop: 20
    },
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
    skills:{
        backgroundColor : theme.palette.skills.main,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        paddingBottom : "20px"
    },
    widthManage:{
        maxWidth : "100%",
    },
    cardHead: {
        backgroundColor : "#f9fafc",
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
        fontFamily : "Calibri, sans-serif",
        height : "190px",
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

const onDownload = ()=> {

    var a = document.createElement("a");
    a.href = "./assets/19114032_Default Resume_2021-08-05_20_34_11.pdf";
    a.setAttribute("target", "_blank");
    a.click();
  }

class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <>
            
            <Box className={classes.outer} mr={20} ml={20} mt={6} mb={5}>
                
                <div className={`${classes.display} ${classes.inner}`}> 
                    <img src="./assets/images/me.jpeg" width={width>400?400:(width-16)} style={{borderRadius:"30px", border:"2px solid black"}}/>
                    <Button variant="outlined" className={classes.resume} m={2} onClick={onDownload}>Resume</Button>
                </div>
                <div className={classes.inner}>
                <Typography component="h1" variant="h2">
                    <Box display="block" fontFamily="'Lora', serif" fontWeight={700} fontStyle="italic">
                        @me<br/>
                    </Box>
                </Typography>
                <Box fontSize={20}>
                Hi there! I am Gagan Sharma, an undergrad student at IIT Roorkee currently majoring in
                Computer Science and Engineering. My hobbies include chess, problem-solving, learning new stuff, 
                and making friends.<br/><br/>
                Full-stack developer, skilled in JavaScript and Python. Experienced in React and Django for
                 building web applications. Proficient and easy to go in a professional environment. Compatible
                  in building large, scalable, and maintainable software applications.<br/>
                  Looking for a full time role as HFT Systems Developer.<br/><br/>
                You can find me at :<br/><br/>
                <div className={clsx(classes.logo,classes.wrap)}>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://www.codechef.com/users/gagan_sharma" target="_blank"><img src="./assets/images/codechef.jpg" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://leetcode.com/gagansh7171/" target="_blank"><img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://atcoder.jp/users/gagan_sharma" target="_blank"><img src="https://img.atcoder.jp/assets/logo.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://codeforces.com.cn/profile/gagan_sharma" target="_blank"><img src="./assets/images/codeforces.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://github.com/gagansh7171" target="_blank"><img src="./assets/images/github.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="mailto:gagansh7171@gmail.com" target="_blank"><img src="./assets/images/gmail.png" height={40} style={{marginTop:"5px"}}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://www.linkedin.com/in/gagan-sharma-206303/" target="_blank"><img src="./assets/images/linkedin.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://www.quora.com/profile/Gagan-Sharma-63" target="_blank"><img src="./assets/images/quora.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://www.facebook.com/profile.php?id=100039701595436" target="_blank"><img src="./assets/images/facebook.png" height={50}/></a></span>
                <span style={{minWidth:"fit-content", padding:"5px"}}><a href="https://medium.com/@gagansh7171" target="_blank"><img src={
                    this.props.currentTheme=="light" ? "./assets/images/medium.svg" : "./assets/images/medium_dark.svg" }height={50}/></a></span>
                </div>
                </Box>
                </div>
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(AboutMe));