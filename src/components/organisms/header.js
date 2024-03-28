import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ThemeButton from '../atom/themeButton';
import Image from 'next/image';
import React from 'react';
import MobileMenu from './mobileMenu';
import { bindState } from '@/utils/globalFunctions';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(true);
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
  const NavLink = ({ linkDetails, linkMenuDetails }) => {
    return (
      <NavDropdown title={linkDetails.title} id="basic-nav-dropdown" className="nav-link ">
        {linkMenuDetails.map((item, index) => (
          <NavDropdown.Item href={item.link} key={index}>{item.name}</NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }

  return (
    <>
      <Navbar 
      style={{ 
        backgroundColor: !isMobileMenuOpen ? (isScrolled ? 'rgba(255, 255, 255, 0.5)' : '#212529'): "#212529",
        backdropFilter: !isMobileMenuOpen ? (isScrolled ? 'blur(5px)' : 'none' ): 'none'
      }}
      variant="dark" sticky="top" expand="lg" className='px-lg-5 pe-lg-0 pe-lg-4 py-lg-3 py-1'>
      <Navbar.Brand href="#home" >
        <Image
          src={require('../../asserts/logos/Vikash-Logo-Black-BG.png')}
          alt='logo image'
          height={45}
          width={"130"}
        />
      </Navbar.Brand>
      
      <MobileMenu menuState={bindState(isMobileMenuOpen,setIsMobileMenuOpen)} />
      
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-center font-weight-bold text-center">
          <NavLink
            linkDetails={{ title: 'About' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
          <NavLink
            linkDetails={{ title: 'Services' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
          <NavLink
            linkDetails={{ title: 'SEO Consulting' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
          <NavLink
            linkDetails={{ title: 'Portfolio' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
          <NavLink
            linkDetails={{ title: 'Case Study' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
          <NavLink
            linkDetails={{ title: 'Testimonials' }}
            linkMenuDetails={[
              { name: 'Item 1', link: '#' },
              { name: 'Item 2', link: '#' }
            ]}
          />
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="mx-lg-auto text-center">
          <ThemeButton text={"Book a Strategy Call"} />
        </Navbar.Text>
      </Navbar.Collapse>
      <div className="d-flex align-items-center">
        <ThemeButton text={"Book a Strategy Call"} addClass='me-2 hide-on-mini show_mobile_screen'/>
        <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)} className='btn btn-outline-light p-1 show_mobile_screen' style={{ borderRadius:100 }}>
          <Image
              src={require('../../asserts/logos/humburger.png')}
              alt='logo image'
              height={40}
              width={40}
            />
        </button>
      </div>
    </Navbar>
   
    </>
    
  );
}

export default Header;
