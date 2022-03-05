// import Image from "next/image";
// import styles from "../styles/aboutUs.module.css";
import homeStyles from "../styles/Home.module.css";
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
  Avatar,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Header from "../components/header";
export default function AboutUs() {
  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   fade: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
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
  const testimonials = [
    {
      name: 'Brandon P.',
      role: 'Chief Marketing Officer',
      content:
        'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
      avatar:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Krysta B.',
      role: 'Entrepreneur',
      content:
        "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
      avatar:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Darcy L.',
      role: 'Movie star',
      content:
        "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Daniel T.',
      role: 'Musician',
      content:
        'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
  ];

  const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  ];
  function TestmonialCard(props) {
    const { name, role, content, avatar, index } = props;
    return (
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          backgroundImage: backgrounds[index % 4],
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
    );
  }
  // const cards = [
  //   {
  //     title: "Design Projects 1",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  //   },
  //   {
  //     title: "Design Projects 2",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
  //   },
  //   {
  //     title: "Design Projects 3",
  //     text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
  //     image:
  //       "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  //   },
  // ];
  return (
    <>
      <Header />

      {/* <Box
        position={"relative"}
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
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
      </Box> */}

      <div className={homeStyles.aboutUs}>
        <div className={homeStyles.aboutUsInfoDiv}>
          <h2 className={homeStyles.aboutUsTitle}>About the company</h2>
          <div className={homeStyles.separator}>
            <span></span>
          </div>
          <Text fontSize='2xl'>Jk Adhsive is manufacturer and supplier of the superior quality
            solvent cement for PVC, UPVC (PVC-U), CPVC piping system.</Text>
          <p className={homeStyles.aboutUsInfoText}>
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
        <div className={homeStyles.aboutUsImageDiv}>
          <img className={homeStyles.aboutUsImage} src="/course_6.jpg" />
        </div>
      </div>
      <div>
        <Flex
          textAlign={'center'}
          pt={10}
          justifyContent={'center'}
          direction={'column'}
          width={'full'}>
          <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
            <chakra.h3
              fontFamily={'Work Sans'}
              fontWeight={'bold'}
              fontSize={20}
              textTransform={'uppercase'}
              color={'purple.400'}>
              People love us
            </chakra.h3>
            <chakra.h1
              py={5}
              fontSize={48}
              fontFamily={'Work Sans'}
              fontWeight={'bold'}
              color={useColorModeValue('gray.700', 'gray.50')}>
              You're in good company
            </chakra.h1>
            <chakra.h2
              margin={'auto'}
              width={'70%'}
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={useColorModeValue('gray.500', 'gray.400')}>
              See why over{' '}
              <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
                150,000+
              </chakra.strong>{' '}
              influencers use EEZY to manage their social media content!
            </chakra.h2>
          </Box>
          <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing={'20'}
            mt={16}
            mx={'auto'}>
            {testimonials.map((cardInfo, index) => (
              <TestmonialCard {...cardInfo} index={index} />
            ))}
          </SimpleGrid>
          <Box>
            <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
              <path
                fill={'currentColor'}
                d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
              />
            </Icon>
          </Box>
        </Flex>
      </div>
      <div class={homeStyles.strengthDivBg}>
        <div class={homeStyles.strengthDivOuter}>
          <div class={homeStyles.strengthDivInner}>
            <div class={homeStyles.strengthTitle}>Our Strenth</div>
            <div class={homeStyles.strengText}>
              Jk products are designed and developed by experienced
              chemist/engineers/scientist. We are committed to manufacture
              environment friendly quality products. we care about human health
              therefore we don't use any unsafe cheap chemicals (harmful for
              drinking water) in our products.
            </div>
            <div class={homeStyles.strengthReadMoreDiv}>
              <button class={homeStyles.strengthReadMoreButton}>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className={homeStyles.productSection}>
        <h1 className={homeStyles.sectionHedding} >Our Products</h1>
        <br />
        <br />
        <Slider {...centerSlider}>
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
      <>
      <Container
        bg="#f3f3f3"
        maxW="full"
        mt={50}
        mb={50}
        centerContent
        overflow="hidden"
        
      >
        <Flex >
          <Box
            bg="#121921"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 1, sm: 2, md: 3, lg: 10 }} justify={{sm : 'center', md : 'space-beetween',lg: 'space-beetween'}}>
                <WrapItem justifyItems={'flex-start'} width={{base: '100%',sm : '100%',md: '50%',lg: 'auto'}}>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start" justifyContent="center">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        ><a href="tel:98941484">

                          +91-988888888</a>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                         <a href="mailto:hello@abc.com"> hello@abc.com</a>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem  width={{base: '100%',sm : '100%',md: '50%',lg: 'auto'}} >
                  <Box bg="white" borderRadius="lg"  justifyContent='center' width={{base: '100%',sm : '100%',md:'100%'}}  >
                    <Box m={8} color="#0B0E3F" >
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </>
      <br />
      <br />

      <Footer />
    </>
  );
}
