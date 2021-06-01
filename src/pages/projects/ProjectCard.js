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
        position : "relative",
        minHeight : "230px",
        marginTop : "1px",
        //border : "1px solid black"   
    },
    cardWidth:{
        width : 320,
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

class ProjectCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <>
            
                <Box className={classes.cardWidth}>
                    <Box className={classes.cardHead}>
                        <img src={this.props.image} height={24}/>
                        <span style={{marginLeft:"10px"}}>{this.props.name}</span>
                    </Box>
                    <Box className={classes.role}><span>{this.props.role}</span><span className={classes.rightSpan}></span><span>{this.props.date}</span></Box>  
                    <Box className={classes.cardBody} >
                        {this.props.desc}<br/>
                        <div style={{ position:"absolute", bottom:"5px", right:"15px"}}>
                            <a href={this.props.url} target="_blank"><Button variant="outlined" color="secondary">
                                Details
                            </Button></a>
                        </div>
                    </Box>         
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(ProjectCard));