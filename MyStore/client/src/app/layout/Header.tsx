import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks = [
  {title: 'Catalog', path: '/catalog'},
  {title: 'About', path: '/about'},
  {title: 'Contact', path: '/contact'}
]

const rightlinks = [
  {title: 'Login', path: '/login'},
  {title: 'Register', path: '/register'}
]

const navStyles = {
  color:'inherit', 
  textDecoration:'none',
  typography: 'h6',
  '&:hover':{
    color: 'gray.500'
  },
  '&.active':{
    color: 'text.secondary'
  }               
}

export default function Header({toggleTheme}: any) {
  return (
    <>
      <AppBar position="static" sx={{mb: 4}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <Box display='flex' alignItems='center'>
          <Typography variant="h6" component={NavLink} 
            to='/' 
            sx={navStyles}>
            ShopStore
          </Typography>
          <Switch color="warning" onChange={toggleTheme}/>
          </Box>
          
          <List sx={{display:'flex'}}>
            {midlinks.map(({title, path}) => (
              <ListItem
                component = {NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            )
            )}
          </List>
          <Box display='flex' alignItems='center'>
          <IconButton size='large' edge='start' color='inherit' sx={{mr:2}}>
                <Badge badgeContent='4' color='secondary'>
                  <ShoppingCart></ShoppingCart>
                </Badge>
          </IconButton>
          <List sx={{display:'flex'}}>
            {rightlinks.map(({title, path}) => (
              <ListItem
                component = {NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            )
            )}
          </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}