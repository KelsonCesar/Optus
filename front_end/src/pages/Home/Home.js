import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col, Table, Button, ButtonToolbar  } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Logo }from '../../components/Logo';
import { P, Span, Sticky }from '../../components/Tag';
import { CarouselImg, ParaImg, ServicosImg }from '../../components/Images';
import OptusCarousel from '../../OptusCarousel.json';
import OptusServicos from '../../OptusServicos.json';
import OptusVagas from '../../OptusVagas.json';
import OptusPara from '../../OptusPara.json';
import Optus from '../../Optus.json';
import './home.css';

class Home extends Component{
    
    componentWillMount(){
        // this.setState({Optus: Optus});
    };
    componentDidMount() {
        this.setState({render: 0});
        // console.log(this.state.render);
    };
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            render: '',
            type: '',
            // optus: [],
        };
    };

    handleSelect = (eventKey) => {
        this.setState({render: eventKey});
    };
    
    render(){
// This Block Renders NavBar Header Logo     
        return(
            <div>
            <span className="page-wrap">
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><Logo src={Optus[0].logo}/></a>
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
                        INDIVIDUO
                        </NavItem>
                        <NavItem eventKey={3} onSelect={this.handleSelect}>
                        EMPRESA
                        </NavItem>
                        <NavDropdown eventKey={4} title='MAIS' id="basic-nav-dropdown">
                        <MenuItem id="basic-nav-dropdown" eventKey={4.1}>Login</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.2}>Cadastro</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.3}>Servicos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={4.4}>Treinamentos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={5} onClick={()=>{this.handleSelect(5); this.setState({type: 'ADMINISTRADOR'})}}>Administrador</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{margin: '100px'}}/>
            <Grid>
                <Row className="show-grid">
{/* // This Block Render Home Inicio */}
                    {this.state.render === 0 ?
                    <Col sm={7}>
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
// This Block Renders Sobre Nos OptusRH
                    Optus.map(optus =>
                    <Col xs={12} md={8} mdOffset={2}>
                        <span key={optus.id}>
                            <h2>{optus.about_header}</h2>
                            <p>{optus.about}</p>
                            <h2>{optus.ideals}</h2>
                            <h3><Span>{optus.mission_header}</Span></h3>
                            <p>{optus.mission}</p>
                            <h3><Span>{optus.vision_header}</Span></h3>
                            <p>{optus.vision}</p>
                            <h3><Span>{optus.values_header}</Span></h3>
                            <p>{optus.values}</p>
                            <h2>{optus.promises}</h2>
                            <h3><Span>{optus.client_header}</Span></h3>
                            <p>{optus.client}</p>
                            <h3><Span>{optus.collaborator_header}</Span></h3>
                            <p>{optus.collaborator}</p>
                            <h3><Span>{optus.society_header}</Span></h3>
                            <p>{optus.society}</p>
                        </span>
                    </Col>
                    )
// This BLock Renders Optus Para Voce
                    : this.state.render === 2 ?
                    OptusPara.map(optuspara =>
                    <Col sm={7}  key={optuspara.id}>
                    <span key={optuspara.id}>
                        <Col sm={12}><h2>{optuspara.header_voce}</h2></Col>
                        <ParaImg src={optuspara.voce_img}/>
                        <P>{optuspara.caption_voce}</P>
                        <Col sm={12}>
                        <ButtonToolbar key={optuspara.id}>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleSelect(4); this.setState({type: 'INDIVIDUAL'})}}>
                                Cadastro Individual
                            </Button>
                            <Button bsSize="large" onClick={()=>{this.handleSelect(5); this.setState({type: 'INDIVIDUAL'})}}>
                                Acessar Minha Conta
                            </Button>
                        </ButtonToolbar>
                        </Col>
                    </span>
                    </Col>
                    )                        
// This BLock Renders Optus Para Empresa
                    : this.state.render === 3 ?
                    OptusPara.map(optuspara =>                    
                        <Col sm={7}>                    
                    <span key={optuspara.id}> 
                        <Col sm={12}><h2>{optuspara.header_empresa}</h2></Col>
                        <ParaImg src={optuspara.empresa_img}/>
                        <P>{optuspara.caption_empresa}</P>
                        <Col sm={12}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleSelect(4); this.setState({type: 'EMPRESARIAL'})}}>
                                Cadastro Empresarial
                            </Button>
                            <Button bsSize="large" onClick={()=>{this.handleSelect(5); this.setState({type: 'EMPRESARIAL'})}}>
                                Acessar Minha Conta
                            </Button>
                        </ButtonToolbar>
                        </Col>
                    </span>
                    </Col>
                    ) 
