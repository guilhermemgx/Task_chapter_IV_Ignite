import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../components/header'
import SliderCarousel from '../components/sliderCarousel'
import TravelTypes from '../components/travelTypes/TravelTypes'
import { SliderTravel } from '../components/sliderCarousel/sliderTravel';



export default function Home({SliderTravel}) {
  return (
    <Flex flexDirection={'column'}>
      <Flex
        h={'335'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        backgroundImage={'./header/Background.png'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        flexDirection={['column', 'row']}
      >
        <Box w={['100%', "50%"]} display={'grid'} placeItems={'center'} color={'#fff'} padding={['20px', '0']}>
          <Text w={['100%','524px']} fontSize={["20px","36px"]}>5 Continents, <br /> infinitas possibilidades.</Text>
          <Text w={['100%','524px']} fontSize={["14px","20px"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>
        <Box w={['0', "50%"]} h={['0', "100%"]} display={'grid'} placeItems={'center'} opacity={['0', '1']}>
          <Image w={'418px'} h={'270px'} src='./header/Airplane.svg' marginBottom={'-120px'} />
        </Box>
      </Flex>

      <TravelTypes />

      <Box fontWeight={'medium'} margin={"auto"} fontSize={['20px','36px']} textAlign={'center'} marginBottom={'20px'}>
        <Text lineHeight={'30px'}>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>

      <SliderCarousel SliderTravel={SliderTravel} />
    </Flex>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {

  return {
    props : {
      SliderTravel
    }
  }
}

