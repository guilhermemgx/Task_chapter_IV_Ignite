import React from 'react';
import {Box, Image} from '@chakra-ui/react'
// import Image from 'next/image';

function Header() {
  return (
    <Box
      w={'100%'}
      h="100px"
      display={'grid'}
      placeItems={'center'}
    >
      <Image
        width={'185px'} 
        height={"46px"} 
        src={'./logo/logo.svg'} 
      />

    </Box>
  );
}

export default Header;