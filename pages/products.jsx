import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link'
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  Center,
  Grid,
  GridItem,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Button,
  ListIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
const Products = () => {
  const [product, setProduct] = useState(['CPVC MEDIUM DUTY - YELLOW', 'UPVC MEDIUM DUTY - CLEAR', 'UPVC MEDIUM DUTY - BLUE', 'PVC FIX R-PVC SOLVENT'])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [productDetails, setProductDetails] = useState([])
  useEffect(() => {

    let productDetail = {
      name: 'PVC FIX R-PVC SOLVENT',
      info: 'Regular bodied, Slow setting, high strength cement. Specially formulated for all type of PVC piping system, It provides long working time to make joints in a hot climate.',
      details: {
        Brookfield_Viscosity: 'Minimum 70cP',
        Shelf_life: '2 Years',
        Store_product_below: '44° (111° F)'
      },
      Applications: 'It can be used for conduit, sewer, drain, waste and vent systems.',
      size: ['120ml', '250ml', '500ml', '1ltr']
    }
    setSelectedProduct(productDetail)
    let productDetailsTemp = [];
    productDetailsTemp.push(productDetail)
    let productDetail2 = {
      name: 'PVC FIX R-PVC SOLVENT2',
      info: 'Regular bodied, Slow setting, high strength cement. Specially formulated for all type of PVC piping system, It provides long working time to make joints in a hot climate.222',
      details: {
        Brookfield_Viscosity: 'Minimum 70cP222',
        Shelf_life: '2 Years22',
        Store_product_below: '44° (111° F)22'
      },
      Applications: 'It can be used for conduit, sewer, drain, waste and vent systems.22',
      size: ['120ml', '250ml', '500ml', '1ltr222']
    }
    productDetailsTemp.push(productDetail2)

    setProductDetails(productDetailsTemp)
  }, [])
  const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

  return (
    <>
      <Header />
      <Container maxW={"6xl"} m={"50px auto"}>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} mb={25}>
          <GridItem w='100%' bg='#121921' rounded={"md"}>
            <Center>
              <Image
                alt={"product image"}
                src={"/p1.jpg"}
                w={"100px"}
                p={1}
              />
            </Center>
            <Button
              bg={'blue.400'}
               borderTopStartRadius="0"
              borderTopEndRadius="0"
              color={'white'}
              w={'100%'}
              _hover={{
                bg: 'blue.500',
              }}>
              Read More
            </Button>
          </GridItem>
          <GridItem w='100%' bg='#121921' rounded={"md"}>
            <Center>
              <Image
                alt={"product image"}
                src={"/p1.jpg"}
                w={"100px"}
                p={1}
              />
            </Center>
            <Button
              bg={'blue.400'}
               borderTopStartRadius="0"
              borderTopEndRadius="0"
              color={'white'}
              w={'100%'}
              _hover={{
                bg: 'blue.500',
              }}>
              Read More
            </Button>
          </GridItem>
          <GridItem w='100%' bg='#121921' rounded={"md"}>
            <Center>
              <Image
                alt={"product image"}
                src={"/p1.jpg"}
                w={"100px"}
                p={1}
              />
            </Center>
            <Button
              bg={'blue.400'}
               borderTopStartRadius="0"
              borderTopEndRadius="0"
              color={'white'}
              w={'100%'}
              _hover={{
                bg: 'blue.500',
              }}>
              Read More
            </Button>
          </GridItem>
          <GridItem w='100%' bg='#121921' rounded={"md"}>
          <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'fill'}
            src={"/p1.jpg"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
         
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        
        </Stack>
      </Box>
    </Center>

          </GridItem>

        </Grid>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={{ base: 7, sm: 3, md: 2 }}>
            <List spacing={1}>
              {
                productDetails.map((product, index) => {
                  return (
                    <Link href="#details">
                      <ListItem background={product == selectedProduct ? '#3F9FFF' : useColorModeValue("gray.400", "gray.400")} p={3} color={'white'} boxShadow={"2xl"} textAlign={'center'} onClick={() => setSelectedProduct(product)}>
                        <Text>{product.name}</Text>
                      </ListItem>
                    </Link>)
                })
              }
            </List>
          </GridItem>
          <GridItem colSpan={{ base: 7, sm: 4, md: 5 }} p={"30px"} boxShadow={"2xl"} id="details">
            <motion.div key={selectedProduct.name}
              // initial="pageInitial" animate="pageAnimate" variants={{
              //   pageInitial: {
              //     opacity: 0
              //   },
              //   pageAnimate: {
              //     opacity: 1
              //   },
              // }}
              initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .4
                  }
                },
              }}
            >
              <Grid templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={{ base: 5, md: 2 }}>
                  <Flex justifyContent={'center'}>
                    <Image
                      rounded={"md"}
                      alt={"product image"}
                      src={"/p1.jpg"}
                      // fit={"cover"}
                      align={"center"}
                      w={{ base: "100%", sm: "sm" }}
                    />
                  </Flex>
                  <List spacing={3} textAlign="start" px={12}>
                    {selectedProduct?.size?.length > 0 ? selectedProduct.size.map((size, index) => {
                      return (
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          {size}
                        </ListItem>
                      )
                    }) : null}

                  </List>
                </GridItem>
                <GridItem colSpan={{ base: 5, md: 3 }} >
                  <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                      <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        mt={5}
                        fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
                      >
                        {selectedProduct.name}
                      </Heading>
                    </Box>

                    <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={"column"}
                      divider={
                        <StackDivider
                          borderColor={useColorModeValue("gray.200", "gray.600")}
                        />
                      }
                    >
                      <VStack spacing={{ base: 4, sm: 4 }}>
                        <Text
                          color={useColorModeValue("gray.500", "gray.400")}
                          fontSize={"lg"}
                          fontWeight={"300"}
                        >
                          {selectedProduct.info}
                        </Text>
                      </VStack>
                      <Box>
                        <Text
                          fontSize={{ base: "16px", lg: "20px" }}
                          color={useColorModeValue("yellow.500", "yellow.300")}
                          fontWeight={"600"}
                          textTransform={"uppercase"}
                          mb={"4"}
                        >
                          Product Details
                        </Text>

                        <List spacing={2}>
                          <ListItem>
                            <Text as={"span"} fontWeight={"bold"}>
                              Brookfield Viscosity :
                            </Text>{" "}
                            Minimum 70cP
                          </ListItem>
                          <ListItem>
                            <Text as={"span"} fontWeight={"bold"}>
                              Shelf life :
                            </Text>{" "}
                            2 Years
                          </ListItem>
                          <ListItem>
                            <Text as={"span"} fontWeight={"bold"}>
                              Store product below
                            </Text>{" "}
                            44° (111° F)
                          </ListItem>
                        </List>
                      </Box>
                      <Stack
                        spacing={{ base: 4, sm: 6 }}
                        divider={
                          <StackDivider
                            borderColor={useColorModeValue(
                              "gray.200",
                              "gray.600"
                            )}
                          />
                        }
                      >
                        <Text
                          color={useColorModeValue("gray.500", "gray.400")}
                          fontSize={"lg"}
                          fontWeight={"300"}
                        >
                          <Text
                            fontSize={{ base: "16px", lg: "20px" }}
                            as={"span"}
                            color={useColorModeValue("yellow.500", "yellow.300")}
                            fontWeight={"600"}
                            mr={4}
                          >
                            Applications:
                          </Text>
                          {selectedProduct.Applications}
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </GridItem>
              </Grid>
            </motion.div>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
