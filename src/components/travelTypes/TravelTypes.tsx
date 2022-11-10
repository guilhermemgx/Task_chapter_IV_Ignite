import React from 'react';
import {Box, Grid, GridItem, Image, ListItem, Text, UnorderedList} from '@chakra-ui/react'
// import Image from 'next/image';

const TravelImageData = [
    {"id":0,"name":"Vida noturna", "url":"./travelTypes/cocktail.svg"},
    {"id":1,"name":"praia", "url":"./travelTypes/surf.svg"},
    {"id":2,"name":"moderno", "url":"./travelTypes/building.svg"},
    {"id":3,"name":"classico", "url":"./travelTypes/museum.svg"},
    {"id":4,"name":"e mais...", "url":"./travelTypes/earth.svg"}


]

function TravelTypes() {
  return (
    <>
      <Grid
        color="#47585B"
        fontWeight={'semibold'}
        listStyleType={'none'}
        justifyContent={'space-between'}
        w={'80%'}
        margin={'auto'}
        marginTop={['10px','150px']}
        templateColumns={['repeat(2, 1fr)','repeat(5, 1fr)']}
      >
        {TravelImageData.map(e => (
          <GridItem colSpan={1} textAlign={'center'} key={e.id} display={'grid'} placeItems={'center'}>
            <Image w={['0','85px']} h={['0','85px']} src={e.url} />
            <Text marginTop={"25px"} listStyleType={['circle', 'none']}>{e.name}</Text>
          </GridItem>
        ))}
      </Grid>

      <Box margin={"auto"} 
        marginTop={['30px','100px']}
        marginBottom={'50px'} w={'90px'} h={'1px'} borderBottom={'1px solid #333'} />
    </>
  );
}

export default TravelTypes;