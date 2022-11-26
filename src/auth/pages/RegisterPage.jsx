import {Link as RouterLink} from 'react-router-dom'
import {Grid,Typography,TextField,Button,Link} from '@mui/material'
import {Google} from '@mui/icons-material'

import { AuthLayaut } from "../layaout/AuthLayaut";

export const RegisterPage = () => {
  return (
    <AuthLayaut title="Register">
      <form>
              <Grid container>
              <Grid item xs={12} sx={{sm:2,mt:2}}>
                  <TextField 
                    label='name' 
                    type="text" 
                    placeholder="Luis Ramirez" 
                    fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{sm:2,mt:2}}>
                  <TextField 
                    label='Mail' 
                    type="email" 
                    placeholder="correo@google.com" 
                    fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField 
                    label='password' 
                    type="password" 
                    placeholder="password" 
                    fullWidth/>
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  <Grid item xs={12} >
                    <Button variant="contained" fullWidth>
                      Register
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent='end' direction='row'>
                  <Typography sx={{mr:1}}>do you have an account?</Typography>
                  <Link component={RouterLink} color='inherit' to="/auth/login">
                    login
                  </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayaut>
            

  )
}
