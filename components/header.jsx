import Link from 'next/link'
import globalStyles from "../styles/globals.module.css";
import {
  Button,
 
} from "@chakra-ui/react";
const Header = () => {
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
        <div className={globalStyles.headerMenuOuter}>
          <div className={globalStyles.headerMenuInner}>
            <Link href="/">
              <a>
                <p className={globalStyles.headerMenu}>Home</p>
              </a>
            </Link>
            <Link href="/products" >
              <a>
                <p className={globalStyles.headerMenu}>About Us</p>
              </a>
            </Link>
            <Link href="/products">
              <a>
                <p className={globalStyles.headerMenu}>Products</p>
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
                  <p className={globalStyles.headerMenu} style={{marginRight: '0'}}>Contact Us</p>
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
