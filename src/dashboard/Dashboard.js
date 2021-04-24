import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import logo from '../assets/id_visual/logo.svg';
import detailNav from '../assets/id_visual/detail_nav.svg';
import detailHeader from '../assets/id_visual/detail_header.svg';
import imageHeader from '../assets/images/image_header.svg';
import imageUser from '../assets/images/user_image_1.png';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
        display: "flex",
        width: "80%",
        margin: "0 auto",
        position: "relative"
    },
    navbar: {
        background: "#7A57FD",
        boxShadow: "none",
        display: "flex",
    },
    logo: {
        width: "95px",
    },
    my_classes:{
        fontSize: "14px",
        lineHeight: "19.7px",
        initialLetter: "-2%",
        fontWeight: "400",
        marginRight: "auto",
        flexGrow: 1,
        paddingLeft: "30px"
    },
    link_nav: {
        color: "#ffffff",
        textDecoration: "none",
    },
    detail_nav: {
        width: "65px",
        position: "absolute",
        left: 0,
        marginLeft: "-50px",
    },
    logo_container: {
        flexGrow: 0,
    },
    image_user:{
        backgroundSize: "cover",
        borderRadius: "50px",
    },
    text_button: {
        color: "#ffffff",
        fontSize: "11px",
        fontWeight: "500"
    },
    toolbar: {
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    header:{
        background: "#ffffff",
        width: "100%",
        margin: "35px 0",
        padding: "20px 55px",
        display: "flex"
    }

  }));

const Dashboard = ({status}) => {
    const classes = useStyles();
    const [ico, setIco] = useState(status);
        
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function openMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
                let myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');                    
                }
            }
        }
    }      
    
    return (
        <div>
            <div className={classes.root}>
                <AppBar className={classes.navbar} position="static">
                    <Toolbar id="toolbar" className={classes.container}>
                        <img id="detail_nav" className={classes.detail_nav} src={detailNav} alt="detail_nav"/>
                        {/* LOGO */}
                        <Typography id="logo_container" variant="h6" className={classes.logo_container}>
                            <Link className={classes.link_nav}><img className={classes.logo} src={logo} alt="logo_eduick"/></Link>
                        </Typography>
                        {/* NAV ITEM */}
                        <Typography id="my_classes" className={classes.my_classes}>
                            <Link className={classes.link_nav} to="/">My Classes</Link>
                        </Typography>
                        {/* BUTTON CHANGE TO TEACHER MODE*/}
                        <div className="btn_teacher-mode-container">
                            <Link to="/" className="button_for-desktop">
                                <button className="btn_teacher-mode">
                                    <Typography className={classes.text_button}>CHANGE TO TEACHER MODE</Typography>
                                </button>
                            </Link>
                            <div className="dropdown">
                                <IconButton edge="end" onClick={() => setIco(ico), () => openMenu()} className="dropbtn">
                                    {!ico ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                                </IconButton>
                            </div>                   
                        </div>
                        <div id="myDropdown" className="dropdown-content">
                            <Link to="/" className="menu_teacher-mode NonOpaque">
                                CHANGE TO TEACHER MODE
                                <ArrowForwardIcon className="arrow-right_teacher-mode"/>
                            </Link>
                        </div>
                        {/* AVATAR USER */}
                        <IconButton className="icon_button" color="inherit">
                            <div className="user_avatar-container">
                                <img className={classes.image_user} src={imageUser} alt="image_user"/>
                                <span className="notification_span"></span>
                            </div>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div id="content_header" className={classes.container}>
                    <div id="header" className={classes.header}>
                        <img className="detail_header" src={detailHeader} alt="detail_header"/>
                        <div className="container_header">
                            <h3 className="title_header">Hello <strong>Student<span>.</span></strong></h3>
                            <p className="text_header">
                                Whether you are a student trying to find your ideal private language teachers/tutors
                            </p>
                        </div>
                        <div className="container_img-header">
                            <img className="image_header" src={imageHeader} alt="image_header"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
