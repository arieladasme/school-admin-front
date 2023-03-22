import { MenuBook } from '@mui/icons-material'
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const listMenu = [
  { text: 'Asignaturas', link: '/subjects' },
  { text: 'Attendance', link: '/attendance' },
  { text: 'Perfil', link: '/perfil' },
  { text: 'Usuarios', link: '/users' },
]

export const SideBar = ({ drawerWidth = 240 }) => {
  const { user } = useSelector(state => state.auth)

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {user.name}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {listMenu.map(({ text, link }) => (
            <ListItem key={text} disablePadding>
              <NavLink to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <MenuBook />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                  </Grid>
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
