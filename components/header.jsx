import Link from 'next/link'
import globalStyles from "../styles/globals.module.css";
import {
  Button,

} from "@chakra-ui/react";
import { FiMenu } from "react-icons/Fi";
import { MdOutlineClose } from "react-icons/Md";
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className={globalStyles.header}>
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
        <div className={globalStyles.mobileMenu} onClick={()=>menu ? setMenu(false) : setMenu(true) }>
          {
            menu ?
              <MdOutlineClose size={35} color='#ffffff' fill='#ffffff' stroke='#ffffff' /> :
              <FiMenu size={35} color='#ffffff' />
          }
        </div>
        <div className={globalStyles.headerMenuOuter} style={menu ? { display: 'flex' } : {}}>
          <div className={globalStyles.headerMenuInner}>
            <Link href="/" >
              <a>
                <p className={globalStyles.headerMenu} >Home</p>
              </a>
            </Link>
            <Link href="/aboutus" >
              <a>
                <p className={globalStyles.headerMenu} >About Us</p>
              </a>
            </Link>
            <Link href="/products">
              <a>
                <p className={globalStyles.headerMenu} >Products</p>
              </a>
            </Link>
            <Button
              variant="solid"
              bg="#0D74FF"
              color="white"
              _hover={{}}
            >
              <Link href="/contact">
                <a>
                  <p className={globalStyles.headerMenu}  style={{ marginRight: '0' }}>Contact Us</p>
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
