import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/assets/icons/body-part.png';
import TargetImage from '../assets/assets/icons/target.png';
import EquipmentImage from '../assets/assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    console.log(gifUrl);
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

  return (
    <Stack
    gap = '60px'
    sx={{
        flexDirection: {lg: 'row'},
        p: '20px',
        alignItems: 'center'
    }}> 

    <img src={gifUrl} alt ={name} loading='lazy' className='detail-image' />
    <Stack
    sx={{
        gap: {lg: '34px', xs: '20px'}
    }}
    > 
    <Typography> 
    {name}
    </Typography>
    <Typography variant='h6'>
    Once you are exercising regularly, the hardest thing is to stop it.
         {name}  is one of the best exercises to target your {target}.
         It will help you improve your mood and gain energy.

    </Typography>
    {extraDetail.map((item)=> (
        <Stack
        key={item.name}
        direction = 'row'
        gap='24px'
        alignItems='center'
        >
        <Button sx={{
            background: 'black',
            borderRadius: '50%',
            width: '100px',
            height: '100px'
        }}> 
        <img src ={item.icon} alt={bodyPart} style ={{
            width:'50px',
            height: '50px'
        }}/>
        </Button>
        <Typography textTransform='capitalize' variant="h5"> 
        {item.name}
        </Typography>
        </Stack>
    ))}
    </Stack>
    </Stack>
  )
}

export default Detail