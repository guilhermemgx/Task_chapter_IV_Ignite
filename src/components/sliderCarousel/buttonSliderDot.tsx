import { ListItem } from "@chakra-ui/react";

export function ButtonSliderDot({e, color}) {
    return(
            <ListItem 
              key={e.id} 
              value={e.id}
              borderRadius={'50%'}
              bg={`${color}`}
              zIndex={2}
              width={'20px'}
              height={'20px'}
              transition={'.3s'}
              _hover={{
                bg:'#FFBA08'
              }}
              onClick={()=>console.log(e.id)}
            >
            </ListItem>
    )
}