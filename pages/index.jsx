import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import globalStyles from "../styles/globals.module.css";
import Footer from "../components/footer";
import React , { useEffect, useState } from "react";
import {
  Box,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Header from '../components/header'
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

  // const [slider, setSlider] = (React.useState < Slider) | (null > null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
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
      {/* <div className={globalStyles.header}>
        <div
          id="headerBar"
          className={globalStyles.headerBar}
          ariaHidden="true"
        >
          bar
        </div>
        <div className={globalStyles.headerLogo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={globalStyles.headerMenuOuter}>
          <div className={globalStyles.headerMenuInner}>
            <a href="#" className={globalStyles.headerMenu}>
              Home
            </a>
            <a href="#" className={globalStyles.headerMenu}>
              About Us
            </a>
            <a href="#" className={globalStyles.headerMenu}>
              Products
            </a>
            <a href="#" className={globalStyles.headerMenu}>
              Contact Us
            </a>
          </div>
        </div>
      </div> */}
      <Header/>

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
        <Slider {...settings} >
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
          <h2>Company Profile</h2>
          <div className={styles.separator}>
            <span></span>
          </div>
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
      <Footer/>
      {/* <div className={globalStyles.footer}>
        <div className={globalStyles.footerSubDiv}>
          <div className={globalStyles.footerInformationDiv}>
            <div className={globalStyles.footerLogoDiv}>
              <img
                src="logo.png"
                className={globalStyles.footerLogo}
                alt="logo"
              />
            </div>
            <p className={globalStyles.footerInformationText}>
              Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id
              placerat tacimates definitionem sea, prima quidam vim no. Duo
              nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus
              expetendis vis
            </p>
          </div>
          <div className={globalStyles.footerMenuOuter}>
            <h2 className={globalStyles.footerTitle}>Useful Links</h2>
            <div className={globalStyles.footerMenuInner}>
              <p className={globalStyles.footerMenu}>Home</p>
              <p className={globalStyles.footerMenu}>About Us</p>
              <p className={globalStyles.footerMenu}>Products</p>
              <p className={globalStyles.footerMenu}>Contact Us</p>
            </div>
          </div>
          <div className={globalStyles.footerContactOuter}>
            <h2 className={globalStyles.footerTitle}>Contact with Us</h2>
            <div className={globalStyles.footerContactInner}>
              <div className={globalStyles.footerContactInfo}>
                <p className={globalStyles.footerContactInfoText}>
                  + 61 23 8093 3400
                </p>
                <p className={globalStyles.footerContactInfoText}>
                  dk@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={globalStyles.footerBottomDiv}>
          <p>
            Terms and conditions <span>|</span> Privacy
          </p>
          <p>© Udema</p>
        </div>
      </div> */}
    </>
  );
}
