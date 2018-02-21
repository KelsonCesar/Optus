import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel, Grid, Row, Col, Table, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import { Logo }from '../../components/Logo';
import { P, Span, Sticky }from '../../components/Tag';
import { CarouselImg, ParaImg, ServicosImg }from '../../components/Images';
import OptusCarousel from '../../OptusCarousel.json';
import OptusServicos from '../../OptusServicos.json';
import OptusContact from '../../OptusContact.json';
import OptusTrain from '../../OptusTrain.json';
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
            user: '',
            // optus: [],
        };
    };

    handleSelect = (eventKey, user) => {
        if(eventKey === 4){
            localStorage.setItem("user", user);
            window.location = "/register";
        }else
        if(eventKey === 5){
            localStorage.setItem("user", user);
            window.location = "/login";
        }else{
        this.setState({render: eventKey});
        }
    };
    
    render(){
// This Block Renders NavBar Header Logo     
        return(
            <div>
            <span className="page-wrap">
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                        <Logo src={Optus[0].logo}/>
                        <span className='purple'>OPTUS</span>
                        <span className='orange'>RH</span>
                        </a>
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
                        <MenuItem id="basic-nav-dropdown" onClick={()=>{this.handleSelect(5)}}>Login</MenuItem>
                        <MenuItem id="basic-nav-dropdown" onClick={()=>{this.handleSelect(4)}}>Cadastro</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={6} onSelect={this.handleSelect}>Servicos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={7} onSelect={this.handleSelect}>Treinamentos</MenuItem>
                        <MenuItem id="basic-nav-dropdown" eventKey={5} onClick={()=>{this.handleSelect(5, 'ADMINISTRADOR')}}>Administrador</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{margin: '100px'}}/>
            <Grid>
                <Row className="show-grid">
{/* // This Block Render Home Inicio */}
                    {this.state.render === 0 ?
                    <span>
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
                    {OptusContact.map( contact => 
                    <span>
                    <Col sm={12}>
                        <P>Com o olhar voltado para o futuro, a <strong>OptusRh</strong> trabalha na construção 
                        de soluções integradas e flexíveis de RH.</P>
                    </Col>
                    <Col md={12}><p><a href={contact.phone}><Glyphicon glyph="earphone"/>{' '}{contact.phone}</a></p></Col>
                    <Col md={12}><p><a href={contact.whatApp}><Glyphicon glyph="whatsapp"/>{' '}{contact.whatApp}</a></p></Col>
                    <Col md={12}><p><a href={contact.email}><Glyphicon glyph="envelope"/>{' '}{contact.email}</a></p></Col>
                    <Col md={12}><p><a href={contact.facebook}><Glyphicon glyph="socialFacebook"/>{' '}Facebook OptusRH</a></p></Col>
                    <Col md={12}><p><a href={contact.linkedIn}><Glyphicon glyph="linked-in"/>{' '}LinkedIn OptusRH</a></p></Col>
                    </span>
                    )}
                    </Col>
                    </span>
                    : this.state.render === 1 ?
// This Block Renders Sobre Nos OptusRH
                    Optus.map(optus =>
                    <Col xs={12} md={10} mdOffset={1} key={optus.id}>
                        <span>
                            <h2><strong>{optus.about_header}</strong></h2>
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
                        <Col sm={12}><h2><strong>{optuspara.header_voce}</strong></h2></Col>
                        <ParaImg src={optuspara.voce_img}/>
                        <P>{optuspara.caption_voce}</P>
                        <Col sm={12}>
                        <ButtonToolbar key={optuspara.id}>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleSelect(4, 'INDIVIDUAL')}}>
                                Cadastro Individual
                            </Button>
                            <Button bsSize="large" onClick={()=>{this.handleSelect(5, 'INDIVIDUAL')}}>
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
                        <Col sm={7} key={optuspara.id}>                    
                    <span> 
                        <Col sm={12}><h2><strong>{optuspara.header_empresa}</strong></h2></Col>
                        <ParaImg src={optuspara.empresa_img}/>
                        <P>{optuspara.caption_empresa}</P>
                        <Col sm={12}>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleSelect(4, 'EMPRESARIAL')}}>
                                Cadastro Empresarial
                            </Button>
                            <Button bsSize="large" onClick={()=>{this.handleSelect(5, 'EMPRESARIAL')}}>
                                Acessar Minha Conta
                            </Button>
                        </ButtonToolbar>
                        </Col>
                    </span>
                    </Col>
                    )
                    : <span/> }
{/* //  THis Block Render Vagas Recentes */}
                    {this.state.render === 2 ?
                    <Col sm={5}>
                        <h2><strong>Vagas Recentes</strong></h2>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th><p><strong>Vagas</strong></p></th>
                                <th><p><strong>Local</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                            {OptusVagas.map(vagas => 
                                <tr key={vagas.id}>
                                <td><p>{vagas.position}</p></td>
                                <td><p>{vagas.cidade}</p></td>
                                </tr>
                            )}  
                            </tbody>
                        </Table>
                    </Col>
                    : <span/>}
                </Row>
{/* This Block Render Nossos Servicos */}
                {this.state.render === 0 || this.state.render === 2 || this.state.render === 3 ?
                OptusServicos.map(servicos =>
                    <span>
                {/* <Col md={12}><hr/></Col>
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
                    <br/>
                    <Col sm={12}><Button bsStyle="primary" bsSize="large" onClick={()=>{this.handleSelect(6)}}>Conheca Todos Nossos Servicos</Button></Col> */}
                </span>
                )
                : <span/> }
{/* This Block Render Servicos */}
                {this.state.render === 6 ?
                <Row className="show-grid">
                <Col md={10} mdOffset={1} >
                <Col md={12}><h2><strong>{OptusServicos[0].main_header}</strong></h2></Col>
                <Col md={12}><p>{OptusServicos[0].header_caption}</p></Col>
                { OptusServicos.map(servicos => 
                <span key={servicos.id}>
                {/* Condition to render not undefined values */}
                {servicos.header === undefined || servicos.img === undefined || servicos.caption === undefined ? <span/> 
                : 
                <span>
                <Col md={12}><hr/></Col>
                <Col md={12}><h3>{servicos.header}</h3></Col>
                <Col md={12}>
                    <p>
                    <ServicosImg src={servicos.img} style={{width: '33.333%', float: 'left', marginRight: '20px'}}/>
                    <p>{servicos.caption}</p>
                    </p>
                </Col>
                </span> }
                </span>
                )}
                </Col>
                </Row>
                : <span/> }
{/* This Block Render Treinamentos */}
                {this.state.render === 7 ? 
                    <Col md={10} mdOffset={1} >
                    <Col md={12}><h2><strong>{OptusTrain[0].header}</strong></h2></Col>
                    <Col md={12}><p>{OptusTrain[0].header_caption}</p></Col>
                    {OptusTrain.map(train => 
                    <span key={train.id}>
                    {train.train_header !== undefined ||  train.train_img !== undefined || train.train_caption !== undefined ? 
                    <span>
                    <Col md={12}><hr/></Col>
                    <Col md={12}><h3>{train.train_header}</h3></Col>
                    <Col md={12}>
                        <p>
                        <ServicosImg src={train.train_img} style={{width: '50%', height: '40rem', float: 'left', marginRight: '20px'}}/>
                        {train.train_caption}
                        </p>
                    </Col>
                    </span>
                    : <span/> }
                    </span>
                    )}
                </Col>
                : <span/> }
            </Grid>
            </span>
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