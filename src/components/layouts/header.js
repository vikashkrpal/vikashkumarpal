import { Nav, Navbar } from 'react-bootstrap';
import ThemeButton from '../atom/themeButton';
import Image from 'next/image';
import React from 'react';
import MobileMenu from '../organisms/mobileMenu';
import { bindState } from '@/utils/globalFunctions';
import CustomDropdown from "../molecules/CustomDropdown";
import navBarMenus from "@/utils/menuLibrary";

const Header = ({ currentPageData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);



  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar
      style={{
        backgroundColor: !isMobileMenuOpen ? (isScrolled ? 'rgba(45,44,44,0.5)' : '#212529'): "#212529"
      }}
      className={'px-lg-5 pe-lg-4 '+ (!isMobileMenuOpen ? (isScrolled ? 'element-with-filter' : '' ): '')}
      variant="dark" sticky="top" expand="lg" >
      <Navbar.Brand href="/" className='ms-lg-3' >
        <Image
          src={currentPageData.siteOption.siteOptions.logo.mediaItemUrl}
          alt='logo image'
          height={30}
      width={"110"}
        />
      </Navbar.Brand>

      <MobileMenu menuState={bindState(isMobileMenuOpen,setIsMobileMenuOpen)} />


      <Navbar.Collapse id="basic-navbar-nav" className='ps-lg-5 ms-lg-5'>
        <Nav className="w-100 justify-content-center font-weight-bold text-center align-items-center">
            {
               navBarMenus.map((navLinkData, index) =>
                    <CustomDropdown
                        key={index}
                        linkDetails={navLinkData}
                    />

                )
            }
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className=" text-center pe-lg-4">
          <ThemeButton text={"Book a Strategy Call"} />
        </Navbar.Text>
      </Navbar.Collapse>
      <div style={{ width:'53%' }} className='show_on_pro' />
      <div className="d-flex align-items-center me-sm-0 me-md-3 me-lg-0">
        <ThemeButton text={"Book a Strategy Call"} addClass='hide-on-mini show_mobile_screen'/>
        <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className='btn bg-black p-1 show_mobile_screen mx-2 mx-md-3' style={{ borderRadius:10 }}>
          <Image
              src={require('../../asserts/logos/menu-icon.png')}
              alt='logo image'
              height={33}
              width={33}
            />
        </button>
      </div>
    </Navbar>

    </>

  );
}

export default Header;
