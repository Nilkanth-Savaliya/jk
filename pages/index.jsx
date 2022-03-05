import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import globalStyles from "../styles/globals.module.css";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import {
  Box,
  useBreakpointValue,
  Stack,
  useColorModeValue,
  Image,
  Heading,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Header from "../components/header";
export default function Home() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const centerSlider = {
    sinfinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
  };
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
  ];
  return (
    <>
      <Header />

      <Box
        position={"relative"}
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"6xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="600px" position="relative">
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>

      <div className={styles.aboutUs}>
        <div className={styles.aboutUsInfoDiv}>
          <h2 className={styles.aboutUsTitle}>About the company</h2>
          <div className={styles.separator}>
            <span></span>
          </div>
          <Text fontSize='2xl'>Jk Adhsive is manufacturer and supplier of the superior quality
            solvent cement for PVC, UPVC (PVC-U), CPVC piping system.</Text>
          <p className={styles.aboutUsInfoText}>
            Jk Adhsive is manufacturer and supplier of the superior quality
            solvent cement for PVC, UPVC (PVC-U), CPVC piping system. Our
            products are used for potable water, SWR, conduit, irrigation,
            sewer, drain, waste and vent system in agriculture, residential,
            commercial and industrial plumbing applications. We offers complete
            line of solvent cements in the industry with products specifically
            formulated for a wide variety of applications. We always take care
            of satisfaction and need of our customers.
          </p>
        </div>
        <div className={styles.aboutUsImageDiv}>
          <img className={styles.aboutUsImage} src="/course_6.jpg" />
        </div>
      </div>
      <div class={styles.strengthDivBg}>
        <div class={styles.strengthDivOuter}>
          <div class={styles.strengthDivInner}>
            <div class={styles.strengthTitle}>Our Strenth</div>
            <div class={styles.strengText}>
              Jk products are designed and developed by experienced
              chemist/engineers/scientist. We are committed to manufacture
              environment friendly quality products. we care about human health
              therefore we don't use any unsafe cheap chemicals (harmful for
              drinking water) in our products.
            </div>
            <div class={styles.strengthReadMoreDiv}>
              <button class={styles.strengthReadMoreButton}>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productSection}>
      <h1 className={styles.sectionHedding} >Our Products</h1>
        <br />
        <br />
        <Slider {...centerSlider}>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
rounded='lg'
width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                  transform: 'scaleY(1.1)'
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        <div>
        <Box
        role={'group'}
        p={4}
        maxW={'300px'}
        w={'full'}
        
        pos={'relative'}
        zIndex={1}>
        <Box 
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        mb={2}
        pb={5}
        >
          <Image
            rounded={'lg'}
            width={'60%'}
            objectFit={'cover'}
            src={`/p1.jpg`}
            align={'center'}
            m={'0 auto'}
          />
        <Stack pt={5} align={'center'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Nice Chair, pink
          </Heading>
        </Stack>
        </Box>
          
            <Button
                bg={'blue.400'}
                color={'white'}
                w={'100%'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Read More
              </Button>
        </Box>
        </div>
        </Slider>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
