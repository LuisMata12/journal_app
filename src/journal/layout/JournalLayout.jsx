import {Toolbar,Box} from '@mui/material'
import { NavBar,Sidebar } from '../components';


const drawerWidth = 280; 

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

        <NavBar drawerWidth={drawerWidth}/>
        
        <Sidebar drawerWidth={drawerWidth}/>
        <Box 
            component='main'
            sx={{flexGrow:1,p:3}}>
            {/* Tolbar */}
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
