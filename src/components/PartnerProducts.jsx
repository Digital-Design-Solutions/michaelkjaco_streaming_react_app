import React from 'react'
import { Container, Typography, Box } from '@mui/material';

import { LocalImages } from '../Utils/images';

const listData = [
    {
      imageUrl: LocalImages.rootWellness,
      label: "Root Wellness",
    },
    {
      imageUrl: LocalImages.LifeWave,
      label: "LifeWave",
    },
    {
      imageUrl: LocalImages.c60EVO,
      label: "C60 EVO",
    },
    {
      imageUrl: LocalImages.c60EVO1,
      label: "C60 EVO",
    },
    {
      imageUrl: LocalImages.c60EVO2,
      label: "C60 EVO",
    },
    {
      imageUrl: LocalImages.c60EVO3,
      label: "C60 EVO",
    },
  ];

const PartnerProducts = () => {
  return (
    <Box sx={{textAlign: "center", py: 5}}>
       <Typography variant="h4" gutterBottom className='font-gloucester' sx={{p:0, m:0}}>
       Shop MJ❜s Partners and Save
      </Typography>
      <Typography variant="subtitle2" className='color-gray' sx={{p:0, m:0, pb:2, lineHeight:1, fontWeight: "normal", fontSize: 12}}>Home is behind, the world ahead and there are many paths <br />
        to tread through shadows to the e"dge.</Typography>
        <Box><img src={LocalImages.leaveWings} alt="" width={80} /></Box>
      <Container sx={{textAlign: "center", py: 3}}>
        <ul>
          {listData.map((item, index) => (
              <li
                key={item.imageUrl}
                style={{
                  justifyContent: "center",
                  display: "inline-block",
                  textAlign: "center",
                  padding : "0px 50px 30px 0",
                }}
              >
                {/* <ImageCard imageUrl={item.imageUrl} label={item.label} /> */}

                <Box
                style={{
                  background: `url(${item.imageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "130px",
                  height: "130px",
                }}
                >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgba(255,255,255,0.6)",
                      width: "100%",
                      textAlign: "center",
                      fontSize: "12px",
                      padding: "5px 0",
                    }}
                  >
                    {item.label}
                  </span>
          </Box>
        </Box>
          </li>    
            ))}
        </ul>


      </Container>
    </Box>
  )
}

export default PartnerProducts;
