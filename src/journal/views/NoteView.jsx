import {Grid, Typography,Button,TextField} from '@mui/material'
import {SaveOutlined} from '@mui/icons-material'
import { ImageGalery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}>
        <Grid item >
            <Typography fontSize={39} fontWeight='ligth'>28 agosto, 2023</Typography>
        </Grid>
        <Grid item >
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}} />
                save
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='ingrese un texto'
                label='Título'
                sx={{border:'none', mb:1}}
                />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='Que susedió hoy?'
                label='Descripción'
                sx={{border:'none', mb:1}}
                minRows={5}
            />
        </Grid>
        <ImageGalery/>
    </Grid>
  )
}
