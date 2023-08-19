import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/demo.avif"

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
         
        <Flex flexWrap="wrap" width={400}     p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box width={500} >
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={500} height={0} sizes="20vh"/>

            </Box>
            <Box w="full" >
                <Flex paddingTop="2"  alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" >
                        {/* . It checks if the isVerified variable is true or truthy. If isVerified is true, it will render the <GoVerified /> component or element. */}
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="sm" color="black">
                            INR {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={
                            agency?.logo?.url
                        } />
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? title.substring(0, 30) + '...' : title}
                </Text>
            </Box>


        </Flex>
    </Link>

);

export default Property;
