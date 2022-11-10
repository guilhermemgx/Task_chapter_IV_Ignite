import { Box, Flex, Icon, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import {IoChevronBack} from 'react-icons/io5'

import { SliderTravel } from '../../components/sliderCarousel/sliderTravel';

interface PropsCity {
  Pais: string;
  imagemPais: string;
  cidade: string;
  imagemCidade: string;
}

interface PropTravel {
  id:number;
  name:string;
  title:string;
  image:string;
  description:string;
  paises:number;
  linguas:number;
  cidades:number;
  cidadesPaises:PropsCity[];
}

interface Travel {
  travel:PropTravel;
}


export default function PaisesSlug({travel}:Travel) {
  console.log(travel)
    return(
        <Flex flexDirection={'column'}>
          <Box position={'absolute'} top={'0'} margin={'50px'}><Link href={'/'}><Icon as={IoChevronBack} /></Link></Box>
          
          <Flex 
            backgroundImage={travel.image}
            w={'100vw'}
            h={'400px'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            position={'relative'}
          >
            <Box position={'absolute'} w={'100%'} h={'100%'} bg={'#1212148a'} />

            <Text 
              fontSize={'3rem'} 
              fontWeight={'semibold'}
              position={'absolute'}
              bottom={0}
              margin={"0 20px 20px 50px"}
              color="#fff"
            >{travel.name}</Text>
          </Flex> 

          <Flex w={['98vw','80vw']} flexDirection={['column', 'row']} justifyContent={'center'} margin={'auto'} marginTop={'50px'}>
            <Box padding={'5px'} w={['100%','50%']} textAlign={'justify'}>
              <Text fontWeight={'regular'} fontSize={['14px','1.2rem']}>{travel.description}</Text>
            </Box>

            <Box w={['100%','50%']} 
              h={'150px'} 
              display="flex"
              alignItems='center'
            >
              <UnorderedList 
                w={'100%'}
                display={'flex'} 
                listStyleType={'none'}
                alignItems='center'
                justifyContent={'space-around'}
                textAlign={["left","center"]}
                color="#47585B"
                fontWeight={'semibold'}
              >
                <ListItem>
                  <Text 
                    color={'#FFBA08'} 
                    fontSize={['24px','48px']}
                    lineHeight={['30px','45px']}
                  >{travel.paises}</Text>
                  <Text fontWeight={['400','semibold']} fontSize={['18px','24px']}>países</Text>
                </ListItem>
                <ListItem>
                  <Text 
                    color={'#FFBA08'} 
                    fontSize={['24px','48px']}
                    lineHeight={['30px','45px']}
                  >{travel.linguas}</Text>
                  <Text fontWeight={['400','semibold']} fontSize={['18px','24px']}>línguas</Text>
                </ListItem>
                <ListItem>
                  <Text 
                    color={'#FFBA08'} 
                    fontSize={['24px','48px']}
                    lineHeight={['30px','45px']}
                  >{travel.cidades}</Text>
                  <Text fontWeight={['400','semibold']} fontSize={['18px','24px']}>cidades +100 </Text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>

          <Box 
            w={'80vw'} margin={'auto'} 
            textAlign={['left']}
            marginTop={['0','50px']}
          ><Text 
            fontSize={'36px'}
            fontWeight={'medium'}
          >Cidades +100</Text></Box>

          <Flex 
            justifyContent={['center','space-between']}
            w={'80vw'} margin={'auto'}
            marginTop={'20px'}
            wrap={'wrap'}
            gap={['15px','0']}
          >
            {travel.cidadesPaises.map( e => (
              <Box 
                w={'260px'} h={'280px'} 
                key={e.Pais}
                boxShadow={'0px 1px 5px 3px #00000060'}
                borderRadius={'5px'}
              >
                <Box
                  backgroundImage={e.imagemCidade}
                  backgroundSize={'cover'}
                  w={'100%'} h={'173px'}
                  borderRadius={'5px'}
                />
                <Flex>
                  <Box 
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    w={'50%'}
                    >
                    <Text padding={'20px 0px 0px 20px'} fontWeight={'semibold'} fontSize={'18px'}>{e.cidade}</Text>
                    <Text padding={'20px 0px 20px 20px'} fontWeight={'medium'} fontSize={'16px'}>{e.Pais}</Text>

                  </Box>
                  <Box 
                    w={'50%'} h={'110px'}
                    display={'grid'}
                    placeItems={'center'}

                  >
                    <Box w={'50px'} h={'50px'}
                      display={'grid'}
                      placeItems={'center'}
                      borderRadius={'50%'}
                      bg={'#c1c1c1'}
                    >
                      <Image 
                        w={'30px'} h={'30px'} 
                        src={e.imagemPais} 
                        borderRadius={'50%'}
                        
                      />
                    </Box>

                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const data = ctx.params.slug
  const travel = await SliderTravel.find(e => e.name === data)

  console.log(travel)
  return {
    props: {
      travel
    }
  }
}