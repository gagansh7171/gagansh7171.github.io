import React, { useState } from "react";
// ROUTER
import { HashRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
// MUI Theme
import { ThemeProvider, withTheme,  createMuiTheme } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
// Redux
import { connect } from "react-redux";
import {themes} from "./theme";
import Box from '@material-ui/core/Box';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

import createPalette from "@material-ui/core/styles/createPalette";

const setTheme = (theme) =>{
  return createMuiTheme({
    palette: createPalette(themes[theme]),
  });
}

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    
    return (
      <div>
        <ThemeProvider theme={setTheme(this.props.currentTheme)}>   
          <CssBaseline/>
          <HashRouter>
            <Header/>
            <Box mt={19}>
              <RouterConfig />
            </Box>
            <Chat/>
            <Footer/>
          </HashRouter>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    currentTheme: state.app.theme || "light",
  };
};

export default connect(mapStateToProps)(App);