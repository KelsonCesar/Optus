import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col, Table  } from 'react-bootstrap';
import { Logo }from '../../components/Logo';
import { CarouselImg }from '../../components/Images';
import OptusCarousel from '../../OptusCarousel.json';
import OptusVagas from '../../OptusVagas.json';
import './home.css';

class Home extends Component{
    
    componentDidMount() {
        this.setState({optus: OptusCarousel});
    };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            img: 'http://res.cloudinary.com/promanager/image/upload/v1518236844/favicon.ico_cgdh2n.png',
            optus: [],
        };
    };

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
                        <NavDropdown eventKey={4} title='MAIS' id="basic-nav-dropdown">
                        <MenuItem id="basic-nav-dropdown" eventKey={4.1}>Login</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.2}>Cadastro</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.3}>Servicos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.4}>Treinamentos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.5}>Contato</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Grid>
                <Row className="show-grid">
                    <Col md={7}>
                        <Carousel>
                            <Carousel.Item>
                                <CarouselImg src={OptusCarousel[0].img} />
                                <Carousel.Caption>
                                    <h4 className='OptusSrc_Caption'>{OptusCarousel[0].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CarouselImg src={OptusCarousel[1].img} />
                                <Carousel.Caption>
                                    <h4>{OptusCarousel[1].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <CarouselImg src={OptusCarousel[2].img} />
                                <Carousel.Caption>
                                    <h4>{OptusCarousel[2].text}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={5}>
                        <h2> Vagas Recentes </h2>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Vagas</th>
                                <th>Local</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{OptusVagas[0].position}</td>
                                <td>{OptusVagas[0].cidade}</td>
                                </tr>
                                <tr>
                                <td>{OptusVagas[1].position}</td>
                                <td>{OptusVagas[1].cidade}</td>
                                </tr>
                                <tr></tr>   
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
            </span>
        )
    }
}



export default Home;