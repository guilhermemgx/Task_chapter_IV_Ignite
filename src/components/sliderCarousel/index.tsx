import React, { useEffect, useState } from 'react';
import {Box, Flex, Image, ListItem, Text, transition, UnorderedList} from '@chakra-ui/react'
import { ButtonSliderDot } from './buttonSliderDot';
import Link from 'next/link';
// import {Link as LinkNext} from 'next/link'

// import Image from 'next/image';

function SliderCarousel({SliderTravel}) {
    const [sliderId, setSliderId] = useState(1)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [lengthWidth, setLengthWidth] = useState(0)

    const [mobile, setMobile] = useState(0)
    const LengthWidth = SliderTravel.length * 80

    useEffect( () => {
      const widthLength = window.innerWidth;
      if(widthLength <= 600){
        const LengthWidth = SliderTravel.length * 100
        setLengthWidth(LengthWidth)
      }else if(widthLength >= 600){
        const LengthWidth = SliderTravel.length * 80
        setLengthWidth(LengthWidth)
      }

      setMobile(widthLength)
    },[])

    console.log(SliderTravel.length)



    

    function handlerSliderUp() {
      if(sliderId >= SliderTravel.length){
        setSliderWidth(0)
        setSliderId(1)
      }else{
          if(mobile <= 600){
            setSliderWidth(sliderWidth + 100)
            setSliderId(sliderId + 1)
          }else if(mobile >= 600){
            setSliderWidth(sliderWidth + 80)
            setSliderId(sliderId + 1)
          }
      }

    }

    function handlerSliderDown() {
      if(sliderId <= 1){
        if(mobile <= 600){
          setSliderWidth(lengthWidth - 100)
          setSliderId(SliderTravel.length)
        }else if(mobile >= 600){
          setSliderWidth(lengthWidth - 80)
          setSliderId(SliderTravel.length)
        }
      }else{
        if(mobile <= 600){
          setSliderWidth(sliderWidth - 100)
          setSliderId(sliderId - 1)
        }else if(mobile >= 600){
          setSliderWidth(sliderWidth - 80)
          setSliderId(sliderId - 1)
        }
        // setSliderWidth(sliderWidth - 100)
        // setSliderId(sliderId - 1)
      }
    }

  return (
    <Flex as={'a'} w={['100vw',"80vw"]} h={'450px'} position={'relative'} overflowX={'hidden'} margin={"auto"}  alignItems={'center'} marginBottom={'50px'}>
        <Box 
          bg={'#121214b5'} 
          display="grid" 
          placeItems={'center'} 
          borderRadius={'50%'} position={'absolute'} 
          left={0} color={'#FFBA08'}  zIndex={3} 
          cursor={'pointer'}  onClick={handlerSliderDown}> <Image src='./sideIcons/chevron-left-1.svg' /></Box>

        <UnorderedList  
          position={'absolute'} w={`${lengthWidth}vw`} 
          display={'flex'} listStyleType={'none'} 
          marginLeft={`-${sliderWidth}vw`} transition={'0.3s'}>
            {SliderTravel.map(e => (
              <Link
                key={e.id}
                href={`/paises/${e.name}`}
                style={{cursor:'pointer', background:'#12121418', zIndex:1}}
              >
                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent="center"
                  flexDirection={'column'}
                   w={['100vw','80vw']}
                  h={'450px'}
                  backgroundImage={e.image}
                  backgroundRepeat={'no-repeat'}
                  backgroundSize={'cover'}
                  backgroundPosition={'center'}
                  color={'#fff'}
                  value={e.id}
                  onChange={e => console.log(e)}
                  transition={'all easy .3s'}
                  position={'relative'}
                >
                  <Box position={'absolute'} w={'100%'} h={'100%'} bg={'#1212148a'} />
                  <Text zIndex={1} textDecoration={'none'} fontSize={['24px','48px']} fontWeight={'bold'}>{e.name}</Text>
                  <Text zIndex={1} w={['250px', '100%']} textAlign={'center'}  textDecoration={'none'} fontSize={['14px','24px']} fontWeight={'bold'}>{e.title}</Text>

                </ListItem>
              </Link>
            ))}
        </UnorderedList>
        <Box
          bg={'#121214b5'}
          display="grid" placeItems={'center'}
          position={'absolute'} right={0}
          color={'#FFBA08'}  zIndex={3}
          cursor={'pointer'} borderRadius={'50%'}
          onClick={handlerSliderUp} > <Image src='./sideIcons/chevron-left.svg' /> </Box>

        <Box position={'absolute'} bottom={0} w={'100%'} display="grid" placeItems={'center'} paddingBottom={'20px'}>
          <UnorderedList display={'flex'} listStyleType={'none'} gap={'10px'}>
            {SliderTravel.map(e => (
              <>
                {sliderId === e.id ? (
                  <ButtonSliderDot key={e.id} e={e} color={'#FFBA08'} />
                ):(
                  <ButtonSliderDot key={e.id} e={e} color={'#999999'} />
                )}
              </>
            ))}
          </UnorderedList>
        </Box>
    </Flex>
  );
}

export default SliderCarousel;