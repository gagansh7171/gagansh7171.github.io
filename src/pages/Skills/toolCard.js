import React from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

let width = window.innerWidth>360?360:window.innerWidth;
console.log(width)
const useStyles = (theme) => (
    {
        image:{
            display:"flex",
            alignItems : "center",
            backgroundColor : "#d8dee8",
            padding : "8px",
            borderRadius : "8px 0 0 8px"
        },
        outer:{
            display:"flex",
        },
        text:{
            borderRadius : "0 8px 8px 0",
            display:"flex",
            alignItems : "center",
            padding : "8px",
            width : "fit-content",
            backgroundColor : "white",
            fontWeight:600,
            fontSize:"24px",
            color : "black"
        }    

})

class ToolCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
        return(
            <>
            <Box className={classes.outer}>
                <div className={classes.image}><img src={this.props.image} height="30"/></div>
                <div className={classes.text}>{this.props.text}</div>
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

export default withStyles(useStyles)(connect(mapStateToProps, null)(ToolCard));