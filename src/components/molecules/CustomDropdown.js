import { useState } from "react";
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import Link from "next/link";

const CustomDropdown = ({ linkDetails, linkMenuDetails }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (linkMenuDetails.length < 2)
        return (
            <div>
                <Link href="#" className="theme-button-v1" >
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
                minWidth: linkMenuDetails.length > 4 ? 600 : 'auto',
                maxWidth: linkMenuDetails.length > 4 ? 700 : 'auto',
                backgroundColor:'#20252B'
            }}>
                <Container>
                    <Row>
                        <Col xs="12" md={linkMenuDetails.length > 4 ? "6" : "12"} className="text-left p-0">
                            {linkMenuDetails.slice(0, 4).map((link, index) => (
                                <Dropdown.Item key={index}>
                                    <Link href={link.link}
                                          className="text-light"
                                          style={
                                              linkMenuDetails.length > 4 ?
                                                  { fontFamily:'Gt walsheim bold', whiteSpace: 'normal' }:
                                                  {fontFamily:'Gt walsheim bold'}}
                                    >
                                        {link.name}
                                    </Link>
                                    <p className="text-light" style={
                                        linkMenuDetails.length > 4 ?
                                            {  whiteSpace: 'normal' } :{}}>
                                        {link.des}
                                    </p>
                                </Dropdown.Item>
                            ))}

                        </Col>

                        <Col xs="12" md="6" className="text-left p-0">
                            {linkMenuDetails.slice(4).map((link, index) => (
                                <Dropdown.Item key={index}>
                                    <Link href={link.link}
                                          className="text-light"
                                          style={{ fontFamily:'Gt walsheim bold', whiteSpace: 'normal' }}
                                    >
                                        {link.name}
                                    </Link>
                                    <p className="text-light " style={{  whiteSpace: 'normal' }}>
                                        {link.des}
                                    </p>
                                </Dropdown.Item>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomDropdown;
