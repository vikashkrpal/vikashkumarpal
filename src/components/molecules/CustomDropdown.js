import { useState } from "react";
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Link from "next/link";

const CustomDropdown = ({ linkDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    const linkMenuDetails = linkDetails.childLinks;

    const SubDropDownMenuButton = ({ key, link}) => {
        return  <Dropdown.Item key={key} className="mt-3" href={link.link}>
                                    
        <span style={{color:'white' }} >
           {link.icon}
        </span>
        <Link href={link.link}
              className="text-light ms-2"
              style={
                  linkMenuDetails.length > 4 ?
                      { fontFamily:'Gt walsheim bold', whiteSpace: 'normal' }:
                      {fontFamily:'Gt walsheim bold'}}
        >
            {link.name}
        </Link>
        <div className="text-light ms-4" style={
            linkMenuDetails.length > 4 ?
                {  whiteSpace: 'normal' } :{}}>
            {link.des}
        </div>
    </Dropdown.Item>
    }
    if (linkMenuDetails === undefined || linkMenuDetails.length < 2)
        return (
            <div>
                <Link href={linkDetails.link} className="theme-button-v1" >
                    {linkDetails.title}
                </Link>
            </div>

        )
    else
        return (
        <Dropdown show={isOpen} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Dropdown.Toggle
                className="pr-2 py-2 align-text-top text-light"
                variant="navDropdown" id="basic-nav-dropdown"
                style={{ fontFamily:'Gt walsheim bold',borderRadius:50 }}
            >
                {linkDetails.title}
            </Dropdown.Toggle>
            <Dropdown.Menu className="eventsNav p-3" style={{
                minWidth: linkMenuDetails.length > 4 ? 700 : 'auto',
                maxWidth: linkMenuDetails.length > 4 ? 750 : 'auto',
                backgroundColor:'#20252B',
                left:'-190%'
            }}>
                <Container>
                    <Row>
                    {
                            linkDetails.title === 'Case Study' ?

                            <>
                            <Col xs="12" md={ "6"} className="text-left p-0">
                            {linkMenuDetails.slice(0, 2).map((link, index) => <SubDropDownMenuButton key={index} link={link} />)}
                              </Col>
                              <Col xs="12" md={ "6"} className="text-left p-0">
                            {linkMenuDetails.slice(2, 4).map((link, index) => <SubDropDownMenuButton key={index} link={link} />)}
                              </Col>
                              <hr className="text-light mt-3" />
                              <Col xs="12" md={ "12"} className="text-left p-0">
                            {linkMenuDetails.slice(4).map((link, index) => (
                        
                                <div key={index} className="px-3">
                                    
                                    <span style={{color:'white' }} >
                                       {link.icon}
                                    </span>
                                    <span 
                                          className="text-light ms-2"
                                          style={
                                              linkMenuDetails.length > 4 ?
                                                  { fontFamily:'Gt walsheim bold', whiteSpace: 'normal' }:
                                                  {fontFamily:'Gt walsheim bold'}}
                                    >
                                        {link.name}
                                    </span>
                                    <div className="text-light ms-3" style={
                                        linkMenuDetails.length > 4 ?
                                            {  whiteSpace: 'normal' } :{}}>
                                        {link.sublinks.map((sublink,i) => <div key={i} ><Link href={sublink.link} className="ancor-hover" >{sublink.title}</Link></div>)}
                                    </div>
                                </div>
                          
                            ))}
                              </Col>
                            </>
                           : <>
                            <Col xs="12" md={linkMenuDetails.length > 4 ? "6" : "12"} className="text-left p-0">
                            {linkMenuDetails.slice(0, 4).map((link, index) => <SubDropDownMenuButton key={index} link={link} />)}

                        </Col>

                        <Col xs="12" md="6" className="text-left p-0">
                            {linkMenuDetails.slice(4).map((link, index) => (
                                <Dropdown.Item key={index} className="mt-3">

                                    <span style={{color:'white' }} >
                                        {link.icon}
                                    </span>
                                    <Link href={link.link}
                                          className="text-light ms-2"
                                          style={{ fontFamily:'Gt walsheim bold', whiteSpace: 'normal' }}
                                    >
                                        {link.name}
                                    </Link>
                                    <div className="text-light ms-4" style={{  whiteSpace: 'normal' }}>
                                        {link.des}
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </Col>
                        </>
                    }
                       
                    </Row>
                </Container>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomDropdown;
