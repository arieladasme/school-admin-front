import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { SideBar, NavBar } from '../../ui/components'

const drawerWidth = 240

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
