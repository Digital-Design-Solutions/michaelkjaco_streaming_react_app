import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import PartnerProducts from '../../components/PartnerProducts';
import FAQ from '../../components/faq';

function Dashboard() {
  return (
    <>
      <Header /> 
      <Box sx={{width: "100%"}} className="header-bg"></Box>
      <PartnerProducts />
      <FAQ />
    </>
    )
}

export default Dashboard