import React, { useState } from 'react'
import '../styles/Carousel.css'
import { ProjectList } from './ProjectsList'
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Carousel() {
    const [currImg, setCurrImg] = useState(0);  // current image index  
    return (
        <div className="carousel">
            <div className='carouselInner'>
                <div className='left'>
                    <ArrowCircleLeftSharpIcon style={{ fontSize: 30 }} className='arrow' onClick={() => setCurrImg(currImg > 0 ? currImg - 1 : ProjectList.length - 1)} />
                </div>
                <div className='center'>
                    <Card sx={{ maxHeight: "650px" , maxWidth: "650px", backgroundColor: "#b5ffff" }}>
                        <CardActionArea href={ProjectList[currImg].url}>
                            <CardMedia
                                component="img"
                                height="450px"
                                image={ProjectList[currImg].image}
                                alt={ProjectList[currImg].name}
                            />
                            <CardContent sx={{ alignText: "center" }}>
                                <Typography gutterBottom variant="h4" component="div">
                                    {ProjectList[currImg].name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {ProjectList[currImg].skills}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className='right'>
                    <ArrowCircleRightSharpIcon style={{ fontSize: 30 }} className='arrow' onClick={() => setCurrImg(currImg < ProjectList.length - 1 ? currImg + 1 : 0)} />
                </div>
            </div>
        </div>
    )
}
