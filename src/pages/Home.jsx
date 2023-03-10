import React, {useState,useEffect} from 'react';

import {Container,Row,Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img.png";

import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css';

import {Link} from "react-router-dom";
import {motion} from  "framer-motion";
import products from '../assets/data/products';

import Services from "../services/Services";
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png';


const Home = () => {

        const [trendingProducts,setTrendingProducts]=useState([]);
        const [bestSalesProducts,setBestSalesProducts]=useState([]);
        const [mobileProducts,setMobileProducts]=useState([]);
        const [wirelessProducts,setWirelessProducts]=useState([]);
        const [popularProducts,setPopularProducts]=useState([]);

  const year = new Date().getFullYear();

    useEffect(()=>{
      const filteredTrendingProducts=products.filter((item)=>item.category==='chair');
      const filteredBestSalesProducts=products.filter((item)=>item.category==='sofa');
      const filteredMobileProducts=products.filter((item)=>item.category==='mobile');
      const filteredWirelessProducts=products.filter((item)=>item.category==='wireless');
      const filteredPopularProducts=products.filter((item)=>item.category==='watch');


      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);

    },[]);

  return (
  <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col lg="6" md="6" sm="12">
            <div className="hero__content">
              <p className="hero__subtitle">Trending Product in {year}</p>
              <h2>Let's Make You More Beautiful.</h2>
              <p>
                Modern design is an interior design style characterized by a
                monochromatic color palette, clean lines, minimalism, natural
                materials, and natural light. It refers specifically to a
                historical aesthetic movement that took place during the early
                to mid-twentieth century.
              </p>

              <motion.button whileTap={{scale:1.2}}
              className='buy__btn'> <Link to='shop'>SHOP NOW</Link> </motion.button>
              </div>
              </Col>

              <Col lg="6" md="6" sm="12">
              <div className="hero__img">
                <img src={heroImg} alt="heroImage" />
              </div>
            </Col>

              </Row>
              </Container>
              </section>

              <Services/>
              <section className="trending_products">
              <Container>
                <Row>
                  <Col lg='12' className='text-center'>
                    <h2 className='section__title'>Trending Products</h2>
                  </Col>
                  <ProductsList data={trendingProducts}/>


                </Row>
              </Container>

              </section>

              <section className="best__sales">
              <Container>

              <Row>
                  <Col lg='12' className='text-center'>
                    <h2 className='section__title'>Best Sales</h2>
                  </Col>
                  <ProductsList data={bestSalesProducts}/>

                </Row>

              </Container>
              </section>

              <section className='timer__count'>
              <Container>
              <Row>
                <Col lg='6' md='12' className='count__down-col'>
                <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2'> Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                </div>
                <Clock/>

                <motion.button
                whileTap={{scale:1.2}}
                 className='store__btn'>
                <Link to='/shop'>Visit Stores </Link>
                </motion.button>

                </Col>

                <Col lg='6' md='12' className='text-end counter__img'>
                <img src={counterImg} alt=''/>
                </Col>
              </Row>

              </Container>


              </section>

              <section className='new__arrivals'>
                <Container>
                  <Row>
                  <Col lg='12' className='text-center mb-5'>
                    <h2 className='section__title'>New Arrivals</h2>
                  </Col>
                  <ProductsList data={mobileProducts}/>
                  <ProductsList data={wirelessProducts}/>
                  </Row>
                </Container>
              </section>


              <section className='popular_category'>
              <Container>
                  <Row>
                  <Col lg='12' className='text-center'>
                    <h2 className='section__title'>Popular in Category</h2>
                  </Col>
                  <ProductsList data={popularProducts}/>
                  
                  </Row>
                </Container>

              </section>

              </Helmet>
              );
              };


              export default Home;