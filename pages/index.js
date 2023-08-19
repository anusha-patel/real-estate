import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl , fetchApi} from '@/utils/fetchApi';
import Property from '@/components/Property';


const Banner = ({ purpose, title1, title2, des1, des2, linkName, buttonText, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent='center' color='red.100' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner'/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium" >{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold" color="black">{title1}<br />{title2} </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" >{des1}<br />{des2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white" _hover={ {color:'blue', bg:'white'}}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({propertiesForSale, propertiesForRent}) {
  // console.log(propertiesForRent ,propertiesForSale);
  return (
    <>
      <Box>
        <Banner
          purpose="RENT A HOME"
          title1="Rental homes for"
          title2="Everyone"
          des1="Explore aparments, villas, homes"
          des2="and more"
          buttonText="Explore renting"
          linkName='/Search?purpose=for-rent'
          imageUrl="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"

        />
        <Flex flexWrap="wrap">
          {/*maping through property component which is defined in 'components/property.jsx'  */}
          {propertiesForRent.map((property)=>
            <Property property ={property} key={property.id}/>
          )}

        </Flex>
        <Banner
          purpose="BUY A HOME"
          title1="FIND, BUY homes for"
          title2="Everyone"
          des1="Explore aparments, villas, homes"
          des2="and more"
          buttonText="Explore Buying"
          linkName='/Search?purpose=for-sale'
          imageUrl="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg" />
        {/* 21:29 video paused */}

        <Flex flexWrap="wrap">
          {propertiesForSale.map((property)=>
            <Property property ={property} key={property.id} />
          )}

        </Flex>
      </Box>

    </>
  )
}


export async function getStaticProps(){
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  // /properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6` these are the endpoint queries
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return{
    props:{
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,
    }
    // these props return to above function home
  }
}
