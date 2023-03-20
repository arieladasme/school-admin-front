import { AccessAlarm, MenuBook } from '@mui/icons-material'
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
          {['Asignaturas', 'Asistencia', 'Perfil', 'Usuarios'].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBook />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
