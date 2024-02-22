/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Scroll from './Scroll';
import Middle from "./Middle";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Head from "./Head";
import Hymn from './Hymn';
import About from "./About";
import Member from './Member';
import Service from './Service';
import Heading from './Hymn';
import Footer from './Footer';

const Home = () => (
  <>
    <Navbar />
    <Head />
    <About />
    <Scroll />
    <Service />
    <Middle />
    <Hymn />
    <Member />
    <Footer />
  </>
);

export default Home;