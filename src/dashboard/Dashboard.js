import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from '../assets/id_visual/logo.svg';
import detailNav from '../assets/id_visual/detail_nav.svg';
import imageUser from '../assets/images/user_image_1.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
        width: "80%",
        margin: "0 auto",
    },
    navbar: {
        background: "#7A57FD",
        boxShadow: "none",
    },
    logo: {
        width: "100px",
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

  }));

const Dashboard = () => {
    const classes = useStyles();

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
                            <button className="btn_teacher-mode">
                                <Typography className={classes.text_button}>CHANGE TO TEACHER MODE</Typography>
                            </button>
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
            </div>
        </div>
    )
}

export default Dashboard
