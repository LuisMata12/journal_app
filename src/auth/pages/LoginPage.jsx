import {Link as RouterLink} from 'react-router-dom'
import {Grid,Typography,TextField,Button,Link} from '@mui/material'
import {Google} from '@mui/icons-material'

import { AuthLayaut } from "../layaout/AuthLayaut";

export const LoginPage = () => {
  return (
    <AuthLayaut title="Login">
      <form>
              <Grid container>
                <Grid item xs={12} sx={{sm:2}}>
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
                  <Grid item xs={12} sm={6}>
                    <Button variant="contained" fullWidth>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="contained" fullWidth>
                      <Google/>
                      <Typography sx={{ml:1}}>Google</Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container justifyContent='end' direction='row'>
                  <Link component={RouterLink} color='inherit' to="/auth/register">
                    Crate a count
                  </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayaut>
            

  )
}
