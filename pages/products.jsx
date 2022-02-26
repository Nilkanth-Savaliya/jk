import Header from "../components/header";
import Footer from "../components/footer";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  Grid,
  GridItem,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
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

  return (
    <>
      <Header />
      <Container maxW={"6xl"} m={"50px auto"}>
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={{ base: 7, sm: 3, md: 2 }}>
            <List spacing={1}>
              {
                productDetails.map((product, index) => {
                  return (
                    <ListItem background={product == selectedProduct ? '#3F9FFF' : useColorModeValue("gray.400", "gray.400")} p={3} color={'white'} boxShadow={"2xl"} textAlign={'center'} onClick={() => setSelectedProduct(product)}>
                      <Text>{product.name}</Text>
                    </ListItem>)
                })
              }
            </List>
          </GridItem>
          <GridItem colSpan={{ base: 7, sm: 4, md: 5 }} p={"30px"} boxShadow={"2xl"}>
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
              <GridItem colSpan={{ base: 5, md: 3 }}>
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
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Products;
