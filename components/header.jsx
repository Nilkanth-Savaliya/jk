import globalStyles from '../styles/globals.module.css'

const Header = () => {
  return (
    <>
     <div className={globalStyles.header}>
        <div id="headerBar" className={globalStyles.headerBar} ariaHidden="true">bar</div>
        <div className={globalStyles.headerLogo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={globalStyles.headerMenuOuter}>
          <div className={globalStyles.headerMenuInner}>
            <a href="/" className={globalStyles.headerMenu}>Home</a>
            <a href="" className={globalStyles.headerMenu}>About Us</a>
            <a href="/products" className={globalStyles.headerMenu}>Products</a>
            <a href="/contact" className={globalStyles.headerMenu}>Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
