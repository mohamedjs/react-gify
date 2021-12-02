import React, { useState } from 'react'
import { 
     AppBar, 
     InputBase, 
     makeStyles, 
     Toolbar, 
     Typography, 
     Badge, 
     Avatar 
} from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
     toolbar: {
          display: "flex",
          justifyContent: "space-between"
     },
     logoLg: {
          display: "none",
          [theme.breakpoints.up("sm")]: {
               display: "block"
          }
     },
     logoSm: {
          display: "none",
          [theme.breakpoints.down("sm")]: {
               display: "block"
          }
     },
     search: {
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255, .15)",
          '&:hover': {
               backgroundColor: "rgb(255, 255, 255, .25)",
          },
          borderRadius: theme.shape.borderRadius,
          padding: "4px",
          width: "50%",
          [theme.breakpoints.down("sm")]: {
               display: (props) => props.open? "flex" : "none",
               width: "70%"
          }
     },
     input: {
          color: "white",
          marginLeft: theme.spacing(1)
     },
     icons: {
          alignItems: "center",
          display: (props) => props.open ? "none" : "flex" 

     },
     badge: {
          marginRight: theme.spacing(2)
     },
     searchButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up("sm")]: {
               display: "none"
          }
     },
     cancel: {
          [theme.breakpoints.up("sm")]: {
               display: "none"
          }
     }
}))

const Navbar = () => {
     const [open, setOpen]= useState(false)
     const classes = useStyles({ open })
     return (
          <AppBar position="fixed">
               <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg}>
                         Social Network
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                         Social
                    </Typography>
                    <div className={classes.search}>
                         <Search />
                         <InputBase placeholder="Search..." className={classes.input} />
                         <Cancel className={classes.cancel} onClick= {() => setOpen(false)}/>
                    </div>
                    <div className={classes.icons}>
                         <Search 
                              className={classes.searchButton}
                              onClick= {() => setOpen(true)}
                         />
                         <Badge badgeContent={4} color="secondary" className={classes.badge}>
                              <Mail />
                         </Badge>
                         <Badge badgeContent={2} color="secondary" className={classes.badge}>
                              <Notifications />
                         </Badge>
                         <Avatar alt="Mohamed Mahmoud" src="../asset/img/logo.svg" />
                    </div>
               </Toolbar>
          </AppBar>
     )
}

export default Navbar