// This Block Render Cadastro de Usuario
                    : this.state.render === 4 ?
                    <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <Col md={12}><h2>CADASTRO {this.state.type}</h2></Col>
                        <Col md={12}><p>Cadastre seu curriculo em nosso site.</p></Col>
                        <Col md={12}><h3>Dados Basicos</h3></Col>
                        <Col md={12}><hr/></Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input placeholder="Email" />
                        </InputGroup>


                    </Col>
                    </Row>
// This Block Render Acesso de Conta
                    : this.state.render === 5 ?
                    <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        <Col md={12}><h2>ACESSE SUA CONTA</h2></Col>
                        <Col md={12}><p>Utilize o formulário abaixo para acessar a sua conta.</p></Col>
                        <Col md={12}><p>Informe o email e senha cadastrados em nosso site.</p></Col>
                        <Col md={12}><h3>Acessar</h3></Col>
                        <Col md={12}><hr/></Col>
                        <Col md={12}>
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" name="radio1" value={this.state.type} defaultChecked/>{' '}
                            {this.state.type}
                            </Label>
                        </FormGroup>
                        </Col>
                        <br/>                        
                        <Col md={12}>
                        <p>Email:<Input type="email" name="email" id="email_id" placeholder="" /></p>
                        </Col>
                        <Col md={12}>
                            <p>Senha:<Input type="password" name="password" id="password_id" placeholder="" /></p>
                        </Col>
                        <Col md={12}>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{console.log('Submit')}}>Acessar</Button>
                        </Col>
                        <br/>
                        <Col md={12}>
                        <Nav>
                            <NavItem eventKey={6} onSelect={this.handleSelect}>
                                <p>Esqueci minha senha</p>
                            </NavItem>
                        </Nav>
                        </Col>
                        <br/>
                        <Col md={12}>
                        <h2>Não possui cadastro?</h2>
                        <hr/>
                        <Nav>
                            <NavItem onClick={()=>{this.handleSelect(4); this.setState({type: 'INDIVIDUAL'})}}>
                                <p>>Cadastre seu curriculo.</p>
                            </NavItem>
                            <NavItem onClick={()=>{this.handleSelect(4); this.setState({type: 'EMPRESARIAL'})}}>
                                <p>>Cadastre sua empresa.</p>
                            </NavItem>
                        </Nav>
                        </Col>

                    </Col>
                    </Row>
                    : <span/> }
{/*  THis Block Render Vagas Recentes */}
                    {this.state.render === 0 || this.state.render === 2 ?
                    <Col sm={5}>
                        <h2>Vagas Recentes</h2>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th><p><strong>Vagas</strong></p></th>
                                <th><p><strong>Local</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><p>{OptusVagas[0].position}</p></td>
                                <td><p>{OptusVagas[0].cidade}</p></td>
                                </tr>
                                <tr>
                                <td><p>{OptusVagas[1].position}</p></td>
                                <td><p>{OptusVagas[1].cidade}</p></td>
                                </tr>
                                <tr></tr>   
                            </tbody>
                        </Table>
                    </Col>
                    : <span/>}
                </Row>
{/* This Block Render Nossos Servicos */}
                {this.state.render === 2 || this.state.render === 3 ? 
                OptusServicos.map(servicos =>
                <Row className="show-grid" key={servicos.id}>
                <span>
                    <Col md={12}><hr/></Col>
                    <Col sm={12}><h2>{servicos.header}</h2></Col>
                    <Col sm={12}><h3>{servicos.header_caption}</h3></Col>
                    <Col sm={4}>
                        <ServicosImg src={servicos.recsel_img}/>
                        <P>{servicos.recsel_header}</P>
                    </Col>
                    <Col sm={4}>
                        <ServicosImg src={servicos.training_img}/>
                        <P>{servicos.training_header}</P>
                    </Col>
                    <Col sm={4}>
                        <ServicosImg src={servicos.evalpsic_img}/>
                        <P>{servicos.evalpsic_header}</P>
                    </Col>
                </span>
                </Row>
                )
                : <span/> }
            </Grid>
            </span>
            <div style={{margin: '50px'}}/>
{/* Sticky Footer */}
            <Sticky>
                <Grid>
                    <Row>
                        <Col md={12}>
                        <hr/>
                        © OptusRH. Todos os direitos reservados. | SASWEB
                        </Col>
                    </Row>
                </Grid>
            </Sticky>
            </div>
        )
    }
}



export default Home;