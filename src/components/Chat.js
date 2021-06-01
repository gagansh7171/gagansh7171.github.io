import React from "react";
import Open from './open';
import Close from './close';
import Sent from './sent';
import { withStyles } from "@material-ui/core/styles";
import { Box , Button, Typography} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = (theme) => (
    {
    pos : {
        position : 'fixed',
        bottom:'5px',
        right : '20px',
    },
    chatbox:{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        position : 'fixed',
        right: "10px",
        width: "330px",
        bottom: "95px",
        height: "430px",
        borderRadius:"5px",
        backgroundColor : theme.palette.chat.main,
        
    },
    desc:{
        color : "#ffffff",
        paddingTop : "15px",
        padding:"10px",
        background: "linear-gradient(135deg, rgb(48, 71, 236) 0%, rgb(15, 34, 167) 100%)",
        height : "40%",
        borderRadius:"5px",
    },
    hi:{
        fontSize:"32px"
    },
    success:{
        marginTop:"28px",
        width:"100%",
        padding : "10px",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        textAlign : "center"
    }
})
class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state= {user_name: '', user_email : '', message : '',write:true, sent : false, fail : false,wrongmail:false,wrongname : false, wrongmsg : false, clicked : false}
    }

    change = (prev) => {
        console.log("clicked")
        this.setState({clicked: !prev})
    }
    changeName= (name) => {
        if(name===""){
            this.setState({wrongname:true, user_name:name})
        }else{
            this.setState({wrongname:false, user_name:name})
        }
    }
    changeMail = (mail)=>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(mail)){
            this.setState({wrongmail:false, user_email : mail})
        }else{
            this.setState({wrongmail:true, user_email : mail})
        }
    }
    changeMsg = (msg)=>{
        if(msg===""){
            this.setState({wrongmsg:true, message:msg})
        }else{
            this.setState({wrongmsg:false, message:msg})
        }
    }
    onSubmit = ()=>{
        if(!this.state.wrongmsg && !this.state.wrongmail && !this.state.wrongname && this.state.user_name && this.state.user_email && this.state.message){    
            var data = {
                service_id: 'service id',
                template_id: 'template id',
                user_id: 'user id',
                template_params: {
                    'user_name': this.state.user_name,
                    'user_email' : this.state.user_email,
                    'message' : this.state.message
                }
            };
            axios.post('https://api.emailjs.com/api/v1.0/email/send',data).
            then((res)=> {console.log(res); this.setState({write:false, sent:true}); }).
            catch((err)=> {console.log(err); this.setState({write:false, fail:true}); })
        }else{
            console.log("no mail")
        }
    }
    render(){
        const { classes } = this.props;
        return(
            <>
                {this.state.clicked ? <Box  onClick={() => this.change(this.state.clicked)} className={classes.pos}><Close/></Box> : <Box onClick={() => this.change(this.state.clicked)} className={classes.pos}><Open/></Box>}
                {this.state.clicked  &&
                    <Box className={classes.chatbox}>
                        <Box className={classes.desc}>
                            <Box className={classes.hi}>Hi There 👋</Box>
                            <Typography variant="h6" style={{fontSize:"1.2rem"}}>Have an exciting project for me, wanna discuss web-series, or random talk? Feel Free to reach me</Typography>
                        </Box>
                        {this.state.write &&
                            <form className={classes.root} noValidate autoComplete="off">
                            <Input placeholder="Your Name" error={this.state.wrongname} onChange={(e) => this.changeName(e.target.value)} value={this.state.user_name} name="uer_name" style={{marginLeft:"10px", marginTop:"3px", width:"32ch"}}/>
                            <Input placeholder="Your Email" error={this.state.wrongmail} onChange={(e) => this.changeMail(e.target.value)} value={this.state.user_email} name="uer_email" style={{marginLeft:"10px", marginTop:"3px", width:"32ch"}}/>
                            <TextField label="Your Message" error={this.state.wrongmsg} onChange={(e) => this.changeMsg(e.target.value)} value={this.state.message} name="message" id="outlined-multiline-static" color="secondary" multiline rows={6} variant="outlined" style={{marginLeft:"10px", marginTop:"6px", width : 284}}/>
                            <Button fullWidth onClick={this.onSubmit}>⮞</Button>
                            </form>
                        }
                        {this.state.sent && 
                        <Box className={classes.success}>
                            <Sent/><br/>
                            <Typography variant="h6"> Thanks for reaching out to me.</Typography><br/>
                            Your message has been received and recognized.<br/> I will reply as soon as I can.
                        </Box>   
                        }
                        {this.state.fail && 
                        <Box className={classes.success}>
                            <Typography variant="h5"> OOPS! That didn't reach me</Typography><br/>
                            Looks like I am unable to receive your message<br/> right now. Please try again after some time.
                        </Box>   
                        }
                    </Box>
                }
                
            </>
        )
    }
}

export default withStyles(useStyles)(Chat);