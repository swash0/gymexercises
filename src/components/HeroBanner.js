import React from 'react'
 import { Box, Stack, Typography, Button } from '@mui/material'
 import HeroBannerImage from '../assets/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'}, 
        ml: {sm: '50px', }
    }}position='relative' p='20px'>
<Typography color= 'Green' fontWeight= '600' fontSize = '26px'>
   Arbyte Fitness Club
</Typography>

<Typography fontWeight={700}
     sx= {{fontSize: {lg: '44px', xs: '40px' }}}
     mb='23px' mt='30px'
     >
        Work, Sweat <br/>  and Achieve

     </Typography>

<Typography fontSize = '22px'
lineHeight='35px' mb={8}> 
Keep your squats low and your standard high.<br/> Check out the most effective exercises for your body
</Typography>

    <Button variant= 'contained'
    color="success" href='#exercises'
    sx={{ backgroundColor: 'Green', padding: '10px'}}
    > Explore Exercises</Button>
    <Typography 
    fontWeight={600}
    color= 'black'
    sx={{
        opacity: 0.1,
        display: { lg: 'block', xs: 'none'}
    }}
fontSize='200px'
    > 
        Exercise
    </Typography>
<img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
