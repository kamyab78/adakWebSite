import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import { Button, Modal, Navbar, Nav, Carousel, Alert } from 'react-bootstrap';
import i18n from '../i18n'
import Logo from '../photo/Logo.png'
import $ from 'jquery';
import HomePhoto from '../photo/01.png'
import Web from '../photo/WebDevelop.png'
import Phone from '../photo/AppDevelop.png'
import Ui from '../photo/UiDesign.png'
import tickup1 from '../photo/Tickup/1.png'
import tickup2 from '../photo/Tickup/2.png'
import tickup3 from '../photo/Tickup/3.png'
import tickup4 from '../photo/Tickup/4.png'
import Movafagh1 from '../photo/Movafaghiat/1.png'
import Movafagh2 from '../photo/Movafaghiat/2.png'
import Movafagh3 from '../photo/Movafaghiat/3.png'
import Movafagh4 from '../photo/Movafaghiat/4.png'
import Pentago1 from '../photo/Pentago/3.png'
import Pentago2 from '../photo/Pentago/1.png'
import Pentago3 from '../photo/Pentago/2.png'
import Pentago4 from '../photo/Pentago/4.png'
import Cookland1 from '../photo/Cookland/1.png'
import Cookland2 from '../photo/Cookland/2.png'
import Cookland3 from '../photo/Cookland/3.png'
import Cookland4 from '../photo/Cookland/4.png'
import Woid1 from '../photo/Woid/9.png'
import Woid2 from '../photo/Woid/10.png'
import Woid3 from '../photo/Woid/11.png'
import Woid4 from '../photo/Woid/12.png'
import Rabt1 from '../photo/Rabt/5.png'
import Rabt2 from '../photo/Rabt/6.png'
import Rabt3 from '../photo/Rabt/7.png'
import Rabt4 from '../photo/Rabt/8.png'
import Join_right from '../photo/02.png'
import Join_left from '../photo/03.png'
import Call from '../photo/phone1.png'
import Mail from '../photo/mail.png'
import Loc from '../photo/location.png'
import lastpic from '../photo/04.png'
class Landing extends Component {
    componentDidMount() {
        $(document).ready(function () {

            $("#Home").click(function () {
                var elmnt = document.getElementById("home_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#service").click(function () {
                var elmnt = document.getElementById("service_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#por").click(function () {
                var elmnt = document.getElementById("por_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#about").click(function () {
                var elmnt = document.getElementById("about_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#contact").click(function () {
                var elmnt = document.getElementById("contact_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
            $("#join").click(function () {
                var elmnt = document.getElementById("contact_page");
                elmnt.scrollIntoView({ behavior: 'smooth' });
            })
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            phone_number: '',
            des: '',
            file: '',
            showAlert: false
        }
    }
    closeModal = () => {
        this.setState({
            modalShow: false
        })
    }
    show = () => {
        this.setState({
            modalShow: true
        })
    }
    changetext = (event) => {
        if (event.target.name === "num") {
            this.setState({
                phone_number: event.target.value
            })
        }
        if (event.target.name === "des") {
            this.setState({
                des: event.target.value
            })
        }


    }
    onChange(e) {

        console.log(e.target.files[0])
        this.setState({
            file: e.target.files[0]
        })

    }
    resume = () => {

        var myHeaders = new Headers();
        var formdata = new FormData();
        formdata.append("number", this.state.phone_number);
        formdata.append("description", this.state.des);
        formdata.append("inpfile", this.state.file);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,

        };
        fetch("http://127.0.0.1:8000/submit/", requestOptions)
            .then(response => {
                if (response.status === 201) {
                    response.json().then(rep => {
                        this.setState({
                            showAlert: true
                        })
                        //  window.location.reload()

                    })
                }
            }


            )

            .catch(error => console.log('error', error));
    }
    close = () => {
        this.setState({
            showAlert: false
        })
    }
    render() {
        return (
            < div style={{ width: '100%' }}>
                <Alert show={this.state.showAlert} onClose={this.close} variant="success" style={{ position: 'fixed' }} dismissible>
                    {i18n.t('Landing.SendSuccess')}
                </Alert>
                <Navbar expand="lg" >
                    <Navbar.Brand >
                        <img
                            alt=""
                            src={Logo}
                            width="180"
                            height="50"
                            style={{ paddingLeft: '50px' }}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: '50px' }}>
                        <Nav className='ml-auto'>
                            <Nav.Link id='Home'  style={{ paddingRight: '40px' }}>Home</Nav.Link>
                            <Nav.Link id='service'  style={{ paddingRight: '40px' }}>Services</Nav.Link>
                            <Nav.Link id='por'  style={{ paddingRight: '40px' }}>Portfolio</Nav.Link>
                            <Nav.Link id='about'  style={{ paddingRight: '40px' }}>About us</Nav.Link>
                            <Nav.Link id='contact'  style={{ marginRight: '100px', backgroundColor: '#e8505b', borderRadius: '10px', width: '100px', textAlign: 'center' }}>Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Modal
                    show={this.state.modalShow}
                    onHide={this.closeModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title  >
                            {i18n.t('Landing.sendR')}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div className='row'>


                            <div className='col-12' >
                                <div className='row' style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='col-md-4 col-sm-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <h6 >
                                            {i18n.t('Landing.num')}
                                        </h6>
                                    </div>
                                    <div className='col-md-4 col-sm-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <input onChange={this.changetext} autoComplete='off' name='num' className='inputAdd'></input>

                                    </div>

                                </div>


                            </div>


                            <div className='col-12' >
                                <div className='row' style={{ display: 'flex', flexDirection: 'row', paddingTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='col-md-4 col-sm-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <h6 >
                                            {i18n.t('Landing.des')}
                                        </h6>
                                    </div>
                                    <div className='col-md-4 col-sm-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <textarea onChange={this.changetext} autoComplete='off' name='des' className='inputAdd1'></textarea>

                                    </div>

                                </div>


                            </div>


                            <div className='col-12' style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', paddingTop: '20px' }}>

                                <input type="file" id="file" onChange={(e) => this.onChange(e)} ></input>



                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ marginRight: '20px' }} onClick={this.resume}>Submit</Button>
                    </Modal.Footer>
                </Modal>
                <div id='home_page' className='row' style={{ paddingTop: '30px' }}>
                    <div className='col-12'>

                        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{i18n.t('Landing.title')}</h1>
                        <div className='row' style={{ paddingTop: '20px' }}>
                            <div className='col-lg-2'></div>
                            <h4 className='col-sm-12 col-lg-8 tech' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "left", fontWeight:'normal' }}>
                                {i18n.t('Landing.txtHome1')}
                            </h4>
                            {/* <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                {i18n.t('Landing.txtHome2')}
                            </div>
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                {i18n.t('Landing.txtHome3')}
                            </div>
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                {i18n.t('Landing.txtHome4')}
                            </div>
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                {i18n.t('Landing.txtHome5')}
                            </div>
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                {i18n.t('Landing.txtHome6')}
                            </div> */}
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img alt='' className=' col-s-12' style={{ width: '450px' }} src={HomePhoto}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='service_page' className='row' style={{ paddingTop: '50px' }}>
                    <div className='col-12' style={{ paddingTop: '30px' }}>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{i18n.t('Landing.servicetitle')}</h1>
                        <div className='row'>
                      
                            <div>

                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-sm-12 col-md-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center", paddingTop: '30px' }}>
                                <div className='card'  >
                                    <img alt='' src={Ui} style={{ width: '90px', paddingBottom: '40px' }}></img>
                                    <h6>   {i18n.t('Landing.uitext')}</h6>
                                    <h7 style={{ fontSize: '13px' }}>{i18n.t('Landing.uitextex')}</h7>
                                </div>

                            </div>
                            <div className='col-sm-12 col-md-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center", paddingTop: '30px' }}>
                                <div className='card'  >
                                    <img alt='' src={Phone} style={{ width: '90px', paddingBottom: '40px' }}></img>
                                    <h6>   {i18n.t('Landing.apptext')}</h6>
                                    <h7 style={{ fontSize: '13px' }}>{i18n.t('Landing.apptextex')}</h7>
                                </div></div>
                            <div className='col-sm-12 col-md-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center", paddingTop: '30px' }}>

                                <div className='card'  >
                                    <img alt='' src={Web} style={{ width: '90px', paddingBottom: '40px' }}></img>
                                    <h6>   {i18n.t('Landing.webtext')}</h6>
                                    <h7 style={{ fontSize: '13px' }}> {i18n.t('Landing.webtextex')}</h7>
                                </div>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>
                </div>
                <div id='por_page' className='row' style={{ paddingTop: '50px' }}>

                    <div className='col-12'>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{i18n.t('Landing.AppTitle')}</h1>
                    </div>
                    <div className='col-12'>
                        <div className='row'>

                            <div className='col-12' >
                                <Carousel indicators={false} interval='3000' style={{ paddingTop: '10px', height: '100px', color: 'black' }}>
                                    <Carousel.Item>

                                        <div className='col-12 main_col' >
                                           
<div className='col-1'>

</div>
                                                    <div className='col-lg-2 col-md-4 changepossition' >
  <img alt='' src={tickup1} style={{ width: '200px' }}></img>
                                            </div>
                                            <div className='col-lg-3  showtxt  '>
                                                       <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                <h7 className='fonttxt'>{i18n.t('Landing.tikuptxt1')}</h7>
                                            </div>
                                                </div>
                                                <div className='col-2 showdiv '>
                                                            <img alt='' src={tickup2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                </div>
                                                <div className='col-2 showdiv'>
                                                   <img alt='' src={tickup3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                </div>
                                                <div className='col-1 showdiv'>
                                                 <img alt='' src={tickup4} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                </div>
                                     
                                        
                                          
                                     
                                
                                         
                                           

                                        </div>

                                    </Carousel.Item>


                                    <Carousel.Item>
                                    <div className='col-12 main_col' >
                                           
                                           <div className='col-1'>
                                           
                                           </div>
                                                                                               <div className='col-lg-2 col-md-4 changepossition'>
                                                                                               <img alt=''  src={Movafagh1} style={{ width: '200px' }}></img>
                                                                                       </div>
                                                                                       <div className='col-lg-3  showtxt '>
                                                                                                  <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                                                           <h7 className='fonttxt'>{i18n.t('Landing.movafaghaittxt')}</h7>
                                                                             
                                                                                       </div>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv '>
                                                                                           <img alt=''  src={Movafagh2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv'>
                                                                                           <img alt=''  src={Movafagh3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-1 showdiv'>
                                                                                           <img alt=''  src={Movafagh4} style={{ width: '180px', height: '400px' , paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                   </div>
      

                                    </Carousel.Item>


                                    <Carousel.Item>
                                    <div className='col-12 main_col'  >
                                           
                                           <div className='col-1'>
                                           
                                           </div>
                                                                                               <div className='col-lg-2 col-md-4 changepossition'>
                                                                                               <img alt=''  src={Pentago1} style={{ width: '200px' }}></img>
                                                                                       </div>
                                                                                       <div className='col-lg-3  showtxt '>
                                                                                                  <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                                                           <h7 className='fonttxt'>{i18n.t('Landing.pentagotxt')}</h7>
                                                                             
                                                                                       </div>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv '>
                                                                                           <img alt=''  src={Pentago2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv'>
                                                                                           <img alt=''  src={Pentago3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-1 showdiv'>
                                                                                           <img alt=''  src={Pentago4} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                   </div>
         
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className='col-12 main_col'  >
                                           
                                           <div className='col-1'>
                                           
                                           </div>
                                                                                               <div className='col-lg-2 col-md-4 changepossition'>
                                                                                               <img alt=''  src={Cookland1} style={{ width: '200px' }}></img>
                                                                                       </div>
                                                                                       <div className='col-lg-3  showtxt '>
                                                                                                  <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                                                           <h7 className='fonttxt'>{i18n.t('Landing.cooklandtxt')}</h7>
                                                                             
                                                                                       </div>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv '>
                                                                                           <img alt=''  src={Cookland2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv'>
                                                                                           <img alt=''  src={Cookland3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-1 showdiv'>
                                                                                           <img alt=''  src={Cookland4} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                   </div>

                             
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className='col-12 main_col' >
                                           
                                           <div className='col-1'>
                                           
                                           </div>
                                                                                               <div className='col-lg-2 col-md-4 changepossition'>
                                                                                               <img alt=''  src={Woid1} style={{ width: '200px' }}></img>
                                                                                       </div>
                                                                                       <div className='col-lg-3  showtxt '>
                                                                                                  <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                                                           <h7 className='fonttxt'>{i18n.t('Landing.woidxt')}</h7>
                                                                             
                                                                                       </div>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv '>
                                                                                           <img alt=''  src={Woid2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv'>
                                                                                           <img alt=''  src={Woid3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-1 showdiv'>
                                                                                           <img alt=''  src={Woid4} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                   </div>
                          
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <div className='col-12 main_col' >
                                           
                                           <div className='col-1'>
                                           
                                           </div>
                                                                                               <div className='col-lg-2 col-md-4 changepossition'>
                                                                                               <img alt=''  src={Rabt1} style={{ width: '200px' }}></img>
                                                                                       </div>
                                                                                       <div className='col-lg-3  showtxt '>
                                                                                                  <div style={{ display: 'flex', flexDirection: 'column', paddingTop:'40px'}}>
                                                                                           <h7 className='fonttxt'>{i18n.t('Landing.rabtxt')}</h7>
                                                                             
                                                                                       </div>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv '>
                                                                                           <img alt='' src={Rabt2} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-2 showdiv'>
                                                                                           <img alt='' src={Rabt3} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                           <div className='col-1 showdiv'>
                                                                                           <img alt=''  src={Rabt4} style={{ width: '180px', height: '400px', paddingTop: '30px' }}></img>
                                                                                           </div>
                                                                                   </div>
        
                                    </Carousel.Item>
                                </Carousel>

                            </div>


                        </div>

                    </div>

                </div>
                <div id='about_page' className='row topPad' >
                    <div className='col-12'>
                        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{i18n.t('Landing.about')}</h1>
                    </div>
                    <div className='col-12' >
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 tech ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: "left", flexDirection: 'column' }} >
                                <h2 > {i18n.t('Landing.Teamtxt')}</h2>
                                <h7>{i18n.t('Landing.txt1')}</h7>
                                <h7>{i18n.t('Landing.txt2')}</h7>
                                <h7>{i18n.t('Landing.txt3')}</h7>
                               
                            </div>
                            <div className='col-md-6 col-sm-12 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                <img alt=''  src={Join_right} style={{ width: '80% ' }}></img>
                            </div>
                        </div>

                    </div>
                    <div className='col-12' style={{ paddingTop: '50px' }}>
                        <div className='row change_row' >
                            <div className='col-md-6 col-sm-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                <img alt=''  src={Join_left} style={{ width: '80% ' }}></img>
                            </div>
                            <div className='col-md-6 col-sm-12 paddingLeft' style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', textAlign: "left", flexDirection: 'column' }} >
                                <h2 > {i18n.t('Landing.DTeamtxt')}</h2>
                                <h7>{i18n.t('Landing.txt4')}</h7>
                                {/* <Button id='join' style={{ backgroundColor: '#e8505b', width: '130px', borderRadius: '10px', borderColor: 'transparent', fontSize: '15px' }}>{i18n.t('Landing.Join')}</Button> */}
                            </div>

                        </div>

                    </div>

                </div>
                <div id='contact_page' className='row' style={{ paddingTop: '60px' }}>
                    <div className='col-12'>
                        <div className='col-12'>
                            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{i18n.t('Landing.contact')}</h1>
                        </div>
                        <div className='col-12' style={{ paddingTop: '30px' }}>
                            <h6 style={{ textAlign: 'center' }}>{i18n.t('Landing.join')}</h6>
                        </div>
                        {/* <div className='col-12' style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                            <Button onClick={this.show} style={{ width: '200px', borderRadius: '10px', fontSize: '15px', backgroundColor: 'transparent', color: 'black', borderColor: 'rgb(0,0,0,0.5)' }}>{i18n.t('Landing.sendResume')}</Button>
                        </div> */}
                        <div className='col-12' >
                            <div className='row'>


                                <div className='col-md-4 col-sm-12' style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                    <img alt=''  src={Call} style={{ width: '25px' }}></img>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <h7 >{i18n.t('Landing.number1')}</h7>
                                        <h7 >{i18n.t('Landing.number2')}</h7>
                                    </div>

                                </div>
                                <div className='col-md-4 col-sm-12' style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                    <img alt=''  src={Loc} style={{ width: '25px' }}></img>
                                    <div style={{ paddingLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                                        <h7 >{i18n.t('Landing.address1')}</h7>
                                        <h7 >{i18n.t('Landing.address2')}</h7>
                                    </div>
                                </div>
                                <div className='col-md-4 col-sm-12' style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                    <img alt=''  src={Mail} style={{ width: '25px' }}></img>
                                    <h7 style={{ paddingLeft: '10px' }}>{i18n.t('Landing.email')}</h7>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12' style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
                                    <img alt=''  src={lastpic} style={{ width: '40%', paddingBottom: '30px' }}></img>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing