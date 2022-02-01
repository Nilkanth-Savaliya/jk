import globalStyles from '../styles/globals.module.css'


const Footer = () => {
  return (
    <>
      <div className={globalStyles.footer}>
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
      </div>
    </>
  );
};

export default Footer;
