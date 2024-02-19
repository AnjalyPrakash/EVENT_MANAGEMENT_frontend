import React, { useEffect, useState } from 'react'
import './Pages.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Video from '../Media/video.mp4'
import Footer from '../Components/Footer'

function HomePage() {

    const [token, setToken] = useState("")

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    return (
        <div>
            <Row className='bg-black'>
                <Col md={4}>
                    <img style={{ height: '100vh', width: '100%' }} src="https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/07/How-to-organise-music-concert-768x549.jpg" alt="" />
                </Col >
                <Col md={4}>
                    <img style={{ height: '100vh', width: '100%' }} src="https://p1.pxfuel.com/preview/230/373/111/dark-dj-turntable-hand-music.jpg" alt="" />
                    <div className="centered">
                        <h2 className='beat-burst text-center text-white'>BEAT BURST</h2>
                        {token ? <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'green' }}><button style={{ backgroundColor: 'orange' }} className='btn ouline-white w-100 mt-2 fw-bold' >DASHBOARD <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            : <Link to={'/auth'} style={{ textDecoration: 'none', color: 'green' }}><button style={{ backgroundColor: 'orange' }} className='btn ouline-white w-100 mt-2 fw-bold' >Get Started</button></Link>
                        }
                    </div>
                </Col>
                <Col md={4}>
                    <img style={{ height: '100vh', width: '100%' }} src="https://ddex.co.uk/wp-content/uploads/2018/10/Live-Music-Events-Stand-Design.jpg" alt="" />
                </Col>
            </Row>
            {/* ------------------------------------------------------------------------------------------------------------ */}

            <div className='about mt-5 mb-5 ' >
                <Container>
                    <Row>
                        <Col md={3}>
                            <img src="https://img.freepik.com/free-photo/dj-party_74658-146.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=ais" style={{ height: '500px', width: '100%' }} alt="" />
                        </Col>
                        <Col md={3} className='mt-5'>
                            <img src="https://media.istockphoto.com/id/1148625127/vi/anh/tay-tr%E1%BB%91ng-ch%C6%A1i-tr%E1%BB%91ng-tr%C3%AAn-s%C3%A2n-kh%E1%BA%A5u.jpg?s=612x612&w=0&k=20&c=ZslWB8TX00HW5riLucL3R1sZ_tHtNwU6c3AWIvptQJQ=" style={{ height: '500px', width: '100%' }} alt="" />
                        </Col>
                        <Col md={6} className='mt-5'>
                            <b><h2 className='text-center text-danger mt-5 mb-3' style={{ fontFamily: 'Cinzel, serif' }}>ABOUT US</h2></b>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum, saepe corrupti reiciendis est ut sed eum nihil libero commodi neque. Sint, cum expedita. Fugiat ea recusandae incidunt enim impedit.</p>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos minus deserunt sed non numquam alias iste corporis excepturi odio deleniti totam maxime labore, molestiae magni consequuntur mollitia facilis tenetur.</p>
                            <Container>
                                <Row>
                                    <Col md={4} className='shadow mt-3 p-2'>
                                        <h1 className='text-center mt-2 text-secondary'><i class="fa-solid fa-microphone"></i></h1>
                                        <h4 className='text-center' style={{ color: 'brown' }}>10 Speakers</h4>
                                        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </Col>
                                    <Col md={4} className='shadow mt-3 p-2'>
                                        <h1 className='text-center mt-2 text-secondary' style={{ color: 'brown' }}><i class="fa-solid fa-bullhorn"></i></h1>
                                        <h4 className='text-center' style={{ color: 'brown' }}>Live Broadcast</h4>
                                        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </Col>
                                    <Col md={4} className='shadow mt-3 p-2'>
                                        <h1 className='text-center mt-2 text-secondary'><i class="fa-solid fa-rocket"></i></h1>
                                        <h4 className='text-center' style={{ color: 'brown' }}>5 Hrs Marathon</h4>
                                        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- */}

            <div className='video mt-5 mb-5'>
                <div className='layer'>
                    <h1 className='justify-content-center d-flex align-items-center fw-bolder' style={{ color: 'red', fontFamily: 'Cinzel, serif' }}> <br /> <br /><br />  Let's Get This Party Started!</h1> <br />
                    <a href={Video}><i class="fa-solid fa-circle-play fa-5x " style={{ color: 'lightblue' }}></i></a>
                </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <div className='services mb-5'>
                <Container>
                    <h2 className='text-center text-danger mb-5'>Services</h2>
                    <Row className='mt-5'>
                        <Col md={3}>
                            <div className='mb-3' style={{ height: '55px', width: '55px', borderRadius: '65px', backgroundColor: 'orange', color: 'white', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '120px' }}><h2 className='mt-2'><i class="fa-solid fa-music"></i></h2></div>
                            <h5 className='text-center'>DJ Music</h5>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid</p>
                        </Col>
                        <Col md={3}>
                            <div className='mb-3' style={{ height: '55px', width: '55px', borderRadius: '65px', backgroundColor: 'orange', color: 'white', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '120px' }}><h2 className='mt-2'><i class="fa-solid fa-star"></i></h2></div>
                            <h5 className='text-center'>Fireworks</h5>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid</p>
                        </Col>
                        <Col md={3}>
                            <div className='mb-3' style={{ height: '55px', width: '55px', borderRadius: '65px', backgroundColor: 'orange', color: 'white', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '120px' }}><h2 className='mt-3'><i class="fa-solid fa-martini-glass-empty"></i></h2></div>
                            <h5 className='text-center'>Food & Drinks</h5>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid</p>
                        </Col>
                        <Col md={3}>
                            <div className='mb-3' style={{ height: '55px', width: '55px', borderRadius: '65px', backgroundColor: 'orange', color: 'white', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '120px' }}><h2 className='mt-2'><i class="fa-solid fa-compact-disc"></i></h2></div>
                            <h5 className='text-center'>Rain Dance</h5>
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />

        </div>
    )
}

export default HomePage