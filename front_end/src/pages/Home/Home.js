import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel, Grid, Row, Col  } from 'react-bootstrap';
import { Logo }from '../../components/Logo';
import OptusSrc from '../../Optus.json';
import './home.css';

class Home extends Component{
    
    componentDidMount() {
        this.setState({optus: OptusSrc});
        this.ConsoleLog();
    };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            img: 'http://res.cloudinary.com/promanager/image/upload/v1518236844/favicon.ico_cgdh2n.png',
            optus: [],
        };
    };

    ConsoleLog = () => console.log(OptusSrc);
    render(){
        
        return(
            <span>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand"><Logo src={this.state.img}/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {/* <Nav>
                        <NavItem eventKey={1} href="#">
                        Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav> */}
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                        SOBRE NOS
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                        PARA VOCE
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                        PARA EMPRESAS
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Grid>
                <Row className="show-grid">
                    <Col md={7}>
                        <Carousel>
                            <Carousel.Item>
                                <img max-width={900} max-height={500} alt="900x500" src={OptusSrc[0].img} />
                                <Carousel.Caption>
                                    <h4>{OptusSrc[0].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img max-width={900} max-height={500} alt="900x500" src={OptusSrc[1].img} />
                                <Carousel.Caption>
                                    <h4>{OptusSrc[1].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img max-width={900} max-height={500} alt="900x500" src={OptusSrc[2].img} />
                                <Carousel.Caption>
                                    <h4>{OptusSrc[2].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Grid>
            </span>
        )
    }
}



export default Home;