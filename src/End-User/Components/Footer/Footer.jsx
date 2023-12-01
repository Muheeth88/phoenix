import React from 'react'
import {Grid ,Button} from "@mui/material"

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10 ' container sx={{bgcolor:"black", color:"white", py:3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Button className='pb-5' variant='h6'>Company</Button>
                
                <div><Button className='pb-5' variant='h6' gutter>About</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Blog</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Press</Button> </div>
         
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Button className='pb-5' variant='h6'>Company</Button>
                
                <div><Button className='pb-5' variant='h6' gutter>About</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Blog</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Press</Button> </div>

            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Button className='pb-5' variant='h6'>Company</Button>
                
                <div><Button className='pb-5' variant='h6' gutter>About</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Blog</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Press</Button> </div>
           
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Button className='pb-5' variant='h6'>Company</Button>
                
                <div><Button className='pb-5' variant='h6' gutter>About</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Blog</Button> </div>
                <div><Button className='pb-5' variant='h6' gutter>Press</Button> </div>
            
            </Grid>
            <Grid className='pt-10' item xs={12}>All Rights Reserved</Grid>
        </Grid>
    </div>
  )
}

export default Footer