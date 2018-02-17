import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col, Table  } from 'react-bootstrap';
import { Logo }from '../../components/Logo';
import { CarouselImg, ParaImg }from '../../components/Images';
import OptusCarousel from '../../OptusCarousel.json';
import OptusVagas from '../../OptusVagas.json';
import OptusPara from '../../OptusPara.json';
import Optus from '../../Optus.json';
import './home.css';

class Home extends Component{
    
    componentWillMount(){
        // this.setState({Optus: Optus});
    };
    componentDidMount() {
        console.log(this.state.render);
    };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            render: 0,
            // optus: [],
        };
    };

    handleSelect = (eventKey) => {
        this.setState({render: eventKey});
    };
    
    render(){
        
        return(
            <span>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        {/* <NavItem eventKey={0} onSelect={this.handleSelect}> */}
                        <a href="/"><Logo src={Optus[0].logo} /></a>
                        {/* </NavItem> */}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={0} onSelect={this.handleSelect}>
                        INICIO
                        </NavItem>
                        <NavItem eventKey={1} onSelect={this.handleSelect}>
                        SOBRE NOS
                        </NavItem>
                        <NavItem eventKey={2} onSelect={this.handleSelect}>
                        PARA VOCE
                        </NavItem>
                        <NavItem eventKey={3} onSelect={this.handleSelect}>
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
                    {this.state.render === 0 ?
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
                    : this.state.render === 1 ?
                    Optus.map(optus =>
                    <Col md={12}>
                        <span key={optus.id}>
                            <h2>{optus.about_header}</h2>
                            <p>{optus.about}</p>
                            <h2>{optus.ideals}</h2>
                            <h3>{optus.mission_header}</h3>
                            <p>{optus.mission}</p>
                            <h3>{optus.vision_header}</h3>
                            <p>{optus.vision}</p>
                            <h3>{optus.values_header}</h3>
                            <p>{optus.values}</p>
                            <h2>{optus.promises}</h2>
                            <h3>{optus.client_header}</h3>
                            <p>{optus.client}</p>
                            <h3>{optus.collaborator_header}</h3>
                            <p>{optus.collaborator}</p>
                            <h3>{optus.society_header}</h3>
                            <p>{optus.society}</p>
                        </span>
                    </Col>
                    )
                    : this.state.render === 2 ?
                    OptusPara.map(optuspara =>
                    <Col md={7}>
                    <span key={optuspara.id}>
                        <h2>{optuspara.header_voce}</h2>
                        <ParaImg src={optuspara.voce_img}/>
                        <p>{optuspara.caption_voce}</p>
                    </span>
                    </Col>
                    )                        
                    : this.state.render === 3 ?
                    OptusPara.map(optuspara =>                    
                        <Col md={7}>                    
                    <span key={optuspara.id}> 
                        <h2>{optuspara.header_empresa}</h2>
                        <ParaImg src={optuspara.empresa_img}/>
                        <p>{optuspara.caption_empresa}</p>
                    </span>
                    </Col>
                    )
                    : ("Nothing")}
                    {this.state.render === 0 || this.state.render === 2 ?
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
                    : <span/>}
                </Row>
            </Grid>
            </span>
        )
    }
}



export default Home;